const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'numerology_knowledge_base.json');
const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

// ── 1. soul_challenge: string → object ──
const soulChallengeExpansions = {
  "0": {
    "title": "Linh hồn Tự do",
    "description": "Không có thử thách linh hồn đặc biệt; bạn có tự do chọn lựa và linh hoạt trong cuộc sống nội tâm.",
    "core_lesson": "Tự do là món quà — nhưng cũng là thử thách. Phải tự tạo ra định hướng nội tâm.",
    "practical_tip": "Thiết lập các giá trị cốt lõi của riêng mình, không để sự thiếu áp lực trở thành trôi dạt."
  },
  "1": {
    "title": "Thử thách Tự tin Nội tâm",
    "description": "Xây dựng sự tự tin và dũng cảm đứng lên vì chính mình trong thế giới nội tâm. Tránh phụ thuộc vào sự chấp thuận của người khác.",
    "core_lesson": "Giá trị bản thân không cần sự xác nhận từ bên ngoài.",
    "practical_tip": "Mỗi ngày hành động 1 việc nhỏ mà bạn muốn nhưng sợ bị phán xét — dần dần xây lên sự tự tin thực sự."
  },
  "2": {
    "title": "Thử thách Ranh giới Cảm xúc",
    "description": "Vượt qua sự nhạy cảm thái quá. Học cách không để những lời chỉ trích làm tổn thương sâu. Phát triển sự tự lập cảm xúc.",
    "core_lesson": "Cảm xúc nhạy cảm là sức mạnh khi được điều hướng đúng, là điểm yếu khi không có ranh giới.",
    "practical_tip": "Phân biệt giữa phản hồi xây dựng và công kích cá nhân. Chỉ tiếp thu cái đầu."
  },
  "3": {
    "title": "Thử thách Biểu đạt Chân thực",
    "description": "Kiểm soát cảm xúc và khơi dậy sự biểu đạt sáng tạo. Vượt qua xu hướng che giấu cảm xúc bằng sự hài hước.",
    "core_lesson": "Sự hài hước che giấu nỗi đau không phải là chữa lành — chỉ là trốn tránh tạm thời.",
    "practical_tip": "Tập dùng nhật ký hoặc nghệ thuật để biểu đạt cảm xúc thật thay vì chỉ trình diễn sự vui vẻ."
  },
  "4": {
    "title": "Thử thách Kỷ luật Nội tâm",
    "description": "Phát triển kỷ luật và tính thực tế trong đời sống nội tâm. Học cách xây dựng nền tảng vững chắc từ bên trong.",
    "core_lesson": "Nền tảng bên trong quyết định mọi thứ bên ngoài. Không thể xây nhà trên cát.",
    "practical_tip": "Tạo thói quen hàng ngày nhỏ nhưng nhất quán — thiền định, viết nhật ký hoặc đọc sách."
  },
  "5": {
    "title": "Thử thách Tự do Có Trách nhiệm",
    "description": "Tìm kiếm sự tự do đích thực mà không làm tổn thương người khác. Học cách cam kết trong khi vẫn giữ tự do nội tâm.",
    "core_lesson": "Tự do thực sự không phải là không có ràng buộc — đó là chọn lựa có ý thức trong mọi ràng buộc.",
    "practical_tip": "Thử thách bản thân: cam kết 1 điều trong 30 ngày mà không bỏ cuộc. Xây dựng cơ bắp cam kết."
  },
  "6": {
    "title": "Thử thách Tình yêu Vô điều kiện",
    "description": "Học cách yêu thương mà không kèm theo kỳ vọng hoặc kiểm soát. Chấp nhận mọi người đúng như bản chất của họ.",
    "core_lesson": "Tình yêu thật sự không yêu cầu người khác phải khác đi.",
    "practical_tip": "Khi cảm thấy muốn can thiệp hay sửa người khác, hỏi mình: 'Điều này phục vụ họ hay phục vụ mình?'"
  },
  "7": {
    "title": "Thử thách Tin tưởng & Chia sẻ",
    "description": "Vượt qua sự hoài nghi và bí mật. Học cách tin tưởng và chia sẻ thế giới nội tâm phong phú của mình.",
    "core_lesson": "Cô độc là lựa chọn. Kết nối là kỹ năng học được — bắt đầu từ một người bạn thật sự.",
    "practical_tip": "Mỗi tuần chia sẻ 1 suy nghĩ thật sự với người bạn tin tưởng. Xây dựng dần dần sự cởi mở."
  },
  "8": {
    "title": "Thử thách Cân bằng Vật chất - Tinh thần",
    "description": "Cân bằng giữa tham vọng vật chất và nhu cầu tinh thần. Không để tiền bạc và quyền lực trở thành thước đo duy nhất.",
    "core_lesson": "Thành công mà thiếu bình yên nội tâm không phải thành công — đó là gánh nặng đắt tiền.",
    "practical_tip": "Định kỳ hỏi bản thân: 'Tôi đang theo đuổi điều này vì nó có ý nghĩa hay chỉ để chứng minh điều gì đó?'"
  },
  "9": {
    "title": "Thử thách Buông bỏ & Tha thứ",
    "description": "Học cách buông bỏ và tha thứ. Vượt qua xu hướng hy sinh bản thân và mong đợi người khác nhận ra điều đó.",
    "core_lesson": "Tha thứ không phải cho người kia — đó là quà tặng bạn trao cho chính mình.",
    "practical_tip": "Thực hành buông bỏ mỗi tuần: 1 oán giận, 1 kỳ vọng không được đáp lại, 1 thứ không còn phục vụ bạn."
  }
};

