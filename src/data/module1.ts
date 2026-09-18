import { Lesson } from '../types';
import { svgVisual } from './visual';

// BUỔI 1 - TIẾT 1-2
// Chủ đề: CON NGƯỜI TRONG HỆ THỐNG AI - QUYỀN KIỂM SOÁT CỦA CON NGƯỜI TRONG DỰ ÁN AI
// Yêu cầu cần đạt: 12.A1.1; 12.A1.MR1; 12.A1.2; 12.A1.3
export const module1: Lesson[] = [
  {
    period: 1,
    title: 'Con Người Trong Hệ Thống AI - Quyền Kiểm Soát (Phần 1)',
    description: 'Phân tích vòng đời hệ thống AI và các bước con người cần giữ quyền kiểm soát, trách nhiệm.',
    objectives: [
      'Phân tích một hệ thống AI để chỉ ra quyền kiểm soát và trách nhiệm của con người trong các bước quan trọng của vòng đời AI.',
      'Phân tích vai trò của con người và AI trong các bước chính của một quá trình ra quyết định cụ thể.',
      'Đối chiếu việc thực hiện trách nhiệm giải trình của con người với quy định pháp luật hiện hành.'
    ],
    slides: [
      {
        id: 'l1_s1', title: 'Chuyên Đề Giáo Dục AI - Lớp 12', visualType: 'title',
        content: [
          '📘 Tiết 1-2: Con người trong hệ thống AI - Quyền kiểm soát của con người trong dự án AI',
          '🎯 Học xong buổi này, các em sẽ: phân tích được quyền kiểm soát và trách nhiệm của con người trong vòng đời một hệ thống AI; xác định được vai trò của con người và AI trong quá trình ra quyết định; kiểm tra được trách nhiệm giải trình khi đối chiếu với quy định hiện hành.',
          '🏫 Trường THPT Tân Lược - Tổ Toán - Tin'
        ],
        visualUrl: svgVisual('Quyền Kiểm Soát Của Con Người Trong AI', 'Chuyên đề Giáo dục AI - Lớp 12 - Buổi 1', '#4338ca', '#0ea5e9', '🕹️'),
        speakerNotes: 'Giới thiệu chuyên đề, nêu rõ đây là buổi đầu tiên trong 6 buổi (12 tiết) của Chuyên đề Giáo dục AI lớp 12, tập trung vào quyền kiểm soát và trách nhiệm của con người.'
      },
      {
        id: 'l1_s2', title: 'Khởi Động: Ai Chịu Trách Nhiệm?', visualType: 'intro',
        content: [
          '💭 Tình huống: Một hệ thống AI xét duyệt hồ sơ vay vốn từ chối một khách hàng đủ điều kiện. Khách hàng khiếu nại.',
          '❓ Câu hỏi: "Theo em, ai là người phải chịu trách nhiệm giải quyết khiếu nại này?"',
          '⏱️ Suy nghĩ cá nhân 2 phút, sau đó chia sẻ trước lớp.',
          '💡 Đáp án có thể đa dạng: AI, lập trình viên, ngân hàng, không ai cả... - GV chưa chốt đáp án, dẫn dắt vào bài mới.'
        ],
        visualUrl: svgVisual('Ai Chịu Trách Nhiệm Khi AI Sai?', 'Tình huống: hệ thống AI từ chối hồ sơ vay vốn oan', '#0f766e', '#0891b2', '❓'),
        answerHint: 'Chưa có đáp án đúng/sai ở bước này - đây là hoạt động khơi gợi tư duy ban đầu.',
        speakerNotes: 'GV trình chiếu tình huống thực tế, mời 3-4 học sinh chia sẻ nhanh ý kiến ban đầu mà chưa chốt đáp án, nhằm tạo hứng thú dẫn vào chủ đề quyền kiểm soát của con người trong hệ thống AI.'
      },
      {
        id: 'l1_s3', title: 'Vòng Đời Hệ Thống AI', visualType: 'diagram',
        content: [
          '🔄 Một hệ thống AI trải qua 7 bước chính trong vòng đời của nó.',
          '⚠️ Ở mỗi bước, con người cần xác định rõ: mình có quyền kiểm soát trực tiếp hay không?',
          '📌 Các bước con người BẮT BUỘC phải trực tiếp quyết định: xác định vấn đề, triển khai, giám sát - xử lí sự cố.',
          '🧭 Ví dụ minh hoạ: hệ thống AI xét duyệt vay vốn, chấm điểm tự động, xe tự lái, chẩn đoán y tế bằng AI.'
        ],
        diagramData: {
          nodes: [
            { id: 'n1', label: '1. Xác định vấn đề', x: 10, y: 20, color: '#4338ca' },
            { id: 'n2', label: '2. Thu thập dữ liệu', x: 30, y: 10, color: '#4f46e5' },
            { id: 'n3', label: '3. Thiết kế', x: 50, y: 20, color: '#6366f1' },
            { id: 'n4', label: '4. Thử nghiệm', x: 65, y: 40, color: '#7c3aed' },
            { id: 'n5', label: '5. Triển khai', x: 80, y: 60, color: '#0891b2' },
            { id: 'n6', label: '6. Giám sát - Xử lí sự cố', x: 55, y: 75, color: '#0d9488' },
            { id: 'n7', label: '7. Kết thúc sử dụng', x: 25, y: 65, color: '#059669' }
          ],
          links: [
            { source: 'n1', target: 'n2' },
            { source: 'n2', target: 'n3' },
            { source: 'n3', target: 'n4' },
            { source: 'n4', target: 'n5' },
            { source: 'n5', target: 'n6', label: 'Con người giám sát' },
            { source: 'n6', target: 'n7' }
          ]
        },
        speakerNotes: 'Giải thích từng bước của vòng đời hệ thống AI, nhấn mạnh các bước con người bắt buộc giữ quyền kiểm soát trực tiếp: xác định vấn đề, triển khai, giám sát và xử lí sự cố. Cho học sinh hoàn thành Phiếu học tập số 1 song song.'
      },
      {
        id: 'l1_s4', title: 'Vai Trò Con Người Và AI Trong Ra Quyết Định', visualType: 'comparison',
        content: [
          '⚖️ Xét tình huống: hệ thống AI xét duyệt hồ sơ vay vốn.',
          '🤖 AI: phân tích dữ liệu, tính điểm tín dụng, đề xuất kết quả nhanh chóng dựa trên số liệu.',
          '🧑‍💼 Con người: xem xét bối cảnh, kiểm tra tính công bằng, ra quyết định cuối cùng và chịu trách nhiệm giải trình.',
          '📜 Trách nhiệm giải trình cần đối chiếu với quy định pháp luật hiện hành (Luật Trí tuệ nhân tạo, Luật Bảo vệ dữ liệu cá nhân).'
        ],
        comparisonData: {
          leftTitle: '🤖 Vai trò của AI',
          leftItems: [
            'Phân tích dữ liệu hồ sơ nhanh chóng',
            'Tính điểm tín dụng theo mô hình đã huấn luyện',
            'Đề xuất kết quả (duyệt/từ chối) dựa trên xác suất',
            'Không có khả năng "giải thích đạo đức" cho quyết định của mình'
          ],
          rightTitle: '🧑‍💼 Vai trò của con người',
          rightItems: [
            'Kiểm tra, đối chiếu kết quả AI đề xuất với thực tế',
            'Xem xét các yếu tố công bằng, hoàn cảnh đặc biệt',
            'Ra quyết định cuối cùng, đặc biệt với trường hợp bị từ chối',
            'Chịu trách nhiệm giải trình trước pháp luật và khách hàng'
          ]
        },
        speakerNotes: 'Nhấn mạnh: AI chỉ hỗ trợ, con người luôn là chủ thể ra quyết định cuối cùng và chịu trách nhiệm giải trình theo quy định pháp luật hiện hành.'
      },
      {
        id: 'l1_s5', title: 'Luyện Tập: Phân Tích Tình Huống Mới', visualType: 'interactive',
        content: [
          '📝 Tình huống mới: hệ thống AI chấm điểm bài thi tự động.',
          '👥 Làm việc theo cặp đôi trong 8 phút, áp dụng mẫu vòng đời AI vừa học.',
          '🎯 Mục tiêu: củng cố kĩ năng phân tích quyền kiểm soát của con người và vai trò của con người - AI trong quá trình ra quyết định.'
        ],
        interactiveQuiz: {
          question: 'Ở bước nào trong vòng đời AI, con người BẮT BUỘC phải trực tiếp kiểm tra lại kết quả chấm điểm tự động trước khi công bố cho học sinh?',
          options: [
            'Chỉ cần AI công bố kết quả ngay, không cần ai kiểm tra lại',
            'Bước triển khai và giám sát - xử lí sự cố (con người rà soát trước khi công bố)',
            'Chỉ cần kiểm tra ở bước thu thập dữ liệu ban đầu',
            'Không bước nào cần con người kiểm tra vì AI luôn chính xác'
          ],
          answerIndex: 1,
          explanation: 'Ở bước triển khai và giám sát, con người phải rà soát kết quả AI đưa ra trước khi chính thức công bố, để kịp thời phát hiện và xử lí sai sót.',
          hint: 'Nhớ lại 3 bước con người bắt buộc trực tiếp quyết định: xác định vấn đề, triển khai, giám sát - xử lí sự cố.',
          suggestedAnswer: 'Con người cần rà soát ở bước triển khai và giám sát trước khi công bố kết quả chính thức cho học sinh.'
        },
        speakerNotes: 'Cho các cặp đôi thảo luận, mời 2-3 cặp trình bày nhanh, GV nhận xét và chốt lại các điểm cần lưu ý.'
      },
      {
        id: 'l1_s6', title: 'Vận Dụng: AI Tại Trường Em', visualType: 'activity',
        content: [
          '🏫 Tìm hiểu một ứng dụng AI đang được sử dụng tại trường hoặc địa phương em.',
          '📸 Ví dụ: hệ thống điểm danh khuôn mặt, phần mềm quản lý học tập có AI...',
          '✍️ Chỉ ra ai giữ quyền kiểm soát và ai chịu trách nhiệm trong ứng dụng đó.'
        ],
        activity: {
          title: 'Bài viết ngắn: Ứng dụng AI tại trường/địa phương',
          duration: 'Thực hiện ở nhà, nộp vào buổi học sau',
          instructions: [
            'Chọn một ứng dụng AI đang được sử dụng tại trường hoặc địa phương em (điểm danh khuôn mặt, phần mềm quản lý học tập có AI, v.v.)',
            'Mô tả ngắn gọn cách ứng dụng đó hoạt động.',
            'Chỉ ra: ai giữ quyền kiểm soát? Ai chịu trách nhiệm nếu có sự cố?',
            'Viết bài khoảng nửa trang giấy.'
          ],
          tips: 'Liên hệ với vòng đời AI và bảng vai trò con người - AI đã học ở slide trước để phân tích cho chính xác.',
          hint: 'Hãy nghĩ đến các bước: ai quyết định triển khai hệ thống, ai giám sát vận hành hằng ngày.',
          suggestedAnswer: 'Câu trả lời phụ thuộc vào ứng dụng cụ thể học sinh chọn, cần nêu rõ vai trò kiểm soát và trách nhiệm của từng bên liên quan (nhà trường, giáo viên, đơn vị cung cấp phần mềm).'
        },
        speakerNotes: 'GV giao nhiệm vụ cuối tiết, học sinh thực hiện ở nhà, GV thu và nhận xét (không chấm điểm riêng) vào buổi học sau.'
      }
    ]
  },
  {
    period: 2,
    title: 'Con Người Trong Hệ Thống AI - Quyền Kiểm Soát (Phần 2)',
    description: 'Củng cố và vận dụng kiến thức về quyền kiểm soát, trách nhiệm giải trình của con người trong hệ thống AI.',
    objectives: [
      'Củng cố khả năng phân tích vòng đời AI qua tình huống mới.',
      'Vận dụng kiến thức vào bối cảnh thực tế tại trường học, địa phương.',
      'Rèn năng lực giải quyết vấn đề và giao tiếp - hợp tác qua thảo luận nhóm.'
    ],
    slides: [
      {
        id: 'l2_s1', title: 'Ôn Lại: Quyền Kiểm Soát Của Con Người', visualType: 'intro',
        content: [
          '🔁 Nhắc lại nhanh: 7 bước trong vòng đời hệ thống AI.',
          '🎯 Bước nào con người BẮT BUỘC phải trực tiếp quyết định?',
          '💬 Mời 2-3 học sinh nhắc lại nội dung Phiếu học tập số 1 đã hoàn thành ở Tiết 1.'
        ],
        visualUrl: svgVisual('Ôn Tập Nhanh', 'Vòng đời AI và trách nhiệm giải trình', '#1e3a8a', '#4338ca', '🔁'),
        speakerNotes: 'Dành 5 phút đầu giờ ôn lại kiến thức Tiết 1 trước khi chuyển sang phần luyện tập và vận dụng sâu hơn.'
      },
      {
        id: 'l2_s2', title: 'Phân Tích: Hệ Thống AI Chấm Điểm Tự Động', visualType: 'concepts',
        content: [
          '📋 Tình huống luyện tập: hệ thống AI chấm điểm bài thi tự động cho một kỳ thi lớn.',
          '🔍 Phân tích theo mẫu vòng đời AI: từ xác định vấn đề (chấm điểm nhanh, chính xác) đến giám sát kết quả.',
          '👥 Làm việc cặp đôi, hoàn thành bảng phân tích ngắn trong 8 phút.',
          '📣 2-3 cặp trình bày, GV nhận xét và chốt lại các điểm cần lưu ý.'
        ],
        visualUrl: svgVisual('Phân Tích Tình Huống Mới', 'Hệ thống AI chấm điểm bài thi tự động', '#0369a1', '#0891b2', '📋'),
        speakerNotes: 'Đây là hoạt động Luyện tập trong KHBD - củng cố kĩ năng phân tích quyền kiểm soát và vai trò con người - AI trong ra quyết định, qua một tình huống mới khác với ví dụ vay vốn đã học.'
      },
      {
        id: 'l2_s3', title: 'Trách Nhiệm Giải Trình Theo Pháp Luật', visualType: 'concepts',
        content: [
          '⚖️ Khi hệ thống AI gây ra sai sót, cần đối chiếu với quy định pháp luật hiện hành trong nước và quốc tế.',
          '📚 Ví dụ: Luật Trí tuệ nhân tạo, Luật Bảo vệ dữ liệu cá nhân.',
          '🧑‍⚖️ Trách nhiệm giải trình KHÔNG thuộc về bản thân hệ thống AI, mà thuộc về con người/tổ chức triển khai, giám sát hệ thống đó.',
          '✅ Đây chính là kĩ năng kiểm tra trách nhiệm giải trình của con người, đối chiếu với quy định hiện hành.'
        ],
        visualUrl: svgVisual('Trách Nhiệm Giải Trình', 'Đối chiếu quy định pháp luật hiện hành', '#7c2d12', '#c2410c', '⚖️'),
        speakerNotes: 'Nhấn mạnh học sinh cần phân biệt: AI là công cụ hỗ trợ, trách nhiệm pháp lý luôn thuộc về con người/tổ chức vận hành hệ thống.'
      },
      {
        id: 'l2_s4', title: 'Luyện Tập Nhanh: Đúng Hay Sai?', visualType: 'interactive',
        content: [
          '✅❌ Xác định tính đúng/sai của nhận định về quyền kiểm soát của con người trong vòng đời AI.',
          '💬 Thảo luận nhanh cả lớp sau khi mỗi học sinh chọn đáp án.'
        ],
        interactiveQuiz: {
          question: 'Nhận định: "Sau khi triển khai, hệ thống AI có thể hoạt động hoàn toàn độc lập mà không cần con người giám sát." Nhận định này ĐÚNG hay SAI?',
          options: [
            'Đúng, vì AI luôn hoạt động chính xác tuyệt đối',
            'Sai, con người vẫn phải giám sát và xử lí sự cố sau khi triển khai',
            'Đúng, chỉ cần giám sát trong 1 tuần đầu rồi thôi',
            'Không xác định được'
          ],
          answerIndex: 1,
          explanation: 'Giám sát - xử lí sự cố là một bước quan trọng, bắt buộc trong vòng đời AI mà con người phải trực tiếp thực hiện liên tục, không chỉ trong giai đoạn đầu.',
          hint: 'Nhớ lại 7 bước vòng đời AI đã học ở Tiết 1.',
          suggestedAnswer: 'Sai - con người phải giám sát liên tục trong suốt quá trình vận hành hệ thống AI.'
        },
        speakerNotes: 'Hoạt động củng cố nhanh, có thể dùng hình thức giơ tay biểu quyết trước khi xem đáp án trên slide.'
      },
      {
        id: 'l2_s5', title: 'Vận Dụng: Hoàn Thiện Bài Viết Về AI Tại Trường', visualType: 'activity',
        content: [
          '📝 Tiếp tục hoàn thiện bài viết ngắn về ứng dụng AI tại trường/địa phương đã giao ở Tiết 1.',
          '🔎 Rà soát lại: đã chỉ rõ ai giữ quyền kiểm soát, ai chịu trách nhiệm hay chưa?',
          '📤 Nộp bài viết vào buổi học sau (Tiết 3-4) để GV nhận xét.'
        ],
        activity: {
          title: 'Hoàn thiện bài viết vận dụng',
          duration: '5-7 phút cuối giờ + hoàn thiện ở nhà',
          instructions: [
            'Xem lại bài viết đã bắt đầu ở Tiết 1.',
            'Bổ sung phần phân tích quyền kiểm soát và trách nhiệm cho đầy đủ, rõ ràng.',
            'Chuẩn bị nộp bài vào đầu buổi học sau.'
          ],
          tips: 'Bài viết không cần dài, quan trọng là chỉ rõ được vai trò kiểm soát và trách nhiệm của các bên liên quan.',
          hint: 'Có thể tham khảo lại bảng so sánh vai trò AI - con người đã học.',
          suggestedAnswer: 'Bài viết cần nêu cụ thể: tên ứng dụng AI, cách hoạt động, ai kiểm soát, ai chịu trách nhiệm khi có sự cố.'
        },
        speakerNotes: 'Kết thúc buổi 1 (Tiết 1-2). GV thu và nhận xét (không chấm điểm riêng) vào buổi tiếp theo, lưu làm minh chứng đánh giá năng lực NLa.'
      },
      {
        id: 'l2_s6', title: 'Tổng Kết Buổi 1', visualType: 'summary',
        content: [
          '✅ Các em đã đạt được: phân tích quyền kiểm soát và trách nhiệm của con người trong vòng đời AI; vận dụng phân tích đó vào một dự án AI cụ thể; phân tích vai trò con người - AI trong ra quyết định; kiểm tra trách nhiệm giải trình theo quy định hiện hành.',
          '🧠 Ghi nhớ: con người luôn giữ quyền kiểm soát và chịu trách nhiệm giải trình trong vòng đời hệ thống AI.',
          '➡️ Buổi tiếp theo (Tiết 3-4): Nguyên tắc đạo đức khi thiết kế AI - Trách nhiệm công dân trong xã hội có AI.'
        ],
        visualUrl: svgVisual('Hoàn Thành Buổi 1', 'Sẵn sàng cho Buổi 2: Nguyên tắc đạo đức AI', '#065f46', '#0d9488', '🏁'),
        speakerNotes: 'Chốt lại kiến thức trọng tâm của buổi học, kết nối với chủ đề buổi tiếp theo để tạo mạch logic cho học sinh.'
      }
    ]
  }
];
