import { Lesson } from '../types';
import { svgVisual } from './visual';

// BUỔI 3 - TIẾT 5-6
// Chủ đề: VẤN ĐỀ ĐẠO ĐỨC CỦA AI - MỨC ĐỘ RỦI RO - TRÁCH NHIỆM TRONG HỆ SINH THÁI AI
// Yêu cầu cần đạt: 12.B1.MR1; 12.B2.1; 12.B3.1
export const module3: Lesson[] = [
  {
    period: 5,
    title: 'Vấn Đề Đạo Đức Và Mức Độ Rủi Ro Của AI (Phần 1)',
    description: 'Phân tích nguyên nhân sai lệch đạo đức của hệ thống AI và cách phân loại mức độ rủi ro.',
    objectives: [
      'Phân tích nguyên nhân dẫn đến các vấn đề đạo đức hoặc sai lệch trong hoạt động của hệ thống AI.',
      'Xác định mức độ rủi ro khi sử dụng AI có thể dẫn đến vi phạm quy định nhà trường hoặc pháp luật.',
      'Trình bày quyền và trách nhiệm của các bên trong hệ sinh thái AI.'
    ],
    slides: [
      {
        id: 'l5_s1', title: 'Vấn Đề Đạo Đức Và Rủi Ro Của AI', visualType: 'title',
        content: [
          '📘 Tiết 5-6: Vấn đề đạo đức của AI - Mức độ rủi ro - Trách nhiệm trong hệ sinh thái AI',
          '🎯 Học xong buổi này, các em sẽ: phân tích được nguyên nhân gây ra vấn đề đạo đức hoặc sai lệch của hệ thống AI; xác định được mức độ rủi ro khi dùng AI có thể vi phạm quy định; trình bày được quyền và trách nhiệm của người phát triển, người sử dụng AI.',
          '📅 Tuần thực hiện: 5/10 - 10/10/2026'
        ],
        visualUrl: svgVisual('Rủi Ro & Đạo Đức Của Hệ Thống AI', 'Nguyên nhân sai lệch - Phân loại rủi ro - Hệ sinh thái AI', '#b91c1c', '#ea580c', '⚠️'),
        speakerNotes: 'Giới thiệu buổi 3, trọng tâm là hiểu nguyên nhân sai lệch của AI, phân loại mức độ rủi ro và trách nhiệm các bên trong hệ sinh thái AI.'
      },
      {
        id: 'l5_s2', title: 'Khởi Động: Vì Sao Có Sự Chênh Lệch?', visualType: 'intro',
        content: [
          '📊 Case study: một hệ thống nhận diện khuôn mặt có tỉ lệ nhận diện sai cao hơn với một số nhóm người dùng.',
          '❓ Câu hỏi: "Vì sao lại có sự chênh lệch độ chính xác này?"',
          '💭 Học sinh suy nghĩ cá nhân 2 phút, 3-4 học sinh nêu dự đoán.'
        ],
        visualUrl: svgVisual('Vì Sao AI Nhận Diện Sai?', 'Case study: nhận diện khuôn mặt kém chính xác với một số nhóm', '#7c2d12', '#b91c1c', '📊'),
        answerHint: 'Gợi ý: có thể do dữ liệu huấn luyện chưa đại diện đầy đủ cho các nhóm người dùng khác nhau.',
        speakerNotes: 'Dẫn dắt vào nội dung nguyên nhân sai lệch đạo đức của AI - chủ yếu xuất phát từ dữ liệu huấn luyện thiếu đa dạng, cân bằng.'
      },
      {
        id: 'l5_s3', title: 'Nguyên Nhân Sai Lệch Của Hệ Thống AI', visualType: 'diagram',
        content: [
          '📉 Thiên lệch dữ liệu: dữ liệu huấn luyện không đại diện đầy đủ cho các nhóm đối tượng.',
          '🛠️ Thiên lệch thiết kế: thuật toán/mô hình được thiết kế chưa tính đến các trường hợp đặc biệt.',
          '🌐 Bối cảnh sử dụng: hệ thống được dùng sai mục đích hoặc sai môi trường so với lúc huấn luyện.'
        ],
        diagramData: {
          nodes: [
            { id: 'd1', label: 'Thiên lệch dữ liệu', x: 20, y: 30, color: '#dc2626' },
            { id: 'd2', label: 'Thiên lệch thiết kế', x: 50, y: 15, color: '#ea580c' },
            { id: 'd3', label: 'Bối cảnh sử dụng sai', x: 80, y: 30, color: '#d97706' },
            { id: 'd4', label: 'Hệ thống AI sai lệch / thiếu đạo đức', x: 50, y: 70, color: '#7c2d12' }
          ],
          links: [
            { source: 'd1', target: 'd4' },
            { source: 'd2', target: 'd4' },
            { source: 'd3', target: 'd4' }
          ]
        },
        speakerNotes: 'Giải thích 3 nhóm nguyên nhân chính dẫn đến vấn đề đạo đức/sai lệch của hệ thống AI.'
      },
      {
        id: 'l5_s4', title: 'Phân Loại Rủi Ro Và Hệ Sinh Thái AI', visualType: 'concepts',
        content: [
          '🗂️ Phân loại rủi ro: rủi ro dữ liệu, rủi ro thuật toán, rủi ro lừa đảo/giả mạo.',
          '🧩 Hệ sinh thái AI gồm: người phát triển, nhà cung cấp, người sử dụng, cơ quan quản lí.',
          '📄 Mỗi bên có quyền và trách nhiệm riêng, kể cả vai trò góp ý xây dựng chính sách, quy định về AI.',
          '📋 Sản phẩm: Phiếu học tập số 3 - sơ đồ nguyên nhân, bảng phân loại rủi ro, sơ đồ quyền - trách nhiệm.'
        ],
        visualUrl: svgVisual('Hệ Sinh Thái AI', 'Người phát triển - Nhà cung cấp - Người sử dụng - Cơ quan quản lí', '#9a3412', '#c2410c', '🧩'),
        speakerNotes: 'Hướng dẫn học sinh hoàn thành Phiếu học tập số 3, giải thích rõ 3 nhóm rủi ro và vai trò từng bên trong hệ sinh thái AI.'
      },
      {
        id: 'l5_s5', title: 'Luyện Tập: Xếp Loại Mức Độ Rủi Ro', visualType: 'interactive',
        content: [
          '📊 4 tình huống sử dụng AI trong học tập - xác định mức độ rủi ro (thấp/trung bình/cao).',
          '👥 Làm việc cặp đôi 8 phút, giải thích ngắn cho lựa chọn của mình.'
        ],
        interactiveQuiz: {
          question: 'Một học sinh dùng AI để tóm tắt nội dung một bài báo khoa học rồi tự đọc, ghi chú lại bằng lời văn của mình. Đây thuộc mức độ rủi ro nào?',
          options: [
            'Rủi ro cao - vi phạm liêm chính học thuật',
            'Rủi ro thấp - AI chỉ hỗ trợ, học sinh vẫn tự xử lý và ghi chú lại',
            'Rủi ro trung bình vì chưa xin phép giáo viên',
            'Không thể xác định được mức độ rủi ro'
          ],
          answerIndex: 1,
          explanation: 'Dùng AI để hỗ trợ tóm tắt rồi tự đọc, tự ghi chú lại là cách sử dụng AI có trách nhiệm, thuộc mức độ rủi ro thấp vì học sinh vẫn chủ động tư duy.',
          hint: 'So sánh với hành vi sao chép nguyên văn sản phẩm AI - đó mới là rủi ro cao.',
          suggestedAnswer: 'Rủi ro thấp vì học sinh chỉ dùng AI hỗ trợ, không thay thế hoàn toàn quá trình tư duy của mình.'
        },
        speakerNotes: 'Củng cố kĩ năng xác định mức độ rủi ro AI - giúp học sinh phân biệt rõ ràng giữa sử dụng AI hỗ trợ hợp lý và lạm dụng AI có rủi ro cao.'
      },
      {
        id: 'l5_s6', title: 'Vận Dụng: Góp Ý Quy Tắc Sử Dụng AI', visualType: 'activity',
        content: [
          '📝 Đề xuất 1-2 ý kiến góp ý cho "Quy tắc sử dụng AI trong nhà trường".',
          '📤 Bản góp ý sẽ được GV tổng hợp gửi bộ phận phụ trách xây dựng Quy tắc sử dụng AI của trường.'
        ],
        activity: {
          title: 'Góp ý xây dựng Quy tắc sử dụng AI trong nhà trường',
          duration: 'Hoàn thành và nộp cuối tiết',
          instructions: [
            'Đọc lại các nội dung về rủi ro và trách nhiệm đã học trong buổi.',
            'Đề xuất 1-2 ý kiến góp ý cụ thể cho việc xây dựng quy tắc sử dụng AI tại trường.',
            'Nộp bản góp ý ngắn (cá nhân hoặc nhóm).'
          ],
          tips: 'Ý kiến góp ý nên thiết thực, ví dụ: quy định rõ việc trích dẫn khi dùng AI hỗ trợ làm bài, hoặc quy định về bảo mật dữ liệu học sinh khi dùng phần mềm AI.',
          hint: 'Liên hệ vai trò "cá nhân góp ý xây dựng chính sách AI" đã học ở phần hệ sinh thái AI.',
          suggestedAnswer: 'Ví dụ góp ý: cần quy định rõ việc học sinh phải ghi chú khi bài làm có sự hỗ trợ của AI; cần tập huấn giáo viên về nhận diện rủi ro khi ứng dụng AI trong dạy học.'
        },
        speakerNotes: 'GV tổng hợp gửi bộ phận phụ trách xây dựng Quy tắc sử dụng AI của trường - đây cũng là minh chứng cho năng lực NLb, vai trò công dân góp ý chính sách.'
      }
    ]
  },
  {
    period: 6,
    title: 'Trách Nhiệm Trong Hệ Sinh Thái AI (Phần 2)',
    description: 'Củng cố phân loại rủi ro AI và trách nhiệm của các bên trong hệ sinh thái AI.',
    objectives: [
      'Củng cố khả năng xác định mức độ rủi ro khi sử dụng AI.',
      'Trình bày quyền và trách nhiệm của người phát triển, người sử dụng AI.',
      'Rèn năng lực phân tích, đánh giá thông tin và hợp tác nhóm.'
    ],
    slides: [
      {
        id: 'l6_s1', title: 'Ôn Lại: Nguyên Nhân Sai Lệch & Rủi Ro AI', visualType: 'intro',
        content: [
          '🔁 Nhắc lại 3 nguyên nhân sai lệch AI: thiên lệch dữ liệu, thiết kế, bối cảnh sử dụng.',
          '🗂️ Nhắc lại 3 nhóm rủi ro: dữ liệu, thuật toán, lừa đảo/giả mạo.',
          '💬 1-2 nhóm chia sẻ lại kết quả Phiếu học tập số 3 đã hoàn thành ở Tiết 5.'
        ],
        visualUrl: svgVisual('Ôn Tập Nhanh', 'Nguyên nhân sai lệch & phân loại rủi ro AI', '#7c2d12', '#c2410c', '🔁'),
        speakerNotes: 'Ôn lại nhanh kiến thức Tiết 5 trước khi đi sâu vào quyền và trách nhiệm của các bên trong hệ sinh thái AI.'
      },
      {
        id: 'l6_s2', title: 'Quyền Và Trách Nhiệm Trong Hệ Sinh Thái AI', visualType: 'comparison',
        content: [
          '🧑‍💻 Người phát triển: đảm bảo chất lượng, an toàn, đạo đức của sản phẩm AI trước khi phát hành.',
          '🏢 Nhà cung cấp: minh bạch thông tin, hỗ trợ khắc phục sự cố cho người dùng.',
          '👤 Người sử dụng: dùng đúng mục đích, có trách nhiệm, báo cáo khi phát hiện sai sót.',
          '🏛️ Cơ quan quản lí: ban hành quy định, giám sát việc tuân thủ pháp luật về AI.'
        ],
        comparisonData: {
          leftTitle: '⚙️ Bên phát triển & cung cấp',
          leftItems: [
            'Kiểm tra chất lượng, an toàn trước khi phát hành',
            'Công khai minh bạch cách hệ thống hoạt động',
            'Hỗ trợ khắc phục sự cố kịp thời',
            'Chịu trách nhiệm về lỗi kỹ thuật, thiết kế'
          ],
          rightTitle: '👥 Bên sử dụng & quản lí',
          rightItems: [
            'Sử dụng đúng mục đích, có trách nhiệm',
            'Báo cáo khi phát hiện sai sót, rủi ro',
            'Góp ý xây dựng chính sách, quy định về AI',
            'Giám sát, ban hành quy định pháp luật phù hợp'
          ]
        },
        speakerNotes: 'Trình bày đầy đủ quyền và trách nhiệm của từng bên trong hệ sinh thái AI.'
      },
      {
        id: 'l6_s3', title: 'Case Study: Ứng Dụng Điểm Danh Bằng Khuôn Mặt', visualType: 'concepts',
        content: [
          '📷 Ví dụ cụ thể: ứng dụng điểm danh học sinh bằng nhận diện khuôn mặt tại trường.',
          '❓ Nêu quyền và trách nhiệm của: nhà trường (người triển khai), công ty cung cấp phần mềm, học sinh/phụ huynh (người sử dụng/bị ảnh hưởng).',
          '🔒 Lưu ý đặc biệt về bảo vệ dữ liệu sinh trắc học của học sinh.'
        ],
        visualUrl: svgVisual('Case Study: Điểm Danh Khuôn Mặt', 'Quyền và trách nhiệm của từng bên liên quan', '#9a3412', '#ea580c', '📷'),
        speakerNotes: 'Đây là nội dung Câu 2 của Phiếu học tập số 3 - vận dụng phân tích quyền, trách nhiệm cho một sản phẩm AI cụ thể, gần gũi với môi trường học đường.'
      },
      {
        id: 'l6_s4', title: 'Luyện Tập: Rủi Ro Cao Hay Thấp?', visualType: 'interactive',
        content: [
          '⚖️ Xác định mức độ rủi ro cho tình huống sử dụng dữ liệu điểm danh khuôn mặt.'
        ],
        interactiveQuiz: {
          question: 'Một phần mềm điểm danh bằng khuôn mặt lưu trữ dữ liệu sinh trắc học của học sinh mà không có biện pháp bảo mật rõ ràng. Mức độ rủi ro của tình huống này là gì?',
          options: [
            'Thấp, vì chỉ dùng để điểm danh',
            'Cao, vì dữ liệu sinh trắc học là dữ liệu cá nhân nhạy cảm cần được bảo mật chặt chẽ',
            'Không có rủi ro vì đây là công nghệ hiện đại',
            'Trung bình, không cần quan tâm thêm'
          ],
          answerIndex: 1,
          explanation: 'Dữ liệu sinh trắc học (khuôn mặt) là dữ liệu cá nhân nhạy cảm; nếu không được bảo mật chặt chẽ, rủi ro rò rỉ, lạm dụng dữ liệu là rất cao.',
          hint: 'Nghĩ đến nguyên tắc Tôn trọng quyền riêng tư đã học ở Buổi 2.',
          suggestedAnswer: 'Rủi ro cao vì liên quan đến dữ liệu cá nhân nhạy cảm của học sinh.'
        },
        speakerNotes: 'Kết nối kiến thức về nguyên tắc đạo đức (Buổi 2) với phân loại rủi ro (Buổi 3) để học sinh thấy được tính hệ thống của chuyên đề.'
      },
      {
        id: 'l6_s5', title: 'Vận Dụng: Hoàn Thiện Bản Góp Ý', visualType: 'activity',
        content: [
          '📝 Hoàn thiện bản góp ý cho "Quy tắc sử dụng AI trong nhà trường" đã bắt đầu ở Tiết 5.',
          '📤 Nộp bản góp ý hoàn chỉnh để GV tổng hợp gửi bộ phận phụ trách.'
        ],
        activity: {
          title: 'Hoàn thiện bản góp ý quy tắc sử dụng AI',
          duration: 'Cuối tiết học',
          instructions: [
            'Xem lại ý kiến góp ý đã viết ở Tiết 5.',
            'Bổ sung thêm ý kiến dựa trên kiến thức về quyền - trách nhiệm các bên vừa học.',
            'Nộp bản góp ý hoàn chỉnh.'
          ],
          tips: 'Có thể góp ý theo từng vai trò: học sinh, giáo viên, nhà trường nên làm gì để sử dụng AI an toàn, có trách nhiệm.',
          hint: 'Liên hệ với case study điểm danh khuôn mặt vừa phân tích.',
          suggestedAnswer: 'Bản góp ý hoàn chỉnh nên có ít nhất 2 ý kiến cụ thể, thiết thực, liên quan đến bảo mật dữ liệu và trách nhiệm sử dụng AI trong trường học.'
        },
        speakerNotes: 'GV tổng hợp toàn bộ ý kiến gửi bộ phận phụ trách xây dựng Quy tắc sử dụng AI của trường, dùng làm minh chứng đánh giá năng lực NLb.'
      },
      {
        id: 'l6_s6', title: 'Tổng Kết Buổi 3', visualType: 'summary',
        content: [
          '✅ Các em đã đạt được: phân tích nguyên nhân gây sai lệch, vấn đề đạo đức của hệ thống AI; xác định mức độ rủi ro khi dùng AI; trình bày quyền và trách nhiệm của người phát triển, người sử dụng AI.',
          '🧠 Ghi nhớ: nguyên nhân sai lệch AI, phân loại rủi ro, quyền - trách nhiệm trong hệ sinh thái AI.',
          '➡️ Buổi tiếp theo (Tiết 7-8): thực hành với công cụ thiết kế AI mã nguồn mở - Teachable Machine.'
        ],
        visualUrl: svgVisual('Hoàn Thành Buổi 3', 'Sẵn sàng cho Buổi 4: Thực hành công cụ AI', '#065f46', '#0d9488', '🏁'),
        speakerNotes: 'Chốt kiến thức trọng tâm buổi 3, chuyển tiếp sang phần thực hành công cụ AI ở buổi 4 - học sinh sẽ được làm quen với phòng máy và Teachable Machine.'
      }
    ]
  }
];