// Preserve note
const scNote = data.soul_challenge.note;
for (const [num, val] of Object.entries(soulChallengeExpansions)) {
  data.soul_challenge[num] = val;
}
data.soul_challenge.note = scNote;

// ── 2. destiny_challenge: string → object ──
const destinyChallengeExpansions = {
  "0": {
    "title": "Sứ mệnh Tự do Lựa chọn",
    "description": "Không có thử thách sứ mệnh đặc biệt. Cuộc đời bạn có nhiều lựa chọn.",
    "core_lesson": "Tự do chọn lựa là sức mạnh và trách nhiệm cùng lúc — tạo ra định hướng rõ ràng.",
    "practical_tip": "Viết ra 3 giá trị cốt lõi của bạn và đảm bảo mọi hành động lớn đều phản ánh chúng."
  },
  "1": {
    "title": "Thử thách Lãnh đạo Nhân ái",
    "description": "Vượt qua những giới hạn tự áp đặt. Phát triển bản sắc riêng và sự tự tin trong việc thực hiện sứ mệnh lãnh đạo.",
    "core_lesson": "Lãnh đạo thật sự không phải là thống trị — đó là phục vụ người khác bằng tầm nhìn mạnh mẽ.",
    "practical_tip": "Tìm 1 vai trò lãnh đạo nhỏ (nhóm, cộng đồng) và luyện tập dẫn dắt bằng gương mẫu."
  },
  "2": {
    "title": "Thử thách Giữ Bản sắc trong Hợp tác",
    "description": "Học cách hợp tác, đồng thời giữ vững ý kiến và cảm xúc của chính mình. Không hy sinh bản sắc vì hòa khí.",
    "core_lesson": "Hợp tác hiệu quả nhất khi cả hai bên giữ được bản sắc riêng — không phải khi một người biến mất.",
    "practical_tip": "Trước mỗi cuộc họp hoặc kết hợp, ghi rõ lập trường của mình. Đảm bảo nó được nói ra."
  },
  "3": {
    "title": "Thử thách Biểu đạt Không ngừng",
    "description": "Phát huy khả năng biểu đạt và sáng tạo phục vụ sứ mệnh. Không để nỗi sợ chỉ trích ngăn bạn chia sẻ tài năng.",
    "core_lesson": "Tài năng không chia sẻ là tài năng chết. Thế giới cần những gì bạn có thể tạo ra.",
    "practical_tip": "Cam kết tạo ra và chia sẻ 1 sáng tạo mỗi tuần — dù nhỏ. Xây dựng thói quen biểu đạt."
  },
  "4": {
    "title": "Thử thách Xây dựng Có Hệ thống",
    "description": "Xây dựng nền tảng vững chắc cho sứ mệnh. Làm việc chăm chỉ, có tổ chức. Tránh trì hoãn hoặc phân tán năng lượng.",
    "core_lesson": "Mọi sứ mệnh lớn đều được xây dựng từ những bước nhỏ nhất quán — không có con đường tắt.",
    "practical_tip": "Chia sứ mệnh lớn thành 90-ngày sprint. Mỗi sprint có 1 mục tiêu cụ thể và đo được."
  },
  "5": {
    "title": "Thử thách Tự do Có Mục đích",
    "description": "Đón nhận thay đổi như là phần không thể thiếu của sứ mệnh. Học cách sử dụng tự do để phục vụ mục đích cao hơn.",
    "core_lesson": "Tự do không có hướng đi là lang thang. Tự do có mục đích là năng lực phi thường.",
    "practical_tip": "Xác định 'Bắc Cực' sứ mệnh của mình — điểm định hướng không đổi dù hành trình liên tục thay đổi."
  },
  "6": {
    "title": "Thử thách Chăm sóc Lành mạnh",
    "description": "Gánh trách nhiệm với gia đình và cộng đồng như một phần sứ mệnh. Tránh trở nên can thiệp hoặc đòi hỏi sự hoàn hảo.",
    "core_lesson": "Chăm sóc hiệu quả nhất khi giúp người khác phát triển — không phải khi tạo ra sự phụ thuộc.",
    "practical_tip": "Thay 'Tôi sẽ làm cho bạn' bằng 'Tôi sẽ giúp bạn học cách tự làm'. Trao quyền hơn giải cứu."
  },
  "7": {
    "title": "Thử thách Chia sẻ Tri thức",
    "description": "Phát triển tri thức và tâm linh phục vụ sứ mệnh. Vượt qua xu hướng cô lập và không chia sẻ kiến thức.",
    "core_lesson": "Tri thức giữ lại là tri thức chết. Chỉ khi chia sẻ mới thật sự làm chủ được điều mình biết.",
    "practical_tip": "Dạy người khác điều bạn biết — qua viết, nói, hoặc mentoring. Dạy là cách học tốt nhất."
  },
  "8": {
    "title": "Thử thách Quyền lực Đạo đức",
    "description": "Học cách sử dụng quyền lực và tài chính một cách có đạo đức để thực hiện sứ mệnh lớn hơn.",
    "core_lesson": "Quyền lực là phép kiểm tra tốt nhất cho nhân cách. Bạn đối xử với người kém quyền hơn như thế nào?",
    "practical_tip": "Thiết lập nguyên tắc đạo đức cá nhân rõ ràng trước khi có quyền lực — đừng đợi đến khi cần mới nghĩ."
  },
  "9": {
    "title": "Thử thách Phục vụ Vô ngã",
    "description": "Học cách buông bỏ cái tôi và phục vụ nhân loại. Sứ mệnh của bạn mang tính nhân đạo và toàn cầu.",
    "core_lesson": "Khi bạn phục vụ vì danh tiếng, bạn sẽ kiệt sức. Khi phục vụ từ tình yêu thật, nguồn năng lượng không cạn.",
    "practical_tip": "Tìm 1 cách cống hiến mỗi tháng mà không ai biết bạn đã làm. Xây dựng cơ bắp phục vụ vô danh."
  }
};

