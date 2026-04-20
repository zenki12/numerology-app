const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'numerology_knowledge_base.json');
const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

// ── SOUL NUMBER expansions (2–33) ──
const soulExpansions = {
  "2": { title:"Linh hồn Kết nối", desire:"Khao khát sự hòa hợp, được yêu thương và thuộc về ai đó. Muốn có bạn đồng hành thật sự.", fear:"Sợ bị từ chối, cô đơn và xung đột. Sợ mất đi các mối quan hệ quan trọng.", in_relationship:"Người bạn đời lý tưởng — trung thành, ân cần và luôn ưu tiên đối phương. Cần học nói lên nhu cầu bản thân.", shadow:"Khi không được sống đúng: phụ thuộc thái quá, mất bản sắc hoặc thao túng tinh vi để được yêu thương." },
  "3": { title:"Linh hồn Biểu đạt", desire:"Khao khát được biểu đạt sáng tạo, được lắng nghe và yêu thích. Muốn cuộc sống vui vẻ và đầy màu sắc.", fear:"Sợ bị chỉ trích sáng tạo của mình. Sợ cảm xúc bị đè nén và không có lối thoát biểu đạt.", in_relationship:"Cần không khí vui vẻ, lãng mạn và sáng tạo. Người bạn đời phải biết trân trọng và khuyến khích tài năng.", shadow:"Khi không được sống đúng: trầm cảm ẩn sau nụ cười, kịch tính hoặc dùng lời nói sắc bén để tấn công." },
  "4": { title:"Linh hồn Trật tự", desire:"Khao khát sự ổn định, an toàn và trật tự. Muốn xây dựng nền tảng vững chắc cho cuộc sống.", fear:"Sợ hỗn loạn, thay đổi đột ngột và mất kiểm soát. Sợ thất bại và mất đi sự ổn định.", in_relationship:"Trung thành và cam kết lâu dài. Thể hiện tình yêu qua hành động thực tế. Cần học cách mở lòng hơn.", shadow:"Khi không được sống đúng: cứng nhắc, kiểm soát hoặc bi quan về cuộc sống." },
  "5": { title:"Linh hồn Tự do", desire:"Khao khát tự do tuyệt đối — đi bất cứ nơi nào, thử bất cứ điều gì, không bị ràng buộc.", fear:"Sợ bị giam cầm, mất tự do hoặc bị bắt buộc cam kết. Sợ cuộc sống đơn điệu.", in_relationship:"Cần bạn đời hiểu và tôn trọng sự tự do. Khi thực sự yêu, trung thành; khi cảm thấy bị ràng buộc, ra đi.", shadow:"Khi không được sống đúng: nghiện ngập, bốc đồng hoặc chạy trốn trách nhiệm." },
  "6": { title:"Linh hồn Yêu thương", desire:"Khao khát tình yêu sâu sắc, gia đình hòa thuận và được chăm sóc người khác. Muốn bản thân là bến đậu an toàn.", fear:"Sợ bị từ chối trong tình yêu, sợ gia đình tan vỡ hoặc những người yêu thương bị tổn thương.", in_relationship:"Người bạn đời tận tụy nhất — sẽ làm mọi thứ để giữ gìn mối quan hệ. Cần học cách nhận lại sau khi cho đi.", shadow:"Khi không được sống đúng: can thiệp quá mức, đổ lỗi hoặc cầu toàn trong tình cảm." },
  "7": { title:"Linh hồn Tri thức", desire:"Khao khát hiểu biết sâu sắc về bản thân, vũ trụ và ý nghĩa cuộc sống. Muốn tìm ra sự thật.", fear:"Sợ bị xâm phạm sự riêng tư, sợ không giữ được ranh giới cá nhân. Sợ bị coi là ngu ngốc hoặc không thấu đáo.", in_relationship:"Cần bạn đời có chiều sâu trí tuệ và tôn trọng không gian cá nhân. Yêu thương qua những cuộc trò chuyện sâu sắc.", shadow:"Khi không được sống đúng: cô lập, lạnh lùng hoặc dùng trí tuệ để trốn tránh cảm xúc." },
  "8": { title:"Linh hồn Thành đạt", desire:"Khao khát thành công, quyền lực và được công nhận năng lực. Muốn để lại dấu ấn và di sản.", fear:"Sợ thất bại tài chính, mất quyền lực hoặc bị coi là yếu đuối. Sợ nghèo khó.", in_relationship:"Đảm bảo sự ổn định vật chất cho bạn đời. Cần học cách biểu đạt tình cảm bằng nhiều ngôn ngữ yêu thương hơn ngoài tiền bạc.", shadow:"Khi không được sống đúng: ám ảnh tiền bạc, dùng vật chất để kiểm soát hoặc bù đắp cảm xúc." },
  "9": { title:"Linh hồn Nhân đạo", desire:"Khao khát làm cho thế giới tốt đẹp hơn, được yêu thương vô điều kiện và kết nối sâu sắc với nhân loại.", fear:"Sợ không đóng góp được gì, sợ bị lợi dụng hoặc những người mình yêu thương không nhận ra giá trị của mình.", in_relationship:"Lãng mạn, hào phóng và tha thứ. Cần bạn đời chia sẻ giá trị nhân đạo. Học cách đặt bản thân ngang bằng người khác.", shadow:"Khi không được sống đúng: bất mãn, tự hủy hoại hoặc đòi hỏi sự công nhận thái quá." },
  "11": { title:"Linh hồn Tâm linh", desire:"Khao khát kết nối tâm linh sâu sắc, truyền cảm hứng và được hiểu thấu ở mức sâu nhất.", fear:"Sợ bị hiểu lầm, sợ năng lượng tiêu cực và sợ mất đi sự kết nối tâm linh trong mối quan hệ.", in_relationship:"Cần bạn đời có chiều sâu tâm linh và cảm xúc. Rất nhạy cảm — môi trường quan hệ ảnh hưởng lớn đến sức khỏe.", shadow:"Khi không được sống đúng: lo lắng mãn tính, bất ổn cảm xúc hoặc trầm cảm nhiều giai đoạn." },
  "22": { title:"Linh hồn Kiến tạo", desire:"Khao khát xây dựng những thứ lớn lao và bền vững, được công nhận là người đã thay đổi thế giới.", fear:"Sợ ước mơ lớn không được hiện thực hóa, sợ bị cười vì tầm nhìn quá lớn.", in_relationship:"Cần bạn đời hiểu và hỗ trợ sứ mệnh lớn. Đôi khi quá bận rộn với sự nghiệp mà quên đi gia đình.", shadow:"Khi không được sống đúng: căng thẳng mãn tính, mang gánh nặng quá lớn hoặc dùng quyền lực không đúng cách." },
  "33": { title:"Linh hồn Tình yêu vô điều kiện", desire:"Khao khát yêu thương và chữa lành — không chỉ cho từng cá nhân mà cho cả nhân loại. Muốn làm thế giới ấm hơn.", fear:"Sợ không thể yêu thương đủ, sợ những người mình yêu bị tổn thương và sợ bị kiệt sức cảm xúc.", in_relationship:"Tình yêu vô điều kiện và sâu sắc. Cần học cách đặt ranh giới lành mạnh và không mất bản thân khi yêu.", shadow:"Khi không được sống đúng: kiệt sức cảm xúc, gánh chịu nỗi đau người khác hoặc hay phàn nàn về cuộc đời." }
};

