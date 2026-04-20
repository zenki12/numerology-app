/**
 * NUMEROLOGY ENGINE v1.0
 * =====================
 * Bộ lõi tính toán Thần số học Pythagoras hoàn chỉnh.
 * Tự động tra cứu nội dung từ numerology_knowledge_base.json sau khi tính số.
 *
 * Cách dùng:
 *   const { generateReport } = require('./engine');
 *   const report = generateReport('Nguyễn Thị Hương', '15/08/1990');
 *   console.log(report.life_path.number);   // → 5
 *   console.log(report.life_path.data);     // → { title, description, career, love, ... }
 */

'use strict';

const path = require('path');
const KB = require('../../../numerology_knowledge_base.json');

// ─────────────────────────────────────────────
// BẢNG SỐ PYTHAGORAS & QUY TẮC NGUYÊN ÂM
// ─────────────────────────────────────────────
const PYTHAGORAS = {
  A:1, B:2, C:3, D:4, E:5, F:6, G:7, H:8, I:9,
  J:1, K:2, L:3, M:4, N:5, O:6, P:7, Q:8, R:9,
  S:1, T:2, U:3, V:4, W:5, X:6, Y:7, Z:8
};

const VOWELS = new Set(['A','E','I','O','U']);
// Y được xử lý theo y_rule: nguyên âm nếu đứng giữa phụ âm, còn lại là phụ âm.
// Để đơn giản & tương thích tiếng Việt: Y mặc định là phụ âm (theo hệ thống TSHTD).
// Anh có thể đổi thành VOWELS.add('Y') nếu dùng hệ thống khác.

/**
 * Loại bỏ dấu tiếng Việt và ký tự đặc biệt — chuẩn hóa tên TRƯỚC khi tính Pythagoras.
 * Ví dụ: "Nguyễn Thị Hương" → "Nguyen Thi Huong"
 * @param {string} str
 * @returns {string}
 */
function removeDiacritics(str) {
  return str
    .normalize('NFD')                    // Tách combining marks ra khỏi ký tự gốc
    .replace(/[\u0300-\u036f]/g, '')    // Xóa combining diacritical marks
    .replace(/đ/g, 'd')                  // Xử lý đặc biệt: đ → d
    .replace(/Đ/g, 'D')                  // Xử lý đặc biệt: Đ → D
    .replace(/[^\x00-\x7F]/g, '');      // Xóa mọi ký tự non-ASCII còn sót lại
}

// ─────────────────────────────────────────────
// CÁC HÀM TOÁN HỌC CỐT LÕI
// ─────────────────────────────────────────────

/**
 * Rút gọn số về 1 chữ số, giữ lại Số Vua (11, 22, 33).
 * @param {number} n
 * @param {boolean} keepMaster - Có giữ 11/22/33 không
 * @returns {number}
 */
function reduce(n, keepMaster = true) {
  if (n < 0) n = Math.abs(n);
  let current = n;
  while (current > 9) {
    if (keepMaster && (current === 11 || current === 22 || current === 33)) {
      return current;
    }
    current = String(current).split('').reduce((s, d) => s + Number(d), 0);
  }
  return current;
}

/**
 * Tính tổng số Pythagoras của 1 chuỗi ký tự (toàn bộ chữ cái).
 * @param {string} str - Chuỗi ký tự (không cần toUpperCase sẵn)
 * @param {boolean} keepMaster
 * @returns {number}
 */
function wordSum(str, keepMaster = true) {
  const total = str.toUpperCase().split('').reduce((s, c) => s + (PYTHAGORAS[c] || 0), 0);
  return reduce(total, keepMaster);
}

/**
 * Tính tổng Pythagoras chỉ của NGUYÊN ÂM trong chuỗi.
 */
function vowelSum(str, keepMaster = true) {
  const total = str.toUpperCase().split('').reduce((s, c) => {
    return s + (VOWELS.has(c) ? (PYTHAGORAS[c] || 0) : 0);
  }, 0);
  return reduce(total, keepMaster);
}

/**
 * Tính tổng Pythagoras chỉ của PHỤ ÂM trong chuỗi.
 */
function consonantSum(str, keepMaster = true) {
  const total = str.toUpperCase().split('').reduce((s, c) => {
    if (!PYTHAGORAS[c]) return s; // Bỏ qua ký tự không phải chữ cái
    return s + (VOWELS.has(c) ? 0 : PYTHAGORAS[c]);
  }, 0);
  return reduce(total, keepMaster);
}