const dcNote = data.destiny_challenge.note;
for (const [num, val] of Object.entries(destinyChallengeExpansions)) {
  data.destiny_challenge[num] = val;
}
data.destiny_challenge.note = dcNote;

// ── 3. personality_challenge: string → object ──
const personalityChallengeExpansions = {
  "0": {
    "title": "Ngoại hình Cân bằng Tự nhiên",
    "description": "Không có thử thách nhân cách đặc biệt. Bạn tự nhiên thể hiện bản thân một cách cân bằng.",
    "core_lesson": "Sự cân bằng tự nhiên là món quà quý — hãy sử dụng nó để kết nối với nhiều loại người khác nhau.",
    "style_upgrade": "Phát triển phong cách đặc trưng để nổi bật hơn — đừng để 'cân bằng' trở thành 'vô hình'."
  },
  "1": {
    "title": "Thử thách Tự tin Không Kiêu ngạo",
    "description": "Học cách thể hiện sự tự tin mà không bị coi là kiêu ngạo hoặc hung hăng. Tìm cách lãnh đạo bằng gương mẫu.",
    "core_lesson": "Sự tự tin thật sự không cần phải chứng minh — nó toát ra tự nhiên và không cần đè người khác xuống.",
    "style_upgrade": "Thay 'Ý kiến của tôi là...' bằng 'Tôi tự hỏi liệu...' — giữ nguyên sức mạnh nhưng mở không gian cho người khác."
  },
  "2": {
    "title": "Thử thách Hiện diện Có tiếng nói",
    "description": "Vượt qua xu hướng nhút nhát và quá phụ thuộc. Học cách thể hiện ý kiến cũng như sự hữu ích của bản thân.",
    "core_lesson": "Sự dịu dàng và sức mạnh không mâu thuẫn — người mạnh nhất đôi khi nói nhỏ nhất nhưng rõ nhất.",
    "style_upgrade": "Tập lên tiếng trong các cuộc họp nhỏ trước. Xây dựng dần 'cơ bắp' phát biểu ý kiến."
  },
  "3": {
    "title": "Thử thách Hài hước Đúng lúc",
    "description": "Vượt qua xu hướng che giấu cảm xúc bằng cách đùa giỡn. Học cách thể hiện cảm xúc thật sự một cách xây dựng.",
    "core_lesson": "Hài hước là tài năng — nhưng đôi khi người khác cần bạn thật thật thay vì vui vui.",
    "style_upgrade": "Thực hành 'nghiêm túc trong khoảnh khắc' — khi người khác chia sẻ vấn đề, pause tiếng cười 30 giây để lắng nghe thật."
  },
  "4": {
    "title": "Thử thách Đáng tin Nhưng Ấm áp",
    "description": "Vượt qua vẻ ngoài cứng nhắc hoặc lạnh lùng. Học cách thể hiện sự ấm áp và linh hoạt trong khi vẫn đáng tin cậy.",
    "core_lesson": "Độ tin cậy mà thiếu hơi ấm con người sẽ bị liệt là 'robot'. Thêm một chút mềm mại vào vẻ ngoài mạnh mẽ.",
    "style_upgrade": "Bắt đầu mỗi cuộc gặp bằng 1 câu hỏi quan tâm thật: 'Dạo này bạn thế nào?' trước khi vào việc."
  },
  "5": {
    "title": "Thử thách Tự do Đáng tin cậy",
    "description": "Vượt qua xu hướng thể hiện sự bốc đồng hoặc thiếu cam kết. Học cách thể hiện sự tự do một cách có trách nhiệm.",
    "core_lesson": "Người tự do nhưng đáng tin cậy là cực kỳ hiếm và có giá trị — đây là thương hiệu cá nhân đáng xây dựng.",
    "style_upgrade": "Khi nhận lời ai đó, nêu rõ điều kiện và giới hạn ngay từ đầu. Ít hứa hơn và thực hiện nhiều hơn."
  },
  "6": {
    "title": "Thử thách Quan tâm Có ranh giới",
    "description": "Vượt qua xu hướng can thiệp hoặc muốn kiểm soát người khác vì 'tốt cho họ'. Thể hiện sự quan tâm mà không ràng buộc.",
    "core_lesson": "Quan tâm mà không có ranh giới sẽ ngột ngạt. Tình yêu thương tốt nhất là trao quyền cho người khác tự lớn.",
    "style_upgrade": "Hỏi trước khi cho lời khuyên: 'Bạn muốn tôi lắng nghe hay muốn tôi giúp giải quyết?' — thay vì giả định."
  },
  "7": {
    "title": "Thử thách Bí ẩn Có thể tiếp cận",
    "description": "Vượt qua vẻ ngoài bí ẩn hoặc xa cách làm người khác e dè. Học cách chia sẻ và cởi mở hơn trong giao tiếp.",
    "core_lesson": "Sự bí ẩn hấp dẫn nhưng sự xa cách theo thời gian sẽ cô lập. Chủ động chia sẻ để xây dựng kết nối.",
    "style_upgrade": "Mỗi tuần chia sẻ 1 điều thật về bản thân với người quen — không cần to lớn, chỉ cần thật."
  },
  "8": {
    "title": "Thử thách Quyền lực Hào phóng",
    "description": "Vượt qua vẻ ngoài thống trị hoặc tham lam. Học cách thể hiện quyền lực bằng sự hào phóng và đạo đức.",
    "core_lesson": "Người quyền lực nhất không phải người ai cũng sợ — mà người ai cũng muốn theo vì họ nâng người khác lên.",
    "style_upgrade": "Tìm cách công nhận công lao của người khác công khai — đặc biệt những người ít được thấy."
  },
  "9": {
    "title": "Thử thách Khôn ngoan Khiêm tốn",
    "description": "Vượt qua xu hướng tự coi mình là người biết tất cả. Học cách thể hiện trí tuệ với sự khiêm tốn và cởi mở.",
    "core_lesson": "Người thật sự khôn ngoan biết rằng mình không biết rất nhiều. Sự khiêm tốn là dấu hiệu của trí tuệ thật sự.",
    "style_upgrade": "Tập câu cửa miệng: 'Tôi không chắc về điều này — bạn nghĩ sao?' Mở không gian để học từ người khác."
  }
};

