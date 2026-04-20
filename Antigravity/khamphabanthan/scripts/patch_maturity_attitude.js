const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'numerology_knowledge_base.json');
const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

// ── MATURITY NUMBER expansions ──
// Current: single string. Expand to object with: title, description, theme, advice, warning
const maturityExpansions = {
  "1": {
    "title": "Trưởng thành qua Lãnh đạo & Độc lập",
    "description": "Cần có sự độc lập và tính cá nhân mạnh mẽ hơn ở nửa sau cuộc đời. Cẩn thận không trở thành kẻ bắt nạt.",
    "theme": "Sự trưởng thành ở tuổi trung niên và về già mang theo sức mạnh và sự khẳng định bản thân mạnh mẽ hơn. Đây là lúc bạn thực sự trở thành người tiên phong.",
    "life_lesson": "Học cách dẫn đầu một cách bao dung và khiêm tốn. Sức mạnh thật sự không cần phải chứng minh.",
    "advice": "Hãy dùng sự độc lập và kinh nghiệm tích lũy để dẫn dắt người khác. Nhưng luôn nhớ lắng nghe và học hỏi.",
    "warning": "Tránh cô lập bản thân hoặc trở nên cứng nhắc không thể thay đổi ở tuổi già."
  },
  "2": {
    "title": "Trưởng thành qua Hợp tác & Ngoại giao",
    "description": "Sự nhạy cảm, khéo léo và khả năng ngoại giao tăng lên. Phù hợp với công việc hậu trường.",
    "theme": "Ở nửa sau cuộc đời, bạn ngày càng coi trọng mối quan hệ và sự hòa hợp. Vai trò hòa giải và kết nối trở nên quan trọng hơn bao giờ hết.",
    "life_lesson": "Học cách yêu bản thân mình đủ nhiều như cách bạn yêu người khác. Sự hòa hợp thật sự bắt đầu từ bên trong.",
    "advice": "Dùng trí tuệ cảm xúc phong phú để xây dựng cầu nối giữa người và người. Đây là di sản quý giá nhất bạn để lại.",
    "warning": "Tránh hy sinh bản thân quá mức hoặc phụ thuộc cảm xúc vào người khác ở giai đoạn cuối đời."
  },
  "3": {
    "title": "Trưởng thành qua Biểu đạt & Sáng tạo",
    "description": "Trở nên hòa đồng và hướng ngoại hơn. Khả năng giao tiếp cải thiện, tiềm năng sáng tạo.",
    "theme": "Tuổi trung niên mở ra giai đoạn sáng tạo và biểu đạt mạnh mẽ nhất. Bạn tìm thấy tiếng nói và chất nghệ sĩ chân thật nhất của mình.",
    "life_lesson": "Sáng tạo không có tuổi. Giai đoạn này là lúc thoải mái nhất để chia sẻ quà tặng của bạn với thế giới.",
    "advice": "Đừng giữ lại sự sáng tạo — chia sẻ nó rộng rãi. Viết, hát, vẽ, dạy... bất cứ điều gì mang lại niềm vui.",
    "warning": "Tránh phân tán năng lượng vào quá nhiều dự án cùng lúc. Chọn một vài thứ và hoàn thiện chúng."
  },
  "4": {
    "title": "Trưởng thành qua Kỷ luật & Xây dựng",
    "description": "Trở thành người có kế hoạch, thực tế và có tổ chức hơn. Tránh quá cứng nhắc.",
    "theme": "Ở nửa sau cuộc đời, bạn ngày càng coi trọng sự ổn định, cam kết và xây dựng nền tảng vững chắc. Ước mơ trở nên thực tế hơn.",
    "life_lesson": "Sự kiên nhẫn và kỷ luật là những đức tính cao quý. Những gì bạn xây dựng sẽ tồn tại lâu hơn bạn.",
    "advice": "Dùng kinh nghiệm và sự thực tế để xây dựng những thứ có giá trị — gia đình, cộng đồng, di sản.",
    "warning": "Tránh trở nên quá cứng nhắc hoặc không thể thích nghi. Cuộc sống luôn yêu cầu sự linh hoạt."
  },
  "5": {
    "title": "Trưởng thành qua Tự do & Đổi mới",
    "description": "Du lịch, tự do và những sự kiện bất ngờ chi phối nửa sau cuộc đời.",
    "theme": "Giai đoạn trưởng thành mang đến sự giải phóng và phiêu lưu. Bạn càng ngày càng muốn thoát khỏi các ràng buộc và trải nghiệm thế giới rộng hơn.",
    "life_lesson": "Tự do thật sự đến từ bên trong — từ việc chấp nhận mọi thứ có thể thay đổi và vẫn giữ được sự bình yên.",
    "advice": "Cho phép bản thân khám phá những chân trời mới dù ở độ tuổi nào. Sự tò mò và tinh thần phiêu lưu là nguồn sức sống.",
    "warning": "Tránh chạy trốn khỏi trách nhiệm. Tự do thật sự là chọn lựa có ý thức, không phải né tránh."
  },
  "6": {
    "title": "Trưởng thành qua Phục vụ & Tình yêu",
    "description": "Gia đình, bạn bè và cộng đồng ngày càng quan trọng. Tuổi già an toàn.",
    "theme": "Ở giai đoạn trưởng thành, bạn trở thành trụ cột của gia đình và cộng đồng. Vai trò chăm sóc, nuôi dưỡng và tư vấn ngày càng trở nên trung tâm.",
    "life_lesson": "Tình yêu thương và phục vụ là di sản vĩ đại nhất. Tuổi già hạnh phúc đến từ những mối quan hệ sâu sắc.",
    "advice": "Dành thời gian và tình yêu cho gia đình và cộng đồng. Đây là khoản đầu tư tốt nhất cho giai đoạn về già.",
    "warning": "Tránh can thiệp quá mức vào cuộc sống của người thân. Cho phép họ tự trưởng thành."
  },
  "7": {
    "title": "Trưởng thành qua Tri thức & Tâm linh",
    "description": "Đề phòng trở nên ẩn dật. Trực giác phát triển mạnh, tiếp tục rèn luyện bản thân.",
    "theme": "Giai đoạn trưởng thành mang đến chiều sâu tâm linh và trí tuệ. Bạn ngày càng quan tâm đến ý nghĩa sâu xa của cuộc sống hơn là vật chất.",
    "life_lesson": "Tri thức thật sự không phải là thông tin mà là sự khôn ngoan — biết nên nói gì, làm gì và im lặng khi nào.",
    "advice": "Chia sẻ trí tuệ và kinh nghiệm với những người trẻ hơn. Đừng giữ lại những gì bạn đã học được.",
    "warning": "Tránh cô lập bản thân hoàn toàn. Mối kết nối với thế giới là nguồn nuôi dưỡng trí tuệ tươi mới."
  },
  "8": {
    "title": "Trưởng thành qua Quyền lực & Tài chính",
    "description": "Học cách tách khỏi thành công vật chất. Nguy cơ bị sự tích lũy chi phối.",
    "theme": "Giai đoạn trưởng thành mang lại đỉnh cao thành công vật chất. Nhưng bài học quan trọng nhất là nhận ra những gì thực sự có giá trị không thể mua bằng tiền.",
    "life_lesson": "Tiền bạc là công cụ, không phải mục đích. Sử dụng nó để tạo ra ý nghĩa và để lại di sản có giá trị.",
    "advice": "Dùng nguồn lực tích lũy để giúp đỡ người khác và xây dựng những thứ lớn lao hơn bản thân.",
    "warning": "Tránh để ám ảnh vật chất chi phối hạnh phúc. Sự giàu có mà thiếu bình yên không phải là thành công."
  },
  "9": {
    "title": "Trưởng thành qua Nhân đạo & Hoàn thiện",
    "description": "Trí tuệ, khiếu hài hước và tấm lòng nhân đạo phát triển. Đóng góp giá trị lâu dài.",
    "theme": "Giai đoạn trưởng thành mang đến sự khôn ngoan và tầm nhìn nhân đạo sâu sắc. Bạn ngày càng buông bỏ được những thứ không còn phục vụ mình và tập trung vào cống hiến.",
    "life_lesson": "Buông bỏ không phải là thất bại — đó là sự khôn ngoan tối thượng. Hoàn thiện bản thân là hành trình không bao giờ kết thúc.",
    "advice": "Dùng trí tuệ và kinh nghiệm nhân đạo để truyền cảm hứng cho thế hệ tiếp theo. Đây là di sản đẹp nhất.",
    "warning": "Tránh mang theo nỗi thất vọng về thế giới. Tập trung vào những gì bạn có thể làm tốt hơn."
  }
};