for (const [num, ext] of Object.entries(soulExpansions)) {
  if (data.soul_number[num]) {
    Object.assign(data.soul_number[num], ext);
  }
}

// ── PERSONALITY NUMBER expansions ──
const personalityExpansions = {
  "1": { first_impression:"Tự tin, quyết đoán và có năng lực. Người khác ngay lập tức cảm nhận bạn là người lãnh đạo.", how_others_see:"Năng động, đứng thẳng, mắt ánh nhìn trực tiếp. Có thể bị coi là kiêu ngạo trước khi người khác hiểu bạn hơn.", style_tip:"Trang phục sắc sảo, đứng đầu xu hướng. Màu sắc đậm và hình động bổ sung cho năng lượng tự nhiên." },
  "2": { first_impression:"Nhẹ nhàng, thân thiện và dễ gần. Người khác cảm thấy an toàn và thoải mái khi ở bên bạn.", how_others_see:"Lịch sự, đầy đủ và luôn chú ý đến người khác. Có thể bị coi nhẹ vì quá nhẹ nhàng.", style_tip:"Màu pastel và trang phục tinh tế. Tránh quá lộ liễu. Chi tiết nhỏ mới lạ thường nổi bật hơn." },
  "3": { first_impression:"Năng động, vui vẻ và thu hút. Mọi người ngay lập tức muốn kết bạn với bạn.", how_others_see:"Lạc quan và sáng tạo. Người xung quanh cảm thấy vui vẻ hơn khi ở cạnh bạn.", style_tip:"Màu sắc tươi sáng và phụ kiện vui vẻ. Phong cách tự do, cá tính. Tránh phong cách quá nghiêm túc." },
  "4": { first_impression:"Nghiêm túc, có tổ chức và đáng tin cậy. Người khác cảm thấy bạn là người họ có thể dựa vào.", how_others_see:"Thực tế và bảo thủ. Người ngoài có thể thấy bạn cứng nhắc trước khi biết bạn thật sự.", style_tip:"Trang phục classic, chất liệu cao cấp và màu neutral. Tránh quá trend hay lòe loẹt." },
  "5": { first_impression:"Năng động, thú vị và hoàn toàn không thể đoán trước. Mọi người tò mò muốn biết thêm về bạn.", how_others_see:"Hấp dẫn và tự do. Đôi khi bị coi là thiếu trách nhiệm hoặc không đáng tin cậy trong công việc.", style_tip:"Cá tính và đa dạng — thích thay đổi phong cách. Màu hứa hẹn, hoa văn năng động phù hợp." },
  "6": { first_impression:"Ấm áp, quan tâm và thanh lịch. Người khác ngay lập tức cảm thấy được chào đón và chăm sóc.", how_others_see:"Thanh lịch và toàn vẹn. Đôi khi có thể bị coi là quá cẩn thận hoặc cầu kỳ.", style_tip:"Thanh lịch và cổ điển. Đường nét đơn giản, màu sắc warm tone. Luôn được chú ý vì vẻ chỉn chu." },
  "7": { first_impression:"Bí ẩn và hướng nội. Người khác tò mò nhưng không dám lại gần ngay.", how_others_see:"Thông minh và độc đáo. Có thể bị nghĩ là lạnh lùng trước khi người khác biết bạn thật sự.", style_tip:"Tối giản và có chiều sâu. Màu tối hoặc trung tính. Một chi tiết tinh tế tạo sự hấp dẫn." },
  "8": { first_impression:"Quyền lực và đáng kính. Mọi người ngay lập tức nhận ra bạn là người quan trọng.", how_others_see:"Sự thành công bản thân toát ra không cần nói gì. Một số người ngưỡng mộ, một số khác cảm thấy e dè.", style_tip:"Chất lượng hơn số lượng — đầu tư vào trang phục cao cấp ít nhưng đắc. Màu trung tính mạnh mẽ." },
  "9": { first_impression:"Quyến rũ và đa chiều. Người khác cảm thấy được mở rộng tầm nhìn khi nói chuyện với bạn.", how_others_see:"Có trí tuệ và tầm nhìn rộng. Ẩn chứa sự huyền bí và triết học sâu sắc.", style_tip:"Phong cách artistic và đa văn hóa. Màu sắc phong phú, phụ kiện từ các nền văn hóa khác nhau." },
  "11": { first_impression:"Huyền bí và thu hút — người khác khó giải thích tại sao lại bị cuốn hút bởi bạn.", how_others_see:"Như có một ánh sáng hướng dẫn. Người khác cảm thấy được truyền cảm hứng chỉ bằng sự hiện diện.", style_tip:"Tinh tế và tâm linh. Cả màu trắng tinh khôi lẫn màu tối sâu đều phù hợp. Trang sức có ý nghĩa biểu tượng." },
  "22": { first_impression:"Uy nghi và đáng tin cậy. Người khác ngay lập tức cảm thấy bạn là người có thể xây dựng những điều lớn lao.", how_others_see:"Quyền uy tự nhiên mà không cần cố gắng. Toàn thuộc và có chiều sâu.", style_tip:"Sang trọng và có tầm. Chất liệu cao cấp, màu classic. Phong cách không bao giờ lỗi thời." },
  "33": { first_impression:"Ấm áp và chữa lành — người khác cảm thấy được hiểu thấu và chấp nhận ngay lập tức.", how_others_see:"Như đàn thiện — tự nhiên tỏa ra sự ấm áp và an toàn cho mọi người xung quanh.", style_tip:"Nhẹ nhàng và từ bi. Màu trắng, tím nhạt hoặc xanh lá mang năng lượng chữa lành. Phong cách không phô trương." }
};

// Add note to personality_number
data.personality_number.note = "Số Nhân cách tiết lộ ấn tượng đầu tiên bạn tạo ra — cách người khác nhìn nhận bạn trước khi biết rõ bạn là ai.";

for (const [num, ext] of Object.entries(personalityExpansions)) {
  if (data.personality_number[num]) {
    Object.assign(data.personality_number[num], ext);
  }
}

fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
console.log('DONE');
console.log('soul_number[2] desire:', !!data.soul_number['2'].desire);
console.log('soul_number[33] shadow:', !!data.soul_number['33'].shadow);
console.log('personality_number[1] first_impression:', !!data.personality_number['1'].first_impression);
console.log('personality_number[33] style_tip:', !!data.personality_number['33'].style_tip);
console.log('File size:', (fs.statSync(filePath).size/1024).toFixed(1), 'KB');
