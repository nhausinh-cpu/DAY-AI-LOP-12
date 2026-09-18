import type { Slide } from '../types';

export const SLIDES_PART_3: Slide[] = [
  // ===== TIẾT 9 (SLIDES 75 - 83) =====
  // SLIDE 75 - Bìa Tiết 9
  {
    id: 75,
    period: 9,
    periodTitle: 'Tiết 9: Phương án thiết kế & vận hành hệ thống AI',
    topic: 'Chuyên đề 4: Thiết kế & phát triển · Mạch D',
    competencyStandard: '12.D1.1 — Nhận biết được một số phương án thiết kế và vận hành hệ thống AI phù hợp để đạt hiệu quả cao trong một số nhiệm vụ cụ thể',
    category: 'cover',
    categoryLabel: 'TIẾT 9 · MỞ ĐẦU',
    title: 'Phương Án Thiết Kế & Vận Hành Hệ Thống AI',
    subtitle: 'Khám phá 5 thành phần của hệ thống AI và so sánh các phương án kỹ thuật tối ưu',
    layout: 'center_hero',
    elements: [
      {
        id: 'el_75_1',
        type: 'header',
        data: {
          badge: 'TIẾT 9 / 12 (45 PHÚT) · MẠCH D',
          heading: 'THIẾT KẾ TỐT LÀ MỘT NỬA THÀNH CÔNG — CÂN NHẮC TRƯỚC KHI BẮT TAY LÀM',
          subtext: 'Một bài toán có nhiều cách giải; chọn phương án thông minh dựa trên điều kiện thực tế',
        },
      },
    ],
    illustration: {
      type: 'system_pipeline',
      caption: 'Kiến trúc 5 thành phần liên kết chặt chẽ của một hệ sinh thái AI',
      source: 'Quyết định 2422/QĐ-BGDĐT',
    },
    teacherNotes: {
      teacherScript: 'Chào các em đến với Tiết 9. Hôm nay chúng ta không vội bấm code hay nạp ảnh ngay, mà chúng ta học làm "kiến trúc sư hệ thống" — vạch ra sơ đồ và chọn giải pháp tối ưu nhất cho dự án của nhóm!',
      activityDuration: '2 phút',
      keyTakeaways: ['5 thành phần hệ thống AI và các tiêu chí lựa chọn phương án thiết kế'],
    },
  },

  // SLIDE 76 - Khởi động Tiết 9
  {
    id: 76,
    period: 9,
    periodTitle: 'Tiết 9: Phương án thiết kế & vận hành hệ thống AI',
    topic: 'Chuyên đề 4: Thiết kế & phát triển · Mạch D',
    competencyStandard: '12.D1.1',
    category: 'intro',
    categoryLabel: 'KHỞI ĐỘNG (5 PHÚT)',
    title: 'Tình Huống “Làm Thùng Rác Thông Minh Phân Loại”',
    subtitle: 'Trường muốn làm một thùng rác AI phân loại chai nhựa và vỏ lon. Có 2 nhóm học sinh đưa ra 2 cách làm khác nhau:',
    layout: 'cards_3',
    elements: [
      {
        id: 'el_76_1',
        type: 'cards',
        data: [
          {
            id: 'pa_a',
            tag: 'Phương án A',
            title: 'Dùng Camera & Thị Giác Máy Tính',
            desc: 'Gắn camera phía trên thùng rác, chụp ảnh rác rơi xuống và dùng mô hình nhận diện hình ảnh để phân loại.',
            badge: 'Thị giác máy tính',
            color: 'blue',
          },
          {
            id: 'pa_b',
            tag: 'Phương án B',
            title: 'Dùng Cảm Biến Kim Loại & Trọng Lượng',
            desc: 'Gắn cảm biến từ trường nhận biết kim loại (vỏ lon) và cảm biến trọng lượng để phân loại cơ học.',
            badge: 'Cảm biến vật lý',
            color: 'emerald',
          },
        ],
      },
      {
        id: 'el_76_2',
        type: 'discussion',
        data: {
          question: 'Cách nào tốt hơn? Có phương án nào là "đúng tuyệt đối" trong mọi trường hợp không?',
        },
      },
    ],
    teacherNotes: {
      teacherScript: 'Camera rất linh hoạt nhận biết nhiều loại rác, nhưng nếu trời tối hoặc vỏ chai bị bẹp dúm thì sao? Cảm biến kim loại thì rẻ và bền, nhưng lại không phân biệt được giấy và nilon! Như vậy: Mỗi phương án đều có ưu và nhược điểm riêng.',
      activityDuration: '5 phút',
      keyTakeaways: ['Không có phương án hoàn hảo tuyệt đối; chỉ có phương án phù hợp nhất với nguồn lực và mục tiêu'],
    },
  },

  // SLIDE 77 - Mục tiêu bài học Tiết 9
  {
    id: 77,
    period: 9,
    periodTitle: 'Tiết 9: Phương án thiết kế & vận hành hệ thống AI',
    topic: 'Chuyên đề 4: Thiết kế & phát triển · Mạch D',
    competencyStandard: '12.D1.1',
    category: 'objective',
    categoryLabel: 'MỤC TIÊU BÀI HỌC',
    title: 'Sau Bài Học Tiết 9, Em Sẽ...',
    subtitle: '3 mục tiêu chuẩn đầu ra theo chương trình',
    layout: 'cards_3',
    elements: [
      {
        id: 'el_77_1',
        type: 'cards',
        data: [
          {
            id: 'm9_1',
            tag: '1',
            title: '5 Thành Phần Hệ Thống',
            desc: 'Nêu tên và phân tích được mối liên hệ khép kín giữa 5 thành phần của một hệ thống AI hoàn chỉnh.',
            icon: 'Layers',
            color: 'blue',
          },
          {
            id: 'm9_2',
            tag: '2',
            title: 'Đề Xuất Đa Phương Án',
            desc: 'Biết rằng một bài toán luôn có nhiều cách thiết kế khác nhau; đề xuất ít nhất 2 phương án cho dự án.',
            icon: 'GitBranch',
            color: 'amber',
          },
          {
            id: 'm9_3',
            tag: '3',
            title: 'Chọn Phương Án Tối Ưu',
            desc: 'Vận dụng 5 tiêu chí để so sánh, chọn ra phương án phù hợp nhất và giải thích được lý do lựa chọn.',
            icon: 'CheckCircle2',
            color: 'emerald',
          },
        ],
      },
    ],
    teacherNotes: {
      teacherScript: 'Hôm nay các em sẽ hoàn thiện bản thiết kế kiến trúc cho dự án nhóm mà các em đã chốt ở Tiết 7.',
      activityDuration: '3 phút',
      keyTakeaways: ['5 thành phần hệ thống', 'So sánh đa phương án', 'Chọn phương án tối ưu'],
    },
  },

  // SLIDE 78 - 5 Thành phần của hệ thống AI (Sơ đồ khép kín)
  {
    id: 78,
    period: 9,
    periodTitle: 'Tiết 9: Phương án thiết kế & vận hành hệ thống AI',
    topic: 'Chuyên đề 4: Thiết kế & phát triển · Mạch D',
    competencyStandard: '12.D1.1',
    category: 'diagram',
    categoryLabel: 'KIẾN THỨC CỐT LÕI',
    title: 'Một Hệ Thống AI Gồm 5 Thành Phần Liên Kết',
    subtitle: 'Vòng tròn khép kín: Dữ liệu -> Thuật toán -> Mô hình -> Đầu ra -> Phản hồi cải tiến',
    layout: 'step_pipeline',
    elements: [
      {
        id: 'el_78_1',
        type: 'steps',
        data: [
          { stepNumber: 1, name: 'Dữ liệu (Data)', role: 'Nhiên liệu', details: 'Hình ảnh, âm thanh, số liệu thu thập và chuẩn bị sạch sẽ' },
          { stepNumber: 2, name: 'Thuật toán (Algorithm)', role: 'Phương pháp', details: 'Quy trình toán học/học máy để huấn luyện máy tính rút ra quy luật' },
          { stepNumber: 3, name: 'Mô hình (Model)', role: 'Bộ não AI', details: 'Sản phẩm sau huấn luyện chứa các trọng số (weights) để tính toán' },
          { stepNumber: 4, name: 'Đầu ra (Output)', role: 'Kết quả', details: 'Dự đoán nhãn (vd: Chai nhựa 95%), hành động điều khiển mở nắp' },
          { stepNumber: 5, name: 'Phản hồi (Feedback)', role: 'Cải tiến', details: 'Ghi nhận các ca đoán sai để nạp ngược lại làm giàu dữ liệu ở thành phần 1' },
        ],
      },
    ],
    illustration: {
      type: 'system_pipeline',
      caption: 'Phản hồi quay lại cải tiến dữ liệu và mô hình — tạo thành một vòng tuần hoàn liên tục phát triển',
    },
    teacherNotes: {
      teacherScript: 'Nhìn vào Bước 5: Phản hồi chính là điểm khác biệt lớn nhất giữa chương trình máy tính truyền thống và hệ thống AI. Hệ thống AI liên tục thông minh hơn nhờ vòng phản hồi này!',
      activityDuration: '8 phút',
      keyTakeaways: ['5 thành phần tạo thành chu trình khép kín tự cải tiến'],
    },
  },

  // SLIDE 79 - 5 Tiêu chí lựa chọn phương án thiết kế
  {
    id: 79,
    period: 9,
    periodTitle: 'Tiết 9: Phương án thiết kế & vận hành hệ thống AI',
    topic: 'Chuyên đề 4: Thiết kế & phát triển · Mạch D',
    competencyStandard: '12.D1.1',
    category: 'table',
    categoryLabel: 'TIÊU CHÍ LỰA CHỌN',
    title: 'Chọn Phương Án PHÙ HỢP Nhất, Không Có “Đúng Tuyệt Đối”',
    subtitle: '5 tiêu chí cân nhắc toàn diện trước khi bắt tay thực hiện dự án',
    layout: 'table_view',
    elements: [
      {
        id: 'el_79_1',
        type: 'table',
        data: {
          headers: ['Tiêu chí', 'Câu hỏi cốt lõi', 'Gợi ý cân nhắc cho học sinh THPT'],
          rows: [
            ['1. Độ chính xác', 'Phương án nào cho kết quả dự đoán tin cậy và ít lỗi hơn?', 'Thử nghiệm sơ bộ 10 mẫu để xem phương án nào nhận diện tốt hơn.'],
            ['2. Chi phí & Thiết bị', 'Phương án nào tốn ít kinh phí, thời gian và tận dụng đồ có sẵn?', 'Tận dụng webcam laptop, điện thoại cũ, không cần mua linh kiện đắt đỏ.'],
            ['3. Tính khả thi', 'Học sinh trong nhóm có đủ kĩ năng để hoàn thành trong 2 tiết không?', 'Nên chọn công cụ kéo thả trực quan như Teachable Machine thay vì viết mã phức tạp.'],
            ['4. An toàn & Đạo đức', 'Có thu thập dữ liệu nhạy cảm của người khác không? Có nguy cơ gì?', 'Tránh dùng khuôn mặt riêng tư; bảo đảm an toàn điện khi đấu nối mô hình.'],
            ['5. Giá trị thực tế', 'Có giải quyết đúng vấn đề bức thiết đời sống học đường không?', 'Giúp trường sạch hơn, giúp bạn bè học tốt hơn là tiêu chí được đánh giá cao nhất.'],
          ],
        },
      },
    ],
    teacherNotes: {
      teacherScript: 'Một phương án rất hiện đại nhưng nhóm không làm kịp trước Tiết 12 thì không thể gọi là phương án tốt. Phù hợp với năng lực và thời gian của học sinh mới là số 1!',
      activityDuration: '7 phút',
      keyTakeaways: ['5 tiêu chí: Chính xác - Chi phí - Khả thi - An toàn đạo đức - Giá trị thực tế'],
    },
  },

  // SLIDE 80 - Ví dụ so sánh 2 phương án bài toán thực tế
  {
    id: 80,
    period: 9,
    periodTitle: 'Tiết 9: Phương án thiết kế & vận hành hệ thống AI',
    topic: 'Chuyên đề 4: Thiết kế & phát triển · Mạch D',
    competencyStandard: '12.D1.1',
    category: 'cards',
    categoryLabel: 'BÀI HỌC THỰC NGHIỆM',
    title: 'So Sánh Thực Nghiệm Dự Án Phân Loại Rác',
    subtitle: 'Mô hình mẫu giúp học sinh áp dụng vào dự án của nhóm',
    layout: 'cards_3',
    elements: [
      {
        id: 'el_80_1',
        type: 'cards',
        data: [
          {
            id: 'cmp_pa1',
            tag: 'Phương án 1 (Thị giác)',
            title: 'Camera + Teachable Machine',
            desc: 'Ưu: Dễ làm, phân loại được nhiều nhóm rác (chai, giấy, lon). Nhược: Cần ánh sáng đủ, phụ thuộc máy tính.',
            badge: 'Được chọn làm MVP',
            color: 'emerald',
          },
          {
            id: 'cmp_pa2',
            tag: 'Phương án 2 (Cảm biến)',
            title: 'Cảm Biến Kim Loại + Vi Mạch',
            desc: 'Ưu: Rất bền, hoạt động độc lập không cần màn hình. Nhược: Không phân biệt được chai nhựa và vỏ hộp sữa giấy.',
            badge: 'Phương án dự phòng',
            color: 'blue',
          },
          {
            id: 'cmp_conclude',
            tag: 'Kết luận nhóm',
            title: 'Lý Do Chọn Phương Án 1',
            desc: 'Nhóm chọn Phương án 1 vì có sẵn laptop phòng máy, trực quan sinh động khi demo trước lớp ở Tiết 12!',
            badge: 'Quyết định tối ưu',
            color: 'purple',
          },
        ],
      },
    ],
    teacherNotes: {
      teacherScript: 'Nhóm bạn trong ví dụ đã chọn Phương án 1 vì tính khả thi và tận dụng thiết bị có sẵn của trường.',
      activityDuration: '5 phút',
      keyTakeaways: ['Biết cách lập luận bảo vệ lựa chọn phương án của nhóm'],
    },
  },

  // SLIDE 81 - Hộp ghi nhớ Tiết 9
  {
    id: 81,
    period: 9,
    periodTitle: 'Tiết 9: Phương án thiết kế & vận hành hệ thống AI',
    topic: 'Chuyên đề 4: Thiết kế & phát triển · Mạch D',
    competencyStandard: '12.D1.1',
    category: 'takeaway',
    categoryLabel: 'HỘP GHI NHỚ VÀNG',
    title: 'Ghi Nhớ: Thiết Kế Là Chọn Phương Án Phù Hợp',
    subtitle: 'Sự tỉnh táo của người kỹ sư trước khi bắt tay chế tạo',
    layout: 'takeaway_banner',
    elements: [
      {
        id: 'el_81_1',
        type: 'quote',
        data: {
          highlight: 'CÙNG MỘT NHIỆM VỤ CÓ NHIỀU CÁCH LÀM. CON NGƯỜI CÂN NHẮC ĐỂ CHỌN PHƯƠNG ÁN TỐT NHẤT.',
          subtext: 'DỮ LIỆU → THUẬT TOÁN → MÔ HÌNH → ĐẦU RA → PHẢN HỒI.',
          author: 'Quyết định 2422/QĐ-BGDĐT',
        },
      },
    ],
    illustration: {
      type: 'system_pipeline',
      caption: 'Thiết kế thông minh tiết kiệm 80% công sức sửa lỗi sau này',
    },
    teacherNotes: {
      teacherScript: 'Nghĩ kỹ phương án trước khi làm giúp sản phẩm AI vừa hiệu quả vừa an toàn, tránh việc làm được nửa chừng phải đập đi làm lại.',
      activityDuration: '3 phút',
      keyTakeaways: ['Thiết kế kiến trúc là bước định hình chất lượng sản phẩm'],
    },
  },

  // SLIDE 82 - Luyện tập nhóm Tiết 9: Thiết kế phương án cho dự án (Phiếu số 9)
  {
    id: 82,
    period: 9,
    periodTitle: 'Tiết 9: Phương án thiết kế & vận hành hệ thống AI',
    topic: 'Chuyên đề 4: Thiết kế & phát triển · Mạch D',
    competencyStandard: '12.D1.1',
    category: 'activity',
    categoryLabel: 'HOẠT ĐỘNG NHÓM (14 PHÚT)',
    title: 'Thực Hành: Thiết Kế Phương Án Cho Dự Án Nhóm (Phiếu Số 9)',
    subtitle: 'Đề xuất 2 phương án, điền sơ đồ 5 thành phần và chọn 1 phương án chính',
    layout: 'activity_box',
    elements: [
      {
        id: 'el_82_1',
        type: 'checklist',
        data: {
          taskTitle: 'Hướng dẫn nhóm thực hiện (10 phút vẽ sơ đồ + 4 phút bảo vệ):',
          items: [
            'Lấy lại Ý tưởng dự án đã chốt ở Tiết 7 (Ví dụ: Thùng rác AI, Cảnh báo tư thế ngồi...).',
            'Đề xuất 2 phương án thiết kế khả thi.',
            'Điền cụ thể 5 thành phần cho phương án được chọn: Dữ liệu là gì? Dùng thuật toán nào? Mô hình nạp ở đâu? Đầu ra hiển thị gì? Phản hồi sửa lỗi ra sao?',
            'Ghi rõ 2 lý do vì sao nhóm quyết định chọn phương án này vào Phiếu học tập số 9.',
          ],
        },
      },
    ],
    worksheetNumber: 9,
    illustration: {
      type: 'team_roles',
      caption: 'Các nhóm vẽ sơ đồ kiến trúc 5 khối trên giấy A3',
    },
    teacherNotes: {
      teacherScript: 'Các nhóm hoàn thành Phiếu số 9. Sau khi thầy/cô ký duyệt phương án, tiết sau chúng ta sẽ phân công nhân sự để bắt tay chế tạo!',
      activityDuration: '14 phút',
      keyTakeaways: ['Hoàn thành bản thiết kế 5 thành phần của dự án nhóm'],
    },
  },

  // SLIDE 83 - Tổng kết & Chuyển tiếp Tiết 9 sang Tiết 10
  {
    id: 83,
    period: 9,
    periodTitle: 'Tiết 9: Phương án thiết kế & vận hành hệ thống AI',
    topic: 'Chuyên đề 4: Thiết kế & phát triển · Mạch D',
    competencyStandard: '12.D1.1',
    category: 'summary',
    categoryLabel: 'TỔNG KẾT & KẾT NỐI (4 PHÚT)',
    title: 'Thiết Kế Tốt Là Nửa Thành Công',
    subtitle: 'Cầu nối sang Tiết 10: Phân vai chuyên môn trong nhóm dự án',
    layout: 'takeaway_banner',
    elements: [
      {
        id: 'el_83_1',
        type: 'quote',
        data: {
          highlight: 'NGHĨ KĨ PHƯƠNG ÁN TRƯỚC KHI LÀM GIÚP SẢN PHẨM AI HIỆU QUẢ VÀ AN TOÀN HƠN.',
          subtext: 'Tiết sau: Có bản thiết kế rồi, làm sao một người có thể ôm đồm hết việc? Chúng ta cần những vai trò nào trong nhóm công nghệ? Mời đón xem Tiết 10: "Các vai trò trong nhóm phát triển AI"!',
          author: 'QĐ 2422/QĐ-BGDĐT',
        },
      },
    ],
    illustration: {
      type: 'team_roles',
      caption: 'Tiết 10: Các vai trò trong nhóm phát triển AI',
    },
    teacherNotes: {
      teacherScript: 'Tiết sau chúng ta sẽ đóng vai một công ty công nghệ thực thụ với đầy đủ các bộ phận: Quản lý sản phẩm, Kỹ sư dữ liệu, Lập trình viên và Chuyên viên kiểm thử!',
      activityDuration: '4 phút',
      keyTakeaways: ['Chuẩn bị tinh thần phân công vai trò chuyên môn ở Tiết 10'],
    },
  },

  // ===== TIẾT 10 (SLIDES 84 - 92) =====
  // SLIDE 84 - Bìa Tiết 10
  {
    id: 84,
    period: 10,
    periodTitle: 'Tiết 10: Các vai trò trong nhóm phát triển AI',
    topic: 'Chuyên đề 4: Thiết kế & phát triển · Mạch D',
    competencyStandard: '12.D2.1 (P1) — Nhận biết được các vai trò khác nhau khi phát triển một sản phẩm AI (đề xuất ý tưởng, lập trình, huấn luyện, kiểm thử) và việc tạo ra sản phẩm AI cần sự hợp tác giữa nhiều người',
    category: 'cover',
    categoryLabel: 'TIẾT 10 · MỞ ĐẦU',
    title: 'Các Vai Trò Trong Nhóm Phát Triển AI',
    subtitle: 'Mô hình cộng tác đa chuyên môn: Đề xuất ý tưởng, Lập trình, Huấn luyện và Kiểm thử',
    layout: 'center_hero',
    elements: [
      {
        id: 'el_84_1',
        type: 'header',
        data: {
          badge: 'TIẾT 10 / 12 (45 PHÚT) · MẠCH D',
          heading: 'MỖI NGƯỜI MỘT VAI — CÙNG MỘT ĐÍCH: SẢN PHẨM HOÀN HẢO',
          subtext: 'Không ai có thể làm được tất cả một mình; sức mạnh nằm ở sự phối hợp ăn ý của tập thể',
        },
      },
    ],
    illustration: {
      type: 'team_roles',
      caption: '4 thành viên đại diện cho 4 vai trò hợp lực nâng đỡ dự án công nghệ',
      source: 'Quyết định 2422/QĐ-BGDĐT',
    },
    teacherNotes: {
      teacherScript: 'Chào các em, hôm nay chúng ta bước vào Tiết 10. Trong một công ty công nghệ lớn như Google hay VinAI, không có ai một mình tạo nên sản phẩm. Hôm nay chúng ta sẽ tìm hiểu 4 vai trò then chốt.',
      activityDuration: '2 phút',
      keyTakeaways: ['4 vai trò trong nhóm phát triển AI và kĩ năng làm việc nhóm'],
    },
  },

  // SLIDE 85 - Khởi động Tiết 10
  {
    id: 85,
    period: 10,
    periodTitle: 'Tiết 10: Các vai trò trong nhóm phát triển AI',
    topic: 'Chuyên đề 4: Thiết kế & phát triển · Mạch D',
    competencyStandard: '12.D2.1 (P1)',
    category: 'intro',
    categoryLabel: 'KHỞI ĐỘNG (5 PHÚT)',
    title: 'Tình Huống “Một Mình Ôm Hết Việc”',
    subtitle: 'Một bạn trưởng nhóm giỏi lập trình quyết định tự mình làm từ A đến Z: Nghĩ ý tưởng, tự chụp ảnh, tự train mô hình, tự viết báo cáo.',
    layout: 'split_left_right',
    elements: [
      {
        id: 'el_85_1',
        type: 'discussion',
        data: {
          question: 'Một mình bạn ấy có làm xuể không? Sản phẩm tạo ra có nguy cơ gặp phải những điểm mù (blind spots) nào?',
          instruction: 'Thảo luận nhanh 2 phút và chỉ ra những rủi ro khi làm việc đơn độc.',
        },
      },
    ],
    illustration: {
      type: 'team_roles',
      caption: 'Áp lực quá tải khi một cá nhân cố gắng gánh vác mọi khâu',
    },
    teacherNotes: {
      teacherScript: 'Người tự làm một mình sẽ rất mệt mỏi, thiếu dữ liệu đa dạng và đặc biệt là không nhìn ra lỗi sai của chính mình vì thiếu người kiểm thử độc lập!',
      activityDuration: '5 phút',
      keyTakeaways: ['Làm việc nhóm giúp tăng tốc độ, đa dạng hóa dữ liệu và phát hiện lỗi khách quan'],
    },
  },

  // SLIDE 86 - Mục tiêu bài học Tiết 10
  {
    id: 86,
    period: 10,
    periodTitle: 'Tiết 10: Các vai trò trong nhóm phát triển AI',
    topic: 'Chuyên đề 4: Thiết kế & phát triển · Mạch D',
    competencyStandard: '12.D2.1 (P1)',
    category: 'objective',
    categoryLabel: 'MỤC TIÊU BÀI HỌC',
    title: 'Sau Bài Học Tiết 10, Em Sẽ...',
    subtitle: '3 chuẩn năng lực đạt được',
    layout: 'cards_3',
    elements: [
      {
        id: 'el_86_1',
        type: 'cards',
        data: [
          {
            id: 'm10_1',
            tag: '1',
            title: '4 Vai Trò Chính',
            desc: 'Nêu tên và mô tả chi tiết nhiệm vụ và sản phẩm đầu ra của 4 vai trò cốt lõi trong nhóm AI.',
            icon: 'Users',
            color: 'blue',
          },
          {
            id: 'm10_2',
            tag: '2',
            title: 'Ý Thức Hợp Tác',
            desc: 'Hiểu sâu sắc vì sao phát triển AI bắt buộc phải có sự phối hợp đa chuyên môn và tinh thần tương trợ.',
            icon: 'HeartHandshake',
            color: 'emerald',
          },
          {
            id: 'm10_3',
            tag: '3',
            title: 'Bảng Phân Công Nhóm',
            desc: 'Lập được Bảng phân công nhiệm vụ cụ thể cho từng thành viên trong nhóm dự án của lớp.',
            icon: 'ClipboardList',
            color: 'purple',
          },
        ],
      },
    ],
    teacherNotes: {
      teacherScript: 'Tiết này bảo đảm nguyên tắc sư phạm quan trọng: "Ai cũng có việc, không ai đứng ngoài"!',
      activityDuration: '3 phút',
      keyTakeaways: ['4 vai trò', 'Tầm quan trọng hợp tác', 'Phân công nhiệm vụ cụ thể'],
    },
  },

  // SLIDE 87 - Bảng 4 vai trò cốt lõi và sản phẩm đầu ra
  {
    id: 87,
    period: 10,
    periodTitle: 'Tiết 10: Các vai trò trong nhóm phát triển AI',
    topic: 'Chuyên đề 4: Thiết kế & phát triển · Mạch D',
    competencyStandard: '12.D2.1 (P1)',
    category: 'table',
    categoryLabel: 'KIẾN THỨC CỐT LÕI',
    title: 'Làm Sản Phẩm AI Cần 4 Vai Trò Hợp Tác',
    subtitle: 'Nhiệm vụ chuyên biệt và sản phẩm cụ thể của từng vị trí',
    layout: 'table_view',
    elements: [
      {
        id: 'el_87_1',
        type: 'table',
        data: {
          headers: ['Vai trò', 'Tên chuyên môn', 'Làm những việc gì?', 'Sản phẩm cụ thể phải nộp'],
          rows: [
            ['1. Đề xuất ý tưởng', 'Product Owner / Designer', 'Xác định bài toán, khảo sát nhu cầu người dùng, thiết kế kịch bản sử dụng', 'Bản mô tả ý tưởng và kịch bản tương tác người dùng'],
            ['2. Lập trình / Cấu hình', 'Software / AI Developer', 'Dựng giao diện, kết nối các khối lệnh, tích hợp mô hình AI vào web/app', 'Sản phẩm chạy được phiên bản đầu tiên (MVP)'],
            ['3. Huấn luyện dữ liệu', 'Data / Training Specialist', 'Thu thập ảnh/mẫu sạch, gán nhãn chính xác, huấn luyện mô hình học máy', 'Bộ dữ liệu chuẩn hóa và mô hình đã huấn luyện hoàn chỉnh'],
            ['4. Kiểm thử & Thẩm định', 'QA Tester & Ethics Auditor', 'Chuẩn bị tập dữ liệu mới để test, tìm lỗi, đo độ chính xác, thẩm định đạo đức', 'Báo cáo danh sách lỗi, bảng độ chính xác và đề xuất cải thiện'],
          ],
        },
      },
    ],
    teacherNotes: {
      teacherScript: 'Mỗi vai trò đều có một "sản phẩm nộp" riêng biệt. Nếu bạn huấn luyện không nộp mô hình thì bạn lập trình không có gì để nhúng, nếu bạn kiểm thử không test thì không ai biết mô hình đúng hay sai!',
      activityDuration: '8 phút',
      keyTakeaways: ['4 vai trò gắn liền với 4 sản phẩm cụ thể, mắt xích gắn kết'],
    },
  },

  // SLIDE 88 - Phân tích chi tiết từng vai trò
  {
    id: 88,
    period: 10,
    periodTitle: 'Tiết 10: Các vai trò trong nhóm phát triển AI',
    topic: 'Chuyên đề 4: Thiết kế & phát triển · Mạch D',
    competencyStandard: '12.D2.1 (P1)',
    category: 'cards',
    categoryLabel: 'PHÂN TÍCH CHUYÊN MÔN',
    title: 'Bức Chân Dung Của 4 “Mảnh Ghép” Hoàn Hảo',
    subtitle: 'Tìm ra vị trí sở trường phù hợp nhất với năng khiếu từng học sinh',
    layout: 'cards_4',
    elements: [
      {
        id: 'el_88_1',
        type: 'cards',
        data: [
          {
            id: 'role_idea',
            tag: 'Vai trò 1',
            title: 'Người Ý Tưởng',
            desc: 'Dành cho bạn có óc quan sát nhạy bén, thích sáng tạo, hiểu tâm lý bạn bè và giỏi thuyết trình.',
            icon: 'Lightbulb',
            color: 'amber',
          },
          {
            id: 'role_code',
            tag: 'Vai trò 2',
            title: 'Người Lập Trình',
            desc: 'Dành cho bạn yêu thích máy tính, logic mạch lạc, thích ghép nối khối lệnh App Inventor hoặc web.',
            icon: 'Code2',
            color: 'blue',
          },
          {
            id: 'role_data',
            tag: 'Vai trò 3',
            title: 'Người Dữ Liệu',
            desc: 'Dành cho bạn kiên nhẫn, tỉ mỉ, thích chụp ảnh, thu thập mẫu vật và gán nhãn phân loại cẩn thận.',
            icon: 'Database',
            color: 'emerald',
          },
          {
            id: 'role_test',
            tag: 'Vai trò 4',
            title: 'Người Kiểm Thử',
            desc: 'Dành cho bạn có tư duy phản biện sắc sảo, hay "bắt lỗi", nghiêm túc về tính công bằng và đạo đức.',
            icon: 'SearchCheck',
            color: 'purple',
          },
        ],
      },
    ],
    teacherNotes: {
      teacherScript: 'Các em hãy tự nhìn nhận xem thế mạnh của mình nghiêng về phần nào để nhận vai trò trong nhóm nhé.',
      activityDuration: '6 phút',
      keyTakeaways: ['Phát huy tối đa năng khiếu cá nhân trong một tập thể gắn kết'],
    },
  },

  // SLIDE 89 - Hộp ghi nhớ Tiết 10
  {
    id: 89,
    period: 10,
    periodTitle: 'Tiết 10: Các vai trò trong nhóm phát triển AI',
    topic: 'Chuyên đề 4: Thiết kế & phát triển · Mạch D',
    competencyStandard: '12.D2.1 (P1)',
    category: 'takeaway',
    categoryLabel: 'HỘP GHI NHỚ VÀNG',
    title: 'Ghi Nhớ: Làm AI Là Làm Việc Nhóm',
    subtitle: 'Tinh thần đồng đội quyết định 90% sự thành bại của dự án công nghệ',
    layout: 'takeaway_banner',
    elements: [
      {
        id: 'el_89_1',
        type: 'quote',
        data: {
          highlight: 'MỖI NGƯỜI CÓ MỘT THẾ MẠNH RIÊNG, KHÔNG AI CÓ THỂ LÀM TẤT CẢ MỘT MÌNH.',
          subtext: 'HỢP TÁC CỦA NHIỀU NGƯỜI CÓ THẾ MẠNH KHÁC NHAU = SẢN PHẨM AI CHẤT LƯỢNG VÀ BỀN VỮNG.',
          author: 'Quyết định 2422/QĐ-BGDĐT',
        },
      },
    ],
    illustration: {
      type: 'team_roles',
      caption: 'Bàn tay nối bàn tay trên biểu tượng bộ não trí tuệ nhân tạo',
    },
    teacherNotes: {
      teacherScript: 'Nhớ câu này: "Muốn đi nhanh thì đi một mình, muốn đi xa và làm được sản phẩm AI xuất sắc thì phải đi cùng nhau!".',
      activityDuration: '3 phút',
      keyTakeaways: ['Làm AI bắt buộc phải cộng tác nhóm'],
    },
  },

  // SLIDE 90 - Luyện tập nhóm Tiết 10: Lập Bảng phân công nhiệm vụ (Phiếu số 10)
  {
    id: 90,
    period: 10,
    periodTitle: 'Tiết 10: Các vai trò trong nhóm phát triển AI',
    topic: 'Chuyên đề 4: Thiết kế & phát triển · Mạch D',
    competencyStandard: '12.D2.1 (P1)',
    category: 'activity',
    categoryLabel: 'HOẠT ĐỘNG NHÓM (16 PHÚT)',
    title: 'Thực Hành: Lập Bảng Phân Công Vai Trò Cho Dự Án',
    subtitle: 'Giao trách nhiệm cụ thể đến từng thành viên và nộp Phiếu học tập số 10',
    layout: 'activity_box',
    elements: [
      {
        id: 'el_90_1',
        type: 'checklist',
        data: {
          taskTitle: 'Hướng dẫn nhóm phân vai (12 phút bàn bạc + 4 phút giáo viên phê duyệt):',
          items: [
            'Nhóm ngồi quây quần cùng nhau; thảo luận chọn 4 vai trò chính cho 4 thành viên (nhóm 5 người có thể 2 bạn làm Dữ liệu hoặc Kiểm thử).',
            'Ghi rõ họ tên từng bạn, vai trò đảm nhận và ÍT NHẤT 2 VIỆC CỤ THỂ bạn đó phải hoàn thành trước Tiết 11.',
            'Thống nhất quy tắc nội bộ: Nếu một bạn gặp khó khăn kỹ thuật, cả nhóm sẽ hỗ trợ thế nào.',
            'Sản phẩm nộp: Phiếu học tập số 10 có đủ chữ ký cam kết của các thành viên.',
          ],
        },
      },
    ],
    worksheetNumber: 10,
    illustration: {
      type: 'team_roles',
      caption: 'Nhóm học sinh điền bảng phân công và gắn giấy sticker nhiệm vụ',
    },
    teacherNotes: {
      teacherScript: 'Các nhóm nhận Phiếu số 10. Thầy/cô sẽ đi từng bàn kiểm tra xem bạn nào chưa có việc. Tuyệt đối không để xảy ra tình trạng "một người làm, ba người ngồi chơi"!',
      activityDuration: '16 phút',
      keyTakeaways: ['Hoàn thành bảng phân vai cụ thể và cam kết trách nhiệm'],
    },
  },

  // SLIDE 91 - Vận dụng cá nhân hóa nhiệm vụ
  {
    id: 91,
    period: 10,
    periodTitle: 'Tiết 10: Các vai trò trong nhóm phát triển AI',
    topic: 'Chuyên đề 4: Thiết kế & phát triển · Mạch D',
    competencyStandard: '12.D2.1 (P1)',
    category: 'cards',
    categoryLabel: 'CAM KẾT CÁ NHÂN (5 PHÚT)',
    title: 'Mỗi Người Một Vai — Cùng Một Đích',
    subtitle: 'Xác nhận nhiệm vụ trước khi bước vào tiết thực hành chế tạo',
    layout: 'cards_4',
    elements: [
      {
        id: 'el_91_1',
        type: 'cards',
        data: [
          {
            id: 'ck_1',
            tag: 'Bạn Ý Tưởng',
            title: 'Chuẩn bị Kịch Bản',
            desc: 'Soạn sẵn tài liệu mô tả: Người dùng sẽ đưa đồ vật thế nào, màn hình hiển thị lời chào ra sao.',
            color: 'amber',
          },
          {
            id: 'ck_2',
            tag: 'Bạn Lập Trình',
            title: 'Chuẩn Bị Khung App',
            desc: 'Mở sẵn tài khoản Teachable Machine / App Inventor, dựng sẵn giao diện nút bấm và khung hiển thị.',
            color: 'blue',
          },
          {
            id: 'ck_3',
            tag: 'Bạn Dữ Liệu',
            title: 'Thu Thập Ảnh Mẫu',
            desc: 'Chụp hoặc tải sẵn ít nhất 20 tấm ảnh cho mỗi lớp dữ liệu vào một thư mục USB/Google Drive.',
            color: 'emerald',
          },
          {
            id: 'ck_4',
            tag: 'Bạn Kiểm Thử',
            title: 'Soạn 10 Mẫu Thử',
            desc: 'Chuẩn bị riêng 10 mẫu ảnh độc lập (chưa cho bạn Dữ liệu xem) để dành riêng cho bước kiểm tra bí mật!',
            color: 'purple',
          },
        ],
      },
    ],
    teacherNotes: {
      teacherScript: 'Đặc biệt bạn Kiểm thử nhớ nhé: 10 mẫu thử của em phải được giữ bí mật với bạn Dữ liệu để bảo đảm tính khách quan!',
      activityDuration: '5 phút',
      keyTakeaways: ['Mỗi thành viên biết chính xác việc mình cần mang đến phòng máy ở Tiết 11'],
    },
  },

  // SLIDE 92 - Tổng kết & Chuyển tiếp Tiết 10 sang Tiết 11
  {
    id: 92,
    period: 10,
    periodTitle: 'Tiết 10: Các vai trò trong nhóm phát triển AI',
    topic: 'Chuyên đề 4: Thiết kế & phát triển · Mạch D',
    competencyStandard: '12.D2.1 (P1)',
    category: 'summary',
    categoryLabel: 'TỔNG KẾT & KẾT NỐI (2 PHÚT)',
    title: 'Đã Có Kế Hoạch — Sẵn Sàng Thực Chiến!',
    subtitle: 'Cầu nối sang Tiết 11: Bắt tay xây dựng sản phẩm AI phiên bản đầu tiên',
    layout: 'takeaway_banner',
    elements: [
      {
        id: 'el_92_1',
        type: 'quote',
        data: {
          highlight: 'ĐẢM BẢO AI CŨNG CÓ VIỆC, KHÔNG AI ĐỨNG NGOÀI LỀ DỰ ÁN.',
          subtext: 'Tiết sau: Giờ G đã điểm! Cả nhóm sẽ cùng bắt tay vào máy tính để tạo ra phiên bản chạy được đầu tiên của sản phẩm. Chào đón Tiết 11: "Bắt tay xây dựng sản phẩm AI (Hợp tác)"!',
          author: 'QĐ 2422/QĐ-BGDĐT',
        },
      },
    ],
    illustration: {
      type: 'coding_mvp',
      caption: 'Tiết 11: Bắt tay xây dựng sản phẩm AI',
    },
    teacherNotes: {
      teacherScript: 'Tiết sau chúng ta sẽ có trọn vẹn 25 phút thực hành liên tục trên máy. Hãy mang đủ dữ liệu đã chuẩn bị nhé!',
      activityDuration: '2 phút',
      keyTakeaways: ['Hoàn tất khâu tổ chức; sẵn sàng thực hành chế tạo'],
    },
  },

  // ===== TIẾT 11 (SLIDES 93 - 101) =====
  // SLIDE 93 - Bìa Tiết 11
  {
    id: 93,
    period: 11,
    periodTitle: 'Tiết 11: Bắt tay xây dựng sản phẩm AI',
    topic: 'Chuyên đề 4: Thiết kế & phát triển · Mạch D',
    competencyStandard: '12.D2.1 (P2) — Thực hành sự hợp tác nhiều vai trò để tạo ra một sản phẩm AI đơn giản theo kế hoạch đã xây dựng',
    category: 'cover',
    categoryLabel: 'TIẾT 11 · MỞ ĐẦU',
    title: 'Bắt Tay Xây Dựng Sản Phẩm AI (Hợp Tác)',
    subtitle: 'Thực hành tạo phiên bản đầu tiên (MVP) và tuân thủ nghiêm ngặt kỷ luật số học đường',
    layout: 'center_hero',
    elements: [
      {
        id: 'el_93_1',
        type: 'header',
        data: {
          badge: 'TIẾT 11 / 12 (45 PHÚT) · MẠCH D',
          heading: 'RA ĐƯỢC BẢN ĐẦU CHẠY ĐƯỢC — CHƯA CẦN HOÀN HẢO NGAY',
          subtext: 'Sai và sửa (Iterate) là con đường học tập tốt nhất khi chế tạo sản phẩm công nghệ',
        },
      },
    ],
    illustration: {
      type: 'coding_mvp',
      caption: 'Nhóm học sinh say sưa nạp dữ liệu và kiểm thử mô hình trên máy tính',
      source: 'Quyết định 2422/QĐ-BGDĐT',
    },
    teacherNotes: {
      teacherScript: 'Chào các em đến với Tiết 11! Hôm nay là ngày các em thấy sản phẩm AI của nhóm mình "thức giấc" và hoạt động lần đầu tiên. Đừng sợ lỗi, gặp lỗi là cơ hội để học!',
      activityDuration: '2 phút',
      keyTakeaways: ['Thực hành hợp tác tạo sản phẩm AI bản đầu và thực hiện kỉ luật số'],
    },
  },

  // SLIDE 94 - Khởi động Tiết 11
  {
    id: 94,
    period: 11,
    periodTitle: 'Tiết 11: Bắt tay xây dựng sản phẩm AI',
    topic: 'Chuyên đề 4: Thiết kế & phát triển · Mạch D',
    competencyStandard: '12.D2.1 (P2)',
    category: 'intro',
    categoryLabel: 'KHỞI ĐỘNG (5 PHÚT)',
    title: 'Mục Tiêu Hôm Nay: Bản Đầu Tiên Chạy Được (MVP)',
    subtitle: 'Kiểm tra lại sự sẵn sàng của các thành viên trong nhóm trước khi bắt đầu bấm giờ 25 phút',
    layout: 'split_left_right',
    elements: [
      {
        id: 'el_94_1',
        type: 'discussion',
        data: {
          question: 'Tại sao trong công nghệ người ta lại coi trọng “Bản đầu chạy được ở mức cơ bản” hơn là cố làm một bản phức tạp nhưng không chạy nổi?',
          instruction: 'Khái niệm MVP (Minimum Viable Product): Sản phẩm khả dụng tối thiểu.',
        },
      },
    ],
    illustration: {
      type: 'coding_mvp',
      caption: 'Bản v1 chạy được là cột mốc quan trọng nhất để tiếp tục hoàn thiện',
    },
    teacherNotes: {
      teacherScript: 'Các em nhớ nhé: Mục tiêu hôm nay là có một sản phẩm CHẠY ĐƯỢC ở mức cơ bản. Còn việc hoàn thiện giao diện đẹp đẽ và sửa lỗi sẽ tiếp tục hoàn thiện ở Tiết 12!',
      activityDuration: '5 phút',
      keyTakeaways: ['Tập trung vào bản chạy được (MVP) thay vì sa đà vào chi tiết phụ'],
    },
  },

  // SLIDE 95 - Mục tiêu bài học Tiết 11
  {
    id: 95,
    period: 11,
    periodTitle: 'Tiết 11: Bắt tay xây dựng sản phẩm AI',
    topic: 'Chuyên đề 4: Thiết kế & phát triển · Mạch D',
    competencyStandard: '12.D2.1 (P2)',
    category: 'objective',
    categoryLabel: 'MỤC TIÊU BÀI HỌC',
    title: 'Sau Bài Học Tiết 11, Em Sẽ...',
    subtitle: '3 mục tiêu thực hành chuẩn xác',
    layout: 'cards_3',
    elements: [
      {
        id: 'el_95_1',
        type: 'cards',
        data: [
          {
            id: 'm11_1',
            tag: '1',
            title: 'Tạo Bản Đầu (v1)',
            desc: 'Dựng được phiên bản đầu tiên của sản phẩm AI theo đúng phương án thiết kế đã duyệt.',
            icon: 'PlayCircle',
            color: 'emerald',
          },
          {
            id: 'm11_2',
            tag: '2',
            title: 'Kỷ Luật Số Bắt Buộc',
            desc: 'Ghi chép minh bạch nguồn dữ liệu đã dùng, các câu lệnh prompt và kết quả thử nghiệm vào sổ tay.',
            icon: 'FileText',
            color: 'blue',
          },
          {
            id: 'm11_3',
            tag: '3',
            title: 'Phối Hợp & Ghi Lỗi',
            desc: 'Làm việc theo đúng vai trò đã phân công, phát hiện và lập danh mục các lỗi cần sửa đổi.',
            icon: 'Bug',
            color: 'purple',
          },
        ],
      },
    ],
    teacherNotes: {
      teacherScript: 'Đặc biệt chú ý Mục tiêu 2: Kỷ luật số! Đây là tiêu chí chấm điểm trung thực quan trọng nhất của chuyên đề.',
      activityDuration: '3 phút',
      keyTakeaways: ['Tạo bản v1', 'Thực thi kỉ luật số', 'Ghi log lỗi'],
    },
  },

  // SLIDE 96 - Quy trình 4 bước dựng bản đầu
  {
    id: 96,
    period: 11,
    periodTitle: 'Tiết 11: Bắt tay xây dựng sản phẩm AI',
    topic: 'Chuyên đề 4: Thiết kế & phát triển · Mạch D',
    competencyStandard: '12.D2.1 (P2)',
    category: 'diagram',
    categoryLabel: 'QUY TRÌNH THỰC HÀNH',
    title: 'Quy Trình 4 Bước Dựng Bản Đầu Tiên Của Sản Phẩm AI',
    subtitle: 'Trình tự triển khai chuẩn xác tại phòng thực hành',
    layout: 'step_pipeline',
    elements: [
      {
        id: 'el_96_1',
        type: 'steps',
        data: [
          { stepNumber: 1, name: 'Thu thập & Nạp dữ liệu', role: 'Bạn Dữ liệu', details: 'Tạo các lớp nhãn trên Teachable Machine, nạp ảnh mẫu đã chuẩn bị vào từng lớp' },
          { stepNumber: 2, name: 'Huấn luyện mô hình', role: 'Bạn Lập trình', details: 'Bấm nút Train Model, theo dõi quá trình huấn luyện, xuất đường link mô hình' },
          { stepNumber: 3, name: 'Kết nối / Hoàn thiện', role: 'Cả nhóm', details: 'Nhúng mô hình vào giao diện web hoặc App Inventor theo kịch bản của Bạn Ý tưởng' },
          { stepNumber: 4, name: 'Thử nghiệm & Ghi log lỗi', role: 'Bạn Kiểm thử', details: 'Dùng 10 mẫu mới test thử thời gian thực, ghi lại chính xác các ca AI đoán sai' },
        ],
      },
    ],
    illustration: {
      type: 'system_pipeline',
      caption: '4 bước liên tục dưới sự cộng tác nhịp nhàng của 4 thành viên',
    },
    teacherNotes: {
      teacherScript: 'Cả nhóm nhìn lên bảng theo đúng 4 bước. Không nhảy cóc bước 1 sang bước 3 khi chưa có dữ liệu chuẩn!',
      activityDuration: '5 phút',
      keyTakeaways: ['Tuân thủ đúng 4 bước triển khai thực nghiệm'],
    },
  },

  // SLIDE 97 - Quy định bắt buộc về KỶ LUẬT SỐ (Digital Discipline)
  {
    id: 97,
    period: 11,
    periodTitle: 'Tiết 11: Bắt tay xây dựng sản phẩm AI',
    topic: 'Chuyên đề 4: Thiết kế & phát triển · Mạch D',
    competencyStandard: '12.D2.1 (P2)',
    category: 'cards',
    categoryLabel: 'QUY ĐỊNH BẮT BUỘC',
    title: 'Kỷ Luật Số: 3 Điều Bắt Buộc Phải Ghi Nhật Ký',
    subtitle: 'Minh chứng cho tính trung thực và trách nhiệm giải trình của nhóm',
    layout: 'cards_3',
    elements: [
      {
        id: 'el_97_1',
        type: 'cards',
        data: [
          {
            id: 'kl_1',
            tag: 'Nhật ký 1',
            title: 'NGUỒN DỮ LIỆU ĐÃ DÙNG',
            desc: 'Ghi rõ: Các bức ảnh này do nhóm tự chụp ở đâu? Hay tải từ trang web nào? Có xin phép người chụp không?',
            badge: 'Data Provenance',
            color: 'blue',
          },
          {
            id: 'kl_2',
            tag: 'Nhật ký 2',
            title: 'CÂU LỆNH / THAO TÁC CHÍNH',
            desc: 'Ghi lại các câu prompt đã hỏi AI (nếu dùng sinh văn bản/code), các thông số epochs và learning rate đã chọn.',
            badge: 'Prompt Log',
            color: 'amber',
          },
          {
            id: 'kl_3',
            tag: 'Nhật ký 3',
            title: 'NHẬT KÝ LỖI (Bug Tracker)',
            desc: 'Ghi lại trung thực mọi lỗi phát sinh: AI nhận nhầm mẫu nào? Tại sao sai? Nhóm định khắc phục bằng cách nào?',
            badge: 'Bug List',
            color: 'rose',
          },
        ],
      },
    ],
    teacherNotes: {
      teacherScript: 'Thầy cô sẽ kiểm tra Nhật ký số này trên Phiếu theo dõi số 11. Nhóm nào giấu lỗi hoặc chép dữ liệu lậu mà không ghi nguồn sẽ bị đánh giá Chưa đạt.',
      activityDuration: '5 phút',
      keyTakeaways: ['Kỷ luật số: Ghi nguồn dữ liệu - Ghi câu lệnh prompt - Ghi nhật ký lỗi'],
    },
  },

  // SLIDE 98 - Hộp ghi nhớ Tiết 11
  {
    id: 98,
    period: 11,
    periodTitle: 'Tiết 11: Bắt tay xây dựng sản phẩm AI',
    topic: 'Chuyên đề 4: Thiết kế & phát triển · Mạch D',
    competencyStandard: '12.D2.1 (P2)',
    category: 'takeaway',
    categoryLabel: 'HỘP GHI NHỚ VÀNG',
    title: 'Ghi Nhớ: Ra Bản Đầu — Chưa Cần Hoàn Hảo',
    subtitle: 'Học bằng cách bắt tay vào làm và dám đối mặt với lỗi sai',
    layout: 'takeaway_banner',
    elements: [
      {
        id: 'el_98_1',
        type: 'quote',
        data: {
          highlight: 'MỤC TIÊU TIẾT NÀY LÀ CÓ MỘT SẢN PHẨM CHẠY ĐƯỢC Ở MỨC CƠ BẢN.',
          subtext: 'SAI VÀ SỬA LÀ CÁCH HỌC TỐT NHẤT KHI LÀM SẢN PHẨM CÔNG NGHỆ. HOÀN THIỆN & TRÌNH BÀY Ở TIẾT 12.',
          author: 'Quyết định 2422/QĐ-BGDĐT',
        },
      },
    ],
    illustration: {
      type: 'coding_mvp',
      caption: 'Màn hình máy tính hiển thị chữ "Version 1.0 - Successfully Running!"',
    },
    teacherNotes: {
      teacherScript: 'Đừng nản lòng nếu lần chạy đầu tiên AI đoán sai 3/10 ảnh. Đó là chuyện bình thường mà ngay cả các kĩ sư OpenAI hay Google cũng gặp phải!',
      activityDuration: '3 phút',
      keyTakeaways: ['Tinh thần dám thử nghiệm và học từ sai sót'],
    },
  },

  // SLIDE 99 - Thực hành 25 phút Tiết 11: Dựng sản phẩm theo vai trò (Phiếu số 11)
  {
    id: 99,
    period: 11,
    periodTitle: 'Tiết 11: Bắt tay xây dựng sản phẩm AI',
    topic: 'Chuyên đề 4: Thiết kế & phát triển · Mạch D',
    competencyStandard: '12.D2.1 (P2)',
    category: 'activity',
    categoryLabel: 'THỰC HÀNH PHÒNG MÁY (25 PHÚT)',
    title: 'Thực Hành: Dựng Sản Phẩm & Điền Phiếu Theo Dõi Số 11',
    subtitle: '25 phút làm việc chuyên sâu theo phân công chuyên môn',
    layout: 'activity_box',
    elements: [
      {
        id: 'el_99_1',
        type: 'checklist',
        data: {
          taskTitle: 'Điều phối thời gian thực hành (Bấm giờ đếm ngược 25 phút):',
          items: [
            'Phút 1 - 8: Nạp toàn bộ dữ liệu mẫu vào Teachable Machine và huấn luyện mô hình.',
            'Phút 9 - 18: Kết nối mô hình và chạy thử trên giao diện webcam máy tính.',
            'Phút 19 - 25: Bạn Kiểm thử dùng 10 mẫu mới test độc lập, cả nhóm ghi log lỗi vào Phiếu theo dõi số 11.',
            'Sản phẩm nộp: 1 đường link mô hình AI hoạt động được + Phiếu theo dõi số 11 đã điền đủ 4 mục.',
          ],
        },
      },
    ],
    worksheetNumber: 11,
    illustration: {
      type: 'team_roles',
      caption: 'Cả nhóm tập trung cao độ hoàn thành bản v1 trước khi hết giờ',
    },
    teacherNotes: {
      teacherScript: 'Thầy/cô bật đồng hồ đếm ngược 25 phút. Thầy/cô sẽ đi từng máy hỗ trợ kỹ thuật nếu nhóm nào bị lỗi webcam hoặc lỗi mạng.',
      activityDuration: '25 phút',
      keyTakeaways: ['Hoàn thành bản chạy được cơ bản của sản phẩm AI nhóm'],
    },
  },

  // SLIDE 100 - Lập kế hoạch hoàn thiện cho Tiết 12
  {
    id: 100,
    period: 11,
    periodTitle: 'Tiết 11: Bắt tay xây dựng sản phẩm AI',
    topic: 'Chuyên đề 4: Thiết kế & phát triển · Mạch D',
    competencyStandard: '12.D2.1 (P2)',
    category: 'table',
    categoryLabel: 'KẾ HOẠCH BÀN GIAO (5 PHÚT)',
    title: 'Kế Hoạch Hoàn Thiện Cho Lễ Báo Cáo Tiết 12',
    subtitle: 'Thống nhất việc cần làm ở nhà để chuẩn bị bài thuyết trình chung khảo',
    layout: 'table_view',
    elements: [
      {
        id: 'el_100_1',
        type: 'table',
        data: {
          headers: ['Nội dung chuẩn bị', 'Thành viên phụ trách', 'Việc cần làm ở nhà'],
          rows: [
            ['1. Bổ sung dữ liệu sửa lỗi', 'Bạn Dữ liệu & Lập trình', 'Chụp thêm 15 ảnh ở góc chụp AI hay đoán sai để huấn luyện lại'],
            ['2. Soạn Slide trình bày 5 phần', 'Bạn Ý tưởng & Trưởng nhóm', 'Soạn 5-7 slide theo đúng cấu trúc chuẩn 4 mạch năng lực'],
            ['3. Soạn bản Khai báo dùng AI', 'Bạn Kiểm thử & Cả nhóm', 'Viết đoạn văn 5 dòng nêu trung thực: AI giúp phần nào, nhóm tự làm phần nào'],
            ['4. Thử nghiệm demo lần cuối', 'Cả nhóm', 'Chạy thử demo trực tiếp trên máy chiếu để tránh sự cố kỹ thuật'],
          ],
        },
      },
    ],
    teacherNotes: {
      teacherScript: 'Mỗi nhóm thống nhất phân công người làm slide và người thuyết trình cho Tiết 12.',
      activityDuration: '5 phút',
      keyTakeaways: ['Phân công rõ ràng công tác chuẩn bị cho buổi báo cáo cuối cùng'],
    },
  },

  // SLIDE 101 - Tổng kết & Chuyển tiếp Tiết 11 sang Tiết 12
  {
    id: 101,
    period: 11,
    periodTitle: 'Tiết 11: Bắt tay xây dựng sản phẩm AI',
    topic: 'Chuyên đề 4: Thiết kế & phát triển · Mạch D',
    competencyStandard: '12.D2.1 (P2)',
    category: 'summary',
    categoryLabel: 'TỔNG KẾT & KẾT NỐI (2 PHÚT)',
    title: 'Học Bằng Cách Bắt Tay Vào Làm',
    subtitle: 'Hẹn gặp lại tại Tiết 12: Ngày hội Báo cáo Dự án AI & Tổng kết năm học!',
    layout: 'takeaway_banner',
    elements: [
      {
        id: 'el_101_1',
        type: 'quote',
        data: {
          highlight: 'SAI VÀ SỬA LÀ CÁCH HỌC TỐT NHẤT KHI LÀM SẢN PHẨM AI.',
          subtext: 'Chúc mừng các nhóm đã có sản phẩm chạy được! Tiết 12 sẽ là sân khấu tỏa sáng của tất cả các em. Đón xem: "Tiết 12: Dự án AI & Tổng kết chuyên đề"!',
          author: 'QĐ 2422/QĐ-BGDĐT',
        },
      },
    ],
    illustration: {
      type: 'project_showcase',
      caption: 'Tiết 12: Dự án AI & Tổng kết khóa học',
    },
    teacherNotes: {
      teacherScript: 'Tiết 12 sẽ là ngày hội công nghệ thực sự của lớp ta! Các em hãy chuẩn bị thật tự tin nhé!',
      activityDuration: '2 phút',
      keyTakeaways: ['Hoàn thành Tiết 11; sẵn sàng cho sự kiện báo cáo tổng kết ở Tiết 12'],
    },
  },

  // ===== TIẾT 12 (SLIDES 102 - 109) =====
  // SLIDE 102 - Bìa Tiết 12
  {
    id: 102,
    period: 12,
    periodTitle: 'Tiết 12: Dự án AI & tổng kết',
    topic: 'Chuyên đề 5: Dự án AI & tổng kết · Mạch Tổng hợp A + B + C + D',
    competencyStandard: 'Vận dụng tổng hợp — Hoàn thiện, trình bày và đánh giá được một sản phẩm/dự án AI đơn giản thể hiện đủ 4 mạch năng lực; khai báo trung thực việc sử dụng AI',
    category: 'cover',
    categoryLabel: 'TIẾT 12 · MỞ ĐẦU',
    title: 'Báo Cáo Dự Án AI & Tổng Kết Khóa Học',
    subtitle: 'Tỏa sáng sản phẩm nhóm, đánh giá chéo theo Rubric 4 mức và định hướng tương lai nghề nghiệp',
    layout: 'center_hero',
    elements: [
      {
        id: 'el_102_1',
        type: 'header',
        data: {
          badge: 'TIẾT 12 / 12 (45 PHÚT) · TỔNG HỢP 4 MẠCH A+B+C+D',
          heading: 'NGÀY HỘI CÔNG NGHỆ: CON NGƯỜI LÀM CHỦ TRÍ TUỆ NHÂN TẠO',
          subtext: 'Trình diễn thành quả sáng tạo của học sinh THPT thế hệ mới tự tin và bản lĩnh',
        },
      },
    ],
    illustration: {
      type: 'project_showcase',
      caption: 'Học sinh thuyết trình tự tin bên sản phẩm AI trước toàn thể lớp học',
      source: 'Quyết định 2422/QĐ-BGDĐT',
    },
    teacherNotes: {
      teacherScript: 'Chào các em đến với Tiết 12 — Tiết học tổng kết đặc biệt nhất trong toàn bộ chuyên đề! Hôm nay mỗi nhóm sẽ có 4-5 phút để tỏa sáng với sản phẩm của mình.',
      activityDuration: '2 phút',
      keyTakeaways: ['Báo cáo dự án, đánh giá chéo rubric 4 mức và tổng kết thông điệp cốt lõi'],
    },
  },

  // SLIDE 103 - Khởi động Tiết 12
  {
    id: 103,
    period: 12,
    periodTitle: 'Tiết 12: Dự án AI & tổng kết',
    topic: 'Chuyên đề 5: Dự án AI & tổng kết · Mạch Tổng hợp A + B + C + D',
    competencyStandard: 'Vận dụng tổng hợp',
    category: 'intro',
    categoryLabel: 'KHỞI ĐỘNG (3 PHÚT)',
    title: 'Quy Chế Ngày Hội Báo Cáo & Đánh Giá Chéo',
    subtitle: 'Không khí văn minh: Tôn trọng, cổ vũ và nhận xét mang tính xây dựng',
    layout: 'split_left_right',
    elements: [
      {
        id: 'el_103_1',
        type: 'discussion',
        data: {
          question: 'Sản phẩm của nhóm em giải quyết vấn đề gì trong cuộc sống? Điểm độc đáo nhất là gì?',
          instruction: 'Mỗi nhóm lần lượt trình bày 4-5 phút (gồm thuyết trình + demo trực tiếp). Các nhóm khác chấm điểm theo Rubric và ghi 1 ĐIỂM KHEN + 1 ĐIỂM GÓP Ý.',
        },
      },
    ],
    illustration: {
      type: 'team_roles',
      caption: 'Cả lớp cùng chăm chú theo dõi và chấm điểm trên phiếu đánh giá chéo',
    },
    teacherNotes: {
      teacherScript: 'Nguyên tắc chấm theo Quyết định 2422: Nhận xét vì sự tiến bộ của bạn, không chê bai, không gay gắt. Khai báo dùng AI là bằng chứng của sự trung thực!',
      activityDuration: '3 phút',
      keyTakeaways: ['Nắm chắc quy chế báo cáo và tinh thần đánh giá chéo xây dựng'],
    },
  },

  // SLIDE 104 - Dàn ý 5 phần báo cáo chuẩn 4 mạch năng lực
  {
    id: 104,
    period: 12,
    periodTitle: 'Tiết 12: Dự án AI & tổng kết',
    topic: 'Chuyên đề 5: Dự án AI & tổng kết · Mạch Tổng hợp A + B + C + D',
    competencyStandard: 'Vận dụng tổng hợp',
    category: 'diagram',
    categoryLabel: 'DÀN Ý THUYẾT TRÌNH',
    title: 'Cấu Trúc Bài Báo Cáo 5 Phần (Đủ 4 Mạch)',
    subtitle: 'Thể hiện trọn vẹn sự trưởng thành về năng lực công nghệ và tư duy',
    layout: 'step_pipeline',
    elements: [
      {
        id: 'el_104_1',
        type: 'steps',
        data: [
          { stepNumber: 1, name: 'Vấn đề & Mục tiêu (Mạch D)', role: '1 phút', details: 'Sản phẩm giải quyết bài toán gì? Phục vụ đối tượng nào trong trường?' },
          { stepNumber: 2, name: 'Cách làm & Công cụ (Mạch C)', role: '1 phút', details: 'Dùng công cụ gì? Thu thập bao nhiêu mẫu dữ liệu? Huấn luyện ra sao?' },
          { stepNumber: 3, name: 'Kết quả & Đánh giá (Mạch C)', role: '1 phút', details: 'Độ chính xác đạt bao nhiêu % trên tập mẫu mới? Còn hay sai ở đâu?' },
          { stepNumber: 4, name: 'Con người & Đạo đức (Mạch A, B)', role: '1 phút', details: 'Con người kiểm soát ở khâu nào? Đã lưu ý quyền riêng tư & an toàn ra sao?' },
          { stepNumber: 5, name: 'Khai báo sử dụng AI (Mạch B)', role: '1 phút', details: 'Minh bạch: AI hỗ trợ phần nào, nhóm tự làm phần nào, cách kiểm chứng.' },
        ],
      },
    ],
    illustration: {
      type: 'project_showcase',
      caption: 'Bản thuyết trình 5 phần chuẩn mực được trình chiếu trên bảng',
    },
    teacherNotes: {
      teacherScript: 'Các nhóm bám sát đúng 5 phần này. Bạn nào nói đủ 5 phần sẽ đạt điểm xuất sắc ở tiêu chí Trình bày.',
      activityDuration: '4 phút',
      keyTakeaways: ['Cấu trúc bài báo cáo chuẩn mực 4 mạch năng lực'],
    },
  },

  // SLIDE 105 - Bảng Rubric đánh giá dự án AI 4 mức (Chuẩn QĐ 2422)
  {
    id: 105,
    period: 12,
    periodTitle: 'Tiết 12: Dự án AI & tổng kết',
    topic: 'Chuyên đề 5: Dự án AI & tổng kết · Mạch Tổng hợp A + B + C + D',
    competencyStandard: 'Vận dụng tổng hợp',
    category: 'table',
    categoryLabel: 'TIÊU CHÍ RUBRIC',
    title: 'Rubric Đánh Giá Dự Án AI (Thang 4 Mức Độ)',
    subtitle: 'Đánh giá năng lực thực chất theo hướng dẫn Quyết định 2422/QĐ-BGDĐT',
    layout: 'table_view',
    elements: [
      {
        id: 'el_105_1',
        type: 'table',
        data: {
          headers: ['Tiêu chí', 'Mức 1 (Cần cố gắng)', 'Mức 2 (Đạt)', 'Mức 3 (Khá)', 'Mức 4 (Tốt / Xuất sắc)'],
          rows: [
            ['1. Xác định vấn đề (D)', 'Mơ hồ, không rõ đối tượng dùng', 'Nêu được vấn đề cơ bản', 'Vấn đề rõ ràng, thực tế học đường', 'Vấn đề sâu sắc, gắn kết lợi ích cộng đồng'],
            ['2. Kĩ thuật & Công cụ (C)', 'Chưa chạy được mô hình', 'Chạy được nhưng còn nhiều lỗi', 'Chạy ổn định ở mức cơ bản (MVP)', 'Chạy tốt, có đo độ đúng trên tập mẫu mới'],
            ['3. Con người kiểm soát (A)', 'Bỏ qua, phó mặc hoàn toàn cho AI', 'Nhắc chung chung', 'Chỉ rõ được 1-2 điểm kiểm soát', 'Phân tích sâu vai trò con người trong vòng đời'],
            ['4. Đạo đức & Khai báo (B)', 'Bỏ qua vấn đề đạo đức, giấu giếm', 'Nhắc sơ sài', 'Nêu được rủi ro và cách phòng tránh', 'Tuân thủ đạo đức, khai báo dùng AI đầy đủ'],
            ['5. Hợp tác & Trình bày', 'Rời rạc, chỉ 1 người nói', 'Có phối hợp nhưng chưa đều', 'Phối hợp tốt, tự tin', 'Phối hợp ăn ý, thuyết phục, demo lôi cuốn'],
          ],
        },
      },
    ],
    teacherNotes: {
      teacherScript: 'Lưu ý nguyên tắc nhân văn của Bộ GD&ĐT: Đánh giá quá trình, nhận xét để khích lệ, KHÔNG lấy điểm số trừ phạt làm áp lực. Khai báo dùng AI là minh chứng của trung thực!',
      activityDuration: '5 phút',
      keyTakeaways: ['Bộ Rubric 5 tiêu chí x 4 mức độ đánh giá toàn diện'],
    },
  },

  // SLIDE 106 - Mẫu bản Khai Báo Sử Dụng AI minh bạch
  {
    id: 106,
    period: 12,
    periodTitle: 'Tiết 12: Dự án AI & tổng kết',
    topic: 'Chuyên đề 5: Dự án AI & tổng kết · Mạch Tổng hợp A + B + C + D',
    competencyStandard: 'Vận dụng tổng hợp',
    category: 'cards',
    categoryLabel: 'CHUẨN MỰC MINH BẠCH',
    title: 'Mẫu Tuyên Bố: “Khai Báo Sử Dụng AI Minh Bạch”',
    subtitle: 'Nét văn hóa đẹp của người làm khoa học chân chính',
    layout: 'cards_3',
    elements: [
      {
        id: 'el_106_1',
        type: 'cards',
        data: [
          {
            id: 'kb_1',
            tag: 'Mục 1',
            title: 'Công Cụ Đã Dùng',
            desc: 'Nhóm đã sử dụng Google Teachable Machine để huấn luyện nhận diện ảnh, dùng ChatGPT gợi ý cấu trúc slide.',
            icon: 'Cpu',
            color: 'blue',
          },
          {
            id: 'kb_2',
            tag: 'Mục 2',
            title: 'Phân Định Đóng Góp',
            desc: 'AI hỗ trợ: Tạo mô hình nhãn và gợi ý dàn ý; Nhóm tự làm 100%: Chụp 150 ảnh thật, lập trình giao diện, kiểm thử 20 mẫu.',
            icon: 'GitFork',
            color: 'emerald',
          },
          {
            id: 'kb_3',
            tag: 'Mục 3',
            title: 'Cam Kết Kiểm Chứng',
            desc: 'Mọi thông tin do AI đưa ra đều đã được các thành viên trong nhóm đối chiếu và chịu trách nhiệm hoàn toàn về nội dung.',
            icon: 'CheckSquare',
            color: 'purple',
          },
        ],
      },
    ],
    teacherNotes: {
      teacherScript: 'Đây là bản mẫu các em có thể đọc ở phần kết bài thuyết trình của mình. Rất đàng hoàng, tự tin và minh bạch!',
      activityDuration: '4 phút',
      keyTakeaways: ['Biết cách viết và công bố bản khai báo sử dụng AI'],
    },
  },

  // SLIDE 107 - Báo cáo trực tiếp & Đánh giá chéo (Phiếu số 12)
  {
    id: 107,
    period: 12,
    periodTitle: 'Tiết 12: Dự án AI & tổng kết',
    topic: 'Chuyên đề 5: Dự án AI & tổng kết · Mạch Tổng hợp A + B + C + D',
    competencyStandard: 'Vận dụng tổng hợp',
    category: 'activity',
    categoryLabel: 'NGÀY HỘI TRÌNH DIỄN (22 PHÚT)',
    title: 'Trình Bày Sản Phẩm & Đánh Giá Chéo (Phiếu Số 12)',
    subtitle: 'Các nhóm lần lượt lên sân khấu demo và nhận phản hồi từ cả lớp',
    layout: 'activity_box',
    elements: [
      {
        id: 'el_107_1',
        type: 'checklist',
        data: {
          taskTitle: 'Tiến trình ngày hội báo cáo (4 nhóm tiêu biểu · 5 phút / nhóm):',
          items: [
            'Nhóm 1: Demo hệ thống Thùng rác AI phân loại chai nhựa và vỏ lon.',
            'Nhóm 2: Demo phần mềm Cảnh báo tư thế ngồi học qua webcam.',
            'Nhóm 3: Demo ứng dụng Nhận diện cử chỉ ngôn ngữ ký hiệu hỗ trợ bạn khiếm thính.',
            'Nhóm 4: Demo hệ thống Chẩn đoán lá cây và nhắc lịch tưới nước cho lớp học.',
            'Cả lớp hoàn thành Phiếu đánh giá chéo số 12: Ghi mức đạt + 1 lời khen + 1 lời góp ý chân thành.',
          ],
        },
      },
    ],
    worksheetNumber: 12,
    illustration: {
      type: 'project_showcase',
      caption: 'Sân khấu lớp học sôi động với những tràng pháo tay khích lệ',
    },
    teacherNotes: {
      teacherScript: 'Thầy/cô điều phối thời gian 5 phút cho mỗi nhóm. Sau mỗi phần trình bày, thầy/cô mời 1 bạn dưới lớp đọc to 1 lời khen ngợi dành cho nhóm bạn!',
      activityDuration: '22 phút',
      keyTakeaways: ['Tự tin thuyết trình, bảo vệ sản phẩm công nghệ trước đám đông'],
    },
  },

  // SLIDE 108 - Hộp ghi nhớ Tiết 12: Thông điệp cốt lõi cả năm học
  {
    id: 108,
    period: 12,
    periodTitle: 'Tiết 12: Dự án AI & tổng kết',
    topic: 'Chuyên đề 5: Dự án AI & tổng kết · Mạch Tổng hợp A + B + C + D',
    competencyStandard: 'Vận dụng tổng hợp',
    category: 'takeaway',
    categoryLabel: 'THÔNG ĐIỆP KHÓA HỌC',
    title: 'Ghi Nhớ: Con Người Làm Chủ AI',
    subtitle: 'Đúc kết toàn bộ 12 tiết học chuyên đề trong một chân lý trường tồn',
    layout: 'takeaway_banner',
    elements: [
      {
        id: 'el_108_1',
        type: 'quote',
        data: {
          highlight: 'DÙNG AI CÓ ĐẠO ĐỨC, CÓ TRÁCH NHIỆM, VÌ CỘNG ĐỒNG VÀ PHỤC VỤ CON NGƯỜI.',
          subtext: 'TRÍ TUỆ NHÂN TẠO LÀ ĐÔI CÁNH — NHƯNG CON NGƯỜI MỚI LÀ NGƯỜI ĐỊNH HƯỚNG BẦU TRỜI BAY TỚI.',
          author: 'Thông điệp Chuyên đề Trí tuệ nhân tạo Lớp 12 · GDPT 2018',
        },
      },
    ],
    illustration: {
      type: 'robot_learning',
      caption: 'Tập thể học sinh vui vẻ cùng người bạn robot thông minh',
    },
    teacherNotes: {
      teacherScript: 'Cả lớp cùng đọc to thông điệp trên bảng. Hãy mang thông điệp này theo các em suốt chặng đường đại học và lập nghiệp mai sau!',
      activityDuration: '4 phút',
      keyTakeaways: ['Khắc sâu thông điệp con người làm chủ công nghệ'],
    },
  },

  // SLIDE 109 - Nhìn lại và định hướng nghề nghiệp tương lai
  {
    id: 109,
    period: 12,
    periodTitle: 'Tiết 12: Dự án AI & tổng kết',
    topic: 'Định Hướng Nghề Nghiệp Trong Kỷ Nguyên AI',
    competencyStandard: 'Chương trình GDPT 2018',
    category: 'summary',
    categoryLabel: 'ĐỊNH HƯỚNG NGHỀ NGHIỆP',
    title: 'Em Thấy Mình Là Ai Trong Kỷ Nguyên AI?',
    subtitle: 'Mở rộng chân trời cơ hội việc làm và các ngành học đại học tương lai',
    layout: 'cards_4',
    elements: [
      {
        id: 'el_109_1',
        type: 'cards',
        data: [
          {
            id: 'job_1',
            tag: 'Nhóm Kỹ thuật',
            title: 'Kĩ Sư AI & Dữ Liệu',
            desc: 'Nghiên cứu thuật toán học sâu, xử lý dữ liệu lớn (Big Data), phát triển mô hình ngôn ngữ lớn và thị giác máy tính.',
            icon: 'Code2',
            color: 'blue',
          },
          {
            id: 'job_2',
            tag: 'Nhóm Ứng dụng',
            title: 'Chuyên Gia Tích Hợp AI',
            desc: 'Đưa AI vào các ngành nghề truyền thống: Nông nghiệp công nghệ cao, Chẩn đoán y tế số, Ngân hàng và Tài chính.',
            icon: 'Cpu',
            color: 'emerald',
          },
          {
            id: 'job_3',
            tag: 'Nhóm Pháp lý & Đạo đức',
            title: 'Luật Sư & Thẩm Định AI',
            desc: 'Thẩm định tính công bằng, bảo vệ bản quyền dữ liệu cá nhân, tư vấn chính sách và đạo luật AI cho doanh nghiệp.',
            icon: 'Scale',
            color: 'purple',
          },
          {
            id: 'job_4',
            tag: 'Nhóm Sáng tạo',
            title: 'Nhà Sáng Tạo Đa Phương Tiện',
            desc: 'Kết hợp AI với nghệ thuật, thiết kế game, làm phim, giáo dục tương tác và truyền thông nhân văn.',
            icon: 'Sparkles',
            color: 'amber',
          },
        ],
      },
    ],
    teacherNotes: {
      teacherScript: 'Dù sau này các em chọn học Bách khoa, Y dược, Sư phạm hay Luật, hiểu biết về AI ngày hôm nay sẽ luôn là bệ phóng giúp các em dẫn đầu!',
      activityDuration: '4 phút',
      keyTakeaways: ['Tầm nhìn nghề nghiệp rộng mở kết hợp AI với các ngành nghề'],
    },
  },

  // SLIDE 110 - Lời chào bế mạc chuyên đề 12 tiết
  {
    id: 110,
    period: 12,
    periodTitle: 'Bế Mạc Chuyên Đề AI THPT',
    topic: 'Hoàn Thành 12 Tiết Cốt Lõi Lớp 12',
    competencyStandard: 'Quyết định 2422/QĐ-BGDĐT & Chương trình GDPT 2018',
    category: 'summary',
    categoryLabel: 'BẾ MẠC KHÓA HỌC',
    title: 'CẢM ƠN CÁC EM & CHÚC MỪNG THÀNH CÔNG!',
    subtitle: 'Chúc các em trở thành những công dân số làm chủ AI, sáng tạo và luôn có trách nhiệm với cộng đồng!',
    layout: 'center_hero',
    elements: [
      {
        id: 'el_110_1',
        type: 'header',
        data: {
          badge: 'CHỨNG NHẬN HOÀN THÀNH 12 TIẾT CHUYÊN ĐỀ AI',
          heading: 'TỰ HÀO THẾ HỆ HỌC SINH THPT LÀM CHỦ TƯƠNG LAI CÔNG NGHỆ',
          subtext: 'Trang bị trọn vẹn: Tư duy con người trung tâm — Đạo đức liêm chính — Kĩ thuật thực chiến — Năng lực hợp tác',
        },
      },
    ],
    illustration: {
      type: 'robot_learning',
      caption: '🏆 Thầy/Cô chúc mừng tập thể lớp đã hoàn thành xuất sắc 12 tiết chuyên đề Trí tuệ nhân tạo!',
      source: 'Quyết định 2422/QĐ-BGDĐT (18/8/2026) · Chương trình GDPT 2018',
      imageUrl: 'trophy-tot-nghiep.png',
    },
    teacherNotes: {
      teacherScript: 'Thầy/cô chúc mừng tất cả các em! Hãy lưu giữ các phiếu học tập và mô hình AI của mình làm hồ sơ học tập (portfolio) cho tương lai. Tạm biệt và hẹn gặp lại các em!',
      activityDuration: '2 phút',
      keyTakeaways: ['Hoàn thành toàn diện 12 tiết học chuyên đề AI THPT với 110 slide bài giảng'],
    },
  },
];