for (const [num, val] of Object.entries(maturityExpansions)) {
  data.maturity_number[num] = val;
}

// ── ATTITUDE NUMBER expansions ──
// Current: single string. Expand to object with: title, description, first_vibe, strength, blind_spot
const attitudeExpansions = {
  "1": {
    "title": "Thái độ Tiên phong & Độc lập",
    "description": "Người độc đáo, mang dấu ấn cá nhân riêng. Tự tin, có năng lực, bốc đồng.",
    "first_vibe": "Bạn toát ra năng lượng tự tin và chủ động ngay từ đầu. Người khác cảm nhận được sự quyết đoán trong cách bạn bước vào phòng.",
    "strength": "Khởi đầu mạnh mẽ, không ngại làm người đầu tiên thử điều mới. Bản năng dẫn dắt rất tự nhiên.",
    "blind_spot": "Có thể vô tình làm người khác cảm thấy bị bỏ lại phía sau. Cần học cách chậm lại và mang người khác cùng đi."
  },
  "2": {
    "title": "Thái độ Hợp tác & Nhạy cảm",
    "description": "Tử tế, ngoại giao tốt, kiên nhẫn. Cực kỳ nhạy cảm với năng lượng người khác.",
    "first_vibe": "Bạn tạo ra không khí an toàn và thân thiện ngay lập tức. Người khác cảm thấy được lắng nghe khi ở cạnh bạn.",
    "strength": "Đọc vị cảm xúc phòng cực giỏi. Biết chính xác ai cần gì và khi nào cần nói gì.",
    "blind_spot": "Dễ bị ảnh hưởng bởi năng lượng tiêu cực của người khác. Cần thiết lập ranh giới cảm xúc rõ ràng hơn."
  },
  "3": {
    "title": "Thái độ Lạc quan & Hài hước",
    "description": "Vui vẻ, vô tư nhưng nhạy cảm, sợ bị chỉ trích. Hóm hỉnh và thông minh.",
    "first_vibe": "Bạn làm sáng bừng không khí mọi nơi bạn có mặt. Nụ cười và năng lượng dương tính là thứ người khác nhớ đến đầu tiên.",
    "strength": "Khả năng hóa giải căng thẳng bằng sự hài hước và nhẹ nhàng. Làm người xung quanh cảm thấy thoải mái.",
    "blind_spot": "Đôi khi dùng sự vui vẻ để tránh các cuộc trò chuyện khó khăn. Cần học cách đối mặt trực tiếp hơn."
  },
  "4": {
    "title": "Thái độ Thực tế & Kỷ luật",
    "description": "Có vẻ bất cần hoặc lạnh lùng về mặt cảm xúc. Yêu thích quy tắc, sự công bằng.",
    "first_vibe": "Bạn trông có vẻ nghiêm túc và đáng tin cậy từ cái nhìn đầu tiên. Người khác cảm thấy họ có thể dựa vào bạn.",
    "strength": "Đáng tin cậy tuyệt đối và có kỷ luật cao. Khi bạn nói sẽ làm điều gì đó, mọi người biết nó sẽ được làm.",
    "blind_spot": "Có thể vô tình làm người khác cảm thấy bị đánh giá hoặc không đủ tiêu chuẩn. Cần ấm áp hơn trong giao tiếp."
  },
  "5": {
    "title": "Thái độ Phiêu lưu & Tự do",
    "description": "Sức hút để điều hướng cuộc sống. Thích phiêu lưu, không sợ gì.",
    "first_vibe": "Bạn tạo ra cảm giác phấn khích và bất ngờ dễ chịu. Người khác muốn theo bạn đến những nơi họ chưa từng dám đi.",
    "strength": "Khả năng thích nghi và tìm cơ hội trong mọi tình huống. Không bao giờ bị mắc kẹt lâu trong khó khăn.",
    "blind_spot": "Có thể khiến người khác lo lắng vì sự khó đoán. Cần tạo ra sự an tâm hơn trong các cam kết quan trọng."
  },
  "6": {
    "title": "Thái độ Chăm sóc & Trách nhiệm",
    "description": "Có năng lực, thông minh, nhanh trí. Cầu toàn với gu thẩm mỹ tuyệt vời.",
    "first_vibe": "Bạn tạo ra cảm giác ấm áp và được chào đón. Người khác cảm thấy ngay rằng bạn là người quan tâm đến họ thật lòng.",
    "strength": "Khả năng nhìn thấy nhu cầu của người khác trước khi họ nói ra. Tạo ra không gian an toàn và dễ chịu cho mọi người.",
    "blind_spot": "Tiêu chuẩn hoàn hảo đôi khi làm người khác cảm thấy không bao giờ đủ tốt. Học cách chấp nhận sự không hoàn hảo."
  },
  "7": {
    "title": "Thái độ Bí ẩn & Sâu sắc",
    "description": "Bầu không khí bí ẩn. Thích quan sát và đặt câu hỏi hơn chia sẻ. Hấp dẫn nhưng khó nắm bắt.",
    "first_vibe": "Bạn tạo ra sự tò mò ngay lập tức — người khác muốn biết bạn đang nghĩ gì nhưng không chắc dám hỏi.",
    "strength": "Quan sát sắc bén và đặt câu hỏi đúng vào đúng lúc. Hiểu được những gì người khác không nói ra.",
    "blind_spot": "Sự bí ẩn đôi khi bị hiểu nhầm là lạnh lùng hoặc kiêu ngạo. Cần chủ động chia sẻ hơn để xây dựng kết nối."
  },
  "8": {
    "title": "Thái độ Quyền lực & Tham vọng",
    "description": "Sinh ra để dẫn đầu, ước mơ lớn, duy trì hình ảnh thành công.",
    "first_vibe": "Bạn bước vào phòng và mọi người đều chú ý — không cần nói gì. Sự tự tin và quyền lực toát ra tự nhiên.",
    "strength": "Năng lực lãnh đạo và tầm nhìn chiến lược tự nhiên. Người khác muốn theo dõi bạn và học hỏi từ bạn.",
    "blind_spot": "Đôi khi làm người khác cảm thấy bị đe dọa hoặc không quan trọng. Cần thể hiện sự đánh giá cao và ủy quyền nhiều hơn."
  },
  "9": {
    "title": "Thái độ Nhân đạo & Quyến rũ",
    "description": "Tự tin và có sức quyến rũ. Mọi người yêu quý hoặc coi thường bạn.",
    "first_vibe": "Bạn tạo ra cảm giác rộng lớn và bao dung. Người khác cảm thấy được chào đón và chấp nhận dù họ là ai.",
    "strength": "Sức hút tự nhiên và khả năng kết nối với mọi loại người. Hiểu được góc nhìn đa chiều của mỗi tình huống.",
    "blind_spot": "Đôi khi khó đưa ra lập trường rõ ràng vì muốn dung hòa mọi phía. Cần học cách quyết đoán hơn khi cần thiết."
  },
  "11": {
    "title": "Thái độ Tâm linh & Truyền cảm hứng",
    "description": "Trực giác nhạy bén thêm vào các đặc điểm của số 2. Tốt nhất khi truyền cảm hứng.",
    "first_vibe": "Bạn tạo ra cảm giác huyền bí và đặc biệt — như có điều gì đó khác lạ và hấp dẫn quanh bạn mà người khác khó giải thích.",
    "strength": "Trực giác tâm linh cho phép bạn cảm nhận điều người khác không thể thấy. Năng lực truyền cảm hứng tự nhiên và mạnh mẽ.",
    "blind_spot": "Đôi khi quá nhạy cảm với năng lượng xung quanh dẫn đến kiệt sức. Cần học cách bảo vệ năng lượng cá nhân."
  },
  "22": {
    "title": "Thái độ Kiến tạo & Uy nghi",
    "description": "Năng lượng số 4 + khả năng kiến tạo giá trị lâu dài.",
    "first_vibe": "Bạn toát ra uy nghi và tầm nhìn lớn. Người khác ngay lập tức cảm nhận được rằng bạn đang xây dựng điều gì đó quan trọng.",
    "strength": "Khả năng biến tầm nhìn lớn thành kế hoạch thực tế là siêu năng lực hiếm có. Người khác tin tưởng bạn với những dự án quan trọng.",
    "blind_spot": "Đôi khi mang gánh nặng quá lớn một mình. Cần học cách chia sẻ tầm nhìn và ủy quyền để không bị kiệt sức."
  },
  "33": {
    "title": "Thái độ Chữa lành & Yêu thương",
    "description": "Có năng lực, thông minh + sức ảnh hưởng của 33.",
    "first_vibe": "Bạn tạo ra cảm giác an toàn và chữa lành tức thì. Người khác cảm thấy được chấp nhận và hiểu thấu chỉ bằng sự hiện diện của bạn.",
    "strength": "Tình yêu thương chân thành và khả năng chữa lành cảm xúc là những món quà vô giá. Bạn thay đổi cuộc đời người khác đơn giản chỉ bằng sự quan tâm.",
    "blind_spot": "Dễ bị kiệt sức vì hấp thu cảm xúc của người khác. Cần học cách bảo vệ năng lượng và đặt ranh giới lành mạnh."
  }
};

for (const [num, val] of Object.entries(attitudeExpansions)) {
  data.attitude_number[num] = val;
}

fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
console.log('DONE');
console.log('maturity[1]:', typeof data.maturity_number['1'] === 'object' ? 'object OK' : 'FAIL');
console.log('maturity[9] advice:', !!data.maturity_number['9'].advice);
console.log('attitude[1]:', typeof data.attitude_number['1'] === 'object' ? 'object OK' : 'FAIL');
console.log('attitude[33] blind_spot:', !!data.attitude_number['33'].blind_spot);
console.log('File size:', (fs.statSync(filePath).size / 1024).toFixed(1), 'KB');
