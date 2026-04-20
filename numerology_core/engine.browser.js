/**
 * ENGINE BROWSER — v1.0
 * Browser-compatible version of engine.js (ES-module-free, no require)
 * Loaded bởi index.html, cung cấp window.NumerologyEngine
 */
(function (global) {
  'use strict';

  // ─── Pythagoras Table ───
  const P = {
    A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8, I: 9,
    J: 1, K: 2, L: 3, M: 4, N: 5, O: 6, P: 7, Q: 8, R: 9,
    S: 1, T: 2, U: 3, V: 4, W: 5, X: 6, Y: 7, Z: 8
  };
  const VOWELS = new Set(['A', 'E', 'I', 'O', 'U']);

  // ─── Helpers ───
  function removeDiacritics(str) {
    return str
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/đ/g, 'd').replace(/Đ/g, 'D')
      .replace(/[^\x00-\x7F]/g, '');
  }

  function reduce(n, keepMaster = true) {
    if (n < 0) n = Math.abs(n);
    let c = n;
    while (c > 9) {
      // Pythagoras coi số 10 là mốc đặc biệt
      if (keepMaster && (c === 10 || c === 11 || c === 22 || c === 33)) return c;
      c = String(c).split('').reduce((s, d) => s + Number(d), 0);
    }
    return c;
  }

  function wordSum(str, keepMaster = true) {
    const t = str.toUpperCase().split('').reduce((s, c) => s + (P[c] || 0), 0);
    return reduce(t, keepMaster);
  }

  function detectKarmicDebt(raw) {
    const KN = [13, 14, 16, 19];
    if (KN.includes(raw)) return String(raw);
    let c = raw;
    while (c > 9) {
      const nxt = String(c).split('').reduce((s, d) => s + Number(d), 0);
      if (KN.includes(nxt) && nxt < c) return String(nxt);
      c = nxt;
    }
    return null;
  }

  // ─── Calculation functions ───
  function calcLifePath(d, m, y) {
    const raw = reduce(d) + reduce(m) + reduce(y);
    return { number: reduce(raw), karmic_debt: detectKarmicDebt(raw) };
  }

  function calcBirthday(d) {
    return { number: reduce(d), karmic_debt: detectKarmicDebt(d) };
  }

  function calcAttitude(d, m) {
    const raw = d + m;
    return { number: reduce(raw), karmic_debt: detectKarmicDebt(raw) };
  }

  function calcDestiny(fullName) {
    const norm = removeDiacritics(fullName).replace(/\s+/g, '').toUpperCase();
    const total = norm.split('').reduce((s, c) => s + (P[c] || 0), 0);
    return { number: reduce(total), karmic_debt: detectKarmicDebt(total) };
  }

  function calcSoul(fullName) {
    const norm = removeDiacritics(fullName).replace(/\s+/g, '').toUpperCase();
    const total = norm.split('').reduce((s, c) => s + (VOWELS.has(c) ? (P[c] || 0) : 0), 0);
    return { number: reduce(total), karmic_debt: detectKarmicDebt(total) };
  }

  function calcPersonality(fullName) {
    const norm = removeDiacritics(fullName).replace(/\s+/g, '').toUpperCase();
    const total = norm.split('').reduce((s, c) => {
      if (!P[c]) return s;
      return s + (VOWELS.has(c) ? 0 : P[c]);
    }, 0);
    return { number: reduce(total), karmic_debt: detectKarmicDebt(total) };
  }

  function calcMaturity(lp, destiny) {
    return { number: reduce(lp + destiny) };
  }

  function calcPersonalYear(d, m, year) {
    const ry = reduce(year, false);
    const raw = reduce(d, false) + reduce(m, false) + ry;
    return { number: reduce(raw), year };
  }

  function calcPersonalMonth(pyNum, month) {
    return { number: reduce(pyNum + month, false), month };
  }

  function calcLifeCycles(d, m, y, lp) {
    // Để tính mốc tuổi, luôn phải rút gọn Life Path về 1 chữ số (kể cả 10->1, 11->2)
    const lpForCalc = reduce(lp, false);
    const c1 = reduce(m), c2 = reduce(d), c3 = reduce(y, false);
    const end1 = 36 - lpForCalc;
    const start2 = end1 + 1, end2 = end1 + 27, start3 = end1 + 28;
    return {
      cycle1: { number: c1, startAge: 0, endAge: end1, period: `0 – ${end1} tuổi` },
      cycle2: { number: c2, startAge: start2, endAge: end2, period: `${start2} – ${end2} tuổi` },
      cycle3: { number: c3, startAge: start3, endAge: null, period: `${start3} tuổi trở đi` },
      _birthYear: y
    };
  }

  function calcPyramids(d, m, y, lp) {
    const rd = reduce(d), rm = reduce(m), ry = reduce(y, false);
    const p1 = reduce(rm + rd), p2 = reduce(rd + ry);
    const p3 = reduce(p1 + p2), p4 = reduce(rm + ry);
    const base = 36 - lp;
    // birth year for computing actual calendar years
    const BY = y;
    return {
      peaks: [
        { number: p1, period: `0 – ${base} tuổi`, age_start: 0, age_end: base, year_start: BY, year_end: BY + base },
        { number: p2, period: `${base + 1} – ${base + 9} tuổi`, age_start: base + 1, age_end: base + 9, year_start: BY + base + 1, year_end: BY + base + 9 },
        { number: p3, period: `${base + 10} – ${base + 18} tuổi`, age_start: base + 10, age_end: base + 18, year_start: BY + base + 10, year_end: BY + base + 18 },
        { number: p4, period: `${base + 19} tuổi trở đi`, age_start: base + 19, age_end: null, year_start: BY + base + 19, year_end: null }
      ],
      challenges: [
        { number: Math.abs(reduce(m, false) - reduce(d, false)), period: `0 – ${base} tuổi` },
        { number: Math.abs(reduce(d, false) - reduce(y, false)), period: `${base + 1} – ${base + 9} tuổi` },
        { number: Math.abs(Math.abs(reduce(m, false) - reduce(d, false)) - Math.abs(reduce(d, false) - reduce(y, false))), period: `${base + 10} – ${base + 18} tuổi` },
        { number: Math.abs(reduce(m, false) - reduce(y, false)), period: `Suốt đời` }
      ]
    };
  }

  function calcKarmicLessons(fullName) {
    const norm = removeDiacritics(fullName).replace(/\s+/g, '').toUpperCase();
    const present = new Set(norm.split('').map(c => P[c]).filter(Boolean));
    const missing = [];
    for (let i = 1; i <= 9; i++) if (!present.has(i)) missing.push(i);
    return missing;
  }

  // ─── Main generateReport (requires KB passed in) ───
  function generateReport(fullName, dob, KB, opts = {}) {
    if (!fullName || !dob) throw new Error('Cần nhập họ tên và ngày sinh.');
    const parts = dob.trim().split('/');
    if (parts.length !== 3) throw new Error('Ngày sinh phải đúng format DD/MM/YYYY');
    const d = parseInt(parts[0], 10);
    const m = parseInt(parts[1], 10);
    const y = parseInt(parts[2], 10);
    if (!d || !m || !y) throw new Error('Ngày sinh không hợp lệ.');

    const now = new Date();
    const curYear = opts.currentYear || now.getFullYear();
    const curMonth = opts.currentMonth || now.getMonth() + 1;
    const curDay = opts.currentDay || now.getDate();

    function lookup(section, num) {
      if (!KB[section]) return null;
      return KB[section][String(num)] || null;
    }

    const lp = calcLifePath(d, m, y);
    const bd = calcBirthday(d);
    const att = calcAttitude(d, m);
    const des = calcDestiny(fullName);
    const soul = calcSoul(fullName);
    const pers = calcPersonality(fullName);
    const mat = calcMaturity(lp.number, des.number);
    const py = calcPersonalYear(d, m, curYear);
    const pm = calcPersonalMonth(py.number, curMonth);
    const cycles = calcLifeCycles(d, m, y, lp.number);
    const pyramids = calcPyramids(d, m, y, lp.number);
    const karmicLessons = calcKarmicLessons(fullName);

    // Personal Day
    const pdNum = reduce(curDay + py.number, false);

    return {
      input: { fullName, dob, curYear, curMonth, curDay },

      // Phần 1: Tổng quan
      birthday_number: { number: bd.number, rawDay: d, karmic_debt: bd.karmic_debt, data: lookup('birthday_number', bd.number) },
      attitude_number: { number: att.number, karmic_debt: att.karmic_debt, data: lookup('attitude_number', att.number) },

      // Phần 2: Đường đời
      life_path: { number: lp.number, karmic_debt: lp.karmic_debt, data: lookup('life_path', lp.number) },
      life_cycles: {
        cycle1: { ...cycles.cycle1, data: lookup('life_cycle', cycles.cycle1.number) },
        cycle2: { ...cycles.cycle2, data: lookup('life_cycle', cycles.cycle2.number) },
        cycle3: { ...cycles.cycle3, data: lookup('life_cycle', cycles.cycle3.number) }
      },
      pyramid_peaks: pyramids.peaks.map(p => ({ ...p, data: lookup('pyramid_peak', p.number) })),
      pyramid_challenges: pyramids.challenges.map(c => ({ ...c, data: lookup('pyramid_challenge', c.number) })),
      personal_year: { number: py.number, year: curYear, data: lookup('personal_year', py.number) },
      personal_month: { number: pm.number, month: curMonth, data: lookup('personal_month', pm.number) },
      personal_day: { number: pdNum, day: curDay, data: lookup('personal_day', pdNum) },
      _dob_d: d, _dob_m: m, _dob_y: y,

      // Phần 3: Sứ mệnh
      destiny_number: { number: des.number, karmic_debt: des.karmic_debt, data: lookup('destiny_number', des.number) },
      maturity_number: { number: mat.number, data: lookup('maturity_number', mat.number) },
      soul_number: { number: soul.number, karmic_debt: soul.karmic_debt, data: lookup('soul_number', soul.number) },
      personality_number: { number: pers.number, karmic_debt: pers.karmic_debt, data: lookup('personality_number', pers.number) },
      soul_challenge: { number: Math.abs(reduce(soul.number, false) - reduce(lp.number, false)) % 9, data: lookup('soul_challenge', Math.abs(reduce(soul.number, false) - reduce(lp.number, false)) % 9) },
      destiny_challenge: { number: Math.abs(reduce(soul.number, false) - reduce(pers.number, false)), data: lookup('destiny_challenge', Math.abs(reduce(soul.number, false) - reduce(pers.number, false))) },
      personality_challenge: { number: Math.abs(reduce(pers.number, false) - reduce(lp.number, false)) % 9, data: lookup('personality_challenge', Math.abs(reduce(pers.number, false) - reduce(lp.number, false)) % 9) },
      karmic_debt_info: {
        life_path: lp.karmic_debt ? { number: lp.karmic_debt, data: lookup('karmic_debt', lp.karmic_debt) } : null,
        destiny: des.karmic_debt ? { number: des.karmic_debt, data: lookup('karmic_debt', des.karmic_debt) } : null,
        soul: soul.karmic_debt ? { number: soul.karmic_debt, data: lookup('karmic_debt', soul.karmic_debt) } : null,
        personality: pers.karmic_debt ? { number: pers.karmic_debt, data: lookup('karmic_debt', pers.karmic_debt) } : null,
      },
      karmic_lessons: {
        missing_numbers: karmicLessons,
        data: karmicLessons.map(n => ({ number: n, info: KB.karmic_lessons?.[String(n)] || null }))
      },

      // Phần 4: Năng lực
      maturity_ability: { number: mat.number, data: lookup('maturity_ability', mat.number) },
      cognitive_ability: {
        number: reduce(reduce(d, false) + reduce(m, false), false),
        get data() { return lookup('cognitive_ability', this.number); }
      },
      approach_motivation: {
        number: wordSum(removeDiacritics(fullName).trim().split(/\s+/)[0]),
        get data() { return lookup('approach_motivation', this.number); }
      },
      approach_ability: { number: reduce(d, false), get data() { return lookup('approach_ability', this.number); } },
      approach_attitude: { number: reduce(m, false), get data() { return lookup('approach_attitude', this.number); } },
      tension_number: {
        number: Math.abs(soul.number - pers.number),
        get data() { return lookup('tension_number', this.number); }
      },
    };
  }

  // ─── Export to global ─────
  global.NumerologyEngine = { generateReport, reduce, removeDiacritics };

})(window);
