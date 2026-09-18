import { Lesson } from '../types';
import { svgVisual } from './visual';

// BUỔI 5 - TIẾT 9-10
// Chuyên đề 4: Thiết kế & phát triển hệ thống AI - Mạch D: Thiết kế hệ thống AI
// Yêu cầu cần đạt: 12.D1.1 (Tiết 9); 12.D2.1 phần 1 (Tiết 10)
export const module5: Lesson[] = [
  {
    period: 9,
    title: 'Phương Án Thiết Kế & Vận Hành Hệ Thống AI',
    description: 'Nêu được 5 thành phần cơ bản của một hệ thống AI, mối liên hệ giữa chúng và các tiêu chí để so sánh, chọn phương án thiết kế phù hợp.',
    objectives: [
      '12.D1.1: Nhận biết được một số phương án thiết kế và vận hành hệ thống AI phù hợp để đạt hiệu quả cao trong một số nhiệm vụ cụ thể.',
      'Nêu được 5 thành phần cơ bản của một hệ thống AI và mối liên hệ giữa chúng; biết một nhiệm vụ có thể có nhiều phương án thiết kế và tiêu chí để chọn.',
      'Đề xuất 2 phương án cho 1 bài toán và so sánh, chọn phương án phù hợp cho dự án nhóm.'
    ],
    slides: [
      {
        id: 'l9_s1', title: 'Khởi Động: Một Bài Toán, Nhiều Cách Làm', visualType: 'intro',
        content: [
          '📘 Tiết 9: Phương án thiết kế & vận hành hệ thống AI.',
          '❓ Muốn làm một AI phân loại rác tái chế, theo các em có mấy cách làm? Cách nào tốt hơn?',
          '💬 Học sinh nêu ý kiến trước khi vào bài mới.'
        ],
        visualUrl: svgVisual('Thiết Kế Hệ Thống AI', '5 thành phần cơ bản của một hệ thống AI', '#312e81', '#4338ca', '🧩'),
        speakerNotes: 'Đặt vấn đề: cùng một nhiệm vụ (phân loại rác) có thể có nhiều cách làm khác nhau, dẫn vào khái niệm 5 thành phần hệ thống AI và tiêu chí chọn phương án.'
      },
      {
        id: 'l9_s2', title: '5 Thành Phần Cơ Bản Của Một Hệ Thống AI', visualType: 'diagram',
        content: [
          '🔄 5 thành phần: Dữ liệu → Thuật toán (huấn luyện) → Mô hình → Đầu ra → Phản hồi (để cải tiến).',
          '🔁 Các thành phần liên kết thành một vòng: phản hồi giúp cải tiến dữ liệu & mô hình.',
          '📌 Với cùng một nhiệm vụ, có thể có NHIỀU phương án thiết kế (khác dữ liệu, khác công cụ).'
        ],
        diagramData: {
          nodes: [
            { id: 'p1', label: '1. Dữ liệu', x: 12, y: 30, color: '#4338ca' },
            { id: 'p2', label: '2. Thuật toán (huấn luyện)', x: 32, y: 12, color: '#4f46e5' },
            { id: 'p3', label: '3. Mô hình', x: 55, y: 20, color: '#6366f1' },
            { id: 'p4', label: '4. Đầu ra', x: 78, y: 40, color: '#7c3aed' },
            { id: 'p5', label: '5. Phản hồi (cải tiến)', x: 45, y: 65, color: '#0891b2' }
          ],
          links: [
            { source: 'p1', target: 'p2' },
            { source: 'p2', target: 'p3' },
            { source: 'p3', target: 'p4' },
            { source: 'p4', target: 'p5', label: 'đánh giá kết quả' },
            { source: 'p5', target: 'p1', label: 'cải tiến dữ liệu' }
          ]
        },
        speakerNotes: 'Trình bày sơ đồ 5 thành phần, so sánh 2 phương án cho bài toán phân loại rác (dùng ẢNH chụp rác vs dùng CẢM BIẾN); nêu ưu-nhược theo tiêu chí. Nhấn mạnh: không có phương án "đúng tuyệt đối" - ta chọn phương án PHÙ HỢP nhất với mục tiêu, điều kiện và đạo đức.'
      },
      {
        id: 'l9_s3', title: 'Tiêu Chí Chọn Phương Án Thiết Kế', visualType: 'concepts',
        content: [
          '🎯 Độ chính xác: phương án nào cho kết quả đúng hơn?',
          '💰 Chi phí: phương án nào tốn ít thời gian/thiết bị hơn?',
          '🛠️ Dễ thực hiện: học sinh/nhóm có làm được không?',
          '🔒 An toàn & đạo đức: có thu thập dữ liệu nhạy cảm không? Có rủi ro gì?',
          '🌍 Thực tế: có giải quyết đúng vấn đề đời thực không?'
        ],
        visualUrl: svgVisual('Tiêu Chí Chọn Phương Án', 'Độ chính xác - Chi phí - Dễ thực hiện - An toàn - Thực tế', '#1e1b4b', '#4338ca', '✅'),
        speakerNotes: 'Giải thích rõ 5 tiêu chí, đây sẽ là căn cứ để các nhóm so sánh và lựa chọn phương án thiết kế cho dự án của mình ở hoạt động luyện tập.'
      },
      {
        id: 'l9_s4', title: 'Luyện Tập Nhóm: Thiết Kế Phương Án Cho Dự Án', visualType: 'interactive',
        content: [
          '📐 Nhóm lấy ý tưởng đã chốt (Tiết 7) → đề xuất 2 phương án thiết kế (vẽ sơ đồ 5 thành phần) → so sánh và CHỌN 1, ghi lí do.',
          '✅ Sản phẩm: Sơ đồ phương án đã chọn (5 thành phần) + lí do chọn (Phiếu học tập số 9).'
        ],
        interactiveQuiz: {
          question: 'Nhóm đề xuất 2 phương án cho dự án phân loại rác: (A) dùng ảnh chụp qua Teachable Machine, (B) dùng cảm biến điện tử phức tạp cần lập trình chuyên sâu. Với điều kiện của nhóm học sinh phổ thông, tiêu chí nào giúp quyết định chọn phương án A?',
          options: [
            'Chỉ cần dựa vào tiêu chí "thực tế" mà bỏ qua các tiêu chí khác',
            'Kết hợp các tiêu chí "dễ thực hiện" và "chi phí" - phương án A phù hợp hơn với năng lực và điều kiện của nhóm',
            'Luôn chọn phương án phức tạp hơn vì trông chuyên nghiệp hơn',
            'Không cần so sánh, chọn ngẫu nhiên phương án nào cũng được'
          ],
          answerIndex: 1,
          explanation: 'Tiêu chí "dễ thực hiện" (nhóm học sinh có làm được không) và "chi phí" (tốn ít thời gian/thiết bị hơn) là căn cứ quan trọng để chọn phương án phù hợp với năng lực thực tế của nhóm.',
          hint: 'Nhớ lại 5 tiêu chí: độ chính xác, chi phí, dễ thực hiện, an toàn & đạo đức, thực tế.',
          suggestedAnswer: 'Nên chọn phương án A (Teachable Machine) vì dễ thực hiện hơn, chi phí thấp hơn, phù hợp với điều kiện và năng lực của nhóm học sinh.'
        },
        speakerNotes: 'Không yêu cầu học sinh lập trình thật ở tiết này - trọng tâm là TƯ DUY THIẾT KẾ. Học sinh khá có thể so sánh nhiều hơn 2 phương án.'
      },
      {
        id: 'l9_s5', title: 'Vận Dụng: Lường Trước Vấn Đề Khi Vận Hành', visualType: 'activity',
        content: [
          '🗣️ Nhóm dự đoán 1 vấn đề có thể xảy ra khi vận hành phương án đã chọn và nêu cách khắc phục.',
          '📌 Bài tập về nhà: vẽ sơ đồ 5 thành phần cho 1 hệ thống AI em biết (ví dụ trợ lí ảo); nêu 2 phương án cho 1 nhiệm vụ và chọn 1, giải thích.'
        ],
        activity: {
          title: 'Bài tập vận dụng: Sơ đồ 5 thành phần và so sánh phương án',
          duration: 'Dự đoán tại lớp + vẽ sơ đồ ở nhà',
          instructions: [
            '1. Vẽ sơ đồ 5 thành phần cho 1 hệ thống AI em biết (ví dụ trợ lí ảo).',
            '2. Nêu 2 phương án cho 1 nhiệm vụ và chọn 1, giải thích lí do.'
          ],
          tips: 'Có thể chọn lại chính ý tưởng dự án của nhóm để luyện tập thêm.',
          hint: 'Nhớ 5 thành phần: Dữ liệu → Thuật toán → Mô hình → Đầu ra → Phản hồi.',
          suggestedAnswer: 'Sơ đồ cần thể hiện đủ 5 thành phần với nội dung cụ thể cho hệ thống AI được chọn, và phần so sánh 2 phương án cần dựa trên các tiêu chí đã học.'
        },
        speakerNotes: 'GV chốt bài, dặn dò Tiết 10 sẽ học về các vai trò khác nhau trong nhóm phát triển sản phẩm AI, chuẩn bị phân vai cho dự án.'
      }
    ]
  },
  {
    period: 10,
    title: 'Các Vai Trò Trong Nhóm Phát Triển AI',
    description: 'Nêu được 4 vai trò chính khi phát triển sản phẩm AI (đề xuất ý tưởng, lập trình, huấn luyện, kiểm thử) và phân công vai trò phù hợp cho dự án nhóm.',
    objectives: [
      '12.D2.1 (phần 1): Nhận biết được các vai trò khác nhau khi phát triển một sản phẩm AI và việc tạo ra sản phẩm AI cần sự hợp tác giữa nhiều người.',
      'Nêu được 4 vai trò chính khi phát triển một sản phẩm AI và việc mỗi vai trò làm; hiểu vì sao làm sản phẩm AI cần hợp tác nhiều chuyên môn.',
      'Phân công được vai trò cho các thành viên trong nhóm dự án.'
    ],
    slides: [
      {
        id: 'l10_s1', title: 'Khởi Động: Một Mình Có Làm Được Một Sản Phẩm AI Không?', visualType: 'intro',
        content: [
          '🔁 Ôn nhanh: nhắc lại 5 thành phần của hệ thống AI và phương án thiết kế nhóm đã chọn ở Tiết 9.',
          '❓ Theo các em, một mình một người có làm được một sản phẩm AI hoàn chỉnh không? Cần những ai tham gia?',
          '💬 Học sinh nêu ý kiến trước khi vào bài mới.'
        ],
        visualUrl: svgVisual('Vai Trò Trong Nhóm Phát Triển AI', 'Ý tưởng - Lập trình - Huấn luyện - Kiểm thử', '#312e81', '#6d28d9', '🤝'),
        speakerNotes: 'Khơi gợi nhận thức: làm sản phẩm AI cần nhiều người với chuyên môn khác nhau, dẫn vào 4 vai trò chính trong phát triển sản phẩm AI.'
      },
      {
        id: 'l10_s2', title: '4 Vai Trò Khi Phát Triển Sản Phẩm AI', visualType: 'concepts',
        content: [
          '💡 Đề xuất ý tưởng: xác định vấn đề, mục tiêu, đối tượng dùng → Sản phẩm: bản mô tả ý tưởng.',
          '💻 Lập trình / cấu hình: dựng hệ thống, kết nối các thành phần bằng công cụ → Sản phẩm: sản phẩm chạy được (bản đầu).',
          '🎓 Huấn luyện: thu thập, chuẩn bị dữ liệu, "dạy" mô hình → Sản phẩm: mô hình đã huấn luyện + bộ dữ liệu.',
          '🧪 Kiểm thử: thử sản phẩm, tìm lỗi, đánh giá, đề xuất sửa → Sản phẩm: báo cáo lỗi + đề xuất cải thiện.',
          '🔑 Ghi nhớ: một sản phẩm AI tốt cần NHIỀU vai trò hợp tác - mỗi vai trò có chuyên môn riêng, phối hợp ăn ý thì sản phẩm mới thành công.'
        ],
        visualUrl: svgVisual('4 Vai Trò Phát Triển Sản Phẩm AI', 'Ý tưởng - Lập trình - Huấn luyện - Kiểm thử', '#3730a3', '#7c3aed', '👥'),
        speakerNotes: 'Giảng 4 vai trò, liên hệ với công việc thật trong một công ty công nghệ (product manager, developer, data scientist, tester) để học sinh liên hệ dễ hơn.'
      },
      {
        id: 'l10_s3', title: 'Luyện Tập Nhóm: Phân Công Vai Trò Cho Dự Án', visualType: 'interactive',
        content: [
          '📋 Nhóm phân công 4 vai trò cho các thành viên cho dự án đã chọn → lập BẢNG PHÂN CÔNG (ai làm gì, sản phẩm cần nộp).',
          '✅ Sản phẩm: Bảng phân công vai trò của nhóm (Phiếu học tập số 10).'
        ],
        interactiveQuiz: {
          question: 'Một nhóm dự án chỉ có 3 thành viên nhưng cần đảm nhận đủ 4 vai trò (đề xuất ý tưởng, lập trình, huấn luyện, kiểm thử). Cách xử lí hợp lí nhất là gì?',
          options: [
            'Bỏ qua 1 vai trò vì không đủ người',
            'Để 1 người kiêm 2 vai trò gần nhau (ví dụ huấn luyện kiêm kiểm thử), miễn là mọi vai trò đều có người phụ trách',
            'Giải tán nhóm vì không đủ điều kiện làm dự án',
            'Chỉ 1 người làm hết cả 4 vai trò, các bạn khác không tham gia'
          ],
          answerIndex: 1,
          explanation: 'Với nhóm ít người, có thể để 1 người kiêm 2 vai trò gần nhau, quan trọng là đảm bảo MỌI vai trò đều có người phụ trách và mọi thành viên đều có việc để làm.',
          hint: 'Nguyên tắc trong KHBD: đảm bảo MỌI học sinh đều có vai trò, không ai đứng ngoài; nhóm ít người có thể 1 người kiêm 2 vai trò.',
          suggestedAnswer: 'Nhóm nên phân công linh hoạt, cho phép 1 thành viên kiêm 2 vai trò liên quan, đảm bảo đủ 4 vai trò được thực hiện và không ai đứng ngoài dự án.'
        },
        speakerNotes: 'Đảm bảo MỌI học sinh đều có vai trò, không ai đứng ngoài. Nhóm ít người có thể 1 người kiêm 2 vai trò.'
      },
      {
        id: 'l10_s4', title: 'Vận Dụng: Nhiệm Vụ Cụ Thể Của Em Ở Tiết Thực Hành', visualType: 'activity',
        content: [
          '🗣️ Mỗi em cho biết mình nhận vai trò gì và 1 việc cụ thể mình sẽ làm ở tiết thực hành sau.',
          '📌 Bài tập về nhà: chuẩn bị phần việc theo vai trò của em cho tiết thực hành (thu thập dữ liệu / ý tưởng giao diện / danh sách thử...); nêu 1 khó khăn có thể gặp khi làm nhóm và cách khắc phục.'
        ],
        activity: {
          title: 'Bài tập vận dụng: Chuẩn bị cho tiết thực hành',
          duration: 'Ghi nhận vai trò tại lớp + chuẩn bị nguyên liệu ở nhà',
          instructions: [
            '1. Chuẩn bị phần việc theo vai trò của em cho tiết thực hành (thu thập dữ liệu / ý tưởng giao diện / danh sách thử...).',
            '2. Nêu 1 khó khăn có thể gặp khi làm nhóm và cách khắc phục.'
          ],
          tips: 'Chuẩn bị kỹ nguyên liệu (ảnh mẫu, dữ liệu, ý tưởng) trước Tiết 11 sẽ giúp tiết thực hành hiệu quả hơn.',
          hint: 'Xem lại bảng phân công vai trò của nhóm vừa lập để biết chính xác việc mình cần chuẩn bị.',
          suggestedAnswer: 'Câu trả lời tuỳ vai trò mỗi học sinh đảm nhận; khó khăn thường gặp là phân bổ thời gian hoặc bất đồng ý tưởng, cách khắc phục là trao đổi, thống nhất trước khi bắt tay thực hành.'
        },
        speakerNotes: 'GV chốt bài, dặn dò Tiết 11 là tiết thực hành - các nhóm sẽ bắt tay xây dựng bản đầu của sản phẩm AI theo vai trò đã phân công.'
      },
      {
        id: 'l10_s5', title: 'Tổng Kết Buổi 5', visualType: 'summary',
        content: [
          '✅ Các em đã đạt được: nêu được 5 thành phần của hệ thống AI và tiêu chí chọn phương án thiết kế; nêu được 4 vai trò trong phát triển sản phẩm AI và phân công vai trò cho dự án nhóm.',
          '🧠 Ghi nhớ: một sản phẩm AI tốt cần thiết kế phù hợp (5 thành phần) và sự hợp tác của nhiều vai trò chuyên môn khác nhau.',
          '➡️ Buổi tiếp theo (Tiết 11-12): Bắt tay xây dựng sản phẩm AI (thực hành hợp tác) - Dự án AI & tổng kết chuyên đề.'
        ],
        visualUrl: svgVisual('Hoàn Thành Buổi 5', 'Sẵn sàng cho Buổi 6: Thực hành và dự án AI', '#3730a3', '#7c3aed', '🏁'),
        speakerNotes: 'Chốt lại kiến thức trọng tâm buổi học (5 thành phần hệ thống AI, 4 vai trò phát triển sản phẩm), kết nối sang buổi thực hành và tổng kết dự án cuối chuyên đề.'
      }
    ]
  }
];