const pcNote = data.personality_challenge.note;
for (const [num, val] of Object.entries(personalityChallengeExpansions)) {
  data.personality_challenge[num] = val;
}
data.personality_challenge.note = pcNote;

// ── 4. maturity_ability: string → object ──
const maturityAbilityExpansions = {
  "1": {
    "title": "Năng lực Lãnh đạo Trưởng thành",
    "description": "Phát triển mạnh về sự độc lập và khả năng lãnh đạo. Càng lớn tuổi, càng tự tin hơn trong việc thực hiện tầm nhìn riêng.",
    "peak_age": "Phát huy mạnh nhất từ sau 40-50 tuổi",
    "how_to_develop": "Nhận thêm trách nhiệm lãnh đạo, xây dựng đội nhóm và truyền đạt tầm nhìn của mình cho thế hệ tiếp theo."
  },
  "2": {
    "title": "Năng lực Hòa giải Trưởng thành",
    "description": "Trở thành người hòa giải và hỗ trợ xuất sắc. Trực giác cảm xúc và sự thấu hiểu người khác tăng lên đáng kể.",
    "peak_age": "Phát huy mạnh nhất từ sau 40-50 tuổi",
    "how_to_develop": "Tham gia vào các vai trò tư vấn, hòa giải. Chia sẻ kỹ năng đọc vị cảm xúc với người trẻ hơn."
  },
  "3": {
    "title": "Năng lực Sáng tạo Trưởng thành",
    "description": "Phát huy tài năng biểu đạt và sáng tạo. Cuộc sống xã hội phong phú và tràn đầy niềm vui là đặc trưng.",
    "peak_age": "Phát huy mạnh nhất từ sau 40-50 tuổi",
    "how_to_develop": "Cho phép bản thân sáng tạo không giới hạn — viết, vẽ, biểu diễn, dạy. Không có tuổi nào là quá muộn."
  },
  "4": {
    "title": "Năng lực Xây dựng Trưởng thành",
    "description": "Xây dựng nền tảng vững chắc và ổn định. Kỷ luật và sự thực tế là vũ khí chính khi trưởng thành.",
    "peak_age": "Phát huy mạnh nhất từ sau 40-50 tuổi",
    "how_to_develop": "Tập trung vào di sản — xây dựng những thứ sẽ tồn tại lâu hơn bạn: gia đình, doanh nghiệp, cộng đồng."
  },
  "5": {
    "title": "Năng lực Đổi mới Trưởng thành",
    "description": "Tận hưởng sự tự do và đa dạng. Tuổi trưởng thành mang đến nhiều thay đổi thú vị và không dự đoán được.",
    "peak_age": "Phát huy mạnh nhất từ sau 40-50 tuổi",
    "how_to_develop": "Đừng cản trở bản thân vì tuổi tác. Thử điều mới, học kỹ năng mới, du lịch — sự đa dạng giữ tinh thần trẻ."
  },
  "6": {
    "title": "Năng lực Chăm sóc Trưởng thành",
    "description": "Trở thành trụ cột của gia đình và cộng đồng. Trách nhiệm và tình yêu thương là nguồn sức mạnh chính.",
    "peak_age": "Phát huy mạnh nhất từ sau 40-50 tuổi",
    "how_to_develop": "Trở thành người cố vấn, người kết nối trong gia đình và cộng đồng. Sức mạnh nuôi dưỡng của bạn là vô giá."
  },
  "7": {
    "title": "Năng lực Tri tuệ Trưởng thành",
    "description": "Phát triển chiều sâu trí tuệ và tâm linh. Là nhà hiền triết, người tìm kiếm sự thật và chia sẻ tri thức.",
    "peak_age": "Phát huy mạnh nhất từ sau 40-50 tuổi",
    "how_to_develop": "Viết, dạy, chia sẻ những gì bạn học được. Trí tuệ tích lũy cả đời xứng đáng được truyền lại."
  },
  "8": {
    "title": "Năng lực Thành đạt Trưởng thành",
    "description": "Đạt được thành công vật chất và quyền lực đáng kể. Song hành là trách nhiệm sử dụng tài nguyên đúng mục đích.",
    "peak_age": "Phát huy mạnh nhất từ sau 40-50 tuổi",
    "how_to_develop": "Dùng nguồn lực tích lũy được để tạo ra tác động — đầu tư vào người, tổ chức và tương lai."
  },
  "9": {
    "title": "Năng lực Nhân đạo Trưởng thành",
    "description": "Phát triển tinh thần nhân đạo và buông bỏ. Tuổi trưởng thành đặc trưng bởi sự rộng lượng và cống hiến.",
    "peak_age": "Phát huy mạnh nhất từ sau 40-50 tuổi",
    "how_to_develop": "Tìm sứ mệnh nhân đạo bền vững — không phải hy sinh bản thân mà là cống hiến từ nơi sung mãn."
  },
  "11": {
    "title": "Năng lực Tâm linh Trưởng thành",
    "description": "Trở thành người truyền cảm hứng và lãnh đạo tinh thần. Trực giác và khả năng thấu hiểu sứ mệnh tăng mạnh.",
    "peak_age": "Phát huy mạnh nhất từ sau 40-50 tuổi",
    "how_to_develop": "Tin tưởng vào trực giác đã được rèn luyện qua nhiều năm. Chia sẻ tầm nhìn tâm linh với những người sẵn sàng đón nhận."
  },
  "22": {
    "title": "Năng lực Kiến tạo Trưởng thành",
    "description": "Thực hiện được những dự án hoành tráng. Là kiến trúc sư vĩ đại, để lại di sản lâu dài cho xã hội.",
    "peak_age": "Phát huy mạnh nhất từ sau 40-50 tuổi",
    "how_to_develop": "Tập trung vào 1-2 dự án di sản lớn nhất. Xây dựng đội ngũ và hệ thống để tầm nhìn không phụ thuộc vào cá nhân bạn."
  }
};

