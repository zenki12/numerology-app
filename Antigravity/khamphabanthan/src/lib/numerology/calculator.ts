export const PYTHAGORAS_CHART: Record<string, number> = {
    A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8, I: 9,
    J: 1, K: 2, L: 3, M: 4, N: 5, O: 6, P: 7, Q: 8, R: 9,
    S: 1, T: 2, U: 3, V: 4, W: 5, X: 6, Y: 7, Z: 8
};

export const VOWELS = ['A', 'E', 'I', 'O', 'U', 'Y']; // Lưu ý: Trong thần số học thực tế Y có nguyên tắc tuỳ trường hợp, ở đây quy ước cơ bản

export function reduceNumber(n: number, keepMaster: boolean = true): number {
    if (n === 0) return 0;
    let current = n;
    while (current > 9) {
        if (keepMaster && (current === 11 || current === 22 || current === 33)) {
            return current;
        }
        current = current.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
    }
    return current;
}

export function calcWordSum(word: string, keepMaster: boolean = true): number {
    const total = word.toUpperCase().split('').reduce((sum, char) => sum + (PYTHAGORAS_CHART[char] || 0), 0);
    return reduceNumber(total, keepMaster);
}

export function calculateNumerology(fullName: string, dobString: string) {
    // 1. Chuẩn hóa Input
    const nameParts = fullName.trim().toUpperCase().split(/\s+/);
    const firstName = nameParts[nameParts.length - 1]; // Tên
    const lastName = nameParts[0]; // Họ
    const middleNames = nameParts.slice(1, -1); // Đệm
    const middleNameStr = middleNames.join('');
    
    // Xử lý Ngày Sinh (format: DD/MM/YYYY)
    const [dayStr, monthStr, yearStr] = dobString.split('/');
    const d = parseInt(dayStr) || 0;
    const m = parseInt(monthStr) || 0;
    const y = parseInt(yearStr) || 0;

    const rd = reduceNumber(d);
    const rm = reduceNumber(m);
    const ry = reduceNumber(y);

    // 2. Tính toán các chỉ số Core
    const lifePath = reduceNumber(rd + rm + ry); // Đường đời
    const attitude = reduceNumber(d + m); // Thái độ
    const naturalAbility = reduceNumber(d); // Năng lực tự nhiên (Ngày sinh)

    // Tính tổng từng phần Tên
    const sumFirstName = calcWordSum(firstName); // Tên
    const sumLastName = calcWordSum(lastName); // Họ
    
    let sumAllFirstLetters = 0;
    nameParts.forEach(word => {
        sumAllFirstLetters += (PYTHAGORAS_CHART[word[0]] || 0);
    });

    return {
        // --- CHỈ SỐ GỐC ---
        DuongDoi: lifePath,
        NgaySinh: naturalAbility,
        ThaiDo: attitude,
        
        // --- CHỈ SỐ TIẾP CẬN (Đã dịch ngược) ---
        // Năng lực tiếp cận: Tổng các chữ cái của TÊN
        NangLucTiepCan: sumFirstName,
        
        // Động lực tiếp cận: Tổng các chữ cái của HỌ
        DongLucTiepCan: sumLastName,
        
        // Thái độ tiếp cận: Chữ cái đầu tiên của ĐỆM (nếu không có đệm thì lấy chữ thứ 2 của tên)
        ThaiDoTiepCan: middleNames.length > 0 ? (PYTHAGORAS_CHART[middleNames[0][0]] || 0) : 0,
        
        // --- CHỈ SỐ RÈN LUYỆN (Đã dịch ngược) ---
        // Vượt khó: Tổng của toàn bộ các Ký tự đầu tiên (Cornerstones Sum)
        VuotKho: reduceNumber(sumAllFirstLetters),
        
        // Tư duy: Ngày sinh (Rút gọn) + Tổng HỌ
        TuDuy: reduceNumber(rd + sumLastName)
    };
}
