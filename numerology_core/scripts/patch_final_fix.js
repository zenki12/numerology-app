'use strict';
const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'numerology_knowledge_base.json');
const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

// ── 1. pyramid_peak: string → object ──
const pyramidPeakData = {
  "1": {
    "title": "Đỉnh cao Lãnh đạo & Bản ngã",
    "theme": "Phát triển tính độc lập, dũng khí và tầm nhìn cá nhân",
    "opportunity": "Cơ hội vươn lên không giới hạn — chỉ bị chặn bởi sự chủ động của chính bạn. Đây là giai đoạn để khẳng định bản thân và dẫn đầu.",
    "challenge": "Rủi ro cô đơn nếu quá cứng nhắc. Dễ xa rời tập thể vì đề cao cái tôi.",
    "advice": "Lãnh đạo bằng cách phục vụ người khác. Tầm nhìn lớn cần nền tảng vững — hãy xây đội nhóm thay vì chiến đấu một mình.",
    "keywords": ["lãnh đạo", "độc lập", "tiên phong", "khởi nghiệp", "dũng cảm"]
  },
  "2": {
    "title": "Đỉnh cao Hợp tác & Ngoại giao",
    "theme": "Thành công qua các mối quan hệ, đối tác và sự hòa hợp",
    "opportunity": "Thành tựu đến qua làm việc với người khác, không phải một mình. Giai đoạn xây dựng mạng lưới và quan hệ bền chặt.",
    "challenge": "Nguy cơ bị lợi dụng lòng tốt. Dễ bị phụ thuộc vào người khác để ra quyết định.",
    "advice": "Học cách nói 'không' khi cần thiết. Hợp tác mạnh nhất khi cả hai bên đều giữ bản sắc riêng.",
    "keywords": ["hợp tác", "ngoại giao", "mối quan hệ", "đối tác", "hòa giải"]
  },
  "3": {
    "title": "Đỉnh cao Sáng tạo & Biểu đạt",
    "theme": "Phát huy tài năng nghệ thuật, giao tiếp và niềm vui sống",
    "opportunity": "Giai đoạn dành cho tình yêu, tình bạn, vẻ đẹp và sáng tạo. Tài năng nghệ thuật và khả năng giao tiếp được phát huy tối đa.",
    "challenge": "Nguy cơ phân tán năng lượng, không tập trung. Dễ bị cuốn vào hưởng thụ mà thiếu kỷ luật.",
    "advice": "Chọn một lĩnh vực sáng tạo để đi sâu. Niềm vui bền vững đến từ sự thành thạo, không chỉ từ trải nghiệm.",
    "keywords": ["sáng tạo", "nghệ thuật", "biểu đạt", "vui vẻ", "giao tiếp"]
  },
  "4": {
    "title": "Đỉnh cao Xây dựng & Ổn định",
    "theme": "Tạo dựng nền tảng vững chắc và di sản bền lâu",
    "opportunity": "Giai đoạn xây dựng nghiêm túc — sự nghiệp, gia đình, tài chính. Công sức bỏ ra sẽ được đền đáp bội lần về sau.",
    "challenge": "Có thể gánh trách nhiệm nặng nề, cảm giác bị mắc kẹt. Nguy cơ nghiện công việc và thiếu cân bằng.",
    "advice": "Xây dựng không có nghĩa là hy sinh tất cả. Lên lịch thời gian nghỉ ngơi và vui chơi như một lịch hẹn quan trọng.",
    "keywords": ["xây dựng", "kỷ luật", "ổn định", "thực tế", "kiên nhẫn"]
  },
  "5": {
    "title": "Đỉnh cao Tự do & Thay đổi",
    "theme": "Đón nhận biến động, trải nghiệm đa dạng và cơ hội bất ngờ",
    "opportunity": "Nhiều cơ hội và trải nghiệm mới xuất hiện. Giai đoạn mở rộng thế giới quan và kết nối đa văn hóa.",
    "challenge": "Thử thách lớn nhất: duy trì tập trung vào mục tiêu dài hạn khi quá nhiều lựa chọn hấp dẫn xuất hiện.",
    "advice": "Xác định 'Bắc Cực' — 1-2 mục tiêu không đổi dù hành trình liên tục biến động. Tự do đẹp nhất khi có hướng đi.",
    "keywords": ["thay đổi", "tự do", "phiêu lưu", "đa dạng", "linh hoạt"]
  },
  "6": {
    "title": "Đỉnh cao Trách nhiệm & Nuôi dưỡng",
    "theme": "Phục vụ gia đình, cộng đồng và tạo ra môi trường chữa lành",
    "opportunity": "Giai đoạn trở thành trụ cột cho người xung quanh. Thành công qua việc chăm sóc và làm cho cuộc sống người khác tốt hơn.",
    "challenge": "Dễ mất bản thân trong việc lo cho người khác. Nguy cơ kiệt sức vì không biết từ chối.",
    "advice": "Chăm sóc người khác tốt nhất khi bạn còn năng lượng. Đặt oxygen mask lên mình trước — sau đó mới giúp người bên cạnh.",
    "keywords": ["gia đình", "trách nhiệm", "chăm sóc", "cộng đồng", "chữa lành"]
  },
  "7": {
    "title": "Đỉnh cao Trí tuệ & Tâm linh",
    "theme": "Phát triển chiều sâu nội tâm, tri thức và kết nối với điều thiêng liêng",
    "opportunity": "Giai đoạn học hỏi sâu sắc. Lợi ích không thấy ngay ở vật chất — chúng hiện ra dưới dạng trí tuệ, sự bình an và chiều sâu tâm hồn.",
    "challenge": "Nguy cơ cô lập quá mức. Dễ bị người xung quanh hiểu lầm là xa cách hoặc kiêu ngạo.",
    "advice": "Chia sẻ những gì bạn học được — đây là cách kết nối đẹp nhất của số 7. Tri thức cất giữ một mình là tri thức chết.",
    "keywords": ["nội tâm", "tri thức", "tâm linh", "nghiên cứu", "chiều sâu"]
  },
  "8": {
    "title": "Đỉnh cao Thành đạt & Quyền lực",
    "theme": "Đạt được thành công vật chất, địa vị và ảnh hưởng xã hội",
    "opportunity": "Cơ hội lớn trong kinh doanh và sự nghiệp. Giai đoạn thu hoạch thành quả từ nỗ lực lâu dài.",
    "challenge": "Cần cân bằng tinh thần và vật chất. Nguy cơ đánh mất các mối quan hệ vì quá tập trung vào thành công.",
    "advice": "Định nghĩa lại 'thành công' — tiền bạc và địa vị là công cụ, không phải đích đến. Dùng tài nguyên để tạo tác động.",
    "keywords": ["thành công", "quyền lực", "kinh doanh", "tài chính", "lãnh đạo"]
  },
  "9": {
    "title": "Đỉnh cao Nhân đạo & Hoàn thiện",
    "theme": "Cống hiến, buông bỏ và hoàn thành một chu kỳ lớn của cuộc đời",
    "opportunity": "Thành tựu mang tính nhân đạo và di sản lâu dài. Giai đoạn thu hoạch trí tuệ và chia sẻ với thế giới.",
    "challenge": "Cần buông bỏ những điều không còn phục vụ bạn. Khó khăn trong việc kết thúc — dù là mối quan hệ, công việc hay giai đoạn sống.",
    "advice": "Buông bỏ không phải là thất bại — đó là dọn không gian cho điều tốt hơn. Sự hoàn thiện lớn nhất đến qua việc cho đi.",
    "keywords": ["nhân đạo", "buông bỏ", "cống hiến", "hoàn thiện", "di sản"]
  }
};

