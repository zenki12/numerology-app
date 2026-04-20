# Phase 01: Voucher System & UI Paywall
Status: ⬜ Pending
Dependencies: None

## Objective
Triển khai giao diện màn hình khóa (Paywall) cho các chỉ số VIP và ô nhập mã Voucher để mở khóa miễn phí (áp dụng trong thời gian Launch). Không dùng Backend.

## Requirements
### Functional
- [ ] Giao diện Paywall: Các phần từ mục 6 trở đi (Sứ mệnh, Nợ nghiệp, Dự báo...) bị làm mờ (CSS `filter: blur`).
- [ ] Khung nhập Voucher: Box điền mã (VD: `THAI2026`) hiển thị đè lên phần bị mờ.
- [ ] Logic mở khóa: Kiểm tra mã hợp lệ. Nếu đúng, lưu "unlocked=true" vào `localStorage` và xóa các class làm mờ.
- [ ] Logic hết hạn: Mã voucher có chứa một ngày hết hạn hardcode (Ví dụ: `2026-05-01`). Quá hạn thì mã hết hiệu lực.

### Non-Functional
- [ ] Mượt mà, không giật lag.
- [ ] Chữ "bị mờ" không cho phép bôi đen copy (CSS `user-select: none`).

## Implementation Steps
1. [ ] Thêm CSS lớp `.paywall-blur` và `.paywall-overlay` vào `style.css`.
2. [ ] Tạo file/khối HTML chứa "Form nhập mã kích hoạt" hiện giữa màn hình chèn lên nội dung mờ.
3. [ ] Cập nhật `app.js` render function: nếu chưa unlock, gộp content từ section 6 trở đi vào một thẻ `div.locked-content` và gắn class mờ.
4. [ ] Viết hàm JS xử lý `unlockReport(code)`: check code cứng, lưu localStorage, remove class blur.

## Files to Create/Modify
- `numerology_core/style.css` - CSS cho blur effect.
- `numerology_core/app.js` - Logic render paywall và check voucher.
- `numerology_core/index.html` - Thêm ID/Class nếu cần thiết.

## Notes
Đây là kỹ thuật Frontend-only bảo vệ mềm, phù hợp giai đoạn Launch.

---
Next Phase: Phase 02 (Deployment)