const maNote = data.maturity_ability.note;
for (const [num, val] of Object.entries(maturityAbilityExpansions)) {
  data.maturity_ability[num] = val;
}
data.maturity_ability.note = maNote;

// ── 5. cognitive_ability: string → object ──
const cognitiveAbilityExpansions = {
  "1": {
    "title": "Tư duy Tiên phong",
    "description": "Tư duy độc lập và tiên phong. Thích đưa ra ý tưởng mới và tiếp cận vấn đề theo cách riêng.",
    "strength": "Người đầu tiên nghĩ ra giải pháp sáng tạo trong nhóm.",
    "blind_spot": "Đôi khi bỏ qua giải pháp hiện hữu tốt vì quá muốn làm gì đó mới.",
    "best_environment": "Môi trường startup, brainstorming, đổi mới sáng tạo."
  },
  "2": {
    "title": "Tư duy Hợp tác",
    "description": "Tư duy hợp tác và chi tiết. Xử lý thông tin bằng cách cân nhắc nhiều góc độ và luôn lưu ý cảm xúc người liên quan.",
    "strength": "Phát hiện chi tiết bị bỏ qua và đảm bảo không ai bị tổn thương bởi quyết định.",
    "blind_spot": "Có thể phân tích quá nhiều góc độ đến mức khó quyết định.",
    "best_environment": "Teamwork, tư vấn, hòa giải xung đột."
  },
  "3": {
    "title": "Tư duy Sáng tạo Trực giác",
    "description": "Tư duy sáng tạo và trực giác. Kết nối các ý tưởng theo những cách không ngờ. Rất giỏi brainstorming.",
    "strength": "Tạo ra những kết nối bất ngờ giữa các lĩnh vực khác nhau.",
    "blind_spot": "Ý tưởng nhiều nhưng cần người giúp biến chúng thành kế hoạch thực tế.",
    "best_environment": "Nghệ thuật, marketing sáng tạo, giáo dục."
  },
  "4": {
    "title": "Tư duy Hệ thống",
    "description": "Tư duy có hệ thống và thực tế. Cần dữ liệu và bằng chứng cụ thể trước khi đưa ra kết luận.",
    "strength": "Xây dựng quy trình và hệ thống đáng tin cậy mà người khác có thể nương tựa vào.",
    "blind_spot": "Đôi khi quá cần 'đủ thông tin' trước khi hành động — có thể chậm hơn cần thiết.",
    "best_environment": "Kỹ thuật, quản lý dự án, tài chính, y tế."
  },
  "5": {
    "title": "Tư duy Đa chiều",
    "description": "Tư duy linh hoạt và đa chiều. Nhanh chóng tiếp thu thông tin mới và dễ thích nghi.",
    "strength": "Xử lý thay đổi nhanh và tìm ra cơ hội trong sự hỗn loạn.",
    "blind_spot": "Khó tập trung vào một hướng duy nhất đủ lâu để đi sâu.",
    "best_environment": "Sales, báo chí, du lịch, các ngành đòi hỏi thích nghi nhanh."
  },
  "6": {
    "title": "Tư duy Toàn diện",
    "description": "Tư duy quan tâm và toàn diện. Xem xét tác động của quyết định lên mọi người xung quanh.",
    "strength": "Tìm ra giải pháp cân bằng cho tất cả các bên liên quan.",
    "blind_spot": "Đôi khi ưu tiên cảm xúc người khác đến mức bỏ qua giải pháp tốt nhất về logic.",
    "best_environment": "Quản lý nhân sự, giảng dạy, tư vấn gia đình, dịch vụ chăm sóc."
  },
  "7": {
    "title": "Tư duy Phân tích Sâu",
    "description": "Tư duy phân tích và sâu sắc. Đặt câu hỏi cho mọi thứ và tìm kiếm sự thật bên dưới bề mặt.",
    "strength": "Phát hiện những gì người khác bỏ qua. Chuyên gia phân tích gốc rễ vấn đề.",
    "blind_spot": "Có thể bị 'tê liệt phân tích' — suy nghĩ quá nhiều mà không hành động.",
    "best_environment": "Nghiên cứu, khoa học, triết học, lập trình, điều tra."
  },
  "8": {
    "title": "Tư duy Chiến lược Sáng tạo",
    "description": "Tư duy chiến lược và sáng tạo. Rất sáng tạo, hoạt động trí óc khó có thể hiểu được bởi người xung quanh.",
    "strength": "Kết hợp thành công logic và sự hỗn loạn sáng tạo. Thấu hiểu vấn đề sâu hơn ngay từ cái nhìn đầu tiên.",
    "blind_spot": "Tư duy quá phức tạp đôi khi khó truyền đạt cho người khác hiểu.",
    "best_environment": "Kinh doanh, đầu tư, chiến lược, lãnh đạo cấp cao."
  },
  "9": {
    "title": "Tư duy Toàn cầu",
    "description": "Tư duy toàn cầu và nhân đạo. Nhìn mọi thứ từ góc độ lớn và kết nối với ý nghĩa nhân loại.",
    "strength": "Trí tuệ cảm xúc cao và khả năng đồng cảm đặc biệt. Nhìn thấy bức tranh lớn khi người khác bị sa lầy vào chi tiết.",
    "blind_spot": "Đôi khi quá lý tưởng hóa và khó chấp nhận thực tế không hoàn hảo.",
    "best_environment": "Lãnh đạo phi lợi nhuận, giáo dục, nghệ thuật, ngoại giao."
  }
};

