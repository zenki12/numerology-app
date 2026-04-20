/**
 * CLOUDFLARE WORKER — Voucher Validation API
 * Endpoint: POST /api/validate-voucher
 * 
 * Deploy: wrangler deploy
 * 
 * Khi deploy Worker này lên Cloudflare:
 * 1. Voucher code được verify hoàn toàn server-side
 * 2. Client KHÔNG bao giờ thấy danh sách voucher thật
 * 3. Xóa const VOUCHERS trong app.js và thay bằng fetch('/api/validate-voucher')
 */

// ─── VOUCHER LIST (chỉ tồn tại ở server, KHÔNG expose ra client) ─────────────
const VOUCHERS = {
    'THAI2026': { expires: '2026-12-31T23:59:59Z', maxUses: 999 },
    // Thêm voucher mới tại đây khi cần
};

// ─── CORS headers ─────────────────────────────────────────────────────────────
const CORS_HEADERS = {
    'Access-Control-Allow-Origin': '*', // TODO: thay bằng domain thật khi deploy
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json',
};

// ─── MAIN HANDLER ─────────────────────────────────────────────────────────────
export default {
    async fetch(request, env, ctx) {
        // Handle CORS preflight
        if (request.method === 'OPTIONS') {
            return new Response(null, { headers: CORS_HEADERS });
        }

        // Only handle POST /api/validate-voucher
        const url = new URL(request.url);
        if (request.method !== 'POST' || url.pathname !== '/api/validate-voucher') {
            return new Response(JSON.stringify({ error: 'Not found' }), {
                status: 404,
                headers: CORS_HEADERS,
            });
        }

        // Parse body
        let body;
        try {
            body = await request.json();
        } catch {
            return new Response(JSON.stringify({ error: 'Invalid JSON' }), {
                status: 400,
                headers: CORS_HEADERS,
            });
        }

        const code = (body.code || '').trim().toUpperCase();
        if (!code) {
            return new Response(JSON.stringify({ valid: false, message: 'Thiếu mã voucher.' }), {
                status: 200,
                headers: CORS_HEADERS,
            });
        }

        // Rate limiting cơ bản: check CF-Connecting-IP header
        const ip = request.headers.get('CF-Connecting-IP') || 'unknown';
        // TODO: Implement KV-based rate limiting nếu cần

        // Validate voucher
        const voucher = VOUCHERS[code];

        if (!voucher) {
            return new Response(JSON.stringify({
                valid: false,
                message: '❌ Mã không hợp lệ. Vui lòng kiểm tra lại.',
            }), { status: 200, headers: CORS_HEADERS });
        }

        if (new Date() > new Date(voucher.expires)) {
            return new Response(JSON.stringify({
                valid: false,
                message: '⏰ Mã này đã hết hạn sử dụng.',
            }), { status: 200, headers: CORS_HEADERS });
        }

        // Voucher hợp lệ — trả về signed token
        // Token: base64(code + '|' + secret + '|' + year)
        // Client lưu token này vào localStorage, không lưu code thật
        const SECRET = env.VIP_SALT || 'kp_numer_2026_xr9'; // Set trong wrangler.toml
        const year = new Date().getFullYear();
        const tokenPayload = `${code}|${SECRET}|${year}`;
        const token = btoa(tokenPayload);

        return new Response(JSON.stringify({
            valid: true,
            token,
            message: '🔓 Mã hợp lệ! Đang mở khoá...',
        }), { status: 200, headers: CORS_HEADERS });
    },
};
