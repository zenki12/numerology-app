/**
 * APP.JS — v3.0: Login Flow + Dashboard + 30 Indicators + Granular Freemium Paywall
 */
'use strict';

let KB = null;
let REPORT = null;

// ─── CURRENT USER STATE ───────────────────────────────────────────────────────
let CURRENT_USER = null; // { name, email, photoURL, isMock }

// ─── SECURITY HELPERS ──────────────────────────────────────────────────────────
// Escape HTML — chống XSS khi đưa user input vào DOM
function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, m =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m])
  );
}

// Inline form error — thay thế alert()
function showFormError(msg) {
  let el = document.getElementById('form-error-msg');
  if (!el) {
    el = document.createElement('p');
    el.id = 'form-error-msg';
    el.className = 'form-error-inline';
    const btn = document.getElementById('btn-submit');
    if (btn) btn.parentNode.insertBefore(el, btn);
    else document.body.appendChild(el);
  }
  el.textContent = msg;
  el.style.display = 'block';
  setTimeout(() => { el.style.display = 'none'; }, 5000);
}

// ─── FREEMIUM CONFIG ──────────────────────────────────────────────────────
// ─── WORKER CONFIG ─────────────────────────────────────────────────────────
// Sau khi deploy Cloudflare Worker, thay URL bên dưới bằng URL thật của Worker
// VD: 'https://numerology-voucher-worker.your-name.workers.dev/api/validate-voucher'
const WORKER_VOUCHER_URL = 'https://numerology-voucher-worker.your-name.workers.dev/api/validate-voucher';
const VIP_STORAGE_KEY = 'vip_unlocked';
const _VIP_SALT = 'kp_numer_2026_xr9';

function checkUnlockStatus() {
  const stored = localStorage.getItem(VIP_STORAGE_KEY);
  if (!stored) return false;
  // Validate signed token — không phải plain 'true' nữa, khó giả mạo hơn
  for (const [code] of Object.entries(VOUCHERS)) {
    const expected = btoa(code + '|' + _VIP_SALT + '|' + new Date().getFullYear());
    if (stored === expected) return true;
  }
  // Legacy support: nếu user cũ đang dùng token 'true', migrate sang token mới
  if (stored === 'true') {
    const newToken = btoa('THAI2026' + '|' + _VIP_SALT + '|' + new Date().getFullYear());
    localStorage.setItem(VIP_STORAGE_KEY, newToken);
    return true;
  }
  return false;
}

function setUnlocked(voucherCode) {
  const token = btoa((voucherCode || 'THAI2026') + '|' + _VIP_SALT + '|' + new Date().getFullYear());
  localStorage.setItem(VIP_STORAGE_KEY, token);
}


// ─── HELPER: Lock message HTML ────────────────────────────────────────────────


function wrapLocked(html) {
  // Compact lock: chỉ show icon + 1 dòng thông báo, KHÔNG render HTML content ẩn
  return '<div class="section-lock-placeholder"><span class="lock-icon">🔒</span><span class="lock-label">Bạn cần nâng cấp VIP để xem được luận giải của mục này!</span></div>';
}

function wrapPartialLocked(freeHtml, lockedHtml) {
  if (checkUnlockStatus()) return freeHtml + lockedHtml;
  // Chỉ show free content + compact lock bar, KHÔNG render lockedHtml vào DOM
  return freeHtml +
    '<div class="section-lock-placeholder partial"><span class="lock-icon">🔒</span><span class="lock-label">Bạn cần nâng cấp VIP để xem được luận giải của mục này!</span></div>';
}

async function handleVoucherSubmit(e) {
  e.preventDefault();
  const input = document.getElementById('voucher-input');
  const errEl = document.getElementById('voucher-error');
  const btn = document.getElementById('btn-voucher-submit');
  if (!input || !errEl) return;

  const code = (input.value || '').trim().toUpperCase();
  if (!code) {
    errEl.textContent = '❌ Vui lòng nhập mã.';
    errEl.style.display = 'block';
    return;
  }

  // Loading state
  if (btn) { btn.disabled = true; btn.textContent = '⏳ Đang kiểm tra...'; }
  errEl.style.display = 'none';

  try {
    const res = await fetch(WORKER_VOUCHER_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code }),
    });
    const data = await res.json();

    if (!data.valid) {
      errEl.textContent = data.message || '❌ Mã không hợp lệ.';
      errEl.style.display = 'block';
      return;
    }

    // Server trả về token đã ký — lưu vào localStorage
    if (data.token) localStorage.setItem(VIP_STORAGE_KEY, data.token);
    else setUnlocked(code);

    const overlay = document.getElementById('paywall-overlay');
    if (overlay) overlay.remove();
    if (REPORT) {
      const currentYear = new Date().getFullYear();
      const curMonth = new Date().getMonth() + 1;
      buildDetailedReport(REPORT, currentYear, curMonth);
      const lineData = calcLineChartData(REPORT, currentYear, -5, 5);
      setTimeout(() => NumerologyCharts.drawLineChart('report-line-chart', lineData), 150);
    }
    const toast = document.createElement('div');
    toast.className = 'unlock-toast';
    toast.textContent = '🔓 Đã mở khoá toàn bộ Luận Giải VIP!';
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);

  } catch (err) {
    // Fallback khi Worker chưa deploy hoặc mất mạng
    errEl.textContent = '⚠️ Không kết nối được máy chủ. Vui lòng thử lại.';
    errEl.style.display = 'block';
  } finally {
    if (btn) { btn.disabled = false; btn.textContent = 'Kích hoạt'; }
  }
}

// ═══════════════════════════════════════════════════════════════════
// AUTH MODULE (Mock-first, Firebase-ready)
// ═══════════════════════════════════════════════════════════════════

function initAuth() {
  const mockBtn = document.getElementById('btn-mock-login');
  if (mockBtn) {
    mockBtn.addEventListener('click', () => {
      loginSuccess({ name: 'Khách', email: 'guest@example.com', photoURL: '', isMock: true });
    });
  }

  const googleBtn = document.getElementById('btn-google-login');
  if (googleBtn) {
    googleBtn.addEventListener('click', () => {
      // TODO: Replace with Firebase Google Sign-In
      loginSuccess({ name: 'Người dùng Google', email: 'user@gmail.com', photoURL: '', isMock: false });
    });
  }

  const logoutBtn = document.getElementById('btn-logout');
  if (logoutBtn) logoutBtn.addEventListener('click', logout);

  const homeBtn = document.getElementById('btn-nav-home');
  if (homeBtn) homeBtn.addEventListener('click', (e) => { e.preventDefault(); switchView('view-dashboard'); });
}

function loginSuccess(user) {
  CURRENT_USER = user;
  const elOut = document.getElementById('nav-logged-out');
  const elIn = document.getElementById('nav-logged-in');
  const navName = document.getElementById('nav-user-name');
  if (elOut) elOut.style.display = 'none';
  if (elIn) elIn.style.display = 'flex';
  if (navName) navName.textContent = user.name;
  const dashName = document.getElementById('dash-username');
  if (dashName) dashName.textContent = user.name;
  switchView('view-dashboard');
}

function logout() {
  CURRENT_USER = null;
  const elOut = document.getElementById('nav-logged-out');
  const elIn = document.getElementById('nav-logged-in');
  if (elOut) elOut.style.display = 'flex';
  if (elIn) elIn.style.display = 'none';
  const form = document.getElementById('numerology-form');
  if (form) form.reset();
  REPORT = null;
  switchView('view-login');
}

// ═══════════════════════════════════════════════════════════════════
// DOB PICKER — 3 dropdowns với real-time validation
// ═══════════════════════════════════════════════════════════════════

function initDobPicker() {
  const yearSel = document.getElementById('dob-year');
  const monthSel = document.getElementById('dob-month');
  const daySel = document.getElementById('dob-day');
  if (!yearSel || !monthSel || !daySel) return;

  const curYear = new Date().getFullYear();
  for (let y = curYear; y >= 1924; y--) {
    const opt = document.createElement('option');
    opt.value = y;
    opt.textContent = y;
    yearSel.appendChild(opt);
  }

  function isLeapYear(y) {
    return (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0;
  }
  function getDaysInMonth(month, year) {
    if (!month) return 31;
    const days30 = [4, 6, 9, 11];
    if (month == 2) return (year && isLeapYear(parseInt(year))) ? 29 : 28;
    if (days30.includes(parseInt(month))) return 30;
    return 31;
  }
  function updateDayOptions() {
    const month = monthSel.value;
    const year = yearSel.value;
    const prevDay = daySel.value;
    const maxDays = getDaysInMonth(month, year);
    daySel.innerHTML = '<option value="">-- Ngày --</option>';
    for (let d = 1; d <= maxDays; d++) {
      const opt = document.createElement('option');
      opt.value = d;
      opt.textContent = d;
      if (d == prevDay) opt.selected = true;
      daySel.appendChild(opt);
    }
    const hint = document.getElementById('dob-hint');
    if (hint && month == 2) {
      const ly = year ? (isLeapYear(parseInt(year)) ? '(Năm nhuận — 29 ngày)' : '(Không nhuận — 28 ngày)') : '';
      hint.textContent = 'Tháng 2 ' + ly;
      hint.style.display = 'block';
    } else if (hint) {
      hint.style.display = 'none';
    }
  }
  monthSel.addEventListener('change', updateDayOptions);
  yearSel.addEventListener('change', updateDayOptions);
  updateDayOptions();
}

// ═══════════════════════════════════════════════════════════════════
// INIT — DOMContentLoaded
// ═══════════════════════════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
  // Auth
  initAuth();
  // DOB Picker
  initDobPicker();
  // Init header: hide logged-in nav
  const elOut = document.getElementById('nav-logged-out');
  const elIn = document.getElementById('nav-logged-in');
  if (elOut) elOut.style.display = 'flex';
  if (elIn) elIn.style.display = 'none';
  // Module selection
  const modBtn = document.getElementById('module-numerology');
  if (modBtn) modBtn.addEventListener('click', () => switchView('view-input'));
  // Form
  const form = document.getElementById('numerology-form');
  if (form) form.addEventListener('submit', handleSubmit);
  const detailBtn = document.getElementById('btn-view-details');
  if (detailBtn) detailBtn.addEventListener('click', showDetailedReport);
  const resetBtn = document.getElementById('btn-reset');
  if (resetBtn) resetBtn.addEventListener('click', resetAll);
});

async function loadKB() {
  if (KB) return KB;
  const res = await fetch('numerology_knowledge_base.json');
  if (!res.ok) throw new Error('Không thể tải knowledge base.');
  KB = await res.json();
  return KB;
}