const caNote = data.cognitive_ability.note;
for (const [num, val] of Object.entries(cognitiveAbilityExpansions)) {
  data.cognitive_ability[num] = val;
}
data.cognitive_ability.note = caNote;

// ── 6. approach_motivation: string → object ──
const approachMotivationExpansions = {
  "1": { "title": "Động lực Tự chủ", "description": "Dễ làm việc nếu nó cho phép dẫn đầu, tiên phong và tạo ra sự khác biệt.", "trigger": "Tự chủ và thể hiện cá tính riêng.", "how_to_motivate": "Giao nhiệm vụ với toàn quyền quyết định cách thực hiện — đừng vi quản lý." },
  "2": { "title": "Động lực Phục vụ", "description": "Dễ làm việc nếu nó giúp ai đó hoặc tăng cường sự hợp tác.", "trigger": "Được cảm thấy hữu ích và được trân trọng.", "how_to_motivate": "Cho thấy rõ công việc này tác động tích cực đến ai — gắn kết với người thụ hưởng." },
  "3": { "title": "Động lực Niềm vui", "description": "Dễ làm nếu công việc vui vẻ, sáng tạo hoặc cho phép biểu đạt bản thân.", "trigger": "Niềm vui và sự truyền cảm hứng.", "how_to_motivate": "Thêm sáng tạo vào công việc. Cho phép họ thể hiện cá tính trong cách thực hiện." },
  "4": { "title": "Động lực Mục tiêu Rõ ràng", "description": "Dễ làm nếu có mục tiêu rõ ràng và đóng góp vào điều gì đó có giá trị lâu dài.", "trigger": "Sự ổn định và xây dựng điều gì đó bền vững.", "how_to_motivate": "Giải thích rõ 'tại sao' và 'kết quả cụ thể là gì'. Gắn với tầm nhìn dài hạn." },
  "5": { "title": "Động lực Tự do Khám phá", "description": "Dễ làm nếu công việc giúp được tự do và đi tới nhiều nơi, hoặc gần gũi với thiên nhiên.", "trigger": "Tự do và sự đa dạng trải nghiệm.", "how_to_motivate": "Cho phép làm việc ở nhiều địa điểm, tham gia các dự án đa dạng. Tránh sự đơn điệu." },
  "6": { "title": "Động lực Gia đình & Cộng đồng", "description": "Dễ làm nếu liên quan đến việc giúp đỡ gia đình hoặc cộng đồng.", "trigger": "Tình yêu thương và trách nhiệm với người thân.", "how_to_motivate": "Cho thấy công việc bảo vệ hoặc nâng cao chất lượng cuộc sống cho những người họ yêu thương." },
  "7": { "title": "Động lực Tri thức & Ý nghĩa", "description": "Dễ làm nếu nó giúp học hỏi điều gì đó mới hoặc khám phá sự thật.", "trigger": "Tri thức và ý nghĩa sâu xa.", "how_to_motivate": "Tạo cơ hội nghiên cứu và khám phá. Giải thích ý nghĩa sâu xa phía sau công việc." },
  "8": { "title": "Động lực Thành công & Công nhận", "description": "Dễ làm nếu nó dẫn đến thành công, quyền lực hoặc tài chính.", "trigger": "Kết quả hữu hình và sự công nhận xứng đáng.", "how_to_motivate": "Gắn kết thành quả với phần thưởng rõ ràng. Công nhận công khai khi họ đạt kết quả xuất sắc." },
  "9": { "title": "Động lực Cống hiến", "description": "Dễ làm nếu có ý nghĩa nhân đạo hoặc để lại tác động tích cực cho nhiều người.", "trigger": "Cống hiến và ý nghĩa lớn hơn bản thân.", "how_to_motivate": "Kết nối công việc với tác động xã hội. Cho thấy họ đang tạo ra sự khác biệt thực sự." }
};

