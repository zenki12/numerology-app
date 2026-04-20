# Khám Phá Bản Thân — Numerology Web App

Ứng dụng tra cứu thần số học chuyên sâu — phân tích 30 chỉ số, dự báo vận số và hướng nghiệp.

## Chạy Local

```bash
npx serve -l 3000
```
Mở trình duyệt tại: `http://localhost:3000`

## Deploy lên Cloudflare Pages

```bash
npx wrangler pages deploy . --project-name numerology
```

## Cấu Trúc Project

```
numerology_core/
├── index.html                    # UI chính
├── app.js                        # Logic render & paywall
├── engine.browser.js             # Calculation engine (KHÔNG SỬA)
├── narrative_templates.js        # Nội dung văn xuôi (KHÔNG SỬA)
├── charts.js                     # Biểu đồ SVG
├── style.css                     # UI & themes
├── numerology_knowledge_base.json # Dữ liệu KB (KHÔNG SỬA)
└── scripts/                      # Dev scripts (không deploy)
```

## Lưu Ý Quan Trọng

- **engine.browser.js, narrative_templates.js, numerology_knowledge_base.json** — không sửa trực tiếp, đây là core logic của hệ thống
- File `.brain/` là session data — không commit lên Git (đã có .gitignore)
- Voucher mở khóa VIP: quản lý riêng, không hardcode trong code

## Tech Stack

- Vanilla HTML / CSS / JavaScript (không có framework)
- Không có `node_modules` khi deploy — hoàn toàn static
- Hosting: Cloudflare Pages (zero cost)
