import { Lesson } from '../types';
import { svgVisual } from './visual';

// BUỔI 6 - TIẾT 11-12
// Chủ đề: GIẢI PHÁP HỆ THỐNG AI - PHÁT TRIỂN HỆ THỐNG AI (TÁC NHÂN AI - AI AGENT)
// Yêu cầu cần đạt: 12.D1.1; 12.D1.MR1; 12.D2.1; 12.D2.MR1; 12.D2.MR2; 12.D2.MR3
export const module6: Lesson[] = [
  {
    period: 11,
    title: 'Giải Pháp Hệ Thống AI - Tác Nhân AI (AI Agent) (Phần 1)',
    description: 'Tìm hiểu khái niệm, cấu trúc AI agent và thực hành dựng thử trên Google AI Studio.',
    objectives: [
      'Nhận biết, phân tích một số phương án thiết kế và vận hành hệ thống AI phù hợp.',
      'Nhận biết các vai trò khác nhau trong quá trình phát triển sản phẩm AI.',
      'Trình bày khái niệm, cấu trúc cơ bản của một hệ thống tác nhân AI (AI agent).'
    ],
    slides: [
      {
        id: 'l11_s1', title: 'Giải Pháp Hệ Thống AI - AI Agent', visualType: 'title',
        content: [
          '📘 Tiết 11-12: Giải pháp hệ thống AI - Phát triển hệ thống AI (Tác nhân AI - AI Agent)',
          '🎯 Học xong buổi này, các em sẽ: phân tích được phương án thiết kế, vận hành hệ thống AI hiệu quả; hiểu vai trò hợp tác đa chuyên môn trong phát triển sản phẩm AI; xây dựng và kiểm thử được một AI Agent đơn giản.',
          '🏁 Buổi tổng kết chuyên đề Giáo dục AI - Lớp 12'
        ],
        visualUrl: svgVisual('AI Agent - Tác Nhân Trí Tuệ Nhân Tạo', 'Buổi tổng kết chuyên đề Giáo dục AI - Lớp 12', '#4338ca', '#7c3aed', '🧠'),
        speakerNotes: 'Giới thiệu buổi tổng kết chuyên đề - buổi học cuối cùng, tập trung vào khái niệm AI agent và hoạt động dựng thử sản phẩm bằng Google AI Studio.'
      },
      {
        id: 'l11_s2', title: 'Khởi Động: AI Agent Khác Gì Các Công Cụ Đã Học?', visualType: 'intro',
        content: [
          '🤖 Ví dụ: một trợ lí ảo tự động lên lịch học, tự nhắc việc, tự trả lời câu hỏi thường gặp.',
          '❓ Câu hỏi: điểm khác giữa "AI agent" và các công cụ AI đã học ở các buổi trước (Teachable Machine...)?',
          '💭 Học sinh quan sát, suy nghĩ 3 phút, 3-4 học sinh chia sẻ.'
        ],
        visualUrl: svgVisual('AI Agent Là Gì?', 'Trợ lí ảo tự lên lịch, tự nhắc việc, tự trả lời câu hỏi', '#3730a3', '#6d28d9', '🤖'),
        answerHint: 'Gợi ý: Teachable Machine chỉ phân loại một lần theo yêu cầu; AI agent tự lập kế hoạch và thực hiện CHUỖI hành động liên tục.',
        speakerNotes: 'GV dẫn dắt: AI agent là hệ thống có khả năng tự lập kế hoạch và thực hiện chuỗi hành động để đạt mục tiêu do con người đặt ra, dưới sự giám sát của con người.'
      },
      {
        id: 'l11_s3', title: 'Cấu Trúc Cơ Bản Của Một AI Agent', visualType: 'diagram',
        content: [
          '🎯 Mục tiêu: nhiệm vụ mà AI agent cần đạt được (do con người đặt ra).',
          '📥 Đầu vào: dữ liệu, thông tin agent tiếp nhận từ môi trường/người dùng.',
          '⚙️ Các bước xử lí: chuỗi hành động agent tự lập kế hoạch và thực hiện.',
          '📤 Đầu ra: kết quả, hành động agent trả về.',
          '👁️ Người giám sát: con người luôn giám sát để đảm bảo agent hoạt động đúng, an toàn.'
        ],
        diagramData: {
          nodes: [
            { id: 'a1', label: 'Mục tiêu', x: 15, y: 20, color: '#4338ca' },
            { id: 'a2', label: 'Đầu vào', x: 35, y: 45, color: '#4f46e5' },
            { id: 'a3', label: 'Các bước xử lí (AI Agent)', x: 55, y: 25, color: '#7c3aed' },
            { id: 'a4', label: 'Đầu ra', x: 80, y: 45, color: '#a21caf' },
            { id: 'a5', label: 'Người giám sát', x: 55, y: 75, color: '#0891b2' }
          ],
          links: [
            { source: 'a1', target: 'a3' },
            { source: 'a2', target: 'a3' },
            { source: 'a3', target: 'a4' },
            { source: 'a5', target: 'a3', label: 'giám sát' }
          ]
        },
        speakerNotes: 'Trình bày cấu trúc AI agent theo đúng nội dung KHBD (mục tiêu, đầu vào, các bước xử lí, đầu ra, người giám sát).'
      },
      {
        id: 'l11_s4', title: 'Các Vai Trò Trong Phát Triển Sản Phẩm AI', visualType: 'concepts',
        content: [
          '💡 Người đề xuất ý tưởng: xác định vấn đề, mục tiêu của sản phẩm AI.',
          '💻 Người lập trình: xây dựng hệ thống, kết nối các thành phần kỹ thuật.',
          '🎓 Người huấn luyện: chuẩn bị dữ liệu, huấn luyện mô hình.',
          '🧪 Người kiểm thử: kiểm tra, đánh giá chất lượng trước khi đưa vào sử dụng.',
          '🤝 Việc tạo ra sản phẩm AI cần có sự hợp tác giữa nhiều người với chuyên môn khác nhau.'
        ],
        visualUrl: svgVisual('Vai Trò Phát Triển Sản Phẩm AI', 'Ý tưởng - Lập trình - Huấn luyện - Kiểm thử', '#312e81', '#6d28d9', '🤝'),
        speakerNotes: 'Trình bày các vai trò trong quá trình phát triển sản phẩm AI, nhấn mạnh tính hợp tác đa chuyên môn.'
      },
      {
        id: 'l11_s5', title: 'Thực Hành: Dựng Thử AI Agent Với Google AI Studio', visualType: 'activity',
        content: [
          '🖥️ Dùng tài khoản Google AI Studio do giáo viên/nhà trường quản lý (không cần đăng ký tài khoản cá nhân).',
          '💬 Mô tả ý tưởng của nhóm bằng ngôn ngữ tự nhiên để dựng thử một AI agent/ứng dụng đơn giản phục vụ trường/lớp.',
          '📄 Hoàn thành Phiếu học tập số 6 theo cấu trúc AI agent: mục tiêu, đầu vào, các bước xử lí, đầu ra, người giám sát.'
        ],
        activity: {
          title: 'Dựng thử AI agent đơn giản trên Google AI Studio',
          duration: 'Thực hành nhóm, dựa trên ý tưởng đã chuẩn bị từ Buổi 4-5',
          instructions: [
            'Sử dụng ý tưởng công cụ AI đã đề xuất và hoàn thiện kế hoạch ở Buổi 4, 5.',
            'Mô tả ý tưởng bằng ngôn ngữ tự nhiên trên Google AI Studio (tài khoản do GV/nhà trường quản lý).',
            'Dựng thử một AI agent/ứng dụng đơn giản phục vụ trường/lớp.',
            'Chụp ảnh màn hình hoặc lưu đường liên kết sản phẩm, mô tả theo cấu trúc AI agent trong Phiếu học tập số 6.',
            'Chuẩn bị phần thuyết trình ngắn cho nhóm.'
          ],
          tips: 'Mô tả ý tưởng càng rõ ràng, cụ thể (mục tiêu, đầu vào, đầu ra mong muốn) thì AI Studio càng dựng thử chính xác.',
          hint: 'Liên hệ với ý tưởng công cụ AI nhóm đã đề xuất ở Buổi 4 (Tiết 7-8): mục tiêu, đối tượng sử dụng, dữ liệu cần có.',
          suggestedAnswer: 'Sản phẩm là một prototype/ứng dụng đơn giản trên Google AI Studio, kèm bản mô tả đầy đủ theo cấu trúc AI agent.'
        },
        speakerNotes: 'Hoạt động Hình thành kiến thức trọng tâm của buổi tổng kết - thể hiện đầy đủ kĩ năng thiết kế phương án vận hành AI và xây dựng, kiểm thử AI agent.'
      },
      {
        id: 'l11_s6', title: 'Luyện Tập: Rủi Ro Khi Vận Hành AI Agent', visualType: 'interactive',
        content: [
          '🔍 Đề xuất 1 rủi ro có thể phát sinh khi vận hành AI agent của nhóm bạn và cách khắc phục (nhận xét chéo giữa các nhóm).'
        ],
        interactiveQuiz: {
          question: 'Một AI agent tự động trả lời câu hỏi thường gặp của học sinh nhưng đôi khi trả lời sai thông tin. Cách khắc phục phù hợp nhất là gì?',
          options: [
            'Ngừng sử dụng AI agent vĩnh viễn, không tìm cách khắc phục',
            'Bổ sung, cập nhật lại nguồn dữ liệu/thông tin đúng và tăng cường kiểm thử trước khi dùng chính thức',
            'Kệ vậy vì AI agent không thể sai',
            'Để học sinh tự phát hiện và tự sửa lỗi cho AI agent'
          ],
          answerIndex: 1,
          explanation: 'Cần bổ sung, cập nhật dữ liệu/thông tin chính xác và tăng cường kiểm thử trước khi đưa AI agent vào sử dụng chính thức - đây là vai trò kiểm thử quan trọng đã học.',
          hint: 'Nhớ lại vai trò "người kiểm thử" trong quá trình phát triển sản phẩm AI.',
          suggestedAnswer: 'Cần kiểm thử kỹ và cập nhật dữ liệu trước khi đưa AI agent vào sử dụng thực tế, nhấn mạnh vai trò giám sát của con người.'
        },
        speakerNotes: 'Củng cố kĩ năng phân tích và xử lí vấn đề phát sinh trong hệ thống AI, GV tổng hợp và nhấn mạnh vai trò kiểm thử trước khi đưa AI agent vào sử dụng thực tế.'
      }
    ]
  },
  {
    period: 12,
    title: 'Tổng Kết Chuyên Đề Giáo Dục AI - Lớp 12',
    description: 'Thuyết trình sản phẩm AI agent của nhóm và tự đánh giá năng lực AI cuối chuyên đề.',
    objectives: [
      'Phân tích nguyên nhân vấn đề phát sinh trong hệ thống AI và lựa chọn cách khắc phục phù hợp.',
      'Xây dựng và kiểm thử được một AI agent đơn giản phục vụ nhiệm vụ học tập/cộng đồng.',
      'Tự đánh giá mức độ đạt được của bản thân ở 4 thành phần năng lực AI (NLa, NLb, NLc, NLd).'
    ],
    slides: [
      {
        id: 'l12_s1', title: 'Thuyết Trình Sản Phẩm AI Agent', visualType: 'intro',
        content: [
          '🎤 Mỗi nhóm thuyết trình ngắn gọn về AI agent/ứng dụng đã dựng thử trên Google AI Studio.',
          '📋 Nội dung thuyết trình: mục tiêu, đầu vào, các bước xử lí, đầu ra, người giám sát.',
          '👥 Các nhóm khác nhận xét, đặt câu hỏi phản biện.'
        ],
        visualUrl: svgVisual('Thuyết Trình Sản Phẩm Nhóm', 'AI Agent phục vụ học tập / cộng đồng', '#4338ca', '#9333ea', '🎤'),
        speakerNotes: 'Tổ chức cho từng nhóm thuyết trình ngắn (3-5 phút/nhóm) sản phẩm AI agent, các nhóm khác lắng nghe và chuẩn bị nhận xét chéo ở hoạt động luyện tập.'
      },
      {
        id: 'l12_s2', title: 'Luyện Tập: Nhận Xét Chéo Giữa Các Nhóm', visualType: 'interactive',
        content: [
          '🔄 Học sinh nhận xét chéo giữa các nhóm về rủi ro có thể phát sinh và cách khắc phục.',
          '📣 Một số học sinh chia sẻ trước lớp.'
        ],
        interactiveQuiz: {
          question: 'Khi nhận xét chéo sản phẩm AI agent của nhóm bạn, điều quan trọng nhất cần góp ý là gì?',
          options: [
            'Chỉ khen mà không góp ý gì để giữ hoà khí',
            'Chỉ ra rủi ro có thể phát sinh khi vận hành và đề xuất cách khắc phục cụ thể, mang tính xây dựng',
            'Chê bai sản phẩm của nhóm bạn mà không giải thích lý do',
            'Không cần nhận xét gì vì đã là buổi cuối cùng'
          ],
          answerIndex: 1,
          explanation: 'Nhận xét chéo cần mang tính xây dựng: chỉ ra rủi ro cụ thể và đề xuất cách khắc phục, giúp nhóm bạn hoàn thiện sản phẩm tốt hơn.',
          hint: 'Đây là hoạt động rèn năng lực giao tiếp - hợp tác và tư duy phản biện.',
          suggestedAnswer: 'Góp ý cần cụ thể, mang tính xây dựng, tập trung vào rủi ro vận hành và giải pháp khắc phục khả thi.'
        },
        speakerNotes: 'GV tổng hợp các nhận xét, nhấn mạnh lại vai trò kiểm thử và tinh thần hợp tác, phản biện xây dựng trước khi đưa sản phẩm AI vào sử dụng thực tế.'
      },
      {
        id: 'l12_s3', title: 'Vận Dụng: Tự Đánh Giá Năng Lực AI', visualType: 'concepts',
        content: [
          '📊 4 thành phần năng lực AI đã học qua 6 buổi:',
          '🅰️ NLa - Quyền kiểm soát & trách nhiệm con người (Buổi 1).',
          '🅱️ NLb - Đạo đức, rủi ro & hệ sinh thái AI (Buổi 2, 3).',
          '🅲 NLc - Công cụ, tối ưu hệ thống & dữ liệu AI (Buổi 4, 5).',
          '🅳 NLd - Giải pháp hệ thống & AI Agent (Buổi 6).'
        ],
        visualUrl: svgVisual('4 Thành Phần Năng Lực AI', 'NLa - NLb - NLc - NLd', '#1e3a8a', '#7c3aed', '📊'),
        speakerNotes: 'Tổng hợp lại 4 thành phần năng lực AI đã học xuyên suốt 6 buổi, chuẩn bị cho hoạt động tự đánh giá cuối chuyên đề.'
      },
      {
        id: 'l12_s4', title: 'Vận Dụng: Phiếu Tự Đánh Giá Cuối Chuyên Đề', visualType: 'activity',
        content: [
          '📝 Mỗi học sinh tự nhận xét ngắn về mức độ đạt được của bản thân ở 4 thành phần năng lực AI qua 12 tiết đã học.',
          '📚 GV tổng hợp toàn bộ minh chứng (phiếu học tập, sản phẩm, bài viết vận dụng, bản cam kết, phiếu tự đánh giá) của cả 6 buổi để nhận xét, đánh giá kết quả chuyên đề.'
        ],
        activity: {
          title: 'Phiếu tự đánh giá cá nhân cuối chuyên đề',
          duration: 'Hoàn thành tại lớp, nộp lại cuối tiết',
          instructions: [
            'Tự nhận xét mức độ đạt được của bản thân ở từng thành phần năng lực: NLa, NLb, NLc, NLd.',
            'Đánh dấu (X) mức độ đạt được qua 12 tiết học theo mẫu Phiếu tự đánh giá.',
            'Nộp lại phiếu để GV tổng hợp minh chứng đánh giá kết quả chuyên đề.'
          ],
          tips: 'Tự đánh giá trung thực, không cần lo lắng vì chuyên đề không tổ chức kiểm tra định kì hay lập đầu điểm riêng, chỉ đánh giá bằng nhận xét.',
          hint: 'Xem lại toàn bộ Phiếu học tập số 1-6 và các sản phẩm đã hoàn thành trong 6 buổi để tự đánh giá chính xác.',
          suggestedAnswer: 'Phiếu tự đánh giá là minh chứng cá nhân, không có đáp án đúng/sai cố định - quan trọng là sự trung thực và tự nhận thức của mỗi học sinh.'
        },
        speakerNotes: 'Đây là hoạt động Vận dụng cuối cùng của chuyên đề - GV phát Phiếu tự đánh giá cuối tiết, thu lại làm một trong các minh chứng tổng hợp đánh giá cuối chuyên đề trước khi kết thúc Học kỳ I.'
      },
      {
        id: 'l12_s5', title: 'Rubric Đánh Giá Chung 4 Thành Phần Năng Lực AI', visualType: 'concepts',
        content: [
          '📏 Rubric gồm 3 mức: Đạt tốt - Đạt - Cần cố gắng thêm, áp dụng cho cả 4 thành phần NLa, NLb, NLc, NLd.',
          '📌 GV dùng Rubric cùng Bảng kiểm nhanh tổng hợp minh chứng để nhận xét, đánh giá kết quả chuyên đề cho từng học sinh.',
          'ℹ️ Lưu ý: theo Khung giáo dục AI, không tổ chức kiểm tra định kì, không lập đầu điểm riêng - chỉ đánh giá bằng nhận xét dựa trên minh chứng thu thập qua các buổi học.'
        ],
        visualUrl: svgVisual('Rubric Đánh Giá Chuyên Đề', 'Đạt tốt - Đạt - Cần cố gắng thêm', '#164e63', '#0e7490', '📏'),
        speakerNotes: 'Giải thích rõ cách đánh giá của chuyên đề để học sinh và phụ huynh hiểu: đánh giá bằng nhận xét, không phải bằng điểm số, dựa trên minh chứng thu thập xuyên suốt 6 buổi học.'
      },
      {
        id: 'l12_s6', title: 'Tổng Kết Toàn Bộ Chuyên Đề', visualType: 'summary',
        content: [
          '🎉 Hoàn thành 12 tiết (6 buổi) Chuyên đề Giáo dục Trí tuệ nhân tạo (AI) - Lớp 12!',
          '✅ Các em đã đạt được: phân tích phương án thiết kế, vận hành hệ thống AI hiệu quả; hiểu vai trò hợp tác trong phát triển sản phẩm AI; xây dựng và kiểm thử được một AI Agent đơn giản.',
          '🏆 Cảm ơn các em học sinh Trường THPT Tân Lược đã tích cực tham gia chuyên đề!',
          '📌 GV tổng hợp toàn bộ minh chứng để hoàn thành đánh giá, nhận xét trước khi kết thúc Học kỳ I.'
        ],
        visualUrl: '/trophy-tot-nghiep.png',
        visualLabel: 'Vinh danh học sinh hoàn thành chuyên đề AI Lớp 12',
        speakerNotes: 'Chúc mừng học sinh đã hoàn thành toàn bộ chuyên đề. Nhắc lại mạch kiến thức xuyên suốt 6 buổi: quyền kiểm soát và trách nhiệm (Buổi 1) → đạo đức và trách nhiệm công dân (Buổi 2) → rủi ro và hệ sinh thái AI (Buổi 3) → công cụ thiết kế AI (Buổi 4) → tối ưu hệ thống và dữ liệu (Buổi 5) → giải pháp hệ thống và AI agent (Buổi 6).'
      }
    ]
  }
];