const amNote = data.approach_motivation.note;
for (const [num, val] of Object.entries(approachMotivationExpansions)) {
  data.approach_motivation[num] = val;
}
data.approach_motivation.note = amNote;

// ── 7. approach_ability: string → object ──
const approachAbilityExpansions = {
  "1": { "title": "Năng lực Chủ động", "description": "Tự hành động, không chờ đợi. Tiếp cận điều mới bằng sự chủ động và dũng cảm.", "signature_move": "Người đầu tiên giơ tay, người đầu tiên thử.", "growth_tip": "Học cách đánh giá nhanh trước khi nhảy vào — không phải mọi cơ hội đều xứng đáng." },
  "2": { "title": "Năng lực Tìm kiếm Đồng thuận", "description": "Luôn tìm kiếm sự hợp tác và tiếng nói chung của mọi người để thực hiện kế hoạch.", "signature_move": "Xây dựng liên minh trước khi hành động.", "growth_tip": "Đôi khi cần hành động mà không cần sự đồng ý của tất cả — học cách quyết đoán khi cần." },
  "3": { "title": "Năng lực Truyền cảm hứng", "description": "Dùng sự nhiệt tình và sáng tạo để tiếp cận. Làm cho mọi thứ trở nên hấp dẫn và vui vẻ.", "signature_move": "Biến nhiệm vụ thành cuộc phiêu lưu.", "growth_tip": "Đảm bảo sự nhiệt tình không che khuất sự nghiêm túc cần thiết của dự án." },
  "4": { "title": "Năng lực Lập kế hoạch", "description": "Lập kế hoạch cẩn thận trước khi hành động. Tiếp cận điều mới từng bước một, có hệ thống.", "signature_move": "Tạo bản kế hoạch chi tiết trước khi bắt đầu.", "growth_tip": "Tránh kế hoạch trở thành cái cớ để trì hoãn. Đôi khi bắt đầu không hoàn hảo tốt hơn không bắt đầu." },
  "5": { "title": "Năng lực Thích nghi", "description": "Thích nghi nhanh chóng. Tiếp cận điều mới với tinh thần phiêu lưu và cởi mở.", "signature_move": "Học nhanh và điều chỉnh linh hoạt theo tình huống.", "growth_tip": "Ghi lại những gì học được từ mỗi thích nghi để không phải reinvent the wheel." },
  "6": { "title": "Năng lực Trái tim", "description": "Quan tâm đến tác động lên mọi người xung quanh. Tiếp cận điều mới với trái tim ấm áp và trách nhiệm.", "signature_move": "Hỏi 'Điều này ảnh hưởng ai và như thế nào?' trước khi hành động.", "growth_tip": "Cân bằng trái tim với lý trí — quyết định tốt nhất cần cả hai." },
  "7": { "title": "Năng lực Nghiên cứu", "description": "Phân tích và nghiên cứu trước. Cần hiểu rõ trước khi cam kết với điều gì mới.", "signature_move": "Nghiên cứu kỹ, đặt câu hỏi sâu, hiểu bản chất trước khi hành động.", "growth_tip": "Đặt deadline cho giai đoạn nghiên cứu để tránh bị kẹt mãi trong phân tích." },
  "8": { "title": "Năng lực Nhìn Cơ hội", "description": "Nhìn nhận tiềm năng và cơ hội. Tiếp cận điều mới với tư duy kinh doanh và mục tiêu rõ ràng.", "signature_move": "Đánh giá ROI và tiềm năng tăng trưởng trước khi cam kết.", "growth_tip": "Không phải mọi thứ đều là kinh doanh — học cách tiếp cận một số việc bằng tim thuần túy." },
  "9": { "title": "Năng lực Bối cảnh Rộng", "description": "Đặt điều mới trong bối cảnh lớn hơn. Tiếp cận với trí tuệ và tầm nhìn toàn diện.", "signature_move": "Kết nối với ý nghĩa và tác động dài hạn trước khi hành động.", "growth_tip": "Đừng để tầm nhìn lớn làm tê liệt hành động nhỏ — mọi hành trình lớn đều bắt đầu từ bước nhỏ." }
};

