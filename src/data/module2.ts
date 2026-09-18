import { Lesson } from '../types';
import { svgVisual } from './visual';

// BUỔI 2 - TIẾT 3-4
// Chủ đề: NGUYÊN TẮC ĐẠO ĐỨC KHI THIẾT KẾ AI - TRÁCH NHIỆM CÔNG DÂN TRONG XÃ HỘI CÓ AI
// Yêu cầu cần đạt: 12.A2.1; 12.A2.MR1; 12.A3.1
export const module2: Lesson[] = [
  {
    period: 3,
    title: 'Nguyên Tắc Đạo Đức Khi Thiết Kế AI (Phần 1)',
    description: 'Trình bày các nguyên tắc đạo đức cơ bản khi thiết kế, phát triển sản phẩm AI.',
    objectives: [
      'Trình bày các nguyên tắc đạo đức cơ bản khi thiết kế, phát triển sản phẩm AI: an toàn, công bằng, minh bạch, tôn trọng quyền riêng tư, trách nhiệm, lợi ích xã hội.',
      'Vận dụng các nguyên tắc để soạn thảo bộ nguyên tắc cá nhân cho một dự án AI cụ thể.',
      'Phân tích nội hàm "trách nhiệm công dân trong xã hội có AI".'
    ],
    slides: [
      {
        id: 'l3_s1', title: 'Nguyên Tắc Đạo Đức Khi Thiết Kế AI', visualType: 'title',
        content: [
          '📘 Tiết 3-4: Nguyên tắc đạo đức khi thiết kế AI - Trách nhiệm công dân trong xã hội có AI',
          '🎯 Yêu cầu cần đạt: 12.A2.1 • 12.A2.MR1 • 12.A3.1',
          '📅 Tuần thực hiện: 28/9 - 3/10/2026'
        ],
        visualUrl: svgVisual('Nguyên Tắc Đạo Đức Thiết Kế AI', 'An toàn • Công bằng • Minh bạch • Riêng tư • Trách nhiệm • Lợi ích xã hội', '#7c3aed', '#c026d3', '⚖️'),
        speakerNotes: 'Giới thiệu buổi 2, nhấn mạnh trọng tâm là 6 nguyên tắc đạo đức khi thiết kế AI và trách nhiệm công dân số.'
      },
      {
        id: 'l3_s2', title: 'Khởi Động: Vì Sao AI Có Thể Thiên Vị?', visualType: 'intro',
        content: [
          '📰 Tin tức: một công ty phải ngừng sử dụng hệ thống AI tuyển dụng vì bị phát hiện thiên vị ứng viên nam.',
          '❓ Câu hỏi: "Vì sao một hệ thống AI lại có thể thiên vị?"',
          '💭 Học sinh suy nghĩ cá nhân, ghi nhanh ý kiến, 3-4 học sinh chia sẻ.'
        ],
        visualUrl: svgVisual('Vì Sao AI Thiên Vị?', 'Tình huống: AI tuyển dụng bị phát hiện thiên vị giới tính', '#b91c1c', '#ea580c', '📰'),
        answerHint: 'Gợi ý: dữ liệu huấn luyện không cân bằng, phản ánh định kiến sẵn có trong lịch sử tuyển dụng.',
        speakerNotes: 'Dẫn dắt học sinh nhận ra AI học từ dữ liệu con người cung cấp, nên có thể "học" luôn cả định kiến, thiên vị có trong dữ liệu đó.'
      },
      {
        id: 'l3_s3', title: '6 Nguyên Tắc Đạo Đức Khi Thiết Kế AI', visualType: 'concepts',
        content: [
          '🛡️ An toàn: không gây nguy hiểm cho con người và môi trường.',
          '⚖️ Công bằng: tránh thiên vị, phân biệt đối xử trong dữ liệu và kết quả.',
          '🔍 Minh bạch: công khai cách hoạt động, không che giấu thông tin.',
          '🔒 Tôn trọng quyền riêng tư: không sử dụng, chia sẻ dữ liệu cá nhân trái phép.',
          '✅ Trách nhiệm: kiểm tra, đánh giá và chịu trách nhiệm về sản phẩm tạo ra.',
          '🌍 Lợi ích xã hội: phục vụ con người, cộng đồng và phát triển bền vững.'
        ],
        visualUrl: svgVisual('6 Nguyên Tắc Đạo Đức AI', 'An toàn - Công bằng - Minh bạch - Riêng tư - Trách nhiệm - Lợi ích XH', '#4c1d95', '#7c3aed', '📜'),
        speakerNotes: 'Trình bày đầy đủ 6 nguyên tắc đạo đức theo đúng nội dung yêu cầu cần đạt 12.A2.1. Có thể lấy ví dụ thực tế cho từng nguyên tắc.'
      },
      {
        id: 'l3_s4', title: 'Thực Hành: Bộ Nguyên Tắc Cho Dự Án Giả Định', visualType: 'concepts',
        content: [
          '💡 Dự án giả định: Thiết kế ứng dụng học tiếng Anh có AI.',
          '📝 Nhiệm vụ nhóm: soạn bộ nguyên tắc cá nhân/nhóm cho dự án này, dựa trên 6 nguyên tắc đã học.',
          '🔄 Đối chiếu các quyết định thiết kế (mục tiêu, dữ liệu, tính năng, kiểm thử) với bộ nguyên tắc đó và điều chỉnh khi phát hiện nguy cơ vi phạm.',
          '📄 Sản phẩm: Phiếu học tập số 2 hoàn chỉnh.'
        ],
        visualUrl: svgVisual('Bộ Nguyên Tắc Cá Nhân Cho Dự Án AI', 'Ví dụ: ứng dụng học tiếng Anh có AI', '#6d28d9', '#9333ea', '📄'),
        speakerNotes: 'Hoạt động Hình thành kiến thức - học sinh làm việc nhóm hoàn thành Phiếu học tập số 2, đề xuất hành động cụ thể cho từng nguyên tắc đạo đức áp dụng vào dự án giả định.'
      },
      {
        id: 'l3_s5', title: 'Luyện Tập: Nguyên Tắc Nào Bị Vi Phạm?', visualType: 'interactive',
        content: [
          '🔎 3 tình huống: deepfake, lộ dữ liệu học sinh, AI chấm điểm thiên vị.',
          '📋 Làm việc cá nhân trong 7 phút, ghép tình huống với nguyên tắc bị vi phạm.'
        ],
        interactiveQuiz: {
          question: 'Một trường học để lộ dữ liệu điểm số, thông tin cá nhân của học sinh do phần mềm quản lý học tập AI bị tấn công. Đây là vi phạm nguyên tắc đạo đức nào?',
          options: [
            'Chăm chỉ',
            'Tôn trọng quyền riêng tư',
            'Lợi ích xã hội',
            'Sáng tạo'
          ],
          answerIndex: 1,
          explanation: 'Việc để lộ dữ liệu cá nhân của học sinh vi phạm trực tiếp nguyên tắc Tôn trọng quyền riêng tư - không sử dụng, chia sẻ dữ liệu cá nhân trái phép.',
          hint: 'Nghĩ đến nguyên tắc liên quan trực tiếp đến bảo vệ dữ liệu cá nhân.',
          suggestedAnswer: 'Vi phạm nguyên tắc Tôn trọng quyền riêng tư.'
        },
        speakerNotes: 'GV gọi ngẫu nhiên một số học sinh trả lời, chốt đáp án đúng và giải thích thêm nếu cần cho cả 3 tình huống (deepfake, lộ dữ liệu, AI chấm điểm thiên vị).'
      },
      {
        id: 'l3_s6', title: 'Vận Dụng: Bản Cam Kết Cá Nhân', visualType: 'activity',
        content: [
          '✍️ Viết cam kết cá nhân (5-7 dòng) về việc sử dụng AI có trách nhiệm trong học tập.',
          '📌 Dựa trên 6 nguyên tắc đạo đức đã học trong buổi.'
        ],
        activity: {
          title: 'Bản cam kết sử dụng AI có trách nhiệm',
          duration: 'Tại lớp hoặc mang về nhà hoàn thiện',
          instructions: [
            'Viết 5-7 dòng cam kết cá nhân về việc sử dụng AI có trách nhiệm trong học tập.',
            'Liên hệ ít nhất 2-3 trong số 6 nguyên tắc đạo đức đã học.',
            'Nộp lại làm minh chứng đánh giá quá trình.'
          ],
          tips: 'Cam kết nên cụ thể, ví dụ: "Tôi cam kết luôn kiểm tra lại thông tin do AI cung cấp trước khi sử dụng" (nguyên tắc Trách nhiệm).',
          hint: 'Liên hệ với nội hàm "trách nhiệm công dân trong xã hội có AI": sử dụng AI an toàn, trung thực, có đạo đức.',
          suggestedAnswer: 'Bản cam kết cần thể hiện rõ ý thức trách nhiệm cá nhân khi sử dụng AI, không sao chép nguyên văn, tôn trọng quyền riêng tư của người khác.'
        },
        speakerNotes: 'GV giao nhiệm vụ cuối tiết, thu làm minh chứng đánh giá quá trình cho năng lực NLa.'
      }
    ]
  },
  {
    period: 4,
    title: 'Trách Nhiệm Công Dân Trong Xã Hội Có AI (Phần 2)',
    description: 'Phân tích nội hàm trách nhiệm công dân số và củng cố việc nhận diện vi phạm đạo đức AI.',
    objectives: [
      'Phân tích nội hàm "trách nhiệm công dân trong xã hội có AI": an toàn, trung thực, tôn trọng quyền riêng tư.',
      'Củng cố khả năng nhận diện nguyên tắc đạo đức bị vi phạm qua tình huống thực tế.',
      'Rèn tư duy phản biện qua phân tích case study.'
    ],
    slides: [
      {
        id: 'l4_s1', title: 'Ôn Lại: 6 Nguyên Tắc Đạo Đức AI', visualType: 'intro',
        content: [
          '🔁 Nhắc nhanh 6 nguyên tắc: An toàn - Công bằng - Minh bạch - Riêng tư - Trách nhiệm - Lợi ích xã hội.',
          '💬 Mời 1-2 nhóm chia sẻ bộ nguyên tắc cá nhân đã soạn ở Tiết 3 cho dự án ứng dụng học tiếng Anh có AI.'
        ],
        visualUrl: svgVisual('Ôn Tập Nhanh', '6 nguyên tắc đạo đức khi thiết kế AI', '#5b21b6', '#9333ea', '🔁'),
        speakerNotes: 'Dành thời gian đầu giờ để học sinh nhắc lại kiến thức Tiết 3, tạo cầu nối sang nội dung trách nhiệm công dân số.'
      },
      {
        id: 'l4_s2', title: 'Trách Nhiệm Công Dân Trong Xã Hội Có AI', visualType: 'concepts',
        content: [
          '🧑‍💻 Sử dụng AI một cách an toàn, trung thực và có đạo đức.',
          '🔒 Tôn trọng quyền riêng tư và dữ liệu của người khác.',
          '🚫 Không sử dụng AI để lan truyền thông tin sai lệch, gian lận hay gây hại.',
          '🌐 Đóng góp vào việc xây dựng môi trường số tích cực, công bằng và nhân văn.'
        ],
        visualUrl: svgVisual('Trách Nhiệm Công Dân Số', 'An toàn - Trung thực - Tôn trọng - Tích cực', '#4338ca', '#7c3aed', '🧑‍💻'),
        speakerNotes: 'Trình bày đầy đủ nội hàm trách nhiệm công dân trong xã hội có AI theo yêu cầu cần đạt 12.A3.1.'
      },
      {
        id: 'l4_s3', title: 'Case Study: Deepfake Và Hệ Lụy', visualType: 'concepts',
        content: [
          '🎭 Deepfake: công nghệ AI tạo hình ảnh, video, giọng nói giả mạo giống thật.',
          '⚠️ Hệ lụy: lan truyền tin giả, xâm phạm danh dự, gây hoang mang xã hội.',
          '🧭 Liên hệ: đây là hành vi vi phạm trực tiếp trách nhiệm công dân số (không dùng AI gây hại, không lan truyền thông tin sai lệch).'
        ],
        visualUrl: svgVisual('Deepfake Và Trách Nhiệm Công Dân', 'Không dùng AI để lan truyền thông tin sai lệch', '#991b1b', '#c2410c', '🎭'),
        speakerNotes: 'Phân tích sâu case study deepfake để học sinh hiểu rõ hơn về ranh giới đạo đức khi sử dụng công nghệ AI tạo sinh.'
      },
      {
        id: 'l4_s4', title: 'Luyện Tập: Ghép Tình Huống - Nguyên Tắc', visualType: 'interactive',
        content: [
          '🔗 Ghép 3 tình huống (deepfake, lộ dữ liệu học sinh, AI chấm điểm thiên vị) với nguyên tắc đạo đức tương ứng bị vi phạm.'
        ],
        interactiveQuiz: {
          question: 'Một hệ thống AI chấm điểm bài thi tự động có kết quả thiên lệch, cho điểm cao hơn với bài viết theo một phong cách nhất định. Đây là vi phạm nguyên tắc nào?',
          options: [
            'Công bằng',
            'Chăm chỉ',
            'Sáng tạo',
            'Không vi phạm nguyên tắc nào'
          ],
          answerIndex: 0,
          explanation: 'Kết quả chấm điểm thiên lệch theo phong cách viết là biểu hiện của việc vi phạm nguyên tắc Công bằng - tránh thiên vị, phân biệt đối xử trong kết quả.',
          hint: 'Nguyên tắc liên quan đến việc tránh thiên vị trong kết quả đầu ra của AI.',
          suggestedAnswer: 'Vi phạm nguyên tắc Công bằng.'
        },
        speakerNotes: 'Củng cố yêu cầu cần đạt 12.A2.1 qua hoạt động luyện tập nhận diện vi phạm nguyên tắc đạo đức.'
      },
      {
        id: 'l4_s5', title: 'Vận Dụng: Việc Làm Cụ Thể Của Công Dân Số', visualType: 'activity',
        content: [
          '🙋 Nêu ít nhất 2 việc làm cụ thể thể hiện "trách nhiệm công dân" khi sử dụng AI trong học tập.'
        ],
        activity: {
          title: 'Thể hiện trách nhiệm công dân số',
          duration: '5-7 phút tại lớp',
          instructions: [
            'Nêu ít nhất 2 việc làm cụ thể thể hiện trách nhiệm công dân khi dùng AI trong học tập.',
            'Ví dụ gợi ý: luôn kiểm chứng lại thông tin AI cung cấp; không sao chép nguyên văn bài AI viết để nộp bài.',
            'Chia sẻ trước lớp.'
          ],
          tips: 'Liên hệ trực tiếp với nội hàm trách nhiệm công dân số đã học ở đầu tiết.',
          hint: 'Nghĩ về việc học sinh dùng AI để học tập hằng ngày (tra cứu, hỏi bài, dịch thuật...).',
          suggestedAnswer: 'Ví dụ: (1) Luôn kiểm tra, đối chiếu lại thông tin do AI cung cấp trước khi sử dụng; (2) Không dùng AI để làm bài hộ hoàn toàn mà chỉ dùng để gợi ý, tham khảo.'
        },
        speakerNotes: 'GV thu bài làm minh chứng đánh giá quá trình cho năng lực NLa, cùng với bản cam kết cá nhân đã viết ở Tiết 3.'
      },
      {
        id: 'l4_s6', title: 'Tổng Kết Buổi 2', visualType: 'summary',
        content: [
          '✅ Đã đạt yêu cầu cần đạt: 12.A2.1; 12.A2.MR1; 12.A3.1.',
          '🧠 Ghi nhớ 6 nguyên tắc đạo đức AI và trách nhiệm công dân số.',
          '➡️ Buổi tiếp theo (Tiết 5-6): Vấn đề đạo đức của AI - Mức độ rủi ro - Trách nhiệm trong hệ sinh thái AI.'
        ],
        visualUrl: svgVisual('Hoàn Thành Buổi 2', 'Sẵn sàng cho Buổi 3: Rủi ro & Hệ sinh thái AI', '#065f46', '#0d9488', '🏁'),
        speakerNotes: 'Chốt kiến thức trọng tâm, kết nối sang chủ đề rủi ro và hệ sinh thái AI ở buổi tiếp theo.'
      }
    ]
  }
];
