import { InteractiveExercise } from '../types';
import { getGameForLesson } from './gameBank';

// Ngân hàng bài tập tương tác bám sát nội dung Kế hoạch bài dạy (KHBD)
// Chuyên đề Giáo dục Trí tuệ nhân tạo (AI) - Lớp 12, Trường THPT Tân Lược.
export const exerciseBank: Record<number, InteractiveExercise[]> = {
  1: [
    {
      id: 'ex_p1_quiz',
      type: 'quiz',
      title: 'Bài tập: Trách nhiệm giải trình khi AI ra quyết định sai',
      description: 'Vận dụng kiến thức về vòng đời hệ thống AI và trách nhiệm giải trình để xử lí tình huống thực tế.',
      hint: 'Người thiết kế, triển khai và giám sát hệ thống AI luôn phải chịu trách nhiệm giải trình - AI không tự chịu trách nhiệm pháp lý.',
      suggestedAnswer: 'Ngân hàng (đơn vị triển khai) và người giám sát hệ thống phải chịu trách nhiệm giải trình, vì AI chỉ là công cụ hỗ trợ ra quyết định.',
      quizData: {
        question: 'Một hệ thống AI xét duyệt hồ sơ vay vốn từ chối một khách hàng đủ điều kiện. Theo quy định hiện hành, ai phải chịu trách nhiệm giải trình?',
        options: [
          'Bản thân hệ thống AI vì nó tự đưa ra quyết định',
          'Đơn vị triển khai và người giám sát hệ thống AI đó',
          'Không ai chịu trách nhiệm vì đây là lỗi kỹ thuật khách quan',
          'Khách hàng vì đã nộp hồ sơ không đầy đủ'
        ],
        answerIndex: 1,
        explanation: 'Con người luôn phải giữ quyền kiểm soát và chịu trách nhiệm ở các bước quan trọng trong vòng đời AI, kể cả khi hệ thống AI hỗ trợ ra quyết định tự động.'
      }
    }
  ],
  2: [
    {
      id: 'ex_p2_tf',
      type: 'true_false',
      title: 'Bài tập: Quyền kiểm soát của con người trong vòng đời AI',
      description: 'Xác định đúng/sai về vai trò của con người ở từng bước trong vòng đời hệ thống AI.',
      hint: 'Con người bắt buộc phải trực tiếp quyết định ở các bước: xác định vấn đề, triển khai và xử lí sự cố.',
      suggestedAnswer: '1. Sai. 2. Đúng.',
      trueFalseData: {
        instruction: 'Chọn ĐÚNG hoặc SAI cho từng nhận định:',
        items: [
          {
            id: 'p2_tf1',
            statement: 'Sau khi triển khai, hệ thống AI có thể hoạt động hoàn toàn độc lập mà không cần con người giám sát, xử lí sự cố.',
            isTrue: false,
            explanation: 'Sai. Giám sát và xử lí sự cố là một bước quan trọng trong vòng đời AI mà con người phải trực tiếp thực hiện.',
            hint: 'Vòng đời AI gồm: xác định vấn đề, thu thập dữ liệu, thiết kế, thử nghiệm, triển khai, giám sát - xử lí sự cố, kết thúc sử dụng.'
          },
          {
            id: 'p2_tf2',
            statement: 'Trong quá trình ra quyết định có AI hỗ trợ, con người vẫn là người chịu trách nhiệm cuối cùng đối chiếu với quy định pháp luật.',
            isTrue: true,
            explanation: 'Đúng. Đây chính là nội hàm của trách nhiệm giải trình mà bài học hướng tới.',
            hint: 'AI hỗ trợ, con người quyết định và chịu trách nhiệm.'
          }
        ]
      }
    }
  ],
  3: [
    {
      id: 'ex_p3_matching',
      type: 'matching',
      title: 'Bài tập: 6 Nguyên Tắc Đạo Đức Khi Thiết Kế AI',
      description: 'Nối mỗi nguyên tắc đạo đức với nội dung mô tả đúng của nó.',
      hint: 'An toàn - không gây nguy hiểm; Công bằng - tránh thiên vị; Minh bạch - công khai cách hoạt động.',
      suggestedAnswer: 'An toàn: không gây nguy hiểm cho con người và môi trường; Công bằng: tránh thiên vị, phân biệt đối xử; Minh bạch: công khai cách hoạt động; Riêng tư: không dùng dữ liệu cá nhân trái phép; Trách nhiệm: kiểm tra, chịu trách nhiệm về sản phẩm; Lợi ích xã hội: phục vụ cộng đồng, phát triển bền vững.',
      matchingData: {
        instruction: 'Nhấp chọn một nguyên tắc ở cột trái, sau đó chọn mô tả tương ứng ở cột phải:',
        pairs: [
          { id: 'm1', concept: 'An toàn', match: 'Không gây nguy hiểm cho con người và môi trường' },
          { id: 'm2', concept: 'Công bằng', match: 'Tránh thiên vị, phân biệt đối xử trong dữ liệu và kết quả' },
          { id: 'm3', concept: 'Minh bạch', match: 'Công khai cách hoạt động, không che giấu thông tin' },
          { id: 'm4', concept: 'Tôn trọng quyền riêng tư', match: 'Không sử dụng, chia sẻ dữ liệu cá nhân trái phép' },
          { id: 'm5', concept: 'Trách nhiệm', match: 'Kiểm tra, đánh giá và chịu trách nhiệm về sản phẩm tạo ra' },
          { id: 'm6', concept: 'Lợi ích xã hội', match: 'Phục vụ con người, cộng đồng và phát triển bền vững' }
        ]
      }
    }
  ],
  4: [
    {
      id: 'ex_p4_quiz',
      type: 'quiz',
      title: 'Bài tập: Nhận diện nguyên tắc đạo đức bị vi phạm',
      description: 'Xác định nguyên tắc đạo đức nào bị vi phạm trong tình huống thực tế.',
      hint: 'Deepfake giả mạo khuôn mặt/giọng nói liên quan trực tiếp đến nguyên tắc nào?',
      suggestedAnswer: 'Deepfake vi phạm nguyên tắc An toàn và Minh bạch vì tạo nội dung giả mạo gây hiểu lầm, có thể gây hại.',
      quizData: {
        question: 'Một video deepfake giả mạo hình ảnh, giọng nói của người khác để lan truyền thông tin sai lệch. Đây là hành vi vi phạm chủ yếu nguyên tắc đạo đức nào?',
        options: [
          'Lợi ích xã hội và Chăm chỉ',
          'An toàn và Minh bạch (gây hiểu lầm, có thể gây hại cho nạn nhân)',
          'Không vi phạm nguyên tắc nào vì chỉ là công nghệ giải trí',
          'Chỉ vi phạm nguyên tắc Công bằng'
        ],
        answerIndex: 1,
        explanation: 'Deepfake che giấu bản chất giả mạo (thiếu minh bạch) và có thể gây tổn hại danh dự, tâm lý cho người bị giả mạo (thiếu an toàn).'
      }
    }
  ],
  5: [
    {
      id: 'ex_p5_quiz',
      type: 'quiz',
      title: 'Bài tập: Phân loại mức độ rủi ro khi dùng AI',
      description: 'Xác định mức độ rủi ro của một tình huống sử dụng AI trong học tập.',
      hint: 'Rủi ro cao thường liên quan đến việc dùng AI thay thế hoàn toàn tư duy hoặc gian lận học thuật.',
      suggestedAnswer: 'Nộp bài do AI viết hoàn toàn mà không kiểm tra, chỉnh sửa là hành vi rủi ro cao, có thể vi phạm liêm chính học thuật.',
      quizData: {
        question: 'Một học sinh dùng AI viết hoàn toàn bài văn rồi nộp làm bài kiểm tra mà không đọc lại. Đây thuộc mức độ rủi ro nào?',
        options: [
          'Rủi ro thấp vì AI viết nhanh và tiện lợi',
          'Rủi ro trung bình, không cần lưu ý gì thêm',
          'Rủi ro cao - vi phạm liêm chính học thuật, mất khả năng tự tư duy',
          'Không có rủi ro nào vì công nghệ hiện đại cho phép làm vậy'
        ],
        answerIndex: 2,
        explanation: 'Việc sao chép nguyên văn sản phẩm AI khi làm bài kiểm tra là rủi ro cao, vi phạm liêm chính học thuật và làm giảm năng lực tự học của học sinh.'
      }
    }
  ],
  6: [
    {
      id: 'ex_p6_tf',
      type: 'true_false',
      title: 'Bài tập: Quyền và trách nhiệm trong hệ sinh thái AI',
      description: 'Xác định đúng/sai về vai trò của các bên trong hệ sinh thái AI.',
      hint: 'Người sử dụng cũng có quyền góp ý xây dựng chính sách, quy định về AI, không chỉ nhà phát triển.',
      suggestedAnswer: '1. Đúng. 2. Sai.',
      trueFalseData: {
        instruction: 'Chọn ĐÚNG hoặc SAI cho từng nhận định:',
        items: [
          {
            id: 'p6_tf1',
            statement: 'Học sinh với tư cách người sử dụng AI cũng có quyền góp ý, đề xuất xây dựng "Quy tắc sử dụng AI trong nhà trường".',
            isTrue: true,
            explanation: 'Đúng. Mỗi cá nhân trong hệ sinh thái AI đều có vai trò và quyền góp ý xây dựng chính sách liên quan.',
            hint: 'Hệ sinh thái AI gồm người phát triển, nhà cung cấp, người sử dụng và cơ quan quản lý.'
          },
          {
            id: 'p6_tf2',
            statement: 'Chỉ người phát triển hệ thống AI mới phải chịu trách nhiệm, người sử dụng AI hoàn toàn không có trách nhiệm gì.',
            isTrue: false,
            explanation: 'Sai. Người sử dụng AI cũng có trách nhiệm sử dụng đúng mục đích, an toàn và báo cáo khi phát hiện sai sót.',
            hint: 'Trách nhiệm được phân chia cho tất cả các bên trong hệ sinh thái AI.'
          }
        ]
      }
    }
  ],
  7: [
    {
      id: 'ex_p7_quiz',
      type: 'quiz',
      title: 'Bài tập: Công cụ mã nguồn mở thiết kế AI',
      description: 'Nhận biết các công cụ mã nguồn mở/miễn phí dùng để thiết kế, huấn luyện AI.',
      hint: 'Teachable Machine không yêu cầu biết lập trình, phù hợp với học sinh phổ thông.',
      suggestedAnswer: 'Teachable Machine là công cụ phù hợp nhất vì miễn phí, không cần lập trình và huấn luyện trực quan trên trình duyệt.',
      quizData: {
        question: 'Công cụ nào sau đây phù hợp nhất để học sinh THPT huấn luyện một mô hình phân loại ảnh đơn giản mà không cần biết lập trình?',
        options: [
          'Teachable Machine (teachablemachine.withgoogle.com)',
          'Một ngôn ngữ lập trình bậc thấp như Assembly',
          'Phần mềm thiết kế đồ hoạ chuyên nghiệp',
          'Hệ điều hành máy chủ Linux'
        ],
        answerIndex: 0,
        explanation: 'Teachable Machine là công cụ mã nguồn mở/miễn phí của Google, cho phép huấn luyện mô hình phân loại trực quan ngay trên trình duyệt, không cần viết code.'
      }
    }
  ],
  8: [
    {
      id: 'ex_p8_tf',
      type: 'true_false',
      title: 'Bài tập: Kiểm thử mô hình đã huấn luyện',
      description: 'Xác định đúng/sai khi thử nghiệm mô hình Teachable Machine với ảnh mới.',
      hint: 'Luôn kiểm thử mô hình với dữ liệu chưa dùng để huấn luyện mới đánh giá đúng độ chính xác thực tế.',
      suggestedAnswer: '1. Đúng. 2. Sai.',
      trueFalseData: {
        instruction: 'Chọn ĐÚNG hoặc SAI:',
        items: [
          {
            id: 'p8_tf1',
            statement: 'Nên kiểm thử mô hình bằng những ảnh chưa từng dùng để huấn luyện để đánh giá đúng độ chính xác thực tế.',
            isTrue: true,
            explanation: 'Đúng. Đây là nguyên tắc kiểm thử cơ bản, tránh đánh giá sai do mô hình chỉ "thuộc lòng" dữ liệu huấn luyện.',
            hint: 'Dữ liệu kiểm thử nên khác dữ liệu huấn luyện.'
          },
          {
            id: 'p8_tf2',
            statement: 'Nếu mô hình dự đoán sai một vài ảnh mới, điều đó có nghĩa công cụ Teachable Machine bị lỗi và không dùng được nữa.',
            isTrue: false,
            explanation: 'Sai. Dự đoán sai là bình thường khi dữ liệu huấn luyện còn ít; cần bổ sung thêm dữ liệu để cải thiện mô hình ở buổi học sau.',
            hint: 'Đây chính là vấn đề sẽ được giải quyết ở buổi học về tối ưu hệ thống AI và cải thiện dữ liệu.'
          }
        ]
      }
    }
  ],
  9: [
    {
      id: 'ex_p9_quiz',
      type: 'quiz',
      title: 'Bài tập: Hiện tượng quá khớp dữ liệu (Overfitting)',
      description: 'Vận dụng khái niệm hàm mục tiêu, tối ưu hoá hệ thống và overfitting.',
      hint: 'Overfitting là khi mô hình học quá kỹ dữ liệu huấn luyện, dẫn đến dự đoán kém với dữ liệu mới.',
      suggestedAnswer: 'Overfitting là hiện tượng mô hình "học vẹt" dữ liệu huấn luyện, dự đoán tốt với dữ liệu cũ nhưng kém với dữ liệu mới.',
      quizData: {
        question: 'Một mô hình dự đoán rất chính xác với ảnh dùng để huấn luyện nhưng lại dự đoán sai nhiều với ảnh mới. Đây là hiện tượng gì?',
        options: [
          'Tối ưu hoá hệ thống thành công',
          'Quá khớp dữ liệu (Overfitting)',
          'Hàm mục tiêu hoạt động sai hoàn toàn',
          'Lỗi phần cứng máy tính'
        ],
        answerIndex: 1,
        explanation: 'Overfitting (quá khớp dữ liệu) xảy ra khi mô hình "học thuộc" dữ liệu huấn luyện thay vì học được quy luật tổng quát, nên dự đoán kém với dữ liệu chưa từng thấy.'
      }
    }
  ],
  10: [
    {
      id: 'ex_p10_tf',
      type: 'true_false',
      title: 'Bài tập: Thu thập dữ liệu cải thiện mô hình',
      description: 'Xác định đúng/sai về việc thu thập, tổ chức dữ liệu phát triển hệ thống AI.',
      hint: 'Khi lấy dữ liệu từ Internet để huấn luyện AI, cần chú ý vấn đề bản quyền.',
      suggestedAnswer: '1. Sai. 2. Đúng.',
      trueFalseData: {
        instruction: 'Chọn ĐÚNG hoặc SAI:',
        items: [
          {
            id: 'p10_tf1',
            statement: 'Có thể tự do tải bất kỳ hình ảnh nào trên Internet để huấn luyện mô hình AI mà không cần quan tâm đến bản quyền.',
            isTrue: false,
            explanation: 'Sai. Cần chú ý vấn đề bản quyền khi lấy dữ liệu từ Internet, chỉ nên dùng ảnh đã được cấp phép hoặc tự chụp.',
            hint: 'KHBD nhấn mạnh: lưu ý vấn đề bản quyền khi lấy dữ liệu từ Internet.'
          },
          {
            id: 'p10_tf2',
            statement: 'Bổ sung thêm dữ liệu đa dạng, chất lượng là một cách hiệu quả để cải thiện độ chính xác của mô hình AI.',
            isTrue: true,
            explanation: 'Đúng. Dữ liệu càng đa dạng và chất lượng, mô hình càng học tốt và dự đoán chính xác hơn.',
            hint: 'Đây là nội dung thực hành chính của buổi học về tối ưu hệ thống AI.'
          }
        ]
      }
    }
  ],
  11: [
    {
      id: 'ex_p11_quiz',
      type: 'quiz',
      title: 'Bài tập: Cấu trúc cơ bản của một AI Agent',
      description: 'Nhận biết khái niệm và cấu trúc cơ bản của một hệ thống tác nhân AI (AI agent).',
      hint: 'AI agent luôn cần: mục tiêu, đầu vào, các bước xử lí, đầu ra và người giám sát.',
      suggestedAnswer: 'AI agent là hệ thống có khả năng tự lập kế hoạch và thực hiện chuỗi hành động để đạt mục tiêu do con người đặt ra, dưới sự giám sát của con người.',
      quizData: {
        question: 'Đâu là mô tả đúng nhất về AI agent?',
        options: [
          'Là hệ thống có khả năng tự lập kế hoạch, thực hiện chuỗi hành động để đạt mục tiêu do con người đặt ra, dưới sự giám sát của con người',
          'Là một phần mềm chỉ trả lời một câu hỏi duy nhất rồi dừng lại, không có mục tiêu',
          'Là robot vật lý duy nhất, không tồn tại dưới dạng phần mềm',
          'Là hệ thống hoạt động hoàn toàn không cần con người giám sát'
        ],
        answerIndex: 0,
        explanation: 'AI agent (tác nhân AI) có khả năng tự lập kế hoạch và thực hiện chuỗi hành động để đạt mục tiêu, nhưng vẫn phải nằm dưới sự giám sát của con người.'
      }
    }
  ],
  12: [
    {
      id: 'ex_p12_tf',
      type: 'true_false',
      title: 'Bài tập: Tổng kết 4 thành phần năng lực AI',
      description: 'Ôn tập tổng hợp 4 thành phần năng lực AI (NLa, NLb, NLc, NLd) đã học qua 6 buổi.',
      hint: 'NLa: quyền kiểm soát & trách nhiệm; NLb: đạo đức & rủi ro; NLc: công cụ & tối ưu hệ thống; NLd: giải pháp & AI agent.',
      suggestedAnswer: '1. Đúng. 2. Đúng.',
      trueFalseData: {
        instruction: 'Chọn ĐÚNG hoặc SAI:',
        items: [
          {
            id: 'p12_tf1',
            statement: 'Chuyên đề Giáo dục AI lớp 12 không tổ chức kiểm tra định kì hay lập đầu điểm riêng, mà đánh giá bằng nhận xét dựa trên minh chứng thu thập qua các buổi học.',
            isTrue: true,
            explanation: 'Đúng, theo Khung giáo dục AI: không tổ chức kiểm tra định kì, đánh giá bằng nhận xét qua rubric 4 thành phần năng lực AI.',
            hint: 'Xem lại phần Phụ lục - Rubric đánh giá chung.'
          },
          {
            id: 'p12_tf2',
            statement: 'Phiếu học tập, sản phẩm thực hành, bài viết vận dụng, bản cam kết và phiếu tự đánh giá đều là những minh chứng được giáo viên tổng hợp để nhận xét kết quả chuyên đề.',
            isTrue: true,
            explanation: 'Đúng. Đây là toàn bộ các minh chứng được thu thập xuyên suốt 6 buổi để đánh giá kết quả học tập chuyên đề của từng học sinh.',
            hint: 'Xem lại Hoạt động 4 - Vận dụng của Tiết 11-12.'
          }
        ]
      }
    }
  ]
};

export function getExercisesForLesson(period: number): InteractiveExercise[] {
  const game = getGameForLesson(period);
  const base = exerciseBank[period] || [];
  return game ? [...base, game] : base;
}