const ppNote = data.pyramid_peak.note;
for (const [num, val] of Object.entries(pyramidPeakData)) {
  data.pyramid_peak[num] = val;
}
data.pyramid_peak.note = ppNote;

// ── 2. pyramid_challenge: string → object ──
const pyramidChallengeData = {
  "0": {
    "title": "Thử thách Tự do Chọn lựa",
    "lesson": "Không có thử thách đặc biệt — đây là tín hiệu bạn đã học được nhiều bài học trong kiếp trước. Tự do lựa chọn là cả món quà lẫn trách nhiệm.",
    "trap": "Có thể trở nên thiếu định hướng vì quá nhiều tự do. Không có rào cản cũng đồng nghĩa không có la bàn.",
    "how_to_overcome": "Tự tạo ra những thử thách có ý nghĩa. Chủ động đặt ra mục tiêu và cam kết — đừng để sự thiếu áp lực trở thành trôi dạt."
  },
  "1": {
    "title": "Thử thách Tự tin & Bản sắc",
    "lesson": "Vượt qua niềm tin tiêu cực về bản thân. Học cách đứng lên vì chính mình và phát triển tính độc lập lành mạnh.",
    "trap": "Cái bẫy lớn nhất: xây tường bảo vệ quá dày — hoặc trở nên hung hăng bề ngoài để che giấu sự bất an bên trong.",
    "how_to_overcome": "Mỗi ngày làm 1 hành động nhỏ mà không cần sự chấp thuận của người khác. Xây dựng tự tin từ bên trong, không từ phản ứng của thế giới bên ngoài."
  },
  "2": {
    "title": "Thử thách Tự tin trong Hợp tác",
    "lesson": "Phát triển sự tự tin và không để nỗi sợ chỉ trích làm tê liệt. Học cách hợp tác mà không mất bản sắc.",
    "trap": "Dễ trở thành người 'pleaser' — đồng ý với tất cả để tránh xung đột, nhưng tích lũy oán giận bên trong.",
    "how_to_overcome": "Tập lên tiếng trong những tình huống an toàn nhỏ. Ghi nhớ: ý kiến của bạn có giá trị — giữ im lặng không phải là lịch sự mà là tước đoạt đóng góp của bạn."
  },
  "3": {
    "title": "Thử thách Tập trung & Biểu đạt Thật",
    "lesson": "Vượt qua xu hướng phân tán năng lượng, sống quá 'bên trong' chính mình. Học cách chia sẻ và biểu đạt cảm xúc thật sự.",
    "trap": "Dùng sự hài hước hoặc bận rộn liên tục để tránh đối mặt với cảm xúc sâu. Nói nhiều nhưng không nói điều mình thật sự muốn nói.",
    "how_to_overcome": "Tập viết nhật ký cảm xúc. Cam kết với 1 dự án sáng tạo từ đầu đến cuối mà không bỏ giữa chừng — xây cơ bắp tập trung."
  },
  "4": {
    "title": "Thử thách Kỷ luật & Cân bằng",
    "lesson": "Học về kỷ luật, tính thực tế và làm việc chăm chỉ. Tránh nghiện công việc hoặc cứng nhắc. Sắp xếp thời gian cân bằng.",
    "trap": "Hai thái cực: hoặc quá cứng nhắc và kiểm soát, hoặc trốn tránh trách nhiệm và thiếu kỷ luật. Cả hai đều là biểu hiện của cùng nỗi sợ.",
    "how_to_overcome": "Tạo ra cấu trúc nhưng có linh hoạt. Lên kế hoạch 80% — giữ 20% cho sự ngẫu hứng và điều chỉnh."
  },
  "5": {
    "title": "Thử thách Tự do Có Trách nhiệm",
    "lesson": "Học cách tiết chế và tránh phân tán năng lượng. Vượt qua nỗi sợ thay đổi — hoặc ngược lại, tránh thay đổi liên tục không mục đích.",
    "trap": "Hoặc bị tê liệt bởi nỗi sợ thay đổi, hoặc thay đổi liên tục không có định hướng — cả hai đều là tránh né cam kết thật sự.",
    "how_to_overcome": "Xác định 1 điều bạn sẽ cam kết trong 3 tháng mà không thay đổi. Luyện tập tự do trong khuôn khổ."
  },
  "6": {
    "title": "Thử thách Tình yêu Không Kiểm soát",
    "lesson": "Học cách phục vụ người khác trong khi chấp nhận họ đúng như bản chất. Tránh độc đoán, cố chấp hoặc tự cho mình là đúng.",
    "trap": "Quan tâm quá mức đến mức trở thành gánh nặng. Yêu thương kèm điều kiện ẩn: 'Tôi chăm sóc bạn, vậy bạn phải sống theo cách tôi muốn.'",
    "how_to_overcome": "Trước khi đưa ra lời khuyên hoặc giúp đỡ, hỏi: 'Họ có cần điều này không?' Tập trao quyền thay vì giải cứu."
  },
  "7": {
    "title": "Thử thách Kết nối & Tin tưởng",
    "lesson": "Học cách làm việc với người khác một cách vị tha. Vượt qua sự ghen tị và vấn đề cái tôi.",
    "trap": "Cô lập bản thân vì cảm thấy người khác không đủ 'chiều sâu' để hiểu mình. Dùng trí tuệ như vũ khí để giữ khoảng cách.",
    "how_to_overcome": "Chủ động tìm kiếm 1 người để kết nối thật sự mỗi tuần. Chia sẻ một điều bạn chưa bao giờ nói với người khác."
  },
  "8": {
    "title": "Thử thách Quyền lực Đạo đức",
    "lesson": "Học cách quản lý tiền bạc và quyền lực một cách có trách nhiệm. Tránh lạm dụng ảnh hưởng.",
    "trap": "Dùng tiền/quyền lực để kiểm soát người khác. Hoặc ngược lại — sợ quyền lực đến mức từ chối đảm nhận trách nhiệm lãnh đạo.",
    "how_to_overcome": "Thiết lập nguyên tắc đạo đức rõ ràng TRƯỚC khi có quyền lực. Hỏi thường xuyên: 'Quyết định này phục vụ ai — mình hay người khác?'"
  }
};

