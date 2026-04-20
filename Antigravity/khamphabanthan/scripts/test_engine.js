/**
 * TEST ENGINE - Chạy: node scripts/test_engine.js
 * Kiểm tra engine.js hoạt động đúng với numerology_knowledge_base.json
 */

'use strict';

const { generateReport, reduce, calcLifePath, calcDestiny, calcSoul, calcPersonality, lookupCompatibility } = require('../src/lib/numerology/engine');

let passed = 0;
let failed = 0;

function assert(label, condition, got) {
  if (condition) {
    console.log(`  ✅ ${label}`);
    passed++;
  } else {
    console.log(`  ❌ ${label} → GOT: ${JSON.stringify(got)}`);
    failed++;
  }
}

// ─── TEST 1: Hàm reduce cơ bản ───
console.log('\n📐 [1] Kiểm tra hàm reduce()');
assert('reduce(29) → 11 (master)',  reduce(29) === 11, reduce(29));
assert('reduce(22) → 22 (master)',  reduce(22) === 22, reduce(22));
assert('reduce(33) → 33 (master)',  reduce(33) === 33, reduce(33));
assert('reduce(38) → 2',           reduce(38) === 2,  reduce(38));
assert('reduce(29, false) → 2',    reduce(29, false) === 2, reduce(29, false));
assert('reduce(13) → 4',           reduce(13) === 4,  reduce(13));
assert('reduce(0) → 0',            reduce(0) === 0,   reduce(0));

// ─── TEST 2: Life Path ───
console.log('\n🛤️  [2] Đường đời — 15/08/1990');
const lp1 = calcLifePath(15, 8, 1990);
// reduce(15)=6, reduce(8)=8, reduce(1990)=reduce(19)=1 → 6+8+1=15 → reduce(15)=6
assert('Life Path 15/08/1990 = 6', lp1.number === 6, lp1);
assert('Không có Karmic Debt',     lp1.karmic_debt === null, lp1.karmic_debt);

console.log('\n🛤️  [2b] Đường đời — 14/07/1975 (Karmic 14)');
const lp2 = calcLifePath(14, 7, 1975);
// reduce(14)=5, reduce(7)=7, reduce(1975)=reduce(22)=22 → 5+7+22=34 → reduce(34)=7
assert('Life Path 14/07/1975 = 7', lp2.number === 7, lp2);
// raw sum từng bước: 5+7+22 = 34 → reduce → 7. Karmic 14 check trên số 14 trước khi rút gọn
assert('Có Karmic Debt 14',        lp2.karmic_debt === '14', lp2.karmic_debt);

// ─── TEST 3: Destiny, Soul, Personality ───
console.log('\n📛 [3] Tên: NGUYEN THI HUONG');
const name = 'Nguyen Thi Huong';
const des = calcDestiny(name);
const soul = calcSoul(name);
const pers = calcPersonality(name);

// Tính tay: NGUYENTHIHUONG
// N=5 G=7 U=3 Y=7 E=5 N=5 → 32
// T=2 H=8 I=9 → 19
// H=8 U=3 O=6 N=5 G=7 → 29
// total = 32+19+29 = 80 → reduce(80)=8
assert('Destiny NGUYEN THI HUONG = 8', des.number === 8, des);

// Nguyên âm: U E I U O → 3+5+9+3+6 = 26 → reduce(26) = 8
assert('Soul (nguyên âm) = 8', soul.number === 8, soul);

// Phụ âm: N G Y N T H H N G = 5+7+7+5+2+8+8+5+7 = 54 → reduce(54) = 9
assert('Personality (phụ âm) = 9', pers.number === 9, pers);