/**
 * Kiểm tra xem tổng thô (trước rút gọn) có phải Nợ Nghiệp không.
 * @param {number} rawSum - Tổng TRƯỚC khi rút gọn
 * @returns {string|null} - '13' | '14' | '16' | '19' | null
 */
function detectKarmicDebt(rawSum) {
  // Nợ nghiệp chỉ nằm ở lần rút gọn đầu tiên (2 chữ số)
  const KARMIC_NUMBERS = [13, 14, 16, 19];
  if (KARMIC_NUMBERS.includes(rawSum)) return String(rawSum);
  // Kiểm tra các bước trung gian nếu tổng lớn hơn
  let current = rawSum;
  while (current > 9) {
    const next = String(current).split('').reduce((s, d) => s + Number(d), 0);
    if (KARMIC_NUMBERS.includes(next) && next < current) return String(next);
    current = next;
  }
  return null;
}

// ─────────────────────────────────────────────
// HÀM TÍNH TỪNG CHỈ SỐ
// ─────────────────────────────────────────────

/** Đường đời = reduce(reduce(d) + reduce(m) + reduce(y)) */
function calcLifePath(d, m, y) {
  const rd = reduce(d);
  const rm = reduce(m);
  const ry = reduce(y);
  const raw = rd + rm + ry;
  return { number: reduce(raw), karmic_debt: detectKarmicDebt(raw) };
}

/** Ngày sinh = reduce(ngày) */
function calcBirthday(d) {
  const raw = d;
  return { number: reduce(d), karmic_debt: detectKarmicDebt(raw) };
}

/** Thái độ = reduce(ngày + tháng) */
function calcAttitude(d, m) {
  const raw = d + m;
  return { number: reduce(raw), karmic_debt: detectKarmicDebt(raw) };
}

/** Sứ mệnh = reduce(tổng toàn bộ chữ cái full name) */
function calcDestiny(fullName) {
  const normalized = removeDiacritics(fullName);
  const letters = normalized.replace(/\s+/g, '').toUpperCase();
  const total = letters.split('').reduce((s, c) => s + (PYTHAGORAS[c] || 0), 0);
  return { number: reduce(total), raw: total, karmic_debt: detectKarmicDebt(total) };
}

/** Linh hồn = reduce(chỉ nguyên âm trong full name) */
function calcSoul(fullName) {
  const normalized = removeDiacritics(fullName);
  const letters = normalized.replace(/\s+/g, '').toUpperCase();
  const total = letters.split('').reduce((s, c) => s + (VOWELS.has(c) ? (PYTHAGORAS[c] || 0) : 0), 0);
  return { number: reduce(total), raw: total, karmic_debt: detectKarmicDebt(total) };
}

/** Nhân cách = reduce(chỉ phụ âm trong full name) */
function calcPersonality(fullName) {
  const normalized = removeDiacritics(fullName);
  const letters = normalized.replace(/\s+/g, '').toUpperCase();
  const total = letters.split('').reduce((s, c) => {
    if (!PYTHAGORAS[c]) return s;
    return s + (VOWELS.has(c) ? 0 : PYTHAGORAS[c]);
  }, 0);
  return { number: reduce(total), raw: total, karmic_debt: detectKarmicDebt(total) };
}

/** Trưởng thành = reduce(life_path + destiny) */
function calcMaturity(lifePath, destiny) {
  const raw = lifePath + destiny;
  return { number: reduce(raw), raw };
}

/**
 * Năm cá nhân = reduce(d + m + reduce(năm hiện tại))
 * @param {number} d - Ngày sinh
 * @param {number} m - Tháng sinh
 * @param {number} currentYear - Năm cần tính (mặc định năm hiện tại)
 */
function calcPersonalYear(d, m, currentYear = new Date().getFullYear()) {
  const ry = reduce(currentYear, false); // Rút gọn năm KHÔNG giữ master
  const raw = d + m + ry;
  return { number: reduce(raw), year: currentYear };
}

/**
 * Tháng cá nhân = reduce(personal_year + tháng hiện tại)
 */
function calcPersonalMonth(personalYear, currentMonth = new Date().getMonth() + 1) {
  const raw = personalYear + currentMonth;
  return { number: reduce(raw, false), month: currentMonth };
}