const pcNote = data.pyramid_challenge.note;
for (const [num, val] of Object.entries(pyramidChallengeData)) {
  data.pyramid_challenge[num] = val;
}
data.pyramid_challenge.note = pcNote;

// ── 3. personal_day: string → object ──
const personalDayData = {
  "1": { "theme": "Khởi đầu & Hành động", "energy": "Năng lượng cao, phù hợp để bắt đầu mới", "focus": "Khởi động dự án, đưa ra quyết định, tiên phong", "avoid": "Trì hoãn và thụ động — đây không phải ngày để chờ đợi", "best_for": "Gặp gỡ mới, nộp đơn, ký hợp đồng, ra quyết định quan trọng" },
  "2": { "theme": "Hợp tác & Kiên nhẫn", "energy": "Nhẹ nhàng, hướng về kết nối cảm xúc", "focus": "Nuôi dưỡng quan hệ, lắng nghe, hòa giải mâu thuẫn", "avoid": "Ép buộc kết quả nhanh — hôm nay cần kiên nhẫn", "best_for": "Gặp gỡ bạn bè/người thân, tư vấn, đàm phán nhẹ nhàng" },
  "3": { "theme": "Sáng tạo & Giao tiếp", "energy": "Vui vẻ, năng động, truyền cảm hứng", "focus": "Biểu đạt bản thân, kết nối xã hội, sáng tạo", "avoid": "Phân tán vào quá nhiều hoạt động một lúc", "best_for": "Viết lách, nghệ thuật, thuyết trình, networking, hẹn hò" },
  "4": { "theme": "Làm việc & Xây dựng", "energy": "Nghiêm túc, ổn định, thực tế", "focus": "Công việc nặng nhọc, lập kế hoạch, tổ chức hệ thống", "avoid": "Những quyết định bốc đồng — hôm nay cần cân nhắc kỹ", "best_for": "Làm việc tập trung, sắp xếp tài liệu, sửa chữa, xây dựng" },
  "5": { "theme": "Thay đổi & Linh hoạt", "energy": "Bất ổn nhưng đầy cơ hội bất ngờ", "focus": "Cởi mở với điều mới, thích nghi nhanh", "avoid": "Bám víu vào kế hoạch cứng nhắc — hôm nay cần linh hoạt", "best_for": "Du lịch, thử điều mới, thay đổi thói quen, gặp người lạ" },
  "6": { "theme": "Gia đình & Trách nhiệm", "energy": "Ấm áp, hướng về nhà và người thân", "focus": "Chăm sóc gia đình, giải quyết trách nhiệm cá nhân", "avoid": "Bỏ bê người thân vì quá bận công việc", "best_for": "Thời gian gia đình, chăm sóc sức khỏe, thanh toán hóa đơn, dọn dẹp nhà" },
  "7": { "theme": "Suy ngẫm & Nội tâm", "energy": "Trầm lặng, cần không gian riêng", "focus": "Học hỏi, thiền định, phân tích và lập kế hoạch", "avoid": "Những sự kiện xã hội đông người — hôm nay cần tĩnh lặng", "best_for": "Đọc sách, nghiên cứu, viết nhật ký, thiền, ở một mình" },
  "8": { "theme": "Kinh doanh & Tài chính", "energy": "Mạnh mẽ, tập trung vào kết quả", "focus": "Quyết định tài chính, đàm phán, thúc đẩy mục tiêu", "avoid": "Lãng phí tiền bạc hoặc bỏ lỡ cơ hội kinh doanh", "best_for": "Ký hợp đồng lớn, họp kinh doanh, yêu cầu tăng lương, đầu tư" },
  "9": { "theme": "Hoàn thành & Buông bỏ", "energy": "Kết thúc chu kỳ, cảm xúc sâu", "focus": "Hoàn thành việc dang dở, từ biệt điều không còn phù hợp", "avoid": "Bắt đầu dự án mới lớn — hôm nay là ngày kết thúc, không phải bắt đầu", "best_for": "Dọn dẹp, từ biệt, viết thư cảm ơn, kết thúc hợp đồng/mối quan hệ cũ" },
  "note": "Ngày cá nhân = (Năm cá nhân + Tháng hiện tại + Ngày hiện tại) rút gọn. Cho biết năng lượng chủ đạo trong ngày hôm nay."
};
data.personal_day = personalDayData;