// ─── TEST 4: Full Report ───
console.log('\n📊 [4] Full Report — Nguyen Thi Huong, 15/08/1990');
let report;
try {
  report = generateReport('Nguyen Thi Huong', '15/08/1990', {
    currentYear: 2025,
    currentMonth: 4
  });

  assert('report.life_path.number = 6',          report.life_path.number === 6, report.life_path.number);
  assert('report.life_path.data không null',       report.life_path.data !== null, report.life_path.data);
  assert('life_path.data có field "title"',        !!report.life_path.data?.title, report.life_path.data);
  assert('life_path.data có field "career"',       !!report.life_path.data?.career, report.life_path.data);

  assert('report.soul_number.number không null',   report.soul_number.number > 0, report.soul_number.number);
  assert('soul_number.data có field "desire"',     !!report.soul_number.data?.desire, report.soul_number.data);

  assert('report.destiny_number.data có "mission"', !!report.destiny_number.data?.mission, report.destiny_number.data);

  assert('report.personal_year.number > 0',        report.personal_year.number > 0, report.personal_year.number);
  assert('personal_year.data có field "theme"',    !!report.personal_year.data?.theme, report.personal_year.data);

  assert('life_cycles có 3 chu kỳ',               !!report.life_cycles.cycle1 && !!report.life_cycles.cycle2 && !!report.life_cycles.cycle3, report.life_cycles);
  assert('cycle1.data không null',                  report.life_cycles.cycle1.data !== null, report.life_cycles.cycle1);

  assert('pyramid_peaks có 4 đỉnh',               report.pyramid_peaks.length === 4, report.pyramid_peaks.length);
  assert('pyramid_challenges có 4 thử thách',     report.pyramid_challenges.length === 4, report.pyramid_challenges.length);

  assert('karmic_lessons.missing_numbers là array', Array.isArray(report.karmic_lessons.missing_numbers), report.karmic_lessons);

  assert('cognitive_ability.number > 0',           report.cognitive_ability.number > 0, report.cognitive_ability.number);
  assert('cognitive_ability.data không null',       report.cognitive_ability.data !== null, report.cognitive_ability.data);

  assert('approach_motivation.data có "trigger"',  !!report.approach_motivation.data?.trigger, report.approach_motivation.data);
  assert('approach_ability.data có "growth_tip"',  !!report.approach_ability.data?.growth_tip, report.approach_ability.data);
  assert('approach_attitude.data có "reframe"',    !!report.approach_attitude.data?.reframe, report.approach_attitude.data);

} catch(e) {
  console.log('  ❌ EXCEPTION:', e.message);
  failed++;
}

// ─── TEST 5: Compatibility ───
console.log('\n💞 [5] Tương hợp 6 & 2');
const compat = lookupCompatibility(6, 2);
assert('Compatibility 2_6 không null',  compat !== null, compat);
assert('Compatibility có field score',  compat?.score !== undefined, compat);
assert('Compatibility có field advice', !!compat?.advice, compat);

// ─── TỔNG KẾT ───
console.log('\n' + '='.repeat(50));
console.log(`🏁 KẾT QUẢ: ${passed} passed / ${passed + failed} total`);
if (failed === 0) {
  console.log('🎉 TẤT CẢ TEST PASSED — Engine hoạt động chính xác 100%!');
} else {
  console.log(`⚠️  ${failed} test FAILED — Cần kiểm tra lại.`);
}

// ─── PRINT SAMPLE REPORT ───
if (report) {
  console.log('\n' + '─'.repeat(50));
  console.log('📋 Mẫu Report (Nguyen Thi Huong, 15/08/1990):');
  console.log(`  Đường đời:    ${report.life_path.number} — ${report.life_path.data?.title || 'N/A'}`);
  console.log(`  Ngày sinh:    ${report.birthday_number.number} — ${report.birthday_number.data?.title || 'N/A'}`);
  console.log(`  Sứ mệnh:      ${report.destiny_number.number} — ${report.destiny_number.data?.title || 'N/A'}`);
  console.log(`  Linh hồn:     ${report.soul_number.number} — ${report.soul_number.data?.title || 'N/A'}`);
  console.log(`  Nhân cách:    ${report.personality_number.number} — ${report.personality_number.data?.title || 'N/A'}`);
  console.log(`  Thái độ:      ${report.attitude_number.number} — ${report.attitude_number.data?.title || 'N/A'}`);
  console.log(`  Trưởng thành: ${report.maturity_number.number} — ${report.maturity_number.data?.title || 'N/A'}`);
  console.log(`  Năm cá nhân ${report.personal_year.year}: ${report.personal_year.number} — ${report.personal_year.data?.theme || 'N/A'}`);
  console.log(`  Tháng cá nhân ${report.personal_month.month}: ${report.personal_month.number}`);
  console.log(`  Số nghiệp bị thiếu: [${report.karmic_lessons.missing_numbers.join(', ') || 'Không có'}]`);
  console.log(`  Chu kỳ 1: Số ${report.life_cycles.cycle1.number} (${report.life_cycles.cycle1.period})`);
  console.log(`  Chu kỳ 2: Số ${report.life_cycles.cycle2.number} (${report.life_cycles.cycle2.period})`);
  console.log(`  Chu kỳ 3: Số ${report.life_cycles.cycle3.number} (${report.life_cycles.cycle3.period})`);
  console.log('  Đỉnh Kim tự tháp:', report.pyramid_peaks.map(p => `${p.number}(${p.period})`).join(' | '));
  console.log('─'.repeat(50));
}