// ─── 1. NAVIGATION LOGIC ──────────────────────────────────────────────────────
function switchView(viewId) {
  document.querySelectorAll('.view-section').forEach(el => {
    el.classList.add('hidden');
    el.classList.remove('active');
  });
  const target = document.getElementById(viewId);
  if (!target) return;
  target.classList.remove('hidden');
  target.classList.add('active');
  const header = document.getElementById('app-header');
  if (header) header.style.display = (viewId === 'view-login') ? 'none' : '';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function resetAll() {
  const form = document.getElementById('numerology-form');
  if (form) form.reset();
  REPORT = null;
  switchView('view-input');
}

// ─── 2. FORM SUBMISSION ───────────────────────────────────────────────────────
async function handleSubmit(e) {
  e.preventDefault();
  const name = (document.getElementById('fullname')?.value || '').trim();
  const nickname = (document.getElementById('nickname')?.value || '').trim();
  const gender = document.getElementById('gender')?.value || 'male';

  // DOB from 3 dropdowns
  const day = document.getElementById('dob-day')?.value;
  const month = document.getElementById('dob-month')?.value;
  const year = document.getElementById('dob-year')?.value;

  if (!day || !month || !year) {
    showFormError('⚠️ Vui lòng chọn đầy đủ Ngày, Tháng, Năm sinh!');
    return;
  }

  const dob = String(day).padStart(2, '0') + '/' + String(month).padStart(2, '0') + '/' + year;
  if (!name) { showFormError('⚠️ Vui lòng nhập họ và tên!'); return; }

  switchView('view-loading');

  try {
    const kb = await loadKB();
    const currentYear = new Date().getFullYear();
    const curMonth = new Date().getMonth() + 1;

    REPORT = NumerologyEngine.generateReport(name, dob, kb, { currentYear });
    REPORT._nickname = nickname || name.split(' ').pop();
    REPORT._gender = gender;
    REPORT._displayName = nickname || name;

    buildSummaryDashboard(REPORT, currentYear);
    buildDetailedReport(REPORT, currentYear, curMonth);

    setTimeout(() => switchView('view-summary'), 900);

  } catch (err) {
    showFormError('⚠️ Lỗi: ' + escapeHtml(err.message));
    switchView('view-input');
  }
}



// ─── 3. BUILD SUMMARY DASHBOARD (4-section professional layout) ──────────────────

// STATIC CAREER TABLE (pre-computed from KB via scripts/career_mapping_builder.js)
// LP+DEST career keyword analysis -> 5 groups, each row sums to 100
// Groups: KT = Ky thuat & CN | KD = Kinh doanh & QL | XH = Xa hoi & CN | ST = Sang tao & NT | NC = Nghien cuu & KH
const CAREER_TABLE = {
  '1': { KT: 5, KD: 58, XH: 8, ST: 5, NC: 4 },
  '2': { KT: 5, KD: 12, XH: 52, ST: 24, NC: 7 },
  '3': { KT: 5, KD: 8, XH: 10, ST: 67, NC: 10 },
  '4': { KT: 22, KD: 32, XH: 28, ST: 7, NC: 11 },
  '5': { KT: 14, KD: 38, XH: 16, ST: 18, NC: 14 },
  '6': { KT: 6, KD: 16, XH: 50, ST: 22, NC: 6 },
  '7': { KT: 8, KD: 10, XH: 16, ST: 8, NC: 58 },
  '8': { KT: 6, KD: 74, XH: 5, ST: 10, NC: 5 },
  '9': { KT: 6, KD: 8, XH: 55, ST: 26, NC: 5 },
  '11': { KT: 5, KD: 14, XH: 18, ST: 56, NC: 7 },
  '22': { KT: 38, KD: 38, XH: 8, ST: 8, NC: 8 },
  '33': { KT: 6, KD: 10, XH: 52, ST: 26, NC: 6 },
};
const CAREER_GROUPS = [
  { key: 'KT', label: 'Nhóm ngành Kỹ thuật & Công nghệ' },
  { key: 'KD', label: 'Nhóm ngành Kinh doanh & Quản lý' },
  { key: 'XH', label: 'Nhóm ngành Xã hội & Con người' },
  { key: 'ST', label: 'Nhóm ngành Sáng tạo & Nghệ thuật' },
  { key: 'NC', label: 'Nhóm ngành Nghiên cứu & Khoa học' },
];

// 9 PERSONALITY GROUPS (Pythagoras Birth Chart positions 1-9)
const PERSONALITY_GROUPS = [
  { num: 1, label: 'Mạnh mẽ – Độc lập – Tự tin', color: '#ef4444' },
  { num: 2, label: 'Lắng nghe – Khéo léo – Nhạy cảm', color: '#f97316' },
  { num: 3, label: 'Sáng tạo – Hoạt bát – Lạc quan', color: '#eab308' },
  { num: 4, label: 'Cẩn thận – Cầu toàn – Thực tế', color: '#22c55e' },
  { num: 5, label: 'Năng động – Linh hoạt – Tò mò', color: '#14b8a6' },
  { num: 6, label: 'Quan tâm – Yêu thương – Kiểm soát', color: '#3b82f6' },
  { num: 7, label: 'Thông thái – Khám phá – Truyền đạt', color: '#6366f1' },
  { num: 8, label: 'Công bằng – Tập trung – Lý tưởng', color: '#8b5cf6' },
  { num: 9, label: 'Trách nhiệm – Rộng lượng – Hào phóng', color: '#ec4899' },
];

// INDICATOR definitions for Section 1
const INDICATOR_DEFS = [
  { label: 'Đường đời', desc: 'Điểm mạnh yếu, tổng quan về đường đời, các sự phù hợp trong tình yêu, sự nghiệp, mối quan hệ…', get: r => r.life_path?.number },
  { label: 'Trưởng thành', desc: 'Giá trị, lĩnh vực tiềm năng mạnh nhất trong giai đoạn trưởng thành (khoảng từ 40 tuổi).', get: r => r.maturity_number?.number },
  { label: 'Năng lực tự nhiên', desc: 'Năng khiếu bẩm sinh, những tài năng và năng lực hỗ trợ bạn trên đường đời.', get: r => r.birthday_number?.number },
  { label: 'Năng lực tư duy', desc: 'Cách trí óc bạn hoạt động, mức độ thông minh và khả năng tư duy logic.', get: r => r.cognitive_ability?.number },
  { label: 'Thái độ', desc: 'Cách bạn phản ứng bản năng đầu tiên, đặc biệt là trong những lần gặp đầu.', get: r => r.attitude_number?.number },
  { label: 'Vượt khó', desc: 'Cách bạn phản ứng với thử thách, càng lợi khuyến để đối mặt với khó khăn hiệu quả nhất.', get: r => r.soul_challenge?.number },
  { label: 'Sứ mệnh', desc: 'Cách bạn đạt được mục tiêu lớn hơn, định hướng vào môi giai đoạn cuộc đời bạn.', get: r => r.destiny_number?.number },
  { label: 'Thử thách Sứ mệnh', desc: 'Những kiểu thử thách thường gặp nhất mà bạn bắt buộc phải vượt qua.', get: r => r.destiny_challenge?.number },
  { label: 'Linh hồn', desc: 'Sự kháo sát sâu nhất: điều gì thực sự khiến bạn thỏa mãn và trọn vẹn.', get: r => r.soul_number?.number },
  { label: 'Thử thách Linh hồn', desc: 'Trở ngại nội tâm bạn phải vượt qua để trở nên trưởng thành hơn.', get: r => r.soul_challenge?.number },
  { label: 'Nhân cách', desc: 'Cách người khác cảm nhận bạn qua phản ứng, lựa chọn, lời nói và việc làm của bạn.', get: r => r.personality_number?.number },
  { label: 'Thử thách Nhân cách', desc: 'Giúp cải thiện cách người khác cảm nhận bạn, các điểm cần rèn luyện thêm.', get: r => r.personality_challenge?.number },
];

// Compute career % (deterministic, LP weight 55% + DEST weight 45%)
function calcCareerGroups(lpNum, destNum) {
  const fallback = CAREER_TABLE['5'];
  const lp = CAREER_TABLE[String(lpNum)] || fallback;
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
// - Minimum floor: 3% per group (không nhóm nào = 0%)
// - Maximum cap: 40% per group (tránh 1 nhóm chiếm quá nhiều)
// - Total always normalized to 100%
function calcPersonalityGroups(dob) {
  const parts = dob.split('/');
  const digits = (parts[0] + parts[1] + parts[2]).split('').map(Number).filter(n => n >= 1 && n <= 9);
  const total = digits.length || 1;
  const counts = {};
  for (let i = 1; i <= 9; i++) counts[i] = 0;
  for (const n of digits) counts[n]++;

  const MIN_PCT = 3;  // Sàn tối thiểu mỗi nhóm
  const MAX_PCT = 40; // Trần tối đa mỗi nhóm

  // Step 1: raw % từ tần suất chữ số
  let result = PERSONALITY_GROUPS.map(g => ({
    ...g,
    raw: Math.round((counts[g.num] / total) * 100)
  }));

  // Step 2: Áp sàn tối thiểu. Trừ phần bù từ nhóm lớn nhất
  let iter = 0;
  while (iter < 100) {
    const zeroIdx = result.findIndex(g => g.raw < MIN_PCT);
    if (zeroIdx === -1) break;
    const deficit = MIN_PCT - result[zeroIdx].raw;
    result[zeroIdx].raw = MIN_PCT;
    // Lấy từ nhóm lớn nhất
    const maxIdx = result.reduce((mi, x, i) => (i !== zeroIdx && x.raw > result[mi].raw) ? i : mi, 0);
    result[maxIdx].raw = Math.max(MIN_PCT, result[maxIdx].raw - deficit);
    iter++;
  }

  // Step 3: Cap tối đa MAX_PCT, phân bổ phần thừa cho nhóm nhỏ nhất
  iter = 0;
  while (iter < 100) {
    const overIdx = result.findIndex(g => g.raw > MAX_PCT);
    if (overIdx === -1) break;
    const excess = result[overIdx].raw - MAX_PCT;
    result[overIdx].raw = MAX_PCT;
    const minIdx = result.reduce((mi, x, i) => (i !== overIdx && x.raw < result[mi].raw) ? i : mi, 0);
    result[minIdx].raw += excess;
    iter++;
  }

  // Step 4: Normalize tổng = 100 (điều chỉnh nhóm lớn nhất)
  const sum = result.reduce((a, b) => a + b.raw, 0);
  if (sum !== 100) {
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
  const dob = r.input.dob;
  const lp = r.life_path?.number;
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
    + sumSectionHeader(1, 'TỔNG HỢP CÁC CHỈ SỐ QUAN TRỌNG')
    + '<p class="sum-intro">Phần này tóm tắt toàn bộ các chỉ số quan trọng trong báo cáo. Mỗi con số đại diện một khía cạnh độc lập về tính cách, năng lực và hành trình của bạn. Dùng phần này như một <strong>bản đồ tổng quan</strong> trước khi đọc sâu từng chỉ số bên dưới.</p>'
    + '<div class="ind-grid">' + indRows + '</div>'
    + '</div>';

  // === Section 2: Personal Cycle ===
  const sec2 = '<div class="sum-section">'
    + sumSectionHeader(2, 'CHU KỲ VẬN SỐ')
    + '<p class="sum-intro">Mỗi năm trong cuộc đời bạn mang một con số cá nhân riêng, lặp lại theo vòng 9 năm. <strong>Biểu đồ đi lên</strong> — nhiều cơ hội, thay đổi bên ngoài. <strong>Biểu đồ đi xuống</strong> — thích hợp phát triển nội tâm và tích lũy. Năm hiện tại được đánh dấu nổi bật.</p>'
    + '<div id="summary-line-chart" style="width:100%;height:240px;"></div>'
    + '</div>';

  // === Section 3: Personality Groups (sorted by %, rank 1 = highest) ===
  const persSorted = calcPersonalityGroups(dob).sort((a, b) => b.raw - a.raw);
  let persHTML = '';
  for (let i = 0; i < persSorted.length; i += 2) {
    const a = persSorted[i], b = persSorted[i + 1];
    // rank: vị trí sau khi sort theo %, không phải con số thần số học
    const bar = (g, rank) => g
      ? '<div class="pers-item"><div class="pers-top"><span class="pers-dot" style="background:' + g.color + '"></span><span class="pers-lbl"><strong>' + rank + '.</strong> ' + g.label + '</span><span class="pers-pct">' + g.raw + '%</span></div><div class="pers-track"><div class="pers-fill" style="width:' + g.raw + '%;background:' + g.color + '"></div></div></div>'
      : '';
    persHTML += '<div class="pers-row">' + bar(a, i + 1) + bar(b, i + 2) + '</div>';
  }
  const sec3 = '<div class="sum-section">'
    + sumSectionHeader(3, 'NHÓM TÍNH CÁCH THEO BẢN NGÃ')
    + '<p class="sum-intro">Đây là các nhóm tính cách bẩm sinh được phân tích từ <strong>biểu đồ Pythagoras</strong> ngày sinh của bạn. Phần này quan trọng nhất khi bạn còn trẻ. Nhóm tính cách có dao động thấp nhất chính là điểm bạn nên rèn luyện thêm. Tổng tất cả các nhóm luôn bằng 100%.</p>'
    + '<div class="pers-grid">' + persHTML + '</div>'
    + '</div>';

  // === Section 4: Career Groups ===
  const careerGroups = calcCareerGroups(lp, dest);
  let careerHTML = '';
  for (const g of careerGroups) {
    careerHTML += '<div class="career-item"><span class="career-lbl">' + g.label + ':</span><div class="career-track"><div class="career-fill" style="width:' + g.pct + '%"></div></div><span class="career-pct">' + g.pct.toFixed(1) + '%</span></div>';
  }
  const sec4 = '<div class="sum-section">'
    + sumSectionHeader(4, 'TỈ LỆ NHÓM NGÀNH PHÙ HỢP VỚI BẠN')
    + '<p class="sum-intro">Việc xác định nhóm ngành được tiến hành qua 2 bước: <strong>Bước 1</strong> — xác định điểm mạnh, điểm yếu qua 3 chỉ số chính (số đường đời, linh hồn, sứ mệnh). <strong>Bước 2</strong> — mapping vào 5 nhóm ngành dựa trên từ khóa nghề nghiệp trong knowledge base thần số học. Kết quả được sắp xếp từ cao đến thấp.</p>'
    + '<h4 class="career-result-title">KếT QUẢ PHÂN TÍCH TỆ LỆ PHÙ HỢP CỦA BẠN</h4>'
    + '<div class="career-bars">' + careerHTML + '</div>'
    + '</div>';

  // === Inject into DOM ===
  document.getElementById('sum-name').textContent = name;
  document.getElementById('sum-dob').textContent = dob;
  document.getElementById('sum-content').innerHTML = sec1 + sec2 + sec3 + sec4;

  // Draw chart after DOM update
  const lineData = calcLineChartData(r, currentYear, -5, 5);
  NumerologyCharts.drawLineChart('summary-line-chart', lineData);
}

function showDetailedReport() {
  switchView('view-details');
}

// S3 — Dùng NumerologyEngine.reduce() thay vì tự viết
function calcLineChartData(r, currentYear, from, to) {
  const parts = r.input.dob.split('/');
  const d = parseInt(parts[0]);
  const m = parseInt(parts[1]);
  const NE = window.NumerologyEngine;
  const data = [];
  for (let i = from; i <= to; i++) {
    const y = currentYear + i;
    const ySum = NE ? NE.reduce(y, false) : String(y).split('').reduce((a, b) => a + parseInt(b), 0);
    const val = NE ? NE.reduce(d + m + ySum, false) : (() => { let v = d + m + ySum; while (v > 9) v = String(v).split('').reduce((a, b) => a + parseInt(b), 0); return v; })();
    data.push({ label: y, value: val, isCurrent: i === 0 });
  }
  return data;
}

// ─── 4. TEXT SYNTHESIZER v3.0 (wraps NarrativeTemplates) ───────────────────────
const S = {
  NT: NarrativeTemplates,

  // Số chủ đạo — sử dụng NarrativeTemplates literary narrative
  lifePath(num, d, name, ctx) {
    const key = String(num);
    let html = '';
    if (S.NT.lifePath[key]) html = S.NT.lifePath[key](name || 'Bạn');
    else if (!d) return S._noData('đường đời');
    else html = S.NT.generic('Đường Đời', num, name || 'Bạn', d);
    if (ctx) html += S._lifePathCtxBlock(num, ctx, name || 'Bạn');
    return html;
  },

  // Linh hồn — per-number deep narrative (fell back to generic if no template)
  soul(num, d, name, ctx) {
    const n = name || 'Bạn';
    // Use per-number soul template if exists
    const tmpl = S.NT.soul[num] || S.NT.soul[String(num)];
    let html = tmpl ? tmpl(n) : (d ? S.NT.generic('Linh Hồn', num, n, d) : S._noData('linh hồn'));
    if (ctx) html += S._soulCtxBlock(num, ctx, n);
    return html;
  },

  // Sứ mệnh — use named template if exists, else generic
  destiny(num, d, name, ctx) {
    const n = name || 'Bạn';
    const tmpl = S.NT.destiny && (S.NT.destiny[num] || S.NT.destiny[String(num)]);
    let html = tmpl ? tmpl(n, d) : (d ? S.NT.generic('Sứ Mệnh', num, n, d) : S._noData('sứ mệnh'));
    if (ctx) html += S._destinyCtxBlock(num, ctx, n);
    return html;
  },

  // Nhân cách — use named template if exists, else generic
  personality(num, d, name, ctx) {
    const n = name || 'Bạn';
    const tmpl = S.NT.personality && (S.NT.personality[num] || S.NT.personality[String(num)]);
    let html = tmpl ? tmpl(n, d) : (d ? S.NT.generic('Nhân Cách', num, n, d) : S._noData('nhân cách'));
    if (ctx) html += S._personalityCtxBlock(num, ctx, n);
    return html;
  },

  // Trưởng thành — use named template if exists, else generic
  maturity(num, d, name, ctx) {
    const n = name || 'Bạn';
    const tmpl = S.NT.maturity && (S.NT.maturity[num] || S.NT.maturity[String(num)]);
    let html = tmpl ? tmpl(n, d) : (d ? S.NT.generic('Trưởng Thành', num, n, d) : S._noData('trưởng thành'));
    if (ctx) html += S._maturityCtxBlock(num, ctx, n);
    return html;
  },

  // Birthday — use named template if exists, else generic
  birthday(num, d, name, rawDay) {
    const n = name || 'Bạn';
    // Try rawDay (e.g. 15) template first, then reduced num (e.g. 6)
    const raw = rawDay || num;
    const tmpl = S.NT.birthday && (S.NT.birthday[raw] || S.NT.birthday[String(raw)]
      || S.NT.birthday[num] || S.NT.birthday[String(num)]);
    if (tmpl) return tmpl(n, d);
    if (!d) return S._noData('ngày sinh');
    return S.NT.generic('Ngày Sinh', num, n, d);
  },

  // Attitude — use named template if exists, else generic
  attitude(num, d, name) {
    const n = name || 'Bạn';
    const tmpl = S.NT.attitude && (S.NT.attitude[num] || S.NT.attitude[String(num)]);
    if (tmpl) return tmpl(n, d);
    if (!d) return S._noData('thái độ');
    return S.NT.generic('Thái Độ', num, n, d);
  },

  // Personal year / month — full narrative
  personalPeriod(label, num, periodLabel, name, d) {
    return S.NT.personalPeriod(label, num, periodLabel, name || 'Bạn', d);
  },

  // Life cycles — full narrative
  lifeCycle(cycleNum, num, period, d, name) {
    return S.NT.lifeCycleNarrative(cycleNum, num, period, name || 'Bạn', d);
  },

  // Karmic debt — full rich
  karmicDebt(kd) {
    const d = kd.data;
    if (!d) return `<p class="synthetic-text" style="color:#b91c1c;">Gánh chịu <strong>Nợ nghiệp ${kd.number}</strong>. Cần đặc biệt chú ý trong hành trình này.</p>`;
    let t = `<div class="karmic-box">`;
    t += `<div class="karmic-title">⚖️ Nợ nghiệp số ${kd.number}</div>`;
    t += `<p class="synthetic-text">${d.description || d.meaning || ''}</p>`;
    if (d.how_to_reduce) t += `<p class="synthetic-text"><strong>Cách hóa giải:</strong> ${d.how_to_reduce}</p>`;
    if (d.negative_aspects && d.negative_aspects.length) {
      t += `<ul class="synthetic-list">`;
      d.negative_aspects.forEach(a => { t += `<li>${a}</li>`; });
      t += `</ul>`;
    }
    t += `</div>`;
    return t;
  },

  // Karmic lesson per missing number — dùng narrative template nếu có
  karmicLesson(num, info, name) {
    const tmpl = NarrativeTemplates.karmicLesson?.[num];
    if (tmpl) return tmpl(name || 'Bạn');
    if (!info) return `<p class="synthetic-text">Số <strong>${num}</strong> vắng mặt trong biểu đồ tên của bạn — đây là bài học nghiệp bạn cần học và phát triển trong kiếp này.</p>`;
    return `<div class="lesson-block"><strong>Bài học số ${num} — ${info.title || ''}:</strong> ${info.description || info.meaning || ''} ${info.how_to_learn ? '<br><em>Cách học: ' + info.how_to_learn + '</em>' : ''}</div>`;
  },

  // General approach numbers — full narrative
  approachNumber(label, num, d, name) {
    return S.NT.generic(label, num, name || 'Bạn', d);
  },

  _noData(name) {
    return `<p class="synthetic-text" style="color:#94a3b8;font-style:italic;">Dữ liệu chỉ số ${name} đang được cập nhật.</p>`;
  },

  // ─── PERSONALIZATION CROSS-REFERENCE BLOCKS (A1-A5) ─────────────────────────
  // Được append sau template chính bởi S synthesizer. Templates gốc không thay đổi.

  _lifePathCtxBlock(lpNum, ctx, name) {
    const soul = ctx.soul;
    const bday = ctx.birthday;
    const same = lpNum === soul;
    const energyMatch = ([1, 3, 5, 9].includes(lpNum) && [1, 3, 5, 9].includes(soul)) ||
      ([2, 4, 6, 8].includes(lpNum) && [2, 4, 6, 8].includes(soul));
    let insight = '';
    if (same) {
      insight = `Linh hồn số <strong>${soul}</strong> của bạn hoàn toàn đồng nhất với Đường đời — điều cực kỳ hiếm gặp. Những gì bạn khao khát sâu nhất bên trong chính xác là những gì thiên mệnh dẫn dắt bạn thực sống. Hạnh phúc và bình an đến với bạn tự nhiên hơn khi bạn lắng nghe tiếng gọi nội tâm thay vì chạy theo kỳ vọng bên ngoài.`;
    } else if (energyMatch) {
      insight = `Linh hồn số <strong>${soul}</strong> cộng hưởng hài hòa với Đường đời — năng lượng bên trong và bên ngoài chảy cùng một nhịp, tạo ra sự vững vàng và nhất quán nội tâm đặc biệt. Hành động từ trái tim thường đồng thời là hành động đúng với thiên mệnh.`;
    } else {
      insight = `Linh hồn số <strong>${soul}</strong> tạo ra chiều kích nội tâm khác biệt với Đường đời — bên ngoài bạn vận hành theo số ${lpNum}, nhưng sâu bên trong luôn có một khao khát riêng từ năng lượng số ${soul}. Hiểu được sự đa chiều này là chìa khóa để bạn sống trọn vẹn mà không bị xé ngang.`;
    }
    return `<div class="insight-box" style="margin-top:1rem;border-color:#7c3aed;">🔗 <strong>Giao điểm Đường đời ↔ Linh hồn (${soul}) &amp; Ngày sinh (${bday}):</strong> ${insight} Ngày sinh số <strong>${bday}</strong> của bạn bổ sung năng lực tự nhiên, hỗ trợ Đường đời số ${lpNum} phát triển theo cách riêng biệt và độc đáo.</div>`;
  },

  _soulCtxBlock(soulNum, ctx, name) {
    const lp = ctx.lifePath;
    const same = soulNum === lp;
    const energyMatch = ([1, 3, 5, 9].includes(soulNum) && [1, 3, 5, 9].includes(lp)) ||
      ([2, 4, 6, 8].includes(soulNum) && [2, 4, 6, 8].includes(lp));
    let crossRef = '';
    if (same) {
      crossRef = `Điều đặc biệt là Linh hồn số <strong>${soulNum}</strong> hoàn toàn khớp với Đường đời số <strong>${lp}</strong> của bạn — rất hiếm gặp. Điều bạn khao khát sâu nhất chính xác là điều thiên mệnh dẫn dắt bạn thực sống. Hạnh phúc đến tự nhiên khi bạn hành động theo tiếng gọi nội tâm thay vì tiêu chuẩn của người khác.`;
    } else if (energyMatch) {
      crossRef = `Linh hồn số <strong>${soulNum}</strong> cộng hưởng hài hòa với Đường đời số <strong>${lp}</strong>. Khao khát nội tâm được Đường đời khuếch đại — khi bạn hành động từ trái tim, bạn đồng thời đang vận hành đúng với thiên mệnh.`;
    } else {
      crossRef = `Với Đường đời số <strong>${lp}</strong>, Linh hồn số <strong>${soulNum}</strong> tạo ra lực kéo nội tâm thú vị. Bên ngoài bạn đang học những bài học của số ${lp}, nhưng sâu bên trong khao khát những điều của số ${soulNum}. Hiểu sự khác biệt này giúp bạn sống trọn vẹn — vừa hoàn thành con đường đời, vừa nuôi dưỡng khao khát tinh tế của linh hồn.`;
    }
    return `<p class="nar" style="border-left:3px solid #7c3aed;padding-left:1rem;margin-top:1rem;"><strong>✦ Linh hồn trong tổng thể biểu đồ của ${name}:</strong> ${crossRef}</p>`;
  },

  _destinyCtxBlock(destNum, ctx, name) {
    const lp = ctx.lifePath;
    const bday = ctx.birthday;
    const same = destNum === lp;
    const energyMatch = ([1, 3, 5, 9].includes(destNum) && [1, 3, 5, 9].includes(lp)) ||
      ([2, 4, 6, 8].includes(destNum) && [2, 4, 6, 8].includes(lp));
    const interactionDesc = same
      ? `Hiếm gặp — Sứ mệnh số <strong>${destNum}</strong> hoàn toàn trùng với Đường đời số <strong>${lp}</strong>. Không có mâu thuẫn giữa việc bạn là ai và bạn được giao làm gì — đây là sự thống nhất hoàn hảo, giúp bạn hành động từ trạng thái nguyên vẹn và không chia cắt.`
      : energyMatch
        ? `Sứ mệnh số <strong>${destNum}</strong> cộng hưởng tốt với Đường đời số <strong>${lp}</strong> — cùng dòng năng lượng, giúp bạn lan tỏa sứ mệnh một cách tự nhiên và mạnh mẽ qua chính con người của mình.`
        : `Sứ mệnh số <strong>${destNum}</strong> và Đường đời số <strong>${lp}</strong> mang hai năng lượng bổ trợ nhau. Đường đời định hình cách bạn tiếp cận cuộc sống, Sứ mệnh mở ra chiều kích đóng góp rộng hơn. Hãy để cả hai hướng dẫn nhau — không phải cạnh tranh nhau.`;
    return `<p class="nar" style="border-left:3px solid #2563eb;padding-left:1rem;margin-top:1rem;"><strong>✦ Sứ mệnh trong tổng thể biểu đồ của ${name}:</strong> ${interactionDesc} Năng lực tự nhiên từ ngày sinh số <strong>${bday}</strong> là một trong những công cụ quý giá để bạn hiện thực hóa sứ mệnh này.</p>`;
  },

  _personalityCtxBlock(persNum, ctx, name) {
    const soul = ctx.soul;
    const same = persNum === soul;
    const energyMatch = ([1, 3, 5, 9].includes(persNum) && [1, 3, 5, 9].includes(soul)) ||
      ([2, 4, 6, 8].includes(persNum) && [2, 4, 6, 8].includes(soul));
    const persDesc = same
      ? `Nhân cách số <strong>${persNum}</strong> hoàn toàn khớp với Linh hồn số <strong>${soul}</strong>. Bạn là người hiếm có: hình ảnh bên ngoài phản ánh chân thực thế giới nội tâm — không có khoảng cách giữa "bạn trước mắt người khác" và "bạn thật sự bên trong". Đây là nền tảng của sự xác thực đích thực.`
      : energyMatch
        ? `Nhân cách số <strong>${persNum}</strong> cộng hưởng hài hòa với Linh hồn số <strong>${soul}</strong>. Hình ảnh bạn tạo ra bên ngoài phản ánh khá chân thực những gì bên trong — người ta thường thấy bạn gần với con người thật của mình.`
        : `Nhân cách số <strong>${persNum}</strong> khác với Linh hồn số <strong>${soul}</strong> — bên ngoài bạn hiện ra một vẻ khác với tần số bên trong. Đây không phải giả tạo mà là sự đa chiều tự nhiên của một con người có chiều sâu. Khi người xung quanh dần hiểu bạn hơn, khoảng cách này trở thành sức hút bí ẩn đặc biệt.`;
    return `<p class="nar" style="border-left:3px solid #d97706;padding-left:1rem;margin-top:1rem;"><strong>✦ Nhân cách trong tổng thể biểu đồ của ${name}:</strong> ${persDesc}</p>`;
  },

  _maturityCtxBlock(matNum, ctx, name) {
    const lp = ctx.lifePath;
    const dest = ctx.destiny;
    return `<p class="nar" style="border-left:3px solid #059669;padding-left:1rem;margin-top:1rem;"><strong>✦ Số Trưởng Thành ${matNum} trong tổng thể biểu đồ của ${name}:</strong> Con số này được hình thành từ sự tổng hợp của Đường đời số <strong>${lp}</strong> (năng lượng cốt lõi của bạn) và Sứ mệnh số <strong>${dest}</strong> (điều bạn đang theo đuổi). Đây là điểm tiến hóa cuối cùng — khi những bài học từ cả hai chỉ số được tích hợp hoàn toàn, bạn trở thành phiên bản đầy đủ nhất của chính mình. Giai đoạn trưởng thành không phải về việc thay đổi con người — mà là tinh lọc và kết tinh những gì đã luôn hiện hữu trong bạn.</p>`;
  }
};


// ─── 5. BUILD DETAILED REPORT (30 INDICATORS) ─────────────────────────────────
function secBlock(idx, title, num, numLabel, bodyHtml, locked) {
  const body = (locked && !checkUnlockStatus()) ? wrapLocked(bodyHtml) : bodyHtml;
  return `
    <div class="section-block">
      <div class="index-title">
        <span class="number">${idx}.</span> ${title}
        ${num !== null ? `<span class="num-badge">${num}${numLabel ? ' · ' + numLabel : ''}</span>` : ''}
      </div>
      ${body}
    </div>
  `;
}

function secHeader(title) {
  return `<div class="section-header">${title}</div>`;
}

// ─── HELPER: Render Life Path Extra sections ──────────────────────────────────
function renderLifePathExtra(num, name) {
  const n = (typeof num === 'number') ? num : parseInt(num);
  const NT = NarrativeTemplates;
  const data = NT.lifePathExtra && NT.lifePathExtra[n];
  if (!data) return '';

  let html = '';

  // 1. Người nổi tiếng
  if (data.nguoiNoiTieng && data.nguoiNoiTieng.length) {
    const cards = data.nguoiNoiTieng.map(p => `
      <div class="lp-famous-card">
        <div class="lp-famous-name">${p.name}</div>
        <div class="lp-famous-field">${p.field}</div>
        ${p.note ? `<div class="lp-famous-note">${p.note}</div>` : ''}
      </div>`).join('');
    html += `
    <div class="lp-extra-section">
      <div class="lp-extra-heading">🌟 Người Nổi Tiếng Cùng Số Đường Đời ${n}</div>
      <div class="lp-famous-grid">${cards}</div>
    </div>`;
  }

  // 2. Mối quan hệ tương thích
  if (data.tuongThich) {
    const tc = data.tuongThich;
    const goodNums = (tc.tot || []).map(x => `<div class="lp-compat-num">${x}</div>`).join('');
    const badNums = (tc.khong || []).map(x => `<div class="lp-compat-num">${x}</div>`).join('');
    html += `
    <div class="lp-extra-section">
      <div class="lp-extra-heading">💞 Mối Quan Hệ Tương Thích</div>
      <div class="lp-compat-wrapper">
        <div class="lp-compat-good">
          <div class="lp-compat-label">✅ Tương thích tốt nhất</div>
          <div class="lp-compat-numbers">${goodNums}</div>
          <div class="lp-compat-desc">${tc.moTaTot || ''}</div>
        </div>
        <div class="lp-compat-bad">
          <div class="lp-compat-label">⚠️ Ít tương thích nhất</div>
          <div class="lp-compat-numbers">${badNums}</div>
          <div class="lp-compat-desc">${tc.moTaKhong || ''}</div>
        </div>
      </div>
      ${tc.chiTiet ? `<div class="lp-extra-body">${tc.chiTiet}</div>` : ''}
    </div>`;
  }

  // 3. Tình duyên
  if (data.tinhDuyen) {
    html += `
    <div class="lp-extra-section">
      <div class="lp-extra-heading">💖 Tình Duyên</div>
      <div class="lp-extra-body">${data.tinhDuyen}</div>
    </div>`;
  }

  // 4. Bài học & Thử thách
  if (data.baiHocThuThach) {
    html += `
    <div class="lp-extra-section">
      <div class="lp-extra-heading">📖 Bài Học &amp; Thử Thách</div>
      <div class="lp-extra-body">${data.baiHocThuThach}</div>
    </div>`;
  }

  // 5. Bạn bè & Gia đình
  if (data.banBeGiaDinh) {
    html += `
    <div class="lp-extra-section">
      <div class="lp-extra-heading">👨‍👩‍👧 Bạn Bè &amp; Gia Đình</div>
      <div class="lp-extra-body">${data.banBeGiaDinh}</div>
    </div>`;
  }

  // 6. Du lịch & Sở thích
  if (data.duLichSoThich) {
    html += `
    <div class="lp-extra-section">
      <div class="lp-extra-heading">✈️ Du Lịch &amp; Sở Thích</div>
      <div class="lp-extra-body">${data.duLichSoThich}</div>
    </div>`;
  }

  // 7. Nghề nghiệp
  if (data.ngheNghiep) {
    html += `
    <div class="lp-extra-section">
      <div class="lp-extra-heading">💼 Nghề Nghiệp Phù Hợp</div>
      <div class="lp-extra-body">${data.ngheNghiep}</div>
    </div>`;
  }

  return html;
}

// ─── HELPER: Build Life Cycles Section (redesigned) ──────────────────────────
function buildLifeCyclesSection(r, currentYear, name) {
  const c1 = r.life_cycles.cycle1;
  const c2 = r.life_cycles.cycle2;
  const c3 = r.life_cycles.cycle3;
  const birthYear = r._dob_y;
  const n = name || 'Bạn';

  // Tính năm dựa vào tuổi
  const year1End = birthYear + c1.endAge;
  const year2Start = birthYear + c2.startAge;
  const year2End = birthYear + c2.endAge;
  const year3Start = birthYear + c3.startAge;

  // Màu từng chu kỳ
  const cycleColors = [
    { bg: '#4f46e5', glow: 'rgba(79,70,229,0.4)', label: 'GIEO HẠT', icon: '🌱' },
    { bg: '#7c3aed', glow: 'rgba(124,58,237,0.4)', label: 'CHÍN', icon: '🌿' },
    { bg: '#c2410c', glow: 'rgba(194,65,12,0.4)', label: 'THU HOẠCH', icon: '🌾' },
  ];

  // ── PHẦN 1: 3 vòng tròn tổng quan ──
  const circleItems = [
    { num: c1.number, age: `${c1.startAge} \u2013 ${c1.endAge} tu\u1ed5i`, years: `${birthYear} \u2013 ${year1End}` },
    { num: c2.number, age: `${c2.startAge} \u2013 ${c2.endAge} tu\u1ed5i`, years: `${year2Start} \u2013 ${year2End}` },
    { num: c3.number, age: `${c3.startAge} tu\u1ed5i tr\u1edf \u0111i`, years: `${year3Start} tr\u1edf \u0111i` },
  ];

  const circleHtml = circleItems.map((cy, i) => {
    const col = cycleColors[i];
    return `
    <div class="lc-circle-item">
      <div class="lc-circle" style="--lc-color:${col.bg};--lc-glow:${col.glow};">
        <span class="lc-number">${cy.num}</span>
      </div>
      <div class="lc-stage-icon">${col.icon}</div>
      <div class="lc-stage-name" style="color:${col.bg}">${col.label}</div>
      <div class="lc-age-range">${cy.age}</div>
      <div class="lc-year-range">${cy.years}</div>
    </div>`;
  }).join('');

  // ── PHẦN 2: Văn xuôi intro ──
  const introHtml = `
  <div class="lc-intro-box">
    <p class="lc-intro-text">Cu\u1ed9c \u0111\u1eddi m\u1ecdi ng\u01b0\u1eddi th\u01b0\u1eddng s\u1ebd tr\u1ea3i qua ba giai \u0111o\u1ea1n tuy\u1ec7t v\u1eddi tr\u00ean \u0111\u01b0\u1eddng \u0111\u1eddi. V\u1ec1 m\u1eb7t s\u1ed1 h\u1ecdc, ba th\u1eddi k\u1ef3 n\u00e0y \u2014 <strong>Gieo H\u1ea1t, Ch\u00edn, Thu Ho\u1ea1ch</strong> \u2014 v\u00e0 c\u00e1c \u0111\u1eb7c \u0111i\u1ec3m ch\u00ednh c\u1ee7a ch\u00fang \u0111\u01b0\u1ee3c m\u00f4 t\u1ea3 b\u1eb1ng c\u00e1c con s\u1ed1 c\u1ee7a chu k\u1ef3 \u0111\u01b0\u1eddng \u0111\u1eddi.</p>
    <p class="lc-intro-text">Chu k\u1ef3 \u0111\u1ea7u ti\u00ean <strong>(Gieo H\u1ea1t)</strong> th\u1ec3 hi\u1ec7n giai \u0111o\u1ea1n \u0111\u1ea7u c\u1ee7a cu\u1ed9c s\u1ed1ng \u2014 \u0111\u01b0\u1ee3c v\u00ed nh\u01b0 s\u1ef1 l\u1edbn l\u00ean c\u1ee7a h\u1ea1t gi\u1ed1ng, m\u1ed9t giai \u0111o\u1ea1n m\u00e0 b\u1ea1n ph\u1ea3i m\u00f2 m\u1eabm \u0111\u1ec3 t\u00ecm ra b\u1ea3n ch\u1ea5t th\u1eadt s\u1ef1 c\u1ee7a m\u00ecnh. T\u1ea3nh h\u01b0\u1edfng c\u1ee7a chu k\u1ef3 n\u00e0y r\u1ea5t th\u1ea5p trong th\u1eddi th\u01a1 \u1ea5u v\u00e0 th\u1ec3 hi\u1ec7n ro nh\u1ea5t t\u1eeb cu\u1ed1i tu\u1ed5i thi\u1ebfu ni\u00ean tr\u1edf \u0111i.</p>
    <p class="lc-intro-text">Chu k\u1ef3 th\u1ee9 hai <strong>(Ch\u00edn)</strong> c\u00f3 th\u1ec3 \u0111\u01b0\u1ee3c so s\u00e1nh v\u1edbi qu\u00e1 tr\u00ecnh ch\u00edn c\u1ee7a tr\u00e1i c\u00e2y. \u0110\u00e2y l\u00e0 l\u00fac con ng\u01b0\u1eddi \u0111\u1ea7y \u0111\u1ee7 ti\u1ec1m n\u0103ng nh\u1ea5t, t\u00ecm\u0111\u01b0\u1ee3c v\u1ecb tr\u00ed c\u1ee7a m\u00ecnh tr\u00ean th\u1ebf gi\u1edbi v\u00e0 m\u1ee9c \u0111\u1ed9 \u1ea3nh h\u01b0\u1edfng \u0111\u1ebfn m\u00f4i tr\u01b0\u1eddng xung quanh ng\u00e0y c\u00e0ng l\u1edbn h\u01a1n.</p>
    <p class="lc-intro-text">Chu k\u1ef3 th\u1ee9 ba <strong>(Thu Ho\u1ea1ch)</strong> \u0111\u1ea1i di\u1ec7n cho s\u1ef1 ph\u00e1t tri\u1ec3n n\u1edf hoa c\u1ee7a con ng\u01b0\u1eddi b\u00ean trong ch\u00fang ta \u2014 l\u00e0 m\u00f9a thu ho\u1ea1ch nh\u1eefng g\u00ec b\u1ea1n \u0111\u00e3 gieo tr\u1ed3ng trong n\u1eeda h\u00e0nh tr\u00ecnh tr\u01b0\u1edbc c\u1ee7a cu\u1ed9c \u0111\u1eddi.</p>
  </div>`;

  // ── PHẦN 3: Chi tiết từng giai đoạn ──
  const phaseExtra = NarrativeTemplates.lifeCyclePhaseExtra || {};
  const phaseLabels = [
    { title: '\uD83C\uDF31 Giai \u0110o\u1ea1n 1 \u2014 Ni\u00ean Thi\u1ebfu (Gieo H\u1ea1t)', sub: `S\u1ed1 ${c1.number} | ${c1.startAge} \u2013 ${c1.endAge} tu\u1ed5i (${birthYear} \u2013 ${year1End})`, color: cycleColors[0].bg, num: c1.number, cycleIdx: 1, key: 'gieoHat', data: c1.data },
    { title: '\uD83C\uDF3F Giai \u0110o\u1ea1n 2 \u2014 Tr\u01b0\u1edfng Th\u00e0nh (Ch\u00edn)', sub: `S\u1ed1 ${c2.number} | ${c2.startAge} \u2013 ${c2.endAge} tu\u1ed5i (${year2Start} \u2013 ${year2End})`, color: cycleColors[1].bg, num: c2.number, cycleIdx: 2, key: 'truongThanh', data: c2.data },
    { title: '\uD83C\uDF3E Giai \u0110o\u1ea1n 3 \u2014 Vi\u00ean M\u00e3n (Thu Ho\u1ea1ch)', sub: `S\u1ed1 ${c3.number} | ${c3.startAge} tu\u1ed5i tr\u1edf \u0111i (${year3Start} tr\u1edf \u0111i)`, color: cycleColors[2].bg, num: c3.number, cycleIdx: 3, key: 'vienMan', data: c3.data },
  ];

  const detailHtml = phaseLabels.map(ph => {
    const extra = phaseExtra[ph.num] || phaseExtra[String(ph.num)] || {};
    const phaseNarrative = extra[ph.key] || '';
    const kbNarrative = ph.data
      ? NarrativeTemplates.lifeCycleNarrative(ph.cycleIdx, ph.num, '', n, ph.data)
      : '';
    return `
    <div class="lc-phase-block" style="--lc-phase-color:${ph.color};">
      <div class="lc-phase-header">
        <div class="lc-phase-title">${ph.title}</div>
        <div class="lc-phase-sub">${ph.sub}</div>
      </div>
      <div class="lc-phase-body">
        ${phaseNarrative ? `<p class="lc-phase-intro">${phaseNarrative}</p>` : ''}
        ${kbNarrative}
      </div>
    </div>`;
  }).join('');

  return `
  <div class="lc-circle-row">${circleHtml}</div>
  ${introHtml}
  <div class="lc-phases-wrapper">${detailHtml}</div>
  `;
}

// ─── HELPER: Calculate personal year/month numbers for arbitrary dates ─────────
function _reduceNum(n) {
  let x = n;
  while (x > 9 && x !== 11 && x !== 22 && x !== 33) {
    x = String(x).split('').reduce((s, d) => s + parseInt(d, 10), 0);
  }
  return x;
}
function calcPersonalYearNum(d, m, targetYear) {
  const ry = _reduceNum(String(targetYear).split('').reduce((s, c) => s + parseInt(c, 10), 0));
  return _reduceNum(d + m + ry);
}
function calcPersonalMonthNum(d, m, dob_y, targetMonth, targetYear) {
  const py = calcPersonalYearNum(d, m, targetYear);
  return _reduceNum(py + targetMonth);
}

// ─── PAYWALL HELPERS: Career & LifePath Free/Locked splits ────────────────────

/** Sec 3: Nhóm ngành — top-1 FREE, còn lại lock */
function buildCareerGroupFree(r) {
  const lp = r.life_path?.number;
  const dest = r.destiny_number?.number;
  const groups = calcCareerGroups(lp, dest);
  let html = '<p class="nar">Dựa trên Số Đường Đời <strong>' + lp + '</strong> và Số Sứ Mệnh <strong>' + dest + '</strong>:</p><div class="career-bars">';
  groups.forEach((g, i) => {
    const bar = '<div class="career-item"><span class="career-lbl">' + g.label + ':</span><div class="career-track"><div class="career-fill" style="width:' + g.pct + '%"></div></div><span class="career-pct">' + g.pct.toFixed(1) + '%</span></div>';
    if (i === 0 || checkUnlockStatus()) {
      html += bar;
    } else if (i === 1) {
      html += wrapLocked('');
      return;
    }
  });
  if (checkUnlockStatus()) html += '</div>';
  return html;
}

/**
 * renderLifePathExtraSections — hàm duy nhất thay thế 3 hàm cũ (W5 Refactor)
 * sections: 'free' | 'locked' | 'all'
 * - 'free':   người nổi tiếng, tương thích, tình duyên
 * - 'locked': bài học, bạn bè gia đình, du lịch, nghề nghiệp
 * - 'all':    tất cả (giống renderLifePathExtra cũ)
 */
function renderLifePathExtraSections(num, name, sections) {
  const n = (typeof num === 'number') ? num : parseInt(num);
  const data = NarrativeTemplates.lifePathExtra && NarrativeTemplates.lifePathExtra[n];

  // Fallback khi không có data (chỉ áp dụng cho mode 'free')
  if (!data) {
    if (sections === 'locked') return '';
    return `<p class="nar"><strong>Số Đường Đời ${n}</strong> — Đây là chỉ số cốt lõi định hình toàn bộ hành trình cuộc đời của bạn.</p>`;
  }

  let html = '';
  const showFree = sections === 'free' || sections === 'all';
  const showLocked = sections === 'locked' || sections === 'all';

  // — FREE sections —
  if (showFree) {
    if (data.nguoiNoiTieng && data.nguoiNoiTieng.length) {
      const cards = data.nguoiNoiTieng.map(p =>
        `<div class="lp-famous-card"><div class="lp-famous-name">${p.name}</div><div class="lp-famous-field">${p.field}</div>${p.note ? `<div class="lp-famous-note">${p.note}</div>` : ''}</div>`
      ).join('');
      html += `<div class="lp-extra-section"><div class="lp-extra-heading">🌟 Người Nổi Tiếng Cùng Số Đường Đời ${n}</div><div class="lp-famous-grid">${cards}</div></div>`;
    }
    if (data.tuongThich) {
      const tc = data.tuongThich;
      const good = (tc.tot || []).map(x => `<div class="lp-compat-num">${x}</div>`).join('');
      const bad = (tc.khong || []).map(x => `<div class="lp-compat-num">${x}</div>`).join('');
      html += `<div class="lp-extra-section"><div class="lp-extra-heading">💞 Mối Quan Hệ Tương Thích</div><div class="lp-compat-wrapper"><div class="lp-compat-good"><div class="lp-compat-label">✅ Tương thích tốt nhất</div><div class="lp-compat-numbers">${good}</div><div class="lp-compat-desc">${tc.moTaTot || ''}</div></div><div class="lp-compat-bad"><div class="lp-compat-label">⚠️ ít tương thích nhất</div><div class="lp-compat-numbers">${bad}</div><div class="lp-compat-desc">${tc.moTaKhong || ''}</div></div></div>${tc.chiTiet ? `<div class="lp-extra-body">${tc.chiTiet}</div>` : ''}</div>`;
    }
    if (data.tinhDuyen) {
      html += `<div class="lp-extra-section"><div class="lp-extra-heading">💖 Tình Duyên</div><div class="lp-extra-body">${data.tinhDuyen}</div></div>`;
    }
  }

  // — LOCKED sections —
  if (showLocked) {
    if (data.baiHocThuThach) html += `<div class="lp-extra-section"><div class="lp-extra-heading">📖 Bài Học &amp; Thử Thách</div><div class="lp-extra-body">${data.baiHocThuThach}</div></div>`;
    if (data.banBeGiaDinh) html += `<div class="lp-extra-section"><div class="lp-extra-heading">👨‍👩‍👧 Bạn Bè &amp; Gia Đình</div><div class="lp-extra-body">${data.banBeGiaDinh}</div></div>`;
    if (data.duLichSoThich) html += `<div class="lp-extra-section"><div class="lp-extra-heading">✈️ Du Lịch &amp; Sở Thích</div><div class="lp-extra-body">${data.duLichSoThich}</div></div>`;
    if (data.ngheNghiep) html += `<div class="lp-extra-section"><div class="lp-extra-heading">💼 Nghề Nghiệp Phù Hợp</div><div class="lp-extra-body">${data.ngheNghiep}</div></div>`;
  }

  return html;
}

// ─── 5. BUILD DETAILED REPORT (30 INDICATORS) — main function ─────────────────
function buildDetailedReport(r, currentYear, curMonth) {

  const name = r.input.fullName; // Used by NarrativeTemplates for personalization

  // ─── Personalization context — truyền vào S synthesizer để tạo cross-reference ──
  const ctx = {
    lifePath: r.life_path.number,
    soul: r.soul_number.number,
    destiny: r.destiny_number.number,
    personality: r.personality_number.number,
    maturity: r.maturity_number.number,
    birthday: r.birthday_number.rawDay || r.birthday_number.number,
    attitude: r.attitude_number.number
  };

  let html = '';

  // ── PHẦN A: TỔNG QUAN ──────────────────────────────────────────────────────
  html += secHeader('PHẦN A. TỔNG QUAN & BIỂU ĐỒ VẬN SỐ');

  // 1. Giới thiệu
  html += secBlock(1, 'Tổng hợp các chỉ số thần số học', null, null, `
    <div class="profile-card">
      <div class="profile-avatar" title="Số Chủ Đạo">
        <span class="avatar-number">${r.life_path.number}</span>
        <span class="avatar-label">Chủ Đạo</span>
      </div>
      <div class="profile-info">
        <div class="profile-name">${name}</div>
        <div class="profile-dob">Ngày sinh: ${r.input.dob}</div>
        <div class="profile-nums">
          <span class="pn-item"><span class="pn-label">Đường Đời</span><span class="pn-val">${r.life_path.number}</span></span>
          <span class="pn-item"><span class="pn-label">Sứ Mệnh</span><span class="pn-val">${r.destiny_number.number}</span></span>
          <span class="pn-item"><span class="pn-label">Linh Hồn</span><span class="pn-val">${r.soul_number.number}</span></span>
          <span class="pn-item"><span class="pn-label">Nhân Cách</span><span class="pn-val">${r.personality_number.number}</span></span>
          <span class="pn-item"><span class="pn-label">Trưởng Thành</span><span class="pn-val">${r.maturity_number.number}</span></span>
          <span class="pn-item"><span class="pn-label">Thái Độ</span><span class="pn-val">${r.attitude_number.number}</span></span>
          <span class="pn-item"><span class="pn-label">Năm cá nhân</span><span class="pn-val">${r.personal_year.number}</span></span>
          <span class="pn-item"><span class="pn-label">Tháng cá nhân</span><span class="pn-val">${r.personal_month.number}</span></span>
        </div>
      </div>
    </div>
    <p class="nar">Bản báo cáo này được xây dựng riêng cho <strong>${name}</strong> — phân tích đầy đủ 30 chỉ số dựa trên <strong>họ tên khai sinh</strong> và <strong>ngày/tháng/năm sinh</strong> theo hệ Pythagoras. Mỗi con số là một tần số rung động độc đáo, phản ánh một chiều kích khác nhau của con người và định mệnh bạn đang mang theo.</p>
    <p class="nar">Hãy đọc từng phần với tâm thái cởi mở và suy ngẫm. Thần số học không phải lời tiên tri — đó là tấm gương phản chiếu bản chất sâu xa nhất của bạn, để bạn hiểu rõ hơn về chính mình và đưa ra những lựa chọn có ý thức hơn.</p>
  `);

  // 2. Chu kỳ vận số (line chart + 3-year deep analysis)
  const rLineData = calcLineChartData(r, currentYear, -5, 5);
  const last3 = [0, 1, 2].map(offset => ({
    year: currentYear + offset,
    num: calcPersonalYearNum(r._dob_d, r._dob_m, currentYear + offset),
    age: currentYear + offset - r._dob_y
  }));
  const last3Html = last3.map(y =>
    NarrativeTemplates.buildYearDomainBlock(y.num, y.year, y.age, name)
  ).join('');
  // Sec 2: Biểu đồ + số liệu FREE; deep 3-năm analysis LOCK
  const sec2FreeHtml = `
    <p class="synthetic-text">Biểu đồ dưới đây thể hiện <strong>Chỉ số Năm Cá Nhân</strong> trong 11 năm tiếp theo. Mỗi con số tương ứng với một chủ đề năng lượng khác nhau: số thấp (1-3) là giai đoạn khởi đầu &amp; học hỏi, số cao (7-9) là giai đoạn hoàn thành &amp; thu hoạch.</p>
    <div id="report-line-chart" class="svg-chart inline-chart" style="height:220px;"></div>
    <h4 class="py-years-heading">Phân tích chi tiết 3 năm tới (${currentYear} – ${currentYear + 2})</h4>
  `;
  html += secBlock(2, 'Chu kỳ vận số cá nhân', null, null,
    wrapPartialLocked(sec2FreeHtml, last3Html));

  // 3. Nhóm ngành phù hợp (deep)
  // Sec 3: Top 1 nhóm FREE, còn lại LOCK
  html += secBlock(3, 'Nhóm ngành nghề phù hợp', null, null, buildCareerGroupFree(r));

  // ── PHẦN B: ĐƯỜNG ĐỜI ─────────────────────────────────────────────────────
  html += secHeader('PHẦN B. PHÂN TÍCH ĐƯỜNG ĐỜI');

  // 5. Số chủ đạo — Intro FREE; bài học/nghề nghiệp LOCK
  html += secBlock(5, 'Chỉ số Đường Đời (Số Chủ Đạo)', r.life_path.number, r.life_path.data?.title,
    wrapPartialLocked(
      renderLifePathExtraSections(r.life_path.number, name, 'free'),
      S.lifePath(r.life_path.number, r.life_path.data, name, ctx) + renderLifePathExtraSections(r.life_path.number, name, 'locked')
    ));

  // 6. Ba chu kỳ cuộc đời — redesigned with circle overview
  html += secBlock(6, 'Chu Kỳ Đường Đời', null, null, buildLifeCyclesSection(r, currentYear, name));

  // 7. Kim tự tháp (peaks & challenges) + per-peak analysis
  const peaks = r.pyramid_peaks;
  const challenges = r.pyramid_challenges;
  const peakAnalysisHtml = (peaks || []).map((pk, i) =>
    NarrativeTemplates.pyramidPeakAnalysis(i, pk.number, pk.period, challenges[i]?.number ?? null, name)
  ).join('');
  html += secBlock(7, 'Biểu đồ Kim Tự Tháp — Đỉnh cao & Thử thách', null, null,
    buildPyramidSection(r) + '<h4 style="font-family:var(--font-ui);margin:2rem 0 1rem;color:#1e3a8a;font-size:1rem;">Phân Tích Chi Tiết Từng Đỉnh Cao</h4>' + peakAnalysisHtml, true);

  // 8. Năm cá nhân (hiện tại)
  html += secBlock(8, 'Chỉ số Năm Cá Nhân', r.personal_year.number, null,
    wrapPartialLocked(
      '<p class="nar"><strong>Năm Cá Nhân ' + r.personal_year.number + '</strong> — ' + (r.personal_year.data?.title || '') + ' (' + r.personal_year.year + ')</p>',
      S.personalPeriod('Năm', r.personal_year.number, r.personal_year.year, name, r.personal_year.data)
    ));

  // 8B. Phân tích 3 năm tới (multi-domain per year)
  {
    const pyNums = [];
    for (let i = 0; i < 3; i++) {
      pyNums.push(calcPersonalYearNum(r._dob_d, r._dob_m, currentYear + i));
    }
    const age0 = currentYear - r._dob_y;
    const yearCardItems = pyNums.map((n, i) =>
      `<div class="year-card"><div class="year-card-label">NĂM ${currentYear + i}</div><div class="year-card-num">${n}</div><div class="year-card-age">${age0 + i} tuổi</div></div>`
    ).join('');
    const yearDeepBlocks = pyNums.map((n, i) =>
      buildPersonalYearFullBlock(n, currentYear + i, age0 + i, name)
    ).join('');
    const yearCardsHtml = `
      <p class="nar" style="font-style:italic;">
        Mỗi năm trong cuộc đời bạn mang một con số cá nhân riêng biệt, lặp lại theo vòng 9 năm.
        Những con số này cho biết luồng năng lượng chủ đạo của năm đó — ảnh hưởng toàn diện đến sự nghiệp,
        tài chính, tình yêu, sức khỏe và các mối quan hệ xã hội. Hiểu và đi theo luồng năng lượng này
        giúp bạn hành động đúng thời điểm và tránh đi ngược lại dòng chảy tự nhiên.
      </p>
      <div class="year-cards-grid">${yearCardItems}</div>
      ${yearDeepBlocks}
    `;
    html += secBlock('8ᴮ', 'Chu Kỳ Vận Số — Phân Tích Chi Tiết 3 Năm', null, null, yearCardsHtml, true);
  }

  // 9. Tháng cá nhân (hiện tại)
  html += secBlock(9, 'Chỉ số Tháng Cá Nhân', r.personal_month.number, null,
    wrapPartialLocked(
      '<p class="nar"><strong>Tháng Cá Nhân ' + r.personal_month.number + '</strong> — Tháng ' + curMonth + '/' + currentYear + '</p>',
      S.personalPeriod('Tháng ' + curMonth, r.personal_month.number, curMonth + '/' + currentYear, name, r.personal_month.data)
    ));

  // 9B. Phân tích 3 tháng tới
  {
    const m1 = curMonth, y1 = currentYear;
    const m2 = curMonth === 12 ? 1 : curMonth + 1, y2 = curMonth === 12 ? currentYear + 1 : currentYear;
    const m3 = m2 === 12 ? 1 : m2 + 1, y3 = m2 === 12 ? y2 + 1 : y2;
    const pm1 = r.personal_month.number;
    const pm2 = calcPersonalMonthNum(r._dob_d, r._dob_m, r._dob_y, m2, y2);
    const pm3 = calcPersonalMonthNum(r._dob_d, r._dob_m, r._dob_y, m3, y3);
    const monthNames = ['', 'Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6',
      'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'];
    const monthCardsHtml = `
      <p class="nar" style="font-style:italic;">
        Những con số này cho biết ở mỗi tháng sẽ có những điều gì có khả năng xảy ra và bạn nên
        tập trung làm việc theo con số nào, theo con số này nào sẽ ở mức độ sâu hơn so với chỉ số năm.
      </p>
      <div class="year-cards-grid">
        <div class="year-card"><div class="year-card-label">${monthNames[m1]}/${y1}</div><div class="year-card-num">${pm1}</div></div>
        <div class="year-card"><div class="year-card-label">${monthNames[m2]}/${y2}</div><div class="year-card-num">${pm2}</div></div>
        <div class="year-card"><div class="year-card-label">${monthNames[m3]}/${y3}</div><div class="year-card-num">${pm3}</div></div>
      </div>
      ${NarrativeTemplates.personalMonthDeep(pm1, m1, y1, name)}
      ${NarrativeTemplates.personalMonthDeep(pm2, m2, y2, name)}
      ${NarrativeTemplates.personalMonthDeep(pm3, m3, y3, name)}
    `;
    html += secBlock('9ᴮ', 'Chỉ Số Các Tháng — Phân Tích 3 Tháng', null, null, monthCardsHtml, true);
  }

  // ── PHẦN C: SỨ MỆNH & NỘI TÂM ─────────────────────────────────────────────
  html += secHeader('PHẦN C. PHÂN TÍCH SỨ MỆNH & NỘI TÂM');

  // 10. Sứ mệnh
  html += secBlock(10, 'Chỉ số Sứ Mệnh (Vận Mệnh)', r.destiny_number.number, r.destiny_number.data?.title,
    wrapPartialLocked(
      '<p class="nar"><strong>Sứ Mệnh số ' + r.destiny_number.number + '</strong> — ' + (r.destiny_number.data?.title || '') + '. Đây là chỉ số thể hiện cách bạn đạt được mục tiêu và đóng góp cho thế giới.</p>',
      S.destiny(r.destiny_number.number, r.destiny_number.data, name, ctx)
    ));

  // 11. Tương quan ĐĐ - SM
  const lpNum = r.life_path.number;
  const destNum = r.destiny_number.number;
  const lp_dest_same = lpNum === destNum;
  const lp_dest_harmony = ([1, 3, 5, 9].includes(lpNum % 9 || 9) && [1, 3, 5, 9].includes(destNum % 9 || 9))
    || ([2, 4, 6, 8].includes(lpNum % 9 || 9) && [2, 4, 6, 8].includes(destNum % 9 || 9));
  const dd_sm_compat = lp_dest_same
    ? `hoàn toàn tương đồng — cực kỳ hiếm gặp và đặc biệt. Con đường bạn đi chính là bản sắc bạn mang, giúp bạn tập trung vào mục tiêu gần như không có mâu thuẫn nội tâm`
    : (lp_dest_harmony
      ? `tương hợp tốt. Những điểm mạnh trong tính cách của bạn được thúc đẩy và thể hiện rõ ràng hơn, giúp bạn phát triển mạnh mẽ hơn`
      : `có những điểm đối đầu nhau. Tuy nhiên bạn vẫn có thể hóa giải nếu nỗ lực học hỏi và phát triển bản thân`);
  html += secBlock(11, 'Tương quan Đường đời & Sứ mệnh', null, null, `
    <p class="nar">Trong thần số học, Chỉ số Đường Đời và Chỉ số Sứ Mệnh là hai yếu tố có mối quan hệ chặt chẽ với nhau, cùng tồn tại trong một người. Chỉ số đường đời cho biết mục đích tổng thể của một người trong cuộc sống, còn chỉ số sứ mệnh cho biết cách thức một người thực hiện mục đích đó.</p>
    <p class="nar">Cặp số <strong>Đường Đời ${lpNum} — Sứ Mệnh ${destNum}</strong> của <strong>${name}</strong> ${dd_sm_compat}. Khi chỉ số đường đời và sứ mệnh bổ sung hoặc cộng hưởng với nhau, những điểm mạnh trong tính cách của bạn được thúc đẩy và thể hiện rõ ràng hơn. Ngược lại, nếu đối đầu hoặc mâu thuẫn, một số năng lượng tích cực có thể bị mờ nhạt và bạn có thể cảm thấy bối rối, khó khăn trong việc đưa ra quyết định.</p>
    <p class="nar">Số đường đời <strong>${lpNum}</strong> gắn liền với ${r.life_path.data?.title || `năng lượng số ${lpNum}`}. Bạn luôn giữ vững lập trường khi đã xác định một vấn đề là đúng. Bên cạnh đó, số sứ mệnh <strong>${destNum}</strong> định hình cách bạn tính toán, phân tích và thực hiện mục tiêu. Khi cả hai bổ sung cho nhau sẽ giúp bạn ngày càng chắc chắn hơn trong các quyết định và giảm thiểu rủi ro trong cuộc sống.</p>
    <div class="insight-box">📌 <strong>Lưu ý:</strong> Hãy đọc kỹ luận giải về cả hai chỉ số này và kết hợp chúng lại để có bức tranh toàn diện nhất về hành trình của mình.</div>
  `, true);


  // 12. Thử thách sứ mệnh
  const dc = r.destiny_challenge?.data;
  const dcNum = r.destiny_challenge?.number;
  const dcN = (typeof dcNum === 'number' ? dcNum : parseInt(dcNum)) || 1;
  const NT = NarrativeTemplates;
  html += secBlock(12, 'Thử thách Sứ Mệnh', dcNum, dc?.title,
    (NT.destinyChallenge?.[dcN]) ? NT.destinyChallenge[dcN](name, dc) :
      `<p class="nar">Không có sứ mệnh nào không đi kèm với thử thách. Với <strong>${name}</strong>, thử thách số <strong>${dcNum}</strong> xuất hiện không phải để ngăn cản bạn — mà để rèn luyện bạn trở thành phiên bản đủ mạnh để thực sự sống đúng sứ mệnh đó.</p>
    <p class="nar">${dc?.description || dc?.meaning || `Thử thách số ${dcNum} yêu cầu bạn phải đối mặt trực tiếp với những giới hạn mà bạn đặt ra cho chính mình.`}</p>
    ${dc?.how_to_overcome ? `<div class="insight-box">💡 <strong>Cách vượt qua thử thách này:</strong> ${dc.how_to_overcome}</div>` : `<div class="insight-box">💡 Mỗi lần đối mặt là một lần bạn có cơ hội tiến hóa thêm một bước.</div>`}`
  );


  // 13. Trưởng thành
  html += secBlock(13, 'Chỉ số Trưởng Thành', r.maturity_number.number, r.maturity_number.data?.title,
    S.maturity(r.maturity_number.number, r.maturity_number.data, name, ctx), true);

  // 14. Năng lực trưởng thành
  const ma = r.maturity_ability?.data;
  html += secBlock(14, 'Năng lực trong giai đoạn Trưởng Thành', r.maturity_ability?.number, ma?.title, `
    <p class="nar">Khi bước qua ngưỡng cửa của tuổi trung niên, <strong>${name}</strong> sẽ khám phá ra những nguồn sức mạnh và tài năng mới mà trước đó chưa được phát huy hoàn toàn. Con số <strong>${r.maturity_ability?.number}</strong> đóng vai trò như một "bộ khuếch đại" — nó làm cho những phẩm chất đặc biệt của bạn trở nên mạnh mẽ và rõ ràng hơn bao giờ hết.</p>
    <p class="nar">${ma?.description || ma?.meaning || `Năng lực số ${r.maturity_ability?.number} trong giai đoạn trưởng thành mang đến cho bạn khả năng nhìn nhận cuộc sống từ một góc độ mới mẻ và sâu sắc hơn. Những người xung quanh sẽ nhận ra sự thay đổi tích cực này — bạn trở nên điềm tĩnh hơn, sáng suốt hơn và có ảnh hưởng lớn hơn.`}</p>
    ${ma?.strengths ? `<p class="nar"><strong>✦ Thế mạnh đặc biệt giai đoạn này:</strong> ${ma.strengths}</p>` : ''}
    ${ma?.advice ? `<div class="insight-box">💡 <strong>Lời khuyên để phát huy tối đa:</strong> ${ma.advice}</div>` : ''}
  `, true);

  // 15. Linh hồn
  html += secBlock(15, 'Chỉ số Linh Hồn (Mong ước sâu thẳm)', r.soul_number.number, r.soul_number.data?.title,
    S.soul(r.soul_number.number, r.soul_number.data, name, ctx), true);

  // 16. Tương quan ĐĐ - Linh hồn
  const soulNum = r.soul_number.number;
  const lp_soul_same = lpNum === soulNum;
  const lp_soul_compat = lp_soul_same
    ? `hoàn toàn đồng nhất: mục tiêu, tham vọng và những mong muốn sâu bên trong bạn hòa hợp, đồng điệu với nhau, giúp bạn phát triển mạnh mẽ hơn`
    : `có những điểm giao thoa. Bề ngoài bạn thể hiện năng lượng đường đời ${lpNum}, nhưng sâu bên trong bạn đang khao khát những điều mà linh hồn số ${soulNum} hướng tới`;
  html += secBlock(16, 'Tương quan Đường đời & Linh hồn', null, null, `
    <p class="nar">Chỉ số đường đời và chỉ số linh hồn là hai yếu tố có mối quan hệ chặt chẽ với nhau. Chỉ số đường đời cho biết năng lượng tổng quát của một người (các điểm mạnh, điểm yếu, xu hướng tính cách, các bài học trong cuộc đời, bản ngã nguyên thủy...); còn chỉ số linh hồn cho biết mong muốn, khao khát sâu bên trong của mỗi người.</p>
    <p class="nar">Cặp số đường đời <strong>${lpNum}</strong> - linh hồn <strong>${soulNum}</strong> của <strong>${name}</strong> là ${lp_soul_compat}. Ưu điểm của số đường đời ${lpNum} là ${r.life_path.data?.title || `năng lượng tiêu biểu của số ${lpNum}`}. Khi có thêm chỉ số linh hồn ${soulNum} trong bộ số, tính cách của bạn được bổ sung những nét đặc biệt riêng, tạo ra sự hòa hợp sâu sắc hơn.</p>
    <p class="nar">Khi chỉ số đường đời và linh hồn bổ sung hoặc cộng hưởng với nhau, bạn sẽ cảm thấy hài lòng và thỏa mãn với hầu hết những gì mình đang làm; kiên trì và quyết tâm vượt qua mọi khó khăn để đạt được mục tiêu. Ngược lại, nếu có sự đối đầu, bạn có thể mắc kẹt và gặp khó khăn trong việc đưa ra quyết định. Tuy nhiên, bạn vẫn có thể hóa giải nếu nỗ lực học hỏi, thay đổi và phát triển bản thân.</p>
    <div class="insight-box">📌 <strong>Lời khuyên:</strong> Hãy đọc thêm các luận giải về cả chỉ số Đường Đời và Linh Hồn để hiểu bức tranh tổng quát về cuộc đời mình.</div>
  `, true);

  // 17. Thử thách linh hồn
  const sc = r.soul_challenge?.data;
  const scNum = r.soul_challenge?.number;
  const scN = (typeof scNum === 'number' ? scNum : parseInt(scNum)) || 1;
  html += secBlock(17, 'Thử thách Linh Hồn', scNum, sc?.title,
    (NT.soulChallenge?.[scN]) ? NT.soulChallenge[scN](name, sc) :
      `<p class="nar">Mọi linh hồn đều mang theo những bóng tối riêng — không phải để bị đeo đuổi mà để được chiếu sáng. Với <strong>${name}</strong>, thử thách linh hồn số <strong>${scNum}</strong> là lớp vỏ bảo vệ mà bạn đã xây dựng quanh trái tim mình.</p>
    <p class="nar">${sc?.description || sc?.meaning || `Thử thách số ${scNum} thường biểu hiện qua những khuôn mẫu cảm xúc lặp lại. Khi nhận ra và chủ động làm việc với những khuôn mẫu này, bạn sẽ tìm thấy sự bình an nội tâm sâu sắc hơn bao giờ hết.`}</p>
    ${sc?.how_to_overcome ? `<div class="insight-box">💡 <strong>Cách hóa giải từ bên trong:</strong> ${sc.how_to_overcome}</div>` : `<div class="insight-box">💡 Bóng tối không phải kẻ thù của bạn — đó là người thầy đang chờ bạn sẵn sàng để học.</div>`}`
  );

  // 18. Nhân cách
  html += secBlock(18, 'Chỉ số Nhân Cách', r.personality_number.number, r.personality_number.data?.title,
    S.personality(r.personality_number.number, r.personality_number.data, name, ctx), true);

  // 19. Thử thách nhân cách
  const pc = r.personality_challenge?.data;
  const pcNum = r.personality_challenge?.number;
  const pcN = (typeof pcNum === 'number' ? pcNum : parseInt(pcNum)) || 1;
  html += secBlock(19, 'Thử thách Nhân Cách', pcNum, pc?.title,
    (NT.personalityChallenge?.[pcN]) ? NT.personalityChallenge[pcN](name, pc) :
      `<p class="nar">Nhân cách là chiếc mặt nạ tinh tế mà chúng ta đeo khi bước ra thế giới. Với <strong>${name}</strong>, thử thách nhân cách số <strong>${pcNum}</strong> là lúc chiếc mặt nạ đó có nguy cơ trở nên quá dày — che khuất không chỉ người khác mà cả chính bạn khỏi con người thật của mình.</p>
    <p class="nar">${pc?.description || pc?.meaning || `Thử thách số ${pcNum} yêu cầu bạn dũng cảm để tháo bỏ những lớp vỏ bọc không còn cần thiết.`}</p>
    ${pc?.advice ? `<div class="insight-box">💡 <strong>Lời khuyên thực hành:</strong> ${pc.advice}</div>` : `<div class="insight-box">💡 Sự xác thực nhỏ mỗi ngày, theo thời gian, sẽ xây dựng một con người vừa được yêu thương vừa tự yêu mình.</div>`}`
  );


  // 20. Bài học nghiệp (Karmic Lessons)
  let kLessonHtml = '';
  if (r.karmic_lessons.missing_numbers.length === 0) {
    kLessonHtml = `<div class="insight-box" style="border-color:#22c55e;">✅ <strong>Chúc mừng!</strong> Biểu đồ tên của bạn đầy đủ tất cả 9 số. Bạn không mang bài học nghiệp nào đặc biệt trong kiếp này — đây là một lợi thế rất hiếm.</div>`;
  } else {
    kLessonHtml = `<p class="synthetic-text">Các số <strong>${r.karmic_lessons.missing_numbers.join(', ')}</strong> vắng mặt trong biểu đồ tên của bạn. Mỗi số thiếu tương ứng với một bài học nghiệp bạn cần học và phát triển trong kiếp này.</p>`;
    r.karmic_lessons.data.forEach(item => {
      kLessonHtml += S.karmicLesson(item.number, item.info, name);
    });
  }
  html += secBlock(20, 'Các bài học nghiệp (Karmic Lessons)', null, null, kLessonHtml, true);

  // 21. Nợ nghiệp (Karmic Debt)
  const kdValues = Object.values(r.karmic_debt_info).filter(x => x !== null);
  let kdHtml = '';
  if (kdValues.length === 0) {
    kdHtml = `<div class="insight-box" style="border-color:#22c55e;">✅ <strong>Biểu đồ sạch nợ nghiệp!</strong> Bạn không phải gánh chịu bất kỳ nợ nghiệp karmic nào (13/14/16/19). Đây là điều may mắn trong hành trình tâm linh của bạn.</div>`;
  } else {
    kdValues.forEach(kd => { kdHtml += S.karmicDebt(kd); });
  }
  html += secBlock(21, 'Các chỉ số Nợ Nghiệp (Karmic Debt)', null, null, kdHtml, true);

  // ── PHẦN D: NĂNG LỰC ──────────────────────────────────────────────────────
  html += secHeader('PHẦN D. PHÂN TÍCH NĂNG LỰC & BIỂU ĐỒ SỨC MẠNH');

  // 22. Biểu đồ ngày sinh (3x3) — FULL ENGINE
  const dobGrid = NumerologyCharts.getBirthGridHtml(r.input.dob);
  const dobGridData = parseDigitGrid(r.input.dob);
  html += secBlock(22, 'Biểu đồ Sức Mạnh — Lưới Ngày Sinh (Pythagoras)', null, null, `
    <p class="nar">Ma trận 3×3 của Pythagoras đặt từng chữ số trong ngày sinh vào ô tương ứng theo vị trí số học. Ngày sinh của <strong>${name}</strong> (${r.input.dob}) cho ra biểu đồ sau — các ô đầy là điểm mạnh năng lượng bẩm sinh; ô trống là những bài học cần được bổ sung từ biểu đồ tên.</p>
    <div style="display:flex; gap:3rem; justify-content:center; flex-wrap:wrap; margin:1.5rem 0;">
      <div style="text-align:center;"><div class="grid-subtitle">Biểu đồ Ngày Sinh</div>${dobGrid}</div>
    </div>
    ${buildCellAnalysis(dobGridData, 'dob')}
    ${buildArrowsAnalysis(dobGridData, 'Biểu đồ Ngày Sinh')}
  `, true);

  // 23. Biểu đồ tên (3x3) + biểu đồ tổng hợp — FULL ENGINE
  const nameGrid = NumerologyCharts.getNameGridHtml(r.input.fullName);
  const combinedGrid = NumerologyCharts.getCombinedGridHtml(r.input.dob, r.input.fullName);
  const nameGridData = parseNameGrid(r.input.fullName);
  const combinedGridData = {};
  for (let i = 1; i <= 9; i++) combinedGridData[i] = (dobGridData[i] || 0) + (nameGridData[i] || 0);
  html += secBlock(23, 'Biểu đồ Tên & Biểu đồ Tổng Hợp', null, null, `
    <div style="display:flex; gap:2rem; justify-content:center; flex-wrap:wrap; margin:1.5rem 0;">
      <div style="text-align:center;"><div class="grid-subtitle">Biểu đồ Tên</div>${nameGrid}</div>
      <div style="text-align:center;"><div class="grid-subtitle">Biểu đồ Tổng Hợp</div>${combinedGrid}</div>
    </div>
    ${buildCellAnalysis(nameGridData, 'name')}
    ${buildCompensationAnalysis(dobGridData, nameGridData, combinedGridData, name)}
    ${buildArrowsAnalysis(combinedGridData, 'Biểu đồ Tổng Hợp')}
  `, true);


  // 24. Thái độ
  html += secBlock(24, 'Chỉ số Thái Độ', r.attitude_number.number, r.attitude_number.data?.title,
    S.attitude(r.attitude_number.number, r.attitude_number.data, name), true);

  // 25. Ngày sinh (năng lực tự nhiên)
  html += secBlock(25, 'Chỉ số Ngày Sinh (Tài năng Tự nhiên)', r.birthday_number.rawDay || r.birthday_number.number, r.birthday_number.data?.title,
    S.birthday(r.birthday_number.number, r.birthday_number.data, name, r.birthday_number.rawDay), true);


  // 26. Tension (Vượt khó)
  const tn = r.tension_number?.data;
  const tnNum = r.tension_number?.number;
  const tnN = (typeof tnNum === 'number' ? (tnNum % 9 || 9) : parseInt(tnNum)) || 1;
  html += secBlock(26, 'Chỉ số Vượt Khó (Tension Number)', tnNum, tn?.title,
    (NT.tensionNumber?.[tnN]) ? NT.tensionNumber[tnN](name, tn) :
      `<p class="nar">Khi áp lực đạt đỉnh điểm — khi tất cả những kế hoạch dự phòng đều thất bại — <strong>${name}</strong> kích hoạt một phản xạ tự nhiên sâu thẳm bên trong: năng lượng số <strong>${tnNum}</strong>. Đây là <em>"bản năng sinh tồn tinh thần"</em> được hình thành qua nhiều kiếp sống.</p>
    <p class="nar">${tn?.description || tn?.meaning || `Năng lượng số ${tnNum} khi được kích hoạt dưới áp lực có thể là tài sản vô giá nếu bạn học cách sử dụng nó một cách có ý thức.`}</p>
    ${tn?.advice ? `<div class="insight-box">💡 <strong>Cách khai thác sức mạnh vượt khó:</strong> ${tn.advice}</div>` : `<div class="insight-box">💡 Hãy chú ý đến những lần bạn ở trong áp lực cực đại — đó là khi con người thật nhất của bạn xuất hiện.</div>`}`
  );


  // 27. Năng lực tư duy
  const caNum = r.cognitive_ability.number;
  const caN = (typeof caNum === 'number' ? caNum : parseInt(caNum)) || 1;
  html += secBlock(27, 'Chỉ số Năng Lực Tư Duy', caNum, r.cognitive_ability.data?.title,
    (NT.cognitiveAbility?.[caN]) ? NT.cognitiveAbility[caN](name, r.cognitive_ability.data) :
      NarrativeTemplates.generic('Năng Lực Tư Duy', caNum, name, r.cognitive_ability.data), true);

  // 28. Động lực tiếp cận
  const amNum = r.approach_motivation.number;
  const amN = (typeof amNum === 'number' ? amNum : parseInt(amNum)) || 1;
  html += secBlock(28, 'Chỉ số Động Lực Tiếp Cận', amNum, r.approach_motivation.data?.title,
    (NT.approachMotivation?.[amN]) ? NT.approachMotivation[amN](name, r.approach_motivation.data) :
      NarrativeTemplates.generic('Động Lực Tiếp Cận', amNum, name, r.approach_motivation.data), true);

  // 29. Năng lực tiếp cận
  const aaNum = r.approach_ability.number;
  const aaN = (typeof aaNum === 'number' ? aaNum : parseInt(aaNum)) || 1;
  html += secBlock(29, 'Chỉ số Năng Lực Tiếp Cận', aaNum, r.approach_ability.data?.title,
    (NT.approachAbility?.[aaN]) ? NT.approachAbility[aaN](name, r.approach_ability.data) :
      NarrativeTemplates.generic('Năng Lực Tiếp Cận', aaNum, name, r.approach_ability.data), true);

  // 30. Thái độ tiếp cận
  const atNum = r.approach_attitude.number;
  const atN = (typeof atNum === 'number' ? atNum : parseInt(atNum)) || 1;
  html += secBlock(30, 'Chỉ số Thái Độ Tiếp Cận', atNum, r.approach_attitude.data?.title,
    (NT.approachAttitude?.[atN]) ? NT.approachAttitude[atN](name, r.approach_attitude.data) :
      NarrativeTemplates.generic('Thái Độ Tiếp Cận', atNum, name, r.approach_attitude.data), true);


  // ── Inject into DOM ─────────────────────────────────────────────────────────
  document.getElementById('dynamic-report-content').innerHTML = html;

  // ── Inject Paywall Overlay (compact voucher box) ───────────────────────────
  const existingOverlay = document.getElementById('paywall-overlay');
  if (existingOverlay) existingOverlay.remove();

  if (!checkUnlockStatus()) {
    const overlayEl = document.createElement('div');
    overlayEl.id = 'paywall-overlay';
    overlayEl.className = 'paywall-overlay';
    overlayEl.innerHTML =
      '<div class="paywall-box">' +
      '<div class="paywall-lock-icon">🔒</div>' +
      '<h3 class="paywall-title">Luận Giải VIP đang bị khoá</h3>' +
      '<p class="paywall-desc">Nhập mã ưu đãi để mở khoá trọn bộ <strong>30 chỉ số chuyên sâu.</strong></p>' +
      '<form id="voucher-form" class="voucher-form">' +
      '<input type="text" id="voucher-input" class="voucher-input" placeholder="Nhập mã ưu đãi của bạn..." autocomplete="off" />' +
      '<button type="submit" class="btn-unlock">🔓 Mở Khoá</button>' +
      '</form>' +
      '<p id="voucher-error" class="voucher-error" style="display:none;"></p>' +
      '<p class="paywall-note">Hoặc liên hệ Admin để được tư vấn</p>' +
      '</div>';
    overlayEl.querySelector('#voucher-form').addEventListener('submit', handleVoucherSubmit);
    document.body.appendChild(overlayEl);
  }

  setTimeout(() => {
    NumerologyCharts.drawLineChart('report-line-chart', rLineData);
  }, 100);
}

// ─── HELPER: Progress bars (4 personality groups) ─────────────────────────────
function buildTraitBars(r) {
  const lp = r.life_path.number;
  const soul = r.soul_number.number;
  const pers = r.personality_number.number;
  const des = r.destiny_number.number;

  // Heuristic: map numbers to traits
  const strong = Math.round(((lp <= 5 ? lp : 10 - lp) / 4) * 100);
  const sensitive = Math.round(((soul <= 5 ? 10 - soul : soul) / 8) * 100);
  const creative = Math.round(((des % 3 + 1) / 3) * 100);
  const careful = Math.round(((pers <= 5 ? 10 - pers : pers) / 8) * 100);

  const clamp = v => Math.min(95, Math.max(35, v));

  return `
    <p class="synthetic-text">Tổ hợp 4 chỉ số cốt lõi tạo ra 4 nhóm tính cách sau đây, cho thấy sự phân bổ năng lượng của bạn:</p>
    <div class="progress-list">
      <div class="pg-item">
        <div class="pg-label"><span>Mạnh mẽ &amp; Độc lập</span><span>${clamp(strong)}%</span></div>
        <div class="pg-track"><div class="pg-fill" style="width:${clamp(strong)}%"></div></div>
      </div>
      <div class="pg-item">
        <div class="pg-label"><span>Lắng nghe &amp; Nhạy cảm</span><span>${clamp(sensitive)}%</span></div>
        <div class="pg-track"><div class="pg-fill alt" style="width:${clamp(sensitive)}%"></div></div>
      </div>
      <div class="pg-item">
        <div class="pg-label"><span>Sáng tạo &amp; Hoạt bát</span><span>${clamp(creative)}%</span></div>
        <div class="pg-track"><div class="pg-fill" style="width:${clamp(creative)}%"></div></div>
      </div>
      <div class="pg-item">
        <div class="pg-label"><span>Cẩn thận &amp; Cầu toàn</span><span>${clamp(careful)}%</span></div>
        <div class="pg-track"><div class="pg-fill alt" style="width:${clamp(careful)}%"></div></div>
      </div>
    </div>`;
}

// ─── CAREER GROUP DEEP KNOWLEDGE ──────────────────────────────────────────────
const CAREER_DETAIL = {
  KT: {
    label: 'Nhóm ngành Kỹ thuật & Công nghệ',
    mota: 'Nhóm kỹ thuật là người sống thực tế, phù hợp với công việc tay chân hơn trí óc, ưa nhìn hành động hơn những mơ tưởng viễn vông; bởi vậy bạn dành sự quan tâm lớn cho các yếu tố hữu hình như địa vị, quyền lực, tiền bạc hay những vật dụng, máy móc cụ thể.',
    khoiNganh: [
      { ten: 'Khối Cơ khí, Xây dựng, Vận tải', nghe: 'Kỹ thuật cơ khí, Kỹ thuật chế tạo máy, Kỹ thuật viên sửa chữa ô tô, Kỹ thuật luyện kim, Kỹ thuật điện lạnh, Kỹ thuật xây dựng...' },
      { ten: 'Khối Công nghiệp', nghe: 'Công nghệ da giày, Công nghệ kỹ thuật in, Công nghệ điện tử, Kỹ thuật điện, Kỹ thuật điện tử, Kỹ thuật máy tính, Kỹ thuật tự động hóa...' },
      { ten: 'Khối liên quan', nghe: 'Công nghệ nông nghiệp, Công nghệ thực phẩm, Kỹ thuật vận hành máy móc, IT Support, Kỹ thuật mạng, Kỹ thuật xây dựng, Kiểm thử - tester...' },
    ],
    ngheNghiep: 'Vận hành máy, chế tạo máy, cơ khí ứng dụng, tự động, bảo trì và sửa chữa ô tô, thiết bị điện, lắp đặt điện, bảo hành, sửa chữa điện tử, kỹ sư điện lạnh, tin học, điều phối vận chuyển, quản lý nhà máy máy, quản lý thiết bị sản xuất, lập trình viên, kỹ thuật viên phòng lab, lái xe, lái tàu, nhân viên vận chuyển, kỹ sư kết cấu, kỹ thuật viên thực hành tháo lắp, kỹ sư môi trường, kỹ sư cơ chí, cơ học, kỹ sư dầu khí, chuyên viên CNTT (IT Support), chuyên viên vận hành hệ thống, kỹ thuật công trình xây dựng, kiểm thử - tester, chuyên viên quản trị mạng, kỹ sư cấp thoát nước, kỹ sư bảo dưỡng công trình, kỹ thuật viên giám sát môi trường...',
  },
  KD: {
    label: 'Nhóm ngành Kinh doanh & Quản lý',
    mota: 'Nhóm quản lý là người có xu hướng đám nghĩ dám làm, nghiêng về vai trò lãnh đạo. Họ đối mặt với nhiều vấn đề khó khăn trong công việc. Họ cũng có chiến lược, chiến thuật tốt và có thể kết nối với nhiều người cùng hướng đến lợi ích chung trong doanh nghiệp và định hướng xã hội.',
    khoiNganh: [
      { ten: 'Khối Quản lý Nhà nước', nghe: 'Quản lý nhà nước, Quản lý dân sự, Quản lý tài chính, Quản lý doanh nghiệp' },
      { ten: 'Khối Giáo dục Quản lý', nghe: 'Quản lý giáo dục' },
      { ten: 'Khối Kinh doanh', nghe: 'Quản trị kinh doanh, đánh giá sáng tạo; chuyên viên quản lý trải nghiệm khách hàng; quản đốc nhân sự; chuyên viên PR; quản lý du lịch; quản lý khách sạn, nhà hàng; bếp trưởng khách sạn cao cấp; quản lý giác các cấp...' },
    ],
    ngheNghiep: 'Công an, sĩ quan quân đội, nhà chính trị gia, cảnh sát phòng cháy, thám tử; quản lý kinh doanh; nhà xuất cải đổi mới; giám đốc điều hành (CEO); nhân viên tín dụng ngân hàng; nhân viên hành chính (Accountant/admin); giám đốc nhân sự; chuyên viên kinh doanh nhà đất; chuyên viên PR; quản lý du lịch; quản lý khách sạn, nhà hàng; bếp trưởng; tuyển dụng, đào tạo và phát triển nhân lực; quản lý chất lượng; giám sát sản xuất; kế hoạch sản xuất kinh doanh; chuyên viên tư vấn pháp lý; bán hàng và tiếp thị; nhân viên kinh doanh online; chuyên viên kinh doanh; nhân viên tư vấn bảo hiểm, kinh doanh online; nhân viên tư vấn du lịch; hành chính pháp lý; thủ hướng dẫn viên; trưởng nhóm kinh doanh; nhân viên kinh doanh; kiểm soát nội bộ; quản lý tài chính; giám đốc sản xuất phim...',
  },
  XH: {
    label: 'Nhóm ngành Xã hội & Con người',
    mota: 'Nhóm nghề này phù hợp với những người ưa quan tâm, giúp đỡ và phục vụ cộng đồng, có khả năng giao tiếp xã hội tốt, quan tâm đến cảm xúc và nhu cầu của người khác. Họ có tính hòa đồng, thường giải quyết xung đột bằng sự đồng vọng và nghị lực của mình.',
    khoiNganh: [
      { ten: 'Nhóm Y tế & Chăm sóc sức khỏe', nghe: 'Bác sĩ, Y tá, Dược sĩ, Hộ sinh, Kỹ thuật viên y tế, Nhân viên chăm sóc bệnh nhân, Kỹ thuật viên phục hồi chức năng, Chuyên viên dinh dưỡng...' },
      { ten: 'Nhóm Giáo dục & Phúc lợi xã hội', nghe: 'Giáo viên, Giảng viên đại học, Nhân viên tư vấn học đường, Chuyên gia giáo dục đặc biệt, Nhân viên công tác xã hội, Nhân viên hỗ trợ cộng đồng...' },
      { ten: 'Nhóm Tư vấn & Trị liệu', nghe: 'Chuyên gia tư vấn tâm lý, Nhà tâm lý học, Chuyên viên trị liệu nghề nghiệp, Nhân viên tư vấn phúc lợi xã hội...' },
    ],
    ngheNghiep: 'Nông nghiệp, trồng rừng, nuôi trồng thủy sản, mỏ đan dụng, mỹ nghệ, thể thao, nấu ăn, giáo viên các cấp, kỹ thuật viên phòng lab, lái xe, lái tàu, nhân viên vận chuyển, kỹ sư kết cấu, kỹ thuật viên thực hành tháo lắp, kỹ thuật viên lao động, kỹ sư môi trường, cảnh quan, kỹ sư cơ chí, nghiên cứu và phát triển (R&D), kỹ sư nông nghiệp, khuyến nông không chuyên,...',
  },
  ST: {
    label: 'Nhóm ngành Sáng tạo & Nghệ thuật',
    mota: 'Nhóm nghề sáng tạo và nghệ thuật phù hợp với những người có tư duy sáng tạo, nhạy cảm với cái đẹp, chú trọng vào biểu đạt cảm xúc và ý tưởng. Họ thường không bằng lòng với những điều thông thường và luôn tìm kiếm cách thể hiện bản thân mới mẻ, độc đáo.',
    khoiNganh: [
      { ten: 'Nghệ thuật & Biểu diễn', nghe: 'Diễn viên, Ca sĩ, Nhạc sĩ, Vũ công, Đạo diễn, Biên kịch, Nhà văn, Nhà thơ, Họa sĩ, Điêu khắc gia, Nhiếp ảnh gia...' },
      { ten: 'Thiết kế & Truyền thông', nghe: 'Thiết kế đồ họa, Thiết kế thời trang, Thiết kế nội thất, Thiết kế sản phẩm, Nhà quảng cáo, Biên tập viên, Phóng viên, Nhà báo...' },
      { ten: 'Sáng tạo ứng dụng', nghe: 'Copywriter, Content Creator, Nhà thiết kế UX/UI, Chuyên viên thương hiệu, Nhà phát triển game, Animator, Chuyên viên Digital Marketing...' },
    ],
    ngheNghiep: 'Nghệ sĩ, nhạc sĩ, ca sĩ, biên đạo múa, đạo diễn phim, biên kịch, nhà văn, nhà thơ, họa sĩ, điêu khắc, nhiếp ảnh, thiết kế đồ họa, thiết kế thời trang, thiết kế nội thất, nhà quảng cáo, blogger, influencer, content creator, biên tập viên, phóng viên, nhà báo, game designer, UX/UI designer, kiến trúc sư cảnh quan, giám đốc sáng tạo, copywriter, nhà phát triển ứng dụng sáng tạo...',
  },
  NC: {
    label: 'Nhóm ngành Nghiên cứu & Khoa học',
    mota: 'Nhóm nghiên cứu thực hiện các công việc phát minh, khám phá, sáng chế nên tảng phục vụ công việc sản xuất, sản phẩm và dịch vụ vụ để phục vụ cho cuộc sống con người. Những công việc nghiên cứu có thể được trả qua nhiều cách thức thử nghiệm mình thức được đưa ra vận hành và quản lý sau đó.',
    khoiNganh: [
      { ten: 'Khoa học cơ bản & Ứng dụng', nghe: 'Vật lý học, Hóa học, Sinh học, Toán học, Thiên văn học, Khoa học trái đất, Khoa học môi trường...' },
      { ten: 'Nghiên cứu & Phát triển', nghe: 'Kỹ sư nghiên cứu, Nhà phân tích dữ liệu, Chuyên gia AI/ML, Nhà khoa học dữ liệu, Kỹ sư hệ thống, Nghiên cứu sinh...' },
      { ten: 'Ứng dụng xã hội', nghe: 'Nhà tâm lý học nghiên cứu, Nhà kinh tế học, Nhà xã hội học, Nhà ngôn ngữ học, Nhà nghiên cứu chính sách...' },
    ],
    ngheNghiep: 'Nhà khoa học, bác sĩ nghiên cứu, dược sĩ nghiên cứu, kỹ sư R&D, chuyên gia phân tích dữ liệu, lập trình viên AI/ML, nhà nghiên cứu thị trường, chuyên gia kinh tế, nhà nghiên cứu xã hội học, nhà tâm lý học nghiên cứu, giảng viên đại học, nhà nghiên cứu văn hóa, nhà phân tích chính sách, nhà nghiên cứu ứng dụng công nghệ, chuyên gia patent/sở hữu trí tuệ...',
  },
};

// ─── HELPER: Career group deep ─────────────────────────────────────────────────
function buildCareerGroup(r) {
  const lp = r.life_path.number;
  const dest = r.destiny_number.number;
  const groups = calcCareerGroups(lp, dest);
  const top3 = groups.slice(0, 3);

  // Summary chart
  let chartHTML = '';
  for (const g of groups) {
    chartHTML += `<div class="career-item"><span class="career-lbl">${g.label}:</span><div class="career-track"><div class="career-fill" style="width:${g.pct}%"></div></div><span class="career-pct">${g.pct.toFixed(1)}%</span></div>`;
  }

  // Summary intro
  const topNames = top3.map(g => `${CAREER_DETAIL[g.key]?.label || g.label} (phù hợp khoảng ${g.pct.toFixed(2)}%)`).join('\n- ');
  let html = `
    <p class="synthetic-text">Việc xác định nhóm ngành được tiến hành qua 2 bước: <strong>Bước 1</strong> — xác định điểm mạnh, điểm yếu qua 3 chỉ số chính (số đường đời, linh hồn, sứ mệnh). <strong>Bước 2</strong> — mapping vào 5 nhóm ngành dựa trên từ khóa nghề nghiệp trong knowledge base thần số học. Kết quả được sắp xếp từ cao đến thấp.</p>
    <h4 class="career-result-title">KẾT QUẢ PHÂN TÍCH TỈ LỆ PHÙ HỢP CỦA BẠN</h4>
    <div class="career-bars">${chartHTML}</div>
    <p class="nar" style="margin-top:1.2rem;">Như vậy, bạn có thể làm việc tốt ở nhóm ngành sau:</p>
    <ul class="nar" style="margin:.5rem 0 1.5rem 1.2rem;">
      ${top3.map(g => `<li>${CAREER_DETAIL[g.key]?.label || g.label} (phù hợp khoảng ${g.pct.toFixed(2)}%)</li>`).join('\n      ')}
    </ul>
  `;

  // Deep analysis each top-3 group
  top3.forEach((g, idx) => {
    const d = CAREER_DETAIL[g.key];
    if (!d) return;
    const n = idx + 1;
    const khoiHTML = d.khoiNganh.map(k =>
      `<p class="nar">- <strong>Khối chuyên ngành ${k.ten}:</strong> ${k.nghe}</p>`
    ).join('');
    html += `
      <h4 class="career-group-heading">${n}. Mô tả nhóm ngành ${d.label.replace('Nhóm ngành ', '')}:</h4>
      <p class="nar">${d.mota}</p>
      <h4 class="career-group-heading">${n}.1. Các khối ngành ${d.label.replace('Nhóm ngành ', '')}:</h4>
      ${khoiHTML}
      <h4 class="career-group-heading">${n}.2. Các ngành nghề nhóm ngành ${d.label.replace('Nhóm ngành ', '')}:</h4>
      <p class="nar">${d.ngheNghiep}</p>
    `;
  });

  html += `<p class="nar" style="margin-top:1.2rem;font-style:italic;">Lưu ý rằng thần số học chỉ là một công cụ tham khảo. Sự đam mê và nỗ lực thực sự của bạn luôn là yếu tố quyết định quan trọng nhất.</p>`;
  return html;
}

// ─── HELPER: Personal Year — Full domain block (matches reference PDF) ─────────
// Renders ONE unified block per year: heading + intro + all domains merged.
// Uses _yearIntro for narrative intro/title, _yearContent for domain paragraphs.
// No duplicate rendering — eliminates the old double-aspect bug.
function buildPersonalYearFullBlock(pyNum, year, age, name) {
  const n = pyNum % 9 || 9;
  const NT = NarrativeTemplates;

  // --- Get intro/title from _yearIntro ---
  let meta = null;
  try { if (NT._yearIntro) meta = NT._yearIntro(n, year, name); } catch (e) { }

  // --- Get domain paragraphs from _yearContent ---
  let deepData = null;
  try { if (NT._yearContent) deepData = NT._yearContent(n, name); } catch (e) { }

  const intro = meta && meta.intro ? meta.intro : '';
  const title = meta && meta.title ? meta.title : '';

  // --- Unified domain list (no duplicates) ---
  const DOMAINS = [
    { key: 'congviec', altKey: null, icon: '💼', label: 'Công việc & Sự nghiệp' },
    { key: 'quanhe', altKey: null, icon: '💗', label: 'Các mối quan hệ & Tình yêu' },
    { key: 'suckhoe', altKey: null, icon: '🌿', label: 'Sức khỏe' },
    { key: 'taichinhthanhhoc', altKey: 'taichinhthanhoc', icon: '💰', label: 'Tài chính & Học tập' },
    { key: 'banthan', altKey: null, icon: '🌟', label: 'Về bản thân' },
  ];

  let domainHTML = '';
  if (deepData) {
    for (const d of DOMAINS) {
      const text = deepData[d.key] || (d.altKey && deepData[d.altKey]) || '';
      if (!text) continue;
      domainHTML += `
        <div class="year-domain-block">
          <div class="domain-title">${d.icon} ${d.label}</div>
          <p class="nar">${text.replace(/\n/g, '<br>')}</p>
        </div>`;
    }
    // Tóm lại — always at end as insight-box
    if (deepData.tonket) {
      domainHTML += `<div class="insight-box" style="margin-top:1rem;">📌 <strong>Tóm lại:</strong> ${deepData.tonket.replace(/\n/g, '<br>')}</div>`;
    }
  }

  const sectionLabel = `2.${year - (new Date().getFullYear()) + 1}`;

  return `
    <div class="py-year-block" id="py-year-${year}">
      <h3 class="py-year-heading">
        ${sectionLabel}. NĂM ${year}, ${name.toUpperCase()} ${age} TUỔI CÓ VẬN SỐ ${n}
      </h3>
      <div class="py-year-intro">
        <span class="py-num-badge">${n}</span>
        <div>
          <div class="year-detail-block">
            <div class="year-detail-headline">
              <span class="year-detail-label">VẬN SỐ NĂM ${year} CỦA BẠN LÀ: ${n}</span>
            </div>
            ${title ? `<div class="year-detail-subtitle"><em>${title}</em></div>` : ''}
            ${intro ? `<p class="nar">${intro}</p>` : ''}
          </div>
        </div>
      </div>
      ${domainHTML}
    </div>`;
}


// ─── HELPER: Pyramid section — full narrative layout (matches reference PDF) ──
function buildPyramidSection(r) {
  const peaks = r.pyramid_peaks;
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
    const rangeM = str.match(/(\d+)\s*[\u2013\-]\s*(\d+)/);
    if (rangeM) return { start: parseInt(rangeM[1]), end: parseInt(rangeM[2]), isOpen: false };
    const openM = str.match(/(\d+)/);
    if (openM) return { start: parseInt(openM[1]), end: null, isOpen: true };
    return { start: null, end: null, isOpen: false };
  };

  // Build section header: "7.X. GIAI ĐOẠN ... TỪ ĐẦU TUỔI A (YYYY) TỚI HẾT TUỔI B (YYYY)"
  const buildPeriodHeader = (periodStr, idx) => {
    const { start, end, isOpen } = parsePeriodAge(periodStr);
    const labels = ['Một', 'Hai', 'Ba', 'Bốn'];
    const lb = labels[idx] || String(idx + 1);
    if (start === null) return `7.${idx + 1}. Giai đoạn ${lb}`;
    const sy = y + start;
    if (isOpen) return `7.${idx + 1}. GIAI ĐOẠN ${lb.toUpperCase()} — KỂ TỪ TUỔI ${start} (${sy}) TRỞ ĐI`;
    const ey = y + end;
    return `7.${idx + 1}. GIAI ĐOẠN ${lb.toUpperCase()} TỪ ĐẦU TUỔI ${start} (${sy}) TỚI HẾT TUỔI ${end} (${ey})`;
  };

  // Render peak narrative block — sử dụng deep narrative templates
  const renderPeak = (pk, idx) => {
    const dt = pk.data || {};
    const num = pk.number ?? '?';
    const n = typeof num === 'number' ? (num % 9 || 9) : parseInt(num) || 1;
    const period = pk.period || '';
    let h = `<h4 class="pyramid-sub-heading">7.${idx + 1}.1. Đỉnh cao của bạn trong giai đoạn này là số ${num}</h4>`;
    // Ưu tiên deep narrative template
    const NT = NarrativeTemplates;
    if (NT.pyramidPeak && NT.pyramidPeak[n]) {
      h += NT.pyramidPeak[n](name, period, idx);
    } else {
      // Fallback: KB data
      if (dt.theme) h += `<p class="nar"><em>${dt.theme}</em></p>`;
      if (dt.opportunity) h += `<p class="nar">${dt.opportunity}</p>`;
      if (dt.challenge) h += `<p class="nar"><span class="pyramid-note">⚠ Lưu ý:</span> ${dt.challenge}</p>`;
      if (dt.advice) h += `<p class="nar"><span class="pyramid-advice">★ Lời khuyên:</span> ${dt.advice}</p>`;
    }
    if (dt.keywords && dt.keywords.length) {
      const kw = Array.isArray(dt.keywords) ? dt.keywords.join(' · ') : dt.keywords;
      h += `<p class="nar pyramid-keywords"><strong>Từ khóa năng lượng:</strong> ${kw}</p>`;
    }
    return h;
  };

  // Render challenge narrative block — sử dụng deep narrative templates
  const renderChallenge = (ch, idx) => {
    const dt = ch.data || {};
    const num = ch.number ?? '?';
    const n = typeof num === 'number' ? num : parseInt(num);
    const period = ch.period || (idx < peaks.length ? peaks[idx].period : '');
    let h = `<h4 class="pyramid-sub-heading challenge">7.${idx + 1}.2. Thử thách của bạn trong giai đoạn này là số ${num}</h4>`;
    // Ưu tiên deep narrative template (challenge 0-9)
    const NT = NarrativeTemplates;
    if (NT.pyramidChallenge && NT.pyramidChallenge[n] !== undefined) {
      h += NT.pyramidChallenge[n](name, period);
    } else {
      // Fallback: KB data
      if (dt.lesson) h += `<p class="nar">${dt.lesson}</p>`;
      if (dt.trap) h += `<p class="nar"><span class="pyramid-note">⚡ Bẫy định kiến:</span> ${dt.trap}</p>`;
      if (dt.how_to_overcome) h += `<p class="nar"><span class="pyramid-advice">✔ Cách vượt qua:</span> ${dt.how_to_overcome}</p>`;
    }
    return h;
  };

  // Assemble 4 period sections
  const periodsHtml = peaks.map((pk, i) => `
    <div class="pyramid-period">
      <h3 class="pyramid-period-heading">${buildPeriodHeader(pk.period, i)}</h3>
      ${renderPeak(pk, i)}
      ${renderChallenge(challenges[i] || {}, i)}
    </div>`).join('');

  return `
    <p class="nar">Kim Tự Tháp cho thấy <strong>4 giai đoạn</strong> trong cuộc đời bạn — mỗi giai đoạn tương ứng với một đỉnh cao và một thử thách riêng. Đỉnh cao là năng lượng chủ đề bạn nên phát triển trong giai đoạn đó; thử thách là bài học bạn bắt buộc phải vượt qua để tiến lên đỉnh kế tiếp.</p>
    <div class="pyramid-chart-wrap">${svg}</div>
    <div class="pyramid-periods-wrap">${periodsHtml}</div>
  `;
}

// ─── GRID ANALYSIS ENGINE (giống PDF TSHTD) ─────────────────────────────────

// Kiến thức từng số trong ô biểu đồ Pythagoras
const CELL_KNOWLEDGE = {
  1: {
    one: `<p class="nar"><strong>Số 1 lẻ loi trong biểu đồ</strong> — Đây là số của ý chí cá nhân và sự độc lập. Sự hiện diện của một số 1 đơn lẻ mang đến tinh thần tiên phong, khả năng tự lực và xu hướng hành động độc lập. Đây là nền tảng của tính tự chủ, nhưng cũng cần có sự kết nối với người khác để phát huy hết tiềm năng.</p>`,
    many: (n) => `<p class="nar"><strong>${n} số 1 trong biểu đồ</strong> — Sự tập trung cao độ của năng lượng số 1 tạo ra một cá nhân có <strong>bản ngã cực kỳ mạnh mẽ</strong>, ý chí thép và tinh thần không chịu khuất phục. Tuy nhiên, khi năng lượng này vượt ngưỡng, bạn có thể trở nên cứng đầu, khó lắng nghe và thiếu linh hoạt trong các mối quan hệ. Hãy dùng ý chí này để xây dựng, không phải để kiểm soát.</p>`,
    zero: `<p class="nar"><strong>Thiếu số 1 trong biểu đồ ngày sinh</strong> — Số 1 vắng mặt có thể dẫn đến thiếu tự tin vào bản thân, khó đưa ra quyết định cá nhân và xu hướng phụ thuộc vào ý kiến người khác. Bài học là phát triển <em>sự tự tin và tính độc lập</em> — hãy chủ động hơn trong các quyết định của cuộc đời mình.</p>`
  },
  2: {
    one: `<p class="nar"><strong>Số 2 trong biểu đồ</strong> — Sự hiện diện của số 2 mang đến khả năng <strong>cảm nhận tế nhị và kết nối cảm xúc</strong>. Bạn có thiên phú trong việc lắng nghe, đồng cảm và xây dựng các mối quan hệ sâu sắc. Trực giác của bạn thường chính xác hơn bạn nghĩ — hãy tin vào tiếng thì thầm bên trong.</p>`,
    many: (n) => `<p class="nar"><strong>${n} số 2 trong biểu đồ</strong> — Sự nhân lên của số 2 tạo ra <strong>độ nhạy cảm cực kỳ cao</strong>. Bạn có thể bị ảnh hưởng nặng nề bởi cảm xúc của người xung quanh, dễ bị tổn thương và đôi khi không phân biệt được cảm xúc của mình và của người khác. Đây là siêu năng lực nếu được kiểm soát tốt, nhưng là điểm yếu nếu không học cách đặt ranh giới.</p>`,
    zero: `<p class="nar"><strong>Thiếu số 2 trong biểu đồ ngày sinh</strong> — Sự vắng mặt của số 2 có thể khiến bạn gặp khó khăn trong việc đồng cảm và thấu hiểu cảm xúc người khác. Bài học là <em>học cách lắng nghe — không chỉ bằng tai mà bằng cả trái tim</em>.</p>`
  },
  3: {
    one: `<p class="nar"><strong>Số 3 trong biểu đồ</strong> — Được ví như "cái móc neo trị chất trí nhớ", số 3 duy nhất trong biểu đồ giúp bạn có <strong>trí nhớ rất tốt và bền lâu</strong>, miễn là nó được sử dụng thường xuyên. Số 3 cũng mang đến sự linh hoạt tư duy và khả năng học hỏi nhanh. Bạn rất có lợi thế trong việc học tập và tiếp thu kiến thức mới.</p>`,
    many: (n) => `<p class="nar"><strong>${n} số 3 trong biểu đồ</strong> — Trí tuệ và óc sáng tạo dồi dào là điểm nổi bật. Sự nhân bội của số 3 tạo ra một <strong>tâm trí cực kỳ hoạt động</strong>, liên tục xử lý thông tin, tạo ý tưởng và nhìn ra những kết nối mà người khác bỏ qua. Tuy nhiên, bạn cũng cần cẩn thận với xu hướng suy nghĩ quá mức và lo lắng không cần thiết.</p>`,
    zero: `<p class="nar"><strong>Thiếu số 3 trong biểu đồ ngày sinh</strong> — Sự vắng mặt của số 3 có thể làm bạn gặp khó khăn trong việc biểu đạt bản thân, đặc biệt là trong các tình huống cần diễn đạt rõ ràng. Bài học là <em>phát triển khả năng giao tiếp và luyện tập biểu đạt cảm xúc</em> thông qua viết lách, nghệ thuật hoặc âm nhạc.</p>`
  },
  4: {
    one: `<p class="nar"><strong>Số 4 trong biểu đồ</strong> — Số 4 mang đến <strong>sự thực dụng, kiên định và ý thức tổ chức</strong>. Bạn biết cách xây dựng nền tảng vững chắc cho mọi công việc và thường là người đáng tin cậy nhất trong nhóm. Khả năng làm việc kiên trì và có phương pháp là tài sản lớn của bạn.</p>`,
    many: (n) => `<p class="nar"><strong>${n} số 4 trong biểu đồ</strong> — Sự tập trung của số 4 tạo ra một <strong>con người cực kỳ thực tế, trọng bằng chứng và không ngừng làm việc</strong>. Bạn có thể bị xem là cứng nhắc hoặc quá khắt khe với tiêu chuẩn của mình, nhưng chính sự kỷ luật này là điều tạo nên sự tín nhiệm và thành công lâu dài.</p>`,
    zero: `<p class="nar"><strong>Thiếu số 4 trong biểu đồ ngày sinh</strong> — Bạn có thể thiếu tính thực dụng và gặp khó khăn trong việc hoàn thành những việc đòi hỏi kiên nhẫn dài hơi. Bài học là <em>học cách xây dựng kỷ luật cá nhân và hoàn thành những gì đã bắt đầu</em>.</p>`
  },
  5: {
    one: `<p class="nar"><strong>Số 5 trong biểu đồ</strong> — Con số trung tâm của biểu đồ Pythagoras, số 5 là "trái tim" kết nối tất cả. Sự hiện diện của số 5 mang đến <strong>sự linh hoạt, khả năng thích nghi và ý thức tự do</strong>. Bạn biết cách điều hướng trong các hoàn cảnh thay đổi và thường tìm được con đường cân bằng giữa các thái cực.</p>`,
    many: (n) => `<p class="nar"><strong>${n} số 5 trong biểu đồ</strong> — Sự hiện diện mạnh mẽ của số 5 trung tâm tạo ra <strong>năng lượng tự do cực kỳ mạnh mẽ</strong>. Bạn có thể kháng cự mạnh mẽ với bất kỳ hình thức kiểm soát hay giới hạn nào. Sức hút cá nhân và khả năng thuyết phục của bạn rất cao, nhưng hãy cẩn thận với xu hướng bốc đồng và thiếu kiên định.</p>`,
    zero: `<p class="nar"><strong>Thiếu số 5 trong biểu đồ ngày sinh</strong> — Sự thiếu vắng của "trái tim biểu đồ" có thể dẫn đến khó khăn trong việc quyết định và thiếu sự linh hoạt khi đối mặt với thay đổi. Bài học là <em>học cách đón nhận sự thay đổi như một người bạn đồng hành, không phải kẻ thù</em>.</p>`
  },
  6: {
    one: `<p class="nar"><strong>Số 6 trong biểu đồ</strong> — Là một con số tượng trưng cho <strong>tình yêu thương, sự sáng tạo và trách nhiệm gia đình</strong>. Người có số 6 trong biểu đồ rất tập trung và có trách nhiệm với những người thân yêu. Sức sáng tạo dành cho các đề tài về gia đình, tổ ấm và cái đẹp là nổi trội của bạn.</p>`,
    many: (n) => `<p class="nar"><strong>${n} số 6 trong biểu đồ</strong> — Sự tập trung cao của số 6 tạo ra một tâm hồn <strong>cực kỳ yêu thương và sẵn sàng hy sinh cho gia đình</strong>. Tuy nhiên, điều này cũng có thể dẫn đến việc ôm đồm trách nhiệm hay can thiệp quá mức vào cuộc sống người thân. Khi trưởng thành hơn, bạn sẽ khám phá ra rằng sức mạnh sáng tạo của mình có thể lan tỏa ra nhiều lĩnh vực hơn.</p>`,
    zero: `<p class="nar"><strong>Thiếu số 6 trong biểu đồ ngày sinh</strong> — Bạn có thể gặp khó khăn trong việc duy trì các cam kết lâu dài hoặc đặt ưu tiên cho các mối quan hệ. Bài học là <em>học cách nuôi dưỡng các mối quan hệ với sự kiên nhẫn và nhất quán</em>.</p>`
  },
  7: {
    one: `<p class="nar"><strong>Số 7 trong biểu đồ</strong> — Số của <strong>triết học, tâm linh và sự học hỏi qua trải nghiệm thực tiễn</strong>. Người có số 7 thường học tốt nhất qua việc tự mình làm và trải qua. Họ có chiều sâu nội tâm hiếm có và thường tìm kiếm ý nghĩa đằng sau những điều hiển nhiên.</p>`,
    many: (n) => `<p class="nar"><strong>${n} số 7 trong biểu đồ</strong> — Sự nhân bội của số 7 tạo ra một <strong>tâm trí hướng nội sâu sắc, thực dụng và kiên định</strong>. Bạn tin vào những gì mình đã tự trải qua hơn bất kỳ lý thuyết nào. Tuy nhiên, xu hướng cô lập và khó tin tưởng có thể là thách thức lớn trong các mối quan hệ.</p>`,
    zero: `<p class="nar"><strong>Thiếu số 7 trong biểu đồ ngày sinh</strong> — Bạn có thể thiếu sự kiên nhẫn trong học hỏi qua trải nghiệm và dễ bỏ cuộc khi gặp khó khăn. Bài học là <em>tin vào quá trình — mỗi thất bại là một bước tiến đến thành công nếu bạn đủ kiên nhẫn để rút ra bài học</em>.</p>`
  },
  8: {
    one: `<p class="nar"><strong>Số 8 trong biểu đồ</strong> — Số 8 mang đến <strong>độ nhạy bén về vật chất, khả năng tổ chức và khát vọng thành tựu</strong>. Bạn hiểu rõ giá trị của sự bền vững và có khả năng quản lý nguồn lực hiệu quả. Con đường dẫn đến sự thịnh vượng vật chất thường gắn liền với số 8.</p>`,
    many: (n) => `<p class="nar"><strong>${n} số 8 trong biểu đồ</strong> — Sự tập trung của số 8 tạo ra <strong>tham vọng mạnh mẽ về thành công vật chất và địa vị xã hội</strong>. Bạn có thể cực kỳ tập trung vào mục tiêu đến mức bỏ qua các khía cạnh khác của cuộc sống. Sự cân bằng giữa vật chất và tinh thần là chìa khóa để năng lượng số 8 phát huy tốt nhất.</p>`,
    zero: `<p class="nar"><strong>Thiếu số 8 trong biểu đồ ngày sinh</strong> — Bạn có thể thiếu sự kết nối với thế giới vật chất hoặc gặp khó khăn trong việc hiện thực hóa các mục tiêu tài chính. Bài học là <em>học cách trân trọng và quản lý các nguồn lực vật chất một cách có ý thức và có trách nhiệm</em>.</p>`
  },
  9: {
    one: `<p class="nar"><strong>Số 9 trong biểu đồ</strong> — Số của <strong>lý tưởng, nhân đạo và tầm nhìn rộng lớn</strong>. Bạn có xu hướng suy nghĩ và cảm nhận ở quy mô lớn hơn — không chỉ cho bản thân mà cho tập thể và cộng đồng. Sự hiện diện của số 9 trong biểu đồ thường đi kèm với tâm hồn nghệ sĩ và ý thức xã hội cao.</p>`,
    many: (n) => `<p class="nar"><strong>${n} số 9 trong biểu đồ</strong> — Sức mạnh của lý tưởng và khát vọng nhân đạo ở mức cực cao. ${n >= 3 ? `<strong>Ba hay nhiều số 9</strong> trong biểu đồ tạo ra sự khuếch đại lý tưởng đến mức có thể dẫn đến thất vọng sâu sắc khi thực tế không đáp ứng được những kỳ vọng cao cả đó. Năng lượng cảm xúc rất dữ dội — bạn cần học cách <em>cân bằng giữa lý tưởng và hiện thực</em>, giữa việc muốn thay đổi thế giới và chấp nhận giới hạn của con người.` : `Lý tưởng mạnh mẽ của bạn là nguồn cảm hứng cho người xung quanh, nhưng hãy chú ý đến việc không ôm đồm quá nhiều trách nhiệm cùng một lúc.`}</p>`,
    zero: `<p class="nar"><strong>Thiếu số 9 trong biểu đồ ngày sinh</strong> — Sự vắng mặt của số 9 có thể khiến bạn chỉ tập trung vào những mục tiêu cụ thể và hữu hình mà bỏ qua bức tranh lớn hơn. Bài học là <em>học cách mở rộng tầm nhìn và kết nối hành động cá nhân với tác động đến cộng đồng</em>.</p>`
  }
};

// 8 Mũi tên Pythagoras — tên, các số, mô tả khi CÓ và khi THIẾU
const ARROWS = [
  {
    name: 'Trục Quyết Tâm', code: '1-5-9', cells: [1, 5, 9],
    active: `<div class="arrow-block active-arrow">
      <div class="arrow-title arrow-has">✅ Trục Quyết Tâm (1-5-9) — Mũi tên Chủ Động Hành Động</div>
      <p class="nar">Trục này cho thấy bạn có <strong>sự quyết tâm cao và có xu hướng hành động ngay khi muốn thực hiện một việc hoặc kế hoạch nào đó</strong> mà không trì hoãn. Bạn thường muốn làm đến cùng những công việc mà bạn tin tưởng và những điều mà bạn cho là đúng. Đây là một trong những mũi tên mạnh mẽ nhất — người sở hữu trục này hiếm khi nói suông mà không làm.</p>
      <p class="nar">Trong công việc và cuộc sống, bạn là người tạo ra động lực cho cả nhóm. Khi bạn đã quyết định điều gì, không có nhiều thứ có thể ngăn bạn lại. Hãy dùng sức mạnh này để hướng đến những mục tiêu xứng đáng với con người bạn.</p>
    </div>`,
    missing: `<div class="arrow-block missing-arrow">
      <div class="arrow-title arrow-no">⚠️ Thiếu Trục Quyết Tâm (1-5-9) — Dễ Bỏ Cuộc Giữa Chừng</div>
      <p class="nar">Sự vắng mặt của trục 1-5-9 cho thấy bạn có thể gặp khó khăn trong việc duy trì quyết tâm và hoàn thành những kế hoạch đã đề ra. Bạn dễ bị phân tâm hoặc mất động lực khi gặp trở ngại, và đôi khi cảm thấy thiếu hướng đi rõ ràng trong cuộc sống.</p>
      <p class="nar"><strong>Lời khuyên:</strong> Hãy xây dựng thói quen đặt mục tiêu nhỏ hàng ngày. Mỗi lần hoàn thành một việc nhỏ sẽ củng cố "cơ bắp quyết tâm" của bạn. Tìm một người cố vấn hoặc người bạn đồng hành có thể giúp bạn giữ cam kết.</p>
    </div>`
  },
  {
    name: 'Trục Cân Bằng Tinh Thần', code: '2-5-8', cells: [2, 5, 8],
    active: `<div class="arrow-block active-arrow">
      <div class="arrow-title arrow-has">✅ Trục Cân Bằng Tinh Thần (2-5-8) — Mũi tên Cảm Xúc</div>
      <p class="nar">Trục này đại diện cho <strong>những gì liên quan đến trái tim của con người</strong> — phụ trách toàn bộ cảm giác, bao gồm trực giác, tình yêu thương, sự tự do, các cảm xúc tích cực, biểu đạt nghệ thuật, sự độc lập về tinh thần, và trí tuệ/thông thái.</p>
      <p class="nar">Người sở hữu trục 2-5-8 thường có <strong>khả năng trực giác rất mạnh</strong> và biết cách điều hướng năng lượng cảm xúc của bản thân. Họ thường rất nhạy bén với cảm xúc của người xung quanh và có khả năng chữa lành thông qua kết nối chân thật.</p>
    </div>`,
    missing: `<div class="arrow-block missing-arrow">
      <div class="arrow-title arrow-no">⚠️ Thiếu Trục Cân Bằng Tinh Thần (2-5-8) — Cần Phát Triển Trí Tuệ Cảm Xúc</div>
      <p class="nar">Sự thiếu vắng của trục 2-5-8 có thể khiến bạn gặp khó khăn trong việc kết nối với cảm xúc của mình và người khác. Bạn có thể đôi khi cảm thấy bị cô lập về mặt cảm xúc, hoặc không biết cách phản ứng phù hợp trong các tình huống đòi hỏi sự đồng cảm sâu sắc.</p>
      <p class="nar"><strong>Lời khuyên:</strong> Luyện tập chánh niệm và viết nhật ký cảm xúc. Cho phép bản thân cảm nhận, không chỉ phân tích. Các hoạt động nghệ thuật như âm nhạc, vẽ tranh hay khiêu vũ có thể giúp bạn kết nối với trí tuệ cảm xúc của mình.</p>
    </div>`
  },
  {
    name: 'Trục Hoài Nghi', code: '3-5-7', cells: [3, 5, 7],
    active: `<div class="arrow-block active-arrow">
      <div class="arrow-title arrow-has">✅ Trục Hoài Nghi (3-5-7) — Mũi tên Tư Duy Phản Biện</div>
      <p class="nar">Trục 3-5-7 mang đến <strong>tư duy phân tích sắc bén và khả năng nhìn thấy những gì người khác bỏ qua</strong>. Bạn không dễ bị lừa dối và thường đặt câu hỏi trước khi tin vào bất cứ điều gì. Đây là mũi tên của những nhà khoa học, nhà điều tra và những người theo đuổi sự thật.</p>
      <p class="nar">Khả năng hoài nghi lành mạnh này là một tài sản quý trong thế giới hiện đại, khi thông tin giả và thao túng tâm lý tràn lan. Hãy dùng nó để bảo vệ bản thân và những người bạn yêu thương.</p>
    </div>`,
    missing: `<div class="arrow-block missing-arrow">
      <div class="arrow-title arrow-no">⚠️ Thiếu Trục Hoài Nghi (3-5-7) — Cần Phát Triển Tư Duy Phản Biện</div>
      <p class="nar">Sự vắng mặt của trục 3-5-7 có thể khiến bạn đôi khi quá tin vào người khác hoặc chấp nhận thông tin mà không kiểm chứng kỹ lưỡng. Bạn có thể dễ bị ảnh hưởng bởi ý kiến của số đông hoặc những người có địa vị.</p>
      <p class="nar"><strong>Lời khuyên:</strong> Hãy tập thói quen đặt câu hỏi "Tại sao?" và "Nguồn gốc thông tin này từ đâu?" trước khi đưa ra quyết định quan trọng.</p>
    </div>`
  },
  {
    name: 'Trục Lập Kế Hoạch', code: '1-2-3', cells: [1, 2, 3],
    active: `<div class="arrow-block active-arrow">
      <div class="arrow-title arrow-has">✅ Trục Lập Kế Hoạch (1-2-3) — Mũi tên Trí Tuệ</div>
      <p class="nar">Trục này cho thấy bạn là <strong>người có khả năng lập kế hoạch tốt và thường làm việc theo kế hoạch vạch ra</strong>. Bạn làm việc gì thường cũng có những bước định sẵn trong đầu rõ ràng. Trí nhớ tốt, tư duy logic và khả năng tổ chức thông tin là những điểm mạnh của bạn.</p>
      <p class="nar">Những người có trục 1-2-3 thường giỏi trong các lĩnh vực đòi hỏi sự tỉ mỉ, hệ thống hóa và khả năng nhìn xa trông rộng.</p>
    </div>`,
    missing: `<div class="arrow-block missing-arrow">
      <div class="arrow-title arrow-no">⚠️ Thiếu Trục Lập Kế Hoạch (1-2-3) — Cần Phát Triển Tư Duy Có Hệ Thống</div>
      <p class="nar">Sự thiếu vắng của trục này có thể khiến bạn có xu hướng hành động theo cảm tính hơn là kế hoạch. Bạn có thể giỏi bắt đầu nhưng gặp khó khăn trong việc theo dõi tiến độ và điều chỉnh khi cần thiết.</p>
      <p class="nar"><strong>Lời khuyên:</strong> Hãy bắt đầu sử dụng công cụ quản lý công việc đơn giản. Chia nhỏ mục tiêu lớn thành các bước có thể thực hiện ngay hôm nay — điều này sẽ thay đổi hoàn toàn hiệu suất của bạn.</p>
    </div>`
  },
  {
    name: 'Trục Ý Chí', code: '4-5-6', cells: [4, 5, 6],
    active: `<div class="arrow-block active-arrow">
      <div class="arrow-title arrow-has">✅ Trục Ý Chí (4-5-6) — Mũi tên Bền Vững</div>
      <p class="nar">Trục 4-5-6 mang đến <strong>sự kiên trì, bền bỉ và ý chí vượt qua nghịch cảnh</strong>. Bạn không bỏ cuộc dễ dàng và có khả năng duy trì nỗ lực trong thời gian dài để đạt được mục tiêu. Đây là mũi tên của những người xây dựng nên những thứ bền vững theo thời gian.</p>
    </div>`,
    missing: `<div class="arrow-block missing-arrow">
      <div class="arrow-title arrow-no">⚠️ Thiếu Trục Ý Chí (4-5-6) — Cần Phát Triển Sự Kiên Trì</div>
      <p class="nar">Sự vắng mặt của trục 4-5-6 có thể khiến bạn gặp khó khăn trong việc duy trì nỗ lực ổn định theo thời gian. Bạn có thể rất nhiệt tình lúc đầu nhưng mất động lực khi kết quả đến chậm hơn mong đợi.</p>
      <p class="nar"><strong>Lời khuyên:</strong> Hãy tạo ra những "phần thưởng nhỏ" trên hành trình dài để duy trì động lực. Và hãy nhớ — hầu hết thành công lớn đều đến từ sự kiên trì bình thường chứ không phải từ tài năng thiên bẩm đặc biệt.</p>
    </div>`
  },
  {
    name: 'Trục Hành Động', code: '7-8-9', cells: [7, 8, 9],
    active: `<div class="arrow-block active-arrow">
      <div class="arrow-title arrow-has">✅ Trục Hành Động (7-8-9) — Mũi tên Thực Tiễn</div>
      <p class="nar">Trục 7-8-9 là mũi tên của những <strong>người hành động thực tiễn và có khả năng hiện thực hóa ý tưởng thành kết quả cụ thể</strong>. Bạn tin vào những gì có thể làm ra được, đo lường được và chứng minh được. Sự kết hợp giữa học từ kinh nghiệm (7), quản lý nguồn lực (8) và tầm nhìn rộng (9) tạo nên một con người vô cùng hiệu quả.</p>
    </div>`,
    missing: `<div class="arrow-block missing-arrow">
      <div class="arrow-title arrow-no">⚠️ Thiếu Trục Hành Động (7-8-9) — Cần Chuyển Tư Duy Thành Hành Động</div>
      <p class="nar">Sự thiếu vắng của trục 7-8-9 có thể khiến bạn có nhiều ý tưởng nhưng gặp khó khăn trong việc biến chúng thành kết quả cụ thể. Bạn có thể thiên về lý thuyết hơn thực hành, hoặc đôi khi thiếu niềm tin vào khả năng thực thi của mình.</p>
      <p class="nar"><strong>Lời khuyên:</strong> Hãy tập thói quen "làm trước, hoàn thiện sau". Đừng chờ điều kiện hoàn hảo mới hành động — hãy bắt đầu ngay với những gì bạn đang có.</p>
    </div>`
  },
  {
    name: 'Trục Thể Chất', code: '1-4-7', cells: [1, 4, 7],
    active: `<div class="arrow-block active-arrow">
      <div class="arrow-title arrow-has">✅ Trục Thể Chất (1-4-7) — Mũi tên Nền Tảng Vật Lý</div>
      <p class="nar">Trục 1-4-7 cho thấy bạn có <strong>mối kết nối mạnh mẽ với thế giới vật chất và thể chất</strong>. Bạn có xu hướng học qua trải nghiệm thực tiễn và có sức chịu đựng thể chất cao. Sự kỷ luật, thực dụng và học từ kinh nghiệm là những phẩm chất nổi bật của bạn.</p>
    </div>`,
    missing: `<div class="arrow-block missing-arrow">
      <div class="arrow-title arrow-no">⚠️ Thiếu Trục Thể Chất (1-4-7) — Cần Chăm Sóc Nền Tảng Vật Lý</div>
      <p class="nar">Sự vắng mặt của trục 1-4-7 có thể khiến bạn thiếu sự kết nối với cơ thể và thế giới vật chất. Bạn có thể dễ bỏ qua các nhu cầu thể chất cơ bản và gặp khó khăn trong việc ổn định các vấn đề tài chính và sức khỏe.</p>
      <p class="nar"><strong>Lời khuyên:</strong> Hãy xây dựng thói quen chăm sóc sức khỏe thể chất — tập thể dục đều đặn, ngủ đủ giấc và ăn uống lành mạnh. Sức khỏe thể chất là nền tảng cho mọi thành tựu khác.</p>
    </div>`
  },
  {
    name: 'Trục Tâm Thần', code: '3-6-9', cells: [3, 6, 9],
    active: `<div class="arrow-block active-arrow">
      <div class="arrow-title arrow-has">✅ Trục Tâm Thần (3-6-9) — Mũi tên Lý Tưởng & Sáng Tạo</div>
      <p class="nar">Trục 3-6-9 mang đến <strong>sự kết hợp hiếm có giữa trí tuệ, tình yêu thương và tầm nhìn lý tưởng</strong>. Bạn có khả năng sáng tạo cao, tầm nhìn nhân đạo và khả năng truyền cảm hứng cho người khác. Đây là mũi tên của các nghệ sĩ, nhà tư tưởng và những người dẫn dắt văn hóa.</p>
    </div>`,
    missing: `<div class="arrow-block missing-arrow">
      <div class="arrow-title arrow-no">⚠️ Thiếu Trục Tâm Thần (3-6-9) — Cần Nuôi Dưỡng Trí Tưởng Tượng</div>
      <p class="nar">Sự vắng mặt của trục 3-6-9 có thể khiến bạn có xu hướng quá thực dụng và đôi khi khó nhìn thấy những khả năng rộng lớn hơn trong cuộc sống. Bạn có thể thiếu kết nối với sự sáng tạo và tầm nhìn dài hạn.</p>
      <p class="nar"><strong>Lời khuyên:</strong> Hãy dành thời gian mỗi tuần cho những hoạt động sáng tạo thuần túy. Đọc sách, khám phá nghệ thuật, và kết nối với những người có tầm nhìn khác biệt sẽ giúp bạn mở rộng thế giới quan.</p>
    </div>`
  }
];

// ─── Build cell-by-cell analysis for a grid (DOB or Name) ─────────────────────
function buildCellAnalysis(grid, source) {
  const label = source === 'dob' ? 'biểu đồ ngày sinh' : 'biểu đồ tên';
  let html = `<h4 style="font-family:var(--font-ui);font-size:1rem;color:#1e3a8a;margin:1.5rem 0 0.5rem">Phân Tích Từng Số Trong ${source === 'dob' ? 'Biểu Đồ Ngày Sinh' : 'Biểu Đồ Tên'}</h4>`;

  for (let n = 1; n <= 9; n++) {
    const count = grid[n] || 0;
    const kb = CELL_KNOWLEDGE[n];
    if (!kb) continue;

    if (count === 0) {
      html += kb.zero;
    } else if (count === 1) {
      html += kb.one;
    } else {
      html += kb.many(count);
    }
  }
  return html;
}

// ─── Build arrows analysis for a grid ─────────────────────────────────────────
function buildArrowsAnalysis(grid, sourceName) {
  const activeArrows = [];
  const missingArrows = [];

  ARROWS.forEach(arrow => {
    const hasAll = arrow.cells.every(c => (grid[c] || 0) > 0);
    if (hasAll) activeArrows.push(arrow);
    else missingArrows.push(arrow);
  });

  let html = `<h4 style="font-family:var(--font-ui);font-size:1rem;color:#1e3a8a;margin:2rem 0 0.5rem">Phân Tích Mũi Tên Sức Mạnh — ${sourceName}</h4>`;

  if (activeArrows.length > 0) {
    html += `<p class="nar"><strong>Bạn sở hữu ${activeArrows.length} mũi tên sức mạnh</strong> — đây là những trục năng lượng hoạt động đầy đủ trong biểu đồ:</p>`;
    activeArrows.forEach(a => { html += a.active; });
  } else {
    html += `<p class="nar" style="color:#64748b;font-style:italic;">Chưa có mũi tên hoàn chỉnh nào được hình thành trong ${sourceName.toLowerCase()}. Biểu đồ tên của bạn sẽ bổ sung các năng lượng còn thiếu.</p>`;
  }

  if (missingArrows.length > 0) {
    html += `<h4 style="font-family:var(--font-ui);font-size:1rem;color:#b91c1c;margin:1.5rem 0 0.5rem">Các Mũi Tên Chưa Hoàn Thiện — Cần Phát Triển:</h4>`;
    missingArrows.forEach(a => { html += a.missing; });
  }

  return html;
}

// ─── Build compensation analysis (combined vs DOB) ─────────────────────────────
function buildCompensationAnalysis(dobGrid, nameGrid, combinedGrid, name) {
  const compensated = [];
  const stillMissing = [];

  for (let n = 1; n <= 9; n++) {
    if ((dobGrid[n] || 0) === 0) {
      if ((nameGrid[n] || 0) > 0) compensated.push(n);
      else stillMissing.push(n);
    }
  }

  // Arrows gained from combined
  const arrowsFromName = [];
  ARROWS.forEach(arrow => {
    const hasInDob = arrow.cells.every(c => (dobGrid[c] || 0) > 0);
    const hasInCombined = arrow.cells.every(c => (combinedGrid[c] || 0) > 0);
    if (!hasInDob && hasInCombined) arrowsFromName.push(arrow);
  });

  // Isolated numbers in DOB
  const isolated = [];
  for (let n = 1; n <= 9; n++) {
    if ((dobGrid[n] || 0) === 1) {
      // Check if it's not connected by any arrow
      const connected = ARROWS.some(a => a.cells.includes(n) && a.cells.every(c => (dobGrid[c] || 0) > 0));
      if (!connected) isolated.push(n);
    }
  }

  let html = `<p class="nar">Khi kết hợp biểu đồ ngày sinh và biểu đồ tên của <strong>${name}</strong>, chúng ta có được một bức tranh toàn diện hơn về năng lượng tổng hợp — nơi tên gọi có thể bổ sung những gì ngày sinh còn thiếu.</p>`;

  if (compensated.length > 0) {
    html += `<div class="arrow-block active-arrow">
      <div class="arrow-title arrow-has">🎉 Chúc mừng! Tên của bạn đã bổ sung các số còn thiếu:</div>
      <p class="nar">Các số <strong>${compensated.join(', ')}</strong> vốn vắng mặt trong biểu đồ ngày sinh đã được <strong>bổ sung từ năng lượng tên của bạn</strong>. Điều này rất quan trọng — tên gọi đóng vai trò "cẩm nang bổ trợ" cho những điểm yếu bẩm sinh của ngày sinh.</p>
    </div>`;
  }

  if (arrowsFromName.length > 0) {
    html += `<div class="arrow-block active-arrow">
      <div class="arrow-title arrow-has">✅ Tên của bạn đã tạo thêm ${arrowsFromName.length} mũi tên sức mạnh mới!</div>
      ${arrowsFromName.map(a => `<p class="nar">• <strong>Trục ${a.name} (${a.code})</strong>: ${a.active.replace(/<div.*?<\/div>/gs, '').replace(/<[^>]+>/g, '').substring(0, 150)}...</p>`).join('')}
    </div>`;
  }

  if (isolated.length > 0) {
    html += `<div class="arrow-block missing-arrow">
      <div class="arrow-title arrow-no">⚠️ Các số lẻ loi (Ốc đảo cô đơn) trong biểu đồ ngày sinh:</div>
      <p class="nar">Các số <strong>${isolated.join(', ')}</strong> xuất hiện đơn lẻ trong biểu đồ ngày sinh — không được kết nối với bất kỳ mũi tên nào. Đây gọi là "số ốc đảo", nghĩa là năng lượng đó có nhưng chưa được phát huy đầy đủ tiềm năng của nó. Tên của bạn sẽ giúp kết nối và khởi động các "ốc đảo" này.</p>
    </div>`;
  }

  if (stillMissing.length > 0) {
    html += `<p class="nar" style="color:#7f1d1d;"><strong>⚠️ Các số vẫn còn thiếu sau khi kết hợp:</strong> ${stillMissing.join(', ')} — Đây là những bài học nghiệp (Karmic Lessons) sâu sắc nhất của bạn trong kiếp này, cần được chủ động phát triển thông qua trải nghiệm sống.</p>`;
  }

  return html;
}

// ─── Parse digit grid from any string (DOB or Name) ───────────────────────────
function parseDigitGrid(str) {
  const grid = {};
  for (let i = 1; i <= 9; i++) grid[i] = 0;
  const digits = str.replace(/[^0-9]/g, '');
  for (const d of digits) {
    const n = parseInt(d);
    if (n >= 1 && n <= 9) grid[n]++;
  }
  return grid;
}

// ─── Parse name grid (map letters to numbers) ─────────────────────────────────
function parseNameGrid(name) {
  const MAP = {
    a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9,
    j: 1, k: 2, l: 3, m: 4, n: 5, o: 6, p: 7, q: 8, r: 9,
    s: 1, t: 2, u: 3, v: 4, w: 5, x: 6, y: 7, z: 8
  };
  const grid = {};
  for (let i = 1; i <= 9; i++) grid[i] = 0;
  const clean = name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z]/g, '');
  for (const ch of clean) {
    const n = MAP[ch];
    if (n) grid[n]++;
  }
  return grid;
}

// ─── LEGACY: simple grid analysis (kept for backward compat) ──────────────────
function buildGridAnalysis(dob) {
  return ''; // Now handled by full engine below
}
