/**
 * CHARTS.JS v5.0 - SVG & HTML Chart Renderers
 * Pyramid: Diamond Layout v5 — reference-accurate labels beside each peak node
 */
'use strict';

const NumerologyCharts = {

  // ─── 1. Line Chart: Chu kỳ vận số cá nhân ───────────────────────────────────
  drawLineChart(containerId, dataPoints) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const W = 640, H = 210;
    const padL = 20, padR = 12, padT = 58, padB = 34;
    const chartW = W - padL - padR;
    const chartH = H - padT - padB;
    const n = dataPoints.length;
    const xStep = chartW / (n - 1);

    const scaleY = v => padT + chartH - ((v - 1) / 8) * chartH;
    const scaleX = i => padL + i * xStep;
    const curIdx = dataPoints.findIndex(pt => pt.isCurrent);

    const tension = 0.38;
    const buildSmooth = points => {
      if (points.length < 2) return `M ${points[0][0]} ${points[0][1]}`;
      let d = `M ${points[0][0]} ${points[0][1]}`;
      for (let i = 0; i < points.length - 1; i++) {
        const p0 = points[Math.max(i - 1, 0)];
        const p1 = points[i];
        const p2 = points[i + 1];
        const p3 = points[Math.min(i + 2, points.length - 1)];
        const cp1x = p1[0] + (p2[0] - p0[0]) * tension;
        const cp1y = p1[1] + (p2[1] - p0[1]) * tension;
        const cp2x = p2[0] - (p3[0] - p1[0]) * tension;
        const cp2y = p2[1] - (p3[1] - p1[1]) * tension;
        d += ` C ${cp1x.toFixed(1)} ${cp1y.toFixed(1)}, ${cp2x.toFixed(1)} ${cp2y.toFixed(1)}, ${p2[0].toFixed(1)} ${p2[1].toFixed(1)}`;
      }
      return d;
    };

    const pts = dataPoints.map((pt, i) => [scaleX(i), scaleY(pt.value)]);
    const smoothLine = buildSmooth(pts);
    const baseY = H - padB;

    let ghostNums = '';
    dataPoints.forEach((pt, i) => {
      const cx = scaleX(i), cy = scaleY(pt.value);
      ghostNums += `<text x="${cx}" y="${cy + 30}" fill="#3b82f6" fill-opacity="0.07" font-size="46" font-weight="900" text-anchor="middle" font-family="'Outfit','Inter',sans-serif">${pt.value}</text>`;
    });

    let gridLines = '';
    [1, 3, 6, 9].forEach(v => {
      const gy = scaleY(v);
      gridLines += `<line x1="${padL}" y1="${gy.toFixed(1)}" x2="${W - padR}" y2="${gy.toFixed(1)}" stroke="#dde8f8" stroke-width="1" stroke-dasharray="4 3"/>
      <text x="${padL - 5}" y="${(gy + 4).toFixed(1)}" fill="#b0bcd4" font-size="10" text-anchor="end" font-family="'Inter',sans-serif">${v}</text>`;
    });

    let dotsLabels = '';
    dataPoints.forEach((pt, i) => {
      const cx = scaleX(i), cy = scaleY(pt.value);
      const isCur = (curIdx >= 0 && i === curIdx);
      const dotFill = isCur ? '#ef4444' : '#1e40af';
      const numFill = isCur ? '#ef4444' : '#1a3270';
      const yearFill = isCur ? '#ef4444' : '#8fa0be';
      const yearW = isCur ? '700' : '400';
      const labelY = cy - 16;
      dotsLabels += `
      <circle cx="${cx.toFixed(1)}" cy="${cy.toFixed(1)}" r="9" fill="${dotFill}" fill-opacity="0.14"/>
      <circle cx="${cx.toFixed(1)}" cy="${cy.toFixed(1)}" r="4.5" fill="${dotFill}"/>
      <text x="${cx.toFixed(1)}" y="${labelY.toFixed(1)}" fill="${numFill}" font-size="13" font-weight="800" text-anchor="middle" font-family="'Outfit','Inter',sans-serif">${pt.value}</text>
      <text x="${cx.toFixed(1)}" y="${(H - 7).toFixed(1)}" fill="${yearFill}" font-size="11" font-weight="${yearW}" text-anchor="middle" font-family="'Inter','Outfit',sans-serif">${pt.label}</text>`;
    });

    const svg = `<svg viewBox="0 0 ${W} ${H}" style="width:100%;height:100%;display:block;" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="lc-area-grad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.2"/>
      <stop offset="100%" stop-color="#3b82f6" stop-opacity="0.01"/>
    </linearGradient>
    <filter id="lc-dot-glow">
      <feDropShadow dx="0" dy="1" stdDeviation="2.5" flood-color="#3b82f6" flood-opacity="0.35"/>
    </filter>
  </defs>
  <rect x="1" y="1" width="${W - 2}" height="${H - 2}" rx="14" ry="14" fill="#f4f8ff" stroke="#dde8f8" stroke-width="1.2"/>
  ${gridLines}
  ${ghostNums}
  <path d="${smoothLine} L ${scaleX(n - 1).toFixed(1)} ${baseY} L ${scaleX(0).toFixed(1)} ${baseY} Z" fill="url(#lc-area-grad)"/>
  <path d="${smoothLine}" fill="none" stroke="#3b82f6" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/>
  ${dotsLabels}
</svg>`;

    container.innerHTML = svg;
    container.style.background = 'transparent';
  },

  // ─── 2. Pyramid Chart SVG (Diamond Layout v5) ──────────────────────────────
  getPyramidChartSvg(peaks, challenges, input) {
    const p = peaks || [];
    const ch = challenges || [];
    const inp = input || {};
    const nv = v => (v !== undefined && v !== null) ? String(v) : '?';

    // ── Canvas 700×600, tâm = (350, 300) ────────────────────────────────────
    // Positions:
    //   Left  base : ( 80, 300)  Tháng
    //   Center base: (350, 300)  Ngày
    //   Right base : (620, 300)  Năm
    //   P1 upper-L : (200, 200)
    //   P2 upper-R : (500, 200)
    //   P3 upper   : (350, 120)
    //   P4 apex    : (350,  45)
    //   C1 lower-L : (200, 400)
    //   C2 lower-R : (500, 400)
    //   C3 lower   : (350, 480)
    //   C4 nadir   : (350, 555)

    const R = 24;   // bán kính node đỉnh cao
    const RC = 22;   // bán kính node thử thách
    const RB = 23;   // bán kính base nodes
    const BLUE = '#1a52a8';
    const PEAKFILL = '#1e3a8a';
    const CHALLFILL = '#64748b';
    const LINECLR = '#2563eb';

    // Parse period string → { age, year }
    const parsePeriod = str => {
      if (!str) return { age: '', year: '' };
      const am = str.match(/(\d[\d\-–]+)\s*tuổi/i);
      const ym = str.match(/\(([^)]+)\)/);
      return {
        age: am ? am[1] + ' tuổi' : '',
        year: ym ? ym[1] : ''
      };
    };

    // Line helper
    const L = (x1, y1, x2, y2, w, color) =>
      `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color || LINECLR}" stroke-width="${w || 1.8}" stroke-linecap="round"/>`;

    // Peak node (filled blue, white text)
    const peakCirc = (cx, cy, r, num, fs) => {
      const n = nv(num);
      return `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${PEAKFILL}" stroke="white" stroke-width="2.5" filter="url(#node-shadow)"/>` +
        `<text x="${cx}" y="${cy}" font-family="'Outfit', 'Inter', sans-serif" font-size="${fs || 18}" font-weight="800" text-anchor="middle" dominant-baseline="central" fill="white">${n}</text>`;
    };

    // Challenge node (white fill, gray stroke)
    const challCirc = (cx, cy, r, num, fs) => {
      const n = nv(num);
      return `<circle cx="${cx}" cy="${cy}" r="${r}" fill="white" stroke="${CHALLFILL}" stroke-width="2" filter="url(#node-shadow)"/>` +
        `<text x="${cx}" y="${cy}" font-family="'Outfit', 'Inter', sans-serif" font-size="${fs || 16}" font-weight="700" text-anchor="middle" dominant-baseline="central" fill="${CHALLFILL}">${n}</text>`;
    };

    // Base node (white fill, blue stroke)
    const baseCirc = (cx, cy, r, num, fs) => {
      const n = nv(num);
      return `<circle cx="${cx}" cy="${cy}" r="${r}" fill="white" stroke="${BLUE}" stroke-width="2.5" filter="url(#node-shadow)"/>` +
        `<text x="${cx}" y="${cy}" font-family="'Outfit', 'Inter', sans-serif" font-size="${fs || 16}" font-weight="700" text-anchor="middle" dominant-baseline="central" fill="${BLUE}">${n}</text>`;
    };

    // Period label helper — đọc trực tiếp từ data field thay vì parse text
    const periodLabel = (peak, cx, cy, side) => {
      if (!peak) return '';
      const as = peak.age_start, ae = peak.age_end;
      const ys = peak.year_start, ye = peak.year_end;
      if (as === undefined) return ''; // không có data

      const ageTxt = ae !== null ? `${as}–${ae} tuổi` : `${as}+ tuổi`;
      const yearTxt = ye !== null ? `(${ys} – ${ye})` : `(${ys}+)`;

      let tx, ty0, anchor;
      if (side === 'left') {
        tx = cx - R - 8; ty0 = cy - 8; anchor = 'end';
      } else if (side === 'right') {
        tx = cx + R + 8; ty0 = cy - 8; anchor = 'start';
      } else if (side === 'above-right') {
        tx = cx + R + 8; ty0 = cy - 10; anchor = 'start';
      } else {
        tx = cx; ty0 = cy + R + 14; anchor = 'middle';
      }
      return `<text x="${tx}" y="${ty0}"      font-family="'Outfit','Inter',sans-serif" font-size="11" font-weight="700" text-anchor="${anchor}" fill="${BLUE}">${ageTxt}</text>` +
        `<text x="${tx}" y="${ty0 + 15}" font-family="'Outfit','Inter',sans-serif" font-size="9.5"  font-weight="400" text-anchor="${anchor}" fill="${BLUE}" font-style="italic">${yearTxt}</text>`;
    };

    const rdMonth = nv(p[0]?.base_month ?? inp.month);
    const rdDay = nv(p[1]?.base_day ?? inp.day);
    const rdYear = nv(p[2]?.base_year ?? inp.year);

    return `
    <svg viewBox="0 0 700 600" style="width:100%;max-width:680px;display:block;margin:0 auto;" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="node-shadow" x="-25%" y="-25%" width="150%" height="150%">
          <feDropShadow dx="0" dy="3" stdDeviation="5" flood-color="#1e3a8a" flood-opacity="0.18"/>
        </filter>
      </defs>

      <!-- Section labels -->
      <text x="12" y="172" font-family="'Outfit','Inter',sans-serif" font-size="11" font-weight="800" letter-spacing="1" fill="${BLUE}" opacity="0.85">PHẦN</text>
      <text x="12" y="187" font-family="'Outfit','Inter',sans-serif" font-size="11" font-weight="800" letter-spacing="1" fill="${BLUE}" opacity="0.85">ĐỈNH CAO</text>
      <text x="12" y="418" font-family="'Outfit','Inter',sans-serif" font-size="11" font-weight="800" letter-spacing="1" fill="${CHALLFILL}" opacity="0.85">PHẦN</text>
      <text x="12" y="433" font-family="'Outfit','Inter',sans-serif" font-size="11" font-weight="800" letter-spacing="1" fill="${CHALLFILL}" opacity="0.85">THỬ THÁCH</text>

      <!-- Horizontal center divider -->
      <line x1="58" y1="300" x2="642" y2="300" stroke="${BLUE}" stroke-width="1" stroke-opacity="0.2" stroke-dasharray="6,5"/>

      <!-- Skeleton lines (drawn BEFORE circles) -->
      <!-- Upper diamond -->
      ${L(80, 300, 200, 200)}
      ${L(350, 300, 200, 200)}
      ${L(350, 300, 500, 200)}
      ${L(620, 300, 500, 200)}
      ${L(200, 200, 350, 120)}
      ${L(500, 200, 350, 120)}
      ${L(350, 120, 350, 68)}
      <!-- Lower diamond -->
      ${L(80, 300, 200, 400, 1.5, '#94a3b8')}
      ${L(350, 300, 200, 400, 1.5, '#94a3b8')}
      ${L(350, 300, 500, 400, 1.5, '#94a3b8')}
      ${L(620, 300, 500, 400, 1.5, '#94a3b8')}
      ${L(200, 400, 350, 480, 1.5, '#94a3b8')}
      ${L(500, 400, 350, 480, 1.5, '#94a3b8')}
      ${L(350, 480, 350, 532, 1.5, '#94a3b8')}

      <!-- ── Nhãn period BÊN CẠNH số P1-P4 (theo ảnh tham chiếu) ── -->
      <!-- P1 (200,200): label bên trái -->
      ${periodLabel(p[0], 200, 200, 'left')}
      <!-- P2 (500,200): label bên phải -->
      ${periodLabel(p[1], 500, 200, 'right')}
      <!-- P3 (350,120): label bên trái -->
      ${periodLabel(p[2], 350, 120, 'left')}
      <!-- P4 (350,45): label bên phải của apex -->
      ${periodLabel(p[3], 350, 45, 'above-right')}

      <!-- ── Đỉnh cao (Peak circles — filled blue) ── -->
      ${peakCirc(200, 200, R, p[0]?.number, 18)}
      ${peakCirc(500, 200, R, p[1]?.number, 18)}
      ${peakCirc(350, 120, R, p[2]?.number, 18)}
      ${peakCirc(350, 45, R, p[3]?.number, 18)}

      <!-- ── Thử thách (Challenge circles — white/gray) ── -->
      ${challCirc(200, 400, RC, ch[0]?.number, 16)}
      ${challCirc(500, 400, RC, ch[1]?.number, 16)}
      ${challCirc(350, 480, RC, ch[2]?.number, 16)}
      ${challCirc(350, 555, RC, ch[3]?.number, 16)}

      <!-- ── Base nodes (Tháng / Ngày / Năm) ── -->
      ${baseCirc(80, 300, RB, rdMonth, 16)}
      <text x="80"  y="${300 + RB + 15}" font-family="'Outfit','Inter',sans-serif" font-size="10" font-weight="700" text-anchor="middle" fill="${BLUE}">Tháng ${inp.month || ''}</text>

      ${baseCirc(350, 300, RB, rdDay, 16)}
      <text x="350" y="${300 + RB + 15}" font-family="'Outfit','Inter',sans-serif" font-size="10" font-weight="700" text-anchor="middle" fill="${BLUE}">Ngày ${inp.day || ''}</text>

      ${baseCirc(620, 300, RB, rdYear, 16)}
      <text x="620" y="${300 + RB + 15}" font-family="'Outfit','Inter',sans-serif" font-size="10" font-weight="700" text-anchor="middle" fill="${BLUE}">${inp.year || ''}</text>

    </svg>`;
  },

  // ─── 3. Birth Grid 3x3 ────────────────────────────────────────────────────
  getBirthGridHtml(dobStr) {
    return this._makeGrid(dobStr.replace(/[^0-9]/g, ''));
  },

  // ─── 4. Name Grid 3x3 ─────────────────────────────────────────────────────
  getNameGridHtml(fullName) {
    const P = { A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8, I: 9, J: 1, K: 2, L: 3, M: 4, N: 5, O: 6, P: 7, Q: 8, R: 9, S: 1, T: 2, U: 3, V: 4, W: 5, X: 6, Y: 7, Z: 8 };
    const norm = fullName.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'D').replace(/[^\x00-\x7F]/g, '').toUpperCase();
    const digits = norm.split('').map(c => P[c]).filter(Boolean).join('');
    return this._makeGrid(digits);
  },

  // ─── 5. Combined Grid ─────────────────────────────────────────────────────
  getCombinedGridHtml(dobStr, fullName) {
    const P = { A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8, I: 9, J: 1, K: 2, L: 3, M: 4, N: 5, O: 6, P: 7, Q: 8, R: 9, S: 1, T: 2, U: 3, V: 4, W: 5, X: 6, Y: 7, Z: 8 };
    const dobDigits = dobStr.replace(/[^0-9]/g, '');
    const norm = fullName.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'D').replace(/[^\x00-\x7F]/g, '').toUpperCase();
    const nameDigits = norm.split('').map(c => P[c]).filter(Boolean).join('');
    return this._makeGrid(dobDigits + nameDigits);
  },

  // ─── INTERNAL: make 3×3 grid ──────────────────────────────────────────────
  _makeGrid(digits) {
    const cells = { 1: '', 2: '', 3: '', 4: '', 5: '', 6: '', 7: '', 8: '', 9: '' };
    for (const d of digits) {
      const n = parseInt(d);
      if (n >= 1 && n <= 9) cells[n] += d;
    }
    const cell = n => `<div class="grid-cell ${cells[n] ? 'has-value' : 'empty'}">${cells[n] || '·'}</div>`;
    return `
    <div class="grid-3x3">
      ${cell(3)}${cell(6)}${cell(9)}
      ${cell(2)}${cell(5)}${cell(8)}
      ${cell(1)}${cell(4)}${cell(7)}
    </div>`;
  }
};
