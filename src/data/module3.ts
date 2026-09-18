import { Lesson } from '../types';
import { svgVisual } from './visual';

// BUỔI 3 - TIẾT 5-6
// Chuyên đề 2: Đạo đức & pháp luật khi dùng/tạo AI
// Yêu cầu cần đạt: 12.A3.1 + 12.B2.1 (Tiết 5); 12.B3.1 (Tiết 6)
export const module3: Lesson[] = [
  {
    period: 5,
    title: 'Trách Nhiệm Công Dân & Rủi Ro Pháp Lý Khi Dùng AI',
    description: 'Phân tích 4 nội dung của trách nhiệm công dân trong xã hội AI, phân loại 3 mức độ rủi ro khi dùng AI và làm quen các thuật ngữ thiên kiến, ảo giác AI, deepfake.',
    objectives: [
      '12.A3.1 · 12.B2.1: Phân tích được nội hàm "trách nhiệm công dân trong xã hội AI"; xác định được mức độ rủi ro khi dùng AI có thể dẫn đến vi phạm quy định nhà trường hoặc pháp luật.',
      'Phân tích được 4 nội dung của "trách nhiệm công dân trong xã hội AI"; xác định và phân loại được mức độ rủi ro (thấp - trung bình - cao) khi dùng AI.',
      'Hiểu các thuật ngữ: thiên kiến (bias), ảo giác AI (hallucination), giả mạo (deepfake); xếp được tình huống vào đúng mức rủi ro.'
    ],
    slides: [
      {
        id: 'l5_s1', title: 'Khởi Động: Dùng AI Viết Hộ Bài Luận - Chuyện Nhỏ Hay Vi Phạm?', visualType: 'intro',
        content: [
          '📘 Tiết 5: Trách nhiệm công dân & rủi ro pháp lý khi dùng AI.',
          '💭 Tình huống: Một bạn dùng AI viết hộ toàn bộ bài luận rồi nộp như của mình.',
          '❓ Theo các em, đây là chuyện nhỏ hay là vi phạm?',
          '⏱️ Tranh luận nhanh 2 phút.'
        ],
        visualUrl: svgVisual('Trách Nhiệm Công Dân Trong Xã Hội AI', 'Ranh giới giữa trung thực và gian lận khi dùng AI', '#164e63', '#0e7490', '❓'),
        speakerNotes: 'GV nêu tình huống gây tranh cãi để khơi vấn đề trung thực khi dùng AI, dẫn vào nội dung trách nhiệm công dân số và các mức độ rủi ro.'
      },
      {
        id: 'l5_s2', title: '4 Nội Dung Của Trách Nhiệm Công Dân Trong Xã Hội AI', visualType: 'concepts',
        content: [
          '1️⃣ Dùng AI một cách an toàn, trung thực, có đạo đức.',
          '2️⃣ Tôn trọng quyền riêng tư và dữ liệu của người khác.',
          '3️⃣ Không dùng AI để lan truyền tin sai, gian lận hay gây hại.',
          '4️⃣ Góp phần xây dựng môi trường số tích cực, công bằng, nhân văn.',
          '📚 Thuật ngữ cần biết: thiên kiến (bias) - AI học phải dữ liệu lệch/thiếu cân bằng nên đưa ra kết quả không công bằng; ảo giác AI (hallucination) - AI "bịa" ra thông tin nghe hợp lí nhưng sai; deepfake - hình/tiếng/video giả do AI tạo để giả mạo người thật.'
        ],
        visualUrl: svgVisual('4 Trách Nhiệm Công Dân Số', 'An toàn - Riêng tư - Không lan tin sai - Vì cộng đồng', '#155e75', '#0e7490', '🧑‍💻'),
        speakerNotes: 'Giảng 4 nội dung trách nhiệm công dân số, giải thích 3 thuật ngữ quan trọng: bias, hallucination, deepfake - nhấn mạnh ảo giác AI nghĩa là AI có thể tự tin nói sai, nên dùng AI phải luôn kiểm chứng.'
      },
      {
        id: 'l5_s3', title: '3 Mức Độ Rủi Ro Khi Dùng AI', visualType: 'comparison',
        content: [
          '🟢 Thấp: dùng AI hỗ trợ có kiểm chứng, không gây hại. Ví dụ: nhờ AI gợi ý dàn ý rồi tự viết và kiểm tra lại.',
          '🟡 Trung bình: có thể vi phạm quy định trường, thiếu trung thực. Ví dụ: nộp bài do AI viết mà không khai báo.',
          '🔴 Cao: có thể vi phạm pháp luật, gây hại nghiêm trọng. Ví dụ: tạo deepfake bôi nhọ bạn; phát tán tin giả do AI viết.',
          '🔑 Ghi nhớ: rủi ro càng cao → hậu quả pháp lí càng lớn.'
        ],
        comparisonData: {
          leftTitle: '🟢🟡 Rủi ro thấp - trung bình',
          leftItems: [
            'Thấp: nhờ AI gợi ý dàn ý rồi tự viết và kiểm tra lại',
            'Thấp: dùng AI hỗ trợ nhưng luôn kiểm chứng thông tin',
            'Trung bình: nộp bài do AI viết mà không khai báo',
            'Trung bình: thiếu trung thực nhưng chưa gây hại nghiêm trọng'
          ],
          rightTitle: '🔴 Rủi ro cao',
          rightItems: [
            'Tạo deepfake bôi nhọ, giả mạo bạn bè, người khác',
            'Phát tán tin giả do AI viết ra',
            'Dùng AI để lừa đảo, thao túng người khác',
            'Có thể vi phạm pháp luật, gây hại nghiêm trọng cho người khác'
          ]
        },
        speakerNotes: 'Trình bày bảng phân mức rủi ro, cho học sinh xếp thử vài tình huống vào 3 mức trước khi chuyển sang hoạt động tranh biện.'
      },
      {
        id: 'l5_s4', title: 'Luyện Tập Nhóm: Tranh Biện Trung Thực Hay Gian Lận?', visualType: 'interactive',
        content: [
          '🗣️ Nhóm tranh biện: "Dùng AI trong học tập - đâu là trung thực, đâu là gian lận?" → cùng lập DANH SÁCH TIÊU CHÍ "dùng AI trung thực" của lớp.',
          '✅ Sản phẩm: Danh sách tiêu chí "dùng AI trung thực" + bảng xếp tình huống theo mức rủi ro (Phiếu học tập số 5).'
        ],
        interactiveQuiz: {
          question: 'Một bạn hỏi AI trợ giúp gợi ý dàn ý cho bài văn, sau đó tự viết hoàn chỉnh và kiểm tra lại thông tin trước khi nộp. Hành động này thuộc mức rủi ro nào?',
          options: [
            'Rủi ro cao, vì đã dùng AI',
            'Rủi ro trung bình, vì AI luôn không đáng tin',
            'Rủi ro thấp, vì có kiểm chứng và không gây hại, không thay thế hoàn toàn công sức bản thân',
            'Không thể xác định được mức rủi ro'
          ],
          answerIndex: 2,
          explanation: 'Đây là ví dụ điển hình của mức rủi ro thấp: dùng AI hỗ trợ (gợi ý dàn ý) nhưng có kiểm chứng lại và tự mình hoàn thành bài viết.',
          hint: 'So sánh với ví dụ mức thấp trong bảng: "nhờ AI gợi ý dàn ý rồi tự viết và kiểm tra lại".',
          suggestedAnswer: 'Đây là mức rủi ro thấp vì học sinh chỉ dùng AI để hỗ trợ ý tưởng ban đầu, có kiểm chứng lại thông tin và tự thực hiện phần lớn công việc.'
        },
        speakerNotes: 'Tổ chức tranh biện cả lớp, GV tổng hợp thành danh sách tiêu chí chung về "dùng AI trung thực" của lớp, giữ không khí cởi mở để học sinh dám nói thật về việc mình dùng AI.'
      },
      {
        id: 'l5_s5', title: 'Vận Dụng: Cam Kết Dùng AI Có Trách Nhiệm', visualType: 'activity',
        content: [
          '✍️ Mỗi em viết "Cam kết dùng AI có trách nhiệm" của bản thân, 3-5 dòng. Vài em đọc trước lớp.',
          '📌 Bài tập về nhà: nêu 3 việc NÊN và 3 việc KHÔNG NÊN khi dùng AI trong học tập; giải thích bằng 1 ví dụ vì sao phải kiểm chứng thông tin do AI cung cấp (ảo giác AI).'
        ],
        activity: {
          title: 'Bài tập vận dụng: Cam kết và nguyên tắc dùng AI có trách nhiệm',
          duration: 'Viết cam kết tại lớp + hoàn thiện bài tập ở nhà',
          instructions: [
            '1. Nêu 3 việc NÊN và 3 việc KHÔNG NÊN khi dùng AI trong học tập.',
            '2. Giải thích bằng 1 ví dụ: vì sao phải kiểm chứng thông tin do AI cung cấp (ảo giác AI - hallucination).'
          ],
          tips: 'Liên hệ với nội quy nhà trường về liêm chính học thuật (nếu có) và 4 nội dung trách nhiệm công dân đã học.',
          hint: 'Nhớ lại khái niệm "ảo giác AI": AI có thể tự tin nói ra thông tin sai mà nghe rất hợp lí.',
          suggestedAnswer: 'Câu trả lời cần nêu cụ thể việc nên/không nên (ví dụ: nên kiểm chứng lại thông tin, không nên nộp bài AI viết hộ mà không khai báo) và giải thích được vì sao hallucination khiến việc kiểm chứng là bắt buộc.'
        },
        speakerNotes: 'GV chốt bài, dặn dò Tiết 6 sẽ học về quyền, trách nhiệm của người phát triển và người sử dụng AI, cùng vai trò góp ý chính sách.'
      }
    ]
  },
  {
    period: 6,
    title: 'Quyền, Trách Nhiệm & Góp Ý Chính Sách AI',
    description: 'Trình bày quyền và trách nhiệm của người phát triển, người sử dụng AI; vai trò của công dân trong việc góp ý, đề xuất chính sách, quy định liên quan đến AI.',
    objectives: [
      '12.B3.1: Trình bày được quyền và trách nhiệm của người phát triển, người sử dụng AI; vai trò của cá nhân trong việc góp ý, đề xuất xây dựng chính sách, quy định liên quan đến AI.',
      'Trình bày được quyền & trách nhiệm của người PHÁT TRIỂN và người SỬ DỤNG AI; nêu được vai trò của công dân trong việc góp ý, đề xuất chính sách về AI.',
      'Soạn được một bộ quy tắc dùng AI cho trường học; viết đề xuất chính sách.'
    ],
    slides: [
      {
        id: 'l6_s1', title: 'Khởi Động: Em Có Quyền Góp Ý Nội Quy AI Của Trường Không?', visualType: 'intro',
        content: [
          '🔁 Ôn nhanh: nhắc lại 4 nội dung trách nhiệm công dân trong xã hội AI và 3 mức rủi ro đã học ở Tiết 5.',
          '❓ Nếu ngày mai trường ta ra một nội quy về việc dùng AI trong học tập, các em có quyền góp ý không? Nếu có, em muốn góp điều gì?',
          '💬 Nêu ý kiến nhanh trước lớp.'
        ],
        visualUrl: svgVisual('Quyền Góp Ý Chính Sách AI', 'Vai trò công dân trong xây dựng quy định về AI', '#0c4a6e', '#0369a1', '📜'),
        speakerNotes: 'Khơi gợi vai trò góp ý của học sinh, dẫn vào nội dung quyền - trách nhiệm của người phát triển và người sử dụng AI.'
      },
      {
        id: 'l6_s2', title: 'Quyền & Trách Nhiệm: Người Phát Triển - Người Sử Dụng AI', visualType: 'comparison',
        content: [
          '👨‍💻 Người PHÁT TRIỂN AI - Quyền: được sáng tạo, kinh doanh sản phẩm hợp pháp; được bảo hộ sở hữu trí tuệ. Trách nhiệm: minh bạch cách hoạt động; dùng dữ liệu hợp pháp; kiểm thử; chịu trách nhiệm về sản phẩm.',
          '🧑‍🎓 Người SỬ DỤNG AI - Quyền: được biết mình đang dùng AI; được từ chối; được yêu cầu xoá dữ liệu của mình. Trách nhiệm: dùng đúng mục đích; kiểm chứng kết quả; khai báo khi dùng AI; không dùng để gây hại.',
          '🔑 Ghi nhớ: cả người tạo và người dùng AI đều có quyền VÀ trách nhiệm.'
        ],
        comparisonData: {
          leftTitle: '👨‍💻 Người phát triển AI',
          leftItems: [
            'Quyền: sáng tạo, kinh doanh sản phẩm hợp pháp; được bảo hộ sở hữu trí tuệ',
            'Trách nhiệm: minh bạch cách hoạt động',
            'Trách nhiệm: dùng dữ liệu hợp pháp, kiểm thử kỹ',
            'Trách nhiệm: chịu trách nhiệm về sản phẩm mình tạo ra'
          ],
          rightTitle: '🧑‍🎓 Người sử dụng AI',
          rightItems: [
            'Quyền: được biết mình đang dùng AI, được từ chối',
            'Quyền: được yêu cầu xoá dữ liệu cá nhân của mình',
            'Trách nhiệm: dùng đúng mục đích, kiểm chứng kết quả',
            'Trách nhiệm: khai báo khi dùng AI, không dùng để gây hại'
          ]
        },
        speakerNotes: 'Trình bày bảng quyền - trách nhiệm của 2 nhóm chủ thể, học sinh bổ sung ví dụ. Nhấn mạnh: công dân còn có vai trò góp ý xây dựng chính sách để AI công bằng, an toàn hơn.'
      },
      {
        id: 'l6_s3', title: 'Luyện Tập Nhóm: Soạn Bộ Quy Tắc Dùng AI Trong Trường Học', visualType: 'interactive',
        content: [
          '👥 Nhóm soạn "Bộ quy tắc dùng AI trong trường học" gồm 5-7 điều; phân vai Học sinh / Giáo viên / Ban Giám hiệu để cân nhắc nhiều góc nhìn.',
          '✅ Sản phẩm: Bản "Bộ quy tắc dùng AI trong trường học" của nhóm (Phiếu học tập số 6).'
        ],
        interactiveQuiz: {
          question: 'Khi soạn "Bộ quy tắc dùng AI trong trường học", vì sao nhóm nên phân vai Học sinh - Giáo viên - Ban Giám hiệu để cùng góp ý?',
          options: [
            'Để làm cho bài tập dài hơn, phức tạp hơn',
            'Để mỗi vai trò có góc nhìn, quyền lợi và trách nhiệm khác nhau, giúp bộ quy tắc cân bằng và khả thi hơn',
            'Vì chỉ Ban Giám hiệu mới có quyền quyết định, các vai trò khác không cần thiết',
            'Không có lý do đặc biệt, chỉ là hình thức'
          ],
          answerIndex: 1,
          explanation: 'Phân vai nhiều bên giúp nhóm cân nhắc đầy đủ góc nhìn, quyền lợi và trách nhiệm của từng chủ thể liên quan, từ đó bộ quy tắc trở nên công bằng và thực tế hơn - đúng với vai trò công dân được góp ý chính sách.',
          hint: 'Liên hệ với nội dung: mỗi công dân có vai trò góp ý xây dựng chính sách AI công bằng hơn.',
          suggestedAnswer: 'Phân vai giúp bộ quy tắc phản ánh đầy đủ lợi ích và trách nhiệm của học sinh, giáo viên và nhà trường, tránh thiên lệch về một phía.'
        },
        speakerNotes: 'Các nhóm soạn bộ quy tắc 5-7 điều, GV có thể gửi bộ quy tắc hay nhất cho GVCN/BGH tham khảo thật để tăng tính thực tiễn cho học sinh.'
      },
      {
        id: 'l6_s4', title: 'Vận Dụng: Đề Xuất Chính Sách Về AI', visualType: 'activity',
        content: [
          '🗣️ Mỗi em viết 1 đề xuất chính sách về AI mà em muốn gửi nhà trường hoặc cơ quan quản lí. Vài em chia sẻ.',
          '📌 Bài tập về nhà: viết 1 đề xuất (5-7 câu) về quy định dùng AI trong lớp/trường em, kèm lí do; nêu 1 quyền và 1 trách nhiệm của em khi là người sử dụng AI.'
        ],
        activity: {
          title: 'Bài tập vận dụng: Đề xuất chính sách AI của em',
          duration: 'Viết đề xuất tại lớp + hoàn thiện ở nhà',
          instructions: [
            '1. Viết 1 đề xuất (5-7 câu) về quy định dùng AI trong lớp/trường em, kèm lí do.',
            '2. Nêu 1 quyền và 1 trách nhiệm của em khi là người sử dụng AI.'
          ],
          tips: 'Có thể dựa vào bộ quy tắc nhóm đã soạn ở hoạt động luyện tập để phát triển thành đề xuất cá nhân.',
          hint: 'Nhớ lại bảng quyền - trách nhiệm của người sử dụng AI đã học.',
          suggestedAnswer: 'Đề xuất cần nêu rõ quy định cụ thể, lí do hợp lí, và xác định đúng 1 quyền + 1 trách nhiệm của người sử dụng AI theo bảng đã học.'
        },
        speakerNotes: 'GV chốt bài, dặn dò Tiết 7 sẽ chuyển sang Chuyên đề 3 - Công cụ & kĩ thuật làm AI, bắt đầu làm quen các công cụ mã nguồn mở/miễn phí để tạo AI.'
      },
      {
        id: 'l6_s5', title: 'Tổng Kết Buổi 3', visualType: 'summary',
        content: [
          '✅ Các em đã đạt được: phân tích 4 nội dung trách nhiệm công dân trong xã hội AI và phân loại 3 mức rủi ro; trình bày quyền - trách nhiệm của người phát triển và người sử dụng AI; soạn được bộ quy tắc và đề xuất chính sách về AI.',
          '🧠 Ghi nhớ: là công dân số có trách nhiệm - dùng AI trung thực, tôn trọng người khác, không lan tin sai, và có quyền góp ý xây dựng chính sách AI.',
          '➡️ Buổi tiếp theo (Tiết 7-8): Chọn ý tưởng & làm quen công cụ tạo AI - Đánh giá hiệu quả hệ thống AI.'
        ],
        visualUrl: svgVisual('Hoàn Thành Buổi 3', 'Sẵn sàng cho Buổi 4: Công cụ và kĩ thuật làm AI', '#0c4a6e', '#0369a1', '🏁'),
        speakerNotes: 'Chốt lại kiến thức trọng tâm buổi học (trách nhiệm công dân, mức rủi ro, quyền và trách nhiệm, góp ý chính sách), kết nối sang Chuyên đề 3 về công cụ và kĩ thuật làm AI ở buổi tiếp theo.'
      }
    ]
  }
];
