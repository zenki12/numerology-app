/**
 * CHARTS.JS v2.0 - SVG & HTML Chart Renderers
 * Added: getNameGridHtml, getCombinedGridHtml
 */
'use strict';

const NumerologyCharts = {

  // ─── 1. Line Chart: Chu kỳ vận số cá nhân ───────────────────────────────────
  drawLineChart(containerId, dataPoints) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const W = 580, H = 180;
    const padL = 30, padR = 20, padT = 30, padB = 40;
    const chartW = W - padL - padR;
    const chartH = H - padT - padB;
    const n = dataPoints.length;
    const xStep = chartW / (n - 1);

    // Scale: values 1–9
    const scaleY = v => padT + chartH - ((v - 1) / 8) * chartH;
    const scaleX = i => padL + i * xStep;

    let svg = `<svg viewBox="0 0 ${W} ${H}" style="width:100%;height:100%;" xmlns="http://www.w3.org/2000/svg">`;

    // Grid lines & Y labels
    for (let v = 1; v <= 9; v++) {
      const y = scaleY(v);
      svg += `<line x1="${padL}" y1="${y}" x2="${W - padR}" y2="${y}" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>`;
      if (v % 3 === 0 || v === 1) {
        svg += `<text x="${padL - 6}" y="${y + 4}" fill="#94a3b8" font-size="11" text-anchor="end">${v}</text>`;
      }
    }

    // Area fill
    let areaPath = `M ${scaleX(0)} ${scaleY(dataPoints[0].value)}`;
    dataPoints.forEach((pt, i) => { if (i > 0) areaPath += ` L ${scaleX(i)} ${scaleY(pt.value)}`; });
    const bottomLeft = `L ${scaleX(n - 1)} ${H - padB} L ${scaleX(0)} ${H - padB} Z`;
    svg += `<path d="${areaPath} ${bottomLeft}" fill="rgba(34,197,94,0.10)"/>`;

    // Line
    let linePath = `M ${scaleX(0)} ${scaleY(dataPoints[0].value)}`;
    dataPoints.forEach((pt, i) => { if (i > 0) linePath += ` L ${scaleX(i)} ${scaleY(pt.value)}`; });
    svg += `<path d="${linePath}" fill="none" stroke="#22c55e" stroke-width="2.5" stroke-linejoin="round"/>`;

    // Circles, value labels, year labels
    dataPoints.forEach((pt, i) => {
      const cx = scaleX(i), cy = scaleY(pt.value);
      svg += `<circle cx="${cx}" cy="${cy}" r="4" fill="#0f172a" stroke="#22c55e" stroke-width="2"/>`;
      svg += `<text x="${cx}" y="${cy - 9}" fill="white" font-size="11" font-weight="600" text-anchor="middle">${pt.value}</text>`;
      svg += `<text x="${cx}" y="${H - 6}" fill="#94a3b8" font-size="10" text-anchor="middle">${pt.label}</text>`;
    });

    svg += `</svg>`;
    container.innerHTML = svg;
  },

  // ─── 2. Pyramid Chart SVG (Diamond Layout v3 — matches reference image) ───────
  getPyramidChartSvg(peaks, challenges, input) {
    const p   = peaks      || [];
    const ch  = challenges || [];
    const inp = input      || {};
    const n   = v => (v !== undefined && v !== null) ? v : '?';

    // ── Coordinates (diamond geometry) ──────────────────────────────────────────
    // Canvas: 560 × 520 (viewBox). Center = 280, 260.
    // Row Mid : Left=80, Center=280, Right=480  y=260  (Tháng / Ngày / Năm)
    // Peak 1  : upper-left  (160, 170)
    // Peak 2  : upper-right (400, 170)
    // Peak 3  : upper-mid   (280, 90)
    // Peak 4  : apex        (280, 20)   ← top
    // Chal 1  : lower-left  (160, 350)
    // Chal 2  : lower-right (400, 350)
    // Chal 3  : lower-mid   (280, 430)
    // Chal 4  : nadir       (280, 500)  ← bottom

    const R  = 22;  // node radius
    const RP = 20;  // base node radius

    // Parse period string → (tuổi, year)
    const parsePeriod = str => {
      if (!str) return { age: '', year: '' };
      const am = str.match(/(\d[\d\-]+)\s*tuổi/i);
      const ym = str.match(/\(([^)]+)\)/);
      return { age: am ? am[1] + ' tuổi' : '', year: ym ? ym[1] : '' };
    };

    const pk = i => p[i] || {};
    const cv = i => ch[i] || {};
    const period = i => parsePeriod(pk(i).period);

    // ── Helpers: circle + number ─────────────────────────────────────────────────
    const baseNode = (cx, cy, num, lbl, lblPos) => {
      const [lx, ly, anchor] = lblPos;
      return `
        <circle cx="${cx}" cy="${cy}" r="${RP}" fill="white" stroke="#2563eb" stroke-width="2.5"/>
        <text x="${cx}" y="${cy + 5}" font-size="14" font-weight="700" text-anchor="middle" dominant-baseline="middle" fill="#1e3a8a">${n(num)}</text>
        <text x="${lx}" y="${ly}" font-size="11" font-weight="600" text-anchor="${anchor}" fill="#1e40af">${lbl}</text>`;
    };

    const peakNode = (cx, cy, num, i) => {
      const pd = period(i);
      // Offset label so it never crosses the circle
      // Peaks: P0=upper-left→label left+above, P1=upper-right→label right+above, P2=up-center→label above
      const offsets = [
        [-R-4, -R-2, 'end'],    // P1: left side
        [ R+4, -R-2, 'start'],  // P2: right side
        [    0, -R-4, 'middle'], // P3: center (above)
        [    0, -R-4, 'middle'], // P4: apex
      ];
      const [dx, dy, anchor] = offsets[i] || [0, -R-4, 'middle'];
      const lx = cx + dx, ly = cy + dy;
      return `
        <circle cx="${cx}" cy="${cy}" r="${R}" fill="#dbeafe" stroke="#2563eb" stroke-width="2.5"/>
        <text x="${cx}" y="${cy + 5}" font-size="16" font-weight="700" text-anchor="middle" dominant-baseline="middle" fill="#1e3a8a">${n(num)}</text>
        ${pd.age  ? `<text x="${lx}" y="${ly}"      font-size="10" font-weight="600" text-anchor="${anchor}" fill="#1e40af">${pd.age}</text>`  : ''}
        ${pd.year ? `<text x="${lx}" y="${ly + 12}"  font-size="9"  text-anchor="${anchor}" fill="#3b82f6" font-style="italic">${pd.year}</text>` : ''}`;
    };

    const chalNode = (cx, cy, num, i) => {
      const offsets = [
        [-R-4,  R+12, 'end'],   // C1: lower-left
        [ R+4,  R+12, 'start'], // C2: lower-right
        [    0,  R+14, 'middle'],// C3: lower-center
        [    0,  R+14, 'middle'],// C4: nadir
      ];
      const [dx, dy, anchor] = offsets[i] || [0, R+14, 'middle'];
      return `
        <circle cx="${cx}" cy="${cy}" r="${R}" fill="#eff6ff" stroke="#93c5fd" stroke-width="2"/>
        <text x="${cx}" y="${cy + 5}" font-size="16" font-weight="700" text-anchor="middle" dominant-baseline="middle" fill="#1e3a8a">${n(num)}</text>`;
    };

    // ── Draw lines first (behind circles) ────────────────────────────────────────
    // Base → peaks
    const L = (x1,y1,x2,y2,dash='') => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#2563eb" stroke-width="1.8"${dash}/>`; 
    const LD = (x1,y1,x2,y2) => L(x1,y1,x2,y2,` stroke-dasharray="6,4" stroke="#93c5fd"`);

    return `
    <svg viewBox="0 0 560 520" style="width:100%;max-width:560px;display:block;margin:0 auto;" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <style>
          .pyr-section-lbl { font-size:11px; font-weight:700; fill:#64748b; letter-spacing:.04em; }
        </style>
      </defs>

      <!-- Section labels (left margin) -->
      <text x="12" y="95"  class="pyr-section-lbl">PHẦN</text>
      <text x="12" y="109" class="pyr-section-lbl">ĐỈNH CAO</text>
      <text x="12" y="360" class="pyr-section-lbl">PHẦN</text>
      <text x="12" y="374" class="pyr-section-lbl">THỬ THÁCH</text>

      <!-- Horizontal divider -->
      <line x1="60" y1="260" x2="500" y2="260" stroke="#e2e8f0" stroke-width="1" stroke-dasharray="4,4"/>

      <!-- ── LINES (drawn before circles so circles appear on top) ─────────── -->
      <!-- Base to P1 (upper-left) -->
      ${L(80,260, 160,170)}
      ${L(280,260, 160,170)}
      <!-- Base to P2 (upper-right) -->
      ${L(280,260, 400,170)}
      ${L(480,260, 400,170)}
      <!-- P1,P2 to P3 (upper-center) -->
      ${L(160,170, 280,90)}
      ${L(400,170, 280,90)}
      <!-- P3 to P4 (apex) -->
      ${L(280,90, 280,42)}

      <!-- Base to C1 (lower-left) -->
      ${L(80,260, 160,350)}
      ${L(280,260, 160,350)}
      <!-- Base to C2 (lower-right) -->
      ${L(280,260, 400,350)}
      ${L(480,260, 400,350)}
      <!-- C1,C2 to C3 (lower-center) -->
      ${L(160,350, 280,430)}
      ${L(400,350, 280,430)}
      <!-- C3 to C4 (nadir) -->
      ${L(280,430, 280,478)}

      <!-- ── CHALLENGE LABELS (outside circles, below) ──────────────────────── -->
      <!-- C1 label: left of circle -->
      <text x="${160-R-6}" y="350" font-size="10" font-weight="600" text-anchor="end" dominant-baseline="middle" fill="#64748b">Thử thách 1</text>
      <!-- C2 label: right of circle -->
      <text x="${400+R+6}" y="350" font-size="10" font-weight="600" text-anchor="start" dominant-baseline="middle" fill="#64748b">Thử thách 2</text>
      <!-- C3 label: above circle -->
      <text x="280" y="${430-R-6}" font-size="10" font-weight="600" text-anchor="middle" fill="#64748b">Thử thách 3</text>
      <!-- C4 label: below circle -->
      <text x="280" y="${478+R+12}" font-size="10" font-weight="600" text-anchor="middle" fill="#64748b">Thử thách 4</text>

      <!-- ── PEAK LABELS (dedicated, outside circles, above) ─────────────────── -->
      <!-- P1 label: to the left -->
      <text x="${160-R-6}" y="${170-14}" font-size="10" font-weight="600" text-anchor="end" fill="#1e40af">Đỉnh 1</text>
      ${(()=>{ const pd=period(0); return pd.age  ? `<text x="${160-R-6}" y="${170-2}"  font-size="10" text-anchor="end"   fill="#1e40af">${pd.age}</text>`  : ''; })()}
      ${(()=>{ const pd=period(0); return pd.year ? `<text x="${160-R-6}" y="${170+10}" font-size="9"  text-anchor="end"   fill="#3b82f6" font-style="italic">${pd.year}</text>` : ''; })()}

      <!-- P2 label: to the right -->
      <text x="${400+R+6}" y="${170-14}" font-size="10" font-weight="600" text-anchor="start" fill="#1e40af">Đỉnh 2</text>
      ${(()=>{ const pd=period(1); return pd.age  ? `<text x="${400+R+6}" y="${170-2}"  font-size="10" text-anchor="start" fill="#1e40af">${pd.age}</text>`  : ''; })()}
      ${(()=>{ const pd=period(1); return pd.year ? `<text x="${400+R+6}" y="${170+10}" font-size="9"  text-anchor="start" fill="#3b82f6" font-style="italic">${pd.year}</text>` : ''; })()}

      <!-- P3 label: to the left of circle -->
      <text x="${280-R-6}" y="${90-12}" font-size="10" font-weight="600" text-anchor="end" fill="#1e40af">Đỉnh 3</text>
      ${(()=>{ const pd=period(2); return pd.age  ? `<text x="${280-R-6}" y="${90}"   font-size="10" text-anchor="end" fill="#1e40af">${pd.age}</text>`  : ''; })()}
      ${(()=>{ const pd=period(2); return pd.year ? `<text x="${280-R-6}" y="${90+12}" font-size="9"  text-anchor="end" fill="#3b82f6" font-style="italic">${pd.year}</text>` : ''; })()}

      <!-- P4 (apex) label: above circle -->
      <text x="280" y="${42-R-14}" font-size="10" font-weight="600" text-anchor="middle" fill="#1e40af">Đỉnh 4</text>
      ${(()=>{ const pd=period(3); return pd.age  ? `<text x="${280+R+6}" y="${42-4}" font-size="10" text-anchor="start" fill="#1e40af">${pd.age}</text>`  : ''; })()}
      ${(()=>{ const pd=period(3); return pd.year ? `<text x="${280+R+6}" y="${42+8}" font-size="9"  text-anchor="start" fill="#3b82f6" font-style="italic">${pd.year}</text>` : ''; })()}

      <!-- ── BASE NODES (Month / Day / Year) ──────────────────────────────────── -->
      <!-- Month (left) -->
      <circle cx="80"  cy="260" r="${RP}" fill="white" stroke="#2563eb" stroke-width="2.5"/>
      <text x="80"  y="265" font-size="15" font-weight="700" text-anchor="middle" dominant-baseline="middle" fill="#1e3a8a">${n(p[0]?.base_month ?? p[0]?.sourceMonth)}</text>
      <text x="80"  y="${260+RP+14}" font-size="10" font-weight="600" text-anchor="middle" fill="#1e40af">Tháng</text>
      ${inp.month ? `<text x="80" y="${260+RP+26}" font-size="9" text-anchor="middle" fill="#3b82f6" font-style="italic">Tháng ${inp.month}</text>` : ''}

      <!-- Day (center) -->
      <circle cx="280" cy="260" r="${RP}" fill="white" stroke="#2563eb" stroke-width="2.5"/>
      <text x="280" y="265" font-size="15" font-weight="700" text-anchor="middle" dominant-baseline="middle" fill="#1e3a8a">${n(p[1]?.base_day ?? p[1]?.sourceDay)}</text>
      <text x="280" y="${260+RP+14}" font-size="10" font-weight="600" text-anchor="middle" fill="#1e40af">Ngày</text>
      ${inp.day ? `<text x="280" y="${260+RP+26}" font-size="9" text-anchor="middle" fill="#3b82f6" font-style="italic">Ngày ${inp.day}</text>` : ''}

      <!-- Year (right) -->
      <circle cx="480" cy="260" r="${RP}" fill="white" stroke="#2563eb" stroke-width="2.5"/>
      <text x="480" y="265" font-size="15" font-weight="700" text-anchor="middle" dominant-baseline="middle" fill="#1e3a8a">${n(p[2]?.base_year ?? p[2]?.sourceYear)}</text>
      <text x="480" y="${260+RP+14}" font-size="10" font-weight="600" text-anchor="middle" fill="#1e40af">Năm</text>
      ${inp.year ? `<text x="480" y="${260+RP+26}" font-size="9" text-anchor="middle" fill="#3b82f6" font-style="italic">${inp.year}</text>` : ''}

      <!-- ── PEAK CIRCLES (on top of lines) ──────────────────────────────────── -->
      <!-- P1 upper-left -->
      <circle cx="160" cy="170" r="${R}" fill="#dbeafe" stroke="#2563eb" stroke-width="2.5"/>
      <text x="160" y="175" font-size="17" font-weight="700" text-anchor="middle" dominant-baseline="middle" fill="#1e3a8a">${n(p[0]?.number)}</text>

      <!-- P2 upper-right -->
      <circle cx="400" cy="170" r="${R}" fill="#dbeafe" stroke="#2563eb" stroke-width="2.5"/>
      <text x="400" y="175" font-size="17" font-weight="700" text-anchor="middle" dominant-baseline="middle" fill="#1e3a8a">${n(p[1]?.number)}</text>

      <!-- P3 upper-center -->
      <circle cx="280" cy="90" r="${R}" fill="#bfdbfe" stroke="#2563eb" stroke-width="2.5"/>
      <text x="280" y="95" font-size="17" font-weight="700" text-anchor="middle" dominant-baseline="middle" fill="#1e3a8a">${n(p[2]?.number)}</text>

      <!-- P4 apex -->
      <circle cx="280" cy="42" r="${R}" fill="#1e40af" stroke="#1e3a8a" stroke-width="2.5"/>
      <text x="280" y="47" font-size="17" font-weight="700" text-anchor="middle" dominant-baseline="middle" fill="white">${n(p[3]?.number)}</text>

      <!-- ── CHALLENGE CIRCLES ──────────────────────────────────────────────── -->
      <!-- C1 lower-left -->
      <circle cx="160" cy="350" r="${R}" fill="#eff6ff" stroke="#93c5fd" stroke-width="2"/>
      <text x="160" y="355" font-size="17" font-weight="700" text-anchor="middle" dominant-baseline="middle" fill="#1e3a8a">${n(ch[0]?.number)}</text>

      <!-- C2 lower-right -->
      <circle cx="400" cy="350" r="${R}" fill="#eff6ff" stroke="#93c5fd" stroke-width="2"/>
      <text x="400" y="355" font-size="17" font-weight="700" text-anchor="middle" dominant-baseline="middle" fill="#1e3a8a">${n(ch[1]?.number)}</text>

      <!-- C3 lower-center -->
      <circle cx="280" cy="430" r="${R}" fill="#e0f2fe" stroke="#7dd3fc" stroke-width="2"/>
      <text x="280" y="435" font-size="17" font-weight="700" text-anchor="middle" dominant-baseline="middle" fill="#1e3a8a">${n(ch[2]?.number)}</text>

      <!-- C4 nadir -->
      <circle cx="280" cy="478" r="${R}" fill="#dbeafe" stroke="#93c5fd" stroke-width="2"/>
      <text x="280" y="483" font-size="17" font-weight="700" text-anchor="middle" dominant-baseline="middle" fill="#1e3a8a">${n(ch[3]?.number)}</text>
    </svg>`;
  },

  // ─── 3. Birth Grid 3x3 (từ ngày sinh) ────────────────────────────────────────
  getBirthGridHtml(dobStr) {
    return this._makeGrid(dobStr.replace(/[^0-9]/g, ''));
  },

  // ─── 4. Name Grid 3x3 (từ tên - Pythagoras) ─────────────────────────────────
  getNameGridHtml(fullName) {
    const P = {A:1,B:2,C:3,D:4,E:5,F:6,G:7,H:8,I:9,J:1,K:2,L:3,M:4,N:5,O:6,P:7,Q:8,R:9,S:1,T:2,U:3,V:4,W:5,X:6,Y:7,Z:8};
    const norm = fullName.normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/đ/g,'d').replace(/Đ/g,'D').replace(/[^\x00-\x7F]/g,'').toUpperCase();
    const digits = norm.split('').map(c => P[c]).filter(Boolean).join('');
    return this._makeGrid(digits);
  },

  // ─── 5. Combined Grid (ngày sinh + tên) ──────────────────────────────────────
  getCombinedGridHtml(dobStr, fullName) {
    const P = {A:1,B:2,C:3,D:4,E:5,F:6,G:7,H:8,I:9,J:1,K:2,L:3,M:4,N:5,O:6,P:7,Q:8,R:9,S:1,T:2,U:3,V:4,W:5,X:6,Y:7,Z:8};
    const dobDigits = dobStr.replace(/[^0-9]/g, '');
    const norm = fullName.normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/đ/g,'d').replace(/Đ/g,'D').replace(/[^\x00-\x7F]/g,'').toUpperCase();
    const nameDigits = norm.split('').map(c => P[c]).filter(Boolean).join('');
    return this._makeGrid(dobDigits + nameDigits);
  },

  // ─── INTERNAL: make 3x3 grid ─────────────────────────────────────────────────
  _makeGrid(digits) {
    // Pythagoras 3x3 layout:
    // [3] [6] [9]
    // [2] [5] [8]
    // [1] [4] [7]
    const cells = {1:'',2:'',3:'',4:'',5:'',6:'',7:'',8:'',9:''};
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
