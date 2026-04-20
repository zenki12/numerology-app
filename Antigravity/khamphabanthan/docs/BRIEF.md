# 💡 BRIEF: khamphabanthan (Web Thần Số Học)

**Ngày tạo:** 2026-04-06
**Brainstorm cùng:** User

---

## 1. VẤN ĐỀ CẦN GIẢI QUYẾT
Người dùng có nhu cầu tra cứu thần số học cá nhân chuyên sâu và mong muốn nhận được một bản báo cáo PDF phân tích đẹp, rõ ràng để lưu trữ hoặc chia sẻ.

## 2. GIẢI PHÁP ĐỀ XUẤT
Xây dựng Web App tính toán thần số học thuật toán tất định (không dùng AI) chuẩn Pythagoras. 
Sao chép logic cốt lõi và phễu chuyển đổi từ tracuuthansohoc.com nhưng tập trung **tối ưu hóa giao diện (UI) và tính năng xuất file PDF** xịn xò, hiện đại hơn.

## 3. ĐỐI TƯỢNG SỬ DỤNG
- **Primary:** Chuyên gia / Cá nhân muốn xem các chỉ số đường đời, sứ mệnh của mình.
- **Secondary:** Khách hàng tò mò, muốn trải nghiệm hệ thống tra cứu nhanh, tin cậy.

## 4. NGHIÊN CỨU THỊ TRƯỜNG
### Đối thủ:
| Hệ thống | Điểm mạnh | Điểm yếu |
|-----|-----------|----------|
| tracuuthansohoc.com | 20+ chỉ số đầy đủ, phễu kiếm tiền tốt. | Giao diện cũ, PDF xuất ra mang hình thức "tờ giấy A4 chi chít chữ", thiếu thẩm mỹ. |

### Điểm khác biệt của mình:
- Ưu tiên mảng Visual: Bản xuất PDF được "Infographic hóa", đẹp mắt.
- Hành trình người dùng mượt mà, tốc độ nhanh.

## 5. TÍNH NĂNG

### 🚀 MVP (Bắt buộc có để Demo/Sử dụng):
- [ ] **Frontend Nhập Liệu:** Có form chuẩn Tên + Ngày Sinh.
- [ ] **Engine Tính Toán:** Bộ tính điểm các chỉ số cốt lõi ra kết quả.
- [ ] **PDF Generator Engine:** Tạo HTML layout ẩn kết hợp dữ liệu tính ra -> Chuyển thành File PDF để tải về.
- [ ] **Database Nội Dung (Thô):** Một nơi lưu trữ (hoặc file JSON) cấu trúc các đoạn văn bản luận giải để Engine gọi ra.

### 🎁 Phase 2 (Hoàn thiện để Kinh doanh):
- [ ] Setup luồng Giao diện Free (Khóa hiển thị một nửa) và Giao diện Full.
- [ ] Tích hợp API chuyển khoản tự động (VietQR/SePay) sinh mã mở khóa báo cáo.
- [ ] Admin CMS đơn giản để chỉnh sửa text luận giải.

### 💭 Backlog (Cân nhắc thêm sau):
- [ ] Module Bói tình yêu theo độ hợp của các con số.
- [ ] Đặt tên khai sinh cho con.

## 6. ƯỚC TÍNH SƠ BỘ
- **Độ phức tạp:** Khá (Trọng tâm khoai nhất nằm ở việc tạo layout để render ra file PDF chuẩn khổ A4 mà không vỡ font, vỡ biểu đồ).
- **Rủi ro:** Việc gõ và match data chữ (text) của từng số vào database sẽ tốn một ít thời gian thủ công lúc đầu.

## 7. BƯỚC TIẾP THEO
→ Chạy `/plan` để lên thiết kế sơ đồ kỹ thuật chi tiết.
