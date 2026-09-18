import type { Slide } from '../types';

export const SLIDES_PART_1: Slide[] = [
  // SLIDE 1 - Bìa Tổng Thể
  {
    id: 1,
    period: 0,
    periodTitle: 'Môn Trí Tuệ Nhân Tạo · Lớp 12',
    topic: 'Chuyên Đề Học Tập: Con Người Làm Chủ Trí Tuệ Nhân Tạo',
    competencyStandard: 'Khung chương trình GDPT 2018 & Quyết định 2422/QĐ-BGDĐT',
    category: 'cover',
    categoryLabel: 'BÌA CHUYÊN ĐỀ',
    title: 'CHUYÊN ĐỀ ỨNG DỤNG TRÍ TUỆ NHÂN TẠO (AI)',
    subtitle: 'Khóa học 12 tiết (45 phút/tiết) dành cho học sinh Trung học phổ thông',
    layout: 'center_hero',
    elements: [
      {
        id: 'el_1_1',
        type: 'header',
        data: {
          badge: 'CHƯƠNG TRÌNH CHUẨN QUỐC GIA 2026',
          heading: 'CON NGƯỜI LÀM CHỦ TRÍ TUỆ NHÂN TẠO',
          subtext: 'Trang bị năng lực tư duy phản biện, kĩ năng công nghệ và đạo đức công dân số trong thời đại AI',
        },
      },
      {
        id: 'el_1_2',
        type: 'cards',
        data: [
          {
            id: 'c1',
            tag: 'Mạch A',
            title: 'Con Người Trung Tâm',
            desc: 'Con người kiểm soát vòng đời AI và luôn giữ quyền quyết định tối thượng',
            icon: 'UserCheck',
            color: 'blue',
          },
          {
            id: 'c2',
            tag: 'Mạch B',
            title: 'Đạo Đức & Pháp Luật',
            desc: '6 nguyên tắc đạo đức, trách nhiệm giải trình và liêm chính học thuật',
            icon: 'ShieldAlert',
            color: 'amber',
          },
          {
            id: 'c3',
            tag: 'Mạch C',
            title: 'Kĩ Thuật & Ứng Dụng',
            desc: 'Khám phá công cụ AI không cần code và phương pháp đánh giá khách quan',
            icon: 'Cpu',
            color: 'emerald',
          },
          {
            id: 'c4',
            tag: 'Mạch D',
            title: 'Thiết Kế & Hợp Tác',
            desc: 'Phát triển sản phẩm AI theo nhóm, phân vai chuyên môn và tạo bản MVP',
            icon: 'Users',
            color: 'purple',
          },
        ],
      },
    ],
    illustration: {
      type: 'robot_learning',
      caption: 'Học sinh làm chủ công nghệ trí tuệ nhân tạo nhân văn và có trách nhiệm',
      source: 'Tài liệu tham khảo chuyên đề GDPT 2018',
    },
    teacherNotes: {
      teacherScript: 'Chào các em! Chuyên đề Ứng dụng AI lớp 12 sẽ đồng hành cùng các em qua 12 tiết học thực tế, giúp các em không chỉ là người dùng công nghệ thụ động mà trở thành những công dân số hiểu biết, biết làm chủ và sáng tạo sản phẩm AI phục vụ cộng đồng.',
      activityDuration: '5 phút',
      keyTakeaways: [
        'Học sinh nắm cấu trúc 12 tiết học gồm 4 mạch năng lực',
        'Mục tiêu cốt lõi: Con người luôn kiểm soát và làm chủ AI',
      ],
    },
  },

  // SLIDE 2 - Khung chương trình 12 tiết
  {
    id: 2,
    period: 0,
    periodTitle: 'Tổng Quan Lộ Trình',
    topic: 'Cấu Trúc 12 Tiết Học Chuyên Đề Lớp 12',
    competencyStandard: 'Thông tư 32/2018/TT-BGDĐT & QĐ 2422/QĐ-BGDĐT',
    category: 'diagram',
    categoryLabel: 'LỘ TRÌNH 12 TIẾT',
    title: 'Bản Đồ 12 Tiết Học Chuyên Đề AI',
    subtitle: 'Mỗi tiết 45 phút — Đi từ tư duy làm chủ đến trực tiếp xây dựng dự án AI hoàn chỉnh',
    layout: 'cards_4',
    elements: [
      {
        id: 'el_2_1',
        type: 'cards',
        data: [
          {
            id: 'p1_3',
            tag: 'Tiết 1 - 3 · Mạch A',
            title: 'Con Người Làm Chủ',
            desc: 'T1: Vòng đời AI (7 bước) | T2: AI gợi ý - Người quyết | T3: Trách nhiệm giải trình',
            badge: 'Tư duy nền tảng',
            color: 'blue',
          },
          {
            id: 'p4_6',
            tag: 'Tiết 4 - 6 · Mạch B',
            title: 'Đạo Đức & Pháp Lý',
            desc: 'T4: 6 nguyên tắc đạo đức | T5: Rủi ro pháp lý & ranh giới gian lận | T6: Góp ý quy tắc',
            badge: 'Công dân số',
            color: 'amber',
          },
          {
            id: 'p7_8',
            tag: 'Tiết 7 - 8 · Mạch C',
            title: 'Công Cụ & Đánh Giá',
            desc: 'T7: Teachable Machine, App Inventor | T8: Đánh giá bằng dữ liệu kiểm thử mới',
            badge: 'Kĩ thuật thực nghiệm',
            color: 'emerald',
          },
          {
            id: 'p9_12',
            tag: 'Tiết 9 - 12 · Mạch D',
            title: 'Thiết Kế & Dự Án',
            desc: 'T9: Phương án thiết kế | T10: Phân vai nhóm | T11: Dựng bản đầu | T12: Báo cáo rubric',
            badge: 'Sản phẩm hoàn chỉnh',
            color: 'purple',
          },
        ],
      },
    ],
    illustration: {
      type: 'system_pipeline',
      caption: 'Lộ trình phát triển năng lực toàn diện từ nhận thức đến hành động',
    },
    teacherNotes: {
      teacherScript: 'Chúng ta có 12 tiết học, mỗi tiết kéo dài 45 phút. Đặc biệt, từ Tiết 7 đến Tiết 12, các em sẽ làm việc theo nhóm để tự tạo ra một sản phẩm AI giải quyết vấn đề thực tế trong đời sống học đường.',
      activityDuration: '5 phút',
      keyTakeaways: [
        'Mỗi nhóm 4-5 học sinh sẽ xuyên suốt hoàn thành 1 sản phẩm AI',
        'Đánh giá dựa trên quá trình và tinh thần trung thực, trách nhiệm',
      ],
    },
  },

  // ===== TIẾT 1 (SLIDES 3 - 11) =====
  // SLIDE 3 - Bìa Tiết 1
  {
    id: 3,
    period: 1,
    periodTitle: 'Tiết 1: Con người trong vòng đời hệ thống AI',
    topic: 'Chuyên đề 1: Con người làm chủ AI · Mạch A',
    competencyStandard: '12.A1.1 — Phân tích được một hệ thống AI để bảo đảm con người có quyền kiểm soát và chịu trách nhiệm ở tất cả các bước quan trọng trong vòng đời AI',
    category: 'cover',
    categoryLabel: 'TIẾT 1 · MỞ ĐẦU',
    title: 'Con Người Trong Vòng Đời Hệ Thống AI',
    subtitle: 'Khám phá 7 bước hình thành một sản phẩm AI và vị thế kiểm soát tối thượng của con người',
    layout: 'center_hero',
    elements: [
      {
        id: 'el_3_1',
        type: 'header',
        data: {
          badge: 'TIẾT 1 / 12 (45 PHÚT)',
          heading: 'AI KHÔNG TỰ SINH RA — CON NGƯỜI TẠO NÊN VÀ KIỂM SOÁT TẤT CẢ',
          subtext: 'Hiểu bản chất công nghệ để không hoang mang và không lạm dụng',
        },
      },
    ],
    illustration: {
      type: 'robot_learning',
      caption: 'Mọi thuật toán AI đều vận hành dưới sự định hướng và giám sát của con người',
      source: 'Quyết định 2422/QĐ-BGDĐT',
    },
    teacherNotes: {
      teacherScript: 'Chào các em, hôm nay chúng ta bắt đầu Tiết 1. Các em nghe nhiều về AI thông minh, nhưng thực chất AI có tự làm được mọi thứ không? Ai mới là người thực sự quyết định?',
      activityDuration: '2 phút',
      keyTakeaways: ['AI chỉ là công cụ do con người tạo ra, huấn luyện và kiểm soát'],
    },
  },

  // SLIDE 4 - Khởi động Tiết 1
  {
    id: 4,
    period: 1,
    periodTitle: 'Tiết 1: Con người trong vòng đời hệ thống AI',
    topic: 'Chuyên đề 1: Con người làm chủ AI · Mạch A',
    competencyStandard: '12.A1.1',
    category: 'intro',
    categoryLabel: 'KHỞI ĐỘNG (5 PHÚT)',
    title: 'Tình Huống “AI Chấm Điểm Thi”',
    subtitle: 'Trường dùng AI chấm toàn bộ bài thi. Một bạn làm bài rất hay nhưng bị AI chấm nhầm chỉ 4 điểm.',
    layout: 'split_left_right',
    elements: [
      {
        id: 'el_4_1',
        type: 'discussion',
        data: {
          question: 'Theo các em, ai phải chịu trách nhiệm — CÁI MÁY AI hay CON NGƯỜI?',
          instruction: 'Thảo luận nhanh theo cặp đôi (2 phút) và chia sẻ quan điểm thẳng thắn.',
          options: [
            'A. Cái máy AI chịu trách nhiệm vì nó chạy thuật toán sai.',
            'B. Giáo viên và nhà trường chịu trách nhiệm vì là người sử dụng và phê duyệt kết quả.',
            'C. Lập trình viên tạo ra AI chịu trách nhiệm vì thuật toán bị lỗi.',
            'D. Cả người tạo ra và người ứng dụng AI đều phải chịu trách nhiệm.',
          ],
        },
      },
    ],
    illustration: {
      type: 'decision_making',
      caption: 'Học sinh nhận 4 điểm oan uổng vì thuật toán nhận diện sai chữ viết tay',
    },
    teacherNotes: {
      teacherScript: 'Các em hãy tưởng tượng chính bài thi của mình bị chấm 4 điểm oan. Máy tính có bị phạt tù hay bị kỷ luật được không? Không! Trách nhiệm phải thuộc về con người. Nhưng con người phải can thiệp ở những khâu nào để ngăn thảm họa này?',
      activityDuration: '5 phút',
      keyTakeaways: [
        'Máy móc không có tư cách pháp lý hay lương tâm đạo đức',
        'Con người luôn là chủ thể chịu trách nhiệm pháp lý và đạo đức',
      ],
      sampleAnswer: 'Con người (nhà trường, giáo viên quản lý quy trình, kỹ sư kiểm thử) phải chịu trách nhiệm; máy móc chỉ là phương tiện thực thi.',
    },
  },

  // SLIDE 5 - Mục tiêu bài học Tiết 1
  {
    id: 5,
    period: 1,
    periodTitle: 'Tiết 1: Con người trong vòng đời hệ thống AI',
    topic: 'Chuyên đề 1: Con người làm chủ AI · Mạch A',
    competencyStandard: '12.A1.1',
    category: 'objective',
    categoryLabel: 'MỤC TIÊU BÀI HỌC',
    title: 'Sau Bài Học Này, Em Sẽ...',
    subtitle: 'Nắm vững 3 trọng tâm kiến thức và năng lực cốt lõi',
    layout: 'cards_3',
    elements: [
      {
        id: 'el_5_1',
        type: 'cards',
        data: [
          {
            id: 'obj_1',
            tag: 'Mục tiêu 1',
            title: 'Nêu 7 Bước Vòng Đời',
            desc: 'Mô tả tuần tự 7 bước của một hệ thống AI từ khi hình thành ý tưởng đến khi ngừng sử dụng.',
            icon: 'ListOrdered',
            color: 'blue',
          },
          {
            id: 'obj_2',
            tag: 'Mục tiêu 2',
            title: 'Chỉ Rõ Vai Trò Kiểm Soát',
            desc: 'Giải thích được ở mỗi bước, con người kiểm soát, ra quyết định và chịu trách nhiệm như thế nào.',
            icon: 'Eye',
            color: 'amber',
          },
          {
            id: 'obj_3',
            tag: 'Mục tiêu 3',
            title: 'Con Người Trong Vòng Lặp',
            desc: 'Khắc sâu nguyên tắc Human-in-the-loop: AI chỉ hỗ trợ tính toán, con người giữ quyền quyết định cuối cùng.',
            icon: 'CheckCircle2',
            color: 'emerald',
          },
        ],
      },
    ],
    teacherNotes: {
      teacherScript: 'Đây là 3 yêu cầu cần đạt chính xác theo hướng dẫn của Bộ Giáo dục. Sau 45 phút, từng em trong lớp đều có thể giải thích được 7 bước này.',
      activityDuration: '3 phút',
      keyTakeaways: ['7 bước vòng đời AI', 'Vai trò kiểm soát của con người', 'Human-in-the-loop'],
    },
  },

  // SLIDE 6 - Sơ đồ 7 bước vòng đời AI
  {
    id: 6,
    period: 1,
    periodTitle: 'Tiết 1: Con người trong vòng đời hệ thống AI',
    topic: 'Chuyên đề 1: Con người làm chủ AI · Mạch A',
    competencyStandard: '12.A1.1',
    category: 'diagram',
    categoryLabel: 'KIẾN THỨC CỐT LÕI',
    title: 'Sơ Đồ Vòng Đời 7 Bước Của Hệ Thống AI',
    subtitle: 'Con người thiết lập mục tiêu, giám sát chất lượng và quyết định vận mệnh của hệ thống',
    layout: 'step_pipeline',
    elements: [
      {
        id: 'el_6_1',
        type: 'steps',
        data: [
          { stepNumber: 1, name: 'Xác định vấn đề', role: 'Con người', details: 'Quyết định có nên dùng AI không, đặt mục tiêu, phạm vi & giới hạn đạo đức' },
          { stepNumber: 2, name: 'Chuẩn bị dữ liệu', role: 'Con người', details: 'Thu thập, làm sạch, gán nhãn dữ liệu chuẩn; loại bỏ dữ liệu sai lệch' },
          { stepNumber: 3, name: 'Thiết kế & huấn luyện', role: 'Con người + AI', details: 'Kĩ sư chọn giải thuật học máy, nạp dữ liệu để AI học các mẫu quy luật' },
          { stepNumber: 4, name: 'Thử nghiệm & đánh giá', role: 'Con người', details: 'Chấm thử nghiệm độc lập, đo lường độ chính xác và phát hiện lỗ hổng trước khi triển khai' },
          { stepNumber: 5, name: 'Triển khai sử dụng', role: 'Con người', details: 'Đưa vào môi trường thực tế kèm điều kiện an toàn và phân định phạm vi' },
          { stepNumber: 6, name: 'Giám sát vận hành', role: 'Con người', details: 'Theo dõi liên tục phát hiện sai sót, lập cơ chế khiếu nại / phúc khảo' },
          { stepNumber: 7, name: 'Dừng hoặc cập nhật', role: 'Con người', details: 'Nâng cấp dữ liệu mới hoặc ngừng hẳn khi hệ thống lỗi thời/gây hại' },
        ],
      },
    ],
    illustration: {
      type: 'human_in_loop',
      caption: 'Mỗi bước đều do CON NGƯỜI quyết định và kiểm soát — AI chỉ thực thi thuật toán',
    },
    teacherNotes: {
      teacherScript: 'Hãy nhìn vào bước 2 và bước 4. Nếu ta đưa dữ liệu xấu vào bước 2, chuyện gì xảy ra? Đúng rồi: Rác vào thì Rác ra (Garbage In, Garbage Out). AI không tự biết dữ liệu nào đúng hay sai nếu con người không kiểm định.',
      activityDuration: '8 phút',
      keyTakeaways: ['AI không tự quản lý vòng đời của mình; tất cả các khâu then chốt đều phụ thuộc vào con người'],
    },
  },

  // SLIDE 7 - Bảng phân tích chi tiết 7 bước (AI chấm thi)
  {
    id: 7,
    period: 1,
    periodTitle: 'Tiết 1: Con người trong vòng đời hệ thống AI',
    topic: 'Chuyên đề 1: Con người làm chủ AI · Mạch A',
    competencyStandard: '12.A1.1',
    category: 'table',
    categoryLabel: 'MINH HỌA THỰC TẾ',
    title: 'Phân Tích Vòng Đời Trong Tình Huống “AI Chấm Thi”',
    subtitle: 'Đối chiếu cụ thể trách nhiệm của con người ở từng giai đoạn triển khai',
    layout: 'table_view',
    elements: [
      {
        id: 'el_7_1',
        type: 'table',
        data: {
          headers: ['Bước', 'Tên bước', 'Con người kiểm soát / chịu trách nhiệm gì?', 'Hành động cụ thể (AI chấm thi)'],
          rows: [
            ['1', 'Xác định vấn đề', 'Quyết định có nên dùng AI, đặt ranh giới', 'Chỉ dùng chấm trắc nghiệm chuẩn; bài tự luận để thầy cô chấm'],
            ['2', 'Chuẩn bị dữ liệu', 'Chọn lọc, gán nhãn bài thi mẫu chuẩn xác', 'Nạp 10.000 bài thi đã chấm mẫu chính xác để AI học nhận diện nét vẽ'],
            ['3', 'Thiết kế & huấn luyện', 'Chọn mô hình và thông số phù hợp', 'Kĩ sư AI tinh chỉnh mô hình thị giác máy tính đọc ô khoanh tròn'],
            ['4', 'Thử nghiệm & đánh giá', 'Kiểm thử độc lập với bài thi mới', 'Chấm tay 500 bài đối chiếu song song; chỉ nghiệm thu khi độ đúng > 99.5%'],
            ['5', 'Triển khai dùng thật', 'Phê duyệt chạy thực tế có điều kiện', 'Công khai thông báo cho học sinh biết bài trắc nghiệm chấm bằng AI'],
            ['6', 'Giám sát vận hành', 'Theo dõi sai lệch, mở kênh phúc khảo', 'Cho phép học sinh nộp đơn phúc khảo nếu điểm bài thi có nghi vấn'],
            ['7', 'Dừng / Cập nhật', 'Sửa lỗi hoặc dừng khi phát hiện lệch', 'Khi phát hiện AI đọc nhầm bút chì mờ -> Tạm dừng, quét lại thủ công'],
          ],
        },
      },
    ],
    teacherNotes: {
      teacherScript: 'Nhìn vào cột 3 và cột 4, các em thấy rất rõ: Nếu nhà trường buông lỏng bước 6 (không cho phúc khảo), một bạn học sinh 4 điểm oan sẽ không bao giờ được trả lại sự công bằng!',
      activityDuration: '7 phút',
      keyTakeaways: ['Ở mọi khâu đều có con người kiểm tra chéo và chịu trách nhiệm'],
    },
  },

  // SLIDE 8 - Con người kiểm soát ở 3 bước xung yếu
  {
    id: 8,
    period: 1,
    periodTitle: 'Tiết 1: Con người trong vòng đời hệ thống AI',
    topic: 'Chuyên đề 1: Con người làm chủ AI · Mạch A',
    competencyStandard: '12.A1.1',
    category: 'knowledge',
    categoryLabel: 'ĐIỂM KIỂM SOÁT XUNG YẾU',
    title: '3 “Chốt Chặn” Sinh Tử Con Người Phải Giữ Chặt',
    subtitle: 'Buông lỏng bất kỳ bước nào, AI sẽ gây hậu quả khôn lường mà không ai kịp sửa chữa',
    layout: 'cards_3',
    elements: [
      {
        id: 'el_8_1',
        type: 'cards',
        data: [
          {
            id: 'chot_1',
            tag: 'Bước 2 · Đầu Vào Dữ Liệu',
            title: 'Kiểm Soát Nguồn Học',
            desc: 'Con người tuyển chọn dữ liệu sạch, không thiên vị, không vi phạm bản quyền. Dữ liệu sai thì AI học sai hoàn toàn.',
            badge: 'Chốt chặn 1',
            color: 'blue',
          },
          {
            id: 'chot_2',
            tag: 'Bước 4 · Thử Nghiệm Đối Chiếu',
            title: 'Kiểm Thử Khách Quan',
            desc: 'Chấm tay đối chiếu trên dữ liệu kiểm thử mới, phát hiện các ca dị biệt (corner cases) TRƯỚC KHI cho người dùng dùng.',
            badge: 'Chốt chặn 2',
            color: 'amber',
          },
          {
            id: 'chot_3',
            tag: 'Bước 6 · Giám Sát & Phúc Khảo',
            title: 'Cơ Chế Phản Hồi Mở',
            desc: 'Luôn có đường dây khiếu nại, có giáo viên xem xét lại khi có nghi ngờ, không bao giờ để máy có tiếng nói độc tôn.',
            badge: 'Chốt chặn 3',
            color: 'emerald',
          },
        ],
      },
    ],
    illustration: {
      type: 'ethics_shield',
      caption: '3 chốt chặn bảo vệ tính công bằng và sự an toàn của con người trước thuật toán',
    },
    teacherNotes: {
      teacherScript: 'Các em hãy ghi nhớ 3 chốt chặn: Bước 2 (Dữ liệu), Bước 4 (Thử nghiệm) và Bước 6 (Giám sát phúc khảo). Đây chính là nội dung thường xuyên xuất hiện trong các bài kiểm tra!',
      activityDuration: '5 phút',
      keyTakeaways: ['3 chốt chặn cốt tử: Dữ liệu sạch -> Kiểm thử nghiêm ngặt -> Giám sát & phúc khảo'],
    },
  },

  // SLIDE 9 - Ghi nhớ: Con người trong vòng lặp (Human-in-the-loop)
  {
    id: 9,
    period: 1,
    periodTitle: 'Tiết 1: Con người trong vòng đời hệ thống AI',
    topic: 'Chuyên đề 1: Con người làm chủ AI · Mạch A',
    competencyStandard: '12.A1.1',
    category: 'takeaway',
    categoryLabel: 'HỘP GHI NHỚ VÀNG',
    title: 'Nguyên Tắc: Con Người Trong Vòng Lặp (Human-In-The-Loop)',
    subtitle: 'Chân lý cốt lõi của môn học Trí tuệ nhân tạo THPT',
    layout: 'takeaway_banner',
    elements: [
      {
        id: 'el_9_1',
        type: 'quote',
        data: {
          highlight: 'Ở MỌI BƯỚC CỦA VÒNG ĐỜI AI, CON NGƯỜI RA QUYẾT ĐỊNH CUỐI CÙNG VÀ CHỊU TRÁCH NHIỆM PHÁP LÝ.',
          subtext: 'AI chỉ hỗ trợ tính toán và thực thi — AI TUYỆT ĐỐI KHÔNG TỰ CHỊU TRÁCH NHIỆM.',
          author: 'Quyết định 2422/QĐ-BGDĐT · Chương trình GDPT 2018',
        },
      },
    ],
    illustration: {
      type: 'human_in_loop',
      caption: 'Bàn tay con người luôn đặt trên nút điều khiển',
    },
    teacherNotes: {
      teacherScript: 'Cả lớp cùng đọc thầm câu ghi nhớ trên bảng. Bất cứ khi nào các em nghe ai đó bảo: "Do AI nó tự làm nên tôi không chịu trách nhiệm", hãy nhớ ngay bài học hôm nay!',
      activityDuration: '3 phút',
      keyTakeaways: ['AI không phải là chủ thể chịu trách nhiệm; trách nhiệm luôn thuộc về con người tạo và sử dụng nó.'],
    },
  },

  // SLIDE 10 - Luyện tập nhóm Tiết 1
  {
    id: 10,
    period: 1,
    periodTitle: 'Tiết 1: Con người trong vòng đời hệ thống AI',
    topic: 'Chuyên đề 1: Con người làm chủ AI · Mạch A',
    competencyStandard: '12.A1.1',
    category: 'activity',
    categoryLabel: 'HOẠT ĐỘNG NHÓM (12 PHÚT)',
    title: 'Thực Hành: Hoàn Thành Phiếu Học Tập Số 1',
    subtitle: 'Phân tích tình huống thực tế và thiết lập biện pháp kiểm soát cho 7 bước',
    layout: 'activity_box',
    elements: [
      {
        id: 'el_10_1',
        type: 'checklist',
        data: {
          taskTitle: 'Nhiệm vụ các nhóm (Nhóm 4 học sinh · 8 phút thảo luận + 4 phút báo cáo):',
          items: [
            'Bước 1: Chọn một hệ thống AI (AI chấm bài thi, hoặc AI điểm danh khuôn mặt ở cổng trường).',
            'Bước 2: Với mỗi bước trong 7 bước, ghi rõ con người phải làm gì để đảm bảo an toàn, công bằng.',
            'Bước 3: Chỉ ra hậu quả nghiêm trọng nhất nếu con người buông lỏng ở bước đó.',
            'Sản phẩm nộp: Phiếu học tập số 1 hoàn chỉnh đã điền đủ 7 bước.',
          ],
        },
      },
    ],
    illustration: {
      type: 'team_roles',
      caption: 'Làm việc nhóm 4 học sinh phân tích phiếu học tập',
    },
    worksheetNumber: 1,
    teacherNotes: {
      teacherScript: 'Các nhóm nhận Phiếu học tập số 1. Thời gian thảo luận là 8 phút. Thầy/cô sẽ mời ngẫu nhiên 2 nhóm lên trình bày nhanh trong 2 phút mỗi nhóm.',
      activityDuration: '12 phút',
      keyTakeaways: ['Học sinh vận dụng lý thuyết 7 bước vào tình huống cụ thể'],
      sampleAnswer: 'Xem đáp án chuẩn Phiếu học tập số 1 ở mục tài liệu giáo viên.',
    },
  },

  // SLIDE 11 - Vận dụng & Chuyển tiếp Tiết 1 sang Tiết 2
  {
    id: 11,
    period: 1,
    periodTitle: 'Tiết 1: Con người trong vòng đời hệ thống AI',
    topic: 'Chuyên đề 1: Con người làm chủ AI · Mạch A',
    competencyStandard: '12.A1.1',
    category: 'summary',
    categoryLabel: 'VẬN DỤNG & KẾT NỐI (5 PHÚT)',
    title: 'Dùng AI Có Hiểu Biết — Có Kiểm Soát — Có Trách Nhiệm',
    subtitle: 'Nhiệm vụ về nhà & Cầu nối sang Tiết 2',
    layout: 'split_left_right',
    elements: [
      {
        id: 'el_11_1',
        type: 'bullet_points',
        data: [
          'Vận dụng về nhà: Tìm 1 ví dụ hệ thống AI em gặp trong đời sống (YouTube, TikTok, bản đồ Google Maps). Chỉ ra 1 bước con người kiểm soát và giải thích vì sao quan trọng.',
          'Viết 3 câu trả lời vào vở: "Vì sao con người luôn phải làm chủ AI?".',
          'Kết nối Tiết 2: Khi đứng trước một quyết định quan trọng, AI sẽ làm gì và con người phải làm gì? Mời các em đón xem Tiết 2: "AI gợi ý, con người quyết định"!',
        ],
      },
    ],
    illustration: {
      type: 'decision_making',
      caption: 'Tiết sau: AI gợi ý, con người quyết định',
    },
    teacherNotes: {
      teacherScript: 'Hôm nay các em đã nắm chắc 7 bước vòng đời. Ở tiết sau, chúng ta sẽ đi sâu vào khoảnh khắc ra quyết định: AI gợi ý điều gì và con người quyết định điều gì.',
      activityDuration: '5 phút',
      keyTakeaways: ['Hoàn thành bài tập về nhà và chuẩn bị tâm thế cho Tiết 2'],
    },
  },

  // ===== TIẾT 2 (SLIDES 12 - 20) =====
  // SLIDE 12 - Bìa Tiết 2
  {
    id: 12,
    period: 2,
    periodTitle: 'Tiết 2: AI gợi ý, con người quyết định',
    topic: 'Chuyên đề 1: Con người làm chủ AI · Mạch A',
    competencyStandard: '12.A1.2 — Phân tích được vai trò của con người và AI trong các bước chính của quá trình ra quyết định',
    category: 'cover',
    categoryLabel: 'TIẾT 2 · MỞ ĐẦU',
    title: 'AI Gợi Ý, Con Người Quyết Định',
    subtitle: 'Phân định ranh giới giữa khả năng xử lý dữ liệu của máy và năng lực phán đoán đạo đức của con người',
    layout: 'center_hero',
    elements: [
      {
        id: 'el_12_1',
        type: 'header',
        data: {
          badge: 'TIẾT 2 / 12 (45 PHÚT)',
          heading: 'AI ĐƯA RA LỰA CHỌN — CON NGƯỜI QUYẾT ĐỊNH TƯƠNG LAI',
          subtext: 'Quyết định càng ảnh hưởng lớn đến cuộc sống, con người càng bắt buộc phải giữ quyền tối thượng',
        },
      },
    ],
    illustration: {
      type: 'decision_making',
      caption: 'Bác sĩ và chuyên gia cân nhắc đề xuất từ hệ thống chẩn đoán AI',
      source: 'QĐ 2422/QĐ-BGDĐT',
    },
    teacherNotes: {
      teacherScript: 'Chào các em, ở Tiết 1 ta biết con người làm chủ vòng đời. Hôm nay ở Tiết 2, chúng ta sẽ trả lời câu hỏi: Khi cần đưa ra một quyết định, ta có nên để AI bấm nút thay mình không?',
      activityDuration: '2 phút',
      keyTakeaways: ['Phân biệt rõ việc AI làm và việc con người làm trong quá trình ra quyết định'],
    },
  },

  // SLIDE 13 - Khởi động Tiết 2
  {
    id: 13,
    period: 2,
    periodTitle: 'Tiết 2: AI gợi ý, con người quyết định',
    topic: 'Chuyên đề 1: Con người làm chủ AI · Mạch A',
    competencyStandard: '12.A1.2',
    category: 'intro',
    categoryLabel: 'KHỞI ĐỘNG (5 PHÚT)',
    title: 'Tình Huống Đối Chiếu: Y Tế vs Tư Pháp',
    subtitle: 'Xem xét hai tình huống ứng dụng AI trong cuộc sống thực tế',
    layout: 'cards_3',
    elements: [
      {
        id: 'el_13_1',
        type: 'cards',
        data: [
          {
            id: 'th_a',
            tag: 'Tình huống A',
            title: 'Chẩn Đoán Bệnh Án',
            desc: 'AI phân tích ảnh chụp X-quang và gợi ý bác sĩ: "Nghi ngờ có khối u phổi 88%". Bác sĩ hội chẩn lại và chỉ định phẫu thuật.',
            badge: 'AI gợi ý hỗ trợ',
            color: 'emerald',
          },
          {
            id: 'th_b',
            tag: 'Tình huống B',
            title: 'Tuyên Án Tự Động',
            desc: 'Tòa án nạp hồ sơ phạm nhân vào máy tính, AI tự động tính toán điểm số và in ra bản án: "Tuyên phạt 5 năm tù giam", không cần thẩm phán.',
            badge: 'AI tự quyết một mình',
            color: 'rose',
          },
        ],
      },
      {
        id: 'el_13_2',
        type: 'discussion',
        data: {
          question: 'Tình huống nào để AI quyết định một mình là NGUY HIỂM và BẤT CÔNG? Vì sao?',
        },
      },
    ],
    illustration: {
      type: 'law_justice',
      caption: 'Máy móc không thể cảm nhận nỗi đau, sự tha thứ hay bối cảnh nhân văn',
    },
    teacherNotes: {
      teacherScript: 'Cả lớp suy nghĩ nhanh: Liệu chúng ta có muốn một cỗ máy lạnh lùng định đoạt số phận hay bản án của một con người không? Câu trả lời dứt khoát là KHÔNG.',
      activityDuration: '5 phút',
      keyTakeaways: ['Các quyết định liên quan đến sinh mệnh, tự do và nhân phẩm đòi hỏi đạo đức con người'],
    },
  },

  // SLIDE 14 - Mục tiêu bài học Tiết 2
  {
    id: 14,
    period: 2,
    periodTitle: 'Tiết 2: AI gợi ý, con người quyết định',
    topic: 'Chuyên đề 1: Con người làm chủ AI · Mạch A',
    competencyStandard: '12.A1.2',
    category: 'objective',
    categoryLabel: 'MỤC TIÊU BÀI HỌC',
    title: 'Sau Bài Học Tiết 2, Em Sẽ...',
    subtitle: '3 mục tiêu chuẩn đầu ra theo hướng dẫn sư phạm',
    layout: 'cards_3',
    elements: [
      {
        id: 'el_14_1',
        type: 'cards',
        data: [
          {
            id: 'm2_1',
            tag: '1',
            title: '5 Bước Ra Quyết Định',
            desc: 'Mô tả tuần tự 5 bước của quy trình ra quyết định khi có sự hỗ trợ đắc lực từ AI.',
            icon: 'ListOrdered',
            color: 'blue',
          },
          {
            id: 'm2_2',
            tag: '2',
            title: 'Phân Vai Rạch Ròi',
            desc: 'Phân biệt chính xác việc AI làm tốt nhất (xử lý dữ liệu) và việc con người bắt buộc làm (định giá trị, cảm xúc).',
            icon: 'GitFork',
            color: 'emerald',
          },
          {
            id: 'm2_3',
            tag: '3',
            title: 'Quyết Định Trọng Yếu',
            desc: 'Hiểu và giải thích được vì sao các quyết định ảnh hưởng lớn bắt buộc con người giữ quyền quyết định cuối cùng.',
            icon: 'ShieldCheck',
            color: 'purple',
          },
        ],
      },
    ],
    teacherNotes: {
      teacherScript: 'Các em chú ý: Chúng ta không phủ nhận AI, mà chúng ta đặt AI vào đúng vị trí của nó: Vị trí của một trợ lý phân tích dữ liệu đắc lực!',
      activityDuration: '3 phút',
      keyTakeaways: ['5 bước quyết định', 'Phân vai AI/Người', 'Quyền quyết định cuối'],
    },
  },

  // SLIDE 15 - 5 bước của quá trình ra quyết định
  {
    id: 15,
    period: 2,
    periodTitle: 'Tiết 2: AI gợi ý, con người quyết định',
    topic: 'Chuyên đề 1: Con người làm chủ AI · Mạch A',
    competencyStandard: '12.A1.2',
    category: 'knowledge',
    categoryLabel: 'KIẾN THỨC CỐT LÕI',
    title: 'Quá Trình Ra Quyết Định: AI Gợi Ý — Con Người Quyết',
    subtitle: 'Bảng phân định trách nhiệm chi tiết qua 5 bước tiêu chuẩn',
    layout: 'table_view',
    elements: [
      {
        id: 'el_15_1',
        type: 'table',
        data: {
          headers: ['Bước', 'Ai đảm nhận?', 'Nội dung công việc', 'Tại sao lại như vậy?'],
          rows: [
            ['1', 'Con người', 'Nêu vấn đề cần giải quyết, thu thập thông tin đầu vào', 'Con người hiểu nhu cầu thực tế và mục đích nhân văn'],
            ['2', 'AI', 'Xử lý dữ liệu lớn, phân tích thống kê, đưa ra gợi ý / dự đoán', 'AI vượt trội ở tốc độ tính toán và quét hàng triệu mẫu dữ liệu'],
            ['3', 'Con người', 'Cân nhắc bối cảnh xã hội, cảm xúc, văn hóa và đạo đức', 'AI là thuật toán vô tri, không hiểu nỗi đau hay hoàn cảnh riêng'],
            ['4', 'Con người', 'Ra quyết định cuối cùng (Đồng ý / Bác bỏ / Điều chỉnh gợi ý)', 'Chỉ con người mới có quyền năng tự do ý chí và phán đoán'],
            ['5', 'Con người', 'Chịu trách nhiệm pháp lý và đạo đức về kết quả', 'Máy móc không thể bồi thường, không thể bị truy cứu trách nhiệm'],
          ],
        },
      },
    ],
    teacherNotes: {
      teacherScript: 'Hãy nhìn vào Bước 3 và 4: Tại sao AI không làm được bước 3? Vì AI chỉ thấy những con số xác suất, nó không thể hiểu một học sinh làm bài thi trong hoàn cảnh mẹ vừa ốm nặng, hay một gia đình vừa trải qua biến cố.',
      activityDuration: '8 phút',
      keyTakeaways: ['AI mạnh ở xử lý dữ liệu; con người mạnh ở hiểu bối cảnh, đạo đức và trách nhiệm'],
    },
  },

  // SLIDE 16 - Ví dụ thực tế theo 4 lĩnh vực
  {
    id: 16,
    period: 2,
    periodTitle: 'Tiết 2: AI gợi ý, con người quyết định',
    topic: 'Chuyên đề 1: Con người làm chủ AI · Mạch A',
    competencyStandard: '12.A1.2',
    category: 'cards',
    categoryLabel: 'VÍ DỤ THEO LĨNH VỰC',
    title: 'Càng Ảnh Hưởng Lớn — Con Người Càng Phải Quyết',
    subtitle: 'So sánh tác động của việc giao phó quyết định cho AI trong 4 lĩnh vực then chốt',
    layout: 'cards_4',
    elements: [
      {
        id: 'el_16_1',
        type: 'cards',
        data: [
          {
            id: 'lv_yte',
            tag: 'Y tế & Sức khỏe',
            title: 'Chẩn Đoán Bệnh',
            desc: 'AI gợi ý phác đồ từ triệu chứng; Bác sĩ xem xét toàn diện thể trạng và quyết định. Để AI quyết -> Chữa sai, nguy hiểm tính mạng.',
            icon: 'Stethoscope',
            color: 'rose',
          },
          {
            id: 'lv_tuyen',
            tag: 'Nhân sự & Tuyển dụng',
            title: 'Lọc Hồ Sơ Xin Việc',
            desc: 'AI xếp hạng từ khóa CV; Nhà tuyển dụng phỏng vấn trực tiếp và đánh giá thái độ. Để AI quyết -> Loại nhầm nhân tài, thiên vị giới tính.',
            icon: 'Briefcase',
            color: 'amber',
          },
          {
            id: 'lv_tuphap',
            tag: 'Pháp luật & Tư pháp',
            title: 'Xét Xử Bản Án',
            desc: 'AI gợi ý khung hình phạt tham khảo; Thẩm phán xét xử theo luật pháp và tình tiết giảm nhẹ. Để AI quyết -> Bất công, xâm phạm quyền con người.',
            icon: 'Scale',
            color: 'purple',
          },
          {
            id: 'lv_giaothong',
            tag: 'Giao thông vận tải',
            title: 'Điều Khiển Lộ Trình',
            desc: 'AI chỉ đường nhanh nhất; Tài xế quan sát biển báo, thời tiết và chọn lối đi an toàn. Để AI quyết -> Đi vào đường ngập, hẻm cụt nguy hiểm.',
            icon: 'Navigation',
            color: 'blue',
          },
        ],
      },
    ],
    teacherNotes: {
      teacherScript: 'Các em thấy đấy: Trong cả 4 lĩnh vực, nếu giao khoán cho AI, hậu quả sẽ cực kỳ nặng nề. Không bao giờ được phép buông tay khỏi vô lăng quyết định.',
      activityDuration: '7 phút',
      keyTakeaways: ['Mức độ kiểm soát của con người tỷ lệ thuận với mức độ rủi ro đối với tính mạng, danh dự và tài sản'],
    },
  },

  // SLIDE 17 - Hộp ghi nhớ Tiết 2
  {
    id: 17,
    period: 2,
    periodTitle: 'Tiết 2: AI gợi ý, con người quyết định',
    topic: 'Chuyên đề 1: Con người làm chủ AI · Mạch A',
    competencyStandard: '12.A1.2',
    category: 'takeaway',
    categoryLabel: 'HỘP GHI NHỚ VÀNG',
    title: 'Ghi Nhớ: AI Gợi Ý — Con Người Quyết Định',
    subtitle: 'Nguyên lý bảo vệ quyền tự chủ của con người trong kỷ nguyên số',
    layout: 'takeaway_banner',
    elements: [
      {
        id: 'el_17_1',
        type: 'quote',
        data: {
          highlight: 'AI ĐƯA RA GỢI Ý DỰA TRÊN DỮ LIỆU; CON NGƯỜI CÂN NHẮC GIÁ TRỊ ĐẠO ĐỨC VÀ CHỊU TRÁCH NHIỆM.',
          subtext: 'Quyết định càng ảnh hưởng lớn đến cuộc sống, con người càng bắt buộc phải giữ quyền tối cao.',
          author: 'Nguyên tắc nhân bản trong Giáo dục Tin học THPT',
        },
      },
    ],
    illustration: {
      type: 'decision_making',
      caption: 'Người học sinh tự tin đứng trước ngã rẽ cuộc sống với sự đồng hành sáng suốt',
    },
    teacherNotes: {
      teacherScript: 'Nhớ câu này khi các em dùng ChatGPT, Gemini hay bất kỳ công cụ nào để làm bài tập hay chọn ngành đại học: AI chỉ gợi ý dàn ý, em mới là người quyết định cuộc đời mình!',
      activityDuration: '3 phút',
      keyTakeaways: ['AI không thay thế ý chí con người'],
    },
  },

  // SLIDE 18 - Luyện tập nhóm Tiết 2: Sơ đồ 5 bước tô màu
  {
    id: 18,
    period: 2,
    periodTitle: 'Tiết 2: AI gợi ý, con người quyết định',
    topic: 'Chuyên đề 1: Con người làm chủ AI · Mạch A',
    competencyStandard: '12.A1.2',
    category: 'activity',
    categoryLabel: 'HOẠT ĐỘNG NHÓM (14 PHÚT)',
    title: 'Thực Hành: Vẽ Sơ Đồ Ra Quyết Định 5 Bước',
    subtitle: 'Phân tích tình huống thẻ bài và hoàn thành Phiếu học tập số 2',
    layout: 'activity_box',
    elements: [
      {
        id: 'el_18_1',
        type: 'checklist',
        data: {
          taskTitle: 'Hướng dẫn thực hiện theo nhóm 4 học sinh:',
          items: [
            'Mỗi nhóm bốc 1 thẻ tình huống (Chọn ngành đại học, Chẩn đoán y tế, Duyệt đơn xin học bổng, Tuyển dụng nhân viên).',
            'Vẽ sơ đồ 5 bước ra giấy/phiếu học tập số 2.',
            'TÔ MÀU XANH cho phần AI làm và TÔ MÀU ĐỎ/CAM cho phần Con người làm.',
            'Cử đại diện thuyết trình 1 phút trước lớp giải thích lý do phân vai.',
          ],
        },
      },
    ],
    worksheetNumber: 2,
    illustration: {
      type: 'team_roles',
      caption: 'Học sinh phân vai và tô màu trực quan sơ đồ 5 bước',
    },
    teacherNotes: {
      teacherScript: 'Thầy/cô phát Phiếu học tập số 2. Hãy chú ý tô màu thật rõ ràng. Nhóm nào để màu xanh (AI) chiếm mất bước 4 và bước 5 là sai bản chất nhé!',
      activityDuration: '14 phút',
      keyTakeaways: ['Trực quan hóa việc phân vai giữa AI và con người'],
    },
  },

  // SLIDE 19 - Vận dụng bản thân Tiết 2
  {
    id: 19,
    period: 2,
    periodTitle: 'Tiết 2: AI gợi ý, con người quyết định',
    topic: 'Chuyên đề 1: Con người làm chủ AI · Mạch A',
    competencyStandard: '12.A1.2',
    category: 'case_study',
    categoryLabel: 'VẬN DỤNG CÁ NHÂN (5 PHÚT)',
    title: 'Liên Hệ Quyết Định Của Bản Thân',
    subtitle: 'Áp dụng bài học vào việc học tập và cuộc sống hàng ngày của học sinh lớp 12',
    layout: 'split_left_right',
    elements: [
      {
        id: 'el_19_1',
        type: 'discussion',
        data: {
          question: 'Hãy nêu 1 quyết định trong đời sống em có thể nhờ AI gợi ý (chọn trường, ôn thi, mua sắm đồ dùng). Phần nào em TUYỆT ĐỐI phải tự quyết?',
          instruction: 'Viết 2-3 câu vào vở ghi và chia sẻ cùng bạn bên cạnh.',
        },
      },
    ],
    illustration: {
      type: 'decision_making',
      caption: 'Lắng nghe gợi ý từ công nghệ nhưng quyết định bằng đam mê và năng lực cá nhân',
    },
    teacherNotes: {
      teacherScript: 'Ví dụ: Các em có thể nhờ AI tổng hợp điểm chuẩn 5 năm qua của các trường Đại học Bách Khoa hay Kinh tế Quốc dân, nhưng việc em thích ngành nào, gia đình có điều kiện ra sao thì chính em và gia đình phải tự quyết!',
      activityDuration: '5 phút',
      keyTakeaways: ['Biết ứng dụng AI thông minh vào chọn trường, định hướng học tập'],
    },
  },

  // SLIDE 20 - Tổng kết & Chuyển tiếp Tiết 2 sang Tiết 3
  {
    id: 20,
    period: 2,
    periodTitle: 'Tiết 2: AI gợi ý, con người quyết định',
    topic: 'Chuyên đề 1: Con người làm chủ AI · Mạch A',
    competencyStandard: '12.A1.2',
    category: 'summary',
    categoryLabel: 'TỔNG KẾT & KẾT NỐI (3 PHÚT)',
    title: 'Con Người Giữ Quyền Quyết Định',
    subtitle: 'Với việc quan trọng, đừng bao giờ giao phó hoàn toàn cho AI',
    layout: 'takeaway_banner',
    elements: [
      {
        id: 'el_20_1',
        type: 'quote',
        data: {
          highlight: 'VỚI VIỆC QUAN TRỌNG, ĐỪNG BAO GIỜ GIAO PHÓ HOÀN TOÀN CHO AI.',
          subtext: 'Tiết sau: Khi hệ thống AI gặp sự cố hoặc gây thiệt hại, pháp luật quy định trách nhiệm giải trình ra sao? Mời các em đón xem Tiết 3: "Trách nhiệm giải trình & Pháp luật"!',
        },
      },
    ],
    illustration: {
      type: 'law_justice',
      caption: 'Tiết 3: Trách nhiệm giải trình & Pháp luật',
    },
    teacherNotes: {
      teacherScript: 'Nhưng nếu người ta cố tình đổ lỗi: "Tôi không biết, do AI nó làm", thì luật pháp có chấp nhận không? Tiết 3 chúng ta sẽ cùng tìm hiểu về Trách nhiệm giải trình và Pháp luật liên quan!',
      activityDuration: '3 phút',
      keyTakeaways: ['Con người luôn nắm quyền quyết định cuối cùng; kết nối sang bài học pháp luật'],
    },
  },

  // ===== TIẾT 3 (SLIDES 21 - 29) =====
  // SLIDE 21 - Bìa Tiết 3
  {
    id: 21,
    period: 3,
    periodTitle: 'Tiết 3: Trách nhiệm giải trình & pháp luật',
    topic: 'Chuyên đề 1: Con người làm chủ AI · Mạch A',
    competencyStandard: '12.A1.3 — Kiểm tra được việc thực hiện trách nhiệm giải trình của con người đối với các quyết định, đối chiếu với các quy định hiện hành trong nước và quốc tế',
    category: 'cover',
    categoryLabel: 'TIẾT 3 · MỞ ĐẦU',
    title: 'Trách Nhiệm Giải Trình & Pháp Luật',
    subtitle: 'Tìm hiểu khung pháp lý, nghĩa vụ minh bạch và không bao giờ được "đổ lỗi cho máy móc"',
    layout: 'center_hero',
    elements: [
      {
        id: 'el_21_1',
        type: 'header',
        data: {
          badge: 'TIẾT 3 / 12 (45 PHÚT)',
          heading: 'MINH BẠCH VÀ CHỊU TRÁCH NHIỆM LÀ GỐC CỦA NIỀM TIN VÀO AI',
          subtext: 'Không ai có thể trốn tránh trách nhiệm bằng câu nói: "Do thuật toán AI tự làm"',
        },
      },
    ],
    illustration: {
      type: 'law_justice',
      caption: 'Cán cân công lý và chip vi xử lý AI trong khuôn khổ pháp luật',
      source: 'Quyết định 2422/QĐ-BGDĐT',
    },
    teacherNotes: {
      teacherScript: 'Chào các em đến với Tiết 3. Đây là tiết học cực kỳ quan trọng giúp các em trở thành những công dân số hiểu luật, bảo vệ được quyền lợi của chính mình và tôn trọng pháp luật.',
      activityDuration: '2 phút',
      keyTakeaways: ['Khái niệm trách nhiệm giải trình và pháp luật về AI'],
    },
  },

  // SLIDE 22 - Khởi động Tiết 3
  {
    id: 22,
    period: 3,
    periodTitle: 'Tiết 3: Trách nhiệm giải trình & pháp luật',
    topic: 'Chuyên đề 1: Con người làm chủ AI · Mạch A',
    competencyStandard: '12.A1.3',
    category: 'intro',
    categoryLabel: 'KHỞI ĐỘNG (5 PHÚT)',
    title: 'Tình Huống “Chúng Tôi Không Biết, Do AI Tự Làm”',
    subtitle: 'Một công ty dùng AI lọc hồ sơ, loại nhầm một ứng viên rất giỏi. Khi bị chất vấn, họ nói: “AI tự làm, chúng tôi không biết”.',
    layout: 'split_left_right',
    elements: [
      {
        id: 'el_22_1',
        type: 'discussion',
        data: {
          question: 'Câu trả lời “AI tự làm, chúng tôi không biết” có được chấp nhận trước pháp luật và xã hội không?',
          instruction: 'Thảo luận nhanh (2 phút), giơ tay bày tỏ quan điểm: ĐỒNG Ý hay PHẢN ĐỐI?',
        },
      },
    ],
    illustration: {
      type: 'decision_making',
      caption: 'Ứng viên bất bình khi bị từ chối vô lý mà không có lời giải thích thỏa đáng',
    },
    teacherNotes: {
      teacherScript: 'Nếu một công ty xả thải gây ô nhiễm rồi bảo do máy bơm tự động, họ có bị phạt không? Chắc chắn bị phạt! Với phần mềm AI cũng y như vậy. "AI tự làm" tuyệt đối KHÔNG phải là lời bào chữa hợp pháp!',
      activityDuration: '5 phút',
      keyTakeaways: ['Không được đổ lỗi cho máy tính; người sử dụng công nghệ phải chịu trách nhiệm giải trình'],
    },
  },

  // SLIDE 23 - Mục tiêu bài học Tiết 3
  {
    id: 23,
    period: 3,
    periodTitle: 'Tiết 3: Trách nhiệm giải trình & pháp luật',
    topic: 'Chuyên đề 1: Con người làm chủ AI · Mạch A',
    competencyStandard: '12.A1.3',
    category: 'objective',
    categoryLabel: 'MỤC TIÊU BÀI HỌC',
    title: 'Sau Bài Học Tiết 3, Em Sẽ...',
    subtitle: '3 mục tiêu chuẩn đầu ra',
    layout: 'cards_3',
    elements: [
      {
        id: 'el_23_1',
        type: 'cards',
        data: [
          {
            id: 'm3_1',
            tag: '1',
            title: 'Trách Nhiệm Giải Trình',
            desc: 'Hiểu và nêu chuẩn xác khái niệm trách nhiệm giải trình (Accountability) khi tạo hoặc dùng AI.',
            icon: 'FileText',
            color: 'blue',
          },
          {
            id: 'm3_2',
            tag: '2',
            title: 'Pháp Luật Hiện Hành',
            desc: 'Kể tên các quy định pháp luật Việt Nam (Luật An ninh mạng, Luật Dữ liệu) và quốc tế (EU AI Act).',
            icon: 'Gavel',
            color: 'amber',
          },
          {
            id: 'm3_3',
            tag: '3',
            title: 'Checklist 4 Tiêu Chí',
            desc: 'Sử dụng bộ công cụ 4 tiêu chí để kiểm tra tính giải trình và hợp pháp của một hệ thống AI thực tế.',
            icon: 'CheckSquare',
            color: 'emerald',
          },
        ],
      },
    ],
    teacherNotes: {
      teacherScript: 'Sau tiết này, các em sẽ sở hữu một "bộ kính hiển vi" 4 tiêu chí để soi bất kỳ ứng dụng AI nào xem nó có minh bạch và hợp pháp hay không.',
      activityDuration: '3 phút',
      keyTakeaways: ['Trách nhiệm giải trình', 'Pháp luật AI', 'Checklist 4 tiêu chí'],
    },
  },

  // SLIDE 24 - Khái niệm Trách nhiệm giải trình
  {
    id: 24,
    period: 3,
    periodTitle: 'Tiết 3: Trách nhiệm giải trình & pháp luật',
    topic: 'Chuyên đề 1: Con người làm chủ AI · Mạch A',
    competencyStandard: '12.A1.3',
    category: 'knowledge',
    categoryLabel: 'KHÁI NIỆM TRỌNG TÂM',
    title: 'Không Được “Đổ Lỗi Cho Máy”',
    subtitle: 'Công thức cấu thành Trách nhiệm giải trình (Accountability)',
    layout: 'cards_3',
    elements: [
      {
        id: 'el_24_1',
        type: 'cards',
        data: [
          {
            id: 'gt_1',
            tag: 'Vế 1: Nghĩa vụ',
            title: 'GIẢI THÍCH ĐƯỢC',
            desc: 'Phải giải thích rõ ràng: Hệ thống hoạt động theo nguyên lý nào? Sử dụng dữ liệu gì để học? Cơ sở nào đưa ra kết quả?',
            badge: 'Explainability',
            color: 'blue',
          },
          {
            id: 'gt_2',
            tag: 'Vế 2: Nghĩa vụ',
            title: 'CHỊU TRÁCH NHIỆM',
            desc: 'Chủ thể vận hành và phát triển phải đứng ra nhận trách nhiệm pháp lý, đền bù thiệt hại và sửa chữa sai sót.',
            badge: 'Responsibility',
            color: 'rose',
          },
          {
            id: 'gt_3',
            tag: 'Quy tắc vàng',
            title: 'THIẾU 1 TRONG 2 = KHÔNG ĐẠT',
            desc: 'Chỉ giải thích mà không bồi thường -> Né tránh trách nhiệm. Nhận bồi thường nhưng giấu kín thuật toán -> Thiếu minh bạch.',
            badge: 'Bắt buộc đồng thời',
            color: 'amber',
          },
        ],
      },
    ],
    teacherNotes: {
      teacherScript: 'Các em ghi nhớ công thức: TRÁCH NHIỆM GIẢI TRÌNH = GIẢI THÍCH ĐƯỢC + CHỊU TRÁCH NHIỆM VỀ HẬU QUẢ. Thiếu 1 trong 2 vế đều là vi phạm.',
      activityDuration: '6 phút',
      keyTakeaways: ['Trách nhiệm giải trình gồm 2 thành tố không thể tách rời'],
    },
  },

  // SLIDE 25 - Pháp luật Việt Nam & Quốc tế liên quan AI
  {
    id: 25,
    period: 3,
    periodTitle: 'Tiết 3: Trách nhiệm giải trình & pháp luật',
    topic: 'Chuyên đề 1: Con người làm chủ AI · Mạch A',
    competencyStandard: '12.A1.3',
    category: 'knowledge',
    categoryLabel: 'KHUNG PHÁP LÝ',
    title: 'Pháp Luật Việt Nam & Quốc Tế Về AI',
    subtitle: 'Hành lang pháp lý bảo vệ công dân và trật tự an toàn trên không gian mạng',
    layout: 'cards_3',
    elements: [
      {
        id: 'el_25_1',
        type: 'cards',
        data: [
          {
            id: 'law_vn1',
            tag: 'Việt Nam',
            title: 'Luật An Ninh Mạng',
            desc: 'Nghiêm cấm dùng công nghệ thông tin/AI để phát tán thông tin sai sự thật, xúc phạm danh dự nhân phẩm hoặc phá hoại an ninh.',
            icon: 'Shield',
            color: 'blue',
          },
          {
            id: 'law_vn2',
            tag: 'Việt Nam',
            title: 'Bảo Vệ Dữ Liệu Cá Nhân',
            desc: 'Nghị định 13/2023/NĐ-CP và Luật Dữ liệu: Mọi hành vi thu thập, khai thác thông tin cá nhân phải được người dùng đồng ý.',
            icon: 'Lock',
            color: 'emerald',
          },
          {
            id: 'law_eu',
            tag: 'Quốc Tế',
            title: 'Đạo Luật AI Châu Âu (EU AI Act)',
            desc: 'Đạo luật toàn diện phân loại rủi ro AI thành 4 cấp: Không thể chấp nhận (cấm), Rủi ro cao (kiểm soát ngặt), Rủi ro vừa & Rủi ro tối thiểu.',
            icon: 'Globe',
            color: 'purple',
          },
        ],
      },
    ],
    teacherNotes: {
      teacherScript: 'Tại Việt Nam, nếu bạn dùng AI ghép ảnh bôi nhọ người khác hoặc thu thập dữ liệu lén lút, bạn có thể bị xử lý hành chính hoặc hình sự theo Luật An ninh mạng và Nghị định Bảo vệ dữ liệu cá nhân!',
      activityDuration: '6 phút',
      keyTakeaways: ['Mọi hành vi ứng dụng AI đều chịu sự điều chỉnh chặt chẽ của pháp luật'],
    },
  },

  // SLIDE 26 - Công cụ: 4 tiêu chí kiểm tra trách nhiệm giải trình
  {
    id: 26,
    period: 3,
    periodTitle: 'Tiết 3: Trách nhiệm giải trình & pháp luật',
    topic: 'Chuyên đề 1: Con người làm chủ AI · Mạch A',
    competencyStandard: '12.A1.3',
    category: 'table',
    categoryLabel: 'BỘ CÔNG CỤ ĐÁNH GIÁ',
    title: '4 Tiêu Chí Kiểm Tra Trách Nhiệm Giải Trình',
    subtitle: 'Checklist thẩm định dành cho người vận hành và người thụ hưởng hệ thống AI',
    layout: 'table_view',
    elements: [
      {
        id: 'el_26_1',
        type: 'table',
        data: {
          headers: ['STT', 'Tiêu chí kiểm tra', 'Câu hỏi đánh giá', 'Đánh giá (Đạt / Chưa đạt)'],
          rows: [
            ['1', 'Xác định rõ chủ thể', 'Có xác định rõ AI ĐANG được ai vận hành, cơ quan/cá nhân nào chịu trách nhiệm pháp lý?', 'Đạt nếu có pháp nhân chịu trách nhiệm rõ ràng'],
            ['2', 'Giải thích được kết quả', 'Có giải thích được cách thức AI ra quyết định, dữ liệu huấn luyện đến từ đâu?', 'Đạt nếu có tài liệu mô tả cơ chế minh bạch'],
            ['3', 'Cơ chế khiếu nại, phúc khảo', 'Có kênh tiếp nhận phản hồi, cho phép người bị ảnh hưởng yêu cầu xem xét lại?', 'Đạt nếu có quy trình khiếu nại cụ thể'],
            ['4', 'Tuân thủ quy định pháp luật', 'Hệ thống có tuân thủ bảo vệ dữ liệu cá nhân và an ninh mạng không?', 'Đạt nếu được cấp phép và bảo mật hợp pháp'],
          ],
        },
      },
    ],
    teacherNotes: {
      teacherScript: 'Bộ 4 tiêu chí này là công cụ thực hành chính của Phiếu học tập số 3. Bất kỳ sản phẩm AI nào thiếu dù chỉ 1 tiêu chí thì đều bị xếp loại CHƯA ĐẠT.',
      activityDuration: '6 phút',
      keyTakeaways: ['4 tiêu chí: Chủ thể rõ ràng - Giải thích được - Cơ chế khiếu nại - Tuân thủ pháp luật'],
    },
  },

  // SLIDE 27 - Hộp ghi nhớ Tiết 3
  {
    id: 27,
    period: 3,
    periodTitle: 'Tiết 3: Trách nhiệm giải trình & pháp luật',
    topic: 'Chuyên đề 1: Con người làm chủ AI · Mạch A',
    competencyStandard: '12.A1.3',
    category: 'takeaway',
    categoryLabel: 'HỘP GHI NHỚ VÀNG',
    title: 'Ghi Nhớ: Không Đổ Lỗi Cho Máy',
    subtitle: 'Nguyên tắc bất di bất dịch của người phát triển và sử dụng công nghệ',
    layout: 'takeaway_banner',
    elements: [
      {
        id: 'el_27_1',
        type: 'quote',
        data: {
          highlight: 'NGƯỜI PHÁT TRIỂN VÀ NGƯỜI SỬ DỤNG AI ĐỀU PHẢI GIẢI TRÌNH VÀ CHỊU TRÁCH NHIỆM.',
          subtext: '“AI TỰ LÀM” KHÔNG PHẢI LÀ LỜI BÀO CHỮA!',
          author: 'Quyết định 2422/QĐ-BGDĐT',
        },
      },
    ],
    illustration: {
      type: 'robot_learning',
      caption: 'Biển cấm đổ lỗi cho máy tính trong mọi tình huống',
    },
    teacherNotes: {
      teacherScript: 'Hãy khắc sâu câu này vào tâm trí: "AI tự làm" không bao giờ là lời bào chữa được chấp nhận.',
      activityDuration: '3 phút',
      keyTakeaways: ['Không đổ lỗi cho máy móc trong bất kỳ sự cố nào'],
    },
  },

  // SLIDE 28 - Hoạt động luyện tập Tiết 3: Kiểm tra hệ thống AI
  {
    id: 28,
    period: 3,
    periodTitle: 'Tiết 3: Trách nhiệm giải trình & pháp luật',
    topic: 'Chuyên đề 1: Con người làm chủ AI · Mạch A',
    competencyStandard: '12.A1.3',
    category: 'activity',
    categoryLabel: 'HOẠT ĐỘNG NHÓM (14 PHÚT)',
    title: 'Kiểm Tra Một Hệ Thống AI Bằng Checklist',
    subtitle: 'Đánh giá tính giải trình của tình huống thực tế và hoàn thành Phiếu học tập số 3',
    layout: 'activity_box',
    elements: [
      {
        id: 'el_28_1',
        type: 'checklist',
        data: {
          taskTitle: 'Thực hành thẩm định nhóm (10 phút thảo luận + 4 phút trình bày):',
          items: [
            'Chọn 1 trong 2 tình huống: (A) Phần mềm AI chấm thi tự động; (B) Ứng dụng AI xét tuyển học sinh.',
            'Dùng bộ 4 tiêu chí (Chủ thể, Giải thích, Khiếu nại, Pháp luật) để chấm ĐẠT hoặc CHƯA ĐẠT cho từng tiêu chí.',
            'Nêu ít nhất 2 đề xuất khắc phục cụ thể nếu hệ thống chưa đạt.',
            'Sản phẩm nộp: Phiếu học tập số 3 đã điền đầy đủ và chữ ký đại diện nhóm.',
          ],
        },
      },
    ],
    worksheetNumber: 3,
    illustration: {
      type: 'team_roles',
      caption: 'Học sinh đánh giá chéo theo checklist 4 tiêu chí',
    },
    teacherNotes: {
      teacherScript: 'Các nhóm nhận Phiếu học tập số 3. Nhớ ghi rõ nguyên nhân vì sao chấm Chưa đạt và đề xuất sửa đổi cụ thể cho người quản lý hệ thống.',
      activityDuration: '14 phút',
      keyTakeaways: ['Kĩ năng thẩm định tính minh bạch và trách nhiệm giải trình'],
    },
  },

  // SLIDE 29 - Vận dụng & Chuyển tiếp Tiết 3 sang Tiết 4
  {
    id: 29,
    period: 3,
    periodTitle: 'Tiết 3: Trách nhiệm giải trình & pháp luật',
    topic: 'Chuyên đề 1: Con người làm chủ AI · Mạch A',
    competencyStandard: '12.A1.3',
    category: 'summary',
    categoryLabel: 'VẬN DỤNG & KẾT NỐI (5 PHÚT)',
    title: 'Cam Kết Trách Nhiệm Của Người Sáng Tạo Tương Lai',
    subtitle: 'Suy ngẫm cá nhân & Bước sang Chuyên đề 2: Đạo đức AI',
    layout: 'split_left_right',
    elements: [
      {
        id: 'el_29_1',
        type: 'bullet_points',
        data: [
          'Vận dụng cá nhân: Nếu sau này em tự mình tạo ra một sản phẩm AI (app học tập, bot hỗ trợ), em sẽ làm gì để đảm bảo trách nhiệm giải trình?',
          'Nhiệm vụ về nhà: Tìm 1 tin tức thời sự về sự cố AI trên thế giới. Chỉ ra ai lẽ ra phải chịu trách nhiệm.',
          'Kết nối Tiết 4: Muốn sản phẩm AI không vi phạm pháp luật thì ngay từ khâu thiết kế phải tuân theo những nguyên tắc đạo đức nào? Chào đón Tiết 4: "6 nguyên tắc đạo đức khi thiết kế AI"!',
        ],
      },
    ],
    illustration: {
      type: 'ethics_shield',
      caption: 'Tiết 4: 6 nguyên tắc đạo đức khi thiết kế AI',
    },
    teacherNotes: {
      teacherScript: 'Tiết 3 đã hoàn thành Mạch A - Tư duy lấy con người làm trung tâm. Tiết sau chúng ta bước sang Mạch B: Đạo đức và pháp luật khi sáng tạo AI.',
      activityDuration: '5 phút',
      keyTakeaways: ['Hoàn thành Chuyên đề 1; sẵn sàng chuyển sang Chuyên đề 2 về Đạo đức AI'],
    },
  },

  // ===== TIẾT 4 (SLIDES 30 - 38) =====
  // SLIDE 30 - Bìa Tiết 4
  {
    id: 30,
    period: 4,
    periodTitle: 'Tiết 4: 6 nguyên tắc đạo đức khi thiết kế AI',
    topic: 'Chuyên đề 2: Đạo đức & pháp luật · Mạch B',
    competencyStandard: '12.A2.1 — Trình bày được một số nguyên tắc đạo đức cơ bản trong thiết kế, phát triển sản phẩm AI: an toàn, công bằng, minh bạch, tôn trọng quyền riêng tư, trách nhiệm, lợi ích xã hội',
    category: 'cover',
    categoryLabel: 'TIẾT 4 · MỞ ĐẦU',
    title: '6 Nguyên Tắc Đạo Đức Khi Thiết Kế AI',
    subtitle: 'Đặt đạo đức làm kim chỉ nam ngay từ bản vẽ kỹ thuật đầu tiên',
    layout: 'center_hero',
    elements: [
      {
        id: 'el_30_1',
        type: 'header',
        data: {
          badge: 'TIẾT 4 / 12 (45 PHÚT) · MẠCH B',
          heading: 'ĐẠO ĐỨC PHẢI CÓ NGAY TỪ KHI BẮT ĐẦU — KHÔNG PHẢI SAU KHI XẢY RA SỰ CỐ',
          subtext: 'Bộ 6 nguyên tắc tiêu chuẩn quốc tế và Việt Nam trong phát triển trí tuệ nhân tạo',
        },
      },
    ],
    illustration: {
      type: 'ethics_shield',
      caption: 'Lá chắn đạo đức bảo vệ quyền con người trong mọi dòng mã AI',
      source: 'Quyết định 2422/QĐ-BGDĐT & UNESCO AI Ethics',
    },
    teacherNotes: {
      teacherScript: 'Chào các em, chúng ta bước vào Tiết 4. Tại sao một kĩ sư AI tài giỏi lại cần học về đạo đức? Vì nếu không có đạo đức, một thuật toán thông minh có thể trở thành vũ khí gây hại cho hàng triệu người!',
      activityDuration: '2 phút',
      keyTakeaways: ['6 nguyên tắc đạo đức cơ bản trong thiết kế AI'],
    },
  },

  // SLIDE 31 - Khởi động Tiết 4
  {
    id: 31,
    period: 4,
    periodTitle: 'Tiết 4: 6 nguyên tắc đạo đức khi thiết kế AI',
    topic: 'Chuyên đề 2: Đạo đức & pháp luật · Mạch B',
    competencyStandard: '12.A2.1',
    category: 'intro',
    categoryLabel: 'KHỞI ĐỘNG (5 PHÚT)',
    title: 'Tình Huống “AI Tuyển Dụng Thiên Vị”',
    subtitle: 'Một tập đoàn công nghệ lớn dùng AI lọc CV xin việc. Kết quả: AI tự động đánh rớt hồ sơ ứng viên nữ nhiều hơn hẳn nam, dù năng lực học tập và kinh nghiệm ngang nhau.',
    layout: 'split_left_right',
    elements: [
      {
        id: 'el_31_1',
        type: 'discussion',
        data: {
          question: 'AI này đã vi phạm nguyên tắc gì? Tại sao máy tính lại có thể “phân biệt giới tính” như vậy?',
          instruction: 'Thảo luận nhanh theo bàn và chỉ ra nguyên nhân gốc rễ.',
        },
      },
    ],
    illustration: {
      type: 'robot_learning',
      caption: 'AI học phải dữ liệu lịch sử 10 năm trước khi tỷ lệ nam giới chiếm đa số',
    },
    teacherNotes: {
      teacherScript: 'Tại sao máy lại phân biệt nữ? Vì dữ liệu 10 năm trước của công ty chủ yếu tuyển nam, AI tưởng rằng "nam giới mới là tiêu chuẩn thành công"! Đó chính là sự vi phạm nguyên tắc CÔNG BẰNG.',
      activityDuration: '5 phút',
      keyTakeaways: ['AI không tự có thiên kiến, thiên kiến bắt nguồn từ dữ liệu và con người thiết kế'],
    },
  },

  // SLIDE 32 - Mục tiêu bài học Tiết 4
  {
    id: 32,
    period: 4,
    periodTitle: 'Tiết 4: 6 nguyên tắc đạo đức khi thiết kế AI',
    topic: 'Chuyên đề 2: Đạo đức & pháp luật · Mạch B',
    competencyStandard: '12.A2.1',
    category: 'objective',
    categoryLabel: 'MỤC TIÊU BÀI HỌC',
    title: 'Sau Bài Học Tiết 4, Em Sẽ...',
    subtitle: '3 chuẩn năng lực học sinh đạt được',
    layout: 'cards_3',
    elements: [
      {
        id: 'el_32_1',
        type: 'cards',
        data: [
          {
            id: 'm4_1',
            tag: '1',
            title: 'Nêu 6 Nguyên Tắc',
            desc: 'Nêu tên và giải thích được nội hàm cốt lõi của 6 nguyên tắc đạo đức khi thiết kế AI.',
            icon: 'Shield',
            color: 'blue',
          },
          {
            id: 'm4_2',
            tag: '2',
            title: 'Nhận Diện Vi Phạm',
            desc: 'Chỉ ra và phân tích được các tình huống thực tế vi phạm từng nguyên tắc cụ thể.',
            icon: 'AlertTriangle',
            color: 'amber',
          },
          {
            id: 'm4_3',
            tag: '3',
            title: 'Đề Xuất Khắc Phục',
            desc: 'Ghép nối tình huống thực tế với nguyên tắc tương ứng và nêu giải pháp kỹ thuật/quy trình để khắc phục.',
            icon: 'Wrench',
            color: 'emerald',
          },
        ],
      },
    ],
    teacherNotes: {
      teacherScript: 'Các em hãy ghi nhớ: Một sản phẩm AI tốt phải tuân thủ trọn vẹn CẢ 6 NGUYÊN TẮC, không được phép bỏ sót bất kỳ nguyên tắc nào.',
      activityDuration: '3 phút',
      keyTakeaways: ['6 nguyên tắc đạo đức', 'Nhận diện lỗi vi phạm', 'Đề xuất giải pháp'],
    },
  },

  // SLIDE 33 - Toàn cảnh 6 nguyên tắc đạo đức (Bảng chuẩn)
  {
    id: 33,
    period: 4,
    periodTitle: 'Tiết 4: 6 nguyên tắc đạo đức khi thiết kế AI',
    topic: 'Chuyên đề 2: Đạo đức & pháp luật · Mạch B',
    competencyStandard: '12.A2.1',
    category: 'table',
    categoryLabel: 'KIẾN THỨC CỐT LÕI',
    title: 'Bảng 6 Nguyên Tắc Đạo Đức Khi Thiết Kế AI',
    subtitle: 'Định nghĩa chuẩn xác và ví dụ vi phạm thực tế thường gặp',
    layout: 'table_view',
    elements: [
      {
        id: 'el_33_1',
        type: 'table',
        data: {
          headers: ['Nguyên tắc', 'Định nghĩa cốt lõi', 'Ví dụ vi phạm cụ thể', 'Giải pháp tuân thủ'],
          rows: [
            ['1. An toàn', 'Không gây nguy hiểm cho tính mạng con người và môi trường', 'AI điều khiển cánh tay robot công nghiệp nhưng không có nút dừng khẩn cấp', 'Cài đặt cảm biến vật lý ngắt nguồn tự động khi có người'],
            ['2. Công bằng', 'Tránh thiên vị, không phân biệt đối xử về giới tính, vùng miền, chủng tộc', 'AI tuyển dụng tự động hạ điểm ứng viên nữ dù hồ sơ xuất sắc', 'Cân bằng tập dữ liệu huấn luyện, kiểm thử loại bỏ thiên kiến'],
            ['3. Minh bạch', 'Công khai cách hoạt động, nguồn dữ liệu và logic ra kết quả', 'Ứng dụng không thông báo cho người dùng biết đang thu thập dữ liệu gì', 'Thông báo rõ ràng chính sách dữ liệu và thuật toán gợi ý'],
            ['4. Quyền riêng tư', 'Không thu thập, chia sẻ dữ liệu cá nhân khi chưa được phép', 'Ứng dụng chỉnh sửa ảnh lén đọc danh bạ và vị trí GPS của người dùng', 'Mã hóa dữ liệu, tuân thủ nguyên tắc xin phép tối thiểu'],
            ['5. Trách nhiệm', 'Kiểm tra nghiêm ngặt, có pháp nhân chịu trách nhiệm khi có lỗi', 'Tung phần mềm AI ra thị trường mà không kiểm thử, gây tai nạn rồi chối bỏ', 'Thiết lập quy trình kiểm thử chất lượng và chế độ bảo hành'],
            ['6. Lợi ích xã hội', 'Phục vụ cộng đồng, phát triển bền vững, không thao túng tiêu cực', 'Tạo ra AI chatbot chuyên lừa đảo, cờ bạc trực tuyến thao túng tâm lý', 'Hướng AI vào y tế, giáo dục, môi trường và phát triển cộng đồng'],
          ],
        },
      },
    ],
    teacherNotes: {
      teacherScript: 'Hãy nhìn vào 6 nguyên tắc: An toàn - Công bằng - Minh bạch - Riêng tư - Trách nhiệm - Lợi ích xã hội. Chúng ta có câu thần chú ghi nhớ: "An - Công - Minh - Riêng - Trách - Lợi"!',
      activityDuration: '8 phút',
      keyTakeaways: ['Học sinh nắm vững 6 nguyên tắc theo Quyết định 2422'],
    },
  },

  // SLIDE 34 - Đi sâu Nhóm 1: An toàn, Công bằng, Minh bạch
  {
    id: 34,
    period: 4,
    periodTitle: 'Tiết 4: 6 nguyên tắc đạo đức khi thiết kế AI',
    topic: 'Chuyên đề 2: Đạo đức & pháp luật · Mạch B',
    competencyStandard: '12.A2.1',
    category: 'cards',
    categoryLabel: 'PHÂN TÍCH CHUYÊN SÂU (NHÓM 1)',
    title: 'Nhóm Nguyên Tắc: An Toàn · Công Bằng · Minh Bạch',
    subtitle: 'Nền móng kỹ thuật vững chắc để hệ thống AI không gây nguy hại',
    layout: 'cards_3',
    elements: [
      {
        id: 'el_34_1',
        type: 'cards',
        data: [
          {
            id: 'nt_1',
            tag: 'Nguyên tắc 1',
            title: 'AN TOÀN (Safety)',
            desc: 'Hệ thống phải có cơ chế ngắt khẩn cấp (fail-safe). Khi có sự cố bất thường, hệ thống tự động đưa về trạng thái an toàn nhất cho con người.',
            icon: 'ShieldCheck',
            color: 'emerald',
          },
          {
            id: 'nt_2',
            tag: 'Nguyên tắc 2',
            title: 'CÔNG BẰNG (Fairness)',
            desc: 'Dữ liệu không được mang định kiến xã hội. Thuật toán phải đối xử bình đẳng với mọi người bất kể giàu nghèo, giới tính hay quê quán.',
            icon: 'Scale',
            color: 'blue',
          },
          {
            id: 'nt_3',
            tag: 'Nguyên tắc 3',
            title: 'MINH BẠCH (Transparency)',
            desc: 'Người dùng có quyền được biết: "Tôi đang nói chuyện với bot hay người thật?", "Tại sao tôi lại nhận được gợi ý này?".',
            icon: 'Eye',
            color: 'amber',
          },
        ],
      },
    ],
    teacherNotes: {
      teacherScript: 'Minh bạch nghĩa là không mập mờ "hộp đen". Ví dụ khi các em nói chuyện với một nhân viên chăm sóc khách hàng, nếu là AI thì hệ thống bắt buộc phải thông báo ngay từ đầu.',
      activityDuration: '5 phút',
      keyTakeaways: ['An toàn là trên hết; công bằng trong cơ hội; minh bạch trong vận hành'],
    },
  },

  // SLIDE 35 - Đi sâu Nhóm 2: Riêng tư, Trách nhiệm, Lợi ích xã hội
  {
    id: 35,
    period: 4,
    periodTitle: 'Tiết 4: 6 nguyên tắc đạo đức khi thiết kế AI',
    topic: 'Chuyên đề 2: Đạo đức & pháp luật · Mạch B',
    competencyStandard: '12.A2.1',
    category: 'cards',
    categoryLabel: 'PHÂN TÍCH CHUYÊN SÂU (NHÓM 2)',
    title: 'Nhóm Nguyên Tắc: Riêng Tư · Trách Nhiệm · Lợi Ích Xã Hội',
    subtitle: 'Cam kết nhân văn đối với xã hội và cộng đồng người dùng',
    layout: 'cards_3',
    elements: [
      {
        id: 'el_35_1',
        type: 'cards',
        data: [
          {
            id: 'nt_4',
            tag: 'Nguyên tắc 4',
            title: 'QUYỀN RIÊNG TƯ (Privacy)',
            desc: 'Tôn trọng dữ liệu cá nhân tuyệt đối. Dữ liệu gương mặt, giọng nói, thói quen sinh hoạt không được tùy tiện thu thập hoặc bán cho bên thứ ba.',
            icon: 'Lock',
            color: 'rose',
          },
          {
            id: 'nt_5',
            tag: 'Nguyên tắc 5',
            title: 'TRÁCH NHIỆM (Accountability)',
            desc: 'Phải có quy trình kiểm thử trước khi bàn giao. Doanh nghiệp và lập trình viên phải chịu trách nhiệm khi sản phẩm gây tổn hại người dùng.',
            icon: 'UserCheck',
            color: 'purple',
          },
          {
            id: 'nt_6',
            tag: 'Nguyên tắc 6',
            title: 'LỢI ÍCH XÃ HỘI (Social Good)',
            desc: 'Mục đích tối hậu của công nghệ là nâng cao chất lượng cuộc sống con người, thúc đẩy bình đẳng và bảo vệ môi trường trái đất.',
            icon: 'HeartHandshake',
            color: 'emerald',
          },
        ],
      },
    ],
    teacherNotes: {
      teacherScript: 'Các em hãy nhớ: Dữ liệu cá nhân của các em là tài sản quý giá nhất trong thế giới số. Một phần mềm đòi quyền truy cập micro hay máy ảnh mà không phục vụ tính năng chính là vi phạm nghiêm trọng nguyên tắc quyền riêng tư.',
      activityDuration: '5 phút',
      keyTakeaways: ['Tôn trọng dữ liệu cá nhân; tinh thần trách nhiệm phụng sự xã hội'],
    },
  },

  // SLIDE 36 - Hộp ghi nhớ Tiết 4
  {
    id: 36,
    period: 4,
    periodTitle: 'Tiết 4: 6 nguyên tắc đạo đức khi thiết kế AI',
    topic: 'Chuyên đề 2: Đạo đức & pháp luật · Mạch B',
    competencyStandard: '12.A2.1',
    category: 'takeaway',
    categoryLabel: 'HỘP GHI NHỚ VÀNG',
    title: 'Ghi Nhớ: Nhớ Đủ Cả Sáu Nguyên Tắc',
    subtitle: 'Một sản phẩm AI tốt phải tuân thủ trọn vẹn cả 6 nguyên tắc',
    layout: 'takeaway_banner',
    elements: [
      {
        id: 'el_36_1',
        type: 'quote',
        data: {
          highlight: 'ĐẠO ĐỨC PHẢI ĐƯỢC NGHĨ TỚI NGAY TỪ KHI THIẾT KẾ, KHÔNG PHẢI SAU KHI CÓ SỰ CỐ.',
          subtext: 'An toàn · Công bằng · Minh bạch · Riêng tư · Trách nhiệm · Lợi ích xã hội.',
          author: 'Thông điệp đạo đức AI THPT',
        },
      },
    ],
    illustration: {
      type: 'ethics_shield',
      caption: '6 cột trụ đạo đức chống đỡ cho tương lai công nghệ nhân văn',
    },
    teacherNotes: {
      teacherScript: 'Hãy nhớ: Không đợi đến lúc xe tự lái gây tai nạn mới nghĩ đến an toàn, không đợi đến lúc rò rỉ dữ liệu mới nghĩ đến riêng tư. Đạo đức phải nằm trong từng dòng code thiết kế!',
      activityDuration: '3 phút',
      keyTakeaways: ['Tuân thủ đồng thời cả 6 nguyên tắc đạo đức'],
    },
  },

  // SLIDE 37 - Hoạt động luyện tập Tiết 4: Ghép thẻ tình huống
  {
    id: 37,
    period: 4,
    periodTitle: 'Tiết 4: 6 nguyên tắc đạo đức khi thiết kế AI',
    topic: 'Chuyên đề 2: Đạo đức & pháp luật · Mạch B',
    competencyStandard: '12.A2.1',
    category: 'activity',
    categoryLabel: 'HOẠT ĐỘNG NHÓM (12 PHÚT)',
    title: 'Luyện Tập: Ghép Tình Huống Với Nguyên Tắc Đạo Đức',
    subtitle: 'Thực hiện Phiếu học tập số 4 và đề xuất giải pháp kỹ thuật sửa đổi',
    layout: 'activity_box',
    elements: [
      {
        id: 'el_37_1',
        type: 'checklist',
        data: {
          taskTitle: 'Nhiệm vụ các nhóm (4 học sinh / nhóm):',
          items: [
            'Mỗi nhóm nhận 3 thẻ tình huống thực tế (App lén ghi âm, AI tự lái đâm vào dải phân cách vì nhận nhầm bóng râm, Hệ thống gợi ý clip bạo lực để câu view).',
            'Xác định tình huống đó vi phạm nguyên tắc đạo đức nào trong 6 nguyên tắc.',
            'Đề xuất cách sửa đổi cụ thể để hệ thống tuân thủ đạo đức.',
            'Hoàn thiện Phiếu học tập số 4 và treo lên góc bảng nhóm.',
          ],
        },
      },
    ],
    worksheetNumber: 4,
    illustration: {
      type: 'team_roles',
      caption: 'Thực hành dán thẻ ghép nối và đề xuất giải pháp',
    },
    teacherNotes: {
      teacherScript: 'Các nhóm nhận thẻ và điền vào Phiếu học tập số 4. Sau 8 phút, thầy/cô sẽ mời đại diện nhóm phản biện ý kiến lẫn nhau.',
      activityDuration: '12 phút',
      keyTakeaways: ['Nhận diện lỗi vi phạm đạo đức và đưa ra cách sửa kỹ thuật'],
    },
  },

  // SLIDE 38 - Tổng kết & Chuyển tiếp Tiết 4 sang Tiết 5
  {
    id: 38,
    period: 4,
    periodTitle: 'Tiết 4: 6 nguyên tắc đạo đức khi thiết kế AI',
    topic: 'Chuyên đề 2: Đạo đức & pháp luật · Mạch B',
    competencyStandard: '12.A2.1',
    category: 'summary',
    categoryLabel: 'TỔNG KẾT & KẾT NỐI (4 PHÚT)',
    title: 'Thiết Kế AI Có Đạo Đức — Trách Nhiệm Của Tuổi Trẻ',
    subtitle: 'Cầu nối sang Tiết 5: Trách nhiệm công dân và rủi ro pháp lý',
    layout: 'takeaway_banner',
    elements: [
      {
        id: 'el_38_1',
        type: 'quote',
        data: {
          highlight: 'ĐẠO ĐỨC LÀ BỘ PHANH GIÚP CHIẾC XE CÔNG NGHỆ CHẠY NHANH VÀ AN TOÀN TRÊN ĐƯỜNG ĐỜI.',
          subtext: 'Tiết sau: Khi chính chúng ta là người dùng AI hàng ngày, ta phải đối mặt với những rủi ro nào và trách nhiệm học đường ra sao? Mời đón xem Tiết 5: "Trách nhiệm công dân & rủi ro pháp lý"!',
        },
      },
    ],
    illustration: {
      type: 'team_roles',
      caption: 'Tiết 5: Trách nhiệm công dân & rủi ro pháp lý khi dùng AI',
    },
    teacherNotes: {
      teacherScript: 'Chúng ta vừa hoàn thành Tiết 4 với 6 nguyên tắc đạo đức. Tiết 5 sẽ nói về chính các em: Những tình huống dùng AI làm bài tập hộ hay tạo ảnh chế, liệu có vi phạm quy định nhà trường và pháp luật không?',
      activityDuration: '4 phút',
      keyTakeaways: ['Chuyển từ góc nhìn người thiết kế sang góc nhìn công dân số sử dụng AI'],
    },
  },
];