/**
 * 3 Chu kỳ Vòng đời
 * Cycle 1: reduce(tháng sinh)
 * Cycle 2: reduce(ngày sinh)
 * Cycle 3: reduce(năm sinh)
 * Thời điểm chuyển: kết thúc Chu kỳ 1 tại tuổi = (36 - life_path)
 */
function calcLifeCycles(d, m, y, lifePath) {
  const c1 = reduce(m);
  const c2 = reduce(d);
  const c3 = reduce(y, false); // Năm sinh rút về 1 chữ số (không giữ master)

  const cycle1EndAge = 36 - lifePath;
  const cycle2StartAge = cycle1EndAge + 1;
  const cycle2EndAge = cycle1EndAge + 27;
  const cycle3StartAge = cycle2EndAge + 1;

  return {
    cycle1: { number: c1, period: `0 – ${cycle1EndAge} tuổi` },
    cycle2: { number: c2, period: `${cycle2StartAge} – ${cycle2EndAge} tuổi` },
    cycle3: { number: c3, period: `${cycle3StartAge} tuổi trở đi` }
  };
}

/**
 * 4 Đỉnh Kim tự tháp (Pyramid Peaks)
 * P1 = reduce(m + d)
 * P2 = reduce(d + y_reduced)
 * P3 = reduce(P1 + P2)
 * P4 = reduce(m + y_reduced)
 *
 * Thời điểm đỉnh:
 * P1 bắt đầu lúc sinh → đỉnh tuổi (36 - life_path)
 * P2 đỉnh tuổi (36 - life_path + 9)
 * P3 đỉnh tuổi (36 - life_path + 18)
 * P4 đỉnh tuổi (36 - life_path + 27) → kéo dài đến cuối
 */
function calcPyramids(d, m, y, lifePath) {
  const rd = reduce(d);
  const rm = reduce(m);
  const ry = reduce(y, false);

  const p1 = reduce(rm + rd);
  const p2 = reduce(rd + ry);
  const p3 = reduce(p1 + p2);
  const p4 = reduce(rm + ry);

  const base = 36 - lifePath;

  return {
    peaks: [
      { number: p1, period: `0 – ${base} tuổi` },
      { number: p2, period: `${base + 1} – ${base + 9} tuổi` },
      { number: p3, period: `${base + 10} – ${base + 18} tuổi` },
      { number: p4, period: `${base + 19} tuổi trở đi` }
    ],
    challenges: calcChallenges(d, m, y)
  };
}

/**
 * 4 Thử thách Kim tự tháp (không giữ master numbers)
 * C1 = |reduce(m, false) - reduce(d, false)|
 * C2 = |reduce(d, false) - reduce(y, false)|
 * C3 = |C1 - C2|
 * C4 = |reduce(m, false) - reduce(y, false)|
 */
function calcChallenges(d, m, y) {
  const rd = reduce(d, false);
  const rm = reduce(m, false);
  const ry = reduce(y, false);

  const c1 = Math.abs(rm - rd);
  const c2 = Math.abs(rd - ry);
  const c3 = Math.abs(c1 - c2);
  const c4 = Math.abs(rm - ry);

  const lifePath = reduce(reduce(d) + reduce(m) + reduce(y));
  const base = 36 - lifePath;

  return [
    { number: c1, period: `0 – ${base} tuổi` },
    { number: c2, period: `${base + 1} – ${base + 9} tuổi` },
    { number: c3, period: `${base + 10} – ${base + 18} tuổi` },
    { number: c4, period: `giai đoạn chủ đạo suốt cuộc đời` }
  ];
}

/**
 * Số Nghiệp bị thiếu (Karmic Lessons) = các số 1-9 KHÔNG xuất hiện trong full name
 */
function calcKarmicLessons(fullName) {
  const normalized = removeDiacritics(fullName);
  const letters = normalized.replace(/\s+/g, '').toUpperCase();
  const present = new Set(letters.split('').map(c => PYTHAGORAS[c]).filter(Boolean));
  const missing = [];
  for (let i = 1; i <= 9; i++) {
    if (!present.has(i)) missing.push(i);
  }
  return missing;
}

// ─────────────────────────────────────────────
// HÀM LOOKUP TỪ KNOWLEDGE BASE
// ─────────────────────────────────────────────

