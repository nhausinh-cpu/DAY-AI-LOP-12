import { Lesson } from '../types';
import { svgVisual } from './visual';

// BUỔI 6 - TIẾT 11-12
// Chuyên đề 4 (Tiết 11) + Chuyên đề 5 (Tiết 12): Thực hành xây dựng sản phẩm AI - Dự án AI & tổng kết
// Yêu cầu cần đạt: 12.D2.1 phần 2 (Tiết 11); Vận dụng tổng hợp 4 mạch A+B+C+D (Tiết 12)
export const module6: Lesson[] = [
  {
    period: 11,
    title: 'Bắt Tay Xây Dựng Sản Phẩm AI (Hợp Tác)',
    description: 'Thực hành sự hợp tác nhiều vai trò để tạo ra bản đầu tiên của một sản phẩm AI đơn giản theo kế hoạch đã xây dựng, tuân thủ kỉ luật số.',
    objectives: [
      '12.D2.1 (phần 2): Thực hành sự hợp tác nhiều vai trò để tạo ra một sản phẩm AI đơn giản theo kế hoạch đã xây dựng.',
      'Vận dụng quy trình đã học để tạo bản đầu tiên của một sản phẩm AI đơn giản; thu thập dữ liệu, huấn luyện, thử nghiệm mô hình theo vai trò.',
      'Ghi lại nguồn dữ liệu và câu lệnh đã dùng (kỉ luật số); phối hợp nhóm, phát hiện và ghi lại lỗi cần sửa.'
    ],
    slides: [
      {
        id: 'l11_s1', title: 'Chuyên Đề Giáo Dục AI - Lớp 12', visualType: 'title',
        content: [
          '📘 Tiết 11: Bắt tay xây dựng sản phẩm AI (hợp tác) - tiết thực hành.',
          '🎯 Học xong tiết này, các em sẽ: dựng được bản đầu tiên của sản phẩm AI theo vai trò đã phân công; ghi lại nguồn dữ liệu, câu lệnh và kết quả thử theo đúng kỉ luật số.',
          '🏫 Trường THPT Tân Lược - Chuyên đề 4: Thiết kế & phát triển hệ thống AI'
        ],
        visualUrl: svgVisual('Bắt Tay Xây Dựng Sản Phẩm AI', 'Thực hành hợp tác theo vai trò đã phân công', '#4338ca', '#0ea5e9', '🛠️'),
        speakerNotes: 'Giới thiệu đây là tiết thực hành - các nhóm sẽ bắt tay dựng bản đầu của sản phẩm AI theo phương án và phân công vai trò đã có từ Tiết 9-10.'
      },
      {
        id: 'l11_s2', title: 'Khởi Động: Chốt Mục Tiêu Buổi Thực Hành', visualType: 'intro',
        content: [
          '🗣️ Hôm nay mỗi nhóm bắt tay dựng BẢN ĐẦU của sản phẩm theo phương án và phân công đã có.',
          '🎯 Mục tiêu: cuối tiết sản phẩm chạy được ở mức cơ bản - chưa cần hoàn hảo.',
          '✋ Học sinh kiểm tra lại phân công vai trò + nguyên liệu (dữ liệu, ý tưởng) đã chuẩn bị.'
        ],
        visualUrl: svgVisual('Mục Tiêu: Ra Bản Đầu Sản Phẩm', 'Chạy được ở mức cơ bản - hoàn thiện ở Tiết 12', '#3730a3', '#0891b2', '🎯'),
        speakerNotes: 'Nhắc lại mục tiêu tiết học: ra bản đầu chạy được ở mức cơ bản. Sản phẩm sẽ hoàn thiện & trình bày ở Tiết 12. Kiểm tra nhanh phân công vai trò và nguyên liệu của từng nhóm.'
      },
      {
        id: 'l11_s3', title: 'Quy Trình Dựng Bản Đầu Sản Phẩm', visualType: 'diagram',
        content: [
          '1️⃣ Thu thập & chuẩn bị dữ liệu → 2️⃣ Huấn luyện mô hình → 3️⃣ Kết nối/hoàn thiện → 4️⃣ Thử nghiệm & ghi lỗi.',
          '👥 Mỗi vai trò (Tiết 10) đảm nhận phần của mình và phối hợp: người huấn luyện thu thập & nạp dữ liệu, huấn luyện mô hình; người lập trình kết nối/hoàn thiện; cả nhóm phối hợp.',
          '💡 Kỉ luật số (bắt buộc): ghi lại NGUỒN dữ liệu, CÂU LỆNH (prompt) đã dùng và KẾT QUẢ thử - để kiểm chứng và khai báo trung thực.'
        ],
        diagramData: {
          nodes: [
            { id: 'q1', label: '1. Thu thập & chuẩn bị dữ liệu', x: 12, y: 25, color: '#4338ca' },
            { id: 'q2', label: '2. Huấn luyện mô hình', x: 38, y: 12, color: '#4f46e5' },
            { id: 'q3', label: '3. Kết nối / hoàn thiện', x: 65, y: 25, color: '#0891b2' },
            { id: 'q4', label: '4. Thử nghiệm & ghi lỗi', x: 45, y: 55, color: '#0d9488' }
          ],
          links: [
            { source: 'q1', target: 'q2' },
            { source: 'q2', target: 'q3' },
            { source: 'q3', target: 'q4' },
            { source: 'q4', target: 'q1', label: 'ghi chú để cải tiến' }
          ]
        },
        speakerNotes: 'GV đi từng nhóm hỗ trợ trong 25 phút thực hành, nhắc kỉ luật số: học sinh phải ghi lại nguồn dữ liệu, câu lệnh/thao tác chính và kết quả thử để đảm bảo trung thực, kiểm chứng được.'
      },
      {
        id: 'l11_s4', title: 'Thực Hành: Dựng Bản Đầu Sản Phẩm AI Của Nhóm', visualType: 'activity',
        content: [
          '🛠️ Các nhóm làm theo vai trò: người huấn luyện thu thập & nạp dữ liệu, huấn luyện mô hình; người lập trình kết nối/hoàn thiện; cả nhóm phối hợp.',
          '✅ Sản phẩm: Bản sản phẩm AI phiên bản đầu tiên (chạy được ở mức cơ bản).'
        ],
        activity: {
          title: 'Thực hành nhóm: Dựng bản đầu sản phẩm AI',
          duration: '25 phút thực hành trên lớp (phòng máy hoặc mô phỏng trên giấy nếu thiếu máy)',
          instructions: [
            'Người huấn luyện: thu thập, nạp dữ liệu và huấn luyện mô hình bằng công cụ đã chọn ở Tiết 7.',
            'Người lập trình/cấu hình: kết nối các thành phần, hoàn thiện sản phẩm theo phương án đã chọn ở Tiết 9.',
            'Cả nhóm phối hợp, hỗ trợ lẫn nhau theo bảng phân công vai trò (Tiết 10).',
            'Ghi lại đầy đủ vào Phiếu theo dõi số 11: nguồn dữ liệu đã dùng, câu lệnh/thao tác chính, lỗi/điểm cần sửa.'
          ],
          tips: 'Không cần hoàn hảo - mục tiêu là có bản chạy được ở mức cơ bản để tiếp tục hoàn thiện.',
          hint: 'Nếu thiếu máy, có thể luân phiên dùng máy hoặc làm sản phẩm dạng mô phỏng trên giấy kèm 1 lần chạy thử.',
          suggestedAnswer: 'Sản phẩm là bản đầu tiên của mô hình/ứng dụng AI, có thể còn lỗi, kèm theo Phiếu theo dõi ghi rõ nguồn dữ liệu, thao tác chính đã thực hiện.'
        },
        speakerNotes: 'GV đi từng nhóm hỗ trợ, nhắc kỉ luật số. Nhóm yếu có thể dùng sản phẩm mẫu tối giản để bám theo; nhóm khá khuyến khích thêm tính năng.'
      },
      {
        id: 'l11_s5', title: 'Luyện Tập: Tự Thử Và Ghi Lỗi', visualType: 'interactive',
        content: [
          '🔍 Nhóm thử sản phẩm của mình, ghi lại các lỗi/điểm cần sửa (dùng cách đánh giá đã học ở Tiết 8: dữ liệu mới, độ chính xác, loại lỗi).'
        ],
        interactiveQuiz: {
          question: 'Sau khi dựng bản đầu sản phẩm AI, nhóm nên làm gì trước khi chuyển sang bước lập kế hoạch hoàn thiện?',
          options: [
            'Bỏ qua bước kiểm thử, chuyển thẳng sang trình bày ở Tiết 12',
            'Tự thử sản phẩm với vài trường hợp mới, ghi lại lỗi/điểm cần sửa như cách đánh giá đã học ở Tiết 8',
            'Xoá bỏ sản phẩm và làm lại từ đầu nếu có 1 lỗi nhỏ',
            'Chỉ cần hỏi ý kiến giáo viên mà không tự kiểm thử'
          ],
          answerIndex: 1,
          explanation: 'Trước khi lập kế hoạch hoàn thiện, nhóm cần tự thử sản phẩm và ghi lại lỗi/điểm cần sửa - áp dụng đúng cách đánh giá hiệu quả hệ thống AI đã học ở Tiết 8.',
          hint: 'Liên hệ lại bài học Tiết 8: đánh giá AI = thử với dữ liệu mới → xem AI sai ở đâu → đề xuất cải thiện.',
          suggestedAnswer: 'Nhóm cần tự thử sản phẩm, ghi lại lỗi cụ thể, từ đó mới lập được kế hoạch hoàn thiện hợp lí cho Tiết 12.'
        },
        speakerNotes: 'Học sinh vận dụng lại kĩ năng đánh giá hiệu quả hệ thống AI đã học ở Tiết 8 để tự kiểm thử sản phẩm của nhóm mình.'
      },
      {
        id: 'l11_s6', title: 'Vận Dụng: Lập Kế Hoạch Hoàn Thiện Sản Phẩm', visualType: 'activity',
        content: [
          '🗣️ Nhóm lập kế hoạch: còn thiếu gì, ai làm, chuẩn bị gì để TRÌNH BÀY ở Tiết 12.',
          '📌 Bài tập về nhà: hoàn thiện phần việc theo vai trò; chuẩn bị nội dung trình bày của mình cho Tiết 12; viết phần "Khai báo sử dụng AI" cho sản phẩm.'
        ],
        activity: {
          title: 'Bài tập vận dụng: Kế hoạch hoàn thiện & khai báo sử dụng AI',
          duration: 'Lập kế hoạch tại lớp + hoàn thiện ở nhà',
          instructions: [
            '1. Hoàn thiện phần việc theo vai trò; chuẩn bị nội dung trình bày của mình cho Tiết 12.',
            '2. Viết phần "Khai báo sử dụng AI" cho sản phẩm: đã dùng công cụ gì, AI hỗ trợ phần nào, nhóm tự làm phần nào.'
          ],
          tips: 'Khai báo trung thực không làm giảm điểm - đây là minh chứng cho phẩm chất trung thực theo Khung giáo dục AI.',
          hint: 'Dùng Phiếu theo dõi số 11 đã ghi trong tiết để viết phần khai báo sử dụng AI đầy đủ, chính xác.',
          suggestedAnswer: 'Kế hoạch cần nêu rõ: phần còn thiếu, ai phụ trách, thời hạn hoàn thành; phần khai báo sử dụng AI cần trung thực và cụ thể.'
        },
        speakerNotes: 'GV chốt bài, dặn dò chuẩn bị trình bày ở Tiết 12 - tiết cuối cùng của chuyên đề, gồm trình bày sản phẩm, đánh giá chéo và tổng kết.'
      }
    ]
  },
  {
    period: 12,
    title: 'Dự Án AI & Tổng Kết Chuyên Đề',
    description: 'Hoàn thiện, trình bày và đánh giá chéo một sản phẩm/dự án AI đơn giản thể hiện đủ 4 mạch năng lực; khai báo trung thực việc sử dụng AI và tự nhìn lại quá trình học tập.',
    objectives: [
      'Vận dụng tổng hợp: hoàn thiện, trình bày và đánh giá được một sản phẩm/dự án AI đơn giản thể hiện đủ 4 mạch năng lực; khai báo trung thực việc sử dụng AI.',
      'Trình bày được sản phẩm AI của nhóm: vấn đề, cách làm, kết quả, hạn chế; hệ thống hoá được các nội dung đã học của cả chuyên đề.',
      'Thuyết trình, đánh giá chéo theo tiêu chí (rubric), tự nhìn lại quá trình học và định hướng bản thân.'
    ],
    slides: [
      {
        id: 'l12_s1', title: 'Khởi Động: Luật Trình Bày & Chấm Chéo', visualType: 'intro',
        content: [
          '📘 Tiết 12: Dự án AI & tổng kết - tiết cuối của chuyên đề, chốt lại toàn bộ 4 mạch năng lực đã học.',
          '🗣️ Mỗi nhóm trình bày 4-5 phút theo 5 phần, có phần khai báo dùng AI.',
          '📋 Các nhóm khác chấm theo rubric và ghi 1 điểm khen + 1 điểm góp ý.'
        ],
        visualUrl: svgVisual('Dự Án AI & Tổng Kết', 'Trình bày sản phẩm - Đánh giá chéo - Tổng kết chuyên đề', '#4338ca', '#9333ea', '🎤'),
        speakerNotes: 'Nêu rõ luật chơi: mỗi nhóm trình bày 4-5 phút theo 5 phần (vấn đề & mục tiêu; cách làm; kết quả & đánh giá; con người kiểm soát & đạo đức; khai báo dùng AI), các nhóm khác chấm theo rubric.'
      },
      {
        id: 'l12_s2', title: 'Trình Bày Sản Phẩm: Dàn Ý 5 Phần', visualType: 'concepts',
        content: [
          '1️⃣ Vấn đề & mục tiêu - giải quyết chuyện gì? (mạch D - thiết kế hệ thống AI)',
          '2️⃣ Cách làm - dùng công cụ gì, dữ liệu gì, huấn luyện ra sao? (mạch C - kĩ thuật & ứng dụng AI)',
          '3️⃣ Kết quả & đánh giá - độ chính xác, chỗ còn sai (mạch C)',
          '4️⃣ Con người kiểm soát ở đâu + vấn đề đạo đức đã lưu ý (mạch A, B - con người làm chủ AI, đạo đức & pháp luật)',
          '5️⃣ Khai báo dùng AI - phần AI hỗ trợ, phần nhóm tự làm, cách kiểm chứng.'
        ],
        visualUrl: svgVisual('Dàn Ý Trình Bày 5 Phần', 'Vấn đề - Cách làm - Kết quả - Con người kiểm soát - Khai báo AI', '#3730a3', '#7c3aed', '📋'),
        speakerNotes: 'Lần lượt các nhóm trình bày theo dàn ý 5 phần + demo sản phẩm. GV điều phối thời gian (khoảng 4-5 phút/nhóm), đảm bảo mỗi nhóm đều thể hiện đủ 4 mạch năng lực đã học.'
      },
      {
        id: 'l12_s3', title: 'Luyện Tập: Đánh Giá Chéo Theo Rubric', visualType: 'interactive',
        content: [
          '📏 Rubric đánh giá dự án gồm 4 mức: Xác định vấn đề (D), Kĩ thuật & công cụ (C), Con người kiểm soát (A), Đạo đức & trách nhiệm (B), Hợp tác & trình bày.',
          '🔄 Các nhóm chấm chéo theo rubric; nêu 1 điểm khen + 1 điểm góp ý cho nhóm bạn.',
          '📌 Nguyên tắc chấm: chỉ nhận xét + mức độ đạt, KHÔNG lấy điểm số làm chính; khai báo dùng AI là minh chứng trung thực, KHÔNG dùng để tăng/giảm điểm.'
        ],
        interactiveQuiz: {
          question: 'Theo nguyên tắc chấm dự án AI cuối chuyên đề (Quyết định 2422/QĐ-BGDĐT), việc khai báo trung thực đã dùng AI hỗ trợ một phần sản phẩm sẽ được xử lí như thế nào?',
          options: [
            'Bị trừ điểm vì đã dùng AI thay vì tự làm hoàn toàn',
            'Không dùng để tăng/giảm điểm - đây là minh chứng cho sự trung thực, được đánh giá bằng nhận xét',
            'Được cộng thêm điểm vì biết sử dụng công nghệ hiện đại',
            'Không cần khai báo vì không ảnh hưởng đến kết quả'
          ],
          answerIndex: 1,
          explanation: 'Theo nguyên tắc chấm dự án, khai báo dùng AI là minh chứng trung thực của học sinh, KHÔNG được dùng để tăng hay giảm điểm số - việc đánh giá chuyên đề chủ yếu bằng nhận xét, không lấy điểm số làm chính.',
          hint: 'Nhớ nguyên tắc: chỉ nhận xét + mức độ đạt, không lấy điểm số làm chính; khai báo AI là minh chứng trung thực.',
          suggestedAnswer: 'Khai báo dùng AI không ảnh hưởng đến việc tăng/giảm điểm - đây là minh chứng cho phẩm chất trung thực của học sinh, được ghi nhận bằng nhận xét.'
        },
        speakerNotes: 'Các nhóm chấm chéo theo rubric 5 tiêu chí, nêu điểm khen và điểm góp ý mang tính xây dựng, không chê bai. GV tổng hợp nhận xét chung cho cả lớp.'
      },
      {
        id: 'l12_s4', title: 'Vận Dụng: Nhìn Lại & Định Hướng', visualType: 'activity',
        content: [
          '🗣️ Sau khi học AI lớp 12, em thấy mình có thể làm gì với AI? Nghề nghiệp nào liên quan đến AI khiến em hứng thú?',
          '✍️ Viết 3 dòng; vài em chia sẻ.',
          '📌 Tổng kết: viết đoạn 5-7 câu tự đánh giá em đã tiến bộ gì về AI trong năm học; nêu 1 dự định em muốn làm với AI trong tương lai (học tập/nghề nghiệp).'
        ],
        activity: {
          title: 'Bài tập tổng kết: Nhìn lại & định hướng bản thân với AI',
          duration: 'Viết 3 dòng tại lớp + hoàn thiện đoạn tổng kết ở nhà',
          instructions: [
            '1. Viết đoạn 5-7 câu tự đánh giá: em đã tiến bộ gì về AI trong năm học?',
            '2. Nêu 1 dự định em muốn làm với AI trong tương lai (học tập/nghề nghiệp).'
          ],
          tips: 'Nhìn lại toàn bộ 12 tiết đã học: từ quyền kiểm soát con người, đạo đức AI, công cụ tạo AI, đến thiết kế và dự án sản phẩm.',
          hint: 'Có thể liên hệ tới 4 mạch năng lực: A (con người làm chủ AI), B (đạo đức & pháp luật), C (công cụ & kĩ thuật), D (thiết kế hệ thống AI).',
          suggestedAnswer: 'Câu trả lời mang tính cá nhân, không có đáp án cố định - quan trọng là sự trung thực và tự nhận thức về sự tiến bộ cũng như định hướng của mỗi học sinh.'
        },
        speakerNotes: 'GV tổng kết cả chuyên đề, nhấn mạnh thông điệp: CON NGƯỜI LÀM CHỦ AI - dùng AI có đạo đức, có trách nhiệm, vì cộng đồng.'
      },
      {
        id: 'l12_s5', title: 'Rubric Đánh Giá Chung Dự Án AI', visualType: 'concepts',
        content: [
          '📏 Rubric 4 mức cho từng tiêu chí: Xác định vấn đề (D): Mơ hồ → Nêu được → Rõ, thực tế → Rõ, gắn cộng đồng.',
          '🛠️ Kĩ thuật & công cụ (C): Chưa dựng được → Còn lỗi nhiều → Chạy cơ bản → Chạy tốt, đánh giá được.',
          '🧑‍💼 Con người kiểm soát (A): Không đề cập → Chung chung → Chỉ rõ 1-2 chỗ → Phân tích rõ.',
          '⚖️ Đạo đức & trách nhiệm (B): Bỏ qua → Nhắc sơ → Nêu rủi ro → Lưu ý + khai báo AI đủ.',
          'ℹ️ Lưu ý: theo Khung giáo dục AI, không tổ chức kiểm tra định kì, không lập đầu điểm riêng - chỉ đánh giá bằng nhận xét dựa trên minh chứng thu thập qua các buổi học.'
        ],
        visualUrl: svgVisual('Rubric Đánh Giá Dự Án AI', '4 mức - 5 tiêu chí - Đủ 4 mạch năng lực A, B, C, D', '#164e63', '#0e7490', '📏'),
        speakerNotes: 'Giải thích rõ cách đánh giá của chuyên đề để học sinh và phụ huynh hiểu: đánh giá bằng nhận xét, không phải bằng điểm số, dựa trên minh chứng thu thập xuyên suốt 12 tiết học và thể hiện đủ 4 mạch năng lực A, B, C, D.'
      },
      {
        id: 'l12_s6', title: 'Tổng Kết Toàn Bộ Chuyên Đề', visualType: 'summary',
        content: [
          '🎉 Hoàn thành 12 tiết (6 buổi) Chuyên đề Giáo dục Trí tuệ nhân tạo (AI) - Lớp 12!',
          '✅ Các em đã đạt được: phân tích quyền kiểm soát và trách nhiệm của con người trong hệ thống AI; hiểu 6 nguyên tắc đạo đức và trách nhiệm công dân số; làm quen công cụ tạo AI và cách đánh giá hiệu quả; thiết kế, hợp tác xây dựng và trình bày được một sản phẩm/dự án AI đơn giản.',
          '🏆 Thông điệp cốt lõi xuyên suốt chuyên đề: CON NGƯỜI LÀM CHỦ AI - dùng AI có đạo đức, có trách nhiệm, vì cộng đồng.',
          '📌 GV tổng hợp toàn bộ minh chứng (phiếu học tập, sản phẩm, phiếu đánh giá chéo) để hoàn thành đánh giá, nhận xét trước khi kết thúc Học kỳ I.'
        ],
        visualUrl: `${import.meta.env.BASE_URL}trophy-tot-nghiep.png`,
        visualLabel: 'Vinh danh học sinh hoàn thành chuyên đề AI Lớp 12',
        speakerNotes: 'Chúc mừng học sinh đã hoàn thành toàn bộ chuyên đề. Nhắc lại mạch kiến thức xuyên suốt 4 mạch năng lực: A - Con người làm chủ AI (Tiết 1-3) → B - Đạo đức & pháp luật khi dùng/tạo AI (Tiết 4-6) → C - Công cụ & kĩ thuật làm AI (Tiết 7-8) → D - Thiết kế, phát triển và dự án hệ thống AI (Tiết 9-12). Nhấn mạnh thông điệp "Con người làm chủ AI" xuyên suốt toàn chuyên đề.'
      }
    ]
  }
];