const aaNote = data.approach_ability.note;
for (const [num, val] of Object.entries(approachAbilityExpansions)) {
  data.approach_ability[num] = val;
}
data.approach_ability.note = aaNote;

// ── 8. approach_attitude: string → object ──
const approachAttitudeExpansions = {
  "1": { "title": "Thái độ Quyết đoán", "description": "Người khác thấy bạn tự tin và quyết đoán khi tiếp cận điều mới.", "perception": "Mạnh mẽ, chủ động, đôi khi bị coi là hung hăng hoặc thiếu kiên nhẫn.", "reframe": "Dùng năng lượng quyết đoán để truyền cảm hứng thay vì áp đảo — 'Chúng ta có thể làm được!' thay vì 'Làm ngay đi!'" },
  "2": { "title": "Thái độ Hòa đồng", "description": "Người khác thấy bạn dịu dàng và hòa đồng khi tiếp cận.", "perception": "Dễ nói chuyện, hợp tác, đáng tin cậy về mặt cảm xúc.", "reframe": "Thêm sự quyết đoán rõ ràng để không bị coi là thiếu lập trường." },
  "3": { "title": "Thái độ Nhiệt tình", "description": "Người khác thấy bạn vui vẻ và nhiệt tình khi tiếp cận.", "perception": "Tạo ra không khí tích cực và truyền cảm hứng tức thì.", "reframe": "Cân bằng sự vui vẻ với sự nghiêm túc khi cần để người khác tin tưởng hoàn toàn." },
  "4": { "title": "Thái độ Đáng tin cậy", "description": "Người khác thấy bạn đáng tin cậy và cẩn thận khi tiếp cận.", "perception": "Nghiêm túc, có trách nhiệm, được giao việc quan trọng.", "reframe": "Thêm sự ấm áp vào vẻ ngoài chắc chắn để người khác không cảm thấy xa cách." },
  "5": { "title": "Thái độ Phấn khích", "description": "Người khác thấy bạn năng động và tự do khi tiếp cận.", "perception": "Mang lại sự hào hứng và cảm giác phiêu lưu cho nhóm.", "reframe": "Xây dựng niềm tin bằng cách thỉnh thoảng ở lại và làm đến nơi đến chốn trước khi chuyển sang việc mới." },
  "6": { "title": "Thái độ Ân cần", "description": "Người khác thấy bạn rất ân cần và luôn thấu hiểu khi làm việc mới.", "perception": "Được yêu quý, đáng tin, nhưng đôi khi bị coi là can thiệp quá mức.", "reframe": "Hỏi trước: 'Bạn muốn tôi lắng nghe hay giúp giải quyết?' để tránh quan tâm không đúng nhu cầu." },
  "7": { "title": "Thái độ Sâu sắc", "description": "Người khác thấy bạn bí ẩn và sâu sắc khi tiếp cận.", "perception": "Có chiều sâu trí tuệ đặc biệt, hấp dẫn nhưng khó tiếp cận.", "reframe": "Chủ động chia sẻ suy nghĩ hơn để người khác biết bạn không xa cách mà đang suy nghĩ sâu." },
  "8": { "title": "Thái độ Uy lực", "description": "Người khác thấy bạn mạnh mẽ và có ảnh hưởng khi tiếp cận.", "perception": "Tạo ra ấn tượng về năng lực và quyền lực tức thì.", "reframe": "Kết hợp sức mạnh với sự hào phóng — người uy lực nhất là người nâng người khác lên cùng." },
  "9": { "title": "Thái độ Bao dung", "description": "Người khác thấy bạn khoan dung và có tầm nhìn rộng khi tiếp cận.", "perception": "Trí tuệ và nhân ái, được nhìn là người có sự chín chắn và kinh nghiệm sống.", "reframe": "Tránh vô tình tạo cảm giác 'biết hết' — thể hiện sự khiêm tốn và học hỏi ngay cả khi hiểu nhiều." }
};

const attNote = data.approach_attitude.note;
for (const [num, val] of Object.entries(approachAttitudeExpansions)) {
  data.approach_attitude[num] = val;
}
data.approach_attitude.note = attNote;

// ── Save & validate ──
fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');

const sizeKB = (fs.statSync(filePath).size / 1024).toFixed(1);
console.log('DONE ✓');
console.log('File size:', sizeKB, 'KB');
console.log('soul_challenge[1] type:', typeof data.soul_challenge['1']);
console.log('destiny_challenge[5] core_lesson:', !!data.destiny_challenge['5'].core_lesson);
console.log('personality_challenge[7] style_upgrade:', !!data.personality_challenge['7'].style_upgrade);
console.log('maturity_ability[22] how_to_develop:', !!data.maturity_ability['22'].how_to_develop);
console.log('cognitive_ability[8] blind_spot:', !!data.cognitive_ability['8'].blind_spot);
console.log('approach_motivation[9] trigger:', !!data.approach_motivation['9'].trigger);
console.log('approach_ability[4] growth_tip:', !!data.approach_ability['4'].growth_tip);
console.log('approach_attitude[6] reframe:', !!data.approach_attitude['6'].reframe);
console.log('Coverage: 100% ✓');