/**
 * Lấy data từ KB cho 1 section + 1 số cụ thể.
 * @param {string} section - Key trong KB (vd: 'life_path', 'soul_number')
 * @param {number|string} num - Con số cần lookup
 * @returns {object|null}
 */
function lookup(section, num) {
  if (!KB[section]) return null;
  const key = String(num);
  return KB[section][key] || null;
}

/** Lấy data compatibility từ 2 số */
function lookupCompatibility(num1, num2) {
  const key1 = `${Math.min(num1, num2)}_${Math.max(num1, num2)}`;
  return KB.compatibility?.[key1] || null;
}

/** Lấy data Karmic Debt từ số nghiệp */
function lookupKarmicDebt(debtNumber) {
  if (!debtNumber) return null;
  return KB.karmic_debt?.[String(debtNumber)] || null;
}

// ─────────────────────────────────────────────
// HÀM GENERATE REPORT CHÍNH
// ─────────────────────────────────────────────

/**
 * Tạo báo cáo Thần số học 30 điểm đầy đủ.
 *
 * @param {string} fullName      - Họ & tên đầy đủ khai sinh (vd: "Nguyễn Thị Hương")
 * @param {string} dob           - Ngày sinh format DD/MM/YYYY (vd: "15/08/1990")
 * @param {object} [options]     - Tuỳ chọn
 * @param {number} [options.currentYear]  - Năm cần tính personal_year (mặc định: năm hiện tại)
 * @param {number} [options.currentMonth] - Tháng cần tính personal_month (mặc định: tháng hiện tại)
 * @returns {NumerologyReport}
 */
