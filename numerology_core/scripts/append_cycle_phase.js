const fs = require('fs');

const appendData = `

// ═══════════════════════════════════════════════════════════════════════════
// LIFE CYCLE PHASE EXTRA — Detailed narrative for each number in each phase
// Phase 1 (gieoHat = Niên thiếu), Phase 2 (truongThanh), Phase 3 (vienMan)
// ═══════════════════════════════════════════════════════════════════════════
NarrativeTemplates.lifeCyclePhaseExtra = {
  1: {
    gieoHat: 'Năng lượng số 1 trong giai đoạn niên thiếu hình thành ở bạn tinh thần độc lập và xu hướng tự mình khám phá thế giới từ rất sớm. Bạn thường xuyên muốn thử nghiệm mọi thứ theo cách riêng của mình, dù đôi khi điều đó đồng nghĩa với việc va chắp thực tế. Đây là giai đoạn bạn xây dựng bản sắc cá nhân mạnh mẽ và lòng dũng cảm để tiên phong.',
    truongThanh: 'Bước vào trưởng thành, số 1 thúc đẩy bạn trở thành người dẫn đầu trong sự nghiệp và cuộc sống. Đây là giai đoạn lý tưởng để khởi nghiệp, đảm nhận vai trò lãnh đạo hoặc xây dựng nền tảng độc lập về tài chính. Thách thức là không để cái tôi cá nhân cản trở các mối quan hệ cộng tác.',
    vienMan: 'Ở giai đoạn viên mãn, số 1 tiếp tục thổi vào bạn ngọn lửa của sự độc lập và ý chí. Bạn không muốn nghỉ hưu theo nghĩa thông thường — những người số 1 ở giai đoạn này thường vẫn tiếp tục sáng tạo, đóng góp và dẫn đường cho thế hệ sau bằng kinh nghiệm và trí tuệ tích lũy cả đời.',
  },
  2: {
    gieoHat: 'Năng lượng số 2 trong thời niên thiếu tạo ra một tâm hồn nhạy cảm, giàu cảm xúc và yêu thương. Bạn thường học được cách lắng nghe và thấu cảm từ rất sớm. Gia đình và bạn bè là vũ trụ của bạn trong giai đoạn này — sự hài hòa trong các mối quan hệ là điều bạn luôn tìm kiếm và gìn giữ.',
    truongThanh: 'Giai đoạn trưởng thành với số 2 là thời gian các mối quan hệ trở thành trung tâm cuộc sống — hôn nhân, đối tác, cộng sự. Bạn xuất sắc trong vai trò là người hỗ trợ và kiến tạo sự kết nối. Thách thức là học cách đảm bảo nhu cầu của chính mình cũng được đáp ứng, không chỉ mải lo cho người khác.',
    vienMan: 'Số 2 trong giai đoạn viên mãn khơi dậy ở bạn chiều sâu tâm linh và nhu cầu hòa bình nội tâm. Đây là lúc bạn tổng kết hành trình bằng những mối quan hệ trọn vẹn. Vai trò trung gian, dàn xếp, chữa lành trong gia đình và cộng đồng là nơi bạn tỏa sáng nhất.',
  },
  3: {
    gieoHat: 'Số 3 trong giai đoạn niên thiếu biến bạn thành một đứa trẻ đầy màu sắc, ham thích khám phá và không thiếu bạn bè. Trí tưởng tượng phong phú, khiếu hài hước và năng lực biểu đạt ngôn ngữ phát triển rất sớm. Đây là giai đoạn bạn học cách kể chuyện, sáng tạo và giao tiếp với thế giới bằng tất cả sự hoan hỉ và tò mò tự nhiên.',
    truongThanh: 'Giai đoạn trưởng thành với số 3 là mùa bứt phá sáng tạo. Bạn giỏi nhất trong những lĩnh vực đòi hỏi ý tưởng và biểu đạt — viết, nói, thiết kế, giảng dạy, diễn xuất. Đây cũng là giai đoạn cần rèn thêm kỷ luật để hoàn thành những gì đã bắt đầu, tránh để tài năng rơi vào sự tản mạn.',
    vienMan: 'Số 3 trong giai đoạn viên mãn giữ cho tinh thần bạn trẻ trung và tươi mới bất kể tuổi tác. Bạn tiếp tục sáng tạo, chia sẻ và truyền cảm hứng cho người xung quanh. Đây là giai đoạn đặc biệt thuận lợi để viết hồi ký, truyền nghề, hoặc làm bất cứ điều gì để lại dấu ấn nghệ thuật.',
  },
  4: {
    gieoHat: 'Số 4 trong giai đoạn niên thiếu định hình nên một đứa trẻ cần cảm giác an toàn và có cấu trúc. Bạn thích quy tắc rõ ràng, thường nghiêm túc hơn bạn bè cùng tuổi và có xu hướng quan tâm đến sự thực tế. Nhà cửa gọn gàng, bài tập chu đáo và lối sống có trật tự là những điều bạn thấm sâu vào hành vi.',
    truongThanh: 'Trưởng thành với số 4 là giai đoạn của sự xây dựng bền vững — từ sự nghiệp, tài chính đến gia đình. Bạn làm việc chăm chỉ hơn hầu hết mọi người và thường đạt được thành tựu thực chất. Rủi ro lớn nhất là kiệt sức vì không biết nghỉ ngơi và bỏ lỡ những niềm vui thoáng qua.',
    vienMan: 'Ở giai đoạn viên mãn, số 4 cho bạn cảm giác hài lòng khi nhìn lại toàn bộ những điều đã xây dựng được. Đây là lúc khôn ngoan thực tiễn của bạn trở thành di sản quý giá nhất cho con cháu và những người xung quanh. Bạn là người giữ gìn truyền thống và nền tảng ổn định của gia đình.',
  },
  5: {
    gieoHat: 'Số 5 trong giai đoạn niên thiếu tạo ra một tâm hồn hiếu kỳ không ngừng nghỉ. Bạn chán ngán routine, thích thử nghiệm và yêu thích bất ngờ. Khả năng thích nghi nhanh với môi trường mới và kết bạn với nhiều kiểu người khác nhau là điểm mạnh nổi bật từ rất sớm.',
    truongThanh: 'Giai đoạn trưởng thành với số 5 là hành trình tìm kiếm tự do và đa dạng trải nghiệm. Sự nghiệp của bạn có thể trải rộng nhiều lĩnh vực, bao gồm du lịch, truyền thông, kinh doanh đa ngành. Thách thức là duy trì cam kết đủ lâu để tạo nên thành tựu có chiều sâu, thay vì cứ mãi bắt đầu những chương mới.',
    vienMan: 'Số 5 trong giai đoạn viên mãn tiếp tục giữ bạn năng động và cởi mở với cuộc sống. Bạn không bao giờ thực sự về hưu theo nghĩa cứng nhắc — luôn có chuyến đi mới, góc nhìn mới và mối quan hệ mới chờ đón. Đây là giai đoạn bạn chia sẻ những bài học từ hành trình phong phú của mình.',
  },
  6: {
    gieoHat: 'Số 6 trong giai đoạn niên thiếu hình thành một tâm hồn có trách nhiệm và quan tâm sâu sắc đến người thân. Bạn thường được xem là đứa trẻ ngoan và chín chắn, nhưng bên trong cũng mang nỗi lo lắng về sự hài lòng của người khác. Gia đình là trung tâm an toàn và quan trọng nhất của bạn.',
    truongThanh: 'Giai đoạn trưởng thành với số 6 hướng bạn mạnh mẽ về phía xây dựng gia đình và cộng đồng. Hôn nhân, con cái và mái ấm là trọng tâm của những năm này. Bạn đặc biệt tài năng trong bất kỳ nghề nào liên quan đến chăm sóc, chữa lành và tổ chức không gian sống.',
    vienMan: 'Số 6 trong giai đoạn viên mãn là thời gian bạn thu hoạch những gì đã vun trồng trong các mối quan hệ — con cháu tràn đầy yêu thương, gia đình hạnh phúc và cộng đồng gắn kết. Đây là giai đoạn viên mãn đúng nghĩa nhất cho những ai mang số 6, khi vai trò người chăm sóc trở thành di sản tình thương.',
  },
  7: {
    gieoHat: 'Số 7 trong giai đoạn niên thiếu tạo nên một đứa trẻ thích quan sát hơn tham gia, suy nghĩ nhiều hơn nói. Bạn có nội tâm phong phú, tò mò về những câu hỏi lớn từ rất sớm và thường cảm thấy khác biệt với bạn cùng lứa. Đây là giai đoạn quan trọng để phát triển trực giác và khả năng tư duy độc lập.',
    truongThanh: 'Giai đoạn trưởng thành với số 7 là hành trình đào sâu vào chuyên môn và tìm kiếm sự thật. Bạn xuất sắc trong nghiên cứu, phân tích và bất kỳ lĩnh vực nào cần tư duy chiều sâu. Có thể bạn gặp khó khăn trong việc mở lòng với các mối quan hệ gần gũi — đây là bài học cần thực hành có ý thức.',
    vienMan: 'Số 7 trong giai đoạn viên mãn là sự hội tụ của trí tuệ và tâm linh. Đây là thời điểm bạn đặt ra và trả lời những câu hỏi sâu xa nhất về ý nghĩa cuộc đời. Vai trò cố vấn, người hướng dẫn tri thức phù hợp tuyệt đối với bạn ở giai đoạn tích lũy trọn vẹn này.',
  },
  8: {
    gieoHat: 'Số 8 trong giai đoạn niên thiếu hình thành sự nhận thức về quyền lực, tiền bạc và thực tế từ rất sớm. Bạn thường có tham vọng cao hơn bạn đồng trang lứa và nhạy bén với những cơ hội. Đây là giai đoạn xây dựng ý chí và học cách sử dụng quyền lực một cách có trách nhiệm.',
    truongThanh: 'Trưởng thành với số 8 là giai đoạn của sức mạnh và thành tựu vật chất. Khả năng lãnh đạo, kinh doanh và quản lý tài nguyên của bạn phát triển mạnh mẽ. Đây là thời điểm lý tưởng để xây dựng sự nghiệp lớn — nhưng cũng là lúc dễ nhất để đánh mất sự cân bằng nếu chỉ chạy theo kết quả.',
    vienMan: 'Số 8 trong giai đoạn viên mãn mang đến thời gian để đánh giá lại giá trị thực sự của những gì đã tích lũy. Đây là giai đoạn chuyển hướng từ tích lũy sang sử dụng sức ảnh hưởng và tài nguyên để tạo ra di sản có ý nghĩa sâu xa hơn cho cộng đồng và gia đình.',
  },
  9: {
    gieoHat: 'Số 9 trong giai đoạn niên thiếu tạo nên tâm hồn cảm thụ mạnh mẽ và lòng trắc ẩn rộng lớn từ sớm. Bạn thường xúc động trước nỗi đau của người khác và có xu hướng muốn giúp đỡ mọi người. Đây cũng là giai đoạn bạn bắt đầu cảm nhận rằng mình có sứ mệnh gì đó lớn hơn bản thân.',
    truongThanh: 'Giai đoạn trưởng thành với số 9 là thời gian bạn bắt đầu đi tìm và sống theo sứ mệnh nhân văn của mình. Nghề nghiệp liên quan đến giáo dục, nghệ thuật, y tế hoặc xã hội thường phù hợp và thỏa mãn nhất. Thách thức là học cách buông bỏ và không ôm đồm quá nhiều.',
    vienMan: 'Số 9 trong giai đoạn viên mãn là thời gian hoàn thành vòng tròn — của việc trao đi và tiếp nhận. Đây là giai đoạn tâm linh mở rộng và ý nghĩa cuộc sống trở nên trong sáng hơn bao giờ hết. Bạn trở thành người chứng kiến khôn ngoan cho cuộc sống của những người xung quanh.',
  },
  11: {
    gieoHat: 'Số 11 (Số Master) trong giai đoạn niên thiếu tạo ra một đứa trẻ đặc biệt nhạy cảm, đôi khi bị cảm giác không thuộc về nơi này. Trực giác mạnh mẽ nhưng cũng dễ bị lo âu và quá tải cảm xúc. Đây là giai đoạn quan trọng để học cách bảo vệ năng lượng nội tâm và định hướng trực giác.',
    truongThanh: 'Số 11 trong giai đoạn trưởng thành là thời gian những tiềm năng đặc biệt bắt đầu được hiện thực hóa. Bạn có khả năng truyền cảm hứng và dẫn dắt người khác theo những con đường sáng tạo hoặc tâm linh. Thách thức là cân bằng giữa tầm nhìn cao cả và những đòi hỏi thực tế của cuộc sống.',
    vienMan: 'Số 11 trong giai đoạn viên mãn là đỉnh cao của hành trình nội tâm và sứ mệnh truyền cảm hứng. Đây là lúc những giác ngộ và hiểu biết tích lũy cả đời được biểu đạt trọn vẹn nhất. Bạn trở thành ngọn đèn soi sáng cho những ai đang tìm kiếm ý nghĩa sâu xa hơn trong cuộc sống.',
  },
  22: {
    gieoHat: 'Số 22 (Số Master) trong giai đoạn niên thiếu ươm mầm tư duy của một người xây dựng vĩ đại. Bạn thường có khả năng nhìn xa hơn và suy nghĩ quy mô lớn hơn người cùng tuổi. Đây là giai đoạn học cách biến tầm nhìn thành kế hoạch và kỷ luật để kiên trì theo đuổi những gì quan trọng.',
    truongThanh: 'Số 22 trong giai đoạn trưởng thành là thời gian bạn bắt đầu xây dựng những thứ có tầm ảnh hưởng thực sự — doanh nghiệp, tổ chức, hệ thống, hay bất cứ điều gì có thể tồn tại lâu dài hơn bản thân bạn. Đây là giai đoạn đỉnh cao và đòi hỏi tất cả sự tập trung và kỷ luật.',
    vienMan: 'Số 22 trong giai đoạn viên mãn nhìn lại một hành trình xây dựng với quy mô và chiều sâu hiếm có. Di sản bạn để lại là hệ thống, phong trào hay cộng đồng mà nhiều người tiếp tục thụ hưởng. Đây là giai đoạn của sự hoàn tất mãn nguyện.',
  },
  33: {
    gieoHat: 'Số 33 (Số Master) trong giai đoạn niên thiếu hình thành một tâm hồn yêu thương bao la và nhạy cảm vô cùng. Bạn thường cảm nhận nỗi đau của người khác như của chính mình từ khi còn nhỏ. Đây là giai đoạn học cách yêu thương có ranh giới lành mạnh để không bị kiệt sức bởi sự nhạy cảm quá mức.',
    truongThanh: 'Số 33 trong giai đoạn trưởng thành là thời gian bạn được gọi đến sứ mệnh chữa lành và phụng sự với quy mô lớn. Giáo dục, tâm linh, nghệ thuật chữa lành — bất cứ con đường nào nơi tình yêu thương của bạn có thể chạm đến và thay đổi cuộc sống của những người khác.',
    vienMan: 'Số 33 trong giai đoạn viên mãn là sự trở về với tình yêu vũ trụ — vô điều kiện, vô biên giới và vô hạn. Đây là giai đoạn những người mang Master số 33 thực sự trở thành hiện thân của tình thương trong cộng đồng xung quanh họ, chữa lành bằng chính sự hiện diện.',
  },
};
`;

let content = fs.readFileSync('narrative_templates.js', 'utf8');
content = content.trimEnd();
content += appendData;
fs.writeFileSync('narrative_templates.js', content);
console.log('Done. Length:', content.length);
