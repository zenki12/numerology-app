'use strict';
const fs   = require('fs');
const path = require('path');

const appPath = path.join(__dirname, '..', 'app.js');
let content   = fs.readFileSync(appPath, 'utf8');

const START = '// \u2500\u2500\u2500 3. BUILD SUMMARY DASHBOARD';
const END   = '\nfunction showDetailedReport()';

const si = content.indexOf(START);
const ei = content.indexOf(END);
if (si === -1 || ei === -1) { console.error('Markers not found', si, ei); process.exit(1); }

console.log('Found markers at:', si, ei);

const NEW_BLOCK = `
// \u2500\u2500\u2500 3. BUILD SUMMARY DASHBOARD (4-section professional layout) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500

// STATIC CAREER TABLE (pre-computed from KB via scripts/career_mapping_builder.js)
// LP+DEST career keyword analysis -> 5 groups, each row sums to 100
// Groups: KT = Ky thuat & CN | KD = Kinh doanh & QL | XH = Xa hoi & CN | ST = Sang tao & NT | NC = Nghien cuu & KH
const CAREER_TABLE = {
  '1':  { KT:  5, KD: 58, XH:  8, ST:  5, NC:  4 },
  '2':  { KT:  5, KD: 12, XH: 52, ST: 24, NC:  7 },
  '3':  { KT:  5, KD:  8, XH: 10, ST: 67, NC: 10 },
  '4':  { KT: 22, KD: 32, XH: 28, ST:  7, NC: 11 },
  '5':  { KT: 14, KD: 38, XH: 16, ST: 18, NC: 14 },
  '6':  { KT:  6, KD: 16, XH: 50, ST: 22, NC:  6 },
  '7':  { KT:  8, KD: 10, XH: 16, ST:  8, NC: 58 },
  '8':  { KT:  6, KD: 74, XH:  5, ST: 10, NC:  5 },
  '9':  { KT:  6, KD:  8, XH: 55, ST: 26, NC:  5 },
  '11': { KT:  5, KD: 14, XH: 18, ST: 56, NC:  7 },
  '22': { KT: 38, KD: 38, XH:  8, ST:  8, NC:  8 },
  '33': { KT:  6, KD: 10, XH: 52, ST: 26, NC:  6 },
};
const CAREER_GROUPS = [
  { key: 'KT', label: 'Nh\u00f3m ng\u00e0nh K\u1ef9 thu\u1eadt & C\u00f4ng ngh\u1ec7' },
  { key: 'KD', label: 'Nh\u00f3m ng\u00e0nh Kinh doanh & Qu\u1ea3n l\u00fd' },
  { key: 'XH', label: 'Nh\u00f3m ng\u00e0nh X\u00e3 h\u1ed9i & Con ng\u01b0\u1eddi' },
  { key: 'ST', label: 'Nh\u00f3m ng\u00e0nh S\u00e1ng t\u1ea1o & Ngh\u1ec7 thu\u1eadt' },
  { key: 'NC', label: 'Nh\u00f3m ng\u00e0nh Nghi\u00ean c\u1ee9u & Khoa h\u1ecdc' },
];

// 9 PERSONALITY GROUPS (Pythagoras Birth Chart positions 1-9)
const PERSONALITY_GROUPS = [
  { num: 1, label: 'M\u1ea1nh m\u1ebd \u2013 \u0110\u1ed9c l\u1eadp \u2013 T\u1ef1 tin',          color: '#ef4444' },
  { num: 2, label: 'L\u1eafng nghe \u2013 Kh\u00e9o l\u00e9o \u2013 Nh\u1ea1y c\u1ea3m',    color: '#f97316' },
  { num: 3, label: 'S\u00e1ng t\u1ea1o \u2013 Ho\u1ea1t b\u00e1t \u2013 L\u1ea1c quan',    color: '#eab308' },
  { num: 4, label: 'C\u1ea9n th\u1eadn \u2013 C\u1ea7u to\u00e0n \u2013 Th\u1ef1c t\u1ebf',    color: '#22c55e' },
  { num: 5, label: 'N\u0103ng \u0111\u1ed9ng \u2013 Linh ho\u1ea1t \u2013 T\u00f2 m\u00f2',  color: '#14b8a6' },
  { num: 6, label: 'Quan t\u00e2m \u2013 Y\u00eau th\u01b0\u01a1ng \u2013 Ki\u1ec3m so\u00e1t', color: '#3b82f6' },
  { num: 7, label: 'Th\u00f4ng th\u00e1i \u2013 Kh\u00e1m ph\u00e1 \u2013 Truy\u1ec1n \u0111\u1ea1t', color: '#6366f1' },
  { num: 8, label: 'C\u00f4ng b\u1eb1ng \u2013 T\u1eadp trung \u2013 L\u00fd t\u01b0\u1edfng',  color: '#8b5cf6' },
  { num: 9, label: 'Tr\u00e1ch nhi\u1ec7m \u2013 R\u1ed9ng l\u01b0\u1ee3ng \u2013 H\u00e0o ph\u00f3ng', color: '#ec4899' },
];

// INDICATOR definitions for Section 1
const INDICATOR_DEFS = [
  { label: '\u0110\u01b0\u1eddng \u0111\u1eddi',       desc: '\u0110i\u1ec3m m\u1ea1nh y\u1ebfu, t\u1ed5ng quan v\u1ec1 \u0111\u01b0\u1eddng \u0111\u1eddi, c\u00e1c s\u1ef1 ph\u00f9 h\u1ee3p trong t\u00ecnh y\u00eau, s\u1ef1 nghi\u1ec7p, m\u1ed1i quan h\u1ec7\u2026', get: r => r.life_path?.number },
  { label: 'Tr\u01b0\u1edfng th\u00e0nh',   desc: 'Gi\u00e1 tr\u1ecb, l\u0129nh v\u1ef1c ti\u1ec1m n\u0103ng m\u1ea1nh nh\u1ea5t trong giai \u0111o\u1ea1n tr\u01b0\u1edfng th\u00e0nh (kho\u1ea3ng t\u1eeb 40 tu\u1ed5i).',           get: r => r.maturity_number?.number },
  { label: 'N\u0103ng l\u1ef1c t\u1ef1 nhi\u00ean', desc: 'N\u0103ng khi\u1ebfu b\u1ea9m sinh, nh\u1eefng t\u00e0i n\u0103ng v\u00e0 n\u0103ng l\u1ef1c h\u1ed7 tr\u1ee3 b\u1ea1n tr\u00ean \u0111\u01b0\u1eddng \u0111\u1eddi.',                       get: r => r.birthday_number?.number },
  { label: 'N\u0103ng l\u1ef1c t\u01b0 duy', desc: 'C\u00e1ch tr\u00ed \u00f3c b\u1ea1n ho\u1ea1t \u0111\u1ed9ng, m\u1ee9c \u0111\u1ed9 th\u00f4ng minh v\u00e0 kh\u1ea3 n\u0103ng t\u01b0 duy logic.',                  get: r => r.cognitive_ability?.number },
  { label: 'Th\u00e1i \u0111\u1ed9',         desc: 'C\u00e1ch b\u1ea1n ph\u1ea3n \u1ee9ng b\u1ea3n n\u0103ng \u0111\u1ea7u ti\u00ean, \u0111\u1eb7c bi\u1ec7t l\u00e0 trong nh\u1eefng l\u1ea7n g\u1eb7p \u0111\u1ea7u.',                        get: r => r.attitude_number?.number },
  { label: 'V\u01b0\u1ee3t kh\u00f3',         desc: 'C\u00e1ch b\u1ea1n ph\u1ea3n \u1ee9ng v\u1edbi th\u1eed th\u00e1ch, c\u00e0ng l\u1ee3i khuy\u1ebfn \u0111\u1ec3 \u0111\u1ed1i m\u1eb7t v\u1edbi kh\u00f3 kh\u0103n hi\u1ec7u qu\u1ea3 nh\u1ea5t.',     get: r => r.soul_challenge?.number },
  { label: 'S\u1ee9 m\u1ec7nh',          desc: 'C\u00e1ch b\u1ea1n \u0111\u1ea1t \u0111\u01b0\u1ee3c m\u1ee5c ti\u00eau l\u1edbn h\u01a1n, \u0111\u1ecbnh h\u01b0\u1edbng v\u00e0o m\u00f4i giai \u0111o\u1ea1n cu\u1ed9c \u0111\u1eddi b\u1ea1n.',           get: r => r.destiny_number?.number },
  { label: 'Th\u1eed th\u00e1ch S\u1ee9 m\u1ec7nh', desc: 'Nh\u1eefng ki\u1ec3u th\u1eed th\u00e1ch th\u01b0\u1eddng g\u1eb7p nh\u1ea5t m\u00e0 b\u1ea1n b\u1eaft bu\u1ed9c ph\u1ea3i v\u01b0\u1ee3t qua.',              get: r => r.destiny_challenge?.number },
  { label: 'Linh h\u1ed3n',          desc: 'S\u1ef1 kh\u00e1o s\u00e1t s\u00e2u nh\u1ea5t: \u0111i\u1ec1u g\u00ec th\u1ef1c s\u1ef1 khi\u1ebfn b\u1ea1n th\u1ecfa m\u00e3n v\u00e0 tr\u1ecdn v\u1eb9n.',                        get: r => r.soul_number?.number },
  { label: 'Th\u1eed th\u00e1ch Linh h\u1ed3n', desc: 'Tr\u1edf ng\u1ea1i n\u1ed9i t\u00e2m b\u1ea1n ph\u1ea3i v\u01b0\u1ee3t qua \u0111\u1ec3 tr\u1edf n\u00ean tr\u01b0\u1edfng th\u00e0nh h\u01a1n.',             get: r => r.soul_challenge?.number },
  { label: 'Nh\u00e2n c\u00e1ch',         desc: 'C\u00e1ch ng\u01b0\u1eddi kh\u00e1c c\u1ea3m nh\u1eadn b\u1ea1n qua ph\u1ea3n \u1ee9ng, l\u1ef1a ch\u1ecdn, l\u1eddi n\u00f3i v\u00e0 vi\u1ec7c l\u00e0m c\u1ee7a b\u1ea1n.',              get: r => r.personality_number?.number },
  { label: 'Th\u1eed th\u00e1ch Nh\u00e2n c\u00e1ch', desc: 'Gi\u00fap c\u1ea3i thi\u1ec7n c\u00e1ch ng\u01b0\u1eddi kh\u00e1c c\u1ea3m nh\u1eadn b\u1ea1n, c\u00e1c \u0111i\u1ec3m c\u1ea7n r\u00e8n luy\u1ec7n th\u00eam.',       get: r => r.personality_challenge?.number },
];

// Compute career % (deterministic, LP weight 55% + DEST weight 45%)
function calcCareerGroups(lpNum, destNum) {
  const fallback = CAREER_TABLE['5'];
  const lp   = CAREER_TABLE[String(lpNum)]   || fallback;
  const dest = CAREER_TABLE[String(destNum)] || fallback;
  const raw = {};
  for (const g of CAREER_GROUPS.map(g => g.key)) {
    raw[g] = Math.round(lp[g] * 0.55 + dest[g] * 0.45);
  }
  let total = Object.values(raw).reduce((a, b) => a + b, 0);
  if (total !== 100) {
    const maxK = Object.keys(raw).reduce((a, b) => raw[a] >= raw[b] ? a : b);
    raw[maxK] += (100 - total);
  }
  return CAREER_GROUPS.map(g => ({ ...g, pct: raw[g.key] })).sort((a, b) => b.pct - a.pct);
}

// Compute personality % from DOB digits (Pythagoras birth chart)
function calcPersonalityGroups(dob) {
  const parts = dob.split('/');
  const digits = (parts[0] + parts[1] + parts[2]).split('').map(Number).filter(n => n >= 1 && n <= 9);
  const total = digits.length || 1;
  const counts = {};
  for (let i = 1; i <= 9; i++) counts[i] = 0;
  for (const n of digits) counts[n]++;
  let result = PERSONALITY_GROUPS.map(g => ({ ...g, raw: Math.round((counts[g.num] / total) * 100) }));
  let sum = result.reduce((a, b) => a + b.raw, 0);
  if (sum !== 100 && sum > 0) {
    const maxIdx = result.reduce((mi, x, i) => x.raw > result[mi].raw ? i : mi, 0);
    result[maxIdx].raw += (100 - sum);
  }
  return result;
}

function sumSectionHeader(num, title) {
  return '<div class="sum-sec-head"><div class="sum-sec-num">' + num + '</div><h2 class="sum-sec-title">' + title + '</h2></div>';
}

function buildSummaryDashboard(r, currentYear) {
  const name = r.input.fullName;
  const dob  = r.input.dob;
  const lp   = r.life_path?.number;
  const dest = r.destiny_number?.number;

  // === Section 1: Indicator Grid ===
  let indRows = '';
  for (let i = 0; i < INDICATOR_DEFS.length; i += 2) {
    const a = INDICATOR_DEFS[i], b = INDICATOR_DEFS[i + 1];
    const cell = (ind) => ind
      ? '<div class="ind-cell"><div class="ind-num">' + (ind.get(r) ?? '?') + '</div><div class="ind-info"><div class="ind-label">' + ind.label + '</div><div class="ind-desc">' + ind.desc + '</div></div></div>'
      : '<div class="ind-cell ind-empty"></div>';
    indRows += '<div class="ind-row">' + cell(a) + cell(b) + '</div>';
  }
  const sec1 = '<div class="sum-section">'
    + sumSectionHeader(1, 'T\u1ed4NG H\u1ee2P C\u00c1C CH\u1ec8 S\u1ed0 QUAN TR\u1eccNG')
    + '<p class="sum-intro">Ph\u1ea7n n\u00e0y t\u00f3m t\u1eaft to\u00e0n b\u1ed9 c\u00e1c ch\u1ec9 s\u1ed1 quan tr\u1ecdng trong b\u00e1o c\u00e1o. M\u1ed7i con s\u1ed1 \u0111\u1ea1i di\u1ec7n m\u1ed9t kh\u00eda c\u1ea1nh \u0111\u1ed9c l\u1eadp v\u1ec1 t\u00ednh c\u00e1ch, n\u0103ng l\u1ef1c v\u00e0 h\u00e0nh tr\u00ecnh c\u1ee7a b\u1ea1n. D\u00f9ng ph\u1ea7n n\u00e0y nh\u01b0 m\u1ed9t <strong>b\u1ea3n \u0111\u1ed3 t\u1ed5ng quan</strong> tr\u01b0\u1edbc khi \u0111\u1ecdc s\u00e2u t\u1eebng ch\u1ec9 s\u1ed1 b\u00ean d\u01b0\u1edbi.</p>'
    + '<div class="ind-grid">' + indRows + '</div>'
    + '</div>';

  // === Section 2: Personal Cycle ===
  const sec2 = '<div class="sum-section">'
    + sumSectionHeader(2, 'CHU K\u1ef2 V\u1eacN S\u1ed0')
    + '<p class="sum-intro">M\u1ed7i n\u0103m trong cu\u1ed9c \u0111\u1eddi b\u1ea1n mang m\u1ed9t con s\u1ed1 c\u00e1 nh\u00e2n ri\u00eang, l\u1eb7p l\u1ea1i theo v\u00f2ng 9 n\u0103m. <strong>Bi\u1ec3u \u0111\u1ed3 \u0111i l\u00ean</strong> \u2014 nhi\u1ec1u c\u01a1 h\u1ed9i, thay \u0111\u1ed5i b\u00ean ngo\u00e0i. <strong>Bi\u1ec3u \u0111\u1ed3 \u0111i xu\u1ed1ng</strong> \u2014 th\u00edch h\u1ee3p ph\u00e1t tri\u1ec3n n\u1ed9i t\u00e2m v\u00e0 t\u00edch l\u0169y. N\u0103m hi\u1ec7n t\u1ea1i \u0111\u01b0\u1ee3c \u0111\u00e1nh d\u1ea5u n\u1ed5i b\u1eadt.</p>'
    + '<div id="summary-line-chart" style="width:100%;height:240px;"></div>'
    + '</div>';

  // === Section 3: Personality Groups ===
  const persSorted = calcPersonalityGroups(dob).sort((a, b) => b.raw - a.raw);
  let persHTML = '';
  for (let i = 0; i < persSorted.length; i += 2) {
    const a = persSorted[i], b = persSorted[i + 1];
    const bar = (g) => g
      ? '<div class="pers-item"><div class="pers-top"><span class="pers-dot" style="background:' + g.color + '"></span><span class="pers-lbl"><strong>' + g.num + '.</strong> ' + g.label + '</span><span class="pers-pct">' + g.raw + '%</span></div><div class="pers-track"><div class="pers-fill" style="width:' + g.raw + '%;background:' + g.color + '"></div></div></div>'
      : '';
    persHTML += '<div class="pers-row">' + bar(a) + bar(b) + '</div>';
  }
  const sec3 = '<div class="sum-section">'
    + sumSectionHeader(3, 'NH\u00d3M T\u00cdNH C\u00c1CH THEO B\u1ea2N NG\u00c3')
    + '<p class="sum-intro">\u0110\u00e2y l\u00e0 c\u00e1c nh\u00f3m t\u00ednh c\u00e1ch b\u1ea9m sinh \u0111\u01b0\u1ee3c ph\u00e2n t\u00edch t\u1eeb <strong>bi\u1ec3u \u0111\u1ed3 Pythagoras</strong> ng\u00e0y sinh c\u1ee7a b\u1ea1n. Ph\u1ea7n n\u00e0y quan tr\u1ecdng nh\u1ea5t khi b\u1ea1n c\u00f2n tr\u1ebb. Nh\u00f3m t\u00ednh c\u00e1ch c\u00f3 dao \u0111\u1ed9ng th\u1ea5p nh\u1ea5t ch\u00ednh l\u00e0 \u0111i\u1ec3m b\u1ea1n n\u00ean r\u00e8n luy\u1ec7n th\u00eam. T\u1ed5ng t\u1ea5t c\u1ea3 c\u00e1c nh\u00f3m lu\u00f4n b\u1eb1ng 100%.</p>'
    + '<div class="pers-grid">' + persHTML + '</div>'
    + '</div>';

  // === Section 4: Career Groups ===
  const careerGroups = calcCareerGroups(lp, dest);
  let careerHTML = '';
  for (const g of careerGroups) {
    careerHTML += '<div class="career-item"><span class="career-lbl">' + g.label + ':</span><div class="career-track"><div class="career-fill" style="width:' + g.pct + '%"></div></div><span class="career-pct">' + g.pct.toFixed(1) + '%</span></div>';
  }
  const sec4 = '<div class="sum-section">'
    + sumSectionHeader(4, 'T\u1ec8 L\u1ec6 NH\u00d3M NG\u00c0NH PH\u00d9 H\u1ee2P V\u1edaI B\u1ea0N')
    + '<p class="sum-intro">Vi\u1ec7c x\u00e1c \u0111\u1ecbnh nh\u00f3m ng\u00e0nh \u0111\u01b0\u1ee3c ti\u1ebfn h\u00e0nh qua 2 b\u01b0\u1edbc: <strong>B\u01b0\u1edbc 1</strong> \u2014 x\u00e1c \u0111\u1ecbnh \u0111i\u1ec3m m\u1ea1nh, \u0111i\u1ec3m y\u1ebfu qua 3 ch\u1ec9 s\u1ed1 ch\u00ednh (s\u1ed1 \u0111\u01b0\u1eddng \u0111\u1eddi, linh h\u1ed3n, s\u1ee9 m\u1ec7nh). <strong>B\u01b0\u1edbc 2</strong> \u2014 mapping v\u00e0o 5 nh\u00f3m ng\u00e0nh d\u1ef1a tr\u00ean t\u1eeb kh\u00f3a ngh\u1ec1 nghi\u1ec7p trong knowledge base th\u1ea7n s\u1ed1 h\u1ecdc. K\u1ebft qu\u1ea3 \u0111\u01b0\u1ee3c s\u1eafp x\u1ebfp t\u1eeb cao \u0111\u1ebfn th\u1ea5p.</p>'
    + '<h4 class="career-result-title">K\u1ebfT QU\u1ea2 PH\u00c2N T\u00cdCH T\u1ec6 L\u1ec6 PH\u00d9 H\u1ee2P C\u1ee6A B\u1ea0N</h4>'
    + '<div class="career-bars">' + careerHTML + '</div>'
    + '</div>';

  // === Inject into DOM ===
  document.getElementById('sum-name').textContent = name;
  document.getElementById('sum-dob').textContent  = dob;
  document.getElementById('sum-content').innerHTML = sec1 + sec2 + sec3 + sec4;

  // Draw chart after DOM update
  const lineData = calcLineChartData(r, currentYear, -3, 7);
  NumerologyCharts.drawLineChart('summary-line-chart', lineData);
}
`;

content = content.slice(0, si) + NEW_BLOCK + content.slice(ei);
fs.writeFileSync(appPath, content, 'utf8');
console.log('Done. New block length:', NEW_BLOCK.length, 'chars. Total file:', content.length);