// ── 4. tension_number: string → object ──
// Tension number = căng thẳng giữa linh hồn (soul) và nhân cách (personality)
const tensionData = {
  "1": { "title": "Căng thẳng Bản sắc", "description": "Nội tâm muốn độc lập và tiên phong, nhưng hình ảnh bên ngoài lại bị người khác định hình. Mâu thuẫn giữa muốn dẫn đầu và cần được chấp thuận.", "resolution": "Học cách hành động dựa trên giá trị bên trong thay vì phản ứng với kỳ vọng bên ngoài. Bản sắc thật sự không cần sự chứng nhận." },
  "2": { "title": "Căng thẳng Kết nối", "description": "Linh hồn khao khát hòa hợp và kết nối sâu, nhưng hình ảnh bên ngoài có thể trở nên quá phụ thuộc hoặc ngược lại, quá xa cách để bảo vệ mình.", "resolution": "Xây dựng kết nối từ sự sung mãn nội tâm, không phải từ nỗi sợ cô đơn. Quan hệ lành mạnh nhất đến từ người không cần mà chọn." },
  "3": { "title": "Căng thẳng Biểu đạt", "description": "Nội tâm đầy ắp cảm xúc và ý tưởng sáng tạo, nhưng hình ảnh bên ngoài có thể quá vui vẻ nên không ai biết bên trong đang xảy ra gì.", "resolution": "Tập biểu đạt cảm xúc thật thay vì chỉ trình diễn sự vui vẻ. Nghệ thuật và viết lách là kênh giải phóng lý tưởng." },
  "4": { "title": "Căng thẳng Kiểm soát", "description": "Linh hồn muốn ổn định và an toàn, nhưng thực tế cuộc sống không phải lúc nào cũng có thể kiểm soát được. Mâu thuẫn giữa nhu cầu kiểm soát và sự hỗn loạn của cuộc sống.", "resolution": "Phân biệt điều có thể kiểm soát và không thể. Tập trung toàn lực vào cái đầu, buông bỏ cái sau." },
  "5": { "title": "Căng thẳng Tự do", "description": "Khao khát tự do sâu sắc bên trong, nhưng hình ảnh bên ngoài có thể bị ràng buộc bởi kỳ vọng xã hội hoặc ngược lại, bị coi là thiếu trách nhiệm.", "resolution": "Tự do thật sự không phải là thoát khỏi ràng buộc — đó là chọn lựa có ý thức. Tìm cách thể hiện tự do trong bối cảnh có trách nhiệm." },
  "6": { "title": "Căng thẳng Hoàn hảo", "description": "Linh hồn muốn yêu thương và chăm sóc, nhưng tiêu chuẩn cao có thể làm tổn thương người thân và khiến bản thân kiệt sức vì không ai đáp ứng đủ kỳ vọng.", "resolution": "Chấp nhận rằng tình yêu thương tốt nhất là vô điều kiện. Hạ tiêu chuẩn hoàn hảo xuống để nâng chất lượng kết nối lên." },
  "7": { "title": "Căng thẳng Tin tưởng", "description": "Trí tuệ sâu sắc bên trong nhưng khó tin tưởng người khác đủ để chia sẻ. Mâu thuẫn giữa muốn kết nối và sợ bị phán xét hoặc phản bội.", "resolution": "Bắt đầu chia sẻ từng lớp nhỏ. Tin tưởng không phải là tất cả hoặc không có gì — đó là kỹ năng học dần." },
  "8": { "title": "Căng thẳng Quyền lực", "description": "Tham vọng và muốn thành công sâu trong nội tâm, nhưng có thể gặp khó khăn trong việc sử dụng quyền lực mà không xa rời giá trị đạo đức.", "resolution": "Định nghĩa thành công của mình trên cơ sở giá trị cá nhân, không phải so sánh xã hội. Quyền lực đẹp nhất là quyền lực nâng người khác lên." },
  "9": { "title": "Căng thẳng Buông bỏ", "description": "Linh hồn khao khát cống hiến cho nhân loại nhưng khó buông bỏ cái tôi. Mâu thuẫn giữa sứ mệnh lớn và nhu cầu được công nhận.", "resolution": "Cống hiến thật sự không cần người nhận biết. Luyện tập phục vụ vô danh — khi không cần được thấy, cánh cửa tự do thật sự mới mở." },
  "note": "Số Căng thẳng (Tension Number) = hiệu số giữa Soul Number và Personality Number. Cho biết điểm mâu thuẫn giữa nội tâm và hình ảnh bên ngoài."
};
data.tension_number = tensionData;