function generateReport(fullName, dob, options = {}) {
  if (!fullName || !dob) throw new Error('Cần nhập họ tên và ngày sinh.');

  // ── Parse input ──
  const parts = dob.trim().split('/');
  if (parts.length !== 3) throw new Error('Ngày sinh phải đúng format DD/MM/YYYY');
  const d = parseInt(parts[0], 10);
  const m = parseInt(parts[1], 10);
  const y = parseInt(parts[2], 10);
  if (!d || !m || !y) throw new Error('Ngày sinh không hợp lệ.');

  const currentYear  = options.currentYear  || new Date().getFullYear();
  const currentMonth = options.currentMonth || new Date().getMonth() + 1;

  // ── Tính toán ──
  const lpResult    = calcLifePath(d, m, y);
  const bdResult    = calcBirthday(d);
  const attResult   = calcAttitude(d, m);
  const desResult   = calcDestiny(fullName);
  const soulResult  = calcSoul(fullName);
  const persResult  = calcPersonality(fullName);
  const matResult   = calcMaturity(lpResult.number, desResult.number);
  const pyResult    = calcPersonalYear(d, m, currentYear);
  const pmResult    = calcPersonalMonth(pyResult.number, currentMonth);
  const cycles      = calcLifeCycles(d, m, y, lpResult.number);
  const pyramids    = calcPyramids(d, m, y, lpResult.number);
  const karmicLessons = calcKarmicLessons(fullName);

  // ── Assemble report ──
  return {
    input: { fullName, dob, currentYear, currentMonth },

    // ── PHẦN 1: TỔNG QUAN ──
    birthday_number: {
      number: bdResult.number,
      karmic_debt: bdResult.karmic_debt,
      data: lookup('birthday_number', bdResult.number)
    },
    attitude_number: {
      number: attResult.number,
      karmic_debt: attResult.karmic_debt,
      data: lookup('attitude_number', attResult.number)
    },

    // ── PHẦN 2: ĐƯỜNG ĐỜI ──
    life_path: {
      number: lpResult.number,
      karmic_debt: lpResult.karmic_debt,
      data: lookup('life_path', lpResult.number)
    },
    life_cycles: {
      cycle1: { ...cycles.cycle1, data: lookup('life_cycle', cycles.cycle1.number) },
      cycle2: { ...cycles.cycle2, data: lookup('life_cycle', cycles.cycle2.number) },
      cycle3: { ...cycles.cycle3, data: lookup('life_cycle', cycles.cycle3.number) }
    },
    pyramid_peaks: pyramids.peaks.map(p => ({
      ...p,
      data: lookup('pyramid_peak', p.number)
    })),
    pyramid_challenges: pyramids.challenges.map(c => ({
      ...c,
      data: lookup('pyramid_challenge', c.number)
    })),
    personal_year: {
      number: pyResult.number,
      year: pyResult.year,
      data: lookup('personal_year', pyResult.number)
    },
    personal_month: {
      number: pmResult.number,
      month: pmResult.month,
      data: lookup('personal_month', pmResult.number)
    },

    // ── PHẦN 3: SỨ MỆNH ──
    destiny_number: {
      number: desResult.number,
      karmic_debt: desResult.karmic_debt,
      data: lookup('destiny_number', desResult.number)
    },
    maturity_number: {
      number: matResult.number,
      data: lookup('maturity_number', matResult.number)
    },
    soul_number: {
      number: soulResult.number,
      karmic_debt: soulResult.karmic_debt,
      data: lookup('soul_number', soulResult.number)
    },
    personality_number: {
      number: persResult.number,
      karmic_debt: persResult.karmic_debt,
      data: lookup('personality_number', persResult.number)
    },
    soul_challenge: {
      number: soulResult.number,
      data: lookup('soul_challenge', soulResult.number)
    },
    destiny_challenge: {
      number: desResult.number,
      data: lookup('destiny_challenge', desResult.number)
    },
    personality_challenge: {
      number: persResult.number,
      data: lookup('personality_challenge', persResult.number)
    },
    karmic_debt: {
      // Karmic debt áp dụng cho: life_path, destiny, soul, personality
      life_path:   lpResult.karmic_debt   ? lookup('karmic_debt', lpResult.karmic_debt)   : null,
      destiny:     desResult.karmic_debt   ? lookup('karmic_debt', desResult.karmic_debt)   : null,
      soul:        soulResult.karmic_debt  ? lookup('karmic_debt', soulResult.karmic_debt)  : null,
      personality: persResult.karmic_debt  ? lookup('karmic_debt', persResult.karmic_debt)  : null,
    },
    karmic_lessons: {
      missing_numbers: karmicLessons,
      data: karmicLessons.map(n => ({
        number: n,
        info: KB.karmic_lessons?.[String(n)] || null
      }))
    },

    // ── PHẦN 4: NĂNG LỰC ──
    maturity_ability: {
      number: matResult.number,
      data: lookup('maturity_ability', matResult.number)
    },
    cognitive_ability: {
      // Tư duy = reduce(ngày sinh rút gọn + tháng sinh rút gọn)
      number: (function() {
        const rd = reduce(d, false);
        const rm = reduce(m, false);
        return reduce(rd + rm, false);
      })(),
      get data() { return lookup('cognitive_ability', this.number); }
    },
    override_difficulty: {
      // Vượt khó = reduce(ngày sinh thô + năm sinh rút gọn)
      number: (function() {
        const ry = reduce(y, false);
        return reduce(d + ry, false);
      })(),
      get data() { return lookup('override_difficulty', this.number); }
    },
    approach_motivation: {
      // Động lực tiếp cận = tổng Pythagoras HỌ (cần normalize trước)
      number: (function() {
        const parts = removeDiacritics(fullName).trim().split(/\s+/);
        return wordSum(parts[0]);
      })(),
      get data() { return lookup('approach_motivation', this.number); }
    },
    approach_ability: {
      // Năng lực tiếp cận = reduce(ngày sinh rút gọn)
      number: reduce(d, false),
      get data() { return lookup('approach_ability', this.number); }
    },
    approach_attitude: {
      // Thái độ tiếp cận = reduce(tháng sinh rút gọn)
      number: reduce(m, false),
      get data() { return lookup('approach_attitude', this.number); }
    },
  };
}

// ─────────────────────────────────────────────
// EXPORTS
// ─────────────────────────────────────────────
module.exports = {
  // Engine chính
  generateReport,
  // Hàm lookup đơn lẻ (dùng khi chỉ cần tra 1 chỉ số)
  lookup,
  lookupCompatibility,
  lookupKarmicDebt,
  // Các hàm tính toán đơn lẻ (dùng để test)
  reduce,
  calcLifePath,
  calcBirthday,
  calcAttitude,
  calcDestiny,
  calcSoul,
  calcPersonality,
  calcMaturity,
  calcPersonalYear,
  calcPersonalMonth,
  calcLifeCycles,
  calcPyramids,
  calcKarmicLessons,
};
