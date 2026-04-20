/**
 * NARRATIVE_TEMPLATES.JS
 * Pre-written literary narrative templates cho từng số (1-9, 11, 22)
 * Văn phong: Sâu sắc, văn hoa, mang tính cá nhân hóa - giống PDF TSHTD_Thái_2026
 */
'use strict';

const NarrativeTemplates = {

  // ════════════════════════════════════════════════════════════════════
  // CHỈ SỐ ĐƯỜNG ĐỜI (LIFE PATH / SỐ CHỦ ĐẠO)
  // Gọi: NT.lifePath(num, name)
  // ════════════════════════════════════════════════════════════════════
  lifePath: {
    1: (name) => `<p class="nar">Trong vũ trụ bao la của những rung động số học, <strong>Con Số 1</strong> được mệnh danh là <em>"Người Khai Sáng"</em> — vị tiên phong đứng ở điểm khởi đầu của mọi chu kỳ. Và chính bạn, <strong>${name}</strong>, đang mang trên mình sứ mệnh hùng vĩ đó: trở thành người đi trước, người mở đường, người không sợ đứng một mình dù cả thế giới chọn lối khác.</p>

<p class="nar">Thiên nhiên trao cho bạn một nội lực đặc biệt mà rất ít người có được — đó là <strong>ý chí thép và bản năng lãnh đạo bẩm sinh</strong>. Trong khi người khác còn đang cân nhắc, bạn đã hành động. Trong khi người khác còn tranh luận, bạn đã có câu trả lời. Bạn không chờ đợi cơ hội — bạn tự tạo ra cơ hội, đập vỡ mọi rào cản bằng năng lượng không ngừng nghỉ của mình.</p>

<div class="lp-section-title">TÍNH CÁCH NỔI TRỘI CỦA BẠN</div>
<ul class="lp-traits">
  <li><strong>Điểm mạnh nổi bật:</strong> Tự lập, quyết đoán, tư duy tiên phong, ý chí mạnh, tự tin, sáng tạo trong hành động, có khả năng lãnh đạo tự nhiên</li>
  <li><strong>Điểm yếu cần chú ý:</strong> Dễ bướng bỉnh, cái tôi cao, kém kiên nhẫn, đôi khi thiếu khả năng lắng nghe, có xu hướng độc đoán</li>
</ul>

<div class="lp-section-title">ĐIỂM MẠNH CỦA BẠN</div>
<ul class="lp-strengths">
  <li><p>- Mang năng lượng đường đời số <strong>1</strong>, <strong>${name}</strong> có khả năng tự khởi xướng mà không cần ai bảo. Bạn nhìn thấy vấn đề và ngay lập tức có phản xạ tìm giải pháp — thay vì ngồi chờ người khác chỉ đường. Đây là tố chất lãnh đạo bẩm sinh hiếm có trong thế giới đầy do dự.</p></li>
  <li><p>- Bạn có <strong>ý chí kiên cường vượt trội</strong> — khi đã quyết định điều gì, bạn sẽ theo đuổi đến cùng bất kể trở ngại. Chính sức bền tinh thần này là thứ vũ khí mạnh nhất của bạn, giúp bạn vượt qua những thách thức mà người khác sẽ bỏ cuộc từ sớm.</p></li>
  <li><p>- <strong>Tư duy độc lập và can đảm đưa ra quyết định</strong>: Bạn không cần sự đồng thuận của đám đông để hành động theo điều mình tin là đúng. Điều này tạo ra sự rõ ràng và tốc độ trong tư duy mà những người phụ thuộc vào ý kiến người khác thiếu hoàn toàn.</p></li>
  <li><p>- <strong>Năng lượng tiên phong sáng tạo</strong>: Bạn không ngại thử những điều chưa ai làm. Thay vì sao chép công thức thành công của người khác, bạn thích tự tìm ra con đường riêng — và đôi khi chính những con đường tưởng chừng liều lĩnh đó lại đưa bạn đến những kết quả đột phá ngoài mong đợi.</p></li>
  <li><p>- <strong>Sức hút tự nhiên của người đi trước</strong>: Khi bạn tin vào điều gì và hành động từ sự tin đó, người xung quanh tự nhiên bị cuốn theo. Bạn không cần chức danh hay địa vị để được coi là lãnh đạo — chính năng lượng và sự tự tin chắc chắn của bạn đã làm điều đó.</p></li>
  <li><p>- <strong>Khả năng phục hồi sau thất bại nhanh chóng</strong>: Bạn không để thất bại định nghĩa mình. Thất bại với bạn chỉ là dữ liệu để điều chỉnh chiến lược — không phải bằng chứng về sự bất tài. Chính tinh thần này giúp bạn liên tục tiến về phía trước khi người khác đã dừng lại.</p></li>
</ul>

<div class="lp-section-title">ĐIỂM YẾU CỦA BẠN</div>
<ul class="lp-weaknesses">
  <li><p>- Người khác đôi khi cảm thấy <strong>${name}</strong> quá thiếu kiên nhẫn và khó gần. Vì bạn di chuyển nhanh hơn đa số, bạn dễ mất kiên nhẫn với sự chậm trễ, lặp lại hay thiếu quyết đoán của người khác — và điều đó đôi khi khiến bạn trở nên bị nhìn nhận là lạnh lùng, độc đoán hơn thực tế.</p></li>
  <li><p>- <strong>Cái tôi mạnh là con dao hai lưỡi</strong>: Nó giúp bạn không bị xô ngã, nhưng đôi khi ngăn bạn tiếp nhận phản hồi có giá trị, thừa nhận sai lầm hay hỏi xin giúp đỡ khi thực sự cần. Học cách để cái tôi phục vụ bạn thay vì kìm hãm bạn là bài học cốt lõi của đường đời số 1.</p></li>
  <li><p>- <strong>Xu hướng làm việc một mình quá mức</strong> có thể giới hạn những gì bạn có thể đạt được. Những thứ thực sự vĩ đại hiếm khi được tạo ra bởi một người — chúng được tạo ra bởi những người biết cách tập hợp những người tốt nhất xung quanh mình. Đây là điểm bạn cần chủ động phát triển.</p></li>
  <li><p>- <strong>Cô đơn trong đám đông</strong> là trải nghiệm quen thuộc: Vì bạn thường nhìn thấy những điều mà người khác chưa thấy, bạn đôi khi cảm thấy không ai thực sự hiểu bạn. Hãy tìm những người có thể đi ở cùng tốc độ với bạn — họ tồn tại, chỉ là cần thời gian để tìm ra.</p></li>
</ul>`,

    2: (name) => `<p class="nar"><strong>${name}</strong>, bạn được sinh ra mang rung động thuần khiết của <strong>Con Số 2</strong> — biểu tượng của <em>sự hài hòa, nhạy cảm và tình yêu thương vô điều kiện</em>. Nếu số 1 là ngọn lửa khai sáng, thì số 2 là dòng nước dịu dàng có thể len lỏi vào mọi kẽ hở và hàn gắn mọi vết thương.</p>

<p class="nar">Bạn sở hữu một siêu năng lực mà thế giới ngày càng khan hiếm: <strong>khả năng thấu cảm sâu sắc</strong>. Bạn cảm nhận được cảm xúc người khác như chính cảm xúc của mình. Bạn đọc được ngôn ngữ phi lời — những điều không được nói, những nỗi đau chưa được đặt tên — và bạn biết chính xác cần làm gì để xoa dịu chúng.</p>

<div class="lp-section-title">TÍNH CÁCH NỔI TRỘI CỦA BẠN</div>
<ul class="lp-traits">
  <li><strong>Điểm mạnh nổi bật:</strong> Nhạy cảm tinh tế, kỹ năng ngoại giao, kiên nhẫn, khả năng lắng nghe sâu, trực giác mạnh, khéo léo trong hợp tác và xây dựng quan hệ</li>
  <li><strong>Điểm yếu cần chú ý:</strong> Thiếu quyết đoán, dễ bị ảnh hưởng bởi cảm xúc người khác, khó đặt ranh giới, hay tự nghi ngờ bản thân</li>
</ul>

<div class="lp-section-title">ĐIỂM MẠNH CỦA BẠN</div>
<ul class="lp-strengths">
  <li><p>- Mang năng lượng đường đời số <strong>2</strong>, <strong>${name}</strong> có khả năng cảm nhận và đọc người khác ở mức độ mà rất ít người đạt được. Bạn biết người kia đang cảm thấy gì trước khi họ nói ra — và khả năng này làm cho bạn trở thành người đồng hành, người tư vấn và người hòa giải lý tưởng trong mọi mối quan hệ.</p></li>
  <li><p>- <strong>Kỹ năng ngoại giao và hòa giải vượt trội</strong>: Bạn có thể tìm ra điểm chung giữa hai quan điểm đối lập mà không làm tổn thương bất kỳ ai. Đây là năng lực cực kỳ quý giá trong thế giới hiện đại — nơi xung đột và hiểu lầm là phổ biến và sự hòa giải tinh tế là hiếm.</p></li>
  <li><p>- <strong>Kiên nhẫn chiến lược</strong>: Bạn không vội vàng. Bạn hiểu rằng những thứ tốt nhất cần thời gian để phát triển. Đây là đức tính hiếm có giúp bạn xây dựng được những mối quan hệ và nền tảng bền vững trong khi những người nóng vội phá hỏng công sức của mình.</p></li>
  <li><p>- <strong>Sức mạnh trong hợp tác</strong>: Bạn là chất xúc tác giúp nhóm hoạt động trơn tru. Bạn biết ai cần gì, ai phù hợp với vai trò nào và làm thế nào để mọi người cảm thấy được trân trọng. Nhiều thành công lớn âm thầm ghi dấu ấn của bàn tay số 2 ở phía sau hậu trường.</p></li>
  <li><p>- <strong>Trực giác nhạy bén</strong>: Bạn có khả năng linh cảm về con người và tình huống mà rất khó giải thích bằng lý trí thuần túy. Khi bạn học được cách tin vào những tín hiệu nội tâm này và hành động theo chúng, bạn sẽ đưa ra những quyết định chính xác đến đáng ngạc nhiên.</p></li>
</ul>

<div class="lp-section-title">ĐIỂM YẾU CỦA BẠN</div>
<ul class="lp-weaknesses">
  <li><p>- <strong>Thiếu quyết đoán</strong> là thách thức lớn nhất của <strong>${name}</strong>. Vì luôn xem xét cảm xúc và quan điểm của tất cả mọi người, bạn đôi khi không thể đưa ra quyết định dứt khoát — đặc biệt khi phải chọn giữa những thứ có thể làm ai đó thất vọng. Hãy thực hành quyết định nhỏ mỗi ngày để xây dựng cơ bắp quyết đoán này.</p></li>
  <li><p>- <strong>Dễ bị ảnh hưởng bởi năng lượng tiêu cực</strong>: Sự nhạy cảm của bạn là quà tặng, nhưng nó cũng có nghĩa là bạn hấp thụ cảm xúc xung quanh như miếng bọt biển — bao gồm cả những cảm xúc không phải của bạn. Học cách bảo vệ năng lượng của mình và nhận ra đâu là cảm xúc của bạn, đâu là cảm xúc bạn đang "mang hộ" người khác.</p></li>
  <li><p>- <strong>Khó nói không</strong>: Nỗi sợ làm mất lòng người khác khiến bạn đôi khi cố nhận những điều ngoài khả năng của mình, chịu đựng những tình huống không lành mạnh hoặc đặt nhu cầu người khác lên trên nhu cầu chính đáng của bản thân. Ranh giới lành mạnh không phải là ích kỷ — chúng là tự trọng.</p></li>
  <li><p>- <strong>Tự nghi ngờ</strong> là kẻ thù thầm lặng: Bạn thường xuyên đặt câu hỏi về quyết định của mình, tự hỏi liệu mình có đủ không, có đúng không. Hãy học cách tin vào trực giác của mình — nó thường đúng hơn bạn nghĩ.</p></li>
</ul>`,

    3: (name) => `<p class="nar">Vũ trụ đã tặng cho bạn, <strong>${name}</strong>, một trong những món quà quý giá nhất mà nó có: <strong>Rung động của Con Số 3 — Người Nghệ Sĩ, Người Kể Chuyện, Người Mang Ánh Sáng</strong>. Bạn không chỉ sống cuộc đời — bạn PHÁT SÁNG trong cuộc đời.</p>

<p class="nar">Bạn có khả năng biến mọi điều bình thường thành phi thường. Một buổi chiều tầm thường qua lăng kính của bạn trở thành một câu chuyện đáng được kể lại. Một ý tưởng đơn giản qua đôi tay sáng tạo của bạn trở thành một tác phẩm nghệ thuật. <strong>Ngôn ngữ là vũ khí của bạn, sự hài hước là lá chắn, nghệ thuật là ngôi nhà tâm hồn</strong>.</p>

<div class="lp-section-title">TÍNH CÁCH NỔI TRỘI CỦA BẠN</div>
<ul class="lp-traits">
  <li><strong>Điểm mạnh nổi bật:</strong> Sáng tạo vượt trội, kỹ năng giao tiếp xuất sắc, lạc quan tự nhiên, khiếu hài hước và nghệ thuật, khả năng kết nối và truyền cảm hứng cho người khác</li>
  <li><strong>Điểm yếu cần chú ý:</strong> Thiếu kỷ luật, dễ phân tán, bốc đồng theo cảm xúc, hay bắt đầu nhiều thứ mà không hoàn thành, có thể né tránh thực tế bằng sự vui vẻ bề mặt</li>
</ul>

<div class="lp-section-title">ĐIỂM MẠNH CỦA BẠN</div>
<ul class="lp-strengths">
  <li><p>- Mang năng lượng đường đời số <strong>3</strong>, <strong>${name}</strong> có khả năng biểu đạt bản thân bằng ngôn ngữ — nói hoặc viết — ở mức độ mà người khác không thể bắt chước. Lời nói của bạn có sức mạnh lay chuyển và truyền cảm hứng. Người xung quanh nhớ những gì bạn nói vì bạn nói bằng cả trái tim, không phải chỉ bằng đầu óc.</p></li>
  <li><p>- <strong>Sức sáng tạo không ngừng</strong>: Tư duy của bạn không vận hành theo đường thẳng — nó nhảy múa, tìm kiếm những góc nhìn khác thường và tạo ra những kết nối bất ngờ mà người khác không thể thấy. Đây là nguồn gốc của sự đổi mới thực sự — không phải tư duy tuyến tính mà là tư duy đa chiều sáng tạo.</p></li>
  <li><p>- <strong>Kỹ năng kết nối xã hội tự nhiên</strong>: Bạn làm cho người khác cảm thấy thoải mái, được chào đón và vui vẻ chỉ bằng sự hiện diện của mình. Đây là một thiên phú thực sự — và là nền tảng cho những sự nghiệp thành công trong bán hàng, dạy học, truyền thông, lãnh đạo và bất kỳ lĩnh vực nào liên quan đến con người.</p></li>
  <li><p>- <strong>Lạc quan bẩm sinh</strong>: Bạn nhìn thấy khả năng và điểm tích cực trong những tình huống mà người khác chỉ thấy vấn đề. Năng lượng này là tài sản vô giá — không chỉ cho bản thân bạn mà còn cho tất cả những người may mắn được ở gần bạn trong những giai đoạn khó khăn.</p></li>
  <li><p>- <strong>Tài năng nghệ thuật đa dạng</strong>: Dù là viết lách, âm nhạc, hội họa, diễn xuất hay bất kỳ hình thức nghệ thuật nào khác — bạn đều có khả năng tiếp cận và phát triển với tốc độ nhanh hơn mức trung bình. Nghệ thuật là ngôn ngữ tự nhiên của linh hồn số 3.</p></li>
</ul>

<div class="lp-section-title">ĐIỂM YẾU CỦA BẠN</div>
<ul class="lp-weaknesses">
  <li><p>- <strong>Kỷ luật và sự kiên trì là thách thức lớn nhất</strong> của <strong>${name}</strong>. Bạn bắt đầu rất nhiều thứ với năng lượng bùng cháy — nhưng khi sự mới mẻ qua đi và công việc thực sự đòi hỏi sự lặp lại kiên nhẫn, bạn dễ mất hứng và tìm kiếm điều tiếp theo. Thành công bền vững đòi hỏi bạn phải học cách hoàn thành — không chỉ bắt đầu.</p></li>
  <li><p>- <strong>Phân tán năng lượng</strong>: Vì có quá nhiều tài năng và sở thích, bạn dễ trở thành "người biết tất cả nhưng không chuyên về thứ gì". Hãy chọn một hoặc hai lĩnh vực để đào sâu thực sự — chiều sâu tạo ra sự khác biệt, không phải chiều rộng.</p></li>
  <li><p>- <strong>Cảm xúc bất ổn theo hoàn cảnh</strong>: Bạn có thể dao động từ hứng khởi tột cùng sang mất hứng hoàn toàn chỉ trong vài giờ. Sự bốc đồng cảm xúc này có thể ảnh hưởng đến chất lượng công việc, các mối quan hệ và khả năng lập kế hoạch dài hạn của bạn.</p></li>
  <li><p>- <strong>Né tránh thực tế bằng "vui vẻ"</strong>: Sự lạc quan của bạn đôi khi biến thành vũ khí phòng thủ — bạn dùng tiếng cười và sự sôi động để tránh đối mặt với những vấn đề thực sự trong cuộc sống. Những vấn đề né tránh không biến mất — chúng chỉ tích lũy cho đến khi không thể bỏ qua được nữa.</p></li>
</ul>`,

    4: (name) => `<p class="nar"><strong>${name}</strong>, bạn mang trong mình năng lượng của <strong>Con Số 4 — Người Kiến Tạo Nền Tảng</strong>. Nếu cuộc sống là một tòa lâu đài, thì bạn chính là người đặt từng viên đá móng với sự kiên nhẫn và chính xác tuyệt đối. Không ai xây dựng được thứ gì bền vững mà không có sự hiện diện của năng lượng số 4.</p>

<p class="nar">Bạn tin vào <strong>sức mạnh của sự kiên định và kỷ luật</strong>. Trong khi người khác tìm kiếm đường tắt, bạn chọn con đường dài hơn nhưng chắc chắn hơn. Trong khi người khác xây lâu đài trên cát, bạn xây trên đá — và đó là lý do vì sao những gì bạn tạo ra có thể trường tồn với thời gian.</p>

<div class="lp-section-title">TÍNH CÁCH NỔI TRỘI CỦA BẠN</div>
<ul class="lp-traits">
  <li><strong>Điểm mạnh nổi bật:</strong> Kỷ luật cao, đáng tin cậy, chăm chỉ bền bỉ, tỉ mỉ, thực tế, có khả năng tổ chức và lập kế hoạch xuất sắc, trung thành và đáng tin cậy trong mọi mối quan hệ</li>
  <li><strong>Điểm yếu cần chú ý:</strong> Cứng nhắc với thay đổi, hay làm việc quá sức, bảo thủ, thiếu linh hoạt, đặt tiêu chuẩn quá cao cho bản thân và người khác</li>
</ul>

<div class="lp-section-title">ĐIỂM MẠNH CỦA BẠN</div>
<ul class="lp-strengths">
  <li><p>- Mang năng lượng đường đời số <strong>4</strong>, <strong>${name}</strong> là người mà người khác tìm đến khi họ cần sự ổn định và đáng tin cậy. Bạn nói là làm, hứa là giữ — và sự nhất quán đó xây dựng uy tín theo thời gian theo cách mà không kỹ năng hay tài năng nào có thể thay thế được. Trong một thế giới đầy những con người nói một đằng làm một nẻo, bạn là ngoại lệ hiếm hoi.</p></li>
  <li><p>- <strong>Khả năng tổ chức và hệ thống hóa vượt trội</strong>: Bạn nhìn vào sự hỗn loạn và tự động thấy cấu trúc tiềm ẩn bên trong. Bạn biết cách chia nhỏ vấn đề lớn thành từng bước có thể thực hiện được — và thực thi chúng một cách nhất quán. Đây là năng lực cực kỳ quý giá trong quản lý, kỹ thuật và bất kỳ lĩnh vực nào đòi hỏi sự chính xác.</p></li>
  <li><p>- <strong>Đạo đức làm việc phi thường</strong>: Bạn không ngại công việc khó khăn, lặp đi lặp lại hay đòi hỏi thời gian dài. Trong khi người khác tìm kiếm cách làm ít hơn để được nhiều hơn, bạn hiểu rằng sự xuất sắc thực sự đến từ việc làm đúng, làm đủ và làm đến khi hoàn thành.</p></li>
  <li><p>- <strong>Tư duy thực tế và giải quyết vấn đề hiệu quả</strong>: Bạn không bị mắc kẹt trong lý thuyết hay ý tưởng mơ hồ. Bạn hỏi: "Điều này hoạt động trong thực tế như thế nào?" và tập trung vào những giải pháp có thể triển khai được, không phải những gì nghe hay nhưng không thể thực hiện.</p></li>
  <li><p>- <strong>Sự trung thành sâu sắc</strong>: Trong tình yêu và tình bạn, bạn là người ở lại khi mọi người khác rời đi. Bạn không từ bỏ dễ dàng — và điều đó tạo ra những mối quan hệ có chiều sâu và bền vững mà người khác chỉ ao ước.</p></li>
</ul>

<div class="lp-section-title">ĐIỂM YẾU CỦA BẠN</div>
<ul class="lp-weaknesses">
  <li><p>- <strong>Cứng nhắc và khó thích nghi</strong> là thách thức chính của <strong>${name}</strong>. Khi kế hoạch thay đổi hay hoàn cảnh đòi hỏi sự uyển chuyển, bạn dễ trở nên căng thẳng và kháng cự. Hãy luyện tập nhìn sự thay đổi như một cơ hội điều chỉnh, không phải một mối đe dọa đến sự ổn định bạn đã xây dựng vất vả.</p></li>
  <li><p>- <strong>Làm việc quá mức đến kiệt sức</strong>: Bạn có xu hướng gánh nhiều hơn khả năng chịu đựng — vì bạn tin rằng nếu muốn làm đúng thì phải tự làm. Nhưng không ai có thể cho đi liên tục mà không nạp lại. Nghỉ ngơi không phải là lười biếng — đó là chiến lược bền vững.</p></li>
  <li><p>- <strong>Tiêu chuẩn quá cao</strong> đôi khi trở thành gánh nặng: Bạn kỳ vọng nhiều từ bản thân và người xung quanh — và khi thực tế không đáp ứng kỳ vọng đó, bạn dễ thất vọng và chỉ trích. Học cách chấp nhận "đủ tốt" trong những tình huống không cần sự hoàn hảo sẽ giảm đáng kể stress trong cuộc sống của bạn.</p></li>
  <li><p>- <strong>Đôi khi bỏ lỡ niềm vui của hiện tại</strong> vì quá tập trung vào kế hoạch và tương lai. Cuộc sống không chỉ là những gì bạn xây dựng — mà còn là những khoảnh khắc bạn sống trọn vẹn trong quá trình xây dựng đó.</p></li>
</ul>`,

    5: (name) => `<p class="nar">Nếu có một từ duy nhất để miêu tả bạn, <strong>${name}</strong>, đó sẽ là: <strong>TỰ DO</strong>. Bạn mang rung động của <strong>Con Số 5 — Linh Hồn Phiêu Lãng</strong>, người được vũ trụ trao sứ mệnh khám phá mọi biên giới, phá vỡ mọi giới hạn và trải nghiệm cuộc sống ở mức độ đầy đủ nhất có thể.</p>

<p class="nar">Bạn không sinh ra để ngồi yên một chỗ. Tò mò trí tuệ của bạn rộng lớn như đại dương — bạn muốn biết mọi thứ, hiểu mọi thứ, chạm vào mọi thứ. <strong>Khả năng thích nghi phi thường</strong> khiến bạn có thể tỏa sáng trong hầu hết mọi môi trường, mọi nền văn hóa, mọi hoàn cảnh.</p>

<div class="lp-section-title">TÍNH CÁCH NỔI TRỘI CỦA BẠN</div>
<ul class="lp-traits">
  <li><strong>Điểm mạnh nổi bật:</strong> Thích nghi nhanh, đa tài, kỹ năng giao tiếp và thuyết phục tốt, tò mò trí tuệ, năng động, dũng cảm với thay đổi và trải nghiệm mới</li>
  <li><strong>Điểm yếu cần chú ý:</strong> Sợ cam kết, thiếu kiên nhẫn, hay bỏ cuộc giữa chừng, dễ bị phân tán bởi những điều mới, đôi khi thái quá với các giác quan</li>
</ul>

<div class="lp-section-title">ĐIỂM MẠNH CỦA BẠN</div>
<ul class="lp-strengths">
  <li><p>- Mang năng lượng đường đời số <strong>5</strong>, <strong>${name}</strong> có khả năng thích nghi với bất kỳ hoàn cảnh nào ở tốc độ đáng kinh ngạc. Trong khi người khác cần hàng tuần để làm quen với một tình huống mới, bạn làm chủ nó trong vài ngày. Đây là tài sản vô giá trong một thế giới thay đổi nhanh, nơi sự linh hoạt là kỹ năng sinh tồn.</p></li>
  <li><p>- <strong>Kỹ năng giao tiếp và thuyết phục tự nhiên</strong>: Bạn có thể nói chuyện với bất kỳ ai về bất kỳ chủ đề nào và khiến người đó cảm thấy bạn thực sự quan tâm — vì bạn thực sự quan tâm. Sự tò mò chân thực của bạn về con người tạo ra sức hút không thể giả tạo.</p></li>
  <li><p>- <strong>Dũng cảm với sự thay đổi</strong>: Thay vì né tránh những điều chưa biết, bạn đón chào chúng. Khả năng bước vào vùng không thoải mái mà không bị tê liệt bởi nỗi sợ là một trong những điểm mạnh hiếm có nhất mà một người có thể có.</p></li>
  <li><p>- <strong>Đa tài và học nhanh</strong>: Bạn có thể tiếp thu kỹ năng mới với tốc độ nhanh hơn hầu hết mọi người. Đây giúp bạn tạo ra sự nghiệp đa dạng, phong phú và không bị giới hạn bởi một chuyên môn duy nhất.</p></li>
  <li><p>- <strong>Truyền năng lượng sống động</strong>: Khi bạn xuất hiện với sự hứng khởi và tươi mới, năng lượng xung quanh thay đổi. Bạn là người mang sinh khí vào những chỗ trì trệ và thổi làn gió mới vào những dự án đang mất đà.</p></li>
</ul>

<div class="lp-section-title">ĐIỂM YẾU CỦA BẠN</div>
<ul class="lp-weaknesses">
  <li><p>- <strong>Thiếu kiên trì đến cùng</strong> là điểm yếu cốt lõi của <strong>${name}</strong>. Bạn bắt đầu mọi thứ với năng lượng rực cháy, nhưng khi sự mới mẻ qua đi và công việc trở nên đòi hỏi sự kiên nhẫn, bạn dễ tìm kiếm "điều tiếp theo". Hãy thực hành cam kết với một dự án qua giai đoạn khó khăn — phần thưởng thường chỉ đến sau khi vượt qua điểm đó.</p></li>
  <li><p>- <strong>Sợ cam kết</strong> không chỉ trong tình yêu mà còn trong sự nghiệp và cuộc sống nói chung. Bạn lo sợ rằng cam kết với một thứ nghĩa là đóng cánh cửa với tất cả những thứ khác. Nhưng thực tế, sự cam kết sâu sắc thường mở ra nhiều cơ hội hơn, không phải ít đi.</p></li>
  <li><p>- <strong>Bốc đồng và theo cảm xúc nhất thời</strong>: Bạn có thể đưa ra những quyết định lớn — thay đổi công việc, kết thúc mối quan hệ, chuyển nhà — dựa trên cảm hứng nhất thời mà sau đó hối tiếc. Hãy để bản thân "ngủ lại" một đêm với các quyết định lớn trước khi thực hiện.</p></li>
  <li><p>- <strong>Thái quá với kích thích giác quan</strong>: Bạn có xu hướng muốn nhiều hơn — nhiều trải nghiệm, nhiều sự phấn khích, nhiều thứ mới. Điều này có thể dẫn đến lối sống thiếu cân bằng về sức khỏe, tài chính hoặc tình cảm nếu không có ý thức quản lý.</p></li>
</ul>`,

    6: (name) => `<p class="nar"><strong>${name}</strong>, bạn sinh ra mang rung động ấm áp và cao cả của <strong>Con Số 6 — Người Nuôi Dưỡng, Người Bảo Vệ Tổ Ấm</strong>. Nếu cả vũ trụ là một gia đình lớn, thì bạn chính là người giữ cho ngọn lửa ấm áp của gia đình đó không bao giờ tắt.</p>

<p class="nar">Bạn có khả năng yêu thương một cách vô điều kiện và hoàn toàn tự nhiên. Trách nhiệm với người thân không phải là gánh nặng với bạn — đó là ý nghĩa sống. <strong>Bạn cảm thấy mình trọn vẹn nhất khi được cho đi, khi được chăm sóc, khi thấy người mình yêu thương hạnh phúc</strong>.</p>

<div class="lp-section-title">TÍNH CÁCH NỔI TRỘI CỦA BẠN</div>
<ul class="lp-traits">
  <li><strong>Điểm mạnh nổi bật:</strong> Tình yêu thương vô điều kiện, trách nhiệm cao, khả năng chăm sóc và nuôi dưỡng, thẩm mỹ tinh tế, trung thành, có tầm nhìn về hòa hợp và cộng đồng</li>
  <li><strong>Điểm yếu cần chú ý:</strong> Hay ôm đồm, khó buông tay, cầu toàn, đặt tiêu chuẩn quá cao, dễ thất vọng khi người khác không đáp ứng kỳ vọng, hay can thiệp vào cuộc sống của người thân</li>
</ul>

<div class="lp-section-title">ĐIỂM MẠNH CỦA BẠN</div>
<ul class="lp-strengths">
  <li><p>- Mang năng lượng đường đời số <strong>6</strong>, <strong>${name}</strong> có khả năng tạo ra môi trường ấm áp và an toàn cho bất kỳ nhóm người nào bạn tham gia. Bạn bản năng biết người khác cần gì và không cần đợi được nhờ — bạn đã hành động để làm cho mọi người cảm thấy được quan tâm. Đây là tài năng nuôi dưỡng hiếm có không thể học được.</p></li>
  <li><p>- <strong>Thẩm mỹ và cảm quan nghệ thuật tinh tế</strong>: Bạn nhìn thấy vẻ đẹp trong những điều giản dị và có bản năng tạo ra sự hài hòa trong không gian sống, công việc và các mối quan hệ. Đây là tài sản đặc biệt trong các nghề liên quan đến thiết kế, tổ chức sự kiện, trang trí nội thất hay bất kỳ lĩnh vực nào đòi hỏi con mắt thẩm mỹ.</p></li>
  <li><p>- <strong>Trách nhiệm và đáng tin cậy trong dài hạn</strong>: Bạn không chỉ hiện diện trong những khoảnh khắc vui vẻ — bạn ở lại trong những thời điểm khó khăn. Người thân của bạn biết họ có thể gọi điện cho bạn lúc 2 giờ sáng và bạn sẽ xuất hiện. Đó là loại tin cậy mà không thể giả tạo.</p></li>
  <li><p>- <strong>Kỹ năng hòa giải và tạo sự đồng thuận</strong>: Bạn có khả năng nhìn thấy quan điểm của tất cả các bên trong một xung đột và tìm ra giải pháp mà ai cũng có thể chấp nhận được. Trong gia đình, công việc hay cộng đồng, bạn thường là người giữ cho mọi thứ không vỡ ra khi căng thẳng leo thang.</p></li>
  <li><p>- <strong>Sự tận tụy và trung thành lâu dài</strong>: Một khi bạn cam kết với ai hay điều gì, bạn không rời đi vì khó khăn nhỏ. Sự kiên định này tạo ra nền tảng cho những mối quan hệ và thành tựu có giá trị thực sự, bền chặt qua thời gian.</p></li>
</ul>

<div class="lp-section-title">ĐIỂM YẾU CỦA BẠN</div>
<ul class="lp-weaknesses">
  <li><p>- <strong>Ôm đồm và quá tải</strong> là nguy hiểm thường trực với <strong>${name}</strong>. Vì bạn thấy mình có trách nhiệm với mọi người, bạn dễ nhận nhiều hơn khả năng chịu đựng của mình — và cuối cùng kiệt sức trong im lặng vì không muốn làm người khác thất vọng. Hãy nhớ: bạn không thể đổ nước từ một chiếc bình rỗng.</p></li>
  <li><p>- <strong>Can thiệp quá mức vào cuộc sống của người thân</strong>: Tình yêu thương của bạn đôi khi có màu sắc kiểm soát — bạn muốn bảo vệ người mình yêu đến mức không cho họ không gian để tự trưởng thành và học từ sai lầm. Yêu thương thực sự bao gồm cả việc tin tưởng người kia đủ mạnh để tự đứng dậy.</p></li>
  <li><p>- <strong>Hoàn hảo chủ nghĩa</strong>: Bạn đặt tiêu chuẩn rất cao — cho bản thân và người xung quanh — và thất vọng nặng nề khi thực tế không đạt được mức đó. Học cách chấp nhận "đủ tốt" trong những tình huống không quan trọng sẽ giảm đáng kể áp lực không cần thiết cho cả bạn lẫn những người yêu bạn.</p></li>
  <li><p>- <strong>Khó tha thứ</strong>: Khi ai đó làm tổn thương gia đình hay những người thân của bạn, bạn có thể mang sự tức giận đó rất lâu. Học cách tha thứ không phải vì người kia xứng đáng — mà vì chính bạn xứng đáng được tự do khỏi gánh nặng đó.</p></li>
</ul>`,

    7: (name) => `<p class="nar"><strong>${name}</strong>, bạn mang trong mình rung động huyền bí và thâm sâu của <strong>Con Số 7 — Nhà Hiền Triết, Người Tìm Kiếm Sự Thật</strong>. Trong khi người khác nhìn thấy bề mặt, bạn nhìn thấy chiều sâu. Trong khi người khác hỏi "điều đó là gì?", bạn hỏi "tại sao nó tồn tại?"</p>

<p class="nar">Trí tuệ của bạn không chỉ thông minh — nó có chiều sâu. Bạn có khả năng phân tích, suy ngẫm và đặt câu hỏi mà hầu hết mọi người không nghĩ đến. <strong>Bạn không chấp nhận câu trả lời bề mặt</strong> — bạn luôn tìm kiếm tầng nghĩa sâu hơn, sự thật ẩn sau những gì có vẻ hiển nhiên.</p>

<div class="lp-section-title">TÍNH CÁCH NỔI TRỘI CỦA BẠN</div>
<ul class="lp-traits">
  <li><strong>Điểm mạnh nổi bật:</strong> Trí tuệ phân tích sâu sắc, trực giác tâm linh, khả năng nghiên cứu và học hỏi không ngừng, độc lập trong tư duy, nhận thức sâu về bản chất con người và vạn vật</li>
  <li><strong>Điểm yếu cần chú ý:</strong> Khép kín và khó được tiếp cận, dễ cô lập, nghi ngờ người khác, đôi khi lạnh lùng về mặt cảm xúc, khó tin tưởng</li>
</ul>

<div class="lp-section-title">ĐIỂM MẠNH CỦA BẠN</div>
<ul class="lp-strengths">
  <li><p>- Mang năng lượng đường đời số <strong>7</strong>, <strong>${name}</strong> có khả năng tư duy phân tích ở mức độ còn người đa phần không đạt tới. Bạn không chỉ xử lý thông tin — bạn tìm kiếm khuôn mẫu, liên kết các điểm dữ liệu tưởng chừng không liên quan và rút ra những kết luận mà người khác chỉ thấy khi bạn chỉ ra chúng. Đây là năng lực làm nên những nhà khoa học, triết gia và nhà tư tưởng xuất chúng.</p></li>
  <li><p>- <strong>Trực giác tâm linh sâu sắc</strong>: Bạn có khả năng "biết" những điều mà không ai dạy bạn và không thể giải thích hoàn toàn bằng lý trí. Khi học cách tin vào trực giác này và hành động theo nó, bạn sẽ đưa ra được những quyết định đúng đắn và sâu sắc hơn bất kỳ hệ thống phân tích nào cho phép.</p></li>
  <li><p>- <strong>Khả năng nghiên cứu và tích lũy kiến thức đặc biệt</strong>: Bạn có thể đào sâu vào bất kỳ lĩnh vực nào với sự tập trung và tinh tế mà ít người có được. Khi bạn quyết định trở thành chuyên gia trong một lĩnh vực, bạn thực sự trở thành chuyên gia — không chỉ biết bề mặt mà hiểu tận gốc rễ.</p></li>
  <li><p>- <strong>Tư duy độc lập và không bị ảnh hưởng bởi đám đông</strong>: Bạn hình thành quan điểm dựa trên sự nghiên cứu và suy ngẫm của riêng mình, không phải vì đám đông nghĩ vậy. Điều này cho phép bạn nhìn thấy những cơ hội và rủi ro mà người đi theo xu hướng không thể thấy.</p></li>
  <li><p>- <strong>Chiều sâu trong các mối quan hệ</strong>: Dù bạn ít người quen, những mối quan hệ bạn chọn đầu tư thường có chiều sâu và ý nghĩa đặc biệt. Người được bạn chọn để thân cận được hưởng đặc quyền hiếm có — được nhìn thấy phần sâu nhất trong thế giới nội tâm phong phú của bạn.</p></li>
</ul>

<div class="lp-section-title">ĐIỂM YẾU CỦA BẠN</div>
<ul class="lp-weaknesses">
  <li><p>- <strong>Khép kín và khó được tiếp cận</strong> là thách thức lớn nhất của <strong>${name}</strong>. Bạn dựng xây những bức tường vô hình xung quanh bản thân — không nhất thiết có chủ đích, nhưng người khác cảm thấy khó tiếp cận và thường bỏ cuộc trước khi thực sự biết bạn. Những người xứng đáng đang đứng ở phía bên kia bức tường đó, chờ đợi bạn mở cánh cửa.</p></li>
  <li><p>- <strong>Nghi ngờ và khó tin tưởng</strong>: Bạn cần nhiều bằng chứng hơn người bình thường trước khi tin vào ai. Điều này bảo vệ bạn khỏi những người không tốt, nhưng cũng có thể ngăn bạn kết nối với những người thực sự chân thành. Không phải ai cũng có toan tính — một số người đơn giản chỉ muốn được biết bạn.</p></li>
  <li><p>- <strong>Quá khép kín về cảm xúc</strong>: Bạn giỏi phân tích cảm xúc của người khác nhưng đôi khi rất khó biểu đạt cảm xúc của chính mình. Điều này có thể tạo ra sự hiểu lầm trong các mối quan hệ — người thân của bạn không biết bạn đang nghĩ gì và đôi khi giải thích sai sự im lặng của bạn.</p></li>
  <li><p>- <strong>Xu hướng cô lập quá mức</strong>: Trong khi thời gian một mình là cần thiết và tốt cho bạn, đôi khi bạn cô lập đến mức bỏ lỡ những kết nối và cơ hội quan trọng. Có sự khác biệt giữa sự cô độc có ý thức và sự cô lập do sợ hãi — hãy thành thật với mình về đâu là đâu.</p></li>
</ul>`,

    8: (name) => `<p class="nar"><strong>${name}</strong>, bạn được sinh ra mang năng lượng đế vương của <strong>Con Số 8 — Biểu Tượng Của Quyền Năng, Thịnh Vượng và Thành Công</strong>. Hãy nhìn vào số 8 — nó không có điểm bắt đầu hay kết thúc, nó là vòng lặp vô tận của sự tuần hoàn: cho đi rồi nhận lại, mất đi rồi được bù đắp. Đó chính là quy luật vũ trụ mà cuộc đời bạn được thiết kế để thể hiện.</p>

<p class="nar">Bạn có khả năng thiên bẩm trong việc nhìn thấy tiềm năng và biến nó thành giá trị thực. <strong>Tư duy chiến lược, khả năng lãnh đạo và bản năng kinh doanh</strong> là những phẩm chất mà vũ trụ đã trao cho bạn từ khi chào đời.</p>

<div class="lp-section-title">TÍNH CÁCH NỔI TRỘI CỦA BẠN</div>
<ul class="lp-traits">
  <li><strong>Điểm mạnh nổi bật:</strong> Tư duy chiến lược và kinh doanh sắc bén, khả năng lãnh đạo và quản lý xuất sắc, ý chí sắt đá, tầm nhìn xa, khả năng tạo ra và quản lý nguồn lực</li>
  <li><strong>Điểm yếu cần chú ý:</strong> Độc đoán, ham quyền kiểm soát, đặt vật chất lên trên cảm xúc, cứng nhắc, khó tha thứ và đôi khi quá cứng rắn với người khác</li>
</ul>

<div class="lp-section-title">ĐIỂM MẠNH CỦA BẠN</div>
<ul class="lp-strengths">
  <li><p>- Mang năng lượng đường đời số <strong>8</strong>, <strong>${name}</strong> có tư duy chiến lược bẩm sinh — bạn nhìn thấy bức tranh lớn trong khi người khác còn đang tập trung vào từng điểm nhỏ. Bạn biết cách tạo đòn bẩy, tối ưu nguồn lực và di chuyển các "quân cờ" theo cách tạo ra lợi thế tối đa với rủi ro tối thiểu.</p></li>
  <li><p>- <strong>Khả năng lãnh đạo và tạo ra kết quả</strong>: Bạn không chỉ lãnh đạo bằng lời nói — bạn lãnh đạo bằng hành động và kết quả. Người xung quanh biết rằng khi bạn đứng đầu một dự án, nó có khả năng cao sẽ được thực hiện và mang lại kết quả. Đây là loại uy tín không thể mua bằng tiền hay chức danh.</p></li>
  <li><p>- <strong>Ý chí và bản lĩnh phi thường</strong>: Bạn không sụp đổ trước áp lực hoặc thất bại. Bạn phân tích, học hỏi và bước tiếp với sự bình tĩnh đáng ngưỡng mộ. Chính bản lĩnh này là thứ phân biệt những người chỉ nói với những người thực sự làm nên lịch sử.</p></li>
  <li><p>- <strong>Bản năng tài chính và đầu tư</strong>: Bạn có khả năng tự nhiên nhìn thấy giá trị ở nơi người khác không thấy và biết khi nào là thời điểm hành động. Khi kết hợp với sự kỷ luật và nghiên cứu cẩn thận, đây là tài sản có thể tạo ra sự thịnh vượng thực sự và bền vững.</p></li>
  <li><p>- <strong>Sức mạnh phục hồi</strong>: Khi mọi thứ sụp đổ — và trong cuộc đời của một số 8, điều đó sẽ xảy ra ít nhất vài lần — bạn không chỉ đứng dậy. Bạn đứng dậy với sức mạnh lớn hơn trước, mang theo những bài học mà những người chưa trải qua thất bại không bao giờ có thể hiểu.</p></li>
</ul>

<div class="lp-section-title">ĐIỂM YẾU CỦA BẠN</div>
<ul class="lp-weaknesses">
  <li><p>- <strong>Ham muốn kiểm soát</strong> là điểm yếu đặc trưng của <strong>${name}</strong>. Bạn thấy khó khăn khi phải tin tưởng người khác làm những việc bạn nghĩ mình có thể làm tốt hơn — và điều này đôi khi làm bạn micro-manage, làm chậm mọi thứ và tạo ra môi trường căng thẳng không cần thiết. Học cách ủy quyền thực sự là kỹ năng quan trọng nhất bạn cần phát triển.</p></li>
  <li><p>- <strong>Đặt kết quả trên cảm xúc</strong>: Trong việc theo đuổi thành công và hiệu quả, bạn đôi khi bỏ qua chiều kích cảm xúc của con người. Đây có thể làm tổn thương những mối quan hệ quan trọng và tạo ra hình ảnh "lạnh lùng, không thể tiếp cận" mà thực ra không phản ánh đúng bạn là ai.</p></li>
  <li><p>- <strong>Khó tha thứ và quá cứng nhắc</strong>: Khi ai đó phản bội hay thất hứa với bạn, bạn đóng cánh cửa rất nhanh và hiếm khi mở lại. Sự kiên quyết này bảo vệ bạn, nhưng đôi khi giá quá cao — những mối quan hệ đáng cứu vãn bị bỏ đi vì bạn không cho phép chỗ cho lỗi lầm và sự phát triển của con người.</p></li>
  <li><p>- <strong>Vật lộn với cân bằng công việc - cuộc sống</strong>: Tham vọng của bạn mạnh đến mức dễ biến mọi thứ thành công việc. Gia đình, sức khỏe, niềm vui — tất cả đều có thể bị đặt xuống hàng ưu tiên thứ hai một cách vô ý thức. Hãy nhớ: thành công vật chất là phương tiện, không phải mục đích cuối cùng.</p></li>
</ul>`,

    9: (name) => `<p class="nar"><strong>${name}</strong>, bạn mang trong mình rung động hoàn hảo và vị tha của <strong>Con Số 9 — Nhà Nhân Đạo, Linh Hồn Cổ Đại</strong>. Số 9 là con số cuối cùng trong chu kỳ đơn vị — nó chứa đựng tất cả sự khôn ngoan tích lũy từ những con số đến trước. Và bạn, với linh hồn đã trải qua muôn vàn kiếp sống, mang trong mình sự trưởng thành tinh thần hiếm gặp.</p>

<p class="nar">Bạn nhìn thế giới qua lăng kính của <strong>tình yêu thương rộng lớn và trí tuệ vượt thời gian</strong>. Khi người khác thấy sự khác biệt, bạn thấy sự kết nối. Khi người khác phán xét, bạn thấu hiểu. Lòng trắc ẩn của bạn không phải là sự yếu đuối — đó là sức mạnh của một linh hồn đã đủ trưởng thành để yêu thương mà không cần điều kiện.</p>

<div class="lp-section-title">TÍNH CÁCH NỔI TRỘI CỦA BẠN</div>
<ul class="lp-traits">
  <li><strong>Điểm mạnh nổi bật:</strong> Lòng trắc ẩn rộng lớn, tầm nhìn nhân văn, khả năng tha thứ và buông bỏ, trí tuệ tổng hợp, thiên hướng nghệ thuật và sáng tạo, khả năng truyền cảm hứng và dẫn dắt bằng tình yêu thương</li>
  <li><strong>Điểm yếu cần chú ý:</strong> Khó buông bỏ cho chính mình, dễ mang vác vết thương cũ, đôi khi hy sinh bản thân quá mức, khó thiết lập ranh giới, mơ mộng và thiếu thực tế</li>
</ul>

<div class="lp-section-title">ĐIỂM MẠNH CỦA BẠN</div>
<ul class="lp-strengths">
  <li><p>- Mang năng lượng đường đời số <strong>9</strong>, <strong>${name}</strong> có khả năng nhìn thấy bức tranh lớn của cuộc sống và nhân loại theo cách mà rất ít người có thể. Bạn không bị mắc kẹt trong những tiểu tiết cá nhân — bạn nhìn thấy sợi chỉ kết nối tất cả mọi người và điều đó cho phép bạn hành động từ góc độ của tình yêu thương vô điều kiện thay vì quyền lợi cá nhân.</p></li>
  <li><p>- <strong>Lòng trắc ẩn và sự thấu hiểu phi thường</strong>: Bạn không nhanh phán xét — bạn tìm hiểu. Bạn thường là người duy nhất trong phòng thực sự lắng nghe câu chuyện đằng sau câu chuyện, và ngay cả những người khó tính nhất đều cảm thấy được chấp nhận khi ở bên bạn.</p></li>
  <li><p>- <strong>Khả năng tha thứ và buông bỏ</strong>: Bạn hiểu rằng giữ lấy oán giận chỉ gây hại cho chính mình. Khả năng tha thứ này không phải vì bạn yếu đuối — mà vì bạn đủ khôn ngoan để không để bóng tối của quá khứ chiếm chỗ của ánh sáng hiện tại.</p></li>
  <li><p>- <strong>Thiên hướng nghệ thuật và sáng tạo có chiều sâu</strong>: Nghệ thuật của số 9 không chỉ là về kỹ thuật — nó có tâm hồn. Bạn tạo ra những thứ chạm đến trái tim người khác theo cách về sau họ không giải thích được tại sao lại cảm động đến vậy.</p></li>
  <li><p>- <strong>Sức ảnh hưởng tự nhiên trong cộng đồng</strong>: Người xung quanh tự nhiên muốn nghe ý kiến của bạn về những vấn đề lớn. Bạn có năng lực lãnh đạo độc đáo — không phải bằng việc ra lệnh, mà bằng việc truyền cảm hứng và chạm đến giá trị cốt lõi của con người.</p></li>
</ul>

<div class="lp-section-title">ĐIỂM YẾU CỦA BẠN</div>
<ul class="lp-weaknesses">
  <li><p>- <strong>Khó buông bỏ vết thương của bản thân</strong> là nghịch lý của <strong>${name}</strong>: Bạn giỏi tha thứ cho người khác nhưng lại rất khắc nghiệt với chính mình. Bạn mang theo những nỗi đau cũ, những tiếc nuối và những "đáng ra mình phải..." trong thời gian dài hơn cần thiết rất nhiều. Hãy học cách tha thứ cho bản thân với cùng sự nhân từ bạn dành cho người khác.</p></li>
  <li><p>- <strong>Hy sinh bản thân quá mức</strong>: Vì cảm thấy có trách nhiệm với cộng đồng và thế giới lớn hơn, bạn đôi khi bỏ qua nhu cầu cơ bản của chính mình — sức khỏe, niềm vui, thời gian nghỉ ngơi. Trực giác bạn biết rằng bạn không thể rót nước từ bình rỗng, nhưng hành động của bạn đôi khi không phản ánh hiểu biết đó.</p></li>
  <li><p>- <strong>Khó thiết lập ranh giới thực tế</strong>: Vì luôn nhìn thấy tiềm năng tốt trong người khác, bạn đôi khi tiếp tục cho đi với những người không đủ khả năng hay không sẵn sàng tiếp nhận. Học cách nhận ra khi nào sự rộng lượng của bạn đang nuôi dưỡng sự phát triển và khi nào nó đang nuôi dưỡng sự lệ thuộc.</p></li>
  <li><p>- <strong>Mơ mộng và thiếu thực tế</strong> đôi khi: Tầm nhìn lý tưởng của bạn về thế giới đôi khi khiến bạn bị thất vọng sâu sắc khi đối mặt với thực tế không hoàn hảo. Học cách hành động hiệu quả trong thế giới như nó đang là — không phải như bạn muốn nó phải là — trong khi vẫn giữ ngọn lửa của tầm nhìn đó cháy sáng.</p></li>
</ul>`,

    10: (name) => `<p class="nar"><strong>${name}</strong>, bạn mang rung động đặc biệt của <strong>Số 10 (1+0=1) — Con Số Của Sự Hoàn Thành Nghiệp Quả và Khởi Đầu Mới</strong>. Số 10 không chỉ đơn giản là số 1 — nó là số 1 ở một cấp độ cao hơn, mang theo sự hoàn thành của một chu kỳ trước đó. Bạn đến với kiếp này không phải để bắt đầu từ đầu — bạn bắt đầu từ nền tảng đã được xây dựng qua nhiều kiếp sống.</p>

<p class="nar">Bạn mang trong mình <strong>tiềm năng lãnh đạo vượt trội và bản năng tiên phong</strong> giống như năng lượng số 1 thuần khiết, nhưng kết hợp với sự khôn ngoan của số 0 — biểu tượng của vô tận và tiềm năng vũ trụ. Đây là sự kết hợp hiếm gặp tạo nên một cá nhân vừa có tầm nhìn chiến lược, vừa có khả năng trực giác sâu sắc.</p>

<div class="lp-section-title">TÍNH CÁCH NỔI TRỘI CỦA BẠN</div>
<ul class="lp-traits">
  <li><strong>Điểm mạnh nổi bật:</strong> Tự lập mạnh mẽ, tư duy đổi mới và cách mạng, bản năng tiên phong, khả năng trực giác kết hợp với lý trí, nội lực phi thường</li>
  <li><strong>Điểm yếu cần chú ý:</strong> Thiếu kiên nhẫn với tiến trình chậm, cái tôi mạnh, đôi khi bị cô lập vì đi trước thời đại, khó chấp nhận giới hạn của bản thân</li>
</ul>

<div class="lp-section-title">ĐIỂM MẠNH CỦA BẠN</div>
<ul class="lp-strengths">
  <li><p>- Mang năng lượng đường đời số <strong>10</strong>, <strong>${name}</strong> có khả năng nhìn thấy những gì chưa tồn tại và dám hành động để biến nó thành hiện thực. Bạn không bị giới hạn bởi những gì đã được làm — bạn liên tục hỏi "điều gì có thể được làm tốt hơn?" và rồi bắt tay vào làm điều đó.</p></li>
  <li><p>- <strong>Nội lực và tự lực phi thường</strong>: Bạn không cần ai phê chuẩn để hành động theo điều bạn tin là đúng. Đây là sức mạnh cốt lõi cho phép bạn dẫn đầu khi người khác còn đang chờ đợi điều kiện hoàn hảo — điều kiện không bao giờ đến nếu bạn không tạo ra nó.</p></li>
  <li><p>- <strong>Khả năng phục hồi và tái tạo</strong>: Số 10 mang năng lượng của sự hoàn thành và khởi đầu mới. Khi một chương kết thúc, bạn không bị mắc kẹt trong nó — bạn học từ nó và bước vào chương tiếp theo với sức sống mới. Đây là khả năng hiếm có trong một thế giới mà nhiều người bị tê liệt bởi thất bại.</p></li>
  <li><p>- <strong>Năng lực tổng hợp trí tuệ và trực giác</strong>: Bạn không chỉ phân tích — bạn cảm nhận. Sự kết hợp giữa tư duy logic và trực giác sâu sắc cho phép bạn đưa ra những quyết định chính xác và thuyết phục ngay cả trong những tình huống thiếu thông tin.</p></li>
</ul>

<div class="lp-section-title">ĐIỂM YẾU CỦA BẠN</div>
<ul class="lp-weaknesses">
  <li><p>- <strong>Thiếu kiên nhẫn với tiến trình</strong> là thách thức của <strong>${name}</strong>. Bạn nhìn thấy đích đến rõ ràng đến mức rất khó chịu đựng khi mọi thứ tiến triển chậm hơn tầm nhìn của bạn. Hãy nhớ: không phải vì đường đi chậm mà con đường sai — đôi khi tốc độ chậm chính là bảo vệ bạn khỏi những sai lầm không cần thiết.</p></li>
  <li><p>- <strong>Cô đơn vì đi trước thời đại</strong> là trải nghiệm quen thuộc: Tầm nhìn của bạn thường vượt quá những gì người xung quanh có thể hiểu ở thời điểm hiện tại. Hãy học cách truyền đạt ý tưởng của mình theo ngôn ngữ mà người khác có thể tiếp cận — đây là kỹ năng cần thiết để biến tầm nhìn thành hiện thực.</p></li>
  <li><p>- <strong>Khó chấp nhận giới hạn</strong>: Năng lượng số 10 mang cảm giác "không có gì là không thể" — điều này tạo ra sức mạnh nhưng đôi khi cũng tạo ra sự kiêu ngạo và từ chối thực tế. Biết khi nào cần điều chỉnh kỳ vọng là dấu hiệu của sự khôn ngoan, không phải yếu đuối.</p></li>
</ul>`,

    11: (name) => `<p class="nar"><strong>${name}</strong>, bạn là một trong số ít người mang rung động của <strong>Con Số Chủ (Master Number) 11 — Nhà Tiên Tri và Người Truyền Cảm Hứng tâm linh</strong>. Số 11 không phải là con số dành cho tất cả mọi người — nó thuộc về những linh hồn đến thế giới này với một lý do cao cả và một sứ mệnh vượt ra ngoài những điều bình thường.</p>

<p class="nar">Bạn sở hữu <strong>trực giác mạnh mẽ đến mức đôi khi giống như siêu năng lực</strong>. Bạn "biết" những điều mà không ai giải thích cho bạn. Bạn cảm nhận được những làn sóng năng lượng vô hình, những tín hiệu mà người khác bỏ qua và những thông điệp mà vũ trụ gửi qua những ngõ ngách bí ẩn của cuộc sống.</p>

<div class="lp-section-title">TÍNH CÁCH NỔI TRỘI CỦA BẠN</div>
<ul class="lp-traits">
  <li><strong>Điểm mạnh nổi bật:</strong> Trực giác tâm linh đặc biệt mạnh, khả năng truyền cảm hứng và chữa lành, nhạy cảm tinh tế về năng lượng và cảm xúc, chiều sâu tâm linh phi thường, có sức hút thu hút và ảnh hưởng tự nhiên</li>
  <li><strong>Điểm yếu cần chú ý:</strong> Dễ bị kiệt sức bởi năng lượng tiêu cực xung quanh, áp lực nội tâm cao, hay lo âu và bất ổn, khó cân bằng giữa thế giới tâm linh và vật chất</li>
</ul>

<div class="lp-section-title">ĐIỂM MẠNH CỦA BẠN</div>
<ul class="lp-strengths">
  <li><p>- Mang năng lượng đường đời số <strong>11</strong>, <strong>${name}</strong> có khả năng truy cập những tầng cảm nhận và hiểu biết mà đa số người không thể chạm đến. Trực giác của bạn không phải là may mắn — đó là một cơ quan tri giác thực sự, được phát triển qua nhiều kiếp sống và được kết nối trực tiếp với những tầng năng lượng sâu hơn của thực tại.</p></li>
  <li><p>- <strong>Khả năng truyền cảm hứng tâm linh</strong>: Khi bạn chia sẻ những gì bạn "biết" — những hiểu biết sâu sắc về bản chất con người, về ý nghĩa cuộc sống, về những sự thật tinh tế mà người khác cảm nhận nhưng không thể nói thành lời — bạn chạm đến con người ở tầng sâu nhất. Đây là loại ảnh hưởng mà không có chiến lược marketing nào có thể tạo ra.</p></li>
  <li><p>- <strong>Nhạy cảm và khả năng chữa lành tự nhiên</strong>: Sự hiện diện của bạn tự nó đã có tác dụng xoa dịu — không cần nhiều lời, không cần công thức chữa lành kỳ diệu. Người khác cảm thấy được nhìn thấy và được hiểu khi ở bên bạn, và đó là một trong những món quà lớn nhất một người có thể trao cho người khác.</p></li>
  <li><p>- <strong>Cầu nối giữa thế giới vật chất và tâm linh</strong>: Bạn có khả năng đặc biệt trong việc dịch những hiểu biết tâm linh thành ngôn ngữ mà người bình thường có thể áp dụng trong cuộc sống hàng ngày. Đây là tài năng đặc biệt quý giá trong thế giới ngày càng khao khát ý nghĩa và kết nối.</p></li>
</ul>

<div class="lp-section-title">ĐIỂM YẾU CỦA BẠN</div>
<ul class="lp-weaknesses">
  <li><p>- <strong>Dễ kiệt sức bởi năng lượng tiêu cực</strong> là thách thức thường xuyên của <strong>${name}</strong>. Sự nhạy cảm của bạn là quà tặng, nhưng nó cũng có nghĩa là bạn hấp thụ cảm xúc và năng lượng của môi trường xung quanh sâu hơn nhiều so với người bình thường. Học cách bảo vệ trường năng lượng của mình là kỹ năng sống còn, không phải xa xỉ phẩm.</p></li>
  <li><p>- <strong>Áp lực và lo âu nội tâm cao</strong>: Nhận thức về sứ mệnh lớn đôi khi trở thành gánh nặng không lành mạnh — bạn có thể cảm thấy áp lực phải "đủ tốt", phải "làm đúng" với thiên phú mình được trao. Hãy nhớ: sứ mệnh không có nghĩa là không được phép là người bình thường trong những khoảnh khắc bình thường của cuộc sống.</p></li>
  <li><p>- <strong>Khó cân bằng giữa hai thế giới</strong>: Bạn sống ở ranh giới giữa thực tế vật chất và thực tế tâm linh — và điều đó đôi khi khiến bạn cảm thấy không hoàn toàn thuộc về cả hai. Học cách bén rễ vào thực tế vật chất trong khi vẫn duy trì kết nối tâm linh là bài tập cân bằng suốt đời của bạn.</p></li>
  <li><p>- <strong>Tiêu chuẩn không thực tế với bản thân</strong>: Vì biết mình có tiềm năng lớn, bạn đôi khi khắc nghiệt với chính mình khi chưa đạt đến tầm cao đó. Hãy kiên nhẫn với hành trình của mình — sứ mệnh của số 11 thường đòi hỏi nhiều năm, thậm chí nhiều thập kỷ để khai nở đầy đủ.</p></li>
</ul>`,

    22: (name) => `<p class="nar"><strong>${name}</strong>, bạn mang rung động tối cao của <strong>Con Số Chủ (Master Number) 22 — Người Kiến Tạo Vĩ Đại nhất trong mọi số</strong>. Nếu số 11 là người nhìn thấy tầm nhìn, thì số 22 là người hiện thực hóa tầm nhìn đó ở quy mô lớn nhất có thể. Bạn không chỉ mơ về một thế giới tốt đẹp hơn — bạn có khả năng thực sự XÂY DỰNG nó.</p>

<p class="nar">Bạn kết hợp trong mình trực giác sâu sắc của số 11 với khả năng thực thi lý tính của số 4 — tạo nên một sự kết hợp cực kỳ hiếm gặp: <strong>vừa là nhà tư tưởng vừa là nhà hành động</strong>. Trong khi những người khác thấy giới hạn, bạn thấy cơ hội.</p>

<div class="lp-section-title">TÍNH CÁCH NỔI TRỘI CỦA BẠN</div>
<ul class="lp-traits">
  <li><strong>Điểm mạnh nổi bật:</strong> Tầm nhìn vĩ đại kết hợp với khả năng thực thi thực tế, tư duy hệ thống và quy mô lớn, khả năng xây dựng những thứ có thể tồn tại qua thế hệ, kết hợp trực giác tâm linh với kỷ luật thực tế</li>
  <li><strong>Điểm yếu cần chú ý:</strong> Tiêu chuẩn quá cao dẫn đến tự chỉ trích, áp lực khổng lồ từ tham vọng bản thân, đôi khi gánh vác quá mức, khó chia sẻ tầm nhìn với người có phạm vi nhỏ hơn</li>
</ul>

<div class="lp-section-title">ĐIỂM MẠNH CỦA BẠN</div>
<ul class="lp-strengths">
  <li><p>- Mang năng lượng đường đời số <strong>22</strong>, <strong>${name}</strong> có khả năng nhìn thấy và xây dựng những gì người khác chỉ có thể mơ ước. Tầm nhìn của bạn không bị giới hạn bởi những gì hiện tại khả thi — bạn nhìn thấy những gì có thể trở nên khả thi và rồi làm việc ngược lại để tạo ra con đường đến đó. Đây là tư duy của những người kiến tạo lịch sử.</p></li>
  <li><p>- <strong>Kết hợp độc đáo giữa tâm linh và thực tế</strong>: Bạn không phải là người mơ mộng không chạm đất, cũng không phải là người thực dụng thiếu tầm nhìn. Bạn là sự tổng hợp hiếm có của cả hai — biết tại sao cần làm gì (từ chiều sâu tâm linh và tầm nhìn) VÀ biết chính xác cách làm điều đó (từ kỷ luật thực tế và tư duy hệ thống).</p></li>
  <li><p>- <strong>Tư duy quy mô và hệ thống</strong>: Trong khi người khác giải quyết vấn đề hiện tại, bạn thiết kế hệ thống có thể xử lý vấn đề đó mãi mãi. Bạn nghĩ về kế thừa, về tác động dài hạn, về những gì có thể tồn tại sau khi bạn không còn ở đó nữa. Đây là tư duy của những người tạo ra di sản thực sự.</p></li>
  <li><p>- <strong>Năng lực lãnh đạo truyền cảm hứng và thực thi</strong>: Bạn không chỉ có tầm nhìn hấp dẫn — bạn biết cách tổ chức con người, nguồn lực và quá trình để thực hiện tầm nhìn đó. Đây là sự kết hợp đặc biệt hiếm có — nhiều người có tầm nhìn, nhiều người có khả năng thực thi, nhưng rất ít người có cả hai.</p></li>
</ul>

<div class="lp-section-title">ĐIỂM YẾU CỦA BẠN</div>
<ul class="lp-weaknesses">
  <li><p>- <strong>Tiêu chuẩn quá cao dẫn đến tự chỉ trích khắc nghiệt</strong> là thách thức nặng nề nhất của <strong>${name}</strong>. Vì biết mình có tiềm năng để tạo ra những thứ thực sự vĩ đại, bạn không tha thứ cho bản thân khi chưa đạt đến mức đó. Nhưng sự vĩ đại được xây dựng từng bước nhỏ, không phải xuất hiện hoàn hảo ngay từ đầu. Hãy trân trọng từng bước tiến nhỏ.</p></li>
  <li><p>- <strong>Áp lực từ tham vọng</strong>: Khi bạn biết mình có thể làm được những thứ phi thường, áp lực để thực sự làm điều đó có thể trở nên tê liệt. Hãy học cách hành động từ nơi của sự phong phú và niềm vui, thay vì từ nỗi sợ "không đủ" hay "lãng phí tiềm năng".</p></li>
  <li><p>- <strong>Khó chia sẻ tầm nhìn với người có phạm vi nhỏ hơn</strong>: Bạn đôi khi cảm thấy cô đơn trong các dự án lớn vì ít người có thể nhìn thấy những gì bạn thấy và có thể đi cùng bạn trên con đường đó. Hãy phát triển khả năng truyền đạt tầm nhìn theo cách mà người khác có thể tiếp cận và tham gia — đây là kỹ năng quan trọng nhất của một Người Kiến Tạo Vĩ Đại.</p></li>
  <li><p>- <strong>Gánh vác quá mức</strong>: Vì cảm thấy trách nhiệm lớn và không tin tưởng người khác có thể làm đúng theo tiêu chuẩn của mình, bạn đôi khi tự gánh những thứ lẽ ra có thể được chia sẻ. Hãy học cách xây dựng đội nhóm đáng tin cậy — di sản thực sự không được tạo ra bởi một người duy nhất, dù người đó xuất sắc đến đâu.</p></li>
</ul>`,

    33: (name) => `<p class="nar"><strong>${name}</strong>, bạn đang mang rung động hiếm gặp và thiêng liêng nhất trong toàn bộ hệ thống thần số học: <strong>Con Số Chủ (Master Number) 33 — Người Thầy Vĩ Đại, Đấng Chữa Lành</strong>. Số 33 không phải là sự kết hợp đơn giản của số 11 và số 22 — nó là sự thăng hoa của cả hai, được lọc qua lòng từ bi vô biên và tình yêu thương vô điều kiện.</p>

<p class="nar">Nếu số 11 là người nhìn thấy sự thật, số 22 là người xây dựng tầm nhìn, thì <strong>số 33 là người dùng tình yêu thương để biến đổi thế giới</strong>. Bạn không chỉ muốn giúp đỡ — bạn cảm thấy có trách nhiệm thiêng liêng phải làm điều đó.</p>

<div class="lp-section-title">TÍNH CÁCH NỔI TRỘI CỦA BẠN</div>
<ul class="lp-traits">
  <li><strong>Điểm mạnh nổi bật:</strong> Lòng từ bi vô biên, khả năng chữa lành tâm linh, sức ảnh hưởng thông qua tình yêu thương, trí tuệ tổng hợp cao nhất, khả năng dạy và truyền cảm hứng ở tầm cao</li>
  <li><strong>Điểm yếu cần chú ý:</strong> Dễ kiệt sức vì cho quá nhiều, khó đặt ranh giới, cảm giác có lỗi khi không giúp được người, tiêu chuẩn quá cao với bản thân và người khác</li>
</ul>

<div class="lp-section-title">ĐIỂM MẠNH CỦA BẠN</div>
<ul class="lp-strengths">
  <li><p>- Mang năng lượng đường đời số <strong>33</strong>, <strong>${name}</strong> có khả năng chữa lành tâm hồn người khác bằng chính sự hiện diện của mình. Không cần kỹ thuật hay công thức — sự ấm áp, sự chấp nhận vô điều kiện và chiều sâu từ bi của bạn là thuốc chữa cho những trái tim đã cứng lại vì bị tổn thương quá nhiều.</p></li>
  <li><p>- <strong>Trí tuệ tổng hợp cao nhất</strong>: Bạn không chỉ hiểu thực tế vật chất hay thực tế tâm linh — bạn hiểu cả hai và thấy được sợi chỉ kết nối chúng. Đây là nền tảng của sự khôn ngoan thực sự — không chỉ kiến thức mà là sự hiểu biết sâu sắc về bản chất của sự tồn tại.</p></li>
  <li><p>- <strong>Khả năng dạy và truyền cảm hứng ở tầm vũ trụ</strong>: Bạn không chỉ chia sẻ kiến thức — bạn truyền đạt sự chuyển hóa. Người đã được học hay được truyền cảm hứng bởi bạn không chỉ biết nhiều hơn — họ trở nên khác đi ở tầng sâu hơn.</p></li>
</ul>

<div class="lp-section-title">ĐIỂM YẾU CỦA BẠN</div>
<ul class="lp-weaknesses">
  <li><p>- <strong>Kiệt sức vì cho quá nhiều</strong> là nguy hiểm thực sự nhất với <strong>${name}</strong>. Vì bạn cảm thấy điều gì đó gần như thiêng liêng khi giúp đỡ người khác, bạn khó nhận ra khi nào cần dừng lại. Hãy nhớ: bạn không thể trở thành người thầy vĩ đại nhất khi đang cạn kiệt. Tự chăm sóc không phải là ích kỷ — đó là điều kiện tiên quyết cho sứ mệnh của bạn.</p></li>
  <li><p>- <strong>Cảm giác có lỗi khi không giúp được người</strong>: Bạn mang gánh nặng nặng nề khi thấy ai đó đau khổ mà mình không thể làm gì. Hãy học cách phân biệt: đâu là trách nhiệm của bạn và đâu là hành trình mà người kia cần tự bước. Đôi khi yêu thương nhất là để người khác đi qua khó khăn của riêng họ.</p></li>
  <li><p>- <strong>Tiêu chuẩn không thực tế</strong>: Bạn kỳ vọng bản thân luôn luôn từ bi, luôn hiểu biết, luôn trọn vẹn — và cảm thấy thất bại sâu sắc khi không đáp ứng được những tiêu chuẩn đó. Ngay cả Người Thầy Vĩ Đại nhất cũng có những ngày tệ, những khoảnh khắc yếu đuối và những lúc không biết câu trả lời.</p></li>
</ul>`,
  },




  // ════════════════════════════════════════════════════════════════════
  // CHỈ SỐ LINH HỒN — Per-number deep narrative (1-11)
  // NT.soul[num](name) hoặc NT.soul._legacy(name, num, title, desire, shadow, love)
  // ════════════════════════════════════════════════════════════════════
  soul: {
    1: (name) => `<p class="nar">Sâu thẳm trong tâm hồn bạn, <strong>${name}</strong>, đang cháy bỏng một khao khát mà ít người thực sự hiểu được: <strong>Bạn muốn được là chính mình — hoàn toàn, trọn vẹn và không xin phép bất kỳ ai.</strong> Linh hồn số <strong>1</strong> của bạn không tìm kiếm sự phê chuẩn. Nó tìm kiếm <em>sự tự do để tồn tại</em> theo đúng nghĩa của nó.</p>

<p class="nar">Ở cấp độ sâu nhất, bạn khao khát được lãnh đạo, được tiên phong, được nhìn nhận như một cá nhân có bản sắc rõ ràng và không nhòa lẫn vào đám đông. Không phải vì kiêu ngạo — mà vì linh hồn bạn <em>cần</em> được biểu đạt một cách chân thực và không bị cắt xén. Khi bạn phải ẩn mình, thu nhỏ bản thân hay làm theo ý người khác một cách mù quáng, một phần linh hồn bạn héo úa.</p>

<p class="nar"><strong>Trong tình yêu và các mối quan hệ:</strong> Bạn yêu sâu sắc nhưng lại rất khó chịu khi cảm thấy bị kiểm soát hay phụ thuộc. Người bạn đời lý tưởng của bạn là người đứng vững cạnh bạn — không đứng sau hay đứng trên. Bạn cần một người đủ mạnh để không bị khuất phục bởi năng lượng mạnh mẽ của bạn, và cũng đủ thông minh để để bạn được tự do. Khi cảm thấy bị gò bó hay mất đi cảm giác chủ động, bạn sẽ dần rút lui — đôi khi trước khi nhận ra chính mình đang làm vậy.</p>

<p class="nar"><strong>Bóng tối của linh hồn số 1:</strong> Vì khao khát độc lập mạnh đến mức bạn đôi khi từ chối sự giúp đỡ ngay cả khi thực sự cần. Bạn có thể trở nên bướng bỉnh, cô lập chính mình và gánh chịu những gánh nặng không cần thiết chỉ vì không muốn nhờ vả. Hãy nhớ: nhận sự giúp đỡ không phải là yếu đuối — đó là can đảm của một người đủ mạnh để thừa nhận giới hạn của mình.</p>

<div class="insight-box">💡 <strong>Lời khuyên từ vũ trụ:</strong> Khi bạn học được rằng sự độc lập thực sự không có nghĩa là làm mọi thứ một mình — mà là <em>tự chọn</em> khi nào cần người khác — linh hồn bạn sẽ tìm thấy sự tự do sâu sắc nhất. Hãy để người mình tin tưởng bước vào.</div>`,

    2: (name) => `<p class="nar">Trong những khoảnh khắc yên tĩnh nhất, <strong>${name}</strong>, bạn nghe thấy tiếng thì thầm của linh hồn số <strong>2</strong>: <em>"Tôi muốn được thuộc về ai đó. Tôi muốn một kết nối thực sự — sâu, chân thành và bền vững."</em> Đây không phải sự yếu đuối. Đây là vẻ đẹp tinh tế nhất của một tâm hồn được tạo ra để <strong>yêu thương và được yêu thương</strong>.</p>

<p class="nar">Bạn khao khát sự hài hòa, không phải sự khuất phục. Bạn muốn một thế giới nơi mọi người lắng nghe nhau, nơi xung đột được giải quyết bằng sự thấu hiểu thay vì bằng quyền lực. Bạn có tài năng thiên bẩm trong việc cảm nhận được những gì người khác cần mà họ chưa nói thành lời — và từ đó đáp lại theo cách khiến họ cảm thấy được nhìn thấy và quan tâm.</p>

<p class="nar"><strong>Trong tình yêu và các mối quan hệ:</strong> Bạn yêu bằng toàn bộ tâm hồn. Bạn là người luôn đặt cảm xúc của người thân lên hàng đầu, luôn tìm cách duy trì sự gắn kết và hoà khí. Nhưng chính vì vậy, bạn đôi khi chịu đựng quá nhiều để không làm vỡ mối quan hệ. Người bạn đời lý tưởng của bạn là người đủ nhạy cảm để nhận ra rằng bạn cũng cần được quan tâm — không chỉ là người nhận mà còn là người cho.</p>

<p class="nar"><strong>Bóng tối của linh hồn số 2:</strong> Nỗi sợ bị bỏ lại một mình có thể khiến bạn chịu đựng những mối quan hệ không lành mạnh. Sự nhạy cảm của bạn có thể biến thành dễ bị tổn thương nếu không có ranh giới rõ ràng. Hãy học cách nói "không" mà không cảm thấy có lỗi — đây là bài học quan trọng nhất của linh hồn bạn trong kiếp này.</p>

<div class="insight-box">💡 <strong>Lời khuyên từ vũ trụ:</strong> Bạn là người kết nối. Nhưng kết nối đẹp nhất bắt đầu từ bên trong bạn. Hãy yêu thương chính mình với cùng sự nhẹ nhàng mà bạn dành cho người khác.</div>`,

    3: (name) => `<p class="nar">Linh hồn số <strong>3</strong> của bạn, <strong>${name}</strong>, đang thì thầm một điều mà đôi khi chính bạn cũng không dám nhận: <em>"Tôi muốn được biểu đạt. Tôi muốn chia sẻ những gì bên trong mình với thế giới — và được thế giới đón nhận."</em> Sự sáng tạo không chỉ là sở thích với bạn — đó là <strong>nhu cầu sống còn của linh hồn</strong>.</p>

<p class="nar">Bạn khao khát vui vẻ, kết nối và biểu đạt bản thân một cách tự do. Khi bạn được nói, được viết, được sáng tác, được cười và chia sẻ — linh hồn bạn phát sáng. Ngược lại, khi bị gò bó trong môi trường cứng nhắc, khi tiếng nói của bạn không được lắng nghe, khi sự sáng tạo bị dẹt tắt — bạn cảm thấy như đang chết dần từ bên trong mà không ai biết.</p>

<p class="nar"><strong>Trong tình yêu và các mối quan hệ:</strong> Bạn yêu bằng những lời nói đẹp, những cử chỉ ngọt ngào và bầu không khí vui vẻ, nhẹ nhàng. Bạn cần một người bạn đời biết cách cùng bạn cười, biết trân trọng sự năng động và sáng tạo của bạn. Khi ở trong một mối quan hệ quá trầm tư, nặng nề hoặc thiếu niềm vui, bạn dần tắt đi như một ngọn nến thiếu dưỡng khí.</p>

<p class="nar"><strong>Bóng tối của linh hồn số 3:</strong> Khao khát biểu đạt của bạn đôi khi biến thành lo lắng nếu không được chú ý — dẫn đến nói quá nhiều, cường điệu cảm xúc hoặc tìm kiếm sự xác nhận từ bên ngoài. Hãy nhớ: giá trị của bạn không phụ thuộc vào việc người khác có xuất hiện để vỗ tay hay không.</p>

<div class="insight-box">💡 <strong>Lời khuyên từ vũ trụ:</strong> Hãy sống hết mình với màu sắc của chính bạn. Thế giới không cần thêm một người bình thường — thế giới cần tiếng nói độc đáo và không thể thay thế của bạn.</div>`,

    4: (name) => `<p class="nar">Ẩn sâu bên trong bạn, <strong>${name}</strong>, là một khao khát không ai thấy nhưng luôn hiện hữu: <em>"Tôi muốn sự ổn định. Tôi muốn một nền tảng chắc chắn — trong cuộc sống, trong tình yêu, trong công việc."</em> Linh hồn số <strong>4</strong> của bạn không tìm kiếm sự kích thích hay phấn khích tức thời. Nó tìm kiếm <strong>sự bền vững và an toàn thực sự</strong>.</p>

<p class="nar">Bạn khao khát trật tự, sự rõ ràng và cảm giác mọi thứ đang được xây dựng theo đúng kế hoạch. Khi môi trường của bạn hỗn loạn, khi các mối quan hệ thiếu cam kết, khi công việc thiếu cấu trúc — linh hồn bạn cảm thấy bất an sâu sắc dù bề ngoài vẫn điều bình. Bạn giỏi ẩn cảm xúc, nhưng bên trong luôn có một giọng nói nhỏ đang hỏi: <em>"Liệu đây có bền không? Liệu đây có đáng không?"</em></p>

<p class="nar"><strong>Trong tình yêu và các mối quan hệ:</strong> Bạn yêu bằng sự trung thành và hành động thực tế — không phải lời hoa mỹ. Bạn thể hiện tình yêu bằng cách làm những điều cụ thể: sắp xếp, lo lắng, chuẩn bị. Người bạn đời lý tưởng của bạn là người hiểu rằng sự ổn định và cam kết là ngôn ngữ tình yêu của bạn. Khi ai đó thiếu trách nhiệm hoặc không đáng tin cậy, bạn mất lòng tin rất nhanh và rất khó lấy lại.</p>

<p class="nar"><strong>Bóng tối của linh hồn số 4:</strong> Sự khao khát an toàn đôi khi trở thành nỗi sợ thay đổi. Bạn có thể bám víu vào những thứ không còn phục vụ bạn chỉ vì quen thuộc. Hãy học cách phân biệt: đâu là sự ổn định lành mạnh, và đâu là sự trì trệ vì sợ hãi.</p>

<div class="insight-box">💡 <strong>Lời khuyên từ vũ trụ:</strong> Nền tảng bền vững nhất không phải là thứ không bao giờ thay đổi — mà là thứ có thể thích nghi mà không sụp đổ. Hãy xây dựng sự bền vững từ bên trong chính bạn trước.</div>`,

    5: (name) => `<p class="nar">Nếu có một từ mô tả linh hồn bạn, <strong>${name}</strong>, đó là: <em>TỰ DO</em>. Linh hồn số <strong>5</strong> của bạn không thể thở được trong sự ràng buộc. Nó thì thầm liên tục: <em>"Tôi muốn được khám phá. Tôi muốn được sống đầy đủ mọi chiều kích của sự tồn tại."</em></p>

<p class="nar">Bạn khao khát sự đa dạng, trải nghiệm mới và cảm giác mọi ngày đều mang đến điều gì đó bất ngờ. Sự lặp lại nhàm chán là ác mộng của linh hồn bạn. Bạn cần được di chuyển — không chỉ về mặt thể chất mà còn về trí tuệ, cảm xúc và tinh thần. Khi bị buộc vào một chỗ quá lâu, một phần linh hồn bạn bắt đầu tắt lịm dần.</p>

<p class="nar"><strong>Trong tình yêu và các mối quan hệ:</strong> Bạn yêu mãnh liệt và chân thành — nhưng bạn cũng cần không gian để thở. Người bạn đời lý tưởng là người không cố gắng nhốt bạn vào kỳ vọng cứng nhắc, mà là người cùng bạn tạo ra những hành trình đáng nhớ. Khi cảm thấy bị kiểm soát hay tẻ nhạt, bạn tự nhiên tìm kiếm lối thoát — đôi khi theo những cách không cố ý gây đau cho người kia.</p>

<p class="nar"><strong>Bóng tối của linh hồn số 5:</strong> Nỗi sợ cam kết ẩn núp sau vẻ ngoài phóng khoáng. Bạn có thể chạy trốn khỏi những điều tốt đẹp vì chúng cảm thấy "quá ổn định" hoặc "quá quen thuộc". Hãy học cách phân biệt sự tự do lành mạnh với sự lẩn tránh. Đôi khi điều duy nhất cần thiết là chọn một thứ và thực sự đầu tư vào nó.</p>

<div class="insight-box">💡 <strong>Lời khuyên từ vũ trụ:</strong> Tự do thực sự không nằm ở việc không có ràng buộc — mà ở việc bạn tự chọn những ràng buộc nào xứng đáng với linh hồn phóng khoáng của mình.</div>`,

    6: (name) => `<p class="nar">Linh hồn số <strong>6</strong> của bạn, <strong>${name}</strong>, được dệt nên từ sợi chỉ của tình yêu thương và trách nhiệm. Tiếng thì thầm sâu nhất trong bạn là: <em>"Tôi muốn được quan tâm và được cần đến. Tôi muốn tạo ra một nơi mà mọi người cảm thấy an toàn và được yêu thương."</em></p>

<p class="nar">Bạn tìm thấy ý nghĩa sâu sắc nhất khi được chăm sóc — gia đình, bạn bè, cộng đồng. Việc ai đó để bạn giúp đỡ, tin tưởng bạn, cần bạn — đó là nguồn năng lượng nuôi dưỡng linh hồn bạn. Mái ấm không chỉ là ngôi nhà với bạn — đó là không gian yêu thương mà bạn dày công xây dựng và bảo vệ bằng cả trái tim.</p>

<p class="nar"><strong>Trong tình yêu và các mối quan hệ:</strong> Bạn yêu bằng sự hiện diện, bằng hành động và bằng sự tận tụy không điều kiện. Bạn nhớ những chi tiết nhỏ, bạn lo lắng trước khi người kia kịp nhận ra họ cần gì. Người bạn đời lý tưởng là người biết trân trọng trái tim ấm áp của bạn — và cũng biết cách nhắc bạn rằng bạn xứng đáng được chăm sóc như những gì bạn dành cho người khác.</p>

<p class="nar"><strong>Bóng tối của linh hồn số 6:</strong> Tình yêu thương có thể biến thành sự kiểm soát khi bạn lo sợ người mình yêu sẽ harm themselves nếu không có bạn. Bạn đôi khi hy sinh quá mức rồi cảm thấy oan ức vì không được đáp lại tương xứng. Ranh giới lành mạnh không phải là thiếu yêu thương — mà là tôn trọng không gian của cả hai.</p>

<div class="insight-box">💡 <strong>Lời khuyên từ vũ trụ:</strong> Bạn có thể là người chăm sóc tuyệt vời — nhưng hãy nhớ: bạn không thể đổ ra từ một chiếc ly rỗng. Hãy yêu thương bản thân trước, rồi mới có thể yêu người khác theo cách bền vững và trọn vẹn nhất.</div>`,

    7: (name) => `<p class="nar">Bên trong bạn, <strong>${name}</strong>, ẩn chứa một khao khát thâm sâu mà ít người được phép chạm đến: <em>"Tôi muốn hiểu. Tôi muốn biết bản chất thực sự của mọi thứ — không phải bề mặt, mà là chiều sâu."</em> Linh hồn số <strong>7</strong> của bạn là một nhà hiền triết đang tìm kiếm sự thật.</p>

<p class="nar">Bạn khao khát tri thức không phải để khoe khoang — mà để hiểu được lý do tại sao mọi thứ tồn tại. Triết học, tâm linh, khoa học, tâm lý — bất cứ thứ gì có thể đưa bạn đến gần hơn với sự thật đều kéo hút linh hồn bạn. Sự im lặng không khiến bạn khó chịu — đó là nơi bạn tìm thấy mình. Đám đông ầm ĩ đôi khi làm mệt mỏi hơn là nuôi dưỡng.</p>

<p class="nar"><strong>Trong tình yêu và các mối quan hệ:</strong> Bạn không cần ai ở bên nhưng lại yêu sâu sắc khi tìm được người thực sự hiểu mình ở tầng sâu nhất. Bạn không bị thu hút bởi sự hào nhoáng — mà bởi trí tuệ, chiều sâu nội tâm và sự chân thực. Người bạn đời lý tưởng là người có thể ngồi im lặng cùng bạn và cả hai đều cảm thấy đủ đầy.</p>

<p class="nar"><strong>Bóng tối của linh hồn số 7:</strong> Khao khát hiểu biết đôi khi khiến bạn phân tích cả tình cảm đến mức giết chết nó. Bạn có thể dựng nên những bức tường vô hình xung quanh mình vì sợ bị hiểu nhầm. Hãy nhớ: không phải ai cũng cần hiểu bạn hoàn toàn để có thể yêu bạn thực sự.</p>

<div class="insight-box">💡 <strong>Lời khuyên từ vũ trụ:</strong> Bạn được sinh ra để tìm kiếm sự thật — nhưng sự thật đẹp nhất đôi khi đến không phải qua lý trí mà qua trái tim. Hãy cho phép mình được không biết đôi khi.</div>`,

    8: (name) => `<p class="nar">Linh hồn số <strong>8</strong> của bạn, <strong>${name}</strong>, mang trong mình một năng lượng đế vương tiềm ẩn. Tiếng thì thầm sâu nhất không phải là tham lam — mà là: <em>"Tôi muốn tạo ra một tác động thực sự. Tôi muốn chứng minh rằng mình xứng đáng với sức mạnh mà vũ trụ đã trao."</em></p>

<p class="nar">Bạn khao khát quyền lực không phải để kiểm soát người khác — mà để tạo ra sự thay đổi thực sự, xây dựng thứ gì đó có giá trị lâu dài. Thành công, thịnh vượng và ảnh hưởng không phải là điều bạn tham muốn vì hư danh — mà vì chúng là bằng chứng cho sức mạnh nội tâm và khả năng hiện thực hóa tầm nhìn của bạn. Khi chứng kiến tài năng của mình không được khai thác hoặc bị lãng phí, linh hồn bạn cảm thấy đau đớn thực sự.</p>

<p class="nar"><strong>Trong tình yêu và các mối quan hệ:</strong> Bạn yêu mạnh mẽ và bảo hộ. Bạn muốn xây dựng một cuộc sống thực chất cùng người mình yêu — không chỉ cảm xúc mà còn tài chính, tương lai, kế hoạch cụ thể. Người bạn đời lý tưởng là người có tham vọng và không bị đe dọa bởi sức mạnh của bạn. Khi bị ai đó phụ thuộc hoặc thiếu ý chí, bạn dần mất đi sự tôn trọng dù vẫn còn tình yêu.</p>

<p class="nar"><strong>Bóng tối của linh hồn số 8:</strong> Ám ảnh với kết quả có thể khiến bạn bỏ qua quá trình — và những người trong quá trình đó. Bạn đôi khi xem giá trị của một người qua thành tích và địa vị hơn là bản chất thực sự của họ. Hãy nhớ: những điều quý giá nhất không phải lúc nào cũng đo được bằng tiền.</p>

<div class="insight-box">💡 <strong>Lời khuyên từ vũ trụ:</strong> Sức mạnh thực sự không phải là kiểm soát — mà là biết khi nào cần buông. Khi bạn học cách cho đi mà không đặt điều kiện, vòng tuần hoàn thịnh vượng của số 8 sẽ hoạt động đúng sức mạnh của nó.</div>`,

    9: (name) => `<p class="nar">Linh hồn số <strong>9</strong> của bạn, <strong>${name}</strong>, là một trong những linh hồn đã trải qua nhiều kiếp sống nhất. Tiếng thì thầm của nó không hề nhỏ: <em>"Tôi muốn đóng góp vào điều gì đó lớn hơn bản thân. Tôi muốn tình yêu của mình trải rộng ra — không chỉ cho một người mà cho nhiều người, cho thế giới."</em></p>

<p class="nar">Bạn khao khát ý nghĩa theo nghĩa rộng lớn nhất. Bạn bị thu hút bởi những cuộc trò chuyện sâu sắc, những dự án có tầm ảnh hưởng, những con người đang đấu tranh để trở nên tốt hơn. Lòng trắc ẩn không phải là điều bạn luyện tập — đó là ngôn ngữ tự nhiên của linh hồn bạn. Khi thấy bất công hoặc đau khổ, bạn không thể chỉ đứng nhìn.</p>

<p class="nar"><strong>Trong tình yêu và các mối quan hệ:</strong> Bạn yêu một cách vị tha và toàn tâm toàn ý. Nhưng đôi khi bạn yêu đến mức không còn phân biệt được ranh giới giữa bản thân và người kia. Người bạn đời lý tưởng là người chia sẻ với bạn những giá trị lớn hơn — không nhất thiết phải cùng sứ mệnh, nhưng phải tôn trọng rằng bạn thuộc về điều gì đó rộng lớn hơn chỉ một mối quan hệ.</p>

<p class="nar"><strong>Bóng tối của linh hồn số 9:</strong> Bạn ôm giữ những vết thương cũ quá lâu vì cảm thấy chưa sẵn sàng buông bỏ. Đôi khi bạn cũng tự hoà tan quá nhiều vào người khác đến mức quên mất nhu cầu của chính mình. Hãy nhớ: bạn không thể thực sự phục vụ thế giới nếu bạn không nuôi dưỡng được chính mình.</p>

<div class="insight-box">💡 <strong>Lời khuyên từ vũ trụ:</strong> Buông bỏ là hành động thiêng liêng nhất của linh hồn số 9. Khi bạn học cách để tình yêu chảy qua bạn mà không bám víu, bạn sẽ trở thành dòng suối nuôi dưỡng không bao giờ cạn.</div>`,

    10: (name) => `<p class="nar">Linh hồn số <strong>10</strong> (1+0=1) của bạn, <strong>${name}</strong>, mang tiếng vọng của một linh hồn đã hoàn thành một chu kỳ và bắt đầu từ đầu ở cấp độ cao hơn. Khao khát sâu nhất của bạn là: <em>"Tôi muốn được là người đầu tiên. Tôi muốn tạo ra con đường — không đi theo con đường ai khác đã vạch sẵn."</em></p>

<p class="nar">Bạn mang trong mình năng lượng số 1 thuần khiết được tăng cường bởi số 0 — biểu tượng của tiềm năng vô hạn và sự hoàn thành trọn vẹn. Điều này tạo ra một linh hồn vừa khao khát tự do, vừa mang trong mình sự khôn ngoan từ những kinh nghiệm đã qua. Bạn không chỉ muốn thành công — bạn muốn thành công theo cách riêng của mình, mang dấu ấn không thể nhầm lẫn.</p>

<p class="nar"><strong>Trong tình yêu và các mối quan hệ:</strong> Bạn yêu với sức mạnh và sự quyết tâm đặc trưng của năng lượng số 1. Khi đã chọn ai, bạn toàn tâm toàn ý. Nhưng bạn cần không gian để trở thành chính mình trong mối quan hệ — không ai có thể kiểm soát hay gò bó bạn mà không nhận lại sự kháng cự. Người bạn đời lý tưởng tôn trọng bản ngã mạnh mẽ của bạn, và biết rằng sức mạnh của bạn là tài sản chứ không phải mối đe dọa.</p>

<p class="nar"><strong>Bóng tối của linh hồn số 10:</strong> Nhu cầu tiên phong đôi khi trở thành không thể hợp tác. Bạn có thể vô tình làm người khác cảm thấy bị gạt sang một bên khi chỉ tập trung vào tầm nhìn của chính mình. Hãy nhớ rằng những thành tựu lớn nhất trong lịch sử đều được xây dựng bởi đội nhóm — dù có một người lãnh đạo dẫn đường.</p>

<div class="insight-box">💡 <strong>Lời khuyên từ vũ trụ:</strong> Bạn sinh ra để mở đường. Nhưng hãy thỉnh thoảng nhìn lại phía sau — để đảm bảo rằng những người bạn quan tâm vẫn đang đi cùng bạn trên hành trình đó.</div>`,

    11: (name) => `<p class="nar"><strong>${name}</strong>, bạn mang trong mình linh hồn của một trong những con số hiếm gặp và thiêng liêng nhất: <strong>Số Chủ 11</strong>. Tiếng thì thầm sâu nhất của linh hồn này không phải là khao khát vật chất hay địa vị — mà là: <em>"Tôi muốn được nhìn thấy sự thật mà người khác không thấy. Tôi muốn mang ánh sáng đến những nơi tối tăm nhất."</em></p>

<p class="nar">Bạn bị thúc đẩy bởi mong muốn hoà giải, chữa lành và cống hiến cho một mục đích cao cả hơn bản thân. Từ nhỏ, bạn đã có sự hiểu biết về cuộc sống vượt lứa tuổi — một thứ trực giác sâu sắc khiến bạn nhìn thấy điều người khác bỏ qua. Bạn bị thu hút bởi triết học, tâm linh, khoa học bí truyền và bất cứ thứ gì có thể giúp bạn giải mã bí ẩn của sự tồn tại.</p>

<p class="nar"><strong>Trong tình yêu và các mối quan hệ:</strong> Bạn lãng mạn và lý tưởng hoá — nhưng đôi khi theo cách có phần phi thực tế. Bạn tìm kiếm một kết nối tâm hồn, không chỉ là một người bạn đời. Khi tìm được người thực sự hiểu chiều sâu của bạn, bạn yêu với sự trung thành và cảm xúc sâu sắc hiếm thấy. Nhưng vì nhạy cảm cao, bạn cũng dễ bị tổn thương bởi những điều nhỏ nhặt mà người khác tưởng vô hại.</p>

<p class="nar"><strong>Bóng tối của linh hồn số 11:</strong> Gánh nặng của việc "nhìn thấy nhiều hơn người khác" có thể trở thành áp lực khủng khiếp. Bạn dễ bị quá tải cảm xúc, dễ bị ảnh hưởng bởi năng lượng tiêu cực xung quanh và đôi khi rơi vào trạng thái lo âu khó giải thích. Hãy học cách bảo vệ năng lượng của mình — không phải bằng cách đóng cửa trái tim, mà bằng cách thiết lập ranh giới tâm linh lành mạnh.</p>

<div class="insight-box">💡 <strong>Lời khuyên từ vũ trụ:</strong> Sứ mệnh của bạn không phải là cứu vớt tất cả mọi người. Sứ mệnh của bạn là <em>tỏa sáng</em> — và ánh sáng thực sự sẽ tự tìm đến những nơi cần nó nhất. Hãy tin vào trực giác của mình.</div>`,

    22: (name) => `<p class="nar">Linh hồn số <strong>22</strong> của bạn, <strong>${name}</strong>, là sự kết hợp của trực giác sâu sắc số 11 và khả năng xây dựng thực tế của số 4. Khao khát sâu nhất của bạn là: <em>"Tôi muốn tạo ra thứ gì đó có thể tồn tại qua nhiều thế hệ — một di sản thực sự."</em></p>

<p class="nar">Bạn không chỉ mơ về một thế giới tốt đẹp hơn — bạn có khả năng và nội lực để xây dựng nó theo nghĩa đen. Linh hồn bạn bị thu hút bởi những dự án quy mô lớn, những hệ thống có thể giúp ích cho nhiều người và những ý tưởng có khả năng thay đổi cục diện. Khi làm việc với những điều nhỏ nhặt và thiếu tầm nhìn, linh hồn bạn cảm thấy bị giam cầm.</p>

<p class="nar"><strong>Trong tình yêu và các mối quan hệ:</strong> Bạn yêu bằng cả tầm nhìn — bạn muốn xây dựng một cuộc sống thực sự có ý nghĩa cùng người mình yêu, không chỉ tồn tại trong hiện tại. Người bạn đời lý tưởng là người có khả năng cùng bạn nhìn về tương lai dài hạn và không bị choáng ngợp bởi quy mô của những gì bạn muốn tạo ra.</p>

<p class="nar"><strong>Bóng tối của linh hồn số 22:</strong> Tiêu chuẩn quá cao đôi khi biến thành áp lực tàn nhẫn với chính mình và người xung quanh. Khi cảm thấy mình chưa làm đủ hoặc chưa đạt được tầm ảnh hưởng mình kỳ vọng, bạn dễ rơi vào tự trách móc nặng nề. Hãy nhớ: kể cả Người Kiến Tạo Vĩ Đại nhất cũng cần những khoảnh khắc để đơn giản là tồn tại.</p>

<div class="insight-box">💡 <strong>Lời khuyên từ vũ trụ:</strong> Di sản vĩ đại nhất không được xây dựng trong một ngày — và người xây dựng nó cũng cần được chăm sóc và nghỉ ngơi. Hãy để bản thân được không hoàn hảo trên hành trình đến sự vĩ đại.</div>`,
  },

  // ════════════════════════════════════════════════════════════════════
  // CHU KỲ CUỘC ĐỜI — Deep per-cycle × per-number narrative
  // cycleNum: 1=Nền Tảng, 2=Xây Dựng, 3=Thu Hoạch
  // num: 1-9, 11, 22
  // ════════════════════════════════════════════════════════════════════
  lifeCycleNarrative(cycleNum, num, period, name, kbData) {
    const stageLabels = {
      1: { title: 'Chu kỳ Nền Tảng (Hình Thành)', shortName: 'Hình Thành' },
      2: { title: 'Chu kỳ Xây Dựng (Trưởng Thành)', shortName: 'Trưởng Thành' },
      3: { title: 'Chu kỳ Thu Hoạch (Viên Mãn)', shortName: 'Viên Mãn' },
    };

    // Deep narratives: [cycleNum][num] = { theme, paragraphs[], lesson }
    const deepNarrative = {
      // ══════════ CHU KỲ 1 — NỀN TẢNG (HÌNH THÀNH) ══════════
      1: {
        1: {
          theme: 'Ngọn lửa đầu đời — Tự khẳng định giữa sóng gió',
          paragraphs: [
            `Trong những năm tháng đầu đời, <strong>${name}</strong> mang trong mình năng lượng của số <strong>1</strong> — một ngọn lửa tự khẳng định hiếm gặp ở độ tuổi còn chưa đủ lớn để hiểu tại sao mình lại khác biệt. Bạn không phải đứa trẻ "ngoan" theo nghĩa thụ động — bạn có ý kiến riêng, bạn muốn tự mình làm mọi thứ, và bạn cảm thấy bất an khi bị kiểm soát quá mức. Đây không phải là sự nổi loạn — đây chính là linh hồn tiên phong đang hình thành.`,
            `Những trải nghiệm quan trọng nhất của chu kỳ này thường đến từ những lần <em>bạn bị ai đó gạt sang một bên</em> — không được lắng nghe, không được chọn, không được đứng đầu. Mỗi lần như vậy, trong bạn có thứ gì đó không chịu gập lại. Đó là hạt giống của ý chí lãnh đạo — và dù giai đoạn này có thể đau, nó đang rèn nên thứ không gì có thể bẻ gãy về sau. Bạn cũng học được rằng <strong>sự độc lập không phải là sự lạnh lùng</strong> — mà là biết mình muốn gì ngay cả khi thế giới chưa sẵn sàng nghe.`,
            `Gia đình và môi trường của chu kỳ đầu đời ảnh hưởng lớn đến cách bạn nhìn nhận quyền lực. Nếu bạn được nuôi dưỡng bởi những người biết tôn trọng ý kiến của bạn, bạn lớn lên với sự tự tin lành mạnh. Nếu không, bạn sẽ mang theo một vết thương nhỏ — cảm giác rằng mình phải <em>chiến đấu để tồn tại đúng nghĩa bản thân</em>. Nhưng dù hành trình nào, số 1 trong chu kỳ 1 hứa hẹn điều này: bạn sẽ không giống ai khác — và đó chính xác là điều vũ trụ muốn.`,
          ],
          lesson: `Bài học tâm linh của chu kỳ này không phải là học cách "ngoan hơn" — mà là học cách <strong>tin vào bản năng của chính mình</strong>, ngay cả khi chưa ai xác nhận rằng bạn đúng.`
        },
        2: {
          theme: 'Thế giới cảm xúc — Lớn lên trong sự nhạy cảm',
          paragraphs: [
            `Tuổi thơ và những năm đầu đời của <strong>${name}</strong> được bao phủ bởi năng lượng dịu dàng và sâu sắc của số <strong>2</strong>. Trong khi những đứa trẻ khác có thể chạy nhảy ầm ĩ, bạn thường là người ngồi quan sát — cảm nhận mọi thứ với độ nhạy cảm cao đến mức đôi khi tự ngạc nhiên về chính mình. Bạn biết khi nào mẹ buồn trước khi mẹ nói. Bạn nhận ra khi bạn bè không ổn chỉ qua một ánh mắt. Khả năng đọc người này không phải do học — đó là món quà thiên bẩm mà số 2 trao cho bạn.`,
            `Giai đoạn nền tảng với số 2 thường có những bài học đau đớn xung quanh chủ đề <em>ranh giới và lòng tự trọng</em>. Vì quá nhạy cảm và muốn làm mọi người hài lòng, bạn dễ trở thành người mà ai cũng tìm đến khi cần — nhưng hiếm ai hỏi bạn đang cảm thấy gì. Những trải nghiệm này, dù có phần tổn thương, đang dạy bạn một bài học tinh tế nhất mà con người có thể học: <strong>sự khác biệt giữa yêu thương và tự hủy hoại bản thân</strong>.`,
            `Môi trường gia đình và những mối quan hệ đầu đời in sâu vào cách bạn định nghĩa tình yêu. Bạn học cách yêu từ những người xung quanh — và nếu những mô hình đó lành mạnh, bạn lớn lên với khả năng kết nối sâu sắc hiếm ai có. Nếu không, bạn cần thêm thời gian để định nghĩa lại: <em>yêu thương không có nghĩa là mất đi chính mình.</em> Số 2 ở chu kỳ đầu đời đang xây dựng cho bạn một trái tim biết cảm — và đó chính là nền tảng của mọi điều bạn sẽ tạo ra về sau.`,
          ],
          lesson: `Bài học lớn nhất của giai đoạn này là <strong>học cách nhận sự quan tâm với cùng sự ân sủng mà bạn dành để cho đi</strong>. Bạn xứng đáng được quan tâm — không phải chỉ là người quan tâm.`
        },
        3: {
          theme: 'Ánh sáng trẻ thơ — Thế giới là sân khấu của bạn',
          paragraphs: [
            `Tuổi thơ của <strong>${name}</strong> với số <strong>3</strong> thường là một bức tranh đầy màu sắc — tiếng cười, những câu chuyện bất tận, những ý tưởng kỳ lạ và một năng lượng gây lây lan theo nghĩa đen nhất. Bạn không cần cố gắng để được chú ý — bạn tự nhiên chiếm lấy không gian bằng sự tồn tại vui vẻ và sáng tạo của mình. Trẻ em khác muốn chơi cùng bạn. Người lớn nhớ đến bạn. Và bạn — thường không biết mình đang làm gì kỳ diệu đến vậy.`,
            `Nhưng bên dưới vẻ ngoài tươi sáng đó, giai đoạn đầu đời của số 3 cũng ẩn chứa những bài học khó hơn. Vì tư duy nhảy múa và không tuyến tính, bạn thường bị gán nhãn là "thiếu tập trung" hay "không hoàn thành được điều gì". Môi trường học thuật cứng nhắc là kẻ thù của linh hồn số 3 — và nếu bạn từng bị bảo rằng mình "không đủ nghiêm túc", hãy biết đây: <strong>hệ thống đó được tạo ra cho số 4, không phải cho số 3.</strong> Thiên phú của bạn nằm ở những nơi người khác không nghĩ đến.`,
            `Điều quan trọng nhất của chu kỳ nền tảng với số 3 là <em>sự biểu đạt</em>. Bạn cần — theo nghĩa sinh tồn — được nói lên, được sáng tạo, được kể chuyện. Khi điều này bị bóp nghẹt, bạn có thể trở nên nội tâm theo cách đau đớn hoặc bùng phát theo những hướng không lành mạnh. Khi được nuôi dưỡng đúng cách, thứ nảy sinh từ tuổi thơ của số 3 là một con người có khả năng chạm đến trái tim người khác bằng ngôn từ và nghệ thuật theo cách không ai dạy được.`,
          ],
          lesson: `Giai đoạn đầu đời dạy bạn rằng <strong>niềm vui không phải là sự phù phiếm — đó là sức mạnh</strong>. Và đường dài nhất bạn có thể đi là đường đi qua sự im lặng của chính mình.`
        },
        4: {
          theme: 'Nền móng vững — Học cách tin vào kỷ luật',
          paragraphs: [
            `Tuổi thơ và giai đoạn đầu đời mang số <strong>4</strong> của <strong>${name}</strong> thường gắn liền với cảm giác về <em>trách nhiệm</em> — đôi khi nặng hơn so với tuổi tác. Bạn là đứa trẻ biết gọn gàng đồ chơi sau khi chơi xong, người sẽ nhắc nhở bạn bè đến đúng giờ và thường bị coi là "già hơn tuổi". Điều này không phải vì bạn thiếu sự tinh nghịch — mà vì trong linh hồn bạn có một thứ rất thực: <strong>sự tôn trọng đối với trật tự và công bằng</strong>.`,
            `Giai đoạn nền tảng với số 4 dạy bạn giá trị của sự kiên nhẫn thông qua những trải nghiệm đòi hỏi bạn phải chờ đợi — chờ đến lượt mình, chờ kết quả của công sức bỏ ra, chờ người khác nhận ra giá trị của bạn. Những lần chờ đó không phải sự trừng phạt. Chúng đang xây dựng trong bạn một thứ mà người ta thường mất cả đời để học: <strong>niềm tin rằng nỗ lực đúng hướng cuối cùng sẽ sinh trái</strong>. Không phải ngay lập tức — nhưng chắc chắn.`,
            `Môi trường gia đình của chu kỳ này có tác động lớn đến cách bạn định nghĩa "giá trị". Nếu bạn được dạy rằng chăm chỉ là đức tính cao quý, bạn lớn lên với một cơ sở đạo đức vững chắc. Nếu bạn bị gánh nặng quá mức ngay từ nhỏ, bạn có thể mang theo nỗi lo sợ rằng mình không bao giờ <em>"làm đủ"</em>. Bài học của giai đoạn này là tìm ra ranh giới giữa kỷ luật lành mạnh và sự tự trừng phạt không cần thiết.`,
          ],
          lesson: `Số 4 trong chu kỳ đầu đời trao cho bạn thứ quý giá hơn mọi tài năng: <strong>sự kiên định</strong>. Và từ kiên định, mọi điều vĩ đại đều có thể được xây dựng.`
        },
        5: {
          theme: 'Tuổi thơ phiêu lưu — Học cách sống với sự không chắc chắn',
          paragraphs: [
            `Giai đoạn đầu đời của <strong>${name}</strong> với năng lượng số <strong>5</strong> thường là một bộ phim phiêu lưu đầy màu sắc — thay đổi trường học, chuyển nhà, những người bạn mới và những thử thách bất ngờ xuất hiện liên tục. Trong khi đây có thể là điều khó khăn với nhiều đứa trẻ khác, bạn — dù đôi khi khóc vì phải chia tay — lại có một khả năng kỳ lạ: <strong>thích nghi nhanh đến mức đáng ngạc nhiên</strong>. Mỗi môi trường mới là một thế giới mới để khám phá, không phải mối đe dọa.`,
            `Sự tò mò trí tuệ của bạn trong giai đoạn này là vô hạn. Bạn muốn biết tại sao bầu trời có màu xanh, tại sao người lớn lại làm những điều họ làm, và có bao nhiêu cách khác nhau để giải quyết cùng một vấn đề. Đây không phải sự xao nhãng — đây là <em>tư duy của một linh hồn đang khám phá bức tranh lớn hơn của cuộc đời</em>. Những câu hỏi bạn đặt ra ở giai đoạn này đôi khi không có câu trả lời ngay — nhưng chúng đang định hình cách bạn tiếp cận thế giới cho đến cuối cuộc đời.`,
            `Thách thức lớn nhất của chu kỳ đầu đời với số 5 là <em>tìm thấy bản sắc ổn định giữa những thay đổi liên tục</em>. Khi mọi thứ xung quanh cứ thay đổi, bạn cần học cách xác định những gì là cốt lõi không thể lay chuyển của "bạn" — không phải môi trường, không phải mối quan hệ, không phải hoàn cảnh — mà là bản thân bạn. Khi tìm được điều đó, bạn trở thành người có thể đứng vững trong bất kỳ cơn bão nào.`,
          ],
          lesson: `Giai đoạn nền tảng với số 5 dạy bạn điều quan trọng nhất: <strong>sự tự do không đến từ việc không có ràng buộc — mà đến từ việc biết chính xác bạn là ai khi mọi thứ thay đổi</strong>.`
        },
        6: {
          theme: 'Trái tim nuôi dưỡng — Học cách yêu không điều kiện',
          paragraphs: [
            `Tuổi thơ của <strong>${name}</strong> với số <strong>6</strong> thường gắn liền với một cảm giác rất đặc biệt: <em>cảm giác có trách nhiệm với người khác ngay từ khi còn nhỏ.</em> Bạn có thể là người anh/chị luôn nhường em, đứa con luôn để ý xem bố mẹ có vui không, người bạn luôn ở lại an ủi khi người khác buồn. Trái tim bạn to lớn đến mức đôi khi nặng hơn cơ thể nhỏ bé có thể gánh.`,
            `Gia đình là trung tâm vũ trụ của bạn trong giai đoạn này — và cách gia đình vận hành sẽ in sâu vào định nghĩa của bạn về tình yêu. Nếu bạn được lớn lên trong một môi trường ấm áp và lành mạnh, bạn mang theo mẫu hình đó và tái tạo nó ở bất kỳ nơi nào bạn đặt chân. Nếu gia đình có nhiều vết nứt, bạn thường trở thành người cố keo lại mọi thứ — đôi khi là bằng chính sức khỏe tinh thần của mình. <strong>Đây là gánh nặng mà không đứa trẻ nào đáng phải gánh một mình.</strong>`,
            `Chu kỳ đầu với số 6 đặt nền móng cho một đặc điểm sẽ theo bạn suốt đời: <em>khả năng tạo ra sự ấm áp trong bất kỳ không gian nào bạn bước vào.</em> Đây không chỉ là kỹ năng — đây là thiên phú. Nhưng để phát huy nó lành mạnh, bạn cần học từ giai đoạn này một bài học tinh vi: rằng chăm sóc người khác và chăm sóc bản thân không phải là hai lựa chọn đối lập — chúng phải đi cùng nhau.`,
          ],
          lesson: `Giai đoạn nền tảng với số 6 đang dạy bạn rằng <strong>tình yêu thực sự bắt đầu từ việc yêu bản thân đủ để không cần ai cứu bạn</strong>. Khi bạn học được điều này, bạn trở thành người có thể yêu thương mà không mất đi chính mình.`
        },
        7: {
          theme: 'Tâm hồn nội tâm — Đứa trẻ đặt câu hỏi về tất cả',
          paragraphs: [
            `Giai đoạn đầu đời của <strong>${name}</strong> với số <strong>7</strong> thường khá khác biệt so với những đứa trẻ cùng trang lứa. Bạn ít thích những trò chơi ầm ĩ hơn — bạn thích quan sát, suy nghĩ, và đặt câu hỏi về những thứ mà người lớn đã từ lâu ngừng thắc mắc. <em>"Tại sao mọi người lại phải chết?"</em> hay <em>"Thực sự thế giới có bắt đầu không?"</em> — đây là những câu hỏi điển hình của một đứa trẻ số 7, và không phải giáo viên hay phụ huynh nào cũng biết cách trả lời.`,
            `Sự khác biệt này đôi khi tạo ra cảm giác cô đơn. Bạn không dễ dàng hòa vào đám đông — không phải vì bạn kiêu ngạo, mà vì bạn cần sự kết nối ở chiều sâu mà ít người cùng tuổi có thể đáp ứng. Bạn thường tìm bạn trong sách, trong thiên nhiên, trong những sở thích "lạ" so với chuẩn mực. Và ở những nơi tưởng chừng cô đơn đó, bạn đang xây dựng thứ vô giá nhất của cuộc đời mình: <strong>một thế giới nội tâm phong phú và sâu sắc không ai có thể lấy đi.</strong>`,
            `Chu kỳ đầu với số 7 cũng thường mang những trải nghiệm giúp bạn học cách <em>tin vào trực giác của mình</em>. Có thể bạn biết điều gì đó "không đúng" trước khi ai kịp nhận ra. Có thể bạn cảm nhận được sự giả dối trong người lớn trước khi họ nói dối. Những khả năng nhận thức sắc bén này không phải trí tưởng tượng — đó là trực giác đang được mài sắc từng ngày.`,
          ],
          lesson: `Số 7 ở chu kỳ đầu đời trao cho bạn thứ hiếm nhất trong thế giới hiện đại: <strong>khả năng sống với những câu hỏi không có câu trả lời — và tìm thấy vẻ đẹp trong sự bí ẩn đó thay vì lo sợ nó</strong>.`
        },
        8: {
          theme: 'Sức mạnh thử lửa — Học cách đứng dậy từ thất bại đầu đời',
          paragraphs: [
            `Giai đoạn đầu đời của <strong>${name}</strong> với số <strong>8</strong> thường không thiếu những thách thức — đôi khi khắc nghiệt hơn so với những gì một đứa trẻ nên phải đối mặt. Có thể là những khó khăn về vật chất, có thể là sự thiếu công nhận, hoặc những tình huống đòi hỏi bạn phải mạnh mẽ khi chưa đủ lớn để hiểu tại sao. Nhưng đây chính là lò luyện thép của cuộc đời bạn — và mỗi lần vượt qua, bạn tích lũy thêm một tầng sức mạnh mà về sau sẽ trở thành vũ khí mạnh nhất của mình.`,
            `Bạn học từ rất sớm rằng thế giới không tự đến với ai — người ta phải tự mở đường. Điều này tạo ra trong bạn một <em>bản năng tự lực và tư duy chiến lược</em> đặc biệt: bạn quan sát cách thứ hoạt động, bạn học cách đọc người, và bạn phát triển khả năng nhìn thấy cơ hội trong những nơi người khác chỉ thấy vấn đề. <strong>Tư duy này không phải từ sách giáo khoa — nó đến từ những trận chiến thực sự của cuộc đời bạn.</strong>`,
            `Mối quan hệ với tiền bạc, quyền lực và uy tín được định hình mạnh mẽ trong giai đoạn đầu đời này. Nếu bạn lớn lên trong sự thiếu hụt, bạn có thể mang theo một nỗi sợ vô thức về việc trở lại trạng thái đó — một nỗi sợ có thể thúc đẩy bạn đến thành công, nhưng cũng có thể làm bạn không bao giờ cảm thấy đủ. Nhận ra và chữa lành mối quan hệ với "sự giàu có" là một trong những hành trình quan trọng nhất của số 8.`,
          ],
          lesson: `Giai đoạn nền tảng với số 8 tạo ra một điều không thể giả tạo: <strong>sức bền thực sự — loại sức bền chỉ đến từ việc đã ngã và đã đứng dậy đủ nhiều lần để biết mình có thể làm điều đó mãi mãi</strong>.`
        },
        9: {
          theme: 'Tuổi thơ với tâm hồn cổ đại — Buông bỏ để lớn lên',
          paragraphs: [
            `Giai đoạn đầu đời của <strong>${name}</strong> với số <strong>9</strong> thường mang theo một cảm giác kỳ lạ: <em>bạn dường như "già hơn tuổi" theo nghĩa cảm xúc và tâm linh.</em> Bạn có lòng trắc ẩn sâu sắc với những người đau khổ — ngay cả khi còn nhỏ, bạn cảm thấy đau trước sự bất công theo cách không phải ai cũng có. Và bạn thường đặt câu hỏi về ý nghĩa của những điều xung quanh — tại sao người nghèo khổ, tại sao chiến tranh, tại sao mọi thứ không công bằng hơn.`,
            `Chu kỳ đầu với số 9 thường đi kèm với những mất mát hoặc những kết thúc quan trọng — người thân qua đời, người bạn chuyển đi, ngôi trường phải chia tay, một ước mơ bị bỏ lại. Mỗi mất mát này, dù đau, đang dạy bạn bài học tinh tế nhất mà số 9 cần học: <strong>sự buông bỏ không phải là thất bại — đó là bước đầu tiên của sự tự do.</strong> Khi bạn học cách không bám víu vào những gì đã qua, bạn tạo ra không gian cho điều lớn hơn bước vào.`,
            `Lòng vị tha của bạn trong giai đoạn này có thể đôi khi khiến bạn bỏ qua nhu cầu của chính mình. Bạn yêu quá rộng — và điều đó đẹp. Nhưng nếu không học cách yêu bản thân với cùng sự rộng lượng đó, bạn sẽ mang theo một vết thương ẩn trong suốt cuộc đời: cảm giác rằng mình chỉ có giá trị khi phục vụ người khác. <em>Đây là vết thương cần được nhìn thấy và chữa lành.</em>`,
          ],
          lesson: `Số 9 trong chu kỳ đầu đời hứa hẹn điều này: <strong>mọi điều bạn mất trong giai đoạn này đều đang dọn dọn chỗ cho điều lớn hơn mà bạn chưa thể thấy từ vị trí hiện tại</strong>. Hãy tin vào quá trình.`
        },
        11: {
          theme: 'Linh hồn nhạy cảm — Trưởng thành giữa hai thế giới',
          paragraphs: [
            `Tuổi thơ của <strong>${name}</strong> với số chủ <strong>11</strong> thường là một hành trình đặc biệt và không dễ dàng. Bạn cảm nhận mọi thứ ở một chiều sâu mà người xung quanh — kể cả bố mẹ — đôi khi không thể hiểu được. Bạn có thể biết ai đó đang buồn hoặc đang có ý định không tốt chỉ bằng trực giác. Bạn có những giấc mơ sống động, những linh cảm chính xác một cách khó lý giải, và đôi khi cảm thấy như mình nhìn thấy thứ gì đó mà người khác không thấy. Điều này có thể rất cô đơn.`,
            `Giai đoạn đầu đời với số 11 thường đi kèm với <em>sự nhạy cảm cực cao</em> — bạn hấp thụ năng lượng của môi trường xung quanh như miếng bọt biển, đặc biệt là những căng thẳng và xung đột trong gia đình. Bạn có thể bị lo âu, mất ngủ, hoặc có những phản ứng cảm xúc mạnh mẽ với những sự kiện mà người khác thấy bình thường. Đây không phải sự yếu đuối — <strong>đây là dấu hiệu của một hệ thống cảm nhận đặc biệt đang phát triển</strong>. Bạn cần được bảo vệ và nuôi dưỡng, không phải bị bảo là "đừng nhạy cảm quá".`,
            `Sứ mệnh lớn nhất của chu kỳ đầu đời với số 11 là <em>học cách sống với hai thế giới song song</em>: thế giới vật chất hàng ngày và thế giới nội tâm phong phú với những nhận thức tinh tế. Những đứa trẻ số 11 thường tìm được chỗ trú trong nghệ thuật, âm nhạc, văn chương — bất cứ thứ gì cho phép chuyển hóa những gì cảm nhận được thành hình thức có thể chia sẻ. Đây là cách số 11 sinh tồn và phát triển trong thế giới vật chất.`,
          ],
          lesson: `Giai đoạn đầu đời trao cho số 11 thứ quý giá nhất: <strong>chiều sâu cảm xúc và trực giác được mài sắc qua những khó khăn — và đây chính là nguồn sức mạnh cho sứ mệnh mà bạn mang theo suốt cuộc đời</strong>.`
        },
        22: {
          theme: 'Nền tảng vĩ đại — Học cách mang theo tầm nhìn',
          paragraphs: [
            `Tuổi thơ của <strong>${name}</strong> với số chủ <strong>22</strong> thường đặc biệt hơn những gì hoàn cảnh bề ngoài phản ánh. Bạn có những ý tưởng vượt xa độ tuổi — những kế hoạch, những giấc mơ về điều gì đó lớn hơn bình thường, và một cảm giác thầm lặng rằng mình được sinh ra để làm điều gì đó quan trọng mà chưa biết chính xác là gì. Đôi khi điều này làm bạn thất vọng với những gì đang có. Đôi khi nó là ngọn lửa bí mật giữ bạn tiến về phía trước.`,
            `Giai đoạn nền tảng với số 22 thường đòi hỏi bạn phát triển hai phẩm chất song song: <em>sự mơ mộng về những điều có thể và sự thực tế về cách làm điều đó thành hiện thực.</em> Số 22 là sự kết hợp của trực giác số 11 và kỷ luật số 4 — và trong giai đoạn đầu đời, bạn đang học cách tích hợp cả hai. Đây là bài học khó: làm sao để không đánh mất tầm nhìn khi đối mặt với thực tế, và không đánh mất thực tế khi bị cuốn theo tầm nhìn.`,
            `Những thách thức trong tuổi thơ của số 22 thường lớn hơn mức trung bình — như thể vũ trụ đang kiểm tra xem bạn có đủ sức mạnh để gánh vác những gì về sau sẽ được trao. <strong>Mỗi khó khăn bạn vượt qua trong giai đoạn này không chỉ rèn luyện cá nhân bạn — nó đang chuẩn bị cho bạn khả năng hiểu và dẫn dắt người khác qua những khó khăn tương tự.</strong>`,
          ],
          lesson: `Chu kỳ đầu của số 22 trao cho bạn điều không trường lớp nào có thể dạy: <strong>sự khôn ngoan thực tiễn đến từ việc đã sống qua đủ điều để biết rằng những gì lớn nhất đều được xây từ những nền tảng nhỏ bé và kiên nhẫn nhất</strong>.`
        },
      },

      // ══════════ CHU KỲ 2 — XÂY DỰNG (TRƯỞNG THÀNH) ══════════
      2: {
        1: {
          theme: 'Thời kỳ định hình — Biến ý chí thành di sản',
          paragraphs: [
            `Giai đoạn trưởng thành của <strong>${name}</strong> với năng lượng số <strong>1</strong> là thời kỳ của hàng triệu quyết định — mỗi ngày, mỗi giờ — định hình nên con người bạn sẽ trở thành. Đây không phải giai đoạn "thử nghiệm" như tuổi thơ. Đây là sân chơi thực sự, với tiền thật, mối quan hệ thật và hậu quả thật. Năng lượng số 1 trong chu kỳ này thúc bạn đến phía trước với tốc độ mà đôi khi chính bạn cũng ngạc nhiên — nhưng đây là lúc thiên phú lãnh đạo của bạn cần được biểu hiện, không phải chờ đợi.`,
            `Sự nghiệp và tầm ảnh hưởng là những chủ đề trung tâm. Bạn không hài lòng với việc là người thực hiện — bạn muốn là người định hướng. <em>Bạn có ý kiến về cách mọi thứ nên được làm, và thường bạn đúng hơn người ta nghĩ.</em> Thách thức là học cách biến sự quyết đoán này thành sức hút, không phải xung đột. Người lãnh đạo giỏi nhất không phải là người to tiếng nhất — mà là người khiến người khác muốn đi theo vì họ tin tưởng tầm nhìn đó.`,
            `Trong tình yêu và các mối quan hệ, giai đoạn này đặt ra câu hỏi quan trọng: <strong>bạn muốn đồng hành hay muốn người đi theo?</strong> Số 1 trong chu kỳ 2 cần học cách xây dựng mối quan hệ giữa hai người bình đẳng — không phải người dẫn và kẻ theo, không phải người quyết định và kẻ chấp nhận. Khi bạn tìm được người đủ mạnh để đứng cạnh chứ không đứng sau bạn, mối quan hệ đó sẽ là nền tảng của sức mạnh lớn nhất bạn từng có.`,
          ],
          lesson: `Thời kỳ xây dựng với số 1 dạy bạn rằng <strong>lãnh đạo thực sự không phải là đứng trên người khác — mà là đứng trước họ, chỉ đường và chịu trách nhiệm về những gì xảy ra sau lưng mình</strong>.`
        },
        2: {
          theme: 'Thời kỳ kết nối — Xây dựng những mối quan hệ thay đổi tất cả',
          paragraphs: [
            `Giai đoạn trưởng thành của <strong>${name}</strong> với năng lượng số <strong>2</strong> đặt con người lên trung tâm của mọi thứ. Đây là thời kỳ bạn nhận ra rằng <em>không ai có thể thực sự thành công một mình</em> — và sức mạnh thực sự của bạn không nằm ở việc làm mọi thứ một mình, mà ở khả năng xây dựng những liên minh, đối tác và mạng lưới tin tưởng đủ mạnh để nâng đỡ những mục tiêu lớn hơn bản thân.`,
            `Trong sự nghiệp, bạn thường tỏa sáng nhất ở vai trò mà người khác hay bỏ qua: người xây dựng đồng thuận, người hòa giải trong xung đột, người giữ mọi thứ không vỡ ra khi căng thẳng leo thang. <strong>Đóng góp thầm lặng nhất thường là đóng góp không thể thay thế nhất</strong> — và bạn là người hiểu điều này sâu sắc nhất. Hãy học cách đánh giá cao vai trò này của chính mình thay vì so sánh với những người ồn ào hơn.`,
            `Tình yêu và gia đình trong giai đoạn này thường chiếm vị trí quan trọng hơn hầu hết mọi thứ khác. Bạn đầu tư vào mối quan hệ bằng cả trái tim — và khi được đáp lại xứng đáng, bạn nở rộ theo những cách mà không ai ngoài người thân cận mới có thể nhận ra. Khi không được đáp lại, bạn có thể tàn héo trong im lặng. Bài học quan trọng nhất: <em>học cách nói ra những gì bạn cần trước khi nó trở thành vết thương không lành.</em>`,
          ],
          lesson: `Chu kỳ xây dựng với số 2 hứa hẹn điều này: <strong>những mối quan hệ bạn nuôi dưỡng trong giai đoạn này — bằng sự kiên nhẫn, sự lắng nghe và lòng chân thành — sẽ trở thành tài sản quý giá nhất của cuộc đời bạn</strong>.`
        },
        3: {
          theme: 'Mùa bứt phá sáng tạo — Tìm thấy tiếng nói của mình',
          paragraphs: [
            `Giai đoạn trưởng thành với số <strong>3</strong> là mùa bứt phá sáng tạo của <strong>${name}</strong>. Bạn giỏi nhất trong những lĩnh vực đòi hỏi ý tưởng và biểu đạt — viết, nói, thiết kế, giảng dạy, diễn xuất. Đây cũng là giai đoạn cần rèn thêm kỷ luật để hoàn thành những gì đã bắt đầu, tránh để tài năng rơi vào sự tản mạn.`,
            `Trong sự nghiệp, bạn tỏa sáng ở những nơi cần sự sáng tạo và kết nối con người. Bạn là người mang năng lượng vào phòng, người làm cho ý tưởng trở nên sống động và dễ hiểu hơn. Nhưng giai đoạn này cũng đòi hỏi bạn học cách <em>biến tài năng thành sản phẩm có giá trị thực tế</em> — không chỉ những buổi trình bày hay những ý tưởng đầy hứa hẹn, mà là những thứ hoàn chỉnh và tạo ra tác động thực.`,
            `Cuộc sống xã hội và tình yêu trong giai đoạn này phong phú và đôi khi hỗn độn. Bạn kết bạn dễ dàng — và đôi khi kết yêu cũng dễ dàng không kém. Thách thức là tìm ra người thực sự xứng đáng với sự đầu tư cảm xúc sâu hơn của bạn, không chỉ là những người mang lại sự phấn khích nhất thời. <strong>Chiều sâu của mối quan hệ đến không phải từ những người hấp dẫn nhất — mà từ những người ở lại khi sự phấn khích qua đi.</strong>`,
          ],
          lesson: `Giai đoạn xây dựng với số 3 dạy bạn điều quan trọng nhất: <strong>tài năng là hạt giống, nhưng kỷ luật mới là nước tưới — và chỉ khi kết hợp cả hai, những điều thực sự vĩ đại mới có thể nở rộ</strong>.`
        },
        4: {
          theme: 'Thời kỳ tích lũy — Những nền tảng được xây trong yên lặng',
          paragraphs: [
            `Giai đoạn trưởng thành của <strong>${name}</strong> với số <strong>4</strong> không phải giai đoạn hào nhoáng nhất — nhưng chắc chắn là giai đoạn quan trọng nhất. Đây là thời kỳ những quyết định đúng đắn được đưa ra không phải vì cảm hứng nhất thời mà vì sự tính toán kỹ lưỡng và kỷ luật bền bỉ. Mỗi thứ bạn xây trong giai đoạn này — sự nghiệp, tài chính, gia đình, thói quen — đều đang tạo nên nền móng cho những điều lớn hơn bạn sẽ đạt được trong giai đoạn sau.`,
            `Trong sự nghiệp, bạn nổi bật không phải vì sự hào phóng hay sự lôi cuốn — mà vì sự đáng tin cậy. <em>Bạn nói là làm, hứa là giữ</em>, và điều đó trong dài hạn xây dựng được uy tín mà không kỹ năng thuyết trình nào có thể tạo ra. Hãy kiên nhẫn — thành công của số 4 thường đến muộn hơn một chút so với những con số ồn ào hơn, nhưng khi đến, nó bền vững theo cách không gì có thể lung lay.`,
            `Trong gia đình và tình yêu, bạn là người xây dựng tổ ấm — không chỉ theo nghĩa đen, mà theo nghĩa cảm xúc. <strong>Bạn là người mà người thân biết họ có thể tin tưởng khi mọi thứ không ổn.</strong> Thách thức của giai đoạn này là tìm cách bảo vệ thời gian và năng lượng cho bản thân trong khi vẫn đáp ứng những trách nhiệm bạn coi là thiêng liêng. Kỷ luật với bản thân cũng cần thiết trong việc tự chăm sóc.`,
          ],
          lesson: `Chu kỳ xây dựng với số 4 hứa hẹn điều này: <strong>thứ bạn xây được trong giai đoạn im lặng này — từng viên gạch, từng thói quen, từng cam kết được giữ — sẽ là nền tảng mà cả phần còn lại của cuộc đời bạn đứng vững trên đó</strong>.`
        },
        5: {
          theme: 'Thời kỳ bứt phá — Những cánh cửa mới và những góc rẽ bất ngờ',
          paragraphs: [
            `Giai đoạn trưởng thành của <strong>${name}</strong> với số <strong>5</strong> thường là một bộ phim hành động nhiều tình tiết — thay đổi nghề nghiệp, di chuyển địa lý, những mối quan hệ bất ngờ và những cơ hội không ai tiên liệu được. Điều này có thể gây ra cảm giác không ổn định với người xung quanh, nhưng với bạn — khi được sống đúng với năng lượng số 5 — đây chính xác là cách cuộc đời nên vận hành. <em>Sự thay đổi không phải là kẻ thù của bạn. Đó là cách bạn tiến hóa.</em>`,
            `Trong sự nghiệp, bạn thường không phù hợp với những công việc tẻ nhạt và lặp đi lặp lại. Bạn cần sự đa dạng — cần được học những thứ mới, gặp những người mới và đối mặt với những thách thức không giống những gì đã qua. Những vị trí lý tưởng cho số 5 trong giai đoạn này là những nơi đòi hỏi sự linh hoạt và khả năng thích nghi: truyền thông, kinh doanh quốc tế, bán hàng, tư vấn, du lịch. <strong>Xem sự thay đổi nghề nghiệp như một chiến lược, không phải thất bại</strong> — đó là cách số 5 tiếp cận thị trường lao động khôn ngoan nhất.`,
            `Tình yêu và các mối quan hệ trong giai đoạn này thường phức tạp hơn những gì bạn dự tính. Bạn muốn tự do — nhưng cũng muốn kết nối thực sự. Hai điều này không phải mâu thuẫn, nhưng cần sự khéo léo để cân bằng. <em>Người bạn đời lý tưởng trong giai đoạn này không phải người giống bạn — mà là người đủ vững chắc để bạn có thể trở về sau mỗi chuyến phiêu lưu, nhưng cũng đủ tự do để không cố giam giữ bạn.</em>`,
          ],
          lesson: `Giai đoạn xây dựng với số 5 trao cho bạn thứ không thể học từ sách: <strong>khả năng điều hướng sự không chắc chắn với sự duyên dáng — không phải vì bạn không sợ, mà vì bạn đã quen đủ với sự thay đổi để biết rằng bạn luôn có thể tìm thấy con đường của mình</strong>.`
        },
        6: {
          theme: 'Thời kỳ gánh vác — Học cách yêu mà không mất mình',
          paragraphs: [
            `Giai đoạn trưởng thành của <strong>${name}</strong> với số <strong>6</strong> thường đặt nặng lên vai bạn những trách nhiệm thiêng liêng nhất — gia đình, con cái, cha mẹ già, cộng đồng. Đây là giai đoạn bạn trở thành <em>nơi nương tựa cho những người bạn yêu thương</em>, và điều đó vừa đẹp vừa nặng nề theo cách mà không ai ngoài bạn có thể hiểu hoàn toàn.`,
            `Trong sự nghiệp, bạn thường bị thu hút đến những lĩnh vực liên quan đến phục vụ và nuôi dưỡng: giáo dục, y tế, tư vấn, thiết kế không gian sống, nghệ thuật. Bạn làm tốt nhất khi công việc của mình có ý nghĩa rõ ràng với người khác — khi bạn có thể nhìn thấy tác động của mình trong cuộc sống của những người bạn phục vụ. <strong>Đừng để áp lực xã hội định nghĩa "thành công" theo những tiêu chuẩn không phù hợp với bản chất của bạn.</strong>`,
            `Thách thức lớn nhất của chu kỳ này là <em>ranh giới</em>. Bạn muốn giúp — nhưng không phải ai nhận sự giúp đỡ của bạn đều sử dụng nó đúng cách. Không phải mọi người đều xứng đáng với mức độ hy sinh mà bạn sẵn sàng thực hiện. Học cách phân biệt ai thực sự cần bạn và ai chỉ đang tiêu tốn năng lượng của bạn là bài học tối quan trọng của giai đoạn này — và nó cần được học trước khi bạn kiệt sức.`,
          ],
          lesson: `Giai đoạn xây dựng với số 6 dạy bạn điều không dễ nhưng cần thiết: <strong>tình yêu thương bền vững nhất không phải là tình yêu hy sinh tất cả — mà là tình yêu đến từ sự sung mãn của một trái tim cũng được yêu thương và chăm sóc đủ đầy</strong>.`
        },
        7: {
          theme: 'Thời kỳ đào sâu — Trở thành chuyên gia và nhà tư tưởng',
          paragraphs: [
            `Giai đoạn trưởng thành của <strong>${name}</strong> với số <strong>7</strong> là thời kỳ của sự tích lũy tri thức và chuyên môn sâu. Bạn không hài lòng với sự hiểu biết bề mặt — bạn muốn <em>hiểu thực sự</em>, muốn đi đến tận cùng của mỗi câu hỏi, muốn trở thành người mà người khác tìm đến khi họ cần sự thật thay vì sự an ủi. Đây là giai đoạn bạn xây dựng uy quyền tri thức theo nghĩa sâu sắc nhất.`,
            `Trong sự nghiệp, bạn thường xuất sắc nhất ở những lĩnh vực đòi hỏi sự tập trung dài hạn và tư duy phân tích: nghiên cứu, khoa học, tư vấn chiến lược, triết học, tâm lý học, công nghệ. Bạn không cần đám đông để thăng hoa — bạn cần sự yên tĩnh và không gian để tư duy. <strong>Hãy bảo vệ điều kiện làm việc này như một điều kiện sống còn, không phải đặc quyền.</strong>`,
            `Trong các mối quan hệ, giai đoạn này đòi hỏi bạn học cách <em>chia sẻ thế giới nội tâm phong phú của mình một cách có chọn lọc</em>. Bạn không cần phải mở lòng với tất cả mọi người — nhưng bạn cần ít nhất một hay hai người thực sự được phép bước vào. Sự cô đơn có chọn lọc là lành mạnh. Sự cô lập vì sợ hãi thì không — và bạn cần thành thật với bản thân về sự khác biệt này.`,
          ],
          lesson: `Giai đoạn xây dựng với số 7 tạo ra điều thế giới thực sự cần: <strong>những con người đã đủ dũng cảm để đi sâu — vào tri thức, vào bản thân, vào sự thật khó chịu — và có thể trở về với những hiểu biết mà người khác không thể đến được nếu không có người dẫn đường như bạn</strong>.`
        },
        8: {
          theme: 'Thời kỳ quyền lực — Thu hoạch những gì đã gieo',
          paragraphs: [
            `Giai đoạn trưởng thành của <strong>${name}</strong> với số <strong>8</strong> là thời kỳ mà những nỗ lực tích lũy từ trước bắt đầu sinh trái. Tài chính, địa vị, ảnh hưởng — những thứ này không đến ngẫu nhiên với số 8. Chúng đến như kết quả trực tiếp của sự kỷ luật, tầm nhìn chiến lược và khả năng không bỏ cuộc khi người khác đã từ bỏ lâu rồi. <em>Đây là giai đoạn để thu hoạch — nhưng cũng là giai đoạn để định nghĩa lại thành công bằng những tiêu chuẩn sâu sắc hơn tiền bạc và địa vị.</em>`,
            `Trong sự nghiệp, bạn thường ở vị trí lãnh đạo — chính thức hoặc không chính thức. Người ta tìm đến bạn để đưa ra quyết định, để xử lý tình huống khó, để tạo ra kết quả khi áp lực cao nhất. <strong>Bạn không nên từ chối vai trò này — nhưng bạn cần học cách không để nó tiêu hóa mọi phần khác của cuộc đời mình.</strong> Thành công mà cái giá là mất đi sức khỏe, gia đình hay sự bình an nội tâm không phải thành công — đó là sự trao đổi không cân xứng.`,
            `Sự thịnh vượng vật chất trong giai đoạn này cũng thường đi kèm với những bài kiểm tra về lòng chính trực: cơ hội cắt góc, những mối quan hệ chỉ vì lợi ích, những quyết định giữa cái gì đúng và cái gì có lợi. <em>Cách bạn đối diện với những bài kiểm tra này sẽ định hình di sản thực sự của bạn</em> — không phải con số tài khoản ngân hàng.`,
          ],
          lesson: `Giai đoạn xây dựng với số 8 dạy bạn bài học sâu sắc nhất về quyền lực: <strong>quyền lực thực sự không phải là khả năng kiểm soát người khác — mà là sự làm chủ đối với chính mình, ngay cả khi bạn có đủ sức để không cần làm vậy</strong>.`
        },
        9: {
          theme: 'Thời kỳ cống hiến — Mở rộng tình yêu ra thế giới',
          paragraphs: [
            `Giai đoạn trưởng thành của <strong>${name}</strong> với số <strong>9</strong> thường là thời kỳ mà bạn nhận ra một sự thật lớn: <em>những mục tiêu cá nhân đơn thuần không còn đủ khiến bạn bừng sáng.</em> Bạn cần điều gì đó lớn hơn bản thân — một sứ mệnh, một cộng đồng, một đóng góp có thể cảm nhận được trong thế giới rộng hơn bốn bức tường của cuộc đời riêng. Đây không phải ảo tưởng — đây là bản năng linh hồn của số 9 đang tự khẳng định.`,
            `Trong sự nghiệp, bạn thường bị thu hút đến những lĩnh vực có tác động xã hội rõ ràng: từ thiện, giáo dục, y tế, nghệ thuật có tầm ảnh hưởng, hoạt động cộng đồng. Nhưng ngay cả trong những ngành nghề bình thường, bạn tìm cách làm cho công việc của mình có ý nghĩa hơn — <strong>bằng cách chú ý đến con người đằng sau công việc, không chỉ kết quả của nó.</strong>`,
            `Giai đoạn này cũng thường đem đến những mất mát lớn — chia tay, kết thúc, những điều bạn yêu quý phải để lại phía sau. Số 9 ở chu kỳ 2 đang dạy bạn bài học thiêng liêng nhất: <em>buông bỏ không phải là từ bỏ — đó là hành động yêu thương sâu sắc nhất</em>, khi bạn nhận ra rằng giữ lấy đôi khi gây hại nhiều hơn là để đi.`,
          ],
          lesson: `Chu kỳ xây dựng với số 9 hứa hẹn điều này: <strong>khi bạn dám sống vì điều gì đó lớn hơn bản thân, cuộc đời bạn không trở nên nhỏ bé hơn — mà trở nên lớn hơn gấp nhiều lần theo những cách mà bạn sẽ chỉ hiểu khi nhìn lại về sau</strong>.`
        },
        11: {
          theme: 'Thời kỳ thức tỉnh — Sứ mệnh tâm linh bắt đầu hiện rõ',
          paragraphs: [
            `Giai đoạn trưởng thành của <strong>${name}</strong> với số chủ <strong>11</strong> thường mang theo một sự thức tỉnh — đôi khi từ từ, đôi khi đột ngột — về thứ mà bạn thực sự được sinh ra để làm. Đây là giai đoạn mà trực giác của bạn trở nên không thể phủ nhận: những linh cảm chính xác đến mức đáng sợ, những kết nối vô hình mà bạn bắt đầu học cách tin tưởng thay vì gạt đi. <em>Thế giới bên ngoài không cần biết điều bạn biết — bạn chỉ cần học cách hành động theo nó.</em>`,
            `Trong sự nghiệp, số 11 ở giai đoạn này thường tìm được con đường của mình ở những lĩnh vực kết hợp sự sáng tạo và tầm nhìn tâm linh: nghệ thuật, âm nhạc, viết lách, tư vấn tâm lý, giáo dục có chiều sâu, các phong trào xã hội. Bạn không phù hợp với những cấu trúc cứng nhắc — và sự nghiệp lý tưởng của bạn thường là những gì bạn tự tạo ra, không phải những gì ai đó thiết kế sẵn cho bạn.`,
            `Thách thức lớn nhất của giai đoạn này là <strong>học cách chuyển hóa sự nhạy cảm thành sức mạnh thay vì gánh nặng</strong>. Bạn cảm thấy nhiều — nhưng bạn cũng có thể bị kiệt sức vì hoàn cảnh và con người xung quanh nếu không học cách bảo vệ năng lượng của mình. Ranh giới không phải là bức tường — đó là sự bảo vệ thiêng liêng cho món quà mà bạn được trao để chia sẻ với thế giới.`,
          ],
          lesson: `Giai đoạn xây dựng với số 11 định nghĩa rõ nhất sứ mệnh của bạn: <strong>không phải để cứu vớt mọi người, mà để tỏa ánh sáng đúng thời điểm, đúng nơi, với đúng những người có thể nhận và biến nó thành điều gì đó tốt đẹp hơn cho thế giới này</strong>.`
        },
        22: {
          theme: 'Thời kỳ xây dựng di sản — Biến tầm nhìn thành hiện thực',
          paragraphs: [
            `Giai đoạn trưởng thành của <strong>${name}</strong> với số chủ <strong>22</strong> là thời kỳ mà tầm nhìn lớn bắt đầu gặp được những công cụ thực tế để hiện thực hóa. Đây là giai đoạn của những dự án quy mô vượt xa cá nhân — những thứ bạn xây dựng không chỉ cho bản thân mà cho nhiều người, không chỉ cho hôm nay mà cho nhiều năm về sau. <em>Cảm giác "phải làm điều gì đó lớn hơn" không còn là mơ hồ — nó trở thành kế hoạch cụ thể với những bước rõ ràng.</em>`,
            `Trong sự nghiệp, số 22 ở giai đoạn này thường ở vị trí kỳ lạ: bạn nhìn thấy những điều mà người khác chưa thấy, nhưng bạn cũng phải làm việc với thực tế mà người khác đang phải sống. Sự kết hợp giữa tầm nhìn tâm linh và kỷ luật thực tế — hai yếu tố cốt lõi của số 22 — phải được cân bằng liên tục. <strong>Những người vĩ đại nhất không phải những người chỉ mơ giỏi, cũng không phải những người chỉ thực thi giỏi — mà là những người làm được cả hai một lúc.</strong>`,
            `Áp lực trong giai đoạn này rất lớn — từ bên ngoài và từ bên trong. Từ bên ngoài, người ta kỳ vọng nhiều ở bạn. Từ bên trong, bạn kỳ vọng nhiều ở chính mình hơn bất kỳ ai. Học cách chia nhỏ tầm nhìn lớn thành những bước có thể thực hiện được từng ngày — đó là kỹ năng tối quan trọng. <em>Vĩ đại không được xây trong một ngày. Nó được xây từng viên gạch — với sự kiên nhẫn mà người từ bên ngoài không thể thấy.</em>`,
          ],
          lesson: `Chu kỳ xây dựng với số 22 hứa hẹn: <strong>khi bạn kiên trì với tầm nhìn của mình qua những năm tháng khó khăn và đôi khi cô đơn, thứ bạn tạo ra cuối cùng sẽ không chỉ thay đổi cuộc đời bạn — mà sẽ là điều mà nhiều người khác nhìn vào và tìm thấy can đảm để bắt đầu hành trình của chính họ</strong>.`
        },
      },

      // ══════════ CHU KỲ 3 — THU HOẠCH (VIÊN MÃN) ══════════
      3: {
        1: {
          theme: 'Viên mãn trong độc lập — Sống đúng với chính mình không cần chứng minh',
          paragraphs: [
            `Giai đoạn viên mãn của <strong>${name}</strong> với số <strong>1</strong> mang theo một sự tự do đặc biệt: <em>bạn không còn cần phải chứng minh mình là ai với bất kỳ ai.</em> Những năm tháng đầu đời tranh đấu để được nhìn nhận, những năm trưởng thành cố gắng khẳng định vị trí — tất cả đã qua. Giai đoạn này trao cho bạn đặc quyền quý giá nhất mà con người có thể có: sự tự do để sống hoàn toàn theo những gì bạn thực sự muốn, không phải những gì người khác kỳ vọng.`,
            `Đây là giai đoạn nhiều người mang số 1 thực sự bắt đầu tỏa sáng theo cách riêng — không phải vì họ đã cố gắng hơn, mà vì họ đã ngừng cố gắng chứng minh và bắt đầu <em>đơn giản là tồn tại</em> trong sức mạnh của chính mình. Những người xung quanh cảm nhận được sự khác biệt này — có một thứ gì đó ổn định, chắc chắn và chân thực trong bạn mà những năm trước chưa có.`,
            `Đóng góp của bạn trong giai đoạn này thường là sự chia sẻ kinh nghiệm và tầm nhìn — không phải qua việc lãnh đạo như trước, mà qua việc trở thành <strong>tấm gương sáng về điều có thể đạt được khi một người dám sống đúng với bản thân mình.</strong> Những người trẻ hơn nhìn vào bạn và thấy rằng họ không cần phải thu nhỏ bản thân để được chấp nhận — và đó là đóng góp lớn hơn nhiều so với bất kỳ thành tích nào.`,
          ],
          lesson: `Giai đoạn thu hoạch với số 1 là bằng chứng sống của một sự thật đơn giản: <strong>con người tự do nhất không phải là người không có ràng buộc — mà là người đã biết đủ về bản thân mình để không cần bất kỳ sự chấp thuận nào từ bên ngoài để cảm thấy trọn vẹn</strong>.`
        },
        2: {
          theme: 'Viên mãn trong kết nối — Tình yêu và sự trân trọng',
          paragraphs: [
            `Giai đoạn viên mãn của <strong>${name}</strong> với số <strong>2</strong> là thời kỳ đẹp nhất của những kết nối. Những mối quan hệ bạn đã đầu tư qua nhiều thập kỷ — tình bạn, gia đình, tình yêu — giờ mang lại những trái ngọt ngào theo cách mà bạn đã từng hy vọng nhưng chưa dám chắc. <em>Sự kiên nhẫn và lòng chân thành mà bạn đã gieo suốt cuộc đời đang trở về với bạn theo những hình thức đẹp đẽ nhất.</em>`,
            `Vai trò của bạn trong giai đoạn này thường chuyển từ người xây dựng kết nối sang <em>người gìn giữ và nuôi dưỡng những kết nối đó</em>. Bạn là người mà cả gia đình quay về, là người mà bạn bè tin tưởng chia sẻ những điều chưa nói với ai, là người mà cộng đồng nhỏ của bạn biết rằng sẽ luôn được chào đón ấm áp. Đây không phải vai trò nhỏ — đây là loại ảnh hưởng mà ít người có thể tạo ra.`,
            `Giai đoạn này cũng là thời điểm để bạn học cách <strong>nhận sự quan tâm với cùng vẻ duyên dáng mà bạn đã cho đi cả đời</strong>. Nếu bạn luôn là người chăm sóc, việc chấp nhận sự chăm sóc lại có thể cảm thấy kỳ lạ. Nhưng đây là bài học cuối cùng và đẹp nhất của số 2 — rằng yêu thương thực sự chảy theo hai chiều, và cho phép mình được yêu là một hành động dũng cảm và tuyệt đẹp.`,
          ],
          lesson: `Giai đoạn thu hoạch với số 2 trao cho bạn điều quý giá nhất: <strong>sự hiểu biết sâu sắc rằng cuộc đời đẹp nhất không phải là cuộc đời nhiều thành tích — mà là cuộc đời nhiều tình yêu thương thực sự được trao và được nhận theo cả hai chiều</strong>.`
        },
        3: {
          theme: 'Viên mãn trong sáng tạo — Di sản của những câu chuyện được kể',
          paragraphs: [
            `Giai đoạn viên mãn của <strong>${name}</strong> với số <strong>3</strong> thường là giai đoạn sáng tạo đỉnh cao — không phải vì kỹ thuật đỉnh cao (dù có thể vậy), mà vì <em>sự chân thực đỉnh cao.</em> Những gì bạn tạo ra trong giai đoạn này — dù là văn chương, âm nhạc, nghệ thuật, hay đơn giản là những câu chuyện bạn kể cho người yêu thương — đều mang theo chiều sâu của một người đã sống đủ lâu để biết điều gì thực sự quan trọng.`,
            `Bạn trở thành người kể chuyện của thế hệ mình — <strong>không phải vì bạn có câu chuyện hay nhất, mà vì bạn biết cách làm cho mọi câu chuyện trở thành thứ gì đó người khác có thể nhìn vào và thấy chính mình trong đó.</strong> Đây là món quà đặc biệt của số 3 ở giai đoạn viên mãn — không còn kể chuyện để được chú ý, mà kể chuyện để kết nối người với người qua những sự thật chung của con người.`,
            `Niềm vui vẫn là ngôn ngữ cốt lõi của bạn — nhưng giờ nó có thêm chiều sâu của người đã biết rằng niềm vui không phải là sự né tránh thực tế mà là cách chọn sống trong thực tế đó. <em>Sự vui vẻ của bạn trong giai đoạn này không phải vì cuộc sống hoàn hảo — mà vì bạn đã đủ khôn ngoan để nhận ra sự hoàn hảo trong những điều không hoàn hảo.</em>`,
          ],
          lesson: `Giai đoạn thu hoạch với số 3 để lại di sản đẹp nhất: <strong>những câu chuyện, những tác phẩm và những khoảnh khắc vui vẻ mà bạn đã tạo ra và chia sẻ — chúng sẽ sống trong ký ức của những người được chúng chạm đến, lâu hơn nhiều so với bất kỳ thứ vật chất nào bạn có thể để lại</strong>.`
        },
        4: {
          theme: 'Viên mãn trong bền vững — Nhìn lại những điều đã xây',
          paragraphs: [
            `Giai đoạn viên mãn của <strong>${name}</strong> với số <strong>4</strong> trao cho bạn một đặc quyền hiếm có: <em>khả năng nhìn lại và thấy rằng những gì bạn đã xây cẩn thận, kiên nhẫn qua nhiều thập kỷ đã đứng vững.</em> Không phải ai cũng có được sự thỏa mãn này — nhiều người dành cả đời xây những tòa lâu đài trên cát. Nhưng bạn, với kỷ luật và sự kiên định của số 4, đã xây trên đá — và giờ bạn có thể đứng trên nền móng đó và nhìn thấy những gì không gì có thể lung lay.`,
            `Gia đình và những mối quan hệ lâu bền là niềm vui lớn nhất của giai đoạn này. <strong>Sự trung thành và kiên định mà bạn đã thể hiện trong nhiều thập kỷ đã tạo ra những mối kết nối sâu và bền vững mà người đi đường tắt không bao giờ có được.</strong> Đây là thứ không thể mua bằng tiền hay đạt được bằng sự hào nhoáng — nó chỉ đến từ năm tháng của sự xuất hiện đáng tin cậy.`,
            `Giai đoạn này cũng là lúc để buông bỏ sự kiểm soát — một cách nhẹ nhàng và tự nguyện. <em>Đời cần bạn làm kiến trúc sư ít hơn và làm người thưởng thức nhiều hơn.</em> Hãy học cách để những thế hệ sau tiếp quản những gì bạn đã xây, tin rằng nền móng bạn đặt đủ vững để họ có thể phát triển trên đó theo những cách bạn chưa tưởng tượng đến.`,
          ],
          lesson: `Giai đoạn thu hoạch với số 4 xác nhận sự thật lớn nhất của cuộc đời bạn: <strong>không phải những thứ lớn lao và hào nhoáng tạo nên ý nghĩa — mà là những thứ nhỏ bé nhưng bền vững, được xây bằng tình yêu và kỷ luật qua từng ngày bình thường của cuộc sống</strong>.`
        },
        5: {
          theme: 'Viên mãn trong tự do — Sống phiêu lưu không cần xin phép',
          paragraphs: [
            `Giai đoạn viên mãn của <strong>${name}</strong> với số <strong>5</strong> thường là giai đoạn bùng phát bất ngờ — khi nhiều người khác bắt đầu chậm lại, bạn lại tìm thấy thêm năng lượng mới. Những kế hoạch từng bị hoãn lại vì trách nhiệm giờ có thể được thực hiện. Những ước mơ từng bị đặt sang một bên vì "chưa đúng lúc" giờ đã đến lúc — và thứ đặc biệt là bạn <em>biết cách thực hiện chúng với sự khôn ngoan mà tuổi trẻ không có.</em>`,
            `Đây là giai đoạn mà sự tò mò trí tuệ của bạn không giảm đi — nó đổi hướng. <strong>Thay vì phiêu lưu vì sự mới mẻ, bạn phiêu lưu vì sự hiểu biết ngày càng sâu hơn về vũ trụ rộng lớn mà bạn đang sống trong đó.</strong> Mỗi trải nghiệm mới không chỉ là một trải nghiệm — nó là một trang sách bổ sung vào cuốn bách khoa toàn thư sống của bạn.`,
            `Giai đoạn này cũng là thời điểm để thiết lập lại định nghĩa về "kết nối". Bạn không cần quá nhiều người — nhưng những người bạn chọn giữ lại cần thiết hơn bao giờ hết. <em>Chất lượng thay thế số lượng. Sự thực sự thay thế sự hào nhoáng.</em> Và bạn — với kinh nghiệm đời dồi dào — đã biết cách phân biệt hai thứ đó rất rõ ràng.`,
          ],
          lesson: `Giai đoạn thu hoạch với số 5 trao cho bạn điều mà nhiều người chỉ mơ ước: <strong>sự tự do thực sự — không phải vì không có gì ràng buộc, mà vì bạn đã học được cách sống trong bất kỳ hoàn cảnh nào mà vẫn cảm thấy mình đang bay</strong>.`
        },
        6: {
          theme: 'Viên mãn trong tình yêu — Thu hoạch những trái tim bạn đã gieo',
          paragraphs: [
            `Giai đoạn viên mãn của <strong>${name}</strong> với số <strong>6</strong> là hành trình về nhà — theo nghĩa sâu sắc nhất của từ này. Những gì bạn đã đặt vào gia đình, vào tình yêu, vào cộng đồng trong nhiều thập kỷ qua giờ hiện diện xung quanh bạn theo những hình thức ấm áp và cụ thể nhất. <em>Những con người bạn yêu thương và chăm sóc đang phản chiếu lại tình yêu đó.</em> Đây là thứ không có giá nào mua được.`,
            `Trong giai đoạn này, vai trò của bạn thường chuyển thành người <strong>truyền đạt sự khôn ngoan về tình yêu và gia đình</strong> cho những thế hệ sau. Không phải bằng những bài giảng hay lý thuyết — mà bằng cách sống đúng là tấm gương của những gì tình yêu thực sự trông như thế nào: sự hiện diện, sự kiên nhẫn, sự chấp nhận và sự tôn trọng lẫn nhau qua những thứ không dễ dàng.`,
            `Giai đoạn này cũng là thời điểm để học cách <em>buông bỏ những trách nhiệm mà bạn đã mang quá lâu</em>. Không phải từ bỏ — mà là trao lại cho những người đã sẵn sàng tiếp nhận. Khi bạn học cách giữ sợi dây kết nối trong khi không còn cần phải kéo căng nó nữa, bạn sẽ tìm thấy một loại bình an mà tất cả những năm tháng bận rộn không bao giờ cho phép.`,
          ],
          lesson: `Giai đoạn thu hoạch với số 6 cô đọng thành một sự thật ngắn gọn: <strong>tình yêu thương bạn đã cho đi — dù không ai đếm, dù không phải lúc nào cũng được đền đáp xứng đáng — đã tạo nên một di sản vô hình nhưng bất tử trong trái tim của tất cả những người may mắn được bạn yêu</strong>.`
        },
        7: {
          theme: 'Viên mãn trong tri thức — Chia sẻ những gì đã học được từ thâm sâu',
          paragraphs: [
            `Giai đoạn viên mãn của <strong>${name}</strong> với số <strong>7</strong> thường là thời kỳ mà sự khôn ngoan tích lũy cả đời bắt đầu tỏa sáng một cách tự nhiên và không cần cố gắng. <em>Bạn không cần phải chứng minh mình biết nhiều — điều đó hiện rõ trong cách bạn nghe, cách bạn đặt câu hỏi và cách bạn nói điều đúng vào đúng thời điểm mà không ai khác nhận ra là cần thiết.</em>`,
            `Giai đoạn này thường mang theo sự bình an nội tâm sâu sắc — không phải vì mọi thứ đã được giải đáp, mà vì bạn đã học được cách sống thoải mái với những câu hỏi không có câu trả lời. <strong>Đây là loại trí tuệ mà không trường đại học nào có thể trao — nó chỉ đến từ việc đã sống đủ lâu và đủ sâu để biết rằng sự bí ẩn không phải điều để sợ, mà là điều để tôn trọng.</strong>`,
            `Đóng góp của bạn trong giai đoạn này thường đến qua sự hiện diện và những cuộc trò chuyện. <em>Người tìm đến bạn không chỉ tìm câu trả lời — họ tìm sự hiểu biết.</em> Và bạn, với chiều sâu và sự bình an mà số 7 ở giai đoạn viên mãn mang lại, có thể trao cho họ thứ đó theo cách mà không có sách nào có thể thay thế.`,
          ],
          lesson: `Giai đoạn thu hoạch với số 7 tổng kết hành trình bằng một sự thật đẹp: <strong>sự khôn ngoan thực sự không phải là có câu trả lời cho mọi thứ — mà là biết những câu hỏi nào quan trọng nhất, và sống với chúng đủ lâu để hiểu được chiều sâu của chính những câu hỏi đó</strong>.`
        },
        8: {
          theme: 'Viên mãn trong di sản — Quyền lực được dùng để nâng đỡ',
          paragraphs: [
            `Giai đoạn viên mãn của <strong>${name}</strong> với số <strong>8</strong> là thời điểm mà những tài sản thực sự nhất của cuộc đời hiện ra — không phải chỉ là tài chính hay địa vị, mà là <em>sức ảnh hưởng có chiều sâu tích lũy qua nhiều thập kỷ của sự kiên định và chính trực.</em> Người ta tôn trọng bạn không vì những gì bạn có — mà vì những gì bạn đã làm và ai bạn đã là trong quá trình đó.`,
            `Giai đoạn này thường mang theo một sự chuyển hóa quan trọng với số 8: từ việc <em>tích lũy</em> sang việc <em>phân phối.</em> Đây là lúc bạn dùng những nguồn lực — tiền bạc, mạng lưới, kiến thức, ảnh hưởng — không phải để xây dựng thêm cho bản thân, mà để nâng đỡ những người đang ở vị trí bạn từng ở nhiều thập kỷ trước. <strong>Đây là khi vòng quay của số 8 khép lại hoàn toàn — và điều đó có một vẻ đẹp riêng không thể diễn tả.</strong>`,
            `Bình an nội tâm trong giai đoạn này đến từ việc nhận ra rằng thành công không phải là một đích đến — mà là một cuộc hành trình mà giá trị thật nằm trong những gì bạn học được và những ai bạn trở nên trong quá trình đó. <em>Sự nghiệp và tài sản có thể theo thời gian. Nhưng phẩm cách và di sản con người thì không.</em>`,
          ],
          lesson: `Giai đoạn thu hoạch với số 8 định nghĩa lại thành công theo cách đẹp nhất: <strong>quyền lực thực sự không phải là thứ bạn tích lũy được — mà là thứ bạn trao đi một cách khôn ngoan, và thấy nó tạo ra giá trị lớn hơn gấp nhiều lần trong tay những người bạn tin tưởng</strong>.`
        },
        9: {
          theme: 'Viên mãn trong buông bỏ — Sự giải phóng thiêng liêng',
          paragraphs: [
            `Giai đoạn viên mãn của <strong>${name}</strong> với số <strong>9</strong> là giai đoạn đẹp nhất và nhẹ nhàng nhất của hành trình dài — nếu bạn đã học được bài học tối quan trọng của số 9: <em>buông bỏ.</em> Điều này không có nghĩa là từ bỏ hay từ chối — đây là sự chấp nhận sâu sắc rằng mọi thứ đều có chu kỳ riêng, và sự khôn ngoan nằm ở chỗ biết khi nào là lúc ôm giữ và khi nào là lúc để đi.`,
            `Trong giai đoạn này, bạn thường trở thành <strong>người dẫn đường tâm linh</strong> cho những người xung quanh — không phải trong vai trò chính thức, mà đơn giản là qua sự hiện diện, qua những gì bạn đã sống qua và không còn sợ hãi. Người ta tìm đến bạn khi đứng trước những ngưỡng cửa lớn của cuộc đời vì họ cảm nhận rằng bạn đã đứng ở đó trước họ và đã đi qua với sự duyên dáng.`,
            `Tầm nhìn nhân đạo của bạn trong giai đoạn này đạt đến chiều sâu mà chỉ những năm tháng sống qua nhiều thứ mới tạo ra được. <em>Bạn không còn phân biệt "của tôi" và "của người khác" theo nghĩa cứng nhắc như trước.</em> Tình yêu của bạn mở rộng — không phải vì bạn cố gắng, mà vì sau tất cả những gì đã qua, bạn nhận ra rằng chúng ta tất cả đều đang ở trên cùng một con thuyền, với cùng những nỗi sợ và cùng những hy vọng.`,
          ],
          lesson: `Giai đoạn thu hoạch với số 9 để lại thông điệp thiêng liêng nhất của toàn bộ hành trình: <strong>cuộc đời không phải là về những gì bạn đạt được hay giữ lại được — mà là về những gì bạn đã cho đi, và sự nhẹ nhàng trong trái tim khi bạn nhận ra rằng sự cho đi đó đã tạo nên những gợn sóng tiếp tục lan rộng sau khi bạn không còn ở đây để thấy</strong>.`
        },
        11: {
          theme: 'Viên mãn của nhà tiên tri — Ánh sáng được trao lại',
          paragraphs: [
            `Giai đoạn viên mãn của <strong>${name}</strong> với số chủ <strong>11</strong> thường là giai đoạn mà sứ mệnh cuộc đời hiện ra rõ ràng nhất — không phải vì có ai đó tuyên bố, mà vì <em>bạn nhìn lại và thấy những sợi chỉ vô hình kết nối tất cả những gì bạn đã sống, đã học, đã trải qua.</em> Những điều từng có vẻ ngẫu nhiên giờ hiện ra như một bức tranh tổng thể có ý nghĩa sâu sắc.`,
            `Trong giai đoạn này, ảnh hưởng của bạn thường đến theo những cách bạn không hay biết. <strong>Những lời bạn nói, những điều bạn chia sẻ, những khoảnh khắc hiện diện chân thực mà bạn trao cho người khác — chúng sống tiếp trong những trái tim đó và lan truyền ra những nơi bạn không bao giờ thể đến được.</strong> Đây là sức mạnh thực sự của số 11 — không phải sân khấu lớn, mà là những kết nối âm thầm nhưng bất tử.`,
            `Sự bình an nội tâm của giai đoạn này đến từ việc không còn phải mang một mình gánh nặng của nhận thức. <em>Bạn đã học cách chia sẻ ánh sáng mà không bị tiêu tán, học cách bảo vệ sự nhạy cảm của mình mà không cần xây tường cao, học cách tồn tại với trọn vẹn cả hai thế giới — vật chất và tâm linh — mà không phải chọn một.</em>`,
          ],
          lesson: `Giai đoạn thu hoạch với số 11 tổng kết sứ mệnh bằng sự thật đơn giản nhưng sâu sắc nhất: <strong>bạn không đến thế giới này để được nhớ đến — bạn đến để thắp sáng. Và ánh sáng một khi đã được thắp lên thì không cần ai nhớ nguồn gốc — nó cứ tiếp tục soi sáng những con đường mà chính bạn cũng không thề thấy hết</strong>.`
        },
        22: {
          theme: 'Viên mãn của người kiến tạo — Di sản vĩ đại đứng vững',
          paragraphs: [
            `Giai đoạn viên mãn của <strong>${name}</strong> với số chủ <strong>22</strong> là lúc bạn có thể đứng lại và nhìn thấy những gì đã được xây dựng — không chỉ bằng tay bạn mà bằng tầm nhìn, sự kiên trì và sức chịu đựng của bạn qua nhiều thập kỷ. <em>Có những điều bạn đã tạo ra sẽ tồn tại lâu hơn bạn</em> — tổ chức, hệ thống, ý tưởng, con người bạn đã ảnh hưởng — và nhận ra điều đó có một ý nghĩa thiêng liêng khó diễn tả.`,
            `Giai đoạn này thường mang theo sự chuyển giao quan trọng: từ việc là người xây dựng sang trở thành <strong>người truyền cảm hứng cho thế hệ tiếp theo tiếp tục xây</strong>. Tầm nhìn bạn đã mang theo cả đời bây giờ cần được đặt vào những bàn tay khác — những người đủ trẻ để thực thi và đủ tầm để hiểu. Đây không phải sự từ bỏ — đây là hình thức đóng góp cao nhất.`,
            `Trong giai đoạn này, bình an đến từ việc nhận ra rằng <em>vĩ đại không đo bằng phạm vi mà đo bằng chiều sâu.</em> Bạn không cần phải thay đổi cả thế giới — bạn chỉ cần thay đổi đủ sâu trong phần thế giới mà bạn chạm đến. Và khi nhìn lại, bạn sẽ thấy rằng điều đó đã lan ra rộng hơn rất nhiều so với những gì bạn từng dám hy vọng.`,
          ],
          lesson: `Giai đoạn thu hoạch với số 22 kết thúc bằng sự thật vĩ đại nhất: <strong>di sản thực sự không phải là những thứ bạn xây bằng vật liệu — mà là những thứ bạn xây bằng cam kết, bằng tầm nhìn và bằng lòng dũng cảm để tin vào điều gì đó lớn hơn chính mình ngay cả khi không ai khác còn thấy nó rõ như bạn</strong>.`
        },
      },
    };

    // ── ADVICE DATA: lời khuyên thực tiễn cho (cycle × num) ──
    const adviceData = {
      1: { // CHU KỲ 1 — Niên Thiếu (Hình Thành)
        1: {
          career: `Tập trung học và thực hành kỹ năng lãnh đạo sớm — tham gia các câu lạc bộ, nhóm dự án, cuộc thi để rèn tính tiên phong. Chọn ngành học phù hợp với khát vọng dẫn đầu (kinh doanh, kỹ thuật, khoa học). <strong>Tránh</strong> để người khác áp đặt con đường nghề nghiệp của bạn.`,
          finance: `Bắt đầu tiết kiệm từ sớm dù số tiền nhỏ — xây dựng thói quen tài chính kỷ luật. Không vay mượn bốc đồng. Học kiến thức tài chính cơ bản như một môn học ưu tiên.`,
          health: `Kênh năng lượng dồi dào vào thể thao và hoạt động thể chất có cấu trúc. Học cách ngủ đủ giấc và quản lý stress sớm — tránh kiệt sức do làm việc quá mức.`,
          relationship: `Học cách lắng nghe thay vì luôn muốn dẫn đầu trong giao tiếp. Xây dựng tình bạn dựa trên sự tôn trọng lẫn nhau, không phải thống trị.`,
          avoid: `Bảo thủ, không chịu nhận góp ý; cô lập bản thân để tránh xung đột; chi tiêu bốc đồng để chứng tỏ `
        },
        2: {
          career: `Phát triển kỹ năng giao tiếp, lắng nghe và làm việc nhóm — đây là nền tảng nghề nghiệp lâu dài của bạn. Chọn hướng học liên quan đến con người (tâm lý, giáo dục, y tế, ngoại giao). <strong>Tránh</strong> để người khác lấn át quyết định học tập của bạn.`,
          finance: `Xây dựng ngân sách cơ bản và tránh chi tiêu cảm tính. Học cách đàm phán và thương lượng — kỹ năng này sẽ sinh lời cả đời. Tránh cho mượn tiền vì nể nang.`,
          health: `Chú ý sức khỏe tinh thần — học cách đặt ranh giới cảm xúc lành mạnh. Tập thể dục nhẹ nhàng như yoga, bơi lội. Không nhịn ăn hay bỏ bữa vì bận lo cho người khác.`,
          relationship: `Học cách nói "không" mà không cảm thấy có lỗi. Chọn bạn bè có chiều sâu thay vì chạy theo số lượng. Tránh quan hệ bạn bè phụ thuộc một chiều.`,
          avoid: `Hy sinh bản thân quá mức; để người khác kiểm soát quyết định của mình; tránh xung đột lành mạnh cần thiết`
        },
        3: {
          career: `Nuôi dưỡng tài năng nghệ thuật và sáng tạo — đừng để áp lực "thực tế" dập tắt thiên phú của bạn. Tìm hướng kết hợp sáng tạo với ứng dụng (thiết kế, truyền thông, marketing). <strong>Tránh</strong> bỏ dở quá nhiều dự án học tập.`,
          finance: `Thiết lập ngân sách cho các hoạt động sáng tạo. Học cách biến tài năng thành thu nhập sớm — bắt đầu từ những freelance nhỏ. Tránh chi tiêu bốc hứng.`,
          health: `Dành thời gian vui chơi có chủ đích — niềm vui là nhiên liệu của bạn. Tránh stress vì cố gắng làm hài lòng người khác. Ngủ đủ giấc thay vì thức khuya sáng tác.`,
          relationship: `Học cách lắng nghe sâu hơn là chỉ nói. Xây dựng tình bạn vượt qua lớp vui vẻ bề ngoài. Thực hành cam kết nhỏ để rèn tính kiên nhẫn.`,
          avoid: `Bỏ dở các cam kết khi mất hứng; che giấu cảm xúc sâu sau lớp vui vẻ; tiêu xài không có kế hoạch`
        },
        4: {
          career: `Đầu tư nghiêm túc vào nền móng học vấn — đây là giai đoạn quan trọng nhất để xây kỹ năng cốt lõi. Chọn ngành có tính thực tế và ứng dụng cao. Rèn thói quen học tập có hệ thống từ sớm.`,
          finance: `Lập "hũ tiết kiệm" từ số tiền nhỏ và duy trì không gián đoạn. Học về ngân sách cá nhân và tránh nợ nần trong giai đoạn đầu đời. Tiết kiệm trước khi chi tiêu.`,
          health: `Xây dựng thói quen vận động đều đặn — không cần cường độ cao, chỉ cần kiên trì. Giữ giờ ngủ ổn định. Tránh làm việc quá sức đến kiệt sức.`,
          relationship: `Đầu tư vào ít mối quan hệ nhưng sâu sắc. Học cách thư giãn và vui chơi — không phải lúc nào cũng cần nghiêm túc. Mở cửa cho sự tự phát và kết nối thật sự.`,
          avoid: `Cứng nhắc đến mức không thể thích nghi; bỏ qua sức khỏe vì học hành; cô lập bản thân trong "bong bóng kỷ luật"`
        },
        5: {
          career: `Thử nhiều hướng học tập và hoạt động ngoại khóa để tìm ra đam mê thực sự. Tránh chọn ngành chỉ vì ổn định — bạn cần sự kích thích trí tuệ. Phát triển nhiều kỹ năng linh hoạt thay vì chuyên sâu quá sớm.`,
          finance: `Học cách quản lý chi tiêu trong môi trường luôn thay đổi. Xây dựng quỹ khẩn cấp nhỏ để đối phó bất ngờ. Tránh đặt cược tài chính lớn vào "cơ hội hấp dẫn" chưa kiểm chứng.`,
          health: `Kênh tốc độ và năng lượng vào thể thao phiêu lưu (leo núi, bơi, võ thuật). Học cách dừng lại và nghỉ ngơi — không phải lúc nào cũng cần di chuyển. Tránh lạm dụng kích thích.`,
          relationship: `Học cách duy trì kết nối khi hoàn cảnh thay đổi. Đừng bỏ rơi người quan trọng khi đang bận chạy theo điều mới. Thực hành cam kết nhỏ để xây nền tảng lòng tin.`,
          avoid: `Bỏ dở mọi thứ khi mất hứng; chi tiêu theo cảm hứng không có kế hoạch; tránh mọi trách nhiệm dưới danh nghĩa "tự do"`
        },
        6: {
          career: `Hướng đến ngành nghề liên quan đến chăm sóc và phục vụ (y tế, giáo dục, tư vấn, thiết kế không gian sống). Học cách đặt ranh giới lành mạnh trong công việc nhóm. <strong>Tránh</strong> hy sinh việc học vì quá bận lo người khác.`,
          finance: `Tránh cho mượn tiền vì lòng tốt quá mức — học nói không với tài chính. Xây dựng ngân sách ưu tiên bản thân trước. Thiết lập mục tiêu tài chính rõ ràng cho tương lai.`,
          health: `Ưu tiên sức khỏe của chính mình trước — bạn không thể cho từ chiếc bình rỗng. Học cách nhận sự chăm sóc từ người khác thay vì luôn là người cho đi.`,
          relationship: `Đặt ranh giới rõ ràng trong các mối quan hệ — yêu thương không có nghĩa là không có giới hạn. Chọn bạn bè biết trân trọng và đáp lại sự quan tâm của bạn.`,
          avoid: `Hy sinh nhu cầu bản thân hoàn toàn vì người khác; can thiệp quá mức vào cuộc sống của người thân; bỏ bê sức khỏe cá nhân`
        },
        7: {
          career: `Phát triển chiều sâu trong một lĩnh vực trí tuệ thay vì rải rác. Chọn ngành cần tư duy phân tích sâu (khoa học, nghiên cứu, triết học, công nghệ). Đừng để áp lực xã hội buộc bạn chọn con đường "ổn định" mà thiếu chiều sâu.`,
          finance: `Nghiên cứu kỹ trước khi đầu tư bất cứ điều gì — đây là điểm mạnh tự nhiên của bạn. Xây dựng nền tảng tài chính ổn định trước khi mạo hiểm. Tránh bị thuyết phục bởi cơ hội nghe hay nhưng chưa được kiểm chứng.`,
          health: `Tạo thói quen thiền định hoặc tĩnh lặng hàng ngày — não bạn cần thời gian yên tĩnh để phục hồi. Tránh cô lập xã hội quá mức. Duy trì kết nối với thiên nhiên thường xuyên.`,
          relationship: `Học cách mở lòng chia sẻ nội tâm thay vì chỉ quan sát. Xây dựng tối thiểu 1-2 tình bạn thực sự sâu sắc. Thực hành kết nối cảm xúc — không chỉ kết nối trí tuệ.`,
          avoid: `Cô lập hoàn toàn; phân tích quá nhiều đến mức không hành động; coi thường cảm xúc của người khác`
        },
        8: {
          career: `Phát triển tư duy kinh doanh và chiến lược từ sớm. Tìm kiếm mentor trong lĩnh vực bạn muốn thống lĩnh. Học về lãnh đạo và quản lý tổ chức — đây là nền tảng cho tương lai bạn hướng đến.`,
          finance: `Học quản lý tài chính nghiêm túc như một kỹ năng chuyên nghiệp. Bắt đầu xây dựng thói quen tiết kiệm và đầu tư nhỏ. Tránh phô trương tài chính để khẳng định địa vị.`,
          health: `Học cách biết điểm dừng — tham vọng lớn dễ dẫn đến kiệt sức. Xây dựng thói quen tập luyện có kỷ luật. Quản lý stress bằng hoạt động thể chất, không phải công việc thêm.`,
          relationship: `Học cách kết nối với con người không chỉ qua lợi ích. Thực hành lắng nghe và thấu cảm — đây là điểm yếu cần rèn luyện. Tránh coi mọi mối quan hệ là "đầu tư chiến lược".`,
          avoid: `Ám ảnh thành công đến mức bỏ qua mọi thứ khác; sử dụng người khác để đạt mục đích; kiêu ngạo khi thành công nhỏ`
        },
        9: {
          career: `Khám phá các ngành nghề có ý nghĩa nhân văn rộng lớn — nghệ thuật, giáo dục, xã hội, y tế. Không bị áp lực chọn nghề chỉ vì thu nhập cao. Tìm công việc chạm đến trái tim bạn.`,
          finance: `Học cách cân bằng giữa lòng hào phóng và sự thực tế tài chính. Thiết lập ngân sách từ thiện có kế hoạch, không chi bốc đồng. Xây dựng nền tảng tài chính vững trước khi phụng sự người khác.`,
          health: `Học cách đặt ranh giới cảm xúc — không ôm hết nỗi đau của thế giới. Thực hành buông bỏ hàng ngày. Tìm hoạt động tái tạo năng lượng riêng cho mình.`,
          relationship: `Học cách nhận bằng cách cho đi — yêu thương phải là hai chiều. Chọn người bạn đời và bạn bè có giá trị nhân văn tương đồng. Tránh cứu vớt những người không muốn được cứu.`,
          avoid: `Lý tưởng hóa đến mức không thực tế; kiệt sức vì quá quan tâm đến người khác; bỏ qua nhu cầu vật chất thiết thực của bản thân`
        },
        11: {
          career: `Phát triển kỹ năng biểu đạt trực giác qua nghệ thuật, âm nhạc, hoặc ngôn ngữ. Chọn môi trường học tập kích thích sự sáng tạo và chiều sâu. Học cách "neo" tầm nhìn vào hành động thực tế cụ thể.`,
          finance: `Xây dựng nền tảng tài chính ổn định để tầm nhìn cao cả của bạn có chỗ đứng vững. Tránh bị cuốn vào các ý tưởng hào nhoáng không có căn cơ. Học cách định giá đúng cho giá trị bạn tạo ra.`,
          health: `Quản lý hệ thần kinh nhạy cảm — thiền định, âm nhạc, thiên nhiên là liều thuốc tốt nhất. Học cách thoát khỏi sự quá kích thích. Ngủ đủ giấc là ưu tiên không thương lượng.`,
          relationship: `Tìm người hiểu được chiều sâu và trực giác của bạn. Học cách kết nối ở cả hai cấp độ — tinh thần và đời thường. Tránh cô lập khi cảm thấy "không ai hiểu mình".`,
          avoid: `Sống hoàn toàn trong thế giới ý tưởng mà quên hành động; lo lắng và nặng gánh quá mức; bác bỏ nhu cầu thực tế với lý do "tâm linh"`
        },
        22: {
          career: `Bắt đầu xây dựng tư duy hệ thống và quy mô lớn — đọc về lịch sử, văn minh, lãnh đạo. Tìm mentor với tầm nhìn dài hạn. Chọn nền tảng học thuật vững chắc cho tương lai xây dựng lớn.`,
          finance: `Xây dựng kỷ luật tài chính nghiêm ngặt — tầm nhìn lớn cần nền tảng vật chất vững. Tránh phung phí những gì chưa có. Học về đầu tư dài hạn và xây dựng tài sản có mục đích.`,
          health: `Học cách cân bằng giữa tham vọng lớn và sức khỏe thể chất. Xây dựng thói quen tập luyện ổn định. Tránh kiệt sức sớm vì áp lực tự đặt ra.`,
          relationship: `Tìm người bạn đường chia sẻ tầm nhìn lớn. Học cách trân trọng những khoảnh khắc nhỏ bé trong cuộc sống bình thường. Tránh coi mọi người như "nguồn lực cho sứ mệnh".`,
          avoid: `Bỏ qua nhu cầu cơ bản vì mải mê tầm nhìn; tự cô lập với lý do "người thường không hiểu"; kiệt sức trước khi dự án lớn bắt đầu`
        }
      },
      2: { // CHU KỲ 2 — Trưởng Thành (Xây Dựng)
        1: {
          career: `Đây là thời điểm khẳng định vị trí lãnh đạo và xây dựng sự nghiệp độc lập. Dũng cảm khởi nghiệp hoặc đảm nhận vai trò lớn hơn. Tránh ở quá lâu trong vai trò không cho phép bạn phát huy toàn lực.`,
          finance: `Đầu tư vào bản thân — kỹ năng, mạng lưới, kinh nghiệm — đây là tài sản sinh lời cao nhất. Xây dựng thu nhập đa nguồn. Tránh đặt tất cả trứng vào một giỏ.`,
          health: `Duy trì thói quen tập luyện như một kỷ luật lãnh đạo, không phải tùy hứng. Học cách ủy quyền để tránh kiệt sức. Nghỉ ngơi có chiến lược là một năng lực, không phải điểm yếu.`,
          relationship: `Xây dựng mối quan hệ đối tác bình đẳng — cả trong công việc lẫn cuộc sống. Học cách ăn mừng thành công của người khác. Tránh để tham vọng cá nhân làm xói mòn các mối quan hệ quan trọng.`,
          avoid: `Kiêu ngạo và cứng đầu khi thành công; cô lập vì nghĩ "không ai hiểu tầm nhìn của mình"; bỏ bê sức khỏe và các mối quan hệ`
        },
        2: {
          career: `Xây dựng danh tiếng qua các mối quan hệ nghề nghiệp sâu sắc và lâu dài. Tìm kiếm cơ hội hợp tác chiến lược. Tránh chấp nhận vai trò không được tôn trọng chỉ vì ngại xung đột.`,
          finance: `Hợp tác tài chính cần hợp đồng rõ ràng — lòng tốt không thay thế sự minh bạch. Xây dựng quỹ dự phòng cá nhân. Tránh bảo lãnh tài chính cho người khác.`,
          health: `Học cách tự chăm sóc sức khỏe với cùng sự ân cần bạn dành cho người khác. Quản lý căng thẳng bằng cách đặt ra ranh giới rõ ràng. Tránh kiệt sức vì quá nhiều cam kết xã hội.`,
          relationship: `Giai đoạn này phù hợp để xây dựng mối quan hệ lâu dài — trong công việc và tình cảm. Học cách nêu nhu cầu của mình một cách thẳng thắn. Tránh mối quan hệ phụ thuộc một chiều.`,
          avoid: `Đồng ý với tất cả để tránh xung đột; bị lợi dụng vì quá tốt bụng; bỏ qua nhu cầu cá nhân vì mải phục vụ người khác`
        },
        3: {
          career: `Giai đoạn tỏa sáng trong lĩnh vực sáng tạo và biểu đạt. Nắm bắt cơ hội trình bày, phát biểu, xuất bản. Đây là thời điểm xây dựng thương hiệu cá nhân mạnh mẽ.`,
          finance: `Đa dạng hóa nguồn thu từ kỹ năng sáng tạo. Xây dựng mạng lưới khách hàng và đối tác. Tránh chi tiêu theo cảm hứng mà không có kế hoạch dài hạn.`,
          health: `Duy trì năng lượng sáng tạo bằng lịch trình có cấu trúc. Tránh kiệt sức vì quá nhiều dự án song song. Học cách hoàn thành trước khi bắt đầu điều mới.`,
          relationship: `Xây dựng cộng đồng sáng tạo xung quanh mình. Chọn người bạn đời trân trọng sự sáng tạo và không kiểm soát nó. Học cách lắng nghe sâu trong mối quan hệ.`,
          avoid: `Bỏ dở quá nhiều dự án khi mất hứng; chi tiêu theo cảm hứng sáng tạo không có ngân sách; bỏ qua sức khỏe vì mải mê sáng tác`
        },
        4: {
          career: `Giai đoạn xây dựng sự nghiệp bền vững — đừng nản lòng với tiến độ chậm. Mỗi bước nhỏ đều quan trọng. Tìm kiếm vị trí có ổn định và cho phép bạn xây dựng chuyên môn sâu.`,
          finance: `Xây dựng nền tảng tài chính vững chắc — mua bảo hiểm, tăng tiết kiệm, đầu tư an toàn dài hạn. Tránh các quyết định tài chính bốc đồng hoặc rủi ro cao.`,
          health: `Xây dựng thói quen sức khỏe kiên nhẫn và bền vững — không phải sprint, mà là marathon. Duy trì lịch khám sức khỏe định kỳ. Tránh làm việc đến kiệt sức.`,
          relationship: `Đầu tư thời gian chất lượng vào gia đình và người thân. Học cách biểu đạt tình cảm bằng lời nói, không chỉ hành động. Xây dựng mối quan hệ đối tác thực sự bình đẳng.`,
          avoid: `Cứng nhắc đến mức không thích nghi với thay đổi cần thiết; làm việc quá sức đến mức hy sinh sức khỏe; trì hoãn niềm vui vì "chưa đủ ổn định"`
        },
        5: {
          career: `Mở lòng với những cơ hội không theo kế hoạch — thay đổi này có thể là bước ngoặt. Phát triển đa kỹ năng và mạng lưới rộng. Tránh bám víu vào vị trí không còn phù hợp vì sợ thay đổi.`,
          finance: `Xây dựng quỹ dự phòng lớn hơn để thoải mái với sự biến động. Tránh đặt cược lớn vào cơ hội chưa được kiểm chứng. Học cách quản lý dòng tiền không đều.`,
          health: `Duy trì thói quen sức khỏe cơ bản ngay cả khi mọi thứ thay đổi. Học cách phục hồi nhanh sau biến động. Tránh lạm dụng kích thích để đối phó với stress.`,
          relationship: `Giao tiếp rõ ràng về nhu cầu tự do của bạn với người thân. Học cách duy trì kết nối trong khi vẫn phát triển cá nhân. Tránh bỏ rơi người quan trọng khi đang bận chạy theo đổi mới.`,
          avoid: `Thay đổi hướng đi quá thường xuyên đến mức không xây được gì; chi tiêu liều lĩnh trong giai đoạn thu nhập không ổn định; né tránh cam kết cần thiết`
        },
        6: {
          career: `Giai đoạn lý tưởng để phát triển sự nghiệp liên quan đến chăm sóc và phục vụ. Xây dựng uy tín qua sự đáng tin cậy và tận tâm. Tránh đặt công việc lên trên sức khỏe gia đình.`,
          finance: `Lập kế hoạch tài chính gia đình dài hạn — bảo hiểm, giáo dục con cái, nhà cửa. Tránh chi tiêu quá mức cho gia đình đến mức bỏ bê dự phòng cá nhân. Cân bằng giữa cho đi và tích lũy.`,
          health: `Nhớ chăm sóc sức khỏe bản thân trong khi chăm sóc gia đình. Tránh hy sinh giấc ngủ và dinh dưỡng vì bận lo cho người khác. Đặt lịch tái tạo năng lượng cá nhân.`,
          relationship: `Đây là giai đoạn vàng để đầu tư vào gia đình và mối quan hệ thân thiết. Học cách yêu thương có ranh giới lành mạnh. Tránh kiểm soát người thân dù xuất phát từ lòng tốt.`,
          avoid: `Hy sinh bản thân hoàn toàn cho gia đình; kiểm soát người thân dưới danh nghĩa quan tâm; bỏ bê sự phát triển cá nhân`
        },
        7: {
          career: `Đầu tư vào việc trở thành chuyên gia thực sự trong lĩnh vực của mình. Nghiên cứu, học hỏi sâu hơn là mở rộng nhanh. Xây dựng uy tín qua sự hiểu biết sâu sắc thay vì chứng chỉ bề ngoài.`,
          finance: `Nghiên cứu kỹ trước mọi quyết định đầu tư lớn. Không để người khác "thuyết phục" bạn vào cơ hội chưa được kiểm chứng. Xây dựng nền tảng tài chính ổn định để có không gian suy nghĩ.`,
          health: `Thiền định và tĩnh lặng là ưu tiên sức khỏe quan trọng nhất của bạn. Giữ cân bằng giữa thời gian một mình và thời gian kết nối xã hội. Tránh cô lập quá mức.`,
          relationship: `Học cách chia sẻ thế giới nội tâm phong phú với những người bạn tin tưởng. Tìm bạn đời và bạn bè có chiều sâu trí tuệ tương đồng. Đừng để sự độc lập trở thành xa cách.`,
          avoid: `Phân tích quá mức đến tê liệt quyết định; cô lập xã hội quá mức; bỏ qua cảm xúc và kết nối con người vì quá chú trọng trí tuệ`
        },
        8: {
          career: `Giai đoạn thu hoạch và mở rộng mạnh mẽ nhất. Dũng cảm đàm phán, mở rộng, đầu tư. Xây dựng hệ thống tạo thu nhập thụ động. Tránh chần chừ trước cơ hội xứng đáng.`,
          finance: `Đây là giai đoạn tốt nhất để mua bất động sản, đầu tư dài hạn, mở rộng kinh doanh. Học cách dùng đòn bẩy tài chính thông minh. Tránh tích lũy mà không có mục tiêu rõ ràng.`,
          health: `Quản lý căng thẳng quyết định qua hoạt động thể chất có cường độ đủ lớn. Không hy sinh sức khỏe vì tham vọng ngắn hạn. Đặt giới hạn làm việc rõ ràng.`,
          relationship: `Dành thời gian chất lượng cho người thân ngay cả trong giai đoạn bận rộn đỉnh điểm. Học cách thể hiện tình yêu bằng hiện diện, không chỉ bằng vật chất. Chọn đối tác cùng tầm nhìn.`,
          avoid: `Ưu tiên kết quả hơn con người; kiệt sức vì không biết dừng lại; tích lũy không có mục đích ngoài số lượng`
        },
        9: {
          career: `Tìm tới những công việc có ý nghĩa nhân văn sâu sắc, nơi bạn đóng góp thực sự. Tránh làm việc chỉ vì thu nhập mà thiếu ý nghĩa — điều này làm kiệt năng lượng của bạn. Giai đoạn tốt để đóng góp cho cộng đồng.`,
          finance: `Xây dựng nền tảng tài chính vững trước khi cho đi — hào phóng cần đi kèm với sự bền vững. Lập ngân sách từ thiện có kế hoạch. Học cách buông bỏ những khoản đầu tư không còn hiệu quả.`,
          health: `Học cách đặt ranh giới cảm xúc — không ôm hết nỗi đau của thế giới. Tìm hoạt động chữa lành và tái tạo năng lượng cho chính mình. Thực hành buông bỏ hàng ngày.`,
          relationship: `Đây là giai đoạn học cách yêu thương vô điều kiện — cả với bản thân lẫn người khác. Học cách tha thứ để giải phóng bản thân. Tránh mối quan hệ tiêu hao một chiều.`,
          avoid: `Kiệt sức vì quá nhiều từ bi không có ranh giới; ôm đồm sứ mệnh cứu vớt thế giới; bỏ qua nhu cầu tài chính thiết thực`
        },
        11: {
          career: `Theo đuổi con đường sáng tạo, tư vấn tâm linh, hoặc truyền cảm hứng nơi trực giác của bạn là tài sản. Học cách hiện thực hóa tầm nhìn bằng các bước cụ thể. Tìm người cộng sự thực tế bổ trợ cho tầm nhìn của bạn.`,
          finance: `Định giá đúng cho giá trị đặc biệt bạn mang lại — không tự hạ giá. Xây dựng nền tảng tài chính ổn định để tầm nhìn cao cả có đất đứng. Tránh chi tiêu theo cảm hứng tâm linh.`,
          health: `Quản lý sự nhạy cảm của hệ thần kinh bằng thực hành chánh niệm thường xuyên. Tránh tiếp nhận quá nhiều năng lượng tiêu cực. Ngủ đủ giấc và phục hồi năng lượng là thiết yếu.`,
          relationship: `Tìm người bạn đời có đủ chiều sâu để tham gia và hiểu hành trình nội tâm của bạn. Học cách kết nối ở cấp độ đời thường bên cạnh cấp độ tâm linh. Không bỏ rơi bản thân vì sứ mệnh.`,
          avoid: `Sống hoàn toàn trong cõi ý tưởng mà không hành động; bị kiệt sức bởi sự nhạy cảm quá mức; hạ thấp giá trị bản thân`
        },
        22: {
          career: `Giai đoạn triển khai tầm nhìn lớn — xây dựng tổ chức, hệ thống, phong trào có quy mô thực sự. Tập hợp đội ngũ xứng tầm. Tránh cố làm một mình những gì cần nhiều người.`,
          finance: `Xây dựng mô hình tài chính bền vững cho tầm nhìn lớn. Học cách huy động vốn và quản lý nguồn lực quy mô lớn. Tránh hi sinh tài chính cá nhân cho sứ mệnh đến mức không bền vững.`,
          health: `Sức khỏe là nhiên liệu của sứ mệnh lớn — không thể bỏ qua. Xây dựng hệ thống hỗ trợ để không phải gánh chịu tất cả một mình. Học cách ủy quyền và tin tưởng đội ngũ.`,
          relationship: `Tìm người bạn đời và cộng sự hiểu và chia sẻ tầm nhìn của bạn. Học cách trân trọng những khoảnh khắc bình thường trong cuộc sống. Không hi sinh hoàn toàn đời sống cá nhân cho sứ mệnh.`,
          avoid: `Mất kết nối với con người bình thường vì sứ mệnh quá lớn; kiệt sức trước khi hoàn thành; bỏ qua sức khỏe cá nhân và các mối quan hệ thân thiết`
        }
      },
      3: { // CHU KỲ 3 — Viên Mãn (Thu Hoạch)
        1: {
          career: `Tiếp tục đóng góp và dẫn dắt theo hình thức phù hợp với giai đoạn này — cố vấn, mentor, hoặc khởi đầu điều gì đó hoàn toàn mới. Chia sẻ kinh nghiệm lãnh đạo cho thế hệ sau. Không cần nghỉ hưu hoàn toàn.`,
          finance: `Chuyển hướng từ tích lũy sang phân phối khôn ngoan — gia đình, từ thiện, đầu tư cho thế hệ sau. Đơn giản hóa tài chính để giảm gánh nặng quản lý. Đảm bảo dự phòng cho tuổi già.`,
          health: `Điều chỉnh cường độ hoạt động thể chất phù hợp tuổi tác nhưng không dừng lại hoàn toàn. Ưu tiên chất lượng giấc ngủ và dinh dưỡng. Học cách nghỉ ngơi mà không cảm thấy tội lỗi.`,
          relationship: `Đầu tư vào gia đình và di sản con người quan trọng hơn bao giờ hết. Học cách nhận sự chăm sóc từ người thân. Nuôi dưỡng các mối quan hệ sâu sắc thay vì mở rộng mạng lưới.`,
          avoid: `Không thể nghỉ ngơi và ủy quyền; kiệt sức vì vẫn muốn một mình gánh hết; xa cách con người vì không ai "đủ tầm"`
        },
        2: {
          career: `Giai đoạn thu hoạch mối quan hệ và tình cảm — những kết nối bạn đã xây dựng cả đời nở hoa. Đóng góp qua vai trò hòa giải, cố vấn và kết nối. Chia sẻ sự khôn ngoan về tình người.`,
          finance: `Đơn giản hóa tài chính và giảm rủi ro. Chuẩn bị kế hoạch di sản cẩn thận. Tránh bị lợi dụng tài chính vì lòng tốt quá mức ở giai đoạn này.`,
          health: `Duy trì các hoạt động xã hội tích cực — cô đơn là nguy cơ sức khỏe lớn nhất. Thực hành thiền định và tĩnh lặng. Ưu tiên chất lượng mối quan hệ thay vì sự kiện.`,
          relationship: `Giai đoạn thu hoạch tình người — tận hưởng chiều sâu của các mối quan hệ đã được xây dựng cả đời. Học cách nhận tình yêu thay vì luôn là người cho đi. Tha thứ và chữa lành những vết thương cũ.`,
          avoid: `Cô lập xã hội; bị lợi dụng tài chính vì lòng tốt; mang theo oán giận cũ không giải quyết`
        },
        3: {
          career: `Tiếp tục sáng tạo và biểu đạt — tinh thần số 3 không có khái niệm "về hưu". Viết hồi ký, dạy nghề, hoặc theo đuổi dự án nghệ thuật mơ ước. Chia sẻ tài năng với cộng đồng.`,
          finance: `Đơn giản hóa tài chính để có thêm thời gian và năng lượng cho sáng tạo. Chuẩn bị di sản sáng tạo — tác phẩm, dạy nghề. Tránh chi tiêu bốc đồng ở giai đoạn này.`,
          health: `Duy trì các hoạt động tạo niềm vui — đây là thuốc bổ tốt nhất. Tham gia câu lạc bộ sáng tạo và cộng đồng xã hội. Học cách quản lý năng lượng khôn ngoan hơn.`,
          relationship: `Chia sẻ niềm vui sống với người thân và cộng đồng. Trở thành nguồn ánh sáng và cảm hứng cho thế hệ sau. Nuôi dưỡng tình bạn cũ và mở đón tình bạn mới.`,
          avoid: `Thu mình lại trong khi vẫn còn nhiều để cho đi; để nỗi cô đơn dập tắt ngọn lửa sáng tạo; sống trong quá khứ`
        },
        4: {
          career: `Giai đoạn thu hoạch những gì đã xây dựng cả đời. Đóng góp kinh nghiệm thực tiễn cho tổ chức và gia đình. Trở thành người giữ gìn di sản và truyền thống có giá trị.`,
          finance: `Đơn giản hóa và củng cố tài chính. Chuẩn bị kế hoạch di sản rõ ràng. Tránh phức tạp hóa tài chính ở giai đoạn này — sự giản dị là sức mạnh.`,
          health: `Duy trì thói quen thể chất ổn định và vừa sức. Quan tâm đến sức khỏe tâm thần và kết nối xã hội. Học cách linh hoạt hơn khi cơ thể đặt ra giới hạn mới.`,
          relationship: `Trở thành nền tảng ổn định cho gia đình và cộng đồng. Chia sẻ sự khôn ngoan thực tế của cả đời. Học cách buông bỏ kiểm soát và tin tưởng thế hệ sau.`,
          avoid: `Cứng nhắc khi thế giới thay đổi xung quanh; không thể buông bỏ kiểm soát và ủy quyền; cô lập vì "người trẻ không hiểu"`
        },
        5: {
          career: `Giai đoạn tự do thực sự — khám phá những điều từng bị trì hoãn. Đừng tự giới hạn bởi tuổi tác. Chia sẻ hành trình phong phú với người xung quanh qua viết lách hoặc nói chuyện.`,
          finance: `Cân bằng giữa hưởng thụ và bảo tồn tài sản. Chuẩn bị dự phòng đủ cho tuổi cao. Tránh các đầu tư rủi ro cao ở giai đoạn này — bảo toàn quan trọng hơn sinh lợi.`,
          health: `Duy trì hoạt động thể chất phù hợp với tình trạng sức khỏe thực tế. Tránh phiêu lưu vượt quá giới hạn an toàn. Học cách thích nghi với những thay đổi thể chất tự nhiên.`,
          relationship: `Duy trì sự tò mò và cởi mở với người mới. Chia sẻ kinh nghiệm sống phong phú với thế hệ trẻ. Học cách nhận sự hỗ trợ từ người thân khi cần.`,
          avoid: `Liều lĩnh về thể chất hoặc tài chính vì muốn "sống trọn vẹn"; từ chối nhận sự giúp đỡ; phiêu lưu vượt quá giới hạn an toàn`
        },
        6: {
          career: `Giai đoạn thu hoạch tình yêu thương và di sản gia đình. Vai trò ông bà, người cố vấn gia đình là thiêng liêng nhất. Đóng góp cho cộng đồng qua tình nguyện và chăm sóc.`,
          finance: `Chuẩn bị di sản tài chính cho gia đình một cách công bằng và rõ ràng. Đơn giản hóa tài chính cá nhân. Tránh để gánh nặng tài chính đổ lên con cháu không cần thiết.`,
          health: `Học cách nhận sự chăm sóc từ gia đình — đây là kết quả tự nhiên của những gì bạn đã gieo. Tránh kiệt sức vì vẫn muốn "lo hết". Duy trì các hoạt động xã hội tích cực.`,
          relationship: `Giai đoạn viên mãn nhất của mọi mối quan hệ. Tận hưởng và trân trọng tình yêu thương xung quanh bạn. Học cách buông bỏ những mâu thuẫn cũ còn sót lại.`,
          avoid: `Tiếp tục ôm hết trách nhiệm không cần thiết; không cho con cháu không gian tự lập; mang theo oán giận và chưa được tha thứ`
        },
        7: {
          career: `Giai đoạn chia sẻ sự khôn ngoan tích lũy cả đời. Trở thành cố vấn, người hướng dẫn tri thức, hoặc tiếp tục viết và nghiên cứu. Không cần chứng minh gì — chỉ cần chia sẻ.`,
          finance: `Đơn giản hóa hoàn toàn tài chính. Chuẩn bị di sản tri thức — sách, bài viết, chia sẻ trực tiếp — cũng quý giá không kém di sản vật chất. Đảm bảo dự phòng tài chính đủ dùng.`,
          health: `Thực hành tâm linh và nội tâm là ưu tiên hàng đầu. Duy trì thói quen thiền định và đọc sách. Tránh cô lập quá mức — kết nối xã hội có chọn lọc vẫn quan trọng.`,
          relationship: `Chia sẻ chiều sâu nội tâm với những người thực sự trân trọng nó. Đây là giai đoạn của các cuộc trò chuyện sâu sắc và kết nối tâm hồn. Học cách hiện diện hoàn toàn.`,
          avoid: `Cô lập hoàn toàn vì "không ai hiểu"; trở nên hoài nghi và xa cách; ôm giữ tri thức thay vì chia sẻ`
        },
        8: {
          career: `Giai đoạn xây dựng và trao truyền di sản. Chuyển hướng từ tích lũy sang tặng trao và phân phối khôn ngoan. Sử dụng ảnh hưởng để nâng đỡ thế hệ sau.`,
          finance: `Chuyển nguồn lực tài chính sang mục đích di sản — gia đình, từ thiện, đầu tư cho thế hệ sau. Chuẩn bị kế hoạch di sản hoàn chỉnh. Đơn giản hóa quản lý tài chính cá nhân.`,
          health: `Học cách buông bỏ gánh nặng tích lũy. Thiền định và các hoạt động giảm stress là quan trọng. Duy trì vận động nhẹ nhàng và đều đặn.`,
          relationship: `Sử dụng ảnh hưởng và sự kính trọng để nâng đỡ người xung quanh. Học cách nhận về từ người thân thay vì luôn là người cho. Nuôi dưỡng di sản tình người bên cạnh di sản vật chất.`,
          avoid: `Tiếp tục tích lũy không có mục đích di sản rõ ràng; xa cách con người vì tập trung vào quản lý tài sản; không thể buông bỏ quyền kiểm soát`
        },
        9: {
          career: `Giai đoạn phụng sự và đóng góp nhân văn ý nghĩa nhất. Tình nguyện, từ thiện, hỗ trợ cộng đồng là cách hoàn thành vòng tròn cuộc đời. Đây là thời gian trao đi mà không kỳ vọng đền đáp.`,
          finance: `Sắp xếp tài chính gọn gàng cho giai đoạn cuối đời. Cho đi những gì không cần thiết. Chuẩn bị di chúc và kế hoạch di sản rõ ràng để không gánh nặng cho người thân.`,
          health: `Học nghệ thuật buông bỏ — thể chất và tinh thần. Thực hành tha thứ và giải phóng những gánh nặng cũ. Giữ kết nối xã hội và tinh thần tích cực.`,
          relationship: `Tha thứ và hòa giải với những mâu thuẫn chưa được giải quyết. Tập trung vào những mối quan hệ thực sự quan trọng. Mở lòng nhận tình yêu thương từ người xung quanh.`,
          avoid: `Ôm giữ oán giận không tha thứ đến cuối đời; tiếp tục cố gánh những gì không còn cần thiết; từ chối nhận sự hỗ trợ và chăm sóc`
        },
        11: {
          career: `Giai đoạn tỏa sáng ánh sáng tâm linh và truyền cảm hứng một cách thầm lặng nhưng mạnh mẽ. Chia sẻ sự khôn ngoan tâm linh với những người tìm đến. Đây là sứ mệnh đích thực cuối cuộc đời.`,
          finance: `Đơn giản hóa hoàn toàn tài chính vật chất để tập trung vào di sản tinh thần. Đảm bảo nhu cầu cơ bản được đáp ứng. Giải phóng khỏi lo lắng vật chất để sống trọn vẹn hiện tại.`,
          health: `Duy trì thực hành tâm linh và thiền định hàng ngày. Quản lý năng lượng nhạy cảm bằng cách giới hạn tiếp xúc với năng lượng tiêu cực. Ngủ đủ và phục hồi sâu.`,
          relationship: `Trở thành ngọn đèn soi sáng cho những người đang tìm kiếm. Kết nối sâu sắc với những tâm hồn đồng điệu. Học cách hiện diện trọn vẹn trong từng khoảnh khắc gặp gỡ.`,
          avoid: `Thu mình vì lo lắng bản thân "không đủ"; bị kiệt sức vì tiếp nhận quá nhiều năng lượng người khác; không chia sẻ ánh sáng trí tuệ và tâm linh`
        },
        22: {
          career: `Giai đoạn nhìn lại di sản đã xây dựng và hoàn thành những gì còn dang dở. Trao truyền tầm nhìn cho thế hệ kế tiếp đủ tâm huyết. Đây là lúc trở thành người thầy vĩ đại nhất.`,
          finance: `Chuẩn bị di sản tài chính và tổ chức để tiếp tục vận hành sau khi bạn không còn điều hành trực tiếp. Đơn giản hóa cá nhân để tập trung vào di sản lớn. Đảm bảo tổ chức/hệ thống bạn xây dựng có thể tự vận hành.`,
          health: `Biết nghỉ ngơi và ủy quyền — không cần mang tất cả trên vai nữa. Học cách nhận sự hỗ trợ từ người khác. Duy trì sức khoẻ để hoàn thành sứ mệnh cuối.`,
          relationship: `Mở lòng nhận tình yêu và sự biết ơn từ người được ảnh hưởng bởi công trình của mình. Học cách hiện diện với những người thân thiết thay vì chỉ bận rộn với sứ mệnh lớn.`,
          avoid: `Kiệt sức trong khi vẫn cố nắm giữ mọi thứ; không ủy quyền và tin tưởng người kế thừa; mất kết nối hoàn toàn với đời sống cá nhân và gia đình`
        }
      }
    };

    const stage = stageLabels[cycleNum];
    const effectiveNum = (num === 11 || num === 22) ? num : (num % 9 || 9);
    const cycleData = deepNarrative[cycleNum] || deepNarrative[1];
    const baseNarr = cycleData[effectiveNum] || cycleData[effectiveNum % 9 || 9];
    const cycleAdvice = adviceData[cycleNum] || {};
    const adviceForNum = cycleAdvice[effectiveNum] || cycleAdvice[effectiveNum % 9 || 9] || null;
    const narr = adviceForNum ? { ...baseNarr, advice: adviceForNum } : baseNarr;

    const paragraphsHtml = narr.paragraphs.map(p => `<p class="nar">${p}</p>`).join('\n      ');

    return `<div class="cycle-block">
      <div class="cycle-header">
        <span class="cycle-badge">${cycleNum}</span>
        <div>
          <div class="cycle-label">${stage.title} · <strong style="color:#c026d3">Số ${num}</strong> · <em>${period}</em></div>
          <div class="cycle-theme">Chủ đề: ${narr.theme}</div>
        </div>
      </div>
      ${paragraphsHtml}
      <div class="insight-box">📌 <strong>Bài học cốt lõi:</strong> ${narr.lesson}</div>
      ${narr.advice ? `<div class="lc-advice-box">
        <div class="lc-advice-title">💡 Lời Khuyên Thực Tiễn</div>
        <div class="lc-advice-grid">
          ${narr.advice.career ? `<div class="lc-advice-item">
            <div class="lc-advice-icon">💼</div>
            <div class="lc-advice-content">
              <div class="lc-advice-label">Sự nghiệp & Học hành</div>
              <div class="lc-advice-text">${narr.advice.career}</div>
            </div>
          </div>` : ''}
          ${narr.advice.finance ? `<div class="lc-advice-item">
            <div class="lc-advice-icon">💰</div>
            <div class="lc-advice-content">
              <div class="lc-advice-label">Tài chính</div>
              <div class="lc-advice-text">${narr.advice.finance}</div>
            </div>
          </div>` : ''}
          ${narr.advice.health ? `<div class="lc-advice-item">
            <div class="lc-advice-icon">🌿</div>
            <div class="lc-advice-content">
              <div class="lc-advice-label">Sức khỏe & Năng lượng</div>
              <div class="lc-advice-text">${narr.advice.health}</div>
            </div>
          </div>` : ''}
          ${narr.advice.relationship ? `<div class="lc-advice-item">
            <div class="lc-advice-icon">💗</div>
            <div class="lc-advice-content">
              <div class="lc-advice-label">Mối quan hệ</div>
              <div class="lc-advice-text">${narr.advice.relationship}</div>
            </div>
          </div>` : ''}
        </div>
        ${narr.advice.avoid ? `<div class="lc-advice-avoid"><span class="lc-avoid-label">⚠️ Cần tránh:</span> ${narr.advice.avoid}</div>` : ''}
      </div>` : ''}
    </div>`;
  },

  // ════════════════════════════════════════════════════════════════════
  // NĂM/THÁNG CÁ NHÂN — deep narrative with domain advice
  // ════════════════════════════════════════════════════════════════════
  personalPeriod(label, num, year_or_month, name, kbData) {
    const d = kbData;
    const numMeta = {
      1: { icon: '🌱', theme: 'Khởi đầu & Tiên phong', energy: `Đây là thời điểm vũ trụ trao cho <strong>${name}</strong> một trang trắng tinh khôi. Năng lượng số 1 thúc đẩy bạn hành động, khởi xướng và dứt khoát. Mọi thứ bạn gieo hạt trong giai đoạn này sẽ định hình cả chu kỳ 9 năm hoặc 9 tháng tiếp theo.`, dos: 'Bắt đầu dự án mới, thể hiện bản thân, đưa ra quyết định táo bạo, tự học kỹ năng mới', donts: 'Trì hoãn, phụ thuộc vào người khác để ra quyết định' },
      2: { icon: '🤝', theme: 'Hợp tác & Kiên nhẫn', energy: `Giai đoạn này dành cho sự kết nối và lắng nghe. Năng lượng số 2 yêu cầu <strong>${name}</strong> phải chậm lại, quan tâm đến người khác và xây dựng những cây cầu kết nối. Đây không phải thời điểm của hành động ồ ạt — mà là thời điểm của sự kiên nhẫn chiến lược.`, dos: 'Xây dựng và củng cố mối quan hệ, lắng nghe sâu, chiến lược dài hạn, chăm sóc sức khỏe', donts: 'Hấp tấp, cưỡng cầu, đối đầu không cần thiết' },
      3: { icon: '✨', theme: 'Sáng tạo & Biểu đạt', energy: `Đây là mùa xuân của cuộc đời. Năng lượng số 3 mang đến cho <strong>${name}</strong> nguồn cảm hứng sáng tạo và khát khao biểu đạt bản thân. Giao lưu, học hỏi, thử những điều mới — tất cả đều được universe ủng hộ trong giai đoạn này.`, dos: 'Sáng tạo, kết nối xã hội, học kỹ năng mới, du lịch, viết lách, âm nhạc, nghệ thuật', donts: 'Phân tán năng lượng, bỏ cuộc giữa chừng' },
      4: { icon: '🏗️', theme: 'Xây dựng & Kỷ luật', energy: `Thực tế và kỷ luật là từ khóa của giai đoạn này. Năng lượng số 4 yêu cầu <strong>${name}</strong> xây dựng nền tảng vững chắc — trong công việc, tài chính, sức khỏe và các mối quan hệ. Không phải thời điểm hào nhoáng, nhưng là thời điểm tạo ra sự khác biệt thực sự.`, dos: 'Lập kế hoạch chi tiết, tiết kiệm, chăm sóc sức khỏe, hoàn thiện kỹ năng, tổ chức lại cuộc sống', donts: 'Trì hoãn, chi tiêu bốc đồng, bỏ qua chi tiết' },
      5: { icon: '🌊', theme: 'Thay đổi & Tự do', energy: `Những bất ngờ và cơ hội mới đang ở ngưỡng cửa. Năng lượng số 5 mang đến cho <strong>${name}</strong> làn gió của sự thay đổi — đôi khi được lên kế hoạch, đôi khi hoàn toàn bất ngờ. Hãy giữ sự linh hoạt và sẵn sàng cho những cánh cửa mà bạn chưa từng nghĩ đến.`, dos: 'Đón nhận thay đổi, thử nghiệm, mở rộng kết nối, du lịch, học thêm', donts: 'Cứng nhắc, sợ thay đổi, cam kết vội vàng' },
      6: { icon: '💗', theme: 'Tình yêu & Trách nhiệm', energy: `Gia đình và các mối quan hệ thân thiết đòi hỏi sự chú ý đặc biệt trong giai đoạn này. Năng lượng số 6 mời <strong>${name}</strong> quay về với những gì thực sự quan trọng — không phải thành công bên ngoài, mà là chất lượng của những kết nối bên trong.`, dos: 'Chăm sóc gia đình, hàn gắn mối quan hệ, tạo môi trường sống tốt đẹp hơn, phục vụ cộng đồng', donts: 'Bỏ qua gia đình, ôm đồm trách nhiệm không phải của mình' },
      7: { icon: '🔮', theme: 'Nội tâm & Tâm linh', energy: `Đây là năm/tháng của sự tự vấn và chiều sâu. Năng lượng số 7 dẫn <strong>${name}</strong> về với nội tâm — học hỏi, nghiên cứu, thiền định và lắng nghe những thông điệp từ bên trong. Nghỉ ngơi và tiếp nạp là những hành động tiến bộ trong giai đoạn này.`, dos: 'Meditation, học hỏi chuyên sâu, viết nhật ký, đọc sách, nghỉ ngơi có chủ đích', donts: 'Ép buộc hành động bên ngoài, bỏ qua trực giác, so sánh bản thân với người khác' },
      8: { icon: '👑', theme: 'Quyền lực & Thịnh vượng', energy: `Năng lượng số 8 đang chiếu sáng con đường thành công và thịnh vượng cho <strong>${name}</strong>. Đây là thời điểm để thu hoạch những gì đã gieo, đàm phán, mở rộng và khẳng định vị thế của mình. Tiền bạc và cơ hội đang sẵn sàng — vấn đề là bạn có đủ can đảm để đón nhận hay không.`, dos: 'Đàm phán và ký kết hợp đồng, đầu tư, mở rộng sự nghiệp, yêu cầu mức lương xứng đáng', donts: 'Từ chối cơ hội vì sợ thất bại, chi tiêu liều lĩnh' },
      9: { icon: '🦋', theme: 'Hoàn thành & Buông bỏ', energy: `Một chương quan trọng đang khép lại. Năng lượng số 9 mời <strong>${name}</strong> nhìn lại, cảm ơn và buông bỏ những gì không còn phục vụ hành trình của mình nữa. Đây là giai đoạn giải phóng sâu sắc — và nếu được thực hiện đúng cách, sẽ mở ra không gian cho một khởi đầu hoàn toàn mới.`, dos: 'Tổng kết, từ thiện, buông bỏ mối quan hệ/công việc cũ không còn phù hợp, du lịch dài ngày', donts: 'Bắt đầu dự án mới lớn, cưỡng cầu giữ lại những gì đã hết vai trò' }
    };

    const meta = numMeta[num] || numMeta[num % 9 || 9];

    let txt = `
    <div class="personal-year-card">
      <div class="py-icon">${meta?.icon || '⭐'}</div>
      <div class="py-content">
        <div class="py-title">${label} <strong>${year_or_month}</strong> của <strong>${name}</strong></div>
        <div class="py-num-badge">${num}</div>
        <div class="py-theme">${meta?.theme || ''}</div>
      </div>
    </div>`;

    txt += `<p class="nar">${meta?.energy || ''}</p>`;

    if (d?.description || d?.theme || d?.meaning) {
      txt += `<p class="nar">${d.description || d.theme || d.meaning}</p>`;
    }
    if (d?.focus) txt += `<p class="nar"><strong>✦ Trọng tâm cần hướng đến:</strong> ${d.focus}</p>`;
    if (d?.opportunities) txt += `<p class="nar"><strong>✦ Cơ hội đang mở ra:</strong> ${d.opportunities}</p>`;
    if (d?.challenges) txt += `<p class="nar"><strong>✦ Thử thách cần vượt qua:</strong> ${d.challenges}</p>`;

    if (meta?.dos || meta?.donts) {
      txt += `<div class="dos-donts-grid">
        <div class="dos-block"><strong>✅ Nên làm:</strong><br>${meta.dos}</div>
        <div class="donts-block"><strong>❌ Tránh:</strong><br>${meta.donts}</div>
      </div>`;
    }
    if (d?.advice) txt += `<div class="insight-box">💡 <strong>Lời khuyên đặc biệt:</strong> ${d.advice}</div>`;
    return txt;
  },

  // ════════════════════════════════════════════════════════════════════
  // PHÂN TÍCH ĐỈNH CAO KIM TỰ THÁP — per-peak narrative
  // ════════════════════════════════════════════════════════════════════
  pyramidPeakAnalysis(peakIndex, peakNum, period, challengeNum, name) {
    const periodLabels = ['Đầu đời & Thanh Xuân', 'Trưởng Thành', 'Chín Muồi', 'Hoàn Thành & Di Sản'];
    const periodLabel = periodLabels[peakIndex] || `Giai đoạn ${peakIndex + 1}`;
    const n = (typeof peakNum === 'number') ? (peakNum > 9 ? peakNum : peakNum) : parseInt(peakNum) || 1;

    // ── Data per peak number ──────────────────────────────────────────────────
    // ── Data per peak number ──────────────────────────────────────────────────
    const peakData = {
      1: {
        title: 'Người Tiên Phong — Năng Lượng Khởi Đầu & Lãnh Đạo',
        icon: '🔥',
        intro: `Trong giai đoạn <strong>${period}</strong>, vũ trụ đặt <strong>${name}</strong> vào đúng vị trí mà số 1 được sinh ra để chiếm lĩnh: <em>vị trí đầu tiên, người khai mở con đường</em>. Đây là ${periodLabel.toLowerCase()} mà mỗi quyết định bạn đưa ra — dù lớn hay nhỏ — đều khắc sâu vào hành trình linh hồn nhiều hơn bạn có thể nhận ra. Số 1 không cho phép bạn đứng sau, không cho phép bạn chờ đợi. Nó thúc đẩy bạn về phía trước với một sức mạnh mà đôi khi chính bạn cũng không hiểu nó từ đâu đến.`,
        career: 'Giai đoạn số 1 đỉnh cao là thời điểm vàng để <strong>khởi nghiệp, nhận vị trí lãnh đạo, hoặc đặt nền móng cho một hướng đi hoàn toàn mới</strong>. Các lĩnh vực phát huy tốt nhất: kinh doanh độc lập, sáng lập startup, quản lý dự án, vai trò trưởng nhóm. Hãy gắn tên mình vào những công trình trong giai đoạn này — đừng để người khác thu hoạch từ hạt giống bạn gieo.',
        opportunity: 'Cánh cửa lớn nhất mở ra cho những ai <strong>dám hành động trước khi sẵn sàng 100%</strong>. Mọi bước đi chủ động trong giai đoạn số 1 đều được khuếch đại — một cuộc gặp gỡ đúng lúc, một dự án táo bạo, một quyết định thay đổi ngành nghề. Đây cũng là lúc xây dựng personal brand sẽ cho quả trong nhiều năm tới.',
        relationship: 'Bạn có sức hút tự nhiên rất mạnh trong giai đoạn này — nhưng hãy tỉnh táo: <strong>sức hút không đồng nghĩa với sự phù hợp</strong>. Trong tình yêu, bạn cần người bạn đời đủ vững để không bị lấn át. Hãy chủ động rèn luyện kỹ năng lắng nghe — đây là điểm yếu tự nhiên cần khắc phục trong giai đoạn số 1.',
        health: 'Năng lượng tràn đầy nhưng nguy cơ <strong>đốt cháy bản thân</strong> rất cao. Não bộ và hệ thần kinh trung ương là vùng cần chú ý. Hãy đặt lịch nghỉ ngơi như một cuộc họp quan trọng — không thể huỷ. Thiền định, yoga hoặc bất kỳ hoạt động "làm chậm" nào là đối trọng hoàn hảo cho năng lượng Yang cực mạnh của số 1.',
        warnings: [
          '<strong>Cô đơn tự nguyện vì cái tôi quá lớn</strong> — xa cách người thân vì không muốn ai "cản trở" bước đi của mình',
          '<strong>Bướng bỉnh khi sai</strong> — từ chối thay đổi hướng đi dù có bằng chứng rõ ràng, vì nhận sai cảm thấy như một thất bại',
          '<strong>Đốt cầu quan hệ</strong> — quyết định quá nhanh, phát ngôn quá thẳng, gây tổn thương những người có thể là đồng minh lâu dài'
        ],
        innerQ: `<strong>${name}</strong>, câu hỏi sâu nhất của giai đoạn này là: <em>"Bạn đang dẫn dắt vì muốn phục vụ và tạo ra giá trị — hay vì cần được khẳng định và công nhận?"</em>`,
      },
      2: {
        title: 'Người Hòa Giải — Năng Lượng Kết Nối & Cộng Tác',
        icon: '🤝',
        intro: `Giai đoạn <strong>${period}</strong> đặt <strong>${name}</strong> vào trường năng lượng nhẹ nhàng nhưng đầy chiều sâu của <em>Số 2 — Người Cầu Nối</em>. Đây là ${periodLabel.toLowerCase()} mà vũ trụ không thưởng cho sức mạnh cá nhân — mà thưởng cho <strong>khả năng lắng nghe, kiên nhẫn và hợp tác</strong>. Những ai hiểu được quy luật này sẽ xây được những liên minh bền vững và tạo ra tác động gấp nhiều lần so với một mình chiến đấu.`,
        career: '<strong>Hợp tác, đối tác chiến lược và các vai trò hỗ trợ cao cấp</strong> là nơi năng lượng số 2 phát huy tối đa. Tư vấn, nhân sự, ngoại giao, trị liệu, quản lý quan hệ — tất cả đều được ủng hộ. Một cuộc hợp tác đúng người được ký kết trong giai đoạn này có thể thay đổi toàn bộ hướng đi sự nghiệp của bạn trong thập kỷ tới.',
        opportunity: 'Cơ hội vàng đến từ <strong>những mối quan hệ đặc biệt xuất hiện không báo trước</strong> — người thầy, đối tác kinh doanh, bạn đời tri kỷ. Đây cũng là thời điểm tốt để phát triển kỹ năng lắng nghe chiến lược: loại kỹ năng khiến người đối diện cảm thấy họ là người quan trọng nhất trong phòng.',
        relationship: 'Tình yêu và các mối quan hệ gần gũi là <strong>tâm điểm của giai đoạn số 2</strong>. Bạn có khả năng nuôi dưỡng kết nối sâu sắc và bền vững — nhưng hãy cẩn thận không hy sinh nhu cầu cốt lõi của mình. Ranh giới lành mạnh không phải là ích kỷ — đó là điều kiện để bạn tiếp tục cho đi bền vững.',
        health: 'Năng lượng số 2 cực kỳ nhạy cảm với <strong>căng thẳng môi trường và cảm xúc xung quanh</strong>. Hệ miễn dịch và tiêu hóa dễ bị ảnh hưởng khi có xung đột kéo dài. Hãy tạo ra những "vùng yên tĩnh" trong ngày — không điện thoại, không thông báo, chỉ là bạn và hơi thở.',
        warnings: [
          '<strong>Mất bản thân trong việc đáp ứng kỳ vọng người khác</strong> — đến mức không còn biết mình thực sự muốn gì và là ai',
          '<strong>Thiếu quyết đoán quá mức</strong> — bỏ lỡ những cơ hội thực sự đòi hỏi phải hành động nhanh và dứt khoát',
          '<strong>Thu hút và ôm giữ năng lượng tiêu cực</strong> của người khác vào mình đến mức kiệt sức trong âm thầm'
        ],
        innerQ: `<strong>${name}</strong>, câu hỏi sâu nhất của giai đoạn này là: <em>"Bạn đang hợp tác và cho đi từ sức mạnh nội tâm — hay từ nỗi sợ xung đột và bị từ chối?"</em>`,
      },
      3: {
        title: 'Người Biểu Đạt — Năng Lượng Sáng Tạo & Truyền Cảm Hứng',
        icon: '✨',
        intro: `Giai đoạn <strong>${period}</strong> là mùa hoa nở trong hành trình của <strong>${name}</strong> — được chiếu sáng bởi <em>Số 3 — Người Nghệ Sĩ & Người Kể Chuyện</em>. Đây là ${periodLabel.toLowerCase()} mà vũ trụ không chỉ cho phép bạn biểu đạt — vũ trụ <strong>yêu cầu</strong> bạn làm điều đó. Bởi vì giọng nói của bạn, câu chuyện của bạn, và cách bạn nhìn thế giới là thứ mà ai đó đang chờ đợi để được nghe.`,
        career: 'Lĩnh vực nghệ thuật, truyền thông, marketing, giảng dạy, diễn thuyết và viết lách đều <strong>được năng lượng số 3 ủng hộ mạnh mẽ</strong>. Nếu bạn chưa từng thử sáng tạo nội dung, xuất bản, hoặc dạy điều gì đó bạn biết — đây chính là lúc. Giọng nói và câu chuyện của bạn trong giai đoạn này mang sức lan toả đặc biệt mà không phải lúc nào cũng có.',
        opportunity: 'Cơ hội lớn nhất đến từ <strong>việc chia sẻ kiến thức và trải nghiệm</strong> — dưới bất kỳ hình thức nào. Đây cũng là thời điểm vàng để xây dựng mạng lưới xã hội, kết nối với những người sáng tạo cùng chí hướng, và thu hút sự chú ý từ những người đúng đắn. Thương hiệu cá nhân xây dựng trong giai đoạn này phục vụ bạn lâu dài.',
        relationship: 'Sức hút và năng lượng của bạn ở <strong>đỉnh cao trong giai đoạn số 3</strong>. Bạn thu hút người khác một cách tự nhiên — nhưng hãy tỉnh táo phân biệt kết nối có chiều sâu với quan hệ chỉ tồn tại bề mặt. Tình yêu trong giai đoạn số 3 thường bay bổng và đẹp — hãy tận hưởng nhưng đừng để cảm xúc che mờ sự sáng suốt.',
        health: 'Nguy cơ lớn nhất là <strong>dùng caffeine và kích thích để thay thế giấc ngủ</strong>. Hệ hô hấp, cổ họng và tuyến giáp cần được chú ý. Hãy để cơ thể được nghỉ ngơi đủ giấc — sáng tạo thực sự cần không gian tĩnh lặng bên cạnh sự sôi động bề ngoài.',
        warnings: [
          '<strong>Phân tán năng lượng vào quá nhiều hướng cùng lúc</strong> — bắt đầu nhiều dự án thú vị nhưng hoàn thành rất ít',
          '<strong>Dùng sự vui vẻ và duyên dáng như lớp giáp</strong> để tránh đối mặt với những vấn đề cốt lõi và cảm xúc thực sự',
          '<strong>Thiếu kỷ luật tài chính</strong> — thu nhập tốt trong giai đoạn này nhưng cũng tiêu dễ dàng không kém, tạo ra bất ổn dài hạn'
        ],
        innerQ: `<strong>${name}</strong>, câu hỏi sâu nhất của giai đoạn này là: <em>"Bạn đang thể hiện bản thân để kết nối thực sự và tạo ra giá trị — hay để được chú ý và công nhận?"</em>`,
      },
      4: {
        title: 'Người Kiến Tạo — Năng Lượng Nền Tảng & Kỷ Luật',
        icon: '🏗️',
        intro: `Giai đoạn <strong>${period}</strong> đưa <strong>${name}</strong> vào trường năng lượng vững chắc của <em>Số 4 — Người Xây Dựng Nền Móng</em>. Đây là ${periodLabel.toLowerCase()} mà vũ trụ không trao cho bạn những thứ hào nhoáng và dễ dàng — mà trao thứ <strong>quý giá hơn nhiều: cơ hội xây dựng điều gì đó thực sự bền vững</strong>. Trong xã hội thích ngắn hạn, đỉnh cao số 4 là loại năng lượng hiếm có và vô cùng cần thiết.`,
        career: 'Giai đoạn lý tưởng để <strong>hệ thống hóa, cấu trúc hóa và xây dựng quy trình bền vững</strong> trong sự nghiệp. Bất kỳ đầu tư nghiêm túc nào về nâng cao chuyên môn hoặc hoàn thiện sản phẩm dài hạn đều sẽ cho quả. Bất động sản, kỹ thuật, tài chính dài hạn và các nghề đòi hỏi tính chính xác cao đều được số 4 đặc biệt ủng hộ.',
        opportunity: 'Những nỗ lực <strong>âm thầm, kiên trì và không hào quang</strong> trong giai đoạn này được đền bù xứng đáng. Đây là lúc tốt nhất để ký những cam kết dài hạn và đặt xuống những viên gạch đầu tiên cho mục tiêu 5-10 năm. Người kiên nhẫn với số 4 sẽ thu hoạch những gì người vội vã không bao giờ đạt được.',
        relationship: 'Số 4 mang đến <strong>xu hướng trở nên nghiêm túc hơn trong tình yêu</strong> — và đó là điều tốt. Bạn tìm kiếm sự ổn định và trung thành, sẵn sàng đầu tư lâu dài. Tuy nhiên đừng để sự "thực tế" giết chết sự lãng mạn hoàn toàn — đôi khi người bạn yêu cần cảm xúc hơn là kế hoạch.',
        health: 'Bạn có xu hướng bỏ qua cơ thể vì làm việc quá sức. <strong>Xương khớp, lưng và hệ cơ xương cần được chú ý đặc biệt</strong>. Đặt lịch tập thể dục đều đặn — như một cuộc hẹn bất di bất dịch, không phải khi "có thời gian".',
        warnings: [
          '<strong>Cứng nhắc quá mức với kế hoạch</strong> — bám vào lịch trình ngay cả khi thực tế đã thay đổi và đòi hỏi linh hoạt',
          '<strong>Ôm quá nhiều trách nhiệm một mình</strong> và kiệt sức trong im lặng thay vì nhờ đến sự hỗ trợ đúng lúc',
          '<strong>Thực dụng quá mức khiến bỏ lỡ cơ hội</strong> — có những thời điểm cần sự liều lĩnh và tư duy sáng tạo mà số 4 thuần túy không cung cấp'
        ],
        innerQ: `<strong>${name}</strong>, câu hỏi sâu nhất của giai đoạn này là: <em>"Bạn đang xây dựng từ tình yêu với điều đó và niềm tin vào tương lai — hay từ nỗi sợ mọi thứ sẽ sụp đổ nếu bạn dừng lại?"</em>`,
      },
      5: {
        title: 'Người Giải Phóng — Năng Lượng Thay Đổi & Tự Do',
        icon: '🌊',
        intro: `Giai đoạn <strong>${period}</strong> thổi vào cuộc đời <strong>${name}</strong> một cơn gió lớn của <em>Số 5 — Người Phá Vỡ Giới Hạn</em>. Đây là ${periodLabel.toLowerCase()} mà những thay đổi lớn — đôi khi bất ngờ và không được mời — <strong>không phải là tai họa mà là món quà vũ trụ</strong> tặng cho những ai đủ dũng cảm nắm lấy. Số 5 không cho phép bạn đứng yên. Và chính sự chuyển động đó là nguồn sống của bạn trong giai đoạn này.`,
        career: 'Sự nghiệp trong giai đoạn số 5 cần <strong>sự linh hoạt và khả năng thích nghi</strong>. Những cơ hội tốt nhất thường đến từ hướng không ai ngờ — đừng từ chối chúng vì "không nằm trong kế hoạch". Du lịch, bán hàng, marketing đa kênh, truyền thông và bất cứ nghề nào liên quan đến sự thay đổi đều được ủng hộ mạnh.',
        opportunity: 'Cơ hội đến từ <strong>những gặp gỡ tình cờ, chuyến đi bất ngờ và cuộc trò chuyện tưởng như vô tình</strong>. Hãy giữ lịch trình linh hoạt và tâm thế mở — những cánh cửa trong giai đoạn số 5 chỉ mở trong chớp mắt và không chờ người chưa sẵn sàng.',
        relationship: 'Tình yêu trong giai đoạn số 5 <strong>hào hứng và cuốn hút nhưng cũng dễ bốc hơi</strong> nếu thiếu nền tảng. Bạn cần người bạn đời đủ linh hoạt để đi cùng bạn trong sự thay đổi, không phải người kéo bạn ngược lại. Hãy rõ ràng với chính mình về điều bạn thực sự tìm kiếm.',
        health: 'Nguy cơ lớn nhất là <strong>lạm dụng kích thích</strong> — quá nhiều trải nghiệm, quá ít nghỉ ngơi thực sự. Hệ thần kinh và tiêu hóa dễ bị ảnh hưởng. Hãy tạo ra ít nhất một thói quen ổn định mỗi ngày — như điểm neo trong cơn sóng của số 5.',
        warnings: [
          '<strong>Chạy trốn cam kết thay vì chấp nhận và trưởng thành</strong> — phân biệt sự tự do thực sự với việc né tránh trách nhiệm',
          '<strong>Tìm kiếm khoái cảm tức thì</strong> và bỏ qua những hậu quả tài chính, sức khỏe, quan hệ trong dài hạn',
          '<strong>Thay đổi liên tục đến mức mất phương hướng</strong> — không ai kể cả bạn biết bạn thực sự muốn gì và là ai'
        ],
        innerQ: `<strong>${name}</strong>, câu hỏi sâu nhất của giai đoạn này là: <em>"Sự tự do bạn đang tìm kiếm là tự do để hướng đến điều gì — hay chỉ là tự do để thoát khỏi điều gì?"</em>`,
      },
      6: {
        title: 'Người Nuôi Dưỡng — Năng Lượng Tình Yêu & Trách Nhiệm',
        icon: '💛',
        intro: `Giai đoạn <strong>${period}</strong> đặt <strong>${name}</strong> vào trái tim ấm áp của <em>Số 6 — Người Giữ Lửa Gia Đình & Cộng Đồng</em>. Đây là ${periodLabel.toLowerCase()} mà vũ trụ giao cho bạn một trong những nhiệm vụ thiêng liêng nhất: <strong>trở thành nơi nương tựa, người tạo ra sự hài hòa và vẻ đẹp</strong> trong những mối quan hệ xung quanh. Đây không phải giai đoạn của chinh phục — đây là giai đoạn của nuôi dưỡng và chữa lành.`,
        career: 'Các nghề liên quan đến <strong>chăm sóc, giảng dạy, tư vấn, y tế, thiết kế không gian sống</strong> và bất kỳ vai trò nào phục vụ một cộng đồng đều được số 6 ủng hộ đặc biệt. Đây cũng là giai đoạn tốt để xây dựng văn hoá đội nhóm tích cực và làm đẹp môi trường làm việc.',
        opportunity: 'Cơ hội đến từ <strong>phục vụ người khác một cách chân thực và không vụ lợi</strong>. Danh tiếng và sự tin tưởng từ cộng đồng xây dựng trong giai đoạn này không thể mua được bằng tiền — nhưng sẽ mở ra những cánh cửa nghề nghiệp và xã hội rất giá trị sau này.',
        relationship: 'Đây là <strong>đỉnh cao của sự nuôi dưỡng và cam kết sâu sắc</strong>. Tình yêu trong giai đoạn số 6 có thể đạt đến chiều sâu mà các giai đoạn khác không có. Nhưng hãy cẩn thận với xu hướng kiểm soát người thân "vì muốn tốt cho họ" — nuôi dưỡng lành mạnh là trao quyền, không phải tạo sự phụ thuộc.',
        health: 'Bạn dễ bỏ qua sức khỏe <strong>của chính mình</strong> trong khi chăm sóc người khác. Tim, tuần hoàn và hậu quả của căng thẳng tích tụ cần được chú ý. Hãy nhớ: bạn không thể rót nước từ một chiếc bình rỗng.',
        warnings: [
          '<strong>Kiểm soát người thân vì thương yêu</strong> — nhưng kiểm soát vẫn là kiểm soát, dù động cơ tốt đến đâu',
          '<strong>Hy sinh quá mức đến mức cảm thấy oán giận</strong> — khi sự cho đi đến từ cảm giác nghĩa vụ thay vì tình yêu thực sự',
          '<strong>Nhận trách nhiệm cho cảm xúc và hạnh phúc của người khác</strong> — đây là gánh nặng không ai có thể mang hộ ai'
        ],
        innerQ: `<strong>${name}</strong>, câu hỏi sâu nhất của giai đoạn này là: <em>"Bạn đang yêu thương và chăm sóc từ sự sung mãn nội tâm — hay từ nỗi sợ rằng nếu không làm vậy, bạn sẽ mất đi tình yêu của họ?"</em>`,
      },
      7: {
        title: 'Người Tìm Kiếm Sự Thật — Năng Lượng Tri Thức & Tâm Linh',
        icon: '🔮',
        intro: `Giai đoạn <strong>${period}</strong> là mùa thu hoạch của <strong>${name}</strong> — không phải thu hoạch vật chất mà thu hoạch <em>tri thức, trí tuệ và sự giác ngộ nội tâm</em>. <em>Số 7 — Người Tìm Sự Thật</em> không phải là con số của thành công nhanh chóng. Đây là ${periodLabel.toLowerCase()} mà <strong>chiều sâu và chất lượng của sự hiểu biết quan trọng hơn tốc độ và số lượng</strong>.`,
        career: 'Nghiên cứu chuyên sâu, phân tích, tư vấn chiến lược, tâm lý học, khoa học và <strong>bất kỳ lĩnh vực nào đòi hỏi sự đào sâu nghiêm túc</strong> đều được năng lượng số 7 ủng hộ. Đây là lúc để trở thành chuyên gia thực sự — không phải người biết nhiều thứ loáng thoáng mà là người hiểu một thứ ở mức độ người khác không thể đạt được.',
        opportunity: 'Cơ hội lớn đến từ <strong>việc chia sẻ tri thức chuyên sâu</strong> mà bạn đã tích lũy. Một khoá học được tạo ra, một phương pháp được hệ thống hoá — những thứ này trong giai đoạn số 7 có thể định hình danh tiếng của bạn trong nhiều năm tới.',
        relationship: 'Số 7 là con số của <strong>sự cô đơn thiêng liêng</strong> — bạn cần không gian riêng để suy ngẫm và tái tạo năng lượng. Người bạn đời lý tưởng là người hiểu và tôn trọng điều đó, không cảm thấy bị từ chối khi bạn cần không gian một mình.',
        health: '<strong>Não bộ và hệ thần kinh</strong> là vùng cần chú ý — đặc biệt là rối loạn giấc ngủ do suy nghĩ quá nhiều. Hãy tập thực hành "tắt não" vào buổi tối. Thiên nhiên là liều thuốc tốt nhất cho số 7.',
        warnings: [
          '<strong>Cô lập quá mức</strong> — rút lui khỏi các mối quan hệ đến mức trở thành cô đơn không lành mạnh',
          '<strong>Hoài nghi và lạnh lùng với cảm xúc</strong> — phân tích mọi thứ đến mức không thể kết nối và tin tưởng người khác',
          '<strong>Ôm giữ tri thức cho riêng mình</strong> — không chia sẻ những gì bạn biết vì sợ bị phán xét hoặc vì cảm giác người khác không hiểu được'
        ],
        innerQ: `<strong>${name}</strong>, câu hỏi sâu nhất của giai đoạn này là: <em>"Sự thu mình và chiều sâu bạn theo đuổi là để hiểu bản thân và phục vụ người khác tốt hơn — hay để trốn tránh thế giới và những mối quan hệ đòi hỏi sự dễ tổn thương?"</em>`,
      },
      8: {
        title: 'Người Kiến Tạo Quyền Lực — Năng Lượng Thịnh Vượng & Ảnh Hưởng',
        icon: '⚡',
        intro: `Giai đoạn <strong>${period}</strong> đặt <strong>${name}</strong> vào trường năng lượng mạnh mẽ và đòi hỏi nhất của <em>Số 8 — Người Kiến Tạo Thịnh Vượng</em>. Vũ trụ không trao số 8 cho người yếu lòng — nó trao cho những ai <strong>có khả năng chịu đựng áp lực lớn, dám đối mặt với thực tế khắc nghiệt và vẫn tiến lên</strong>. Đây là ${periodLabel.toLowerCase()} mà thành công vật chất và sức ảnh hưởng là hoàn toàn có thể.`,
        career: 'Tài chính, quản lý cấp cao, kinh doanh quy mô lớn, bất động sản và <strong>các lĩnh vực đòi hỏi tư duy chiến lược và quản lý nguồn lực</strong> đều được số 8 ủng hộ. Đây là giai đoạn để đàm phán những thỏa thuận lớn, thăng tiến vị trí quản lý cấp cao, và xây dựng sức ảnh hưởng tài chính thực sự.',
        opportunity: '<strong>Thu nhập và tài sản tăng trưởng mạnh</strong> là đặc trưng của giai đoạn số 8 — nhưng chỉ khi bạn hành động từ sự chính trực. Bộ lọc tốt nhất cho mọi cơ hội: "Liệu điều này có tạo ra giá trị thực cho người khác không?"',
        relationship: 'Bạn yêu mạnh mẽ và bảo hộ — nhưng <strong>cần một người bạn đời không bị đe dọa bởi sức mạnh của bạn</strong>. Hãy cẩn thận không để sự bận rộn và tập trung vào sự nghiệp làm lạnh dần các mối quan hệ quan trọng.',
        health: '<strong>Hệ tim mạch và huyết áp là những vùng cần giám sát</strong> trong giai đoạn áp lực cao của số 8. Tập thể dục không chỉ là sức khỏe — với số 8, nó còn là cách giải phóng áp lực tích tụ. Hãy chuyển hóa căng thẳng qua thể chất, không phải dồn nén nó.',
        warnings: [
          '<strong>Ám ảnh với kết quả đến mức bỏ qua con người</strong> — xem người khác qua lăng kính năng suất và lợi ích thay vì giá trị con người',
          '<strong>Tích luỹ mà không bao giờ thấy đủ</strong> — chu kỳ "chỉ cần thêm một chút nữa" khiến ngưỡng hài lòng không bao giờ đến',
          '<strong>Dùng quyền lực để kiểm soát thay vì trao quyền</strong> — đây là sự lãng phí lớn nhất của năng lượng số 8'
        ],
        innerQ: `<strong>${name}</strong>, câu hỏi sâu nhất của giai đoạn này là: <em>"Thịnh vượng bạn đang xây dựng sẽ phục vụ điều gì — và khi đạt được, cuộc sống của những ai xung quanh bạn sẽ tốt hơn không?"</em>`,
      },
      9: {
        title: 'Người Hoàn Thành Chu Kỳ — Năng Lượng Nhân Đạo & Buông Bỏ',
        icon: '🌏',
        intro: `Giai đoạn <strong>${period}</strong> đặt <strong>${name}</strong> vào trường năng lượng sâu thẳm và nhân văn nhất của <em>Số 9 — Người Hoàn Thành, Linh Hồn Đã Trải Qua Nhiều</em>. Đây là ${periodLabel.toLowerCase()} mà sứ mệnh của bạn vượt ra khỏi giới hạn của bản thân — <strong>vũ trụ gọi bạn đến những điều lớn hơn chính mình</strong>. Số 9 không phải về tích luỹ — nó về cho đi, về buông bỏ, về phục vụ điều gì đó có ý nghĩa bền vững.`,
        career: '<strong>Nhân đạo, giáo dục, nghệ thuật chữa lành, lãnh đạo cộng đồng và bất kỳ lĩnh vực nào có tác động xã hội rộng lớn</strong> đều được ủng hộ trong giai đoạn số 9. Đây là lúc kiến thức và kinh nghiệm tích lũy từ các giai đoạn trước được tổng hợp thành sự đóng góp thực sự có giá trị.',
        opportunity: 'Cơ hội lớn nhất đến từ <strong>việc kết nối những gì bạn biết với những gì thế giới cần</strong>. Một dự án xã hội, một tác phẩm sáng tạo, một chương trình đào tạo — bất cứ điều gì giúp bạn "trả lại" cho cuộc đời theo cách chỉ bạn có thể làm được.',
        relationship: 'Bạn yêu rộng lớn và vị tha trong giai đoạn này — nhưng <strong>hãy học cách yêu thương với ranh giới lành mạnh</strong>. Buông bỏ những mối quan hệ đã hết vai trò trong hành trình là một hành động yêu thương — với cả họ và bạn.',
        health: 'Hệ miễn dịch và sức khỏe cảm xúc cần được <strong>nuôi dưỡng có ý thức</strong>. Bạn dễ bị kiệt sức vì ôm quá nhiều nỗi đau của người khác. Hãy thực hành buông bỏ theo nghĩa đen — thở ra, nhả ra, và nhớ rằng bạn không phải cứu vớt ai ngoài việc sống trọn vẹn nhất có thể.',
        warnings: [
          '<strong>Ôm giữ vết thương cũ không chịu buông</strong> — tha thứ không phải để người kia xứng đáng, mà để bạn được tự do',
          '<strong>Tự tan trong người khác</strong> — mất ranh giới giữa lòng trắc ẩn lành mạnh và sự hoà tan bản thân',
          '<strong>Cưu mang quá nhiều trách nhiệm nhân đạo</strong> cùng lúc đến mức không thể làm tốt bất kỳ điều nào trong số đó'
        ],
        innerQ: `<strong>${name}</strong>, câu hỏi sâu nhất của giai đoạn này là: <em>"Bạn đang cho đi từ sự sung mãn và tình yêu — hay từ cảm giác tội lỗi rằng mình chưa đủ khi chưa cứu được ai đó?"</em>`,
      },
      10: {
        title: 'Người Mang Sức Mạnh Đặc Biệt — Năng Lượng Số 10 Siêu Việt',
        icon: '🌟',
        intro: `Giai đoạn <strong>${period}</strong> đặt <strong>${name}</strong> vào một trong những trường năng lượng đặc biệt nhất của kim tự tháp: <em>Số 10 — Con Số Của Một Chu Kỳ Hoàn Thành Và Bắt Đầu Lại Ở Tầng Cao Hơn</em>. Số 10 trong kim tự tháp không được rút gọn về 1 — nó mang trong mình <strong>năng lượng của Số 1 được tăng cường bởi Số 0 — biểu tượng của tiềm năng vô hạn</strong>. Đây là ${periodLabel.toLowerCase()} với sức mạnh tiên phong cực đại và chiều sâu khôn ngoan từ những gì đã trải qua.`,
        career: 'Số 10 mang <strong>sức mạnh lãnh đạo của Số 1 nhưng với chiều sâu và sự chín chắn lớn hơn nhiều</strong>. Đây là giai đoạn lý tưởng để thành lập hoặc tái cơ cấu tổ chức, dẫn dắt sự thay đổi mang tính hệ thống. Những người sở hữu đỉnh số 10 thường có khả năng hướng dẫn và thôi thúc người khác theo cách rất tự nhiên.',
        opportunity: 'Cơ hội lớn nhất đến từ <strong>việc dẫn dắt và truyền cảm hứng theo cách riêng</strong> — không theo bất kỳ công thức có sẵn nào. Số 10 không đi theo con đường của ai — nó tạo ra con đường. Hãy tin vào trực giác lãnh đạo của bạn, ngay cả khi không ai hiểu hướng đi bạn chọn.',
        relationship: 'Bạn yêu với <strong>sức mạnh và sự quyết tâm đặc trưng của số 1 nhưng mang chiều sâu cảm xúc của số 0</strong>. Khi đã chọn ai, bạn toàn tâm toàn ý. Người bạn đời lý tưởng tôn trọng sức mạnh của bạn như một tài sản, không xem nó là mối đe dọa.',
        health: 'Bạn có nguồn năng lượng thể chất đặc biệt nhưng <strong>hệ thần kinh cần được bảo vệ khỏi sự kích thích liên tục</strong>. Tạo ra những khoảng "im lặng" trong ngày — không để thông tin, quyết định và trách nhiệm lấp đầy mọi khoảng trống trong nhận thức.',
        warnings: [
          '<strong>Ôm tất cả không chia sẻ</strong> — cảm thấy mình phải tự mình làm mọi thứ vì không ai làm tốt như mình',
          '<strong>Không biết khi nào cần dừng lại</strong> — đốt cháy năng lượng vô tận đến khi cơ thể và tinh thần bắt buộc phải dừng',
          '<strong>Cô đơn ở đỉnh cao</strong> — không chia sẻ được với ai vì cảm thấy không ai ở cùng tần số'
        ],
        innerQ: `<strong>${name}</strong>, câu hỏi sâu nhất của giai đoạn này là: <em>"Sức mạnh và tầm ảnh hưởng bạn đang xây dựng sẽ được dùng để làm gì — và ai sẽ được hưởng lợi từ điều đó cùng với bạn?"</em>`,
      },
      11: {
        title: 'Nhà Giác Ngộ — Năng Lượng Trực Giác Siêu Việt & Sứ Mệnh Ánh Sáng',
        icon: '💫',
        intro: `Giai đoạn <strong>${period}</strong> đặt <strong>${name}</strong> vào trường năng lượng bậc thầy hiếm có của <em>Số 11 — Con Số Master, Người Mang Ánh Sáng</em>. Đây là ${periodLabel.toLowerCase()} mà ranh giới giữa trực giác và lý trí mờ dần — <strong>những điều bạn "cảm nhận" thường chính xác hơn những gì bạn "suy nghĩ"</strong>. Số 11 trong kim tự tháp không được rút gọn về 2 — nó mang tần số rung động hoàn toàn khác, đòi hỏi mức độ trưởng thành và nhận thức về bản thân rất cao.`,
        career: 'Trực giác đặc biệt nhạy bén là <strong>công cụ nghề nghiệp mạnh nhất</strong> của bạn trong giai đoạn này. Bất kỳ lĩnh vực nào đòi hỏi sự sáng tạo đột phá, tầm nhìn chiến lược xa và khả năng truyền cảm hứng cho tập thể — lãnh đạo tinh thần, tư vấn cao cấp, nghệ thuật, giáo dục đổi mới — đều phát huy tối đa năng lượng số 11.',
        opportunity: 'Những ý tưởng và tầm nhìn bạn nhận được trong giai đoạn này thường <strong>đi trước thời đại 5-10 năm</strong>. Hãy ghi lại tất cả — ngay cả những thứ có vẻ điên rồ — vì chúng sẽ có ý nghĩa sau này. Đây cũng là thời điểm tốt để phát triển và chia sẻ những khả năng tâm linh và trực giác một cách có cấu trúc và có ích.',
        relationship: 'Bạn cảm nhận được cảm xúc và nhu cầu chưa được nói của người khác theo cách mà ít người có. Đây là <strong>thiên phú — nhưng chỉ khi bạn học được cách giữ ranh giới năng lượng rõ ràng</strong>. Không phải nhiệm vụ của bạn là chữa lành mọi người bạn gặp.',
        health: 'Hệ thần kinh cực kỳ nhạy cảm trong giai đoạn số 11. <strong>Thiền định không phải là tuỳ chọn — đó là nhu cầu sinh tồn</strong>. Hãy tạo ra những khoảng "detox năng lượng" thường xuyên: thời gian trong thiên nhiên, không điện thoại, không tiếp nhận thông tin cảm xúc từ người khác.',
        warnings: [
          '<strong>Gánh nặng trách nhiệm quá lớn</strong> — cảm thấy mình phải cứu hoặc chữa lành tất cả mọi người xung quanh',
          '<strong>Lo lắng và kiệt sức thần kinh kinh niên</strong> — hệ thần kinh siêu nhạy cảm liên tục bị kích thích mà không có thời gian phục hồi',
          '<strong>Dao động giữa xuất chúng và sụp đổ</strong> mà không có điểm trung bình ổn định nào giữa hai thái cực'
        ],
        innerQ: `<strong>${name}</strong>, câu hỏi sâu nhất của giai đoạn này là: <em>"Bạn đang sống với và từ những khả năng đặc biệt của mình — hay đang bị chúng dẫn dắt đến kiệt sức và mất phương hướng?"</em>`,
      },
      22: {
        title: 'Kiến Trúc Sư Vũ Trụ — Năng Lượng Tạo Ra Di Sản Vĩnh Cửu',
        icon: '🏛️',
        intro: `Giai đoạn <strong>${period}</strong> đặt <strong>${name}</strong> vào trường năng lượng hùng vĩ hiếm có của <em>Số 22 — Kiến Trúc Sư Bậc Thầy</em>. Đây là ${periodLabel.toLowerCase()} mà vũ trụ trao cho bạn vừa <strong>tầm nhìn của nhà tiên tri vừa bàn tay của người thợ thủ công có tay nghề cao</strong> — khả năng hiếm hoi biến những điều phi thường thành hiện thực vật lý. Số 22 không xây nhà — nó xây đế chế, xây phong trào, xây hệ thống tồn tại sau khi người xây đã rời đi.`,
        career: 'Bạn có khả năng tạo ra những dự án và tổ chức có <strong>tầm ảnh hưởng xuyên thế hệ</strong>. Kiến trúc, kỹ thuật, chính sách công, lãnh đạo tổ chức quốc tế, xây dựng di sản văn hoá, hệ thống giáo dục — bất kỳ lĩnh vực nào kết hợp tầm nhìn vĩ mô với khả năng thực thi cụ thể đều xứng đáng với số 22.',
        opportunity: 'Những cơ hội trong giai đoạn này thường có <strong>quy mô lớn hơn những gì bạn nghĩ mình xứng đáng nhận</strong>. Đừng co lại. Vũ trụ giao những dự án lớn cho số 22 bởi vì linh hồn bạn đã chuẩn bị — ngay cả khi tâm trí còn nghi ngờ.',
        relationship: 'Bạn cần những người bạn đời và cộng sự <strong>đủ tin tưởng để chia sẻ tầm nhìn lớn và đủ thực tế để giữ bạn có chân trên mặt đất</strong>. Đây là giai đoạn cần những mối quan hệ có chiều sâu và nền tảng vững chắc, không phải những kết nối xã giao phù du.',
        health: 'Gánh nặng của trách nhiệm lớn có thể đè nặng lên hệ thần kinh và tâm lý. <strong>Áp lực kỳ vọng cao cần được quản lý có ý thức</strong>. Hãy xây dựng những thói quen phục hồi năng lượng nghiêm túc như một phần của kỷ luật hàng ngày, không phải như phần thưởng khi "xong việc".',
        warnings: [
          '<strong>Áp lực kỳ vọng tự đặt ra</strong> — trở thành gánh nặng đè nặng đến mức tê liệt và không thể hành động',
          '<strong>Thất vọng sâu khi thực tế chuyển động chậm hơn tầm nhìn</strong> — dẫn đến bỏ cuộc giữa chừng ngay trước khi đạt đến đỉnh',
          '<strong>Cô đơn của người nhìn xa hơn đám đông</strong> — không ai xung quanh thực sự hiểu được điều bạn đang cố tạo ra'
        ],
        innerQ: `<strong>${name}</strong>, câu hỏi sâu nhất của giai đoạn này là: <em>"Bạn đang kiến tạo từ Sứ Mệnh và tình yêu với điều đó — hay từ nhu cầu được lịch sử ghi nhận và nhớ đến?"</em>`,
      },
    };

    const pd = peakData[n] || peakData[1];
    const challengeSuffix = challengeNum !== null
      ? `<p class="nar" style="margin-top:0.5rem;font-size:0.93em;color:#64748b;"><em>📌 Thử thách song hành trong giai đoạn này: <strong>Số ${challengeNum}</strong> — đây là bài học mà năng lượng đỉnh cao số ${n} buộc bạn phải đối mặt và vượt qua để phát huy hết tiềm năng.</em></p>` : '';

    return `
    <div class="peak-analysis-card" style="border-left:4px solid #2563eb;background:linear-gradient(135deg,#f8faff 0%,#fff 100%);padding:1.5rem 1.5rem 1.25rem;border-radius:0 12px 12px 0;margin-bottom:1.5rem;box-shadow:0 2px 12px rgba(37,99,235,0.06);">
      <div class="peak-header" style="display:flex;align-items:center;gap:0.75rem;margin-bottom:1rem;">
        <div style="width:48px;height:48px;border-radius:50%;background:linear-gradient(135deg,#1e3a8a,#2563eb);display:flex;align-items:center;justify-content:center;color:white;font-size:1.4rem;font-weight:800;flex-shrink:0;">${n}</div>
        <div>
          <div style="font-size:0.75rem;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:#64748b;margin-bottom:0.1rem;">${['Đỉnh Thứ Nhất', 'Đỉnh Thứ Hai', 'Đỉnh Thứ Ba', 'Đỉnh Thứ Tư'][peakIndex] || 'Đỉnh Cao'} — ${periodLabel}</div>
          <div style="font-size:1.05rem;font-weight:700;color:#1e3a8a;">${pd.icon} ${pd.title}</div>
          <div style="font-size:0.88rem;color:#64748b;margin-top:0.2rem;">${period}</div>
        </div>
      </div>

      <p class="nar">${pd.intro}</p>
      ${challengeSuffix}

      <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin:1.25rem 0;">
        <div style="background:#eff6ff;border-radius:10px;padding:1rem;">
          <div style="font-size:0.75rem;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:#2563eb;margin-bottom:0.5rem;">💼 Sự nghiệp & Tài chính</div>
          <p style="margin:0;font-size:0.92rem;line-height:1.6;color:#334155;">${pd.career}</p>
        </div>
        <div style="background:#f0fdf4;border-radius:10px;padding:1rem;">
          <div style="font-size:0.75rem;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:#16a34a;margin-bottom:0.5rem;">🌱 Cơ hội mở ra</div>
          <p style="margin:0;font-size:0.92rem;line-height:1.6;color:#334155;">${pd.opportunity}</p>
        </div>
        <div style="background:#fdf4ff;border-radius:10px;padding:1rem;">
          <div style="font-size:0.75rem;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:#9333ea;margin-bottom:0.5rem;">💞 Tình yêu & Quan hệ</div>
          <p style="margin:0;font-size:0.92rem;line-height:1.6;color:#334155;">${pd.relationship}</p>
        </div>
        <div style="background:#fff7ed;border-radius:10px;padding:1rem;">
          <div style="font-size:0.75rem;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:#ea580c;margin-bottom:0.5rem;">🌿 Sức khỏe & Năng lượng</div>
          <p style="margin:0;font-size:0.92rem;line-height:1.6;color:#334155;">${pd.health}</p>
        </div>
      </div>

      <div style="background:#fff1f2;border:1px solid #fecdd3;border-radius:10px;padding:1rem;margin-bottom:1rem;">
        <div style="font-size:0.75rem;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:#dc2626;margin-bottom:0.5rem;">⚠️ Các khía cạnh tiêu cực cần tránh</div>
        <ul style="margin:0;padding-left:1.25rem;">
          ${pd.warnings.map(w => `<li style="font-size:0.91rem;line-height:1.65;color:#334155;margin-bottom:0.3rem;">${w}</li>`).join('')}
        </ul>
      </div>

      <div class="insight-box" style="background:linear-gradient(135deg,#dbeafe,#ede9fe);border:none;border-radius:10px;padding:1rem 1.25rem;">
        <div style="font-size:0.75rem;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:#2563eb;margin-bottom:0.4rem;">🪷 Câu hỏi chiêm nghiệm nội tâm</div>
        <p style="margin:0;font-size:0.95rem;line-height:1.7;color:#1e3a8a;">${pd.innerQ}</p>
      </div>
    </div>`;
  },

  // ════════════════════════════════════════════════════════════════════
  // CHỈ SỐ SỨ MỆNH — Per-number deep narrative (1-9, 11, 22)
  // Được gọi: NT.destiny[num](name, kbData)
  // ════════════════════════════════════════════════════════════════════
  destiny: {
    1: (name, d) => `<p class="nar">Sứ mệnh số <strong>1</strong> của bạn, <strong>${name}</strong>, là sứ mệnh của người <em>tiên phong</em>. Bạn đến với cuộc đời này để mở những con đường chưa ai đi, để lãnh đạo không phải bằng chức danh hay vị trí mà bằng chính <strong>năng lượng và tầm nhìn vượt trội</strong> của mình. Số 1 là con số của sự khởi đầu — và mỗi lần bạn dám bước ra khỏi vùng an toàn để thực hiện một điều mới, bạn đang sống đúng sứ mệnh của mình.</p>

<p class="nar"><strong>Điểm sáng đặc biệt:</strong> Bạn có khả năng tự lực mạnh mẽ, khả năng đưa ra quyết định nhanh và chính xác, và sức thu hút tự nhiên khiến người khác muốn đi theo bạn. Trong công việc, bạn là người tạo ra bước đột phá — không phải người duy trì hiện trạng. ${d?.strengths ? d.strengths : ''}</p>

  <p class="nar"><strong>Thách thức cần vượt:</strong> Cái tôi mạnh đôi khi trở thành bức tường ngăn bạn nhận lấy sự hỗ trợ cần thiết. Bạn có thể rơi vào bẫy của sự độc đoán hay thiếu kiên nhẫn với người đi chậm hơn mình. Hãy nhớ: người lãnh đạo vĩ đại nhất không phải ai đi nhanh nhất — mà là người có thể nâng tốc độ của cả đội lên.</p>

${d?.advice ? `<div class="insight-box">💡 <strong>Lời khuyên sứ mệnh:</strong> ${d.advice}</div>` : `<div class="insight-box">💡 <strong>Lời khuyên sứ mệnh:</strong> Hãy dùng sức mạnh số 1 của bạn để xây dựng — không phải để chứng minh. Khi bạn lãnh đạo bằng việc phục vụ, sứ mệnh của bạn được thực hiện ở tầng sâu nhất.</div>`} `,

    2: (name, d) => `<p class="nar"> Sứ mệnh số <strong> 2</strong> của bạn, <strong>${name}</strong>, là sứ mệnh của <em> người hòa giải và kết nối</em>.Bạn đến thế giới này không để nổi bật mà để <strong> gắn kết</strong> — lấp đầy khoảng cách giữa người với người, giữa ý tưởng và hiện thực, giữa mâu thuẫn và hòa giải.Thành công của bạn đến không phải qua sự đối đầu mà qua sự hợp tác tinh tế.</p>

<p class="nar"><strong>Điểm sáng đặc biệt:</strong> Bạn có khả năng cảm nhận tinh tế những gì người khác chưa nói thành lời. Trực giác nhạy bén, khả năng ngoại giao và tài năng làm cho mọi người cảm thấy được lắng nghe — đây là những công cụ cực kỳ mạnh mẽ trong thế giới hiện đại nơi sự kết nối chân thực đang ngày càng hiếm. ${d?.strengths ? d.strengths : ''}</p>

<p class="nar"><strong>Thách thức cần vượt:</strong> Sự nhạy cảm của bạn đôi khi trở thành gánh nặng khi bạn quá hấp thụ cảm xúc tiêu cực xung quanh. Bạn cũng có thể thiếu quyết đoán vì luôn xét đến cảm nhận của tất cả mọi người. Hãy học cách tin vào trực giác của chính mình — đó là la bàn tốt nhất bạn có.</p>

${d?.advice ? `<div class="insight-box">💡 <strong>Lời khuyên sứ mệnh:</strong> ${d.advice}</div>` : `<div class="insight-box">💡 <strong>Lời khuyên sứ mệnh:</strong> Sức mạnh thực sự của số 2 không phải là nhường nhịn — mà là xây dựng những cầu nối mà không ai khác có thể xây được. Hãy tin vào giá trị của sự kiên nhẫn và tinh tế.</div>`} `,

    3: (name, d) => `<p class="nar"> Sứ mệnh số <strong> 3</strong> của bạn, <strong>${name}</strong>, là sứ mệnh của <em> người biểu đạt và truyền cảm hứng</em>.Bạn đến thế giới này để <strong> mang ánh sáng và niềm vui</strong> — qua lời nói, nghệ thuật, sự sáng tạo và khả năng kể chuyện đặc biệt của mình.Khi bạn được tự do biểu đạt, bạn không chỉ phát triển bản thân — bạn còn nâng cao tầm nhìn và tinh thần của những người xung quanh.${d?.description ? d.description : ''}</p>

<p class="nar"><strong>Điểm sáng đặc biệt:</strong> Tài nói chuyện cuốn hút, tư duy sáng tạo phong phú và khả năng tìm ra điểm tươi sáng trong mọi hoàn cảnh — đây là những thiên phú thật sự của bạn. Trong bất kỳ môi trường nào, bạn là người mang đến năng lượng tích cực và sự phấn khích cần thiết để mọi người tiếp tục tiến lên. ${d?.strengths ? d.strengths : ''}</p>

<p class="nar"><strong>Thách thức cần vượt:</strong> Sự phong phú của ý tưởng đôi khi khiến bạn bắt đầu nhiều thứ mà không hoàn thành. Bạn cũng có thể dùng sự vui vẻ như một lớp giáp để tránh đối mặt với những cảm xúc sâu hơn. Hãy học cách đào sâu vào một điều — chiều sâu thực sự mới tạo ra tác động lâu dài.</p>

${d?.advice ? `<div class="insight-box">💡 <strong>Lời khuyên sứ mệnh:</strong> ${d.advice}</div>` : `<div class="insight-box">💡 <strong>Lời khuyên sứ mệnh:</strong> Thế giới cần những người như bạn — những người có thể biến điều nặng nề thành nhẹ nhàng, điều phức tạp thành đơn giản, và điều u tối thành ánh sáng. Đừng xem nhẹ món quà này.</div>`} `,

    4: (name, d) => `<p class="nar"> Sứ mệnh số <strong> 4</strong> của bạn, <strong>${name}</strong>, là sứ mệnh của <em> người kiến tạo nền tảng</em>.Không phải ai cũng được trao nhiệm vụ xây dựng những nền tảng chắc chắn mà thế hệ sau có thể đứng lên — nhưng đó chính xác là điều vũ trụ giao phó cho bạn.Bạn được sinh ra để <strong> tạo ra sự bền vững</strong> trong một thế giới đầy biến động.${d?.description ? d.description : ''}</p>

<p class="nar"><strong>Điểm sáng đặc biệt:</strong> Sự kỷ luật, tính tổ chức cao, khả năng lập kế hoạch tỉ mỉ và ý chí bền bỉ — đây là những tài sản vô giá của bạn trong một thế giới thường thiếu sự kiên nhẫn. Bạn là người mọi người có thể trông cậy, và điều đó có giá trị hơn bất kỳ tài năng hào nhoáng nào. ${d?.strengths ? d.strengths : ''}</p>

<p class="nar"><strong>Thách thức cần vượt:</strong> Đôi khi sứ mệnh số 4 tạo ra xu hướng làm việc quá sức, cứng nhắc với kế hoạch đến mức không thể thích nghi, hoặc mang quá nhiều trách nhiệm một mình. Hãy nhớ: ngay cả kiến trúc sư giỏi nhất cũng cần đội nhóm để xây lên công trình vĩ đại.</p>

${d?.advice ? `<div class="insight-box">💡 <strong>Lời khuyên sứ mệnh:</strong> ${d.advice}</div>` : `<div class="insight-box">💡 <strong>Lời khuyên sứ mệnh:</strong> Mỗi hành động nhỏ của bạn — mỗi cam kết được giữ, mỗi hệ thống được xây, mỗi nền tảng được đặt — đều có ý nghĩa sâu xa hơn bạn nghĩ. Sứ mệnh của bạn không hoành tráng nhưng cực kỳ cần thiết.</div>`} `,

    5: (name, d) => `<p class="nar"> Sứ mệnh số <strong> 5</strong> của bạn, <strong>${name}</strong>, là sứ mệnh của <em> người khai mở tự do</em>.Bạn đến thế giới này để <strong> phá vỡ những giới hạn</strong> — trong tư tưởng, trong xã hội, trong những khuôn mẫu mà người ta cho là "phải như vậy".Sứ mệnh của bạn là chứng minh rằng có nhiều cách hơn để sống một cuộc đời trọn vẹn hơn những gì người ta dạy.${d?.description ? d.description : ''}</p>

<p class="nar"><strong>Điểm sáng đặc biệt:</strong> Khả năng thích nghi phi thường, tư duy đa chiều, sức thu hút tự nhiên và khả năng kết nối với mọi loại người — đây là những tài năng của sứ mệnh số 5. Bạn là người người xung quanh cần để nhắc họ rằng cuộc đời có nhiều màu sắc hơn là đen và trắng. ${d?.strengths ? d.strengths : ''}</p>

<p class="nar"><strong>Thách thức cần vượt:</strong> Nỗi sợ bị bó buộc có thể khiến bạn tránh né những cam kết lành mạnh. Bạn cũng có thể bị phân tán bởi quá nhiều hướng đi hấp dẫn mà không tập trung đủ sâu vào bất kỳ điều gì. Hãy học cách phân biệt sự tự do thực sự với sự trốn tránh trách nhiệm.</p>

${d?.advice ? `<div class="insight-box">💡 <strong>Lời khuyên sứ mệnh:</strong> ${d.advice}</div>` : `<div class="insight-box">💡 <strong>Lời khuyên sứ mệnh:</strong> Hành trình phiêu lưu đẹp nhất không phải là không có điểm đến — mà là một hành trình thực sự có ý nghĩa với mỗi bước đi. Hãy để sự tự do của bạn trở thành nguồn cảm hứng, không phải sự xáo trộn.</div>`} `,

    6: (name, d) => `<p class="nar"> Sứ mệnh số <strong> 6</strong> của bạn, <strong>${name}</strong>, là sứ mệnh của <em> người nuôi dưỡng và chữa lành</em>.Bạn đến thế giới này để tạo ra <strong> sự hài hòa và vẻ đẹp</strong> — trong gia đình, trong cộng đồng và trong tim người khác.Sứ mệnh của bạn không kém hào hùng hơn bất kỳ ai — nó chỉ biểu hiện theo một cách khác: qua sự chăm sóc, qua tình yêu thương vô điều kiện và qua khả năng tạo ra những không gian an toàn cho người khác tỏa sáng.${d?.description ? d.description : ''}</p>

<p class="nar"><strong>Điểm sáng đặc biệt:</strong> Lòng nhân ái, khả năng cảm nhận và đáp ứng nhu cầu của người khác, tài năng trong nghệ thuật, thiết kế và việc tạo ra vẻ đẹp — đây là những mặt mạnh không thể thay thế của sứ mệnh số 6. ${d?.strengths ? d.strengths : ''}</p>

<p class="nar"><strong>Thách thức cần vượt:</strong> Xu hướng kiểm soát thái quá đối với những người bạn yêu (vì muốn bảo vệ họ), hy sinh bản thân đến mức quên đi nhu cầu của chính mình, và đôi khi thất vọng khi sự cống hiến của mình không được đền đáp tương xứng. Ranh giới lành mạnh là kỹ năng quan trọng nhất của sứ mệnh số 6.</p>

${d?.advice ? `<div class="insight-box">💡 <strong>Lời khuyên sứ mệnh:</strong> ${d.advice}</div>` : `<div class="insight-box">💡 <strong>Lời khuyên sứ mệnh:</strong> Để sống đúng sứ mệnh số 6, hãy học cách yêu thương từ sự sung mãn bên trong — không phải từ nỗi sợ bị từ chối hay mong muốn được công nhận.</div>`} `,

    7: (name, d) => `<p class="nar"> Sứ mệnh số <strong> 7</strong> của bạn, <strong>${name}</strong>, là sứ mệnh của <em> người tìm kiếm sự thật</em>.Bạn đến thế giới này để <strong> đào sâu</strong> — vào tri thức, vào tâm linh, vào bản chất của thực tại — và mang về những hiểu biết mà người khác không thể đạt được chỉ bằng cách nhìn bề mặt.Sứ mệnh của bạn là trở thành một trong những giọng nói đáng tin cậy nhất trong bất kỳ lĩnh vực nào bạn chọn.${d?.description ? d.description : ''}</p>

<p class="nar"><strong>Điểm sáng đặc biệt:</strong> Trí tuệ phân tích sắc bén, khả năng nghiên cứu chuyên sâu, trực giác tâm linh và khả năng nhìn thấy những mẫu ẩn mà người khác bỏ qua — đây là những tài năng đặc biệt của sứ mệnh số 7. ${d?.strengths ? d.strengths : ''}</p>

<p class="nar"><strong>Thách thức cần vượt:</strong> Xu hướng cô lập, khó chia sẻ kiến thức theo cách người khác có thể tiếp cận, và đôi khi phân tích cảm xúc đến mức không còn cảm nhận được chúng nữa. Hãy nhớ: sự thật đẹp nhất cần được chia sẻ, không phải được ôm giữ một mình.</p>

${d?.advice ? `<div class="insight-box">💡 <strong>Lời khuyên sứ mệnh:</strong> ${d.advice}</div>` : `<div class="insight-box">💡 <strong>Lời khuyên sứ mệnh:</strong> Sứ mệnh số 7 phát triển mạnh nhất khi bạn tìm thấy cân bằng giữa chiều sâu của tri thức và sự kết nối với con người. Hãy dùng những gì bạn học được để phục vụ, không chỉ để hiểu.</div>`} `,

    8: (name, d) => `<p class="nar"> Sứ mệnh số <strong> 8</strong> của bạn, <strong>${name}</strong>, là sứ mệnh của <em> người kiến tạo quyền lực và thịnh vượng</em>.Bạn đến thế giới này để <strong> hiểu và sử dụng nguồn lực</strong> — không chỉ tài chính mà còn quyền lực, ảnh hưởng và năng lực tổ chức — theo cách tạo ra tác động thực sự và lâu dài.Sứ mệnh của bạn là chứng minh rằng thành công và đạo đức có thể song hành.${d?.description ? d.description : ''}</p>

<p class="nar"><strong>Điểm sáng đặc biệt:</strong> Tư duy chiến lược, khả năng quản lý nguồn lực hiệu quả, bản năng lãnh đạo tự nhiên và sức bền trong hành trình dài — đây là những tài năng thực sự của sứ mệnh số 8. ${d?.strengths ? d.strengths : ''}</p>

<p class="nar"><strong>Thách thức cần vượt:</strong> Ám ảnh với kết quả có thể khiến bạn bỏ qua quá trình và con người trong quá trình đó. Bạn cũng có thể bị cuốn vào chu kỳ tích lũy mà không bao giờ thấy đủ. Hãy định nghĩa lại thành công theo cách phản ánh giá trị thực sự của bạn — không chỉ là con số.</p>

${d?.advice ? `<div class="insight-box">💡 <strong>Lời khuyên sứ mệnh:</strong> ${d.advice}</div>` : `<div class="insight-box">💡 <strong>Lời khuyên sứ mệnh:</strong> Sứ mệnh số 8 được thực hiện trọn vẹn nhất khi quyền lực bạn xây dựng được dùng để nâng đỡ người khác, không chỉ để nâng mình. Đó là khi con số 8 thực sự quay vòng đầy đủ.</div>`} `,

    9: (name, d) => `<p class="nar"> Sứ mệnh số <strong> 9</strong> của bạn, <strong>${name}</strong>, là sứ mệnh của <em> người phục vụ nhân loại</em>.Đây là con số của sự hoàn thành, của lòng trắc ẩn và của tầm nhìn vượt qua ranh giới bản ngã.Bạn đến thế giới này không chỉ để sống cho bản thân — mà để <strong> góp phần vào điều gì đó lớn hơn</strong>: một phong trào, một cộng đồng, một ý tưởng có thể thay đổi cách thế giới vận hành.${d?.description ? d.description : ''}</p>

<p class="nar"><strong>Điểm sáng đặc biệt:</strong> Lòng trắc ẩn bao la, tầm nhìn nhân đạo, khả năng truyền cảm hứng và sức thu hút của một người đã trải qua nhiều nhưng vẫn chọn yêu thương — đây là những phẩm chất hiếm có nhất của sứ mệnh số 9. ${d?.strengths ? d.strengths : ''}</p>

<p class="nar"><strong>Thách thức cần vượt:</strong> Xu hướng mang quá nhiều gánh nặng của người khác lên vai mình, khó buông bỏ những mối quan hệ hay tình huống đã không còn lành mạnh, và đôi khi tự trừng phạt bản thân vì chưa làm đủ. Hãy nhớ: bạn chỉ có thể phục vụ thế giới khi bản thân được nuôi dưỡng đầy đủ.</p>

${d?.advice ? `<div class="insight-box">💡 <strong>Lời khuyên sứ mệnh:</strong> ${d.advice}</div>` : `<div class="insight-box">💡 <strong>Lời khuyên sứ mệnh:</strong> Sứ mệnh số 9 không yêu cầu bạn phải hoàn hảo — chỉ cần bạn tiếp tục chọn tình yêu thương và sự tha thứ, kể cả với chính mình. Đó là hành động cách mạng nhất mà số 9 có thể làm.</div>`} `,

    11: (name, d) => `<p class="nar"> Sứ mệnh số <strong> 11</strong> của bạn, <strong>${name}</strong>, là một trong những sứ mệnh hiếm gặp và đòi hỏi nhất: sứ mệnh của <em> người truyền ánh sáng tâm linh</em>.Số chủ 11 không được rút gọn về 2 — nó mang một tần số rung động đặc biệt đòi hỏi bạn phải đứng ở vị trí giao thoa giữa <strong> trực giác tâm linh sâu sắc và khả năng truyền đạt thực tiễn</strong>.${d?.description ? d.description : ''}</p>

<p class="nar"><strong>Điểm sáng đặc biệt:</strong> Trực giác cực kỳ mạnh, khả năng truyền cảm hứng và chữa lành qua sự hiện diện, tầm nhìn tiên phong về những xu hướng tinh thần và văn hóa — đây là những tài năng thiêng liêng của sứ mệnh số 11. ${d?.strengths ? d.strengths : ''}</p>

<p class="nar"><strong>Thách thức cần vượt:</strong> Sự nhạy cảm cực cao dễ dẫn đến kiệt sức cảm xúc và lo âu. Áp lực của sứ mệnh lớn có thể gây ra cảm giác không bao giờ làm đủ hay lo sợ thất bại. Gánh nặng của việc "nhìn thấy nhiều hơn người khác" đôi khi trở nên quá nặng để mang một mình.</p>

${d?.advice ? `<div class="insight-box">💡 <strong>Lời khuyên sứ mệnh:</strong> ${d.advice}</div>` : `<div class="insight-box">💡 <strong>Lời khuyên sứ mệnh:</strong> Sứ mệnh số 11 không yêu cầu bạn cứu vớt tất cả mọi người — chỉ cần bạn tỏa ra thứ ánh sáng chân thực nhất của mình. Những người cần ánh sáng đó sẽ tìm đến bạn.</div>`} `,

    22: (name, d) => `<p class="nar"> Sứ mệnh số <strong> 22</strong> của bạn, <strong>${name}</strong>, là số chủ hiếm gặp nhất — sứ mệnh của <em> Người Kiến Tạo Vĩ Đại</em>.Không phải ai cũng được trao nhiệm vụ xây dựng những hệ thống, tổ chức hay tư tưởng có tầm ảnh hưởng thực sự lên quy mô lớn.Bạn có khả năng <strong> biến những ý tưởng tâm linh sâu sắc thành thực thể vật lý</strong> có thể cảm nhận và tiếp cận được bởi nhiều người.${d?.description ? d.description : ''}</p>

<p class="nar"><strong>Điểm sáng đặc biệt:</strong> Tư duy hệ thống vĩ mô, trực giác tâm linh kết hợp khả năng thực thi thực tế, tầm nhìn dài hạn đặc biệt và khả năng truyền cảm hứng cho người khác cùng hướng đến một mục tiêu lớn — đây là những phẩm chất đặc biệt hiếm có. ${d?.strengths ? d.strengths : ''}</p>

<p class="nar"><strong>Thách thức cần vượt:</strong> Tiêu chuẩn quá cao có thể tạo ra áp lực không bền vững với bản thân và người xung quanh. Tầm nhìn vĩ đại đôi khi khiến bạn thất vọng sâu sắc với hiện thực phức tạp. Hãy học cách chia nhỏ sứ mệnh lớn thành những bước nhỏ — mỗi bước đều quan trọng như toàn bộ hành trình.</p>

${d?.advice ? `<div class="insight-box">💡 <strong>Lời khuyên sứ mệnh:</strong> ${d.advice}</div>` : `<div class="insight-box">💡 <strong>Lời khuyên sứ mệnh:</strong> Di sản vĩ đại nhất không được xây trong một ngày. Hãy kiên nhẫn với quá trình — và nhớ nuôi dưỡng bản thân trên con đường đó.</div>`} `,
  },

  // ════════════════════════════════════════════════════════════════════
  // CHỈ SỐ NHÂN CÁCH — Per-number deep narrative (1-9, 11)
  // NT.personality[num](name, kbData)
  // ════════════════════════════════════════════════════════════════════
  personality: {
    1: (name, d) => `<p class="nar"> Trong mắt người khác, <strong>${name}</strong>, bạn toát ra một thứ năng lượng không thể phủ nhận: <strong>sự tự tin và chắc chắn</strong>. Ngay từ lần đầu tiên gặp, người ta cảm nhận được rằng đây là người biết mình muốn gì và không ngại thực hiện nó.Nhân cách số <strong> 1</strong> của bạn không cần phải nỗ lực để gây ấn tượng — bạn tự nhiên chiếm lấy không gian bằng sự hiện diện của mình.${d?.description ? d.description : ''}</p>

<p class="nar">Người xung quanh thường tìm đến bạn khi cần sự quyết đoán và định hướng. Bạn truyền cảm giác tin tưởng rằng mọi việc sẽ được giải quyết. Tuy nhiên, đôi khi người ta có thể cảm thấy bạn quá cứng rắn hay không lắng nghe đủ — đặc biệt là những ai nhạy cảm hơn hoặc cần được nhìn nhận nhiều hơn. ${d?.strengths ? '<strong>Điểm nổi bật:</strong> ' + d.strengths : ''}</p>

<div class="insight-box">💡 <strong>Bí quyết kết nối:</strong> Hãy thỉnh thoảng để người khác thấy một phía dễ tổn thương hơn của bạn. Điều đó không làm giảm đi sự mạnh mẽ của bạn — mà làm cho bạn trở nên con người và đáng yêu hơn nhiều.</div>`,

    2: (name, d) => `<p class="nar"> Khi người khác nhìn <strong> ${name}</strong>, điều đầu tiên họ cảm nhận là <strong> sự ấm áp và an toàn</strong>.Nhân cách số <strong> 2</strong> của bạn tạo ra một trường năng lượng nhẹ nhàng, không đe dọa và cực kỳ dễ tiếp cận.Người ta tự nhiên mở lòng với bạn — chia sẻ những điều họ chưa nói với ai khác — vì họ cảm nhận bạn thực sự lắng nghe và không phán xét.${d?.description ? d.description : ''}</p>

<p class="nar">Trong môi trường làm việc, bạn được yêu mến rộng rãi vì khả năng làm hài hòa các mối quan hệ và tránh xung đột không cần thiết. Tuy nhiên, đôi khi người ta có thể đánh giá thấp bạn vì sự điềm tĩnh này — nhầm tưởng rằng bạn không có ý kiến riêng hay thiếu quyết đoán. ${d?.strengths ? '<strong>Điểm nổi bật:</strong> ' + d.strengths : ''}</p>

<div class="insight-box">💡 <strong>Bí quyết kết nối:</strong> Đừng để sự nhẹ nhàng của bạn trở thành sự vô hình. Hãy học cách thể hiện ý kiến của mình một cách rõ ràng — điều đó sẽ khiến người ta tôn trọng bạn không chỉ yêu mến bạn.</div>`,

    3: (name, d) => `<p class="nar"> Khi <strong> ${name}</strong> bước vào phòng, không khí thay đổi.Nhân cách số <strong> 3</strong> của bạn mang đến một thứ năng lượng mà không ai có thể giả tạo được: <strong>sự vui vẻ và sáng tạo tự nhiên</strong>. Người ta nhớ bạn sau lần gặp đầu tiên — không nhất thiết vì bạn nói điều gì sâu sắc, mà vì bạn khiến họ cảm thấy vui hơn khi ở cạnh bạn.${d?.description ? d.description : ''}</p>

<p class="nar">Khiếu hài hước, khả năng kể chuyện và năng lượng tích cực của bạn khiến bạn nổi tiếng với hầu hết mọi người. Tuy nhiên, đôi khi người ta có thể thấy bạn thiếu chiều sâu hoặc không đáng tin cậy — ấn tượng này hình thành khi họ chưa có cơ hội nhìn thấy phần nội tâm thực sự của bạn. ${d?.strengths ? '<strong>Điểm nổi bật:</strong> ' + d.strengths : ''}</p>

<div class="insight-box">💡 <strong>Bí quyết kết nối:</strong> Đừng sợ thể hiện chiều sâu cảm xúc và suy nghĩ của mình. Thế giới không chỉ cần vẻ vui vẻ của bạn — mà còn cần sự thông thái và chân thực ẩn bên sau nụ cười đó.</div>`,

    4: (name, d) => `<p class="nar"> Người khác nhìn <strong> ${name}</strong> và thấy: <strong>uy tín, đáng tin cậy, sự chuyên nghiệp</strong>. Nhân cách số <strong> 4</strong> của bạn khiến người ta cảm thấy an tâm khi giao phó trách nhiệm cho bạn — và điều đó không phải ngẫu nhiên.Bạn đúng giờ, bạn giữ lời hứa, bạn không nói suông.Trong một thế giới đầy sự không đáng tin, bạn trở thành điểm neo chắc chắn cho những người xung quanh.${d?.description ? d.description : ''}</p>

<p class="nar">Tuy nhiên, ấn tượng đầu tiên về bạn đôi khi có thể là quá nghiêm túc hay khó gần — đặc biệt là với những người thích sự tự phát và vui vẻ. Người ta cần thêm thời gian để phát hiện ra sự ấm áp thực sự của bạn bên dưới lớp vỏ điềm tĩnh. ${d?.strengths ? '<strong>Điểm nổi bật:</strong> ' + d.strengths : ''}</p>

<div class="insight-box">💡 <strong>Bí quyết kết nối:</strong> Hãy thỉnh thoảng cho phép bản thân "vô kỷ luật" một chút — cười lớn hơn, bá vai một người bạn, nói điều gì đó không được lên kế hoạch. Điều đó làm phong phú thêm hình ảnh của bạn kinh ngạc.</div>`,

    5: (name, d) => `<p class="nar"> Nhân cách số <strong> 5</strong> của <strong> ${name}</strong> tạo ra một từ trường không thể cưỡng lại: <strong>phóng khoáng, hấp dẫn và đầy bí ẩn</strong>. Người ta bị thu hút bởi bạn mà không hẳn biết tại sao — có thể là ánh mắt tự do trong bạn, có thể là những câu chuyện bất ngờ bạn kể, có thể là cảm giác rằng mỗi cuộc gặp gỡ với bạn đều mang theo điều gì đó mới.${d?.description ? d.description : ''}</p>

<p class="nar">Trong mắt người khác, bạn là người sống thực sự — không bị giam cầm bởi những kỳ vọng hay khuôn mẫu xã hội. Điều này vừa hấp dẫn vừa đôi khi khiến người ta lo lắng về việc liệu có thể tin tưởng vào sự ổn định của bạn hay không. ${d?.strengths ? '<strong>Điểm nổi bật:</strong> ' + d.strengths : ''}</p>

<div class="insight-box">💡 <strong>Bí quyết kết nối:</strong> Hãy để người quan trọng thấy rằng tự do của bạn không có nghĩa là thiếu cam kết — mà là sự lựa chọn có ý thức của một người hiểu giá trị thực sự của những điều xứng đáng.</div>`,

    6: (name, d) => `<p class="nar"> Người khác cảm nhận <strong> ${name}</strong> như một <strong> nơi an toàn</strong> — một người mà ta có thể chia sẻ mà không sợ bị phán xét.Nhân cách số <strong> 6</strong> của bạn tỏa ra sự ấm áp, quan tâm chân thành và tinh thần trách nhiệm khiến người xung quanh cảm thấy được chăm sóc ngay cả khi bạn không nói gì đặc biệt.${d?.description ? d.description : ''}</p>

<p class="nar">Bạn là người mọi người chạy đến khi cần lời khuyên hay sự hỗ trợ — và thường bạn sẵn sàng giúp đỡ. Tuy nhiên, đôi khi người ta có thể vô tình lợi dụng lòng tốt của bạn nếu bạn không thiết lập ranh giới rõ ràng. ${d?.strengths ? '<strong>Điểm nổi bật:</strong> ' + d.strengths : ''}</p>

<div class="insight-box">💡 <strong>Bí quyết kết nối:</strong> Hãy học cách để người khác cũng có cơ hội chăm sóc lại bạn. Việc chấp nhận sự quan tâm không phải là yếu đuối — đó là cách bạn xây dựng những mối quan hệ thực sự bình đẳng và bền vững.</div>`,

    7: (name, d) => `<p class="nar"> Nhân cách số <strong> 7</strong> của <strong> ${name}</strong> tạo ra một ấn tượng đặc biệt: người ta cảm nhận bạn như một người <strong> sâu sắc, bí ẩn và đáng tôn trọng</strong>.Bạn không phải người dễ đọc — và điều đó khiến người ta tò mò muốn hiểu thêm.Khi bạn nói, mọi người lắng nghe — vì họ biết bạn không nói những điều vô nghĩa.${d?.description ? d.description : ''}</p>

<p class="nar">Tuy nhiên, ấn tượng ban đầu về bạn có thể là xa cách hoặc kiêu kỳ — chỉ vì bạn cần thời gian để quan sát trước khi mở lòng. Những ai kiên nhẫn đủ để chờ đợi thường được đền bù bằng một trong những tình bạn chân thực và sâu sắc nhất mà họ từng có. ${d?.strengths ? '<strong>Điểm nổi bật:</strong> ' + d.strengths : ''}</p>

<div class="insight-box">💡 <strong>Bí quyết kết nối:</strong> Hãy thỉnh thoảng cho người khác thấy cửa vào — một nụ cười ấm hơn, một câu hỏi mở hơn, một khoảnh khắc chia sẻ nhỏ. Đó không phải mất đi sự bí ẩn của bạn — mà là mời người đúng bước vào thế giới của bạn.</div>`,

    8: (name, d) => `<p class="nar"> Nhân cách số <strong> 8</strong> của <strong> ${name}</strong> toát ra một thứ năng lượng không thể phủ nhận: <strong>quyền lực, năng lực và khả năng làm cho mọi việc trở thành hiện thực</strong>. Người ta ngay lập tức có cảm giác đây là người có thể làm được những điều lớn.Sự tự tin và khả năng điều hành của bạn trở thành thứ mà người khác tìm kiếm khi cần ai đó dẫn dắt.${d?.description ? d.description : ''}</p>

<p class="nar">Bạn được tôn trọng cao — đôi khi có thể gần như khiến người ta sợ hãi. Ấn tượng về sự lạnh lùng hay tập trung vào hiệu quả có thể làm che khuất mặt ấm áp hơn của bạn mà không phải ai cũng có cơ hội nhìn thấy. ${d?.strengths ? '<strong>Điểm nổi bật:</strong> ' + d.strengths : ''}</p>

<div class="insight-box">💡 <strong>Bí quyết kết nối:</strong> Hãy học cách để người xung quanh thấy bạn không chỉ là "người thành công" — mà là một con người thực sự với khát vọng, nỗi sợ và tình yêu thương. Điều đó làm cho năng lượng số 8 của bạn trở nên khả năng chạm đến trái tim người khác.</div>`,

    9: (name, d) => `<p class="nar"> Nhân cách số <strong> 9</strong> của <strong> ${name}</strong> tạo ra một từ trường đặc biệt: người ta cảm nhận bạn như người có <strong> tâm hồn rộng lớn, đầy trắc ẩn và không quay lưng với ai</strong>.Bạn truyền cảm giác rằng bạn quan tâm — không phải vì bạn phải, mà vì đó là bản chất thực sự của bạn.${d?.description ? d.description : ''}</p>

<p class="nar">Trong mắt người khác, bạn là người của cộng đồng và tập thể — không bao giờ sống chỉ cho riêng mình. Điều này làm bạn trở thành biểu tượng của điều tốt đẹp nhất trong con người. Tuy nhiên, đôi khi người ta có thể lạm dụng sự rộng lượng của bạn. ${d?.strengths ? '<strong>Điểm nổi bật:</strong> ' + d.strengths : ''}</p>

<div class="insight-box">💡 <strong>Bí quyết kết nối:</strong> Hãy học cách nói "không" mà không cảm thấy có lỗi. Sự rộng lớn của trái tim bạn không đồng nghĩa với việc bạn phải tiếp nhận tất cả năng lượng mà người khác gửi đến. Hãy bảo vệ không gian năng lượng của mình.</div>`,

    11: (name, d) => `<p class="nar"> Nhân cách số <strong> 11</strong> của <strong> ${name}</strong> là một trong những nhân cách hiếm gặp nhất — người ta cảm nhận bạn như người có <strong> chiều sâu tâm linh và thứ gì đó vượt ra ngoài bề mặt thông thường</strong>.Có một ánh sáng đặc biệt trong mắt bạn, một sự hiểu biết không nói thành lời khiến người ta có cảm giác bạn nhìn thấy nhiều hơn những gì được hiển thị.${d?.description ? d.description : ''}</p>

<p class="nar">Người ta thường bị thu hút bởi bạn bằng cách không hẳn lý giải được — có thể là vì bạn khiến họ cảm thấy được nhìn thấy ở tầng sâu hơn thông thường. Tuy nhiên, cường độ của nhân cách số 11 đôi khi có thể làm người chưa quen bị choáng ngợp. ${d?.strengths ? '<strong>Điểm nổi bật:</strong> ' + d.strengths : ''}</p>

<div class="insight-box">💡 <strong>Bí quyết kết nối:</strong> Hãy tin vào trực giác của mình về người nào thực sự sẵn sàng tiếp nhận chiều sâu của bạn. Bạn không cần phải chia sẻ ánh sáng đó với tất cả mọi người — chỉ cần những người thực sự có thể trân trọng nó.</div>`,
  },

  // ════════════════════════════════════════════════════════════════════
  // CHỈ SỐ TRƯỞNG THÀNH — Per-number narrative (1-9)
  // NT.maturity[num](name, kbData)
  // ════════════════════════════════════════════════════════════════════
  maturity: {
    1: (name, d) => `<p class="nar"> Số Trưởng Thành <strong> 1</strong> của <strong> ${name}</strong> báo hiệu rằng cùng với tuổi tác, bạn sẽ trở nên ngày càng <strong> độc lập hơn, tự tin hơn và không ngại định nghĩa lại bản thân</strong> theo những tiêu chuẩn của riêng mình.Nếu trước đây bạn từng sống phần lớn cho kỳ vọng của người khác, từ khoảng 35 - 40 tuổi trở đi bạn sẽ cảm thấy một nhu cầu ngày càng mạnh mẽ để thoát ra khỏi những khuôn khổ đó và khẳng định con người thực sự của mình.${d?.description ? d.description : ''}</p>

<p class="nar">Hướng thành công trong giai đoạn trưởng thành: Lãnh đạo, khởi nghiệp, các dự án mà bạn hoàn toàn chịu trách nhiệm, bất cứ lĩnh vực nào cho phép bạn tạo ra thứ gì đó mang dấu ấn hoàn toàn của riêng mình. ${d?.success_direction ? d.success_direction : ''}</p>

<div class="insight-box">💡 <strong>Thông điệp trưởng thành:</strong> Giai đoạn đẹp nhất của cuộc đời bạn đang đến — không phải vì mọi thứ trở nên dễ dàng hơn, mà vì bạn cuối cùng có đủ sự khôn ngoan và can đảm để sống đúng với chính mình.</div>`,

    2: (name, d) => `<p class="nar"> Số Trưởng Thành <strong> 2</strong> của <strong> ${name}</strong> nói rằng nửa sau cuộc đời sẽ ngày càng hướng về <strong> sự kết nối sâu sắc, hợp tác ý nghĩa và vai trò người hòa giải</strong>.Những mối quan hệ chất lượng — không phải số lượng — trở thành ưu tiên hàng đầu.Bạn sẽ ít quan tâm hơn đến việc chứng minh bản thân và tập trung hơn vào việc xây dựng những kết nối thực sự có giá trị.${d?.description ? d.description : ''}</p>

<p class="nar">Hướng thành công trong giai đoạn trưởng thành: Tư vấn, hòa giải, tâm lý học, bất cứ công việc nào đòi hỏi sự nhạy cảm và khả năng kết nối con người với nhau. ${d?.success_direction ? d.success_direction : ''}</p>

<div class="insight-box">💡 <strong>Thông điệp trưởng thành:</strong> Sức mạnh thực sự của bạn không nằm ở việc đứng ở trung tâm sân khấu — mà ở khả năng tạo ra những nhịp cầu mà không ai khác có thể xây được.</div>`,

    3: (name, d) => `<p class="nar"> Số Trưởng Thành <strong> 3</strong> của <strong> ${name}</strong> hứa hẹn rằng những năm sau này sẽ là thời kỳ nở rộ của <strong> sự sáng tạo và biểu đạt bản thân</strong>.Nếu trước đây bạn chưa có cơ hội phát triển tài năng nghệ thuật hay khả năng giao tiếp của mình đến mức tối đa, đây là lúc cuộc đời trao cho bạn cơ hội đó.${d?.description ? d.description : ''}</p>

<p class="nar">Hướng thành công: Viết lách, giảng dạy, nghệ thuật, trình diễn, bất cứ lĩnh vực nào đòi hỏi sự sáng tạo và khả năng truyền đạt. ${d?.success_direction ? d.success_direction : ''}</p>

<div class="insight-box">💡 <strong>Thông điệp trưởng thành:</strong> Đừng bao giờ nói "đã quá muộn" để bắt đầu sáng tạo. Một số tác phẩm nghệ thuật đẹp nhất lịch sử được tạo ra trong nửa sau cuộc đời — khi người tạo ra nó có đủ trải nghiệm để đổ vào đó.</div>`,

    4: (name, d) => `<p class="nar"> Số Trưởng Thành <strong> 4</strong> của <strong> ${name}</strong> cho thấy nửa sau cuộc đời sẽ ngày càng hướng về <strong> sự bền vững, thực tiễn và để lại di sản cụ thể</strong>.Bạn sẽ ít quan tâm hơn đến những thứ hào nhoáng và tập trung nhiều hơn vào những gì thực sự có giá trị và bền vững.${d?.description ? d.description : ''}</p>

<p class="nar">Hướng thành công: Quản lý, tổ chức, xây dựng hệ thống, bất cứ công việc nào đòi hỏi sự kỷ luật và khả năng duy trì ổn định lâu dài. ${d?.success_direction ? d.success_direction : ''}</p>

<div class="insight-box">💡 <strong>Thông điệp trưởng thành:</strong> Bạn không cần phải tạo ra những thứ hoành tráng để để lại di sản. Đôi khi những công việc tỉ mỉ nhất, kiên nhẫn nhất lại là những thứ tồn tại lâu nhất.</div>`,

    5: (name, d) => `<p class="nar"> Số Trưởng Thành <strong> 5</strong> của <strong> ${name}</strong> hứa hẹn nửa sau cuộc đời sẽ là thời kỳ <strong> tự do và đa dạng trải nghiệm</strong>.Khi da đã đủ dày và trí tuệ đã đủ sâu, bạn sẽ có khả năng khám phá những chiều kích của cuộc sống mà trước đây trách nhiệm và nỗi sợ hãi đã ngăn cản bạn.${d?.description ? d.description : ''}</p>

<p class="nar">Hướng thành công: Du lịch, ngoại giao, công việc đòi hỏi khả năng thích nghi và linh hoạt cao, bất cứ lĩnh vực nào cho phép bạn tiếp tục học hỏi và khám phá. ${d?.success_direction ? d.success_direction : ''}</p>

<div class="insight-box">💡 <strong>Thông điệp trưởng thành:</strong> Đừng bao giờ nghĩ mình quá già để bắt đầu một cuộc phiêu lưu mới. Số Trưởng Thành 5 đảm bảo rằng những năm tháng tự do nhất của bạn vẫn còn ở phía trước.</div>`,

    6: (name, d) => `<p class="nar"> Số Trưởng Thành <strong> 6</strong> của <strong> ${name}</strong> cho thấy nửa sau cuộc đời sẽ ngày càng xoay quanh <strong> gia đình, cộng đồng và vai trò người chăm sóc</strong> ở cấp độ sâu sắc hơn.Khi bạn có đủ trải nghiệm cuộc đời, bạn sẽ trở thành nguồn hiểu biết và sự hỗ trợ quý giá cho những người xung quanh.${d?.description ? d.description : ''}</p>

<p class="nar">Hướng thành công: Chăm sóc sức khỏe, giáo dục, tư vấn gia đình, bất cứ lĩnh vực nào đặt con người lên hàng đầu. ${d?.success_direction ? d.success_direction : ''}</p>

<div class="insight-box">💡 <strong>Thông điệp trưởng thành:</strong> Khi bạn học cách yêu thương từ sự sung mãn hơn là từ nỗi sợ, tình yêu của bạn sẽ trở thành liều thuốc chữa lành cho cả những người bạn chưa bao giờ gặp.</div>`,

    7: (name, d) => `<p class="nar"> Số Trưởng Thành <strong> 7</strong> của <strong> ${name}</strong> báo hiệu rằng những năm tháng cuối cuộc đời sẽ có xu hướng <strong> triết học và tâm linh</strong>.Bạn sẽ ngày càng tham gia vào việc suy tư, nghiên cứu và tìm kiếm những câu trả lời cho những câu hỏi lớn về ý nghĩa cuộc đời.Người khác sẽ tìm đến bạn như một nguồn hiểu biết và sự khôn ngoan.${d?.description ? d.description : ''}</p>

<p class="nar">Hướng thành công: Nghiên cứu, viết lách về tâm linh và triết học, giảng dạy cho các nhóm nhỏ, bất cứ công việc nào đòi hỏi sự suy nghĩ sâu và chiều kích tâm linh. ${d?.success_direction ? d.success_direction : ''}</p>

<div class="insight-box">💡 <strong>Thông điệp trưởng thành:</strong> Sự khôn ngoan bạn tích lũy qua những năm tháng ấy không phải để giữ cho mình — mà để chia sẻ với những ai đang đứng ở ngưỡng cửa những câu hỏi mà bạn đã có câu trả lời.</div>`,

    8: (name, d) => `<p class="nar"> Số Trưởng Thành <strong> 8</strong> của <strong> ${name}</strong> cho thấy nửa sau cuộc đời sẽ là thời kỳ <strong> thu hoạch vật chất và ảnh hưởng lớn hơn</strong>.Những nỗ lực của cả cuộc đời sẽ bắt đầu sinh ra quả — tài chính, uy tín và cơ hội để tạo ra tác động thực sự theo quy mô lớn hơn.${d?.description ? d.description : ''}</p>

<p class="nar">Hướng thành công: Kinh doanh, quản lý cấp cao, bất cứ vị trí nào đòi hỏi tư duy chiến lược và khả năng quản lý nguồn lực lớn. ${d?.success_direction ? d.success_direction : ''}</p>

<div class="insight-box">💡 <strong>Thông điệp trưởng thành:</strong> Thành công lớn nhất của bạn không phải là những gì bạn tích lũy — mà là những gì bạn tạo ra cho người khác với những gì bạn đã tích lũy được.</div>`,

    9: (name, d) => `<p class="nar"> Số Trưởng Thành <strong> 9</strong> của <strong> ${name}</strong> hứa hẹn rằng nửa sau cuộc đời sẽ là thời kỳ của <strong> sự hoàn thành và tình yêu thương vô điều kiện</strong>.Bạn sẽ tìm thấy cách buông bỏ những gì không còn phục vụ mình và tập trung vào việc đóng góp cho thế giới theo cách sâu sắc và ý nghĩa nhất.${d?.description ? d.description : ''}</p>

<p class="nar">Hướng thành công: Từ thiện, nghệ thuật nhân đạo, bất cứ công việc nào phục vụ lợi ích lớn hơn của cộng đồng. ${d?.success_direction ? d.success_direction : ''}</p>

<div class="insight-box">💡 <strong>Thông điệp trưởng thành:</strong> Những người vĩ đại nhất không phải là những người giữ nhiều nhất — mà là những người biết cho đi đúng lúc và đúng cách. Sứ mệnh của Số Trưởng Thành 9 là học bài học đó ở tầng sâu nhất.</div>`,
  },

  // ════════════════════════════════════════════════════════════════════
  // CHỈ SỐ THÁI ĐỘ — Per-number narrative (1-9)
  // NT.attitude[num](name, kbData)
  // ════════════════════════════════════════════════════════════════════
  attitude: {
    1: (name, d) => `<p class="nar"> Trong những lần gặp gỡ đầu tiên, điều <strong> ${name}</strong> tự nhiên toát ra là: <strong>tôi biết tôi muốn gì và không ngại nói thẳng</strong>. Thái độ số <strong> 1</strong> của bạn không phải thứ bạn cố tình thể hiện — đó là bản năng tự nhiên.Người ta thấy bạn trước khi bạn kịp mở miệng.Một thứ năng lượng chủ động, quyết đoán và không mất thời gian vào những thứ không quan trọng.${d?.description ? d.description : ''}</p>

<p class="nar">Hành vi bản năng của bạn: Dẫn đầu cuộc trò chuyện, đưa ra ý kiến trực tiếp, không ngại đứng ra khi không ai dám. Điểm yếu bản năng: Đôi khi quá quyết đoán đến mức người khác cảm thấy không có chỗ để tham gia. ${d?.strengths ? d.strengths : ''}</p>

<div class="insight-box">💡 Hãy thỉnh thoảng đặt câu hỏi thay vì đưa ra câu trả lời — điều đó không làm giảm sức mạnh của bạn mà làm cho người khác cảm thấy được tôn trọng và lắng nghe hơn.</div>`,

    2: (name, d) => `<p class="nar"> Bản năng đầu tiên của <strong> ${name}</strong> khi tiếp xúc với người mới là: <strong>lắng nghe trước khi nói, cảm nhận trước khi phản ứng</strong>. Thái độ số <strong> 2</strong> của bạn khiến người ta cảm thấy an toàn và thoải mái ngay từ đầu — bạn không áp đặt, bạn không tranh giành sự chú ý, bạn tạo ra không gian.${d?.description ? d.description : ''}</p>

<p class="nar">Hành vi bản năng: Quan sát, đặt câu hỏi, tìm điểm chung. Điểm yếu bản năng: Đôi khi quá nhường nhịn đến mức không thể hiện rõ ý kiến của mình, hoặc bị coi là thiếu quyết đoán. ${d?.strengths ? d.strengths : ''}</p>

<div class="insight-box">💡 Sức mạnh thực sự của thái độ số 2 là khả năng làm cho người khác cảm thấy được nhìn thấy — đây là kỹ năng hiếm có và cực kỳ quý giá trong thế giới ngày nay.</div>`,

    3: (name, d) => `<p class="nar"> Thái độ số <strong> 3</strong> của <strong> ${name}</strong> là một thứ năng lượng dễ nhận biết: <strong>vui vẻ, biểu cảm và đầy màu sắc</strong>. Bạn không ngại thể hiện cảm xúc, không ngại đùa giỡn và không ngại là người làm cho bầu không khí nhẹ nhàng hơn.Trong mắt nhiều người, bạn là "linh hồn của bữa tiệc" — không phải vì bạn cố gắng mà vì đó là bản năng tự nhiên của bạn.${d?.description ? d.description : ''}</p>

<p class="nar">Hành vi bản năng: Kể chuyện, pha trò, tìm điểm tích cực trong mọi tình huống. Điểm yếu bản năng: Đôi khi bị coi là thiếu nghiêm túc hoặc không đáng tin cậy vì quá vui vẻ. ${d?.strengths ? d.strengths : ''}</p>

<div class="insight-box">💡 Đừng xem nhẹ khả năng mang lại niềm vui của mình. Trong một thế giới đầy áp lực, người có thể làm người khác cười là người mang lại giá trị thực sự.</div>`,


    4: (name, d) => `<p class="nar"> Khi gặp <strong> ${name}</strong> lần đầu, người ta cảm nhận ngay: <strong>đây là người đáng tin cậy và nghiêm túc</strong>. Thái độ số <strong> 4</strong> của bạn toát ra sự chuyên nghiệp, sự cẩn thận và một thứ ổn định không thể giả tạo.Bạn không cần phải nói nhiều để người ta hiểu rằng bạn đáng tôn trọng.${d?.description ? d.description : ''}</p>

<p class="nar">Hành vi bản năng: Lắng nghe kỹ trước khi nói, xem xét tình huống từ nhiều góc độ, không bị lôi cuốn bởi những điều hào nhoáng. Điểm yếu bản năng: Đôi khi quá nghiêm túc đến mức người ta cảm thấy khó gần. ${d?.strengths ? d.strengths : ''}</p>

<div class="insight-box">💡 Hãy thỉnh thoảng cho phép mình bước ra khỏi vai trò "người nghiêm túc" — sự tự phát và hài hước không làm giảm đi giá trị thực sự của bạn.</div>`,

    5: (name, d) => `<p class="nar"> Thái độ số <strong> 5</strong> của <strong> ${name}</strong> là thứ năng lượng không thể ghìm lại: <strong>phóng khoáng, tự do và liên tục chuyển động</strong>. Bạn truyền cảm giác rằng cuộc đời là một cuộc phiêu lưu cần được tận hưởng — không phải một bổn phận cần phải hoàn thành.Người ta bị thu hút bởi sức sống của bạn.${d?.description ? d.description : ''}</p>

<p class="nar">Hành vi bản năng: Đón nhận những điều mới, nói chuyện cởi mở, thoải mái với sự thay đổi. Điểm yếu bản năng: Đôi khi bị coi là thiếu ổn định hoặc không cam kết vì quá thích tự do. ${d?.strengths ? d.strengths : ''}</p>

<div class="insight-box">💡 Năng lượng tự do của bạn là món quà — hãy dùng nó để mở ra những cánh cửa mới cho bản thân và những người xung quanh, không phải để chạy trốn khỏi những thứ đáng được đầu tư.</div>`,

    6: (name, d) => `<p class="nar"> Bản năng đầu tiên của <strong> ${name}</strong> khi gặp người khác là: <strong>làm thế nào tôi có thể giúp được bạn?</strong> Thái độ số <strong> 6</strong> của bạn tạo ra ngay lập tức cảm giác ấm áp, quan tâm và sẵn sàng lắng nghe.Người ta cảm thấy được chăm sóc khi ở cạnh bạn — ngay cả khi bạn chưa làm gì cụ thể.${d?.description ? d.description : ''}</p>

<p class="nar">Hành vi bản năng: Chú ý đến nhu cầu của người khác, tìm cách làm cho mọi người thoải mái, tạo ra bầu không khí hài hòa. Điểm yếu bản năng: Đôi khi quá lo lắng cho người khác đến mức bỏ qua nhu cầu của chính mình. ${d?.strengths ? d.strengths : ''}</p>

<div class="insight-box">💡 Khi bạn chăm sóc mình với cùng sự ân cần mà bạn dành cho người khác, bạn có thể cho đi từ sự sung mãn thay vì từ sự cạn kiệt.</div>`,

    7: (name, d) => `<p class="nar"> Với <strong> ${name}</strong>, thái độ số <strong> 7</strong> tạo ra một vầng khí quyển đặc biệt: <strong>chiều sâu, bí ẩn và thông thái</strong>. Bạn không nói nhiều nhưng mỗi lời bạn nói đều có trọng lượng.Người ta linh cảm rằng bạn thấy nhiều hơn những gì bạn cho thấy — và điều đó khiến bạn vừa hấp dẫn vừa khó đọc.${d?.description ? d.description : ''}</p>

<p class="nar">Hành vi bản năng: Quan sát trước khi tham gia, đặt câu hỏi sâu, không thích nói chuyện bề mặt. Điểm yếu bản năng: Có thể bị coi là lạnh lùng hoặc không gần gũi vì ít biểu đạt cảm xúc ra bên ngoài. ${d?.strengths ? d.strengths : ''}</p>

<div class="insight-box">💡 Sự bí ẩn của bạn là sức hút tự nhiên — nhưng hãy thỉnh thoảng mở cửa để người khác được thực sự nhìn thấy bạn. Mối quan hệ sâu sắc đòi hỏi sự dễ bị tổn thương.</div>`,

    8: (name, d) => `<p class="nar"> Thái độ số <strong> 8</strong> của <strong> ${name}</strong> toát ra một thứ gì đó không thể bỏ qua: <strong>quyền lực, sự tự tin và ảnh hưởng tự nhiên</strong>. Bạn không cần phải nói rằng bạn quan trọng — người ta cảm nhận điều đó trước khi bạn làm bất cứ điều gì.Bạn bước vào phòng và không khí thay đổi.${d?.description ? d.description : ''}</p>

<p class="nar">Hành vi bản năng: Đánh giá tình huống chiến lược, tập trung vào kết quả, không bị phân tâm bởi cảm xúc không cần thiết. Điểm yếu bản năng: Có thể bị coi là quá tập trung vào vật chất hay quá cứng nhắc trong các mối quan hệ. ${d?.strengths ? d.strengths : ''}</p>

<div class="insight-box">💡 Quyền lực thực sự không làm người khác nhỏ lại — mà nâng người khác lên. Hãy học cách sử dụng ảnh hưởng của bạn để tạo ra điều tốt đẹp cho nhiều người hơn.</div>`,

    9: (name, d) => `<p class="nar"> Thái độ số <strong> 9</strong> của <strong> ${name}</strong> gợi lên cảm giác của một người đã đi nhiều, thấy nhiều và hiểu nhiều. <strong> Bạn toát ra sự bao dung, trí tuệ và tầm nhìn rộng lớn</strong>.Người ta bản năng cảm thấy bạn không phán xét họ — và điều đó khiến họ tin tưởng bạn ngay cả trước khi biết bạn.${d?.description ? d.description : ''}</p>

<p class="nar">Hành vi bản năng: Tìm kiếm ý nghĩa sâu xa trong mọi tình huống, đặt con người trước nguyên tắc, không bị mắc kẹt bởi tiểu tiết. Điểm yếu bản năng: Đôi khi quá lý tưởng hóa đến mức thất vọng khi thực tế không đáp ứng kỳ vọng. ${d?.strengths ? d.strengths : ''}</p>

<div class="insight-box">💡 Trí tuệ của bạn là món quà dành cho thế giới — nhưng hãy nhớ đặt chân xuống đất đủ để thực sự kết nối với những người đang ở bên cạnh bạn ngay lúc này.</div>`,
  },

  // ════════════════════════════════════════════════════════════════════
  // BÀI HỌC NGHIỆP (KARMIC LESSONS) — per missing number 1-9
  // Gọi: NT.karmicLesson[num](name)
  // ════════════════════════════════════════════════════════════════════
  karmicLesson: {

    1: (name) => `<div class="lesson-block">
      <strong>Bài học số 1 — Tự lập &amp; Ý chí cá nhân:</strong>
      <p class="nar">Số 1 vắng mặt trong biểu đồ tên của <strong>${name}</strong> cho thấy đây là bài học trọng tâm trong kiếp này: <strong>học cách đứng độc lập trên đôi chân của chính mình</strong>. Bạn có thể từng quen dựa vào quyết định của người khác, thiếu sự tự tin vào phán đoán bản thân, hoặc gặp khó khăn trong việc khởi đầu những điều mới. Sự thiếu vắng số 1 không có nghĩa bạn yếu — mà có nghĩa bạn đang được mời học cách làm chủ ý chí và năng lượng tiên phong bên trong.</p>
      <p class="nar"><strong>Cách thực hành:</strong> Tập đưa ra một quyết định nhỏ mỗi ngày mà không hỏi ý kiến ai. Đặt một mục tiêu cá nhân và tự mình theo đuổi đến cùng. Mỗi lần bạn tự khởi xướng và hoàn thành một điều gì đó, bạn đang trả nghiệp số 1.</p>
      <div class="insight-box">💡 <strong>Lời nhắn:</strong> Lãnh đạo bản thân là hình thức lãnh đạo cao nhất. Khi bạn thành thạo điều này, sức mạnh số 1 sẽ trở thành một trong những điểm sáng vĩ đại nhất của bạn.</div>
    </div> `,

    2: (name) => `<div class="lesson-block">
      <strong>Bài học số 2 — Hợp tác &amp; Quan tâm đến người khác:</strong>
      <p class="nar">Với <strong>${name}</strong>, số 2 thiếu trong biểu đồ tên chỉ ra rằng bài học của kiếp này xoay quanh <strong>nghệ thuật kết nối và lắng nghe chân thực</strong>. Bạn có thể có xu hướng ưu tiên cái nhìn của mình, khó chịu khi phải nhường bộ, hoặc gặp trở ngại trong việc xây dựng các mối quan hệ bền vững. Sự thiếu vắng này không nói về sự ích kỷ — mà về việc tâm hồn bạn đang học cách mở ra đủ để thực sự chứa đựng người khác.</p>
      <p class="nar"><strong>Cách thực hành:</strong> Mỗi ngày, hãy cho phép bản thân lắng nghe ai đó trọn vẹn mà không vội đưa ra ý kiến. Tìm kiếm sự đồng thuận thay vì sự đồng ý. Hãy để ý những khoảnh khắc bạn muốn tranh luận — và thay vào đó, hỏi thêm một câu hỏi.</p>
      <div class="insight-box">💡 <strong>Lời nhắn:</strong> Sức mạnh thực sự không nằm ở việc thắng mọi cuộc tranh luận — mà ở việc xây dựng được những mối quan hệ mà người ta muốn quay lại.</div>
    </div> `,

    3: (name) => `<div class="lesson-block">
      <strong>Bài học số 3 — Biểu đạt sáng tạo &amp; Niềm vui:</strong>
      <p class="nar">Số 3 thiếu trong biểu đồ của <strong>${name}</strong> cho thấy đây là kiếp bạn đang học cách <strong>tự do biểu đạt và tìm lại niềm vui</strong>. Bạn có thể từng tự kiểm duyệt bản thân, cảm thấy bối rối khi cần thể hiện cảm xúc, hoặc gặp khó khăn trong việc sáng tạo và giao tiếp nhẹ nhàng. Năng lượng số 3 không phải điểm mạnh tự nhiên của bạn — nhưng chính vì vậy, khi bạn học được nó, nó trở thành một sức mạnh đặc biệt.</p>
      <p class="nar"><strong>Cách thực hành:</strong> Thử viết nhật ký, vẽ, hát, hay bất kỳ hình thức sáng tạo nào — dù không hoàn hảo. Tập nói điều mình cảm thấy thay vì giữ im lặng. Cho phép bản thân vui vẻ mà không có lý do chính đáng.</p>
      <div class="insight-box">💡 <strong>Lời nhắn:</strong> Niềm vui không phải xa xỉ phẩm — đó là nhiên liệu của linh hồn. Khi bạn học cách biểu đạt chân thực, bạn sẽ thấy kỳ lạ hơn bao giờ hết: cả thế giới bắt đầu lắng nghe bạn.</div>
    </div> `,

    4: (name) => `<div class="lesson-block">
      <strong>Bài học số 4 — Kỷ luật, Tổ chức &amp; Nền tảng:</strong>
      <p class="nar">Sự vắng mặt của số 4 trong biểu đồ <strong>${name}</strong> đánh dấu đây là kiếp bạn đang học cách <strong>xây dựng nền tảng vững chắc</strong>. Bạn có thể gặp khó khăn với sự kiên nhẫn dài hạn, dễ bỏ cuộc giữa chừng, hoặc thiếu cấu trúc và kỷ luật trong cuộc sống hàng ngày. Sự hỗn loạn tài chính, sự vô tổ chức, hay xu hướng trốn tránh những công việc tẻ nhạt — tất cả đều có thể là biểu hiện của bài học số 4.</p>
      <p class="nar"><strong>Cách thực hành:</strong> Bắt đầu bằng một thói quen nhỏ và duy trì nó trong 30 ngày. Tạo danh sách công việc và hoàn thành từng mục. Xây dựng ngân sách đơn giản và tuân thủ. Những bước nhỏ kiên định này là cách bạn trả nghiệp số 4.</p>
      <div class="insight-box">💡 <strong>Lời nhắn:</strong> Kỷ luật không phải giam cầm — đó là cánh cửa dẫn đến tự do thực sự. Khi bạn xây được nền móng vững, mọi điều vĩ đại đều có thể được dựng lên trên đó.</div>
    </div> `,

    5: (name) => `<div class="lesson-block">
      <strong>Bài học số 5 — Tự do có trách nhiệm &amp; Thích nghi:</strong>
      <p class="nar">Số 5 thiếu trong biểu đồ của <strong>${name}</strong> cho thấy kiếp này bạn đang học cách <strong>đón nhận sự thay đổi và tự do có trách nhiệm</strong>. Bạn có thể xu hướng ổn định đến mức cứng nhắc, sợ thay đổi, hoặc ngược lại — thiếu kiểm soát và dễ buông thả. Bài học số 5 mời bạn tìm điểm cân bằng giữa phiêu lưu và trách nhiệm, giữa tự do và cam kết.</p>
      <p class="nar"><strong>Cách thực hành:</strong> Thử một điều hoàn toàn mới mỗi tháng — một món ăn, một con đường, một cuốn sách ngoài vùng an toàn. Học cách điều chỉnh kế hoạch khi hoàn cảnh thay đổi thay vì kháng cự. Tìm kiếm cơ hội trong những gián đoạn bất ngờ.</p>
      <div class="insight-box">💡 <strong>Lời nhắn:</strong> Cuộc đời không phải đường thẳng — và những khúc quanh đẹp nhất thường đến từ những thay đổi ta không ai ngờ tới.</div>
    </div> `,

    6: (name) => `<div class="lesson-block">
      <strong>Bài học số 6 — Tình yêu thương &amp; Trách nhiệm gia đình:</strong>
      <p class="nar">Với sự thiếu vắng số 6 trong biểu đồ <strong>${name}</strong>, bài học của kiếp này là <strong>học cách yêu thương vô điều kiện và gánh vác trách nhiệm với những người thân yêu</strong>. Bạn có thể tránh né trách nhiệm gia đình, khó đặt người khác lên trên bản thân, hoặc gặp nhiều mâu thuẫn trong các mối quan hệ thân thiết. Điều này không có nghĩa bạn ích kỷ — mà là tâm hồn bạn đang trong quá trình học cách yêu thương một cách trưởng thành và bền vững.</p>
      <p class="nar"><strong>Cách thực hành:</strong> Dành thời gian chủ động cho gia đình và những người thân thiết, không chỉ khi cần. Học cách phục vụ mà không kỳ vọng đổi lại. Tìm kiếm cân bằng giữa việc cho đi và tự chăm sóc bản thân.</p>
      <div class="insight-box">💡 <strong>Lời nhắn:</strong> Những mối quan hệ bền chặt nhất không được xây bằng đá — mà bằng sự hiện diện kiên nhẫn, ngày qua ngày.</div>
    </div> `,

    7: (name) => `<div class="lesson-block">
      <strong>Bài học số 7 — Chiều sâu nội tâm &amp; Tâm linh:</strong>
      <p class="nar">Số 7 thiếu trong biểu đồ của <strong>${name}</strong> đánh dấu bài học về <strong>sự tìm kiếm chiều sâu, tri thức và kết nối với tâm linh</strong>. Bạn có thể có xu hướng sống ở bề mặt, tránh những câu hỏi sâu về ý nghĩa cuộc sống, hoặc không dành thời gian cho sự tĩnh lặng và nội tâm. Trong xã hội ồn ào ngày nay, số 7 là bài học đặc biệt quý giá — bởi vì sự thiếu chiều sâu là nguyên nhân của rất nhiều vội vã và lo âu.</p>
      <p class="nar"><strong>Cách thực hành:</strong> Dành 10 phút mỗi ngày trong sự im lặng — thiền định, đọc sách triết học, hoặc đơn giản là ngồi yên quan sát hơi thở. Bắt đầu đặt những câu hỏi lớn: "Điều gì thực sự quan trọng với tôi?" và cho phép bản thân không cần câu trả lời ngay.</p>
      <div class="insight-box">💡 <strong>Lời nhắn:</strong> Sự thật không ở ngoài kia — nó đang chờ bạn trong những khoảnh khắc tĩnh lặng mà bạn vẫn chưa dám bước vào.</div>
    </div> `,

    8: (name) => `<div class="lesson-block">
      <strong>Bài học số 8 — Quyền lực &amp; Quản lý tài chính:</strong>
      <p class="nar">Sự vắng mặt của số 8 trong biểu đồ <strong>${name}</strong> chỉ ra bài học kiếp này là <strong>học cách quản lý tiền bạc, quyền lực và ảnh hưởng một cách đúng đắn</strong>. Bạn có thể gặp những thử thách lặp đi lặp lại về tài chính, tránh né vị trí lãnh đạo, hoặc có mối quan hệ phức tạp với tiền bạc và sự thịnh vượng. Điều này không có nghĩa bạn không xứng đáng có nhiều — mà bạn đang học cách giữ tiền và quyền lực mà không bị chúng làm chủ.</p>
      <p class="nar"><strong>Cách thực hành:</strong> Học một kỹ năng tài chính cơ bản: lập ngân sách, đầu tư nhỏ, hoặc đơn giản là theo dõi chi tiêu hàng tháng. Tập đứng ra chịu trách nhiệm trong những tình huống nhỏ. Mỗi quyết định kinh tế có chủ đích là một bước trả nghiệp số 8.</p>
      <div class="insight-box">💡 <strong>Lời nhắn:</strong> Tiền bạc là năng lượng — và như mọi năng lượng, điều quan trọng không phải là bạn có bao nhiêu, mà là bạn làm gì với nó.</div>
    </div> `,

    9: (name) => `<div class="lesson-block">
      <strong>Bài học số 9 — Lòng bao dung &amp; Buông bỏ:</strong>
      <p class="nar">Số 9 thiếu trong biểu đồ của <strong>${name}</strong> đánh dấu bài học sâu sắc nhất: <strong>học cách tha thứ, buông bỏ và phục vụ với tấm lòng rộng lớn</strong>. Bạn có thể giữ oán giận lâu hơn cần thiết, khó nhìn nhận bức tranh lớn của cuộc đời, hoặc tập trung quá nhiều vào bản thân mà quên đi cộng đồng xung quanh. Bài học số 9 đặc biệt vì nó không thể được học bằng lý trí — mà phải được sống qua.</p>
      <p class="nar"><strong>Cách thực hành:</strong> Thực hành tha thứ — bắt đầu với những tổn thương nhỏ nhất. Tham gia vào một hoạt động phục vụ cộng đồng, dù nhỏ. Mỗi khi bạn buông được một điều cũ không còn phù hợp, bạn đang sống bài học số 9 ở tầng sâu nhất.</p>
      <div class="insight-box">💡 <strong>Lời nhắn:</strong> Buông bỏ không phải là từ bỏ — đó là cách tạo ra không gian cho điều vĩ đại hơn có thể đến. Bàn tay giữ chặt không thể nhận được món quà mới.</div>
    </div> `,
  },

  // ════════════════════════════════════════════════════════════════════
  // VẬN SỐ NĂM (PERSONAL YEAR DEEP) — 6 domains × số 1-9
  // Gọi: NT.personalYearDeep(num, year, name)
  // ════════════════════════════════════════════════════════════════════
  personalYearDeep(num, year, name) {
    const n = num % 9 || 9;
    const content = {
      1: {
        title: 'Khởi đầu mới &amp; Tiên phong',
        subtitle: 'Năm của những bước đột phá và khởi đầu',
        intro: `Năm cá nhân số 1 mở ra một chu kỳ hoàn toàn mới cho <strong> ${name}</strong>.Đây là thời điểm vũ trụ trao cho bạn một trang giấy trắng — hãy viết lên đó những điều bạn thực sự muốn trở thành.Năng lượng năm nay mạnh mẽ, độc lập và tiên phong; mọi sự chần chừ đều có thể khiến bạn bỏ lỡ cơ hội đặc biệt.`,
        congviec: `Đây là năm lý tưởng để bắt đầu một dự án mới, thay đổi hướng đi sự nghiệp hoặc khởi động doanh nghiệp riêng.Năng lượng số 1 ủng hộ sự tự lập và dám nghĩ dám làm.Nếu bạn có ý tưởng đã nung nấu lâu nay, đây là thời điểm thực hiện nó.Hãy đặt mục tiêu cụ thể cho 12 tháng tới và bắt đầu từ bước nhỏ nhất ngay hôm nay.Tránh để người khác quyết định thay bạn trong những vấn đề quan trọng với sự nghiệp.`,
        quanhe: `Trong các mối quan hệ, bạn có thể cảm thấy cần không gian và sự độc lập hơn thường lệ.Đây là điều bình thường với năng lượng số 1. Tuy nhiên, hãy cẩn thận không để sự tự lập trở thành cô lập.Các mối quan hệ bắt đầu trong năm này thường mang năng lượng mạnh mẽ và định hình lại con người bạn.Nếu đang trong mối quan hệ, đây là năm để tái định nghĩa vai trò của bạn trong đó — theo hướng lành mạnh và trưởng thành hơn.`,
        suckhoe: `Sức khỏe năm nay có xu hướng tốt nếu bạn duy trì năng lượng một cách có kỷ luật.Hãy bắt đầu một thói quen tập luyện mới, điều chỉnh chế độ ăn uống hoặc cải thiện giấc ngủ.Tránh kiệt sức do làm việc quá sức — đây là nguy cơ phổ biến với năng lượng số 1. Hãy nhớ: cơ thể bạn là công cụ chính để bạn thực hiện những ý tưởng vĩ đại trong năm này.`,
        taichinhthanhoc: `Về tài chính, đây là năm tốt để bắt đầu những kế hoạch đầu tư mới và tạo ra nguồn thu nhập mới.Tuy nhiên, hãy hành động với sự chuẩn bị kỹ lưỡng thay vì bốc đồng.Đây cũng là năm để học một kỹ năng tài chính mới: đọc báo cáo, hiểu về đầu tư, hoặc tạo quỹ khẩn cấp cá nhân.`,
        banthan: `Đây là năm của sự tự khám phá sâu sắc.Hãy dành thời gian định nghĩa lại: bạn muốn trở thành ai trong chu kỳ 9 năm tiếp theo ? Những quyết định bạn đưa ra năm nay sẽ định hướng cả một giai đoạn dài của cuộc đời.Hãy can đảm đứng vào vị trí lãnh đạo — kể cả trong cuộc đời của chính mình.`,
        tonket: `Thành công của <strong> ${name}</strong> trong năm ${year} nằm ở khả năng bắt đầu và kiên trì với những điều thực sự quan trọng — không bị phân tâm bởi ý kiến người khác.Đây là năm để khẳng định bản sắc và hướng đi của mình.Hãy dũng cảm bước ra khỏi vùng an toàn.`
      },
      2: {
        title: 'Hợp tác &amp; Kiên nhẫn chiến lược',
        subtitle: 'Năm của các mối quan hệ và ngoại giao',
        intro: `Năm cá nhân số 2 của <strong> ${name}</strong> là năm của sự chậm lại có chủ đích.Sau sự khởi đầu mạnh mẽ của số 1, vũ trụ mời bạn vào chế độ "trồng cây" — kiên nhẫn chăm sóc những gì đã được gieo, xây dựng liên minh và phát triển qua sự hợp tác thay vì đối đầu.`,
        congviec: `Năm nay không phải thời điểm của những hành động táo bạo đơn độc.Thay vào đó, hãy tập trung vào việc củng cố đội nhóm, cải thiện quy trình làm việc và xây dựng các mối quan hệ đồng nghiệp bền vững.Năng lực ngoại giao và khả năng lắng nghe sẽ mang lại cho bạn những kết quả tốt hơn bất kỳ sự quyết đoán đơn phương nào.Hợp tác, liên minh, và chia sẻ tín dụng sẽ là chìa khóa thăng tiến của bạn năm nay.`,
        quanhe: `Các mối quan hệ đang trong giai đoạn phát triển sâu sắc.Đây là năm lý tưởng để củng cố, hàn gắn và làm giàu những kết nối quan trọng trong cuộc đời bạn.Hôn nhân và quan hệ đối tác được đặc biệt ưu tiên bởi năng lượng số 2. Nếu bạn đang trong một mối quan hệ, hãy đầu tư thời gian chất lượng.Nếu còn độc thân, bạn có thể gặp được người bạn đời tiềm năng.`,
        suckhoe: `Sức khỏe tâm lý quan trọng hơn thể chất năm nay.Hãy chú ý đến căng thẳng cảm xúc, đặc biệt khi mâu thuẫn trong các mối quan hệ.Thiền định, yoga, hoặc bất kỳ hoạt động nào giúp bạn cân bằng cảm xúc đều rất có giá trị.Tránh lãng mạn hóa nỗi đau — hãy giải quyết những tổn thương chưa được xử lý.`,
        taichinhthanhhoc: `Tài chính năm nay không phải thời điểm để liều lĩnh.Hãy duy trì sự ổn định, trả bớt nợ và xây dựng quỹ dự phòng.Các cơ hội đầu tư tốt nhất có thể đến từ quan hệ đối tác — nhưng hãy thẩm định kỹ càng trước khi cam kết.`,
        banthan: `Đây là năm để học nghệ thuật lắng nghe thực sự — không chỉ nghe lời nói mà nghe cả những điều không được nói.Hãy thực hành sự nhạy cảm có chủ đích và tìm cách đóng góp cho những người xung quanh mà không cần ghi nhận.`,
        tonket: `Năm ${year} của <strong> ${name}</strong> thành công khi bạn học được rằng sức mạnh không phải lúc nào cũng cần phô trương.Đôi khi, người có ảnh hưởng nhất trong phòng chính là người đang lắng nghe.`
      },
      3: {
        title: 'Sáng tạo &amp; Biểu đạt bản thân',
        subtitle: 'Năm của nghệ thuật, giao lưu và niềm vui',
        intro: `Năm cá nhân số 3 là mùa xuân trong hành trình 9 năm của <strong> ${name}</strong>.Đây là năm năng lượng dồi dào, cảm hứng sáng tạo và những kết nối xã hội phong phú.Hãy để bản thân tỏa sáng — đừng thu mình lại hay ẩn sau sự khiêm tốn không cần thiết.`,
        congviec: `Sáng tạo là tài sản lớn nhất của bạn năm nay.Nếu làm việc trong lĩnh vực nghệ thuật, truyền thông, giải trí hay bất kỳ ngành nào cần ý tưởng mới — đây là năm tỏa sáng của bạn.Đừng ngại đề xuất những ý tưởng táo bạo.Nếu không làm trong lĩnh vực sáng tạo, hãy tìm cách đưa sự sáng tạo vào công việc hiện tại của bạn — cách giải quyết vấn đề mới, cách giao tiếp với khách hàng, hay cách tổ chức quy trình.Đây cũng là năm tốt để mở rộng mạng lưới quan hệ nghề nghiệp.`,
        quanhe: `Cuộc sống xã hội của bạn sôi động hơn bao giờ hết.Bạn hấp dẫn người khác một cách tự nhiên và dễ tạo ra những kết nối mới.Hãy tận dụng điều này để xây dựng cả quan hệ cá nhân lẫn nghề nghiệp.Trong tình yêu, đây là năm vui vẻ và lãng mạn — nhưng hãy cẩn thận với xu hướng lý tưởng hóa người khác quá mức.`,
        suckhoe: `Sức khỏe nhìn chung tốt.Tuy nhiên, hãy chú ý không để guồng quay xã hội dẫn đến kiệt sức hay mất ngủ.Các hoạt động thể chất mang tính nghệ thuật — khiêu vũ, bơi lội, yoga — rất phù hợp với năng lượng số 3. Hãy chú ý đến hệ tiêu hóa và vùng cổ họng.`,
        taichinhthanhhoc: `Tài chính có thể tăng nhưng cũng dễ chi tiêu nhiều hơn thói quen.Hãy lập ngân sách cho những khoản "vui vẻ" để không bị mất kiểm soát.Tránh đầu tư vào những thứ hào nhoáng mà thiếu cơ sở.`,
        banthan: `Đây là năm để tìm lại tiếng cười và sự nhẹ nhàng.Hãy cho phép bản thân vui vẻ mà không cần lý do.Học một kỹ năng nghệ thuật mới, dù chỉ như sở thích.Hãy để trái tim bạn được bày tỏ — qua ngôn ngữ, nghệ thuật, âm nhạc, hay chỉ đơn giản là nói thật điều mình cảm thấy.`,
        tonket: `Thành công năm ${year} của <strong> ${name}</strong> nằm ở việc dám biểu đạt bản thân một cách chân thực và đầu tư vào những mối quan hệ mang đến niềm vui thực sự.`
      },
      4: {
        title: 'Làm việc chăm chỉ và tiến độ chậm, nhưng ổn định',
        subtitle: 'Năm xây nền tảng và kỷ luật',
        intro: `Năm cá nhân số 4 của <strong> ${name}</strong> nhấn mạnh đến việc bạn cần củng cố năng lượng và nguồn lực để chúng có thể hỗ trợ cho sự phát triển của bạn trong tương lai.Bạn có thể bận tâm hơn về tiền bạc, tài sản hoặc cơ thể của mình.`,
        congviec: `Xét về công việc, năm nay bạn phải làm việc một cách có tổ chức, có kế hoạch, thiết lập các mục tiêu một cách rõ ràng và quản lý tất cả các công việc của mình một cách quy củ.Bạn cũng cần luôn làm việc chăm chỉ và kiên trì.Nếu bạn lập kế hoạch tốt, thì khi các ý tưởng được thực hiện, nó sẽ cho phép bạn đạt được nhiều lợi ích trong việc củng cố sự ổn định cho tương lai.Những nỗ lực ngay từ bây giờ sẽ giúp ổn định cuộc sống của bạn trong những năm tới.Tóm lại, đây là một năm để bạn đặt nền móng vững chắc cho việc xây dựng công việc kinh doanh, thậm chí bao gồm cả tổ ấm và gia đình.Liên quan đến học tập thi cử, năm nay là năm bạn cần phải thực sự nỗ lực học tập chăm chỉ để có được những kết quả tốt.Nếu bạn có dự định tham gia vào các khóa học, đi du học hoặc học lên các cấp học cao hơn thì đây là năm phù hợp.`,
        quanhe: `Về các mối quan hệ, năm nay bạn cần củng cố lại chúng.Điều này sẽ giúp bạn hiểu rõ hơn về các mối quan hệ của mình và tạo nên sự gắn kết bền chặt.Đặc biệt, bạn sẽ có thể thu hút những người bạn đồng hành tuyệt vời trong năm nay nếu bạn cho họ thấy bạn là người đáng tin cậy, tận tâm với công việc, trung thành và có thái độ tích cực.Còn nếu bạn đang trong một mối quan hệ tình cảm, hãy mong đợi một lễ đính hôn hoặc kết hôn.Và nếu bạn đã kết hôn, hãy mong đợi có con.`,
        suckhoe: `Về sức khỏe, năm cá nhân số 4 đặc biệt có tác động đến cơ thể vật lý của bạn.Bạn sẽ nhận thấy sự thay đổi về trọng lượng hoặc vóc dáng cơ thể.Những thay đổi này sẽ tích cực nếu bạn chăm sóc và giữ gìn cơ thể của mình, và nó sẽ trở nên tồi tệ nếu như bạn lơ là.Năm cá nhân số 4 cũng có thể mang đến những căn bệnh được thiết kế để giữ cho bạn vững vàng.Bạn cũng có thể nhận thấy rằng mình cần quan tâm nhiều hơn đến việc chải chuốt cá nhân.Những yếu tố khác cũng cần chú ý là các vấn đề về thận hoặc bàng quang, căng thẳng tinh thần do suy nghĩ quá nhiều và trầm cảm.`,
        taichinhthanhhoc: `Trong khía cạnh tài chính, bạn cần phải xem xét tài sản, thỏa thuận, hợp đồng hoặc các vấn đề pháp lý một cách kiên nhẫn và trung thực, tránh những rủi ro quá mức.Đừng đặt niềm tin vào sự may rủi hoặc cho phép bản thân bất cẩn trong năm nay.Hãy chỉ tham gia vào những dự án khi bạn chắc chắn rằng chúng có tính chất hợp lý và sẽ thành công.Đây cũng là thời điểm bạn nên tiết kiệm và bắt đầu tích lũy một số tài sản.Việc mua bán hoặc thực hiện các giao dịch liên quan đến xây dựng nhà cửa để định cư sẽ phù hợp.Còn nếu bạn muốn đầu tư vào nhà đất để sinh lời thì đây chưa thực sự là thời điểm tốt.`,
        banthan: `Về bản thân, đây là năm bạn sẽ cần phải bình tĩnh, ổn định, sắp xếp, tuân theo một thói quen, chịu trách nhiệm và nhìn thấu đáo mọi thứ.Bạn cũng cần dành thời gian để suy nghĩ nghiêm túc về tương lai.Hãy cố gắng tránh những cuộc cãi vã và hiểu lầm không đáng có.Năm này sẽ cho phép bạn sửa chữa một số sai lầm quan trọng mà bạn đã mắc phải trong quá khứ.Từ khóa quan trọng trong năm nay là sự cân bằng.Hãy tự kỷ luật bản thân bởi vì nếu bạn làm việc chăm chỉ, kiên nhẫn, tỉnh táo và thực tế thì khi hết năm, bạn sẽ cảm thấy khá hài lòng về những điều bạn đã hoàn thành.`,
        tonket: `Tóm lại, thành công của <strong> ${name}</strong> vào năm ${year} là xây dựng được những bước đi bài bản và chắc chắn cho một mục tiêu lớn trong cuộc đời.Để đạt được điều đó, bạn cần bỏ đi sự quan tâm tới những điều nhỏ nhặt mà hãy luôn nghĩ về một tầm nhìn dài hạn, sau đó dành nhiều thời gian kiên trì để tìm cách thực hiện nó.Sự nỗ lực và chăm chỉ trong năm nay là không thể thiếu.`
      },
      5: {
        title: 'Cảm thấy lỏng lẻo và tự do, nhiều thay đổi',
        subtitle: 'Năm của thay đổi, phát triển và tự do',
        intro: `Đây sẽ là một năm cho sự thay đổi, phát triển, vui vẻ và tự do đối với <strong> ${name}</strong>.Năm nay có thể có một số sự thay đổi quan trọng về nơi ở, công việc, hướng đi hoặc hoàn cảnh gia đình.Bạn phải tận dụng lợi thế của sự thay đổi đó để giúp bạn tiến lên phía trước.Thách thức của bạn trong năm nay là tiếp tục tập trung vào các mục tiêu dài hạn, cố gắng sắp xếp các dự án quan trọng và xem xét chúng từ đầu đến cuối.`,
        congviec: `Về công việc, không giống như năm trước khi mọi thứ có xu hướng ổn định, năm nay dường như có phần lỏng lẻo và có sự thay đổi(có thể về môi trường làm việc, công việc của bạn, ...).Đôi khi bạn thấy mình mất hứng thú và trì hoãn các công việc hoặc dự án quan trọng mà bạn cần hoàn thành.Lời khuyên là bạn hãy lập kế hoạch cho một mục tiêu nhất định để thăng tiến đồng thời thực hiện các điều chỉnh và quyết định cần thiết để cải tiến.Ngoài ra, với năng lượng của năm số 5, bạn có thể theo đuổi sự nghiệp trong lĩnh vực nghệ thuật biểu diễn, hoặc bạn có thể trở thành một nhà văn viết về du lịch, đi khắp thế giới để tìm kiếm những điều thú vị và phiêu lưu mới.Về học tập thi cử, đây là năm bạn nên khám phá những khía cạnh, góc nhìn mới về bản thân mình.Nếu bạn có định hướng học lên các cấp học cao hơn hoặc đi du học, khám phá những nền văn hóa cũng như miền đất mới thì đây là năm phù hợp.`,
        quanhe: `Trong các mối quan hệ, để có được những điều tốt đẹp nhất trong năm nay, tất cả những thay đổi nên có lợi cho người khác cũng như cho chính bạn.Hãy cố gắng sống hài hòa với mọi người.Bạn có thể sẽ tham gia nhiều cuộc tụ họp xã hội hơn bình thường hoặc thậm chí tổ chức các bữa tiệc để xây dựng mối quan hệ tốt hơn.Nếu đã kết hôn, hãy mong đợi sự tập trung lại vào tình yêu với niềm đam mê.Nếu còn độc thân, hãy mong đợi được gặp những người mới, đầy đam mê và tuyệt vời.Nếu người yêu vẫn còn đồng hành với bạn cho đến tháng 4 năm sau, họ sẽ là người bạn đời tiềm năng.`,
        suckhoe: `Liên quan đến sức khỏe, đây là năm có thể có những thay đổi về sức khỏe của bạn.Dường như bạn dễ thích nghi và linh hoạt hơn, cũng như sẵn sàng thúc đẩy bản thân về mặt tinh thần và thể chất lên những tầm cao mới.Tuy nhiên, bạn cũng cần thận trọng vì năng lượng của năm số 5 có thể khiến bạn bị ốm do quá phấn khích cũng như do thay đổi đột ngột.`,
        taichinhthanhhoc: `Về tài chính, hãy xem xét những gì bạn ký và suy nghĩ kỹ về việc thực hiện các thỏa thuận dài hạn.Nếu bạn không suy nghĩ thấu đáo, bạn có thể phải thực hiện các thay đổi hoặc điều chỉnh sau đó.Nếu bạn muốn đầu tư vào đất đai hoặc thực hiện các giao dịch tài chính lớn, đây không phải là năm đem lại cho bạn thành công nổi trội.`,
        banthan: `Về bản thân, năm nay bạn cần cố gắng giữ tập trung và tránh bị phân tán năng lượng.Khi những cơ hội mới đến, bạn nên cố gắng đón nhận và có một tư duy cởi mở thì bạn sẽ có thể làm mới cuộc sống của mình, xóa bỏ những "lớp vỏ" cũ để có thêm tự do cá nhân và thăng tiến.Ngoài ra, năm nay bạn cũng nên thử một phong cách thời trang, thức ăn hoặc sở thích mới.`,
        tonket: `Tóm lại, năm cá nhân số 5 của <strong> ${name}</strong> trong năm ${year} đem đến những thay đổi và cuộc phiêu lưu mới, nơi bạn có thể sẽ có những trải nghiệm mới hoặc bước vào những mối quan hệ mới.Hãy đón nhận những thay đổi và học cách thích nghi để tìm thấy thành công và niềm vui.Những quyết định của bạn trong năm này sẽ mang lại thay đổi rất lớn, vậy nên hãy suy tính thật kỹ càng và đưa ra những lựa chọn lý trí.`
      },
      6: {
        title: 'Tình yêu, Gia đình, Tổ ấm và Trách nhiệm',
        subtitle: 'Năm của tình yêu, hôn nhân và sự hy sinh',
        intro: `Năm cá nhân số 6 được gọi là năm của tình yêu, hôn nhân và sự hy sinh đối với <strong> ${name}</strong>.Cuộc sống sẽ mang đến cho bạn những sự kiện và cơ hội mà nhấn mạnh đến trách nhiệm và công việc đối nội.Năm nay, trọng tâm của bạn là gia đình, hôn nhân, trách nhiệm, phục vụ và hy sinh.`,
        congviec: `Về công việc, hãy đảm bảo bạn là người tháo vát, quyết đoán và bảo vệ những điều bạn tin tưởng.Bạn có thể có cơ hội thăng tiến và cải thiện công việc kinh doanh hoặc tài chính của mình.Tuy nhiên, nhiều khi bạn có thể thấy mình cam kết quá mức trong công việc và không thể từ chối vì bạn không muốn làm tổn thương hoặc làm cấp trên thất vọng.Đây là lúc bạn cần thiết lập ranh giới để tránh bị lợi dụng.Hãy làm việc theo tốc độ của bạn, làm điều gì đó khiến bạn cảm thấy bình yên; bạn thậm chí có thể học một kỹ năng hoặc thử một thứ gì đó mang tính nghệ thuật, thiền định thường xuyên và nghe nhạc.Liên quan đến học tập thi cử, nếu bạn muốn học lên các hàm vị cao hơn thì năm nay là năm phù hợp cho quyết định đó.`,
        quanhe: `Trong các mối quan hệ, năm nay hãy dành thời gian quan tâm, chia sẻ với gia đình và bạn bè, hiểu và cân nhắc nhu cầu của mọi người, đồng thời cố gắng cống hiến và không ích kỷ nhất có thể.Tuy nhiên, đôi khi những người khác có thể sẽ áp đặt bạn hoặc cố gắng lợi dụng bản chất tốt của bạn.Nếu bạn chấp nhận những tình huống này như một đặc ân thay vì một gánh nặng, bạn sẽ gặt hái được trái ngọt ở cuối con đường.Nếu đã kết hôn, đây là năm bạn nên chia sẻ những khoảnh khắc quý giá với gia đình và bạn bè.Nếu bạn chưa lập gia đình, đây là một năm tốt để kết hôn hoặc tiếp tục hôn nhân.`,
        suckhoe: `Xét về sức khỏe, việc trốn tránh trách nhiệm hoặc không ưu tiên các mối quan hệ của bạn, đặc biệt là với gia đình và bạn bè, về lâu dài có thể ảnh hưởng đến sức khỏe tinh thần của bạn.Nếu trách nhiệm dường như quá nhiều đối với bạn hoặc bạn cảm thấy choáng ngợp, hãy thử một số thói quen sẽ giúp cân bằng chúng.Hãy giao một số trách nhiệm cho những người mà bạn biết họ có khả năng đảm đương.Đây là một năm để bạn học cách xả stress, có niềm tin vào bản thân và những gì bạn đang làm.`,
        taichinhthanhhoc: `Về tài chính, nếu bạn cân bằng được gia đình và công việc, trách nhiệm và bản thân thì đây là năm bạn có thể có những sự cải thiện về tài chính.Nếu bạn có điều kiện, đây là năm phù hợp cho bạn để sửa sang, trang trí lại nhà cửa hoặc mua nhà, đất để định cư, sinh sống.Nếu bạn muốn đầu tư vào tài chính, đất đai để sinh lời thì năm nay chưa thực sự tốt, vì bạn có thể bị cảm xúc và trách nhiệm khiến bạn không lý trí đưa ra quyết định đúng đắn nhất.`,
        banthan: `Về bản thân, để đạt được nhiều thành tựu nhất trong năm nay, bạn cần biết hài lòng, quan tâm đến vấn đề của người khác và thể hiện rất nhiều tình yêu thương.Bạn cũng nên cho đi một cách hào phóng hơn những gì bạn nhận được.Việc tạo ra một bầu không khí hòa hợp cũng sẽ rất quan trọng, vì tình yêu, tiền bạc, sức khỏe và tình bạn có thể dễ dàng vuột mất nếu bất hòa kéo dài.Hãy giữ những lý tưởng cao đẹp và cố gắng tránh bất kỳ cảm giác bực bội vì sự bất công.`,
        tonket: `Tóm lại thành công của <strong> ${name}</strong> vào năm ${year} là đạt được sự thấu hiểu về con người và xây dựng được niềm tin rất lớn của mọi người với bạn.Hãy dành thời gian thật vui vẻ bên gia đình và những người thân yêu của mình.Tuy nhiên hãy nhớ tiết chế tinh thần trách nhiệm của mình ở mức vừa đủ, không cho đi quá mức và cũng không giữ lại quá mức.`
      },
      7: {
        title: 'Chiều sâu nội tâm &amp; Tâm linh',
        subtitle: 'Năm của sự suy ngẫm, học hỏi và kết nối tâm linh',
        intro: `Năm cá nhân số 7 mời <strong> ${name}</strong> chậm lại và đi vào chiều sâu.Đây không phải năm của hành động ồ ạt — mà là năm của sự tích lũy tri thức, phát triển nội tâm và kết nối với trực giác.Những gì bạn học được trong năm này sẽ trở thành nền tảng cho sự thịnh vượng của năm số 8 tiếp theo.`,
        congviec: `Trong công việc, đây là năm thích hợp để chuyên môn hóa sâu hơn thay vì mở rộng.Nghiên cứu, phân tích và phát triển kỹ năng chuyên biệt sẽ mang lại kết quả tốt hơn là tìm kiếm những cơ hội mới ồ ạt.Nếu bạn cần đưa ra các quyết định lớn về sự nghiệp, hãy dành thời gian thẩm định kỹ thay vì hành động vội.Tránh những thay đổi lớn đột ngột về nghề nghiệp — đây không phải thời điểm tốt nhất.Thay vào đó, hãy chuẩn bị kỹ càng cho những bước đi lớn của năm tới.`,
        quanhe: `Năm số 7 có thể mang đến sự cô đơn nhất định — và điều đó không hẳn là xấu.Bạn đang học cách tận hưởng sự hiện diện của chính mình.Tuy nhiên, hãy thận trọng không để sự rút lui trở thành sự cô lập.Trong các mối quan hệ thân thiết, đây là năm cần sự thành thật và giao tiếp sâu sắc.Bề ngoài và những cuộc trò chuyện nông cạn sẽ không thỏa mãn bạn.Nếu đang trong mối quan hệ không còn phù hợp, bạn sẽ cảm nhận điều đó rõ ràng hơn bao giờ hết.`,
        suckhoe: `Đây là năm đặc biệt thích hợp để xây dựng thói quen thiền định, yoga và các thực hành tâm thân.Giấc ngủ chất lượng và thời gian yên tĩnh là điều kiện thiết yếu cho sức khỏe của bạn năm nay.Hãy chú ý đến hệ thần kinh và sức khỏe tâm lý — đây là những điểm dễ bị ảnh hưởng nhất trong năm số 7.`,
        taichinhthanhhoc: `Tài chính năm nay có thể không tăng đột biến — vũ trụ đang định hướng bạn vào chiều sâu hơn là chiều rộng.Hãy quản lý những gì đang có một cách khéo léo.Đây là năm tốt để học về đầu tư, tài chính cá nhân và lập kế hoạch tài chính dài hạn — nhưng chưa phải năm để hành động lớn.`,
        banthan: `Hãy đọc nhiều hơn, thiền nhiều hơn, ngồi một mình nhiều hơn.Đây không phải sự thất bại về mặt xã hội — đây là sự đầu tư vào chiều sâu của tâm hồn.Hãy đặt những câu hỏi lớn: "Ý nghĩa thực sự của tôi là gì? Điều gì làm tôi cảm thấy sống thật nhất?"`,
        tonket: `Năm ${year} của <strong> ${name}</strong> thành công khi bạn thoát ra khỏi vòng xoáy bên ngoài và dũng cảm bước vào sự im lặng của chính mình.Những gì bạn tìm thấy ở đó sẽ thay đổi bạn theo cách không có môi trường bên ngoài nào có thể làm được.`
      },
      8: {
        title: 'Quyền lực &amp; Thịnh vượng',
        subtitle: 'Năm của thu hoạch, sự nghiệp và tài chính',
        intro: `Năm cá nhân số 8 là năm thu hoạch và quyền lực của <strong> ${name}</strong>.Đây là đỉnh cao của chu kỳ 9 năm về mặt thành tựu vật chất và ảnh hưởng xã hội.Những hạt giống bạn đã gieo trong các năm trước đang sẵn sàng cho mùa gặt — vấn đề chỉ là bạn có đủ can đảm để đến đồng ruộng không.`,
        congviec: `Đây là năm lý tưởng để thăng tiến, đàm phán, ký kết hợp đồng lớn, mở rộng quy mô kinh doanh hay yêu cầu mức lương xứng đáng với giá trị của bạn.Năng lượng số 8 ủng hộ sự quyết đoán và tư duy chiến lược.Hãy tự tin bước vào vị trí lãnh đạo — đây chính là thời điểm của bạn.Nếu bạn muốn khởi nghiệp hoặc đầu tư, năm số 8 là một trong những thời điểm thuận lợi nhất trong chu kỳ của bạn.`,
        quanhe: `Các mối quan hệ năm nay có thể chịu áp lực từ công việc và tham vọng của bạn.Hãy có ý thức dành thời gian cho những người quan trọng, đừng để thành công làm xói mòn sự kết nối.Đây cũng là năm để xem xét các mối quan hệ có đang mang đến cho nhau sự phát triển hay không.`,
        suckhoe: `Năng lượng cao, tham vọng lớn — nhưng cũng cần chú ý không kiệt sức.Hãy đảm bảo rằng áp lực công việc không dẫn đến căng thẳng mãn tính.Tập thể dục thường xuyên, ngủ đủ giấc và đặt ra ranh giới giữa công việc và nghỉ ngơi là rất quan trọng.`,
        taichinhthanhhoc: `Đây là năm tốt nhất để đầu tư, mua bất động sản, thực hiện các giao dịch tài chính lớn và tích lũy tài sản.Hãy hành động với sự chuẩn bị kỹ lưỡng — đừng lãng phí cơ hội quý hiếm này bằng sự chần chừ hay thiếu chuẩn bị.`,
        banthan: `Hãy học cách sử dụng quyền lực và ảnh hưởng của mình một cách có trách nhiệm.Sự thịnh vượng thực sự không chỉ là về tài sản — mà là về tác động tích cực bạn tạo ra cho những người xung quanh.`,
        tonket: `Năm ${year} của <strong> ${name}</strong> là một trong những năm quan trọng nhất trong chu kỳ 9 năm của bạn.Đừng để nó trôi qua trong sự rụt rè.Hãy đứng thẳng, tin vào giá trị của mình và bước ra ánh sáng mà năm số 8 đang chiếu cho bạn.`
      },
      9: {
        title: 'Hoàn thành &amp; Buông bỏ',
        subtitle: 'Năm của sự kết thúc, nhân đạo và giải phóng',
        intro: `Năm cá nhân số 9 đánh dấu sự kết thúc của một chu kỳ 9 năm trong cuộc đời <strong> ${name}</strong>.Đây là năm của sự tổng kết, nhìn lại, và quan trọng nhất là buông bỏ những gì không còn phù hợp để chuẩn bị cho một khởi đầu hoàn toàn mới.Đây cũng là năm của lòng nhân ái và phục vụ.`,
        congviec: `Trong công việc, hãy hoàn thành những dự án còn dang dở và đừng bắt đầu những cam kết lớn mới.Đây là năm để tổng kết, đánh giá và học từ những kinh nghiệm đã qua.Nếu bạn đang cân nhắc chuyển hướng sự nghiệp, đây là năm để chuẩn bị tinh thần và lên kế hoạch — nhưng thực hiện vào năm số 1 tiếp theo.Đây là thời điểm tốt để đóng góp cho cộng đồng, từ thiện và phục vụ — những hành động này sẽ "trả ơn" vũ trụ và chuẩn bị cho chu kỳ mới.`,
        quanhe: `Các mối quan hệ không còn phù hợp sẽ kết thúc tự nhiên trong năm số 9. Đây không phải mất mát — đây là sự giải phóng.Hãy để những gì cần ra đi được ra đi với lòng biết ơn.Các mối quan hệ bền vững sẽ được thử nghiệm và trở nên vững chắc hơn.Đây cũng là năm tốt để tha thứ — cho người khác và cho chính mình.`,
        suckhoe: `Đây là năm để chú ý đến sức khỏe cảm xúc.Nếu có những tổn thương cũ chưa được xử lý, chúng có thể nổi lên trong năm số 9 để được giải quyết.Hãy tìm kiếm sự hỗ trợ nếu cần — một người tư vấn, một người bạn đáng tin, hay một thực hành tâm linh.Sức khỏe thể chất đặc biệt liên quan đến chất lượng giấc ngủ và hệ miễn dịch.`,
        taichinhthanhhoc: `Hãy trả bớt nợ, thanh lý những khoản đầu tư không còn hiệu quả và đơn giản hóa tài chính.Đây không phải năm để bắt đầu những dự án tài chính lớn mới — mà là năm để thu dọn và chuẩn bị cho giai đoạn mới.`,
        banthan: `Thực hành lòng biết ơn mỗi ngày.Nhìn lại 9 năm vừa qua và nhận ra những gì bạn đã học được, những cách bạn đã trưởng thành.Đây là năm để phục vụ với trái tim rộng mở — không kỳ vọng, không điều kiện.`,
        tonket: `Năm ${year} của <strong> ${name}</strong> thành công khi bạn học được nghệ thuật buông bỏ — không phải từ bỏ, mà là tạo không gian.Mỗi thứ bạn buông ra trong năm này là một đôi tay trống để đón nhận điều kỳ diệu đang chờ ở phía trước.`
      }
    };

    const c = content[n] || content[9];
    return `
  <div class="year-detail-block">
      <div class="year-detail-headline">
        <span class="year-detail-label">VẬN SỐ NĂM ${year} CỦA BẠN LÀ: ${n}</span>
      </div>
      <div class="year-detail-subtitle"><em>${c.title}</em></div>
      <p class="nar">${c.intro}</p>
      <div class="year-domain-block">
        <div class="domain-title">💼 Công việc &amp; Sự nghiệp</div>
        <p class="nar">${c.congviec}</p>
      </div>
      <div class="year-domain-block">
        <div class="domain-title">💗 Các mối quan hệ &amp; Tình yêu</div>
        <p class="nar">${c.quanhe}</p>
      </div>
      <div class="year-domain-block">
        <div class="domain-title">🌿 Sức khỏe</div>
        <p class="nar">${c.suckhoe}</p>
      </div>
      <div class="year-domain-block">
        <div class="domain-title">💰 Tài chính &amp; Học tập</div>
        <p class="nar">${c.taichinhthanhhoc || c.taichinhhoatap || 'Hãy xem xét tài chính của mình một cách cẩn thận trong năm này.'}</p>
      </div>
      <div class="year-domain-block">
        <div class="domain-title">🌟 Về bản thân</div>
        <p class="nar">${c.banthan}</p>
      </div>
      <div class="insight-box" style="margin-top:1rem;">📌 <strong>Tóm lại:</strong> ${c.tonket}</div>
    </div> `;
  },

  // Internal: return raw content object for a personal year number (used by buildPersonalYearFullBlock)
  _yearContent(num, name) {
    const n = num % 9 || 9;
    const YEAR_DATA = {
      1: {
        congviec: `Đây là năm lý tưởng để bắt đầu một dự án mới, thay đổi hướng đi sự nghiệp hoặc khởi động doanh nghiệp riêng.Năng lượng số 1 ủng hộ sự tự lập và dám nghĩ dám làm.Nếu bạn có ý tưởng đã nung nấu lâu nay, đây là thời điểm thực hiện nó.Hãy đặt mục tiêu cụ thể cho 12 tháng tới và bắt đầu từ bước nhỏ nhất ngay hôm nay.Tránh để người khác quyết định thay bạn trong những vấn đề quan trọng với sự nghiệp.\n\nTuy nhiên, hãy cẩn thận không để tính độc lập trở thành sự cứng đầu.Hợp tác vẫn cần thiết nhưng hãy đảm bảo bạn đang chọn người cộng tác đúng đắn — người phù hợp với tầm nhìn của bạn.`,
        quanhe: `Trong các mối quan hệ, bạn có thể cảm thấy cần không gian và sự độc lập hơn thường lệ.Đây là điều bình thường với năng lượng số 1. Tuy nhiên, hãy cẩn thận không để sự tự lập trở thành cô lập.Các mối quan hệ bắt đầu trong năm này thường mang năng lượng mạnh mẽ và định hình lại con người bạn.\n\nNếu đang trong mối quan hệ, đây là năm để tái định nghĩa vai trò của bạn trong đó — theo hướng lành mạnh và trưởng thành hơn.Hãy nói ra những điều bạn thực sự muốn thay vì chờ đợi người kia tự hiểu.`,
        taichinhthanhoc: `Về tài chính, đây là năm tốt để bắt đầu những kế hoạch đầu tư mới và tạo ra nguồn thu nhập mới.Tuy nhiên, hãy hành động với sự chuẩn bị kỹ lưỡng thay vì bốc đồng.Đây cũng là năm để học một kỹ năng tài chính mới: đọc báo cáo, hiểu về đầu tư, hoặc tạo quỹ khẩn cấp cá nhân.\n\nHãy xây dựng ngân sách rõ ràng và bám sát kế hoạch chi tiêu.Các khoản tiết kiệm bắt đầu trong năm này sẽ có hiệu quả kép trong vài năm tới.`,
        banthan: `Đây là năm của sự tự khám phá sâu sắc.Hãy dành thời gian định nghĩa lại: bạn muốn trở thành ai trong chu kỳ 9 năm tiếp theo ? Những quyết định bạn đưa ra năm nay sẽ định hướng cả một giai đoạn dài của cuộc đời.\n\nHãy mở rộng mạng lưới quan hệ một cách có chủ đích.Tìm kiếm những người có thể truyền cảm hứng và kết nối bạn với cơ hội mới.Đồng thời, hãy sẵn sàng buông bỏ những mối quan hệ không còn phù hợp với con người bạn đang trở thành.`,
        suckhoe: `Sức khỏe năm nay có xu hướng tốt nếu bạn duy trì năng lượng một cách có kỷ luật.Hãy bắt đầu một thói quen tập luyện mới, điều chỉnh chế độ ăn uống hoặc cải thiện giấc ngủ.Tránh kiệt sức do làm việc quá sức — đây là nguy cơ phổ biến với năng lượng số 1.\n\nDành thời gian cho bản thân học điều mới là đầu tư thông minh nhất trong năm 1. Bạn có tinh thần học hỏi rất cao — hãy tận dụng điều này để nâng cao năng lực.`,
        tonket: `Thành công của <strong>${name}</strong> trong năm này không được đo bằng những gì người khác nhìn thấy — mà bằng mức độ bạn đã dám là chính mình. Năm số 1 trao cho bạn một đặc ân hiếm có: trang giấy trắng. Được viết lại, được chọn lại, được bắt đầu không phải từ con số không — mà từ tất cả những gì bạn đã tích lũy.

Hãy nhớ rằng: mọi bước đi lớn đều bắt đầu từ một quyết định nhỏ được đưa ra trong im lặng. <strong>${name}</strong> đang ở ngay tại giao lộ đó. Những gì bạn chọn trong năm này — dù lớn hay nhỏ — đều mang năng lượng của người tiênen phong. Không phải ai cũng có cơ hội này. Hãy trân trọng nó.

Năm số 1 sẽ đi qua — nhưng những cánh cửa bạn mở ra trong năm này sẽ ở lại rất lâu. Hãy dũng cảm bước qua chúng.`,
      },
      2: {
        congviec: `Năm 2 là năm của sự hợp tác và xây dựng mối quan hệ nghề nghiệp.Đây không phải thời điểm tốt để hành động đơn độc — hãy tìm kiếm đối tác, cộng sự và người cố vấn.Những kết nối bạn xây dựng năm nay sẽ mang lại quả ngọt trong tương lai.\n\nHãy kiên nhẫn với tiến độ công việc — số 2 không ủng hộ sự vội vàng.Tập trung vào việc cải thiện kỹ năng giao tiếp và lắng nghe.Đây là năm để làm nền tảng, không phải để thu hoạch lớn.`,
        quanhe: `Đây là năm lý tưởng cho các mối quan hệ — tình yêu, gia đình và bạn bè đều cần được chú tâm.Năng lượng số 2 tăng cường sự nhạy cảm cảm xúc, giúp bạn hiểu người khác sâu sắc hơn.\n\nNếu đang tìm kiếm tình yêu, bạn có thể gặp người quan trọng trong năm này.Nếu đang trong mối quan hệ, đây là thời điểm để củng cố và làm sâu sắc thêm sự gắn kết.Hãy thể hiện sự quan tâm qua hành động nhỏ hàng ngày.`,
        taichinhthanhoc: `Tài chính năm 2 thường ổn định nhưng không có đột phá lớn.Đây là thời điểm tốt để tiết kiệm và tránh các khoản đầu tư rủi ro cao.Hãy tập trung vào việc thanh toán các khoản nợ hiện tại và xây dựng quỹ dự phòng.\n\nCác quyết định tài chính quan trọng nên được thảo luận kỹ với người có chuyên môn hoặc người bạn tin tưởng thay vì quyết định một mình.`,
        banthan: `Năm 2 là năm để xây dựng và duy trì các mối quan hệ xã hội có chiều sâu.Thay vì mở rộng số lượng, hãy tập trung vào chất lượng.Dành thời gian cho những người thực sự quan trọng với bạn.\n\nHãy tham gia các nhóm cộng đồng hoặc câu lạc bộ phù hợp với sở thích.Sự kết nối xã hội sẽ mang lại cho bạn cảm giác an toàn và được hỗ trợ trong suốt năm này.`,
        suckhoe: `Sức khỏe cần được chú ý đặc biệt về mặt cảm xúc và tinh thần.Năng lượng số 2 làm tăng nhạy cảm — hãy học cách bảo vệ năng lượng bản thân trước các tình huống căng thẳng.\n\nNăm 2 là thời điểm tốt để học các kỹ năng tự nhận thức và quản lý cảm xúc.Thiền định, yoga hoặc ghi nhật ký có thể giúp bạn duy trì cân bằng tâm lý.`,
        tonket: `Năm số 2 dạy <strong>${name}</strong> một bài học mà xã hội hiện đại thường quên mất: không phải mọi thứ đều cần được đẩy nhanh. Đôi khi, đi chậm là cách đi xa nhất. Hãy để những kết nối bạn gây dựng trong năm này được tưới tắm bằng sự kiên nhẫn và chân thành.

Thành công thực sự của năm 2 không nằm ở những gì bạn đạt được một mình — mà ở những mối quan hệ được củng cố, những hạt giống hợp tác được gieo xuống, và những cuộc đối thoại chân thực được mở ra. Nốu đo được những điều này, bạn sẽ thấy năm này giàu có hơn bất kỳ năm nào.

<strong>${name}</strong>, hãy kết thúc năm 2 với câu hỏi: <em>"Ai trong cuộc đời mình đang cần mình hơn mình nghĩ?"</em> Rồi hãy thực hiện đớu nhỏ nhất vào ngày mai.`,
      },
      3: {
        congviec: `Năm 3 là năm của sự sáng tạo và biểu đạt trong sự nghiệp.Hãy để bản thân được tỏa sáng — trình bày ý tưởng, đề xuất dự án mới và không ngại thể hiện tài năng.Đây là thời điểm lý tưởng cho các ngành nghề liên quan đến nghệ thuật, truyền thông và giao tiếp.\n\nNăm 3 ủng hộ sự mở rộng và phát triển — hãy nắm bắt cơ hội mới, tham gia sự kiện ngành và kết nối với những người có thể mở ra cánh cửa mới cho sự nghiệp.`,
        quanhe: `Sức hút xã hội của bạn đạt đỉnh cao trong năm 3. Đây là năm lý tưởng để gặp gỡ người mới, mở rộng vòng tròn quan hệ và tạo ra những kỷ niệm đáng nhớ.\n\nTrong tình yêu, năng lượng lãng mạn và tự nhiên của năm 3 tạo nên những khoảnh khắc đặc biệt.Hãy thể hiện tình cảm một cách sáng tạo và đừng ngại những cử chỉ lãng mạn bất ngờ.`,
        taichinhthanhoc: `Tài chính có xu hướng tích cực trong năm 3 nhưng cần kiểm soát chi tiêu — năng lượng phong phú của năm này dễ dẫn đến việc tiêu xài hoang phí.Hãy dành một phần thu nhập cho những trải nghiệm có giá trị thay vì chỉ vật dụng.\n\nCác cơ hội thu nhập bổ sung có thể đến qua các dự án sáng tạo, viết lách hoặc các hoạt động nghệ thuật.Hãy mở mắt với những nguồn thu nhập không truyền thống.`,
        banthan: `Đây là năm bạn tỏa sáng nhất trong các tương tác xã hội.Năng lượng vui vẻ, lạc quan và hài hước tự nhiên thu hút mọi người đến với bạn.\n\nHãy tham gia các sự kiện xã hội, câu lạc bộ và nhóm cộng đồng.Chia sẻ tài năng và niềm vui với người khác — đây là cách bạn tạo ra tác động lớn nhất trong năm này.`,
        suckhoe: `Sức khỏe nhìn chung tốt trong năm 3 với nhiều năng lượng và niềm vui.Hãy tận dụng sức sống này cho các hoạt động thể chất vui vẻ như nhảy, bơi lội hoặc thể thao nhóm.\n\nNăm 3 là thời điểm tốt để học bất cứ điều gì khơi dậy niềm vui và sự tò mò.Các khóa học ngắn hạn, hội thảo hoặc chương trình đào tạo mới sẽ mang lại nhiều điều thú vị.`,
        tonket: `Năm số 3 nhắc nhở <strong>${name}</strong> rằng — bạn có một món quà mà nhiều người khác trân trọng khi thấy bạn dũng cảm đem ra: đó là khả năng mang lại ánh sáng. Hãy để mình được vui, được sáng tạo, và được nói thật cảm xúc của mình theo cách chân thực nhất.

Đây là năm để trả lời câu hỏi: <em>"Nếu không có ai phán xét, mình sẽ làm gì?"</em> Rồi hãy thực sự làm điều đó. Những gì <strong>${name}</strong> tạo ra, biểu đạt và chia sẻ trong năm 3 đều có tiềm năng lan toả xa hơn bạn tưởng.

Hãy kết năm 3 không phải bằng câu hỏi <em>"Mình đã đạt được gì?"</em> mà bằng câu hỏi <em>"Mình đã cho đi được gì?"</em> Đó mới là thước đo đích thực của một năm số 3 thành công.`,
      },
      4: {
        congviec: `Năm 4 là năm của sự xây dựng nền tảng vững chắc trong sự nghiệp.Đây không phải lúc để mơ mộng mà là lúc để lên kế hoạch cụ thể và thực thi từng bước.Mọi nỗ lực kiên trì trong năm này sẽ tạo ra kết quả bền vững.\n\nHãy tập trung vào việc hoàn thiện kỹ năng chuyên môn, cải thiện quy trình làm việc và xây dựng uy tín nghề nghiệp.Đây là năm để trở thành chuyên gia đáng tin cậy trong lĩnh vực của mình.`,
        quanhe: `Trong tình yêu và các mối quan hệ, năm 4 đòi hỏi sự ổn định và cam kết thực sự.Đây là thời điểm tốt để định nghĩa rõ ràng về tương lai của mối quan hệ — nếu đang tìm kiếm, hãy tập trung vào sự tương thích lâu dài thay vì cảm xúc nhất thời.\n\nNếu đang trong mối quan hệ, hãy xây dựng những thói quen tốt cùng nhau — từ quản lý tài chính đến các kế hoạch chung dài hạn.`,
        taichinhthanhoc: `Đây là năm lý tưởng để xây dựng nền tảng tài chính vững chắc.Hãy lập ngân sách chi tiết, tạo quỹ khẩn cấp và bắt đầu các khoản đầu tư dài hạn an toàn.\n\nTránh các quyết định tài chính rủi ro hoặc vay mượn không cần thiết.Kỷ luật tài chính trong năm 4 sẽ mang lại an toàn lâu dài cho bạn.`,
        banthan: `Năm 4 có thể cảm thấy ít sôi nổi về mặt xã hội hơn các năm khác, nhưng đây là thời điểm để xây dựng những mối quan hệ có chiều sâu thực sự.\n\nHãy tập trung vào những người thực sự hiểu và hỗ trợ bạn.Chất lượng quan trọng hơn số lượng trong năm này.`,
        suckhoe: `Sức khỏe cần được chú trọng thông qua thói quen ổn định và kỷ luật.Đây là năm tốt để thiết lập một chế độ tập luyện đều đặn, ăn uống lành mạnh và ngủ đủ giấc.\n\nNăm 4 là năm để học những kỹ năng thực tiễn và kỹ thuật — các khóa học cấp chứng chỉ hoặc đào tạo chuyên sâu sẽ rất có giá trị.`,
        tonket: `<strong>${name}</strong> có thể cảm thấy năm số 4 không có nhiều ánh đèn sân khấu — và đúng là như vậy. Năm 4 là năm của hậu trường: nơi những cột trụ vô hình được dựng lên, những hệ thống được xây dựng, và những thói quen sẽ định hình cả một thập kỷ sắp tới. Đừng đánh giá thấp những năm này.

Mọi tòa nhà lớn đều có một giai đoạn đào móng — không ai chụp ảnh giai đoạn đó, nhưng không có nó thì không có gì cả được xây lên. <strong>${name}</strong> đang ở trong giai đoạn đó. Hãy làm việc với sự kiên nhẫn và tự hào — vì chính bạn biết giá trị của từng viên đá mình đang đặt xuống.

Hãy kết năm 4 bằng một câu hỏi: <em>"Mình đã xây được những gì sẽ ở lại sau khi mình không còn ở đó nữa?"</em> Câu trả lời sẽ cho bạn thấy năm này có ý nghĩa lớn thế nào.`,
      },
      5: {
        congviec: `Năm 5 mang đến những thay đổi lớn và cơ hội bất ngờ trong sự nghiệp.Hãy chuẩn bị tinh thần đón nhận sự thay đổi — đây có thể là thay đổi công việc, vị trí hoặc hướng đi hoàn toàn mới.\n\nNăm 5 ủng hộ sự linh hoạt và khả năng thích nghi.Đừng bám víu vào những gì không còn phù hợp.Hãy mở lòng với những cơ hội mà bạn trước đây chưa từng xem xét.`,
        quanhe: `Trong tình yêu, năm 5 mang đến sự hấp dẫn và phiêu lưu.Bạn có thể gặp những người thú vị và đa dạng.Tuy nhiên, hãy cẩn thận với việc theo đuổi sự mới lạ mà bỏ qua sự ổn định cần thiết.\n\nNếu đang trong mối quan hệ, hãy mang lại sự tươi mới và hứng thú — cùng nhau thử những điều mới, du lịch hoặc tạo ra những trải nghiệm chưa từng có.`,
        taichinhthanhoc: `Tài chính trong năm 5 có thể không ổn định — thu nhập và chi tiêu đều có thể dao động.Hãy chuẩn bị quỹ dự phòng đủ lớn để đối phó với những bất ngờ.\n\nCó thể xuất hiện các cơ hội kiếm tiền từ những hoạt động mới và bất ngờ.Hãy cởi mở nhưng đừng đặt cược tất cả vào những cơ hội chưa được kiểm chứng.`,
        banthan: `Đây là năm bạn kết nối được với những người rất đa dạng từ nhiều lĩnh vực và văn hóa khác nhau.Mạng lưới quan hệ của bạn có thể mở rộng đáng kể trong năm 5.\n\nHãy tận dụng sự hấp dẫn tự nhiên và khả năng giao tiếp trong năm này để xây dựng những mối quan hệ có thể mở ra cơ hội trong tương lai.`,
        suckhoe: `Sức khỏe có thể bị ảnh hưởng bởi sự thay đổi quá nhiều và căng thẳng do biến động.Hãy duy trì thói quen lành mạnh cơ bản ngay cả khi mọi thứ xung quanh thay đổi.\n\nNăm 5 là thời điểm tốt để học bằng cách trải nghiệm thực tế — các chuyến đi học hỏi, thực tập hoặc làm việc trong môi trường mới sẽ rất có giá trị.`,
        tonket: `Nếu có một từ để tóm gọn năm số 5 của <strong>${name}</strong>, đó là: <em>thích nghi</em>. Không phải ai cũng có thể đứng vững giữa sóng gió mà không bị cuốn trôi. Nhưng bạn có thể học được cách đó. Và đó chính là hành trang quý giá nhất mà năm 5 dành tặng cho bạn.

Hãy nhìn lại những thay đổi trong năm này — cả những thứ bạn chọn và những thứ ập đến mà không báo trước. Điều gì trong số đó đã dạy cho <strong>${name}</strong> về sức mạnh thực sự của mình? Đó là câu trả lời bạn sẽ mang theo suốt cả phần đời còn lại.

Năm 5 có thể đã xào trộn cuộc sống của bạn. Nhưng giữa tất cả sự xao động đó, hãy tìm xem: điều gì đã tọn tại qua tất cả? Đứa con người thực sự của <strong>${name}</strong> — vẫn ở đó, vẫn vững vàng hơn bước vào.`,
      },
      6: {
        congviec: `Năm 6 là năm của trách nhiệm và phục vụ trong sự nghiệp.Đây là thời điểm để thể hiện vai trò lãnh đạo có tâm — không chỉ đạt kết quả mà còn chăm lo cho đồng nghiệp và cộng đồng.\n\nCác ngành nghề liên quan đến y tế, giáo dục, tư vấn và phục vụ cộng đồng sẽ đặc biệt phù hợp trong năm này.Sự toàn tâm toàn ý của bạn sẽ được ghi nhận và đền đáp.`,
        quanhe: `Đây là năm lý tưởng để đầu tư vào gia đình và các mối quan hệ thân thiết.Năng lượng số 6 đặt gia đình lên hàng đầu — hãy dành thời gian chất lượng cho những người bạn yêu thương.\n\nNếu đang tìm kiếm tình yêu, bạn thu hút những người tìm kiếm sự ổn định và chăm sóc.Mối quan hệ bắt đầu trong năm 6 thường nghiêm túc và hướng đến kết hôn.`,
        taichinhthanhoc: `Tài chính năm 6 thường ổn định nhưng có thể có những chi tiêu lớn liên quan đến gia đình — nhà cửa, chăm sóc người thân hoặc giáo dục cho con cái.\n\nHãy lập kế hoạch tài chính gia đình cẩn thận.Đây cũng là thời điểm tốt để mua bảo hiểm hoặc đầu tư cho an toàn lâu dài của gia đình.`,
        banthan: `Năm 6 khiến bạn trở thành người được tin tưởng và tìm đến trong cộng đồng.Bạn có khả năng tạo ra sự hòa hợp và chữa lành trong các nhóm xã hội.\n\nHãy tham gia các hoạt động cộng đồng và tình nguyện.Đóng góp cho xã hội trong năm này sẽ mang lại cho bạn cảm giác thỏa mãn sâu sắc.`,
        suckhoe: `Hãy chú ý không hy sinh sức khỏe bản thân vì chăm lo quá mức cho người khác — đây là nguy cơ phổ biến trong năm 6. Hãy nhớ rằng bạn cần tự chăm sóc mình trước.`,
        tonket: `Năm số 6 có một năng lượng hướng về con người rất đặc biệt — và <strong>${name}</strong> đang được gọi để sống trong năng lượng đó. Đây là năm để nhận ra rằng chăm sóc người khác không phải sự yếu đuối — đó là một trong những hình thức cường đại nhất mà một con người có thể biểu lộ.

Hãy nhìn lại những gì bạn đã trân trọng trong năm này. Ai đã gõ cửa tâm hồn bạn và được bạn mở? Đó là những mối quan hệ sẽ định nghĩa sự giàu có cuộc đời của <strong>${name}</strong> sau này.

Thành công của năm 6 là đạt được sự thấu hiểu về con người và xây dựng được niềm tin lớn của những người xung quanh. Hãy tiếp tục tiếp thêm điều đó — và nhớ tiết chế mức trách nhiệm của mình ở mức vừa đủ, không cho đi quá mức và cũng không giữ lại quá mức.`,
      },
      7: {
        congviec: `Năm 7 là năm của sự nghiên cứu, học tập và phát triển nội tâm trong sự nghiệp.Đây không phải lúc để mở rộng hay tìm kiếm thành công bên ngoài — thay vào đó, hãy đào sâu vào chuyên môn và kiến thức.\n\nHãy dành thời gian cho việc học, nghiên cứu và phát triển kỹ năng đặc biệt.Những người làm việc trong lĩnh vực học thuật, nghiên cứu hay tâm linh sẽ thấy năm này đặc biệt thuận lợi.`,
        quanhe: `Năm 7 có xu hướng hướng nội — bạn có thể thấy mình cần nhiều không gian riêng hơn.Điều này có thể gây hiểu lầm trong các mối quan hệ nếu không được giải thích rõ ràng.\n\nHãy giao tiếp thẳng thắn với người thân về nhu cầu cần không gian của mình.Các mối quan hệ bắt đầu trong năm 7 thường có chiều sâu trí tuệ và tâm linh đặc biệt.`,
        taichinhthanhoc: `Tài chính không phải ưu tiên hàng đầu trong năm 7 — đây là năm để tích lũy tri thức hơn là tiền bạc.Hãy tránh các quyết định tài chính lớn và rủi ro.\n\nCác khoản đầu tư vào giáo dục, khóa học hoặc phát triển cá nhân là sáng suốt nhất trong năm này.`,
        banthan: `Bạn có thể trở nên chọn lọc hơn trong các mối quan hệ xã hội trong năm 7. Đây là điều tự nhiên — hãy tập trung vào những cuộc trò chuyện có chiều sâu thay vì giao tiếp bề mặt.\n\nCác nhóm nghiên cứu, thảo luận hoặc học thuật sẽ phù hợp với bạn hơn trong năm này.`,
        suckhoe: `Năm 7 là thời điểm tốt nhất trong 9 năm để học và nghiên cứu chuyên sâu.Hãy tận dụng tư duy rõ ràng và khả năng tập trung cao của năm này.\n\nSức khỏe cần chú ý đến căng thẳng tâm lý do suy nghĩ quá nhiều — thiền định và các hoạt động thư giãn tâm trí là cần thiết.`,
        tonket: `Năm số 7 là năm hiếm hoi mà cuộc sống từ bên trong trở nên rớn ràng hơn thế giới bên ngoài. <strong>${name}</strong> có cơ hội đi vào chiều sâu của mình — không phải để lẩn trốn, mà để hiểu rõ hơn ai là mình và mình muốn đi về phía nào.

Những câu trả lời quan trọng nhất trong năm 7 không đến từ google, từ bạn bè, hay từ chuyên gia — chúng đến từ những khoảnh khắc yên tĩnh đủ lâu để bạn thực sự lắng nghe chính mình. Hãy trân trọng những khoảnh khắc đó.

Thành công của <strong>${name}</strong> trong năm 7 không nằm ở những gì bạn đạt được — mà nằm ở chiều sâu bạn chạm được. Những gì bạn khám phá được về bản thân sẽ trở thành la bàn dẫn đường cho cả giai đoạn quyền lực sắp tới — năm 8 và những gì theo sau.`,
      },
      8: {
        congviec: `Năm 8 là năm của thành công vật chất và quyền lực trong sự nghiệp.Đây là thời điểm để thực hiện những tham vọng lớn, đàm phán quan trọng và khẳng định vị trí lãnh đạo.\n\nNăng lượng số 8 ủng hộ việc đạt được thành tựu đáng kể — thăng tiến, tăng lương, mở rộng kinh doanh hoặc ký kết hợp đồng lớn.Hãy hành động táo bạo nhưng có tính toán.`,
        quanhe: `Trong tình yêu, bạn thu hút sự tôn trọng và ngưỡng mộ hơn là sự phụ thuộc.Hãy tìm kiếm người bạn đời có sự độc lập và tham vọng riêng của họ.\n\nNếu đang trong mối quan hệ, hãy đảm bảo sự nghiệp thành công không khiến bạn bỏ bê mối quan hệ.Hãy chia sẻ thành công với người thân thay vì chỉ tập trung vào mục tiêu cá nhân.`,
        taichinhthanhoc: `Đây là năm tốt nhất để đầu tư, kinh doanh và tăng nguồn thu nhập.Tuy nhiên, hãy tránh lòng tham quá mức — năng lượng số 8 có thể dẫn đến rủi ro tài chính nếu không được kiểm soát.\n\nHãy lên kế hoạch tài chính rõ ràng với mục tiêu cụ thể.Đầu tư có nghiên cứu kỹ lưỡng sẽ mang lại kết quả tốt trong năm này.`,
        banthan: `Năm 8 mang đến ảnh hưởng xã hội mạnh mẽ — bạn tự nhiên đứng ở vị trí trung tâm và người khác tìm kiếm sự lãnh đạo của bạn.\n\nHãy sử dụng ảnh hưởng này một cách có trách nhiệm.Xây dựng mạng lưới quan hệ nghề nghiệp và tích cực tham gia các sự kiện ngành.`,
        suckhoe: `Sức khỏe có thể bị ảnh hưởng bởi áp lực công việc cao.Hãy đặt ra giới hạn rõ ràng và không hy sinh sức khỏe cho thành công vật chất.\n\nNăm 8 là thời điểm tốt để học các kỹ năng lãnh đạo và quản lý — đầu tư vào giáo dục lãnh đạo sẽ có giá trị trong các năm tới.`,
        tonket: `Năm số 8 là năm <strong>${name}</strong> đứng dưới ánh đèn — và ánh đèn đó có thể rất có lợi hoặc rất khắc nghiệt, tùy vào cách bạn chuẩn bị. Hãy nhớ rằng quyền lực thực sự không phải là để kiểm soát mà là để ảnh hưởng — và sự ảnh hưởng bền lâu nhất đều đến từ giá trị, không phải từ sức mạnh.

Hãy kết năm 8 bằng câu hỏi: <em>"Mình đã dùng được bao nhiêu trong những gì mình có để giúp ích cho người khác?"</em> Câu trả lời sẽ cho bạn thấy liệu thành công năm nay có ý nghĩa thật sự hay không.

<strong>${name}</strong>, đừng để năm quan trọng nhất trong chu kỳ 9 năm trôi qua trong sự rụt rè. Hãy đứng thẳng, tin vào giá trị của mình, và bước ra ánh sáng mà năm số 8 đang chiếu cho bạn.`,
      },
      9: {
        congviec: `Năm 9 là năm hoàn thành chu kỳ và buông bỏ trong sự nghiệp.Đây là thời điểm để kết thúc những dự án dở dang, giải quyết các vấn đề còn tồn đọng và chuẩn bị cho chu kỳ mới.\n\nHãy đánh giá lại hướng đi sự nghiệp — điều gì đã phục vụ tốt cho bạn và điều gì cần thay đổi ? Năm 9 là cơ hội để định hình lại tầm nhìn cho chu kỳ 9 năm tiếp theo.`,
        quanhe: `Trong các mối quan hệ, năm 9 có thể mang đến sự kết thúc — một số mối quan hệ có thể kết thúc tự nhiên vì chúng đã hoàn thành vai trò của mình.Đây không nhất thiết là điều tiêu cực.\n\nHãy giải quyết những hiểu lầm lâu nay, tha thứ và được tha thứ.Năm 9 là thời điểm để chữa lành những vết thương cũ trong các mối quan hệ.`,
        taichinhthanhoc: `Tài chính trong năm 9 cần được quản lý cẩn thận — đây không phải năm tốt để bắt đầu đầu tư lớn mới.Thay vào đó, hãy giải quyết các khoản nợ còn lại và chuẩn bị nền tảng tài chính cho chu kỳ mới.\n\nHãy tổng kết lại tình hình tài chính: điều gì hiệu quả, điều gì không ? Bài học này sẽ giúp bạn quản lý tốt hơn trong 9 năm tới.`,
        banthan: `Năm 9 là lúc để buông bỏ những mối quan hệ xã hội không còn phục vụ cho sự phát triển của bạn.Điều này có thể khó khăn nhưng cần thiết cho sự phát triển tiếp theo.\n\nHãy tập trung vào việc chữa lành và tha thứ trong các mối quan hệ hiện tại.Tham gia các hoạt động nhân đạo hoặc tình nguyện sẽ mang lại ý nghĩa sâu sắc trong năm này.`,
        suckhoe: `Sức khỏe năm 9 cần sự chú ý đặc biệt đến việc giải phóng căng thẳng và chữa lành — cả về thể xác lẫn tinh thần.Đây là năm tốt để làm các liệu pháp chữa lành, nghỉ dưỡng hoặc tĩnh tâm.\n\nNăm 9 là thời điểm tốt để chia sẻ kiến thức và kinh nghiệm tích lũy — dạy người khác những gì bạn đã học được.`,
        tonket: `Năm số 9 là một trong những năm được định nghĩa bởi những gì bạn dám bỏ lại — không phải những gì bạn nắm giữ. <strong>${name}</strong> đang được mời buông bỏ — con người cũ, thói quen cũ, mối quan hệ cũ, kiểu tư duy cũ. Không phải vì chúng xấu, mà vì bạn đã vượt lên chúng rồi.

Buông bỏ thực sự được bắt đầu từ phía trong: tha thứ những điều bạn đã giữ lâu, bày tỏ lòng biết ơn với những gì cuộc sống đã mang lại (dù tốt hay khó), và đặt niềm tin vào những gì sắp đến dù chưa thấy hình dáng.

<strong>${name}</strong>, hành trình 9 năm sắp khép lại. Đừng vội. Hãy dành một khoảnh khắc để cảm ơn tất cả những năm đó — và mỗi thứ bạn buông ra hôm nay là một đôi tay trống để đón nhận điều kỳ diệu phía trước.`,
      },
    };
    return YEAR_DATA[n] || YEAR_DATA[1];
  },

  // Internal: return {intro, title, subtitle} for a personal year number
  // Used by buildPersonalYearFullBlock to get the narrative intro without HTML overhead.
  _yearIntro(num, year, name) {
    const n = num % 9 || 9;
    // The full content lives inside personalYearDeep — we duplicate only the meta fields here.
    const META = {
      1: {
        title: 'Khởi đầu mới &amp; Tiên phong', subtitle: 'Năm của những bước đột phá và khởi đầu',
        intro: `Năm cá nhân số 1 mở ra một chu kỳ hoàn toàn mới cho <strong>${name}</strong>. Đây là thời điểm vũ trụ trao cho bạn một trang giấy trắng — hãy viết lên đó những điều bạn thực sự muốn trở thành. Năng lượng năm nay mạnh mẽ, độc lập và tiên phong; mọi sự chần chừ đều có thể khiến bạn bỏ lỡ cơ hội đặc biệt.`
      },
      2: {
        title: 'Hợp tác &amp; Kiên nhẫn chiến lược', subtitle: 'Năm của các mối quan hệ và ngoại giao',
        intro: `Năm cá nhân số 2 của <strong>${name}</strong> là năm của sự chậm lại có chủ đích. Sau sự khởi đầu mạnh mẽ của số 1, vũ trụ mời bạn vào chế độ "trồng cây" — kiên nhẫn chăm sóc những gì đã được gieo, xây dựng liên minh và phát triển qua sự hợp tác thay vì đối đầu.`
      },
      3: {
        title: 'Sáng tạo &amp; Biểu đạt', subtitle: 'Năm của niềm vui, nghệ thuật và giao tiếp',
        intro: `Năm cá nhân số 3 mang đến cho <strong>${name}</strong> làn sóng năng lượng vui tươi, sáng tạo và biểu đạt. Đây là năm để tỏa sáng, kết nối và thể hiện bản thân một cách chân thực. Hãy để niềm vui dẫn đường.`
      },
      4: {
        title: 'Xây dựng &amp; Kỷ luật', subtitle: 'Năm của nền tảng và sự kiên trì',
        intro: `Năm cá nhân số 4 đặt <strong>${name}</strong> vào vai trò người kiến tạo. Đây không phải năm của phiêu lưu hay cảm hứng bốc đồng — mà là năm của nỗ lực bền bỉ, kế hoạch chi tiết và xây dựng nền móng cho tương lai.`
      },
      5: {
        title: 'Chuyển đổi &amp; Tự do', subtitle: 'Năm của thay đổi và trải nghiệm mới',
        intro: `Năm cá nhân số 5 mang đến cho <strong>${name}</strong> gió mới của sự thay đổi. Đây là năm năng động nhất trong chu kỳ, với nhiều biến động, cơ hội bất ngờ và những cuộc gặp gỡ định hình lại con người bạn.`
      },
      6: {
        title: 'Tình yêu &amp; Trách nhiệm', subtitle: 'Năm của gia đình, hôn nhân và sự hy sinh',
        intro: `Năm cá nhân số 6 được gọi là năm của tình yêu và trách nhiệm đối với <strong>${name}</strong>. Cuộc sống sẽ mang đến những sự kiện nhấn mạnh đến gia đình, các mối quan hệ thân thiết và nghĩa vụ với người xung quanh.`
      },
      7: {
        title: 'Chiều sâu nội tâm &amp; Tâm linh', subtitle: 'Năm của sự suy ngẫm, học hỏi và kết nối tâm linh',
        intro: `Năm cá nhân số 7 mời <strong>${name}</strong> chậm lại và đi vào chiều sâu. Đây không phải năm của hành động ồ ạt — mà là năm của sự tích lũy tri thức, phát triển nội tâm và kết nối với trực giác. Những gì bạn học được trong năm này sẽ trở thành nền tảng cho sự thịnh vượng của năm số 8 tiếp theo.`
      },
      8: {
        title: 'Quyền lực &amp; Thịnh vượng', subtitle: 'Năm của thu hoạch, sự nghiệp và tài chính',
        intro: `Năm cá nhân số 8 là năm thu hoạch và quyền lực của <strong>${name}</strong>. Đây là đỉnh cao của chu kỳ 9 năm về mặt thành tựu vật chất và ảnh hưởng xã hội. Những hạt giống bạn đã gieo trong các năm trước đang sẵn sàng cho mùa gặt — vấn đề chỉ là bạn có đủ can đảm để đến đồng ruộng không.`
      },
      9: {
        title: 'Hoàn thành &amp; Buông bỏ', subtitle: 'Năm của sự kết thúc, nhân đạo và giải phóng',
        intro: `Năm cá nhân số 9 đánh dấu sự kết thúc của một chu kỳ 9 năm trong cuộc đời <strong>${name}</strong>. Đây là năm của sự tổng kết, nhìn lại, và quan trọng nhất là buông bỏ những gì không còn phù hợp để chuẩn bị cho một khởi đầu hoàn toàn mới.`
      },
    };
    return META[n] || META[1];
  },

  // ════════════════════════════════════════════════════════════════════
  // VẬN SỐ THÁNG (PERSONAL MONTH DEEP) — 6 domains × số 1-9
  // Gọi: NT.personalMonthDeep(num, month, year, name)
  // ════════════════════════════════════════════════════════════════════
  personalMonthDeep(num, month, year, name) {
    const n = num % 9 || 9;
    const monthNames = ['', 'Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6',
      'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'];
    const label = `${monthNames[month] || 'Tháng ' + month}/${year}`;

    const content = {
      1: {
        energy: `Tháng cá nhân số <strong>1</strong> là tháng của <em>sự khởi đầu và tiên phong</em> cho <strong>${name}</strong>. Vũ trụ đang trao cho bạn một trang trắng hoàn toàn mới — năng lượng số 1 thôi thúc bạn hành động, ra quyết định và dứt khoát với những điều chưa làm được. Đây là tháng gieo hạt quan trọng cho cả chu kỳ phía trước.`,
        congviec: `Đây là thời điểm lý tưởng để <strong>${name}</strong> khởi động những dự án mới, đề xuất sáng kiến hoặc đảm nhận trách nhiệm lớn hơn. Năng lượng số 1 hỗ trợ mạnh cho việc tự lập và hành động độc lập — những quyết định được đưa ra trong tháng này có thể định hình cả quý tiếp theo. Đừng chờ đợi — hãy là người đầu tiên đề xuất, đầu tiên thử nghiệm và đầu tiên bước vào cơ hội mới.`,
        tinhyeu: `Trong chuyện tình cảm, <strong>${name}</strong> có thể cảm thấy mạnh mẽ và tự tin hơn bình thường — và đây chính là lúc tốt để bày tỏ cảm xúc hoặc chủ động làm mới mối quan hệ. Với người đang độc thân, tháng số 1 có thể mang đến cơ hội gặp gỡ bất ngờ. Với người đã có đôi, hãy dẫn đầu trong việc tạo ra những trải nghiệm mới và phá vỡ sự tẻ nhạt quen thuộc.`,
        taichinh: `Tháng số 1 thích hợp để <strong>${name}</strong> bắt đầu kế hoạch tài chính mới, mở tài khoản tiết kiệm có mục tiêu, hoặc đưa ra quyết định đầu tư đã suy nghĩ từ lâu. Hãy chủ động — cơ hội tài chính đến với những ai đứng dậy trước. Tuy nhiên tránh chi tiêu bốc đồng vì muốn thể hiện hay chứng tỏ bản thân.`,
        giaotiep: `Sức hút cá nhân của <strong>${name}</strong> rất mạnh trong tháng này. Người khác tự nhiên chú ý đến bạn và muốn nghe bạn nói — hãy tận dụng điều đó để xây dựng mạng lưới mới, tạo ấn tượng ban đầu tốt hoặc dẫn dắt nhóm. Tháng số 1 không phải thời điểm để thu mình — hãy hiện diện và để bản thân được nhìn thấy.`,
        hoctap: `<strong>${name}</strong> có thể cảm thấy đặc biệt hứng khởi với việc học những kỹ năng hoàn toàn mới trong tháng này. Đây là lúc tốt để đăng ký khóa học, thử phương pháp học mới, hoặc nghiên cứu lĩnh vực mà bạn muốn phát triển. Não bộ đang trong trạng thái tiếp nhận mạnh — hãy tận dụng.`,
        tongket: `Tháng số 1 tổng kết lại bằng một lời hứa với bản thân: <em>hành động sớm hơn, quyết đoán hơn và tin tưởng vào bản ngã cốt lõi của mình</em>. Nếu trong tháng này có điều gì trì hoãn — hãy xem đó là tín hiệu cần vượt qua ngay. Những gì <strong>${name}</strong> bắt đầu trong tháng số 1 sẽ có sức lan tỏa vào các tháng tiếp theo của năm.`
      },
      2: {
        energy: `Tháng cá nhân số <strong>2</strong> mang đến cho <strong>${name}</strong> năng lượng của <em>sự hợp tác, lắng nghe và kiên nhẫn chiến lược</em>. Đây không phải thời điểm của hành động ồ ạt mà là thời điểm để nuôi dưỡng các mối quan hệ, xây dựng cây cầu kết nối và chuẩn bị nền móng cho những điều lớn hơn.`,
        congviec: `Tháng số 2 thích hợp để <strong>${name}</strong> tập trung vào hợp tác và làm việc nhóm hơn là thi đua cá nhân. Những thỏa thuận, đàm phán và tìm kiếm đồng thuận đều được hỗ trợ trong tháng này. Hãy kiên nhẫn — quyết định được đưa ra cùng người khác sẽ bền vững hơn quyết định đơn phương. Đây cũng là lúc tốt để hoàn thiện những chi tiết nhỏ mà tháng trước chưa giải quyết.`,
        tinhyeu: `Trong tình cảm, <strong>${name}</strong> đang ở trong tháng được thiên nhiên ủng hộ nhất cho sự kết nối sâu sắc. Những cuộc trò chuyện thành thật, những khoảnh khắc lắng nghe thực sự và sự chia sẻ nhẹ nhàng sẽ tạo ra chiều sâu mới trong mối quan hệ. Với người độc thân, hãy chú ý đến những ai đang ở cạnh bạn nhưng chưa được nhìn thấy đúng mức.`,
        taichinh: `Hãy tránh đưa ra những quyết định tài chính lớn một mình trong tháng số 2. <strong>${name}</strong> sẽ lợi hơn nếu tham khảo ý kiến của người có kinh nghiệm hoặc hợp tác tài chính với người tin cậy. Đây cũng là tháng thích hợp để xem lại ngân sách, rà soát các khoản chi và chuẩn bị tài chính một cách thầm lặng và cẩn thận.`,
        giaotiep: `<strong>${name}</strong> tỏa ra sự ấm áp và dễ tiếp cận đặc biệt trong tháng này — người ta tự nhiên muốn chia sẻ với bạn. Hãy lắng nghe nhiều hơn nói, quan sát nhiều hơn hành động. Những thông tin quý giá và cơ hội ẩn thường đến qua những cuộc trò chuyện tưởng như bình thường khi bạn thực sự chú tâm lắng nghe.`,
        hoctap: `Tháng số 2 rất thích hợp để <strong>${name}</strong> học theo cặp hoặc nhóm nhỏ. Các khóa học về kỹ năng giao tiếp, tư vấn, trị liệu, ngoại ngữ hoặc bất kỳ kiến thức nào liên quan đến con người đều đặc biệt phù hợp. Hãy tìm người thầy hoặc mentor — giai đoạn này bạn học tốt nhất từ người khác chứ không phải từ sách vở một mình.`,
        tongket: `Tháng số 2 nhắc nhở <strong>${name}</strong> rằng <em>sức mạnh thật sự không phải là đi một mình nhanh hơn — mà là đi cùng người khác xa hơn</em>. Hãy trân trọng những liên minh bạn đang xây dựng. Bất kỳ mối quan hệ nào được vun đắp trong tháng này đều có tiềm năng phát triển lâu dài và sâu sắc.`
      },
      3: {
        energy: `Tháng cá nhân số <strong>3</strong> là <em>mùa hoa nở</em> trong hành trình của <strong>${name}</strong>. Năng lượng sáng tạo và biểu đạt đang ở đỉnh cao — vũ trụ không chỉ cho phép bạn thể hiện bản thân mà còn <em>yêu cầu</em> bạn làm điều đó. Niềm vui, kết nối xã hội và những ý tưởng mới liên tục xuất hiện.`,
        congviec: `<strong>${name}</strong> có thể tỏa sáng đặc biệt trong các cuộc họp, thuyết trình và giao tiếp với khách hàng trong tháng này. Những ý tưởng sáng tạo đang chín muồi — hãy mạnh dạn đề xuất, viết ra và chia sẻ. Các dự án liên quan đến nội dung, truyền thông, giảng dạy hay bất kỳ thứ gì cần biểu đạt đều có lợi thế lớn trong tháng số 3.`,
        tinhyeu: `Tháng này <strong>${name}</strong> rất hấp dẫn và thu hút — người mới có thể xuất hiện, mối quan hệ cũ có thể được làm mới bằng sự vui vẻ và tự phát. Hãy đưa người thân ra ngoài, thử trải nghiệm mới cùng nhau, tạo ra những kỷ niệm đẹp. Tuy nhiên, đừng để sự phấn khích bề mặt che lấp những cuộc trò chuyện quan trọng cần có chiều sâu.`,
        taichinh: `Tháng số 3 thường mang đến những cơ hội tài chính qua kết nối xã hội và mạng lưới quan hệ của <strong>${name}</strong>. Bạn có thể nhận được lời mời hợp tác, cơ hội phụ thu nhập hoặc khách hàng mới qua giới thiệu. Tuy nhiên hãy cẩn thận với chi tiêu bốc hứng — tháng số 3 dễ khiến bạn mua sắm không có kế hoạch vì đang ở trạng thái phấn khích.`,
        giaotiep: `<strong>${name}</strong> là tâm điểm của mọi cuộc tụ họp xã hội trong tháng này. Năng lượng giao tiếp của bạn mạnh đến mức người ta tự nhiên muốn ở quanh bạn. Đây là thời điểm lý tưởng để mở rộng mạng lưới, tham gia các sự kiện và kết nối với những người sáng tạo — một cuộc gặp gỡ tưởng như tình cờ có thể thay đổi hướng đi của bạn.`,
        hoctap: `Tháng số 3 rất thích hợp để <strong>${name}</strong> học những kỹ năng sáng tạo và biểu đạt. Viết lách, thiết kế, nhiếp ảnh, diễn xuất, kể chuyện — bất kỳ nghệ thuật nào giúp bạn bày tỏ nội tâm đều phát triển nhanh trong giai đoạn này. Đây cũng là lúc tốt để dạy lại những gì bạn biết — dạy người khác là cách học sâu nhất.`,
        tongket: `Tháng số 3 kết thúc với thông điệp: <em>hãy để bản thân được tỏa sáng theo cách chỉ bạn mới có thể làm được</em>. <strong>${name}</strong> không cần phải hoàn hảo mới bắt đầu biểu đạt — giọng nói, câu chuyện và góc nhìn độc đáo của bạn là thứ thế giới đang cần. Năng lượng vui vẻ và sáng tạo của tháng này — hãy chia sẻ nó trước khi nó qua đi.`
      },
      4: {
        energy: `Tháng cá nhân số <strong>4</strong> yêu cầu <strong>${name}</strong> tập trung vào <em>kỷ luật, tổ chức và xây dựng nền tảng</em>. Đây không phải tháng hào nhoáng hay bứt phá nhanh — đây là tháng làm những việc thực chất và kiên nhẫn. Những gì được xây dựng chắc chắn trong tháng này sẽ đứng vững qua những tháng biến động phía trước.`,
        congviec: `<strong>${name}</strong> nên tập trung hoàn thiện các dự án đang dang dở thay vì mở thêm dự án mới trong tháng số 4. Đây là lúc tốt để lập quy trình, tổ chức lại hệ thống làm việc, xây dựng thói quen nghề nghiệp và đầu tư vào việc nâng cao kỹ năng chuyên môn. Những đồng nghiệp và cấp trên sẽ chú ý đến sự cẩn thận và đáng tin cậy của bạn tháng này.`,
        tinhyeu: `Trong tháng số 4, <strong>${name}</strong> có xu hướng tìm kiếm sự ổn định và chắc chắn trong tình cảm hơn là những khoảnh khắc hào hứng ngắn ngủi. Đây là lúc tốt để xây dựng nền tảng vững chắc cho mối quan hệ — những cuộc trò chuyện thực chất về tương lai, về kỳ vọng và về cam kết. Đừng để sự thực dụng của số 4 giết chết sự lãng mạn hoàn toàn — người thân cần cả hai.`,
        taichinh: `Tháng số 4 là thời điểm lý tưởng nhất trong năm để <strong>${name}</strong> xem xét và tái cơ cấu tài chính. Lập ngân sách, cắt giảm chi tiêu không cần thiết, tăng tiết kiệm, nghiên cứu các lựa chọn đầu tư an toàn dài hạn — tất cả đều được hỗ trợ mạnh. Tránh các quyết định tài chính rủi ro cao trong tháng này.`,
        giaotiep: `<strong>${name}</strong> có thể không phải là người nói chuyện nhiều nhất trong phòng tháng này — và đó là điều tốt. Chất lượng giao tiếp của bạn cao hơn số lượng. Những ai thực sự lắng nghe sẽ nhận ra sự chín chắn và đáng tin cậy toát ra từ bạn. Hãy dồn năng lượng vào những mối quan hệ thực chất thay vì mở rộng xã giao bề mặt.`,
        hoctap: `Tháng số 4 thuận lợi nhất cho việc học theo kiểu <em>đào sâu có hệ thống</em>. <strong>${name}</strong> học tốt hơn khi có bài bản rõ ràng, tài liệu cụ thể và lộ trình được vạch ra từ trước. Các kỹ năng kỹ thuật, tài chính, lập kế hoạch hay bất kỳ chuyên môn nào đòi hỏi tính tỉ mỉ đều đặc biệt phù hợp trong giai đoạn này.`,
        tongket: `Tháng số 4 nhắc <strong>${name}</strong> về giá trị của sự kiên nhẫn — <em>những thứ xây bằng tay, từng viên gạch một, luôn đứng lâu hơn những thứ được dựng lên qua đêm</em>. Đừng nản lòng nếu tiến độ trông chậm chạp. Sự cố gắng âm thầm của bạn trong tháng này đang tạo ra nền móng thực sự cho những gì sắp đến.`
      },
      5: {
        energy: `Tháng cá nhân số <strong>5</strong> mang đến cho <strong>${name}</strong> <em>làn gió tươi mới của sự thay đổi và tự do</em>. Những bất ngờ, cơ hội mới và sự điều chỉnh là đặc trưng của tháng này — đừng chống lại chúng. Sự linh hoạt và sẵn sàng thích nghi là tài sản lớn nhất của bạn trong giai đoạn này.`,
        congviec: `Tháng số 5 có thể mang đến những thay đổi bất ngờ trong môi trường làm việc của <strong>${name}</strong> — nhiệm vụ mới, hướng đi mới, thậm chí cơ hội việc làm từ nơi không ngờ tới. Đừng từ chối chúng chỉ vì không nằm trong kế hoạch — một số cánh cửa tốt nhất trong sự nghiệp được mở ra trong những tháng số 5. Hãy giữ tâm thế mở và linh hoạt.`,
        tinhyeu: `Trong tình cảm, <strong>${name}</strong> đang ở tháng của sự hào hứng và tự phát. Những cuộc hẹn ngẫu hứng, trải nghiệm mới cùng nhau, phá bỏ thói quen cũ — tất cả đều được hoan nghênh. Với người độc thân, những cuộc gặp gỡ tình cờ trong tháng này có thể để lại ấn tượng lâu dài. Hãy mở lòng nhưng đừng quên giữ sự sáng suốt trong những quyết định quan trọng.`,
        taichinh: `Tháng số 5 có thể mang đến những cơ hội tài chính từ hướng bất ngờ cho <strong>${name}</strong> — nhưng cũng đi kèm với cám dỗ chi tiêu theo sự hào hứng. Hãy dựng một bộ lọc 24 giờ — bất kỳ chi tiêu lớn nào cũng nên chờ một ngày trước khi quyết định. Đồng thời giữ sẵn một khoản dự phòng nhỏ cho những cơ hội thực sự tốt có thể xuất hiện bất ngờ.`,
        giaotiep: `<strong>${name}</strong> sẽ gặp nhiều người mới thú vị trong tháng này — và những cuộc trò chuyện tưởng như ngắn ngủi có thể mở ra cánh cửa mới. Hãy đặt mình vào những môi trường mới, tham gia sự kiện khác với thói quen và để những cuộc gặp gỡ tình cờ diễn ra. Đừng lên kế hoạch quá chi tiết cho các hoạt động xã hội tháng này.`,
        hoctap: `Tháng số 5 không phải lúc học theo kiểu ngồi xuống và học từng chương. <strong>${name}</strong> học tốt nhất trong tháng này qua trải nghiệm thực tế, thử nghiệm hoặc tiếp xúc với môi trường hoàn toàn mới. Những kỹ năng liên quan đến giao tiếp đa văn hóa, ngôn ngữ và linh hoạt trong môi trường biến đổi nhanh đều phát triển mạnh.`,
        tongket: `Tháng số 5 kết thúc với câu hỏi: <em>bạn đã sống trọn vẹn tháng này chưa — hay chỉ đang đứng nhìn những điều thú vị đi qua từ phía sau kính?</em> <strong>${name}</strong> được vũ trụ mời gọi tham gia — không chỉ quan sát. Tự do thực sự đến từ việc dũng cảm thử những thứ chưa từng thử trước đây.`
      },
      6: {
        energy: `Tháng cá nhân số <strong>6</strong> của <strong>${name}</strong> đặt trọng tâm vào <em>gia đình, tình yêu và trách nhiệm sâu sắc</em>. Đây là thời điểm để chăm sóc những mối quan hệ thân thiết nhất và tạo ra sự hài hòa trong không gian sống và làm việc. Vũ trụ giao cho bạn nhiệm vụ thiêng liêng: trở thành chỗ nương tựa.`,
        congviec: `Tháng số 6 thích hợp để <strong>${name}</strong> cải thiện môi trường làm việc, xây dựng văn hóa nhóm tích cực và giải quyết các mâu thuẫn còn tồn đọng. Vai trò người hòa giải, người hỗ trợ và người tạo ra sự gắn kết đang được ủng hộ mạnh. Các nghề liên quan đến chăm sóc, giảng dạy hoặc thiết kế không gian sống đặc biệt thuận lợi trong tháng này.`,
        tinhyeu: `<strong>${name}</strong> đang trong giai đoạn vàng để đầu tư thực sự vào mối quan hệ tình cảm. Những cử chỉ nhỏ — một bữa ăn được nấu với tâm, một cuộc trò chuyện dài, sự hiện diện trọn vẹn — tạo ra ảnh hưởng sâu sắc hơn bất kỳ món quà đắt tiền nào. Đây cũng là tháng để hàn gắn những vết nứt nhỏ trong mối quan hệ trước khi chúng trở nên lớn hơn.`,
        taichinh: `Tháng số 6 có thể mang đến những chi phí liên quan đến gia đình hoặc cải thiện không gian sống — điều đó là hoàn toàn tự nhiên. <strong>${name}</strong> hãy lập kế hoạch ngân sách gia đình dài hạn trong tháng này, bao gồm quỹ dự phòng khẩn cấp. Tránh bỏ bê tài chính cá nhân trong khi chăm lo cho người khác.`,
        giaotiep: `<strong>${name}</strong> được cảm nhận như một người ấm áp, đáng tin cậy và quan tâm thực sự trong xã hội tháng này. Người ta tìm đến bạn để chia sẻ, để được lắng nghe và để cảm thấy an toàn. Hãy cho phép mình trở thành nguồn năng lượng tích cực — nhưng đồng thời học cách đặt ranh giới lành mạnh để không trở thành thùng rác cảm xúc của người khác.`,
        hoctap: `Tháng số 6 thuận lợi để <strong>${name}</strong> học những kỹ năng liên quan đến con người — giao tiếp phi bạo lực, tư vấn tâm lý cơ bản, thiết kế nội thất, ẩm thực, chăm sóc sức khỏe gia đình. Đây cũng là tháng học qua trải nghiệm gia đình — những gì được dạy qua tình huống thực trong cuộc sống thường có chiều sâu hơn những gì học trong sách.`,
        tongket: `Tháng số 6 nhắc <strong>${name}</strong> rằng <em>yêu thương thực sự không yêu cầu sự hoàn hảo — nó chỉ yêu cầu sự hiện diện</em>. Những gì bạn đã cho đi trong tháng này — dù nhỏ bé, dù không ai ghi nhận — đang tạo ra những vòng sóng tình yêu thương lan ra xa hơn bạn tưởng. Hãy nhớ: chăm sóc bản thân cũng là một hành động yêu thương.`
      },
      7: {
        energy: `Tháng cá nhân số <strong>7</strong> mời <strong>${name}</strong> vào <em>sự tĩnh lặng và chiều sâu nội tâm</em>. Đây không phải tháng của hành động ồn ào — vũ trụ đang yêu cầu bạn dừng lại, quan sát và lắng nghe những thông điệp tinh tế hơn. Trực giác của bạn đặc biệt nhạy bén trong tháng số 7.`,
        congviec: `Tháng số 7 không thích hợp để <strong>${name}</strong> ra mắt sản phẩm mới hay thực hiện những bước đột phá lớn — nhưng là lúc lý tưởng để nghiên cứu, phân tích và chuẩn bị. Hãy đào sâu vào chuyên môn, đọc những tài liệu đã để dành, nghiên cứu thị trường hoặc xem lại chiến lược tổng thể. Những quyết định chiến lược sau giai đoạn suy nghĩ kỹ lưỡng trong tháng số 7 thường rất chính xác.`,
        tinhyeu: `Trong tháng số 7, <strong>${name}</strong> có thể cần nhiều không gian riêng hơn bình thường — và đó là nhu cầu hoàn toàn tự nhiên, không phải dấu hiệu của sự xa cách. Hãy giải thích điều này cho người thân. Mặt khác, những cuộc trò chuyện sâu sắc về ý nghĩa cuộc sống và giá trị sẽ tạo ra sự kết nối mạnh mẽ hơn bất kỳ hoạt động xã hội nào.`,
        taichinh: `Tháng số 7 là lúc <strong>${name}</strong> nên nghiên cứu kỹ trước mọi quyết định tài chính quan trọng. Đừng bị thúc đẩy bởi áp lực “cơ hội sắp hết” — hãy dành thời gian phân tích, so sánh và hỏi ý kiến chuyên gia nếu cần. Đây cũng là lúc tốt để xem lại hiệu quả của các khoản đầu tư hiện tại và điều chỉnh nếu cần thiết.`,
        giaotiep: `<strong>${name}</strong> không cần phải là trung tâm của mọi cuộc trò chuyện trong tháng số 7. Chất lượng cao hơn số lượng — một cuộc trò chuyện có chiều sâu với một người phù hợp sẽ có giá trị hơn hàng chục cuộc xã giao bề mặt. Hãy chọn lọc người để tâm sự và không ngần ngại từ chối các sự kiện xã hội không cần thiết trong tháng này.`,
        hoctap: `Đây là một trong những tháng học tập hiệu quả nhất trong năm cho <strong>${name}</strong>. Tháng số 7 ủng hộ việc nghiên cứu chuyên sâu, đọc sách triết học hay tâm linh, theo đuổi một chủ đề bạn thực sự tò mò từ lâu. Thiền định, viết nhật ký và các thực hành nội tâm cũng là hình thức học tập quan trọng trong giai đoạn này.`,
        tongket: `Tháng số 7 kết thúc với lời nhắc: <em>không phải mọi câu hỏi đều cần câu trả lời ngay — và không phải mọi khoảnh khắc yên tĩnh đều cần được lấp đầy bằng hành động</em>. <strong>${name}</strong> đang trong quá trình tích lũy nội lực. Những gì bạn học được và cảm nhận được trong tháng 7 sẽ trở thành la bàn dẫn đường cho những tháng hành động sắp tới.`
      },
      8: {
        energy: `Tháng cá nhân số <strong>8</strong> mang đến cho <strong>${name}</strong> luồng năng lượng của <em>quyền lực, thịnh vượng và ảnh hưởng</em>. Đây là một trong những tháng mạnh nhất trong chu kỳ 9 tháng — những hành động đúng đắn được thực hiện trong tháng này thường mang lại kết quả vượt mong đợi.`,
        congviec: `Tháng số 8 là lúc <strong>${name}</strong> nên hành động quyết đoán trong sự nghiệp: đàm phán tăng lương, ký kết hợp đồng quan trọng, mở rộng kinh doanh, hoặc đảm nhận vai trò lãnh đạo. Đừng ngần ngại — vũ trụ đang ủng hộ sức mạnh và sự tự tin của bạn. Năng lực và uy tín bạn đã xây dựng từ trước giờ đang được nhìn nhận và đền bù xứng đáng.`,
        tinhyeu: `Trong tình cảm, <strong>${name}</strong> có thể toát ra sức hút và sự tự tin đặc biệt — điều này hấp dẫn người xung quanh. Tuy nhiên hãy chú ý không để sự bận rộn và tập trung vào sự nghiệp làm nguội lạnh mối quan hệ. Hãy đầu tư thời gian có chất lượng cho người thân — không phải thời gian thừa sau khi đã làm xong mọi việc. Bạn yêu mạnh mẽ nhất khi bạn chủ động chứ không phải khi bị nhắc nhở.`,
        taichinh: `Tháng số 8 là đỉnh cao tài chính trong năm cho <strong>${name}</strong>. Đây là lúc để đầu tư, mở rộng nguồn thu nhập, đàm phán các điều khoản có lợi và ra quyết định tài chính táo bạo nhưng có cơ sở. Hãy dùng sức mạnh tháng này để xây dựng nền tảng vật chất dài hạn — không chỉ hưởng thụ ngắn hạn. Những gì bạn xây dựng trong tháng số 8 sẽ phục vụ bạn trong nhiều năm tới.`,
        giaotiep: `<strong>${name}</strong> mang sức hút tự nhiên của người “thành công thực sự” trong tháng này. Người khác tôn trọng và muốn kết nối với bạn — không chỉ vì bạn vui vẻ hay thân thiện, mà vì họ cảm nhận được năng lực và uy quyền. Hãy dùng vị thế này để xây dựng những liên minh có giá trị — nhưng đừng để quyền lực biến thành sự cô lập.`,
        hoctap: `Tháng số 8 ủng hộ việc học những kỹ năng liên quan đến quản lý, lãnh đạo, tài chính và xây dựng ảnh hưởng. <strong>${name}</strong> học tốt nhất trong giai đoạn này khi được áp dụng thực tiễn ngay — lý thuyết kết hợp với thực hành. Tham dự các hội thảo kinh doanh hoặc mentoring với người thành công hơn đều mang lại nhiều giá trị.`,
        tongket: `Tháng số 8 kết thúc với câu hỏi quan trọng: <em>bạn đang dùng sức mạnh của mình để xây dựng gì — và ai sẽ được hưởng lợi từ điều đó?</em> Thịnh vượng thực sự của <strong>${name}</strong> không đến từ những gì bạn tích lũy cho chỉ một mình bạn — mà đến từ sức ảnh hưởng và giá trị bạn tạo ra cho người khác trong quá trình đó.`
      },
      9: {
        energy: `Tháng cá nhân số <strong>9</strong> của <strong>${name}</strong> mang năng lượng của <em>sự hoàn thành, buông bỏ và chuẩn bị cho chu kỳ mới</em>. Đây là tháng cuối trong vòng 9 — và giá trị của nó là ở chỗ bạn có thể kết thúc thật tốt đẹp, không phải bắt đầu thật hùng hổ.`,
        congviec: `<strong>${name}</strong> nên tập trung hoàn thành những gì còn dang dở và giải quyết triệt để những vấn đề tồn đọng trong công việc. Đây không phải lúc khởi động dự án lớn mới hay ký cam kết dài hạn quan trọng — những điều đó hãy chờ đến tháng số 1 tiếp theo. Tháng số 9 là lúc tổng kết, học bài học từ những gì đã qua và chuẩn bị tinh thần cho giai đoạn kế tiếp.`,
        tinhyeu: `Trong tình cảm, tháng số 9 mang đến cho <strong>${name}</strong> cơ hội tha thứ và hàn gắn — với người khác và với chính mình. Những mâu thuẫn cũ nếu chưa được giải quyết sẽ nổi lên rõ hơn trong tháng này. Đây là lời mời để giải quyết chúng lần cuối trước khi bước sang chu kỳ mới. Một cuộc tình không lành mạnh cũng có thể đến hồi kết một cách tự nhiên.`,
        taichinh: `Tháng số 9 không thích hợp cho những quyết định tài chính táo bạo — hãy để dành điều đó cho tháng số 1. <strong>${name}</strong> nên dùng tháng này để tổng kết tài chính, giải quyết các khoản nợ còn tồn đọng và đơn giản hóa các cam kết tài chính. Từ thiện và hào phóng với người khác trong tháng số 9 có giá trị đặc biệt — đây là cách tốt nhất để “đóng vòng” năng lượng tài chính.`,
        giaotiep: `<strong>${name}</strong> sẽ tỏa ra sự sâu sắc và lòng trắc ẩn đặc biệt trong các mối quan hệ xã hội tháng này. Người ta cảm nhận được rằng bạn đã trải qua nhiều và hiểu cuộc đời theo cách khác — điều đó tạo ra sức hút khác biệt. Đây là tháng tốt để tha thứ những ai đã làm bạn tổn thương — không phải vì họ xứng đáng được tha, mà vì bạn xứng đáng được tự do.`,
        hoctap: `Tháng số 9 thuận lợi cho việc học qua <em>phản chiếu và tổng kết</em>. <strong>${name}</strong> có thể viết lại những bài học lớn nhất của năm qua, đọc sách về nhân văn và triết học, hoặc tham gia các khóa học có chiều sâu tinh thần. Dạy lại những gì đã học — cho người khác hoặc qua viết lách — là cách học sâu nhất của tháng số 9.`,
        tongket: `Tháng số 9 kết thúc một chu kỳ với thông điệp đẹp nhất: <em>mọi kết thúc đều là sự chuẩn bị cho một khởi đầu ở tầng cao hơn</em>. <strong>${name}</strong> không cần phải cảm thấy buồn khi một chương khép lại — hãy cảm ơn tất cả những gì đã diễn ra, cả tốt lẫn khó, rồi nhẹ nhàng bước qua ngưỡng cửa. Tháng số 1 đang chờ bạn phía trước.`
      }
    };

    const c = content[n] || content[9];
    const domains = [
      { icon: '💼', label: 'Sự nghiệp & Công việc trong tháng này:', key: 'congviec' },
      { icon: '💕', label: 'Tình yêu & Mối quan hệ trong tháng này:', key: 'tinhyeu' },
      { icon: '💰', label: 'Tài chính trong tháng này:', key: 'taichinh' },
      { icon: '🌟', label: 'Giao tiếp xã hội trong tháng này:', key: 'giaotiep' },
      { icon: '🎓', label: 'Học tập & Phát triển bản thân trong tháng này:', key: 'hoctap' },
      { icon: '💫', label: 'Tổng kết & Thông điệp tháng này:', key: 'tongket' },
    ];
    const domainsHtml = domains.map(d => c[d.key] ? `
      <div class="year-domain-block">
        <div class="domain-title">${d.icon} ${d.label}</div>
        <p class="nar">${c[d.key]}</p>
      </div>` : '').join('');

    return `
    <div class="month-detail-block">
      <div class="month-detail-headline">CHỈ SỐ THÁNG ${label} CỦA BẠN LÀ: ${n}</div>
      <p class="nar">${c.energy}</p>
      ${domainsHtml}
    </div>`;
  },
  6: {
    energy: `Tháng cá nhân số <strong>6</strong> của <strong>${name}</strong> đặt trọng tâm vào <em>gia đình, tình yêu và trách nhiệm sâu sắc</em>. Đây là thời điểm để chăm sóc những mối quan hệ thân thiết nhất và tạo ra sự hài hòa trong không gian sống và làm việc. Vũ trụ giao cho bạn nhiệm vụ thiêng liêng: trở thành chỗ nương tựa.`,
    congviec: `Tháng số 6 thích hợp để <strong>${name}</strong> cải thiện môi trường làm việc, xây dựng văn hóa nhóm tích cực và giải quyết các mâu thuẫn còn tồn đọng. Vai trò người hòa giải, người hỗ trợ và người tạo ra sự gắn kết đang được ủng hộ mạnh. Các nghề liên quan đến chăm sóc, giảng dạy hoặc thiết kế không gian sống đặc biệt thuận lợi trong tháng này.`,
    tinhyeu: `<strong>${name}</strong> đang trong giai đoạn vàng để đầu tư thực sự vào mối quan hệ tình cảm. Những cử chỉ nhỏ — một bữa ăn được nấu với tâm, một cuộc trò chuyện dài, sự hiện diện trọn vẹn — tạo ra ảnh hưởng sâu sắc hơn bất kỳ món quà đắt tiền nào. Đây cũng là tháng để hàn gắn những vết nứt nhỏ trong mối quan hệ trước khi chúng trở nên lớn hơn.`,
    taichinh: `Tháng số 6 có thể mang đến những chi phí liên quan đến gia đình hoặc cải thiện không gian sống — điều đó là hoàn toàn tự nhiên. <strong>${name}</strong> hãy lập kế hoạch ngân sách gia đình dài hạn trong tháng này, bao gồm quỹ dự phòng khẩn cấp. Tránh bỏ bê tài chính cá nhân trong khi chăm lo cho người khác.`,
    giaotiep: `<strong>${name}</strong> được cảm nhận như một người ấm áp, đáng tin cậy và quan tâm thực sự trong xã hội tháng này. Người ta tìm đến bạn để chia sẻ, để được lắng nghe và để cảm thấy an toàn. Hãy cho phép mình trở thành nguồn năng lượng tích cực — nhưng đồng thời học cách đặt ranh giới lành mạnh để không trở thành thùng rác cảm xúc của người khác.`,
    hoctap: `Tháng số 6 thuận lợi để <strong>${name}</strong> học những kỹ năng liên quan đến con người — giao tiếp phi bạo lực, tư vấn tâm lý cơ bản, thiết kế nội thất, ẩm thực, chăm sóc sức khỏe gia đình. Đây cũng là tháng học qua trải nghiệm gia đình — những gì được dạy qua tình huống thực trong cuộc sống thường có chiều sâu hơn những gì học trong sách.`,
    tongket: `Tháng số 6 nhắc <strong>${name}</strong> rằng <em>yêu thương thực sự không yêu cầu sự hoàn hảo — nó chỉ yêu cầu sự hiện diện</em>. Những gì bạn đã cho đi trong tháng này — dù nhỏ bé, dù không ai ghi nhận — đang tạo ra những vòng sóng tình yêu thương lan ra xa hơn bạn tưởng. Hãy nhớ: chăm sóc bản thân cũng là một hành động yêu thương.`
  },
  7: {
    energy: `Tháng cá nhân số <strong>7</strong> mời <strong>${name}</strong> vào <em>sự tĩnh lặng và chiều sâu nội tâm</em>. Đây không phải tháng của hành động ồn ào — vũ trụ đang yêu cầu bạn dừng lại, quan sát và lắng nghe những thông điệp tinh tế hơn. Trực giác của bạn đặc biệt nhạy bén trong tháng số 7.`,
    congviec: `Tháng số 7 không thích hợp để <strong>${name}</strong> ra mắt sản phẩm mới hay thực hiện những bước đột phá lớn — nhưng là lúc lý tưởng để nghiên cứu, phân tích và chuẩn bị. Hãy đào sâu vào chuyên môn, đọc những tài liệu đã để dành, nghiên cứu thị trường hoặc xem lại chiến lược tổng thể. Những quyết định chiến lược sau giai đoạn suy nghĩ kỹ lưỡng trong tháng số 7 thường rất chính xác.`,
    tinhyeu: `Trong tháng số 7, <strong>${name}</strong> có thể cần nhiều không gian riêng hơn bình thường — và đó là nhu cầu hoàn toàn tự nhiên, không phải dấu hiệu của sự xa cách. Hãy giải thích điều này cho người thân. Mặt khác, những cuộc trò chuyện sâu sắc về ý nghĩa cuộc sống và giá trị sẽ tạo ra sự kết nối mạnh mẽ hơn bất kỳ hoạt động xã hội nào.`,
    taichinh: `Tháng số 7 là lúc <strong>${name}</strong> nên nghiên cứu kỹ trước mọi quyết định tài chính quan trọng. Đừng bị thúc đẩy bởi áp lực “cơ hội sắp hết” — hãy dành thời gian phân tích, so sánh và hỏi ý kiến chuyên gia nếu cần. Đây cũng là lúc tốt để xem lại hiệu quả của các khoản đầu tư hiện tại và điều chỉnh nếu cần thiết.`,
    giaotiep: `<strong>${name}</strong> không cần phải là trung tâm của mọi cuộc trò chuyện trong tháng số 7. Chất lượng cao hơn số lượng — một cuộc trò chuyện có chiều sâu với một người phù hợp sẽ có giá trị hơn hàng chục cuộc xã giao bề mặt. Hãy chọn lọc người để tâm sự và không ngần ngại từ chối các sự kiện xã hội không cần thiết trong tháng này.`,
    hoctap: `Đây là một trong những tháng học tập hiệu quả nhất trong năm cho <strong>${name}</strong>. Tháng số 7 ủng hộ việc nghiên cứu chuyên sâu, đọc sách triết học hay tâm linh, theo đuổi một chủ đề bạn thực sự tò mò từ lâu. Thiền định, viết nhật ký và các thực hành nội tâm cũng là hình thức học tập quan trọng trong giai đoạn này.`,
    tongket: `Tháng số 7 kết thúc với lời nhắc: <em>không phải mọi câu hỏi đều cần câu trả lời ngay — và không phải mọi khoảnh khắc yên tĩnh đều cần được lấp đầy bằng hành động</em>. <strong>${name}</strong> đang trong quá trình tích lũy nội lực. Những gì bạn học được và cảm nhận được trong tháng 7 sẽ trở thành la bàn dẫn đường cho những tháng hành động sắp tới.`
  },

  // ════════════════════════════════════════════════════════════════════
  // GENERIC — richer version with better fallback
  // ════════════════════════════════════════════════════════════════════

  generic(label, num, name, kbData) {
    if (!kbData) return `<p class="nar">Chỉ số <strong>${label}</strong> của <strong>${name}</strong> mang rung động số <strong>${num}</strong> — một năng lượng ảnh hưởng sâu sắc đến ${label.toLowerCase()} trong hành trình cuộc đời của bạn.</p>`;

    const d = kbData;
    let txt = '';

    if (d.description || d.meaning || d.theme) {
      txt += `<p class="nar">Trong bản đồ thần số học của <strong>${name}</strong>, ${label.toLowerCase()} mang rung động của con số <strong>${num}</strong>. ${d.description || d.meaning || d.theme}</p>`;
    }

    if (d.strengths) {
      txt += `<p class="nar"><strong>✦ Điểm sáng đặc biệt:</strong> ${d.strengths} Những phẩm chất này không phải ngẫu nhiên — chúng là kết quả của hành trình tâm linh mà linh hồn bạn đã trải qua. Hãy trân trọng và phát huy chúng một cách có chủ đích.</p>`;
    }

    if (d.weaknesses || d.challenge) {
      txt += `<p class="nar"><strong>✦ Thách thức cần vượt qua:</strong> ${d.weaknesses || d.challenge} Đây không phải điểm yếu cố định — đây là những bài học mà cuộc sống đang mời bạn học. Mỗi lần bạn vượt qua một trong số chúng, bạn trở thành một phiên bản mạnh mẽ hơn của chính mình.</p>`;
    }

    if (d.career_fit || d.career) {
      txt += `<p class="nar"><strong>✦ Sự nghiệp &amp; Đóng góp:</strong> ${d.career_fit || d.career} Hãy hướng đến những môi trường nơi năng lượng số ${num} của bạn được nhận ra, được cần đến và được trân trọng.</p>`;
    }

    if (d.love || d.relationship) {
      txt += `<p class="nar"><strong>✦ Tình yêu &amp; Mối quan hệ:</strong> ${d.love || d.relationship}</p>`;
    }

    if (d.advice || d.life_lesson) {
      txt += `<div class="insight-box">💡 <strong>Lời nhắn từ thần số học:</strong> ${d.advice || d.life_lesson}</div>`;
    }

    if (d.famous_people) {
      txt += `<p class="nar" style="color:#64748b;font-style:italic;font-size:0.95rem;">Những nhân vật nổi tiếng cùng rung động này: ${d.famous_people}</p>`;
    }

    return txt || `<p class="nar">Chỉ số <strong>${label}</strong> số <strong>${num}</strong> mang đến cho <strong>${name}</strong> những phẩm chất đặc biệt trên hành trình cuộc đời.</p>`;
  },

  // ════════════════════════════════════════════════════════════════════
  // CHỈ SỐ NGÀY SINH (BIRTHDAY) — Per-number narrative (grouped)
  // NT.birthday[num](name, kbData)
  // ════════════════════════════════════════════════════════════════════
  birthday: {
    1: (name, d) => `<p class="nar">Sinh ngày <strong>1</strong>, <strong>${name}</strong> mang năng lượng nguyên thuỷ của <strong>người tiên phong và sáng lập</strong>. Số 1 là số đầu tiên — biểu tượng của sự khởi đầu, ý chí và cá nhân hóa. Bạn nghĩ khác, hành động khác và thường thấy cách tốt hơn trước khi người khác nhận ra có vấn đề cần giải quyết. Từ nhỏ bạn đã có xu hướng dẫn đầu không phải vì tham vọng mà vì đó là bản năng tự nhiên.</p>
<p class="nar"><strong>✦ Điểm mạnh thiên bẩm:</strong> Khả năng lãnh đạo tự nhiên, tư duy độc lập sắc bén, ý chí không khuất phục, sức sáng tạo mạnh, dũng khí tiên phong. ${d?.strengths ? d.strengths : ''} Bạn không cần ai cho phép để bắt đầu — đó là món quà hiếm gặp mà nhiều người phải mất cả đời để học.</p>
<p class="nar"><strong>✦ Hướng nghề nghiệp:</strong> CEO, doanh nhân, nhà phát minh, chính trị gia, vận động viên chuyên nghiệp, lãnh đạo trong bất kỳ lĩnh vực nào. Bạn làm việc tốt nhất khi được tự chủ hoàn toàn — đừng nhét bản thân vào chiếc hộp người khác thiết kế.</p>
<p class="nar"><strong>✦ Tình yêu & mối quan hệ:</strong> Chủ động và quyết đoán trong tình cảm, cần người bạn đời đủ mạnh để bạn tôn trọng và học cùng. Học cách lắng nghe và nhượng bộ là bài học lớn nhất trong các mối quan hệ của bạn.</p>
<div class="insight-box">💡 <strong>Lời nhắc số 1:</strong> Những điều vĩ đại nhất được xây dựng cùng người khác, không phải một mình. Hãy mở cửa cho người xứng đáng bước vào — đó mới là đỉnh cao của lãnh đạo thực sự.</div>`,

    2: (name, d) => `<p class="nar">Sinh ngày <strong>2</strong>, <strong>${name}</strong> mang năng lượng của <strong>người kết nối, hòa giải và đồng cảm sâu sắc</strong>. Bạn có khả năng cảm nhận cảm xúc của người khác một cách tự nhiên — đôi khi bạn biết điều người khác cảm thấy trước cả khi họ tự nhận ra. Trong khi số 1 mở đường, số 2 là người giữ mọi người lại với nhau bằng sợi dây vô hình của sự đồng cảm và tin tưởng.</p>
<p class="nar"><strong>✦ Điểm mạnh thiên bẩm:</strong> Nhạy cảm cảm xúc tinh tế, trực giác mạnh về con người, tài năng hòa giải xung đột, xây dựng môi trường hài hòa. ${d?.strengths ? d.strengths : ''} Bạn nghe không chỉ bằng tai mà còn bằng trái tim — điều đó làm người khác cảm thấy được nhìn nhận thật sự.</p>
<p class="nar"><strong>✦ Hướng nghề nghiệp:</strong> Nhà tâm lý, cố vấn, nhà ngoại giao, giáo viên, nhạc sĩ, nhà thiết kế, chuyên gia nhân sự. Bạn làm việc tốt nhất trong môi trường hợp tác, không phải cạnh tranh trực tiếp.</p>
<p class="nar"><strong>✦ Tình yêu & mối quan hệ:</strong> Người bạn đời lý tưởng — trung thành, ân cần và luôn đặt đối phương lên hàng đầu. Bài học quan trọng nhất: học cách nêu nhu cầu bản thân — cho đi mà không nhận lại sẽ cạn kiệt ngay cả trái tim rộng lượng nhất.</p>
<div class="insight-box">💡 <strong>Lời nhắc số 2:</strong> Sự nhạy cảm của bạn không phải yếu điểm — đó là siêu năng lực. Hãy xây dựng ranh giới lành mạnh để bảo vệ năng lượng quý giá này trong khi tiếp tục chia sẻ ánh sáng của mình.</div>`,

    3: (name, d) => `<p class="nar">Sinh ngày <strong>3</strong>, <strong>${name}</strong> mang năng lượng của <strong>người sáng tạo và biểu đạt không giới hạn</strong>. Số 3 là số của nghệ thuật, giao tiếp và niềm vui sống. Từ nhỏ bạn đã thích kể chuyện, hát hò, vẽ tranh hay diễn xuất — bất cứ cách nào để biểu đạt những gì sôi sục bên trong. Sự lạc quan tự nhiên của bạn là năng lượng hiếm mà người khác tự nhiên bị thu hút không rõ lý do.</p>
<p class="nar"><strong>✦ Điểm mạnh thiên bẩm:</strong> Sức sáng tạo dồi dào, khiếu hài hước tinh tế, tài ăn nói và truyền cảm hứng, khả năng biến ý tưởng thành nghệ thuật đẹp đẽ. ${d?.strengths ? d.strengths : ''} Bạn có thể làm cho không khí nặng nề nhất trở nên nhẹ nhàng chỉ bằng sự hiện diện của mình.</p>
<p class="nar"><strong>✦ Hướng nghề nghiệp:</strong> Nghệ sĩ, nhà văn, diễn viên, MC, marketing, thiết kế, giáo viên sáng tạo, đầu bếp. Bạn phát sáng nhất khi được biểu đạt tự do — đừng nhốt bản thân trong vai trò đòi hỏi sự im lặng và tuân thủ cứng nhắc.</p>
<p class="nar"><strong>✦ Tình yêu & mối quan hệ:</strong> Lãng mạn và tự nhiên trong tình cảm, tạo ra những khoảnh khắc đáng nhớ. Cần người bạn đời biết trân trọng sự sáng tạo và không cố nhốt bạn trong khuôn. Ổn định cảm xúc là bài tập lớn nhất.</p>
<div class="insight-box">💡 <strong>Lời nhắc số 3:</strong> Đừng để nỗi sợ bị phán xét ghìm giọng nói sáng tạo của bạn lại. Thế giới cần chính xác góc nhìn độc đáo và tinh thần lạc quan mà chỉ bạn mới có được.</div>`,

    4: (name, d) => `<p class="nar">Sinh ngày <strong>4</strong>, <strong>${name}</strong> mang năng lượng của <strong>người xây dựng nền tảng vững chắc</strong>. Số 4 là viên đá tảng trong thần số học — cứng rắn, đáng tin cậy hoàn toàn. Bạn có trực giác mạnh về những gì bền vững và những gì chỉ là hào nhoáng. Ở một thế giới nhiều người chỉ nói, bạn là người thực sự làm — và làm đến nơi đến chốn. Sự cẩn thận và tỉ mỉ của bạn không phải nhược điểm; đó là sự toàn vẹn mà ít ai có được.</p>
<p class="nar"><strong>✦ Điểm mạnh thiên bẩm:</strong> Kỷ luật tự giác, tổ chức có hệ thống, trung thành tuyệt đối, khả năng xây dựng hệ thống bền vững từ không có gì. ${d?.strengths ? d.strengths : ''} Khi bạn hứa điều gì, đó không phải lời nói suông — đó là cam kết thực sự.</p>
<p class="nar"><strong>✦ Hướng nghề nghiệp:</strong> Kỹ sư, kiến trúc sư, kế toán, quản lý dự án, bác sĩ, quân đội, y tế. Bạn làm việc tốt nhất khi có cấu trúc rõ ràng và kết quả cụ thể — môi trường mơ hồ làm bạn mất phương hướng.</p>
<p class="nar"><strong>✦ Tình yêu & mối quan hệ:</strong> Trung thành và cam kết dài hạn là bản chất. Thể hiện tình yêu qua hành động thực tế hơn lời nói hoa mỹ. Học cách biểu đạt cảm xúc cởi mở hơn — người thân cần biết bạn đang yêu họ đến mức nào.</p>
<div class="insight-box">💡 <strong>Lời nhắc số 4:</strong> Cuộc sống đẹp nhất thường xảy ra ở những khoảnh khắc ngẫu hứng. Hãy thỉnh thoảng để 20% không gian cho những điều không lên lịch — linh hoạt không phải là yếu đuối.</div>`,

    5: (name, d) => `<p class="nar">Sinh ngày <strong>5</strong>, <strong>${name}</strong> mang năng lượng của <strong>người tự do và đa tài không ngừng khám phá</strong>. Số 5 là số của sự chuyển động — không có gì giữ bạn lại lâu, không phải vì thiếu cam kết mà vì trí tò mò của bạn lớn hơn bất kỳ ranh giới nào. Bạn học hỏi từ mọi trải nghiệm, mọi nền văn hóa, mọi con người — và khả năng thích nghi của bạn là siêu năng lực thực sự.</p>
<p class="nar"><strong>✦ Điểm mạnh thiên bẩm:</strong> Linh hoạt phi thường, đa năng, sức hấp dẫn tự nhiên, kết nối với mọi loại người, tư duy tiến bộ và học hỏi nhanh. ${d?.strengths ? d.strengths : ''} Bạn có thể bước vào phòng lạ và trong 10 phút đã khiến mọi người cảm thấy như đã biết nhau từ lâu.</p>
<p class="nar"><strong>✦ Hướng nghề nghiệp:</strong> Nhà báo, hướng dẫn viên du lịch, bán hàng, marketing, ngôn ngữ học, diễn viên. Đừng chọn nghề vì an toàn — hãy chọn vì nó thật sự đốt cháy đam mê bên trong.</p>
<p class="nar"><strong>✦ Tình yêu & mối quan hệ:</strong> Hấp dẫn và thú vị trong tình cảm, cần người bạn đời hiểu và tôn trọng nhu cầu tự do. Khi thực sự cam kết, bạn rất trung thành — hãy lựa chọn cẩn thận người mình cam kết cùng.</p>
<div class="insight-box">💡 <strong>Lời nhắc số 5:</strong> Tự do đẹp nhất không phải là không có cam kết — mà là có đủ trí tuệ để chọn những cam kết xứng đáng với cả cuộc hành trình của mình.</div>`,

    6: (name, d) => `<p class="nar">Sinh ngày <strong>6</strong>, <strong>${name}</strong> mang năng lượng của <strong>người chăm sóc, bảo vệ và tạo ra sự hài hòa</strong>. Số 6 rung động ở tần số của tình yêu thương — bạn biểu hiện điều đó qua trách nhiệm sâu sắc với gia đình, bạn bè và cộng đồng. Bạn không chỉ quan tâm — bạn thực sự hành động để người bạn yêu thương được ổn thỏa. Đây là tình yêu theo nghĩa đích thực nhất.</p>
<p class="nar"><strong>✦ Điểm mạnh thiên bẩm:</strong> Lòng nhân ái, thiên phú nghệ thuật và thẩm mỹ, trách nhiệm sâu, tận tụy vô điều kiện, tạo ra môi trường ấm áp và an toàn. ${d?.strengths ? d.strengths : ''} Người sinh ngày 6 làm cho ngôi nhà, cộng đồng và nơi làm việc trở nên tốt hơn chỉ bằng sự hiện diện của mình.</p>
<p class="nar"><strong>✦ Hướng nghề nghiệp:</strong> Y tế, giáo dục, tư vấn tâm lý, thiết kế nội thất, nấu ăn, công tác xã hội. Bạn cần cảm thấy công việc mình làm có ý nghĩa — không chỉ kiếm tiền đơn thuần.</p>
<p class="nar"><strong>✦ Tình yêu & mối quan hệ:</strong> Người bạn đời tận tâm và chu đáo nhất. Đặt gia đình lên hàng đầu và thường hy sinh nhiều cho người thân. Bài học quan trọng: học cách nhận về sau khi cho đi — tình yêu lành mạnh là trao đổi hai chiều.</p>
<div class="insight-box">💡 <strong>Lời nhắc số 6:</strong> Hãy nhớ chăm sóc bản thân như cách bạn chăm sóc người khác. Bạn không thể rót từ chiếc bình rỗng — nuôi dưỡng chính mình cũng là trách nhiệm thiêng liêng.</div>`,

    7: (name, d) => `<p class="nar">Sinh ngày <strong>7</strong>, <strong>${name}</strong> mang năng lượng của <strong>người tìm kiếm tri thức và sự thật sâu xa</strong>. Số 7 là số của trí tuệ, nội tâm và trực giác tâm linh. Từ nhỏ bạn đã đặt những câu hỏi mà người lớn không dễ trả lời — và bạn không bao giờ thỏa mãn với những câu trả lời bề mặt. Bạn muốn đi đến tận cùng, hiểu nguyên nhân sâu xa và nhìn thấy bức tranh đằng sau bức tranh.</p>
<p class="nar"><strong>✦ Điểm mạnh thiên bẩm:</strong> Tư duy phân tích sắc bén, trực giác tâm linh, khả năng nghiên cứu chuyên sâu, kiên nhẫn trong việc tìm ra sự thật, độc lập trí tuệ. ${d?.strengths ? d.strengths : ''} Khi chuyên sâu vào một lĩnh vực, thường đạt đến mức hiểu biết mà ít người chạm đến được.</p>
<p class="nar"><strong>✦ Hướng nghề nghiệp:</strong> Nhà khoa học, triết học, tâm linh, nghiên cứu chuyên sâu, lập trình, phân tích dữ liệu, tâm lý học, bác sĩ chuyên khoa. Bạn cần công việc kích thích trí não liên tục — sự nhàm chán là kẻ thù lớn nhất.</p>
<p class="nar"><strong>✦ Tình yêu & mối quan hệ:</strong> Cần thời gian để mở lòng nhưng khi đã tin tưởng, rất sâu sắc và trung thành. Cần không gian riêng tư để tái tạo năng lượng — đây là nhu cầu thực sự, không phải từ chối.</p>
<div class="insight-box">💡 <strong>Lời nhắc số 7:</strong> Sự thật bạn tìm kiếm không chỉ ở trong sách — đôi khi nó đến qua những mối quan hệ sâu sắc mà bạn cho phép mình trải nghiệm. Đừng để trí tuệ trở thành hàng rào ngăn cách sự kết nối.</div>`,

    8: (name, d) => `<p class="nar">Sinh ngày <strong>8</strong>, <strong>${name}</strong> mang năng lượng của <strong>người tạo ra sự thịnh vượng và ảnh hưởng lớn</strong>. Số 8 là con số của quyền năng, tài chính và khả năng quản lý nguồn lực ở quy mô lớn. Bạn có bản năng tự nhiên về kinh doanh và nhìn thấy cơ hội trong khi người khác chỉ thấy rủi ro. Tiền bạc và thành công không phải điều bạn xấu hổ — chúng là công cụ để tạo ra tác động thực sự.</p>
<p class="nar"><strong>✦ Điểm mạnh thiên bẩm:</strong> Tư duy chiến lược, bản năng kinh doanh mạnh, quản lý nguồn lực hiệu quả, sức kiên trì đạt mục tiêu lớn, lãnh đạo quyết đoán. ${d?.strengths ? d.strengths : ''} Bạn biết biến khái niệm trừu tượng thành kết quả cụ thể — kỹ năng hiếm nhất trong thế giới kinh doanh.</p>
<p class="nar"><strong>✦ Hướng nghề nghiệp:</strong> CEO, nhà đầu tư, ngân hàng, bất động sản, luật sư kinh doanh, quản lý tài sản. Bạn cần vai trò có quyền ra quyết định thực sự — đừng lãng phí năng lực điều hành ở vị trí báo cáo quá lâu.</p>
<p class="nar"><strong>✦ Tình yêu & mối quan hệ:</strong> Ổn định tài chính và cam kết dài hạn. Thể hiện tình yêu qua việc đảm bảo cuộc sống vật chất cho người thân. Học cách biểu đạt tình cảm qua lời nói nhiều hơn — người thân cần cả hai.</p>
<div class="insight-box">💡 <strong>Lời nhắc số 8:</strong> Khi bạn dùng sức mạnh để nâng đỡ người khác — không chỉ tích lũy cho bản thân — bạn sẽ trải nghiệm vòng tuần hoàn thịnh vượng ở tầng sâu và bền nhất.</div>`,

    9: (name, d) => `<p class="nar">Sinh ngày <strong>9</strong>, <strong>${name}</strong> mang năng lượng của <strong>người nhân đạo với tầm nhìn rộng lớn vượt ra cái tôi cá nhân</strong>. Số 9 là con số hoàn thiện — tổng hợp trí tuệ của tất cả các con số trước đó. Bạn có lòng trắc ẩn bao la và tầm nhìn vượt qua những giới hạn nhỏ bé. Khi người khác chỉ nhìn vào bức tranh nhỏ, bạn đã thấy bức tranh toàn cảnh và lo lắng cho điều lớn hơn bản thân.</p>
<p class="nar"><strong>✦ Điểm mạnh thiên bẩm:</strong> Lòng trắc ẩn bao la, tầm nhìn nhân đạo, khả năng truyền cảm hứng sâu sắc, trí tuệ cảm xúc cao, tài năng nghệ thuật mang tính nhân văn. ${d?.strengths ? d.strengths : ''} Bạn hiểu nỗi đau của người khác theo cách không cần giải thích — đó là sức mạnh chữa lành hiếm có.</p>
<p class="nar"><strong>✦ Hướng nghề nghiệp:</strong> Nhà văn, nghệ sĩ, nhà hoạt động xã hội, bác sĩ, giáo viên, nhà trị liệu tâm lý, tổ chức phi lợi nhuận. Bạn cần công việc có ý nghĩa vượt qua thu nhập — động lực lớn nhất là đóng góp thực sự.</p>
<p class="nar"><strong>✦ Tình yêu & mối quan hệ:</strong> Lãng mạn, hào phóng và tha thứ. Cần người bạn đời chia sẻ giá trị nhân đạo và chiều sâu tâm hồn. Học cách buông bỏ kỳ vọng — tình yêu của bạn đẹp nhất khi vô điều kiện thực sự.</p>
<div class="insight-box">💡 <strong>Lời nhắc số 9:</strong> Bạn không thể thay đổi toàn bộ thế giới trong một ngày — nhưng bạn có thể thay đổi thế giới của một người. Và đó đã là sứ mệnh đủ lớn và đủ đẹp rồi.</div>`,

    10: (name, d) => `<p class="nar">Sinh ngày <strong>10</strong>, <strong>${name}</strong> mang năng lượng đặc biệt của <strong>số 10 — Người Tiên Phong ở Tầng Hoàn Chỉnh</strong>. Ngày 10 không đơn giản chỉ là số 1 rút gọn. Số 0 đi kèm mang ý nghĩa sâu xa: tiềm năng vô hạn và sự hoàn toàn. Bạn không chỉ biết khởi đầu — bạn biết khởi đầu ở tầng cao hơn, với sự trọn vẹn mà ít người đạt được ngay từ năng lực thiên bẩm. ${d?.description ? d.description : ''}</p>
<p class="nar"><strong>✦ Điểm mạnh thiên bẩm:</strong> Lãnh đạo tự nhiên được tăng cường bởi chiều sâu và sự toàn vẹn, năng lực khởi xướng những điều hoàn toàn mới, tư duy sáng tạo kết hợp khả năng thực thi. ${d?.strengths ? d.strengths : ''} Người sinh ngày 10 thường có thể nhìn thấy cả bức tranh lớn lẫn từng chi tiết nhỏ cùng một lúc — sự kết hợp cực kỳ quý giá.</p>
<p class="nar"><strong>✦ Hướng nghề nghiệp:</strong> Nhà sáng lập, CEO, nhà phát minh, nghiên cứu đột phá, lãnh đạo với tầm nhìn dài hạn kết hợp năng lực bắt đầu từ trang trắng. Bạn mở ra những trang mới, không chỉ nối tiếp những gì đã có.</p>
<p class="nar"><strong>✦ Tình yêu & mối quan hệ:</strong> Chủ động trong tình cảm nhưng cần người bạn đời hiểu sự độc lập của bạn là bản chất, không phải xa cách. Người xứng đáng là người có thể đứng ngang tầm với bạn, không cần được dẫn dắt mọi lúc.</p>
<div class="insight-box">💡 <strong>Lời nhắc số 10:</strong> Bạn không cần sự cho phép của ai để bắt đầu — trực giác tiên phong là bản năng thiên bẩm. Hãy tin vào nó, đặc biệt những lần đầu tiên khi không ai hiểu tầm nhìn của mình.</div>`,

    11: (name, d) => `<p class="nar">Sinh ngày <strong>11</strong>, <strong>${name}</strong> mang một trong những năng lượng quý hiếm nhất: <strong>Số Chủ 11 — Người Trực Giác và Truyền Cảm Hứng Tâm Linh</strong>. Số 11 không được rút gọn trong ngữ cảnh ngày sinh — nó là số nguyên vẹn của chiều sâu tâm linh. Từ nhỏ bạn đã nhận ra những điều mà người khác bỏ qua — năng lượng tinh tế, sự thật chưa được nói thành lời. Bạn "cảm nhận" thế giới ở một tần số cao hơn người bình thường. ${d?.description ? d.description : ''}</p>
<p class="nar"><strong>✦ Điểm mạnh thiên bẩm:</strong> Trực giác cực kỳ mạnh, khả năng chữa lành và truyền cảm hứng, thiên phú tâm linh sâu sắc, nhìn thấy tiềm năng ẩn trong người khác, tài năng trong nghệ thuật, âm nhạc hay ngôn ngữ. ${d?.strengths ? d.strengths : ''} Sứ mệnh của bạn là cầu nối giữa thế giới vật chất và những tầm sâu hơn.</p>
<p class="nar"><strong>✦ Hướng nghề nghiệp:</strong> Diễn giả, nhà lãnh đạo tinh thần, nghệ sĩ, nhà tâm lý, huấn luyện viên cuộc sống, nhà trị liệu. Bạn ảnh hưởng đến người khác theo cách họ thường không giải thích được nhưng cảm nhận rất rõ.</p>
<p class="nar"><strong>✦ Tình yêu & mối quan hệ:</strong> Sâu sắc và lãng mạn, cần sự kết nối tâm linh thực sự. Rất nhạy cảm với năng lượng xung quanh — môi trường quan hệ ảnh hưởng lớn đến sức khỏe tinh thần. Bảo vệ năng lượng là ưu tiên hàng đầu.</p>
<div class="insight-box">💡 <strong>Lời nhắc số 11:</strong> Hãy học cách bảo vệ năng lượng của mình — bạn không thể cho đi ánh sáng nếu không nuôi dưỡng nguồn sáng bên trong. Cho phép bản thân được nghỉ ngơi và nạp lại khi cần.</div>`,

    12: (name, d) => `<p class="nar">Sinh ngày <strong>12</strong>, <strong>${name}</strong> mang năng lượng kép của <strong>số 1 lãnh đạo và số 2 đồng cảm — nhà lãnh đạo biết lắng nghe</strong>. Đây là sự kết hợp hiếm gặp: sức mạnh khởi đầu của 1 được điều hòa bởi trực giác và đồng cảm của 2. Kết quả là nhà lãnh đạo biết lắng nghe — điều mà hầu hết người có năng lực lãnh đạo phải học cả đời mới có được, nhưng bạn có được từ bẩm sinh. ${d?.description ? d.description : ''}</p>
<p class="nar"><strong>✦ Điểm mạnh thiên bẩm:</strong> Dẫn dắt bằng cảm xúc, trực giác nhạy bén trong mối quan hệ, tài năng ngoại giao, cân bằng giữa hành động quyết đoán và chiêm nghiệm. ${d?.strengths ? d.strengths : ''} Bạn có thể đưa ra quyết định cứng rắn mà vẫn giữ lòng nhân ái — phẩm chất của những nhà lãnh đạo thực sự được yêu mến.</p>
<p class="nar"><strong>✦ Hướng nghề nghiệp:</strong> Quản lý nhóm, cố vấn lãnh đạo, nhà ngoại giao, tư vấn tổ chức, nhà điều hòa xung đột. Bạn tỏa sáng khi được kết hợp sự dẫn dắt với sự kết nối con người thực sự.</p>
<p class="nar"><strong>✦ Tình yêu & mối quan hệ:</strong> Quan tâm sâu sắc và đủ mạnh để dẫn dắt. Đôi khi bị kéo giữa nhu cầu của bản thân và nhu cầu của người khác — học cách cân bằng hai điều đó mà không hy sinh điều nào.</p>
<div class="insight-box">💡 <strong>Lời nhắc số 12:</strong> Lãnh đạo bằng trái tim là điểm mạnh độc đáo của bạn — đừng chọn một trong hai giữa sức mạnh và tình yêu thương. Hãy để cả hai cùng hướng dẫn bạn đi tới.</div>`,

    13: (name, d) => `<p class="nar">Sinh ngày <strong>13</strong>, <strong>${name}</strong> mang năng lượng của <strong>số 1 tiên phong và số 3 sáng tạo — người khởi xướng đột phá</strong>. Ngày 13 mang tiếng xấu trong văn hóa đại chúng nhưng trong thần số học đây là sự kết hợp đầy sức mạnh. Bạn không chỉ có ý tưởng — bạn còn có khả năng diễn đạt và truyền đạt chúng một cách hấp dẫn. Số tổng hợp (4) cho thấy sáng tạo của bạn cần và có nền tảng thực thi vững chắc. ${d?.description ? d.description : ''}</p>
<p class="nar"><strong>✦ Điểm mạnh thiên bẩm:</strong> Sáng tạo mạnh mẽ kết hợp năng lực thực thi, biểu đạt ý tưởng thu hút và thuyết phục, dũng khí khởi đầu những điều chưa ai thử. ${d?.strengths ? d.strengths : ''} Bạn có thể tạo ra cả nghệ thuật lẫn hệ thống — không phải ai cũng có được cả hai.</p>
<p class="nar"><strong>✦ Hướng nghề nghiệp:</strong> Nhà khởi nghiệp sáng tạo, nghệ sĩ có tư duy kinh doanh, nhà văn, giám đốc sáng tạo, kinh doanh nghệ thuật. Cần môi trường vừa cho sáng tạo tự do vừa thấy kết quả hữu hình.</p>
<p class="nar"><strong>✦ Tình yêu & mối quan hệ:</strong> Nhiệt tình và sáng tạo trong tình cảm, tạo ra những trải nghiệm đáng nhớ. Thách thức là duy trì năng lượng ổn định sau khi giai đoạn hứng khởi ban đầu qua đi.</p>
<div class="insight-box">💡 <strong>Lời nhắc số 13:</strong> Hãy chọn một dự án và đưa nó từ ý tưởng đến hiện thực hoàn chỉnh trước khi chuyển sang cái tiếp theo. Kỷ luật của số 4 là người bạn giúp sáng tạo tạo ra di sản thực sự.</div>`,

    14: (name, d) => `<p class="nar">Sinh ngày <strong>14</strong>, <strong>${name}</strong> mang năng lượng của <strong>số 1 và số 4 tạo ra số 5 — tự do được xây trên nền tảng kỷ luật</strong>. Ngày 14 là sự kết hợp thú vị: bạn có khát khao tự do và thay đổi của số 5, nhưng được hậu thuẫn bởi kỷ luật của số 4 và ý chí tiên phong của số 1. Điều này tạo ra người vừa thích phiêu lưu vừa biết xây dựng nền tảng — một kết hợp hiếm và rất mạnh mẽ. ${d?.description ? d.description : ''}</p>
<p class="nar"><strong>✦ Điểm mạnh thiên bẩm:</strong> Thích nghi phi thường, học hỏi nhanh qua thực tiễn, kỷ luật ẩn dưới vẻ ngoài linh hoạt, cân bằng giữa tư duy tự do và thực hành cụ thể. ${d?.strengths ? d.strengths : ''} Bạn có thể bước vào môi trường mới và nhanh chóng tạo ra giá trị khi người khác còn đang thích nghi.</p>
<p class="nar"><strong>✦ Hướng nghề nghiệp:</strong> Kinh doanh đa lĩnh vực, bán hàng, tư vấn chiến lược, truyền thông, quản lý thay đổi. Bạn làm tốt nhất ở công việc kết hợp sự linh hoạt với kết quả cụ thể đo lường được.</p>
<p class="nar"><strong>✦ Tình yêu & mối quan hệ:</strong> Hấp dẫn và đa dạng trong tình cảm. Cần người bạn đời tôn trọng sự tự do của bạn mà không cảm thấy bất an. Khi tìm được người phù hợp, bạn trung thành và ổn định hơn vẻ ngoài nhiều.</p>
<div class="insight-box">💡 <strong>Lời nhắc số 14:</strong> Hành trình của bạn cần đủ cấu trúc để định hướng và đủ tự do để phát triển — hãy tìm điểm cân bằng đó trong mọi lĩnh vực của cuộc đời mình.</div>`,

    15: (name, d) => `<p class="nar">Sinh ngày <strong>15</strong>, <strong>${name}</strong> mang năng lượng của <strong>số 1, số 5 và số 6 — người sáng tạo với trái tim yêu thương ấm áp</strong>. Ngày 15 đặc biệt vì kết hợp sức khởi động của 1, tự do của 5 và tình yêu thương của 6 — tạo ra người có thiên phú nghệ thuật mạnh mẽ nhưng không bao giờ quên trách nhiệm với những người mình yêu. Bạn có gu thẩm mỹ tự nhiên và khả năng biến mọi không gian trở nên đẹp hơn. ${d?.description ? d.description : ''}</p>
<p class="nar"><strong>✦ Điểm mạnh thiên bẩm:</strong> Thẩm mỹ tinh tế, tình yêu thương chân thành, tài năng nghệ thuật và sáng tạo, tạo ra sự hài hòa trong các mối quan hệ, sức thu hút tự nhiên. ${d?.strengths ? d.strengths : ''} Người sinh ngày 15 thường có "từ trường" đặc biệt — người ta muốn ở gần bạn mà không bao giờ hiểu tại sao.</p>
<p class="nar"><strong>✦ Hướng nghề nghiệp:</strong> Nghệ thuật, thiết kế, âm nhạc, thời trang, làm đẹp, tư vấn và chăm sóc, môi trường kết hợp vẻ đẹp với ý nghĩa sâu xa hơn thuần túy thẩm mỹ.</p>
<p class="nar"><strong>✦ Tình yêu & mối quan hệ:</strong> Lãng mạn và tận tâm, tạo ra bầu không khí ấm áp. Đôi khi quá quan tâm đến người khác mà quên mất nhu cầu của bản thân — tình yêu thương bắt đầu từ chính bạn.</p>
<div class="insight-box">💡 <strong>Lời nhắc số 15:</strong> Vẻ đẹp bạn tạo ra xung quanh mình là món quà dành cho thế giới — đừng đánh giá thấp sức mạnh của tầm nhìn sáng tạo và trái tim yêu thương độc đáo đó.</div>`,

    16: (name, d) => `<p class="nar">Sinh ngày <strong>16</strong>, <strong>${name}</strong> mang năng lượng của <strong>số 1, số 6 và số 7 — trí tuệ sâu kết hợp trái tim ấm áp nhân từ</strong>. Ngày 16 là một trong những ngày sinh phức tạp và giàu chiều sâu nhất. Bạn mang sức mạnh khởi đầu của 1, tình yêu thương của 6 và trí tuệ phân tích của 7 trong cùng một người. Kết quả là khả năng nhìn thấu bản chất sự vật trong khi vẫn giữ được lòng nhân ái — sự kết hợp hiếm gặp. ${d?.description ? d.description : ''}</p>
<p class="nar"><strong>✦ Điểm mạnh thiên bẩm:</strong> Phân tích đa chiều và sâu sắc, trực giác tâm linh mạnh, kết hợp lý trí và cảm xúc một cách tinh tế, tìm kiếm sự thật kể cả khi khó chịu. ${d?.strengths ? d.strengths : ''} Bạn có thể nhìn thấy điều người khác bỏ lỡ vì họ chỉ quan sát bề mặt mà không đào sâu.</p>
<p class="nar"><strong>✦ Hướng nghề nghiệp:</strong> Nghiên cứu, tâm lý học, triết học, khoa học, phân tích chiều sâu, trị liệu, các ngành kết hợp trí tuệ và chiều sâu cảm xúc. Bạn không làm tốt với công việc bề mặt — bạn cần được đào sâu thực sự.</p>
<p class="nar"><strong>✦ Tình yêu & mối quan hệ:</strong> Sâu sắc và trung thành khi đã tin tưởng. Thử thách lớn nhất là học cách mở lòng sớm hơn — vì đôi khi sự chắc chắn chỉ đến sau khi bạn đã chia sẻ rồi.</p>
<div class="insight-box">💡 <strong>Lời nhắc số 16:</strong> Niềm tin và sự hiểu biết sâu sắc của bạn là tài sản quý — hãy chia sẻ chúng với thế giới thay vì giữ kín bên trong. Ánh sáng chỉ chữa lành khi được chiếu ra ngoài.</div>`,

    17: (name, d) => `<p class="nar">Sinh ngày <strong>17</strong>, <strong>${name}</strong> mang sức mạnh đáng kể của <strong>số 1 và số 7 tạo số 8 — chiến lược gia thịnh vượng</strong>. Ngày 17 kết hợp ý chí tiên phong của 1 và trí tuệ phân tích sắc bén của 7 — tạo ra bộ não chiến lược mạnh với năng lực thực thi của số 8. Bạn không chỉ nhìn thấy cơ hội — bạn còn phân tích rủi ro, lên kế hoạch và thực thi với kỷ luật cao. Đây là tổ hợp lý tưởng cho những người định hình ngành và tạo ra di sản kinh doanh. ${d?.description ? d.description : ''}</p>
<p class="nar"><strong>✦ Điểm mạnh thiên bẩm:</strong> Tư duy chiến lược kết hợp trực giác phân tích, bản năng kinh doanh vật chất, quản lý nguồn lực và sức bền dài hạn để đạt mục tiêu lớn. ${d?.strengths ? d.strengths : ''} Bạn tốt nhất ở những quyết định quan trọng khi người khác đang hoảng loạn — đó là khi bạn bình tĩnh nhất.</p>
<p class="nar"><strong>✦ Hướng nghề nghiệp:</strong> Chiến lược gia kinh doanh, nhà đầu tư, CEO, tư vấn chiến lược cấp cao, bất động sản, tài chính. Bạn cần vị trí đòi hỏi tư duy cả chiều rộng lẫn chiều sâu cùng một lúc.</p>
<p class="nar"><strong>✦ Tình yêu & mối quan hệ:</strong> Cam kết và ổn định trong tình cảm. Ít nói nhưng hành động nhiều — người thân cần học cách đọc tình yêu qua việc làm của bạn. Học cách dành thời gian hiện diện hoàn toàn chứ không chỉ "có mặt".</p>
<div class="insight-box">💡 <strong>Lời nhắc số 17:</strong> Sức mạnh thực sự không chỉ nằm ở những gì bạn tích lũy — mà ở tác động sâu rộng mà bạn tạo ra với những gì mình đang có trong tay.</div>`,

    18: (name, d) => `<p class="nar">Sinh ngày <strong>18</strong>, <strong>${name}</strong> mang năng lượng đặc biệt của <strong>số 1, số 8 và số 9 — nhà lãnh đạo nhân đạo có tầm ảnh hưởng xã hội</strong>. Ngày 18 kết hợp ba nguồn năng lượng: ý chí lãnh đạo của 1, sức mạnh vật chất và điều hành của 8, và tầm nhìn nhân đạo của 9. Kết quả là người có tiềm năng tạo ra tác động thực sự trong cộng đồng và xã hội — không theo cách nhỏ, mà theo cách thay đổi cấu trúc thực sự. ${d?.description ? d.description : ''}</p>
<p class="nar"><strong>✦ Điểm mạnh thiên bẩm:</strong> Lòng trắc ẩn kết hợp năng lực lãnh đạo thực chiến, tầm nhìn xã hội rộng lớn, khả năng tạo ảnh hưởng ở quy mô cộng đồng, tài năng trong các lĩnh vực nhân văn. ${d?.strengths ? d.strengths : ''} Bạn có thể thực sự làm điều gì đó có tác động lâu dài cho người khác, không chỉ nói về việc đó.</p>
<p class="nar"><strong>✦ Hướng nghề nghiệp:</strong> Lãnh đạo tổ chức phi lợi nhuận, chính sách xã hội, y tế công cộng, giáo dục cải cách, đầu tư tác động, các vị trí lãnh đạo giao thoa giữa kinh doanh và xã hội.</p>
<p class="nar"><strong>✦ Tình yêu & mối quan hệ:</strong> Sâu sắc và tận tâm, nhưng đôi khi sứ mệnh xã hội rộng lớn khiến ít hiện diện trong mối quan hệ cá nhân. Hãy nhớ: người thân cũng cần bạn — không chỉ thế giới cần bạn.</p>
<div class="insight-box">💡 <strong>Lời nhắc số 18:</strong> Sứ mệnh của bạn không nhỏ — hãy tin rằng những đóng góp của mình, dù nhỏ hay lớn, đều có thể thay đổi cuộc đời của người khác theo những cách bạn không bao giờ biết hết.</div>`,

    19: (name, d) => `<p class="nar">Sinh ngày <strong>19</strong>, <strong>${name}</strong> mang năng lượng đặc biệt của <strong>số 1 và số 9 — hoàn thành nghiệp cũ, tiên phong ở tầng cao hơn</strong>. Ngày 19 kết hợp bản năng khởi đầu của 1 và trí tuệ tổng hợp của 9 — tạo ra người có thể dẫn đường bằng sự phục vụ, không phải bằng cái tôi. Đây là một trong những ngày sinh mang bài học nghiệp quan trọng: bài học về cân bằng giữa tự lập và nhận sự giúp đỡ từ người khác. ${d?.description ? d.description : ''}</p>
<p class="nar"><strong>✦ Điểm mạnh thiên bẩm:</strong> Ý chí mạnh mẽ, khả năng tự lập và vượt qua thử thách, tầm nhìn rộng, truyền cảm hứng qua câu chuyện cuộc đời của chính mình. ${d?.strengths ? d.strengths : ''} Những thử thách bạn vượt qua là bài học bạn chia sẻ để người khác không phải đi con đường khó như bạn.</p>
<p class="nar"><strong>✦ Hướng nghề nghiệp:</strong> Cố vấn, nhà lãnh đạo có chiều sâu, tư vấn phát triển cá nhân, diễn giả, nhà từ thiện, các vị trí dẫn đường bằng trí tuệ tích lũy từ trải nghiệm thực.</p>
<p class="nar"><strong>✦ Tình yêu & mối quan hệ:</strong> Mạnh mẽ và tự lập trong tình cảm, đôi khi quá khó nhận sự giúp đỡ hay thừa nhận nhu cầu. Bài học lớn nhất: để người thân thực sự yêu bạn bằng cách cho phép họ chăm sóc bạn đôi khi.</p>
<div class="insight-box">💡 <strong>Lời nhắc số 19:</strong> Sức mạnh thực sự đến từ việc biết khi nào cần nhờ giúp đỡ — không phải từ việc làm tất cả một mình. Mở cửa để nhận cũng là một dạng dũng cảm.</div>`,

    20: (name, d) => `<p class="nar">Sinh ngày <strong>20</strong>, <strong>${name}</strong> mang năng lượng thuần khiết của <strong>số 2 được khuếch đại bởi số 0 — nhạy cảm sâu và tiềm năng vô hạn</strong>. Số 0 bên cạnh số 2 làm cho trực giác, đồng cảm và tài năng hòa giải của số 2 trở nên sâu sắc và mạnh mẽ hơn bất thường. Bạn có thể "đọc phòng" chỉ trong vài giây và biết cần làm gì để mang lại sự hài hòa cho cả nhóm. ${d?.description ? d.description : ''}</p>
<p class="nar"><strong>✦ Điểm mạnh thiên bẩm:</strong> Trực giác đặc biệt nhạy, cảm nhận năng lượng của người khác, tài năng hòa giải tự nhiên, tạo ra những kết nối bền vững giữa người với người. ${d?.strengths ? d.strengths : ''} Bạn có thứ mà nhiều người phải học cả đời mới có: khả năng thực sự lắng nghe.</p>
<p class="nar"><strong>✦ Hướng nghề nghiệp:</strong> Cố vấn tâm lý, hòa giải xung đột, nhân sự, ngoại giao, tư vấn gia đình. Bạn làm tốt nhất trong công việc đòi hỏi sự tinh tế trong giao tiếp và kết nối con người sâu sắc.</p>
<p class="nar"><strong>✦ Tình yêu & mối quan hệ:</strong> Người bạn đời ân cần và trực giác nhạy về nhu cầu của người yêu. Cần học cách đặt ra ranh giới lành mạnh để bảo vệ sức khỏe tâm lý của chính mình.</p>
<div class="insight-box">💡 <strong>Lời nhắc số 20:</strong> Khả năng thực sự lắng nghe của bạn là món quà hiếm — hãy trân trọng và phát triển nó, nhưng đừng quên lắng nghe chính mình trước tiên.</div>`,

    21: (name, d) => `<p class="nar">Sinh ngày <strong>21</strong>, <strong>${name}</strong> mang năng lượng của <strong>số 2 và số 1 giao thoa tạo số 3 — kết nối người với người qua biểu đạt tinh tế</strong>. Ngày 21 hơi khác với ngày 12: ở đây số 2 (cảm xúc và đồng cảm) dẫn đầu, sau đó được số 1 (ý chí và sáng tạo) củng cố. Kết quả là khả năng giao tiếp đặc biệt tinh tế — bạn không chỉ nói hay, bạn còn nói đúng điều người khác cần nghe đúng lúc họ cần nhất. ${d?.description ? d.description : ''}</p>
<p class="nar"><strong>✦ Điểm mạnh thiên bẩm:</strong> Giao tiếp quyến rũ và tinh tế, tư duy sáng tạo phong phú, kết nối với mọi loại người, tài năng đặc biệt trong nghệ thuật ngôn ngữ. ${d?.strengths ? d.strengths : ''} Bạn biết cách nói điều đúng vào thời điểm đúng — tài năng ảnh hưởng mạnh mẽ hơn nhiều người nhận ra.</p>
<p class="nar"><strong>✦ Hướng nghề nghiệp:</strong> Truyền thông, quan hệ công chúng, tư vấn, viết lách, giảng dạy, nghệ thuật ngôn từ. Bạn làm tốt nhất ở công việc đặt con người vào trung tâm và đòi hỏi sự tinh tế trong biểu đạt.</p>
<p class="nar"><strong>✦ Tình yêu & mối quan hệ:</strong> Tinh tế và quan tâm sâu sắc trong tình cảm. Là người bạn đời biết nói và biết nghe. Học cách chia sẻ nhu cầu bản thân thẳng thắn hơn thay vì chờ người kia tự hiểu.</p>
<div class="insight-box">💡 <strong>Lời nhắc số 21:</strong> Tiếng nói của bạn có sức mạnh lớn hơn bạn nghĩ — hãy sử dụng nó để xây dựng, truyền cảm hứng và chữa lành. Đừng im lặng khi bạn có điều quan trọng cần nói.</div>`,

    22: (name, d) => `<p class="nar">Sinh ngày <strong>22</strong>, <strong>${name}</strong> mang năng lượng của <strong>Số Chủ 22 — Người Kiến Tạo Vĩ Đại</strong>. Đây là con số ngày sinh hiếm gặp và mạnh mẽ nhất trong hệ thống Pythagoras. Số 22 không được rút gọn — nó tồn tại nguyên vẹn mang tầm nhìn tâm linh kết hợp với năng lực thực thi thực tế. Bạn không chỉ mơ lớn — bạn có khả năng hiện thực hóa những giấc mơ đó theo cách tạo ra di sản bền vững vượt thời gian. ${d?.description ? d.description : ''}</p>
<p class="nar"><strong>✦ Điểm mạnh thiên bẩm:</strong> Kết hợp tầm nhìn tâm linh và năng lực thực thi thực tế, tư duy hệ thống ở quy mô lớn, lãnh đạo mang tính kiến tạo, biến ý tưởng vĩ đại thành hiện thực cụ thể. ${d?.strengths ? d.strengths : ''} Khi bạn quyết định xây dựng điều gì, nó được xây đúng — vững chắc và để lại dấu ấn lâu bền.</p>
<p class="nar"><strong>✦ Hướng nghề nghiệp:</strong> Nhà sáng lập tổ chức lớn, kiến trúc sư vĩ mô, lãnh đạo chính phủ, xây dựng hệ thống giáo dục hay y tế quy mô, nhà đầu tư tác động lớn. Bạn cần môi trường cho phép nghĩ ở tầm quốc gia hoặc toàn cầu.</p>
<p class="nar"><strong>✦ Tình yêu & mối quan hệ:</strong> Tìm kiếm người bạn đời hiểu và hỗ trợ sứ mệnh lớn. Ổn định và cam kết nhưng đôi khi quá bận với mục tiêu lớn. Học cách hiện diện hoàn toàn khi ở bên gia đình — chất lượng quan trọng hơn số lượng.</p>
<div class="insight-box">💡 <strong>Lời nhắc số 22:</strong> Di sản vĩ đại nhất của bạn sẽ không phải những gì bạn xây cho bản thân — mà là những gì bạn xây còn trường tồn sau khi bạn đã bước đi. Hãy xây dựng có chủ ý.</div>`,

    23: (name, d) => `<p class="nar">Sinh ngày <strong>23</strong>, <strong>${name}</strong> mang năng lượng đặc biệt của <strong>số 2 và số 3 tạo số 5 — người kết nối sáng tạo</strong>. Ngày 23 không chỉ là "số 5 bình thường" — kết hợp của 2 (đồng cảm) và 3 (sáng tạo) tạo ra người hiểu cảm xúc người khác VÀ biết cách diễn đạt sự hiểu đó theo cách đẹp đẽ và sâu sắc. Bạn là người làm cầu nối tự nhiên giữa ý tưởng và con người. ${d?.description ? d.description : ''}</p>
<p class="nar"><strong>✦ Điểm mạnh thiên bẩm:</strong> Giao tiếp sâu sắc và ấm áp, kết nối đa dạng người, tư duy linh hoạt, kết hợp cảm xúc tinh tế với biểu đạt sáng tạo. ${d?.strengths ? d.strengths : ''} Bạn có thể chạm đến trái tim người khác qua ngôn ngữ, âm thanh, hình ảnh hoặc chỉ đơn giản là cách bạn lắng nghe.</p>
<p class="nar"><strong>✦ Hướng nghề nghiệp:</strong> Truyền thông sáng tạo, tư vấn, nghệ thuật ứng dụng, marketing cảm xúc, giảng dạy, mọi ngành kết hợp tư duy sáng tạo và kỹ năng kết nối người hiệu quả.</p>
<p class="nar"><strong>✦ Tình yêu & mối quan hệ:</strong> Hấp dẫn và nhạy cảm trong tình cảm. Biết cách làm người yêu cảm thấy được nhìn nhận. Thử thách lớn nhất là duy trì cam kết khi cảm hứng ban đầu qua đi.</p>
<div class="insight-box">💡 <strong>Lời nhắc số 23:</strong> Bạn sinh ra để làm cầu nối — giữa ý tưởng và con người, giữa những tâm hồn cần được gặp nhau. Đây là sứ mệnh đẹp và có giá trị sâu sắc đáng trân trọng.</div>`,

    24: (name, d) => `<p class="nar">Sinh ngày <strong>24</strong>, <strong>${name}</strong> mang năng lượng của <strong>số 2, số 4 và số 6 — người xây dựng tình yêu bền vững</strong>. Ngày 24 kết hợp nhạy cảm của 2, nền tảng vững chắc của 4 và tình yêu thương của 6 — tạo ra người đặt trọng tâm vào các mối quan hệ chân thực và chiều sâu. Bạn không chỉ yêu — bạn xây dựng nền tảng cho tình yêu đó bằng sự cam kết thực sự khiến người khác cảm thấy hoàn toàn an toàn bên bạn. ${d?.description ? d.description : ''}</p>
<p class="nar"><strong>✦ Điểm mạnh thiên bẩm:</strong> Tình yêu thương chân thành, trung thành tuyệt đối trong các mối quan hệ, tạo ra môi trường gia đình ấm áp và bền vững, kết hợp trái tim nhạy cảm với ý chí thực tế. ${d?.strengths ? d.strengths : ''} Người sinh ngày 24 thường là "trụ cột yêu thương" của gia đình và nhóm bạn bè.</p>
<p class="nar"><strong>✦ Hướng nghề nghiệp:</strong> Tư vấn gia đình, y tế, giáo dục, thiết kế không gian sống, quản lý khách sạn, công tác xã hội. Bạn cần công việc có mối quan hệ người thật sự, không chỉ số liệu và báo cáo.</p>
<p class="nar"><strong>✦ Tình yêu & mối quan hệ:</strong> Người bạn đời cực kỳ tận tâm và xây dựng. Đặt nền tảng cho mọi mối quan hệ bằng sự chắc chắn và trung thành. Hãy nhớ đảm bảo nhu cầu của bản thân cũng được đặt lên bàn.</p>
<div class="insight-box">💡 <strong>Lời nhắc số 24:</strong> Những gì bạn xây dựng cho người khác cũng quan trọng như những gì bạn xây dựng cho bản thân — hãy đảm bảo cả hai đều vững chắc và được chăm sóc đúng mức.</div>`,

    25: (name, d) => `<p class="nar">Sinh ngày <strong>25</strong>, <strong>${name}</strong> mang năng lượng của <strong>số 2, số 5 và số 7 — học giả nội tâm với trực giác đa chiều</strong>. Ngày 25 kết hợp trực giác của 2, tự do khám phá của 5 và trí tuệ phân tích của 7 — tạo ra người vừa thích kết nối vừa cần không gian để suy ngẫm và hiểu biết ở chiều sâu. Bạn học để thực sự hiểu, không chỉ để biết thông tin trên bề mặt. ${d?.description ? d.description : ''}</p>
<p class="nar"><strong>✦ Điểm mạnh thiên bẩm:</strong> Phân tích tâm lý sâu sắc, trực giác tâm linh, nghiên cứu chuyên sâu, nhìn thấu bản chất của mọi tình huống, kết hợp tư duy hệ thống với trực giác. ${d?.strengths ? d.strengths : ''} Bạn có thể tổng hợp thông tin từ nhiều nguồn và rút ra những kết luận mà ít ai nghĩ đến.</p>
<p class="nar"><strong>✦ Hướng nghề nghiệp:</strong> Nghiên cứu chuyên sâu, tâm lý học, triết học ứng dụng, khoa học dữ liệu, tư vấn chiến lược, giảng dạy chuyên sâu. Bạn cần công việc cho phép đào sâu thực sự — không phải nhảy từ bề mặt này sang bề mặt khác.</p>
<p class="nar"><strong>✦ Tình yêu & mối quan hệ:</strong> Sâu sắc và trung thành khi đã chọn. Cần người bạn đời tôn trọng nhu cầu có không gian riêng để suy nghĩ — đây không phải từ chối mà là cách bạn nạp lại năng lượng để kết nối tốt hơn.</p>
<div class="insight-box">💡 <strong>Lời nhắc số 25:</strong> Sự thông thái bạn tích lũy không phải để giữ riêng — nó phát sáng mạnh nhất khi được chia sẻ với người đang cần ánh sáng đó. Tri thức cất kín là tri thức chưa hoàn thành.</div>`,

    26: (name, d) => `<p class="nar">Sinh ngày <strong>26</strong>, <strong>${name}</strong> mang năng lượng của <strong>số 2, số 6 và số 8 — nhà lãnh đạo nhân ái trong kinh doanh</strong>. Ngày 26 đặc biệt vì kết hợp nhạy cảm của 2, tình yêu thương của 6 và tham vọng của 8 — tạo ra người không chỉ giỏi kinh doanh mà còn thực sự quan tâm đến con người trong suốt quá trình đó. Đây là tổ hợp của người có thể xây dựng đế chế kinh doanh mà nhân viên và khách hàng đều thực sự yêu quý. ${d?.description ? d.description : ''}</p>
<p class="nar"><strong>✦ Điểm mạnh thiên bẩm:</strong> Tư duy kinh doanh kết hợp lòng nhân ái, cân bằng giữa thành công vật chất và sự hài lòng nội tâm, lãnh đạo bằng trái tim và kết quả cùng một lúc. ${d?.strengths ? d.strengths : ''} Người tin tưởng bạn thường tin tưởng lâu dài — tín nhiệm là tài sản lớn nhất bạn xây dựng được.</p>
<p class="nar"><strong>✦ Hướng nghề nghiệp:</strong> Lãnh đạo doanh nghiệp có văn hóa tốt, tài chính nhân đạo, đầu tư tác động, quản lý tổ chức phi lợi nhuận quy mô lớn. Bạn ở vị trí tốt nhất khi kết hợp cả mục tiêu kinh doanh lẫn tác động xã hội.</p>
<p class="nar"><strong>✦ Tình yêu & mối quan hệ:</strong> Ổn định, tận tâm và hào phóng trong tình cảm. Biết cách nuôi dưỡng cả sự nghiệp lẫn gia đình. Hãy đảm bảo người thân không cảm thấy đứng sau bảng kế hoạch của bạn.</p>
<div class="insight-box">💡 <strong>Lời nhắc số 26:</strong> Thành công đích thực của bạn sẽ đến khi cả tài khoản ngân hàng lẫn trái tim đều giàu có — bạn có đủ năng lực để có cả hai, đừng đánh đổi cái này lấy cái kia.</div>`,

    27: (name, d) => `<p class="nar">Sinh ngày <strong>27</strong>, <strong>${name}</strong> mang năng lượng của <strong>số 2, số 7 và số 9 — nhà hiền triết phục vụ với chiều sâu tâm linh</strong>. Ngày 27 là một trong những ngày có chiều sâu tâm linh nhất: kết hợp trực giác tinh tế của 2, trí tuệ sâu sắc của 7 và lòng nhân đạo bao la của 9 — tạo ra người hiểu con người ở tầng sâu nhất và dùng sự hiểu đó để phục vụ cộng đồng theo cách rất tinh tế. Bạn không phô trương sự thông thái — bạn chia sẻ nó khiêm tốn khi người khác cần. ${d?.description ? d.description : ''}</p>
<p class="nar"><strong>✦ Điểm mạnh thiên bẩm:</strong> Lòng trắc ẩn sâu sắc, trí tuệ tâm linh hiếm có, chữa lành và nâng đỡ người khác qua sự hiểu biết sâu, nhìn thấu bản chất con người. ${d?.strengths ? d.strengths : ''} Người sinh ngày 27 thường có "sự khôn ngoan vượt tuổi" khiến người xung quanh tự nhiên tìm đến.</p>
<p class="nar"><strong>✦ Hướng nghề nghiệp:</strong> Trị liệu tâm lý, tư vấn tâm linh, nghiên cứu nhân văn, triết học ứng dụng. Bạn làm tốt nhất khi công việc thực sự chữa lành hay khai sáng người khác, không chỉ cung cấp dịch vụ thông thường.</p>
<p class="nar"><strong>✦ Tình yêu & mối quan hệ:</strong> Sâu sắc và hiểu người đến mức đôi khi đáng nể. Cần người bạn đời tôn trọng sự hướng nội. Khi yêu thật sự, bạn yêu đến rất sâu và rất lâu.</p>
<div class="insight-box">💡 <strong>Lời nhắc số 27:</strong> Bạn mang trong mình sự khôn ngoan hiếm có — hãy để nó hướng dẫn bạn, không phải gánh nặng bạn. Sự thông thái chân thực không tạo ra gánh nặng — nó tạo ra ánh sáng.</div>`,

    28: (name, d) => `<p class="nar">Sinh ngày <strong>28</strong>, <strong>${name}</strong> mang năng lượng của <strong>số 2, số 8 và số 10/1 — nhà lãnh đạo mạnh mẽ được thực sự yêu mến</strong>. Ngày 28 kết hợp trực giác nhạy cảm của 2 và sức mạnh điều hành của 8 — tạo tổng 10 (về 1), nhưng quan trọng là sự kết hợp này tạo ra người lãnh đạo vừa mạnh mẽ vừa biết lắng nghe. Điều này cực kỳ hiếm: thông thường người mạnh thường kém lắng nghe — bạn có cả hai. ${d?.description ? d.description : ''}</p>
<p class="nar"><strong>✦ Điểm mạnh thiên bẩm:</strong> Lãnh đạo được điều hòa bởi sự đồng cảm, tạo ra tầm nhìn lớn và thu hút người tài cùng hiện thực hóa nó, quyết đoán mà không mất đi tính nhân văn. ${d?.strengths ? d.strengths : ''} Người theo bạn không chỉ vì bạn giỏi — mà vì họ cảm thấy bạn thực sự quan tâm đến họ.</p>
<p class="nar"><strong>✦ Hướng nghề nghiệp:</strong> Lãnh đạo tổ chức, quản lý nhóm đa dạng, doanh nhân xã hội, vị trí điều hành cần cả kết quả lẫn văn hóa tổ chức tốt. Bạn xây dựng đội ngũ — không chỉ xây dựng sản phẩm đơn thuần.</p>
<p class="nar"><strong>✦ Tình yêu & mối quan hệ:</strong> Tận tâm và quan tâm, là người bạn đời cảm thấy vừa được yêu thương vừa được bảo vệ. Học cách không mang "tâm thế lãnh đạo" vào mọi khoảnh khắc — đôi khi chỉ cần là người bạn đồng hành đơn giản.</p>
<div class="insight-box">💡 <strong>Lời nhắc số 28:</strong> Khả năng khiến người khác cảm thấy được nhìn thấy ngay cả khi bạn đang lãnh đạo là điểm mạnh hiếm nhất của bạn — đừng bao giờ đánh mất điều đặc biệt đó.</div>`,

    29: (name, d) => `<p class="nar">Sinh ngày <strong>29</strong>, <strong>${name}</strong> mang năng lượng của <strong>số 2, số 9 và Số Chủ 11 — trực giác tâm linh với lòng nhân đạo rộng lớn</strong>. Ngày 29 tổng hợp ra 11 — một Số Chủ. Sự kết hợp của 2 (kết nối sâu) và 9 (nhân đạo, hoàn thiện) tạo ra chiều sâu đặc biệt. Bạn không chỉ có trực giác mạnh — bạn còn có tầm nhìn nhân đạo và trái tim không ngừng tìm kiếm ý nghĩa sâu xa hơn sau mọi trải nghiệm thông thường. ${d?.description ? d.description : ''}</p>
<p class="nar"><strong>✦ Điểm mạnh thiên bẩm:</strong> Trực giác tâm linh phi thường, chữa lành qua sự hiện diện, tầm nhìn nhân đạo rộng lớn, trái tim không ngừng tìm kiếm ý nghĩa, truyền cảm hứng sâu sắc. ${d?.strengths ? d.strengths : ''} Người xung quanh cảm nhận được năng lượng ấm áp và sâu sắc từ bạn ngay cả khi bạn im lặng.</p>
<p class="nar"><strong>✦ Hướng nghề nghiệp:</strong> Nhà lãnh đạo tinh thần, nghệ sĩ truyền cảm hứng, nhà hoạt động xã hội, trị liệu tâm lý, tư vấn phát triển cá nhân. Bạn tỏa sáng khi được sống đúng với sứ mệnh, không bị giam trong vai trò quá hẹp.</p>
<p class="nar"><strong>✦ Tình yêu & mối quan hệ:</strong> Sâu sắc, lãng mạn và đôi khi phức tạp. Cần người bạn đời hiểu bạn ở tầng tâm linh, không chỉ bề mặt. Dễ bị tổn thương khi những cảm nhận sâu sắc không được nhìn nhận đúng mức.</p>
<div class="insight-box">💡 <strong>Lời nhắc số 29:</strong> Hãy tin vào những gì bạn cảm nhận — trực giác của bạn không phải ngẫu nhiên, đó là ngôn ngữ của linh hồn đang dẫn đường cho bạn qua từng bước đi.</div>`,

    30: (name, d) => `<p class="nar">Sinh ngày <strong>30</strong>, <strong>${name}</strong> mang năng lượng thuần khiết của <strong>số 3 được khuếch đại bởi số 0 — sáng tạo không giới hạn</strong>. Số 0 bên cạnh số 3 là vũ trụ nơi mọi khả năng đều tồn tại trước khi được biểu đạt. Người sinh ngày 30 có sức sáng tạo mạnh mẽ và đa dạng hơn bất thường — khi được phát triển đúng cách, đây là tài năng có thể chạm đến trái tim nhiều người theo những cách không thể đoán trước. ${d?.description ? d.description : ''}</p>
<p class="nar"><strong>✦ Điểm mạnh thiên bẩm:</strong> Sáng tạo không giới hạn, biểu đạt nghệ thuật đa dạng, niềm vui sống truyền lan, năng lượng tích cực tự nhiên, kết nối và truyền cảm hứng một cách nhẹ nhàng. ${d?.strengths ? d.strengths : ''} Bạn có thể tìm thấy cái đẹp và ý nghĩa ngay cả ở những nơi người khác chỉ thấy thường nhật tẻ nhạt.</p>
<p class="nar"><strong>✦ Hướng nghề nghiệp:</strong> Nghệ thuật sáng tạo trong mọi hình thức, viết lách, âm nhạc, thiết kế, truyền thông sáng tạo, giáo dục nghệ thuật. Bạn biến công việc thành nghệ thuật — ranh giới đó mờ dần đối với bạn.</p>
<p class="nar"><strong>✦ Tình yêu & mối quan hệ:</strong> Lãng mạn và sáng tạo trong tình cảm, tạo ra những khoảnh khắc đặc biệt. Cần không gian để biểu đạt và phát triển sáng tạo — người bạn đời lý tưởng trân trọng cả những cái điên rồ lẫn cái đẹp của bạn.</p>
<div class="insight-box">💡 <strong>Lời nhắc số 30:</strong> Hãy cho phép bản thân khám phá mọi hình thức biểu đạt cho đến khi tìm thấy thứ thực sự gọi tên linh hồn mình, rồi đổ hết bản thân vào đó không do dự.</div>`,

    31: (name, d) => `<p class="nar">Sinh ngày <strong>31</strong>, <strong>${name}</strong> mang năng lượng của <strong>số 3 và số 1 tạo số 4 — sáng tạo được xây trên nền tảng kỷ luật vững chắc</strong>. Ngày 31 kết hợp sức sáng tạo phong phú của 3 và ý chí tiên phong của 1 — nhưng kết quả là số 4, nghĩa là những tài năng sáng tạo của bạn cần và được hỗ trợ bởi nền tảng thực hành có hệ thống. Bạn không chỉ có ý tưởng hay — bạn còn có khả năng đưa chúng từ tưởng tượng thành hiện thực cụ thể và bền vững. ${d?.description ? d.description : ''}</p>
<p class="nar"><strong>✦ Điểm mạnh thiên bẩm:</strong> Sáng tạo có hệ thống, biến ý tưởng trừu tượng thành thực thể cụ thể, kỷ luật trong quá trình sáng tạo, thiên phú trong các lĩnh vực đòi hỏi cả sáng tạo lẫn sự kiên trì dài hạn. ${d?.strengths ? d.strengths : ''} Bạn có cái nhiều nghệ sĩ thiếu: sự trung thành với quá trình, không chỉ với cảm hứng nhất thời.</p>
<p class="nar"><strong>✦ Hướng nghề nghiệp:</strong> Kiến trúc, thiết kế công nghiệp, kỹ thuật sáng tạo, nhạc sĩ có cấu trúc, đạo diễn, nhà văn chuyên nghiệp. Bạn xây dựng những thứ đẹp và đồng thời bền vững — sự kết hợp hiếm có và quý giá.</p>
<p class="nar"><strong>✦ Tình yêu & mối quan hệ:</strong> Trung thành và sáng tạo trong tình cảm. Xây dựng mối quan hệ như cách xây dựng dự án — từng bước, từng giai đoạn, với sự quan tâm đến từng chi tiết. Người thân yêu bạn cảm thấy được chăm sóc chu đáo và thực tế.</p>
<div class="insight-box">💡 <strong>Lời nhắc số 31:</strong> Bạn có thứ hiếm gặp: khả năng mơ lớn VÀ khả năng xây dựng nó từng bước. Đừng bỏ qua bước nào trong hai phần đó — cả tầm nhìn lẫn kỷ luật đều là sức mạnh của bạn.</div>`,
  },

  // ════════════════════════════════════════════════════════════════════
  // ĐỈNH CAO KIM TỰ THÁP — Per-number deep narrative (1-9)
  // Gọi: NT.pyramidPeak[num](name, period, peakIndex)
  // ════════════════════════════════════════════════════════════════════
  pyramidPeak: {
    1: (name, period, peakIndex) => `<p class="nar">Trong giai đoạn <strong>${period}</strong>, vũ trụ đặt <strong>${name}</strong> vào trường năng lượng của <strong>Số 1 — Người Khai Sáng và Tiên Phong</strong>. Đây là giai đoạn mà cuộc đời yêu cầu bạn đứng lên, khẳng định bản thân và dũng cảm bước vào những lãnh thổ chưa ai khai phá. Không phải ngẫu nhiên mà giai đoạn này đến với bạn — đây là thời điểm linh hồn bạn đã sẵn sàng chịu trách nhiệm với hành trình của chính mình.</p>

<p class="nar"><strong>Cơ hội vũ trụ mở ra:</strong> Năng lượng số 1 ủng hộ mọi sự khởi đầu, lãnh đạo và đổi mới. Những ý tưởng bạn đã nung nấu, những con đường bạn từng sợ bước vào — đây là lúc chúng được gọi dậy. Sự tự lực và khả năng hành động độc lập của bạn đạt đỉnh điểm trong giai đoạn này. Môi trường làm việc và cuộc sống sẽ liên tục trao cho bạn cơ hội để thể hiện rằng bạn có thể đứng vững trên đôi chân của chính mình — và thậm chí dẫn dắt người khác cùng đi.</p>

<p class="nar"><strong>Thách thức cần nhận diện:</strong> Cái tôi mạnh là tài sản —nhưng nếu không được kiểm soát, nó trở thành bức tường. Bạn có thể dễ rơi vào sự cô đơn tự nguyện, từ chối sự giúp đỡ hoặc trở nên cứng nhắc khi mọi thứ không diễn ra theo kế hoạch. Giai đoạn số 1 cũng thường kéo đến những bài kiểm tra về lòng can đảm — những khoảnh khắc bạn phải quyết định: chọn sự an toàn của đám đông hay sự trung thực với tiếng gọi nội tâm?</p>

<div class="insight-box">💡 <strong>Lời khuyên cho giai đoạn này:</strong> Hãy lãnh đạo bằng cách phục vụ, không phải bằng cách kiểm soát. Sức mạnh số 1 tỏa sáng rực rỡ nhất khi bạn dùng nó để nâng người khác lên — không phải để đứng cao hơn họ. Mỗi hành động dũng cảm và trung thực trong giai đoạn này sẽ xây một viên gạch vào di sản cá nhân bạn để lại cho đời.</div>`,

    2: (name, period, peakIndex) => `<p class="nar">Giai đoạn <strong>${period}</strong> đưa <strong>${name}</strong> vào trường cộng hưởng nhẹ nhàng mà sâu sắc của <strong>Số 2 — Người Hòa Giải và Kết Nối</strong>. Khác với sức mạnh bộc phát của số 1, số 2 hoạt động trong thầm lặng — nhưng tác động của nó không hề nhỏ. Đây là giai đoạn cuộc đời mời bạn trân trọng nghệ thuật của sự kết nối, của lắng nghe và của sự kiên nhẫn chiến lược.</p>

<p class="nar"><strong>Cơ hội vũ trụ mở ra:</strong> Những mối quan hệ bắt đầu hoặc được củng cố trong giai đoạn này thường trở thành những trụ cột quan trọng nhất của cả cuộc đời. Tài năng ngoại giao, khả năng đọc cảm xúc người khác và trực giác tinh tế của bạn đạt đỉnh cao — và chính những phẩm chất này mở ra những cánh cửa mà không một sức mạnh bạo lực nào có thể làm. Đây cũng là thời điểm lý tưởng để tạo ra những liên minh, đối tác và cộng đồng có giá trị lâu dài.</p>

<p class="nar"><strong>Thách thức cần nhận diện:</strong> Nguy hiểm lớn nhất của giai đoạn số 2 không phải là xung đột — mà là sự mờ nhạt. Khi quá tập trung vào việc làm hài lòng người khác, bạn có thể đánh mất tiếng nói của chính mình. Sự phụ thuộc cảm xúc và nỗi sợ bị từ chối đôi khi khiến bạn đưa ra quyết định từ chỗ sợ hãi thay vì từ sức mạnh. Hãy học cách phân biệt: đâu là sự hợp tác lành mạnh, và đâu là sự xóa bỏ bản thân.</p>

<div class="insight-box">💡 <strong>Lời khuyên cho giai đoạn này:</strong> Kiên nhẫn không phải yếu đuối — đó là sức mạnh chiến lược. Hãy tin vào quá trình chậm mà chắc. Những gì bạn gieo trong lặng lẽ ở giai đoạn này — những mối quan hệ được chăm chút, những tin tưởng được gây dựng — sẽ nở hoa khi thời điểm chín muồi đến.</div>`,

    3: (name, period, peakIndex) => `<p class="nar">Giai đoạn <strong>${period}</strong> là mùa xuân trong hành trình của <strong>${name}</strong> — một mùa được chiếu sáng bởi năng lượng rực rỡ của <strong>Số 3 — Người Nghệ Sĩ, Người Truyền Cảm Hứng</strong>. Đây là thời kỳ vũ trụ mời bạn thoát ra khỏi những giới hạn tự đặt ra và để tâm hồn sáng tạo của mình được biểu đạt một cách đầy đủ và tự do nhất.</p>

<p class="nar"><strong>Cơ hội vũ trụ mở ra:</strong> Tài năng giao tiếp, khả năng nghệ thuật và sức thu hút tự nhiên của bạn tỏa sáng mạnh mẽ trong giai đoạn này. Những kết nối xã hội quan trọng, cơ hội thăng tiến qua trình diễn và biểu đạt, những dự án sáng tạo mang tầm ảnh hưởng — tất cả đều được số 3 ủng hộ. Đây cũng là giai đoạn đặc biệt tốt cho tình yêu, tình bạn và bất kỳ lĩnh vực nào đòi hỏi sự nhẹ nhàng, vui tươi và đầy màu sắc của cuộc sống.</p>

<p class="nar"><strong>Thách thức cần nhận diện:</strong> Sức mạnh của số 3 đến từ sự phong phú — nhưng đây cũng là điểm dễ gây ra sự phân tán. Quá nhiều ý tưởng, quá nhiều hướng đi, quá nhiều điều hấp dẫn cùng một lúc có thể khiến bạn không hoàn thành được điều nào đáng kể. Ngoài ra, xu hướng tránh né những cảm xúc sâu bằng cái mặt nạ vui vẻ là cạm bẫy tinh vi nhất của giai đoạn này.</p>

<div class="insight-box">💡 <strong>Lời khuyên cho giai đoạn này:</strong> Hãy chọn ra một hoặc hai dự án để đầu tư đủ sâu thay vì dàn trải năng lượng. Nghệ thuật và sáng tạo không chỉ để giải trí — chúng là ngôn ngữ linh hồn của bạn. Hãy nói bằng ngôn ngữ đó một cách dũng cảm và trọn vẹn.</div>`,

    4: (name, period, peakIndex) => `<p class="nar">Giai đoạn <strong>${period}</strong> đưa <strong>${name}</strong> vào trường năng lượng của <strong>Số 4 — Người Kiến Tạo Nền Tảng</strong>. Đây có thể không phải giai đoạn hào nhoáng nhất trong cuộc đời bạn — nhưng chắc chắn là một trong những giai đoạn có ý nghĩa nhất. Vũ trụ đang giao cho bạn nhiệm vụ thiêng liêng: xây dựng những nền tảng vững chắc đủ để chịu đựng thử thách của thời gian.</p>

<p class="nar"><strong>Cơ hội vũ trụ mở ra:</strong> Mọi nỗ lực chăm chỉ, kiên nhẫn và có kỷ luật trong giai đoạn này đều được đền bù tương xứng — đôi khi còn hơn thế. Đây là thời điểm lý tưởng để xây dựng sự nghiệp bền vững, tích lũy tài sản có cơ sở, củng cố gia đình và thiết lập những hệ thống hoạt động tốt ngay cả khi bạn vắng mặt. Năng quyết tâm và sự đáng tin cậy của bạn đạt đỉnh — hãy dùng chúng.</p>

<p class="nar"><strong>Thách thức cần nhận diện:</strong> Nguy hiểm của giai đoạn số 4 có hai hướng đối lập nhau. Một là làm việc quá sức đến mức kiệt sức, biến trách nhiệm thành gánh nặng không lối thoát. Hai là sợ hãi sự ổn định đến mức tránh né cam kết và cứ mãi trôi dạt. Cả hai đều là biểu hiện của cùng một nỗi sợ sâu bên trong: sợ rằng dù cố gắng đến đâu cũng không đủ.</p>

<div class="insight-box">💡 <strong>Lời khuyên cho giai đoạn này:</strong> Đừng đo giá trị giai đoạn này bằng những kết quả hào nhoáng — hãy đo bằng những nền móng âm thầm bạn đang đặt xuống. Di sản vĩ đại nhất thường được xây trong những năm tháng bình lặng nhất, bởi những bàn tay kiên nhẫn nhất.</div>`,

    5: (name, period, peakIndex) => `<p class="nar">Giai đoạn <strong>${period}</strong> thổi vào cuộc đời <strong>${name}</strong> một cơn gió của <strong>Số 5 — Người Giải Phóng và Khám Phá</strong>. Đây là giai đoạn của sự chuyển đổi, của những cánh cửa bất ngờ và của những bài học không thể có được trong sách vở — chúng đến từ chính những trải nghiệm phong phú và đa dạng của cuộc sống.</p>

<p class="nar"><strong>Cơ hội vũ trụ mở ra:</strong> Những thay đổi xảy ra trong giai đoạn này — dù có vẻ đột ngột hoặc không theo kế hoạch — thường là những cánh cửa được thiết kế riêng cho bạn. Khả năng thích nghi phi thường, tư duy đa chiều và sức hấp dẫn tự nhiên của bạn giúp bạn tận dụng những cơ hội mà người khác bỏ lỡ vì sợ thay đổi. Mở rộng thế giới quan, học thêm kỹ năng mới, kết nối với những người từ các nền tảng khác nhau — đây là sân chơi đích thực của bạn trong giai đoạn này.</p>

<p class="nar"><strong>Thách thức cần nhận diện:</strong> Bức tranh lớn nhất mà số 5 đang yêu cầu bạn học không phải là cách tự do — mà là cách giữ phương hướng trong tự do. Dễ bị cuốn vào sự hấp dẫn của "điều tiếp theo" đến mức không bao giờ đi đủ sâu vào bất cứ điều gì. Sự thỏa mãn tức thời và nỗi sợ cam kết là hai cái bẫy tinh vi nhất trong giai đoạn này.</p>

<div class="insight-box">💡 <strong>Lời khuyên cho giai đoạn này:</strong> Hãy xác định 1-2 điều cốt lõi không thay đổi trong khi mọi thứ xung quanh liên tục biến động. Tự do đẹp nhất không phải là không có ràng buộc — mà là tự chọn những ràng buộc nào xứng đáng với linh hồn phóng khoáng của bạn.</div>`,

    6: (name, period, peakIndex) => `<p class="nar">Giai đoạn <strong>${period}</strong> đặt <strong>${name}</strong> vào trái tim ấm áp của <strong>Số 6 — Người Nuôi Dưỡng và Bảo Vệ Tổ Ấm</strong>. Đây không phải giai đoạn dành cho những chinh phục cá nhân hào nhoáng — đây là giai đoạn của tình yêu thương, trách nhiệm và sự chữa lành. Vũ trụ đang giao cho bạn một trong những vai trò quan trọng nhất trong hành trình con người: trở thành người giữ lửa ấm.</p>

<p class="nar"><strong>Cơ hội vũ trụ mở ra:</strong> Những mối quan hệ gia đình và tình yêu được đặt lên vị trí trung tâm trong giai đoạn này. Khả năng chữa lành, nuôi dưỡng và tạo ra môi trường an toàn của bạn đạt đỉnh — và đây là những phẩm chất có thể tạo ra tác động sâu sắc lâu dài trong cuộc đời của những người bạn yêu thương. Đây cũng là giai đoạn tốt để đóng góp cho cộng đồng, theo đuổi các sự nghiệp liên quan đến chăm sóc và phục vụ người khác.</p>

<p class="nar"><strong>Thách thức cần nhận diện:</strong> Sự quan tâm của bạn đôi khi vượt qua ranh giới lành mạnh và trở thành sự kiểm soát — dù không cố tình. Bạn có thể hy sinh quá nhiều đến mức kiệt sức, rồi cảm thấy oan ức vì không được đền đáp xứng đáng. Cũng cần cẩn thận với chủ nghĩa hoàn hảo: đặt tiêu chuẩn quá cao cho cả mình lẫn người thân, và thất vọng khi thực tế không đạt đến lý tưởng đó.</p>

<div class="insight-box">💡 <strong>Lời khuyên cho giai đoạn này:</strong> Hãy yêu thương từ sự sung mãn, không phải từ sự cạn kiệt. Đặt oxygen mask lên mình trước — không phải vì ích kỷ, mà vì chỉ khi bạn trọn vẹn, bạn mới có thể thực sự cho đi một cách bền vững và không oán giận.</div>`,

    7: (name, period, peakIndex) => `<p class="nar">Giai đoạn <strong>${period}</strong> đưa <strong>${name}</strong> vào chiều sâu huyền bí của <strong>Số 7 — Nhà Hiền Triết và Người Tìm Kiếm Sự Thật</strong>. Đây là giai đoạn của sự tĩnh lặng có chủ đích, của tri thức đào sâu và của những câu hỏi lớn về ý nghĩa cuộc đời. Vũ trụ mời bạn rời khỏi sân khấu ồn ào của cuộc đời để đi vào thư viện nội tâm của chính mình.</p>

<p class="nar"><strong>Cơ hội vũ trụ mở ra:</strong> Trí tuệ phân tích, trực giác tâm linh và khả năng nhìn thấu bản chất sự việc của bạn đạt đỉnh cao trong giai đoạn này. Đây là thời điểm lý tưởng để học tập chuyên sâu, nghiên cứu một lĩnh vực từ gốc rễ, phát triển tâm linh và tích lũy những hiểu biết mà sau này sẽ trở thành nền tảng cho tất cả những gì bạn tạo ra. Sự im lặng và cô đơn không phải trừng phạt trong giai đoạn này — chúng là đặc ân.</p>

<p class="nar"><strong>Thách thức cần nhận diện:</strong> Nguy cơ lớn nhất của số 7 là cô lập quá mức — rút lui khỏi thế giới đến mức mất đi sự kết nối với những người thực sự quan tâm đến bạn. Xu hướng phân tích quá nhiều cũng có thể làm tê liệt hành động — bạn tìm kiếm sự chắc chắn tuyệt đối trước khi bước ra, trong khi cuộc sống thực sự chỉ có thể được sống, không phải được kiểm soát hoàn toàn.</p>

<div class="insight-box">💡 <strong>Lời khuyên cho giai đoạn này:</strong> Hãy dành thời gian cho sự tĩnh lặng — nhưng đừng biến nó thành lý do để tránh thế giới. Những gì bạn học được trong chiều sâu nội tâm của giai đoạn này chỉ có ý nghĩa thực sự khi được mang ra ánh sáng và chia sẻ với người khác.</div>`,

    8: (name, period, peakIndex) => `<p class="nar">Giai đoạn <strong>${period}</strong> đặt <strong>${name}</strong> vào trường năng lượng đế vương của <strong>Số 8 — Người Kiến Tạo Quyền Lực và Thịnh Vượng</strong>. Đây là giai đoạn của sự thu hoạch, của ảnh hưởng lớn và của khả năng tạo ra tác động thực sự trên thế giới vật chất. Vũ trụ đang trao cho bạn những công cụ quyền năng nhất — câu hỏi là bạn dùng chúng để làm gì.</p>

<p class="nar"><strong>Cơ hội vũ trụ mở ra:</strong> Tư duy chiến lược, khả năng lãnh đạo và bản năng kinh doanh của bạn đạt đỉnh trong giai đoạn này. Cơ hội tài chính, thăng tiến trong sự nghiệp và mở rộng ảnh hưởng xã hội đều được số 8 ủng hộ. Đây là thời điểm để đàm phán những hợp đồng quan trọng, mở rộng doanh nghiệp, đầu tư dài hạn và xây dựng những hệ thống tạo ra giá trị bền vững — không chỉ cho bản thân mà cho nhiều người.</p>

<p class="nar"><strong>Thách thức cần nhận diện:</strong> Quyền lực mà không có đạo đức là con dao hai lưỡi. Trong giai đoạn số 8, cám dỗ lớn nhất là ưu tiên kết quả hơn con người — và điều đó có thể tạo ra những thành công vật chất đáng kể nhưng cũng để lại những vết thương trong các mối quan hệ không dễ chữa lành. Cũng cần cẩn thận với chu kỳ tích lũy không có điểm dừng — thứ sẽ dẫn đến cảm giác không bao giờ "đủ".</p>

<div class="insight-box">💡 <strong>Lời khuyên cho giai đoạn này:</strong> Định nghĩa lại thành công theo cách phản ánh giá trị thực sự của bạn — không chỉ là con số. Quyền lực thực sự nhất không phải là kiểm soát người khác, mà là khả năng tạo ra điều kiện để người khác phát triển. Đó là khi vòng tuần hoàn của số 8 thực sự hoạt động đúng chiều.</div>`,

    9: (name, period, peakIndex) => `<p class="nar">Giai đoạn <strong>${period}</strong> đưa <strong>${name}</strong> đến với năng lượng viên mãn và sâu rộng nhất trong mọi con số: <strong>Số 9 — Người Nhân Đạo và Người Hoàn Thành Chu Kỳ</strong>. Đây là giai đoạn của bức tranh lớn, của lòng trắc ẩn vô biên và của sự sẵn lòng đặt điều gì đó lớn hơn bản thân lên trên mọi lợi ích cá nhân.</p>

<p class="nar"><strong>Cơ hội vũ trụ mở ra:</strong> Trí tuệ cảm xúc, lòng trắc ẩn và khả năng nhìn thế giới từ góc độ nhân loại của bạn đạt đỉnh cao trong giai đoạn này. Đây là thời điểm để cống hiến — cho cộng đồng, cho nghệ thuật mang thông điệp nhân văn, cho những phong trào có thể thay đổi cách người ta nhìn nhau. Nhiều người tìm thấy con đường nghề nghiệp thực sự ý nghĩa của mình trong giai đoạn số 9 — không phải vì nó kiếm được nhiều tiền nhất, mà vì nó chạm đến linh hồn sâu nhất.</p>

<p class="nar"><strong>Thách thức cần nhận diện:</strong> Giai đoạn số 9 đòi hỏi sự buông bỏ — và đó là một trong những kỹ năng khó nhất của cuộc đời. Bạn có thể phải kết thúc những mối quan hệ, công việc hoặc giai đoạn sống đã không còn phục vụ hành trình của mình. Nếu cố giữ lại những thứ đã đến lúc rời đi, giai đoạn này sẽ trở nên mệt mỏi và trì trệ. Ngoài ra, xu hướng ôm đồm nỗi đau của người khác quá nhiều cũng là nguy cơ thực sự với năng lượng số 9.</p>

<div class="insight-box">💡 <strong>Lời khuyên cho giai đoạn này:</strong> Buông bỏ không phải là từ bỏ — đó là dọn không gian cho điều tốt đẹp hơn. Hãy tin tưởng rằng mỗi cái kết thúc đều mang trong nó hạt giống của một khởi đầu mới. Và hãy nhớ: bạn không thể phục vụ thế giới khi bản thân bạn cạn kiệt.</div>`,
  },

  // ════════════════════════════════════════════════════════════════════
  // THỬ THÁCH KIM TỰ THÁP — Per-number deep narrative (0-9)
  // Gọi: NT.pyramidChallenge[num](name, period)
  // ════════════════════════════════════════════════════════════════════
  pyramidChallenge: {
    0: (name, period) => `<p class="nar">Số thử thách <strong>0</strong> trong giai đoạn <strong>${period}</strong> là một trường hợp cực kỳ đặc biệt — nó xuất hiện khi đỉnh cao và thử thách của bạn hoàn toàn trùng nhau. Đây không có nghĩa là bạn không có thử thách — ngược lại, <strong>${name}</strong> đang đối mặt với thử thách tinh tế và sâu sắc nhất: thử thách của <em>sự tự do lựa chọn hoàn toàn</em>.</p>

<p class="nar">Khi không có một rào cản rõ ràng nào được vũ trụ đặt ra, bạn phải tự tạo ra kỷ luật, phương hướng và cam kết từ bên trong. Đây là thử thách của những linh hồn đã trưởng thành qua nhiều kiếp sống — một linh hồn không cần bị ép buộc mà tự chọn con đường của mình.</p>

<div class="insight-box">💡 <strong>Cách tiếp cận:</strong> Tự đặt ra những mục tiêu đủ lớn để làm bạn hứng khởi và đủ cụ thể để bạn có thể đo lường tiến trình. Sự tự do tuyệt đối chỉ có ý nghĩa khi được định hướng bởi giá trị rõ ràng từ bên trong.</div>`,

    1: (name, period) => `<p class="nar">Thử thách số <strong>1</strong> trong giai đoạn <strong>${period}</strong> đặt <strong>${name}</strong> vào bài kiểm tra cốt lõi nhất của bản ngã: <strong>học cách tin vào chính mình và đứng vững trong quyết định của mình mà không cần sự chấp thuận từ bên ngoài</strong>. Đây không phải là thử thách về năng lực — mà là thử thách về sự can đảm nội tâm.</p>

<p class="nar"><strong>Bẫy tinh vi cần nhận diện:</strong> Hai thái cực đều nguy hiểm như nhau. Một là trở nên hung hăng và cứng nhắc bề ngoài để che giấu sự bất an bên trong. Hai là rơi vào sự phụ thuộc, liên tục cần người khác xác nhận rằng mình đang đi đúng hướng. Cả hai đều là biểu hiện của cùng một nỗi sợ sâu: sợ rằng bản thân mình không đủ tốt.</p>

<p class="nar"><strong>Phương pháp vượt qua:</strong> Mỗi ngày, hãy đưa ra ít nhất một quyết định nhỏ mà không hỏi ý kiến ai — và sau đó kiên trì với nó. Thực hành tự lãnh đạo trong những việc nhỏ nhặt nhất là cách xây dựng cơ bắp cho những quyết định lớn về sau.</p>

<div class="insight-box">💡 Sức mạnh không phải là không bao giờ nghi ngờ bản thân — mà là hành động dù đang nghi ngờ. Mỗi lần bạn chọn tin vào phán đoán của chính mình, bạn đang hoàn trả bài học của thử thách số 1.</div>`,

    2: (name, period) => `<p class="nar">Thử thách số <strong>2</strong> trong giai đoạn <strong>${period}</strong> mời <strong>${name}</strong> học một trong những kỹ năng phức tạp nhất của cuộc đời: <strong>hợp tác mà không mất bản ngã, lắng nghe mà không mất lập trường, nhạy cảm mà không mất ranh giới</strong>.</p>

<p class="nar"><strong>Bẫy tinh vi cần nhận diện:</strong> Nỗi sợ xung đột có thể khiến bạn đồng ý với tất cả để giữ hòa khí — nhưng sự đồng thuận giả tạo này tích lũy dần thành oán giận ngầm bên trong. Hoặc ngược lại, bạn trở nên quá nhạy cảm với mọi bất đồng nhỏ đến mức không thể duy trì bất kỳ mối quan hệ nào lâu dài.</p>

<p class="nar"><strong>Phương pháp vượt qua:</strong> Tập lên tiếng trong những tình huống an toàn nhỏ trước — chia sẻ một ý kiến khác, bày tỏ một nhu cầu, nói một điều không được lòng người khác nhưng trung thực. Mỗi lần bạn nói thật một cách tử tế, bạn đang luyện tập thử thách số 2.</p>

<div class="insight-box">💡 Sự hòa hợp thực sự không phải là không có bất đồng — mà là khả năng giải quyết bất đồng với sự tôn trọng. Bạn không thể xây mối quan hệ sâu sắc trên nền tảng của những điều không được nói.</div>`,

    3: (name, period) => `<p class="nar">Thử thách số <strong>3</strong> trong giai đoạn <strong>${period}</strong> yêu cầu <strong>${name}</strong> học cách <strong>biểu đạt chân thực — không chỉ biểu đạt để được chú ý, mà biểu đạt điều thực sự nằm trong tâm hồn</strong>. Đây là thử thách của sự dũng cảm sáng tạo: dám nói điều mình thực sự nghĩ, dám tạo ra thứ gì đó thực sự của mình.</p>

<p class="nar"><strong>Bẫy tinh vi cần nhận diện:</strong> Dùng sự hài hước và sự vui vẻ như một lớp giáp để tránh đối mặt với những cảm xúc sâu hơn. Hoặc ngược lại: nói quá nhiều, biểu đạt quá nhiều nhưng không bao giờ thực sự chạm đến trái tim của người khác vì thiếu chiều sâu thực chất.</p>

<p class="nar"><strong>Phương pháp vượt qua:</strong> Cam kết với một hình thức biểu đạt sáng tạo từ đầu đến cuối — dù là viết một bài, hoàn thành một tác phẩm, hay nói thật điều mình cảm thấy với người quan trọng. Chiều sâu đến từ sự kiên trì đi sâu vào một điều, không phải từ việc lướt qua nhiều thứ.</p>

<div class="insight-box">💡 Thế giới không cần thêm một giọng hài hước nữa — thế giới cần tiếng nói thật của bạn. Hãy dũng cảm nói điều bạn thực sự muốn nói, ngay cả khi điều đó có thể làm ai đó không vui.</div>`,

    4: (name, period) => `<p class="nar">Thử thách số <strong>4</strong> trong giai đoạn <strong>${period}</strong> là lời mời của vũ trụ dành cho <strong>${name}</strong>: <strong>học cách xây dựng nền tảng vững chắc — không phải qua sự cứng nhắc, mà qua sự kiên định có linh hoạt</strong>. Kỷ luật và trách nhiệm không phải là những thứ bạn "phải" có — chúng là những công cụ giải phóng khi được sử dụng đúng cách.</p>

<p class="nar"><strong>Bẫy tinh vi cần nhận diện:</strong> Hoặc bị cứng đầu với kế hoạch đến mức không thể thích nghi khi hoàn cảnh thay đổi. Hoặc trốn tránh sự có cấu trúc vì cảm thấy nó giam cầm, dẫn đến việc không hoàn thành được bất cứ điều gì có chiều sâu. Cả hai đều là phản ứng với cùng một nỗi sợ: sợ thất bại.</p>

<p class="nar"><strong>Phương pháp vượt qua:</strong> Bắt đầu với một thói quen nhỏ và duy trì nó trong 30 ngày không gián đoạn. Không cần to lớn — chỉ cần nhất quán. Chính sự nhất quán đó sẽ xây dựng niềm tin vào khả năng hoàn thành của bạn, và từ đó mở ra những cam kết lớn hơn.</p>

<div class="insight-box">💡 Kỷ luật không phải là kẻ thù của tự do — đó là nền tảng của nó. Khi bạn xây dựng được những thói quen và nền tảng vững chắc, bạn mới có đủ sự ổn định để dám khám phá mà không sợ sụp đổ.</div>`,

    5: (name, period) => `<p class="nar">Thử thách số <strong>5</strong> trong giai đoạn <strong>${period}</strong> đặt <strong>${name}</strong> vào bài học tế nhị nhất của cuộc đời: <strong>phân biệt giữa tự do thực sự và sự trốn tránh — giữa phiêu lưu có ý thức và chạy trốn có vô thức</strong>.</p>

<p class="nar"><strong>Bẫy tinh vi cần nhận diện:</strong> Thay đổi liên tục vì sợ bị mắc kẹt thay vì thay đổi vì thực sự muốn phát triển. Hoặc ngược lại: bị tê liệt bởi quá nhiều lựa chọn đến mức không thể cam kết với bất cứ điều gì. Sự bốc đồng và sự trốn tránh thường đội lốt "tự do" và "linh hoạt".</p>

<p class="nar"><strong>Phương pháp vượt qua:</strong> Chọn một điều thực sự quan trọng — một mối quan hệ, một dự án, một hướng đi — và cam kết với nó đủ lâu để hiểu chiều sâu thực sự của nó. Sự tự do đích thực không phải là khi bạn không có ràng buộc nào — mà là khi bạn chọn những ràng buộc xứng đáng với linh hồn của mình.</p>

<div class="insight-box">💡 Hành trình đẹp nhất không phải là hành trình không có điểm đến — mà là hành trình mà mỗi bước đi đều có ý nghĩa. Hãy để sự tự do của bạn tạo ra điều gì đó, thay vì chỉ tránh né điều gì đó.</div>`,

    6: (name, period) => `<p class="nar">Thử thách số <strong>6</strong> trong giai đoạn <strong>${period}</strong> mời <strong>${name}</strong> học bài học tinh tế nhất của tình yêu thương: <strong>yêu mà không kiểm soát, quan tâm mà không áp đặt, giúp đỡ mà không giải cứu</strong>. Đây là ranh giới mỏng manh giữa tình yêu chân thực và tình yêu có điều kiện ẩn.</p>

<p class="nar"><strong>Bẫy tinh vi cần nhận diện:</strong> Quá quan tâm đến người khác đến mức trở thành sự kiểm soát — dù ngoài mặt có vẻ như sự chăm sóc. Hoặc hy sinh bản thân quá nhiều rồi cảm thấy oán giận khi không được đáp lại tương xứng. Sự hoàn hảo chủ nghĩa áp đặt lên người thân cũng là một biểu hiện của bẫy số 6.</p>

<p class="nar"><strong>Phương pháp vượt qua:</strong> Trước khi đưa ra lời khuyên hoặc giúp đỡ, hãy tự hỏi: "Họ có cần điều này không, hay tôi chỉ cần cảm thấy mình hữu ích?" Tập trao quyền thay vì giải cứu. Tình yêu lành mạnh nhất là tình yêu tin tưởng rằng người kia đủ khả năng tự lo cho bản thân.</p>

<div class="insight-box">💡 Tình yêu thương thực sự đôi khi có nghĩa là để người khác tự bước, tự ngã và tự đứng dậy. Bạn không thể yêu thay người khác — bạn chỉ có thể tạo ra không gian an toàn để họ học cách yêu bản thân mình.</div>`,

    7: (name, period) => `<p class="nar">Thử thách số <strong>7</strong> trong giai đoạn <strong>${period}</strong> yêu cầu <strong>${name}</strong> học cách <strong>kết nối chiều sâu với thế giới bên ngoài — không phải bằng cách hòa tan vào đám đông, mà bằng cách chia sẻ những gì mình tìm thấy trong thế giới nội tâm</strong>.</p>

<p class="nar"><strong>Bẫy tinh vi cần nhận diện:</strong> Dùng trí tuệ như một công cụ để giữ khoảng cách với người khác — phân tích cảm xúc thay vì cảm nhận chúng. Hoặc cô lập mình vì cảm thấy người khác không đủ "sâu" để hiểu mình — và từ đó bỏ lỡ những kết nối thực sự quý giá.</p>

<p class="nar"><strong>Phương pháp vượt qua:</strong> Thực hành chia sẻ một điều thực sự từ nội tâm với một người bạn tin tưởng — không phải lý thuyết hay phân tích, mà là một cảm xúc thực, một nỗi nghi ngờ thực, một điều bạn chưa dám nói với ai. Mỗi lần bạn bước ra khỏi bức tường vô hình của mình, bạn đang hoàn trả thử thách số 7.</p>

<div class="insight-box">💡 Sự bí ẩn hấp dẫn — nhưng sự kết nối đòi hỏi sự dễ bị tổn thương. Tri thức giữ trong lòng là tri thức chết — chỉ khi được chia sẻ, nó mới thực sự sống và có ý nghĩa.</div>`,

    8: (name, period) => `<p class="nar">Thử thách số <strong>8</strong> trong giai đoạn <strong>${period}</strong> đặt <strong>${name}</strong> trước bài kiểm tra của quyền lực và đạo đức: <strong>học cách sử dụng tiền bạc, ảnh hưởng và nguồn lực theo cách phản ánh giá trị thực sự của mình — không phải chạy theo quyền lực vì sợ hãi hay thiếu thốn</strong>.</p>

<p class="nar"><strong>Bẫy tinh vi cần nhận diện:</strong> Hai thái cực đều là bẫy: tham quyền lực đến mức bỏ qua đạo đức và con người — hoặc sợ quyền lực đến mức từ chối đảm nhận trách nhiệm lãnh đạo khi cuộc đời trao cho bạn cơ hội đó. Cả hai đều xuất phát từ mối quan hệ không lành mạnh với khái niệm về sức mạnh và sự thành công.</p>

<p class="nar"><strong>Phương pháp vượt qua:</strong> Thiết lập một bộ nguyên tắc đạo đức rõ ràng về cách bạn muốn sử dụng tiền bạc và ảnh hưởng — trước khi bạn có chúng trong tay. Thực hành quyết định tài chính nhỏ theo nguyên tắc đó. Dần dần, sức mạnh trở thành công cụ phục vụ, không phải mục đích tự thân.</p>

<div class="insight-box">💡 Thử thách số 8 không phải là tránh né quyền lực — mà là sử dụng nó một cách có đạo đức và ý thức. Hỏi thường xuyên: "Quyết định này phục vụ ai?"</div>`,

    9: (name, period) => `<p class="nar">Thử thách số <strong>9</strong> trong giai đoạn <strong>${period}</strong> là một trong những thử thách sâu sắc và phổ quát nhất mà con người có thể trải qua: <strong>học cách buông bỏ — những gì đã qua, những nỗi đau chưa được chữa lành, những mối quan hệ đã hết vai trò, những phiên bản cũ của chính mình</strong>. Và <strong>${name}</strong> được vũ trụ mời thực hành bài học đó ngay trong giai đoạn này.</p>

<p class="nar"><strong>Bẫy tinh vi cần nhận diện:</strong> Ôm giữ nỗi đau vì cảm thấy buông bỏ có nghĩa là phản bội hay quên đi điều quan trọng. Hoặc ngược lại: buông bỏ quá sớm, quá dễ dàng — chạy trốn khỏi trách nhiệm thay vì thực sự kết thúc một cách trọn vẹn. Cũng cần cẩn thận với xu hướng ôm đồm nỗi đau của người khác đến mức quên mất ranh giới của chính mình.</p>

<p class="nar"><strong>Phương pháp vượt qua:</strong> Bắt đầu với những buông bỏ nhỏ — một đồ vật không còn cần thiết, một thói quen không còn phục vụ, một sự oán giận cũ nhỏ. Tập cảm ơn trước khi bước tiếp. Sự tha thứ không phải là nói rằng điều gì đó không sao — mà là quyết định không để nó tiếp tục giữ bạn lại.</p>

<div class="insight-box">💡 Buông bỏ là hành động dũng cảm nhất và yêu thương nhất bạn có thể làm cho tương lai của chính mình. Bàn tay giữ chặt không thể nhận được điều mới. Hãy mở lòng ra — và tin rằng những gì xứng đáng sẽ đến.</div>`,
  },

  // ════════════════════════════════════════════════════════════════════
  // CHỈ SỐ VƯỢT KHÓ (TENSION NUMBER) — Per-number deep narrative (1-9)
  // Gọi: NT.tensionNumber[num](name, d)
  // ════════════════════════════════════════════════════════════════════
  tensionNumber: {
    1: (name, d) => `<p class="nar">Khi áp lực đạt đỉnh điểm và mọi kế hoạch dự phòng đều thất bại, <strong>${name}</strong> kích hoạt một phản xạ mạnh mẽ và quyết đoán: <strong>năng lượng số 1 — bản năng tiên phong và tự lực</strong>. Trong những khoảnh khắc nguy cấp, bạn không đợi người khác giải cứu — bạn tự đứng dậy, tự tìm giải pháp và tự bước tiếp. Đây là sức mạnh nguyên thủy được hình thành qua nhiều kiếp sống của một linh hồn đã học cách tồn tại bằng cách không phụ thuộc.</p>

<p class="nar"><strong>Khai thác tích cực:</strong> Năng lượng vượt khó số 1 của bạn mạnh nhất khi bạn cần đưa ra quyết định nhanh chóng, khi phải đứng một mình chống lại đám đông, hoặc khi cần bắt đầu lại từ đầu sau một thất bại. Khả năng "reset" tức thì và lấy lại phương hướng là tài sản quý giá — không phải ai cũng có.</p>

<p class="nar"><strong>Điểm cần cân bằng:</strong> Khi "chế độ khẩn cấp" này được kích hoạt quá thường xuyên hoặc trong những tình huống không thực sự cần thiết, bạn có thể trở nên xa cách, cứng nhắc và từ chối sự giúp đỡ kể cả khi thực sự cần. Hãy phân biệt: đâu là tình huống cần độc lập, và đâu là tình huống nên để người khác cùng gánh.</p>

<div class="insight-box">💡 <strong>Khai thác tối đa sức mạnh vượt khó của bạn:</strong> ${d?.advice || 'Luyện tập tự hỏi trong áp lực: "Điều gì tôi có thể làm ngay bây giờ?" — câu hỏi này kích hoạt năng lương số 1 theo chiều hướng xây dựng thay vì phòng thủ. Mỗi cuộc khủng hoảng vượt qua được là bằng chứng về sức mạnh của bạn.'}</div>`,

    2: (name, d) => `<p class="nar">Khi đối mặt với áp lực tột cùng, <strong>${name}</strong> không phản ứng bằng sức mạnh — mà bằng <strong>sự kết nối và thấu hiểu: năng lượng vượt khó số 2</strong>. Trong những khoảnh khắc khó khăn nhất, bản năng sâu nhất của bạn không phải là đối đầu — mà là tìm kiếm sự đồng minh, xoa dịu xung đột và tìm ra điểm chung. Đây là trí tuệ cảm xúc được mài giũa qua nhiều kiếp sống.</p>

<p class="nar"><strong>Khai thác tích cực:</strong> Khi người khác hoảng loạn, bạn trấn tĩnh. Khi xung đột leo thang, bạn tìm con đường trung dung. Khả năng cảm nhận được điều người khác thực sự cần — ngay cả khi họ không nói ra — giúp bạn hóa giải những tình huống mà sức mạnh thuần túy không thể giải quyết. Đây là tài năng cực kỳ quý giá trong thời đại ngày nay.</p>

<p class="nar"><strong>Điểm cần cân bằng:</strong> Dưới áp lực cực độ, năng lượng số 2 đôi khi biến thành sự nhượng bộ quá mức — đồng ý với mọi thứ chỉ để giải tỏa căng thẳng, hoặc không dám nói điều khó nghe khi thực sự cần thiết. Hãy nhớ: sự hòa hợp thực sự không phải là tránh né mà là giải quyết trung thực.</p>

<div class="insight-box">💡 <strong>Khai thác tối đa sức mạnh vượt khó của bạn:</strong> ${d?.advice || 'Trong những cuộc xung đột, hãy hỏi: "Điều gì cả hai chúng ta thực sự muốn?" Câu hỏi này chuyển hướng cuộc trò chuyện từ chiến tranh sang hợp tác — và đó chính xác là lúc năng lượng số 2 của bạn trở thành siêu năng lực.'}</div>`,

    3: (name, d) => `<p class="nar">Khi mọi thứ sụp đổ xung quanh, <strong>${name}</strong> kích hoạt một phản xạ bất ngờ: <strong>sáng tạo và biểu đạt — năng lượng vượt khó số 3</strong>. Thay vì co rúm lại, bạn tìm cách kể câu chuyện khác về tình huống này. Thay vì chìm đắm trong vấn đề, bạn nhìn thấy góc độ hài hước hoặc bài học nghệ thuật ẩn trong đó. Đây là khả năng tái khung thực tại — một kỹ năng tâm lý học gọi là "cognitive reframing" — và bạn làm điều đó một cách hoàn toàn tự nhiên.</p>

<p class="nar"><strong>Khai thác tích cực:</strong> Khả năng tạo ra câu chuyện mới, truyền cảm hứng cho người khác trong lúc khó khăn và biến áp lực thành sáng tạo là tài sản đặc biệt của bạn. Khi cả nhóm mất tinh thần, bạn là người có thể đổi không khí bằng một câu nói, một ý tưởng mới, một góc nhìn tươi sáng hơn.</p>

<p class="nar"><strong>Điểm cần cân bằng:</strong> Dưới áp lực, năng lượng số 3 đôi khi biến thành sự né tránh — dùng sự hài hước, sự bận rộn sáng tạo hay giao tiếp xã hội để không phải đối mặt với vấn đề thực sự. Hãy đảm bảo "tái khung" không trở thành "phủ nhận".</p>

<div class="insight-box">💡 <strong>Khai thác tối đa sức mạnh vượt khó của bạn:</strong> ${d?.advice || 'Mỗi khi trong khủng hoảng, hãy viết hoặc nói ra: "Câu chuyện tôi đang kể với bản thân về tình huống này là gì?" Chỉ cần nhận ra câu chuyện đó, bạn đã có khả năng viết lại nó — và đó là siêu năng lực của số 3.'}</div>`,

    4: (name, d) => `<p class="nar">Khi thế giới trở nên hỗn loạn và không thể đoán được, <strong>${name}</strong> bản năng trở về với thứ mình tin tưởng nhất: <strong>cấu trúc, kỷ luật và quy trình — năng lượng vượt khó số 4</strong>. Trong khi người khác hoảng loạn, bạn bắt đầu lập danh sách, tổ chức lại mọi thứ và tìm kiếm nguyên tắc nào có thể áp dụng vào tình huống này. Đây là sức mạnh của một tâm trí được huấn luyện để tìm trật tự trong hỗn loạn.</p>

<p class="nar"><strong>Khai thác tích cực:</strong> Khả năng giữ bình tĩnh và hành động có hệ thống khi áp lực leo thang là tài sản vô cùng quý giá. Trong khủng hoảng, bạn là người mà mọi người cần — không phải vì bạn hào nhoáng, mà vì bạn đáng tin cậy, thực tế và không bỏ cuộc. Tính nhất quán và kỷ luật của bạn là mỏ neo cho những người xung quanh.</p>

<p class="nar"><strong>Điểm cần cân bằng:</strong> Dưới áp lực cực độ, số 4 đôi khi trở nên cứng nhắc — bám chặt vào kế hoạch ngay cả khi kế hoạch đó rõ ràng không còn phù hợp. Hãy nhớ: linh hoạt trong thực thi không phải là từ bỏ kỷ luật — đó là trí tuệ của người thực sự kinh nghiệm.</p>

<div class="insight-box">💡 <strong>Khai thác tối đa sức mạnh vượt khó của bạn:</strong> ${d?.advice || 'Trong bất kỳ khủng hoảng nào, hãy tự hỏi: "Điều nhỏ nhất tôi có thể làm ngay bây giờ để tạo ra cảm giác kiểm soát?" Hành động nhỏ đó — dù chỉ là sắp xếp bàn làm việc hay lập danh sách 3 bước — kích hoạt năng lượng số 4 và giúp bạn lấy lại phương hướng.'}</div>`,

    5: (name, d) => `<p class="nar">Khi mọi thứ đóng băng và không có lối thoát rõ ràng, <strong>${name}</strong> kích hoạt phản xạ phiêu lưu: <strong>thích nghi nhanh, tìm đường mới và không bị mắc kẹt — năng lượng vượt khó số 5</strong>. Bạn không sụp đổ trước sự thay đổi bất ngờ — bạn nhảy vào nó. Trong khi người khác còn đang than thở về kế hoạch bị phá vỡ, bạn đã bắt đầu khám phá những lến đi bất ngờ xuất hiện từ đó.</p>

<p class="nar"><strong>Khai thác tích cực:</strong> Khả năng xoay trục nhanh chóng, tìm ra lối thoát sáng tạo và không bị tê liệt bởi sự thay đổi là năng lượng cực kỳ cần thiết trong khủng hoảng. Bạn nhìn thấy cơ hội mà người khác bỏ lỡ vì quá bận than vãn về những gì đã mất. Sự linh hoạt của bạn là tài sản không thể thay thế.</p>

<p class="nar"><strong>Điểm cần cân bằng:</strong> Năng lượng vượt khó số 5 đôi khi biến thành sự chạy trốn — thay đổi liên tục để không phải đối mặt với bất kỳ điều gì quá lâu. Hãy đảm bảo sự linh hoạt của bạn đang hướng về phía trước, không phải đang vòng vo để tránh né điều khó.</p>

<div class="insight-box">💡 <strong>Khai thác tối đa sức mạnh vượt khó của bạn:</strong> ${d?.advice || 'Khi kế hoạch vỡ, hãy tự hỏi: "Lối thoát nào đang mở ra mà trước đây không có?" Câu hỏi này chuyển năng lực số 5 của bạn từ bản năng phản ứng thành công cụ chiến lược — và đó là khi nó thực sự mạnh nhất.'}</div>`,

    6: (name, d) => `<p class="nar">Khi áp lực tột đỉnh, <strong>${name}</strong> không rút lui — bạn kết nối sâu hơn: <strong>năng lượng vượt khó số 6 — sức mạnh của tình yêu thương và trách nhiệm</strong>. Khi mọi thứ sụp đổ, bản năng sâu nhất của bạn là hỏi "Ai đang cần tôi?" và tìm sức mạnh trong việc phục vụ người khác. Đây là nguồn nhiên liệu tinh thần đặc biệt — bạn có thể gánh những gánh nặng phi thường khi làm vì người mình yêu thương.</p>

<p class="nar"><strong>Khai thác tích cực:</strong> Khả năng tìm thấy sức mạnh trong tình yêu thương và trách nhiệm là tài sản đặc biệt của bạn trong khủng hoảng. Bạn không chiến đấu vì bản thân — bạn chiến đấu vì gia đình, vì người thân, vì điều gì đó ý nghĩa hơn bản ngã. Và điều đó tạo ra một loại sức bền mà không sức mạnh cá nhân nào sánh được.</p>

<p class="nar"><strong>Điểm cần cân bằng:</strong> Số 6 dưới áp lực có thể dẫn đến việc ôm đồm trách nhiệm không phải của mình, kiểm soát quá mức người thân vì "lo cho họ", hoặc quên đi nhu cầu của chính mình đến mức kiệt sức hoàn toàn. Hãy nhớ: bạn không thể đổ rượu từ một chiếc ly rỗng.</p>

<div class="insight-box">💡 <strong>Khai thác tối đa sức mạnh vượt khó của bạn:</strong> ${d?.advice || 'Trong khủng hoảng, hãy xác định một người hoặc một điều cụ thể mà bạn đang bảo vệ — và để đó trở thành nguồn nhiên liệu cho hành động của bạn. Tình yêu thương có hướng đích là sức mạnh phi thường nhất mà số 6 sở hữu.'}</div>`,

    7: (name, d) => `<p class="nar">Khi thế giới bên ngoài trở nên hỗn loạn, <strong>${name}</strong> tìm kiếm sự ổn định ở nơi không ai ngờ tới: <strong>bên trong — năng lượng vượt khó số 7 — sức mạnh của tri thức và sự tĩnh lặng</strong>. Trong khi người khác hoảng loạn và tìm kiếm thông tin bên ngoài, bạn đi sâu vào bên trong — phân tích, suy ngẫm và tìm kiếm sự thật trong đống hỗn độn. Bạn không phản ứng ngay — bạn quan sát trước, hiểu sau, rồi hành động chính xác.</p>

<p class="nar"><strong>Khai thác tích cực:</strong> Khả năng giữ bình tĩnh và tư duy rõ ràng trong khi người khác bị cuốn vào cảm xúc là tài sản vô giá trong khủng hoảng. Bạn nhìn thấy bức tranh toàn cảnh khi người khác chỉ thấy chi tiết. Trí tuệ phân tích và trực giác sâu sắc của bạn có thể tìm ra những giải pháp mà cách tiếp cận "brute force" bỏ lỡ.</p>

<p class="nar"><strong>Điểm cần cân bằng:</strong> Dưới áp lực, số 7 đôi khi phân tích quá nhiều đến mức bị tê liệt — "paralysis by analysis". Hoặc rút lui hoàn toàn vào nội tâm trong khi tình huống cần hành động ngay. Hãy đặt deadline cho quá trình suy nghĩ và chấp nhận rằng đôi khi quyết định "đủ tốt ngay bây giờ" tốt hơn quyết định "hoàn hảo nhưng quá muộn".</p>

<div class="insight-box">💡 <strong>Khai thác tối đa sức mạnh vượt khó của bạn:</strong> ${d?.advice || 'Khi trong khủng hoảng, hãy dành 5 phút im lặng — không làm gì cả, chỉ quan sát. Sau đó viết ra 3 sự thật rõ ràng nhất bạn biết về tình huống. Bước này khai thác đúng sức mạnh phân tích của số 7 mà không sa vào phân tích quá đà.'}</div>`,

    8: (name, d) => `<p class="nar">Khi tất cả sụp đổ, <strong>${name}</strong> không gục ngã — bạn đứng thẳng và lấy lại quyền kiểm soát: <strong>năng lượng vượt khó số 8 — sức mạnh của quyền lực và tầm nhìn chiến lược</strong>. Đây là phản xạ của một nhà lãnh đạo đã trải qua nhiều lần thất bại và học cách đứng dậy: bạn đánh giá tổn thất, xác định nguồn lực còn lại và bắt đầu xây dựng lại ngay lập tức. Không có thời gian để than vãn — chỉ có hành động.</p>

<p class="nar"><strong>Khai thác tích cực:</strong> Sức mạnh tuyệt vời của bạn là khả năng nhìn thấy cơ hội trong thảm họa. Khi người khác thấy mất mát, bạn thấy khoảng trống đang mở ra. Tư duy chiến lược, khả năng huy động nguồn lực và bản năng biết đâu là đòn bẩy mạnh nhất — đây là những vũ khí bạn khai triển trong khủng hoảng.</p>

<p class="nar"><strong>Điểm cần cân bằng:</strong> Số 8 dưới áp lực đôi khi trở nên lạnh lùng và chỉ tập trung vào kết quả, bỏ qua cảm xúc và con người trong quá trình đó. Hãy nhớ: trong khủng hoảng dài hạn, sức mạnh của bạn cũng đến từ việc duy trì được những mối quan hệ tin tưởng — không chỉ đến từ quyết định đúng.</p>

<div class="insight-box">💡 <strong>Khai thác tối đa sức mạnh vượt khó của bạn:</strong> ${d?.advice || 'Mỗi khi trong khủng hoảng, hãy hỏi: "Nguồn lực nào tôi vẫn còn?" — không phải "Tôi đã mất gì?" Câu hỏi này kích hoạt tư duy chiến lược của số 8 và chuyển từ mindset mất mát sang mindset xây dựng lại.'}</div>`,

    9: (name, d) => `<p class="nar">Khi cuộc sống đặt <strong>${name}</strong> vào những khoảnh khắc tối tăm nhất, bạn tìm thấy sức mạnh từ một nguồn rất đặc biệt: <strong>ý nghĩa và lòng trắc ẩn — năng lượng vượt khó số 9</strong>. Bạn không chỉ hỏi "Tôi phải làm gì?" — bạn hỏi "Điều này có ý nghĩa gì trong bức tranh lớn hơn?" Khả năng đặt đau khổ cá nhân vào bối cảnh nhân loại rộng lớn hơn giúp bạn tìm thấy sự bình an giữa cơn bão.</p>

<p class="nar"><strong>Khai thác tích cực:</strong> Trí tuệ cảm xúc, tầm nhìn rộng lớn và khả năng biến đau khổ cá nhân thành sự kết nối với người khác là tài sản phi thường của bạn trong khủng hoảng. Bạn có thể truyền cảm hứng cho những người đã từ bỏ, tìm thấy ý nghĩa trong những tình huống không ai muốn và giúp người khác thấy con đường qua khi họ chỉ thấy bức tường.</p>

<p class="nar"><strong>Điểm cần cân bằng:</strong> Số 9 dưới áp lực đôi khi quá tập trung vào ý nghĩa tổng quát mà bỏ qua những bước thực tế cần thực hiện ngay. Hoặc hấp thu quá nhiều nỗi đau của người khác đến mức kiệt sức về mặt cảm xúc. Hãy biết giới hạn năng lượng chữa lành của mình.</p>

<div class="insight-box">💡 <strong>Khai thác tối đa sức mạnh vượt khó của bạn:</strong> ${d?.advice || 'Trong khủng hoảng, hãy hỏi: "Điều này đang dạy tôi điều gì mà tôi cần biết?" Câu hỏi này không phủ nhận nỗi đau — nó mở ra cánh cửa để năng lượng số 9 của bạn biến tình huống khó thành bài học sâu sắc và cuối cùng là sức mạnh.'}</div>`,
  },

  // ════════════════════════════════════════════════════════════════════
  // THỬ THÁCH LINH HỒN — Per-number deep narrative (1-9)
  // Gọi: NT.soulChallenge[num](name, d)
  // ════════════════════════════════════════════════════════════════════
  soulChallenge: {
    1: (name, d) => `<p class="nar">Thử thách linh hồn số <strong>1</strong> của <strong>${name}</strong> nằm ở ranh giới mỏng manh giữa <strong>sư tự tin lành mạnh và cái tôi bảo vệ quá mức</strong>. Sâu bên trong, linh hồn bạn mang một nỗi sợ không được nói thành lời: sợ rằng nếu bạn không tự mình kiểm soát tất cả, mọi thứ sẽ sụp đổ — hoặc tệ hơn, người khác sẽ thấy được điểm yếu của bạn.</p>

<p class="nar"><strong>Khuôn mẫu cảm xúc thường thấy:</strong> Khi cảm thấy bị đe dọa hoặc mất kiểm soát, bạn trở nên cứng nhắc, bướng bỉnh và từ chối lắng nghe. Đây không phải là sức mạnh — đây là lớp giáp bảo vệ một tâm hồn dễ tổn thương hơn vẻ ngoài cho thấy. Bạn có thể làm tổn thương người thân gần nhất bằng sự xa cách và cứng rắn không cần thiết trong những khoảnh khắc họ chỉ muốn kết nối.</p>

<p class="nar"><strong>Con đường hóa giải:</strong> ${d?.how_to_overcome || 'Luyện tập sự dễ bị tổn thương có chọn lọc — không phải với mọi người, mà với những người bạn thực sự tin tưởng. Mỗi lần bạn nói "Tôi cần giúp đỡ" hoặc "Tôi không chắc" mà không cảm thấy mất đi bản thân, bạn đang hóa giải thử thách linh hồn số 1 ở tầng sâu nhất.'}</p>

<div class="insight-box">💡 <strong>Thông điệp từ linh hồn bạn:</strong> Sức mạnh thực sự không phải là không bao giờ cần người khác — mà là đủ mạnh để nhận ra khi nào mình cần và đủ dũng cảm để thừa nhận điều đó. Người biết nhờ giúp đỡ không phải là yếu — họ là người khôn ngoan nhất trong phòng.</div>`,

    2: (name, d) => `<p class="nar">Thử thách linh hồn số <strong>2</strong> của <strong>${name}</strong> ẩn trong chính điểm mạnh lớn nhất của bạn: <strong>sự nhạy cảm và khả năng đồng cảm có thể trở thành nỗi sợ bị từ chối và sự phụ thuộc cảm xúc</strong>. Sâu bên trong, linh hồn bạn mang một câu hỏi chưa được trả lời: "Liệu tôi có đủ giá trị để được yêu thương mà không cần phải liên tục chứng minh điều đó?"</p>

<p class="nar"><strong>Khuôn mẫu cảm xúc thường thấy:</strong> Bạn có xu hướng đặt nhu cầu của người khác lên trên của mình — không hẳn vì muốn, mà vì sợ rằng nếu không làm vậy, họ sẽ rời đi. Sự do dự khi ra quyết định, xu hướng tìm kiếm sự xác nhận từ bên ngoài và nỗi sợ xung đột có thể giữ bạn lại trong những mối quan hệ hoặc tình huống đã không còn lành mạnh.</p>

<p class="nar"><strong>Con đường hóa giải:</strong> ${d?.how_to_overcome || 'Thực hành tin vào giá trị của chính mình mà không cần bằng chứng từ người khác. Bắt đầu bằng những quyết định nhỏ không hỏi ý kiến ai — không phải để cô lập, mà để xây dựng mối quan hệ lành mạnh với tiếng nói bên trong bạn.'}</p>

<div class="insight-box">💡 <strong>Thông điệp từ linh hồn bạn:</strong> Bạn không cần phải làm hài lòng để được yêu thương. Những người thực sự yêu bạn muốn thấy bạn thật — không phải bạn đã được tối ưu hóa để phù hợp với kỳ vọng của họ. Hãy cho họ cơ hội yêu thương phiên bản thật nhất của bạn.</div>`,

    3: (name, d) => `<p class="nar">Thử thách linh hồn số <strong>3</strong> của <strong>${name}</strong> ẩn trong nghịch lý này: <strong>linh hồn bạn khao khát biểu đạt — nhưng nỗi sợ không được chấp nhận đôi khi khiến bạn biểu đạt theo cách không trung thực</strong>. Bạn nói điều người khác muốn nghe, cởi mở một cách hời hợt, tỏa năng lượng vui vẻ nhưng giữ lại những gì thực sự muốn nói — vì sợ rằng nếu nói thật, người ta sẽ không còn thích bạn nữa.</p>

<p class="nar"><strong>Khuôn mẫu cảm xúc thường thấy:</strong> Một mặt bạn có thể tỏ ra nói nhiều và biểu đạt nhiều — nhưng thực chất không ai thực sự biết bạn cảm thấy gì. Nỗi cô đơn trong đám đông là trải nghiệm quen thuộc của thử thách linh hồn số 3. Hoặc bạn phân tán sức sáng tạo vì không đủ can đảm đầu tư vào một điều nào đó đủ sâu để có thể thất bại.</p>

<p class="nar"><strong>Con đường hóa giải:</strong> ${d?.how_to_overcome || 'Thực hành nói thật một điều mỗi ngày với người bạn tin tưởng — không phải để gây ấn tượng, không phải để giải trí, mà chỉ vì đó là điều bạn thực sự muốn nói. Sự biểu đạt chân thực, dù không hoàn hảo, kết nối lòng người sâu hơn bất kỳ màn trình diễn nào.'}</p>

<div class="insight-box">💡 <strong>Thông điệp từ linh hồn bạn:</strong> Tiếng nói thật của bạn — không phải phiên bản được chỉnh sửa và tối ưu hóa — là thứ thế giới cần. Sự chân thực không hoàn hảo luôn hấp dẫn hơn sự hoàn hảo không chân thực.</div>`,

    4: (name, d) => `<p class="nar">Thử thách linh hồn số <strong>4</strong> của <strong>${name}</strong> nằm ở <strong>cuộc chiến nội tâm giữa sự kiểm soát và sự tin tưởng</strong>. Linh hồn bạn mang một niềm tin sâu sắc: "Nếu tôi không làm đúng, mọi thứ sẽ sụp đổ." Niềm tin này tạo ra một người kỷ luật, đáng tin cậy, cần cù — nhưng cũng tạo ra một người không bao giờ thực sự được nghỉ ngơi vì luôn phải canh chừng mọi thứ.</p>

<p class="nar"><strong>Khuôn mẫu cảm xúc thường thấy:</strong> Đặt tiêu chuẩn quá cao cho bản thân và người khác — rồi thất vọng khi không ai (kể cả chính bạn) đạt được. Khó buông tay và tin tưởng người khác làm thay. Xu hướng làm việc quá sức cho đến khi cơ thể hoặc cảm xúc phải "đình công". Đôi khi sự nhàm chán và trì trệ cũng là biểu hiện của thử thách này — khi nỗi sợ thất bại lớn đến mức không dám bắt đầu bất cứ điều gì mới.</p>

<p class="nar"><strong>Con đường hóa giải:</strong> ${d?.how_to_overcome || 'Thực hành "tốt đủ" thay vì "hoàn hảo". Mỗi lần bạn hoàn thành một việc ở mức 80% và để nó đi thay vì cầu toàn đến 100%, bạn đang luyện tập sự tin tưởng — vào bản thân và vào thế giới. Đó là bài học sâu nhất của thử thách linh hồn số 4.'}</p>

<div class="insight-box">💡 <strong>Thông điệp từ linh hồn bạn:</strong> Vũ trụ không sụp đổ khi bạn nghỉ ngơi. Sức mạnh thực sự không phải là không bao giờ ngã — mà là biết khi nào cần buông và tin rằng mọi thứ vẫn ổn dù không hoàn hảo.</div>`,

    5: (name, d) => `<p class="nar">Thử thách linh hồn số <strong>5</strong> của <strong>${name}</strong> ẩn trong câu hỏi mà bạn không phải lúc nào cũng dám hỏi thẳng: <strong>Tôi đang tìm tự do — hay đang chạy trốn?</strong> Linh hồn bạn khao khát khám phá và trải nghiệm — nhưng đôi khi phía sau sự phiêu lưu không ngừng là một nỗi sợ sâu xa hơn: sợ sự gắn kết, sợ bị mắc kẹt, sợ trở nên tầm thường nếu dừng lại.</p>

<p class="nar"><strong>Khuôn mẫu cảm xúc thường thấy:</strong> Bắt đầu nhiều thứ nhưng khó hoàn thành. Mất hứng thú khi mọi thứ trở nên quen thuộc. Cảm thấy ngột ngạt trong các mối quan hệ hoặc công việc dài hạn — không phải vì chúng xấu, mà vì sự ổn định bản thân cảm thấy như "bị giam". Đôi khi tự phá vỡ những điều tốt đẹp trước khi chúng có cơ hội trở thành thứ bạn có thể mất.</p>

<p class="nar"><strong>Con đường hóa giải:</strong> ${d?.how_to_overcome || 'Thực hành ở lại khi mọi thứ bắt đầu trở nên quen thuộc — thay vì chạy đi tìm điều mới. Chiều sâu không bao giờ đến từ bề mặt. Những mối quan hệ và dự án vượt qua được giai đoạn "nhàm chán" thường chứa đựng những kho báu mà sự phiêu lưu bề ngoài không bao giờ chạm đến được.'}</p>

<div class="insight-box">💡 <strong>Thông điệp từ linh hồn bạn:</strong> Tự do thực sự không phải là không có ràng buộc — mà là cảm thấy tự do ngay cả khi đang cam kết. Khi bạn tìm được điều đó, bạn sẽ không cần chạy đi đâu nữa.</div>`,

    6: (name, d) => `<p class="nar">Thử thách linh hồn số <strong>6</strong> của <strong>${name}</strong> là một trong những thử thách tinh vi nhất — bởi vì nó ẩn trong điều trông có vẻ tốt đẹp: <strong>việc chăm sóc người khác đôi khi trở thành cách để tránh khỏi chính mình</strong>. Linh hồn bạn tìm kiếm ý nghĩa qua sự phục vụ — nhưng đôi khi cần được hỏi: bạn giúp đỡ vì yêu thương, hay vì sợ không được cần đến?</p>

<p class="nar"><strong>Khuôn mẫu cảm xúc thường thấy:</strong> Cảm thấy có lỗi khi không giúp được ai. Khó nói "không" kể cả khi đã kiệt sức. Oán giận âm thầm khi sự hi sinh không được đáp lại — nhưng không nói ra vì cảm thấy mình "không nên" mong đổi lại. Hoặc kiểm soát người mình yêu theo cách tinh vi vì "biết điều gì tốt cho họ".</p>

<p class="nar"><strong>Con đường hóa giải:</strong> ${d?.how_to_overcome || 'Thực hành nhận trước khi cho — không phải ích kỷ, mà là lành mạnh. Mỗi lần bạn cho phép ai đó chăm sóc lại bạn mà không cảm thấy nợ, bạn đang hóa giải thử thách linh hồn số 6. Học cách được yêu thương cũng quan trọng như học cách yêu thương.'}</p>

<div class="insight-box">💡 <strong>Thông điệp từ linh hồn bạn:</strong> Bạn không cần phải không ngừng cho đi để xứng đáng tồn tại. Giá trị của bạn không đến từ việc hữu ích — nó đến từ việc là chính mình. Khi bạn hiểu điều này, tình yêu thương của bạn trở nên tự do và đẹp đẽ hơn gấp bội.</div>`,

    7: (name, d) => `<p class="nar">Thử thách linh hồn số <strong>7</strong> của <strong>${name}</strong> nằm trong chiều sâu mà chính bạn tạo ra: <strong>khoảng cách giữa trí tuệ và trái tim</strong>. Linh hồn bạn tìm kiếm sự thật và chiều sâu — nhưng đôi khi dùng trí tuệ như một lá chắn để không phải cảm nhận thực sự, không phải bị tổn thương thực sự và không phải được yêu thương thực sự.</p>

<p class="nar"><strong>Khuôn mẫu cảm xúc thường thấy:</strong> Phân tích cảm xúc thay vì sống qua chúng. Giữ khoảng cách với người khác dưới danh nghĩa "cần không gian riêng". Nghi ngờ sâu xa về động cơ của người khác — đôi khi đến mức không thể tin tưởng ai đủ để thực sự kết nối. Cô đơn sâu sắc ngay cả khi có nhiều người xung quanh.</p>

<p class="nar"><strong>Con đường hóa giải:</strong> ${d?.how_to_overcome || 'Thực hành chia sẻ một điều thực sự từ cảm xúc — không phải từ suy nghĩ — với người bạn tin tưởng một lần mỗi tuần. Bắt đầu nhỏ. Mỗi lần bạn cho ai đó nhìn thấy phía bên trong mà không ngay lập tức phân tích nó đi, bạn đang hóa giải thử thách linh hồn số 7.'}</p>

<div class="insight-box">💡 <strong>Thông điệp từ linh hồn bạn:</strong> Trí tuệ của bạn là món quà — nhưng không phải là bức tường. Trái tim con người không cần được hiểu hoàn toàn trước khi được yêu thương. Hãy cho phép mình được yêu thương với tất cả những điều bạn chưa hiểu về chính mình.</div>`,

    8: (name, d) => `<p class="nar">Thử thách linh hồn số <strong>8</strong> của <strong>${name}</strong> ẩn trong mối quan hệ phức tạp với quyền lực và sự thành công: <strong>sâu bên trong, linh hồn bạn sợ rằng nếu không đủ mạnh, đủ thành công, đủ quyền lực — bạn sẽ không có giá trị</strong>. Niềm tin này thúc đẩy bạn đạt được nhiều thứ đáng kể — nhưng cũng tạo ra một vòng lặp không có điểm dừng: không bao giờ đủ, không bao giờ được phép nghỉ ngơi.</p>

<p class="nar"><strong>Khuôn mẫu cảm xúc thường thấy:</strong> Đo lường giá trị bản thân qua kết quả và địa vị. Cảm thấy bất an sâu sắc khi thất bại hoặc khi người khác thành công hơn. Khó buông bỏ quyền kiểm soát — vì kiểm soát cảm thấy như an toàn. Mối quan hệ với tiền bạc có thể là điểm căng thẳng liên tục: hoặc tích lũy ám ảnh, hoặc vô nghĩa hoàn toàn với tiền bạc.</p>

<p class="nar"><strong>Con đường hóa giải:</strong> ${d?.how_to_overcome || 'Thực hành tách giá trị của bạn ra khỏi kết quả bạn tạo ra. Hãy thử hỏi: "Nếu tôi không có bất kỳ thành tích nào trong tuần này, tôi có vẫn xứng đáng được yêu thương không?" Câu trả lời — và cảm xúc đi kèm — sẽ cho bạn biết nhiều về thử thách linh hồn số 8 của mình.'}</p>

<div class="insight-box">💡 <strong>Thông điệp từ linh hồn bạn:</strong> Bạn có giá trị trước khi làm được bất cứ điều gì. Sức mạnh thực sự của linh hồn số 8 không phải là tích lũy — mà là biết rằng mình đủ, ngay cả khi không còn gì để chứng minh.</div>`,

    9: (name, d) => `<p class="nar">Thử thách linh hồn số <strong>9</strong> của <strong>${name}</strong> là thử thách hóa giải sâu sắc nhất: <strong>học cách buông bỏ mà không mất bản thân</strong>. Linh hồn bạn mang một bộ nhớ tập thể rất dày — những vết thương cũ, những nỗi đau chưa được chữa lành, những mối quan hệ đã kết thúc nhưng vẫn còn đó trong trái tim. Bạn biết rằng cần buông — nhưng buông có nghĩa là quên đi, là phản bội, là trở thành người khác?</p>

<p class="nar"><strong>Khuôn mẫu cảm xúc thường thấy:</strong> Giữ oán giận lâu hơn cần thiết — không phải để trừng phạt người kia, mà vì không biết mình là ai nếu không có mối đau đó. Xu hướng hấp thụ nỗi đau của người khác như thể của mình. Lý tưởng hóa quá khứ hoặc những gì đã mất thay vì ở lại với hiện tại.</p>

<p class="nar"><strong>Con đường hóa giải:</strong> ${d?.how_to_overcome || 'Thực hành tha thứ — không phải vì người kia xứng đáng, mà vì BẠN xứng đáng được tự do. Buông bỏ không phải là xóa ký ức — mà là quyết định không để ký ức đó còn được phép định nghĩa tương lai của bạn.'}</p>

<div class="insight-box">💡 <strong>Thông điệp từ linh hồn bạn:</strong> Bạn không phải là những vết thương của mình. Bạn không phải là lịch sử của mình. Bạn là người có khả năng chọn — mỗi ngày — buông bỏ hay giữ lại. Và đó là quyền năng lớn nhất mà linh hồn số 9 được trao.</div>`,
  },

  // ════════════════════════════════════════════════════════════════════
  // THỬ THÁCH SỨ MỆNH — Per-number deep narrative (1-9)
  // Gọi: NT.destinyChallenge[num](name, d)
  // ════════════════════════════════════════════════════════════════════
  destinyChallenge: {
    1: (name, d) => `<p class="nar">Không có sứ mệnh nào không đi kèm thử thách — và với <strong>${name}</strong>, thử thách sứ mệnh số <strong>1</strong> đặt ra câu hỏi cốt lõi: <strong>Bạn lãnh đạo bằng sức mạnh hay bằng nỗi sợ?</strong> Hành trình hoàn thiện sứ mệnh của bạn đòi hỏi bạn phải phân biệt rõ hai loại năng lượng này — bởi cả hai đều có thể thúc đẩy bạn đứng ra trước, nhưng chỉ một trong hai tạo ra di sản thực sự.</p>

<p class="nar"><strong>Biểu hiện của thử thách:</strong> Bạn có thể dễ dàng rơi vào xu hướng khẳng định bản thân theo cách đối đầu và áp đặt khi cảm thấy bị đe dọa. Hoặc ngược lại — tự xóa bỏ bản thân, thu nhỏ năng lượng và nép vào bóng tối vì sợ nổi bật "quá mức". Cả hai đều là biến dạng của thử thách số 1 khi chưa được hóa giải.</p>

<p class="nar"><strong>Con đường hoàn thiện sứ mệnh:</strong> ${d?.how_to_overcome || 'Thực hành lãnh đạo bằng cách đặt câu hỏi thay vì đưa ra câu trả lời. Dẫn đường bằng ví dụ thay vì bằng chỉ thị. Mỗi lần bạn thể hiện sức mạnh mà không cần người khác nhỏ lại, bạn đang sống đúng sứ mệnh số 1 ở tầng cao nhất.'}</p>

<div class="insight-box">💡 Thử thách sứ mệnh không phải để ngăn cản bạn — mà để rèn luyện bạn thành phiên bản đủ trưởng thành để thực sự sống đúng sứ mệnh đó. Mỗi lần vượt qua thử thách số 1, bạn trở thành người lãnh đạo đích thực hơn.</div>`,

    2: (name, d) => `<p class="nar">Thử thách sứ mệnh số <strong>2</strong> của <strong>${name}</strong> nằm ở nghịch lý này: <strong>người hòa giải đôi khi cần phải chọn phe</strong>. Hành trình hoàn thiện sứ mệnh của bạn đòi hỏi bạn học cách đứng vững trong lập trường của mình — ngay cả khi điều đó làm mất lòng ai đó, ngay cả khi nó phá vỡ sự hài hòa mà bạn đã dày công gây dựng.</p>

<p class="nar"><strong>Biểu hiện của thử thách:</strong> Bạn có thể trở nên thiếu quyết đoán khi phải đưa ra lựa chọn rõ ràng giữa hai phía. Hoặc cho đi quá nhiều trong các mối quan hệ đến mức dần mất đi chính mình. Nỗi sợ xung đột và sự phụ thuộc cảm xúc là những biểu hiện điển hình của thử thách số 2 chưa được hóa giải.</p>

<p class="nar"><strong>Con đường hoàn thiện sứ mệnh:</strong> ${d?.how_to_overcome || 'Thực hành nói thật điều mình thực sự nghĩ ít nhất một lần mỗi ngày — dù có thể không làm hài lòng ai đó. Học cách phân biệt: đâu là sự hợp tác lành mạnh, và đâu là sự nhượng bộ vì sợ hãi. Sứ mệnh số 2 của bạn không phải là làm hài lòng tất cả — mà là tạo ra sự kết nối thực sự.'}</p>

<div class="insight-box">💡 Người hòa giải vĩ đại nhất không phải là người không bao giờ bất đồng — mà là người có thể bất đồng với sự tôn trọng. Đó là khi thử thách số 2 được hóa giải hoàn toàn.</div>`,

    3: (name, d) => `<p class="nar">Thử thách sứ mệnh số <strong>3</strong> của <strong>${name}</strong> ẩn trong chính sức mạnh biểu đạt của bạn: <strong>liệu bạn đang nói những điều quan trọng, hay chỉ đang nói những điều khiến mọi người thích bạn?</strong> Hành trình hoàn thiện sứ mệnh đòi hỏi bạn dùng tài năng ngôn ngữ và sáng tạo của mình để phục vụ sự thật — không chỉ để tạo ra sự vui vẻ tức thời.</p>

<p class="nar"><strong>Biểu hiện của thử thách:</strong> Phân tán năng lượng vào quá nhiều dự án mà không hoàn thành điều nào đủ sâu để tạo ra tác động thực sự. Dùng sự hài hước và biểu đạt để tránh đối mặt với những chủ đề sâu và khó hơn. Tìm kiếm sự chú ý và xác nhận thay vì tập trung vào chất lượng và chiều sâu.</p>

<p class="nar"><strong>Con đường hoàn thiện sứ mệnh:</strong> ${d?.how_to_overcome || 'Cam kết với một dự án sáng tạo đến cùng — dù cảm thấy nhàm chán ở giữa hành trình. Học cách nói những điều khó nhưng cần thiết, không chỉ những điều được hoan nghênh. Khi tài năng số 3 phục vụ sự thật, nó có sức chuyển hóa mà không có phong cách nào khác sánh được.'}</p>

<div class="insight-box">💡 Tài năng biểu đạt của bạn là món quà — nhưng sức mạnh thực sự của nó chỉ được phát huy khi bạn dùng nó để nói điều cần nói, không phải điều muốn nghe.</div>`,

    4: (name, d) => `<p class="nar">Thử thách sứ mệnh số <strong>4</strong> của <strong>${name}</strong> nằm ở chỗ: <strong>người xây dựng cần học cách xây dựng mà không gánh một mình</strong>. Sứ mệnh của bạn đòi hỏi sự kiên định và kỷ luật — nhưng để hoàn thành nó theo quy mô mà nó xứng đáng, bạn cần học cách ủy quyền, tin tưởng và cộng tác thực sự.</p>

<p class="nar"><strong>Biểu hiện của thử thách:</strong> Làm việc quá sức đến mức kiệt sức vì không tin ai làm tốt bằng mình. Cứng nhắc trong kế hoạch đến mức không thể thích nghi khi hoàn cảnh thay đổi. Xu hướng sa lút vào chi tiết và quên đi bức tranh lớn. Hoặc ngược lại: sợ thất bại đến mức không bao giờ bắt đầu những dự án xứng đáng với sứ mệnh của mình.</p>

<p class="nar"><strong>Con đường hoàn thiện sứ mệnh:</strong> ${d?.how_to_overcome || 'Thực hành giao một việc nhỏ cho người khác và để họ làm theo cách của họ — dù kết quả không hoàn hảo theo tiêu chuẩn của bạn. Mỗi lần bạn tin tưởng người khác thành công, bạn đang mở rộng sức mạnh của sứ mệnh số 4 ra ngoài giới hạn của một người.'}</p>

<div class="insight-box">💡 Di sản vĩ đại nhất không được xây bởi một người — mà bởi những người biết cách xây cùng nhau. Khi thử thách số 4 được hóa giải, bạn không chỉ hoàn thành sứ mệnh — bạn truyền nó xuống nhiều thế hệ.</div>`,

    5: (name, d) => `<p class="nar">Thử thách sứ mệnh số <strong>5</strong> của <strong>${name}</strong> là nghịch lý đặc trưng của người tự do: <strong>làm thế nào tạo ra tác động lâu dài khi linh hồn mình luôn muốn di chuyển?</strong> Sứ mệnh của bạn đòi hỏi sự am hiểu sâu sắc về con người và cuộc sống — nhưng chiều sâu đó chỉ đến khi bạn sẵn sàng ở lại đủ lâu để thực sự hiểu.</p>

<p class="nar"><strong>Biểu hiện của thử thách:</strong> Bắt đầu nhiều hành trình nhưng không hoàn thành điều nào đủ sâu để có tác động. Dùng sự bận rộn và thay đổi liên tục để tránh những câu hỏi sâu hơn về hướng đi và ý nghĩa. Sợ cam kết với một con đường cụ thể vì lo bỏ lỡ tất cả những con đường khác.</p>

<p class="nar"><strong>Con đường hoàn thiện sứ mệnh:</strong> ${d?.how_to_overcome || 'Xác định một lĩnh vực cốt lõi để đầu tư đủ sâu trong ít nhất 5 năm — trong khi vẫn được phép khám phá ở những lĩnh vực phụ. Sứ mệnh số 5 hoàn thiện nhất khi tự do và cam kết cùng tồn tại: có một "nhà" để trở về trong khi vẫn có những chuyến đi để khám phá.'}</p>

<div class="insight-box">💡 Tự do không phải là không có mỏ neo — mà là có đủ mỏ neo để dám ra khơi xa. Khi thử thách số 5 được hóa giải, bạn trở thành người vừa phóng khoáng vừa có chiều sâu — một sự kết hợp hiếm gặp và đẹp đẽ.</div>`,

    6: (name, d) => `<p class="nar">Thử thách sứ mệnh số <strong>6</strong> của <strong>${name}</strong> nằm ở ranh giới giữa tình yêu thương và quyền kiểm soát: <strong>học cách phục vụ mà không kiểm soát, chăm sóc mà không áp đặt</strong>. Sứ mệnh của bạn là tạo ra sự hài hòa — nhưng sự hài hòa đích thực không thể được ép buộc, dù với ý định tốt nhất.</p>

<p class="nar"><strong>Biểu hiện của thử thách:</strong> Đặt tiêu chuẩn cao cho người khác và thất vọng khi họ không đạt đến — nhất là trong gia đình và các mối quan hệ thân thiết. Cảm thấy có trách nhiệm với hạnh phúc của tất cả mọi người xung quanh đến mức kiệt sức. Khó chấp nhận khi ai đó chọn con đường khác với những gì bạn cho là tốt cho họ.</p>

<p class="nar"><strong>Con đường hoàn thiện sứ mệnh:</strong> ${d?.how_to_overcome || 'Thực hành niềm tin: tin rằng người khác có đủ trí tuệ để tự học từ những lựa chọn của họ. Trao quyền thay vì giải cứu. Tình yêu thương—dạng cao nhất của nó — là cho người khác quyền tự tìm con đường của mình, dù đôi khi bạn phải đứng nhìn họ vấp ngã.'}</p>

<div class="insight-box">💡 Sứ mệnh số 6 được thực hiện đầy đủ nhất khi bạn tạo ra những điều kiện để người khác phát triển — không phải khi bạn phát triển thay cho họ. Đó là nghệ thuật cao nhất của người nuôi dưỡng.</div>`,

    7: (name, d) => `<p class="nar">Thử thách sứ mệnh số <strong>7</strong> của <strong>${name}</strong> là mâu thuẫn giữa tri thức và kết nối: <strong>tất cả những hiểu biết sâu sắc bạn tích lũy chỉ có giá trị khi được chia sẻ — nhưng chia sẻ đòi hỏi sự kết nối mà bạn vốn cẩn trọng</strong>. Sứ mệnh của bạn đòi hỏi bạn vừa đi đủ sâu vào chiều sâu nội tâm, vừa đủ dũng cảm bước ra ánh sáng.</p>

<p class="nar"><strong>Biểu hiện của thử thách:</strong> Giữ tri thức bên trong mà không chia sẻ — vì sợ bị hiểu nhầm hoặc không được coi trọng. Đòi hỏi bằng chứng và sự chắc chắn quá nhiều đến mức không bao giờ hành động. Hoặc chia sẻ theo cách quá hàn lâm và xa rời đến mức người khác không tiếp nhận được.</p>

<p class="nar"><strong>Con đường hoàn thiện sứ mệnh:</strong> ${d?.how_to_overcome || 'Tập chia sẻ những gì bạn biết theo cách người bình thường có thể hiểu và áp dụng được — không phải theo cách chỉ có những người có cùng trình độ với bạn mới hiểu. Đây là bài tập quan trọng nhất: biến chiều sâu thành sự dễ tiếp cận.'}</p>

<div class="insight-box">💡 Sứ mệnh số 7 không phải là tìm kiếm sự thật cho chính mình — mà là mang sự thật đó về cho người khác theo cách họ có thể nhận được. Khi thử thách số 7 được hóa giải, bạn trở thành người thầy mà học trò không bao giờ quên.</div>`,

    8: (name, d) => `<p class="nar">Thử thách sứ mệnh số <strong>8</strong> của <strong>${name}</strong> nằm trong câu hỏi mà ít người dám hỏi thẳng: <strong>Bạn tìm kiếm quyền lực để phục vụ điều gì?</strong> Sứ mệnh của bạn đòi hỏi bạn xây dựng ảnh hưởng và nguồn lực — nhưng từng đồng tiền, từng quyết định và từng ảnh hưởng đó phải được dùng theo cách phản ánh giá trị thực sự của bạn.</p>

<p class="nar"><strong>Biểu hiện của thử thách:</strong> Tập trung vào kết quả đến mức bỏ qua cách thức — và bỏ qua con người trong quá trình đó. Định nghĩa thành công hoàn toàn qua các chỉ số vật chất. Hoặc ngược lại: sợ sự thành công và quyền lực đến mức không bao giờ phát huy đúng tiềm năng mà sứ mệnh đòi hỏi.</p>

<p class="nar"><strong>Con đường hoàn thiện sứ mệnh:</strong> ${d?.how_to_overcome || 'Định nghĩa thành công theo ba chiều: tài chính, tác động và phẩm giá. Mỗi quyết định lớn, hãy hỏi: "Điều này phục vụ tất cả ba chiều đó không?" Khi thử thách số 8 được hóa giải, quyền lực bạn xây dựng trở thành công cụ chuyển hóa — không chỉ là biểu tượng thành công.'}</p>

<div class="insight-box">💡 Quyền năng thực sự của sứ mệnh số 8 không được đo bằng số tiền trong tài khoản — mà bằng số cuộc đời được cải thiện nhờ sự hiện diện của bạn trong thế giới này.</div>`,

    9: (name, d) => `<p class="nar">Thử thách sứ mệnh số <strong>9</strong> của <strong>${name}</strong> là một trong những bài học sâu sắc nhất: <strong>học cách phục vụ nhân loại mà không bị cuốn mất bản thân trong đó</strong>. Sứ mệnh của bạn đòi hỏi sự cho đi rộng lớn — nhưng sự cho đi đó chỉ bền vững và có tác động thực sự khi bạn vẫn là chính mình trong quá trình đó.</p>

<p class="nar"><strong>Biểu hiện của thử thách:</strong> Hy sinh quá mức đến mức kiệt sức mà không tạo ra tác động bền vững. Khó phân biệt đâu là vấn đề của mình và đâu là của người khác — dẫn đến việc mang nỗi đau chung của nhân loại như gánh nặng cá nhân. Giữ mối oán giận với những người đã được bạn giúp nhưng không trân trọng.</p>

<p class="nar"><strong>Con đường hoàn thiện sứ mệnh:</strong> ${d?.how_to_overcome || 'Học cách phục vụ từ sự sung mãn thay vì từ sự cạn kiệt. Đặt ranh giới lành mạnh không phải là từ bỏ sứ mệnh — mà là bảo vệ khả năng thực hiện sứ mệnh đó về lâu dài. Bạn không thể thay đổi thế giới nếu bạn tự hủy hoại bản thân trong quá trình đó.'}</p>

<div class="insight-box">💡 Nhân đạo đích thực bắt đầu từ việc đối xử với chính mình bằng sự nhân đạo. Khi thử thách số 9 được hóa giải, bạn trở thành nguồn sáng không bao giờ tắt — vì bạn biết cách tự nuôi dưỡng ngọn lửa của mình.</div>`,
  },

  // ════════════════════════════════════════════════════════════════════
  // THỬ THÁCH NHÂN CÁCH — Per-number deep narrative (1-9)
  // Gọi: NT.personalityChallenge[num](name, d)
  // ════════════════════════════════════════════════════════════════════
  personalityChallenge: {
    1: (name, d) => `<p class="nar">Thử thách nhân cách số <strong>1</strong> của <strong>${name}</strong> nằm ở ranh giới giữa sự tự tin và sự áp đặt: <strong>bạn truyền năng lượng mạnh mẽ ra bên ngoài — nhưng người khác đôi khi không cảm thấy có chỗ để tồn tại cạnh bạn</strong>. Thử thách này không phủ nhận sức mạnh của bạn — nó mời bạn học cách để sức mạnh đó trở thành thứ nâng người khác lên, không phải làm họ nhỏ lại.</p>
<p class="nar">${d?.description || 'Biểu hiện điển hình: tiếp quản cuộc trò chuyện, ngắt lời, đưa ra câu trả lời trước khi người khác kịp hỏi câu hỏi, hoặc không nhận ra khi người khác đang cố gắng đóng góp. Không phải ác ý — mà là bản năng lãnh đạo cần được tinh chỉnh.'}</p>
<div class="insight-box">💡 <strong>Lời khuyên thực hành:</strong> ${d?.advice || 'Thực hành "lắng nghe hoàn toàn" — nghe mà không đã chuẩn bị câu trả lời trong khi người kia đang nói. Hỏi thêm thay vì giải thích. Khi bạn để người khác cảm thấy được nghe thực sự, ảnh hưởng lãnh đạo của bạn tăng lên gấp bội.'}</div>`,

    2: (name, d) => `<p class="nar">Thử thách nhân cách số <strong>2</strong> của <strong>${name}</strong> là sự vô hình không cần thiết: <strong>bạn có nhiều điều muốn nói và muốn đóng góp hơn những gì bạn thực sự thể hiện ra bên ngoài</strong>. Vì quá chú ý đến người khác và quá lo lắng về sự hài hòa, bạn đôi khi tự thu nhỏ mình theo những cách không ai nhìn thấy.</p>
<p class="nar">${d?.description || 'Biểu hiện điển hình: đồng ý khi thực ra không đồng ý, không lên tiếng trong nhóm dù có ý kiến giá trị, hoặc để người khác nhận công mà không tự nhận công của mình. Với thời gian, điều này tạo ra sự oan ức ngầm và cảm giác không được nhìn thấy.'}</p>
<div class="insight-box">💡 <strong>Lời khuyên thực hành:</strong> ${d?.advice || 'Mỗi ngày, lên tiếng ít nhất một lần trong một cuộc họp hoặc cuộc trò chuyện nhóm — dù ý kiến đó nhỏ. Thực hành nhận lời khen mà không ngay lập tức chuyển sangcredit người khác. Bạn có mặt ở đây là quan trọng — hãy để người khác thấy điều đó.'}</div>`,

    3: (name, d) => `<p class="nar">Thử thách nhân cách số <strong>3</strong> của <strong>${name}</strong> là bề sâu bị che khuất bởi bề nổi: <strong>người khác thấy bạn vui vẻ, hài hước và dễ gần — nhưng đôi khi họ không nghĩ đến bạn khi cần ai đó nghiêm túc và đáng tin cậy</strong>. Thử thách này không yêu cầu bạn bớt vui — mà là để chiều sâu thực sự của bạn được nhìn thấy xuyên qua nụ cười.</p>
<p class="nar">${d?.description || 'Biểu hiện điển hình: dùng sự hài hước để né tránh những cuộc trò chuyện sâu, bị coi là "người vui vẻ" thay vì "người đáng tin", hoặc không được xem xét cho những vai trò lãnh đạo nghiêm túc dù hoàn toàn có năng lực.'}</p>
<div class="insight-box">💡 <strong>Lời khuyên thực hành:</strong> ${d?.advice || 'Thực hành là người đầu tiên chuyển một cuộc trò chuyện nhẹ nhàng thành cuộc trò chuyện thực sự — không phải bằng cách trở nên nghiêm trọng, mà bằng cách đặt một câu hỏi có chiều sâu. Đó là khi người khác bắt đầu thấy được cả hai phía của bạn.'}</div>`,

    4: (name, d) => `<p class="nar">Thử thách nhân cách số <strong>4</strong> của <strong>${name}</strong> là sự ấm áp bị ẩn sau lớp vỏ chuyên nghiệp: <strong>người khác tôn trọng bạn nhưng đôi khi cảm thấy khó gần — không phải vì bạn không quan tâm, mà vì những tiêu chuẩn cao và sự nghiêm túc của bạn tạo ra khoảng cách</strong>. Thử thách này mời bạn để người khác thấy được cả con người đằng sau những thành tích.</p>
<p class="nar">${d?.description || 'Biểu hiện điển hình: bị coi là "lạnh", "cứng nhắc" hoặc "khó tính" bởi những người chưa biết bạn kỹ. Môi trường làm việc hoặc xã hội cảm thấy ngột ngạt hơn khi bạn có mặt vì người khác sợ không đạt tiêu chuẩn của bạn.'}</p>
<div class="insight-box">💡 <strong>Lời khuyên thực hành:</strong> ${d?.advice || 'Một lần mỗi tuần, chia sẻ một điều không hoàn hảo về bản thân — một sai lầm bạn đã mắc, một điều bạn vẫn đang học. Sự dễ bị tổn thương được lựa chọn này tạo ra kết nối mà không có thành tích nào có thể mang lại.'}</div>`,

    5: (name, d) => `<p class="nar">Thử thách nhân cách số <strong>5</strong> của <strong>${name}</strong> là câu hỏi về sự đáng tin: <strong>bạn hấp dẫn và thú vị — nhưng người khác đôi khi không biết liệu họ có thể trông cậy vào bạn trong những việc quan trọng không</strong>. Thử thách này không yêu cầu bạn bớt phóng khoáng — mà là chứng minh rằng tự do của bạn không có nghĩa là thiếu trách nhiệm.</p>
<p class="nar">${d?.description || 'Biểu hiện điển hình: bị coi là "không ổn định" hoặc "khó đoán" dù thực ra bạn rất đáng tin trong những thứ bạn thực sự cam kết. Người khác không biết đâu là điều bạn thực sự coi trọng — và điều đó tạo ra sự bất an trong các mối quan hệ.'}</p>
<div class="insight-box">💡 <strong>Lời khuyên thực hành:</strong> ${d?.advice || 'Hãy rõ ràng hơn về những gì bạn cam kết và những gì bạn không cam kết — thay vì để người khác đoán. Sự minh bạch đó tạo ra sự tin tưởng mà người khác không thể có được chỉ từ sự hấp dẫn bề ngoài của bạn.'}</div>`,

    6: (name, d) => `<p class="nar">Thử thách nhân cách số <strong>6</strong> của <strong>${name}</strong> là ranh giới giữa ấm áp và kiểm soát: <strong>bạn quan tâm đến người khác một cách sâu sắc — nhưng đôi khi sự quan tâm đó được người khác cảm nhận như áp lực hoặc kỳ vọng</strong>. Thử thách này mời bạn học cách quan tâm mà không kèm điều kiện ẩn.</p>
<p class="nar">${d?.description || 'Biểu hiện điển hình: đưa ra lời khuyên không được hỏi, can thiệp vào quyết định của người thân "vì tốt cho họ", hoặc tỏ ra thất vọng khi ai đó không làm theo gợi ý của bạn. Người khác cảm thấy vừa được chăm sóc vừa bị theo dõi.'}</p>
<div class="insight-box">💡 <strong>Lời khuyên thực hành:</strong> ${d?.advice || 'Trước khi đưa ra lời khuyên hoặc giúp đỡ, hãy hỏi: "Bạn có muốn nghe suy nghĩ của mình không?" Sự cho phép này biến tình yêu thương của bạn từ áp lực thành quà tặng thực sự.'}</div>`,

    7: (name, d) => `<p class="nar">Thử thách nhân cách số <strong>7</strong> của <strong>${name}</strong> là khoảng cách giữa bí ẩn hấp dẫn và sự xa cách đáng lo: <strong>người khác tôn trọng chiều sâu của bạn — nhưng đôi khi không biết liệu bạn có thực sự cần họ hay không</strong>. Thử thách này mời bạn để lộ ra đủ để người khác biết rằng bạn cũng cần kết nối.</p>
<p class="nar">${d?.description || 'Biểu hiện điển hình: bị coi là "kiêu kỳ" hoặc "khó tiếp cận" dù thực ra bạn chỉ đang quan sát. Người khác không dám tiếp cận vì không biết họ có được chào đón không. Các mối quan hệ quan trọng bị bỏ lỡ vì cả hai phía đều đợi bên kia bước ra trước.'}</p>
<div class="insight-box">💡 <strong>Lời khuyên thực hành:</strong> ${d?.advice || 'Hãy là người bước ra trước đôi khi — một nụ cười, một câu hỏi về người khác, một điều nhỏ bạn chia sẻ về mình. Những cử chỉ nhỏ này không làm mất đi sự bí ẩn của bạn — chúng mở cửa cho những người đúng bước vào.'}</div>`,

    8: (name, d) => `<p class="nar">Thử thách nhân cách số <strong>8</strong> của <strong>${name}</strong> là cân bằng giữa quyền lực và sự ấm áp: <strong>bạn toát ra sức mạnh và năng lực — nhưng người khác đôi khi cảm thấy bạn đang đánh giá họ thay vì kết nối với họ</strong>. Thử thách này mời bạn để người khác thấy con người đằng sau sự thành công.</p>
<p class="nar">${d?.description || 'Biểu hiện điển hình: bị coi là "đáng sợ" hoặc "lạnh lùng" dù thực ra bạn quan tâm nhiều hơn vẻ ngoài. Người khác không biết cách tương tác với bạn — họ tôn trọng bạn nhưng không thoải mái với bạn. Các mối quan hệ có xu hướng ở lại tầng nghề nghiệp thay vì trở nên thực sự thân thiết.'}</p>
<div class="insight-box">💡 <strong>Lời khuyên thực hành:</strong> ${d?.advice || 'Hoạt động đôi khi theo cách "chỉ là con người" — chia sẻ một thứ bạn đang học, thừa nhận một điều bạn không biết, hỏi ý kiến của người khác thay vì luôn là người có câu trả lời. Điều đó tạo ra sự kết nối mà không sức mạnh nào có thể mua được.'}</div>`,

    9: (name, d) => `<p class="nar">Thử thách nhân cách số <strong>9</strong> của <strong>${name}</strong> là khoảng cách giữa tầm nhìn lớn và cuộc sống hiện tại: <strong>bạn quan tâm đến nhân loại rộng lớn — nhưng đôi khi người gần nhất lại cảm thấy ít được chú ý nhất</strong>. Thử thách này mời bạn học cách hiện diện hoàn toàn với người đang trước mặt, không chỉ với bức tranh lớn trong đầu.</p>
<p class="nar">${d?.description || 'Biểu hiện điển hình: nổi tiếng với nhiều người nhưng không có nhiều mối quan hệ thực sự sâu. Bị coi là "bay bổng" hoặc "không thực tế" bởi những người cần bạn ở đây và bây giờ. Lý tưởng hóa mọi người từ xa nhưng thất vọng với họ khi gần.'}</p>
<div class="insight-box">💡 <strong>Lời khuyên thực hành:</strong> ${d?.advice || 'Mỗi ngày, đặt điện thoại xuống và dành 20 phút hoàn toàn cho người đang trước mặt — không check tin nhắn, không suy nghĩ về dự án lớn. Sự hiện diện hoàn toàn đó là món quà quý giá nhất bạn có thể tặng cho người thân.'}</div>`,
  },


  // ════════════════════════════════════════════════════════════════════
  // NĂNG LỰC TƯ DUY (COGNITIVE ABILITY) — Per-number deep narrative (1-9)
  // Gọi: NT.cognitiveAbility[num](name, d)
  // ════════════════════════════════════════════════════════════════════
  cognitiveAbility: {
    1: (name, d) => `<p class="nar"><strong>${name}</strong> sở hữu một bộ óc <strong>tiên phong và độc lập</strong> — kiểu tư duy không tìm kiếm sự đồng thuận trước khi suy nghĩ. Khi đối mặt với vấn đề, não bộ của bạn tức thời tìm kiếm <em>"cách chưa ai làm"</em>, phá vỡ khuôn mẫu và đặt câu hỏi với những gì vẫn đang hoạt động. Đây không phải là thói quen — đây là cấu trúc nhận thức bẩm sinh của bạn.</p>

<p class="nar"><strong>✦ Điểm mạnh tư duy:</strong> ${d?.strength || 'Bạn thường là người đầu tiên trong nhóm nhìn thấy giải pháp sáng tạo, ngay cả khi mọi người xung quanh vẫn đang phân tích vấn đề. Tư duy số 1 có khả năng kết nối các điểm không liên quan và tổng hợp thành ý tưởng hoàn toàn mới.'}</p>

<p class="nar"><strong>⚠ Điểm mù cần nhận ra:</strong> ${d?.blind_spot || 'Vì quá tập trung vào ý tưởng mới, đôi khi bạn bỏ qua những giải pháp hiện hữu đã được kiểm chứng. Thói quen luôn muốn làm khác đi có thể khiến bạn phức tạp hóa vấn đề vốn có thể giải quyết đơn giản hơn.'}</p>

<div class="insight-box">💡 <strong>Phát huy tư duy tối đa:</strong> ${d?.best_environment || 'Tư duy số 1 tỏa sáng trong môi trường startup, brainstorming, và những dự án đòi hỏi đổi mới sáng tạo. Hãy đặt mình vào những bài toán chưa có lời giải — đó là sân chơi lý tưởng cho bộ óc của bạn.'}</div>`,

    2: (name, d) => `<p class="nar"><strong>${name}</strong> sở hữu tư duy <strong>kết nối và đồng cảm</strong> — một bộ óc không nhìn thế giới qua lăng kính cá nhân, mà qua lăng kính mối quan hệ. Khi phân tích vấn đề, não bộ của bạn tự nhiên đặt câu hỏi: <em>"Điều này ảnh hưởng đến ai? Ai cần được nghe thấy?"</em> Đây là kiểu tư duy hiếm và vô cùng quý giá trong một thế giới thường đề cao tư duy kết quả.</p>

<p class="nar"><strong>✦ Điểm mạnh tư duy:</strong> ${d?.strength || 'Khả năng đọc phòng, nắm bắt động lực ngầm của nhóm và tìm ra giải pháp mà tất cả đều có thể cảm thấy được lắng nghe. Tư duy số 2 cũng cực kỳ giỏi nhận ra mâu thuẫn tiềm ẩn trước khi chúng bùng phát.'}</p>

<p class="nar"><strong>⚠ Điểm mù cần nhận ra:</strong> ${d?.blind_spot || 'Quá chú trọng đến cảm xúc của người khác đôi khi khiến bạn trì hoãn quyết định hoặc thỏa hiệp quá mức với quan điểm của mình. Học cách tin tưởng phân tích của bản thân ngay cả khi nó không được số đông đồng ý.'}</p>

<div class="insight-box">💡 <strong>Phát huy tư duy tối đa:</strong> ${d?.best_environment || 'Tư duy số 2 xuất sắc trong công tác tư vấn, hòa giải, UX/UI, tâm lý học, và bất kỳ lĩnh vực nào đòi hỏi thấu hiểu sâu về con người. Hãy dùng năng khiếu lắng nghe để thu thập dữ liệu mà người khác bỏ lỡ.'}</div>`,

    3: (name, d) => `<p class="nar"><strong>${name}</strong> có kiểu tư duy <strong>sáng tạo và liên tưởng</strong> — não bộ của bạn hoạt động theo kiểu kết nối những điều tưởng chừng không liên quan và tạo ra ý nghĩa từ sự ngẫu nhiên. Khi đối mặt với thách thức, bạn không tiếp cận nó theo đường thẳng — bạn tiếp cận nó theo đường <em>xoắn ốc</em>, từ nhiều góc nhìn cùng lúc, cho đến khi một hình ảnh rõ ràng xuất hiện.</p>

<p class="nar"><strong>✦ Điểm mạnh tư duy:</strong> ${d?.strength || 'Khả năng truyền đạt ý tưởng phức tạp theo cách dễ hiểu và hấp dẫn. Tư duy số 3 đặc biệt giỏi storytelling — biến dữ liệu khô khan thành câu chuyện sống động, biến kế hoạch kinh doanh thành viễn cảnh truyền cảm hứng.'}</p>

<p class="nar"><strong>⚠ Điểm mù cần nhận ra:</strong> ${d?.blind_spot || 'Tư duy nhảy vọt đôi khi khiến bạn khó hoàn thiện một ý tưởng trước khi đã chuyển sang ý tưởng khác. Rèn luyện kỷ luật để đưa một dòng suy nghĩ đến cùng sẽ nhân đôi giá trị của tư duy sáng tạo vốn có.'}</p>

<div class="insight-box">💡 <strong>Phát huy tư duy tối đa:</strong> ${d?.best_environment || 'Tư duy số 3 phát triển rực rỡ trong môi trường sáng tạo, marketing, thiết kế, giảng dạy và truyền thông. Hãy dùng ngôn ngữ — viết, nói, vẽ — như công cụ tư duy chính của bạn.'}</div>`,

    4: (name, d) => `<p class="nar"><strong>${name}</strong> sở hữu tư duy <strong>hệ thống và chi tiết</strong> — một bộ óc không bị nhầm lẫn bởi bề mặt hào nhoáng, mà luôn hỏi: <em>"Nền tảng của điều này là gì? Quy trình nằm ở đâu? Rủi ro nào chưa được tính đến?"</em> Đây là kiểu tư duy xây dựng — không phải để hạn chế ý tưởng, mà để đảm bảo rằng những ý tưởng tốt nhất được thực thi thành công.</p>

<p class="nar"><strong>✦ Điểm mạnh tư duy:</strong> ${d?.strength || 'Khả năng nhận ra lỗ hổng trong kế hoạch trước khi chúng trở thành vấn đề. Tư duy số 4 cũng đặc biệt giỏi phân tích nguyên nhân gốc rễ — không chữa triệu chứng mà chữa căn bệnh.'}</p>

<p class="nar"><strong>⚠ Điểm mù cần nhận ra:</strong> ${d?.blind_spot || 'Đôi khi quá tập trung vào chi tiết khiến bạn chậm đưa ra quyết định hoặc bị "phân tích tê liệt". Nhắc nhở bản thân: một kế hoạch 80% hoàn hảo được thực thi vẫn tốt hơn kế hoạch 100% trong đầu.'}</p>

<div class="insight-box">💡 <strong>Phát huy tư duy tối đa:</strong> ${d?.best_environment || 'Tư duy số 4 không thể thiếu trong kỹ thuật, quản lý dự án, tài chính, luật và kiến trúc. Hãy ở trong môi trường coi trọng chất lượng và độ chính xác — đó là nơi bạn thực sự tỏa sáng.'}</div>`,

    5: (name, d) => `<p class="nar"><strong>${name}</strong> có kiểu tư duy <strong>thích nghi và đa chiều</strong> — não bộ của bạn không thích bị giam cầm trong một khung phân tích duy nhất. Bạn xử lý thông tin từ nhiều nguồn cùng lúc, liên tục cập nhật mô hình nhận thức và sẵn sàng thay đổi quan điểm khi có dữ liệu mới. Đây là tư duy của <em>người thích nghi nhanh</em> — cực kỳ có giá trị trong thế giới đang thay đổi với tốc độ chóng mặt.</p>

<p class="nar"><strong>✦ Điểm mạnh tư duy:</strong> ${d?.strength || 'Khả năng nhìn thấy cơ hội trong sự hỗn loạn và biến thách thức thành bàn đạp. Tư duy số 5 đặc biệt xuất sắc trong việc đọc xu hướng sớm và điều chỉnh chiến lược trước khi người khác nhận ra cần thay đổi.'}</p>

<p class="nar"><strong>⚠ Điểm mù cần nhận ra:</strong> ${d?.blind_spot || 'Sự linh hoạt đôi khi biến thành thiếu nhất quán. Khi bạn thay đổi quan điểm quá nhanh, người khác có thể khó tin tưởng vào định hướng dài hạn của bạn. Học cách truyền đạt "tại sao tôi thay đổi" sẽ xây dựng sự tín nhiệm.'}</p>

<div class="insight-box">💡 <strong>Phát huy tư duy tối đa:</strong> ${d?.best_environment || 'Tư duy số 5 phát triển trong môi trường năng động — digital marketing, sales, tư vấn chiến lược, nghiên cứu thị trường. Hãy tìm công việc đòi hỏi bạn liên tục học hỏi và thích nghi.'}</div>`,

    6: (name, d) => `<p class="nar"><strong>${name}</strong> sở hữu tư duy <strong>chăm sóc và giải quyết vấn đề con người</strong> — một bộ óc tự nhiên hướng đến câu hỏi: <em>"Điều này có cải thiện cuộc sống của ai không? Ai đang bị bỏ lại phía sau?"</em> Không phải vì bạn "ngây thơ" hay "quá lý tưởng" — mà vì não bộ của bạn được cấu hình để nhận ra các hệ thống không công bằng và tìm cách điều chỉnh chúng.</p>

<p class="nar"><strong>✦ Điểm mạnh tư duy:</strong> ${d?.strength || 'Khả năng thiết kế giải pháp dài hạn, bền vững — không chỉ giải quyết triệu chứng ngay lập tức mà suy nghĩ đến tác động lan rộng. Tư duy số 6 cũng đặc biệt giỏi xây dựng sự đồng thuận và giữ hòa khí trong nhóm.'}</p>

<p class="nar"><strong>⚠ Điểm mù cần nhận ra:</strong> ${d?.blind_spot || 'Tiêu chuẩn cao về trách nhiệm và đạo đức đôi khi khiến bạn khắt khe quá mức với bản thân và người khác khi không đạt được lý tưởng. Nhắc nhở: tiến bộ không hoàn hảo vẫn là tiến bộ.'}</p>

<div class="insight-box">💡 <strong>Phát huy tư duy tối đa:</strong> ${d?.best_environment || 'Tư duy số 6 cần cảnh trong giáo dục, y tế, phúc lợi xã hội, tư vấn gia đình và bất kỳ lĩnh vực nào mà "tại sao" phải gắn với ý nghĩa con người. Đây là nơi bạn không chỉ làm việc tốt — mà còn thực sự hạnh phúc.'}</div>`,

    7: (name, d) => `<p class="nar"><strong>${name}</strong> có kiểu tư duy <strong>phân tích sâu và tìm kiếm sự thật</strong> — một bộ óc không hài lòng với câu trả lời bề mặt, luôn muốn đi sâu hơn, hỏi thêm một câu hỏi nữa, lật ngược thêm một giả thiết nữa. Trong khi người khác xây dựng trên nền tảng chưa được kiểm chứng, bạn bản năng muốn hiểu <em>tại sao</em> nền tảng đó có thể đứng vững trước khi đặt bất cứ thứ gì lên trên.</p>

<p class="nar"><strong>✦ Điểm mạnh tư duy:</strong> ${d?.strength || 'Khả năng phát hiện lỗ hổng logic và giả định ẩn trong lập luận của người khác. Tư duy số 7 đặc biệt giỏi nghiên cứu chuyên sâu, phân tích dữ liệu và xây dựng nền tảng tri thức vững chắc cho dự án dài hạn.'}</p>

<p class="nar"><strong>⚠ Điểm mù cần nhận ra:</strong> ${d?.blind_spot || 'Tiêu chuẩn cao về bằng chứng đôi khi dẫn đến "phân tích tê liệt" — không bao giờ cảm thấy có đủ dữ liệu để quyết định. Học cách phân biệt "không đủ dữ liệu" và "sợ sai" — chúng khác nhau hoàn toàn.'}</p>

<div class="insight-box">💡 <strong>Phát huy tư duy tối đa:</strong> ${d?.best_environment || 'Tư duy số 7 tỏa sáng trong nghiên cứu, khoa học, triết học, lập trình, và bất kỳ lĩnh vực nào thưởng cho sự thấu hiểu sâu sắc hơn là thấu hiểu rộng. Cho mình không gian yên tĩnh để suy nghĩ — đó là khi bộ óc bạn làm việc tốt nhất.'}</div>`,

    8: (name, d) => `<p class="nar"><strong>${name}</strong> sở hữu tư duy <strong>chiến lược và định hướng kết quả</strong> — một bộ óc bản năng nhìn thấy những con số lớn, những cấu trúc quyền lực và những đòn bẩy có thể tạo ra tác động lớn nhất với nguồn lực tối thiểu. Khi phân tích vấn đề, câu hỏi đầu tiên trong đầu bạn luôn là: <em>"Điều này mở ra hay đóng lại cơ hội nào?"</em></p>

<p class="nar"><strong>✦ Điểm mạnh tư duy:</strong> ${d?.strength || 'Khả năng nhìn thấy toàn bộ bàn cờ trong khi người khác đang tập trung vào từng quân. Tư duy số 8 xuất sắc trong việc đánh giá ROI, phân bổ nguồn lực và xây dựng chiến lược dài hạn có tính đến nhiều kịch bản.'}</p>

<p class="nar"><strong>⚠ Điểm mù cần nhận ra:</strong> ${d?.blind_spot || 'Quá tập trung vào hiệu quả đôi khi khiến bạn bỏ qua chiều kích con người — cảm xúc, động lực, và nhu cầu thuộc về. Những quyết định đúng về chiến lược có thể thất bại vì thiếu sự đồng thuận của con người thực thi.'}</p>

<div class="insight-box">💡 <strong>Phát huy tư duy tối đa:</strong> ${d?.best_environment || 'Tư duy số 8 không thể thiếu trong lĩnh vực kinh doanh, đầu tư, quản lý điều hành và chính sách công. Hãy tìm vai trò nơi tư duy chiến lược được trao quyền thực thi — không chỉ tư vấn.'}</div>`,

    9: (name, d) => `<p class="nar"><strong>${name}</strong> có kiểu tư duy <strong>toàn diện và triết học</strong> — một bộ óc không chỉ giải quyết vấn đề trước mắt mà luôn đặt nó trong bức tranh lớn hơn: <em>"Điều này có ý nghĩa gì với toàn bộ? Ai chưa được tính đến? Thế hệ sau sẽ nhìn quyết định này như thế nào?"</em> Đây là tư duy của nhà lãnh đạo tầm nhìn và người giữ gìn di sản.</p>

<p class="nar"><strong>✦ Điểm mạnh tư duy:</strong> ${d?.strength || 'Khả năng tổng hợp thông tin từ nhiều lĩnh vực khác nhau và tìm ra nguyên lý chung. Tư duy số 9 đặc biệt giỏi nhìn thấy xu hướng dài hạn, mô hình lịch sử lặp lại và những bài học có thể áp dụng phổ quát.'}</p>

<p class="nar"><strong>⚠ Điểm mù cần nhận ra:</strong> ${d?.blind_spot || 'Tư duy quá toàn diện đôi khi dẫn đến việc khó ra quyết định cụ thể vì bạn thấy quá nhiều góc nhìn cùng lúc. Rèn luyện kỹ năng ưu tiên: không phải mọi vấn đề đều cần được nhìn ở cấp độ triết học.'}</p>

<div class="insight-box">💡 <strong>Phát huy tư duy tối đa:</strong> ${d?.best_environment || 'Tư duy số 9 tỏa sáng trong giáo dục đại học, chính sách công, phi lợi nhuận, triết học và lãnh đạo tổ chức. Hãy đặt mình vào những nơi tầm nhìn dài hạn được coi trọng hơn kết quả tháng này.'}</div>`,
  },

  // ════════════════════════════════════════════════════════════════════
  // ĐỘNG LỰC TIẾP CẬN (APPROACH MOTIVATION) — Per-number deep narrative (1-9)
  // Gọi: NT.approachMotivation[num](name, d)
  // ════════════════════════════════════════════════════════════════════
  approachMotivation: {
    1: (name, d) => `<p class="nar"><strong>${name}</strong> được thúc đẩy bởi <strong>khao khát tự chủ và tiên phong</strong>. Câu hỏi luôn hiện hữu trong tâm trí bạn khi đối mặt với bất kỳ cơ hội nào là: <em>"Tôi có được tự quyết cách làm không?"</em> Đây không phải là sự ngoan cố — mà là bản chất sâu xa nhất của động lực bạn. Khi được trao quyền tự chủ, năng lượng của bạn bùng cháy mạnh mẽ. Khi bị vi quản lý, ngọn lửa đó tắt dần một cách im lặng.</p>

<p class="nar"><strong>Trigger kích hoạt:</strong> ${d?.trigger || 'Bạn làm việc tốt nhất khi được giao sứ mệnh rõ ràng nhưng không bị giám sát từng bước. Thách thức mới, lãnh thổ chưa được khám phá và cơ hội để ghi tên mình vào điều gì đó lần đầu tiên — đây là những gì kéo bạn dậy mỗi sáng với năng lượng đầy ắp.'}</p>

<div class="insight-box">💡 <strong>Cách tối ưu hóa động lực của bạn:</strong> ${d?.how_to_motivate || 'Nói chuyện thẳng thắn với người quản lý: bạn cần không gian và quyền quyết định về phương pháp. Đổi lại, bạn sẽ cam kết kết quả cao nhất. Trong công việc cá nhân, thiết lập "lãnh thổ riêng" — dự án không ai can thiệp vào, nơi bạn được thực sự là chính mình.'}</div>`,

    2: (name, d) => `<p class="nar"><strong>${name}</strong> được thúc đẩy bởi <strong>khao khát kết nối và đóng góp có ý nghĩa</strong>. Bạn không chỉ cần biết mình đang làm gì — bạn cần biết điều đó đang phục vụ <em>ai</em>. Khi cảm thấy công việc có giá trị thực sự với con người cụ thể — không phải số liệu trừu tượng — năng lượng và cam kết của bạn là không thể lay chuyển.</p>

<p class="nar"><strong>Trigger kích hoạt:</strong> ${d?.trigger || 'Được tin tưởng, được lắng nghe và được coi là đối tác — không phải công cụ thực hiện. Phản hồi tích cực, sự ghi nhận chân thành và môi trường cộng tác thực sự là những yếu tố nuôi dưỡng ngọn lửa bên trong bạn.'}</p>

<div class="insight-box">💡 <strong>Cách tối ưu hóa động lực của bạn:</strong> ${d?.how_to_motivate || 'Tìm kiếm vai trò nơi mối quan hệ con người là trung tâm — không chỉ là phương tiện để đạt mục tiêu. Hãy thường xuyên nhắc nhở bản thân về câu chuyện của những người bạn đang phục vụ — điều đó giữ ngọn lửa luôn cháy khi công việc trở nên khó khăn.'}</div>`,

    3: (name, d) => `<p class="nar"><strong>${name}</strong> được thúc đẩy bởi <strong>khao khát biểu đạt và sáng tạo</strong>. Điều làm bạn háo hức không phải là hoàn thiện một quy trình hay đạt KPI — mà là cơ hội để đặt dấu ấn cá nhân, kể một câu chuyện độc đáo và biến ý tưởng thành điều gì đó hữu hình và ý nghĩa. Khi không có không gian sáng tạo, bạn dần mất đi sinh lực.</p>

<p class="nar"><strong>Trigger kích hoạt:</strong> ${d?.trigger || 'Bạn bùng cháy khi được khuyến khích thử nghiệm, khi audience phản hồi tích cực với sản phẩm sáng tạo của bạn và khi nhìn thấy ý tưởng biến thành hiện thực. Sự trì trệ và kiểm duyệt quá mức là kẻ thù lớn nhất của năng lượng bạn.'}</p>

<div class="insight-box">💡 <strong>Cách tối ưu hóa động lực của bạn:</strong> ${d?.how_to_motivate || 'Bảo vệ ít nhất 20% thời gian làm việc cho sáng tạo tự do — không deadline, không kỳ vọng. Đây không phải là lãng phí thời gian; đây là đầu tư vào nguồn năng lượng bền vững và ý tưởng đột phá của bạn.'}</div>`,

    4: (name, d) => `<p class="nar"><strong>${name}</strong> được thúc đẩy bởi <strong>khao khát xây dựng điều bền vững và đáng tin cậy</strong>. Bạn không tìm kiếm ánh hào quang ngắn hạn — bạn muốn nhìn lại sau 10 năm và thấy điều mình đã tạo ra vẫn đứng vững, vẫn phục vụ, vẫn có giá trị. Đây là động lực của <em>người thợ lành nghề</em> — và thế giới cần bạn hơn bao giờ hết.</p>

<p class="nar"><strong>Trigger kích hoạt:</strong> ${d?.trigger || 'Rõ ràng về kỳ vọng, quy trình được tổ chức tốt và môi trường coi trọng chất lượng hơn tốc độ. Bạn được truyền cảm hứng khi thấy công việc của mình đang xây dựng nền tảng cho điều gì đó lớn hơn mình.'}</p>

<div class="insight-box">💡 <strong>Cách tối ưu hóa động lực của bạn:</strong> ${d?.how_to_motivate || 'Hãy kết nối công việc hàng ngày với tầm nhìn dài hạn — viết ra "Tôi đang xây dựng điều gì?" và đặt nó nhìn thấy được. Khi thấy mệt mỏi với chi tiết nhỏ, nhìn vào bức tranh lớn để nhớ tại sao từng chi tiết đó quan trọng.'}</div>`,

    5: (name, d) => `<p class="nar"><strong>${name}</strong> được thúc đẩy bởi <strong>khao khát tự do và trải nghiệm mới</strong>. Bạn không thể xem những gì bạn biết hôm nay là đủ cho ngày mai — não bộ của bạn luôn đói khát điều mới, góc nhìn mới và cách làm mới. Sự thay đổi không làm bạn sợ hãi — nó làm bạn <em>sống</em>.</p>

<p class="nar"><strong>Trigger kích hoạt:</strong> ${d?.trigger || 'Sự đa dạng trong công việc, cơ hội di chuyển, gặp gỡ những con người khác nhau và cơ hội thực nghiệm. Khi công việc quá lặp đi lặp lại và không có gì để khám phá, năng lượng bạn rút nhanh hơn bạn nhận ra.'}</p>

<div class="insight-box">💡 <strong>Cách tối ưu hóa động lực của bạn:</strong> ${d?.how_to_motivate || 'Thiết kế vai trò có nhiều lĩnh vực tiếp xúc — không bị đóng khung trong một chuyên môn duy nhất. Học cách tìm "sự mới" ngay trong những thứ quen thuộc — hỏi "Nếu làm khác đi 20%, sẽ ra sao?" — để duy trì ngọn lửa ngay cả trong môi trường ổn định.'}</div>`,

    6: (name, d) => `<p class="nar"><strong>${name}</strong> được thúc đẩy bởi <strong>khao khát đóng góp có ý nghĩa và chăm sóc cộng đồng</strong>. Bạn không thể duy trì năng lượng khi công việc chỉ phục vụ lợi ích một bên — bạn cần thấy giá trị của mình đang chảy ra và nuôi dưỡng điều gì đó lớn hơn bản thân. Đây là động lực của <em>người xây dựng cộng đồng</em>.</p>

<p class="nar"><strong>Trigger kích hoạt:</strong> ${d?.trigger || 'Được làm việc với người nhận chân thành, thấy tác động thực tế với cuộc sống con người và cảm giác rằng mình là phần không thể thiếu của một điều tốt đẹp đang xảy ra. Sự vô nghĩa và tổ chức thiếu đạo đức là những thứ nhanh nhất làm bạn kiệt sức.'}</p>

<div class="insight-box">💡 <strong>Cách tối ưu hóa động lực của bạn:</strong> ${d?.how_to_motivate || 'Tìm kiếm các tổ chức có mission statement thực sự đồng điệu với giá trị cốt lõi của bạn — không chỉ nghe hay ở bề mặt. Và trong bất kỳ vai trò nào, hãy tìm cách kết nối công việc hàng ngày với giá trị con người mà nó tạo ra.'}</div>`,

    7: (name, d) => `<p class="nar"><strong>${name}</strong> được thúc đẩy bởi <strong>khao khát sự thật và hiểu biết sâu sắc</strong>. Câu hỏi "Tại sao?" là nhiên liệu cho động cơ của bạn. Bạn không thể tối ưu hóa điều bạn chưa thực sự hiểu — và vì thế, bạn sẵn sàng dành nhiều thời gian hơn người khác để tìm hiểu nền tảng trước khi bắt đầu.</p>

<p class="nar"><strong>Trigger kích hoạt:</strong> ${d?.trigger || 'Môi trường coi trọng sự độc lập tri thức, thời gian suy nghĩ và chiều sâu hơn chiều rộng. Bạn được kích hoạt khi được tin tưởng với những bài toán phức tạp thực sự, không phải những vấn đề giả vờ phức tạp.'}</p>

<div class="insight-box">💡 <strong>Cách tối ưu hóa động lực của bạn:</strong> ${d?.how_to_motivate || 'Bảo vệ thời gian suy nghĩ sâu — không email, không meeting không cần thiết. Đây là khi bạn tạo ra giá trị thực sự. Hãy truyền đạt điều này với người quản lý: kết quả nghiên cứu sâu của bạn cần thời gian "nấu" mà không thể bị vội.'}</div>`,

    8: (name, d) => `<p class="nar"><strong>${name}</strong> được thúc đẩy bởi <strong>khao khát tạo ra tác động lớn và xây dựng di sản</strong>. Bạn không tìm kiếm sự thoải mái — bạn tìm kiếm bằng chứng rằng mình đã tạo ra sự khác biệt có thể đo lường được. Quyền lực, trong đôi tay của bạn, không phải là mục đích — nó là công cụ để tạo ra điều xứng đáng với tầm nhìn của bạn.</p>

<p class="nar"><strong>Trigger kích hoạt:</strong> ${d?.trigger || 'Mục tiêu lớn, nguồn lực đủ để thực thi và quyền quyết định thực sự. Bạn không vận hành tốt trong môi trường quan liêu nơi quyết định phải qua 12 cấp phê duyệt — bạn cần đủ không gian để di chuyển nhanh.'}</p>

<div class="insight-box">💡 <strong>Cách tối ưu hóa động lực của bạn:</strong> ${d?.how_to_motivate || 'Làm rõ "thành công trong 3 năm trông như thế nào" và đặt mục tiêu trung gian cụ thể để đo lường tiến trình. Bạn cần thấy đà tiến — không phải chỉ kết quả cuối cùng. Mỗi milestone đạt được là nhiên liệu tiếp theo.'}</div>`,

    9: (name, d) => `<p class="nar"><strong>${name}</strong> được thúc đẩy bởi <strong>khao khát đóng góp cho điều lớn lao hơn chính mình</strong>. Bạn không thể duy trì năng lượng khi công việc chỉ phục vụ bản thân — bạn cần cảm nhận mình là phần của một dòng chảy lịch sử, đang đóng góp vào điều gì đó sẽ còn tồn tại sau khi bạn đã ra đi.</p>

<p class="nar"><strong>Trigger kích hoạt:</strong> ${d?.trigger || 'Sứ mệnh có ý nghĩa vượt thời gian, cộng đồng chia sẻ giá trị và cơ hội truyền lại điều gì đó cho thế hệ kế tiếp. Công việc thuần túy theo đuổi lợi nhuận ngắn hạn rất khó giữ lửa trong bạn dài lâu.'}</p>

<div class="insight-box">💡 <strong>Cách tối ưu hóa động lực của bạn:</strong> ${d?.how_to_motivate || 'Dành thời gian định kỳ viết lại "tại sao tôi làm điều này?" — không phải mục tiêu tài chính, mà là ý nghĩa sâu xa hơn. Kết nối với những người cùng giá trị sẽ nhân lên năng lượng của bạn theo cấp số nhân.'}</div>`,
  },

  // ════════════════════════════════════════════════════════════════════
  // NĂNG LỰC TIẾP CẬN (APPROACH ABILITY) — Per-number deep narrative (1-9)
  // Gọi: NT.approachAbility[num](name, d)
  // ════════════════════════════════════════════════════════════════════
  approachAbility: {
    1: (name, d) => `<p class="nar"><strong>${name}</strong> tiếp cận điều mới với <strong>sự chủ động và can đảm bẩm sinh</strong>. Trong khi người khác đang phân tích rủi ro, bạn đã bước vào. Trong khi người khác đang chờ đèn xanh, bạn đã tự thắp đèn. Đây không phải là liều lĩnh — đây là năng lực nhận ra cơ hội và kích hoạt hành động trước khi sự do dự kịp xuất hiện.</p>

<p class="nar"><strong>Dấu ấn đặc trưng:</strong> ${d?.signature_move || 'Là người đầu tiên giơ tay, người đầu tiên thử, người đặt ra tiêu chuẩn mà những người khác sau đó cố gắng noi theo. Bạn tạo ra đà — không chạy theo đà.'}</p>

<p class="nar"><strong>Hướng phát triển:</strong> ${d?.growth_tip || 'Học cách dành 5 phút đánh giá nhanh trước khi nhảy vào — không phải để chần chừ, mà để đảm bảo bạn đang nhảy vào đúng chỗ. Không phải mọi cơ hội đều xứng đáng với năng lượng bạn sắp rót vào.'}</p>

<div class="insight-box">💡 Kỹ năng chủ động của bạn là một tài sản cực kỳ hiếm. Hãy dùng nó có chọn lọc — chất lượng hơn số lượng — và bạn sẽ thấy tác động nhân lên gấp bội.</div>`,

    2: (name, d) => `<p class="nar"><strong>${name}</strong> tiếp cận điều mới qua <strong>sự kết nối và lắng nghe</strong>. Trước khi đưa ra bất kỳ hành động nào, bạn tự nhiên thu thập tín hiệu từ môi trường xung quanh — đọc cảm xúc, nghe ngầm ý, cảm nhận năng lượng phòng. Đây là năng lực tình báo xã hội, và ít người sở hữu nó ở mức tinh tế như bạn.</p>

<p class="nar"><strong>Dấu ấn đặc trưng:</strong> ${d?.signature_move || 'Là người hỏi câu hỏi mà người khác ngại hỏi, là người nhận ra khi ai đó trong phòng không thoải mái và chủ động tạo không gian để họ lên tiếng. Bạn xây cầu trước khi đi qua.'}</p>

<p class="nar"><strong>Hướng phát triển:</strong> ${d?.growth_tip || 'Học cách tin vào trực giác của mình ngay cả khi chưa có đủ "bằng chứng". Năng lực đọc phòng của bạn chính xác hơn bạn nghĩ — luyện tập ghi lại những nhận định ban đầu và kiểm tra lại.'}</p>

<div class="insight-box">💡 Bạn có khả năng biến người xa lạ thành đồng minh trong một cuộc trò chuyện. Đây là siêu năng lực — đặc biệt trong thế giới mà mọi mục tiêu lớn đều đòi hỏi sự hợp tác.</div>`,

    3: (name, d) => `<p class="nar"><strong>${name}</strong> tiếp cận điều mới qua <strong>sự tò mò sáng tạo và thử nghiệm vui vẻ</strong>. Bạn không xem "thất bại thử nghiệm" là thất bại — bạn xem nó là bước trong quy trình khám phá. Điều này cho phép bạn thử nhiều hơn, học nhanh hơn và cuối cùng tìm ra giải pháp sáng tạo mà cách tiếp cận thận trọng hơn sẽ không bao giờ đến được.</p>

<p class="nar"><strong>Dấu ấn đặc trưng:</strong> ${d?.signature_move || 'Là người đề xuất những ý tưởng điên rồ nhất trong buổi brainstorm — và đôi khi chính những ý tưởng đó, sau khi được tinh chỉnh, lại trở thành giải pháp đột phá nhất. Năng lượng vui vẻ của bạn cũng giúp nhóm thư giãn khi căng thẳng.'}</p>

<p class="nar"><strong>Hướng phát triển:</strong> ${d?.growth_tip || 'Phát triển kỹ năng hậu kỳ — chuyển từ khám phá sang thực thi. Học cách chọn 1-2 ý tưởng tốt nhất để đưa đến cùng, thay vì liên tục khởi động điều mới.'}</p>

<div class="insight-box">💡 Năng lượng sáng tạo của bạn là nguồn tài nguyên vô giá cho bất kỳ nhóm nào. Hãy tìm đồng đội có thể biến visions của bạn thành reality — đó là cặp đôi hoàn hảo.</div>`,

    4: (name, d) => `<p class="nar"><strong>${name}</strong> tiếp cận điều mới qua <strong>sự nghiên cứu kỹ lưỡng và lộ trình rõ ràng</strong>. Bạn không bắt đầu khi chưa có bản đồ. Điều này không phải là thiếu dũng cảm — đây là sự khôn ngoan của người biết rằng chuẩn bị tốt là nền tảng của thực thi tốt.</p>

<p class="nar"><strong>Dấu ấn đặc trưng:</strong> ${d?.signature_move || 'Là người mang đến checklist không ai nghĩ đến, phát hiện rủi ro tiềm ẩn trước khi chúng xảy ra và đảm bảo điều kiện để các thành viên khác có thể làm việc tốt nhất của họ.'}</p>

<p class="nar"><strong>Hướng phát triển:</strong> ${d?.growth_tip || 'Luyện tập khả năng quyết định với thông tin không đầy đủ — bởi vì thực tế sẽ luôn thiếu thông tin ở mức độ nào đó. Đặt deadline cho giai đoạn "nghiên cứu" để tránh nó kéo dài vô tận.'}</p>

<div class="insight-box">💡 Năng lực chuẩn bị của bạn là điều tạo nên sự khác biệt giữa dự án thành công bền vững và dự án thành công nhất thời. Hãy tự hào về điều đó.</div>`,

    5: (name, d) => `<p class="nar"><strong>${name}</strong> tiếp cận điều mới qua <strong>sự thích nghi linh hoạt và nhảy vào dòng chảy</strong>. Bạn không cần plan hoàn hảo để bắt đầu — bạn tin vào khả năng điều chỉnh của mình trong quá trình. Điều này cho phép bạn khai thác cơ hội trong khi người khác vẫn đang plan.</p>

<p class="nar"><strong>Dấu ấn đặc trưng:</strong> ${d?.signature_move || 'Là người có thể xoay trở trong 5 phút khi kế hoạch thay đổi, biến tình huống bất ngờ thành cơ hội và giữ năng lượng nhóm ngay cả khi mọi thứ không đi theo kịch bản.'}</p>

<p class="nar"><strong>Hướng phát triển:</strong> ${d?.growth_tip || 'Phát triển kỹ năng tạo ra cấu trúc tối thiểu — đủ để người khác có thể dự đoán và phối hợp với bạn. Sự linh hoạt của bạn kết hợp với một mức độ nhất quán nào đó sẽ tạo ra niềm tin từ đồng đội.'}</p>

<div class="insight-box">💡 Khả năng thích nghi của bạn là vũ khí bí mật trong môi trường VUCA (bất ổn, không chắc, phức tạp, mơ hồ). Đây là thế kỷ của bạn.</div>`,

    6: (name, d) => `<p class="nar"><strong>${name}</strong> tiếp cận điều mới qua <strong>sự cân nhắc tác động và trách nhiệm</strong>. Trước khi hành động, bạn tự hỏi: "Điều này sẽ ảnh hưởng đến ai? Tôi có đang thực sự giúp ích hay chỉ đang thỏa mãn nhu cầu cá nhân?" Đây là lương tâm hành động — và thế giới cần nhiều hơn kiểu tiếp cận này.</p>

<p class="nar"><strong>Dấu ấn đặc trưng:</strong> ${d?.signature_move || 'Là người đặt câu hỏi đạo đức khi cả nhóm đang hào hứng lao về phía trước, là người đảm bảo rằng không ai bị bỏ lại phía sau trong quá trình thay đổi.'}</p>

<p class="nar"><strong>Hướng phát triển:</strong> ${d?.growth_tip || 'Học cách phân biệt "đủ tốt để bắt đầu" và "hoàn hảo". Trách nhiệm là đức tính — nhưng quá thận trọng có thể làm bạn để vuột những cơ hội mà bạn hoàn toàn xứng đáng nắm bắt.'}</p>

<div class="insight-box">💡 Năng lực cân nhắc trách nhiệm của bạn tạo ra sự tin tưởng lâu dài. Người ta có thể không nhớ tốc độ bạn hành động — nhưng họ sẽ nhớ rằng bạn chưa bao giờ làm hại ai vì sự vôý thức.</div>`,

    7: (name, d) => `<p class="nar"><strong>${name}</strong> tiếp cận điều mới qua <strong>sự quan sát và phân tích trước khi hành động</strong>. Bạn không phải người đầu tiên nhảy vào bể bơi — nhưng khi bạn nhảy, bạn biết chính xác độ sâu của nó là bao nhiêu và bạn sẽ bơi theo kiểu gì. Đây là trí tuệ chiến lược, không phải sự do dự.</p>

<p class="nar"><strong>Dấu ấn đặc trưng:</strong> ${d?.signature_move || 'Là người phát hiện pattern mà người khác bỏ lỡ, đặt câu hỏi chạm vào gốc rễ vấn đề và mang lại góc nhìn phân tích làm thay đổi hướng đi của cả nhóm.'}</p>

<p class="nar"><strong>Hướng phát triển:</strong> ${d?.growth_tip || 'Chia sẻ suy nghĩ của bạn sớm hơn — ngay cả khi chưa "hoàn chỉnh". Nhiều insight của bạn có giá trị ở giai đoạn 70% hơn là được giữ kín đến khi 100% — vì đến lúc đó cơ hội hành động có thể đã qua.'}</p>

<div class="insight-box">💡 Khả năng phân tích sâu của bạn là vũ khí của những người xây dựng điều bền vững. Đừng rush — nhưng cũng đừng để sự hoàn hảo trở thành rào cản cho sự bắt đầu.</div>`,

    8: (name, d) => `<p class="nar"><strong>${name}</strong> tiếp cận điều mới qua <strong>chiến lược và tính toán tác động</strong>. Trước khi đặt một bước nào, bạn đã nhìn thấy 5 bước tiếp theo và đang tối ưu hóa con đường đến kết quả tốt nhất. Đây là năng lực của nhà kiến trúc — không chỉ xây theo bản vẽ, mà tự tạo ra bản vẽ.</p>

<p class="nar"><strong>Dấu ấn đặc trưng:</strong> ${d?.signature_move || 'Là người biến nguồn lực hạn chế thành kết quả tối đa, nhìn thấy cơ hội trong nơi người khác chỉ thấy trở ngại và đưa ra quyết định dứt khoát ngay cả trong điều kiện không chắc chắn.'}</p>

<p class="nar"><strong>Hướng phát triển:</strong> ${d?.growth_tip || 'Phát triển kỹ năng truyền đạt chiến lược của bạn để người khác có thể tham gia, không chỉ tuân theo. Năng lực của bạn nhân lên khi có đội ngũ thực sự hiểu và tin vào tầm nhìn.'}</p>

<div class="insight-box">💡 Bạn được sinh ra để lãnh đạo — nhưng lãnh đạo thực sự không phải là kiểm soát mọi thứ, mà là trao quyền đúng người, đúng nhiệm vụ, đúng thời điểm.</div>`,

    9: (name, d) => `<p class="nar"><strong>${name}</strong> tiếp cận điều mới qua <strong>sự bao quát toàn diện và hiểu biết về chu kỳ</strong>. Trước khi hành động, bạn đặt tình huống trong bối cảnh lớn hơn — "Điều này xảy ra ở đâu trong chu kỳ? Bài học từ quá khứ nói gì? Tương lai nào đang được tạo ra từ đây?" Đây là trí tuệ lịch sử và tầm nhìn phổ quát.</p>

<p class="nar"><strong>Dấu ấn đặc trưng:</strong> ${d?.signature_move || 'Là người kết nối điểm hiện tại với bức tranh lớn hơn, giúp nhóm hiểu "tại sao chúng ta đang ở đây" và "đây là bước quan trọng như thế nào trong hành trình dài hạn của chúng ta".'}</p>

<p class="nar"><strong>Hướng phát triển:</strong> ${d?.growth_tip || 'Học cách tóm gọn tầm nhìn lớn thành những bước hành động cụ thể hàng tuần. Người xung quanh cần nhìn thấy cầu nối giữa "ý nghĩa lớn" và "làm gì ngày mai". Đây là kỹ năng lãnh đạo quan trọng cần rèn luyện.'}</p>

<div class="insight-box">💡 Bạn là người giữ lửa cho tầm nhìn dài hạn khi mọi người xung quanh bị cuốn vào áp lực ngắn hạn. Vai trò đó quan trọng hơn bạn nghĩ — và hiếm hơn bạn biết.</div>`,
  },

  // ════════════════════════════════════════════════════════════════════
  // THÁI ĐỘ TIẾP CẬN (APPROACH ATTITUDE) — Per-number deep narrative (1-9)
  // Gọi: NT.approachAttitude[num](name, d)
  // ════════════════════════════════════════════════════════════════════
  approachAttitude: {
    1: (name, d) => `<p class="nar">Khi <strong>${name}</strong> bước vào một tình huống mới, người xung quanh lập tức nhận ra: <strong>thái độ tự tin và quyết đoán</strong>. Bạn không dò dẫm, không chờ được mời — bạn xuất hiện với năng lượng "đây là lúc hành động" mà truyền lan ra cả phòng. Đây là <em>thương hiệu cá nhân</em> tự nhiên của bạn, hình thành không phải bởi thiết kế mà bởi bản chất.</p>

<p class="nar"><strong>Người khác nhìn thấy ở bạn:</strong> ${d?.perception || 'Mạnh mẽ, chủ động và tự tin. Đôi khi bị nhận xét là quá nhanh hoặc thiếu kiên nhẫn — nhưng thường thì đúng vào những lúc tốc độ là yếu tố tạo ra sự khác biệt.'}</p>

<p class="nar"><strong>Cách tận dụng thái độ này:</strong> ${d?.reframe || 'Biến quyết đoán thành nguồn cảm hứng — thay vì "Làm ngay đi!" hãy thử "Mình tin chúng ta có thể làm được điều này ngay bây giờ. Ai muốn bắt đầu cùng mình?" Cùng một năng lượng, khác về cách truyền đạt, tác động nhân lên gấp bội.'}</p>

<div class="insight-box">💡 Thái độ của bạn là nam châm thu hút cơ hội — người ta nhớ bạn là người "có thể làm được" ngay cả trước khi bạn làm bất cứ điều gì. Hãy dùng điều đó như lợi thế đàm phán và lãnh đạo.</div>`,

    2: (name, d) => `<p class="nar">Khi <strong>${name}</strong> tiếp cận điều mới, người xung quanh cảm nhận: <strong>sự ấm áp, cởi mở và muốn lắng nghe</strong>. Bạn không bước vào phòng để chiếm diễn đàn — bạn bước vào để tạo không gian để người khác tỏa sáng. Đây là thái độ hiếm và cực kỳ có giá trị.</p>

<p class="nar"><strong>Người khác nhìn thấy ở bạn:</strong> ${d?.perception || 'Dễ tiếp cận, đáng tin cậy và thực sự quan tâm. Người ta cảm thấy an toàn khi chia sẻ với bạn những điều họ không dễ nói với người khác — một lợi thế to lớn trong mọi mối quan hệ và công việc.'}</p>

<p class="nar"><strong>Cách tận dụng thái độ này:</strong> ${d?.reframe || 'Dùng khả năng tạo không gian an toàn để thu thập thông tin và xây dựng liên minh trước khi cần. Người tin tưởng bạn sẽ cùng bạn tiến về phía trước khi thách thức thực sự xuất hiện.'}</p>

<div class="insight-box">💡 Bạn không cần phải ồn ào để gây ấn tượng — sức ảnh hưởng thực sự của bạn được xây dựng qua những kết nối sâu sắc và bền vững mà ít người sở hữu được.</div>`,

    3: (name, d) => `<p class="nar">Khi <strong>${name}</strong> xuất hiện, năng lượng trong phòng thay đổi: <strong>sự hào hứng, lạc quan và sáng tạo</strong> truyền lan. Bạn không chỉ mang ý tưởng — bạn mang theo một trạng thái tinh thần khiến người khác cũng muốn sáng tạo. Đây là lãnh đạo bằng năng lượng — một dạng ảnh hưởng mà không thể dạy, chỉ có thể xây dựng bằng việc là chính mình.</p>

<p class="nar"><strong>Người khác nhìn thấy ở bạn:</strong> ${d?.perception || 'Vui tươi, đầy sáng tạo và truyền cảm hứng. Đôi khi bị đánh giá là thiếu nghiêm túc — nhưng thực ra những người coi bạn vậy chỉ đang nhầm lẫn giữa "vui" và "kém chuyên nghiệp".'}</p>

<p class="nar"><strong>Cách tận dụng thái độ này:</strong> ${d?.reframe || 'Dùng năng lượng của mình để phá vỡ rào cản tâm lý khi nhóm đang bị tắc. Một buổi brainstorm vui vẻ do bạn dẫn dắt có thể mang lại kết quả mà một cuộc họp nghiêm túc kéo dài không đạt được.'}</p>

<div class="insight-box">💡 Khả năng tạo ra môi trường sáng tạo tích cực là kỹ năng lãnh đạo của thế kỷ 21. Hãy bảo vệ năng lượng đặc biệt đó — đừng để môi trường tiêu cực làm nó mờ dần.</div>`,

    4: (name, d) => `<p class="nar">Khi <strong>${name}</strong> tiếp cận điều mới, người xung quanh cảm nhận: <strong>sự chắc chắn, đáng tin cậy và nghiêm túc</strong>. Bạn không hứa những gì bạn không chắc có thể giữ. Bạn không bắt đầu những gì bạn không có ý định hoàn thành. Đây là thẩm quyền xây dựng qua hành động nhất quán — không phải lời nói.</p>

<p class="nar"><strong>Người khác nhìn thấy ở bạn:</strong> ${d?.perception || 'Đáng tin cậy, có nguyên tắc và sẽ làm đúng những gì đã hứa. Người ta tìm đến bạn khi cần người có thể thực sự giữ vững điều gì đó — không phải vì phong trào, mà vì cam kết.'}</p>

<p class="nar"><strong>Cách tận dụng thái độ này:</strong> ${d?.reframe || 'Dùng danh tiếng "người giữ lời" của mình để xây dựng vốn tin tưởng dài hạn. Khi cần sự ủng hộ cho một dự án quan trọng, lịch sử nhất quán của bạn sẽ mở cửa mà người khác không thể.'}</p>

<div class="insight-box">💡 Trong thế giới tràn lan những lời hứa dễ dàng, bạn là ngoại lệ đáng quý. Hãy trân trọng danh tiếng đó và chỉ cam kết những gì bạn thực sự có thể thực hiện.</div>`,

    5: (name, d) => `<p class="nar">Khi <strong>${name}</strong> bước vào tình huống mới, người xung quanh thấy: <strong>sự phóng khoáng, linh hoạt và đầy sinh lực</strong>. Bạn không bị ràng buộc bởi "chúng ta vẫn làm thế này" — bạn mang theo câu hỏi "Tại sao không thử?" và năng lượng sẵn sàng khám phá. Điều này tạo ra một từ trường thu hút những người muốn phá vỡ khuôn mẫu.</p>

<p class="nar"><strong>Người khác nhìn thấy ở bạn:</strong> ${d?.perception || 'Năng động, khó đoán (theo nghĩa tích cực) và luôn mang đến góc nhìn mới. Đôi khi người ta lo ngại về sự nhất quán — nhưng đây là tín hiệu để bạn rèn thêm khả năng truyền đạt tầm nhìn dài hạn.'}</p>

<p class="nar"><strong>Cách tận dụng thái độ này:</strong> ${d?.reframe || 'Dùng sự linh hoạt của mình như lợi thế đàm phán — bạn có thể tìm ra giải pháp sáng tạo khi mọi người đang bế tắc. Học cách present điều này như "tư duy đột phá" thay vì "thay đổi kế hoạch".'}</p>

<div class="insight-box">💡 Thái độ phóng khoáng của bạn là liều vaccine chống lại sự trì trệ của tổ chức. Những nhóm có người như bạn hiếm khi bị mắc kẹt quá lâu trong những vấn đề mà lẽ ra có thể giải quyết đơn giản hơn.</div>`,

    6: (name, d) => `<p class="nar">Khi <strong>${name}</strong> tiếp cận điều mới, người xung quanh cảm nhận: <strong>sự quan tâm chân thành và muốn tạo ra điều tốt đẹp hơn</strong>. Bạn không tiếp cận với tư cách người cạnh tranh — bạn tiếp cận với tư cách người hợp tác, tìm kiếm cách làm cho cả tình huống tốt hơn cho tất cả mọi người.</p>

<p class="nar"><strong>Người khác nhìn thấy ở bạn:</strong> ${d?.perception || 'Chân thành, quan tâm và có trách nhiệm. Người ta tin rằng bạn không hành động chỉ vì lợi ích cá nhân — và điều đó tạo ra sự ủng hộ sâu sắc và bền vững từ những người xung quanh.'}</p>

<p class="nar"><strong>Cách tận dụng thái độ này:</strong> ${d?.reframe || 'Dùng danh tiếng chân thành của mình để dẫn đầu các sáng kiến đòi hỏi sự tin tưởng của cộng đồng. Người ta theo bạn không phải vì sợ hay vì lợi ích — mà vì họ tin bạn thực sự muốn điều tốt nhất cho tất cả.'}</p>

<div class="insight-box">💡 Thái độ quan tâm chân thành của bạn xây dựng di sản — không phải qua một hành động lớn, mà qua hàng ngàn khoảnh khắc nhỏ khi bạn chọn đặt lợi ích của người khác lên ngang với lợi ích của mình.</div>`,

    7: (name, d) => `<p class="nar">Khi <strong>${name}</strong> tiếp cận điều mới, người xung quanh cảm nhận: <strong>sự thẩm định và cẩn trọng trước khi chấp nhận</strong>. Bạn không dễ bị thuyết phục bởi bề mặt — bạn đặt câu hỏi, kiểm tra, và chỉ đặt niềm tin khi đã thực sự hiểu. Điều này đôi khi bị nhận xét là "xa cách" — nhưng thực ra đó là tính toàn vẹn trí tuệ.</p>

<p class="nar"><strong>Người khác nhìn thấy ở bạn:</strong> ${d?.perception || 'Thận trọng, sâu sắc và không bị thao túng dễ dàng. Người ta tìm đến bạn khi cần ai đó có thể đánh giá khách quan và không bị cuốn theo cảm xúc của đám đông.'}</p>

<p class="nar"><strong>Cách tận dụng thái độ này:</strong> ${d?.reframe || 'Dùng khả năng thẩm định của mình như vai trò kiểm soát chất lượng — nhất là trong những quyết định quan trọng nơi lý trí cần thắng cảm xúc. Học cách trình bày phân tích với sự ấm áp để ý kiến của bạn được lắng nghe, không chỉ được kính trọng.'}</p>

<div class="insight-box">💡 Khả năng không bị thao túng và không chạy theo đám đông là một dạng dũng cảm trí tuệ cực kỳ hiếm. Thế giới cần nhiều hơn những người như bạn — người nói sự thật ngay cả khi nó không phổ biến.</div>`,

    8: (name, d) => `<p class="nar">Khi <strong>${name}</strong> bước vào một tình huống, người xung quanh nhận ra ngay: <strong>thẩm quyền và quyết đoán</strong>. Không cần phải nói to hay chiếm diễn đàn — sự hiện diện của bạn tự nó đã truyền tải "người này biết mình đang làm gì". Đây là lãnh đạo bằng presence — dạng ảnh hưởng tự nhiên nhất và bền vững nhất.</p>

<p class="nar"><strong>Người khác nhìn thấy ở bạn:</strong> ${d?.perception || 'Có năng lực, quyết đoán và biết cách nhìn xa trông rộng. Đôi khi bị cảm nhận là có khoảng cách — nhưng đây thường là dấu hiệu của người đang xử lý nhiều thứ cùng lúc hơn là người thiếu quan tâm.'}</p>

<p class="nar"><strong>Cách tận dụng thái độ này:</strong> ${d?.reframe || 'Dùng thẩm quyền tự nhiên của mình để lãnh đạo trong khủng hoảng — nhưng cũng học cách biểu lộ sự quan tâm đến con người. Thẩm quyền kết hợp với sự ấm áp là công thức lãnh đạo không thể đánh bại.'}</p>

<div class="insight-box">💡 Trong phòng hội nghị hay trên thương trường, thái độ của bạn tự tạo ra không gian mà người khác phải điều chỉnh. Đây là lợi thế chiến lược — hãy dùng nó có ý thức và đạo đức.</div>`,

    9: (name, d) => `<p class="nar">Khi <strong>${name}</strong> tiếp cận điều mới, người xung quanh cảm nhận: <strong>sự khôn ngoan và bao dung</strong> — như đang gặp ai đó đã từng trải qua tất cả và giờ đây nhìn mọi thứ với đôi mắt từ bi hơn. Bạn không dễ bị sốc, không dễ bị kích động — và điều đó tạo ra sự ổn định mà những người xung quanh vô thức nương tựa vào.</p>

<p class="nar"><strong>Người khác nhìn thấy ở bạn:</strong> ${d?.perception || 'Kiên nhẫn, bao dung và có tầm nhìn. Người ta cảm thấy được chấp nhận khi ở cạnh bạn — không bị phán xét, không cần phải hoàn hảo. Đây là quà tặng quý giá nhất mà một con người có thể trao cho những người xung quanh.'}</p>

<p class="nar"><strong>Cách tận dụng thái độ này:</strong> ${d?.reframe || 'Dùng sự bao dung và tầm nhìn của mình để hòa giải những mâu thuẫn không ai khác có thể giải quyết, để giữ nhóm lại với nhau khi áp lực đẩy người ta ra xa. Vai trò "người giữ không gian" này có giá trị khổng lồ và hiếm người nhận ra.'}</p>

<div class="insight-box">💡 Bạn có khả năng biến những khoảnh khắc xung đột thành cơ hội hiểu biết lẫn nhau sâu sắc hơn. Đây không chỉ là kỹ năng — đây là thiên hướng linh hồn.</div>`,
  },

  // ════════════════════════════════════════════════════════════════════
  // PHÂN TÍCH VẬN SỐ THEO TỪNG LĨnh VỰC — per-domain, per-year-number
  // Gọi: NT.personalYearDomains[num](name, year, age)
  // Returns: { tinhYeu, suNghiep, taiChinh, giaoTiepXaHoi, hocTap, honNhan }
  // ════════════════════════════════════════════════════════════════════
  personalYearDomains: {

    1: (name, year, age) => ({
      tinhYeu: `<p class="nar">Trong năm Vận số 1, tình yêu của <strong>${name}</strong> bước vào một chương mới đầy khai phóng. Nếu bạn đang độc thân, đây là năm năng lượng cá nhân của bạn tỏa sáng mạnh mẽ nhất — sức hút tự nhiên và sự tự tin được khuếch đại, khiến bạn trở nên thu hút hơn trong mắt người khác một cách chân thực. Tuy nhiên, những mối tình bắt đầu trong năm số 1 thường có khởi đầu mạnh mẽ, đòi hỏi bạn phải thực sự sẵn sàng để gắn kết — không chỉ vì cảm xúc nhất thời.</p>
<p class="nar">Tuy nhiên, ảnh hưởng của Vận số 1 cũng có thể khiến bạn trở nên cứng nhắc hơn trong tình yêu — xu hướng muốn dẫn dắt và kiểm soát có thể tạo ra ma sát với người bạn đời. Hãy nhớ: tình yêu là sự cộng hưởng, không phải cuộc thi. Buông bỏ cái tôi trong tình cảm sẽ là bài học lớn nhất năm này.</p>`,

      suNghiep: `<p class="nar">Sự nghiệp của <strong>${name}</strong> trong năm Vận số 1 như được thổi một luồng gió mới: đây là thời điểm lý tưởng để bắt đầu dự án mới, nộp đơn vào vị trí mơ ước, hoặc thực hiện những thay đổi lớn mà bạn đã ấp ủ từ lâu. Vũ trụ đang hỗ trợ những ai dám hành động táo bạo và tự định hướng.</p>
<p class="nar">Làm tốt đầu chắc chắn tô đậm nền tảng để bạn tiến xa hơn. Năng lượng số 1 cũng giúp bạn có tư duy độc lập hơn, sẵn lòng hơn để đưa ra các quyết định lớn mà không cần phải chờ xin ý kiến. Nếu bạn đang nghĩ đến việc khởi nghiệp hay làm việc tự do, đây là năm thích hợp nhất để đặt nền móng đầu tiên.</p>
<p class="nar">Tuy nhiên, chính sự tự cao quá mức của số 1 khó có khả năng làm bạn bỏ lỡ các cơ hội hợp tác có giá trị. Hãy bảo đảm là bạn luôn cởi mở với những đề xuất và ý kiến từ đồng nghiệp, đừng để cái tôi che khuất những điểm mù chiến lược.</p>`,

      taiChinh: `<p class="nar">Học cách làm chủ tài chính từ những điều cơ bản: Vận số 1 mang đến cho <strong>${name}</strong> cảm giác tự lực và độc lập về tài chính rất rõ ràng. Bạn sẽ bắt đầu nhìn nhận lại cách mình kiếm tiền, tiêu tiền và tích lũy. Đây là thời điểm tốt để tái cơ cấu lại thu nhập — tìm kiếm nguồn thu mới, lên kế hoạch tiết kiệm khoa học hơn.</p>
<p class="nar">Tuy nhiên, hãy đề phòng xu hướng chi tiêu đột ngột hoặc đưa ra các quyết định đầu tư quá vội vàng. Năng lượng số 1 đôi khi tạo ra cảm giác "mình có thể làm được tất cả" — điều đó tốt cho tinh thần nhưng có thể dẫn đến rủi ro tài chính nếu không có kế hoạch cụ thể. Hãy kết hợp chính sách táo bạo của số 1 với sự thận trọng có chủ đích để thu về kết quả bền vững.</p>`,

      giaoTiepXaHoi: `<p class="nar">Trong năm Vận số 1, <strong>${name}</strong> mang năng lượng mới cách giao tiếp với người khác — năng động hơn, thẳng thắn hơn, và tự tin hơn đứng trước đám đông. Đây là năm bạn nên tập trung vào xây dựng thương hiệu cá nhân, vì người xung quanh dễ bị thu hút bởi sự rõ ràng và mạnh mẽ trong cách bạn thể hiện bản thân.</p>
<p class="nar">Tuy nhiên, ảnh hưởng của Vận số 1 đôi khi khiến bạn trở nên kém kiên nhẫn hoặc cắt đứt quan hệ quá nhanh khi cảm thấy ai đó không theo kịp nhịp độ của mình. Hãy cẩn thận: những mối quan hệ quan trọng cần được đầu tư và duy trì, không phải bị bỏ qua chỉ vì bạn đang bận tập trung vào bản thân. Giao tiếp trong năm này đạt hiệu quả cao nhất khi bạn kết hợp được sự quyết đoán với sự lắng nghe.</p>`,

      hocTap: `<p class="nar">Học tập, nâng cấp bản thân trong năm Vận số 1 rất thuận lợi vì năng lượng số 1 thúc đẩy <strong>${name}</strong> hướng về phía trước và tìm kiếm những kiến thức, kỹ năng mới. Đây là lúc bạn có thể học một cách nhanh nhất và hiệu quả nhất — đặc biệt là những lĩnh vực liên quan đến lãnh đạo, khởi nghiệp, hay bất cứ điều gì giúp bạn trở nên độc lập và tự chủ hơn.</p>
<p class="nar">Hãy dũng cảm đăng ký những khóa học hay chương trình đào tạo mà bạn đã ngại ngùng từ trước đến nay. Năng lượng "mới mẻ - khởi đầu" của số 1 giúp bạn tiếp thu nhanh và hứng khởi với những điều chưa biết. Đặc biệt, những kỹ năng học trong năm 1 có xu hướng gắn bó với bạn rất lâu dài, vì chúng được học từ chính động lực nội tâm chứ không phải áp lực bên ngoài.</p>`,

      honNhan: `<p class="nar">Hôn nhân là chuyện nghiêm túc nên xảy ra tự nhiên — với <strong>${name}</strong> trong năm Vận số 1, nếu bạn đang trong mối quan hệ lâu dài, đây có thể là năm bạn và người bạn đời cần xác định lại các vai trò và ranh giới trong cuộc sống chung. Vận số 1 mang đến cảm giác cần khẳng định sự độc lập — điều này có thể tạo ra va chạm nếu cả hai không giao tiếp cởi mở.</p>
<p class="nar">Nếu bạn đang đứng trước quyết định kết hôn, hãy thật sự hỏi bản thân: "Tôi muốn điều này vì chính mình, hay vì kỳ vọng của người khác?" Năm số 1 chỉ ủng hộ những quyết định xuất phát từ nội lực thực sự, không phải từ ảnh hưởng bên ngoài. Những cuộc hôn nhân bắt đầu trong năm Vận số 1 có tiềm năng rất lớn nếu cả hai đều độc lập, tự chủ và chọn nhau từ sự mạnh mẽ — không phải từ nhu cầu.</p>`,
    }),

    2: (name, year, age) => ({
      tinhYeu: `<p class="nar">Trong năm Vận số 2, tình yêu cần nên móng vững chắc mỗi lâu bền. Với <strong>${name}</strong>, đây là một năm chuyên biệt cho sự kết nối sâu sắc và chữa lành trong tình yêu. Bạn mang đến năng lượng số 2 nhạy cảm, kiên nhẫn và chú tâm — tạo ra môi trường an toàn để tình yêu nảy nở một cách chân thực và bền vững. Nếu bạn đang trong một mối quan hệ, đây là thời điểm lý tưởng để xây dựng sự thấu hiểu lẫn nhau ở tầng sâu hơn — những cuộc trò chuyện thật sự, những khoảnh khắc chia sẻ không cần màu mè.</p>
<p class="nar">Tuy nhiên, ảnh hưởng của Vận số 2 cũng có thể khiến bạn trở nên quá nhạy cảm trong tình yêu, dễ bị tổn thương bởi những lời nói không cân nhắc của người bạn đời. Bạn cũng có xu hướng hi sinh quá nhiều cho đối phương đến mức quên đi nhu cầu của bản thân. Hãy nhớ: sự cân bằng trong tình yêu không phải là cho đi tất cả — mà là cùng nhau lớn lên với mức độ ngang nhau, bề trên và bề dưới.</p>`,

      suNghiep: `<p class="nar">Làm tốt đầu chắc chắn tô đậm nền tảng để bạn tiến xa hơn. Sự nghiệp của <strong>${name}</strong> trong năm Vận số 2 sẽ tiến triển theo hướng ổn định và bền bỉ, không rực rỡ nhưng chắc chắn. Đây là năm của sự hợp tác và xây dựng mối quan hệ chuyên nghiệp — những liên minh, đối tác hay nhóm làm việc mạnh mẽ được tạo ra trong năm số 2 có xu hướng lâu dài và sinh quả tốt.</p>
<p class="nar">Nếu bạn đang trong giai đoạn cần đàm phán hay thuyết phục, đây là thời điểm thuận lợi — vì năng lượng số 2 tạo ra khả năng ngoại giao và cảm nhận người khác vượt trội. Hãy dùng khả năng lắng nghe tinh tế của mình để hiểu điều người khác thực sự cần, và bạn sẽ tạo ra những thỏa thuận mà cả hai bên đều cảm thấy thắng. Tuy nhiên, hãy tránh để người khác lợi dụng sự mềm mỏng của bạn — cần kiên quyết với ranh giới chuyên nghiệp.</p>`,

      taiChinh: `<p class="nar">Về tài chính trong năm Vận số 2, <strong>${name}</strong> cần xây dựng sự an toàn hơn là tìm kiếm tăng trưởng đột biến. Đây không phải năm để đầu tư mạo hiểm hay đặt cược lớn — mà là năm để kiểm tra lại ngân sách cá nhân, tiết kiệm đều đặn và tạo ra sự ổn định tài chính làm nền tảng cho những năm sau. Những quyết định tài chính khôn ngoan nhất trong năm này thường đến từ sự kiên nhẫn và thận trọng.</p>
<p class="nar">Hãy đặc biệt chú ý đến tài chính chung trong các mối quan hệ — nếu bạn đang sống chung hay có kế hoạch tài chính với người khác, hãy đảm bảo mọi thứ được giao tiếp rõ ràng và công bằng. Năm số 2 có năng lượng hỗ trợ việc xây dựng quỹ dự phòng và lập kế hoạch tiết kiệm dài hạn hiệu quả.</p>`,

      giaoTiepXaHoi: `<p class="nar">Trong năm Vận số 2, <strong>${name}</strong> mang năng lượng mới nhạy cảm và đồng cảm vào các mối quan hệ xã hội. Đây là năm bạn trở thành người mà mọi người muốn tâm sự — vì bạn biết lắng nghe thật sự và phản hồi bằng sự hiểu biết thay vì chỉ đưa ra lời khuyên. Đây là năm tốt để xây dựng và củng cố những mối quan hệ có chiều sâu, thay vì mở rộng mạng lưới xã hội rộng rãi.</p>
<p class="nar">Những sự kiện giao lưu ồn ào hay đám đông lớn có thể làm bạn mệt mỏi hơn thường lệ trong năm này — hãy ưu tiên chất lượng gặp gỡ hơn số lượng. Một buổi chiều cà phê sâu sắc với một người bạn tri kỷ sẽ nạp năng lượng cho bạn nhiều hơn một buổi tiệc đông đúc.</p>`,

      hocTap: `<p class="nar">Học tập và nâng cấp kiến thức trong năm Vận số 2 thiên về chiều sâu hơn chiều rộng với <strong>${name}</strong>. Đây là năm tốt để học những kỹ năng đòi hỏi sự kiên nhẫn, tinh tế và chú tâm — như ngôn ngữ mới, thiền định, tâm lý học, hay những nghệ thuật đòi hỏi luyện tập bền bỉ. Bạn sẽ thấy mình tiếp thu tốt nhất khi học trong môi trường yên tĩnh và có người hướng dẫn cụ thể.</p>
<p class="nar">Hợp tác học tập cũng rất hiệu quả trong năm số 2 — study group, cặp học cùng nhau, hay tìm mentor đều mang lại kết quả vượt trội so với học một mình. Hãy tận dụng điều này để tiến bộ nhanh hơn trong những lĩnh vực bạn muốn phát triển.</p>`,

      honNhan: `<p class="nar">Hôn nhân là chuyện nghiêm túc nên xảy ra tự nhiên — trong năm Vận số 2, <strong>${name}</strong> có xu hướng tiếp cận hôn nhân với sự chín chắn và đánh giá thực tế hơn. Đây là năm tốt để xây dựng sự hiểu biết sâu sắc hơn với người bạn đời, tạo ra các thói quen và truyền thống chung, và giải quyết những vấn đề tích lũy từ trước bằng cách giao tiếp cởi mở.</p>
<p class="nar">Nếu đang cân nhắc kết hôn, năm Vận số 2 ủng hộ những quyết định xuất phát từ tình yêu thực sự và sự hiểu biết lẫn nhau sâu sắc. Những cuộc hôn nhân bền chặt thường được đặt nền móng bởi sự tôn trọng, tin tưởng và chấp nhận — những giá trị mà năng lượng số 2 nuôi dưỡng tốt nhất.</p>`,
    }),

    3: (name, year, age) => ({
      tinhYeu: `<p class="nar">Trong năm Vận số 3, tình yêu của <strong>${name}</strong> trở nên nhẹ nhàng, vui tươi và đầy sức sống. Đây là năm những cuộc tình mới nảy sinh từ những kết nối bất ngờ — trong các buổi giao lưu, qua sự sáng tạo chung, hay đơn giản là qua một cuộc trò chuyện thú vị. Năng lượng số 3 làm cho bạn trở nên hấp dẫn tự nhiên — tiếng cười, sự duyên dáng và khả năng kể chuyện của bạn là những nam châm thu hút mạnh mẽ.</p>
<p class="nar">Tuy nhiên, năng lượng số 3 cũng có thể khiến bạn phân tâm hoặc không đủ kiên nhẫn để xây dựng chiều sâu trong một mối quan hệ dài hạn. Bạn cần chú ý không để sự vui vẻ bề mặt che khuất những cuộc trò chuyện thực sự quan trọng. Nếu đang trong một mối quan hệ, hãy dùng năng lượng sáng tạo của năm này để đưa sự mới mẻ và thú vị vào cuộc sống chung — không phải để chạy trốn khỏi độ sâu.</p>`,

      suNghiep: `<p class="nar">Sự nghiệp của <strong>${name}</strong> trong năm Vận số 3 thăng hoa theo hướng sáng tạo và biểu đạt. Những vai trò đòi hỏi giao tiếp, trình bày, dạy học, marketing, viết lách hay bất kỳ hình thức biểu đạt nào đều có điều kiện phát triển vượt bậc trong năm này. Đây cũng là năm tốt để xây dựng thương hiệu cá nhân — hãy chia sẻ quan điểm, kiến thức và sự sáng tạo của bạn ra thế giới nhiều hơn.</p>
<p class="nar">Nếu bạn đang làm việc trong lĩnh vực đòi hỏi sự lặp lại và quy trình cứng nhắc, năm này có thể khiến bạn cảm thấy ngột ngạt. Hãy tìm cách đưa sự sáng tạo vào công việc hiện tại — dù nhỏ nhoi — để duy trì cảm hứng và hiệu suất. Năng lượng số 3 hoạt động tốt nhất khi có không gian để linh hoạt và thử nghiệm.</p>`,

      taiChinh: `<p class="nar">Tài chính trong năm Vận số 3 cần được <strong>${name}</strong> quản lý cẩn thận, vì đây là thời điểm dễ chi tiêu theo cảm xúc và sống cho hiện tại hơn tương lai. Bạn sẽ có xu hướng chi cho những trải nghiệm — du lịch, ẩm thực, nghệ thuật, giải trí — và điều đó không sai, nhưng hãy đảm bảo không vượt ngân sách. Đặt ra giới hạn chi tiêu cho "niềm vui" và tuân thủ nó.</p>
<p class="nar">Mặt khác, năng lượng số 3 cũng mang đến những cơ hội thu nhập từ sự sáng tạo hoặc tài năng biểu đạt của bạn. Nếu bạn có một kỹ năng sáng tạo, đây có thể là năm bạn biến nó thành nguồn thu nhập phụ. Hãy cân bằng giữa việc tận hưởng và tiết kiệm để không bắt đầu năm tiếp theo với gánh nặng tài chính không cần thiết.</p>`,

      giaoTiepXaHoi: `<p class="nar">Đây là khóa chìa của năm Vận số 3 với <strong>${name}</strong>: giao tiếp xã hội và mở rộng kết nối. Bạn sẽ gặp gỡ những người thú vị, tham gia những cuộc trò chuyện truyền cảm hứng và xây dựng mạng lưới quan hệ rộng hơn bao giờ hết. Đây là năm tốt nhất để tham gia các cộng đồng, nhóm sáng tạo, hay bất kỳ không gian nào tập hợp những người cùng chí hướng.</p>
<p class="nar">Sự duyên dáng tự nhiên và khả năng làm cho người khác cảm thấy thoải mái của bạn đạt đỉnh trong năm này. Hãy tận dụng điều đó để xây dựng những mối liên kết không chỉ ngắn hạn mà có thể trở thành những mối quan hệ đáng giá lâu dài. Tuy nhiên, hãy tránh phân tán quá mỏng — có quá nhiều kết nối bề mặt cũng không tốt bằng một số ít mối quan hệ thực sự sâu sắc.</p>`,

      hocTap: `<p class="nar">Năm Vận số 3 là một trong những năm học tập tốt nhất cho <strong>${name}</strong> — đặc biệt trong các lĩnh vực liên quan đến sáng tạo, nghệ thuật, ngôn ngữ, giao tiếp và biểu đạt. Bạn sẽ tiếp thu kiến thức nhanh hơn thường lệ và cảm thấy hứng khởi với những chủ đề mới. Đây là năm tốt để thử học những thứ mà trước đây bạn nghĩ mình không giỏi — vì năng lượng số 3 mở ra sự tự tin và sẵn lòng thử nghiệm.</p>
<p class="nar">Môi trường học tập tốt nhất trong năm này là những nơi được phép tương tác, thảo luận và thể hiện ý kiến cá nhân. Học thuộc vẹt hay học theo khuôn mẫu cứng nhắc sẽ không hiệu quả trong năm Vận số 3 — hãy tìm kiếm những phương pháp học sáng tạo và năng động hơn để phát huy tối đa tiềm năng của mình.</p>`,

      honNhan: `<p class="nar">Trong năm Vận số 3, hôn nhân của <strong>${name}</strong> cần được nuôi dưỡng bằng sự vui tươi, hài hước và những trải nghiệm chung mới mẻ. Đây là năm tốt để đưa sự sáng tạo vào cuộc sống gia đình — lên kế hoạch những chuyến đi, những buổi tối đặc biệt, hay đơn giản là cùng nhau thử những điều mới. Năng lượng số 3 nuôi dưỡng tình yêu qua sự kết nối nhẹ nhàng và niềm vui chia sẻ.</p>
<p class="nar">Tuy nhiên, hãy chú ý không để sự vui vẻ bên ngoài che khuất những vấn đề thực sự cần được giải quyết trong hôn nhân. Nếu có những mâu thuẫn tích lũy từ trước, năm số 3 không phải lúc để chạy trốn bằng sự bận rộn hay ồn ào — mà là lúc để giao tiếp cởi mở và sáng tạo trong cách tiếp cận vấn đề.</p>`,
    }),

    4: (name, year, age) => ({
      tinhYeu: `<p class="nar">Trong năm Vận số 4, tình yêu của <strong>${name}</strong> cần nền tảng vững chắc và sự cam kết thực sự. Đây không phải năm của những cuộc tình lãng mạn bốc đồng — mà là năm xây dựng sự tin tưởng, thiết lập các thói quen chung và tạo ra nền tảng vật chất cũng như tinh thần cho một mối quan hệ bền lâu. Nếu bạn đang trong một mối quan hệ, đây là thời điểm để cả hai cùng ngồi xuống và bàn về tương lai một cách cụ thể.</p>
<p class="nar">Tuy nhiên, ảnh hưởng của Vận số 4 có thể khiến bạn quá tập trung vào công việc và xây dựng vật chất đến mức bỏ bê tình cảm. Hãy đảm bảo dành thời gian chất lượng cho người bạn đời — không chỉ chia sẻ kế hoạch hay to-do list, mà là hiện diện thực sự với nhau trong những khoảnh khắc đơn giản của cuộc sống hàng ngày.</p>`,

      suNghiep: `<p class="nar">Sự nghiệp của <strong>${name}</strong> trong năm Vận số 4 là thời kỳ xây dựng nền tảng vững chắc — kiên nhẫn, có kỷ luật và đặt mục tiêu dài hạn. Đây là năm để hoàn thiện kỹ năng, tạo ra hệ thống làm việc hiệu quả và xây dựng uy tín chuyên môn thông qua từng hành động nhất quán. Những dự án dài hơi được bắt đầu hoặc tiếp tục trong năm số 4 có nền tảng vững chắc nhất.</p>
<p class="nar">Dù không phải năm của những bước nhảy vọt kịch tính, nhưng những gì bạn xây dựng trong năm Vận số 4 sẽ là nền tảng cho sự phát triển mạnh mẽ hơn ở những năm tiếp theo. Hãy kiên nhẫn với quá trình, tránh bỏ cuộc giữa chừng khi thấy kết quả chưa được như kỳ vọng — sự bền bỉ chính là chìa khóa vàng của năm này.</p>`,

      taiChinh: `<p class="nar">Đây là năm tài chính thuận lợi nhất cho việc lập kế hoạch và tiết kiệm của <strong>${name}</strong>. Vận số 4 mang đến kỷ luật tài chính tự nhiên — bạn sẽ dễ dàng hơn trong việc theo dõi chi tiêu, lập ngân sách và từ chối những cám dỗ tài chính không cần thiết. Đây là thời điểm tốt để lập quỹ khẩn cấp, trả nợ có kế hoạch, hay bắt đầu một hình thức tiết kiệm dài hạn.</p>
<p class="nar">Tránh các khoản đầu tư mang tính đầu cơ hay rủi ro cao trong năm này — năng lượng số 4 ủng hộ sự ổn định và bảo toàn vốn hơn là tăng trưởng nhanh. Bất động sản, tiết kiệm an toàn hay các khoản đầu tư dài hạn có thể là lựa chọn phù hợp hơn so với cổ phiếu ngắn hạn hay các cơ hội kinh doanh chưa được kiểm chứng.</p>`,

      giaoTiepXaHoi: `<p class="nar">Trong năm Vận số 4, <strong>${name}</strong> có xu hướng thu hẹp vòng xã hội và tập trung vào những mối quan hệ có giá trị thực sự. Đây không phải dấu hiệu tiêu cực — mà là sự thay đổi ưu tiên có chủ đích. Bạn sẽ ít muốn tham gia những buổi giao lưu ồn ào và thích hơn những cuộc trò chuyện có chiều sâu với số ít người tin cậy.</p>
<p class="nar">Đây là năm tốt để củng cố các mối quan hệ lâu dài quan trọng — bạn bè thân thiết, gia đình và những người cộng sự mà bạn thực sự coi trọng. Đầu tư thời gian và tâm huyết vào những mối quan hệ này sẽ mang lại sự ổn định tinh thần và mạng lưới hỗ trợ vững chắc hơn trong những năm tới.</p>`,

      hocTap: `<p class="nar">Học tập trong năm Vận số 4 phù hợp nhất cho những chương trình dài hạn và đòi hỏi sự kiên nhẫn với <strong>${name}</strong>. Đây là năm bạn có thể học những kỹ năng phức tạp và kỹ thuật mà thường đòi hỏi nhiều tháng luyện tập. Năng lượng số 4 giúp bạn duy trì kỷ luật học tập đều đặn và không bỏ cuộc khi gặp khó khăn.</p>
<p class="nar">Lập kế hoạch học tập cụ thể với lịch trình rõ ràng sẽ rất hiệu quả trong năm này. Học từng bước nhỏ mỗi ngày và theo dõi tiến trình sẽ giúp bạn tiến bộ hơn là học dồn hay học theo cảm hứng. Những kiến thức và kỹ năng học trong năm Vận số 4 thường trở thành nền tảng chuyên môn vững chắc nhất của bạn.</p>`,

      honNhan: `<p class="nar">Năm Vận số 4 là một trong những năm tốt nhất để <strong>${name}</strong> đặt nền tảng cho hôn nhân bền vững. Năng lượng số 4 ủng hộ sự cam kết, trách nhiệm và xây dựng cuộc sống chung một cách thực tế và bền chắc. Đây là thời điểm lý tưởng để lập kế hoạch gia đình dài hạn — về tài chính, nơi ở, con cái và những mục tiêu cuộc sống chung.</p>
<p class="nar">Trong hôn nhân đang có, năm số 4 là cơ hội để giải quyết những vấn đề thực tế đang tồn đọng, thiết lập các thói quen gia đình lành mạnh và xây dựng sự tin tưởng ở tầng sâu hơn thông qua những hành động nhất quán mỗi ngày. Hãy nhớ: hôn nhân bền chặt không được xây bằng những khoảnh khắc hào nhoáng — mà bằng những cam kết nhỏ được thực hiện đều đặn.</p>`,
    }),

    5: (name, year, age) => ({
      tinhYeu: `<p class="nar">Trong năm Vận số 5, tình yêu của <strong>${name}</strong> đầy biến động và những bất ngờ thú vị. Đây có thể là năm những mối tình nảy sinh từ những hoàn cảnh không ai tiên liệu — trong chuyến đi, tại một sự kiện bất ngờ, hay qua một người quen giới thiệu. Năng lượng số 5 mang đến sức hút mạnh mẽ và tự do trong tình yêu — bạn không muốn bị ràng buộc bởi những kỳ vọng cứng nhắc.</p>
<p class="nar">Tuy nhiên, đây cũng là năm dễ mắc phải những quyết định tình cảm bốc đồng hoặc rời bỏ những mối quan hệ tốt đẹp chỉ vì cảm giác "thiếu hứng khởi". Hãy phân biệt giữa nhu cầu thực sự và sự chán chường nhất thời. Nếu đang trong một mối quan hệ bền vững, hãy đưa sự mới mẻ và phiêu lưu vào cuộc sống chung thay vì tìm kiếm điều đó bên ngoài.</p>`,

      suNghiep: `<p class="nar">Sự nghiệp của <strong>${name}</strong> trong năm Vận số 5 sẽ có những bước ngoặt bất ngờ và cơ hội mới xuất hiện từ những hướng không ngờ tới. Đây là năm bạn nên giữ sự linh hoạt và mở trong kế hoạch nghề nghiệp — cơ hội tốt nhất thường đến khi bạn ít mong đợi nhất. Những thay đổi công việc, chuyển ngành hay nhận một dự án hoàn toàn mới đều có thể xảy ra trong năm này.</p>
<p class="nar">Hãy tin vào khả năng thích nghi của mình và không để nỗi sợ thay đổi cản bước. Đồng thời, hãy thực tế: đừng nhảy từ cơ hội này sang cơ hội khác quá nhanh mà không đánh giá kỹ. Năm Vận số 5 ủng hộ sự thay đổi có chủ đích — không phải sự bất ổn không có mục đích. Những ai giữ được sự linh hoạt mà không mất đi phương hướng sẽ tận dụng tối đa năng lượng của năm này.</p>`,

      taiChinh: `<p class="nar">Tài chính trong năm Vận số 5 cần được <strong>${name}</strong> quản lý cẩn thận, vì đây là thời điểm dễ chi tiêu không có kế hoạch nhất. Những chuyến đi, những trải nghiệm mới và những cơ hội bất ngờ đều kéo theo chi phí không dự tính. Hãy lập quỹ "linh hoạt" để sẵn sàng cho những khoản chi ngoài kế hoạch mà không làm mất ổn định tài chính tổng thể.</p>
<p class="nar">Có thể xuất hiện những cơ hội tài chính bất ngờ trong năm này — hãy đánh giá chúng cẩn thận trước khi quyết định. Năng lượng số 5 mang đến may mắn bất ngờ nhưng cũng mang đến rủi ro không lường trước. Đầu tư vào những cơ hội ngắn hạn và linh hoạt phù hợp hơn so với các cam kết tài chính dài hạn trong năm Vận số 5.</p>`,

      giaoTiepXaHoi: `<p class="nar">Đây là một trong những năm sôi động nhất về mặt xã hội của <strong>${name}</strong>. Với năng lượng Vận số 5, bạn sẽ gặp gỡ nhiều người từ những nền văn hóa, lĩnh vực và quan điểm khác nhau — mỗi cuộc gặp gỡ đều là một cơ hội học hỏi và mở rộng tầm nhìn. Đây là năm tốt để tham gia các sự kiện quốc tế, cộng đồng đa dạng hay những không gian bạn chưa từng đặt chân vào.</p>
<p class="nar">Mạng lưới quan hệ của bạn sẽ được mở rộng đáng kể trong năm này, nhưng hãy chú ý giữ lại những kết nối thực sự có giá trị thay vì chỉ tích lũy số lượng. Năng lượng số 5 dễ tạo ra nhiều quen biết bề mặt — hãy chủ động đào sâu vào những mối quan hệ có tiềm năng trở thành tình bạn hoặc liên minh thực sự.</p>`,

      hocTap: `<p class="nar">Học tập trong năm Vận số 5 thiên về trải nghiệm thực tế hơn lý thuyết sách vở với <strong>${name}</strong>. Đây là năm tuyệt vời để học qua du lịch, tìm hiểu văn hóa mới, thực tập ở môi trường khác, hay tham gia các chương trình đào tạo ngắn hạn có tính ứng dụng cao. Bạn sẽ tiếp thu nhanh nhất khi được làm thực tế và tương tác với thế giới thực.</p>
<p class="nar">Những khóa học trực tuyến ngắn, workshop thực hành hay chương trình mentoring 1-1 sẽ hiệu quả hơn các khóa học dài hạn theo khuôn mẫu cứng nhắc trong năm này. Hãy để sự tò mò tự nhiên dẫn dắt quá trình học của bạn — đừng ép mình học những thứ không thực sự hứng thú, vì năng lượng số 5 cần động lực nội tại mới phát huy tối đa.</p>`,

      honNhan: `<p class="nar">Hôn nhân trong năm Vận số 5 cần sự khéo léo để duy trì cân bằng giữa tự do cá nhân và cam kết với <strong>${name}</strong>. Năng lượng số 5 mang đến khát vọng tự do và không gian cá nhân mạnh mẽ — điều này có thể tạo ra căng thẳng trong các mối quan hệ đòi hỏi sự gắn kết chặt chẽ. Hãy giao tiếp thẳng thắn với người bạn đời về nhu cầu không gian cá nhân của mình thay vì rút lui im lặng.</p>
<p class="nar">Ngược lại, nếu cả hai cùng đón nhận năng lượng phiêu lưu của năm số 5, hôn nhân có thể trở nên sống động và thú vị hơn bao giờ hết. Hãy lên kế hoạch những chuyến đi cùng nhau, thử những trải nghiệm mới và tạo ra những kỷ niệm đặc biệt — điều đó nuôi dưỡng tình yêu theo cách mà không năm nào khác có thể làm được như năm số 5.</p>`,
    }),

    6: (name, year, age) => ({
      tinhYeu: `<p class="nar">Trong năm Vận số 6, tình yêu của <strong>${name}</strong> sâu sắc, ấm áp và hướng về sự cam kết bền vững. Đây là năm của những mối tình nghiêm túc — nơi hai người thực sự đầu tư vào nhau, xây dựng sự tin tưởng và tạo ra không gian yêu thương an toàn. Nếu bạn đang tìm kiếm tình yêu, những người xuất hiện trong năm số 6 thường có giá trị bền lâu và chân thực hơn những gặp gỡ thoáng qua.</p>
<p class="nar">Tuy nhiên, năng lượng số 6 có thể khiến bạn đặt tiêu chuẩn quá cao và thất vọng khi đối phương không hoàn hảo như kỳ vọng. Hãy yêu thương từ góc nhìn chấp nhận thực tế — người bạn đời không cần phải hoàn hảo, họ chỉ cần thực sự phù hợp với bạn và cùng nhau trưởng thành. Sự tha thứ và chấp nhận là những phẩm chất cần rèn trong năm Vận số 6.</p>`,

      suNghiep: `<p class="nar">Sự nghiệp của <strong>${name}</strong> trong năm Vận số 6 thăng hoa trong những lĩnh vực liên quan đến phục vụ, chăm sóc và đóng góp cho cộng đồng. Nếu bạn làm việc trong y tế, giáo dục, tư vấn, dịch vụ khách hàng hay bất kỳ ngành nào liên quan đến giúp đỡ người khác — đây là năm bạn sẽ tỏa sáng rực rỡ nhất. Khả năng cảm nhận nhu cầu của người khác và đáp ứng đúng lúc là thế mạnh đặc biệt trong năm này.</p>
<p class="nar">Đây cũng là năm tốt để nhận các vai trò lãnh đạo mang tính mentoring — huấn luyện, dẫn dắt hay phát triển đội nhóm. Tuy nhiên, hãy chú ý không để tinh thần "phục vụ" biến thành gánh nặng quá tải — học cách ủy quyền và nói không khi cần thiết để duy trì hiệu suất bền vững trong suốt năm.</p>`,

      taiChinh: `<p class="nar">Tài chính trong năm Vận số 6 có xu hướng ổn định và dần được cải thiện — nhưng <strong>${name}</strong> cần chú ý đến chi tiêu cho gia đình và người thân. Bạn sẽ có nhiều hơn nhu cầu chi cho những điều liên quan đến tổ ấm — trang trí, nội thất, sửa chữa nhà cửa, hay chi tiêu cho sức khỏe và hạnh phúc của gia đình. Đây là những khoản chi có giá trị và xứng đáng, nhưng hãy có kế hoạch rõ ràng.</p>
<p class="nar">Năm Vận số 6 cũng là thời điểm tốt để đánh giá lại các khoản bảo hiểm, quỹ dự phòng và những hệ thống tài chính liên quan đến an toàn gia đình. Đầu tư vào sức khỏe, giáo dục và những thứ tạo ra chất lượng cuộc sống thực sự sẽ mang lại lợi nhuận lớn hơn trong dài hạn so với những khoản đầu tư tài chính thuần túy.</p>`,

      giaoTiepXaHoi: `<p class="nar">Năm Vận số 6 là năm <strong>${name}</strong> trở thành trung tâm kết nối và hỗ trợ trong mạng lưới xã hội của mình. Bạn sẽ tự nhiên đảm nhận vai trò người tổ chức, người hòa giải hay người giữ cho nhóm gắn kết. Những người xung quanh tìm đến bạn để nhờ lời khuyên, sự hỗ trợ hay đơn giản là sự hiện diện ấm áp của bạn.</p>
<p class="nar">Đây là năm tốt để đầu tư vào các mối quan hệ gia đình và bạn bè thân thiết — đặc biệt là những mối quan hệ có thể đã bị bỏ bê do bận rộn. Một cuộc gặp gỡ, một cú điện thoại hay một bữa ăn gia đình có thể tạo ra những kết nối sâu sắc và bền vững hơn bất kỳ sự kiện networking nào khác trong năm Vận số 6.</p>`,

      hocTap: `<p class="nar">Học tập trong năm Vận số 6 hiệu quả nhất khi có mục đích phục vụ người khác với <strong>${name}</strong>. Những khóa học liên quan đến phát triển kỹ năng mềm, tâm lý học, tư vấn, chăm sóc sức khỏe hay giảng dạy đều phát huy tốt trong năm này. Bạn sẽ học nhanh nhất khi thấy rõ cách kiến thức đó có thể giúp ích cho người xung quanh.</p>
<p class="nar">Đây cũng là năm tốt để học những kỹ năng liên quan đến quản lý gia đình, tài chính cá nhân hay chăm sóc sức khỏe — những kiến thức thực tế và ứng dụng được immediately. Học theo nhóm nhỏ hoặc có người cùng học sẽ tạo động lực tốt hơn cho bạn, vì năng lượng số 6 thức dậy mạnh nhất trong môi trường kết nối và hỗ trợ lẫn nhau.</p>`,

      honNhan: `<p class="nar">Đây là một trong những năm tốt nhất cho hôn nhân của <strong>${name}</strong>. Năng lượng Vận số 6 nuôi dưỡng sự gắn kết gia đình, tình yêu thương vô điều kiện và cam kết lâu dài. Nếu bạn đang cân nhắc kết hôn, đây là thời điểm thuận lợi nhất — những cuộc hôn nhân bắt đầu trong năm số 6 thường có nền tảng ổn định và lâu bền.</p>
<p class="nar">Trong hôn nhân đang có, đây là năm để đầu tư sâu hơn vào chất lượng cuộc sống gia đình — tạo ra môi trường ấm áp, an toàn và đầy yêu thương cho tất cả thành viên. Hãy lên kế hoạch những hoạt động gia đình, tạo ra các truyền thống chung và dành thời gian chất lượng với người bạn đời. Hôn nhân bền vững không tự nhiên mà có — nó là kết quả của sự đầu tư có ý thức mỗi ngày.</p>`,
    }),

    7: (name, year, age) => ({
      tinhYeu: `<p class="nar">Trong năm Vận số 7, tình yêu của <strong>${name}</strong> chuyển vào chiều sâu nội tâm. Đây không phải năm của những cuộc tình sôi nổi và kịch tính — mà là năm bạn cần không gian để hiểu bản thân sâu hơn trước khi có thể thực sự kết nối với người khác. Nếu bạn đang độc thân, năm số 7 có thể mang đến những cuộc gặp gỡ ít hơn về số lượng nhưng sâu sắc hơn về chất lượng.</p>
<p class="nar">Trong các mối quan hệ đang có, năm Vận số 7 là cơ hội để đi đến chiều sâu thực sự trong tình yêu — những cuộc trò chuyện về triết học sống, về ý nghĩa cuộc đời, về những điều bạn thực sự muốn. Nếu người bạn đời không sẵn sàng hoặc không thể đáp lại ở tầng sâu đó, những khoảng cách có thể trở nên rõ ràng hơn trong năm này. Hãy sử dụng điều đó như thông tin thay vì nguồn gây đau khổ.</p>`,

      suNghiep: `<p class="nar">Sự nghiệp của <strong>${name}</strong> trong năm Vận số 7 thăng hoa qua con đường của sự tích lũy kiến thức và chuyên môn hóa. Đây là năm tốt nhất để nghiên cứu sâu, hoàn thiện kỹ năng đặc thù và trở thành chuyên gia thực sự trong lĩnh vực của mình. Những người tìm đến bạn sẽ tìm kiếm sự sâu sắc và hiểu biết — không phải sự hào nhoáng bề mặt.</p>
<p class="nar">Đây không phải năm để mở rộng ồ ạt hay ra mắt nhiều sản phẩm mới — mà là năm để hoàn thiện những gì đang có. Đầu tư vào việc nghiên cứu xu hướng ngành, học hỏi từ những chuyên gia giỏi nhất và xây dựng nền tảng kiến thức vững chắc sẽ tạo ra lợi thế cạnh tranh dài hạn mà bạn sẽ cảm ơn mình trong những năm tới.</p>`,

      taiChinh: `<p class="nar">Tài chính trong năm Vận số 7 không phải là ưu tiên hàng đầu của <strong>${name}</strong> — nhưng cần được quản lý thận trọng. Đây không phải năm của những bước tăng trưởng đột biến, mà là năm hiểu rõ hơn mối quan hệ của bạn với tiền bạc và giá trị thực sự. Hãy xem xét lại những khoản chi không cần thiết và tập trung vào những thứ thực sự có ý nghĩa.</p>
<p class="nar">Đầu tư vào giáo dục, sách vở hay các khóa học chuyên sâu là những khoản chi xứng đáng nhất trong năm số 7. Tránh những quyết định tài chính lớn và vội vàng — hãy tập trung vào việc tiết kiệm ổn định và bảo toàn những gì đang có. Năng lượng số 7 thường mang đến những hiểu biết sâu sắc về giá trị thực sự của tiền bạc — không phải là mục tiêu cuối cùng mà là phương tiện để tự do.</p>`,

      giaoTiepXaHoi: `<p class="nar">Trong năm Vận số 7, <strong>${name}</strong> sẽ tự nhiên rút lui khỏi những hoạt động xã hội ồn ào và tìm kiếm những không gian yên lặng hơn, những cuộc trò chuyện sâu sắc hơn. Đây không phải dấu hiệu tiêu cực — mà là nhu cầu tự nhiên của một năm tập trung vào nội tâm. Hãy cho phép bản thân có không gian để suy ngẫm mà không cảm thấy tội lỗi vì "không đủ xã hội".</p>
<p class="nar">Những người bạn đồng hành lý tưởng trong năm số 7 là những ai có thể ngồi cùng bạn trong im lặng có chiều sâu, không cần phải lấp đầy mọi khoảng trống bằng tiếng ồn. Tìm kiếm những cộng đồng có cùng chiều sâu tâm linh hay trí tuệ — những không gian đó sẽ nuôi dưỡng bạn theo cách mà không buổi tiệc xã giao thông thường nào có thể làm được.</p>`,

      hocTap: `<p class="nar">Đây là năm học tập lý tưởng nhất cho <strong>${name}</strong>. Năng lượng Vận số 7 mang đến khả năng tập trung, nghiên cứu sâu và thấu hiểu các chủ đề phức tạp mà những năm khác không có. Bạn sẽ có khả năng đọc, phân tích và tích lũy kiến thức với tốc độ và chiều sâu đáng kinh ngạc — hãy tận dụng tối đa điều này.</p>
<p class="nar">Đây là thời điểm lý tưởng để học những lĩnh vực đòi hỏi sự chiêm nghiệm và phân tích: triết học, khoa học, tâm lý học, tâm linh, lập trình hay bất kỳ chuyên ngành nào đòi hỏi tư duy hệ thống và sự chính xác. Học một mình hoặc với một người mentor trực tiếp sẽ hiệu quả hơn là học nhóm đông người trong năm số 7.</p>`,

      honNhan: `<p class="nar">Hôn nhân trong năm Vận số 7 của <strong>${name}</strong> cần nhiều không gian cá nhân hơn thường lệ. Bạn sẽ có nhu cầu mạnh mẽ hơn về thời gian một mình — để đọc sách, suy ngẫm, hay đơn giản là yên tĩnh. Người bạn đời cần hiểu rằng sự rút lui này không phải dấu hiệu của vấn đề trong mối quan hệ, mà là nhu cầu tâm linh thực sự.</p>
<p class="nar">Ngược lại, đây cũng là năm những cuộc trò chuyện sâu sắc về ý nghĩa cuộc đời, về những giá trị cốt lõi và về chiều hướng tương lai có thể làm sâu sắc thêm mối quan hệ hôn nhân đáng kể. Hôn nhân được nuôi dưỡng bằng sự hiểu biết lẫn nhau ở tầng sâu nhất trong năm số 7 sẽ có nền tảng tinh thần vững chắc hơn bao giờ hết.</p>`,
    }),

    8: (name, year, age) => ({
      tinhYeu: `<p class="nar">Trong năm Vận số 8, tình yêu của <strong>${name}</strong> được định hình bởi sự tự tin và quyền lực cá nhân. Đây là năm bạn không còn chấp nhận những mối quan hệ không xứng đáng với giá trị của mình — bạn biết mình muốn gì và sẵn sàng chờ đợi điều đó. Sức hút của bạn trong năm này đến từ sự tự chủ và thành công — những phẩm chất thu hút đúng kiểu người vào cuộc sống của bạn.</p>
<p class="nar">Tuy nhiên, áp lực từ sự nghiệp và tài chính trong năm số 8 có thể chiếm phần lớn năng lượng của bạn, để lại ít không gian hơn cho tình yêu. Hãy nhớ: thành công vật chất không thể thay thế sự kết nối cảm xúc chân thực. Đặt ưu tiên có chủ đích cho mối quan hệ quan trọng — và khi bạn hiện diện với người bạn yêu, hãy thực sự hiện diện, không phải vừa ở đó vừa nghĩ về công việc.</p>`,

      suNghiep: `<p class="nar">Sự nghiệp của <strong>${name}</strong> trong năm Vận số 8 bước vào giai đoạn thu hoạch mạnh mẽ nhất. Đây là năm của sự thăng tiến, mở rộng và khẳng định vị thế. Những nỗ lực và đầu tư từ các năm trước bắt đầu sinh quả rõ rệt — đừng ngần ngại yêu cầu mức lương xứng đáng, đàm phán những hợp đồng có lợi và đặt ra những mục tiêu tham vọng hơn.</p>
<p class="nar">Đây cũng là năm tốt để mở rộng phạm vi ảnh hưởng — nhận các vai trò lãnh đạo, quản lý đội nhóm hay xây dựng thương hiệu ở tầm cao hơn. Tuy nhiên, hãy chú ý không để quyền lực làm thay đổi giá trị cốt lõi của bạn. Sự thành công thực sự trong năm Vận số 8 không chỉ đo bằng thu nhập hay địa vị — mà bằng cả tầm ảnh hưởng tích cực mà bạn tạo ra.</p>`,

      taiChinh: `<p class="nar">Đây là năm tài chính đặc biệt thuận lợi cho <strong>${name}</strong>. Năng lượng Vận số 8 mang đến những cơ hội tăng thu nhập, đầu tư thông minh và xây dựng tài sản. Đây là thời điểm hành động táo bạo hơn về tài chính — đàm phán lương, tìm kiếm cơ hội đầu tư có nghiên cứu kỹ lưỡng, hay mở rộng nguồn thu nhập.</p>
<p class="nar">Tuy nhiên, hãy tránh sự kiêu ngạo tài chính — cảm giác "mình không thể thất bại trong năm này" có thể dẫn đến những rủi ro không cần thiết. Vận số 8 trao quyền lực nhưng cũng đòi hỏi trách nhiệm. Kết hợp sự táo bạo với kỷ luật tài chính sẽ giúp bạn tối đa hóa lợi ích của năm này mà không tạo ra hậu quả ở năm tiếp theo.</p>`,

      giaoTiepXaHoi: `<p class="nar">Trong năm Vận số 8, mạng lưới xã hội của <strong>${name}</strong> mang ý nghĩa chiến lược quan trọng. Những kết nối bạn tạo ra trong năm này thường liên quan đến cơ hội kinh doanh, thăng tiến nghề nghiệp hay hợp tác dài hạn. Đây là năm để chủ động xây dựng quan hệ với những người có ảnh hưởng trong lĩnh vực của bạn.</p>
<p class="nar">Đồng thời, vị thế và sự thành công của bạn trong năm số 8 tự nhiên thu hút nhiều người hơn — hãy thận trọng phân biệt những ai thực sự quan tâm đến bạn với những ai chỉ muốn tận dụng vị trí của bạn. Hãy giữ những mối quan hệ bạn bè thân thiết lâu dài như neo đậu — họ biết bạn từ trước khi bạn thành công và sẽ ở lại sau khi ánh hào quang qua đi.</p>`,

      hocTap: `<p class="nar">Học tập trong năm Vận số 8 hiệu quả nhất khi gắn liền với mục tiêu nghề nghiệp rõ ràng của <strong>${name}</strong>. Đây là năm đầu tư vào những kỹ năng có thể mang lại lợi nhuận kinh tế hoặc nâng cao vị thế chuyên môn của bạn một cách cụ thể. Lãnh đạo, quản lý tài chính, kinh doanh, đầu tư hay bất kỳ lĩnh vực nào liên quan đến việc tạo ra giá trị và ảnh hưởng đều là những lựa chọn học tập tốt trong năm này.</p>
<p class="nar">Hãy học từ những người đã thực sự thành công trong lĩnh vực bạn muốn phát triển — mentor, coach hay chương trình đào tạo cao cấp sẽ mang lại ROI tốt nhất trong năm Vận số 8. Đừng ngại đầu tư khoản tiền đáng kể cho giáo dục chất lượng cao trong năm này — đó là một trong những khoản đầu tư tốt nhất bạn có thể thực hiện.</p>`,

      honNhan: `<p class="nar">Hôn nhân trong năm Vận số 8 đứng trước thách thức của sự cân bằng giữa sự nghiệp và gia đình đối với <strong>${name}</strong>. Năng lượng số 8 thúc đẩy mạnh mẽ hướng đến thành công vật chất và quyền lực — nhưng nếu không cẩn thận, người bạn đời và cuộc sống gia đình có thể bị đặt xuống hàng ưu tiên thứ hai. Hãy chủ động và có ý thức về sự cân bằng này.</p>
<p class="nar">Ngược lại, nếu cả hai vợ chồng cùng chia sẻ tham vọng và hỗ trợ nhau trên con đường thành công, năm Vận số 8 có thể là năm cả hai cùng đạt được những đột phá quan trọng. Hãy biến sự thành công cá nhân thành điều mà cả gia đình cùng tự hào và tận hưởng — không phải nguồn gây căng thẳng hay sự xa cách.</p>`,
    }),

    9: (name, year, age) => ({
      tinhYeu: `<p class="nar">Trong năm Vận số 9, tình yêu của <strong>${name}</strong> bước vào giai đoạn của sự hoàn thành và buông bỏ. Đây là năm của những kết thúc cần thiết và những sự tha thứ sâu sắc — nếu có những mối quan hệ đã hết vai trò hay những vết thương tình cảm chưa được chữa lành, năm số 9 mang đến sức mạnh và sự rõ ràng để xử lý chúng một cách có phẩm giá.</p>
<p class="nar">Nếu đang trong một mối quan hệ lành mạnh và phát triển, đây là năm để cả hai nhìn lại hành trình đã đi qua cùng nhau, trân trọng những gì đã xây dựng và tạo ra không gian cho một giai đoạn mới đẹp hơn. Đừng vội bắt đầu những mối quan hệ mới nghiêm túc trong năm số 9 — hãy để bản thân hoàn thành chu kỳ này trước, rồi bước vào năm số 1 tiếp theo với trái tim trống rỗng và sẵn sàng cho điều mới.</p>`,

      suNghiep: `<p class="nar">Sự nghiệp của <strong>${name}</strong> trong năm Vận số 9 bước vào giai đoạn đóng lại một chương và chuẩn bị cho một chương mới. Đây là thời điểm để hoàn thành những dự án còn dang dở, giải quyết những công việc tồn đọng và tổng kết những gì đã đạt được trong chu kỳ 9 năm vừa qua. Đừng bắt đầu những dự án lớn mới trong năm này — hãy hoàn thiện những gì đang có.</p>
<p class="nar">Năm số 9 cũng mang đến câu hỏi sâu sắc: "Công việc này có còn phù hợp với giá trị của mình không?" Nếu câu trả lời là không, đây là năm để chuẩn bị cho sự chuyển đổi — không phải nhảy ngay lập tức, mà là lên kế hoạch và định hướng. Những thay đổi sự nghiệp được lên kế hoạch trong năm số 9 và thực hiện trong năm số 1 thường thành công nhất.</p>`,

      taiChinh: `<p class="nar">Tài chính trong năm Vận số 9 đòi hỏi <strong>${name}</strong> hành xử có trách nhiệm và hào phóng. Đây là năm của việc giải quyết những khoản nợ tồn đọng, hoàn thành những cam kết tài chính dang dở và làm sạch bức tranh tài chính của mình. Tránh tích lũy những khoản nợ mới hay cam kết tài chính lớn trong năm này.</p>
<p class="nar">Một nét đặc biệt của năm số 9 là năng lượng ủng hộ việc cho đi — từ thiện, giúp đỡ người cần hay đầu tư vào cộng đồng. Những gì bạn cho đi hào phóng trong năm này thường quay lại theo những dạng bất ngờ và lớn hơn ở năm tiếp theo. Đây là năm để mở rộng tâm lý về tiền bạc — không giữ quá chặt những gì không còn phục vụ bạn.</p>`,

      giaoTiepXaHoi: `<p class="nar">Trong năm Vận số 9, <strong>${name}</strong> được mời gọi để mở rộng tầm nhìn xã hội vượt ra ngoài vòng tròn cá nhân. Đây là năm phục vụ cộng đồng, đóng góp cho những điều lớn hơn bản thân và kết nối với những người mang tầm nhìn nhân văn rộng lớn hơn. Bạn sẽ cảm thấy được nuôi dưỡng bởi những kết nối mang ý nghĩa xã hội thực sự.</p>
<p class="nar">Đây cũng là năm để buông bỏ những mối quan hệ không còn phục vụ sự phát triển của cả hai bên — không nhất thiết phải đứt đoạn kịch tính, mà chỉ cần để chúng từ từ rút lui một cách tự nhiên và đầy ân sủng. Hãy trân trọng những mối quan hệ này vì những gì họ đã mang lại, và buông tay với lòng biết ơn thay vì với sự cay đắng.</p>`,

      hocTap: `<p class="nar">Học tập trong năm Vận số 9 hướng về sự tổng hợp và tích hợp kiến thức cho <strong>${name}</strong>. Đây không phải năm bắt đầu những chương trình học dài hạn mới — mà là năm để hoàn thiện, tổng kết và viết lại những gì bạn đã học được trong cả chu kỳ vừa qua. Đây là thời điểm tốt để viết ra kiến thức của mình — blog, sách, khóa học hay bất kỳ hình thức nào chia sẻ kinh nghiệm tích lũy được.</p>
<p class="nar">Những chủ đề học tập phù hợp nhất trong năm số 9 là những gì liên quan đến triết học, lịch sử, nhân văn hay bất kỳ lĩnh vực nào giúp bạn hiểu bức tranh lớn của sự tồn tại. Đây cũng là năm tốt để học hỏi từ những người lớn tuổi hơn và khôn ngoan hơn — những người đã đi qua những chu kỳ mà bạn đang chuẩn bị bước vào.</p>`,

      honNhan: `<p class="nar">Hôn nhân trong năm Vận số 9 là thời điểm để <strong>${name}</strong> và người bạn đời nhìn lại hành trình chung và chuẩn bị cho một giai đoạn mới. Đây là năm của sự tha thứ sâu sắc — không chỉ tha thứ cho người kia mà còn tha thứ cho chính mình về những sai lầm và thiếu sót trong suốt năm qua. Từ bi đối với bản thân là nền tảng của từ bi trong hôn nhân.</p>
<p class="nar">Nếu có những vấn đề tích lũy cần được giải quyết, hãy dũng cảm đối mặt với chúng trong năm số 9 thay vì mang sang chu kỳ mới. Hôn nhân được làm sạch và tái cam kết trong năm này sẽ bước vào năm số 1 tiếp theo với sức sống mới và nền tảng sâu sắc hơn. Đây là cơ hội tái khởi đầu — không phải kết thúc.</p>`,
    }),
  },


  // Builder function: tạo HTML block cho 1 năm với đầy đủ 6 domain + summary highlight
  buildYearDomainBlock(num, year, age, name) {
    const n = num || 1;
    const domainFn = NarrativeTemplates.personalYearDomains[n]
      || NarrativeTemplates.personalYearDomains[n % 9 || 9];
    if (!domainFn) return '';
    const d = domainFn(name, year, age);

    // ── Summary/tagline cho từng domain × vận số ──────────────────────────────
    const DOMAIN_SUMMARIES = {
      1: {
        tinhYeu: 'Độc lập trong tình yêu — cần không gian để phát triển',
        suNghiep: 'Thời điểm vàng để bắt đầu những điều chưa từng thử',
        taiChinh: 'Đầu tư vào chính mình — lợi nhuận sẽ theo sau',
        giaoTiepXaHoi: 'Gây ấn tượng bằng sự tự tin và năng lượng tiên phong',
        hocTap: 'Học những gì bạn thực sự muốn, theo cách riêng của bạn',
        honNhan: 'Xác định lại vai trò — để cả hai cùng được tự do phát triển',
      },
      2: {
        tinhYeu: 'Thời gian của sự lắng nghe và kết nối sâu sắc',
        suNghiep: 'Hợp tác đúng người — nhân bội sức mạnh lên gấp đôi',
        taiChinh: 'Kiên nhẫn chờ thời — tránh quyết định tài chính vội vàng',
        giaoTiepXaHoi: 'Xây cầu nối bền — mỗi mối quan hệ đều có giá trị tiềm ẩn',
        hocTap: 'Học tốt nhất khi có người đồng hành cùng tiến',
        honNhan: 'Hiểu sâu hơn để yêu đúng hơn và bền vững hơn',
      },
      3: {
        tinhYeu: 'Yêu vui vẻ, nhẹ nhàng và đầy sáng tạo',
        suNghiep: 'Để sáng tạo dẫn lối — ý tưởng là tài sản lớn nhất năm nay',
        taiChinh: 'Cơ hội đến từ những kết nối và dự án sáng tạo bất ngờ',
        giaoTiepXaHoi: 'Là ngọn đèn trong phòng — năng lượng bạn lan tỏa rất xa',
        hocTap: 'Học bằng trải nghiệm, niềm vui và sự khám phá',
        honNhan: 'Nuôi dưỡng tình yêu bằng sự vui tươi và những điều mới mẻ',
      },
      4: {
        tinhYeu: 'Xây nền tảng bền vững — tình yêu cần hành động, không chỉ lời nói',
        suNghiep: 'Làm tới đâu chắc chắn tới đó',
        taiChinh: 'Tiết kiệm và kỷ luật — nền tảng tài chính được đặt từ đây',
        giaoTiepXaHoi: 'Uy tín được xây bằng sự nhất quán trong từng lời nói và hành động',
        hocTap: 'Học sâu, học kỹ — chiều sâu chuyên môn tạo sự khác biệt thực sự',
        honNhan: 'Đặt nền móng vững chắc cho tương lai chung dài hạn',
      },
      5: {
        tinhYeu: 'Tình yêu cần không gian tự do để tỏa sáng đúng nghĩa',
        suNghiep: 'Cơ hội bất ngờ xuất hiện — hãy sẵn sàng nắm bắt ngay',
        taiChinh: 'Đa dạng hóa nguồn thu nhập — đừng đặt tất cả vào một giỏ',
        giaoTiepXaHoi: 'Kết nối rộng và đa dạng — thế giới là sân chơi của bạn',
        hocTap: 'Học qua trải nghiệm thực tế và va chạm đa chiều',
        honNhan: 'Thiết lập ranh giới lành mạnh giữa tự do cá nhân và cam kết',
      },
      6: {
        tinhYeu: 'Tình yêu chín muồi — cho đi và nhận lại trong cân bằng',
        suNghiep: 'Phục vụ và chăm sóc — đây là thế mạnh lớn nhất của bạn',
        taiChinh: 'Đầu tư vào tổ ấm và gia đình — xứng đáng từng đồng bỏ ra',
        giaoTiepXaHoi: 'Trở thành chỗ dựa — kết nối bền chặt được xây từ sự quan tâm',
        hocTap: 'Học để chia sẻ — kiến thức có ý nghĩa nhất khi phục vụ người khác',
        honNhan: 'Năm tốt nhất để cam kết hoặc tái cam kết lời hứa thiêng liêng',
      },
      7: {
        tinhYeu: 'Tình yêu cần chiều sâu — hơn là bề mặt hào nhoáng bên ngoài',
        suNghiep: 'Đào sâu chuyên môn — sự xuất sắc đến từ sự chuyên biệt thực sự',
        taiChinh: 'Hiểu rõ dòng tiền và rủi ro trước khi hành động bất kỳ điều gì',
        giaoTiepXaHoi: 'Chọn lọc kỹ lưỡng — chất lượng kết nối hơn số lượng quan hệ',
        hocTap: 'Năm của sự học hỏi thực sự sâu sắc — hãy tận dụng triệt để',
        honNhan: 'Dành không gian riêng cho nhau — một phần quan trọng của yêu thương',
      },
      8: {
        tinhYeu: 'Cân bằng giữa tham vọng cá nhân và chất lượng mối quan hệ',
        suNghiep: 'Thu hoạch thành quả — đây là thời điểm bứt phá mạnh mẽ nhất',
        taiChinh: 'Năm của sự thịnh vượng nếu hành động đúng và quyết đoán',
        giaoTiepXaHoi: 'Mở rộng mạng lưới ảnh hưởng — địa vị được người khác công nhận',
        hocTap: 'Học để tạo ra kết quả thực tế và ứng dụng trực tiếp vào sự nghiệp',
        honNhan: 'Đừng để tham vọng công việc che khuất người bạn yêu',
      },
      9: {
        tinhYeu: 'Tha thứ và buông bỏ — tình yêu cần không gian mới để hồi sinh',
        suNghiep: 'Hoàn thành những gì còn dang dở — để sẵn sàng cho một khởi đầu mới',
        taiChinh: 'Cho đi để nhận lại — quy luật tuần hoàn thiêng liêng của số 9',
        giaoTiepXaHoi: 'Kết thúc lành mạnh — mọi lời chào tạm biệt đều là khởi đầu mới',
        hocTap: 'Tổng kết và suy ngẫm — bài học đắt giá nhất đến từ những gì đã qua',
        honNhan: 'Tha thứ — cho người kia và quan trọng hơn, cho chính mình',
      },
    };

    const sumLines = DOMAIN_SUMMARIES[n] || {};

    const renderDomain = (icon, label, summaryKey, content) => {
      const summary = sumLines[summaryKey] || '';
      return `
      <div class="py-domain">
        <div class="py-domain-title">${icon} ${label}:</div>
        ${summary ? `<div class="py-domain-summary">${summary}</div>` : ''}
        <div class="py-domain-body">${content || ''}</div>
      </div>`;
    };

    return `
    <div class="py-year-block">
      <div class="py-year-header">
        <span class="py-year-label">NĂM ${year}</span>
        <span class="py-year-badge">VẬN SỐ ${n}</span>
        <span class="py-year-age">${age} tuổi</span>
      </div>

      ${renderDomain('💑', 'Tình yêu của bạn trong năm này', 'tinhYeu', d.tinhYeu)}
      ${renderDomain('💼', 'Sự nghiệp của bạn trong năm này', 'suNghiep', d.suNghiep)}
      ${renderDomain('💰', 'Tài chính của bạn trong năm này', 'taiChinh', d.taiChinh)}
      ${renderDomain('🤝', 'Giao tiếp xã hội của bạn trong năm này', 'giaoTiepXaHoi', d.giaoTiepXaHoi)}
      ${renderDomain('📚', 'Học tập của bạn trong năm này', 'hocTap', d.hocTap)}
      ${renderDomain('💍', 'Hôn nhân của bạn trong năm này', 'honNhan', d.honNhan)}
    </div>`;
  },

};

// ═══════════════════════════════════════════════════════════════════════════
// LIFE PATH EXTRA — Famous people, Compatibility, Love, Lessons,
// Friends & Family, Travel & Hobbies, Career (for all life path numbers)
// ═══════════════════════════════════════════════════════════════════════════
NarrativeTemplates.lifePathExtra = {

  1: {
    nguoiNoiTieng: [
      { name: 'Steve Jobs', field: 'Công nghệ', note: 'Nhà sáng lập Apple, biểu tượng của tư duy tiên phong và ý chí lãnh đạo không ai bắt chước được' },
      { name: 'Napoleon Bonaparte', field: 'Lịch sử / Quân sự', note: 'Hoàng đế Pháp — chiến lược gia vĩ đại với khát vọng chinh phục không giới hạn' },
      { name: 'Lady Gaga', field: 'Âm nhạc', note: 'Biểu tượng pop độc đáo, luôn dẫn đầu xu hướng, không ngại thách thức chuẩn mực' },
      { name: 'Martin Luther King Jr.', field: 'Nhân quyền', note: 'Lãnh đạo phong trào dân quyền — người thay đổi lịch sử bằng ý chí và tầm nhìn' },
      { name: 'Nikola Tesla', field: 'Khoa học', note: 'Thiên tài phát minh độc lập — người đi trước thời đại trong lĩnh vực điện từ' },
      { name: 'Scarlett Johansson', field: 'Điện ảnh', note: 'Nữ diễn viên hàng đầu Hollywood với cá tính mạnh mẽ và sự nghiệp tự xây dựng' },
    ],
    tuongThich: {
      tot: [3, 5, 7],
      khong: [2, 4, 6],
      moTaTot: 'Số 3 mang sáng tạo bù đắp cho sự nghiêm túc của số 1. Số 5 cùng yêu tự do và hành động nhanh. Số 7 kích thích trí tuệ và chiều sâu tư duy của số 1.',
      moTaKhong: 'Số 2 và số 4 có nhịp sống chậm hơn, dễ gây xung đột với tốc độ của số 1. Số 6 cần sự ổn định và cam kết mà số 1 đôi khi khó duy trì liên tục.',
      chiTiet: `<ul>
        <li><strong>Số 3:</strong> Số 1 cung cấp định hướng và ý chí, số 3 mang đến niềm vui và sắc màu. Cả hai đều năng động và yêu hành động.</li>
        <li><strong>Số 5:</strong> Hai linh hồn tự do — cùng thích khám phá, không chịu bị gò bó và luôn tìm kiếm điều mới mẻ tiếp theo.</li>
        <li><strong>Số 7:</strong> Số 1 hành động, số 7 suy nghĩ sâu — sự bổ sung tuyệt vời giữa trực giác và hành động có chiều sâu.</li>
      </ul>`,
    },
    tinhDuyen: `<ul>
      <li><strong>Phong cách yêu:</strong> Số 1 yêu mạnh mẽ, đam mê và thường là người chủ động. Bạn muốn dẫn dắt và bảo vệ người mình yêu, nhưng đôi khi quên rằng tình yêu cần sự cân bằng giữa cho và nhận.</li>
      <li><strong>Điều bạn cần ở người yêu:</strong> Người có thể ngưỡng mộ sức mạnh của bạn mà không sợ bạn, đủ mạnh để không bị nuốt chửng bởi cái tôi của bạn, nhưng cũng đủ linh hoạt để theo nhịp sống năng động.</li>
      <li><strong>Thử thách tình cảm:</strong> Xu hướng kiểm soát và cái tôi cao có thể tạo ra căng thẳng. Bạn cần học cách lắng nghe và cho phép người kia có không gian riêng trong mối quan hệ.</li>
      <li><strong>Lời khuyên:</strong> Tình yêu thực sự không phải là lãnh thổ để chinh phục — đó là nơi bạn có thể hạ bộ giáp xuống và trở thành phiên bản dễ bị tổn thương nhất của mình.</li>
    </ul>`,
    baiHocThuThach: `<ul>
      <li><strong>Bài học cốt lõi:</strong> Học cách hợp tác thực sự — không phải chỉ chỉ huy. Sức mạnh thực sự là biết khi nào nên dẫn đầu và khi nào nên để người khác dẫn.</li>
      <li><strong>Thử thách về cái tôi:</strong> Khi thất bại, bạn có xu hướng đổ lỗi cho hoàn cảnh bên ngoài thay vì nhìn vào bên trong. Đây là bài học về sự khiêm tốn — không phải yếu đuối.</li>
      <li><strong>Thử thách về sự kiên nhẫn:</strong> Bạn muốn mọi thứ diễn ra theo tốc độ của mình. Học cách chấp nhận rằng không phải mọi thứ đều có thể ép buộc bằng ý chí.</li>
      <li><strong>Bài học về kết nối:</strong> Thành công cá nhân rực rỡ nhất sẽ trống rỗng nếu thiếu những mối quan hệ sâu sắc. Đừng hy sinh tất cả cho sự nghiệp.</li>
    </ul>`,
    banBeGiaDinh: `<ul>
      <li><strong>Trong tình bạn:</strong> Bạn là người bạn trung thành và bảo vệ khi đã thực sự tin ai đó. Vòng tròn thân thiết của bạn thường nhỏ — bạn không cần nhiều bạn, chỉ cần bạn thật.</li>
      <li><strong>Trong gia đình:</strong> Bạn có thiên hướng trở thành trụ cột — người mọi người trông dựa. Điều này mang lại sức mạnh nhưng cũng áp lực. Hãy học cách chia sẻ gánh nặng.</li>
      <li><strong>Điểm cần chú ý:</strong> Cái tôi mạnh đôi khi khiến bạn khó thừa nhận mình cần giúp đỡ. Trong gia đình và tình bạn, dễ bị tổn thương là dấu hiệu của tin tưởng — không phải yếu đuối.</li>
    </ul>`,
    duLichSoThich: `<ul>
      <li><strong>Phong cách du lịch:</strong> Bạn thích những chuyến đi có mục đích — khám phá điều mới, chinh phục thử thách. Trekking, leo núi, du lịch mạo hiểm đều phù hợp với năng lượng số 1.</li>
      <li><strong>Sở thích nổi bật:</strong> Thể thao cạnh tranh, lãnh đạo nhóm, dự án cá nhân sáng tạo, học kỹ năng mới có tính ứng dụng cao.</li>
      <li><strong>Tái tạo năng lượng:</strong> Bạn nạp lại bằng cách có thời gian một mình — đọc sách, thiền định, hoặc bất kỳ hoạt động nào cho phép bạn xử lý suy nghĩ trong yên lặng.</li>
    </ul>`,
    ngheNghiep: `<ul>
      <li><strong>Định hướng phù hợp nhất:</strong> Bất kỳ lĩnh vực nào cho phép bạn lãnh đạo và tự chủ — quản lý cấp cao, kinh doanh riêng, khởi nghiệp, sáng tạo độc lập.</li>
      <li><strong>Công việc lý tưởng:</strong> CEO / Founder, nhà phát minh, kiến trúc sư, giám đốc sáng tạo, nhà nghiên cứu độc lập, chính trị gia, vận động viên chuyên nghiệp.</li>
      <li><strong>Môi trường làm việc:</strong> Cần tự chủ cao, không thích bị vi quản lý. Làm tốt nhất khi được giao mục tiêu rõ ràng và toàn quyền quyết định cách đạt được.</li>
      <li><strong>Lưu ý:</strong> Tránh những vị trí đòi hỏi làm theo lệnh người khác mà không có cơ hội đóng góp ý kiến — điều này sẽ nhanh chóng làm cạn kiệt động lực của bạn.</li>
    </ul>`,
  },

  2: {
    nguoiNoiTieng: [
      { name: 'Barack Obama', field: 'Chính trị', note: 'Tổng thống Mỹ thứ 44, biểu tượng của ngoại giao tinh tế và khả năng kết nối con người' },
      { name: 'Diana Spencer', field: 'Hoàng gia / Nhân đạo', note: 'Công nương của lòng dân, người dùng địa vị để phục vụ và chữa lành người khác' },
      { name: 'Bill Clinton', field: 'Chính trị', note: 'Tổng thống nổi tiếng với khả năng đồng cảm và kỹ năng đàm phán vượt trội' },
      { name: 'Jennifer Aniston', field: 'Điện ảnh', note: 'Biểu tượng của sự ấm áp và kết nối cảm xúc trong Hollywood' },
      { name: 'Tony Blair', field: 'Chính trị', note: 'Thủ tướng Anh, người hòa giải và xây dựng đồng thuận trong chính sách đối ngoại' },
      { name: 'Madonna', field: 'Âm nhạc', note: 'Nữ hoàng nhạc pop mang âm nhạc như vũ khí kết nối và truyền cảm hứng toàn cầu' },
    ],
    tuongThich: {
      tot: [4, 6, 8],
      khong: [1, 5, 7],
      moTaTot: 'Số 4 cung cấp sự ổn định mà số 2 cần. Số 6 cùng yêu thương và hướng đến gia đình. Số 8 bổ sung sức mạnh lãnh đạo để cân bằng với bản chất hỗ trợ của số 2.',
      moTaKhong: 'Số 1 quá quyết đoán có thể áp đảo số 2 nhạy cảm. Số 5 thích tự do khiến số 2 bất an. Số 7 thích cô độc khó thỏa mãn nhu cầu kết nối của số 2.',
      chiTiet: `<ul>
        <li><strong>Số 4:</strong> Số 4 cung cấp nền tảng vững chắc mà số 2 luôn tìm kiếm, và số 2 mang đến sự dịu dàng làm mềm sự cứng nhắc của số 4.</li>
        <li><strong>Số 6:</strong> Cả hai đều yêu thương gia đình và cộng đồng — sự kết hợp tạo ra mái ấm hạnh phúc và bền vững.</li>
        <li><strong>Số 8:</strong> Số 8 dẫn đầu bên ngoài, số 2 hỗ trợ từ bên trong — sự phân công vai trò tự nhiên và hoàn chỉnh.</li>
      </ul>`,
    },
    tinhDuyen: `<ul>
      <li><strong>Phong cách yêu:</strong> Tận tâm, chăm sóc và nhạy cảm với cảm xúc người yêu. Bạn yêu bằng những hành động nhỏ — nhớ từng chi tiết, lắng nghe sâu sắc, luôn hiện diện khi người kia cần.</li>
      <li><strong>Điều bạn cần:</strong> Sự an tâm và cam kết rõ ràng. Bạn không phù hợp với những mối quan hệ mơ hồ — bạn cần biết mình đứng ở đâu trong trái tim người kia.</li>
      <li><strong>Thách thức:</strong> Xu hướng hy sinh bản thân quá mức và không nói lên nhu cầu của chính mình. Hãy nhớ: yêu bản thân đủ để đặt ra giới hạn là điều kiện để yêu người khác bền vững.</li>
    </ul>`,
    baiHocThuThach: `<ul>
      <li><strong>Bài học về giá trị bản thân:</strong> Bạn có xu hướng đánh giá bản thân qua mắt người khác. Học cách nhận ra giá trị của mình độc lập với sự công nhận của người khác.</li>
      <li><strong>Thử thách về quyết đoán:</strong> Sợ mất lòng người khác khiến bạn trì hoãn quyết định. Hãy thực hành đưa ra lựa chọn rõ ràng — ngay cả khi không làm hài lòng tất cả mọi người.</li>
      <li><strong>Thử thách về ranh giới:</strong> Học cách phân biệt giữa giúp đỡ từ sức mạnh và giúp đỡ vì sợ bị từ bỏ. Ranh giới lành mạnh là biểu hiện của tình yêu trưởng thành.</li>
    </ul>`,
    banBeGiaDinh: `<ul>
      <li><strong>Trong tình bạn:</strong> Bạn là người bạn lý tưởng — luôn lắng nghe, không phán xét, và luôn hiện diện. Mọi người tự nhiên tìm đến bạn khi cần chia sẻ.</li>
      <li><strong>Trong gia đình:</strong> Bạn thường là người giữ hòa khí và cầu nối trong gia đình. Nhưng hãy chú ý không để vai trò "người hòa giải" trở thành gánh nặng bạn gánh một mình.</li>
      <li><strong>Lưu ý:</strong> Đôi khi bạn cần cho phép người khác chăm sóc lại bạn — và học cách nhận sự giúp đỡ một cách duyên dáng.</li>
    </ul>`,
    duLichSoThich: `<ul>
      <li><strong>Phong cách du lịch:</strong> Bạn thích những chuyến đi trải nghiệm văn hóa và kết nối con người — du lịch cộng đồng, homestay, thăm bạn bè ở xa.</li>
      <li><strong>Sở thích:</strong> Âm nhạc, thơ ca, nghệ thuật, nấu ăn, thiền định, yoga, làm vườn — những hành động có tính chữa lành và nuôi dưỡng.</li>
      <li><strong>Tái tạo năng lượng:</strong> Cần không gian yên tĩnh để tái nạp sau khi tiếp nhận quá nhiều cảm xúc từ người khác. Thời gian gần thiên nhiên đặc biệt tốt cho bạn.</li>
    </ul>`,
    ngheNghiep: `<ul>
      <li><strong>Định hướng phù hợp:</strong> Công việc đòi hỏi kỹ năng giao tiếp, thấu cảm và hỗ trợ người khác — tư vấn, giáo dục, y tế, ngoại giao, quan hệ công chúng.</li>
      <li><strong>Công việc lý tưởng:</strong> Chuyên gia tư vấn tâm lý, nhà mediator, giáo viên, nhà ngoại giao, HR manager, nhạc sĩ, y tá, nhân viên xã hội.</li>
      <li><strong>Môi trường làm việc:</strong> Cần môi trường hài hòa, không xung đột cao. Làm tốt nhất trong nhóm nhỏ với sự tin tưởng lẫn nhau.</li>
    </ul>`,
  },

  3: {
    nguoiNoiTieng: [
      { name: 'David Bowie', field: 'Âm nhạc', note: 'Huyền thoại rock người liên tục tái tạo bản thân — biểu tượng của sáng tạo không giới hạn' },
      { name: 'Jodie Foster', field: 'Điện ảnh', note: 'Diễn viên - đạo diễn tài năng, kết hợp chiều sâu nghệ thuật với kỷ luật thực chiến' },
      { name: 'Abraham Lincoln', field: 'Lịch sử / Chính trị', note: 'Tổng thống Mỹ nổi tiếng với hùng biện và khả năng truyền cảm hứng qua ngôn ngữ' },
      { name: 'Celine Dion', field: 'Âm nhạc', note: 'Giọng ca huyền thoại, biểu tượng của sự biểu đạt cảm xúc qua âm nhạc' },
      { name: 'Snoop Dogg', field: 'Âm nhạc / Văn hóa', note: 'Nghệ sĩ hip-hop biểu tượng với phong cách sáng tạo và khiếu hài hước độc đáo' },
      { name: 'Reese Witherspoon', field: 'Điện ảnh / Kinh doanh', note: 'Diễn viên và nhà sản xuất thành công, kết hợp sáng tạo với kinh doanh thực chiến' },
    ],
    tuongThich: {
      tot: [1, 5, 9],
      khong: [4, 7, 8],
      moTaTot: 'Số 1 cung cấp định hướng cho năng lượng sáng tạo của số 3. Số 5 cùng yêu sự tự do và trải nghiệm. Số 9 chia sẻ tầm nhìn nhân văn rộng lớn.',
      moTaKhong: 'Số 4 quá thực tế có thể dập tắt sự bốc đồng sáng tạo của số 3. Số 7 thích cô độc khó hòa hợp với bản chất xã hội của số 3. Số 8 tập trung vật chất dễ xung đột với giá trị nghệ thuật.',
      chiTiet: `<ul>
        <li><strong>Số 1:</strong> Số 1 tiên phong, số 3 sáng tạo — cùng nhau tạo ra những dự án đột phá và đầy cảm hứng.</li>
        <li><strong>Số 5:</strong> Hai linh hồn phiêu lưu — luôn có điều mới để khám phá và kể chuyện về.</li>
        <li><strong>Số 9:</strong> Cả hai đều muốn tạo ra tác động lớn hơn bản thân — kết hợp sáng tạo (3) và tầm nhìn nhân đạo (9).</li>
      </ul>`,
    },
    tinhDuyen: `<ul>
      <li><strong>Phong cách yêu:</strong> Lãng mạn, biểu đạt và đầy sắc màu. Bạn yêu bằng lời nói, bài hát, thơ ca và những cử chỉ sáng tạo. Tình yêu với bạn là một tác phẩm nghệ thuật không ngừng được tạo ra.</li>
      <li><strong>Điều bạn cần:</strong> Người yêu cần là khán giả tốt — ai đó thực sự nghe và trân trọng những gì bạn tạo ra. Cần đủ kiên nhẫn ở lại khi bạn đang trong giai đoạn "mất hứng" cảm xúc.</li>
      <li><strong>Thách thức:</strong> Bốc đồng cảm xúc và thiên hướng lý tưởng hóa người yêu — rồi thất vọng khi họ không hoàn hảo như tưởng tượng. Tình yêu thực sự đòi hỏi nhìn thấy người kia như họ thực sự là.</li>
    </ul>`,
    baiHocThuThach: `<ul>
      <li><strong>Bài học về kỷ luật sáng tạo:</strong> Tài năng không đủ — sự kiên trì và kỷ luật mới là thứ biến tiềm năng thành thành tựu thực sự.</li>
      <li><strong>Thử thách về sự hoàn thành:</strong> Học cách kết thúc những gì đã bắt đầu. Mỗi dự án hoàn chỉnh là bằng chứng cho giá trị của bạn.</li>
      <li><strong>Thử thách về chiều sâu:</strong> Nhận ra rằng sự vui vẻ bề mặt đôi khi là cơ chế phòng thủ. Cho phép bản thân trải nghiệm và biểu đạt cả những cảm xúc khó khăn hơn.</li>
    </ul>`,
    banBeGiaDinh: `<ul>
      <li><strong>Trong tình bạn:</strong> Xuất sắc — bạn là người bạn khiến mọi cuộc gặp gỡ trở thành bữa tiệc. Nhưng hãy chú ý duy trì chiều sâu trong tình bạn, không chỉ bề rộng.</li>
      <li><strong>Trong gia đình:</strong> Bạn là nguồn năng lượng và niềm vui trong gia đình. Nhưng đôi khi cần học cách lắng nghe thay vì luôn muốn nói và kể chuyện.</li>
      <li><strong>Lưu ý:</strong> Khi gia đình đang trải qua khó khăn, hãy cho phép bản thân hiện diện thật sự — không phải chỉ "vui vẻ" để làm nhẹ không khí.</li>
    </ul>`,
    duLichSoThich: `<ul>
      <li><strong>Phong cách du lịch:</strong> Bạn yêu những chuyến đi giàu văn hóa và nghệ thuật — bảo tàng, lễ hội âm nhạc, các thành phố năng động với đời sống nghệ thuật phong phú.</li>
      <li><strong>Sở thích:</strong> Viết lách, âm nhạc, hội họa, sân khấu, diễn hài, nhiếp ảnh, podcast, content creation — bất cứ điều gì cho phép biểu đạt bản thân.</li>
      <li><strong>Tái tạo năng lượng:</strong> Các hoạt động sáng tạo không có áp lực kết quả — vẽ vì vui, viết nhật ký, chơi nhạc cụ chỉ cho bản thân.</li>
    </ul>`,
    ngheNghiep: `<ul>
      <li><strong>Định hướng phù hợp:</strong> Bất kỳ lĩnh vực nào cho phép sáng tạo, biểu đạt và giao tiếp — nghệ thuật, truyền thông, marketing, giáo dục sáng tạo.</li>
      <li><strong>Công việc lý tưởng:</strong> Nhà văn, blogger, MC, diễn viên, ca sĩ, thiết kế sáng tạo, giáo viên nghệ thuật, content creator, copywriter, nhà trị liệu qua nghệ thuật.</li>
      <li><strong>Môi trường làm việc:</strong> Cần môi trường sáng tạo, không quá cứng nhắc về quy trình. Làm tốt nhất khi có cơ hội thử nghiệm và biểu đạt ý tưởng bản thân.</li>
    </ul>`,
  },

  4: {
    nguoiNoiTieng: [
      { name: 'Bill Gates', field: 'Công nghệ / Từ thiện', note: 'Nhà sáng lập Microsoft — biểu tượng của sự xây dựng có hệ thống và tầm nhìn dài hạn' },
      { name: 'Elton John', field: 'Âm nhạc', note: 'Huyền thoại nhạc pop với sự nghiệp được xây dựng bằng kỷ luật và bền bỉ phi thường' },
      { name: 'Arnold Schwarzenegger', field: 'Thể thao / Điện ảnh / Chính trị', note: 'Từ bodybuilder đến thống đốc California — hành trình xây dựng qua kỷ luật thép' },
      { name: 'Paul McCartney', field: 'Âm nhạc', note: 'Thành viên huyền thoại The Beatles, người xây dựng di sản âm nhạc trường tồn' },
      { name: 'Clint Eastwood', field: 'Điện ảnh', note: 'Biểu tượng của sự kỷ luật, đáng tin cậy và tay nghề điêu luyện trong suốt sự nghiệp' },
      { name: 'Oprah Winfrey', field: 'Truyền thông / Từ thiện', note: 'Từ nghèo khó đến tỷ phú truyền thông — hành trình của ý chí và công việc bền bỉ' },
    ],
    tuongThich: {
      tot: [2, 6, 8],
      khong: [3, 5, 7],
      moTaTot: 'Số 2 mang sự dịu dàng làm mềm sự cứng nhắc của số 4. Số 6 cùng yêu ổn định và gia đình. Số 8 chia sẻ tham vọng xây dựng và năng lực thực thi.',
      moTaKhong: 'Số 3 bốc đồng và thiếu kỷ luật dễ làm số 4 bực bội. Số 5 thích thay đổi liên tục xung đột với nhu cầu ổn định của số 4. Số 7 sống trong thế giới nội tâm quá nhiều.',
      chiTiet: `<ul>
        <li><strong>Số 2:</strong> Số 4 xây nền tảng, số 2 xây cầu nối — cùng nhau tạo ra mối quan hệ vừa vững chắc vừa ấm áp.</li>
        <li><strong>Số 6:</strong> Cả hai đều coi trọng gia đình, an toàn và cam kết — đây là cặp đôi tạo ra mái ấm lý tưởng.</li>
        <li><strong>Số 8:</strong> Cùng tham vọng, cùng kỷ luật — hai người xây dựng đế chế cùng nhau với sự tôn trọng lẫn nhau.</li>
      </ul>`,
    },
    tinhDuyen: `<ul>
      <li><strong>Phong cách yêu:</strong> Trung thành và đáng tin cậy tuyệt đối. Bạn không nói nhiều về tình yêu nhưng thể hiện qua hành động — luôn ở đây, luôn giữ lời hứa, luôn là chỗ dựa vững chắc.</li>
      <li><strong>Điều bạn cần:</strong> Người yêu ổn định, nhất quán và nghiêm túc với mối quan hệ. Bạn không phù hợp với người thích cảm giác mạnh hay không chắc chắn về cam kết.</li>
      <li><strong>Thách thức:</strong> Đôi khi quá cứng nhắc và khó thay đổi theo yêu cầu. Tình yêu cần sự linh hoạt — đừng để tiêu chuẩn cao trở thành rào cản cho sự gần gũi.</li>
    </ul>`,
    baiHocThuThach: `<ul>
      <li><strong>Bài học về sự linh hoạt:</strong> Không phải mọi thứ đều cần được kiểm soát và lên kế hoạch. Học cách đón nhận sự thay đổi bất ngờ như một phần tự nhiên của cuộc sống.</li>
      <li><strong>Thử thách về niềm vui:</strong> Bạn quá tập trung vào công việc đến mức bỏ lỡ niềm vui của hành trình. Đôi khi chỉ cần ngồi và tận hưởng khoảnh khắc.</li>
      <li><strong>Thử thách sự kiệt sức:</strong> Học cách nhận ra giới hạn của mình trước khi vượt qua nó. Nghỉ ngơi phòng ngừa hiệu quả hơn phục hồi sau kiệt sức.</li>
    </ul>`,
    banBeGiaDinh: `<ul>
      <li><strong>Trong tình bạn:</strong> Bạn không có nhiều bạn nhưng những người bạn có sẽ biết rằng bạn luôn ở đó cho họ. Độ tin cậy của bạn là tài sản lớn nhất trong tình bạn.</li>
      <li><strong>Trong gia đình:</strong> Bạn thường là người chịu trách nhiệm và giải quyết vấn đề thực tế trong gia đình. Hãy đảm bảo bạn cũng có không gian để được chăm sóc lại.</li>
    </ul>`,
    duLichSoThich: `<ul>
      <li><strong>Phong cách du lịch:</strong> Bạn thích những chuyến đi được lên kế hoạch kỹ lưỡng với mục đích rõ ràng — du lịch lịch sử, tìm hiểu kiến trúc, các địa điểm kỳ quan thiên nhiên.</li>
      <li><strong>Sở thích:</strong> Làm vườn, DIY, xây dựng thủ công, cờ vua, lập trình, đọc sách kỹ thuật — những hoạt động đòi hỏi kiên nhẫn và kỹ năng.</li>
      <li><strong>Tái tạo năng lượng:</strong> Các hoạt động có cấu trúc và có thể thấy kết quả rõ ràng — làm món ăn phức tạp, hoàn thiện dự án thủ công, thể dục đều đặn.</li>
    </ul>`,
    ngheNghiep: `<ul>
      <li><strong>Định hướng phù hợp:</strong> Công việc đòi hỏi sự chính xác, hệ thống và tính đáng tin cậy — kỹ thuật, tài chính, xây dựng, quản lý dự án.</li>
      <li><strong>Công việc lý tưởng:</strong> Kỹ sư, kiến trúc sư, kế toán, quản lý dự án, nhà phân tích tài chính, bác sĩ, luật sư, nhà nghiên cứu khoa học.</li>
      <li><strong>Môi trường làm việc:</strong> Cần quy trình rõ ràng và kết quả có thể đo lường. Làm tốt nhất trong môi trường có cấu trúc nhưng cho phép thể hiện chuyên môn sâu.</li>
    </ul>`,
  },

  5: {
    nguoiNoiTieng: [
      { name: 'Angelina Jolie', field: 'Điện ảnh / Nhân đạo', note: 'Biểu tượng của sự tự do và dũng cảm — liên tục phá vỡ giới hạn trong sự nghiệp và cuộc sống' },
      { name: 'Mick Jagger', field: 'Âm nhạc', note: 'Giọng ca The Rolling Stones — biểu tượng của năng lượng không tuổi và sự tự do không giới hạn' },
      { name: 'Beyoncé', field: 'Âm nhạc / Kinh doanh', note: 'Nữ hoàng pop với sức sáng tạo không ngừng và khả năng tái tạo bản thân đỉnh cao' },
      { name: 'Isaac Newton', field: 'Khoa học', note: 'Nhà khoa học vĩ đại với tư duy độc lập và khao khát không ngừng khám phá bí ẩn vũ trụ' },
      { name: 'Vincent van Gogh', field: 'Nghệ thuật', note: 'Họa sĩ hậu ấn tượng — linh hồn tự do với di sản nghệ thuật vĩnh cửu' },
      { name: 'Eminem', field: 'Âm nhạc', note: 'Rapper huyền thoại với khả năng biến đổi và thích nghi không ngừng xuyên suốt sự nghiệp' },
    ],
    tuongThich: {
      tot: [1, 3, 7],
      khong: [2, 4, 6],
      moTaTot: 'Số 1 cùng yêu tự do và hành động nhanh. Số 3 mang sáng tạo và niềm vui. Số 7 kích thích trí tò mò của số 5 bằng chiều sâu và triết học.',
      moTaKhong: 'Số 2 cần sự ổn định và cam kết mà số 5 khó cung cấp. Số 4 quá kỷ luật và routine xung đột với bản chất phiêu lưu của số 5. Số 6 cần sự gắn kết gia đình mà số 5 khó đáp ứng.',
      chiTiet: `<ul>
        <li><strong>Số 1:</strong> Hai người hành động và tiên phong — cùng khám phá thế giới và không ai áp đảo ai.</li>
        <li><strong>Số 3:</strong> Số 5 phiêu lưu, số 3 kể chuyện — mỗi hành trình đều trở thành tác phẩm nghệ thuật.</li>
        <li><strong>Số 7:</strong> Số 5 tìm kiếm trải nghiệm, số 7 tìm kiếm ý nghĩa — cùng nhau khám phá chiều rộng và chiều sâu của cuộc sống.</li>
      </ul>`,
    },
    tinhDuyen: `<ul>
      <li><strong>Phong cách yêu:</strong> Cuồng nhiệt, hấp dẫn và đầy bất ngờ. Bạn là người tình thú vị nhất thế giới — nhưng cũng là người khó bắt nhất. Không ai yêu bạn theo cách bình thường.</li>
      <li><strong>Điều bạn cần:</strong> Người yêu cần đủ tự tin và an toàn trong bản thân để không cần kiểm soát bạn. Ai đó yêu bạn vì sự tự do của bạn — không phải dù cho sự tự do của bạn.</li>
      <li><strong>Thách thức:</strong> Nỗi sợ cam kết và cảm giác bị giam cầm trong quan hệ. Nhận ra rằng cam kết thực sự không có nghĩa là mất tự do — mà là chọn ai để cùng tự do với.</li>
    </ul>`,
    baiHocThuThach: `<ul>
      <li><strong>Bài học về cam kết:</strong> Tự do thực sự không phải là không có ràng buộc — mà là chọn lựa có ý thức. Học cách cam kết với những gì thực sự quan trọng.</li>
      <li><strong>Thử thách về kiên nhẫn:</strong> Không phải mọi thứ đáng giá đều đến nhanh. Học cách chờ đợi và kiên trì với những dự án dài hơi.</li>
      <li><strong>Thử thách về tập trung:</strong> Quá nhiều hướng đi cùng một lúc dẫn đến không đi đến đâu. Học cách chọn lọc và ưu tiên.</li>
    </ul>`,
    banBeGiaDinh: `<ul>
      <li><strong>Trong tình bạn:</strong> Bạn là người bạn thú vị và truyền cảm hứng nhất — nhưng đôi khi "biến mất" khi đang trong giai đoạn phiêu lưu riêng. Hãy chú ý duy trì kết nối định kỳ.</li>
      <li><strong>Trong gia đình:</strong> Bạn mang năng lượng và sự thú vị vào gia đình, nhưng đôi khi cần mở rộng thời gian để hiện diện nhiều hơn cho những người thân yêu.</li>
    </ul>`,
    duLichSoThich: `<ul>
      <li><strong>Phong cách du lịch:</strong> Du lịch tự túc không có lịch trình cố định — khám phá những nơi ít người biết đến, đặt vé phút chót, sống cùng người địa phương.</li>
      <li><strong>Sở thích:</strong> Học ngoại ngữ, thể thao mạo hiểm, nhảy dù, lặn biển, leo núi, khiêu vũ, âm nhạc đường phố — bất cứ điều gì kích thích giác quan.</li>
      <li><strong>Tái tạo năng lượng:</strong> Di chuyển! Bạn nạp lại bằng cách thay đổi môi trường và tiếp xúc với những điều mới.</li>
    </ul>`,
    ngheNghiep: `<ul>
      <li><strong>Định hướng phù hợp:</strong> Công việc linh hoạt, đa dạng và không lặp lại — bán hàng, truyền thông, du lịch, nghệ thuật biểu diễn, tư vấn, khởi nghiệp.</li>
      <li><strong>Công việc lý tưởng:</strong> Travel blogger, nhà báo, nhà ngoại giao, diễn viên, DJ, hướng dẫn viên du lịch, chuyên gia marketing, doanh nhân đa ngành.</li>
      <li><strong>Môi trường làm việc:</strong> Cần sự linh hoạt tối đa — remote work, tự kinh doanh, hoặc công ty có văn hóa năng động. Cứng nhắc là kẻ thù năng suất của bạn.</li>
    </ul>`,
  },

  6: {
    nguoiNoiTieng: [
      { name: 'Michael Jackson', field: 'Âm nhạc', note: 'Ông hoàng nhạc pop — dành cả đời tạo ra âm nhạc chữa lành và kết nối nhân loại' },
      { name: 'John Lennon', field: 'Âm nhạc / Hòa bình', note: 'Huyền thoại The Beatles, biểu tượng của tình yêu thương và khát vọng hòa bình thế giới' },
      { name: 'Albert Einstein', field: 'Khoa học', note: 'Thiên tài vật lý với trí tưởng tượng phi thường và lòng trắc ẩn sâu sắc với nhân loại' },
      { name: 'Dalai Lama', field: 'Tâm linh / Hòa bình', note: 'Lãnt tụ tinh thần Tây Tạng, biểu tượng của lòng từ bi và tình yêu thương vô điều kiện' },
      { name: 'Meryl Streep', field: 'Điện ảnh', note: 'Nữ diễn viên huyền thoại với khả năng thấu cảm sâu sắc qua từng nhân vật' },
      { name: 'Eleanor Roosevelt', field: 'Chính trị / Nhân đạo', note: 'Đệ nhất phu nhân Mỹ, nhà hoạt động nhân quyền và từ thiện cả đời' },
    ],
    tuongThich: {
      tot: [2, 3, 9],
      khong: [1, 5, 7],
      moTaTot: 'Số 2 cùng yêu thương và nuôi dưỡng — tạo ra mái ấm lý tưởng. Số 3 mang joy và sáng tạo vào cuộc sống trách nhiệm của số 6. Số 9 chia sẻ tầm nhìn nhân văn rộng lớn.',
      moTaKhong: 'Số 1 quá tập trung vào bản thân dễ va chạm với bản chất phục vụ của số 6. Số 5 thích tự do gây bất ổn cho số 6. Số 7 quá hướng nội khó thỏa mãn nhu cầu kết nối của số 6.',
      chiTiet: `<ul>
        <li><strong>Số 2:</strong> Cả hai đều chăm sóc và yêu thương — nhưng cần học cách nhận lại, không chỉ cho đi.</li>
        <li><strong>Số 3:</strong> Số 6 nuôi dưỡng, số 3 truyền cảm hứng — sự cân bằng tốt giữa trách nhiệm và niềm vui.</li>
        <li><strong>Số 9:</strong> Cùng muốn tạo ra thế giới tốt đẹp hơn — chỉ khác về quy mô và cách tiếp cận.</li>
      </ul>`,
    },
    tinhDuyen: `<ul>
      <li><strong>Phong cách yêu:</strong> Tận tụy, chăm sóc và sẵn sàng hy sinh. Bạn yêu bằng cả con người mình — và đôi khi điều đó quá nhiều đến mức người kia cảm thấy ngột ngạt.</li>
      <li><strong>Điều bạn cần:</strong> Người yêu trân trọng sự chăm sóc của bạn và biết cách đáp lại. Bạn cần sự công nhận và lòng biết ơn — không ai có thể cho đi mãi mà không cần nhận lại.</li>
      <li><strong>Thách thức:</strong> Xu hướng kiểm soát từ tình yêu thương — muốn bảo vệ người yêu đến mức không cho họ không gian để tự lớn lên.</li>
    </ul>`,
    baiHocThuThach: `<ul>
      <li><strong>Bài học về ranh giới:</strong> Không phải mọi người đều cần được cứu. Học cách đứng bên cạnh thay vì đứng ở giữa giải quyết vấn đề cho người khác.</li>
      <li><strong>Thử thách hoàn hảo chủ nghĩa:</strong> Bạn kỳ vọng rất cao và thường thất vọng với thực tế. Học cách chấp nhận "đủ tốt" trong những tình huống không cần hoàn hảo.</li>
      <li><strong>Thử thách về tự chăm sóc:</strong> Bạn giỏi chăm sóc người khác nhưng thường quên chăm sóc bản thân. Bạn không thể rót từ chiếc cốc trống.</li>
    </ul>`,
    banBeGiaDinh: `<ul>
      <li><strong>Trong tình bạn:</strong> Bạn là người bạn luôn ở đó — nhưng đôi khi quá nhiệt tình đến mức áp đảo. Học cách cho bạn bè không gian để họ cũng tự lo được.</li>
      <li><strong>Trong gia đình:</strong> Trụ cột của gia đình — người giữ ấm mọi mối quan hệ. Đây là thiên phú lớn nhất và cũng là trách nhiệm nặng nhất của bạn.</li>
    </ul>`,
    duLichSoThich: `<ul>
      <li><strong>Phong cách du lịch:</strong> Bạn thích du lịch theo nhóm hoặc gia đình. Điểm đến lý tưởng vừa đẹp vừa có ý nghĩa văn hóa và lịch sử sâu sắc.</li>
      <li><strong>Sở thích:</strong> Nấu ăn, trang trí nhà cửa, làm vườn, nhiếp ảnh, dạy học, tình nguyện, yoga, thiền định.</li>
      <li><strong>Tái tạo năng lượng:</strong> Tạo ra không gian đẹp và ấm cúng — trang trí lại một góc nhà, nấu một bữa ăn ngon, dành thời gian chăm sóc cơ thể có chủ đích.</li>
    </ul>`,
    ngheNghiep: `<ul>
      <li><strong>Định hướng phù hợp:</strong> Công việc chăm sóc, nuôi dưỡng và phục vụ cộng đồng — y tế, giáo dục, tư vấn, thiết kế không gian sống.</li>
      <li><strong>Công việc lý tưởng:</strong> Bác sĩ, y tá, giáo viên, nhà tư vấn gia đình, nhà thiết kế nội thất, nhà hoạt động xã hội, chef, chuyên gia dinh dưỡng.</li>
      <li><strong>Môi trường làm việc:</strong> Cần cảm giác đang tạo ra sự khác biệt và được trân trọng. Môi trường hài hòa và có văn hóa tốt quan trọng hơn tiền lương cao.</li>
    </ul>`,
  },

  7: {
    nguoiNoiTieng: [
      { name: 'Leonardo DiCaprio', field: 'Điện ảnh / Môi trường', note: 'Diễn viên chiều sâu với cam kết mạnh mẽ về bảo vệ môi trường — điển hình của số 7 có tầm nhìn' },
      { name: 'Fyodor Dostoevsky', field: 'Văn học', note: 'Đại văn hào Nga — người khai thác chiều sâu tâm lý con người như không ai khác' },
      { name: 'Stephen Hawking', field: 'Khoa học', note: 'Nhà vật lý thiên tài, người khám phá bí ẩn sâu nhất của vũ trụ bất chấp mọi giới hạn' },
      { name: 'Elon Musk', field: 'Công nghệ', note: 'Doanh nhân viễn kiến — người đặt câu hỏi lớn hơn bất kỳ ai về tương lai nhân loại' },
      { name: 'Eric Clapton', field: 'Âm nhạc', note: 'Guitar huyền thoại — chiều sâu âm nhạc phản ánh thế giới nội tâm sâu thẳm' },
      { name: 'Keira Knightley', field: 'Điện ảnh', note: 'Diễn viên với chiều sâu nội tâm và khả năng thể hiện các nhân vật phức tạp xuất sắc' },
    ],
    tuongThich: {
      tot: [1, 5, 9],
      khong: [2, 6, 8],
      moTaTot: 'Số 1 hành động trong khi số 7 suy nghĩ — bổ sung nhau hoàn hảo. Số 5 kích thích trí tò mò của số 7 bằng trải nghiệm mới. Số 9 chia sẻ chiều sâu triết học và tầm nhìn lớn.',
      moTaKhong: 'Số 2 cần kết nối cảm xúc liên tục mà số 7 khó cung cấp. Số 6 quá hướng ngoại và cần sự hiện diện nhiều hơn số 7 muốn cho. Số 8 quá tập trung vật chất, trong khi số 7 sống trong thế giới tinh thần.',
      chiTiet: `<ul>
        <li><strong>Số 1:</strong> Số 7 cung cấp chiều sâu và phân tích, số 1 cung cấp quyết đoán và hành động — bổ trợ lý tưởng.</li>
        <li><strong>Số 5:</strong> Cùng tò mò và yêu khám phá — một người khám phá bên ngoài (5), một người khám phá bên trong (7).</li>
        <li><strong>Số 9:</strong> Cả hai đều suy nghĩ về những điều lớn hơn bản thân — triết học, tâm linh và ý nghĩa cuộc sống.</li>
      </ul>`,
    },
    tinhDuyen: `<ul>
      <li><strong>Phong cách yêu:</strong> Sâu sắc và đòi hỏi. Bạn không quan tâm đến tình yêu bề mặt — bạn muốn kết nối tâm hồn thực sự. Điều này có nghĩa là bạn có ít mối quan hệ nhưng rất sâu.</li>
      <li><strong>Điều bạn cần:</strong> Người yêu trí tuệ, tôn trọng không gian của bạn và không cần bạn phải biểu đạt tình cảm theo cách thông thường. Ai đó hiểu rằng yên lặng cùng nhau cũng là một hình thức thân mật.</li>
      <li><strong>Thách thức:</strong> Khó tin tưởng và mở lòng. Bạn kiểm tra người kia rất kỹ trước khi cho vào vòng trong — đôi khi làm người kia bỏ cuộc trước khi đến được thực sự.</li>
    </ul>`,
    baiHocThuThach: `<ul>
      <li><strong>Bài học về kết nối:</strong> Trí tuệ và sự hiểu biết không thể thay thế kết nối con người thực sự. Học cách mở lòng ngay cả khi điều đó cảm thấy dễ bị tổn thương.</li>
      <li><strong>Thử thách về niềm tin:</strong> Xu hướng hoài nghi có thể ngăn bạn trải nghiệm những điều tốt đẹp. Không phải mọi điều đều cần được phân tích trước khi tin.</li>
      <li><strong>Thử thách về chia sẻ kiến thức:</strong> Bạn tích lũy nhiều tri thức nhưng đôi khi giữ cho riêng mình. Chia sẻ những khám phá chính là sứ mệnh của số 7.</li>
    </ul>`,
    banBeGiaDinh: `<ul>
      <li><strong>Trong tình bạn:</strong> Ít bạn, nhưng sâu và bền. Bạn là người bạn hiếm hoi thực sự lắng nghe và hiểu — không phán xét, không lời khuyên rẻ tiền.</li>
      <li><strong>Trong gia đình:</strong> Bạn yêu thương gia đình nhưng cần nhiều không gian riêng hơn mức trung bình. Hãy giao tiếp điều này rõ ràng thay vì chỉ rút lui im lặng.</li>
    </ul>`,
    duLichSoThich: `<ul>
      <li><strong>Phong cách du lịch:</strong> Bạn thích những chuyến đi một mình đến những nơi có chiều sâu lịch sử, tâm linh hoặc thiên nhiên hùng vĩ — Kyoto, Tuscany, các đền cổ ở châu Á.</li>
      <li><strong>Sở thích:</strong> Đọc sách triết học và khoa học, thiền định, nghiên cứu cổ học, thiên văn học, âm nhạc cổ điển, viết nhật ký.</li>
      <li><strong>Tái tạo năng lượng:</strong> Cô độc có chất lượng — một mình với suy nghĩ của mình trong không gian yên tĩnh.</li>
    </ul>`,
    ngheNghiep: `<ul>
      <li><strong>Định hướng phù hợp:</strong> Công việc đòi hỏi tư duy phân tích sâu, nghiên cứu độc lập và chuyên môn đặc biệt — khoa học, triết học, công nghệ, phân tích.</li>
      <li><strong>Công việc lý tưởng:</strong> Nhà khoa học, triết gia, nhà phân tích dữ liệu, lập trình viên, thám tử, chuyên gia tâm lý, nhà thiên văn học, nhà văn nghiêm túc, cố vấn chiến lược.</li>
      <li><strong>Môi trường làm việc:</strong> Cần không gian yên tĩnh để tập trung và làm việc độc lập. Ít meetings, ít xã giao bắt buộc — nhiều thời gian tự tổ chức.</li>
    </ul>`,
  },

  8: {
    nguoiNoiTieng: [
      { name: 'Nelson Mandela', field: 'Chính trị / Nhân quyền', note: 'Biểu tượng của quyền năng dùng cho mục đích cao cả — từ tù nhân đến tổng thống' },
      { name: 'Pablo Picasso', field: 'Nghệ thuật', note: 'Họa sĩ huyền thoại với ý chí thống trị thế giới nghệ thuật bằng cách đặt ra quy tắc riêng' },
      { name: 'Sandra Bullock', field: 'Điện ảnh / Kinh doanh', note: 'Diễn viên và nhà sản xuất thành công, biểu tượng cân bằng giữa quyền lực và nhân tính' },
      { name: 'Richard Branson', field: 'Kinh doanh', note: 'Tỷ phú Virgin — biểu tượng của tham vọng không giới hạn và khả năng xây dựng đế chế kinh doanh đa lĩnh vực' },
      { name: 'Whoopi Goldberg', field: 'Điện ảnh / Giải trí', note: 'Diễn viên và MC huyền thoại với sức mạnh ý chí và cá tính không thể nhầm lẫn' },
      { name: 'Anthony Hopkins', field: 'Điện ảnh', note: 'Diễn viên huyền thoại với sự kiểm soát và kỷ luật nghề nghiệp tuyệt đối' },
    ],
    tuongThich: {
      tot: [2, 4, 6],
      khong: [3, 5, 7],
      moTaTot: 'Số 2 bổ sung sự tinh tế cảm xúc cho số 8 quyết đoán. Số 4 chia sẻ kỷ luật và tham vọng xây dựng. Số 6 mang sự ấm áp và nhắc số 8 nhớ những điều quan trọng ngoài thành công.',
      moTaKhong: 'Số 3 bốc đồng và thiếu kế hoạch dài hạn. Số 5 thích tự do không cam kết dễ xung đột với định hướng của số 8. Số 7 sống trong thế giới tinh thần, ít quan tâm vật chất.',
      chiTiet: `<ul>
        <li><strong>Số 2:</strong> Số 8 chinh phục bên ngoài, số 2 xây dựng bên trong — sự phân công vai trò tự nhiên và hiệu quả.</li>
        <li><strong>Số 4:</strong> Cùng tham vọng, cùng kỷ luật — hai người xây dựng đế chế cùng nhau với sự tôn trọng sâu sắc.</li>
        <li><strong>Số 6:</strong> Số 6 nhắc số 8 rằng con người quan trọng hơn kết quả — điều chỉnh cân bằng thiết yếu.</li>
      </ul>`,
    },
    tinhDuyen: `<ul>
      <li><strong>Phong cách yêu:</strong> Passionate và bảo vệ mạnh mẽ. Bạn yêu bằng sự bảo vệ và cung cấp — muốn người yêu được tốt nhất. Nhưng đôi khi nhầm lẫn giữa tình yêu và sự kiểm soát.</li>
      <li><strong>Điều bạn cần:</strong> Người yêu đủ mạnh để không bị nuốt chửng bởi năng lượng của bạn — ai đó có thể nhìn thẳng vào mắt bạn và nói "không" khi cần thiết.</li>
      <li><strong>Thách thức:</strong> Xu hướng đặt công việc và tham vọng lên trên mối quan hệ. Nhớ rằng thành công sẽ trống rỗng nếu không có ai để chia sẻ.</li>
    </ul>`,
    baiHocThuThach: `<ul>
      <li><strong>Bài học về quyền lực:</strong> Quyền lực thực sự không đến từ việc kiểm soát người khác — mà từ việc truyền cảm hứng để họ tự nguyện theo. Lãnh đạo bằng ảnh hưởng, không phải áp lực.</li>
      <li><strong>Thử thách về cân bằng:</strong> Dễ bị cuốn vào vòng xoáy của sự thành công và quên đi những điều không thể mua được bằng tiền.</li>
      <li><strong>Thử thách về khiêm tốn:</strong> Học cách thừa nhận sai lầm và đón nhận phản hồi — những điều này làm bạn mạnh hơn, không yếu hơn.</li>
    </ul>`,
    banBeGiaDinh: `<ul>
      <li><strong>Trong tình bạn:</strong> Bạn là người bạn hào phóng và bảo vệ mạnh mẽ. Nhưng đôi khi cần học cách là bạn bình đẳng thay vì luôn ở vị trí "người giúp đỡ" hoặc "người lãnh đạo".</li>
      <li><strong>Trong gia đình:</strong> Trụ cột kinh tế và quyết định. Hãy chú ý cân bằng giữa cung cấp vật chất và hiện diện cảm xúc.</li>
    </ul>`,
    duLichSoThich: `<ul>
      <li><strong>Phong cách du lịch:</strong> Bạn thích du lịch hạng sang và có mục đích — kết hợp công việc và nghỉ dưỡng. Các điểm đến mang tầm lịch sử hoặc địa lý hùng vĩ thu hút bạn.</li>
      <li><strong>Sở thích:</strong> Đầu tư, cờ vua, golf, boxing/MMA, bộ sưu tập nghệ thuật, rượu vang cao cấp, kinh doanh sáng tạo.</li>
      <li><strong>Tái tạo năng lượng:</strong> Các hoạt động thể chất cạnh tranh — thể thao, gym, dance — và thỉnh thoảng nghỉ dưỡng sang trọng để tái nạp.</li>
    </ul>`,
    ngheNghiep: `<ul>
      <li><strong>Định hướng phù hợp:</strong> Lãnh đạo, tài chính, kinh doanh quy mô lớn — bất kỳ lĩnh vực nào cho phép thi thố tầm ảnh hưởng và tạo ra kết quả có thể đo lường.</li>
      <li><strong>Công việc lý tưởng:</strong> CEO, banker, luật sư điều hành, bác sĩ phẫu thuật, đạo diễn, chính trị gia cấp cao, quản lý quỹ đầu tư, thẩm phán.</li>
      <li><strong>Môi trường làm việc:</strong> Cần quyền tự chủ và ảnh hưởng thực sự. Tránh vị trí trung gian không có quyền quyết định — điều này nhanh chóng làm bạn bực bội và mất động lực.</li>
    </ul>`,
  },

  9: {
    nguoiNoiTieng: [
      { name: 'Mahatma Gandhi', field: 'Chính trị / Nhân quyền', note: 'Cha đẻ của Ấn Độ độc lập — biểu tượng tối thượng của lòng từ bi và sức mạnh phi bạo lực' },
      { name: 'Mother Teresa', field: 'Nhân đạo / Tôn giáo', note: 'Nữ tu sĩ Công giáo dành cả cuộc đời phục vụ người nghèo khổ nhất trên Trái Đất' },
      { name: 'Jim Carrey', field: 'Điện ảnh / Triết học', note: 'Diễn viên hài thiên tài đồng thời là triết gia về ý nghĩa cuộc sống và sự vô thường' },
      { name: 'Morgan Freeman', field: 'Điện ảnh', note: 'Giọng điệu của nhân loại — diễn viên mang đến sự khôn ngoan và bình an trong mọi vai diễn' },
      { name: 'Yoko Ono', field: 'Nghệ thuật / Hòa bình', note: 'Nghệ sĩ và nhà hoạt động hòa bình, tiếp nối di sản nhân văn của John Lennon' },
      { name: 'Judi Dench', field: 'Điện ảnh / Sân khấu', note: 'Nữ diễn viên huyền thoại với sự nghiệp trải dài 6 thập kỷ, biểu tượng của trí tuệ và nhân cách' },
    ],
    tuongThich: {
      tot: [3, 6, 9],
      khong: [4, 8, 22],
      moTaTot: 'Số 3 mang sự vui tươi sáng tạo bổ sung cho tầm nhìn lớn của số 9. Số 6 chia sẻ tình yêu thương và phục vụ. Số 9 khác — hai tâm hồn vũ trụ hiểu nhau không cần giải thích.',
      moTaKhong: 'Số 4 quá thực tế có thể không hiểu lý tưởng của số 9. Số 8 tập trung tích lũy vật chất, ngược với tinh thần buông bỏ của số 9. Số 22 cùng tầm nhìn lớn nhưng khác phương pháp.',
      chiTiet: `<ul>
        <li><strong>Số 3:</strong> Số 9 mang tầm nhìn, số 3 mang giọng nói — cùng nhau truyền đạt thông điệp nhân văn đến thế giới.</li>
        <li><strong>Số 6:</strong> Cùng yêu thương và muốn tạo ra môi trường tốt đẹp hơn — một người ở quy mô gia đình (6), một người ở quy mô thế giới (9).</li>
        <li><strong>Số 9:</strong> Hai tâm hồn cổ đại hiểu nhau ở chiều sâu linh hồn mà rất ít người có thể chạm đến.</li>
      </ul>`,
    },
    tinhDuyen: `<ul>
      <li><strong>Phong cách yêu:</strong> Sâu sắc, vị tha và thường yêu người kia nhiều hơn yêu bản thân. Bạn nhìn thấy tiềm năng tốt nhất trong người yêu — đôi khi điều này trở thành gánh nặng khi thực tế không đáp ứng.</li>
      <li><strong>Điều bạn cần:</strong> Người yêu chia sẻ giá trị nhân văn và có chiều sâu tâm hồn tương đồng. Sự giả tạo hay ích kỷ sẽ làm bạn mất lòng tin nhanh chóng.</li>
      <li><strong>Thách thức:</strong> Khó buông bỏ — kể cả khi mối quan hệ đã kết thúc, bạn vẫn giữ những vết thương và tình cảm cũ lâu hơn cần thiết.</li>
    </ul>`,
    baiHocThuThach: `<ul>
      <li><strong>Bài học về buông bỏ:</strong> Phiên bản mới nhất của bạn không thể ra đời nếu bạn vẫn đang cầm giữ mọi thứ cũ. Buông bỏ là hành động can đảm nhất của số 9.</li>
      <li><strong>Thử thách về ranh giới:</strong> Lòng trắc ẩn không có nghĩa là chịu đựng mọi thứ. Học cách phân biệt giữa giúp đỡ thực sự và hy sinh bản thân vô ích.</li>
      <li><strong>Thử thách về vật chất:</strong> Xu hướng không quan tâm đến tài chính có thể tạo ra bất ổn thực tế. Chăm sóc nhu cầu vật chất của mình cũng là hành động yêu thương bản thân.</li>
    </ul>`,
    banBeGiaDinh: `<ul>
      <li><strong>Trong tình bạn:</strong> Bạn bè đến từ mọi tầng lớp xã hội — bạn nhìn thấy giá trị trong tất cả mọi người. Nhưng hãy chú ý không để bị lợi dụng lòng tốt.</li>
      <li><strong>Trong gia đình:</strong> Bạn yêu thương gia đình sâu sắc nhưng đôi khi cảm thấy không ai thực sự hiểu thế giới bên trong của bạn. Hãy cố gắng biểu đạt thay vì giữ im lặng.</li>
    </ul>`,
    duLichSoThich: `<ul>
      <li><strong>Phong cách du lịch:</strong> Du lịch có mục đích — volunteering trip, hành hương tâm linh, khám phá văn hóa bản địa. Bạn muốn mỗi chuyến đi để lại dấu ấn tốt đẹp.</li>
      <li><strong>Sở thích:</strong> Thiền định, yoga, tình nguyện, viết lách suy ngẫm, âm nhạc trị liệu, đọc sách triết học và tâm linh.</li>
      <li><strong>Tái tạo năng lượng:</strong> Thiên nhiên và sự im lặng — đặc biệt là biển, núi hoặc những nơi có năng lượng tĩnh lặng. Thời gian một mình để tái kết nối với bản thân.</li>
    </ul>`,
    ngheNghiep: `<ul>
      <li><strong>Định hướng phù hợp:</strong> Công việc phục vụ nhân loại ở quy mô lớn — nghệ thuật, nhân đạo, giáo dục, y tế, tâm linh, môi trường.</li>
      <li><strong>Công việc lý tưởng:</strong> Nhà văn, nghệ sĩ, nhà hoạt động xã hội, bác sĩ tình nguyện, nhà tâm lý học, giáo viên truyền cảm hứng, nhà lãnh đạo tổ chức phi lợi nhuận.</li>
      <li><strong>Môi trường làm việc:</strong> Cần ý nghĩa thực sự — không chỉ là tiền lương. Sẽ kiệt sức nhanh chóng trong môi trường thiếu mục đích và giá trị nhân văn.</li>
    </ul>`,
  },

  11: {
    nguoiNoiTieng: [
      { name: 'Barack Obama', field: 'Chính trị', note: 'Tổng thống Mỹ mang thông điệp hy vọng và thay đổi đến hàng triệu người' },
      { name: 'Edgar Allan Poe', field: 'Văn học', note: 'Nhà văn thiên tài với trực giác sâu thẳm và khả năng khai thác tâm linh con người' },
      { name: 'Mozart', field: 'Âm nhạc', note: 'Thiên tài âm nhạc có khả năng kênh hóa vũ trụ qua nốt nhạc — biểu tượng tối thượng của số 11' },
      { name: 'Coco Chanel', field: 'Thiết kế thời trang', note: 'Nhà thiết kế cách mạng với trực giác thẩm mỹ vượt trước thời đại nhiều thập kỷ' },
      { name: 'Harry Houdini', field: 'Nghệ thuật biểu diễn', note: 'Ảo thuật gia huyền thoại — người truyền cảm hứng và kỳ diệu hóa cuộc sống thường nhật' },
    ],
    tuongThich: {
      tot: [2, 6, 8],
      khong: [1, 5, 9],
      moTaTot: 'Số 2 (nền tảng của 11) chia sẻ sự nhạy cảm và hài hòa. Số 6 cung cấp sự ổn định và tình yêu thương. Số 8 giúp số 11 hiện thực hóa tầm nhìn cao cả bằng năng lực thực thi.',
      moTaKhong: 'Số 1 quá cứng nhắc và thực tế có thể làm số 11 cảm thấy không được hiểu. Số 5 thiếu chiều sâu cần thiết. Số 9 cũng tầm nhìn lớn — nhưng đôi khi cả hai đều thiếu người hiện thực hóa.',
      chiTiet: `<ul>
        <li><strong>Số 2:</strong> Số 11 là bậc cao của số 2 — khi gặp nhau, họ hiểu nhau ở chiều sâu cảm xúc mà ít người đạt được.</li>
        <li><strong>Số 6:</strong> Số 6 nuôi dưỡng, số 11 truyền cảm hứng — cân bằng giữa thực tế và lý tưởng.</li>
        <li><strong>Số 8:</strong> Số 11 có tầm nhìn, số 8 có sức mạnh thực thi — cặp đôi có thể tạo ra tác động thực sự lên thế giới.</li>
      </ul>`,
    },
    tinhDuyen: `<ul>
      <li><strong>Phong cách yêu:</strong> Bạn yêu bằng cả linh hồn — cường độ và chiều sâu tình cảm không phải ai cũng có thể chịu đựng hoặc xứng đáng nhận. Bạn cần người thực sự đặc biệt.</li>
      <li><strong>Điều bạn cần:</strong> Người yêu có chiều sâu tâm hồn tương đồng, hiểu và trân trọng bản chất nhạy cảm và trực giác của bạn.</li>
      <li><strong>Thách thức:</strong> Lý tưởng hóa quá mức và dễ vỡ mộng. Học cách yêu thương người thực sự đứng trước mặt mình, không phải phiên bản hoàn hảo bạn tưởng tượng.</li>
    </ul>`,
    baiHocThuThach: `<ul>
      <li><strong>Bài học về hiện thực hóa:</strong> Tầm nhìn và trực giác chỉ có giá trị khi được đưa vào hành động. Học cách cầu nối giữa thế giới tinh thần và thế giới vật chất.</li>
      <li><strong>Thử thách về lo lắng:</strong> Nhạy cảm cao đi kèm với xu hướng lo âu và căng thẳng. Phát triển các thực hành làm dịu hệ thần kinh là cần thiết.</li>
      <li><strong>Thử thách về uy quyền:</strong> Học cách tin vào tầm nhìn của mình và chia sẻ nó mà không cần đợi sự xác nhận của người khác.</li>
    </ul>`,
    banBeGiaDinh: `<ul>
      <li><strong>Trong tình bạn:</strong> Người bạn đồng hành lý tưởng cho những cuộc trò chuyện chiều sâu. Nhưng cần học cách cũng thoải mái trong những tương tác nhẹ nhàng, không sâu sắc.</li>
      <li><strong>Trong gia đình:</strong> Thường là người "khác biệt" trong gia đình — mọi người yêu quý nhưng chưa hẳn hiểu. Hãy kiên nhẫn giải thích thế giới bên trong của bạn.</li>
    </ul>`,
    duLichSoThich: `<ul>
      <li><strong>Sở thích:</strong> Thiền định, nghiên cứu tâm linh, sáng tác nghệ thuật theo trực giác, âm nhạc chữa lành, tiếp xúc với thiên nhiên và các vùng năng lượng đặc biệt.</li>
      <li><strong>Phong cách du lịch:</strong> Các điểm đến có năng lượng tâm linh mạnh — Ấn Độ, Peru, Ai Cập cổ đại, các vùng núi thiêng. Bạn du lịch để tìm kiếm ý nghĩa, không chỉ nghỉ dưỡng.</li>
    </ul>`,
    ngheNghiep: `<ul>
      <li><strong>Định hướng phù hợp:</strong> Truyền cảm hứng và dẫn dắt thông qua nghệ thuật, tâm linh, giáo dục hoặc tư vấn — nơi tầm nhìn và trực giác của bạn tạo ra giá trị thực.</li>
      <li><strong>Công việc lý tưởng:</strong> Nhà trị liệu, life coach, nhạc sĩ, diễn thuyết truyền cảm hứng, nghệ sĩ, nhà thơ, nhà lãnh đạo tâm linh, tư vấn chiến lược.</li>
    </ul>`,
  },

  22: {
    nguoiNoiTieng: [
      { name: 'Bill Gates', field: 'Công nghệ / Từ thiện', note: 'Xây dựng Microsoft từ garage, sau đó tạo ra tổ chức từ thiện lớn nhất thế giới' },
      { name: 'Dalai Lama XIV', field: 'Tâm linh', note: 'Người xây dựng cầu nối giữa Đông và Tây, giữa tinh thần và thực tế suốt nhiều thập kỷ' },
      { name: 'Sigmund Freud', field: 'Tâm lý học', note: 'Người xây dựng nền tâm lý học hiện đại — tư duy hệ thống ở quy mô toàn nhân loại' },
      { name: 'Richard Nixon', field: 'Chính trị', note: 'Tổng thống Mỹ với tầm nhìn địa chính trị vĩ đại và khả năng xây dựng thể chế phức tạp' },
    ],
    tuongThich: {
      tot: [4, 6, 8],
      khong: [3, 5, 9],
      moTaTot: 'Số 4 (nền tảng của 22) chia sẻ kỷ luật và tính thực tế. Số 6 mang sự ấm áp cần thiết. Số 8 chia sẻ tham vọng quy mô lớn và sức mạnh thực thi.',
      moTaKhong: 'Số 3 thiếu chiều sâu và kỷ luật cần thiết. Số 5 quá tự do không phù hợp mục tiêu dài hạn. Số 9 cùng tầm nhìn nhân loại nhưng thiếu tính thực tế.',
      chiTiet: `<ul>
        <li><strong>Số 4:</strong> Số 22 là bậc cao của số 4 — cùng xây dựng, cùng kỷ luật, nhưng ở quy mô khác nhau. Khi gặp nhau, họ tạo nền tảng cực kỳ vững chắc.</li>
        <li><strong>Số 8:</strong> Cả hai đều muốn tạo ra đế chế — nhưng số 22 ở quy mô phục vụ nhân loại, không chỉ tích lũy cá nhân.</li>
      </ul>`,
    },
    tinhDuyen: `<ul>
      <li><strong>Phong cách yêu:</strong> Nghiêm túc và cam kết — bạn không quan tâm tình yêu thoáng qua. Khi đã yêu, bạn đầu tư toàn bộ và kỳ vọng người kia cũng tương tự.</li>
      <li><strong>Điều bạn cần:</strong> Người đồng hành chia sẻ tầm nhìn lớn và không sợ hãi trước sức mạnh và tham vọng của bạn.</li>
      <li><strong>Thách thức:</strong> Tầm nhìn quá lớn đôi khi khiến bạn quên những điều nhỏ bé quan trọng — một bữa tối cùng nhau, một cuộc trò chuyện không có mục tiêu.</li>
    </ul>`,
    baiHocThuThach: `<ul>
      <li><strong>Bài học về khiêm tốn:</strong> Tầm nhìn lớn không có nghĩa là bạn đúng về mọi thứ. Học cách lắng nghe người khác dù bạn tin vào con đường của mình.</li>
      <li><strong>Thử thách về sức khỏe:</strong> Tham vọng phi thường dễ dẫn đến kiệt sức. Cơ thể là phương tiện — cần được chăm sóc để hoàn thành sứ mệnh.</li>
    </ul>`,
    banBeGiaDinh: `<ul>
      <li><strong>Trong tình bạn và gia đình:</strong> Bạn là người đáng tin cậy tuyệt đối — nhưng đôi khi quá bận rộn với "sứ mệnh" đến mức bỏ lỡ những khoảnh khắc bình thường quý giá.</li>
    </ul>`,
    duLichSoThich: `<ul>
      <li><strong>Sở thích:</strong> Kiến trúc, lịch sử văn minh, địa chính trị, xây dựng hệ thống quy mô lớn, nghiên cứu các mô hình xã hội tiên tiến.</li>
    </ul>`,
    ngheNghiep: `<ul>
      <li><strong>Công việc lý tưởng:</strong> Lãnh đạo tổ chức quốc tế, kiến trúc sư đô thị, nhà lập pháp, người sáng lập phong trào xã hội quy mô lớn, tỷ phú từ thiện.</li>
      <li><strong>Lưu ý:</strong> Số 22 cần tìm được dự án xứng tầm — khi chưa tìm thấy, dễ rơi vào trạng thái bất an và tích lũy không có mục đích rõ ràng.</li>
    </ul>`,
  },

  33: {
    nguoiNoiTieng: [
      { name: 'Meryl Streep', field: 'Điện ảnh', note: 'Diễn viên vĩ đại nhất thế giới — người chữa lành qua nghệ thuật chuyện kể' },
      { name: 'Francis of Assisi', field: 'Tôn giáo / Nhân đạo', note: 'Thánh Francisco — biểu tượng của lòng từ bi và phục vụ vô điều kiện tất cả chúng sinh' },
      { name: 'Stephen King', field: 'Văn học', note: 'Nhà văn huyền thoại người chữa lành nỗi sợ của nhân loại bằng cách đặt tên cho chúng' },
      { name: 'Albert Schweitzer', field: 'Y tế / Nhân đạo', note: 'Bác sĩ và nhạc sĩ — người hy sinh danh vọng để phục vụ người nghèo ở Châu Phi' },
    ],
    tuongThich: {
      tot: [6, 9, 11],
      khong: [1, 5, 8],
      moTaTot: 'Số 6 (nền tảng của 33) chia sẻ tình yêu thương và nuôi dưỡng. Số 9 cùng tầm nhìn nhân văn toàn cầu. Số 11 cùng chiều sâu tâm linh và trực giác cao.',
      moTaKhong: 'Số 1 quá tự ngã và thực dụng. Số 5 thiếu cam kết và chiều sâu. Số 8 ưu tiên vật chất khó hòa hợp với giá trị cho đi vô điều kiện của số 33.',
      chiTiet: `<ul>
        <li><strong>Số 6:</strong> Số 33 là bậc thăng hoa của số 6 — khi gặp nhau, tình yêu thương đạt đến chiều sâu hiếm thấy.</li>
        <li><strong>Số 9:</strong> Cả hai đều yêu thương ở quy mô lớn hơn bản thân — đây là sự cộng hưởng mạnh mẽ nhất.</li>
      </ul>`,
    },
    tinhDuyen: `<ul>
      <li><strong>Phong cách yêu:</strong> Yêu thương vô điều kiện ở mức độ mà rất ít người có thể nhận và hiểu. Bạn thấy điều tốt nhất trong người yêu và chữa lành họ bằng tình yêu — đây là quà tặng và cũng là gánh nặng.</li>
      <li><strong>Điều bạn cần:</strong> Người đủ trưởng thành để nhận tình yêu của bạn mà không cảm thấy áp lực phải hoàn hảo. Ai đó yêu thương lại bạn với sự chân thật.</li>
      <li><strong>Thách thức:</strong> Bạn đôi khi yêu tiềm năng của người kia hơn là con người thực tế của họ. Học cách yêu thương có ranh giới lành mạnh.</li>
    </ul>`,
    baiHocThuThach: `<ul>
      <li><strong>Bài học thiêng liêng nhất:</strong> Không phải mọi người đều cần được cứu bởi bạn. Đôi khi tình yêu thương nhất là cho phép người khác đi con đường riêng của họ.</li>
      <li><strong>Thử thách về ranh giới:</strong> Lòng từ bi không có ranh giới sẽ dẫn đến kiệt sức và mất bản thân. Ranh giới không phải là hàng rào — đó là cách bảo tồn khả năng yêu thương bền vững.</li>
    </ul>`,
    banBeGiaDinh: `<ul>
      <li><strong>Trong mọi mối quan hệ:</strong> Bạn là người chữa lành — ai đến với bạn đều ra đi tốt hơn. Nhưng hãy nhớ: bạn cũng cần được chữa lành. Hãy tìm những người có thể làm điều đó cho bạn.</li>
    </ul>`,
    duLichSoThich: `<ul>
      <li><strong>Sở thích:</strong> Tất cả những gì chữa lành và kết nối — thiền định, yoga, nghệ thuật, âm nhạc, tình nguyện, dạy học, viết lách về tình thương và sự trưởng thành.</li>
    </ul>`,
    ngheNghiep: `<ul>
      <li><strong>Công việc lý tưởng:</strong> Thầy giáo tâm linh, nhà trị liệu chữa lành, nghệ sĩ biểu đạt tình yêu thương vũ trụ, nhà lãnh đạo tôn giáo hoặc cộng đồng, nhà từ thiện.</li>
      <li><strong>Lưu ý:</strong> Số 33 cần tìm được sứ mệnh phù hợp — khi chưa có, dễ trở nên kiệt sức và mất phương hướng vì cảm giác phải phục vụ mà không biết phục vụ điều gì.</li>
    </ul>`,
  },

};

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

}; // end lifeCycle

// ════════════════════════════════════════════════════════════════════════════
// CHỈ SỐ SỨ MỆNH (DESTINY NUMBER) — Phân tích sâu theo PDF tham khảo
// Gọi: NT.destiny[num](name, d)
// ════════════════════════════════════════════════════════════════════════════
NarrativeTemplates.destiny = {

  1: (name) => `
<p class="nar">Trong Thần số học, chỉ số sứ mệnh giúp bạn biết cách đạt được mục tiêu của bạn, lớn và nhỏ. <strong>${name}</strong>, bạn mang Sứ mệnh số <strong>1</strong> — sứ mệnh của người tiên phong, người lãnh đạo và người đặt ra những con đường mới mà người khác sẽ đi theo.</p>

<p class="nar">Sứ mệnh của bạn trong cuộc đời này là <strong>khởi xướng, lãnh đạo và dẫn dắt</strong>. Bạn đạt được mục tiêu không phải bằng cách chờ đợi hay nương tựa — mà bằng cách tự mình đứng dậy và hành động, ngay cả khi không có ai đi cùng.</p>

<div class="lp-section-title">Sứ mệnh số 1 có ý nghĩa gì?</div>
<p class="nar">Tự lập, tiên phong, lãnh đạo, dũng cảm, sáng tạo...</p>
<p class="nar">Sứ mệnh của <strong>${name}</strong> trong cuộc đời này là <em>trở thành người đứng đầu</em> — không nhất thiết là quản lý hay giám đốc, mà là người đầu tiên dám nghĩ, dám làm một điều gì đó mới. Bạn được giao sứ mệnh mở ra những lối đi chưa có dấu chân người trước. Bạn sinh ra để <strong>dẫn dắt, không phải đi theo</strong>.</p>
<p class="nar">Bạn thường làm tốt nhất khi được hoạt động độc lập và có quyền tự quyết. Bạn không thích bị quản lý vi mô hay bị kiểm soát quá chặt — bởi vì bản năng và trực giác của bạn thường dẫn đến kết quả tốt hơn khi bạn được tự do hành động theo cách riêng của mình.</p>
<p class="nar">Bạn phải trả giá vì bản chất này. Trong công ty bạn làm việc, bạn sẽ gặp khó khăn nếu thượng cấp quá bảo thủ hay tầm nhìn hạn hẹp. Bạn sẽ cảm thấy bị kìm hãm và đó là lý do tại sao nhiều người mang sứ mệnh số 1 thường tự mình khởi nghiệp hoặc tìm đến những môi trường đề cao sự sáng tạo và tự chủ.</p>

<div class="lp-section-title">Kỹ năng lãnh đạo của bạn</div>
<p class="nar"><strong>${name}</strong>, bạn là một người độc lập thiên bẩm. Bạn có thể hoàn thành hầu hết mọi nhiệm vụ trong bất kỳ lĩnh vực nào bạn quyết tâm theo đuổi — và thường làm tốt hơn mức trung bình. Nhưng điểm mạnh lớn nhất là bạn có khả năng truyền niềm tin vào người khác. Khi bạn tin vào điều gì và hành động từ sự tin đó, người xung quanh tự nhiên bị cuốn theo.</p>
<p class="nar">Bạn cũng có xu hướng tự đặt ra tiêu chuẩn cao và hoàn thành công việc một cách chuyên nghiệp. Sự chuyên nghiệp và tự tin này khiến người khác tin tưởng giao phó trách nhiệm cho bạn, ngay cả khi bạn chưa chủ động xin.</p>

<div class="lp-section-title">Điểm cần phát triển của bạn</div>
<p class="nar">Thách thức lớn nhất của <strong>${name}</strong> là học cách <strong>hợp tác mà không mất đi bản sắc</strong>. Cái tôi mạnh là vũ khí — nhưng khi không được kiểm soát, nó có thể khiến bạn trở nên xa cách, cứng nhắc, và đánh mất những người đồng hành tốt.</p>
<p class="nar">Hãy nhớ rằng: lãnh đạo giỏi nhất không phải là người làm mọi thứ một mình — mà là người biết cách tập hợp và truyền cảm hứng cho những người giỏi nhất xung quanh mình để cùng đạt được điều vĩ đại hơn bất kỳ cá nhân nào có thể làm được một mình.</p>

<div class="insight-box">📌 <strong>Tóm lại:</strong> ${name} đến thế giới này để mở đường. Mỗi lần bạn dám đi trước khi chưa ai đi, bạn đang sống đúng sứ mệnh của mình. Hãy dẫn dắt — không phải vì muốn kiểm soát, mà vì bạn thực sự thấy con đường rõ hơn người khác.</div>`,

  2: (name) => `
<p class="nar">Trong Thần số học, chỉ số sứ mệnh giúp bạn biết cách đạt được mục tiêu của bạn, lớn và nhỏ. <strong>${name}</strong>, bạn mang Sứ mệnh số <strong>2</strong> — sứ mệnh của người kiến tạo hòa hợp, người kết nối trái tim, người biến sự khác biệt thành sức mạnh.</p>

<p class="nar">Sứ mệnh khác với số đường đời. Sứ mệnh số 2 tập trung nhiều hơn vào <strong>cách bạn đạt được điều mình muốn</strong>: thông qua hợp tác, ngoại giao, sự nhạy cảm tinh tế và khả năng làm cho người khác cảm thấy được thấu hiểu sâu sắc.</p>

<div class="lp-section-title">Sứ mệnh số 2 có ý nghĩa gì?</div>
<p class="nar">Hợp tác, ngoại giao, chữa lành, kết nối, hòa giải...</p>
<p class="nar">Sứ mệnh của <strong>${name}</strong> là <em>xây dựng những cây cầu</em> — giữa người với người, giữa ý tưởng với hành động, giữa xung đột và hòa giải. Bạn không phải người ồn ào hay người thích đứng trên sân khấu — nhưng những gì bạn làm ở hậu trường thường là thứ quyết định xem sân khấu có đứng vững hay không.</p>
<p class="nar">Bạn có một món quà hiếm có: <strong>khả năng làm cho người khác cảm thấy được lắng nghe và trân trọng</strong>. Trong một thế giới đầy người muốn nói nhưng ít người muốn nghe, đây là năng lực có giá trị vô song. Nhiều cuộc đàm phán khó khăn, nhiều mối quan hệ rạn nứt, nhiều xung đột dai dẳng — tất cả có thể được hóa giải bởi một người có trái tim và kỹ năng của số 2.</p>

<div class="lp-section-title">Kỹ năng hợp tác và kết nối của bạn</div>
<p class="nar"><strong>${name}</strong>, bạn đạt được mục tiêu thông qua con người — không phải thay thế con người. Khi bạn xây dựng được lòng tin và tạo ra môi trường an toàn để người khác chia sẻ thật lòng, bạn có thể ảnh hưởng đến quyết định, định hướng và hành động của cả một tập thể mà không cần dùng đến quyền lực hay sức ép.</p>
<p class="nar">Trong sự nghiệp, bạn phát huy tốt nhất ở những vai trò đòi hỏi <strong>sự hợp tác, tư vấn, điều phối và lắng nghe</strong>: tư vấn, trị liệu tâm lý, hòa giải, quản lý nhân sự, giáo dục, ngoại giao, hoặc bất kỳ vai trò nào đặt con người lên trên số liệu.</p>

<div class="lp-section-title">Điểm cần phát triển của bạn</div>
<p class="nar">Thách thức của <strong>${name}</strong> là học cách <strong>đặt ranh giới lành mạnh</strong> mà không cảm thấy có lỗi. Bạn có xu hướng đặt nhu cầu của người khác lên trên nhu cầu của chính mình — và điều đó, dù xuất phát từ tình yêu thương, có thể dẫn đến kiệt sức, oán giận thầm lặng và mất đi chính mình.</p>
<p class="nar">Hãy nhớ: bạn không thể rót từ một cái bình rỗng. Chăm sóc bản thân không phải ích kỷ — đó là nền tảng để bạn tiếp tục chăm sóc người khác.</p>

<div class="insight-box">📌 <strong>Tóm lại:</strong> ${name} đến thế giới này để tạo ra sự hài hòa. Bạn không cần hét to để được nghe — khi bạn lắng nghe đúng cách, cả thế giới sẽ im lặng để nghe bạn nói. Đó là sức mạnh thực sự của sứ mệnh số 2.</div>`,

  3: (name) => `
<p class="nar">Trong Thần số học, chỉ số sứ mệnh giúp bạn biết cách đạt được mục tiêu của bạn, lớn và nhỏ. <strong>${name}</strong>, bạn mang Sứ mệnh số <strong>3</strong> — sứ mệnh của người truyền cảm hứng, người kể chuyện, người mang ánh sáng đến cho thế giới qua nghệ thuật, ngôn từ và sự biểu đạt.</p>

<div class="lp-section-title">Sứ mệnh số 3 có ý nghĩa gì?</div>
<p class="nar">Biểu đạt, sáng tạo, truyền cảm hứng, kết nối, niềm vui...</p>
<p class="nar">Sứ mệnh của <strong>${name}</strong> là <em>dùng tiếng nói, nghệ thuật và sự sáng tạo để nâng đỡ tinh thần người khác</em>. Bạn được trao khả năng biến những điều bình thường thành phi thường — một câu chuyện kể lại đúng cách có thể thay đổi góc nhìn, một bài biểu diễn chân thật có thể chữa lành vết thương, một lời nói đúng lúc có thể cứu vớt một cuộc đời.</p>
<p class="nar">Bạn đạt được mục tiêu thông qua <strong>kết nối cảm xúc</strong>. Trong khi người khác dùng số liệu và logic để thuyết phục, bạn dùng câu chuyện và cảm xúc — và thường hiệu quả hơn rất nhiều. Không ai quên người đã khiến họ cảm thấy điều gì đó sâu sắc.</p>

<div class="lp-section-title">Tài năng biểu đạt của bạn</div>
<p class="nar"><strong>${name}</strong> có khả năng giao tiếp và biểu đạt thuộc hàng xuất sắc nhất trong 9 con số. Bạn có thể làm cho bất kỳ chủ đề nào trở nên thú vị, dễ hiểu và đáng nhớ. Bạn kể chuyện giỏi — dù bằng lời nói, văn viết, âm nhạc, hội họa hay bất kỳ hình thức nghệ thuật nào bạn chọn.</p>
<p class="nar">Trong sự nghiệp, bạn phát huy tốt nhất ở những lĩnh vực <strong>sáng tạo và truyền thông</strong>: viết lách, diễn xuất, giảng dạy, marketing, thiết kế, âm nhạc, giải trí, hay bất kỳ công việc nào đặt khả năng biểu đạt lên hàng đầu.</p>

<div class="lp-section-title">Điểm cần phát triển của bạn</div>
{{ ... }}
<p class="nar">Thách thức lớn nhất của <strong>${name}</strong> là <strong>kỷ luật và hoàn thành</strong>. Bạn có rất nhiều ý tưởng tuyệt vời — nhưng không phải tất cả đều được đưa đến hồi kết. Bạn dễ bị phân tán bởi cái gì đó mới mẻ và thú vị hơn, trong khi dự án cũ vẫn còn dang dở.</p>
<p class="nar">Hãy học cách <strong>chọn một và đi đến cùng</strong> trước khi bắt đầu cái tiếp theo. Một tác phẩm hoàn chỉnh luôn có giá trị hơn mười ý tưởng còn đang phác thảo.</p>

<div class="insight-box">📌 <strong>Tóm lại:</strong> ${name} đến thế giới này để chia sẻ. Giọng nói, ngòi bút, nghệ thuật của bạn không phải chỉ là tài năng — chúng là sứ mệnh. Mỗi lần bạn tạo ra và chia sẻ điều gì đó chân thật từ trái tim, bạn đang hoàn thành điều vũ trụ giao cho bạn.</div>`,

  4: (name) => `
<p class="nar">Trong Thần số học, chỉ số sứ mệnh giúp bạn biết cách đạt được mục tiêu của bạn, lớn và nhỏ. <strong>${name}</strong>, bạn mang Sứ mệnh số <strong>4</strong> — sứ mệnh của người xây dựng, người tổ chức và người tạo ra những nền tảng vững chắc để những điều tốt đẹp có thể đứng vững theo thời gian.</p>

<p class="nar">Sứ mệnh khác với số đường đời. Chỉ số sứ mệnh của bạn cho biết <em>cách</em> bạn đạt được mục tiêu trong cuộc sống. Theo thần số học, số đường đời của bạn cho bạn biết bạn đến cuộc đời này để làm gì, so sứ mệnh của bạn mô tả sẽ giúp bạn tiếp tục thực hiện nó.</p>

<div class="lp-section-title">Sứ mệnh số 4 có ý nghĩa gì?</div>
<p class="nar">Làm việc chăm chỉ, tận tâm, trung thành, trung thực, đáng tin cậy...</p>
<p class="nar">Sứ mệnh của <strong>${name}</strong> trong cuộc đời này là xây dựng một thứ gì đó có tính tổ chức cao và có giá trị lâu dài. Trong công ty bạn sẽ là người xây dựng nền tảng, quy trình. Bạn sinh ra là để quản lý và thiết lập trật tự. Hãy tạo dựng nền tảng và phát triển mọi thứ từ đó.</p>
<p class="nar">Bạn có những đặc điểm tuyệt vời, nhưng thật không may là bạn cũng có một số tiêu cực mạnh. Trừ khi bạn có những chỉ số khác có thể bù trừ lại tính cả nhắc của bạn. (Ví dụ bạn cần cân bằng nó với năng lực tự nhiên số 3 chẳng hạn — hãy đọc thêm về năng lực tự nhiên và chỉ số thái độ, số nhân cách của bạn để xem chúng bù trừ hay thêm vào cho điểm tiêu cực của số này của bạn.)</p>
<p class="nar">Mặt tối của bạn phải trả giá bằng những phẩm chất tốt hơn của bạn, sự chăm chỉ đặc biệt là lớn. Trong khi bạn làm việc chăm chỉ bạn thường cứng nhắc và buồn tẻ khi nào đến niềm vui. Bạn tận tâm và đáng tin cậy trong công việc, nhưng đó chỉ là công việc; bạn quả thiếu sức tưởng tượng để làm cho nó trở nên then thứ vị hơn.</p>
<p class="nar">Bạn thường giỏi về làm cho mọi thứ và thường không biết cách pha trò. Thời gian đối với bạn rất có giá trị và bạn chi lấp đầy nó bằng những thứ có lợi cho bạn.</p>
<p class="nar">Bởi vì điều này nên bạn có thể sẽ bị độc thân rất lâu. Điều này không phải là điều đáng buồn với bản của mình, bởi vì khi bạn thích ở mình thì bạn sống cuộc sống của số 4 quan trọng hơn, như công việc và sở thích, thực tế hơn khi ở một mình thì tốt hơn khi ở mọi nơi tốt hơn, và bạn sẽ mang lại lợi ích tốt hơn nhờ theo đó.</p>
<p class="nar">Thêm vào đó, thật khó để tìm một người có tất cả những đặc điểm mà bạn đánh giá cao. Bạn cần một người không ngồi đó, nói chuyện, làm phí thời gian. Và bạn sẽ luôn trung thành nếu quyết định hợp tác.</p>
<p class="nar">Bạn cũng sẽ trung thành với đồng nghiệp hoặc nhân viên của mình. Bạn sẽ là tài sản quý báu cho bất kỳ công ty nào khi bạn cải thiện, tổ chức lại mọi hệ thống mà bạn thấy. Bạn sửa chữa những gì bị hỏng và dùng. Bạn ủy quyền tốt và biết công việc phải đảm nhận - bạn sẽ trở thành một nhà quản lý xuất sắc.</p>

<div class="lp-section-title">Kỹ năng tổ chức của bạn</div>
<p class="nar">Bạn là một thuật sĩ - đó là lời giải thích duy nhất cho việc bạn luôn tổ chức mọi thứ một cách có hệ thống. Bạn là một nhà quản lý bậc thầy, thực hiện bất kỳ nhiệm vụ nào. Bạn có hệ thống với mọi thứ, kể cả công việc. Điều này chắc chắn sẽ giúp bạn về mặt tài chính và thúc đẩy sự phát triển của gia đình.</p>
<p class="nar">Bởi vì bạn có những phẩm chất lý này, bạn sẽ phù hợp với những vị trí trị như vây quanh đàm nhận và nắm quyền là điều hoàn hảo cho bạn. Các kỹ năng của bạn sẽ được sử dụng tốt. Phương pháp của bạn luôn hiệu quả và sự nhiệt tình của bạn dành cho những việc thật đáng ngưỡng mộ. Nếu cuối cùng bạn chọn đi theo con đường này, các mối quan hệ sẽ trở nên dễ dàng với bạn, khi bạn đưa ra các ý tưởng để giữ cho mọi thứ diễn ra suôn sẻ. Mặc dù vậy, hãy cẩn thận đừng quá tập trung vào kết quả ngắn hạn. Sự khéo kéo mà bạn gắng gỗi học hỏi và thể hiện ra ngoài có thể không phải lúc nào cũng làm bạn thỏa mãn nhưng hãy cứ sử dụng nó.</p>

<div class="lp-section-title">Bạn cứng nhắc</div>
<p class="nar">Tất cả phẩm chất tốt của sứ mệnh số 4 đều đi kèm với một cái giá. Bạn sắp xếp quá chặt chẽ, lời nến cuộc sống của bạn có thể trở nên cứng nhắc. Bạn quá tập trung vào mục tiêu, trách nhiệm của mình và hoàn thành công việc một cách kịp thời, vì vậy vui vẻ là một thứ thách với bạn.</p>
<p class="nar">Bạn không có thời gian để buôn chuyện hoặc tán gẫu với mọi người. Bạn ít để cho tình yêu hoặc các so này cản đường. Sự thiếu hoạt của các khiến bạn có vẻ buồn tẻ và đó không phải là điều đáng mong đợi ở tính cách của một người.</p>
<p class="nar">Điều bạn cần, là học cách buông bỏ. Hãy để người yêu hoặc bạn đời của bạn lên kế hoạch cho một buổi tối vui nào đó mà bạn không có bất kỳ lịch trình đã định. Hãy để nhóm làm việc dưới quyền bạn thử nghiệm trong công việc và không bám vào kế hoạch của bạn trong một ngày. Hệ thống của bạn sẽ vẫn ở đó khi bạn quay lại.</p>

<div class="lp-section-title">Trung thực</div>
<p class="nar">Điều tuyệt vời ở bạn là bạn trung thực một cách mạnh mẽ. Bạn luôn nói cho mọi người biết điều gì đang thực sự xảy ra và không khoan nhượng (nên đôi khi gặp tình huống tế nhị hãy sử dụng khéo léo điều này). Bạn sẽ nói thật với bạn bè và gia đình của bạn tại sao mọi thứ đang diễn ra ra. Bạn chỉ tập trung vào con đường sự nghiệp hoặc cuộc sống gia đình định, bạn không có thời gian mà mọi người đều dành nhiều thời gian hơn đến những việc quan trọng.</p>
<p class="nar">Nhưng niềm vui là điều quan trọng trong cuộc sống. Cơ hội để vui chơi là điều cần thiết, vì vậy hãy để bản thân thỉnh thoảng được tự do. Có thể sự trung thực của bạn sẽ có ích khi đối mặt với những lời bàm tiểu, bạn sẽ cho họ biết ý kiến của mình và đối khi sự thật rất khó. Ngay cả khi mọi người không thích những gì bạn bản nói, bạn vẫn trung thành với họ nên họ sẽ gắn bó với bạn bất chấp.</p>
<p class="nar">Những người thân yêu của bạn sẽ cảm ơn bạn vì đã thành thật về những gì bạn thích và không thích. Họ sẽ có đủ kiên nhẫn để đối phó với mặt khó chịu của bạn, bởi vì bạn thành thật về lý do tại sao bạn là như vậy.</p>
<p class="nar">Đó không phải là lỗi của bạn, bạn có các tiêu chuẩn và nhận thức chung để biết điều quan trọng. Đó chỉ là con đường và một trong những thứ ngăn bạn sẽ phải đối mặt. Bạn sẽ phải trả lời và học cách đối mặt với nó trong suốt cuộc đời của bạn, bất kể khi bạn đang làm điều gì.</p>

<div class="insight-box">📌 <strong>Tóm lại:</strong> ${name} đến thế giới này để xây dựng. Không phải để mơ mộng — mà để hiện thực hóa. Mỗi hệ thống bạn tạo ra, mỗi nền tảng bạn củng cố, mỗi lần bạn hoàn thành điều mình đã hứa — đó là sứ mệnh số 4 đang được thực thi ở trình độ cao nhất.</div>`,

  5: (name) => `
<p class="nar">Trong Thần số học, chỉ số sứ mệnh giúp bạn biết cách đạt được mục tiêu của bạn, lớn và nhỏ. <strong>${name}</strong>, bạn mang Sứ mệnh số <strong>5</strong> — sứ mệnh của người trải nghiệm, người truyền bá tự do, người kết nối thế giới qua những chuyển đổi không ngừng và sự đa dạng phong phú.</p>

<div class="lp-section-title">Sứ mệnh số 5 có ý nghĩa gì?</div>
<p class="nar">Tự do, thay đổi, trải nghiệm, linh hoạt, kết nối...</p>
<p class="nar">Sứ mệnh của <strong>${name}</strong> là <em>sống đầy đủ tất cả những gì cuộc đời có thể mang lại</em> — và truyền lại những trải nghiệm đó cho người khác như những bài học quý giá. Bạn không được sinh ra để sống một cuộc đời cố định, đơn điệu hay bị giam cầm trong một khuôn mẫu duy nhất.</p>
<p class="nar">Bạn đạt được mục tiêu thông qua <strong>sự linh hoạt và thích nghi</strong>. Trong khi người khác cần ổn định để tiến về phía trước, bạn cần sự chuyển động. Bạn học được nhiều nhất từ trải nghiệm trực tiếp, từ những cuộc gặp gỡ bất ngờ, từ những con đường không có trong bản đồ.</p>

<div class="lp-section-title">Tài năng kết nối và truyền bá của bạn</div>
<p class="nar"><strong>${name}</strong> có khả năng giao tiếp và kết nối với mọi loại người — từ những người với hoàn cảnh và văn hóa hoàn toàn khác nhau. Bạn nói được "ngôn ngữ" của nhiều nhóm khác nhau, và khả năng này giúp bạn di chuyển linh hoạt trong bất kỳ môi trường xã hội nào.</p>
<p class="nar">Trong sự nghiệp, bạn phát huy tốt nhất trong những lĩnh vực <strong>đòi hỏi sự linh hoạt, đa dạng và tiếp xúc với nhiều người</strong>: báo chí, marketing, bán hàng, du lịch, phiên dịch, ngoại giao, hay bất kỳ nghề nào cho phép bạn không bị gắn chặt với một nơi hoặc một cách làm duy nhất.</p>

<div class="lp-section-title">Điểm cần phát triển của bạn</div>
<p class="nar">Thách thức của <strong>${name}</strong> là học cách <strong>cam kết</strong> — với con người, với dự án, với định hướng. Sự thiếu cam kết, dù xuất phát từ nhu cầu tự do chính đáng, có thể khiến bạn bỏ lỡ những điều sâu sắc nhất mà cuộc đời có thể mang lại: những mối quan hệ đủ dài để trở nên thực sự thân mật, những dự án đủ kiên nhẫn để tạo ra ảnh hưởng thực sự.</p>
<p class="nar">Tự do không có nghĩa là không bao giờ bị ràng buộc — đó là khả năng chọn lựa có ý thức điều gì xứng đáng để bạn gắn bó.</p>

<div class="insight-box">📌 <strong>Tóm lại:</strong> ${name} đến thế giới này để trải nghiệm và truyền bá. Mỗi chuyến đi, mỗi cuộc gặp gỡ, mỗi thay đổi trong cuộc đời bạn đều là nguyên liệu cho sứ mệnh. Hãy sống đầy đủ — nhưng đừng quên rằng chiều sâu cũng là một hình thức tự do.</div>`,

  6: (name) => `
<p class="nar">Trong Thần số học, chỉ số sứ mệnh giúp bạn biết cách đạt được mục tiêu của bạn, lớn và nhỏ. <strong>${name}</strong>, bạn mang Sứ mệnh số <strong>6</strong> — sứ mệnh của người nuôi dưỡng, người chữa lành và người giữ cho ngọn lửa yêu thương luôn ấm áp trong cộng đồng.</p>

<div class="lp-section-title">Sứ mệnh số 6 có ý nghĩa gì?</div>
<p class="nar">Trách nhiệm, chữa lành, nuôi dưỡng, hài hòa, cống hiến...</p>
<p class="nar">Sứ mệnh của <strong>${name}</strong> là <em>tạo ra sự chăm sóc và hài hòa</em> trong gia đình, cộng đồng và xã hội. Bạn đạt được mục tiêu không phải bằng cách chinh phục hay cạnh tranh — mà bằng cách tạo ra môi trường mà mọi người cảm thấy được nâng đỡ, được chữa lành và được thuộc về.</p>
<p class="nar">Bạn có trực giác mạnh về nhu cầu của người khác — đôi khi bạn biết điều họ cần trước cả khi họ tự hiểu điều đó. Và bạn không chỉ biết — bạn hành động. Đó là điểm khiến bạn trở thành người không thể thiếu trong bất kỳ tập thể nào bạn tham gia.</p>

<div class="lp-section-title">Tài năng chăm sóc và lãnh đạo bằng tình yêu thương</div>
<p class="nar"><strong>${name}</strong> có khả năng tạo ra sự ổn định cảm xúc cho cả một nhóm. Khi mọi thứ căng thẳng, bạn là người mang lại sự bình tĩnh. Khi ai đó bị tổn thương, bạn là người đầu tiên có mặt. Khi xung đột nổ ra, bạn là người tìm cách kéo mọi người lại gần nhau.</p>
<p class="nar">Trong sự nghiệp, bạn phát huy tốt nhất trong những lĩnh vực <strong>phục vụ con người</strong>: y tế, giáo dục, tư vấn tâm lý, xã hội học, thiết kế nội thất, ẩm thực, hoặc bất kỳ lĩnh vực nào nơi bạn có thể tạo ra môi trường nuôi dưỡng người khác.</p>

<div class="lp-section-title">Điểm cần phát triển của bạn</div>
<p class="nar">Thách thức của <strong>${name}</strong> là học cách <strong>không hy sinh bản thân quá mức</strong>. Bạn có xu hướng gánh vác trách nhiệm của người khác như thể đó là của mình, và đôi khi điều đó khiến bạn kiệt sức trong khi người kia vẫn chưa học được bài học của họ.</p>
<p class="nar">Hãy nhớ: chăm sóc người khác tốt nhất khi bạn đặt ra ranh giới lành mạnh. Tình yêu thương thực sự không phải là làm tất cả mọi thứ thay cho người khác — đó là giúp họ tự đủ sức đứng trên đôi chân của chính mình.</p>

<div class="insight-box">📌 <strong>Tóm lại:</strong> ${name} đến thế giới này để chữa lành và nuôi dưỡng. Mỗi lần bạn tạo ra một không gian ấm áp, mỗi lần bạn ở đó cho người cần bạn, mỗi lần bạn chọn yêu thương ngay cả khi khó — đó là sứ mệnh số 6 đang được thực hiện trọn vẹn.</div>`,

  7: (name) => `
<p class="nar">Trong Thần số học, chỉ số sứ mệnh giúp bạn biết cách đạt được mục tiêu của bạn, lớn và nhỏ. <strong>${name}</strong>, bạn mang Sứ mệnh số <strong>7</strong> — sứ mệnh của nhà tư tưởng, người tìm kiếm sự thật và người kết nối tri thức với tâm linh.</p>

<div class="lp-section-title">Sứ mệnh số 7 có ý nghĩa gì?</div>
<p class="nar">Tìm kiếm sự thật, chiều sâu, phân tích, trực giác, tâm linh...</p>
<p class="nar">Sứ mệnh của <strong>${name}</strong> là <em>đi vào chiều sâu của mọi thứ và truyền đạt lại những hiểu biết đó cho thế giới</em>. Bạn không thỏa mãn với bề mặt — bạn muốn biết tại sao, như thế nào, và ý nghĩa thực sự đằng sau mọi hiện tượng là gì.</p>
<p class="nar">Bạn đạt được mục tiêu qua <strong>tri thức, nghiên cứu và sự thâm nhập sâu vào bản chất sự vật</strong>. Trong khi người khác hài lòng với câu trả lời đầu tiên họ nhận được, bạn tiếp tục đặt câu hỏi cho đến khi chạm đến cốt lõi thực sự của vấn đề.</p>

<div class="lp-section-title">Tài năng phân tích và trực giác của bạn</div>
<p class="nar"><strong>${name}</strong> có trí tuệ phân tích sắc bén kết hợp với trực giác mạnh mẽ — một sự pha trộn hiếm có. Bạn không chỉ tư duy bằng lý trí mà còn "cảm nhận" được sự thật theo một cách mà khó giải thích bằng ngôn từ thông thường.</p>
<p class="nar">Trong sự nghiệp, bạn phát huy tốt nhất trong những lĩnh vực <strong>nghiên cứu, phân tích và khám phá tri thức</strong>: khoa học, triết học, tâm lý học, tâm linh, công nghệ, y học, hay bất kỳ lĩnh vực nào đòi hỏi tư duy sâu và khả năng nhìn thấy những điều mà người khác bỏ qua.</p>

<div class="lp-section-title">Điểm cần phát triển của bạn</div>
<p class="nar">Thách thức của <strong>${name}</strong> là học cách <strong>chia sẻ những gì bạn biết</strong>. Bạn có xu hướng giữ kiến thức và hiểu biết cho riêng mình — một phần vì bạn không chắc người khác sẽ hiểu, một phần vì bạn quý trọng sự riêng tư và không gian nội tâm.</p>
<p class="nar">Nhưng sứ mệnh của bạn không chỉ là biết — mà là truyền đạt. Những hiểu biết sâu sắc của bạn, được chia sẻ đúng lúc đúng chỗ, có thể thay đổi cách một người nhìn nhận cuộc đời họ mãi mãi.</p>

<div class="insight-box">📌 <strong>Tóm lại:</strong> ${name} đến thế giới này để tìm kiếm và truyền đạt sự thật. Mỗi câu hỏi bạn đặt ra, mỗi chiều sâu bạn chạm đến, mỗi hiểu biết bạn chia sẻ — đó là cách sứ mệnh số 7 được thực hiện, lặng lẽ nhưng sâu xa và bền vững.</div>`,

  8: (name) => `
<p class="nar">Trong Thần số học, chỉ số sứ mệnh giúp bạn biết cách đạt được mục tiêu của bạn, lớn và nhỏ. <strong>${name}</strong>, bạn mang Sứ mệnh số <strong>8</strong> — sứ mệnh của người tạo ra sự thịnh vượng, người nắm giữ quyền lực và người chứng minh rằng thành công vật chất và ý nghĩa tinh thần không hề mâu thuẫn nhau.</p>

<div class="lp-section-title">Sứ mệnh số 8 có ý nghĩa gì?</div>
<p class="nar">Quyền lực, thịnh vượng, lãnh đạo, công bằng, thành tựu...</p>
<p class="nar">Sứ mệnh của <strong>${name}</strong> là <em>tạo ra sự thịnh vượng theo nghĩa rộng nhất</em> — không chỉ cho bản thân mà cho tất cả những ai bạn có ảnh hưởng. Bạn được giao nhiệm vụ chứng minh rằng người có quyền lực có thể dùng quyền lực đó một cách có đạo đức, công bằng và có trách nhiệm.</p>
<p class="nar">Bạn đạt được mục tiêu thông qua <strong>sự tập trung chiến lược, kỷ luật và tư duy kinh doanh</strong>. Bạn có bản năng nhận ra cơ hội, khả năng đánh giá rủi ro, và ý chí để chuyển hóa tầm nhìn thành kết quả cụ thể đo lường được.</p>

<div class="lp-section-title">Tài năng lãnh đạo và tạo dựng thịnh vượng</div>
<p class="nar"><strong>${name}</strong> có tư duy bền thực tế kết hợp với tầm nhìn dài hạn — bộ kết hợp lý tưởng để xây dựng những thứ tạo ra ảnh hưởng thực sự. Bạn không chỉ nghĩ về hôm nay — bạn nghĩ về điều gì sẽ còn giá trị sau 5, 10, 20 năm nữa.</p>
<p class="nar">Trong sự nghiệp, bạn phát huy tốt nhất trong những lĩnh vực <strong>kinh doanh, tài chính, quản lý và lãnh đạo tổ chức</strong>. Bạn có khả năng đặc biệt trong việc nhìn thấy cấu trúc đằng sau những thứ hỗn loạn và tìm ra cách tổ chức lại chúng thành hệ thống tạo ra kết quả.</p>

<div class="lp-section-title">Điểm cần phát triển của bạn</div>
<p class="nar">Thách thức lớn nhất của <strong>${name}</strong> là học cách <strong>cân bằng giữa tham vọng và nhân tính</strong>. Trong hành trình theo đuổi thành công, bạn đôi khi có thể trở nên quá tập trung vào kết quả và vô tình bỏ qua con người — kể cả chính mình.</p>
<p class="nar">Hãy nhớ: quyền lực bền vững không đến từ sự thống trị — mà đến từ sự tin tưởng. Và tin tưởng chỉ được xây dựng khi bạn chứng minh rằng bạn quan tâm đến điều gì đó lớn hơn lợi ích cá nhân của mình.</p>

<div class="insight-box">📌 <strong>Tóm lại:</strong> ${name} đến thế giới này để tạo ra và quản lý sự thịnh vượng — vật chất lẫn tinh thần. Sứ mệnh của bạn không chỉ là thành công — mà là chứng minh rằng thành công và tử tế có thể song hành. Hãy dùng quyền lực của mình để nâng đỡ người khác.</div>`,

  9: (name) => `
<p class="nar">Trong Thần số học, chỉ số sứ mệnh giúp bạn biết cách đạt được mục tiêu của bạn, lớn và nhỏ. <strong>${name}</strong>, bạn mang Sứ mệnh số <strong>9</strong> — sứ mệnh của người phụng sự nhân loại, người mang tình yêu thương vượt ra ngoài ranh giới cá nhân để chạm đến toàn thể.</p>

<div class="lp-section-title">Sứ mệnh số 9 có ý nghĩa gì?</div>
<p class="nar">Nhân đạo, phụng sự, tha thứ, trí tuệ, hoàn thiện...</p>
<p class="nar">Sứ mệnh của <strong>${name}</strong> là <em>cống hiến cho một điều lớn hơn bản thân</em>. Không phải cống hiến vì nghĩa vụ — mà vì bạn thực sự cảm nhận được sự kết nối sâu xa giữa mình với mọi người xung quanh. Bạn không thể nhìn thấy đau khổ mà không cảm thấy thôi thúc phải làm điều gì đó.</p>
<p class="nar">Bạn đạt được mục tiêu thông qua <strong>sự cống hiến, tha thứ và tình yêu thương vô điều kiện</strong>. Bạn không giữ điểm, không đòi hỏi sự đáp trả cân xứng, và không phân biệt ai xứng đáng được nhận sự quan tâm của bạn. Chính sự rộng lượng không giới hạn này là sức hút lớn nhất của bạn.</p>

<div class="lp-section-title">Tài năng nhân đạo và truyền cảm hứng</div>
<p class="nar"><strong>${name}</strong> có khả năng nhìn thấy tiềm năng tốt đẹp trong mỗi con người — kể cả những người mà người khác đã từ bỏ. Đây là món quà quý giá, vì đôi khi tất cả những gì một con người cần để thay đổi là một người tin vào họ.</p>
<p class="nar">Trong sự nghiệp, bạn phát huy tốt nhất trong các lĩnh vực <strong>nhân đạo, giáo dục, nghệ thuật mang tính xã hội, tâm linh và phát triển cộng đồng</strong>. Bạn được sinh ra để tạo ra ảnh hưởng trên diện rộng — không phải thông qua một bước nhảy vọt duy nhất, mà qua những làn sóng tình yêu thương được gieo đi và lan tỏa.</p>

<div class="lp-section-title">Điểm cần phát triển của bạn</div>
<p class="nar">Thách thức của <strong>${name}</strong> là học cách <strong>không mang gánh nặng của cả thế giới lên đôi vai</strong>. Bạn cảm nhận quá nhiều, chăm sóc quá nhiều, và đôi khi quên rằng bạn cũng có giới hạn. Kiệt sức vì thương người là nguy cơ thực sự mà những tâm hồn số 9 phải đối mặt.</p>
<p class="nar">Hãy học cách tha thứ cho chính mình — không chỉ cho người khác. Bạn không cần phải giải quyết mọi vấn đề của thế giới để sứ mệnh của bạn được trọn vẹn.</p>

<div class="insight-box">📌 <strong>Tóm lại:</strong> ${name} đến thế giới này để yêu thương không điều kiện. Mỗi hành động cống hiến, mỗi lần bạn tha thứ, mỗi lần bạn chọn yêu thương thay vì phán xét — đó là sứ mệnh số 9 đang được sống trọn vẹn nhất.</div>`,

  11: (name) => `
<p class="nar">Trong Thần số học, chỉ số sứ mệnh giúp bạn biết cách đạt được mục tiêu của bạn, lớn và nhỏ. <strong>${name}</strong>, bạn mang Sứ mệnh số <strong>11</strong> — một trong những con số Master hiếm có nhất, mang sứ mệnh của người truyền cảm hứng, người thắp sáng và người kết nối nhân loại với những chiều thực tại cao hơn.</p>

<div class="lp-section-title">Sứ mệnh số 11 có ý nghĩa gì?</div>
<p class="nar">Trực giác Master, truyền cảm hứng, ánh sáng, tâm linh, tiên tri...</p>
<p class="nar">Số 11 là con số Master — điều đó có nghĩa là sứ mệnh của <strong>${name}</strong> hoạt động ở một tần số rung động cao hơn phần còn lại. Bạn không chỉ được giao nhiệm vụ đạt được mục tiêu cá nhân — bạn được giao nhiệm vụ <em>nâng đỡ và soi sáng người khác</em> trên con đường của họ.</p>
<p class="nar">Bạn đến thế giới này với một đường dây kết nối đặc biệt với trực giác và trí tuệ vũ trụ. Những ý tưởng, những cảm nhận, những thông điệp đến với bạn theo những cách mà bạn khó giải thích bằng lý trí thông thường — và chính những thứ đó thường là những gì thế giới xung quanh bạn cần nghe nhất.</p>

<div class="lp-section-title">Tài năng truyền cảm hứng và dẫn đường của bạn</div>
<p class="nar"><strong>${name}</strong> có khả năng đặc biệt để truyền đạt những ý tưởng phức tạp theo cách mà người khác có thể cảm nhận và hiểu được ở mức độ sâu sắc. Bạn không chỉ nói — bạn chạm vào điều gì đó bên trong người nghe mà ngôn từ thông thường không thể làm được.</p>
<p class="nar">Trong sự nghiệp, bạn phát huy tốt nhất khi được dùng để <strong>truyền cảm hứng và thức tỉnh</strong>: giáo dục tâm linh, nghệ thuật có chiều sâu, tư vấn, viết lách truyền cảm hứng, lãnh đạo có tầm nhìn, hay bất kỳ lĩnh vực nào nơi bạn có thể chạm đến và thay đổi cách người khác nhìn nhận chính họ và thế giới.</p>

<div class="lp-section-title">Điểm cần phát triển của bạn</div>
<p class="nar">Thách thức của <strong>${name}</strong> là học cách <strong>cân bằng giữa tầm nhìn cao cả và thực tại hàng ngày</strong>. Bạn sống ở hai thế giới — thế giới của những ý tưởng và rung động cao, và thế giới thực tế cần được trả hóa đơn và thực hiện các cam kết thông thường. Căng thẳng giữa hai thế giới này là thách thức đặc trưng của Master số 11.</p>

<div class="insight-box">📌 <strong>Tóm lại:</strong> ${name} đến thế giới này với sứ mệnh của người thắp đèn. Bạn không cần phải hiểu hoàn toàn những gì bạn mang lại — chỉ cần dũng cảm chia sẻ nó. Khi bạn sống chân thật với tần số rung động cao nhất của mình, bạn đang tạo ra sự thay đổi mà thế giới cần.</div>`,

  22: (name) => `
<p class="nar">Trong Thần số học, chỉ số sứ mệnh giúp bạn biết cách đạt được mục tiêu của bạn, lớn và nhỏ. <strong>${name}</strong>, bạn mang Sứ mệnh số <strong>22</strong> — con số Master mạnh nhất trong hệ thống, được gọi là "Người Xây Dựng Vĩ Đại". Đây là sứ mệnh của người tạo ra những thứ có thể thay đổi thế giới theo nghĩa đen.</p>

<div class="lp-section-title">Sứ mệnh số 22 có ý nghĩa gì?</div>
<p class="nar">Xây dựng vĩ đại, tầm nhìn Master, di sản, thực tế hóa lý tưởng...</p>
<p class="nar">Số 22 là con số Master của người biến tầm nhìn vũ trụ thành thực tế hữu hình. <strong>${name}</strong>, bạn không chỉ mơ về một thế giới tốt đẹp hơn — bạn có cả tầm nhìn lẫn năng lực thực tế để <em>xây dựng nó thành hiện thực</em>.</p>
<p class="nar">Bạn đạt được mục tiêu thông qua <strong>sự kết hợp hiếm có giữa tầm nhìn chiến lược rộng lớn và khả năng thực thi chi tiết</strong>. Trong khi số 11 thắp sáng ý tưởng, số 22 xây dựng nền móng để ý tưởng đó có thể đứng vững theo thời gian và phục vụ hàng triệu người.</p>

<div class="lp-section-title">Tài năng xây dựng quy mô lớn của bạn</div>
<p class="nar"><strong>${name}</strong> có khả năng đặc biệt để giữ được cả bức tranh toàn cảnh lẫn chi tiết thực thi trong cùng một lúc — một kỹ năng cực kỳ hiếm. Bạn thấy được hệ thống đằng sau sự hỗn loạn, thấy được cấu trúc cần thiết để một ý tưởng có thể đứng vững ở quy mô lớn.</p>
<p class="nar">Những người mang sứ mệnh số 22 thường được kêu gọi xây dựng những thứ tồn tại lâu hơn bản thân họ: tổ chức, phong trào, hệ thống, cơ sở hạ tầng, hay bất kỳ thứ gì có thể phục vụ nhiều thế hệ.</p>

<div class="lp-section-title">Điểm cần phát triển của bạn</div>
<p class="nar">Thách thức của <strong>${name}</strong> là học cách <strong>không bị áp lực quá lớn bởi tầm vóc của sứ mệnh</strong>. Khi nhận ra quy mô của những gì mình được giao, nhiều người mang số 22 cảm thấy choáng ngợp và đôi khi lùi bước về phía an toàn của con số 4 — làm điều tốt nhưng nhỏ hơn những gì họ thực sự có khả năng.</p>
<p class="nar">Hãy tin vào quy mô tầm nhìn của mình. Thế giới cần những người dám nghĩ lớn <em>và</em> có đủ kiên nhẫn để xây dựng nó từng viên gạch một.</p>

<div class="insight-box">📌 <strong>Tóm lại:</strong> ${name} đến thế giới này để xây dựng những thứ còn lại sau khi bạn ra đi. Di sản không phải là thứ bạn tích lũy — đó là thứ bạn tạo ra cho người khác. Hãy xây dựng với tầm nhìn của một nhà kiến trúc sư và trái tim của một người phụng sự.</div>`,


};

// ─── DESTINY CHALLENGE — Deep Narrative Templates ──────────────────────────────
// Công thức: |Soul (nguyên âm) - Personality (phụ âm)| rút gọn về 1 chữ số
// Ý nghĩa: khoảng cách giữa con người thật bên trong và hình ảnh thể hiện ra ngoài
// trong hành trình thực hiện sứ mệnh.
// ─────────────────────────────────────────────────────────────────────────────────

NarrativeTemplates.destinyChallenge = {

  0: (name, d) => `
<p class="nar"><strong>${name}</strong> sở hữu một điều cực kỳ hiếm gặp trong thần số học: <strong>Thử thách Sứ mệnh số 0 — trạng thái Hợp Nhất</strong>. Con số này xuất hiện khi Linh Hồn (nguyên âm trong tên) và Nhân Cách (phụ âm trong tên) mang cùng một rung động. Nói cách khác, con người thật bên trong của bạn và hình ảnh bạn thể hiện ra thế giới bên ngoài là một — không có khoảng cách, không có mâu thuẫn.</p>
<p class="nar">Phần lớn con người sống với một "khoảng trống" nào đó giữa <em>người họ thực sự là</em> và <em>người họ muốn người khác thấy</em>. Đây là nguồn gốc của phần lớn sự kiệt sức cảm xúc và xung đột nội tâm trong cuộc sống. Bạn thì không.</p>

<div class="lp-section-title">Ý nghĩa sâu xa của số 0</div>
<p class="nar">Số 0 trong thử thách không có nghĩa là "không có bài học" — nó có nghĩa là <strong>bạn được trao quyền tự do lựa chọn</strong> bài học của mình. Không bị ràng buộc bởi một điểm mù cụ thể nào, <strong>${name}</strong> có khả năng đón nhận và học hỏi từ bất kỳ phương diện nào của cuộc sống — sâu hơn và toàn diện hơn hầu hết người khác.</p>
<p class="nar">Tuy nhiên, tự do tuyệt đối cũng đi kèm với thử thách tự do: <em>khi không có áp lực rõ ràng, con người thường không biết mình cần phát triển điều gì</em>. Bạn có thể trôi dạt trong sự thoải mái mà không nhận ra rằng tiềm năng của mình đang không được khai thác hết.</p>

<div class="lp-section-title">Biểu hiện trong cuộc sống</div>
<p class="nar">Người mang thử thách số 0 thường được cảm nhận là <strong>chân thực, nhất quán và không màu mè</strong>. Những gì họ nói bên ngoài khớp với những gì họ cảm thấy bên trong. Không có sự đối phó xã hội giả tạo, không có "mặt công cộng" và "mặt tư nhân" khác nhau. Điều này tạo ra sức mạnh kết nối sâu — người khác <em>cảm nhận được</em> sự chân thực đó và thường tin tưởng bạn một cách tự nhiên.</p>
<p class="nar">Thách thức duy nhất: bạn có thể <strong>không hiểu tại sao người khác lại khó như vậy</strong> — tại sao họ nói một điều và làm điều khác, tại sao họ tự mâu thuẫn. Hãy học cách kiên nhẫn và thấu hiểu — đây chính là "thử thách ẩn" mà số 0 mang lại.</p>

<div class="insight-box">📌 <strong>Tóm lại:</strong> ${name} đang sống trong trạng thái mà nhiều người cả đời tìm kiếm — sự nhất quán giữa bên trong và bên ngoài. Thử thách không đến từ bản thân bạn; nó đến từ việc <em>duy trì</em> sự hợp nhất đó giữa một thế giới đầy nhiễu loạn, và học cách đồng cảm với những ai chưa tìm thấy điều tương tự.</div>
`,

  1: (name, d) => `
<p class="nar">Thử thách Sứ mệnh số <strong>1</strong> của <strong>${name}</strong> bắt nguồn từ khoảng cách giữa một Linh Hồn khao khát độc lập và một Nhân Cách đôi khi bị kéo về phía nhu cầu được chấp thuận, an toàn trong tập thể, hoặc ngược lại — quá hung hăng và tự áp đặt bản thân. Thử thách này không phải là một điểm yếu; đây là điểm đang được rèn luyện.</p>
<p class="nar">Số 1 là năng lượng của người Tiên Phong — lãnh đạo, khởi xướng, đứng một mình và bước vào lãnh thổ chưa ai đến. Nhưng để làm được điều đó thực sự, bạn cần phải <em>hòa giải được với chính mình</em>: giữa tiếng gọi của sự độc lập và nỗi sợ hãi của việc đứng một mình.</p>

<div class="lp-section-title">Thử thách biểu hiện như thế nào?</div>
<p class="nar">Người mang thử thách số 1 thường rơi vào một trong hai cực:</p>
<ul class="lp-traits">
  <li><strong>Cực phụ thuộc:</strong> Luôn tìm kiếm sự chấp thuận trước khi hành động. Khó quyết định một mình. Cảm thấy bất an khi không có sự xác nhận từ bên ngoài.</li>
  <li><strong>Cực độc đoán:</strong> Hành động mà không lắng nghe. Muốn kiểm soát mọi thứ. Cảm thấy đơn độc và khó hợp tác thực sự.</li>
</ul>
<p class="nar">Cả hai đều là biểu hiện của cùng một thử thách: <strong>${name}</strong> chưa hoàn toàn tin tưởng vào sức mạnh bên trong của mình một cách lành mạnh.</p>

<div class="lp-section-title">Con đường hoàn thiện</div>
<p class="nar">Thử thách số 1 được vượt qua không phải bằng cách "trở nên độc lập hơn" hay "nghe người khác hơn" — mà bằng cách <strong>hiểu rõ giá trị của bản thân một cách độc lập với sự công nhận bên ngoài</strong>. Khi <strong>${name}</strong> biết mình là ai và mình đứng vì điều gì, sự lãnh đạo sẽ xuất hiện tự nhiên — không áp đặt, không phụ thuộc.</p>
<p class="nar">Bắt đầu từng bước nhỏ: ra quyết định không cần xin phép. Chịu trách nhiệm về lựa chọn của mình mà không đổ lỗi. Học cách lắng nghe mà vẫn giữ được lập trường. Mỗi lần làm được điều đó là một bước trưởng thành trên hành trình thực hiện sứ mệnh.</p>

<div class="insight-box">📌 <strong>Tóm lại:</strong> Thử thách số 1 của ${name} là học cách <em>lãnh đạo từ sức mạnh nội tâm chứ không phải từ nỗi sợ hãi</em>. Khi sự tự tin thật sự xuất hiện — không ồn ào, không cần chứng minh — sứ mệnh của bạn sẽ bắt đầu được thực hiện theo những cách bạn chưa thể tưởng tượng.</div>
`,

  2: (name, d) => `
<p class="nar">Thử thách Sứ mệnh số <strong>2</strong> của <strong>${name}</strong> nằm ở sự căng thẳng giữa một Linh Hồn khao khát sự hài hòa, kết nối sâu sắc và được thấu hiểu — với một Nhân Cách đôi khi quá nhún nhường, hoặc ngược lại, dựng tường phòng thủ để bảo vệ trái tim dễ tổn thương. Đây là thử thách của <em>sự kết nối lành mạnh</em>.</p>
<p class="nar">Số 2 là năng lượng của sự nhạy cảm, hợp tác và đồng cảm. Người mang thử thách này thường có khả năng cảm nhận người khác sâu sắc đến mức đôi khi không phân biệt được đâu là cảm xúc của mình và đâu là cảm xúc của người khác.</p>

<div class="lp-section-title">Thử thách biểu hiện như thế nào?</div>
<ul class="lp-traits">
  <li>Khó nói "không" dù bản thân không thực sự muốn đồng ý</li>
  <li>Hy sinh nhu cầu cá nhân liên tục để duy trì hòa khí</li>
  <li>Cảm thấy bị cạn kiệt cảm xúc sau những cuộc gặp gỡ xã hội</li>
  <li>Quá nhạy cảm với phê bình, ngay cả khi nó có tính xây dựng</li>
  <li>Phụ thuộc quá nhiều vào tình cảm và sự chấp thuận của người thân</li>
</ul>

<div class="lp-section-title">Con đường hoàn thiện</div>
<p class="nar">Vượt qua thử thách số 2 không có nghĩa là trở nên lạnh lùng hay ngừng quan tâm. Ngược lại — đó là học cách <strong>quan tâm từ trạng thái đầy đủ nội tâm, không phải từ sự thiếu hụt</strong>. Khi <strong>${name}</strong> học được cách đặt ranh giới lành mạnh, những mối quan hệ thực sự quan trọng sẽ trở nên sâu sắc hơn.</p>
<p class="nar">Luyện tập cụ thể: nhận diện cảm xúc của bản thân trước khi phản ứng với cảm xúc người khác. Xây dựng một không gian nội tâm riêng — thiền, viết nhật ký, hoặc khoảnh khắc im lặng có chủ đích. Từ không gian đó, sự kết nối của bạn với người khác sẽ đến từ sức mạnh chứ không phải từ nỗi sợ bị bỏ lại.</p>

<div class="insight-box">📌 <strong>Tóm lại:</strong> Thử thách số 2 của ${name} là học cách <em>là người cầu nối mà không trở thành người hi sinh</em>. Khi tình yêu thương của bạn đến từ sự sung mãn thay vì sự thiếu hụt, bạn sẽ trở thành người có khả năng chữa lành và kết nối sâu sắc theo cách chỉ số ít người có thể làm được.</div>
`,

  3: (name, d) => `
<p class="nar">Thử thách Sứ mệnh số <strong>3</strong> của <strong>${name}</strong> xuất phát từ khoảng cách giữa một Linh Hồn tràn đầy cảm xúc phong phú, sáng tạo và mong muốn biểu đạt — với một Nhân Cách đôi khi dùng sự hài hước, bận rộn hay sự hào phóng như một lớp vỏ bọc để che đi những gì thực sự đang xảy ra bên trong.</p>
<p class="nar">Đây là thử thách của <em>sự biểu đạt chân thực</em>. Người mang thử thách số 3 thường có khiếu nghệ thuật, ngôn ngữ hoặc giao tiếp thiên bẩm — nhưng nghịch lý thay, họ lại khó nói ra những điều quan trọng nhất với chính họ.</p>

<div class="lp-section-title">Thử thách biểu hiện như thế nào?</div>
<p class="nar"><strong>${name}</strong> có khả năng nói chuyện vui vẻ hàng giờ về mọi chủ đề, nhưng lại im lặng về cảm xúc thật của mình. Năng lượng số 3 khi chưa được nhận thức có thể biểu hiện qua:</p>
<ul class="lp-traits">
  <li>Sử dụng sự hài hước để tránh các cuộc trò chuyện cảm xúc sâu</li>
  <li>Phân tán năng lượng vào quá nhiều dự án một lúc, không hoàn thành</li>
  <li>Nói giỏi nhưng khó lắng nghe thật sự</li>
  <li>Cảm thấy thiếu được công nhận dù đã cống hiến rất nhiều</li>
</ul>

<div class="lp-section-title">Con đường hoàn thiện</div>
<p class="nar">Sức mạnh thật sự của số 3 không phải là khả năng giải trí hay thu hút sự chú ý — mà là khả năng <strong>chạm đến trái tim người khác bằng sự thật của mình</strong>. Khi <strong>${name}</strong> dũng cảm chia sẻ những điều thật — nỗi sợ, mong muốn, tổn thương — sức ảnh hưởng của bạn nhân lên gấp 10 lần.</p>

<div class="insight-box">📌 <strong>Tóm lại:</strong> Thử thách số 3 của ${name} là học cách <em>biểu đạt không chỉ những gì vui mà còn những gì thật</em>. Tài năng của bạn sẽ chỉ đạt đến tầm cao nhất khi được nuôi dưỡng bằng sự chân thực. Thế giới không cần thêm một người biểu diễn — thế giới cần giọng nói thật của bạn.</div>
`,

  4: (name, d) => `
<p class="nar">Thử thách Sứ mệnh số <strong>4</strong> của <strong>${name}</strong> nằm ở khoảng cách giữa một Linh Hồn khao khát trật tự, an toàn và nền tảng vững chắc — với một Nhân Cách đôi khi quá cứng nhắc trong cấu trúc, hoặc ngược lại, né tránh sự kỷ luật vì sợ bị ràng buộc. Đây là thử thách của <em>sự xây dựng có chủ đích</em>.</p>
<p class="nar">Số 4 trong vai trò thử thách không có nghĩa là bạn không có kỷ luật hay không biết xây dựng — nó có nghĩa là bạn có thể đang dùng kỷ luật theo cách không phục vụ cho sứ mệnh thật sự của mình. Hoặc bạn đang sợ hãi chính sự ổn định mà mình khao khát.</p>

<div class="lp-section-title">Thử thách biểu hiện như thế nào?</div>
<ul class="lp-traits">
  <li><strong>Cầu toàn đến tê liệt:</strong> Không bắt đầu vì sợ không làm được hoàn hảo. Kế hoạch liệt kê chi tiết nhưng hành động chậm hoặc không thực hiện.</li>
  <li><strong>Làm việc quá mức mà không giao việc:</strong> Tin rằng nếu mình không làm thì không ai làm được đúng. Dẫn đến kiệt sức và cô lập.</li>
  <li><strong>Chống lại thay đổi:</strong> Gắn bó quá chặt với quy trình cũ dù nó không còn hiệu quả.</li>
  <li><strong>Né tránh trách nhiệm dài hạn:</strong> Không xây dựng bất cứ điều gì bền vững vì sợ phải chịu trách nhiệm lâu dài.</li>
</ul>

<div class="lp-section-title">Con đường hoàn thiện</div>
<p class="nar">Thử thách số 4 được vượt qua khi <strong>${name}</strong> học được cách phân biệt giữa <strong>kỷ luật trao quyền</strong> và <strong>kỷ luật giam cầm</strong>. Bài tập thực tế: chia sứ mệnh lớn nhất của bạn thành các bước nhỏ 90 ngày. Giao ít nhất một việc nhỏ cho người khác mỗi tuần — và để họ làm theo cách của họ. Mỗi lần bạn từ bỏ được sự kiểm soát thái quá, bạn đang mở rộng phạm vi tác động của mình.</p>

<div class="insight-box">📌 <strong>Tóm lại:</strong> Thử thách số 4 của ${name} là học cách <em>xây dựng mà không gánh một mình</em>. Sứ mệnh số 4 yêu cầu kiên nhẫn và kỷ luật — nhưng điều đó không có nghĩa là bạn phải làm tất cả. Khi bạn tin tưởng người khác và xây dựng hệ thống thay vì kiểm soát từng chi tiết, di sản bạn để lại sẽ lớn hơn bất kỳ điều gì bạn có thể làm một mình.</div>
`,

  5: (name, d) => `
<p class="nar">Thử thách Sứ mệnh số <strong>5</strong> của <strong>${name}</strong> xuất phát từ khoảng cách giữa một Linh Hồn khao khát tự do, trải nghiệm đa dạng và sự thay đổi liên tục — với một Nhân Cách đôi khi bị cảm nhận là bốc đồng, không đáng tin cậy, hoặc ngược lại, tự kìm hãm mình trong khuôn khổ quá chật hẹp vì sợ phán xét. Đây là thử thách của <em>tự do có trách nhiệm</em>.</p>

<div class="lp-section-title">Thử thách biểu hiện như thế nào?</div>
<ul class="lp-traits">
  <li>Rời bỏ tình huống (công việc, mối quan hệ, dự án) ngay khi cảm thấy nhàm chán hoặc bị ràng buộc</li>
  <li>Hứa hẹn với người khác rồi thay đổi kế hoạch vào phút chót</li>
  <li>Khó xây dựng thói quen hoặc kỷ luật dài hạn</li>
  <li>Sợ cam kết vì lo sẽ bị "mắc kẹt"</li>
</ul>

<div class="lp-section-title">Con đường hoàn thiện</div>
<p class="nar">Vượt qua thử thách số 5 không có nghĩa là hy sinh tự do — mà là <strong>học cách mang tự do vào trong cam kết</strong>. Người có số 5 làm chủ hiểu rằng tự do thật sự không phải là không có nghĩa vụ — đó là khả năng <em>chọn lựa có ý thức</em> trong mọi nghĩa vụ. Hãy thử cam kết một điều trong 90 ngày mà không rời bỏ dù khó khăn — không phải vì bị ép buộc, mà vì bạn <em>chọn</em> ở lại và xem điều gì xuất hiện.</p>

<div class="insight-box">📌 <strong>Tóm lại:</strong> Thử thách số 5 của ${name} là học cách <em>tự do không phải là chạy trốn mà là sự chọn lựa có chủ đích</em>. Khi bạn cam kết với điều bạn thực sự tin tưởng, sứ mệnh của mình sẽ không giam cầm bạn — nó giải phóng bạn ở mức độ sâu hơn bất kỳ sự tự do nào bên ngoài có thể cho.</div>
`,

  6: (name, d) => `
<p class="nar">Thử thách Sứ mệnh số <strong>6</strong> của <strong>${name}</strong> bắt nguồn từ khoảng cách giữa một Linh Hồn đầy tình yêu thương, trách nhiệm và mong muốn chăm sóc — với một Nhân Cách đôi khi thể hiện sự kiểm soát, chủ nghĩa hoàn hảo hoặc gánh nặng trách nhiệm đến mức không thể thở. Đây là thử thách của <em>tình yêu thương lành mạnh</em>.</p>

<div class="lp-section-title">Thử thách biểu hiện như thế nào?</div>
<ul class="lp-traits">
  <li>Luôn sẵn sàng giúp đỡ người khác nhưng khó nhờ người khác giúp mình</li>
  <li>Tự đặt tiêu chuẩn rất cao và thất vọng khi người khác không đáp ứng</li>
  <li>Sự hài lòng cá nhân gắn chặt với việc người xung quanh có hạnh phúc không</li>
  <li>Khó buông tay khi người thân đưa ra quyết định mà bạn cho là sai</li>
  <li>Cảm giác tội lỗi khi dành thời gian cho bản thân thay vì người khác</li>
</ul>

<div class="lp-section-title">Con đường hoàn thiện</div>
<p class="nar">Thử thách số 6 được vượt qua khi <strong>${name}</strong> hiểu rằng <strong>chăm sóc hiệu quả nhất là chăm sóc trao quyền — không phải chăm sóc tạo ra sự phụ thuộc</strong>. Câu hỏi cần tự hỏi mỗi khi muốn giúp ai: "Điều này giúp họ phát triển hay giúp tôi cảm thấy cần thiết?" Học cách nhận lòng tốt của người khác cũng là bài học không kém phần quan trọng — tình yêu thương không phải là con đường một chiều.</p>

<div class="insight-box">📌 <strong>Tóm lại:</strong> Thử thách số 6 của ${name} là học cách <em>yêu thương mà không kiểm soát, chăm sóc mà không quên mình</em>. Khi tình yêu thương của bạn đến từ sự sung mãn thay vì từ sự lo lắng, nó sẽ chữa lành không chỉ người khác mà còn chữa lành chính bạn.</div>
`,

  7: (name, d) => `
<p class="nar">Thử thách Sứ mệnh số <strong>7</strong> của <strong>${name}</strong> xuất phát từ khoảng cách giữa một Linh Hồn sâu thẳm, tìm kiếm sự thật và tri thức bên trong — với một Nhân Cách đôi khi khép kín, nghi ngờ hoặc giữ khoảng cách với người khác đến mức không ai có thể thực sự tiếp cận được. Đây là thử thách của <em>sự tin tưởng và kết nối qua tri thức</em>.</p>

<div class="lp-section-title">Thử thách biểu hiện như thế nào?</div>
<ul class="lp-traits">
  <li>Thích quan sát hơn tham gia</li>
  <li>Khó nói thẳng cảm xúc; thường diễn đạt qua lý trí</li>
  <li>Mất nhiều thời gian trước khi tin tưởng ai</li>
  <li>Cảm giác rằng không ai thực sự hiểu mình</li>
  <li>Xu hướng rút lui khỏi xã hội khi bị tổn thương</li>
</ul>

<div class="lp-section-title">Con đường hoàn thiện</div>
<p class="nar">Tri thức khi được giữ lại chỉ là gánh nặng. Tri thức khi được chia sẻ trở thành di sản. Thử thách của <strong>${name}</strong> là học cách <strong>mở cánh cửa nội tâm mà không đánh mất chiều sâu</strong>. Bắt đầu bằng sự chia sẻ nhỏ: viết một quan sát, giải thích một khái niệm cho người không chuyên, đặt một câu hỏi thật sự thay vì chờ người khác đặt câu hỏi đúng. Khi bạn dạy ai đó điều bạn biết, bạn thực sự làm chủ nó ở mức sâu hơn.</p>

<div class="insight-box">📌 <strong>Tóm lại:</strong> Thử thách số 7 của ${name} là học cách <em>đưa tri thức vào kết nối − không giữ nó lại như kho báu riêng</em>. Khi bạn tin tưởng đủ để chia sẻ những gì bạn thấy và biết, sứ mệnh của bạn không còn bị giới hạn trong đầu bạn nữa — nó trở thành ánh sáng soi đường cho người khác.</div>
`,

  8: (name, d) => `
<p class="nar">Thử thách Sứ mệnh số <strong>8</strong> của <strong>${name}</strong> bắt nguồn từ khoảng cách giữa một Linh Hồn khao khát quyền lực, thành tựu và ảnh hưởng — với một Nhân Cách đôi khi bị nhìn nhận là thống trị, vật chất quá mức, hoặc ngược lại, né tránh quyền lực vì sợ bị tham nhũng bởi nó. Đây là thử thách của <em>quyền lực đạo đức</em>.</p>
<p class="nar">Số 8 là năng lượng của sự thành đạt, tài chính và ảnh hưởng tập thể. Nhưng quyền lực không có nền tảng đạo đức thì trở thành vũ khí; quyền lực bị từ chối thì trở thành lãng phí tiềm năng. Thử thách của bạn nằm ở đúng khoảng giữa đó.</p>

<div class="lp-section-title">Thử thách biểu hiện như thế nào?</div>
<ul class="lp-traits">
  <li>Tham vọng lớn nhưng lo ngại về cách người khác nhìn nhận tham vọng đó</li>
  <li>Làm việc rất chăm chỉ nhưng khó giữ quyền lực mình đã xây dựng</li>
  <li>Mâu thuẫn giữa muốn thành công và sợ trở thành người bị phán xét vì thành công</li>
  <li>Xu hướng tự phá hoại khi gần đến đích — vô thức chưa tin mình xứng đáng</li>
</ul>

<div class="lp-section-title">Con đường hoàn thiện</div>
<p class="nar">Thử thách số 8 được hoàn thiện khi <strong>${name}</strong> hiểu rằng <strong>quyền lực thật sự không đến để chiếm hữu — nó đến để phục vụ</strong>. Bài học thực tế: Định nghĩa "thành công" của bạn theo giá trị cá nhân — không phải so sánh với người khác. Xây dựng nguyên tắc tài chính và lãnh đạo cá nhân khi bạn <em>chưa</em> có quyền lực lớn; đừng chờ đến khi cần mới nghĩ. Và luôn hỏi: "Tôi đang dùng sức mạnh này để nâng người khác lên hay kéo mình lên bằng cách đè người khác xuống?"</p>

<div class="insight-box">📌 <strong>Tóm lại:</strong> Thử thách số 8 của ${name} là học cách <em>đón nhận quyền lực như một trách nhiệm thiêng liêng, không phải như một phần thưởng cá nhân</em>. Khi bạn lãnh đạo từ đạo đức thay vì từ tham vọng, những gì bạn xây dựng sẽ tồn tại lâu hơn bạn — và đó mới là thành tựu thật sự của số 8.</div>
`,

};

// ─── SOUL NUMBER — Deep Narrative Templates (Linh Hồn) ────────────────────────
NarrativeTemplates.soul = {

  1: (name) => `
<p class="nar">Linh Hồn số 1 là năng lượng của sự khởi đầu — và <strong>${name}</strong> mang trong mình một ngọn lửa cháy theo một cách rất đặc biệt: <strong>bạn không cần ai châm lửa cho mình. Bạn tự bùng.</strong> Đây không phải sự kiêu ngạo — đây là bản chất. Bạn có một la bàn nội tâm cực kỳ nhạy, và khi bạn đi theo nó, bạn có thể tạo ra những điều mà người khác không nghĩ là có thể.</p>
<p class="nar">Nhưng cũng chính vì vậy, linh hồn số 1 mang một gánh nặng thầm lặng mà ít ai nhìn thấy: gánh nặng của việc <em>luôn phải là người mạnh</em>. Của việc tự lo, tự xử, tự đứng dậy — vì đó là cách bạn đã học từ rất sớm rằng thế giới hoạt động.</p>

<div class="lp-section-title">Thế giới bên trong của bạn</div>
<p class="nar"><strong>${name}</strong> có một trí tuệ chiến lược bẩm sinh: bạn nhìn thấy kết quả trước khi người khác còn đang hỏi câu hỏi đầu tiên. Bạn xử lý thông tin nhanh, đưa ra quyết định nhanh, và thường đúng — điều này đôi khi khiến bạn mất kiên nhẫn với những người cần nhiều thời gian hơn để bắt kịp.</p>
<p class="nar">Bên trong bạn cũng có một nỗi sợ ít được thừa nhận: <strong>sợ trở nên tầm thường, sợ không để lại dấu ấn gì</strong>. Nỗi sợ này thường là nhiên liệu thúc đẩy bạn tiến lên — nhưng nếu không được nhận thức rõ, nó cũng có thể trở thành gánh nặng nội tâm và khiến bạn không bao giờ thực sự hài lòng với những gì đã đạt được.</p>

<div class="lp-section-title">Những gì thực sự nuôi dưỡng linh hồn bạn</div>
<p class="nar">Linh hồn số 1 nạp năng lượng từ:</p>
<ul class="nar-list">
  <li><strong>Quyền tự chủ</strong> — được quyết định cách làm, không phải chỉ được quyết định xem có làm hay không</li>
  <li><strong>Thành quả cụ thể</strong> — nhìn thấy bằng chứng rõ ràng rằng nỗ lực của mình tạo ra sự khác biệt</li>
  <li><strong>Thời gian một mình có chất lượng</strong> — không phải trốn tránh, mà là để tư duy và tái tạo năng lượng</li>
  <li><strong>Được tôn trọng về năng lực</strong> — không cần được khen ngợi hoa mỹ, nhưng cần được đánh giá đúng giá trị</li>
  <li><strong>Thử thách mới</strong> — sự lặp lại không có tiến bộ bào mòn bạn nhanh hơn bất kỳ khó khăn nào</li>
</ul>

<div class="lp-section-title">Dấu hiệu khi linh hồn bạn đang được sống đúng</div>
<ul class="nar-list">
  <li>Bạn cảm thấy hứng thú và có năng lượng với công việc, không chỉ hoàn thành nó cho xong</li>
  <li>Bạn có thể nói "tôi cần giúp đỡ" mà không cảm thấy điều đó làm giảm giá trị của mình</li>
  <li>Bạn có những quan điểm riêng và giữ vững chúng ngay cả khi đứng một mình</li>
  <li>Bạn cho phép người khác chiếu sáng mà không cảm thấy bị đe dọa</li>
</ul>

<div class="lp-section-title">Dấu hiệu cảnh báo — khi linh hồn bị kìm hãm</div>
<ul class="nar-list">
  <li>Bạn trở nên hống hách hoặc bác bỏ ý kiến người khác trước khi nghe hết — đây thường là dấu hiệu bạn đang cảm thấy không được tôn trọng hoặc không được kiểm soát tình thế</li>
  <li>Bạn trở nên hoàn toàn thu mình và im lặng — khi bạn không thể nói hay làm theo cách của mình, bạn rút lui hoàn toàn</li>
  <li>Bạn làm việc quá sức, không biết dừng, vì "nếu tôi không làm thì không ai làm được"</li>
  <li>Bạn có xu hướng bắt đầu nhiều thứ mà không hoàn thành — vì phần thú vị nhất với linh hồn 1 là <em>sự mới mẻ và chinh phục</em>, không phải duy trì</li>
  <li>Bạn đưa ra những quyết định độc đoán và sau đó tự hỏi tại sao người khác không theo</li>
</ul>

<div class="lp-section-title">Trong tình yêu và các mối quan hệ thân mật</div>
<p class="nar"><strong>${name}</strong> yêu theo cách của người lãnh đạo — bạn bảo vệ, bạn hành động, bạn giải quyết vấn đề. Khi ai đó yêu bạn, họ cảm thấy được che chở bởi sức mạnh và sự kiên định của bạn. Đây là điều rất cuốn hút.</p>
<p class="nar">Bạn cần từ đối tác:</p>
<ul class="nar-list">
  <li><strong>Sự độc lập thật sự</strong> — không phải người chỉ nói họ độc lập nhưng liên tục cần bạn xác nhận mọi quyết định</li>
  <li><strong>Không gian mà không cần giải thích</strong> — khi bạn cần một mình, bạn cần đối tác hiểu đó không phải là từ chối mà là nạp lại</li>
  <li><strong>Sự thẳng thắn</strong> — bạn không đọc được những gợi ý tinh tế. Nói thẳng với bạn thì hiệu quả hơn nhiều so với hy vọng bạn sẽ "cảm nhận được"</li>
  <li><strong>Thỉnh thoảng dẫn dắt</strong> — bạn cũng cần được chăm sóc. Nhưng đối tác phải chủ động làm điều đó thay vì chờ bạn yêu cầu — vì bạn thường không yêu cầu</li>
</ul>
<p class="nar"><em>Cạm bẫy phổ biến nhất:</em> Bạn có thể thống trị mối quan hệ mà không nhận ra mình đang làm vậy — vì mọi thứ diễn ra quá tự nhiên với bạn. Người yêu bạn có thể dần dần mất tiếng nói, và đến khi bạn nhận ra thì họ đã mệt mỏi từ lâu rồi.</p>

<div class="lp-section-title">Trong công việc</div>
<p class="nar"><strong>${name}</strong> phát huy tốt nhất trong môi trường:</p>
<ul class="nar-list">
  <li>Có quyền tự chủ cao — được giao mục tiêu, không bị giám sát từng bước</li>
  <li>Vai trò tiên phong: đi đầu, xây dựng từ đầu, mở ra hướng mới</li>
  <li>Được công nhận cụ thể khi đóng góp — không cần khen, cần ghi nhận</li>
  <li>Môi trường thay đổi liên tục — bạn chán sự lặp lại nhanh hơn hầu hết mọi người</li>
</ul>
<p class="nar">Bạn kiệt sức trong môi trường: quan liêu không cho quyền tự chủ, lãnh đạo vi mô (micromanagement), văn hóa đồng thuận quá mức nơi mọi ý kiến đều phải được "thảo luận đến khi tất cả đồng ý".</p>

<div class="lp-section-title">Những gì bạn cần làm — hướng dẫn thực hành</div>
<p class="nar"><strong>1. Học cách "thắng" mà không cần "đánh bại" ai.</strong> Linh hồn số 1 có xu hướng nhìn mọi tình huống qua lăng kính thắng-thua. Hãy thực hành đặt câu hỏi: "Trong tình huống này, thành công trông như thế nào cho <em>tất cả mọi người</em>?" — không chỉ cho mình.</p>
<p class="nar"><strong>2. Tạo ra cơ chế để nhận phản hồi thật sự.</strong> Người xung quanh bạn thường ngại nói thật vì năng lượng mạnh của bạn. Hãy chủ động tạo không gian an toàn để họ phản hồi — và khi họ làm, hãy lắng nghe hết trước khi phản ứng.</p>
<p class="nar"><strong>3. Phân biệt giữa "lãnh đạo" và "kiểm soát".</strong> Lãnh đạo là truyền cảm hứng và định hướng. Kiểm soát là sự lo lắng được đóng gói trong vỏ bọc của năng lực. Mỗi tuần hãy tự hỏi: "Tuần này tôi đang lãnh đạo hay kiểm soát nhiều hơn?"</p>
<p class="nar"><strong>4. Xây dựng thói quen dễ bị tổn thương.</strong> Cho phép ít nhất một người trong cuộc sống của bạn nhìn thấy khi bạn không ổn. Điều này không làm bạn yếu — nó làm bạn thật hơn và mối quan hệ đó sâu hơn.</p>
<p class="nar"><strong>5. Tôn vinh sự hoàn thành, không chỉ sự bắt đầu.</strong> Tạo ra nghi lễ nhỏ để ăn mừng khi hoàn thành điều gì đó — không chỉ khi khởi đầu. Điều này giúp bạn nạp lại ý nghĩa từ những thứ đã làm thay vì luôn chạy đến điều tiếp theo.</p>

<div class="lp-section-title">Điểm mù sâu nhất cần nhận thức</div>
<p class="nar">Điểm mù nguy hiểm nhất của linh hồn số 1 không phải là sự tự phụ — mà là <strong>sự cô đơn trong thành công</strong>. Bạn có thể đạt được mọi thứ bạn muốn và vẫn cảm thấy trống rỗng vì trên đường đi, bạn đã không để ai thực sự đồng hành — hoặc không biết cách.</p>
<p class="nar">Câu hỏi bạn cần tự hỏi thường xuyên: <em>"Khi tôi đạt được điều này — tôi sẽ chia sẻ nó với ai? Và liệu họ có thực sự biết tôi đang vui không — hay tôi sẽ tự mình tận hưởng một mình, như thường lệ?"</em></p>

<div class="insight-box">📌 <strong>Tóm lại:</strong> Linh hồn ${name} đến thế giới này để dẫn đầu — không phải bằng cách đi trước người khác, mà bằng cách <em>là người đủ dũng cảm để bước vào những nơi chưa có dấu chân</em>. Sức mạnh thật sự của số 1 không nằm ở khả năng không cần ai — mà nằm ở khả năng chọn đúng người để đồng hành và tin tưởng họ đủ để thực sự cùng đi.</div>
`,

  2: (name) => `
<p class="nar">Nếu Linh Hồn số 1 là ngọn lửa — thì Linh Hồn số 2 là <strong>nước</strong>: lặng lẽ, sâu thẳm, và có sức mạnh hình thành mọi thứ nó chạm vào mà không cần phô trương. <strong>${name}</strong> mang trong mình một trong những linh hồn tinh tế và phức tạp nhất trong thần số học — không phải vì bạn đặc biệt theo cách rực rỡ, mà vì bạn cảm nhận thế giới ở một tần số mà rất ít người khác tiếp cận được.</p>
<p class="nar">Bạn không chỉ muốn được yêu. Bạn muốn <strong>được hiểu</strong> — từng lớp, từng chiều sâu, từng mâu thuẫn tưởng như không liên quan. Bạn muốn ai đó nhìn thấy cả phần bạn không nói ra và vẫn ở lại. Đây là khao khát tinh tế hơn rất nhiều so với những gì người khác thường tìm kiếm, và cũng chính vì vậy nó khó được đáp ứng hơn.</p>

<div class="lp-section-title">Thế giới bên trong của bạn</div>
<p class="nar"><strong>${name}</strong> có một cuộc sống cảm xúc nội tâm phong phú đến mức đôi khi bản thân bạn cũng bị choáng ngợp bởi nó. Bạn cảm nhận mọi thứ ở độ phân giải cao hơn người bình thường: khi ai đó thay đổi giọng điệu, bạn nhận ra ngay; khi không khí trong phòng họ trở nên căng thẳng, bạn cảm thấy trước cả khi ai đó mở miệng; khi một mối quan hệ đang lung lay, bạn biết — dù chưa có bằng chứng nào.</p>
<p class="nar">Điều này không phải sự nhạy cảm quá mức cần phải "vượt qua". Đây là một <em>hệ thống cảm biến tinh vi</em> — một dạng trí tuệ cảm xúc rất đặc biệt. Vấn đề không phải là bạn cảm nhận quá nhiều; vấn đề là bạn chưa học đủ cách quản lý và sử dụng năng lực này.</p>

<div class="lp-section-title">Những gì thực sự nuôi dưỡng linh hồn bạn</div>
<p class="nar">Linh hồn số 2 không nạp năng lượng từ sự cạnh tranh hay thành tích cá nhân. Bạn nạp năng lượng từ:</p>
<ul class="nar-list">
  <li><strong>Những cuộc trò chuyện thật</strong> — không phải small talk, mà là những cuộc trò chuyện nơi cả hai người thực sự nghe và được nghe</li>
  <li><strong>Cảm giác được cần đến theo cách đúng nghĩa</strong> — khi ai đó tin tưởng tâm sự với bạn, không phải vì họ không có ai khác</li>
  <li><strong>Sự hài hòa trong môi trường</strong> — không khí ở nhà, ở nơi làm việc, trong các mối quan hệ. Khi mọi thứ đang hỗn loạn, bạn kiệt sức ngay cả khi không làm gì cả</li>
  <li><strong>Được hiểu mà không cần phải giải thích</strong> — những khoảnh khắc ai đó "đọc" được bạn trước khi bạn nói ra</li>
  <li><strong>Hợp tác thật sự</strong> — làm việc cùng ai đó theo cách mà cả hai đều cảm thấy được tôn trọng và đóng góp xứng đáng</li>
</ul>

<div class="lp-section-title">Dấu hiệu khi linh hồn bạn đang được nuôi dưỡng đúng cách</div>
<p class="nar">Khi <strong>${name}</strong> đang sống đúng với linh hồn mình, bạn sẽ thấy:</p>
<ul class="nar-list">
  <li>Bạn có thể lắng nghe sâu mà không cảm thấy mình bị nhấn chìm</li>
  <li>Bạn biết điều mình muốn và có thể nói ra — nhẹ nhàng nhưng rõ ràng</li>
  <li>Bạn cảm thấy được kết nối với ít nhất một người theo nghĩa thật sự</li>
  <li>Bạn trở thành người hòa giải tự nhiên — người mà người khác tìm đến khi có mâu thuẫn</li>
  <li>Bạn biết khi nào cần một mình để tái nạp</li>
</ul>

<div class="lp-section-title">Dấu hiệu cảnh báo — khi linh hồn bị tổn thương</div>
<p class="nar">Những biểu hiện dưới đây là tín hiệu cho thấy <strong>${name}</strong> đang hoạt động từ trạng thái thiếu hụt, không phải từ sức mạnh:</p>
<ul class="nar-list">
  <li>Bạn liên tục nói "có" dù muốn nói "không" — vì sợ làm người khác thất vọng</li>
  <li>Bạn cảm thấy cần biết người kia đang cảm thấy gì ngay lập tức, mọi lúc — lo lắng khi không nhận được tin nhắn, khi thái độ ai đó thay đổi dù chỉ một chút</li>
  <li>Sau các cuộc gặp gỡ xã hội, bạn thường "replay" lại những gì mình đã nói và lo lắng mình đã vô tình làm ai đó không vui</li>
  <li>Bạn ôm giữ cảm xúc của người khác như thể đó là trách nhiệm của mình phải giải quyết</li>
  <li>Bạn cảm thấy bị cạn kiệt sau khi ở cạnh người tiêu cực — như thể họ "hút" năng lượng ra khỏi bạn</li>
  <li>Bạn bắt đầu resent những người bạn đang giúp đỡ, nhưng không hiểu tại sao — vì bạn không nhận ra mình đang cho quá nhiều mà nhận quá ít</li>
</ul>

<div class="lp-section-title">Trong tình yêu và các mối quan hệ thân mật</div>
<p class="nar"><strong>${name}</strong> là người yêu mang lại điều hiếm có nhất trong tình yêu: sự <em>hiện diện</em> thật sự. Khi bạn yêu, bạn không chỉ "ở đó" về mặt thể lý — bạn thực sự chú ý, thực sự nhớ, thực sự quan tâm đến những chi tiết nhỏ mà người kia tưởng họ đã quên mất nói đến.</p>
<p class="nar">Bạn cần từ đối tác của mình:</p>
<ul class="nar-list">
  <li><strong>Sự nhất quán cảm xúc</strong> — không phải hoàn hảo, nhưng không lên xuống thất thường theo cách khiến bạn không bao giờ biết mình đang đứng trên nền đất gì</li>
  <li><strong>Lời xác nhận rõ ràng</strong> — linh hồn 2 không đọc được ý nghĩ. Nếu đối tác đang không hài lòng mà không nói, bạn sẽ lo lắng và đoán già đoán non theo những hướng thường tệ hơn thực tế</li>
  <li><strong>Không gian để có ý kiến riêng</strong> — bạn không cần người đồng ý với mọi thứ, bạn cần người tôn trọng quan điểm của bạn dù khác với họ</li>
  <li><strong>Thỉnh thoảng được hỏi "bạn cần gì?"</strong> — vì bạn hiếm khi tự hỏi người khác chăm sóc mình ngược lại</li>
</ul>
<p class="nar"><em>Cạm bẫy phổ biến nhất:</em> Bạn sẽ bị thu hút bởi những người mạnh mẽ và độc lập — họ có vẻ an toàn. Nhưng nếu họ <em>quá</em> khép kín hoặc thiếu empathy, bạn sẽ dành cả mối quan hệ đó để cố gắng kết nối với ai đó không muốn — hoặc không biết cách — được kết nối thật sự.</p>

<div class="lp-section-title">Trong công việc</div>
<p class="nar"><strong>${name}</strong> phát huy tốt nhất trong môi trường:</p>
<ul class="nar-list">
  <li>Có đội nhóm gắn kết, tin tưởng nhau — không phải cạnh tranh nội bộ</li>
  <li>Vai trò đòi hỏi sự lắng nghe và kết nối: tư vấn, hòa giải, nhân sự, chăm sóc khách hàng, giáo dục, y tế, tâm lý</li>
  <li>Có không gian để hợp tác — bạn không làm việc tốt khi bị cô lập hoàn toàn</li>
</ul>
<p class="nar">Ngược lại, bạn kiệt sức nhanh trong môi trường: văn hóa cạnh tranh độc hại, lãnh đạo không minh bạch, hoặc phải xử lý xung đột liên tục mà không được hỗ trợ.</p>

<div class="lp-section-title">Những gì bạn cần làm — hướng dẫn thực hành</div>
<p class="nar"><strong>1. Học cách đặt tên cho nhu cầu của mình trước khi nói ra.</strong> Trước khi bắt đầu một cuộc trò chuyện khó, hãy tự hỏi: "Tôi cần gì từ cuộc trò chuyện này — cần được nghe, cần giải pháp, hay cần được xác nhận rằng cảm xúc của mình là có giá trị?" Biết điều đó trước sẽ giúp bạn hướng dẫn người kia đưa ra đúng thứ bạn cần.</p>
<p class="nar"><strong>2. Thực hành nói "không" từng bước một.</strong> Không cần nói "không" với tất cả mọi thứ ngay lập tức. Hãy bắt đầu bằng cách trì hoãn sự đồng ý: "Để tôi nghĩ thêm và trả lời bạn sau." Điều này tạo ra khoảng trống cho bạn kiểm tra xem mình thực sự muốn làm điều đó không — hay chỉ đang nói "có" vì quen với việc làm vừa lòng người khác.</p>
<p class="nar"><strong>3. Nhận diện "năng lượng vampire" trong cuộc sống.</strong> Liệt kê những người mà sau khi gặp, bạn thường cảm thấy cạn kiệt hơn so với trước. Không cần cắt đứt ngay — nhưng hãy có ý thức kiểm soát mức độ tiếp xúc và không cho phép những cuộc gặp đó đi quá sâu vào các vấn đề cảm xúc của bạn.</p>
<p class="nar"><strong>4. Tạo ra nghi lễ tái nạp cá nhân.</strong> Bạn cần thời gian một mình để "xả" những gì bạn đã hấp thụ từ người khác trong ngày. Đây không phải cô đơn — đây là vệ sinh cảm xúc. Có thể là đi bộ, ngồi thiền, viết nhật ký, hoặc đơn giản là im lặng 20 phút. Đừng bỏ qua điều này khi lịch bận.</p>
<p class="nar"><strong>5. Học cách nhận lại.</strong> Đây là bài học khó nhất nhưng quan trọng nhất. Khi ai đó đề nghị giúp đỡ bạn, hãy thực hành nói "Cảm ơn, tôi cần..." thay vì "Không sao, tôi tự lo được". Bạn không thể tiếp tục cho đi nếu không biết cách được nạp lại.</p>

<div class="lp-section-title">Điểm mù sâu nhất cần nhận thức</div>
<p class="nar">Điều nguy hiểm nhất với linh hồn số 2 không phải là bị từ chối — mà là <strong>bị bỏ qua</strong>. Khi bạn không được nhận ra, không được nghe thấy, không được hiểu — bạn bắt đầu thu mình lại. Và vì bạn rất khéo léo trong việc đọc nhu cầu người khác, bạn biết cách trình bày bản thân theo cách người khác muốn thấy — đến nỗi đôi khi bạn quên mất ai là <em>bạn</em> thực sự, tách khỏi tất cả những kỳ vọng đó.</p>
<p class="nar">Bài kiểm tra quan trọng nhất cho <strong>${name}</strong>: <em>Nếu không có ai cần bạn ngày hôm nay — bạn vẫn biết mình muốn gì không?</em> Đó là câu hỏi mà linh hồn số 2 cần tự hỏi thường xuyên để không trở nên vô hình ngay với chính mình.</p>

<div class="insight-box">📌 <strong>Tóm lại:</strong> Linh hồn ${name} được tạo ra để kết nối — không phải kết nối hời hợt, mà là kết nối theo nghĩa sâu nhất có thể. Sức mạnh thật sự của bạn là khả năng làm cho người khác cảm thấy được thấu hiểu và được hiện diện. Nhưng để làm điều đó bền vững, bạn phải học một nghịch lý: <em>bạn chỉ có thể thực sự kết nối với người khác khi bạn đủ vững chắc trong chính mình để không cần phải hòa tan vào họ.</em></div>
`,

  3: (name) => `
<p class="nar">Linh Hồn số 3 là một vũ trụ sáng tạo đang liên tục tìm cách thoát ra. <strong>${name}</strong> không chỉ sống cuộc đời — bạn đang <em>sáng tác</em> nó. Bạn nghe thấy giai điệu trong những cuộc trò chuyện bình thường, thấy câu chuyện trong những sự kiện mà người khác coi là tẻ nhạt, và có khả năng biến khoảnh khắc nặng nề nhất thành điều gì đó nhẹ nhàng hơn bằng đúng một câu nói đúng lúc.</p>
<p class="nar">Đây là sức mạnh thiên bẩm của bạn. Nhưng nó đi kèm với một nghịch lý: <strong>linh hồn 3 thường ở trên sân khấu cả cuộc đời mà không để ai thực sự nhìn thấy người diễn viên bên dưới.</strong></p>

<div class="lp-section-title">Thế giới bên trong của bạn</div>
<p class="nar"><strong>${name}</strong> có một cuộc sống nội tâm phong phú đến mức đáng kinh ngạc — đầy ắp ý tưởng, hình ảnh, cảm xúc và kết nối bất ngờ giữa những thứ tưởng không liên quan. Bạn đang lên ý tưởng khi đang tắm, đang viết câu chuyện trong đầu khi đang đi xe, đang nhìn thấy tiềm năng của một cuộc trò chuyện trước khi nó bắt đầu.</p>
<p class="nar">Phần khó nhất: <strong>cái đầu của bạn chạy nhanh hơn mức tay và lời nói có thể bắt kịp</strong>. Ý tưởng đến ào ạt — nhưng hoàn thành chúng thì lại là cuộc chiến khác. Điều này không phải lười biếng; đây là cách não sáng tạo hoạt động. Nhưng nếu không được quản lý, nó sẽ dẫn đến núi dự án chưa hoàn thành và cảm giác mình chưa bao giờ thực sự thể hiện được 10% những gì mình có bên trong.</p>

<div class="lp-section-title">Những gì thực sự nuôi dưỡng linh hồn bạn</div>
<ul class="nar-list">
  <li><strong>Biểu đạt không bị kiểm duyệt</strong> — khoảng không gian nơi bạn có thể nói, viết, vẽ, hát, kể chuyện mà không lo bị phán xét</li>
  <li><strong>Phản hồi có chiều sâu</strong> — không phải "hay lắm!", mà là "tôi thấy điều này vì..." Bạn biết ngay lập tức khi ai đó đang khen xã giao so với khi họ thực sự hiểu điều bạn muốn truyền đạt</li>
  <li><strong>Môi trường kích thích sáng tạo</strong> — bạn không làm việc tốt trong môi trường đơn điệu và lặp đi lặp lại</li>
  <li><strong>Người nghe thật sự</strong> — không phải người nghe để chờ đến lượt mình nói, mà người thực sự tiếp nhận điều bạn chia sẻ</li>
  <li><strong>Niềm vui không cần lý do</strong> — bạn cần thỉnh thhoảng được sống thuần túy vì niềm vui, không phải mọi thứ đều phải có mục đích</li>
</ul>

<div class="lp-section-title">Dấu hiệu cảnh báo — khi linh hồn 3 đang bị tắt tiếng</div>
<ul class="nar-list">
  <li>Bạn đang đùa nhiều hơn bình thường — đây thường là dấu hiệu bạn đang che giấu nỗi đau hoặc sự lo lắng bằng humor</li>
  <li>Bạn bắt đầu cảm thấy rằng mọi người không thực sự lắng nghe — hoặc họ nghe nhưng không hiểu</li>
  <li>Bạn bị phân tán, không tập trung được vào bất kỳ dự án nào đủ lâu để hoàn thành</li>
  <li>Bạn đang so sánh sự sáng tạo của mình với người khác và thấy mình thua</li>
  <li>Bạn cảm thấy "cạn" — không có ý tưởng mới, không có hứng khởi — đây là dấu hiệu bạn đã cho đi quá nhiều và chưa nạp lại bằng việc tiêu thụ nghệ thuật và trải nghiệm mới</li>
</ul>

<div class="lp-section-title">Trong tình yêu và các mối quan hệ thân mật</div>
<p class="nar"><strong>${name}</strong> là người bạn đồng hành mang lại màu sắc và sự bất ngờ — không ai biết bữa tối hôm nay sẽ kết thúc như thế nào khi có bạn. Đây là điều thú vị. Nhưng phía sau lớp hào quang đó là một người đang khao khát được nhìn thấy theo cách khác: không phải người "vui tính" hay "thú vị", mà là người có chiều sâu thật sự.</p>
<p class="nar">Bạn cần từ đối tác:</p>
<ul class="nar-list">
  <li><strong>Trí tuệ và sự tò mò</strong> — người có thể bắt kịp tốc độ tư duy của bạn, hoặc ít nhất là trân trọng nó</li>
  <li><strong>Sự kiên định cảm xúc</strong> — khi bạn lên xuống cảm xúc (và bạn sẽ), bạn cần người không hoảng loạn theo</li>
  <li><strong>Sự công nhận cụ thể</strong> — không phải "bạn thú vị lắm", mà là "tôi đặc biệt thích cách bạn nói về..." ✓</li>
  <li><strong>Không gian để xử lý cảm xúc bằng ngôn ngữ</strong> — bạn suy nghĩ bằng cách nói ra. Bạn cần người có thể ngồi nghe bạn "xử lý to" mà không vội vàng đưa ra giải pháp</li>
</ul>
<p class="nar"><em>Cạm bẫy phổ biến nhất:</em> Bạn có thể biến mọi vấn đề thành một câu chuyện thú vị — và điều đó quá hiệu quả đến mức đối tác không nhận ra khi nào bạn đang thực sự đau. Học cách nói thẳng: "Lần này không phải câu chuyện vui. Tôi đang thực sự cần bạn nghe."</p>

<div class="lp-section-title">Trong công việc</div>
<p class="nar"><strong>${name}</strong> phát huy tốt nhất trong:</p>
<ul class="nar-list">
  <li>Môi trường đánh giá cao sự sáng tạo và cách tiếp cận mới — không phải "làm theo quy trình" máy móc</li>
  <li>Vai trò có tính giao tiếp cao: marketing, content, đào tạo, giảng dạy, tư vấn, biểu diễn, viết lách</li>
  <li>Dự án có deadline rõ ràng — paradoxically, áp lực vừa phải giúp não sáng tạo tập trung hơn</li>
  <li>Được cộng tác với người khác — bạn không cần làm một mình; bạn cần người để "bật" ý tưởng cùng</li>
</ul>
<p class="nar">Môi trường kiệt sức: Công việc lặp lại không có sự đa dạng nào, văn hóa "không được cười trong giờ làm việc", hoặc sếp không hiểu và không trân trọng đóng góp sáng tạo của bạn.</p>

<div class="lp-section-title">Những gì bạn cần làm — hướng dẫn thực hành</div>
<p class="nar"><strong>1. Tạo ra "kho lưu trữ" ý tưởng.</strong> Bất kỳ khi nào có ý tưởng — bất kỳ ý tưởng nào — ghi lại ngay, dù chỉ 3 từ. Dùng app ghi chú, sổ tay, voice memo. Đừng để não sáng tạo của bạn phụ thuộc vào trí nhớ.</p>
<p class="nar"><strong>2. Phân biệt giữa "vui vẻ" và "ổn".</strong> Cuối mỗi ngày, dừng lại 5 phút và tự hỏi: "Hôm nay tôi đang vui thật hay đang diễn?" Đây là thói quen đơn giản nhất giúp linh hồn 3 không bị mất mình trong vai diễn.</p>
<p class="nar"><strong>3. Hoàn thành ít nhất một dự án nhỏ mỗi tháng.</strong> Bạn khởi đầu rất nhiều thứ. Hãy chọn một dự án nhỏ và cam kết hoàn thành nó — dù chưa hoàn hảo. Sự hoàn thành sẽ tạo ra cảm giác thỏa mãn mà bạn cần để tiếp tục sáng tạo.</p>
<p class="nar"><strong>4. "Nạp" vào như bạn "xả" ra.</strong> Bạn biểu đạt nhiều — nhưng bạn có đang tiêu thụ đủ nghệ thuật, âm nhạc, sách và trải nghiệm mới để nạp lại không? Đây không phải giải trí — đây là bảo trì sáng tạo.</p>
<p class="nar"><strong>5. Luyện tập nói điều không vui vẻ.</strong> Chọn một người bạn tin tưởng và thực hành chia sẻ điều gì đó khó khăn — mà không biến nó thành câu chuyện. Chỉ cần nói thẳng: "Dạo này tôi không ổn vì..." Điều này không phải yếu đuối — đây là bản năng kết nối thật sự mà bạn đang có nhưng chưa dùng đủ cho chính mình.</p>

<div class="lp-section-title">Điểm mù sâu nhất cần nhận thức</div>
<p class="nar">Linh hồn 3 sợ một điều hơn cả sự phê bình: <strong>sự tầm thường</strong>. Nỗi sợ không đặc sắc, không nổi bật, không tạo ra ấn tượng — nỗi sợ này có thể khiến bạn liên tục biểu diễn và liên tục tìm kiếm sự xác nhận từ bên ngoài, đến mức bạn mất đi sự kết nối với chính những gì bạn thực sự muốn tạo ra.</p>
<p class="nar">Bài kiểm tra quan trọng: <em>Nếu không có ai xem, không ai đọc, không ai biết — bạn có vẫn muốn tạo ra nó không?</em> Khi câu trả lời là "có", đó là khi bạn đang thực sự sáng tạo. Khi câu trả lời là "không chắc" — đó là khi bạn cần dừng lại và hỏi: "Tôi đang làm cái này cho ai?"</p>

<div class="insight-box">📌 <strong>Tóm lại:</strong> Linh hồn ${name} được sinh ra để sáng tạo — không phải vì thế giới yêu cầu, mà vì đây là cách bạn thở. Khi bạn biểu đạt từ chỗ thật sự chứ không phải từ chỗ muốn được chấp thuận, những gì bạn tạo ra sẽ <em>chạm được vào trái tim người khác theo những cách mà chính bạn cũng không dự đoán trước.</em></div>
`,

  4: (name) => `
<p class="nar">Linh Hồn số 4 là kiến trúc sư tâm hồn của thần số học. <strong>${name}</strong> không chỉ muốn tạo ra thứ gì đó — bạn muốn tạo ra thứ gì đó <em>bền vững</em>. Thứ đứng vững qua thời gian. Thứ người khác có thể dựa vào. Thứ vẫn còn đó sau khi bạn không còn ở nữa. Đây không phải nhu cầu để lại di sản theo nghĩa phô trương — đây là nhu cầu sâu sắc về <strong>sự vĩnh cửu trong tác phẩm</strong>.</p>
<p class="nar">Nhưng bên dưới vẻ thực dụng và kiên định của <strong>${name}</strong> là một tâm hồn đang âm thầm sợ một điều: <em>làm sai.</em> Không phải thất bại — mà là làm sai. Và chính điều này đôi khi dẫn đến sự cầu toàn làm bạn tê liệt hơn là bảo vệ bạn.</p>

<div class="lp-section-title">Thế giới bên trong của bạn</div>
<p class="nar"><strong>${name}</strong> có một tư duy hệ thống bẩm sinh: bạn tự động nhìn thấy các bước, các kết nối, các điểm yếu tiềm năng trong bất kỳ kế hoạch nào — ngay cả trước khi người khác biết họ đang lên kế hoạch. Điều này làm bạn trở thành người lập kế hoạch xuất sắc và người mà mọi người muốn có trong đội khi mọi thứ cần được thực thi thực sự.</p>
<p class="nar">Phần ít người thấy: bạn thường mang cảm giác cô đơn kỳ lạ — <strong>cảm giác của người luôn phải là người đáng tin cậy nhất trong phòng</strong>. Bạn hiếm khi cho phép mình được "chưa biết" hay "đang học", vì bạn đã tự đặt ra mức kỳ vọng về năng lực của mình quá cao từ rất lâu rồi.</p>

<div class="lp-section-title">Những gì thực sự nuôi dưỡng linh hồn bạn</div>
<ul class="nar-list">
  <li><strong>Tiến độ hữu hình</strong> — không phải lời khen, mà là bằng chứng thực tế rằng công việc đang tiến về phía trước</li>
  <li><strong>Trật tự và cấu trúc</strong> — không phải sự cứng nhắc, mà là biết rằng có khuôn khổ đáng tin cậy để vận hành bên trong</li>
  <li><strong>Được giao phó thật sự</strong> — không phải được yêu cầu làm việc rồi bị micro-manage</li>
  <li><strong>Sự ổn định về tài chính và vật chất</strong> — không phải sang giàu, mà là biết nền tảng cơ bản đang được bảo đảm</li>
  <li><strong>Hoàn thành những gì đã bắt đầu</strong> — linh hồn 4 tìm thấy sự thỏa mãn sâu sắc trong việc hoàn thiện, không phải trong việc bắt đầu mới</li>
</ul>

<div class="lp-section-title">Dấu hiệu cảnh báo — khi linh hồn 4 đang bị ép đến giới hạn</div>
<ul class="nar-list">
  <li>Bạn trở nên cứng nhắc — từ chối thay đổi kế hoạch kể cả khi có bằng chứng rõ ràng rằng cần thay đổi</li>
  <li>Bạn bắt đầu resent những người "làm ít hơn" — vì bạn luôn gánh phần lớn trách nhiệm</li>
  <li>Bạn không thể nghỉ ngơi mà không cảm thấy tội lỗi rằng có gì đó đang không được làm</li>
  <li>Bạn trở nên cực kỳ phê phán — với người khác vì họ không đủ kỹ càng, và với bản thân vì bạn đã không làm tốt hơn</li>
  <li>Bạn trì hoãn bắt đầu vì chưa có điều kiện hoàn hảo — và điều kiện hoàn hảo không bao giờ đến</li>
</ul>

<div class="lp-section-title">Trong tình yêu và các mối quan hệ thân mật</div>
<p class="nar"><strong>${name}</strong> là người đối tác mà người ta tìm đến khi muốn xây dựng cuộc sống thật sự. Bạn không phải kiểu người lãng mạn bốc đồng, nhưng bạn là người xuất hiện: đúng giờ, giữ lời, và thực sự có mặt ở những khoảnh khắc quan trọng.</p>
<p class="nar">Bạn cần từ đối tác:</p>
<ul class="nar-list">
  <li><strong>Sự đáng tin cậy</strong> — bạn cần biết người kia sẽ ở đó. Sự bất nhất và thất thường cảm xúc là thứ làm bạn bất an sâu nhất</li>
  <li><strong>Tôn trọng nhu cầu về trật tự</strong> — bạn không cần mọi thứ phải hoàn hảo, nhưng bạn cần không gian của mình không bị hỗn loạn</li>
  <li><strong>Được hỏi quan điểm</strong> — bạn có rất nhiều suy nghĩ thực dụng và hữu ích, và bạn muốn được hỏi thay vì chỉ được yêu cầu thực thi</li>
  <li><strong>Nhận ra những cống hiến thầm lặng</strong> — bạn không ồn ào về những gì mình làm. Nhưng được ghi nhận cho những đóng góp đó rất quan trọng với bạn dù bạn không nói ra</li>
</ul>
<p class="nar"><em>Cạm bẫy phổ biến nhất:</em> Bạn có thể biến mối quan hệ thành một <em>dự án</em> — lên kế hoạch, tối ưu hóa và quản lý nó. Nhưng người yêu bạn đôi khi không cần được quản lý; họ cần được <em>hiện diện cùng</em>.</p>

<div class="lp-section-title">Trong công việc</div>
<p class="nar"><strong>${name}</strong> phát huy tốt nhất trong:</p>
<ul class="nar-list">
  <li>Vai trò đòi hỏi sự tỉ mỉ và độ chính xác cao — quản lý dự án, kỹ thuật, tài chính, kiến trúc, pháp lý</li>
  <li>Môi trường có quy trình rõ ràng — bạn không ngại quy trình; bạn làm cho nó hoạt động tốt hơn</li>
  <li>Team nhỏ, đáng tin cậy — bạn làm việc tốt hơn với 3 người đáng tin hơn 30 người ồn ào</li>
</ul>
<p class="nar">Bạn kiệt sức trong: môi trường hỗn loạn không có cấu trúc, lãnh đạo thay đổi hướng đi liên tục, hoặc phải liên tục làm việc với người không giữ cam kết của họ.</p>

<div class="lp-section-title">Những gì bạn cần làm — hướng dẫn thực hành</div>
<p class="nar"><strong>1. Lên lịch nghỉ ngơi như lên lịch họp.</strong> Nghỉ ngơi không phải phần thưởng sau khi làm xong — đây là phần không thể thiếu trong quy trình. Đặt lịch nghỉ vào calendar và giữ nó như một cam kết quan trọng.</p>
<p class="nar"><strong>2. Thực hành nói "đủ tốt rồi".</strong> Đặt tiêu chí "đủ tốt" trước khi bắt đầu một nhiệm vụ — và khi tiêu chí đó được đáp ứng, hãy dừng lại và chuyển sang việc tiếp theo. Sự hoàn thiện vô tận là kẻ thù của sự hoàn thành.</p>
<p class="nar"><strong>3. Chia sẻ quá trình, không chỉ kết quả.</strong> Bạn thường chỉ chia sẻ những gì đã hoàn thành và được kiểm soát tốt. Hãy thử chia sẻ quá trình làm — kể cả những lúc bạn đang vật lộn. Điều này không làm bạn trông yếu; nó làm bạn trông người hơn.</p>
<p class="nar"><strong>4. Phân quyền thật sự.</strong> Nếu bạn có xu hướng làm tất cả một mình vì "làm nhanh hơn", hãy nhớ rằng phân quyền là bảo dưỡng dài hạn, không phải hiệu quả ngắn hạn. Đầu tư thời gian dạy người khác để thoát khỏi vai trò "người không thể thiếu".</p>
<p class="nar"><strong>5. Tìm ít nhất một không gian không có tiêu chuẩn.</strong> Một sở thích, một hoạt động, một mối quan hệ — nơi chất lượng không phải thước đo duy nhất. Nơi bạn được phép đơn giản là tham gia và trải nghiệm, không phải thực hiện và hoàn thiện.</p>

<div class="lp-section-title">Điểm mù sâu nhất cần nhận thức</div>
<p class="nar">Linh hồn số 4 thường gắn liền giá trị bản thân với năng suất và độ tin cậy. Khi một giai đoạn trong cuộc sống buộc bạn phải làm ít đi, bạn có thể rơi vào khủng hoảng bản sắc: <strong>"Nếu tôi không làm được những thứ này, tôi là ai?"</strong></p>
<p class="nar">Câu trả lời cần tìm thấy trước khi câu hỏi đó trở thành khủng hoảng: <em>bạn là người xây dựng — không phải những gì bạn đã xây. Kỹ năng, trí tuệ, phẩm chất của bạn tồn tại hoàn toàn độc lập với bất kỳ thành tựu cụ thể nào.</em></p>

<div class="insight-box">📌 <strong>Tóm lại:</strong> Linh hồn ${name} đến thế giới này để xây dựng những thứ <em>thật</em> — những thứ hoạt động, những thứ tồn tại, những thứ người khác có thể dựa vào. Sức mạnh thật sự của bạn không phải ở việc không bao giờ sai — mà ở sự kiên định bước tiếp khi bạn đã sai và đứng dậy.</div>
`,

  5: (name) => `
<p class="nar">Linh Hồn số 5 là nghịch lý sống động nhất trong thần số học. <strong>${name}</strong> khao khát tự do — nhưng tự do nào? Khi hỏi nhiều người mang số linh hồn này, câu trả lời thực chất không phải "tự do đi bất cứ đâu" mà là: <strong>"tự do để trở thành nhiều phiên bản khác nhau của chính mình mà không bị kẹt trong một chiếc hộp."</strong></p>
<p class="nar">Bạn không chỉ muốn thay đổi môi trường — bạn muốn thay đổi <em>góc nhìn</em>. Bạn muốn hiểu thế giới từ nhiều vị trí khác nhau. Và đây là điều tạo ra sự khác biệt độc đáo của <strong>${name}</strong>: bạn có khả năng giao tiếp và kết nối với hầu hết mọi người ở mọi tầng lớp xã hội — vì bạn đã từng "ở đó", ít nhất là tâm hồn của bạn đã từng chạm đến.</p>

<div class="lp-section-title">Thế giới bên trong của bạn</div>
<p class="nar"><strong>${name}</strong> có một bộ não xử lý thông tin theo cách phi tuyến tính — bạn thấy kết nối giữa những thứ tưởng như không liên quan, nhảy từ ý này sang ý khác nhanh hơn người bình thường, và thường cảm thấy dòng suy nghĩ quá nhanh để lời nói bắt kịp.</p>
<p class="nar">Bên trong, bạn thường có cảm giác mâu thuẫn: vừa muốn lang thang tự do vừa khao khát điều gì đó ổn định để neo đậu vào. <strong>Bạn cần cả hai — chuyển động VÀ điểm neo. Không phải lựa chọn một.</strong> Khi bạn hiểu điều này, bạn ngừng cảm thấy mình "sai" vì không hoàn toàn tự do hoặc hoàn toàn ổn định.</p>

<div class="lp-section-title">Những gì thực sự nuôi dưỡng linh hồn bạn</div>
<ul class="nar-list">
  <li><strong>Sự mới mẻ có chiều sâu</strong> — không phải thay đổi bề mặt, mà là những trải nghiệm thực sự mở ra góc nhìn mới</li>
  <li><strong>Tự do trong cấu trúc</strong> — tốt nhất là khi bạn có khung tổng thể nhưng được tự do trong cách thực hiện</li>
  <li><strong>Các cuộc trò chuyện kích thích trí tuệ</strong> — bạn bùng cháy trong những cuộc trao đổi thật sự thú vị</li>
  <li><strong>Được làm nhiều việc khác nhau</strong> — không phải thiếu chuyên môn, mà là sự đa dạng trong thực tế mỗi ngày</li>
  <li><strong>Linh hoạt về thời gian và không gian</strong> — remote work, flexible hours — những thứ này không phải caprice, đây là điều kiện để bạn làm việc tốt nhất</li>
</ul>

<div class="lp-section-title">Dấu hiệu cảnh báo — khi linh hồn 5 đang chạy trốn thay vì phát triển</div>
<p class="nar">Đây là phần quan trọng nhất với <strong>${name}</strong> — vì linh hồn 5 có xu hướng hợp lý hóa sự di chuyển như là phát triển, trong khi đôi khi chỉ là chạy trốn:</p>
<ul class="nar-list">
  <li>Bạn liên tục thay đổi công việc, thành phố, hoặc mối quan hệ ngay khi mọi thứ trở nên "phức tạp" — trước khi vấn đề được giải quyết</li>
  <li>Bạn lý do hóa bằng cách nói rằng bạn đang "tìm kiếm điều tốt hơn" — nhưng nếu thành thật, đây thường là né tránh sự khó chịu của hiện tại</li>
  <li>Bạn bắt đầu cảm thấy bồn chồn ngay khi cuộc sống trở nên quá dự đoán — ngay cả khi "dự đoán được" đó là điều tốt</li>
  <li>Bạn cảm thấy nản lòng khi mọi thứ đòi hỏi thời gian dài để thấy kết quả</li>
</ul>

<div class="lp-section-title">Trong tình yêu và các mối quan hệ thân mật</div>
<p class="nar"><strong>${name}</strong> là người đối tác sống động, luôn mang đến điều gì đó mới — ý tưởng mới, phiêu lưu mới, góc nhìn mới. Ở bên cạnh bạn không bao giờ thực sự nhàm chán.</p>
<p class="nar">Bạn cần từ đối tác:</p>
<ul class="nar-list">
  <li><strong>Sự an toàn không biến thành sự kiểm soát</strong> — bạn cần người có thể là điểm neo mà không cố gắng buộc bạn vào chỗ đứng đó</li>
  <li><strong>Tự do trong mối quan hệ</strong> — không gian cá nhân, không gian sở thích, không gian bạn bè riêng</li>
  <li><strong>Người đồng hành thích phiêu lưu</strong> — không nhất thiết phải là backpacker, nhưng phải là người trân trọng trải nghiệm mới</li>
  <li><strong>Kiên nhẫn trong những lúc bạn đang "xử lý"</strong> — bạn đôi khi cần biến mất trong đầu mình một lúc</li>
</ul>
<p class="nar"><em>Cạm bẫy phổ biến nhất:</em> Bạn có thể bỏ đi khi mọi thứ trở nên khó khăn và lý do hóa đó là "đây không phải người phù hợp". Đôi khi đúng. Đôi khi bạn đang bỏ đi khỏi sự không thoải mái cần thiết mà tất cả mối quan hệ thật sự đều phải đi qua.</p>

<div class="lp-section-title">Trong công việc</div>
<p class="nar"><strong>${name}</strong> phát huy tốt nhất trong:</p>
<ul class="nar-list">
  <li>Công việc đòi hỏi tư duy đa chiều: sales, marketing, tư vấn chiến lược, viết lách, journalism, du lịch, truyền thông</li>
  <li>Dự án có điểm bắt đầu và kết thúc rõ ràng — không phải những vai trò "duy trì vô thời hạn"</li>
  <li>Môi trường làm việc linh hoạt về địa điểm và thời gian</li>
  <li>Có cơ hội học điều mới liên tục — training, sáng kiến mới, thách thức mới</li>
</ul>
<p class="nar">Bạn kiệt sức trong: vai trò quản trị hành chính lặp lại, môi trường đòi hỏi sự tuân thủ nghiêm ngặt không có lý do rõ ràng.</p>

<div class="lp-section-title">Những gì bạn cần làm — hướng dẫn thực hành</div>
<p class="nar"><strong>1. Phân biệt "muốn thay đổi" và "cần thay đổi".</strong> Trước khi đưa ra quyết định lớn, hãy hỏi: "Tôi đã thực sự thử giải quyết vấn đề ở đây chưa? Hay tôi đang bỏ đi trước khi thử?" Câu trả lời thành thật sẽ chỉ ra hướng đúng.</p>
<p class="nar"><strong>2. Xây dựng "điểm neo" có chủ đích.</strong> Một thói quen hàng ngày, một mối quan hệ bền vững, một dự án dài hạn có ý nghĩa với bạn — những điểm neo này không giới hạn tự do của bạn. Chúng cho bạn nền tảng để phiêu lưu an toàn hơn.</p>
<p class="nar"><strong>3. Cam kết trong khoảng thời gian cụ thể.</strong> Thay vì cam kết "mãi mãi", hãy thử: "Tôi sẽ ở lại và đầu tư nghiêm túc vào điều này trong 6 tháng." Cam kết có thời hạn thường dễ hơn — và thường đủ dài để thấy giá trị thật sự.</p>
<p class="nar"><strong>4. Khám phá chiều sâu như khám phá chiều rộng.</strong> Bạn đã biết cảm giác tuyệt vời của việc khám phá điều mới. Hãy thử áp dụng sự tò mò đó vào việc đào sâu hơn vào một điều bạn đã biết — điều mà 99% người chỉ nhìn bề mặt sẽ không bao giờ thấy.</p>
<p class="nar"><strong>5. Nhật ký "tôi đang phát triển hay đang trốn".</strong> Mỗi khi cảm thấy muốn thay đổi điều gì lớn, viết ra: (a) điều khó chịu ở tình huống hiện tại, (b) liệu nó có thể được giải quyết nếu tôi ở lại không, (c) điều tôi kỳ vọng ở nơi mới. Quy trình này giúp bạn thấy rõ đang thực sự đưa ra quyết định nào.</p>

<div class="lp-section-title">Điểm mù sâu nhất cần nhận thức</div>
<p class="nar">Linh hồn 5 thường sợ một từ hơn bất kỳ điều gì: <strong>bình thường</strong>. Sợ cuộc đời trở nên quá quen thuộc, quá dự đoán, quá "như ai". Và nỗi sợ này khiến bạn đôi khi bỏ đi những thứ thực sự tốt — vì chúng bắt đầu "cảm thấy quá ổn định".</p>
<p class="nar"><em>Điều quan trọng cần nhận ra: sự bình yên không phải sự tù túng. Chiều sâu thật sự — trong một mối quan hệ, một nghề nghiệp, một nơi chốn — có thể là loại phiêu lưu thách thức và phong phú nhất mà bạn từng trải nghiệm. Nếu bạn cho phép nó xảy ra.</em></p>

<div class="insight-box">📌 <strong>Tóm lại:</strong> Linh hồn ${name} được sinh ra để trải nghiệm và kết nối thế giới theo chiều rộng — rồi mang sự khôn ngoan đó về trao cho những người xung quanh. Sức mạnh thật sự của bạn không phải ở việc liên tục di chuyển — mà ở khả năng hiểu và trân trọng sự đa dạng của con người theo một cách mà ít ai làm được.</div>
`,

  6: (name) => `
<p class="nar">Linh Hồn số 6 là năng lượng của tình yêu thương vô điều kiện — và <strong>${name}</strong> mang năng lượng đó theo một cách rất cụ thể: <strong>bạn không chỉ yêu, bạn chăm sóc.</strong> Bạn không chỉ quan tâm, bạn hành động. Khi ai đó trong cuộc sống của bạn đau khổ, một phần bản năng trong bạn lập tức tìm cách giảm nhẹ điều đó — dù không ai yêu cầu.</p>
<p class="nar">Đây là một trong những phẩm chất quý giá nhất trên đời. Nhưng nó đi kèm với một gánh nặng mà không phải ai cũng nhìn thấy: <strong>bạn đang mang một lượng cảm xúc của người khác trên vai mình mà bạn thường chưa biết cách đặt xuống.</strong></p>

<div class="lp-section-title">Thế giới bên trong của bạn</div>
<p class="nar"><strong>${name}</strong> có một nhận thức thẩm mỹ và đạo đức rát nhạy cảm. Bạn không chỉ nhận ra khi điều gì đó không ổn về mặt cảm xúc — bạn còn nhận ra khi điều gì đó không ổn về mặt đạo đức, về mặt hài hòa, về mặt "đúng". Bạn cảm thấy không thoải mái trong môi trường có xung đột chưa được giải quyết — ngay cả khi xung đột đó không liên quan trực tiếp đến bạn.</p>
<p class="nar">Bên trong bạn thường có sự giằng co giữa: <em>muốn chăm sóc người khác</em> và <em>mệt mỏi vì luôn phải là người chăm sóc</em>. Bạn hiếm khi nói ra sự mệt mỏi đó — vì nói ra cảm giác như bạn đang phàn nàn về chính phẩm chất tốt đẹp nhất của mình.</p>

<div class="lp-section-title">Những gì thực sự nuôi dưỡng linh hồn bạn</div>
<ul class="nar-list">
  <li><strong>Sự hài hòa trong môi trường</strong> — không phải sự im lặng gượng gạo, mà là không khí thực sự bình yên và kết nối</li>
  <li><strong>Cảm giác được cần đến theo cách tích cực</strong> — không phải bị lợi dụng, mà là thực sự tạo ra sự khác biệt cho ai đó</li>
  <li><strong>Gia đình và cộng đồng</strong> — cảm giác thuộc về, được chào đón, được đón nhận</li>
  <li><strong>Vẻ đẹp và sự hài hòa thẩm mỹ</strong> — không gian sống và làm việc đẹp, có trật tự nhưng ấm áp</li>
  <li><strong>Được công nhận vì sự quan tâm</strong> — không phải lời khen hoa mỹ, mà là ai đó nhận ra và nói: "Những gì bạn làm có ý nghĩa với tôi"</li>
</ul>

<div class="lp-section-title">Dấu hiệu cảnh báo — khi linh hồn 6 đang hoạt động từ trạng thái mất cân bằng</div>
<ul class="nar-list">
  <li>Bạn can thiệp vào vấn đề của người khác dù họ chưa nhờ — và cảm thấy bị tổn thương khi họ không tiếp nhận sự giúp đỡ của bạn</li>
  <li>Bạn cảm thấy có trách nhiệm làm cho người khác hạnh phúc — và đổ lỗi cho bản thân khi họ không hạnh phúc</li>
  <li>Bạn hy sinh nhu cầu của mình một cách thường xuyên đến mức không còn biết nhu cầu của mình là gì</li>
  <li>Bạn bị thu hút bởi những người "cần được cứu" — và nhận ra mình liên tục ở trong mối quan hệ bất đối xứng</li>
  <li>Bạn tích lũy oán giận thầm lặng vì cho đi quá nhiều mà không nhận lại — nhưng vẫn tiếp tục cho</li>
</ul>

<div class="lp-section-title">Trong tình yêu và các mối quan hệ thân mật</div>
<p class="nar"><strong>${name}</strong> là người yêu tận tâm và chu đáo đến mức hiếm ai sánh được. Bạn nhớ những ngày kỷ niệm, biết món ăn người kia ghét, lo lắng khi họ mệt dù họ chưa nói — và làm tất cả điều đó mà không cần được yêu cầu.</p>
<p class="nar">Bạn cần từ đối tác:</p>
<ul class="nar-list">
  <li><strong>Sự chủ động chăm sóc ngược lại</strong> — bạn cần được chăm sóc, không phải theo cách bạn chăm sóc người khác, nhưng theo cách thực sự thể hiện rằng người kia chú ý đến <em>bạn</em></li>
  <li><strong>Lòng biết ơn thể hiện rõ ràng</strong> — bạn không cần người nói cảm ơn mọi lúc, nhưng bạn cần biết rằng sự hi sinh của mình được nhìn nhận</li>
  <li><strong>Tôn trọng ranh giới của bạn</strong> — kể cả khi bạn chưa đặt ra ranh giới rõ ràng. Người yêu bạn cần đủ nhạy cảm để nhận ra khi bạn đang làm quá sức</li>
  <li><strong>Không biến bạn thành người "giải quyết vấn đề" mặc định</strong> — bạn cần được đối tác như một người bạn đời bình đẳng, không phải người quản lý cảm xúc của họ</li>
</ul>
<p class="nar"><em>Cạm bẫy phổ biến nhất:</em> Bạn sẽ thấy mình bị thu hút bởi người cần bạn nhiều — vì điều đó khiến bạn cảm thấy có giá trị và có mục đích. Nhưng ranh giới giữa "được cần đến" và "bị phụ thuộc vào" rất mong manh và cần được nhận ra sớm.</p>

<div class="lp-section-title">Trong công việc</div>
<p class="nar"><strong>${name}</strong> phát huy tốt nhất trong:</p>
<ul class="nar-list">
  <li>Vai trò chăm sóc và phục vụ: giáo dục, y tế, tư vấn, nhân sự, tâm lý, thiết kế interior, dịch vụ cộng đồng</li>
  <li>Môi trường đề cao sự hài hòa và cộng tác — không phải cạnh tranh nội bộ</li>
  <li>Công việc có tác động rõ ràng đến con người thật — không phải công việc trừu tượng, xa rời thực tế</li>
</ul>
<p class="nar">Bạn kiệt sức trong: môi trường lạnh lùng và vô cảm, văn hóa "mỗi người tự lo cho mình", hoặc công việc yêu cầu bạn bỏ qua nhu cầu cảm xúc của người khác để đạt mục tiêu.</p>

<div class="lp-section-title">Những gì bạn cần làm — hướng dẫn thực hành</div>
<p class="nar"><strong>1. Học cách phân biệt "tôi muốn giúp" và "tôi cần giúp để cảm thấy ổn".</strong> Đây là bài kiểm tra quan trọng: nếu người kia từ chối sự giúp đỡ của bạn và bạn cảm thấy bị tổn thương — đó là dấu hiệu sự giúp đỡ đang phục vụ nhu cầu của bạn nhiều hơn nhu cầu của họ.</p>
<p class="nar"><strong>2. Đặt tên cho nhu cầu của mình.</strong> Trước khi chăm sóc ai đó hôm nay, hãy dành 5 phút tự hỏi: "Tôi đang cần điều gì?" Không cần phải hành động ngay theo nhu cầu đó — chỉ cần biết nó tồn tại.</p>
<p class="nar"><strong>3. Tập nói "tôi cần thời gian cho mình" mà không xin lỗi.</strong> Bạn có xu hướng giải thích dài dòng khi cần không gian. Hãy thực hành nói ngắn gọn: "Tối nay tôi cần thời gian cho mình" — và không thêm "tại vì..." vào sau đó.</p>
<p class="nar"><strong>4. Đặt ranh giới bằng cách nói điều mình muốn, thay vì điều bạn không muốn.</strong> Thay vì "đừng làm phiền tôi khi tôi đang nghỉ", hãy thử: "Tôi sẽ sẵn sàng hỗ trợ sau 8 giờ tối." Ngôn ngữ tích cực dễ giữ hơn.</p>
<p class="nar"><strong>5. Tìm ít nhất một người bạn có thể nhận sự chăm sóc từ họ.</strong> Linh hồn 6 thường cho đi nhiều hơn nhận. Tìm ít nhất một người trong cuộc sống bạn có thể tâm sự và nhận sự hỗ trợ — và thực sự để họ chăm sóc bạn, không phải chỉ lắng nghe rồi nói "tôi ổn rồi".</p>

<div class="lp-section-title">Điểm mù sâu nhất cần nhận thức</div>
<p class="nar">Linh hồn 6 sợ một điều sâu thẳm: <strong>trở thành gánh nặng.</strong> Nỗi sợ này thường là lý do bạn không nói ra khi cần giúp đỡ, không cho thấy khi bạn đang không ổn, và tiếp tục cho đi dù đã cạn kiệt — vì bạn thà tự mình chịu đựng còn hơn để người khác phải lo cho bạn.</p>
<p class="nar">Nghịch lý là: <em>chính điều đó đang ngăn bạn có được mối quan hệ sâu sắc nhất mà bạn khao khát — vì sự thân mật thật sự cần cả hai phía đều được phép dễ bị tổn thương.</em></p>

<div class="insight-box">📌 <strong>Tóm lại:</strong> Linh hồn ${name} đến thế giới này để tạo ra sự hài hòa và chữa lành — không phải qua sự hi sinh, mà qua <em>tình yêu thương đặt đúng ranh giới</em>. Khi bạn học cách phân biệt giữa chăm sóc từ sức mạnh và chăm sóc từ nỗi sợ, sức chữa lành của bạn sẽ trở nên bền vững và thực sự biến đổi cuộc sống của người khác.</div>
`,

  7: (name) => `
<p class="nar">Linh Hồn số 7 là một trong những linh hồn đặc biệt và khó nắm bắt nhất trong thần số học. <strong>${name}</strong> không được thỏa mãn bởi bề mặt của bất cứ điều gì. Bạn không chỉ muốn biết <em>cái gì</em> — bạn muốn biết <em>tại sao</em>, <em>như thế nào</em>, và điều gì ẩn sâu hơn nữa phía sau đó. Đây không phải sự nghi ngờ — đây là một dạng trí tuệ tìm kiếm rất đặc biệt.</p>
<p class="nar">Hầu hết mọi người xung quanh <strong>${name}</strong> trải qua cuộc đời ở độ sâu 1-2 mét. Bạn sống ở độ sâu 10 mét — và điều này tạo ra một dạng cô đơn rất cụ thể: <em>không phải cô đơn vì không có ai xung quanh, mà cô đơn vì hiếm khi có ai đủ sâu để bơi cùng bạn đến nơi bạn đang ở.</em></p>

<div class="lp-section-title">Thế giới bên trong của bạn</div>
<p class="nar"><strong>${name}</strong> có một cuộc sống nội tâm phong phú đến mức đáng kinh ngạc — đầy ắp suy nghĩ, câu hỏi, quan sát và phân tích. Bạn có thể ngồi im lặng trong một buổi họp trong khi đầu óc bạn đang xử lý song song nhiều tầng thông tin. Bạn nhận ra khuôn mẫu mà người khác không thấy. Bạn kết nối những điểm mà người khác nghĩ là ngẫu nhiên.</p>
<p class="nar">Nhưng có một điều bạn thường chưa nói ra: <strong>bạn thường cảm thấy lạc lõng trong đám đông không phải vì bạn không thích người khác — mà vì hầu hết các cuộc trò chuyện đang diễn ra ở mức độ mà bạn đã vượt qua từ rất lâu rồi.</strong> Và sự lịch sự về mặt xã hội đòi hỏi bạn phải giả vờ không biết điều đó.</p>

<div class="lp-section-title">Những gì thực sự nuôi dưỡng linh hồn bạn</div>
<ul class="nar-list">
  <li><strong>Thời gian và không gian để suy nghĩ sâu</strong> — không bị gián đoạn, không bị rush. Bạn thực sự cần điều này như người khác cần nước</li>
  <li><strong>Tri thức và sự khám phá</strong> — sách, nghiên cứu, ý tưởng mới, học những lĩnh vực ngoài vùng an toàn</li>
  <li><strong>Thiên nhiên và sự yên tĩnh</strong> — môi trường tự nhiên có tác dụng hồi phục đặc biệt với linh hồn 7, hơn bất kỳ số nào khác</li>
  <li><strong>Cuộc trò chuyện thật sự có chiều sâu</strong> — hiếm nhưng khi xảy ra, nó nạp năng lượng cho bạn trong nhiều ngày</li>
  <li><strong>Sự công nhận về trí tuệ</strong> — không phải được khen thông minh, mà là có người thực sự hiểu và trân trọng cách bạn nhìn thế giới</li>
</ul>

<div class="lp-section-title">Dấu hiệu cảnh báo — khi linh hồn 7 đang đóng cửa</div>
<ul class="nar-list">
  <li>Bạn rút lui vào thế giới nội tâm và giảm tương tác xã hội đáng kể — đây thường là dấu hiệu bạn đang bị tổn thương và cần được xử lý trong im lặng</li>
  <li>Bạn trở nên hoài nghi và cynical về người khác — "không ai thực sự hiểu bất cứ điều gì" — đây là linh hồn 7 đang đau</li>
  <li>Bạn phân tích cảm xúc của mình thay vì cảm nhận chúng — dùng trí tuệ như lớp giáp thay vì công cụ</li>
  <li>Bạn bắt đầu nghiên cứu thêm thay vì hành động với những gì bạn đã biết — "paralysis by analysis"</li>
  <li>Bạn không chia sẻ suy nghĩ thật của mình vì đã học rằng người khác thường không hiểu hoặc không xử lý được</li>
</ul>

<div class="lp-section-title">Trong tình yêu và các mối quan hệ thân mật</div>
<p class="nar"><strong>${name}</strong> yêu chậm — và đây không phải điểm yếu. Khi bạn đã mở lòng với ai đó, bạn là người đối tác cực kỳ trung thành, sâu sắc và cam kết. Nhưng quá trình mở lòng đó có thể mất nhiều thời gian và thử nghiệm hơn hầu hết mọi người mong đợi.</p>
<p class="nar">Bạn cần từ đối tác:</p>
<ul class="nar-list">
  <li><strong>Kiên nhẫn trong quá trình bạn mở lòng</strong> — không push, không ép. Sự tin tưởng với linh hồn 7 được xây dựng từ từ và không thể bị vội</li>
  <li><strong>Tôn trọng thời gian và không gian cá nhân</strong> — bạn cần nhiều "thời gian một mình có chất lượng" hơn hầu hết các số khác. Đây không phải từ chối tình cảm</li>
  <li><strong>Trí tuệ và sự tò mò</strong> — không nhất thiết phải bằng trình độ học vấn, nhưng cần sự cởi mở với ý tưởng và câu hỏi</li>
  <li><strong>Sự thành thật tuyệt đối</strong> — bạn có radar cực nhạy với sự dối trá và không trung thực. Một khi tin tưởng bị phá vỡ, rất khó phục hồi</li>
</ul>
<p class="nar"><em>Cạm bẫy phổ biến nhất:</em> Bạn có thể ở trong đầu mình quá nhiều trong mối quan hệ — phân tích người kia, phân tích mối quan hệ, phân tích chính cảm xúc của mình — đến mức bỏ lỡ chính trải nghiệm đang xảy ra ngay trước mặt bạn.</p>

<div class="lp-section-title">Trong công việc</div>
<p class="nar"><strong>${name}</strong> phát huy tốt nhất trong:</p>
<ul class="nar-list">
  <li>Công việc đòi hỏi tư duy phân tích sâu: nghiên cứu, khoa học, công nghệ, triết học, tâm lý, chiến lược</li>
  <li>Môi trường cho phép sự độc lập và suy nghĩ độc lập</li>
  <li>Công việc có ý nghĩa sâu xa — bạn không thể làm tốt thứ gì đó bạn thấy là vô nghĩa</li>
  <li>Đủ sự riêng tư để xử lý thông tin và suy nghĩ mà không bị gián đoạn liên tục</li>
</ul>
<p class="nar">Bạn kiệt sức trong: open office ồn ào, công việc bán hàng đòi hỏi small talk liên tục, môi trường yêu cầu bạn phải hướng ngoại và xã giao liên tục để thành công.</p>

<div class="lp-section-title">Những gì bạn cần làm — hướng dẫn thực hành</div>
<p class="nar"><strong>1. Hành động với 70% thông tin.</strong> Linh hồn 7 thường chờ đến khi có đủ thông tin trước khi hành động — nhưng "đủ" với bạn thường là 100%, điều không bao giờ xảy ra. Thực hành ra quyết định khi bạn có 70% thông tin cần thiết và sẵn sàng điều chỉnh.</p>
<p class="nar"><strong>2. Đặt thời hạn cho giai đoạn "nghiên cứu".</strong> Trước khi bắt đầu bất kỳ quyết định lớn nào, hãy đặt ra: "Tôi sẽ nghiên cứu trong X tuần, sau đó tôi sẽ quyết định với thông tin mình có." Điều này giúp tránh paralysis by analysis.</p>
<p class="nar"><strong>3. Tìm "bộ lạc" của mình.</strong> Có thể không có nhiều người hoạt động ở tần số của bạn — nhưng họ tồn tại. Tham gia các cộng đồng xoay quanh lĩnh vực bạn đam mê nhất. Đây là nơi bạn có thể thực sự được thấy.</p>
<p class="nar"><strong>4. Thực hành chia sẻ suy nghĩ "chưa hoàn chỉnh".</strong> Bạn thường chỉ nói khi đã hoàn toàn chắc chắn. Hãy thực hành nói: "Tôi đang suy nghĩ về điều này và chưa chắc..." — điều này mở ra không gian cho cuộc trò chuyện thực sự.</p>
<p class="nar"><strong>5. Kết hợp thời gian trong thiên nhiên vào tua lịch.</strong> Đây không phải lời khuyên mơ hồ — nghiên cứu cho thấy thời gian trong tự nhiên giúp não bộ xử lý thông tin phức tạp tốt hơn. Với linh hồn 7, điều này đặc biệt hiệu quả.</p>

<div class="lp-section-title">Điểm mù sâu nhất cần nhận thức</div>
<p class="nar">Linh hồn 7 đôi khi trở nên <strong>kiêu ngạo về trí tuệ</strong> — không phải vì bồng bột, mà vì đã trải qua quá nhiều lần người khác không hiểu hoặc không theo kịp. Bạn có thể vô tình tạo ra rào cản trong kết nối bằng cách thể hiện (dù không cố ý) rằng bạn thấy quan điểm của người khác là thiếu chín chắn.</p>
<p class="nar">Điều quan trọng cần nhớ: <em>trí tuệ và chiều sâu là những loại khác nhau. Người có thể không có chiều sâu trí tuệ mà bạn có, nhưng có thể có chiều sâu cảm xúc, chiều sâu sáng tạo, hoặc chiều sâu tâm linh mà bạn đang thiếu. Tò mò về các dạng chiều sâu khác nhau — không chỉ dạng bạn quen thuộc.</em></p>

<div class="insight-box">📌 <strong>Tóm lại:</strong> Linh hồn ${name} đến thế giới này để tìm kiếm — và quan trọng hơn, để <em>chia sẻ những gì tìm thấy</em>. Sức mạnh thật sự của bạn không nằm ở việc hiểu nhiều hơn người khác — mà ở khả năng đặt câu hỏi đúng và dẫn người khác đến chỗ nhìn thấy những gì họ chưa bao giờ nhìn thấy trước đây.</div>
`,

  8: (name) => `
<p class="nar">Linh Hồn số 8 là năng lượng của quyền lực — nhưng không phải là quyền lực theo nghĩa thống trị. <strong>${name}</strong> khao khát quyền lực theo nghĩa nguyên thủy nhất của từ này: <strong>khả năng tạo ra thay đổi thực sự trong thế giới thực.</strong> Bạn không muốn ngồi bên lề và bình luận — bạn muốn được trong cuộc, được quyết định, được thấy kết quả.</p>
<p class="nar">Nhưng bên dưới sức mạnh và sự quyết đoán bề ngoài của <strong>${name}</strong> là một nỗi sợ ít ai biết đến: <em>sợ mất kiểm soát.</em> Không phải kiểm soát người khác — mà kiểm soát chính cuộc sống của mình, kết quả của những nỗ lực mình bỏ ra, và sự an toàn vật chất mà bạn coi là nền tảng của tự do thật sự.</p>

<div class="lp-section-title">Thế giới bên trong của bạn</div>
<p class="nar"><strong>${name}</strong> luôn nhìn thế giới qua lăng kính của <em>tiềm năng chưa được khai thác</em>. Bạn nhìn vào một con người và thấy người họ <em>có thể</em> trở thành. Bạn nhìn vào một dự án và thấy giá trị nó <em>có thể</em> tạo ra. Bạn nhìn vào một vấn đề và thấy đòn bẩy để giải quyết nó. Đây là một dạng tư duy chiến lược rất đặc biệt — và rất quý giá.</p>
<p class="nar">Phần ít người thấy: <strong>linh hồn 8 thường mang một mức độ lo lắng nền rất cao về tài chính và sự ổn định vật chất</strong> — dù bạn có đang giàu có hay không. Nỗi lo đó thường không tương xứng với thực tế. Và nó đôi khi là nguyên nhân khiến bạn làm việc quá mức hoặc không bao giờ cảm thấy "đủ".</p>

<div class="lp-section-title">Những gì thực sự nuôi dưỡng linh hồn bạn</div>
<ul class="nar-list">
  <li><strong>Tác động hữu hình</strong> — không phải nỗ lực, mà là kết quả thực sự. Bạn cần thấy điều mình làm tạo ra sự thay đổi có thể đo được</li>
  <li><strong>Quyền tự chủ thực sự</strong> — khả năng đưa ra quyết định quan trọng mà không cần phải xin phép quá nhiều cấp</li>
  <li><strong>Sự an toàn tài chính</strong> — không phải để tiêu, mà để có sự tự do hành động mà nó mang lại</li>
  <li><strong>Được thừa nhận về năng lực</strong> — không phải lời khen, mà là được giao những nhiệm vụ xứng tầm với khả năng thật sự của mình</li>
  <li><strong>Công bằng và chân thật</strong> — bạn có radar cực nhạy với sự giả dối và sự bất công. Môi trường có sự thành thật làm bạn tốt hơn</li>
</ul>

<div class="lp-section-title">Dấu hiệu cảnh báo — khi linh hồn 8 đang hoạt động từ nơi thiếu hụt</div>
<ul class="nar-list">
  <li>Bạn trở nên kiểm soát và độc đoán — muốn kiểm soát mọi kết quả thay vì tin tưởng vào người khác</li>
  <li>Bạn ám ảnh với tiền bạc và tích lũy ngay cả khi bạn đang ổn về mặt tài chính — đây là biểu hiện của sự lo lắng nền về an toàn</li>
  <li>Bạn đối xử với người thân như "nhân viên" — áp dụng tư duy quản lý vào mối quan hệ cá nhân</li>
  <li>Bạn không thể thừa nhận sai và học hỏi từ nó vì cảm thấy điều đó phá vỡ hình ảnh năng lực của mình</li>
  <li>Bạn đo lường giá trị bản thân qua tài sản và địa vị — và cảm thấy rỗng ruột khi không đạt được mốc tiếp theo</li>
</ul>

<div class="lp-section-title">Trong tình yêu và các mối quan hệ thân mật</div>
<p class="nar"><strong>${name}</strong> bảo vệ người mình yêu bằng hành động cụ thể: bạn giải quyết vấn đề, bạn cung cấp sự ổn định, bạn tạo ra môi trường an toàn cho người mình thương. Đây là những phẩm chất rất giá trị.</p>
<p class="nar">Bạn cần từ đối tác:</p>
<ul class="nar-list">
  <li><strong>Sức mạnh độc lập</strong> — bạn không tôn trọng và không thu hút được với người hoàn toàn phụ thuộc vào bạn. Bạn cần người có thể đứng vững trên đôi chân của mình</li>
  <li><strong>Thẳng thắn và trực tiếp</strong> — bạn không có thời gian và không đọc được các tín hiệu gợi ý tinh tế. Nói thẳng với bạn là ngôn ngữ tình yêu hiệu quả nhất</li>
  <li><strong>Hiểu rằng tình yêu của bạn biểu hiện qua hành động</strong> — không phải qua những lời hoa mỹ. Bạn mua bảo hiểm cho gia đình, sửa điều gì đó bị hỏng, lên kế hoạch cho tương lai — đây là cách bạn "nói" yêu</li>
  <li><strong>Không thách thức quyền lực của bạn theo cách hủy hoại</strong> — bạn có thể chấp nhận và thực sự ngưỡng mộ người thách thức bạn theo cách xây dựng, nhưng người liên tục phá vỡ uy tín của bạn sẽ mất đi sự tôn trọng của bạn</li>
</ul>
<p class="nar"><em>Cạm bẫy phổ biến nhất:</em> Bạn có thể trở thành người cung cấp vật chất rất tốt nhưng thiếu vắng về mặt cảm xúc — vì bạn đang "ở ngoài kia kiếm sống" trong khi người thân cần bạn đơn giản là <em>ở đây</em> với họ.</p>

<div class="lp-section-title">Trong công việc</div>
<p class="nar"><strong>${name}</strong> phát huy tốt nhất trong:</p>
<ul class="nar-list">
  <li>Vai trò lãnh đạo và quản lý có tác động thực sự</li>
  <li>Kinh doanh, entrepreneurship, đầu tư</li>
  <li>Bất kỳ lĩnh vực nào nơi kết quả có thể đo được và trực tiếp liên kết với nỗ lực của bạn</li>
  <li>Môi trường thưởng cho hiệu suất thực sự, không phải sự hiện diện hay sự phù hợp văn hóa</li>
</ul>
<p class="nar">Bạn kiệt sức trong: môi trường quan liêu nơi quyết định phải qua 10 cấp phê duyệt, văn hóa "phải chờ đến lượt" bất kể năng lực, hoặc công việc không có tác động hữu hình nào bạn có thể thấy.</p>

<div class="lp-section-title">Những gì bạn cần làm — hướng dẫn thực hành</div>
<p class="nar"><strong>1. Phân biệt "quyền lực để làm gì" vs "quyền lực để có gì".</strong> Linh hồn 8 thường tìm kiếm quyền lực như một mục đích thay vì một phương tiện. Hãy thường xuyên hỏi: "Nếu tôi có tất cả quyền lực/tiền bạc mà tôi muốn — tôi sẽ làm gì với chúng?" Câu trả lời cho bạn biết bạn đang hướng đến điều gì thực sự.</p>
<p class="nar"><strong>2. Luyện tập sự dễ bị tổn thương theo liều lượng nhỏ.</strong> Chọn một người bạn tin tưởng và thực hành chia sẻ sự không chắc chắn, sự lo lắng, hoặc thất bại nhỏ. Điều này không phá vỡ hình ảnh của bạn — nó xây dựng sự tin tưởng thực sự.</p>
<p class="nar"><strong>3. Học cách nhận lại sự hào phóng.</strong> Bạn rất giỏi trong việc cho đi — tài nguyên, cơ hội, sự bảo hộ. Hãy học cách nhận lại sự quan tâm và hỗ trợ từ người khác mà không cảm thấy điều đó làm bạn "mắc nợ".</p>
<p class="nar"><strong>4. Xem xét lại định nghĩa của bạn về "đủ".</strong> Nếu không có terminal point rõ ràng cho "khi nào là đủ tốt/đủ giàu/đủ thành công", bạn sẽ chạy mãi. Hãy viết ra định nghĩa của mình — cụ thể, có thể đo được — về "đủ rồi".</p>
<p class="nar"><strong>5. Đầu tư vào người, không chỉ vào kết quả.</strong> Bạn rất giỏi phát triển tiềm năng của người khác — nhưng thường theo cách hướng đến kết quả. Hãy thực hành quan tâm đến người khác vì bản thân họ, không phải vì họ có thể đóng góp gì.</p>

<div class="lp-section-title">Điểm mù sâu nhất cần nhận thức</div>
<p class="nar">Linh hồn số 8 đôi khi nhầm lẫn giữa <strong>sự tôn trọng và sự sợ hãi</strong>. Bạn có thể tạo ra sự tuân theo từ người khác bằng năng lực và quyền lực của mình — nhưng có một khoảng cách rất lớn giữa người làm theo bạn vì họ tôn trọng tầm nhìn của bạn và người làm theo vì họ sợ hậu quả khi không làm. Loại đầu tiên xây dựng đế chế thực sự; loại sau xây dựng thứ sụp đổ khi bạn không còn ở đó nữa.</p>
<p class="nar"><em>Câu hỏi cần tự hỏi thường xuyên: "Những người xung quanh tôi — họ đang ở đây vì họ muốn, hay vì họ thấy không có lựa chọn nào khác?"</em></p>

<div class="insight-box">📌 <strong>Tóm lại:</strong> Linh hồn ${name} đến thế giới này để tạo ra ảnh hưởng thực sự — không phải qua sự kiểm soát, mà qua <em>sự truyền cảm hứng được hỗ trợ bởi năng lực thực sự</em>. Sức mạnh thật sự của số 8 không nằm ở những gì bạn kiểm soát — mà ở những gì bạn giải phóng.</div>
`,

  9: (name) => `
<p class="nar">Linh Hồn số 9 mang một tình yêu thương không có biên giới — và <strong>${name}</strong> đã cảm nhận điều đó từ rất nhỏ, dù chưa chắc đã biết gọi tên nó là gì. Bạn không chỉ cảm thấy xúc động trước nỗi đau của người thân — bạn xúc động trước nỗi đau của người hoàn toàn xa lạ. Trước bất công xã hội. Trước sự lãng phí của tiềm năng con người. <strong>Linh hồn 9 là linh hồn của người Nhân Từ theo nghĩa vũ trụ.</strong></p>
<p class="nar">Nhưng có một bí mật mà nhiều người mang số 9 chưa nhận ra: <em>dưới bề mặt của tình yêu thương vô điều kiện dành cho thế giới, đôi khi là một khoảng trống rất riêng tư.</em> Bạn lo cho mọi người — nhưng biết bao nhiêu người thực sự lo cho <strong>${name}</strong>?</p>

<div class="lp-section-title">Thế giới bên trong của bạn</div>
<p class="nar"><strong>${name}</strong> sống với một cảm giác liên tục về những gì "nên là" — thế giới nên công bằng hơn, con người nên tốt hơn, hệ thống nên phục vụ con người nhiều hơn. Khoảng cách giữa những gì "nên là" và những gì "đang là" là nguồn gốc của cả sự truyền cảm hứng lẫn nỗi đau mãn tính của linh hồn 9.</p>
<p class="nar">Bên trong, <strong>${name}</strong> thường mang một cảm giác không thể giải thích: <strong>cảm giác đang ở cuối một hành trình dài</strong> — như thể bạn đã đi qua nhiều kinh nghiệm, nhiều va chạm, nhiều mất mát hơn tuổi thật của mình. Điều này không phải trùng hợp: số 9 là số cuối cùng trong chu kỳ, mang trên mình sự tổng hợp của cả một hành trình.</p>

<div class="lp-section-title">Những gì thực sự nuôi dưỡng linh hồn bạn</div>
<ul class="nar-list">
  <li><strong>Cảm giác đóng góp có thật</strong> — không chỉ ý định, mà là thấy điều mình làm thực sự tạo ra sự khác biệt</li>
  <li><strong>Sự nhân từ hai chiều</strong> — bạn cần ít nhất một mối quan hệ trong đó bạn được phép nhận lại</li>
  <li><strong>Nghệ thuật, vẻ đẹp, và chiều sâu</strong> — linh hồn 9 được nuôi dưỡng bởi những biểu đạt chạm đến trí tuệ và cảm xúc cùng lúc</li>
  <li><strong>Sự buông bỏ có ý thức</strong> — kỳ lạ nhưng thật: bạn nạp năng lượng khi biết cách buông tay, không phải khi gánh thêm</li>
  <li><strong>Cộng đồng có mục đích chung</strong> — những người không chỉ chia sẻ sở thích mà chia sẻ giá trị và tầm nhìn</li>
</ul>

<div class="lp-section-title">Dấu hiệu cảnh báo — khi linh hồn 9 đang gánh quá mức</div>
<ul class="nar-list">
  <li>Bạn cảm thấy trách nhiệm về những thứ ngoài tầm kiểm soát của mình — tin tức xấu ảnh hưởng đến bạn như thể bạn có lỗi</li>
  <li>Bạn ở lại quá lâu trong những mối quan hệ hoặc tình huống đã hết thời hạn — vì "bỏ đi cảm thấy như từ bỏ"</li>
  <li>Bạn cho đến khi cạn kiệt — và sau đó cảm thấy tội lỗi vì không còn gì để cho</li>
  <li>Bạn bắt đầu cảm thấy mình là người duy nhất quan tâm — và cả thế giới đều thờ ơ</li>
  <li>Bạn không biết ai mình thực sự là nếu bỏ đi vai trò "người quan tâm đến người khác"</li>
</ul>

<div class="lp-section-title">Trong tình yêu và các mối quan hệ thân mật</div>
<p class="nar"><strong>${name}</strong> yêu theo cách hiếm có: vô điều kiện và trọn vẹn. Người được bạn yêu cảm thấy được chấp nhận với tất cả những gì họ là — kể cả phần họ chưa dám thừa nhận với chính mình. Đây là món quà cực kỳ quý giá.</p>
<p class="nar">Bạn cần từ đối tác:</p>
<ul class="nar-list">
  <li><strong>Sự nhạy cảm thật sự</strong> — không phải người "biết đúng điều cần nói", mà là người thực sự cảm nhận được khi bạn đang không ổn</li>
  <li><strong>Cam kết với giá trị và ý nghĩa</strong> — bạn không thể ở bên ai lâu dài nếu họ sống mà không có mục đích sâu sắc hơn</li>
  <li><strong>Không biến bạn thành người "chữa lành" của họ</strong> — bạn sẽ bị thu hút bởi người cần được chữa lành, nhưng nếu cả mối quan hệ chỉ là bạn chữa lành người kia, bạn sẽ kiệt sức</li>
  <li><strong>Sẵn sàng phát triển</strong> — bạn không thể ở lâu với người từ chối nhìn nhận bản thân mình hoặc thay đổi</li>
</ul>
<p class="nar"><em>Cạm bẫy phổ biến nhất:</em> Bạn yêu tiềm năng của người khác — người họ <em>có thể</em> trở thành — thay vì người họ đang là. Điều này dẫn đến những mối quan hệ dài lâu và đầy kiên nhẫn với người chưa sẵn sàng thay đổi, trong khi bạn đang cạn dần.</p>

<div class="lp-section-title">Trong công việc</div>
<p class="nar"><strong>${name}</strong> phát huy tốt nhất trong:</p>
<ul class="nar-list">
  <li>Công việc có mục đích xã hội rõ ràng: phi lợi nhuận, giáo dục, y tế, tư vấn tâm lý, nghệ thuật xã hội</li>
  <li>Vai trò lãnh đạo có tầm nhìn — nơi bạn có thể truyền cảm hứng cho người khác bằng mục đích chứ không chỉ bằng số liệu</li>
  <li>Công việc đòi hỏi sự đồng cảm và trí tuệ cảm xúc — nơi bạn thấy và hiểu con người ở chiều sâu</li>
</ul>
<p class="nar">Bạn kiệt sức trong: môi trường thuần túy lợi nhuận không có ý nghĩa cao hơn, nơi mọi quyết định chỉ dựa trên số liệu mà không quan tâm đến con người.</p>

<div class="lp-section-title">Những gì bạn cần làm — hướng dẫn thực hành</div>
<p class="nar"><strong>1. Thực hành nghệ thuật "buông tay đúng lúc".</strong> Không phải mọi tình huống đều cần bạn cứu. Không phải mọi người đều cần được chữa lành bởi bạn. Đặt câu hỏi: "Đây có phải việc của tôi không? Và người này có thực sự muốn tôi giúp không?"</p>
<p class="nar"><strong>2. Xác định "tầm nhìn cá nhân" của mình.</strong> Linh hồn 9 thường dễ bị cuốn vào nhiều nguyên nhân tốt đẹp nhưng mất đi sự tập trung. Hãy xác định: điều gì <em>thực sự</em> là ưu tiên của bạn? Bạn muốn thế giới này tốt hơn ở khía cạnh nào cụ thể? Đầu tư sâu vào đó.</p>
<p class="nar"><strong>3. Tạo ra "nghi lễ buông bỏ" định kỳ.</strong> Mỗi tháng, dành thời gian để nhận diện những gì bạn đang gánh mà không thuộc về mình — cảm xúc của người khác, kết quả ngoài tầm kiểm soát, kỳ vọng của người khác. Sau đó chủ động "đặt xuống" những thứ đó trong đầu.</p>
<p class="nar"><strong>4. Học cách nhận sự giúp đỡ với lòng biết ơn, không phải cảm giác mang nợ.</strong> Bạn thường cảm thấy không thoải mái khi nhận vì "người khác cần hơn mình". Hãy thực hành câu đơn giản: "Cảm ơn. Điều này có ý nghĩa với tôi."</p>
<p class="nar"><strong>5. Đầu tư vào bản thân mình như bạn đầu tư vào người khác.</strong> Bạn sẽ hy sinh giờ ngủ, bữa ăn, và thời gian nghỉ ngơi cho người khác mà không chớp mắt. Hãy áp dụng cùng mức độ quan tâm đó cho chính mình — ít nhất là 20% mức bạn đang dành cho người khác.</p>

<div class="lp-section-title">Điểm mù sâu nhất cần nhận thức</div>
<p class="nar">Linh hồn 9 đôi khi sử dụng việc quan tâm đến người khác như một cách để <strong>tránh đối mặt với những vết thương chưa được chữa lành của chính mình</strong>. Luôn có ai đó cần giúp đỡ, luôn có điều gì đó quan trọng hơn để giải quyết — và điều đó cho phép bạn không phải ngồi yên với chính mình.</p>
<p class="nar">Câu hỏi quan trọng nhất: <em>"Nếu không có ai cần tôi hôm nay — tôi sẽ cảm thấy gì? Và điều đó nói lên điều gì về mối quan hệ của tôi với chính mình?"</em></p>

<div class="insight-box">📌 <strong>Tóm lại:</strong> Linh hồn ${name} là hiện thân của lòng nhân từ — nhưng lòng nhân từ sâu sắc nhất bắt đầu từ bên trong. Khi bạn học cách chữa lành chính mình với cùng mức độ kiên nhẫn và tình yêu thương mà bạn dành cho người khác, bạn sẽ trở thành <em>kênh chữa lành thực sự</em> chứ không phải người gánh thêm vết thương của người khác.</div>
`,

  11: (name) => `
<p class="nar">Số 11 là con số chủ đầu tiên — và <strong>${name}</strong> mang một trong những linh hồn đặc biệt và tinh tế nhất trong thần số học. Bạn không sống ở thế giới này theo cách người khác sống. <strong>Bạn cảm nhận nó theo những tần số mà hầu hết người khác không tiếp cận được.</strong> Đây vừa là ân sủng phi thường vừa là thách thức xuyên suốt cuộc đời bạn.</p>
<p class="nar">Linh hồn 11 được gọi là "Nhà Tiên Tri" không phải vì bạn nhìn thấy tương lai — mà vì bạn <em>cảm nhận được sự thật trước khi nó được chứng minh</em>. Bạn biết điều gì đó trước khi có bằng chứng. Bạn nhận ra khi ai đó không thành thật dù lời họ hoàn hảo. Bạn cảm thấy được năng lượng của căn phòng khi vừa bước vào. Đây không phải trí tưởng tượng — đây là năng lực thật sự.</p>

<div class="lp-section-title">Thế giới bên trong của bạn</div>
<p class="nar"><strong>${name}</strong> sống với một cường độ nội tâm không ngừng — suy nghĩ, cảm xúc, linh cảm và ý tưởng đến ào ạt và thường xuyên. Bể chứa trải nghiệm nội tâm của bạn lớn hơn nhiều so với hầu hết những người bạn biết, và điều này tạo ra cả sự phong phú lẫn sự mệt mỏi đặc thù của linh hồn 11.</p>
<p class="nar">Bạn có thể cảm thấy mình đang sống ở hai tốc độ cùng lúc: <strong>một phần của bạn đang nhận và xử lý thông tin ở cường độ cao trong khi phần còn lại đang cố gắng duy trì sự hiện diện bình thường trong thế giới hàng ngày.</strong> Điều này giải thích sự mệt mỏi mà bạn thường không giải thích được cho người khác.</p>

<div class="lp-section-title">Những gì thực sự nuôi dưỡng linh hồn bạn</div>
<ul class="nar-list">
  <li><strong>Thời gian yên tĩnh thật sự</strong> — không phải thư giãn thụ động, mà là thời gian trong sự im lặng hoàn toàn để giải phóng những gì đã tích lũy</li>
  <li><strong>Thiên nhiên và không gian mở</strong> — môi trường tự nhiên giúp linh hồn 11 "reset" hiệu quả hơn bất kỳ hoạt động nào khác</li>
  <li><strong>Kết nối có chiều sâu với ít người</strong> — không cần mạng lưới rộng, cần mối quan hệ thật với ít người hiểu bạn thật sự</li>
  <li><strong>Sự sáng tạo như con đường truyền tải</strong> — khi bạn tạo ra — nghệ thuật, âm nhạc, viết lách, giảng dạy — bạn đang chuyển hóa năng lượng thay vì chỉ gánh nó</li>
  <li><strong>Thực hành tâm linh hoặc thiền định</strong> — bất kỳ thực hành nào giúp bạn "trung tâm hóa" và không bị cuốn theo năng lượng của môi trường xung quanh</li>
</ul>

<div class="lp-section-title">Dấu hiệu cảnh báo — khi linh hồn 11 đang quá tải</div>
<ul class="nar-list">
  <li>Bạn cảm thấy cực kỳ kiệt sức sau khi ở nơi đông người hoặc trong môi trường có nhiều xung đột — đây không phải hướng nội bình thường, đây là quá tải cảm biến</li>
  <li>Bạn bắt đầu lo lắng mãn tính — khi linh hồn 11 không có nơi để "xả", lo lắng biến thành trạng thái nền</li>
  <li>Bạn cảm thấy không thực tế (dissociation) — cảm giác như mình đang quan sát cuộc sống của mình từ bên ngoài</li>
  <li>Khả năng trực giác của bạn bắt đầu mờ đi và bạn không còn tin vào linh cảm của mình</li>
  <li>Bạn rút lui hoàn toàn khỏi các mối quan hệ — thay vì chỉ cần "thời gian nạp lại", bạn trở nên né tránh hoàn toàn</li>
</ul>

<div class="lp-section-title">Trong tình yêu và các mối quan hệ thân mật</div>
<p class="nar"><strong>${name}</strong> là người đối tác có độ nhạy cảm cảm xúc phi thường — bạn nhận ra khi người yêu mình đang không ổn trước khi họ biết cách diễn đạt điều đó. Bạn chú ý đến những chi tiết mà người khác bỏ qua. Bạn là người kết nối ở chiều sâu — và điều này làm cho mối quan hệ với bạn trở nên đặc biệt theo cách không thể lặp lại.</p>
<p class="nar">Bạn cần từ đối tác:</p>
<ul class="nar-list">
  <li><strong>Sự kiên nhẫn với nhịp điệu của bạn</strong> — bạn có thể cần nhiều hơn thời gian một mình so với hầu hết người. Đây không phải từ chối tình cảm</li>
  <li><strong>Sự thành thật và minh bạch cảm xúc</strong> — bạn sẽ cảm nhận được khi người kia đang che giấu gì đó. Điều tệ nhất không phải thực tế tệ, mà là bị làm cho nghi ngờ chính cảm nhận của mình</li>
  <li><strong>Tôn trọng sự nhạy cảm của bạn</strong> — không nói "bạn quá nhạy cảm" hay "đừng cảm thấy như vậy" — điều này không giúp ích và gây tổn thương sâu hơn bạn chia sẻ</li>
  <li><strong>Sự ổn định và kiên định cảm xúc</strong> — bạn hấp thụ năng lượng xung quanh mình. Đối tác có năng lượng bình ổn giúp bạn cân bằng; đối tác hỗn loạn cảm xúc làm bạn kiệt sức</li>
</ul>
<p class="nar"><em>Cạm bẫy phổ biến nhất:</em> Bạn có thể không tin vào trực giác của mình trong mối quan hệ — vì bạn đã học rằng "bạn quá nhạy cảm" — và vì vậy ở lại quá lâu trong những tình huống mà trực giác đã cảnh báo bạn từ rất lâu trước.</p>

<div class="lp-section-title">Trong công việc</div>
<p class="nar"><strong>${name}</strong> phát huy tốt nhất trong:</p>
<ul class="nar-list">
  <li>Vai trò truyền cảm hứng và hướng dẫn: giảng dạy, tư vấn, coaching, lãnh đạo tâm linh, nghệ thuật biểu diễn</li>
  <li>Công việc đòi hỏi trực giác cao: trị liệu, tư vấn chiến lược, sáng tạo nội dung có chiều sâu</li>
  <li>Môi trường ổn định về năng lượng — không có xung đột nội bộ liên tục hay sự bất nhất văn hóa</li>
</ul>
<p class="nar">Bạn kiệt sức trong: môi trường cực kỳ ồn ào và bận rộn, công việc yêu cầu tắt cảm xúc để được coi là "chuyên nghiệp", hoặc môi trường nơi trực giác bị coi là không đáng tin cậy.</p>

<div class="lp-section-title">Những gì bạn cần làm — hướng dẫn thực hành</div>
<p class="nar"><strong>1. Xây dựng "vệ sinh năng lượng" hàng ngày.</strong> Mỗi ngày, dành ít nhất 20-30 phút trong sự yên tĩnh hoàn toàn — không màn hình, không âm nhạc, không cuộc trò chuyện. Đây không phải lười biếng; đây là bảo trì thiết yếu cho hệ thống của bạn.</p>
<p class="nar"><strong>2. Học cách phân biệt "cảm xúc của mình" và "cảm xúc đã hấp thụ từ người khác".</strong> Đây là kỹ năng quan trọng nhất của linh hồn 11. Hỏi: "Cảm giác này có phải của tôi không?" Nếu không chắc, hãy thử: "Tôi có đang xử lý cảm xúc của ai đó khác không?"</p>
<p class="nar"><strong>3. Tin vào trực giác của mình.</strong> Ghi lại những linh cảm và sau đó theo dõi xem chúng có đúng không. Phần lớn thời gian với linh hồn 11, câu trả lời đầu tiên là câu trả lời đúng. Bạn cần bằng chứng của chính mình để tin vào điều này.</p>
<p class="nar"><strong>4. Chọn lọc môi trường và người tiếp xúc có ý thức hơn.</strong> Bạn không thể kiểm soát mọi môi trường — nhưng bạn có thể học cách giảm thiểu tiếp xúc với những người và nơi làm bạn kiệt sức không cần thiết.</p>
<p class="nar"><strong>5. Tìm kênh biểu đạt phù hợp với bạn.</strong> Viết, vẽ, nhạc, khiêu vũ, thiền định — bất kỳ thực hành nào giúp bạn "xả" những gì đang tích lũy bên trong. Không có kênh này, linh hồn 11 dễ trở nên quá tải.</p>

<div class="lp-section-title">Điểm mù sâu nhất cần nhận thức</div>
<p class="nar">Linh hồn 11 đôi khi sợ chính sức mạnh của mình. Sợ trở nên "quá nhiều" cho người khác. Sợ rằng nếu bày tỏ khả năng cảm nhận thật sự của mình, người khác sẽ nghĩ mình kỳ lạ hoặc không bình thường. Và điều này dẫn đến nhiều năm <strong>tự thu nhỏ</strong> — cố gắng trở nên bình thường hơn, ít nhạy cảm hơn, ít "nhiều" hơn.</p>
<p class="nar"><em>Điều mà số 11 cần nghe: sự nhạy cảm của bạn không phải điểm yếu cần khắc phục — đây là món quà cần được học cách sử dụng. Thế giới cần những người có thể cảm nhận và truyền tải những gì người khác không thấy. Bạn là một trong số ít người đó.</em></p>

<div class="insight-box">📌 <strong>Tóm lại:</strong> Linh hồn ${name} là một trong những năng lượng quý hiếm nhất — có khả năng cảm nhận, truyền tải và truyền cảm hứng theo những cách vượt qua lý trí thông thường. Khi bạn học cách quản lý và bảo vệ năng lực đặc biệt đó thay vì bị nó kiểm soát, bạn có thể trở thành một trong những người thực sự <em>làm thay đổi những căn phòng mà họ bước vào</em>.</div>
`,

  22: (name) => `
<p class="nar">Linh Hồn số 22 — Người Xây Dựng Bậc Cao — là con số chủ hiếm hoi nhất và có tiềm năng lớn nhất trong thần số học. <strong>${name}</strong> được sinh ra với một tầm nhìn không chỉ vượt qua cái cá nhân mà vượt qua cả thời đại. <strong>Bạn không đến thế giới này để xây dựng cho mình — bạn đến để xây dựng cho thế hệ tiếp theo.</strong></p>
<p class="nar">Nhưng đây cũng là nguồn gốc của một trong những thách thức sâu nhất của linh hồn 22: <em>khi tầm nhìn đủ lớn để phục vụ nhiều thế hệ, áp lực của nó có thể trở nên tê liệt.</em> Nhiều người mang số 22 dành cả đời chuẩn bị cho một việc lớn mà họ chưa bao giờ thực sự bắt đầu — vì không bao giờ cảm thấy "đủ sẵn sàng".</p>

<div class="lp-section-title">Thế giới bên trong của bạn</div>
<p class="nar"><strong>${name}</strong> nhìn thế giới qua lăng kính của những gì <em>có thể được xây dựng</em> — không phải những gì đang tồn tại. Bạn nhìn vào một vấn đề xã hội và thấy ngay một hệ thống có thể giải quyết nó. Bạn nhìn vào một cộng đồng và thấy tiềm năng chưa được khai thác. Bạn nhìn vào thất bại của người khác và thấy bài học để xây dựng điều gì đó không thể thất bại theo cách đó.</p>
<p class="nar">Bên trong, <strong>${name}</strong> thường mang một cảm giác kỳ lạ: <strong>cảm giác rằng mình đang không sống hết tiềm năng của mình</strong> — rằng điều mình đang làm là chưa đủ, chưa đủ lớn, chưa đủ có ý nghĩa. Nếu không được nhận thức, cảm giác này có thể trở thành nguồn gốc của sự bất an mãn tính.</p>

<div class="lp-section-title">Những gì thực sự nuôi dưỡng linh hồn bạn</div>
<ul class="nar-list">
  <li><strong>Tiến độ rõ ràng trên tầm nhìn lớn</strong> — bạn cần thấy rằng điều lớn đang được xây dựng, dù chậm</li>
  <li><strong>Đội ngũ đủ tầm nhìn để hiểu những gì bạn đang cố xây dựng</strong> — cô đơn nhất của số 22 là không tìm được người đồng hành ở cùng tần số</li>
  <li><strong>Công nhận về tầm nhìn, không chỉ về kết quả</strong> — bạn cần ít nhất một người có thể nhìn thấy và tin vào những gì bạn đang hướng tới</li>
  <li><strong>Nền tảng vững chắc để dám mơ lớn</strong> — linh hồn 22 = 4 + 4. Bạn cần sự ổn định để duy trì tầm nhìn dài hạn</li>
  <li><strong>Những thành công nhỏ có ý nghĩa</strong> — bằng chứng nhỏ dọc theo đường dài giúp bạn tiếp tục tin vào tầm nhìn</li>
</ul>

<div class="lp-section-title">Dấu hiệu cảnh báo — khi linh hồn 22 đang bị kìm hãm</div>
<ul class="nar-list">
  <li>Bạn có nhiều kế hoạch lớn nhưng hiếm khi bắt đầu — "chưa đúng thời điểm", "chưa đủ nguồn lực"</li>
  <li>Bạn cảm thấy trách nhiệm về những điều ngoài tầm kiểm soát của mình — gánh nặng của "sứ mệnh" trở thành áp lực đè bẹp</li>
  <li>Bạn bắt đầu thu mình lại về phía an toàn của số 4 — làm những việc nhỏ, thực tế, có thể kiểm soát — thay vì những gì thực sự kêu gọi bạn</li>
  <li>Bạn cảm thấy mình chưa xứng đáng với tầm nhìn của chính mình — cần thêm kỹ năng, thêm kinh nghiệm, thêm bằng cấp</li>
  <li>Bạn kiệt sức sau những nỗ lực quá sức trong thời gian ngắn — vì không có chiến lược bền vững cho công cuộc dài hạn</li>
</ul>

<div class="lp-section-title">Trong tình yêu và các mối quan hệ thân mật</div>
<p class="nar"><strong>${name}</strong> là người đối tác đầy hoài bão và tận tâm — khi bạn cam kết với ai, bạn cam kết theo cách sâu sắc và dài hạn. Bạn không yêu theo cách nhỏ bé.</p>
<p class="nar">Bạn cần từ đối tác:</p>
<ul class="nar-list">
  <li><strong>Hiểu và tôn trọng sứ mệnh của bạn</strong> — không nhất thiết phải chia sẻ cùng tầm nhìn, nhưng phải đủ rộng lượng để không biến sứ mệnh của bạn thành cạnh tranh trong mối quan hệ</li>
  <li><strong>Sự ổn định cảm xúc</strong> — bạn đang gánh một tầm nhìn lớn; bạn cần đối tác là điểm neo, không phải thêm gánh nặng</li>
  <li><strong>Kiên nhẫn với quá trình dài</strong> — điều bạn xây dựng thường không có kết quả ngay lập tức. Bạn cần người hiểu rằng hạt giống cần thời gian để thành cây lớn</li>
  <li><strong>Nhắc nhở bạn về con người ở hiện tại</strong> — bạn thường sống trong tương lai. Bạn cần ai đó nhắc rằng cuộc sống đang xảy ra <em>ngay bây giờ</em></li>
</ul>
<p class="nar"><em>Cạm bẫy phổ biến nhất:</em> Bạn có thể hi sinh mối quan hệ trên bàn thờ của "sứ mệnh" — ưu tiên dự án, tầm nhìn và di sản đến mức người bên cạnh bạn cảm thấy là thứ yếu. Sứ mệnh lớn cần người bên cạnh. Đừng để họ trở thành giá phải trả.</p>

<div class="lp-section-title">Trong công việc</div>
<p class="nar"><strong>${name}</strong> phát huy tốt nhất khi:</p>
<ul class="nar-list">
  <li>Được trao quyền thực sự để xây dựng điều gì đó mới từ đầu hoặc cải cách hệ thống từ gốc</li>
  <li>Có đội ngũ mạnh để thực thi — bạn giỏi về tầm nhìn và kiến trúc; bạn cần người giỏi về chi tiết thực thi</li>
  <li>Làm việc trong những lĩnh vực có tác động xã hội scalable: giáo dục, y tế, hạ tầng xã hội, chính sách công, công nghệ xã hội</li>
  <li>Có đủ tài nguyên để không phải chọn giữa tầm nhìn và sinh tồn</li>
</ul>

<div class="lp-section-title">Những gì bạn cần làm — hướng dẫn thực hành</div>
<p class="nar"><strong>1. Chia nhỏ tầm nhìn lớn thành bước tiếp theo cụ thể.</strong> Tầm nhìn lớn không có nghĩa là bước tiếp theo phải lớn. Hỏi: "Bước nhỏ nhất tôi có thể làm hôm nay để tiến về phía tầm nhìn đó là gì?" Rồi làm bước đó.</p>
<p class="nar"><strong>2. Bắt đầu trước khi cảm thấy sẵn sàng.</strong> Đây là bài học khó nhất nhưng quan trọng nhất của số 22. Bạn sẽ không bao giờ hoàn toàn sẵn sàng — vì tầm nhìn của bạn luôn lớn hơn năng lực hiện tại của bạn. Đó là bản chất của nó.</p>
<p class="nar"><strong>3. Xây dựng đội ngũ sớm.</strong> Đừng chờ cho đến khi bạn có đủ tất cả kỹ năng. Tìm người bổ sung những gì bạn chưa có. Số 22 ở một mình không xây được di sản — số 22 xây di sản qua người khác.</p>
<p class="nar"><strong>4. Đặt ra định nghĩa rõ ràng về "đủ" trong mỗi giai đoạn.</strong> Vì tầm nhìn của bạn là vô hạn, bạn cần đặt ra những cột mốc hữu hạn: "Trong 3 năm tới, thành công trông như thế nào?" Không phải để giới hạn tầm nhìn, mà để có thể ăn mừng và nạp lại.</p>
<p class="nar"><strong>5. Chăm sóc nền tảng cá nhân của mình.</strong> Số 22 = 4 + 4. Nền tảng là tất cả. Sức khỏe, mối quan hệ thân thiết, tài chính cơ bản — những thứ này không phải là xa xỉ. Chúng là hệ thống nâng đỡ tầm nhìn lớn của bạn.</p>

<div class="lp-section-title">Điểm mù sâu nhất cần nhận thức</div>
<p class="nar">Nhiều người mang linh hồn 22 mãi không bắt đầu vì một lý do đặc biệt: <strong>họ đánh đồng "chuẩn bị" với "hành động".</strong> Đọc thêm một cuốn sách nữa. Học thêm một kỹ năng nữa. Chờ đúng thời điểm. Chờ đủ tự tin. Và trong khi đó, tầm nhìn vẫn ở trong đầu, chưa bao giờ được bắt đầu.</p>
<p class="nar"><em>Sự thật khó chịu: tầm nhìn lớn không chờ đợi người hoàn hảo để thực hiện nó. Nó chờ đợi người đủ dũng cảm để bắt đầu chưa hoàn hảo.</em></p>

<div class="insight-box">📌 <strong>Tóm lại:</strong> Linh hồn ${name} đến thế giới này để xây dựng — không phải xây dựng cho bản thân, mà xây dựng cho thế hệ tiếp theo. Bắt đầu nhỏ, kiên trì mỗi ngày, và tin vào quy mô của tầm nhìn mình mang theo. Thế giới đang chờ những gì bạn <em>chưa xây xong</em> — không phải vì bạn chưa đủ giỏi, mà vì bạn chưa bắt đầu.</div>
`,


};

// ─── MATURITY NUMBER — Deep Narrative Templates (Trưởng Thành) ────────────────
// Số Trưởng Thành = Đường Đời + Sứ Mệnh. Nó mô tả phiên bản viên mãn nhất
// của bạn — người bạn đang trở thành khi hai nửa cuộc đời hợp nhất.
// ─────────────────────────────────────────────────────────────────────────────────

NarrativeTemplates.maturity = {

  1: (name) => `
<p class="nar">Khi <strong>${name}</strong> bước qua nửa cuộc đời, một người lãnh đạo thật sự đang thức tỉnh bên trong. Số Trưởng Thành 1 mang thông điệp: giai đoạn sau là thời gian để bạn <strong>đứng vững trên lựa chọn của chính mình</strong> — không cần sự xác nhận từ bên ngoài như trước nữa.</p>
<p class="nar">Trong những năm trước đó, bạn có thể đã sống theo những kỳ vọng — gia đình, xã hội, nghề nghiệp. Giai đoạn trưởng thành với số 1 mời gọi bạn <em>trở lại với tầm nhìn ban đầu của chính mình</em>. Điều gì bạn thực sự muốn xây dựng? Điều gì bạn muốn là di sản cá nhân?</p>
<div class="lp-section-title">Biểu hiện trong nửa cuộc đời sau</div>
<p class="nar"><strong>${name}</strong> sẽ ngày càng ít chịu đựng sự thỏa hiệp không cần thiết. Bạn trở nên rõ ràng hơn về ranh giới, quyết đoán hơn trong lựa chọn, và can đảm hơn trong việc từ bỏ những thứ không còn phù hợp. Đây không phải sự ích kỷ — đây là sự trưởng thành thật sự.</p>
<div class="insight-box">📌 <strong>Tóm lại:</strong> Giai đoạn trưởng thành của ${name} là thời gian để bạn trở thành phiên bản đầy đủ nhất của người lãnh đạo mà bạn luôn tiềm ẩn. Hãy dẫn đầu — không phải vì phải, mà vì đó là bản chất sâu nhất của bạn.</div>
`,

  2: (name) => `
<p class="nar">Số Trưởng Thành 2 của <strong>${name}</strong> mang theo một bài học tinh tế: <strong>sức mạnh thật sự nằm trong sự kết nối, không phải trong sự cạnh tranh</strong>. Khi bước vào nửa sau cuộc đời, bạn sẽ thấy mình ngày càng ít quan tâm đến việc thắng và ngày càng quan tâm hơn đến việc <em>xây dựng cùng nhau</em>.</p>
<p class="nar">Giai đoạn này của <strong>${name}</strong> là thời kỳ làm sâu sắc thêm các mối quan hệ thay vì mở rộng chúng. Những người bạn thực sự, những đối tác thực sự, những cộng đồng thực sự — đây là tài sản lớn nhất mà bạn sẽ đầu tư vào trong giai đoạn trưởng thành.</p>
<div class="insight-box">📌 <strong>Tóm lại:</strong> Giai đoạn trưởng thành của ${name} là thời gian để bạn trở thành người hòa giải, người kết nối và người xây dựng cầu nối — giữa con người với con người, giữa ý tưởng với hành động, giữa quá khứ và tương lai.</div>
`,

  3: (name) => `
<p class="nar">Số Trưởng Thành 3 mang đến cho <strong>${name}</strong> một món quà bất ngờ: <strong>sự sáng tạo trở nên sâu sắc và có chiều sâu hơn bao giờ hết</strong> khi bạn đã tích lũy đủ trải nghiệm sống. Giai đoạn này không phải là lúc bạn bắt đầu sáng tạo — mà là lúc sự sáng tạo của bạn đạt đến tầm mức mà cả đời trước chuẩn bị cho.</p>
<p class="nar">Những gì bạn biểu đạt trong nửa cuộc đời sau — dù là qua nghệ thuật, ngôn ngữ, giáo dục hay lãnh đạo — sẽ mang theo trọng lượng của kinh nghiệm và độ sâu của sự từng trải. <strong>${name}</strong> sẽ tìm thấy giọng nói thật nhất của mình không phải ở tuổi trẻ, mà ở tuổi chín.</p>
<div class="insight-box">📌 <strong>Tóm lại:</strong> Giai đoạn trưởng thành của ${name} là thời gian để bạn trở thành người kể chuyện — không chỉ kể chuyện của mình, mà kể những câu chuyện có thể chạm đến và thay đổi cuộc đời của người khác.</div>
`,

  4: (name) => `
<p class="nar">Số Trưởng Thành 4 mang đến một giai đoạn mà <strong>${name}</strong> nhận ra rằng những gì bền vững nhất trong cuộc đời không được xây dựng trong một sớm một chiều — chúng được xây dựng qua <strong>sự kiên nhẫn, kỷ luật và sự nhất quán qua nhiều năm</strong>.</p>
<p class="nar">Trong nửa cuộc đời sau, bạn sẽ cảm thấy một sức kéo mạnh mẽ hướng đến việc <em>đặt nền móng</em> — cho gia đình, cho sự nghiệp, cho di sản, cho những người đến sau bạn. Đây không phải là sự nhàm chán; đây là sự viên mãn của một người hiểu rằng những thứ thật sự quan trọng cần được xây dựng cẩn thận.</p>
<div class="insight-box">📌 <strong>Tóm lại:</strong> Giai đoạn trưởng thành của ${name} là thời gian để bạn xây dựng di sản — không phải bằng những cử chỉ hoành tráng, mà bằng những nỗ lực nhất quán, ngày qua ngày, viên gạch qua viên gạch.</div>
`,

  5: (name) => `
<p class="nar">Số Trưởng Thành 5 mang đến điều mà nhiều người không mong đợi: <strong>giai đoạn sau cuộc đời của <em>${name}</em> có thể tự do và phiêu lưu hơn giai đoạn trước</strong>. Khi những trách nhiệm lớn nhất đã được đặt đúng chỗ, bạn có thể cho phép mình sống theo nhịp đập của tò mò và khám phá.</p>
<p class="nar">Đây không có nghĩa là bạn từ bỏ mọi thứ và đi lang bạt. Nó có nghĩa là tâm hồn của bạn — vốn luôn khao khát sự mới mẻ — cuối cùng được phép thở tự do hơn. Học điều mới, đi những nơi chưa từng đến, kết nối với những con người từ những thế giới khác với bạn.</p>
<div class="insight-box">📌 <strong>Tóm lại:</strong> Giai đoạn trưởng thành của ${name} là thời gian để bạn trở thành người khám phá — không chỉ thế giới bên ngoài mà còn những chiều sâu chưa được khám phá bên trong chính mình.</div>
`,

  6: (name) => `
<p class="nar">Số Trưởng Thành 6 của <strong>${name}</strong> mang đến một giai đoạn mà <strong>sự chăm sóc và trách nhiệm trở thành nguồn ý nghĩa sâu sắc nhất</strong>. Không phải vì bạn bị buộc phải — mà vì bạn đã trưởng thành đủ để hiểu rằng đóng góp cho người khác là một trong những trải nghiệm ý nghĩa nhất của đời người.</p>
<p class="nar">Trong giai đoạn này, <strong>${name}</strong> có thể trở thành người cố vấn, người hướng dẫn, người chữa lành — dù là trong gia đình, cộng đồng hay lĩnh vực nghề nghiệp. Bạn có đủ kinh nghiệm để cho đi theo cách có giá trị thật sự.</p>
<div class="insight-box">📌 <strong>Tóm lại:</strong> Giai đoạn trưởng thành của ${name} là thời gian để bạn trở thành người tạo ra "nhà" — không phải ngôi nhà bằng gạch và ngói, mà ngôi nhà cảm xúc nơi người khác cảm thấy an toàn, được hiểu và được yêu thương.</div>
`,

  7: (name) => `
<p class="nar">Số Trưởng Thành 7 của <strong>${name}</strong> mang đến một giai đoạn quay vào trong — <strong>thời gian để tìm hiểu sâu hơn về bản chất thật sự của cuộc sống và chính mình</strong>. Những câu hỏi hiện sinh mà bạn có thể đã gạt sang một bên trong những năm bận rộn giờ đây đòi hỏi được trả lời.</p>
<p class="nar">Đây có thể là giai đoạn mà <strong>${name}</strong> cảm thấy bị kéo về phía thiền định, học hỏi triết học, khám phá tâm linh, hoặc đơn giản là dành nhiều thời gian hơn trong tĩnh lặng để lắng nghe tiếng nói bên trong. Sự yên tĩnh không còn là điều bạn tránh né — nó trở thành nơi bạn tìm thấy sức mạnh.</p>
<div class="insight-box">📌 <strong>Tóm lại:</strong> Giai đoạn trưởng thành của ${name} là thời gian để bạn trở thành người hiền triết — không phải người đứng trên bục giảng, mà người mà khi ngồi xuống cùng, người khác cảm thấy mình được nhìn thấy và được hiểu thật sự.</div>
`,

  8: (name) => `
<p class="nar">Số Trưởng Thành 8 của <strong>${name}</strong> mang đến giai đoạn mà <strong>quyền lực và ảnh hưởng đạt đến đỉnh cao của sự trưởng thành</strong>. Những kinh nghiệm, mối quan hệ và bài học của nửa cuộc đời trước tích lũy thành một nền tảng vững chắc để bạn hành động ở quy mô lớn hơn.</p>
<p class="nar">Trong giai đoạn này, <strong>${name}</strong> không chỉ quản lý tài nguyên — bạn trở thành người phân phối cơ hội. Bạn có đủ uy tín để nâng đỡ người khác, đủ kinh nghiệm để tránh những sai lầm của tuổi trẻ, và đủ trí tuệ để biết khi nào nên nắm giữ và khi nào nên buông bỏ.</p>
<div class="insight-box">📌 <strong>Tóm lại:</strong> Giai đoạn trưởng thành của ${name} là thời gian để bạn trở thành người kiến tạo di sản — không chỉ cho bản thân, mà cho mọi người đã và sẽ được kết nối với bạn.</div>
`,

  9: (name) => `
<p class="nar">Số Trưởng Thành 9 của <strong>${name}</strong> mang đến giai đoạn viên mãn nhất của một hành trình rộng lớn — <strong>thời gian để buông bỏ, tha thứ và mở rộng tình yêu thương đến những tầm mức mà chỉ nửa cuộc đời sau mới có thể chứa đựng</strong>.</p>
<p class="nar">Đây là giai đoạn mà <strong>${name}</strong> có thể trở thành người chữa lành — bản thân và người khác. Những vết thương cũ, những mối hận thù cũ, những nỗi đau chưa được giải quyết đang chờ đợi được chữa lành trong giai đoạn này. Và khi bạn làm điều đó, bạn giải phóng một nguồn năng lượng khổng lồ đã bị kìm hãm trong suốt bao năm.</p>
<div class="insight-box">📌 <strong>Tóm lại:</strong> Giai đoạn trưởng thành của ${name} là thời gian để bạn hoàn thành vòng tròn — không phải kết thúc, mà là viên mãn. Sự khôn ngoan bạn tích lũy được là món quà lớn nhất bạn có thể trao cho những người đến sau.</div>
`,

  11: (name) => `
<p class="nar">Số Trưởng Thành 11 của <strong>${name}</strong> mang đến một giai đoạn phi thường: <strong>khả năng nhìn thấy và truyền đạt những sự thật sâu sắc hơn trở nên sắc bén và đáng tin cậy hơn bao giờ hết</strong>. Nếu trước đây bạn đôi khi nghi ngờ linh cảm của mình, trong giai đoạn này bạn sẽ học cách tin tưởng nó.</p>
<p class="nar">Đây cũng là giai đoạn mà <strong>${name}</strong> được kêu gọi chia sẻ trí tuệ và tầm nhìn của mình với thế giới. Bạn đã nếm trải đủ để có chiều sâu, và bạn vẫn còn đủ năng lượng để hành động. Đây là sự kết hợp hiếm hoi và mạnh mẽ nhất.</p>
<div class="insight-box">📌 <strong>Tóm lại:</strong> Giai đoạn trưởng thành của ${name} là thời gian để bạn trở thành kênh truyền tải — người mà qua bạn, những sự thật quan trọng được đưa vào thế giới theo những cách có thể thay đổi cuộc sống người khác.</div>
`,

  22: (name) => `
<p class="nar">Số Trưởng Thành 22 của <strong>${name}</strong> mang đến giai đoạn xây dựng ở quy mô lớn nhất có thể — <strong>đây là thời điểm mà tầm nhìn vĩ đại của bạn và khả năng thực thi của bạn cuối cùng đều đạt đến mức độ đủ để tạo ra thứ gì đó có thể thay đổi hệ thống</strong>.</p>
<p class="nar">Trong giai đoạn này, <strong>${name}</strong> không chỉ xây dựng cho mình hay cho thế hệ hiện tại — bạn xây dựng cho những người chưa sinh ra. Di sản ở quy mô này không phải là điều bình thường — và số 22 trong giai đoạn trưởng thành là dấu hiệu rằng bạn được trao cơ hội để tạo ra điều đó.</p>
<div class="insight-box">📌 <strong>Tóm lại:</strong> Giai đoạn trưởng thành của ${name} là đỉnh cao của cả một hành trình dài. Mọi thứ bạn đã học, đã xây, đã chịu đựng và đã phát triển đều dẫn đến khả năng này: xây dựng di sản vượt qua thời gian.</div>
`,

};

// ─── SOUL CHALLENGE — Deep Narrative Templates (Thử thách Linh Hồn) ──────────
// Công thức: |Soul (nguyên âm) - Life Path| rút gọn % 9
// Ý nghĩa: khoảng cách giữa khao khát thầm kín nhất và con đường cuộc đời được
// được vạch ra — đây là bài học bạn cần làm hòa với chính mình.
// ─────────────────────────────────────────────────────────────────────────────────

NarrativeTemplates.soulChallenge = {

  0: (name, d) => `
<p class="nar"><strong>${name}</strong> mang Thử thách Linh Hồn số 0 — trạng thái hiếm gặp khi khao khát thầm kín bên trong (Linh Hồn) và hành trình cuộc đời (Đường Đời) hướng đến cùng một tần số. Điều này không có nghĩa là cuộc đời bạn dễ dàng — mà có nghĩa là <strong>bạn ít bị kéo đi bởi mâu thuẫn nội tâm hơn hầu hết người khác</strong>.</p>
<p class="nar">Thử thách ẩn của số 0: với ít xung đột rõ ràng để vượt qua, bạn có thể rơi vào sự trì trệ thoải mái — không thấy lý do gì để phát triển vì mọi thứ "đã ổn". Nhưng tiềm năng của bạn đòi hỏi nhiều hơn chỉ "ổn".</p>
<div class="insight-box">📌 <strong>Tóm lại:</strong> Thử thách Linh Hồn của ${name} là học cách tự tạo ra động lực phát triển khi cuộc sống không đặt ra áp lực rõ ràng. Sự hợp nhất nội tâm của bạn là tài sản — hãy dùng nó để đi xa hơn, không phải để đứng yên.</div>
`,

  1: (name, d) => `
<p class="nar">Thử thách Linh Hồn số 1 của <strong>${name}</strong> đặt ra bài toán nội tâm phức tạp nhất của bạn: <strong>linh hồn bạn khao khát sự độc lập, tự chủ và quyền được là chính mình — nhưng đâu đó trong hành trình cuộc đời, bạn đã học rằng điều đó không an toàn.</strong> Rằng muốn quá nhiều sẽ bị chỉ trích. Rằng nổi bật sẽ tạo ra xung đột. Rằng tự tin quá mức sẽ làm người khác khó chịu.</p>
<p class="nar">Kết quả: bạn đang sống một cuộc sống giữa hai thế lực kéo ngược chiều nhau — <em>phần của bạn muốn đứng vững và làm theo tiếng gọi thật sự của mình</em>, và <em>phần của bạn đã học cách thu nhỏ, nhượng bộ và ưu tiên sự chấp thuận của người khác hơn ưu tiên bản thân.</em></p>

<div class="lp-section-title">Thử thách này biểu hiện như thế nào trong cuộc sống</div>
<ul class="nar-list">
  <li>Bạn biết rõ điều mình muốn — nhưng thường không nói ra ngay, chờ xem phản ứng của người khác trước</li>
  <li>Bạn đề xuất ý tưởng theo cách "nhẹ nhàng" và "gợi ý" thay vì nói thẳng — vì đã học rằng nói thẳng tạo ra xung đột</li>
  <li>Bạn nhượng bộ thường xuyên hơn mức bạn thực sự muốn — và sau đó cảm thấy bực bội âm thầm</li>
  <li>Bạn có những giai đoạn "bùng phát" tự chủ — quyết định đột ngột, hành động không cần hỏi ai — rồi sau đó lại rút về trạng thái tuân thủ</li>
  <li>Bạn cảm thấy bị kéo đi giữa khát vọng của mình và kỳ vọng của gia đình, xã hội hoặc những người bạn quan tâm</li>
</ul>

<div class="lp-section-title">Nguồn gốc sâu của Thử thách này</div>
<p class="nar">Thử thách Linh Hồn 1 thường có rễ trong những trải nghiệm sớm khi sự độc lập bị xử phạt — dù trực tiếp hoặc gián tiếp. Có thể bạn lớn lên trong môi trường mà <em>"ngoan"</em> có nghĩa là <em>"tuân thủ"</em>. Có thể lần đầu tiên bạn đứng vững vì điều mình muốn, bạn bị bác bỏ nặng nề đủ để kết luận rằng <strong>điều đó không an toàn để lặp lại.</strong></p>
<p class="nar">Hậu quả: bạn phát triển một phiên bản bản thân phù hợp với kỳ vọng của người khác — một phiên bản đủ dễ chịu, đủ dễ hợp tác, đủ ít đòi hỏi. Nhưng linh hồn bạn — phần khao khát tự chủ thật sự — không biến mất. Nó nằm đó, và đôi khi tạo ra sự bất an, sự không thỏa mãn và cảm giác rằng bạn chưa bao giờ thực sự <em>sống</em> cho chính mình.</p>

<div class="lp-section-title">Biểu hiện trong các mối quan hệ</div>
<p class="nar">Trong tình yêu và quan hệ thân thiết, <strong>${name}</strong> với Thử thách Linh Hồn 1 thường gặp một trong hai kịch bản:</p>
<ul class="nar-list">
  <li><strong>Kịch bản "chiều chuộng":</strong> Bạn ưu tiên nhu cầu của đối tác đến mức bỏ quên nhu cầu của mình — rồi tích lũy oán giận mà không hiểu tại sao</li>
  <li><strong>Kịch bản "phòng thủ":</strong> Bạn cực kỳ bảo vệ không gian và sự độc lập của mình đến mức khó cho người khác thật sự gần lại</li>
</ul>
<p class="nar">Cả hai đều là biểu hiện của cùng một thử thách — chưa tìm được điểm cân bằng giữa <em>"tôi" và "chúng ta"</em>. Người giải được thử thách này học cách có mặt đầy đủ trong mối quan hệ mà không đánh mất chính mình.</p>

<div class="lp-section-title">Những gì bạn cần thực hành</div>
<p class="nar"><strong>1. Thực hành nói điều mình muốn trước khi "kiểm tra" phản ứng.</strong> Lần tới khi bạn muốn điều gì đó, hãy nói thẳng ra ngay — không rào đón, không "nhẹ nhàng" quá mức. Chú ý cảm giác của mình sau đó, dù câu trả lời là gì. Nhiều lần bạn sẽ thấy mình đã lo lắng quá mức về phản ứng của người khác.</p>
<p class="nar"><strong>2. Phân biệt "nhượng bộ vì muốn" và "nhượng bộ vì sợ".</strong> Khi bạn đồng ý với ai đó, hãy tự hỏi: "Tôi đồng ý vì thực sự thấy ý kiến của họ có lý — hay vì tôi sợ xung đột?" Câu trả lời sẽ nói lên nhiều điều.</p>
<p class="nar"><strong>3. Tạo ít nhất một không gian trong cuộc sống hoàn toàn do bạn quyết định.</strong> Một dự án cá nhân, một sở thích, một lĩnh vực — nơi bạn không hỏi ý kiến bất kỳ ai và chỉ đơn giản là làm theo điều mình thấy đúng. Đây là "phòng tập" để xây dựng cơ bắp tự chủ.</p>
<p class="nar"><strong>4. Ghi lại "nguyên tắc không thương lượng" của mình.</strong> Đây là danh sách những điều bạn sẽ không nhượng bộ dù có áp lực — không phải vì cứng đầu, mà vì chúng là phần cốt lõi của bạn là ai. Khi bạn biết ranh giới đó, bạn có thể linh hoạt trong mọi thứ khác mà không cảm thấy đánh mất mình.</p>

<div class="lp-section-title">Dấu hiệu cho thấy bạn đang vượt qua Thử thách này</div>
<ul class="nar-list">
  <li>Bạn có thể bất đồng ý kiến với ai đó mà không cảm thấy có tội hoặc lo lắng rằng mối quan hệ đang bị đe dọa</li>
  <li>Bạn không cần mọi người đồng ý với quyết định của mình để cảm thấy tự tin vào nó</li>
  <li>Bạn có thể hợp tác hoàn toàn trong khi vẫn giữ nguyên quan điểm và nhu cầu cốt lõi của mình</li>
  <li>Bạn cảm thấy ổn khi làm gì đó mà người khác không hiểu hoặc không nhất trí — miễn là bạn biết tại sao mình làm điều đó</li>
</ul>

<div class="insight-box">📌 <strong>Tóm lại:</strong> Thử thách Linh Hồn số 1 của ${name} là bài học về <em>sự dũng cảm nội tâm</em> — không phải dũng cảm để đối đầu, mà dũng cảm để <strong>là chính mình một cách trọn vẹn</strong> trong thế giới thường kỳ vọng bạn thu nhỏ lại. Khi ${name} học cách đứng vững với bản thân không phải từ sự phòng thủ mà từ sự tự hiểu — bạn sẽ trở thành người có ảnh hưởng thực sự, không phải vì bạn chiến thắng người khác, mà vì bạn không còn chiến đấu với chính mình.</div>
`,

  2: (name, d) => `
<p class="nar">Thử thách Linh Hồn số 2 của <strong>${name}</strong> xoay quanh một vấn đề tinh tế: <strong>ranh giới giữa sự nhạy cảm lành mạnh và sự phụ thuộc cảm xúc</strong>. Linh hồn bạn khao khát hài hòa và kết nối sâu — nhưng con đường cuộc đời của bạn đòi hỏi sự assertive và quyết đoán ở những thời điểm khó khăn.</p>
<p class="nar">Bài học lớn nhất: <strong>${name}</strong> cần học cách <em>lắng nghe mà không bị chiếm hữu</em>, <em>quan tâm mà không mất bản thân</em>. Khi bạn đặt ranh giới xuất phát từ sự tôn trọng chứ không phải từ sự sợ hãi, mối quan hệ của bạn trở nên thật sự sâu sắc và bình đẳng.</p>
<div class="insight-box">📌 <strong>Tóm lại:</strong> Thử thách Linh Hồn của ${name} là học cách kết nối mà không hòa tan. Bạn có thể là người cầu nối mà vẫn giữ được chính mình — thực ra, đó là cách duy nhất để sự kết nối của bạn thực sự bền vững.</div>
`,

  3: (name, d) => `
<p class="nar">Thử thách Linh Hồn số 3 của <strong>${name}</strong> nằm ở khoảng cách giữa <strong>khao khát biểu đạt và nỗi sợ không được chấp nhận</strong>. Bạn muốn chia sẻ những gì trong lòng — nhưng con đường cuộc đời đôi khi đòi hỏi sự kỷ luật và tập trung mà cảm thấy đối nghịch với sự phóng khoáng sáng tạo.</p>
<p class="nar">Bài học: học cách biểu đạt <em>có chiều sâu và có chủ đích</em> thay vì lan man và rối rắm. <strong>${name}</strong> trở nên mạnh mẽ nhất khi sự sáng tạo được định hướng bởi mục đích, không bị phân tán bởi sự thiếu tập trung.</p>
<div class="insight-box">📌 <strong>Tóm lại:</strong> Thử thách Linh Hồn của ${name} là học cách biến sự phong phú cảm xúc bên trong thành biểu đạt có sức mạnh thực sự — không chỉ cho chính bạn mà cho những người bạn muốn chạm đến.</div>
`,

  4: (name, d) => `
<p class="nar">Thử thách Linh Hồn số 4 của <strong>${name}</strong> đặt ra câu hỏi: <strong>kỷ luật của bạn đang phục vụ cho điều gì?</strong> Linh hồn bạn khao khát nền tảng và trật tự — nhưng khi con đường cuộc đời đòi hỏi sự linh hoạt và thích nghi, bạn có thể cảm thấy bị kéo đi giữa hai thái cực.</p>
<p class="nar">Bài học: <strong>${name}</strong> cần học cách phân biệt giữa <em>cấu trúc tạo ra tự do</em> và <em>cấu trúc giam cầm sự phát triển</em>. Khi hệ thống bạn xây dựng giải phóng người khác thay vì kiểm soát họ, kỷ luật của bạn trở thành món quà.</p>
<div class="insight-box">📌 <strong>Tóm lại:</strong> Thử thách Linh Hồn của ${name} là học cách xây dựng hệ thống phục vụ con người, không phải hệ thống mà con người phục vụ. Nền tảng thật sự không phải là bức tường — nó là con đường.</div>
`,

  5: (name, d) => `
<p class="nar">Thử thách Linh Hồn số 5 của <strong>${name}</strong> nằm ở sức căng giữa <strong>khao khát tự do và nhu cầu về ý nghĩa lâu dài</strong>. Bạn muốn trải nghiệm tất cả — nhưng cuộc đời đòi hỏi sự cam kết với một điều đủ lâu để nó thực sự có giá trị.</p>
<p class="nar">Bài học lớn nhất của thử thách này: <strong>${name}</strong> cần học rằng <em>độ sâu cũng là một loại tự do</em>. Khi bạn đủ dũng cảm đi sâu vào một điều thay vì nhảy liên tục, bạn sẽ khám phá ra một loại trải nghiệm phong phú hơn bất kỳ cuộc phiêu lưu bề mặt nào có thể mang lại.</p>
<div class="insight-box">📌 <strong>Tóm lại:</strong> Thử thách Linh Hồn của ${name} là học cách tìm thấy tự do trong cam kết — không phải tự do khỏi cam kết. Khi bạn thực sự yêu điều gì, việc gắn bó với nó không phải là mất tự do. Đó là tự do sâu nhất bạn từng trải.</div>
`,

  6: (name, d) => `
<p class="nar">Thử thách Linh Hồn số 6 của <strong>${name}</strong> đặt ra câu hỏi sâu sắc: <strong>bạn đang cho đi vì yêu thương hay vì sợ hãi?</strong> Linh hồn bạn muốn chăm sóc — nhưng đường đời đôi khi đặt bạn vào những tình huống đòi hỏi bạn phải để người khác tự lo cho mình, dù điều đó cảm thấy khó khăn.</p>
<p class="nar">Bài học: <strong>${name}</strong> cần học cách phân biệt giữa <em>sự chăm sóc lành mạnh</em> (trao quyền cho người khác) và <em>sự chăm sóc từ sợ hãi</em> (kiểm soát vì lo lắng). Khi bạn cho đi từ chỗ sung mãn thay vì từ chỗ thiếu hụt, cả bạn lẫn người nhận đều được giải phóng.</p>
<div class="insight-box">📌 <strong>Tóm lại:</strong> Thử thách Linh Hồn của ${name} là học cách yêu thương mà không mất mình — và học cách nhận lại sự yêu thương mà không cảm thấy mình là gánh nặng. Cho và nhận thực sự là một vòng tròn, không phải một con đường một chiều.</div>
`,

  7: (name, d) => `
<p class="nar">Thử thách Linh Hồn số 7 của <strong>${name}</strong> nằm ở khoảng cách giữa <strong>nhu cầu hiểu biết sâu sắc và nhu cầu kết nối thực tiễn với thế giới</strong>. Linh hồn bạn muốn câu trả lời — nhưng cuộc đời đôi khi đòi hỏi bạn hành động trước khi có câu trả lời hoàn hảo.</p>
<p class="nar">Bài học: <strong>${name}</strong> cần học cách <em>hành động với sự không chắc chắn thoải mái</em>. Sự hoàn hảo về tri thức là điều không thể đạt được — và chờ đợi đến khi "biết đủ" có thể khiến bạn không bao giờ bắt đầu điều quan trọng nhất của đời mình.</p>
<div class="insight-box">📌 <strong>Tóm lại:</strong> Thử thách Linh Hồn của ${name} là học cách tin tưởng trực giác của mình đủ để hành động — ngay cả khi chưa có đủ bằng chứng. Đôi khi, bước đi đầu tiên chính là câu trả lời mà bạn đang tìm kiếm.</div>
`,

  8: (name, d) => `
<p class="nar">Thử thách Linh Hồn số 8 của <strong>${name}</strong> đặt ra câu hỏi mà nhiều người mang số này né tránh: <strong>bạn đang tìm kiếm quyền lực để làm gì và cho ai?</strong> Linh hồn bạn khao khát ảnh hưởng và thành tựu — nhưng cuộc đời đôi khi đặt bạn trước những thử thách về đạo đức và sự lựa chọn giữa lợi ích cá nhân và lợi ích tập thể.</p>
<p class="nar">Bài học: <strong>${name}</strong> cần học cách sử dụng sức mạnh như một người quản lý tài sản, không phải như người sở hữu nó. Quyền lực thật sự không tích lũy ở bạn — nó chảy qua bạn và tạo ra giá trị cho những người xung quanh.</p>
<div class="insight-box">📌 <strong>Tóm lại:</strong> Thử thách Linh Hồn của ${name} là học cách định nghĩa thành công theo chiều kích đóng góp, không phải tích lũy. Khi điều bạn xây dựng phục vụ nhiều hơn chỉ bản thân, quy mô và ý nghĩa của nó sẽ vượt xa bất kỳ điều gì bạn có thể tưởng tượng một mình.</div>
`,

}; // end soulChallenge

// ════════════════════════════════════════════════════════════════════
// CHỈ SỐ NHÂN CÁCH — Per-number deep narrative
// NT.personality[num](name, d)
// ════════════════════════════════════════════════════════════════════
NarrativeTemplates.personality = {
  11: (name, d) => `
<p class="nar"><strong>${name}</strong>, khi người khác lần đầu tiếp xúc với bạn, họ không chỉ thấy một người thân thiện — họ cảm nhận được <strong>một trường năng lượng đặc biệt</strong> mà khó đặt tên. Đó là biểu hiện của Nhân Cách số <strong>11</strong> — Con số Chủ mang tần số cao nhất trong hệ thống Pythagoras. Bạn toát ra sự ấm áp và trực giác theo cách mà người ta hiếm khi giải thích được, nhưng luôn <em>cảm nhận được</em>.</p>
<p class="nar">Nhân Cách 11 tạo ra một hình ảnh đặc trưng: <strong>khiêm tốn nhưng không mờ nhạt, thân thiện nhưng không tầm thường, bình tĩnh nhưng đầy sức sống nội tâm</strong>. Bạn không cần phải cố gắng để được chú ý — sự hiện diện của bạn tự nhiên chiếm một vị trí đặc biệt trong lòng người. Người ta thường nhớ đến bạn lâu hơn sau khi cuộc gặp đã kết thúc, dù đôi khi không biết tại sao.</p>
<p class="nar"><strong>Điểm mạnh nổi bật của Nhân Cách 11:</strong> Bạn có khả năng lắng nghe và thấu cảm hiếm có — người ta nói chuyện với bạn và cảm thấy <em>thực sự được nghe</em>, không chỉ được lắng nghe. Trực giác nhạy bén giúp bạn đọc được cảm xúc và ý định của người đối diện nhanh hơn hầu hết mọi người. Sự nhẹ nhàng và kiên nhẫn của bạn tạo ra không gian an toàn để người khác mở lòng.</p>
<p class="nar"><strong>Bóng tối của Nhân Cách 11:</strong> Vì nhạy cảm cao, bạn dễ bị ảnh hưởng bởi năng lượng tiêu cực của môi trường. Bạn có thể cảm thấy kiệt sức sau những cuộc tiếp xúc xã hội dày đặc. Đôi khi sự khiêm tốn quá mức khiến bạn thu mình lại, không cho phép người khác nhìn thấy toàn bộ chiều kích tài năng của mình.</p>
<p class="nar"><strong>Trong mắt người khác, ${name} là:</strong> "Người mà tôi không biết tại sao lại tin tưởng ngay từ lần đầu gặp." — "Người có thứ gì đó đặc biệt khó diễn tả." — "Người tôi muốn tìm đến khi cần được hiểu."</p>
<div class="insight-box">💡 <strong>Lời nhắc từ vũ trụ:</strong> Nhân Cách 11 là món quà, nhưng cũng là trách nhiệm. Sức ảnh hưởng của bạn lên người khác lớn hơn bạn nghĩ — hãy dùng nó có ý thức, với lòng tử tế và sự chân thực, không phải vô tình hay theo quán tính.</div>
`,
};

// ════════════════════════════════════════════════════════════════════
// THỬ THÁCH NHÂN CÁCH — Per-number deep narrative
// NT.personalityChallenge[num](name, d)
// ════════════════════════════════════════════════════════════════════
NarrativeTemplates.personalityChallenge = {
  1: (name, d) => `
<p class="nar">Thử thách Nhân Cách số <strong>1</strong> của <strong>${name}</strong> là một nghịch lý tinh tế: <strong>làm thế nào để thể hiện sự tự tin mà không trượt sang kiêu ngạo?</strong> Nhân cách của bạn cần được nhìn nhận là mạnh mẽ và quyết đoán — nhưng ranh giới giữa sự tự tin lành mạnh và thái độ áp đặt đôi khi rất mong manh.</p>
<p class="nar">Biểu hiện thường gặp nhất của thử thách này: bạn có thể bước vào phòng và <em>tự động</em> chiếm thế dẫn đầu trong cuộc trò chuyện — không phải vì cố ý, mà vì đó là bản năng tự nhiên của nhân cách số 1. Khi không được ý thức điều chỉnh, điều này có thể khiến người khác cảm thấy bị lấn át hoặc không được lắng nghe. <strong>${name}</strong> không hề có ý xấu — nhưng ấn tượng để lại đôi khi không như mong muốn.</p>
<p class="nar"><strong>Cách thử thách này biểu hiện trong các tình huống cụ thể:</strong></p>
<ul class="synthetic-list">
  <li><strong>Trong công việc:</strong> Bạn có giải pháp rõ ràng và muốn nó được thực hiện ngay — nhưng cách trình bày đôi khi bỏ qua ý kiến của người khác, dù vô tình.</li>
  <li><strong>Trong mối quan hệ:</strong> Ý kiến của bạn thường mạnh và rõ ràng — người thân đôi khi cảm thấy ý kiến họ không có chỗ đứng, ngay cả khi bạn không hề có ý đó.</li>
  <li><strong>Trong giao tiếp xã hội:</strong> Cách bạn nói chuyện đôi khi nghe như "tuyên bố" hơn là "chia sẻ" — điều này có thể tạo khoảng cách không đáng có.</li>
</ul>
<p class="nar"><strong>Con đường vượt qua thử thách:</strong> Không phải thu nhỏ bản thân — mà là <em>mở rộng không gian</em> cho người khác. Sự tự tin thực sự không cần chứng minh bằng cách lấn át. Khi <strong>${name}</strong> học được cách đặt câu hỏi thực sự (không phải câu hỏi dẫn dắt), lắng nghe với ý định thực sự hiểu (không phải chờ lượt nói của mình), bạn sẽ trở thành người có ảnh hưởng lớn hơn — vì người ta chọn đi theo bạn, không phải chỉ chấp nhận bạn.</p>
<div class="insight-box">📌 <strong>Bài tập thực hành:</strong> Trong 3 cuộc trò chuyện tiếp theo, hãy thử nói ít hơn 30% so với thói quen và đặt ít nhất 2 câu hỏi thực sự tò mò về quan điểm của người đối diện. Quan sát điều gì thay đổi trong cách họ phản ứng với bạn.</div>
`,

  2: (name, d) => `
<p class="nar">Thử thách Nhân Cách số <strong>2</strong> của <strong>${name}</strong> xoay quanh câu hỏi: <strong>làm thế nào để được nhìn nhận đúng với giá trị thực của mình?</strong> Người mang nhân cách số 2 thường bị đánh giá thấp hơn thực lực vì sự khiêm tốn và nhẹ nhàng tự nhiên của họ.</p>
<p class="nar">Thử thách không phải là <em>thay đổi</em> bản thân — mà là <em>học cách biểu đạt</em> giá trị của mình theo cách mà người khác có thể nhìn thấy, mà không cần phải thu mình xuống hay hét to lên. Sự thật của nhân cách số 2 là: sức mạnh thực sự của bạn nằm ở chiều sâu, không phải bề mặt.</p>
<div class="insight-box">📌 <strong>Lời khuyên cốt lõi:</strong> Đặt ranh giới rõ ràng không phải là ích kỷ — đó là tôn trọng bản thân. Khi bạn biết giá trị của mình, người khác sẽ tự nhiên học cách trân trọng nó.</div>
`,
  3: (name, d) => `
<p class="nar">Thử thách Nhân Cách số <strong>3</strong> của <strong>${name}</strong> là học cách <strong>biểu đạt có chiều sâu và có chủ đích</strong>, thay vì lan man và thiếu trọng tâm. Sức hút tự nhiên của bạn có thể bị giảm đi khi người ta cảm thấy khó theo dõi mạch suy nghĩ của bạn.</p>
<p class="nar">Bài học: sự duyên dáng và hài hước của nhân cách 3 là điểm mạnh — nhưng cần được kết hợp với khả năng tập trung và hoàn thành để tạo ra ấn tượng sâu và bền vững.</p>
<div class="insight-box">📌 <strong>Lời khuyên:</strong> Trước mỗi cuộc trò chuyện quan trọng, hãy xác định 1-2 điều cốt lõi bạn muốn người kia nhớ đến. Sắc bén và vui vẻ cùng một lúc — đó là nhân cách 3 ở phiên bản tốt nhất.</div>
`,
};

// ════════════════════════════════════════════════════════════════════
// BÀI HỌC NGHIỆP — Karmic Lessons (missing numbers 1-9)
// NT.karmicLesson[num](name)
// ════════════════════════════════════════════════════════════════════
NarrativeTemplates.karmicLesson = {
  1: (name) => `
<div class="lesson-block">
<p class="nar"><strong>Bài học nghiệp số 1 — Tự lập & Quyết đoán:</strong> Số <strong>1</strong> vắng mặt trong biểu đồ tên của <strong>${name}</strong> cho thấy đây là bài học về sự <em>tự lập, lãnh đạo và tự tin vào bản thân</em> mà linh hồn bạn cần phát triển trong kiếp này. Bạn có thể thường xuyên tìm kiếm sự xác nhận từ bên ngoài trước khi hành động, hoặc nhường quyết định cho người khác ngay cả khi bạn biết hướng đi đúng.</p>
<p class="nar"><strong>Cách bài học này biểu hiện:</strong> Khó khăn trong việc bắt đầu dự án mới một mình; xu hướng chờ người khác "bật đèn xanh" trước khi tin vào ý tưởng của mình; ngại đứng ra làm người đầu tiên; cảm thấy không thoải mái khi phải đưa ra quyết định độc lập.</p>
<p class="nar"><strong>Mục tiêu của bài học:</strong> Học cách tin vào phán đoán của chính mình, đứng vững trong quyết định dù không có sự đồng thuận của đám đông, và dám tiên phong trong những điều bạn tin là đúng. Không phải kiêu ngạo — mà là <em>sự tự tin có căn cơ</em>.</p>
<div class="insight-box">🌱 <strong>Thực hành hàng ngày:</strong> Mỗi ngày, hãy đưa ra ít nhất một quyết định nhỏ mà không xin ý kiến ai trước. Theo thời gian, cơ bắp quyết đoán của bạn sẽ mạnh lên. Bắt đầu từ nhỏ — chọn nhà hàng, chọn đường đi, chọn cách giải quyết vấn đề nhỏ — và quan sát mình trở nên vững vàng hơn từng bước.</div>
</div>
`,

  2: (name) => `
<div class="lesson-block">
<p class="nar"><strong>Bài học nghiệp số 2 — Hợp tác & Nhạy cảm:</strong> Số <strong>2</strong> vắng mặt trong biểu đồ tên của <strong>${name}</strong> là dấu hiệu của bài học về <em>sự hợp tác, lắng nghe và quan hệ đối tác</em>. Trong quá khứ hoặc trong kiếp này, bạn có thể có xu hướng muốn làm mọi thứ theo cách của mình, hoặc gặp khó khăn trong việc thực sự lắng nghe người khác mà không phán xét.</p>
<p class="nar"><strong>Cách bài học này biểu hiện:</strong> Khó tìm được sự cân bằng trong các mối quan hệ đối tác; xu hướng hoặc quá phụ thuộc hoặc quá độc lập trong cộng tác; gặp khó khăn với sự kiên nhẫn khi cần phải chờ đợi hoặc điều chỉnh theo người khác; đôi khi bỏ lỡ những tín hiệu cảm xúc tinh tế từ người xung quanh.</p>
<p class="nar"><strong>Mục tiêu của bài học:</strong> Phát triển khả năng lắng nghe thực sự — không chỉ nghe từ ngữ mà nghe cả cảm xúc đằng sau. Học cách tìm thấy điểm trung dung trong mọi tình huống, và nhận ra rằng sức mạnh đôi khi nằm ở việc <em>nhường bước đúng lúc</em>, không phải lúc nào cũng phải thắng.</p>
<div class="insight-box">🌱 <strong>Thực hành hàng ngày:</strong> Trong cuộc trò chuyện tiếp theo với người thân, hãy thử im lặng hoàn toàn và lắng nghe trong 3 phút trước khi phản hồi. Không lên kế hoạch câu trả lời — chỉ lắng nghe. Quan sát xem bạn hiểu được gì nhiều hơn so với khi bạn nghe và cùng lúc chuẩn bị trả lời.</div>
</div>
`,

  3: (name) => `
<div class="lesson-block">
<p class="nar"><strong>Bài học nghiệp số 3 — Biểu đạt & Sáng tạo:</strong> Số <strong>3</strong> vắng mặt cho thấy <strong>${name}</strong> cần phát triển khả năng <em>biểu đạt bản thân, sáng tạo và giao tiếp tự do</em>. Bạn có thể cảm thấy khó khăn khi chia sẻ cảm xúc hoặc ý tưởng, hoặc tự hạn chế mình quá nhiều trong cách thể hiện.</p>
<p class="nar"><strong>Cách bài học này biểu hiện:</strong> Ngại nói lên ý kiến trong nhóm; giữ nhiều cảm xúc bên trong thay vì biểu đạt; gặp khó khăn trong việc tìm niềm vui và sự vui vẻ tự nhiên; đôi khi quá nghiêm túc với bản thân đến mức thiếu đi sự nhẹ nhàng cần thiết.</p>
<p class="nar"><strong>Mục tiêu của bài học:</strong> Học cách biểu đạt bản thân không cần xin phép — qua lời nói, nghệ thuật, âm nhạc, văn chương, hoặc đơn giản là tiếng cười. Sự sáng tạo không cần phải hoàn hảo để có giá trị. <em>Hành động biểu đạt chính là hành động chữa lành.</em></p>
<div class="insight-box">🌱 <strong>Thực hành hàng ngày:</strong> Mỗi tuần, hãy thử một hình thức biểu đạt sáng tạo mới — viết nhật ký, vẽ, hát, hoặc kể một câu chuyện hài hước cho bạn bè nghe. Không cần giỏi — chỉ cần bắt đầu. Mỗi lần bạn biểu đạt, bạn đang trả nợ nghiệp và tích lũy năng lượng 3 cho mình.</div>
</div>
`,

  4: (name) => `
<div class="lesson-block">
<p class="nar"><strong>Bài học nghiệp số 4 — Kỷ luật & Nền tảng:</strong> Số <strong>4</strong> vắng mặt trong biểu đồ tên của <strong>${name}</strong> là lời nhắc nhở về bài học <em>kỷ luật, tổ chức và xây dựng nền tảng bền vững</em>. Bạn có thể có xu hướng bắt đầu nhiều thứ nhưng khó hoàn thành, hoặc tránh những công việc đòi hỏi sự kiên nhẫn và lặp lại.</p>
<p class="nar"><strong>Cách bài học này biểu hiện:</strong> Môi trường làm việc/sinh sống thường không có hệ thống; đặt ra kế hoạch nhưng hiếm khi bám theo; nản lòng nhanh khi không thấy kết quả ngay; gặp khó khăn với những cam kết dài hạn đòi hỏi sự kiên trì hàng ngày.</p>
<p class="nar"><strong>Mục tiêu của bài học:</strong> Học cách tìm thấy <em>vẻ đẹp trong sự lặp lại</em> và giá trị trong những bước nhỏ tích lũy. Một thói quen nhỏ được giữ đều đặn có sức mạnh lớn hơn nhiều nỗ lực lớn không nhất quán. Kỷ luật không phải hình phạt — đó là cách bạn tôn trọng mục tiêu của mình.</p>
<div class="insight-box">🌱 <strong>Thực hành hàng ngày:</strong> Chọn một thói quen nhỏ (chỉ 5-10 phút/ngày) và duy trì trong 30 ngày không gián đoạn. Có thể là tập thể dục nhẹ, đọc sách, hoặc dọn dẹp một góc nhỏ. Khi hoàn thành 30 ngày, bạn sẽ nhận ra: kỷ luật không phải thứ bạn có hoặc không có — đó là thứ bạn xây dựng.</div>
</div>
`,

  5: (name) => `
<div class="lesson-block">
<p class="nar"><strong>Bài học nghiệp số 5 — Tự do & Thích nghi:</strong> Số <strong>5</strong> vắng mặt gợi ý rằng <strong>${name}</strong> cần học cách <em>đón nhận sự thay đổi, linh hoạt thích nghi và dũng cảm bước ra vùng an toàn</em>. Bạn có thể có xu hướng ở lại với những thứ quen thuộc quá lâu — dù chúng không còn phục vụ bạn nữa.</p>
<p class="nar"><strong>Cách bài học này biểu hiện:</strong> Sợ thay đổi dù thay đổi là cần thiết; cần nhiều thời gian để thích nghi với hoàn cảnh mới; đôi khi bỏ lỡ cơ hội vì quá thận trọng; cảm thấy không thoải mái với sự không chắc chắn và mơ hồ.</p>
<p class="nar"><strong>Mục tiêu của bài học:</strong> Học cách tin tưởng vào khả năng thích nghi của mình. <em>Mỗi thay đổi là một cánh cửa mới</em> — không phải mối đe dọa. Tự do thực sự đến khi bạn biết rằng dù môi trường thay đổi, bạn vẫn luôn tìm thấy cách tồn tại và phát triển.</p>
<div class="insight-box">🌱 <strong>Thực hành hàng ngày:</strong> Mỗi tuần, hãy thử một điều mới hoàn toàn — một con đường khác, một nhà hàng lạ, một cách làm việc khác. Không cần lớn — chỉ cần khác. Từng bước, bạn đang xây dựng khả năng chịu đựng sự không chắc chắn và tìm thấy hứng thú trong sự mới lạ.</div>
</div>
`,

  6: (name) => `
<div class="lesson-block">
<p class="nar"><strong>Bài học nghiệp số 6 — Trách nhiệm & Yêu thương:</strong> Số <strong>6</strong> vắng mặt cho thấy <strong>${name}</strong> cần học bài học về <em>trách nhiệm với gia đình và cộng đồng, và cách yêu thương lành mạnh có ranh giới</em>. Bạn có thể gặp khó khăn trong việc cân bằng giữa nhu cầu của bản thân và trách nhiệm với người thân.</p>
<p class="nar"><strong>Cách bài học này biểu hiện:</strong> Đôi khi tránh né các trách nhiệm gia đình; hoặc ngược lại, gánh chịu quá nhiều đến mức kiệt sức; khó tìm thấy cân bằng giữa việc chăm sóc người khác và chăm sóc bản thân; đôi khi cảm thấy quan hệ gia đình là gánh nặng thay vì nguồn sức mạnh.</p>
<p class="nar"><strong>Mục tiêu của bài học:</strong> Học cách <em>yêu thương từ sự sung mãn, không phải từ nghĩa vụ</em>. Trách nhiệm thực sự không phải hy sinh bản thân — mà là chọn chăm sóc người mình yêu thương theo cách bền vững và lành mạnh cho cả hai bên.</p>
<div class="insight-box">🌱 <strong>Thực hành hàng ngày:</strong> Mỗi tuần, dành ít nhất một hành động có ý nghĩa cho ai đó trong gia đình hoặc cộng đồng — không phải vì phải làm, mà vì bạn muốn làm. Khi việc cho đi xuất phát từ tình yêu chứ không phải sợ hãi, bạn sẽ nhận ra sự khác biệt lớn trong cảm giác sau đó.</div>
</div>
`,

  7: (name) => `
<div class="lesson-block">
<p class="nar"><strong>Bài học nghiệp số 7 — Trí tuệ nội tâm & Niềm tin:</strong> Số <strong>7</strong> vắng mặt là lời nhắc <strong>${name}</strong> cần phát triển <em>chiều sâu tư duy, sự tĩnh lặng nội tâm và niềm tin vào những điều vô hình</em>. Bạn có thể có xu hướng chỉ tin vào những gì thấy được và đo đếm được, bỏ qua chiều kích tâm linh và trực giác.</p>
<p class="nar"><strong>Cách bài học này biểu hiện:</strong> Khó tìm thấy sự bình an trong tĩnh lặng; luôn cần lấp đầy thời gian bằng hoạt động; bác bỏ trực giác hoặc những điều không thể chứng minh lý trí; đôi khi sống quá hời hợt và bỏ lỡ chiều sâu của trải nghiệm.</p>
<p class="nar"><strong>Mục tiêu của bài học:</strong> Học cách <em>ngồi yên với bản thân</em> mà không cần giải trí hay kích thích bên ngoài. Sự thật sâu nhất của bạn chỉ có thể nghe thấy trong tĩnh lặng. Trực giác không thay thế lý trí — nó bổ sung cho lý trí những gì lý trí không thể với tới.</p>
<div class="insight-box">🌱 <strong>Thực hành hàng ngày:</strong> Dành 10 phút mỗi sáng cho sự tĩnh lặng hoàn toàn — không điện thoại, không âm nhạc, không suy nghĩ có chủ đích. Chỉ ngồi và quan sát. Ban đầu sẽ khó chịu — đó chính là bài học. Dần dần, bạn sẽ nhận ra đây là thời điểm quý giá nhất trong ngày.</div>
</div>
`,

  8: (name) => `
<div class="lesson-block">
<p class="nar"><strong>Bài học nghiệp số 8 — Sức mạnh & Thịnh vượng:</strong> Số <strong>8</strong> vắng mặt trong biểu đồ tên của <strong>${name}</strong> gợi ý bài học về <em>mối quan hệ với tiền bạc, quyền lực và sự thịnh vượng</em>. Bạn có thể có niềm tin tiêu cực ẩn về sự giàu có, hoặc gặp khó khăn trong việc định giá đúng sức lao động và tài năng của mình.</p>
<p class="nar"><strong>Cách bài học này biểu hiện:</strong> Xu hướng định giá thấp bản thân trong thương lượng; cảm thấy có lỗi khi kiếm được nhiều tiền; sợ quyền lực hoặc tránh né các vị trí lãnh đạo; đôi khi có mối quan hệ lộn xộn với tài chính — không có hệ thống hoặc cảm thấy không kiểm soát được.</p>
<p class="nar"><strong>Mục tiêu của bài học:</strong> Học cách xem sự thịnh vượng như <em>công cụ để phụng sự</em>, không phải mục tiêu tự thân. Tiền bạc không phải xấu — nó là năng lượng trung tính, và giá trị đạo đức của nó phụ thuộc vào cách bạn kiếm và dùng nó.</p>
<div class="insight-box">🌱 <strong>Thực hành hàng ngày:</strong> Theo dõi tài chính của mình mỗi ngày trong 30 ngày — không phán xét, chỉ quan sát. Nhận thức là bước đầu tiên của sự kiểm soát. Sau đó, hãy định giá lại một dịch vụ hoặc sản phẩm bạn đang cung cấp với mức phản ánh đúng giá trị thực của nó.</div>
</div>
`,

  9: (name) => `
<div class="lesson-block">
<p class="nar"><strong>Bài học nghiệp số 9 — Lòng trắc ẩn & Buông bỏ:</strong> Số <strong>9</strong> vắng mặt cho thấy <strong>${name}</strong> cần phát triển <em>tình yêu vị tha, lòng trắc ẩn rộng hơn bản thân và khả năng buông bỏ</em>. Bạn có thể đôi khi quá tập trung vào lợi ích cá nhân, hoặc giữ mãi những điều đã đến lúc phải để đi.</p>
<p class="nar"><strong>Cách bài học này biểu hiện:</strong> Khó nghĩ đến lợi ích của người khác khi xung đột với lợi ích cá nhân; giữ lâu những oán giận, mối quan hệ đã hết thời, hoặc những bản sắc cũ không còn phù hợp; đôi khi thiếu đi sự rộng lượng và lòng tha thứ với người làm tổn thương mình.</p>
<p class="nar"><strong>Mục tiêu của bài học:</strong> Học cách <em>yêu rộng hơn bản thân</em>. Buông bỏ không phải thất bại — đó là dũng cảm. Mỗi lần bạn tha thứ, buông bỏ hay đóng góp cho điều gì đó lớn hơn mình, bạn đang trả nợ nghiệp và tích lũy năng lượng cao nhất của vũ trụ.</p>
<div class="insight-box">🌱 <strong>Thực hành hàng ngày:</strong> Mỗi tuần, làm một điều gì đó cho người khác mà không mong nhận lại — tình nguyện, giúp đỡ người lạ, hoặc đơn giản là lắng nghe ai đó đang cần được nghe. Quan sát cảm giác sau đó. Đó là năng lượng số 9 đang thức dậy trong bạn.</div>
</div>
`,
};

// ════════════════════════════════════════════════════════════════════
// NỢ NGHIỆP — Karmic Debt deep narrative templates
// NT.karmicDebt[num](name, d) → được gọi khi có template riêng
// ════════════════════════════════════════════════════════════════════
NarrativeTemplates.karmicDebt = {
  13: (name, d) => `
<div class="karmic-box">
  <div class="karmic-title">⚖️ Nợ Nghiệp 13 — Trì Hoãn, Lối Tắt & Vòng Lặp Không Hoàn Thành</div>
  <p class="nar" style="font-style:italic;color:#94a3b8;font-size:0.92em;">Nợ nghiệp 13 xuất hiện khi linh hồn cần học lại giá trị của lao động thực chất — bền bỉ, kỷ luật và hoàn thành đúng quy trình.</p>

  <p class="nar"><strong>🔍 Vấn đề bạn đang gặp:</strong> Người mang nợ nghiệp 13 không nhất thiết lười biếng — họ thường rất nhiệt tình ban đầu. Vấn đề nằm ở <em>sự thiếu bền bỉ và xu hướng né tránh sự khó chịu</em>. Biểu hiện có thể rất khác nhau tùy từng người:</p>
  <ul class="synthetic-list">
    <li><strong>Trong công việc & học tập:</strong> Bắt đầu nhiều dự án, khóa học, kế hoạch — nhưng hiếm khi đi đến cùng. Kết quả đòi hỏi nhiều công sức hơn bình thường. Hay tìm cách đơn giản hóa quy trình đến mức bỏ qua những bước quan trọng.</li>
    <li><strong>Trong tiền bạc & tài chính:</strong> Kiếm tiền không khó nhưng giữ tiền thì khó. Thường xuyên phát sinh chi phí bất ngờ do xử lý vấn đề không triệt để từ đầu. Đầu tư hoặc kinh doanh nhiều lần nhưng ít lần thu lại đủ.</li>
    <li><strong>Trong sức khỏe & lối sống:</strong> Biết cần thay đổi thói quen nhưng khó duy trì — bắt đầu tập thể dục, ăn uống lành mạnh rồi bỏ giữa chừng, rồi bắt đầu lại. Vòng lặp này lặp đi lặp lại nhiều năm.</li>
    <li><strong>Trong tính cách & tư duy:</strong> Cảm giác "nặng nề", thiếu năng lượng khi đối mặt với công việc đơn điệu. Dễ bị hấp dẫn bởi cơ hội mới thay vì kiên trì với thứ đang làm. Hay nghĩ mình "chưa sẵn sàng" — và tiếp tục chờ.</li>
  </ul>

  <p class="nar"><strong>🛠 Cách giải quyết — cụ thể và thực tế:</strong></p>
  <ul class="synthetic-list">
    <li><strong>Quy tắc "Xong trước, hoàn hảo sau":</strong> Dừng đặt tiêu chuẩn quá cao trước khi bắt đầu. Phiên bản 70% được hoàn thành còn tốt hơn phiên bản 100% còn nằm trong đầu.</li>
    <li><strong>Phương pháp 2 phút:</strong> Nếu một việc mất ít hơn 2 phút — làm ngay, không to do, không dời. Xây dựng thói quen hoàn thành từ những việc nhỏ nhất.</li>
    <li><strong>Chia nhỏ đến mức không thể từ chối:</strong> Thày vì "viết báo cáo", hãy làm "mở file và viết 3 câu đầu tiên". Não không thể chống lại việc nhỏ đến mức buồn cười.</li>
    <li><strong>Theo dõi tỉ lệ hoàn thành:</strong> Mỗi tuần, đếm số việc bạn bắt đầu và số việc bạn đưa ra kết quả. Mục tiêu: tăng tỷ lệ hoàn thành lên 10% mỗi tháng. Con số không nói dối.</li>
  </ul>
  <div class="insight-box">💡 <strong>Nguyên tắc cốt lõi:</strong> Với nợ nghiệp 13, lối tắt không tiết kiệm thời gian — nó chỉ dời vấn đề về sau với lãi suất. Mỗi lần bạn hoàn thành đúng quy trình, bạn đang phá vỡ vòng lặp. Mỗi lần bạn cắt góc, vòng lặp kéo dài thêm.</div>
</div>
`,

  14: (name, d) => `
<div class="karmic-box">
  <div class="karmic-title">⚖️ Nợ Nghiệp 14 — Khóa Xích Vô Hình: Thói Quen & Khoái Lạc Tức Thời</div>
  <p class="nar" style="font-style:italic;color:#94a3b8;font-size:0.92em;">Nợ nghiệp 14 gắn với việc sử dụng tự do và ham muốn không có định hướng — năng lượng mạnh mẽ nhưng chưa được kiểm soát, để lại hậu quả cho chính bạn và những người xung quanh.</p>

  <p class="nar"><strong>🔍 Vấn đề bạn đang gặp:</strong> Người mang nợ nghiệp 14 thường có năng lượng sống rất cao và khao khát tự do mãnh liệt. Vấn đề là năng lượng đó chưa được <em>định hướng và đặt trong giới hạn lành mạnh</em>. Biểu hiện rất đa dạng:</p>
  <ul class="synthetic-list">
    <li><strong>Thói quen & sức khỏe:</strong> Dễ lạm dụng các chất kích thích (rượu bia, thuốc lá, cà phê, thậm chí mạng xã hội hay cờ bạc). Biết là không tốt nhưng vẫn làm — rồi hối hận — rồi lại lặp lại. Không phải thiếu ý chí, mà là xung lực quá mạnh.</li>
    <li><strong>Công việc & sự nghiệp:</strong> Hay thay đổi ngành nghề, định hướng, hoặc cách làm khi chưa cho thứ cũ đủ thời gian. Hứng khởi cao lúc bắt đầu, nhưng khi đến giai đoạn khó khăn thì dễ buông. Người xung quanh khó đoán bạn sẽ làm gì tiếp theo.</li>
    <li><strong>Tiền bạc & tài chính:</strong> Tiêu tiền theo cảm xúc và thời điểm — mua sắm khi vui, đầu tư khi hứng, cho tiền khi thương. Khó xây dựng tài chính bền vững vì thiếu kỷ luật dài hạn.</li>
    <li><strong>Tình cảm & quan hệ:</strong> Mối quan hệ thường có giai đoạn đầu rất nồng nhiệt rồi nguội dần nhanh. Hay tìm kiếm cảm giác mới, dễ chán và muốn thay đổi khi mọi thứ trở nên ổn định và dự đoán được.</li>
  </ul>

  <p class="nar"><strong>🛠 Cách giải quyết — cụ thể và thực tế:</strong></p>
  <ul class="synthetic-list">
    <li><strong>Nguyên tắc "10 phút":</strong> Khi thèm làm điều gì theo cảm tính, hãy đặt hẹn giờ 10 phút rồi làm việc khác. Nếu 10 phút sau vẫn muốn, mới xem xét. 80% các cơn thuố sẽ tự qua.</li>
    <li><strong>Thiết kế môi trường, không dựa vào ý chí:</strong> Xóa app mạng xã hội khỏi màn hình chính. Bỏ thức ăn không tốt ra khỏi tầm nhìn. Đặt đồ tập thể dục ngay cạnh giường. Môi trường mạnh hơn ý chí.</li>
    <li><strong>"Bản hợp đồng với bản thân":</strong> Viết ra 1 cam kết cụ thể trong tuần (không phải tháng, không phải năm — chỉ 1 tuần). Đặt nó ở nơi bạn nhìn thấy mỗi sáng. Ngắn hạn, rõ ràng, đo đếm được.</li>
    <li><strong>Thay thế, không từ bỏ:</strong> Đừng cố xóa thói quen xấu — hãy chèn thói quen tốt vào đúng chỗ đó. Thèm TikTok? Bật podcast. Muốn ăn vặt? Uống nước và đi bộ 5 phút. Não cần sự thay thế, không cần sự rỗng.</li>
  </ul>
  <div class="insight-box">💡 <strong>Sự thật cần nhớ:</strong> Bạn không thiếu ý chí — bạn đang dùng ý chí sai cách. Ý chí là nguồn tài nguyên có hạn, cạn dần theo ngày. Thay vào đó, hãy xây dựng hệ thống và môi trường cho bạn — để bạn không cần phải dùng đến ý chí.</div>
</div>
`,

  16: (name, d) => `
<div class="karmic-box">
  <div class="karmic-title">⚖️ Nợ Nghiệp 16 — Cái Tôi Quá Lớn & Những Đổ Vỡ Không Báo Trước</div>
  <p class="nar" style="font-style:italic;color:#94a3b8;font-size:0.92em;">Nợ nghiệp 16 xuất hiện khi cái tôi và bản ngã vượt quá giới hạn lành mạnh — tự đặt mình lên trên người khác hoặc trên thực tế — và vũ trụ dùng những cú đổ vỡ để tái cân bằng.</p>

  <p class="nar"><strong>🔍 Vấn đề bạn đang gặp:</strong> Người mang nợ nghiệp 16 thường có trí tuệ cao, tư duy nhạy bén, hoặc vẻ ngoài tự tin — nhưng đằng sau đó là <em>một cái tôi dễ tổn thương và cứng nhắc hơn tưởng</em>. Dấu hiệu có thể biểu hiện theo nhiều cách:</p>
  <ul class="synthetic-list">
    <li><strong>Những đổ vỡ bất ngờ lặp lại:</strong> Trong cuộc đời có những thời điểm mọi thứ đang rất tốt rồi đột ngột sụp đổ không rõ lý do — tình cảm, sự nghiệp, tài chính, danh tiếng. Điều này xảy ra nhiều hơn mức bình thường và thường đến đúng lúc bạn tự tin nhất.</li>
    <li><strong>Trong tư duy & thái độ:</strong> Có xu hướng nghĩ mình đúng hơn người khác, khó chấp nhận phản hồi tiêu cực. Khi ai đó chỉ ra lỗi, cảm giác đầu tiên là phòng thủ hoặc phản bác thay vì lắng nghe. Đôi khi tự thấy mình "khác biệt" và khó thực sự thuộc về đám đông.</li>
    <li><strong>Trong tình cảm & quan hệ:</strong> Kỳ vọng cao vào đối phương và dễ thất vọng khi họ không đáp ứng. Mối quan hệ hay có những thời điểm khủng hoảng đột ngột và buộc phải tái định nghĩa lại từ đầu.</li>
    <li><strong>Trong tinh thần & tâm lý:</strong> Cảm giác cô đơn ngay cả khi có nhiều người xung quanh. Sống nhiều trong thế giới nội tâm, ý tưởng và lý tưởng hơn thực tế. Dễ rơi vào khủng hoảng bản sắc khi những thứ mình bám vào bị lấy đi.</li>
  </ul>

  <p class="nar"><strong>🛠 Cách giải quyết — cụ thể và thực tế:</strong></p>
  <ul class="synthetic-list">
    <li><strong>Kiểm tra định kỳ "Mọi thứ đang có gì dấu hiệu không?":</strong> Mỗi tháng, dành 30 phút ngồi nhìn lại 3 lĩnh vực: tình cảm, công việc, sức khỏe. Hỏi thẳng: "Có tín hiệu cảnh báo nào mình đang bỏ qua không?" Phát hiện sớm, xử lý sớm.</li>
    <li><strong>Luyện tập sự khiêm tốn có chủ đích:</strong> Mỗi tuần, tìm 1 điều bạn sai hoặc chưa đủ tốt và nói thẳng điều đó (với bản thân hoặc với người liên quan). Không phải tự hành hạ — mà là luyện tập nhìn thẳng vào mình trước khi ai đó bắt buộc bạn phải làm vậy.</li>
    <li><strong>Xây dựng "bộ lọc thực tế":</strong> Tìm 1-2 người bạn tin tưởng và sẵn sàng nói thật với bạn. Khi có kế hoạch lớn, chạy qua họ trước — không phải để xin phép, mà để kiểm tra lại với mắt người ngoài.</li>
    <li><strong>Kết nối lại với thực tế hàng ngày:</strong> Nợ nghiệp 16 được hóa giải qua sự kết nối thực — không phải qua triết học hay suy nghĩ. Hãy làm 1 điều gì đó cụ thể giúp ích cho ai mỗi tuần, không kể công, không cần ghi nhận.</li>
  </ul>
  <div class="insight-box">💡 <strong>Quy luật của số 16:</strong> Vũ trụ không phá vỡ những gì bạn đã buông — chỉ phá vỡ những gì bạn bám quá chặt. Chú động buông bỏ những cái đã hết vai trò trước khi bị đẩy buộc phải buông — đó chính là cách hóa giải nợ nghiệp 16.</div>
</div>
`,

  19: (name, d) => `
<div class="karmic-box">
  <div class="karmic-title">⚖️ Nợ Nghiệp 19 — Tự Cô Lập, Kiểm Soát & Cái Giá Của Việc Không Chịu Nhờ Đến Ai</div>
  <p class="nar" style="font-style:italic;color:#94a3b8;font-size:0.92em;">Nợ nghiệp 19 gắn với việc dùng sức mạnh cá nhân theo cách đơn độc và kiểm soát — chưa học được cách kết nối thực sự và để người khác vào cuộc sống của mình.</p>

  <p class="nar"><strong>🔍 Vấn đề bạn đang gặp:</strong> Người mang nợ nghiệp 19 thường có năng lực thực sự — có thể tự lực, tự giải quyết, tự đứng vững. Nhưng chính sức mạnh đó dần trở thành <em>rào cản cho sự kết nối và phát triển tiếp theo</em>. Biểu hiện đa dạng:</p>
  <ul class="synthetic-list">
    <li><strong>Trong công việc & sự nghiệp:</strong> Thích làm một mình hơn nhóm. Khó ủy thác vì lo người khác làm không đúng ý. Khi hợp tác hay xảy ra xung đột liên quan đến cách làm và quyền quyết định. Đôi khi tự ôm quá nhiều đến mức kiệt sức.</li>
    <li><strong>Trong tình cảm & quan hệ:</strong> Khó để ai thực sự "vào được" cuộc sống của mình. Mối quan hệ thường có khoảng cách — bạn ở đó nhưng không hoàn toàn. Hay xảy ra xung đột về kiểm soát: ai quyết gì, ai làm theo ai. Cảm giác cô đơn ngay cả khi đang yêu.</li>
    <li><strong>Trong tính cách & tư duy:</strong> Khó nhờ giúp dù cần — cảm giác nhờ người là yếu đuối hoặc nợ họ điều gì đó. Tự xử lý vấn đề âm thầm thay vì chia sẻ. Đôi khi biết mình cần người khác nhưng không biết cách nói ra.</li>
    <li><strong>Trong cuộc sống nói chung:</strong> Thường thành công nhưng vẫn cô đơn — như thể không có ai thực sự đi cùng mình, chỉ đi gần mình. Cảm giác phải tự mình gánh mọi thứ và không ai thực sự hiểu.</li>
  </ul>

  <p class="nar"><strong>🛠 Cách giải quyết — cụ thể và thực tế:</strong></p>
  <ul class="synthetic-list">
    <li><strong>Luyện tập nhờ giúp như một kỹ năng:</strong> Mỗi tuần, chủ động nhờ ít nhất 1 người giúp — không phải vì bạn cần, mà vì bạn cần tập. Ban đầu sẽ khó chịu. Đó chính là bài học đang được học.</li>
    <li><strong>Mở rộng "vùng an toàn kiểm soát":</strong> Chọn 1 dự án nhỏ và để người khác dẫn dắt — bạn chỉ đóng vai hỗ trợ. Quan sát xem kết quả có thực sự tệ hơn không, hay chỉ khác với cách bạn làm.</li>
    <li><strong>Thay "tôi làm" bằng "chúng tôi làm":</strong> Trước cuộc họp, hãy xác định rõ ai làm phần nào. Chia sẻ task cụ thể, không phải chỉ nói "ai muốn làm gì thì làm". Chia sẻ kết quả và ghi công công khai cho đội nhóm.</li>
    <li><strong>Xây dựng ít nhất 1 mối quan hệ thực sự sâu:</strong> Không phải networking, không phải có ích. Là 1 người bạn biết rõ và họ biết rõ bạn — đủ để nói điều khó với nhau. Đây là liều giải độc tốt nhất cho cô đơn kiểu số 19.</li>
  </ul>
  <div class="insight-box">💡 <strong>Sự thật ngược đời của số 19:</strong> Bạn nghĩ làm mọi thứ một mình thì mạnh hơn — nhưng thực tế là nó đang làm bạn yếu hơn và cô đơn hơn. Mỗi lần bạn thực sự tin tưởng ai đó và để họ vào, bạn đang nhân sức mạnh của mình — không phải chia đôi nó.</div>
</div>
`,

}; // end NarrativeTemplates.karmicDebt