// ── 5. birth_chart_axes: bổ sung đầy đủ dữ liệu mũi tên ──
data.birth_chart_axes = {
  "note": "Các trục và mũi tên trong Biểu đồ Ngày sinh (Birth Chart Grid) 3x3. Grid gồm 9 ô: số 1(dưới trái), 2(dưới giữa), 3(dưới phải), 4(giữa trái), 5(giữa), 6(giữa phải), 7(trên trái), 8(trên giữa), 9(trên phải).",
  "grid_layout": {
    "row_top": [3, 6, 9],
    "row_mid": [2, 5, 8],
    "row_bot": [1, 4, 7],
    "description": "Hàng ngang: Hàng trên = Trí tuệ (3-6-9), Hàng giữa = Cảm xúc (2-5-8), Hàng dưới = Thực tế (1-4-7). Cột dọc: Cột trái = Tư duy (1-2-3), Cột giữa = Ý chí (4-5-6), Cột phải = Hành động (7-8-9)."
  },
  "arrows_present": {
    "1_2_3": {
      "name": "Mũi tên Lập kế hoạch",
      "numbers": [1, 2, 3],
      "direction": "cột trái dọc lên",
      "meaning": "Có khả năng lập kế hoạch chi tiết và thực hiện từng bước. Tư duy có hệ thống, từ ý tưởng (1) qua cảm xúc (2) đến biểu đạt (3)."
    },
    "4_5_6": {
      "name": "Mũi tên Ý chí",
      "numbers": [4, 5, 6],
      "direction": "cột giữa dọc lên",
      "meaning": "Ý chí mạnh mẽ, quyết tâm cao. Không ngại khó khăn. Từ nền tảng (4) qua trải nghiệm (5) đến trách nhiệm (6), tạo nên sức mạnh ý chí toàn diện."
    },
    "7_8_9": {
      "name": "Mũi tên Hành động",
      "numbers": [7, 8, 9],
      "direction": "cột phải dọc lên",
      "meaning": "Tính chủ động và hành động cao. Thích làm hơn nói. Từ nội tâm (7) qua thực tế (8) đến lý tưởng (9), tạo ra sức mạnh hành động cân bằng."
    },
    "1_4_7": {
      "name": "Mũi tên Thực tế",
      "numbers": [1, 4, 7],
      "direction": "hàng dưới ngang",
      "meaning": "Năng lực thực tế và thể chất cao. Giỏi áp dụng lý thuyết vào thực tế. Lời nói (1), tổ chức (4), nội tâm thực tế (7) — lý trí gắn liền với hành động."
    },
    "2_5_8": {
      "name": "Mũi tên Cân bằng Tinh thần",
      "numbers": [2, 5, 8],
      "direction": "hàng giữa ngang",
      "meaning": "Cảm xúc ổn định, trực giác tốt và sự thấu hiểu người khác. Nền tảng cảm xúc vững (2), thích nghi linh hoạt (5), nhìn nhận thực tế (8)."
    },
    "3_6_9": {
      "name": "Mũi tên Trí tuệ",
      "numbers": [3, 6, 9],
      "direction": "hàng trên ngang",
      "meaning": "Trí nhớ xuất sắc, tư duy phân tích sắc bén, óc sáng tạo và lý tưởng cao. Sáng tạo (3) + trách nhiệm (6) + tầm nhìn (9) = trí tuệ toàn diện."
    },
    "1_5_9": {
      "name": "Mũi tên Quyết tâm",
      "numbers": [1, 5, 9],
      "direction": "đường chéo trái-dưới đến phải-trên",
      "meaning": "Năng lực hành động cao, không trì hoãn. Từ hành động (1) qua thích nghi (5) đến tầm nhìn lớn (9) — người thấy mục tiêu và đi thẳng đến đó."
    },
    "3_5_7": {
      "name": "Mũi tên Trí nhớ & Phân tích",
      "numbers": [3, 5, 7],
      "direction": "đường chéo phải-trên đến trái-dưới",
      "meaning": "Trí nhớ tốt, khả năng học tập và phân tích cao. Biểu đạt (3) + trải nghiệm (5) + nội tâm sâu (7) = nhà nghiên cứu hoặc học giả tự nhiên."
    }
  },
  "arrows_absent": {
    "1_2_3": {
      "name": "Thiếu Mũi tên Lập kế hoạch",
      "meaning": "Gặp khó khăn trong việc lập kế hoạch dài hạn. Thường phản ứng với tình huống hơn là chủ động tạo ra chúng.",
      "suggestion": "Tập thói quen lập kế hoạch tuần/tháng. Dùng công cụ hỗ trợ (calendar, todo list) để bù đắp."
    },
    "4_5_6": {
      "name": "Thiếu Mũi tên Ý chí",
      "meaning": "Ý chí dễ bị lung lay trước khó khăn. Cần động lực bên ngoài để duy trì cam kết.",
      "suggestion": "Tìm accountability partner. Chia mục tiêu lớn thành các cột mốc nhỏ có thể ăn mừng."
    },
    "7_8_9": {
      "name": "Thiếu Mũi tên Hành động",
      "meaning": "Xu hướng suy nghĩ nhiều hơn hành động. Ý tưởng phong phú nhưng thực thi chậm.",
      "suggestion": "Áp dụng quy tắc 2 phút: nếu làm được trong 2 phút thì làm ngay. Hành động nhỏ xây dựng đà lớn."
    },
    "1_4_7": {
      "name": "Thiếu Mũi tên Thực tế",
      "meaning": "Khó áp dụng lý thuyết vào thực tế. Có thể rất giỏi về ý tưởng nhưng gặp khó khăn khi triển khai.",
      "suggestion": "Hợp tác với người có năng lực thực thi. Tìm mentor giỏi về triển khai và học quan sát."
    },
    "2_5_8": {
      "name": "Thiếu Mũi tên Cân bằng Tinh thần",
      "meaning": "Cảm xúc dễ bị mất cân bằng. Có thể khó ổn định trước áp lực hoặc thay đổi.",
      "suggestion": "Thiền định, yoga hoặc các hoạt động mindfulness. Xây dựng thói quen ổn định cảm xúc hàng ngày."
    },
    "3_6_9": {
      "name": "Thiếu Mũi tên Trí tuệ",
      "meaning": "Trí nhớ có thể không ổn định. Cần nỗ lực hơn trong việc học và ghi nhớ thông tin.",
      "suggestion": "Ghi chú mọi thứ quan trọng. Dùng kỹ thuật spaced repetition để cải thiện trí nhớ."
    },
    "1_5_9": {
      "name": "Thiếu Mũi tên Quyết tâm",
      "meaning": "Dễ do dự và trì hoãn quyết định quan trọng. Có thể bỏ lỡ cơ hội vì chờ đợi quá lâu.",
      "suggestion": "Đặt deadline cứng cho quyết định. Tập tin tưởng vào trực giác và ra quyết định nhanh hơn."
    },
    "3_5_7": {
      "name": "Thiếu Mũi tên Trí nhớ",
      "meaning": "Khó phân tích sâu và ghi nhớ lâu dài. Cần chiến lược học tập bổ trợ.",
      "suggestion": "Dùng sơ đồ tư duy (mind map), flashcard và kể chuyện để chuyển thông tin thành ký ức lâu dài."
    }
  }
};

// ── Save ──
fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
const sizeKB = (fs.statSync(filePath).size / 1024).toFixed(1);
console.log('PATCH DONE');
console.log('Size:', sizeKB, 'KB');
console.log('pyramid_peak[5].title:', data.pyramid_peak['5'].title);
console.log('pyramid_challenge[3].how_to_overcome:', !!data.pyramid_challenge['3'].how_to_overcome);
console.log('personal_day[1].best_for:', !!data.personal_day['1'].best_for);
console.log('tension_number[7].resolution:', !!data.tension_number['7'].resolution);
console.log('birth_chart_axes arrows_present keys:', Object.keys(data.birth_chart_axes.arrows_present).join(','));
