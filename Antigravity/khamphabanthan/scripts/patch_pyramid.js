/**
 * patch_pyramid.js — Replace buildPyramidSection with full narrative layout
 * Run: node scripts/patch_pyramid.js
 */
'use strict';
const fs = require('fs');
const path = require('path');

const appPath = path.join(__dirname, '..', 'app.js');
let content = fs.readFileSync(appPath, 'utf8');

// ── Locate the old function ────────────────────────────────────────────────────
const START_MARKER = '// ─── HELPER: Pyramid section with table';
const END_MARKER   = '\n// ─── GRID ANALYSIS ENGINE';

const startIdx = content.indexOf(START_MARKER);
const endIdx   = content.indexOf(END_MARKER);

if (startIdx === -1 || endIdx === -1) {
  console.error('Markers not found! startIdx:', startIdx, 'endIdx:', endIdx);
  process.exit(1);
}

const oldFn = content.slice(startIdx, endIdx);

// ── New function ──────────────────────────────────────────────────────────────
const newFn = `// ─── HELPER: Pyramid section — full narrative layout (matches reference PDF) ──
function buildPyramidSection(r) {
  const peaks      = r.pyramid_peaks;
  const challenges = r.pyramid_challenges;

  // Base node values (reduced month / day / year)
  const d = r._dob_d, m = r._dob_m, y = r._dob_y;
  const NE = window.NumerologyEngine;
  const rd = NE ? NE.reduce(d, false) : d % 9 || 9;
  const rm = NE ? NE.reduce(m, false) : m % 9 || 9;
  const ry = NE ? NE.reduce(y, false) : y % 9 || 9;
  const enrichedPeaks = peaks.map(pk => ({ ...pk, base_month: rm, base_day: rd, base_year: ry }));
  const inp = { day: d, month: m, year: y };
  const svg = NumerologyCharts.getPyramidChartSvg(enrichedPeaks, challenges, inp);

  // Parse "X – Y tuổi" or "X tuổi trở đi" to age numbers
  const parsePeriodAge = str => {
    if (!str) return { start: null, end: null, isOpen: false };
    const rangeM = str.match(/(\\d+)\\s*[\\u2013\\-]\\s*(\\d+)/);
    if (rangeM) return { start: parseInt(rangeM[1]), end: parseInt(rangeM[2]), isOpen: false };
    const openM  = str.match(/(\\d+)/);
    if (openM)  return { start: parseInt(openM[1]), end: null, isOpen: true };
    return { start: null, end: null, isOpen: false };
  };

  // Build section header: "7.X. GIAI ĐOẠN ... TỪ ĐẦU TUỔI A (YYYY) TỚI HẾT TUỔI B (YYYY)"
  const buildPeriodHeader = (periodStr, idx) => {
    const { start, end, isOpen } = parsePeriodAge(periodStr);
    const labels = ['Một', 'Hai', 'Ba', 'Bốn'];
    const lb = labels[idx] || String(idx + 1);
    if (start === null) return \`7.\${idx+1}. Giai đoạn \${lb}\`;
    const sy = y + start;
    if (isOpen) return \`7.\${idx+1}. GIAI ĐOẠN \${lb.toUpperCase()} — KỂ TỪ TUỔI \${start} (\${sy}) TRỞ ĐI\`;
    const ey = y + end;
    return \`7.\${idx+1}. GIAI ĐOẠN \${lb.toUpperCase()} TỪ ĐẦU TUỔI \${start} (\${sy}) TỚI HẾT TUỔI \${end} (\${ey})\`;
  };

  // Render peak narrative block
  const renderPeak = (pk, idx) => {
    const dt = pk.data || {};
    const num = pk.number ?? '?';
    let h = \`<h4 class="pyramid-sub-heading">7.\${idx+1}.1. Đỉnh cao của bạn trong giai đoạn này là số \${num}</h4>\`;
    if (dt.theme)       h += \`<p class="nar"><em>\${dt.theme}</em></p>\`;
    if (dt.opportunity) h += \`<p class="nar">\${dt.opportunity}</p>\`;
    if (dt.challenge)   h += \`<p class="nar"><span class="pyramid-note">⚠ Lưu ý:</span> \${dt.challenge}</p>\`;
    if (dt.advice)      h += \`<p class="nar"><span class="pyramid-advice">★ Lời khuyên:</span> \${dt.advice}</p>\`;
    if (dt.keywords && dt.keywords.length) {
      const kw = Array.isArray(dt.keywords) ? dt.keywords.join(' · ') : dt.keywords;
      h += \`<p class="nar pyramid-keywords"><strong>Từ khóa:</strong> \${kw}</p>\`;
    }
    return h;
  };

  // Render challenge narrative block
  const renderChallenge = (ch, idx) => {
    const dt = ch.data || {};
    const num = ch.number ?? '?';
    let h = \`<h4 class="pyramid-sub-heading challenge">7.\${idx+1}.2. Thử thách của bạn trong giai đoạn này là số \${num}</h4>\`;
    if (dt.lesson)          h += \`<p class="nar">\${dt.lesson}</p>\`;
    if (dt.trap)            h += \`<p class="nar"><span class="pyramid-note">⚡ Bẫy định kiến:</span> \${dt.trap}</p>\`;
    if (dt.how_to_overcome) h += \`<p class="nar"><span class="pyramid-advice">✔ Cách vượt qua:</span> \${dt.how_to_overcome}</p>\`;
    return h;
  };

  // Assemble 4 period sections
  const periodsHtml = peaks.map((pk, i) => \`
    <div class="pyramid-period">
      <h3 class="pyramid-period-heading">\${buildPeriodHeader(pk.period, i)}</h3>
      \${renderPeak(pk, i)}
      \${renderChallenge(challenges[i] || {}, i)}
    </div>\`).join('');

  return \`
    <p class="nar">Kim Tự Tháp cho thấy <strong>4 giai đoạn</strong> trong cuộc đời bạn — mỗi giai đoạn tương ứng với một đỉnh cao và một thử thách riêng. Đỉnh cao là năng lượng chủ đề bạn nên phát triển trong giai đoạn đó; thử thách là bài học bạn bắt buộc phải vượt qua để tiến lên đỉnh kế tiếp.</p>
    <div class="pyramid-chart-wrap">\${svg}</div>
    <div class="pyramid-periods-wrap">\${periodsHtml}</div>
  \`;
}
`;

const newContent = content.slice(0, startIdx) + newFn + content.slice(endIdx);
fs.writeFileSync(appPath, newContent, 'utf8');
console.log('✅ buildPyramidSection replaced successfully.');
console.log('   Old fn length:', oldFn.length, '→ New fn length:', newFn.length);
