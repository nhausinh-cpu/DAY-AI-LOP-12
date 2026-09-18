import { Lesson } from '../types';
import { svgVisual } from './visual';

// BUỔI 2 - TIẾT 3-4
// Tiết 3: Chuyên đề 1 (Mạch A) - Trách nhiệm giải trình & pháp luật | Tiết 4: Chuyên đề 2 (Mạch B) - 6 nguyên tắc đạo đức khi thiết kế AI
// Yêu cầu cần đạt: 12.A1.3 (Tiết 3); 12.A2.1 (Tiết 4)
export const module2: Lesson[] = [
  {
    period: 3,
    title: 'Trách Nhiệm Giải Trình & Pháp Luật',
    description: 'Hiểu khái niệm trách nhiệm giải trình khi dùng/phát triển AI, biết một số quy định pháp luật liên quan và dùng bộ tiêu chí để kiểm tra trách nhiệm giải trình của một hệ thống AI.',
    objectives: [
      '12.A1.3: Kiểm tra được việc thực hiện trách nhiệm giải trình của con người đối với các quyết định, đối chiếu với các quy định hiện hành trong nước và quốc tế.',
      'Nêu được khái niệm "trách nhiệm giải trình" khi sử dụng/phát triển AI; kể được một số quy định pháp luật Việt Nam liên quan đến AI, dữ liệu, an ninh mạng.',
      'Dùng bộ tiêu chí (checklist) để kiểm tra trách nhiệm giải trình của một hệ thống AI; đối chiếu một tình huống với quy định pháp luật.'
    ],
    slides: [
      {
        id: 'l3_s1', title: 'Khởi Động: "AI Tự Làm, Chúng Tôi Không Biết"', visualType: 'intro',
        content: [
          '📘 Tiết 3: Trách nhiệm giải trình & pháp luật khi dùng AI.',
          '💭 Tình huống: Một công ty dùng AI lọc hồ sơ, loại nhầm một ứng viên rất giỏi. Khi bị hỏi, công ty nói: "AI tự làm, chúng tôi không biết."',
          '❓ Câu trả lời này có chấp nhận được không?',
          '💡 Dự kiến: HS nhận ra không thể đổ lỗi cho máy - con người phải giải trình và chịu trách nhiệm.'
        ],
        visualUrl: svgVisual('Không Thể Đổ Lỗi Cho Máy', 'Trách nhiệm giải trình khi AI gây hại', '#7c2d12', '#c2410c', '❓'),
        answerHint: 'Câu trả lời "AI tự làm" là né tránh trách nhiệm - công ty vẫn phải giải trình vì đã lựa chọn triển khai và vận hành hệ thống AI đó.',
        speakerNotes: 'GV nêu tình huống thực tế, mời học sinh phát biểu, chốt lại: không thể đổ lỗi cho máy, dẫn vào khái niệm trách nhiệm giải trình.'
      },
      {
        id: 'l3_s2', title: 'Trách Nhiệm Giải Trình Là Gì?', visualType: 'concepts',
        content: [
          '📖 Trách nhiệm giải trình = nghĩa vụ GIẢI THÍCH (hệ thống AI hoạt động thế nào, dùng dữ liệu gì, ra quyết định ra sao) và CHỊU TRÁCH NHIỆM về hậu quả.',
          '🚫 Người phát triển và người sử dụng AI đều KHÔNG được "đổ lỗi cho máy".',
          '🇻🇳 Quy định pháp luật liên quan (Việt Nam): Luật An ninh mạng - bảo vệ an toàn thông tin, chống thông tin xấu độc; Luật Dữ liệu/Luật Bảo vệ dữ liệu cá nhân - quyền của cá nhân với dữ liệu của mình.',
          '🌍 Quốc tế (khái niệm): Đạo luật AI của EU (EU AI Act) phân loại rủi ro và buộc hệ thống AI phải minh bạch, có người chịu trách nhiệm.'
        ],
        visualUrl: svgVisual('Trách Nhiệm Giải Trình', 'Giải thích được + Chịu trách nhiệm được', '#7c2d12', '#c2410c', '⚖️'),
        speakerNotes: 'Giảng khái niệm trách nhiệm giải trình gồm 2 phần: GIẢI THÍCH được và CHỊU TRÁCH NHIỆM - thiếu một trong hai đều chưa đạt. Giới thiệu các luật liên quan ở mức khái niệm, không đi sâu điều luật.'
      },
      {
        id: 'l3_s3', title: 'Bộ Tiêu Chí Kiểm Tra Trách Nhiệm Giải Trình', visualType: 'concepts',
        content: [
          '1️⃣ Có xác định rõ AI đang được ai vận hành, ai chịu trách nhiệm không?',
          '2️⃣ Có giải thích được cách AI ra kết quả (dữ liệu, cách hoạt động) không?',
          '3️⃣ Có cơ chế cho người bị ảnh hưởng khiếu nại/phúc khảo không?',
          '4️⃣ Có tuân thủ quy định pháp luật (dữ liệu cá nhân, an ninh mạng) không?'
        ],
        visualUrl: svgVisual('4 Tiêu Chí Kiểm Tra', 'Vận hành - Giải thích - Khiếu nại - Tuân thủ pháp luật', '#78350f', '#b45309', '✅'),
        speakerNotes: 'Đây là bộ 4 tiêu chí dùng cho hoạt động luyện tập nhóm ngay sau đó - GV giải thích rõ từng tiêu chí trước khi học sinh áp dụng.'
      },
      {
        id: 'l3_s4', title: 'Luyện Tập Nhóm: Chấm Đạt/Chưa Đạt Theo Checklist', visualType: 'interactive',
        content: [
          '📋 Nhóm dùng bộ 4 tiêu chí kiểm tra tình huống "AI chấm điểm thi" (hoặc tình huống lọc hồ sơ) → chấm Đạt/Chưa đạt từng tiêu chí + đề xuất cách khắc phục.',
          '✅ Sản phẩm: Phiếu kiểm (Phiếu học tập số 3) đã điền + đề xuất khắc phục của nhóm.'
        ],
        interactiveQuiz: {
          question: 'Một ứng dụng dùng AI nhưng không hề công bố mình đang thu thập và sử dụng dữ liệu gì của người dùng. Ứng dụng này KHÔNG đạt tiêu chí nào trong bộ tiêu chí trách nhiệm giải trình?',
          options: [
            'Tiêu chí 1 - xác định ai vận hành, ai chịu trách nhiệm',
            'Tiêu chí 2 - giải thích được cách AI ra kết quả (dữ liệu, cách hoạt động)',
            'Tiêu chí 3 - cơ chế khiếu nại/phúc khảo',
            'Không vi phạm tiêu chí nào vì đây là chuyện bình thường'
          ],
          answerIndex: 1,
          explanation: 'Việc không công bố dữ liệu đang thu thập và cách hoạt động chính là vi phạm tiêu chí 2 - "giải thích được cách AI ra kết quả (dữ liệu, cách hoạt động)".',
          hint: 'Trách nhiệm giải trình bao gồm việc GIẢI THÍCH minh bạch cách hệ thống hoạt động.',
          suggestedAnswer: 'Ứng dụng vi phạm tiêu chí 2 vì không minh bạch về dữ liệu và cách AI hoạt động - cần công khai để người dùng biết và có thể kiểm chứng.'
        },
        speakerNotes: 'Học sinh làm việc nhóm áp dụng checklist vào tình huống cụ thể, 2 nhóm trình bày, GV nhận xét và chốt cách khắc phục phù hợp.'
      },
      {
        id: 'l3_s5', title: 'Vận Dụng: Nếu Em Tạo Ra Một Sản Phẩm AI', visualType: 'activity',
        content: [
          '🗣️ Nếu sau này em tạo ra một sản phẩm AI, em sẽ làm gì để thể hiện trách nhiệm giải trình? Viết 3 câu và chia sẻ.',
          '📌 Bài tập về nhà: tìm 1 tin tức về sự cố liên quan đến AI, chỉ ra ai lẽ ra phải giải trình và chịu trách nhiệm; viết đoạn 4-5 câu vì sao không được "đổ lỗi cho máy" khi AI gây hại.'
        ],
        activity: {
          title: 'Bài tập vận dụng: Trách nhiệm giải trình trong thực tế',
          duration: 'Viết 3 câu tại lớp + hoàn thiện ở nhà',
          instructions: [
            '1. Tìm 1 tin tức về sự cố liên quan đến AI. Chỉ ra: ai lẽ ra phải giải trình và chịu trách nhiệm?',
            '2. Viết đoạn 4-5 câu: vì sao không được "đổ lỗi cho máy" khi AI gây hại?'
          ],
          tips: 'Có thể liên hệ lại tình huống lọc hồ sơ hoặc chấm thi đã học ở lớp.',
          hint: 'Nhớ 2 phần của trách nhiệm giải trình: GIẢI THÍCH được và CHỊU TRÁCH NHIỆM.',
          suggestedAnswer: 'Câu trả lời tuỳ tin tức học sinh tìm được, cần chỉ rõ chủ thể (người phát triển hoặc người vận hành) lẽ ra phải giải trình, và lí do vì sao AI không thể tự chịu trách nhiệm.'
        },
        speakerNotes: 'GV chốt bài, dặn dò Tiết 4 sẽ chuyển sang Chuyên đề 2 - Đạo đức & pháp luật khi dùng/tạo AI, với nội dung 6 nguyên tắc đạo đức khi thiết kế AI.'
      }
    ]
  },
  {
    period: 4,
    title: '6 Nguyên Tắc Đạo Đức Khi Thiết Kế AI',
    description: 'Trình bày và giải thích 6 nguyên tắc đạo đức cơ bản khi thiết kế, phát triển sản phẩm AI: an toàn, công bằng, minh bạch, tôn trọng quyền riêng tư, trách nhiệm, lợi ích xã hội.',
    objectives: [
      '12.A2.1: Trình bày được một số nguyên tắc đạo đức cơ bản trong thiết kế, phát triển sản phẩm AI: an toàn, công bằng, minh bạch, tôn trọng quyền riêng tư, trách nhiệm, lợi ích xã hội.',
      'Nhận diện được tình huống vi phạm từng nguyên tắc.',
      'Ghép được tình huống thực tế với nguyên tắc bị vi phạm và đề xuất cách sửa.'
    ],
    slides: [
      {
        id: 'l4_s1', title: 'Khởi Động: AI Tuyển Dụng Thiên Vị', visualType: 'intro',
        content: [
          '🔁 Ôn nhanh: nhắc lại khái niệm trách nhiệm giải trình và 4 tiêu chí kiểm tra đã học ở Tiết 3.',
          '📰 Tin tức: một hệ thống AI tuyển dụng lại loại ứng viên nữ nhiều hơn nam dù họ giỏi ngang nhau.',
          '❓ Theo các em, AI này đã vi phạm điều gì?',
          '💡 Dự kiến: HS trả lời "không công bằng" - đây là 1 trong 6 nguyên tắc đạo đức khi thiết kế AI.'
        ],
        visualUrl: svgVisual('6 Nguyên Tắc Đạo Đức AI', 'Từ một tình huống thiên vị tuyển dụng', '#312e81', '#7c3aed', '⚖️'),
        speakerNotes: 'Dẫn dắt từ tình huống AI tuyển dụng thiên vị để giới thiệu chủ đề 6 nguyên tắc đạo đức khi thiết kế, phát triển sản phẩm AI (Chuyên đề 2 - Mạch B).'
      },
      {
        id: 'l4_s2', title: '6 Nguyên Tắc Đạo Đức Khi Thiết Kế AI', visualType: 'concepts',
        content: [
          '1️⃣ An toàn: không gây nguy hiểm cho con người và môi trường. Vi phạm: AI điều khiển thiết bị nhưng không có cơ chế dừng khẩn cấp.',
          '2️⃣ Công bằng: tránh thiên vị, phân biệt đối xử trong dữ liệu và kết quả. Vi phạm: AI tuyển dụng loại ứng viên nữ nhiều hơn nam.',
          '3️⃣ Minh bạch: công khai cách hoạt động, không che giấu. Vi phạm: app dùng AI nhưng không cho biết đang thu thập/dùng dữ liệu gì.',
          '4️⃣ Tôn trọng quyền riêng tư: không dùng, chia sẻ dữ liệu cá nhân trái phép. Vi phạm: app lén ghi âm, lấy vị trí người dùng.',
          '5️⃣ Trách nhiệm: kiểm tra, đánh giá và chịu trách nhiệm về sản phẩm. Vi phạm: tung sản phẩm AI ra dùng mà không kiểm thử, gây hại rồi chối bỏ.',
          '6️⃣ Lợi ích xã hội: phục vụ con người, cộng đồng, phát triển bền vững. Vi phạm: làm AI chỉ để lừa đảo, thao túng người dùng.'
        ],
        visualUrl: svgVisual('An Toàn - Công Bằng - Minh Bạch', 'Riêng tư - Trách nhiệm - Lợi ích xã hội', '#4c1d95', '#7c3aed', '🔑'),
        speakerNotes: 'Giảng từng nguyên tắc kèm 1 ví dụ vi phạm cụ thể. Sau mỗi nguyên tắc, đưa 1 thẻ tình huống để học sinh đoán vi phạm nguyên tắc nào. Chốt ghi nhớ: một sản phẩm AI tốt phải tuân thủ cả 6 nguyên tắc.'
      },
      {
        id: 'l4_s3', title: 'Luyện Tập Nhóm: Ghép Tình Huống - Nguyên Tắc - Cách Sửa', visualType: 'interactive',
        content: [
          '🎴 Mỗi nhóm nhận 3 thẻ tình huống vi phạm (AI thiên vị tuyển dụng, app lén thu dữ liệu, deepfake, AI gây nguy hiểm...) → xác định vi phạm nguyên tắc nào + đề xuất cách sửa.',
          '✅ Sản phẩm: Bảng ghép "tình huống ↔ nguyên tắc ↔ cách sửa" của nhóm (Phiếu học tập số 4).'
        ],
        interactiveQuiz: {
          question: 'Một ứng dụng học tập bí mật ghi âm và thu thập vị trí của học sinh mà không thông báo. Ứng dụng này vi phạm chủ yếu nguyên tắc đạo đức nào?',
          options: [
            'An toàn',
            'Công bằng',
            'Tôn trọng quyền riêng tư (và cả Minh bạch, vì không công khai việc thu thập)',
            'Lợi ích xã hội'
          ],
          answerIndex: 2,
          explanation: 'Việc lén ghi âm, thu thập vị trí mà không thông báo vi phạm trực tiếp nguyên tắc "Tôn trọng quyền riêng tư"; đồng thời cũng vi phạm nguyên tắc "Minh bạch" vì không công khai cho người dùng biết.',
          hint: 'Nhớ ví dụ vi phạm nguyên tắc riêng tư trong bài: "app lén ghi âm, lấy vị trí người dùng".',
          suggestedAnswer: 'Vi phạm nguyên tắc tôn trọng quyền riêng tư (và minh bạch); cách sửa là công khai rõ việc thu thập dữ liệu và xin phép người dùng trước khi thu thập.'
        },
        speakerNotes: 'Học sinh khá có thể phân tích thêm nhiều nguyên tắc bị vi phạm cùng lúc trong một tình huống. GV tổng hợp bảng ghép của các nhóm.'
      },
      {
        id: 'l4_s4', title: 'Vận Dụng: Cam Kết Tuân Thủ Một Nguyên Tắc', visualType: 'activity',
        content: [
          '🗣️ Nếu em thiết kế 1 sản phẩm AI, em chọn 1 nguyên tắc và nêu 1 việc cụ thể em sẽ làm để tuân thủ nó.',
          '📌 Bài tập về nhà: tìm/nghĩ 1 ví dụ AI trong đời sống - nó tuân thủ tốt nguyên tắc nào? có nguy cơ vi phạm nguyên tắc nào? Viết 5 câu giải thích vì sao "công bằng" và "tôn trọng quyền riêng tư" lại quan trọng với AI.'
        ],
        activity: {
          title: 'Bài tập vận dụng: 6 nguyên tắc đạo đức AI trong đời sống',
          duration: 'Chia sẻ nhanh tại lớp + hoàn thiện ở nhà',
          instructions: [
            '1. Tìm/nghĩ 1 ví dụ AI trong đời sống. Nó tuân thủ tốt nguyên tắc nào? Có nguy cơ vi phạm nguyên tắc nào?',
            '2. Viết 5 câu giải thích vì sao "công bằng" và "tôn trọng quyền riêng tư" lại quan trọng với AI.'
          ],
          tips: 'Chọn ví dụ gần gũi: mạng xã hội, app điện thoại, phần mềm học tập có AI.',
          hint: 'Xem lại bảng 6 nguyên tắc và ví dụ vi phạm tương ứng đã học.',
          suggestedAnswer: 'Câu trả lời tuỳ ví dụ học sinh chọn, cần nêu rõ nguyên tắc được tuân thủ tốt, nguyên tắc có nguy cơ vi phạm, và giải thích hợp lí về tầm quan trọng của công bằng và quyền riêng tư.'
        },
        speakerNotes: 'GV chốt bài, dặn dò Tiết 5 sẽ học về trách nhiệm công dân trong xã hội AI và cách phân loại mức độ rủi ro khi dùng AI.'
      },
      {
        id: 'l4_s5', title: 'Tổng Kết Buổi 2', visualType: 'summary',
        content: [
          '✅ Các em đã đạt được: hiểu khái niệm trách nhiệm giải trình và bộ tiêu chí kiểm tra; nêu và giải thích được 6 nguyên tắc đạo đức khi thiết kế AI; ghép được tình huống vi phạm với nguyên tắc và đề xuất cách sửa.',
          '🧠 Ghi nhớ: 6 nguyên tắc AN TOÀN - CÔNG BẰNG - MINH BẠCH - TÔN TRỌNG QUYỀN RIÊNG TƯ - TRÁCH NHIỆM - LỢI ÍCH XÃ HỘI.',
          '➡️ Buổi tiếp theo (Tiết 5-6): Trách nhiệm công dân & rủi ro khi dùng AI - Quyền, trách nhiệm và góp ý chính sách AI.'
        ],
        visualUrl: svgVisual('Hoàn Thành Buổi 2', 'Sẵn sàng cho Buổi 3: Trách nhiệm công dân số & chính sách AI', '#4c1d95', '#7c3aed', '🏁'),
        speakerNotes: 'Chốt lại kiến thức trọng tâm buổi học (trách nhiệm giải trình, 6 nguyên tắc đạo đức), kết nối sang chủ đề trách nhiệm công dân số ở buổi tiếp theo.'
      }
    ]
  }
];
