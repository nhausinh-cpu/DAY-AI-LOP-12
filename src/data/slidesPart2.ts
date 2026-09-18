import type { Slide } from '../types';

export const SLIDES_PART_2: Slide[] = [
  // ===== TIẾT 5 (SLIDES 39 - 47) =====
  // SLIDE 39 - Bìa Tiết 5
  {
    id: 39,
    period: 5,
    periodTitle: 'Tiết 5: Trách nhiệm công dân & rủi ro pháp lý',
    topic: 'Chuyên đề 2: Đạo đức & pháp luật · Mạch A + B',
    competencyStandard: '12.A3.1 · 12.B2.1 — Phân tích được nội hàm “trách nhiệm công dân trong xã hội AI”; xác định được mức độ rủi ro khi dùng AI có thể dẫn đến vi phạm quy định nhà trường hoặc pháp luật',
    category: 'cover',
    categoryLabel: 'TIẾT 5 · MỞ ĐẦU',
    title: 'Trách Nhiệm Công Dân & Rủi Ro Pháp Lý Khi Dùng AI',
    subtitle: 'Nhận diện ranh giới giữa hỗ trợ học tập và gian lận học thuật, các nguy cơ tin giả và deepfake',
    layout: 'center_hero',
    elements: [
      {
        id: 'el_39_1',
        type: 'header',
        data: {
          badge: 'TIẾT 5 / 12 (45 PHÚT)',
          heading: 'AI LÀ CÔNG CỤ MẠNH — DÙNG ĐÚNG THÌ LỢI, DÙNG SAI THÌ HẠI NGƯỜI VÀ HẠI MÌNH',
          subtext: 'Trang bị văn hóa sử dụng AI trung thực, văn minh và tuân thủ pháp luật',
        },
      },
    ],
    illustration: {
      type: 'risk_matrix',
      caption: 'Công dân số cảnh giác trước các hiểm họa trên không gian mạng',
      source: 'Quyết định 2422/QĐ-BGDĐT',
    },
    teacherNotes: {
      teacherScript: 'Chào các em đến với Tiết 5. Hôm nay chúng ta thảo luận một vấn đề rất sát sườn: Dùng AI thế nào là thông minh và trung thực, thế nào là vi phạm nội quy và pháp luật?',
      activityDuration: '2 phút',
      keyTakeaways: ['Trách nhiệm công dân số và 3 mức độ rủi ro khi dùng AI'],
    },
  },

  // SLIDE 40 - Khởi động Tiết 5
  {
    id: 40,
    period: 5,
    periodTitle: 'Tiết 5: Trách nhiệm công dân & rủi ro pháp lý',
    topic: 'Chuyên đề 2: Đạo đức & pháp luật · Mạch A + B',
    competencyStandard: '12.A3.1 · 12.B2.1',
    category: 'intro',
    categoryLabel: 'KHỞI ĐỘNG (5 PHÚT)',
    title: 'Tình Huống “Dùng AI Viết Hộ Bài Luận”',
    subtitle: 'Một bạn học sinh dùng ChatGPT/Gemini viết hộ 100% bài văn nghị luận xã hội rồi nộp cho thầy cô như bài làm của chính mình.',
    layout: 'split_left_right',
    elements: [
      {
        id: 'el_40_1',
        type: 'discussion',
        data: {
          question: 'Theo các em, đây chỉ là “chuyện nhỏ, bình thường thời 4.0” hay là một hành vi vi phạm liêm chính học thuật?',
          instruction: 'Tranh luận nhanh 2 phút trong lớp. Bạn nào ủng hộ? Bạn nào phản đối?',
        },
      },
    ],
    illustration: {
      type: 'decision_making',
      caption: 'Băn khoăn giữa sự tiện lợi trước mắt và sự trung thực dài lâu',
    },
    teacherNotes: {
      teacherScript: 'Nhiều bạn nghĩ: "Miễn thầy cô không phát hiện là được". Nhưng thực chất em đang tự đánh mất cơ hội rèn luyện tư duy của chính mình và vi phạm quy chế thi cử!',
      activityDuration: '5 phút',
      keyTakeaways: ['Dùng AI sao chép nguyên văn là hành vi gian lận học thuật'],
    },
  },

  // SLIDE 41 - Mục tiêu bài học Tiết 5
  {
    id: 41,
    period: 5,
    periodTitle: 'Tiết 5: Trách nhiệm công dân & rủi ro pháp lý',
    topic: 'Chuyên đề 2: Đạo đức & pháp luật · Mạch A + B',
    competencyStandard: '12.A3.1 · 12.B2.1',
    category: 'objective',
    categoryLabel: 'MỤC TIÊU BÀI HỌC',
    title: 'Sau Bài Học Tiết 5, Em Sẽ...',
    subtitle: '3 mục tiêu chuẩn đầu ra theo chương trình',
    layout: 'cards_3',
    elements: [
      {
        id: 'el_41_1',
        type: 'cards',
        data: [
          {
            id: 'm5_1',
            tag: '1',
            title: 'Trách Nhiệm Công Dân Số',
            desc: 'Phân tích 4 nội dung trách nhiệm cốt lõi của người học sinh trong xã hội số có AI hiện diện.',
            icon: 'UserCheck',
            color: 'blue',
          },
          {
            id: 'm5_2',
            tag: '2',
            title: 'Phân 3 Cấp Độ Rủi Ro',
            desc: 'Xác định và xếp đúng tình huống dùng AI vào 3 mức độ rủi ro: Thấp — Trung bình — Cao.',
            icon: 'AlertOctagon',
            color: 'amber',
          },
          {
            id: 'm5_3',
            tag: '3',
            title: 'Nắm Vững 3 Thuật Ngữ',
            desc: 'Hiểu rõ bản chất của Thiên kiến (Bias), Ảo giác AI (Hallucination) và Giả mạo đa phương tiện (Deepfake).',
            icon: 'HelpCircle',
            color: 'rose',
          },
        ],
      },
    ],
    teacherNotes: {
      teacherScript: 'Chúng ta sẽ học cách nhận diện rủi ro để biết điểm dừng an toàn cho bản thân và bạn bè.',
      activityDuration: '3 phút',
      keyTakeaways: ['4 trách nhiệm công dân', '3 mức rủi ro', '3 thuật ngữ then chốt'],
    },
  },

  // SLIDE 42 - 4 nội dung trách nhiệm công dân số
  {
    id: 42,
    period: 5,
    periodTitle: 'Tiết 5: Trách nhiệm công dân & rủi ro pháp lý',
    topic: 'Chuyên đề 2: Đạo đức & pháp luật · Mạch A + B',
    competencyStandard: '12.A3.1 · 12.B2.1',
    category: 'cards',
    categoryLabel: 'KIẾN THỨC CỐT LÕI',
    title: '4 Việc Của Người Công Dân Số Có Trách Nhiệm',
    subtitle: 'Kim chỉ nam hành động văn minh trên không gian mạng',
    layout: 'cards_4',
    elements: [
      {
        id: 'el_42_1',
        type: 'cards',
        data: [
          {
            id: 'tn_1',
            tag: 'Việc 1',
            title: 'Dùng AI Trung Thực',
            desc: 'Dùng AI làm công cụ hỗ trợ tư duy, không sao chép nguyên văn nộp bài, khai báo rõ ràng phần AI hỗ trợ.',
            icon: 'CheckCircle',
            color: 'emerald',
          },
          {
            id: 'tn_2',
            tag: 'Việc 2',
            title: 'Tôn Trọng Dữ Liệu',
            desc: 'Tuyệt đối không đăng tải hình ảnh, thông tin cá nhân của bạn bè, thầy cô lên các công cụ AI khi chưa được phép.',
            icon: 'Lock',
            color: 'blue',
          },
          {
            id: 'tn_3',
            tag: 'Việc 3',
            title: 'Không Lan Tin Sai',
            desc: 'Kiểm chứng mọi thông tin do AI cung cấp trước khi chia sẻ; không phát tán tin giả gây hoang mang dư luận.',
            icon: 'AlertTriangle',
            color: 'amber',
          },
          {
            id: 'tn_4',
            tag: 'Việc 4',
            title: 'Môi Trường Nhân Văn',
            desc: 'Cùng xây dựng cộng đồng số tích cực, không dùng AI để bắt nạt qua mạng (cyberbullying) hay lừa đảo.',
            icon: 'Heart',
            color: 'purple',
          },
        ],
      },
    ],
    teacherNotes: {
      teacherScript: 'Hãy tự soi vào 4 việc này: Có bao giờ các em tải ảnh của bạn mình lên mạng để tạo ảnh chế không? Nếu chưa được bạn đồng ý, đó là vi phạm quyền riêng tư đấy!',
      activityDuration: '7 phút',
      keyTakeaways: ['4 việc: Trung thực học thuật - Tôn trọng dữ liệu - Kiểm chứng thông tin - Xây dựng môi trường nhân văn'],
    },
  },

  // SLIDE 43 - 3 Thuật ngữ thiết yếu: Bias, Hallucination, Deepfake
  {
    id: 43,
    period: 5,
    periodTitle: 'Tiết 5: Trách nhiệm công dân & rủi ro pháp lý',
    topic: 'Chuyên đề 2: Đạo đức & pháp luật · Mạch A + B',
    competencyStandard: '12.A3.1 · 12.B2.1',
    category: 'knowledge',
    categoryLabel: 'THUẬT NGỮ THIẾT YẾU',
    title: '3 “Cạm Bẫy” Công Nghệ Cần Luôn Cảnh Giác',
    subtitle: 'Hiểu đúng bản chất để không trở thành nạn nhân hoặc kẻ tiếp tay cho cái sai',
    layout: 'cards_3',
    elements: [
      {
        id: 'el_43_1',
        type: 'cards',
        data: [
          {
            id: 'term_bias',
            tag: 'Thuật ngữ 1',
            title: 'Thiên Kiến (Bias)',
            desc: 'AI học từ dữ liệu lịch sử thiên lệch nên đưa ra kết quả không công bằng, kì thị một nhóm người (giới tính, màu da, vùng miền).',
            badge: 'Lệch lạc dữ liệu',
            color: 'amber',
          },
          {
            id: 'term_hallu',
            tag: 'Thuật ngữ 2',
            title: 'Ảo Giác AI (Hallucination)',
            desc: 'AI "bịa" ra thông tin hoàn toàn sai lệch nhưng trả lời với giọng điệu cực kỳ tự tin và thuyết phục -> BẮT BUỘC PHẢI KIỂM CHỨNG!',
            badge: 'Bịa thông tin giả',
            color: 'rose',
          },
          {
            id: 'term_deep',
            tag: 'Thuật ngữ 3',
            title: 'Giả Mạo (Deepfake)',
            desc: 'Dùng AI hoán đổi khuôn mặt, giả giọng nói người thật để lừa đảo chiếm đoạt tiền hoặc xúc phạm danh dự -> VI PHẠM PHÁP LUẬT HÌNH SỰ.',
            badge: 'Hiểm họa pháp lý',
            color: 'purple',
          },
        ],
      },
    ],
    illustration: {
      type: 'risk_matrix',
      caption: 'Thiên kiến, Ảo giác và Deepfake là 3 nguy cơ lớn nhất học sinh cần phòng ngừa',
    },
    teacherNotes: {
      teacherScript: 'Đặc biệt là Ảo giác AI: Các em hỏi một câu hỏi lịch sử, AI có thể tự nghĩ ra cả năm sinh năm mất hay tác phẩm không hề tồn tại! Nếu chép vào bài thi là 0 điểm ngay.',
      activityDuration: '8 phút',
      keyTakeaways: ['Luôn kiểm chứng thông tin từ AI bằng sách giáo khoa và nguồn tin cậy'],
    },
  },

  // SLIDE 44 - Bảng phân loại 3 mức độ rủi ro khi dùng AI
  {
    id: 44,
    period: 5,
    periodTitle: 'Tiết 5: Trách nhiệm công dân & rủi ro pháp lý',
    topic: 'Chuyên đề 2: Đạo đức & pháp luật · Mạch A + B',
    competencyStandard: '12.A3.1 · 12.B2.1',
    category: 'table',
    categoryLabel: 'PHÂN MỨC ĐỘ RỦI RO',
    title: 'Rủi Ro Càng Cao — Hậu Quả Càng Lớn',
    subtitle: 'Phân loại mức độ vi phạm và chế tài xử lý tương ứng',
    layout: 'table_view',
    elements: [
      {
        id: 'el_44_1',
        type: 'table',
        data: {
          headers: ['Mức độ', 'Đặc điểm hành vi', 'Ví dụ cụ thể học đường', 'Hậu quả / Chế tài xử lý'],
          rows: [
            ['Thấp', 'Dùng AI hỗ trợ gợi ý ý tưởng, có kiểm chứng, tự viết lại', 'Hỏi AI dàn ý bài thuyết trình rồi tự tìm tài liệu và tự soạn slide', 'An toàn, được khuyến khích phát triển năng lực'],
            ['Trung bình', 'Sao chép kết quả không khai báo, thiếu trung thực học thuật', 'Nộp bài tập/bài văn do AI viết 100% mà nhận là bài của mình', 'Vi phạm nội quy trường học; trừ điểm, nhận 0 điểm, phê bình'],
            ['Cao', 'Xâm phạm quyền riêng tư, xúc phạm danh dự, lan truyền tin sai', 'Dùng AI tạo ảnh deepfake chế giễu bạn; tạo tin đồn thất thiệt', 'Vi phạm pháp luật (Luật An ninh mạng); bồi thường, xử phạt hình sự'],
          ],
        },
      },
    ],
    teacherNotes: {
      teacherScript: 'Các em chú ý ranh giới giữa Trung bình và Cao: Khi hành vi của em bắt đầu xâm hại đến quyền riêng tư, danh dự của người khác hoặc lừa đảo, nó lập tức trở thành RỦI RO CAO và bị pháp luật trừng trị.',
      activityDuration: '7 phút',
      keyTakeaways: ['Phân biệt rạch ròi 3 mức rủi ro và các hệ quả đi kèm'],
    },
  },

  // SLIDE 45 - Hộp ghi nhớ Tiết 5
  {
    id: 45,
    period: 5,
    periodTitle: 'Tiết 5: Trách nhiệm công dân & rủi ro pháp lý',
    topic: 'Chuyên đề 2: Đạo đức & pháp luật · Mạch A + B',
    competencyStandard: '12.A3.1 · 12.B2.1',
    category: 'takeaway',
    categoryLabel: 'HỘP GHI NHỚ VÀNG',
    title: 'Ghi Nhớ: Dùng AI Trung Thực & Có Trách Nhiệm',
    subtitle: 'Câu tự vấn trước khi gửi prompt và trước khi nộp bài',
    layout: 'takeaway_banner',
    elements: [
      {
        id: 'el_45_1',
        type: 'quote',
        data: {
          highlight: 'MỖI LẦN DÙNG AI, HÃY TỰ HỎI: MÌNH CÓ ĐANG TRUNG THỰC VÀ TÔN TRỌNG NGƯỜI KHÁC KHÔNG?',
          subtext: 'LUÔN KIỂM CHỨNG THÔNG TIN AI ĐƯA RA VÀ KHAI BÁO RÕ RÀNG PHẦN HỖ TRỢ.',
          author: 'Quy tắc công dân số thế hệ Gen Z',
        },
      },
    ],
    illustration: {
      type: 'ethics_shield',
      caption: 'Kính lúp kiểm chứng và lá chắn liêm chính học thuật',
    },
    teacherNotes: {
      teacherScript: 'Trước khi bấm nộp bài tập, hãy tự hỏi: "Mình có đang trung thực không?". Lời tự vấn này sẽ giữ cho các em luôn đi đúng hướng.',
      activityDuration: '3 phút',
      keyTakeaways: ['Luôn tự vấn lương tâm và kiểm chứng thông tin'],
    },
  },

  // SLIDE 46 - Luyện tập nhóm Tiết 5: Tranh biện & Xếp mức rủi ro
  {
    id: 46,
    period: 5,
    periodTitle: 'Tiết 5: Trách nhiệm công dân & rủi ro pháp lý',
    topic: 'Chuyên đề 2: Đạo đức & pháp luật · Mạch A + B',
    competencyStandard: '12.A3.1 · 12.B2.1',
    category: 'activity',
    categoryLabel: 'HOẠT ĐỘNG NHÓM (14 PHÚT)',
    title: 'Tranh Biện: Trung Thực Hay Gian Lận?',
    subtitle: 'Xếp tình huống vào bảng rủi ro và lập danh sách tiêu chí “Dùng AI trung thực” (Phiếu số 5)',
    layout: 'activity_box',
    elements: [
      {
        id: 'el_46_1',
        type: 'checklist',
        data: {
          taskTitle: 'Nhiệm vụ các nhóm (4 học sinh / nhóm · 10 phút thảo luận):',
          items: [
            'Đọc 4 tình huống trong Phiếu học tập số 5 và xếp vào cột: Thấp / Trung bình / Cao.',
            'Cùng nhau thảo luận và thống nhất: "Học sinh lớp 12 dùng AI thế nào thì được coi là trung thực?".',
            'Viết 3 tiêu chuẩn dùng AI trung thực của nhóm em.',
            'Mỗi học sinh tự viết lời cam kết trách nhiệm cá nhân (3 dòng) vào cuối phiếu.',
          ],
        },
      },
    ],
    worksheetNumber: 5,
    illustration: {
      type: 'team_roles',
      caption: 'Học sinh tranh biện sôi nổi về văn hóa dùng AI học đường',
    },
    teacherNotes: {
      teacherScript: 'Các nhóm hoàn thành Phiếu học tập số 5. Hãy thành thật chia sẻ trải nghiệm của chính các em. Không có phán xét, chỉ có cùng nhau tìm ra chuẩn mực tốt nhất!',
      activityDuration: '14 phút',
      keyTakeaways: ['Xây dựng bộ quy chuẩn liêm chính học thuật của tập thể lớp'],
    },
  },

  // SLIDE 47 - Vận dụng & Chuyển tiếp Tiết 5 sang Tiết 6
  {
    id: 47,
    period: 5,
    periodTitle: 'Tiết 5: Trách nhiệm công dân & rủi ro pháp lý',
    topic: 'Chuyên đề 2: Đạo đức & pháp luật · Mạch A + B',
    competencyStandard: '12.A3.1 · 12.B2.1',
    category: 'summary',
    categoryLabel: 'VẬN DỤNG & KẾT NỐI (4 PHÚT)',
    title: 'Công Dân Số Có Trách Nhiệm',
    subtitle: 'Nhiệm vụ về nhà & Bước sang Tiết 6: Tiếng nói đóng góp chính sách',
    layout: 'split_left_right',
    elements: [
      {
        id: 'el_47_1',
        type: 'bullet_points',
        data: [
          'Vận dụng về nhà: Ghi lại 3 việc NÊN LÀM và 3 việc KHÔNG ĐƯỢC LÀM khi sử dụng các công cụ AI hỗ trợ học tập.',
          'Tìm hiểu xem nhà trường mình hiện tại đã có quy định nào về việc dùng điện thoại và AI chưa.',
          'Kết nối Tiết 6: Là học sinh, các em có quyền được tham gia đóng góp ý kiến xây dựng nội quy về AI không? Đón xem Tiết 6: "Quyền, trách nhiệm & góp ý chính sách AI"!',
        ],
      },
    ],
    illustration: {
      type: 'policy_handshake',
      caption: 'Tiết 6: Quyền, trách nhiệm & góp ý chính sách AI',
    },
    teacherNotes: {
      teacherScript: 'Tiết sau chúng ta sẽ trở thành những "nhà hoạch định chính sách trẻ", cùng nhau soạn thảo Bộ quy tắc sử dụng AI chính thức cho trường mình!',
      activityDuration: '4 phút',
      keyTakeaways: ['Chuẩn bị ý tưởng cho Tiết 6 xây dựng bộ quy tắc trường học'],
    },
  },

  // ===== TIẾT 6 (SLIDES 48 - 56) =====
  // SLIDE 48 - Bìa Tiết 6
  {
    id: 48,
    period: 6,
    periodTitle: 'Tiết 6: Quyền, trách nhiệm & góp ý chính sách AI',
    topic: 'Chuyên đề 2: Đạo đức & pháp luật · Mạch B',
    competencyStandard: '12.B3.1 — Trình bày được quyền và trách nhiệm của người phát triển, người sử dụng AI; vai trò của cá nhân trong việc góp ý, đề xuất xây dựng chính sách, quy định liên quan đến AI',
    category: 'cover',
    categoryLabel: 'TIẾT 6 · MỞ ĐẦU',
    title: 'Quyền, Trách Nhiệm & Góp Ý Chính Sách AI',
    subtitle: 'Phát huy tiếng nói công dân trẻ trong việc xây dựng chuẩn mực và luật chơi công bằng cho AI',
    layout: 'center_hero',
    elements: [
      {
        id: 'el_48_1',
        type: 'header',
        data: {
          badge: 'TIẾT 6 / 12 (45 PHÚT)',
          heading: 'EM CŨNG CÓ TIẾNG NÓI VỀ AI — CÙNG XÂY DỰNG LUẬT CHƠI VĂN MINH',
          subtext: 'Chính sách AI hoàn thiện và an toàn nhất khi có sự tham gia đóng góp của chính người sử dụng',
        },
      },
    ],
    illustration: {
      type: 'policy_handshake',
      caption: 'Bản hiệp ước số và sự đồng thuận giữa người dùng và người tạo công nghệ',
      source: 'Quyết định 2422/QĐ-BGDĐT',
    },
    teacherNotes: {
      teacherScript: 'Chào các em, chúng ta bước vào Tiết 6. Các em có biết học sinh cũng có quyền tham gia góp ý xây dựng nội quy nhà trường và chính sách công nghệ không? Hôm nay chúng ta sẽ thực hành điều đó.',
      activityDuration: '2 phút',
      keyTakeaways: ['Quyền và trách nhiệm của hai bên; vai trò tham gia xây dựng chính sách của học sinh'],
    },
  },

  // SLIDE 49 - Khởi động Tiết 6
  {
    id: 49,
    period: 6,
    periodTitle: 'Tiết 6: Quyền, trách nhiệm & góp ý chính sách AI',
    topic: 'Chuyên đề 2: Đạo đức & pháp luật · Mạch B',
    competencyStandard: '12.B3.1',
    category: 'intro',
    categoryLabel: 'KHỞI ĐỘNG (5 PHÚT)',
    title: 'Tình Huống “Nội Quy AI Của Trường Ta”',
    subtitle: 'Ngày mai nhà trường chuẩn bị ban hành một văn bản nội quy về việc cấm hoặc cho phép dùng AI trong học tập và thi cử.',
    layout: 'split_left_right',
    elements: [
      {
        id: 'el_49_1',
        type: 'discussion',
        data: {
          question: 'Em có quyền được góp ý kiến không? Nếu được mời tham gia, em muốn đề xuất bổ sung điều gì nhất?',
          instruction: 'Suy nghĩ và nêu ý kiến nhanh: Bạn muốn "Cấm tiệt" hay "Có hướng dẫn dùng văn minh"?',
        },
      },
    ],
    illustration: {
      type: 'decision_making',
      caption: 'Học sinh cùng xem bản dự thảo nội quy trường học',
    },
    teacherNotes: {
      teacherScript: 'Nếu nhà trường cấm hoàn toàn, học sinh có lén dùng không? Chắc chắn có! Thay vì cấm đoán cực đoan, chúng ta cần một bộ quy tắc thông minh, rõ ràng và có sự đồng thuận của học sinh.',
      activityDuration: '5 phút',
      keyTakeaways: ['Quy định hiệu quả cần lắng nghe tiếng nói từ người trực tiếp áp dụng'],
    },
  },

  // SLIDE 50 - Mục tiêu bài học Tiết 6
  {
    id: 50,
    period: 6,
    periodTitle: 'Tiết 6: Quyền, trách nhiệm & góp ý chính sách AI',
    topic: 'Chuyên đề 2: Đạo đức & pháp luật · Mạch B',
    competencyStandard: '12.B3.1',
    category: 'objective',
    categoryLabel: 'MỤC TIÊU BÀI HỌC',
    title: 'Sau Bài Học Tiết 6, Em Sẽ...',
    subtitle: '3 mục tiêu chuẩn đầu ra',
    layout: 'cards_3',
    elements: [
      {
        id: 'el_50_1',
        type: 'cards',
        data: [
          {
            id: 'm6_1',
            tag: '1',
            title: 'Quyền & Trách Nhiệm Song Hành',
            desc: 'Trình bày và đối chiếu song song quyền và trách nhiệm của Người phát triển AI và Người sử dụng AI.',
            icon: 'Scale',
            color: 'blue',
          },
          {
            id: 'm6_2',
            tag: '2',
            title: 'Vai Trò Đóng Góp Chính Sách',
            desc: 'Hiểu rõ quyền được góp ý, đề xuất và tham gia xây dựng quy định về AI ở cấp trường và xã hội.',
            icon: 'MessageSquareShare',
            color: 'emerald',
          },
          {
            id: 'm6_3',
            tag: '3',
            title: 'Soạn Thảo Bộ Quy Tắc',
            desc: 'Biên soạn được một bản "Bộ quy tắc sử dụng AI trong trường học" gồm 5-7 điều khả thi và công bằng.',
            icon: 'FileEdit',
            color: 'purple',
          },
        ],
      },
    ],
    teacherNotes: {
      teacherScript: 'Các em sẽ thấy việc học luật và chính sách không hề khô khan mà gắn liền với từng bài tập, từng giờ học của các em trên lớp.',
      activityDuration: '3 phút',
      keyTakeaways: ['Quyền & trách nhiệm', 'Tiếng nói công dân', 'Kĩ năng soạn thảo quy tắc'],
    },
  },

  // SLIDE 51 - Bảng đối chiếu: Quyền & Trách nhiệm của 2 bên
  {
    id: 51,
    period: 6,
    periodTitle: 'Tiết 6: Quyền, trách nhiệm & góp ý chính sách AI',
    topic: 'Chuyên đề 2: Đạo đức & pháp luật · Mạch B',
    competencyStandard: '12.B3.1',
    category: 'table',
    categoryLabel: 'ĐỐI CHIẾU SONG HÀNH',
    title: 'Cả Người Tạo Và Người Dùng Đều Có Quyền VÀ Trách Nhiệm',
    subtitle: 'Bảng phân tích mối quan hệ tương hỗ và cân bằng quyền lợi',
    layout: 'table_view',
    elements: [
      {
        id: 'el_51_1',
        type: 'table',
        data: {
          headers: ['Chủ thể', 'Quyền được pháp luật bảo đảm', 'Trách nhiệm bắt buộc phải thực hiện'],
          rows: [
            ['Người PHÁT TRIỂN AI (Kĩ sư, Doanh nghiệp)', '• Được tự do sáng tạo công nghệ\n• Được bảo hộ quyền sở hữu trí tuệ\n• Được kinh doanh hợp pháp sản phẩm AI', '• Minh bạch cách thức hoạt động\n• Dùng dữ liệu hợp pháp và có bản quyền\n• Kiểm thử an toàn trước khi phát hành\n• Bồi thường và khắc phục khi xảy ra sự cố'],
            ['Người SỬ DỤNG AI (Học sinh, Người dân)', '• Được thông báo khi đang tương tác với AI\n• Được quyền từ chối hoặc yêu cầu xóa dữ liệu\n• Được giải thích lý do khi nhận kết quả', '• Dùng AI đúng mục đích, không gây hại\n• Kiểm chứng thông tin trước khi dùng\n• Khai báo trung thực khi dùng AI hỗ trợ\n• Không dùng AI để gian lận, bôi nhọ'],
          ],
        },
      },
    ],
    teacherNotes: {
      teacherScript: 'Hãy nhìn vào bảng: Quyền của người này chính là sự ràng buộc trách nhiệm của người kia. Ví dụ: Người dùng có quyền được bảo mật dữ liệu thì người phát triển phải có trách nhiệm không lén bán dữ liệu đó!',
      activityDuration: '8 phút',
      keyTakeaways: ['Không có quyền lợi nào tách rời trách nhiệm'],
    },
  },

  // SLIDE 52 - Quyền được biết, từ chối và xóa dữ liệu
  {
    id: 52,
    period: 6,
    periodTitle: 'Tiết 6: Quyền, trách nhiệm & góp ý chính sách AI',
    topic: 'Chuyên đề 2: Đạo đức & pháp luật · Mạch B',
    competencyStandard: '12.B3.1',
    category: 'cards',
    categoryLabel: 'QUYỀN LỢI CỦA EM',
    title: '3 Quyền Tối Thượng Của Người Dùng Số',
    subtitle: 'Những quyền năng được luật pháp Việt Nam và quốc tế bảo vệ tuyệt đối',
    layout: 'cards_3',
    elements: [
      {
        id: 'el_52_1',
        type: 'cards',
        data: [
          {
            id: 'qw_1',
            tag: 'Quyền 1',
            title: 'QUYỀN ĐƯỢC BIẾT',
            desc: 'Em luôn có quyền biết sản phẩm đang thu thập dữ liệu gì của em, và liệu mình có đang trao đổi với trí tuệ nhân tạo hay không.',
            icon: 'Eye',
            color: 'blue',
          },
          {
            id: 'qw_2',
            tag: 'Quyền 2',
            title: 'QUYỀN TỪ CHỐI (Opt-out)',
            desc: 'Em có quyền từ chối cho phép hệ thống sử dụng bài viết, hình ảnh cá nhân của mình làm dữ liệu huấn luyện thuật toán.',
            icon: 'XCircle',
            color: 'amber',
          },
          {
            id: 'qw_3',
            tag: 'Quyền 3',
            title: 'QUYỀN ĐƯỢC XÓA (Right to be forgotten)',
            desc: 'Em có quyền yêu cầu nhà phát triển xóa vĩnh viễn toàn bộ lịch sử trò chuyện, dữ liệu tài khoản và khuôn mặt ra khỏi máy chủ.',
            icon: 'Trash2',
            color: 'rose',
          },
        ],
      },
    ],
    teacherNotes: {
      teacherScript: 'Các em hãy nhớ kiểm tra phần Cài đặt quyền riêng tư trong các ứng dụng AI như ChatGPT hay Copilot: Luôn có tùy chọn "Tắt lưu lịch sử dữ liệu huấn luyện"!',
      activityDuration: '5 phút',
      keyTakeaways: ['Chủ động thực thi quyền được biết, từ chối và yêu cầu xóa dữ liệu'],
    },
  },

  // SLIDE 53 - Hộp ghi nhớ Tiết 6
  {
    id: 53,
    period: 6,
    periodTitle: 'Tiết 6: Quyền, trách nhiệm & góp ý chính sách AI',
    topic: 'Chuyên đề 2: Đạo đức & pháp luật · Mạch B',
    competencyStandard: '12.B3.1',
    category: 'takeaway',
    categoryLabel: 'HỘP GHI NHỚ VÀNG',
    title: 'Ghi Nhớ: Em Cũng Có Tiếng Nói Về AI',
    subtitle: 'Chính sách công nghệ chỉ thực sự tốt khi có sự góp ý của toàn xã hội',
    layout: 'takeaway_banner',
    elements: [
      {
        id: 'el_53_1',
        type: 'quote',
        data: {
          highlight: 'CHÍNH SÁCH VỀ AI TỐT HƠN KHI CÓ SỰ GÓP Ý CỦA MỌI NGƯỜI — TRONG ĐÓ CÓ EM.',
          subtext: 'LÀ CÔNG DÂN SỐ TRẺ, EM CÓ QUYỀN VÀ TRÁCH NHIỆM THAM GIA XÂY DỰNG QUY TẮC CÔNG NGHỆ.',
          author: 'Quyết định 2422/QĐ-BGDĐT',
        },
      },
    ],
    illustration: {
      type: 'policy_handshake',
      caption: 'Học sinh giơ cao cánh tay phát biểu xây dựng chính sách học đường',
    },
    teacherNotes: {
      teacherScript: 'Đừng nghĩ chính sách là chuyện xa xôi của người lớn. Bộ quy tắc AI trong trường học do chính các em xây dựng sẽ bảo vệ các em mỗi ngày!',
      activityDuration: '3 phút',
      keyTakeaways: ['Học sinh có quyền và trách nhiệm đóng góp xây dựng chính sách công nghệ'],
    },
  },

  // SLIDE 54 - Luyện tập nhóm Tiết 6: Soạn Bộ quy tắc dùng AI trong trường học
  {
    id: 54,
    period: 6,
    periodTitle: 'Tiết 6: Quyền, trách nhiệm & góp ý chính sách AI',
    topic: 'Chuyên đề 2: Đạo đức & pháp luật · Mạch B',
    competencyStandard: '12.B3.1',
    category: 'activity',
    categoryLabel: 'HOẠT ĐỘNG NHÓM (15 PHÚT)',
    title: 'Thực Hành: Soạn “Bộ Quy Tắc Dùng AI Trong Trường Học”',
    subtitle: 'Đóng vai đa chiều: Học sinh, Giáo viên và Ban giám hiệu (Phiếu số 6)',
    layout: 'activity_box',
    elements: [
      {
        id: 'el_54_1',
        type: 'checklist',
        data: {
          taskTitle: 'Hướng dẫn thảo luận nhóm đóng vai (10 phút soạn + 5 phút bình chọn):',
          items: [
            'Mỗi nhóm 4 bạn phân vai: 2 bạn đóng vai Học sinh, 1 bạn đóng vai Giáo viên bộ môn, 1 bạn đóng vai Hiệu trưởng.',
            'Soạn thảo từ 5 đến 7 điều khoản rõ ràng, ngắn gọn cho bản "Bộ quy tắc sử dụng AI trong trường học".',
            'Quy định rõ: Khi nào ĐƯỢC PHÉP dùng? Khi nào BỊ CẤM? Khai báo sử dụng thế nào?',
            'Sản phẩm nộp: Phiếu học tập số 6. Bình chọn 1 bản quy tắc xuất sắc nhất để gửi Đoàn trường tham khảo.',
          ],
        },
      },
    ],
    worksheetNumber: 6,
    illustration: {
      type: 'team_roles',
      caption: 'Các nhóm phân vai tranh luận sôi nổi để cân bằng quyền lợi giữa thầy và trò',
    },
    teacherNotes: {
      teacherScript: 'Thời gian 10 phút. Nhóm nào có các điều khoản vừa tạo điều kiện cho học sinh học hỏi, vừa ngăn chặn gian lận thi cử hiệu quả nhất sẽ được khen thưởng!',
      activityDuration: '15 phút',
      keyTakeaways: ['Kĩ năng thương lượng, lắng nghe đa chiều và soạn thảo văn bản quy tắc'],
    },
  },

  // SLIDE 55 - Mẫu tham khảo bộ quy tắc 5 điều
  {
    id: 55,
    period: 6,
    periodTitle: 'Tiết 6: Quyền, trách nhiệm & góp ý chính sách AI',
    topic: 'Chuyên đề 2: Đạo đức & pháp luật · Mạch B',
    competencyStandard: '12.B3.1',
    category: 'table',
    categoryLabel: 'BẢN MẪU THAM KHẢO',
    title: 'Gợi Ý Mẫu: 5 Điều Quy Tắc Dùng AI Học Đường',
    subtitle: 'Cấu trúc mẫu giúp học sinh hoàn thiện sản phẩm',
    layout: 'table_view',
    elements: [
      {
        id: 'el_55_1',
        type: 'table',
        data: {
          headers: ['Điều', 'Tên quy định', 'Nội dung chi tiết điều khoản'],
          rows: [
            ['Điều 1', 'Mục đích sử dụng', 'AI chỉ được dùng làm công cụ tham khảo, gợi ý ý tưởng và tự học; không thay thế tư duy độc lập của học sinh.'],
            ['Điều 2', 'Nghĩa vụ khai báo', 'Mọi bài tập dự án có dùng AI phải ghi rõ: Dùng công cụ gì? Đặt câu lệnh (prompt) nào? AI làm phần nào?'],
            ['Điều 3', 'Khu vực cấm sử dụng', 'Tuyệt đối cấm sử dụng AI trong các bài kiểm tra 15 phút, 1 tiết, thi học kỳ và các kỳ thi chính thức.'],
            ['Điều 4', 'Bảo mật thông tin', 'Nghiêm cấm tải bài làm của bạn bè, đề thi mật hoặc thông tin cá nhân lên các công cụ AI công cộng.'],
            ['Điều 5', 'Khen thưởng & Xử lý', 'Khuyến khích các dự án sáng tạo dùng AI giải quyết vấn đề của trường; xử lý hạ hạnh kiểm nếu tái phạm gian lận.'],
          ],
        },
      },
    ],
    teacherNotes: {
      teacherScript: 'Các em có thể tham khảo 5 điều mẫu này để mở rộng hoặc điều chỉnh cho phù hợp với đặc thù trường mình.',
      activityDuration: '5 phút',
      keyTakeaways: ['Mô hình quy tắc học đường mẫu mực, hài hòa'],
    },
  },

  // SLIDE 56 - Tổng kết & Chuyển tiếp sang Mạch C (Tiết 7)
  {
    id: 56,
    period: 6,
    periodTitle: 'Tiết 6: Quyền, trách nhiệm & góp ý chính sách AI',
    topic: 'Chuyên đề 2: Đạo đức & pháp luật · Mạch B',
    competencyStandard: '12.B3.1',
    category: 'summary',
    categoryLabel: 'TỔNG KẾT & KẾT NỐI (4 PHÚT)',
    title: 'Cùng Xây Dựng Luật Chơi Cho AI',
    subtitle: 'Khép lại Chuyên đề 2 · Sẵn sàng bước vào Chuyên đề 3: Tự tay tạo ra AI!',
    layout: 'takeaway_banner',
    elements: [
      {
        id: 'el_56_1',
        type: 'quote',
        data: {
          highlight: 'QUY TẮC TỐT GIÚP MỌI NGƯỜI DÙNG AI AN TOÀN, CÔNG BẰNG VÀ TIN TƯỞNG NHAU.',
          subtext: 'Chúc mừng các em đã hoàn thành 6 tiết nền tảng về Tư duy và Đạo đức! Từ Tiết 7, chúng ta sẽ bắt đầu bước vào thế giới kỹ thuật: Tự tay huấn luyện mô hình AI của riêng mình!',
          author: 'Bước ngoặt sang Chuyên đề 3: Kĩ thuật và Công cụ làm AI',
        },
      },
    ],
    illustration: {
      type: 'tools_toolbox',
      caption: 'Tiết 7: Chọn ý tưởng & làm quen công cụ tạo AI miễn phí',
    },
    teacherNotes: {
      teacherScript: 'Từ Tiết 7 trở đi, chúng ta sẽ chuyển sang học tại Phòng máy vi tính! Mỗi bạn hãy chuẩn bị sẵn tinh thần lập trình viên và sáng tạo viên nhé!',
      activityDuration: '4 phút',
      keyTakeaways: ['Hoàn thành nửa đầu lộ trình (Tiết 1-6); sẵn sàng thực hành kỹ thuật ở Tiết 7'],
    },
  },

  // ===== TIẾT 7 (SLIDES 57 - 65) =====
  // SLIDE 57 - Bìa Tiết 7
  {
    id: 57,
    period: 7,
    periodTitle: 'Tiết 7: Chọn ý tưởng & công cụ tạo AI',
    topic: 'Chuyên đề 3: Công cụ & kĩ thuật · Mạch C',
    competencyStandard: '12.C2.1 · 12.C3.1 — Lựa chọn được ý tưởng thiết kế công cụ AI; nêu được một số công cụ mã nguồn mở/miễn phí để thiết kế, huấn luyện và phát triển hệ thống AI',
    category: 'cover',
    categoryLabel: 'TIẾT 7 · MỞ ĐẦU',
    title: 'Chọn Ý Tưởng & Làm Quen Công Cụ Tạo AI',
    subtitle: 'Khám phá hệ sinh thái công cụ AI không code và mã nguồn mở miễn phí cho học sinh THPT',
    layout: 'center_hero',
    elements: [
      {
        id: 'el_57_1',
        type: 'header',
        data: {
          badge: 'TIẾT 7 / 12 (45 PHÚT) · MẠCH C',
          heading: 'AI CŨNG CÓ THỂ TẠO RA AI — KHÔNG CẦN LẬP TRÌNH SIÊU ĐẲNG',
          subtext: 'Bắt đầu từ vấn đề đời sống gần gũi với các công cụ trực quan kéo thả',
        },
      },
    ],
    illustration: {
      type: 'tools_toolbox',
      caption: 'Hộp đồ nghề công nghệ: Teachable Machine, App Inventor, TensorFlow.js',
      source: 'Quyết định 2422/QĐ-BGDĐT',
    },
    teacherNotes: {
      teacherScript: 'Chào mừng các em đến với phòng máy và Tiết 7! Nhiều bạn nghĩ muốn làm AI phải học toán cao cấp hay viết hàng ngàn dòng code. Hoàn toàn không phải! Hôm nay các em sẽ tự tay dạy máy học chỉ bằng webcam.',
      activityDuration: '2 phút',
      keyTakeaways: ['Ý tưởng thiết kế AI và các công cụ mã nguồn mở/miễn phí'],
    },
  },

  // SLIDE 58 - Khởi động Tiết 7
  {
    id: 58,
    period: 7,
    periodTitle: 'Tiết 7: Chọn ý tưởng & công cụ tạo AI',
    topic: 'Chuyên đề 3: Công cụ & kĩ thuật · Mạch C',
    competencyStandard: '12.C2.1 · 12.C3.1',
    category: 'intro',
    categoryLabel: 'KHỞI ĐỘNG (5 PHÚT)',
    title: 'Thực Nghiệm Demo: Mô Hình Nhận Diện Đồ Vật',
    subtitle: 'Giáo viên thị phạm đưa chiếc bút chì và cuốn sổ lên webcam máy tính — AI nhận ra chính xác 99%.',
    layout: 'split_left_right',
    elements: [
      {
        id: 'el_58_1',
        type: 'discussion',
        data: {
          question: 'Theo các em, làm sao cỗ máy tính có thể “học” được cách nhận ra chiếc bút chì và cuốn sổ nhanh như vậy?',
          instruction: 'Nhớ lại bài học Tiết 1 về Dữ liệu và chia sẻ suy đoán của em.',
        },
      },
    ],
    illustration: {
      type: 'robot_learning',
      caption: 'Webcam nhận diện vật thể theo thời gian thực',
    },
    teacherNotes: {
      teacherScript: 'Thầy/cô vừa nạp vào máy 30 tấm ảnh chụp chiếc bút và 30 tấm ảnh cuốn sổ. Máy tính đã học các đặc trưng về màu sắc, đường nét và góc cạnh. Đó chính là Học máy (Machine Learning)!',
      activityDuration: '5 phút',
      keyTakeaways: ['Máy tính học phân biệt vật thể thông qua việc nạp các tập mẫu dữ liệu đa dạng'],
    },
  },

  // SLIDE 59 - Mục tiêu bài học Tiết 7
  {
    id: 59,
    period: 7,
    periodTitle: 'Tiết 7: Chọn ý tưởng & công cụ tạo AI',
    topic: 'Chuyên đề 3: Công cụ & kĩ thuật · Mạch C',
    competencyStandard: '12.C2.1 · 12.C3.1',
    category: 'objective',
    categoryLabel: 'MỤC TIÊU BÀI HỌC',
    title: 'Sau Bài Học Tiết 7, Em Sẽ...',
    subtitle: '3 chuẩn đầu ra cốt lõi',
    layout: 'cards_3',
    elements: [
      {
        id: 'el_59_1',
        type: 'cards',
        data: [
          {
            id: 'm7_1',
            tag: '1',
            title: 'Kể Tên 5 Công Cụ',
            desc: 'Nêu tên và công dụng của các công cụ làm AI miễn phí: Teachable Machine, ML5.js, TensorFlow.js, App Inventor, Colab.',
            icon: 'Cpu',
            color: 'blue',
          },
          {
            id: 'm7_2',
            tag: '2',
            title: 'Chọn Đúng Mục Đích',
            desc: 'Biết cách lựa chọn công cụ phù hợp với loại dữ liệu (hình ảnh, âm thanh, tư thế) và thiết bị chạy (web, di động).',
            icon: 'CheckCircle',
            color: 'emerald',
          },
          {
            id: 'm7_3',
            tag: '3',
            title: 'Chốt Ý Tưởng Dự Án',
            desc: 'Cùng nhóm đề xuất 3 ý tưởng AI thực tế và chốt 1 ý tưởng tốt nhất để làm xuyên suốt đến Tiết 12.',
            icon: 'Lightbulb',
            color: 'amber',
          },
        ],
      },
    ],
    teacherNotes: {
      teacherScript: 'Cuối tiết này, mỗi nhóm trong lớp sẽ có một ý tưởng dự án "cộp mác" thương hiệu nhóm mình để cùng phát triển thành sản phẩm thật!',
      activityDuration: '3 phút',
      keyTakeaways: ['5 công cụ AI', 'Chọn theo mục đích', 'Chốt ý tưởng dự án nhóm'],
    },
  },

  // SLIDE 60 - Bảng so sánh 5 công cụ tạo AI miễn phí
  {
    id: 60,
    period: 7,
    periodTitle: 'Tiết 7: Chọn ý tưởng & công cụ tạo AI',
    topic: 'Chuyên đề 3: Công cụ & kĩ thuật · Mạch C',
    competencyStandard: '12.C2.1 · 12.C3.1',
    category: 'table',
    categoryLabel: 'HỆ SINH THÁI CÔNG CỤ',
    title: 'Bảng So Sánh Các Công Cụ Tạo AI Miễn Phí',
    subtitle: 'Lựa chọn công cụ thông minh tùy thuộc vào bài toán và trình độ',
    layout: 'table_view',
    elements: [
      {
        id: 'el_60_1',
        type: 'table',
        data: {
          headers: ['Tên công cụ', 'Đặc điểm & Cách dùng', 'Dùng để làm gì?', 'Mức độ phù hợp'],
          rows: [
            ['Google Teachable Machine', 'Dạy AI trên trình duyệt bằng webcam/mic, kéo thả 100% không code', 'Huấn luyện nhận diện hình ảnh, âm thanh hoặc tư thế cơ thể', 'Tốt nhất cho người mới bắt đầu; hoàn thành trong 15 phút'],
            ['MIT App Inventor', 'Nền tảng làm app Android kéo thả khối lệnh (block programming)', 'Tạo ứng dụng điện thoại di động tích hợp mô hình AI', 'Muốn đưa AI vào điện thoại thông minh để sử dụng ngoài đời'],
            ['ML5.js', 'Thư viện JavaScript thân thiện chạy trực tiếp trên web', 'Nhúng AI vào trang web HTML/CSS đơn giản', 'Dành cho học sinh đã học cơ bản về lập trình web'],
            ['TensorFlow.js', 'Thư viện AI mạnh mẽ, chuyên sâu của Google', 'Chạy và tinh chỉnh mô hình học sâu ngay trên trình duyệt', 'Dành cho bài toán phức tạp, tùy biến cao'],
            ['Google Colab', 'Môi trường máy chủ đám mây chạy mã Python và GPU miễn phí', 'Viết mã xử lý dữ liệu và huấn luyện AI chuyên nghiệp', 'Dành cho học sinh khá giỏi muốn thử sức với Python'],
          ],
        },
      },
    ],
    teacherNotes: {
      teacherScript: 'Quy tắc chọn: Nếu muốn nhận diện hình ảnh/âm thanh nhanh -> Chọn Teachable Machine. Nếu muốn làm app di động -> Kết hợp Teachable Machine với App Inventor!',
      activityDuration: '8 phút',
      keyTakeaways: ['Không có công cụ tốt nhất, chỉ có công cụ phù hợp nhất với mục tiêu dự án'],
    },
  },

  // SLIDE 61 - Trực quan hóa giao diện Teachable Machine
  {
    id: 61,
    period: 7,
    periodTitle: 'Tiết 7: Chọn ý tưởng & công cụ tạo AI',
    topic: 'Chuyên đề 3: Công cụ & kĩ thuật · Mạch C',
    competencyStandard: '12.C2.1 · 12.C3.1',
    category: 'diagram',
    categoryLabel: 'HƯỚNG DẪN THAO TÁC',
    title: '3 Bước Tạo AI Với Teachable Machine',
    subtitle: 'Quy trình trực quan 100% chạy trên trình duyệt web',
    layout: 'step_pipeline',
    elements: [
      {
        id: 'el_61_1',
        type: 'steps',
        data: [
          { stepNumber: 1, name: 'Thu thập mẫu (Gather Data)', role: 'Webcam / File ảnh', details: 'Tạo các lớp (Class 1, Class 2, Class 3), bấm giữ nút ghi để nạp ảnh/âm thanh cho từng lớp' },
          { stepNumber: 2, name: 'Huấn luyện (Train Model)', role: 'Bấm 1 click', details: 'Hệ thống tự động huấn luyện mạng nơ-ron học sâu (Deep Learning) ngay trên trình duyệt trong 1-2 phút' },
          { stepNumber: 3, name: 'Thử nghiệm & Xuất (Export)', role: 'Test thời gian thực', details: 'Đưa mẫu mới vào webcam kiểm tra xác suất; bấm Export Model để lấy link nhúng vào web hoặc app' },
        ],
      },
    ],
    illustration: {
      type: 'accuracy_testing',
      caption: 'Giao diện 3 cột trực quan của Google Teachable Machine',
    },
    teacherNotes: {
      teacherScript: 'Các em mở trình duyệt vào trang teachablemachine.withgoogle.com. Mọi dữ liệu chỉ xử lý trên máy của em, không bị rò rỉ ra ngoài, rất an toàn!',
      activityDuration: '6 phút',
      keyTakeaways: ['3 thao tác: Nạp mẫu -> Bấm Train -> Test và Export'],
    },
  },

  // SLIDE 62 - Hộp ghi nhớ Tiết 7
  {
    id: 62,
    period: 7,
    periodTitle: 'Tiết 7: Chọn ý tưởng & công cụ tạo AI',
    topic: 'Chuyên đề 3: Công cụ & kĩ thuật · Mạch C',
    competencyStandard: '12.C2.1 · 12.C3.1',
    category: 'takeaway',
    categoryLabel: 'HỘP GHI NHỚ VÀNG',
    title: 'Ghi Nhớ: Chọn Công Cụ Theo Mục Đích',
    subtitle: 'Nguyên lý tiết kiệm thời gian và tối ưu hóa hiệu quả',
    layout: 'takeaway_banner',
    elements: [
      {
        id: 'el_62_1',
        type: 'quote',
        data: {
          highlight: 'KHÔNG CÓ CÔNG CỤ “TỐT NHẤT” — CHỈ CÓ CÔNG CỤ PHÙ HỢP VỚI VIỆC EM MUỐN LÀM.',
          subtext: 'BẮT ĐẦU ĐƠN GIẢN VỚI TEACHABLE MACHINE ĐỂ LÀM BẢN CHẠY THỬ NHANH NHẤT.',
          author: 'Quyết định 2422/QĐ-BGDĐT',
        },
      },
    ],
    illustration: {
      type: 'tools_toolbox',
      caption: 'Hộp đồ nghề đa năng luôn sẵn sàng cho các ý tưởng sáng tạo',
    },
    teacherNotes: {
      teacherScript: 'Đừng phức tạp hóa vấn đề. Một dự án ý nghĩa giải quyết được việc phân loại rác ở sân trường bằng Teachable Machine giá trị hơn nhiều một bài toán lập trình cao siêu mà không dùng được.',
      activityDuration: '3 phút',
      keyTakeaways: ['Tập trung vào giá trị thực tế của giải pháp'],
    },
  },

  // SLIDE 63 - Luyện tập nhóm Tiết 7: Bão não ý tưởng & Chốt dự án
  {
    id: 63,
    period: 7,
    periodTitle: 'Tiết 7: Chọn ý tưởng & công cụ tạo AI',
    topic: 'Chuyên đề 3: Công cụ & kĩ thuật · Mạch C',
    competencyStandard: '12.C2.1 · 12.C3.1',
    category: 'activity',
    categoryLabel: 'HOẠT ĐỘNG NHÓM (14 PHÚT)',
    title: 'Bão Não Ý Tưởng & Chốt Dự Án Nhóm (Phiếu Số 7)',
    subtitle: 'Đề xuất 3 ý tưởng gần gũi và chọn ra 1 ý tưởng xuyên suốt',
    layout: 'activity_box',
    elements: [
      {
        id: 'el_63_1',
        type: 'checklist',
        data: {
          taskTitle: 'Hướng dẫn thảo luận nhóm (10 phút thảo luận + 4 phút đăng ký):',
          items: [
            'Nhóm thảo luận và nêu 3 ý tưởng AI gần gũi với học sinh (Gợi ý: Nhận diện phân loại rác tái chế, Cảnh báo ngồi sai tư thế khi học, Điểm danh nhận diện khuôn mặt, Hỗ trợ người khiếm thị đọc ký hiệu).',
            'Với mỗi ý tưởng, chọn công cụ dự kiến (Teachable Machine, App Inventor...) và giải thích lý do chọn.',
            'Cuối buổi thảo luận, CHỐT 1 Ý TƯỞNG DUY NHẤT để đăng ký với giáo viên.',
            'Sản phẩm nộp: Phiếu học tập số 7 đã ghi rõ Tên ý tưởng chốt và danh sách thành viên.',
          ],
        },
      },
    ],
    worksheetNumber: 7,
    illustration: {
      type: 'team_roles',
      caption: 'Học sinh dán giấy ghi chú bão não ý tưởng trên bảng nhóm',
    },
    teacherNotes: {
      teacherScript: 'Thầy/cô phát Phiếu học tập số 7. Lưu ý: Ý tưởng chốt hôm nay sẽ là đề tài các em làm trong Tiết 9, 10, 11 và báo cáo ở Tiết 12. Hãy chọn đề tài cả nhóm cùng say mê!',
      activityDuration: '14 phút',
      keyTakeaways: ['Kĩ năng tìm kiếm ý tưởng thực tế và lựa chọn công cụ khả thi'],
    },
  },

  // SLIDE 64 - Bảng ý tưởng gợi ý tiêu biểu cho THPT
  {
    id: 64,
    period: 7,
    periodTitle: 'Tiết 7: Chọn ý tưởng & công cụ tạo AI',
    topic: 'Chuyên đề 3: Công cụ & kĩ thuật · Mạch C',
    competencyStandard: '12.C2.1 · 12.C3.1',
    category: 'cards',
    categoryLabel: 'NGÂN HÀNG Ý TƯỞNG GỢI Ý',
    title: '4 Đề Tài Mẫu Học Đường Đạt Giải Cao',
    subtitle: 'Các ý tưởng thực tiễn, vừa sức và mang lại giá trị cộng đồng',
    layout: 'cards_4',
    elements: [
      {
        id: 'el_64_1',
        type: 'cards',
        data: [
          {
            id: 'dt_1',
            tag: 'Ý tưởng 1',
            title: 'Phân Loại Rác Xanh',
            desc: 'Nhận diện rác vô cơ, hữu cơ và tái chế qua webcam để điều khiển thùng rác mở nắp đúng ngăn.',
            badge: 'Môi trường',
            color: 'emerald',
          },
          {
            id: 'dt_2',
            tag: 'Ý tưởng 2',
            title: 'Cảnh Báo Tư Thế Ngồi',
            desc: 'Nhận diện tư thế gù lưng hoặc cúi quá gần màn hình máy tính để phát chuông nhắc nhở học sinh.',
            badge: 'Sức khỏe học đường',
            color: 'blue',
          },
          {
            id: 'dt_3',
            tag: 'Ý tưởng 3',
            title: 'Học Ký Hiệu Khiếm Thính',
            desc: 'Nhận diện cử chỉ ngón tay bảng chữ cái ngôn ngữ ký hiệu tiếng Việt giúp hòa nhập cộng đồng.',
            badge: 'Nhân ái xã hội',
            color: 'purple',
          },
          {
            id: 'dt_4',
            tag: 'Ý tưởng 4',
            title: 'Nhắc Lịch Tưới Cây',
            desc: 'Chụp ảnh lá cây để nhận diện dấu hiệu héo lá / thiếu nước và gửi tin nhắn nhắc nhở tưới cây lớp học.',
            badge: 'Không gian xanh',
            color: 'amber',
          },
        ],
      },
    ],
    teacherNotes: {
      teacherScript: 'Các em có thể chọn 1 trong 4 đề tài mẫu này hoặc tự sáng tạo đề tài mới theo đặc thù của trường mình.',
      activityDuration: '5 phút',
      keyTakeaways: ['Truyền cảm hứng sáng tạo gắn liền với đời sống'],
    },
  },

  // SLIDE 65 - Tổng kết & Chuyển tiếp Tiết 7 sang Tiết 8
  {
    id: 65,
    period: 7,
    periodTitle: 'Tiết 7: Chọn ý tưởng & công cụ tạo AI',
    topic: 'Chuyên đề 3: Công cụ & kĩ thuật · Mạch C',
    competencyStandard: '12.C2.1 · 12.C3.1',
    category: 'summary',
    categoryLabel: 'TỔNG KẾT & KẾT NỐI (3 PHÚT)',
    title: 'Ai Cũng Có Thể Tạo Ra AI',
    subtitle: 'Chuẩn bị dữ liệu cho Tiết 8: Làm sao biết mô hình AI tốt hay chưa tốt?',
    layout: 'takeaway_banner',
    elements: [
      {
        id: 'el_65_1',
        type: 'quote',
        data: {
          highlight: 'VỚI CÔNG CỤ MIỄN PHÍ, CHÍNH CÁC EM CÓ THỂ TẠO RA MỘT SẢN PHẨM AI CỦA RIÊNG MÌNH.',
          subtext: 'Nhiệm vụ về nhà: Mỗi thành viên chuẩn bị 10-20 tấm ảnh mẫu theo ý tưởng đã chốt. Tiết sau chúng ta sẽ học: "Đánh giá hiệu quả hệ thống AI" — Đo xem AI của mình thông minh đến đâu!',
          author: 'QĐ 2422/QĐ-BGDĐT',
        },
      },
    ],
    illustration: {
      type: 'accuracy_testing',
      caption: 'Tiết 8: Đánh giá hiệu quả hệ thống AI',
    },
    teacherNotes: {
      teacherScript: 'Khi nạp dữ liệu xong, làm sao biết AI của mình đoán đúng thật hay chỉ là "học vẹt"? Tiết 8 chúng ta sẽ cùng khám phá bí quyết đánh giá bằng Dữ liệu kiểm thử mới!',
      activityDuration: '3 phút',
      keyTakeaways: ['Chuẩn bị dữ liệu mẫu và chuẩn bị kiến thức kiểm thử'],
    },
  },

  // ===== TIẾT 8 (SLIDES 66 - 74) =====
  // SLIDE 66 - Bìa Tiết 8
  {
    id: 66,
    period: 8,
    periodTitle: 'Tiết 8: Đánh giá hiệu quả hệ thống AI',
    topic: 'Chuyên đề 3: Công cụ & kĩ thuật · Mạch C',
    competencyStandard: '12.C3.2 — Nêu được ví dụ về cách đánh giá hiệu quả của một hệ thống AI',
    category: 'cover',
    categoryLabel: 'TIẾT 8 · MỞ ĐẦU',
    title: 'Đánh Giá Hiệu Quả Hệ Thống AI',
    subtitle: 'Phương pháp kiểm thử khoa học: Đo độ chính xác, phân loại lỗi và cải tiến bằng dữ liệu mới',
    layout: 'center_hero',
    elements: [
      {
        id: 'el_66_1',
        type: 'header',
        data: {
          badge: 'TIẾT 8 / 12 (45 PHÚT)',
          heading: 'ĐO ĐƯỢC THÌ MỚI CẢI THIỆN ĐƯỢC — ĐỪNG VỘI TIN AI NGAY',
          subtext: 'Đánh giá khách quan giúp ta biết AI đáng tin cậy đến đâu và cần bổ sung dữ liệu gì',
        },
      },
    ],
    illustration: {
      type: 'accuracy_testing',
      caption: 'Bảng kiểm thử đánh giá độ chính xác và biểu đồ phát triển mô hình',
      source: 'Quyết định 2422/QĐ-BGDĐT',
    },
    teacherNotes: {
      teacherScript: 'Chào các em đến với Tiết 8. Nhiều bạn huấn luyện mô hình xong thấy báo 100% là mừng rỡ nghĩ máy đã hoàn hảo. Nhưng khi đem ra dùng thật thì lại đoán sai bét! Vì sao lại như vậy? Chúng ta sẽ tìm câu trả lời hôm nay.',
      activityDuration: '2 phút',
      keyTakeaways: ['Phương pháp đánh giá hiệu quả hệ thống AI và vai trò dữ liệu mới'],
    },
  },

  // SLIDE 67 - Khởi động Tiết 8
  {
    id: 67,
    period: 8,
    periodTitle: 'Tiết 8: Đánh giá hiệu quả hệ thống AI',
    topic: 'Chuyên đề 3: Công cụ & kĩ thuật · Mạch C',
    competencyStandard: '12.C3.2',
    category: 'intro',
    categoryLabel: 'KHỞI ĐỘNG (5 PHÚT)',
    title: 'Thực Nghiệm: Đoán Thử 5 Tấm Ảnh Mới',
    subtitle: 'Cô giáo đưa 5 tấm ảnh chụp ở góc độ lạ và ánh sáng yếu vào mô hình nhận diện chó/mèo — Có ảnh AI đoán sai hoàn toàn.',
    layout: 'split_left_right',
    elements: [
      {
        id: 'el_67_1',
        type: 'discussion',
        data: {
          question: 'Làm sao để một người bình thường biết được một mô hình AI là TỐT hay CHƯA TỐT, ĐÁNG TIN hay CHƯA ĐÁNG TIN?',
          instruction: 'Thảo luận nhanh theo cặp và nêu các tiêu chí em nghĩ đến.',
        },
      },
    ],
    illustration: {
      type: 'accuracy_testing',
      caption: 'Mô hình AI nhầm lẫn chú chó lông xoăn với chiếc bánh mì nướng',
    },
    teacherNotes: {
      teacherScript: 'Tại sao máy lại nhầm? Vì trong dữ liệu huấn luyện, ta chưa từng chụp con chó lông xoăn hay chụp trong bóng tối! Ta cần các tiêu chí đo lường định lượng.',
      activityDuration: '5 phút',
      keyTakeaways: ['Cần phương pháp đo lường khoa học bằng dữ liệu độc lập'],
    },
  },

  // SLIDE 68 - Mục tiêu bài học Tiết 8
  {
    id: 68,
    period: 8,
    periodTitle: 'Tiết 8: Đánh giá hiệu quả hệ thống AI',
    topic: 'Chuyên đề 3: Công cụ & kĩ thuật · Mạch C',
    competencyStandard: '12.C3.2',
    category: 'objective',
    categoryLabel: 'MỤC TIÊU BÀI HỌC',
    title: 'Sau Bài Học Tiết 8, Em Sẽ...',
    subtitle: '3 mục tiêu kỹ thuật quan trọng',
    layout: 'cards_3',
    elements: [
      {
        id: 'el_68_1',
        type: 'cards',
        data: [
          {
            id: 'm8_1',
            tag: '1',
            title: 'Các Cách Đánh Giá',
            desc: 'Nêu các tiêu chí đánh giá hiệu quả: Độ chính xác, Loại lỗi sai, Tốc độ xử lý, Tính công bằng và an toàn.',
            icon: 'Activity',
            color: 'blue',
          },
          {
            id: 'm8_2',
            tag: '2',
            title: 'Dữ Liệu Kiểm Thử MỚI',
            desc: 'Hiểu bản chất và vai trò bắt buộc của Tập dữ liệu kiểm thử độc lập (Test Set) chưa từng xuất hiện lúc học.',
            icon: 'Database',
            color: 'purple',
          },
          {
            id: 'm8_3',
            tag: '3',
            title: 'Tính Độ Đúng & Đề Xuất',
            desc: 'Thử nghiệm mô hình với 10 mẫu mới, tính tỷ lệ phần trăm đúng/sai và đề xuất phương án cải thiện dữ liệu.',
            icon: 'TrendingUp',
            color: 'emerald',
          },
        ],
      },
    ],
    teacherNotes: {
      teacherScript: 'Sau tiết này, các em sẽ biết cách chấm điểm cho mô hình AI của mình như một chuyên gia kiểm thử chất lượng phần mềm.',
      activityDuration: '3 phút',
      keyTakeaways: ['Tiêu chí đánh giá', 'Tập test độc lập', 'Kĩ năng cải tiến dữ liệu'],
    },
  },

  // SLIDE 69 - Khái niệm: Dữ liệu kiểm thử MỚI (Test Set)
  {
    id: 69,
    period: 8,
    periodTitle: 'Tiết 8: Đánh giá hiệu quả hệ thống AI',
    topic: 'Chuyên đề 3: Công cụ & kĩ thuật · Mạch C',
    competencyStandard: '12.C3.2',
    category: 'knowledge',
    categoryLabel: 'NGUYÊN LÝ VÀNG',
    title: 'Nguyên Lý: Thử Bằng Dữ Liệu MỚI Mới Biết AI Thật Sự Giỏi',
    subtitle: 'Quy tắc tách bạch giữa Học (Train) và Thi (Test)',
    layout: 'cards_3',
    elements: [
      {
        id: 'el_69_1',
        type: 'cards',
        data: [
          {
            id: 'dl_train',
            tag: 'Tập 1',
            title: 'Dữ Liệu Huấn Luyện (Train Set)',
            desc: 'Là sách vở, bài mẫu đưa cho AI nạp vào bộ nhớ để nhận dạng các nét đặc trưng. AI học thuộc lòng tập dữ liệu này.',
            badge: 'Học bài',
            color: 'blue',
          },
          {
            id: 'dl_test',
            tag: 'Tập 2',
            title: 'Dữ Liệu Kiểm Thử (Test Set)',
            desc: 'Là bài thi với các mẫu MỚI TOÀN BỘ mà AI CHƯA TỪNG THẤY BAO GIỜ trong quá trình huấn luyện.',
            badge: 'Đi thi',
            color: 'rose',
          },
          {
            id: 'dl_rule',
            tag: 'Cảnh báo',
            title: 'Bẫy “Học Vẹt” (Overfitting)',
            desc: 'Nếu lấy đúng ảnh đã học để kiểm tra, AI luôn đúng 100% nhưng đó chỉ là học vẹt! Muốn biết AI thông minh thật hay không, PHẢI DÙNG DỮ LIỆU MỚI.',
            badge: 'Cấm nhầm lẫn',
            color: 'amber',
          },
        ],
      },
    ],
    teacherNotes: {
      teacherScript: 'Cũng giống như các em đi thi học kỳ: Thầy cô phải ra đề thi mới, chứ nếu ra lại đúng hệt bài tập về nhà thì chỉ đo được trí nhớ chứ không đo được năng lực tư duy thật!',
      activityDuration: '7 phút',
      keyTakeaways: ['Bắt buộc phải kiểm thử AI bằng tập dữ liệu mới độc lập'],
    },
  },

  // SLIDE 70 - 4 Tiêu chí đánh giá toàn diện hiệu quả AI
  {
    id: 70,
    period: 8,
    periodTitle: 'Tiết 8: Đánh giá hiệu quả hệ thống AI',
    topic: 'Chuyên đề 3: Công cụ & kĩ thuật · Mạch C',
    competencyStandard: '12.C3.2',
    category: 'table',
    categoryLabel: 'TIÊU CHÍ ĐÁNH GIÁ',
    title: 'Đánh Giá AI: Thử Dữ Liệu Mới → Đo Độ Chính Xác',
    subtitle: '4 góc nhìn toàn diện để kết luận một hệ thống AI có đạt chuẩn đưa vào sử dụng',
    layout: 'table_view',
    elements: [
      {
        id: 'el_70_1',
        type: 'table',
        data: {
          headers: ['Cách đánh giá', 'Công thức / Bản chất', 'Ý nghĩa thực tế', 'Ví dụ minh họa'],
          rows: [
            ['1. Độ chính xác (Accuracy)', 'Số lần đoán ĐÚNG / Tổng số lần thử', 'Đo lường mức độ tin cậy tổng thể của mô hình', 'Đoán đúng 8 trên 10 ảnh -> Độ chính xác đạt 80%'],
            ['2. Phân tích loại lỗi', 'Xem AI hay “nhận nhầm” hay “bỏ sót”', 'Hiểu điểm yếu cốt lõi để biết AI hay sai ở hoàn cảnh nào', 'Nhận nhầm người lạ là học sinh (Nguy hiểm) vs Bỏ sót học sinh'],
            ['3. Tốc độ phản hồi', 'Thời gian tính toán từ lúc nhận ảnh đến khi ra kết quả', 'Đảm bảo trải nghiệm thời gian thực, không gây tắc nghẽn', 'Điểm danh camera phải trả kết quả trong dưới 1 giây'],
            ['4. Công bằng & An toàn', 'Tỷ lệ chính xác có đồng đều giữa các nhóm không?', 'Không thiên vị người da sáng hơn người da tối, góc sáng tối', 'AI nhận diện tốt cả khi học sinh đeo khẩu trang hoặc trời râm'],
          ],
        },
      },
    ],
    teacherNotes: {
      teacherScript: 'Đặc biệt chú ý cột Loại lỗi: Trong y tế, "bỏ sót" khối u nguy hiểm gấp bội lần việc "chẩn đoán nhầm" cần kiểm tra lại!',
      activityDuration: '7 phút',
      keyTakeaways: ['4 tiêu chí: Độ chính xác - Phân tích loại lỗi - Tốc độ - Công bằng an toàn'],
    },
  },

  // SLIDE 71 - Phân biệt: Lỗi nhận nhầm (False Positive) vs Lỗi bỏ sót (False Negative)
  {
    id: 71,
    period: 8,
    periodTitle: 'Tiết 8: Đánh giá hiệu quả hệ thống AI',
    topic: 'Chuyên đề 3: Công cụ & kĩ thuật · Mạch C',
    competencyStandard: '12.C3.2',
    category: 'cards',
    categoryLabel: 'PHÂN TÍCH LOẠI LỖI',
    title: 'Hai Loại Lỗi Điển Hình: Nhận Nhầm vs Bỏ Sót',
    subtitle: 'Hiểu lỗi để biết cách chấp nhận rủi ro và bổ sung dữ liệu',
    layout: 'cards_3',
    elements: [
      {
        id: 'el_71_1',
        type: 'cards',
        data: [
          {
            id: 'loi_nn',
            tag: 'Loại 1',
            title: 'LỖI NHẬN NHẦM (Báo có mà không có)',
            desc: 'Ví dụ: Hộp thư rác lọc nhầm thư mời phỏng vấn học bổng quan trọng của học sinh vào mục Spam.',
            badge: 'False Positive',
            color: 'amber',
          },
          {
            id: 'loi_bs',
            tag: 'Loại 2',
            title: 'LỖI BỎ SÓT (Có mà không báo)',
            desc: 'Ví dụ: Hệ thống camera an ninh không phát hiện kẻ lạ leo rào vào trường vì trời mưa tối.',
            badge: 'False Negative',
            color: 'rose',
          },
          {
            id: 'loi_khacphuc',
            tag: 'Giải pháp',
            title: 'CÁCH KHẮC PHỤC DỮ LIỆU',
            desc: 'Muốn AI bớt nhận nhầm hoặc bỏ sót -> Bổ sung đúng những bức ảnh thuộc trường hợp sai đó vào tập dữ liệu học!',
            badge: 'Bổ sung mẫu',
            color: 'emerald',
          },
        ],
      },
    ],
    teacherNotes: {
      teacherScript: 'Khi AI sai, đừng vội vứt bỏ mô hình. Hãy chụp thêm các bức ảnh ở tình huống nó sai và nạp thêm vào. Đó là cách các kĩ sư AI cải tiến sản phẩm mỗi ngày!',
      activityDuration: '5 phút',
      keyTakeaways: ['Sai ở đâu -> Bổ sung dữ liệu đa dạng ở đúng điểm yếu đó'],
    },
  },

  // SLIDE 72 - Hộp ghi nhớ Tiết 8
  {
    id: 72,
    period: 8,
    periodTitle: 'Tiết 8: Đánh giá hiệu quả hệ thống AI',
    topic: 'Chuyên đề 3: Công cụ & kĩ thuật · Mạch C',
    competencyStandard: '12.C3.2',
    category: 'takeaway',
    categoryLabel: 'HỘP GHI NHỚ VÀNG',
    title: 'Ghi Nhớ: Đừng Tin AI Ngay — Hãy Đánh Giá',
    subtitle: 'Quy trình chuẩn: Thử mẫu mới -> Tính độ đúng -> Tìm điểm sai -> Bổ sung dữ liệu',
    layout: 'takeaway_banner',
    elements: [
      {
        id: 'el_72_1',
        type: 'quote',
        data: {
          highlight: 'ĐÁNH GIÁ AI = THỬ VỚI DỮ LIỆU MỚI → TÍNH ĐỘ CHÍNH XÁC → XEM AI SAI Ở ĐÂU → CẢI THIỆN BẰNG DỮ LIỆU TỐT HƠN.',
          subtext: 'Con người phải là giám khảo công tâm, không chủ quan, không thiên vị.',
          author: 'Quyết định 2422/QĐ-BGDĐT',
        },
      },
    ],
    illustration: {
      type: 'accuracy_testing',
      caption: 'Thước đo đánh giá chất lượng mô hình học máy',
    },
    teacherNotes: {
      teacherScript: 'Cả lớp ghi nhớ công thức: Thử mẫu mới -> Tính % -> Xem sai ở đâu -> Nạp thêm dữ liệu!',
      activityDuration: '3 phút',
      keyTakeaways: ['Quy trình cải tiến mô hình học máy dựa trên đánh giá thực nghiệm'],
    },
  },

  // SLIDE 73 - Luyện tập nhóm Tiết 8: Thử nghiệm và chấm điểm mô hình (Phiếu số 8)
  {
    id: 73,
    period: 8,
    periodTitle: 'Tiết 8: Đánh giá hiệu quả hệ thống AI',
    topic: 'Chuyên đề 3: Công cụ & kĩ thuật · Mạch C',
    competencyStandard: '12.C3.2',
    category: 'activity',
    categoryLabel: 'HOẠT ĐỘNG NHÓM (14 PHÚT)',
    title: 'Thực Hành: Thử & Chấm Điểm Mô Hình Với 10 Mẫu Mới',
    subtitle: 'Thực hiện Phiếu học tập số 8 tại phòng máy vi tính',
    layout: 'activity_box',
    elements: [
      {
        id: 'el_73_1',
        type: 'checklist',
        data: {
          taskTitle: 'Các bước thực hành kiểm thử nhóm (10 phút thử + 4 phút tổng hợp):',
          items: [
            'Mỗi nhóm mở mô hình Teachable Machine có sẵn (hoặc mô hình nhóm vừa dựng thử).',
            'Chuẩn bị 10 mẫu thử MỚI (ảnh/vật thể chưa từng có trong tập huấn luyện).',
            'Đưa từng mẫu vào webcam, ghi lại kết quả đoán của AI: ĐÚNG hay SAI vào bảng Phiếu số 8.',
            'Tính độ chính xác: (Số mẫu đúng / 10) x 100%.',
            'Chỉ ra mô hình hay sai ở trường hợp nào và ghi 2 đề xuất khắc phục cụ thể.',
          ],
        },
      },
    ],
    worksheetNumber: 8,
    illustration: {
      type: 'accuracy_testing',
      caption: 'Học sinh ghi chép nhật ký 10 mẫu thử trên phiếu số 8',
    },
    teacherNotes: {
      teacherScript: 'Các em điền vào Phiếu học tập số 8. Nhóm nào phát hiện được quy luật tại sao AI đoán sai (do ánh sáng hay góc chụp) sẽ được cộng điểm sáng tạo!',
      activityDuration: '14 phút',
      keyTakeaways: ['Kĩ năng kiểm thử thực nghiệm và tính toán độ chính xác định lượng'],
    },
  },

  // SLIDE 74 - Tổng kết & Chuyển tiếp sang Mạch D (Tiết 9)
  {
    id: 74,
    period: 8,
    periodTitle: 'Tiết 8: Đánh giá hiệu quả hệ thống AI',
    topic: 'Chuyên đề 3: Công cụ & kĩ thuật · Mạch C',
    competencyStandard: '12.C3.2',
    category: 'summary',
    categoryLabel: 'TỔNG KẾT & KẾT NỐI (4 PHÚT)',
    title: 'Đo Được Thì Cải Thiện Được',
    subtitle: 'Khép lại Chuyên đề 3 · Chào đón Chuyên đề 4: Thiết kế và phát triển dự án AI hoàn chỉnh!',
    layout: 'takeaway_banner',
    elements: [
      {
        id: 'el_74_1',
        type: 'quote',
        data: {
          highlight: 'ĐÁNH GIÁ KHÁCH QUAN GIÚP TA BIẾT AI ĐÁNG TIN ĐẾN ĐÂU VÀ CẦN SỬA GÌ.',
          subtext: 'Tiết sau: Khi bắt tay vào làm một hệ thống AI thực tế, ta có những phương án thiết kế nào? Mời các em đón xem Tiết 9: "Phương án thiết kế & vận hành hệ thống AI"!',
          author: 'Bước sang Mạch D: Thiết kế và phát triển hệ thống AI',
        },
      },
    ],
    illustration: {
      type: 'system_pipeline',
      caption: 'Tiết 9: Phương án thiết kế & vận hành hệ thống AI',
    },
    teacherNotes: {
      teacherScript: 'Chúc mừng các em đã hoàn thành Tiết 8 và toàn bộ Mạch C. Từ Tiết 9 đến Tiết 12, chúng ta sẽ bước vào giai đoạn hấp dẫn nhất: Trực tiếp thiết kế và chế tạo sản phẩm AI nhóm!',
      activityDuration: '4 phút',
      keyTakeaways: ['Hoàn thành Mạch C; sẵn sàng bước vào Mạch D làm dự án thực chiến'],
    },
  },
];
