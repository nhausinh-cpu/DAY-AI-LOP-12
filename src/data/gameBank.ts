import { InteractiveExercise } from '../types';

// Ngân hàng "Trò chơi đố vui tính điểm" - mỗi Tiết có 1 bộ câu hỏi nhanh
// bám sát nội dung Chuyên đề Giáo dục AI - Lớp 12 (KHBD Trường THPT Tân Lược).
export const gameBank: Record<number, InteractiveExercise> = {
  1: {
    id: 'game_p1', type: 'speed_game',
    title: 'Đố Vui: Vòng Đời Hệ Thống AI',
    description: 'Trả lời nhanh 4 câu hỏi về vòng đời AI và quyền kiểm soát của con người.',
    hint: 'Vòng đời AI gồm: xác định vấn đề, thu thập dữ liệu, thiết kế, thử nghiệm, triển khai, giám sát - xử lí sự cố, kết thúc sử dụng.',
    suggestedAnswer: 'Xem giải thích sau mỗi câu trả lời.',
    gameData: {
      instruction: 'Trả lời nhanh trong thời gian giới hạn!', timeLimitSeconds: 20,
      questions: [
        { id: 'g1_1', question: 'Bước nào KHÔNG thuộc vòng đời hệ thống AI?', options: ['Xác định vấn đề', 'Thu thập dữ liệu', 'In ấn tài liệu quảng cáo', 'Giám sát - xử lí sự cố'], answerIndex: 2, explanation: 'Vòng đời AI không bao gồm việc in ấn tài liệu quảng cáo.' },
        { id: 'g1_2', question: 'Ai phải giữ quyền kiểm soát các bước quan trọng trong vòng đời AI?', options: ['Chỉ có AI tự quyết định', 'Con người', 'Không ai cả', 'Chỉ có nhà đầu tư'], answerIndex: 1, explanation: 'Con người luôn phải giữ quyền kiểm soát và chịu trách nhiệm.' },
        { id: 'g1_3', question: 'Trong tình huống AI từ chối hồ sơ vay vốn oan, ai cần giải quyết khiếu nại?', options: ['Bản thân hệ thống AI', 'Ngân hàng/đơn vị triển khai và người giám sát', 'Khách hàng tự giải quyết', 'Không cần giải quyết'], answerIndex: 1, explanation: 'Đơn vị triển khai và người giám sát phải chịu trách nhiệm giải trình.' },
        { id: 'g1_4', question: 'Trách nhiệm giải trình cần đối chiếu với điều gì?', options: ['Sở thích cá nhân', 'Quy định pháp luật hiện hành', 'Ý kiến trên mạng xã hội', 'Không cần đối chiếu gì'], answerIndex: 1, explanation: 'Cần đối chiếu với quy định pháp luật trong nước và quốc tế hiện hành.' }
      ]
    }
  },
  3: {
    id: 'game_p3', type: 'speed_game',
    title: 'Đố Vui: 6 Nguyên Tắc Đạo Đức AI',
    description: 'Trả lời nhanh về 6 nguyên tắc đạo đức khi thiết kế, phát triển AI.',
    hint: 'An toàn, Công bằng, Minh bạch, Riêng tư, Trách nhiệm, Lợi ích xã hội.',
    suggestedAnswer: 'Xem giải thích sau mỗi câu trả lời.',
    gameData: {
      instruction: 'Trả lời nhanh trong thời gian giới hạn!', timeLimitSeconds: 20,
      questions: [
        { id: 'g3_1', question: 'Nguyên tắc nào yêu cầu AI không được gây nguy hiểm cho con người?', options: ['An toàn', 'Minh bạch', 'Lợi ích xã hội', 'Trách nhiệm'], answerIndex: 0, explanation: 'An toàn: không gây nguy hiểm cho con người và môi trường.' },
        { id: 'g3_2', question: 'Nguyên tắc nào yêu cầu tránh thiên vị, phân biệt đối xử trong dữ liệu?', options: ['Riêng tư', 'Công bằng', 'An toàn', 'Chăm chỉ'], answerIndex: 1, explanation: 'Công bằng: tránh thiên vị, phân biệt đối xử trong dữ liệu và kết quả.' },
        { id: 'g3_3', question: 'Một công ty ngừng dùng hệ thống AI tuyển dụng vì thiên vị ứng viên nam. Nguyên tắc nào bị vi phạm?', options: ['Công bằng', 'Chăm chỉ', 'Sáng tạo', 'Tiết kiệm'], answerIndex: 0, explanation: 'Đây là ví dụ điển hình vi phạm nguyên tắc Công bằng.' },
        { id: 'g3_4', question: 'Nguyên tắc nào yêu cầu công khai cách hệ thống AI hoạt động?', options: ['Minh bạch', 'Riêng tư', 'Lợi ích xã hội', 'Trách nhiệm'], answerIndex: 0, explanation: 'Minh bạch: công khai cách hoạt động, không che giấu thông tin.' }
      ]
    }
  },
  5: {
    id: 'game_p5', type: 'speed_game',
    title: 'Đố Vui: Mức Độ Rủi Ro Khi Dùng AI',
    description: 'Trả lời nhanh về cách phân loại và ứng phó rủi ro khi sử dụng AI.',
    hint: 'Rủi ro có thể phân theo dữ liệu, thuật toán, lừa đảo/giả mạo.',
    suggestedAnswer: 'Xem giải thích sau mỗi câu trả lời.',
    gameData: {
      instruction: 'Trả lời nhanh trong thời gian giới hạn!', timeLimitSeconds: 20,
      questions: [
        { id: 'g5_1', question: 'Một hệ thống nhận diện khuôn mặt nhận diện sai nhiều hơn với một số nhóm người dùng. Nguyên nhân có thể do đâu?', options: ['Thiên lệch trong dữ liệu huấn luyện', 'Máy chiếu bị hỏng', 'Học sinh không chú ý', 'Không có nguyên nhân nào'], answerIndex: 0, explanation: 'Dữ liệu huấn luyện thiếu đa dạng có thể khiến mô hình thiên lệch với một số nhóm.' },
        { id: 'g5_2', question: 'Nộp bài do AI viết hoàn toàn mà không kiểm tra là hành vi rủi ro ở mức nào?', options: ['Thấp', 'Trung bình', 'Cao', 'Không có rủi ro'], answerIndex: 2, explanation: 'Đây là rủi ro cao, vi phạm liêm chính học thuật.' },
        { id: 'g5_3', question: 'Ai có quyền góp ý xây dựng "Quy tắc sử dụng AI trong nhà trường"?', options: ['Chỉ giáo viên Tin học', 'Chỉ ban giám hiệu', 'Cả người phát triển, người sử dụng và nhà trường', 'Không ai được góp ý'], answerIndex: 2, explanation: 'Mọi bên trong hệ sinh thái AI đều có quyền và trách nhiệm góp ý.' },
        { id: 'g5_4', question: 'Rủi ro liên quan đến "giả mạo" trong sử dụng AI thường gặp nhất là gì?', options: ['Deepfake, mạo danh', 'Lỗi chính tả', 'Chậm mạng Internet', 'Hết pin laptop'], answerIndex: 0, explanation: 'Deepfake và mạo danh là rủi ro lừa đảo/giả mạo phổ biến khi lạm dụng AI.' }
      ]
    }
  },
  7: {
    id: 'game_p7', type: 'speed_game',
    title: 'Đố Vui: Công Cụ Thiết Kế AI Mã Nguồn Mở',
    description: 'Trả lời nhanh về các công cụ mã nguồn mở/miễn phí để thiết kế, huấn luyện AI.',
    hint: 'Teachable Machine, ML5.js, TensorFlow.js, MIT App Inventor.',
    suggestedAnswer: 'Xem giải thích sau mỗi câu trả lời.',
    gameData: {
      instruction: 'Trả lời nhanh trong thời gian giới hạn!', timeLimitSeconds: 20,
      questions: [
        { id: 'g7_1', question: 'Công cụ nào cho phép huấn luyện mô hình AI trực quan mà không cần viết code?', options: ['Teachable Machine', 'Microsoft Word', 'Windows Explorer', 'Adobe Photoshop'], answerIndex: 0, explanation: 'Teachable Machine là công cụ trực quan, không cần lập trình.' },
        { id: 'g7_2', question: 'Đâu KHÔNG phải là công cụ mã nguồn mở/miễn phí phát triển AI được nêu trong bài?', options: ['ML5.js', 'TensorFlow.js', 'MIT App Inventor', 'Microsoft Excel'], answerIndex: 3, explanation: 'Microsoft Excel không phải công cụ thiết kế, huấn luyện AI trong bài học.' },
        { id: 'g7_3', question: 'Để huấn luyện mô hình phân loại lá cây khoẻ - lá cây bị sâu bệnh, ta cần chuẩn bị gì trước?', options: ['Ảnh mẫu cho từng nhãn phân loại', 'Chỉ cần một tấm ảnh duy nhất', 'Không cần chuẩn bị gì', 'Chỉ cần văn bản mô tả'], answerIndex: 0, explanation: 'Cần chuẩn bị nhiều ảnh mẫu cho mỗi nhãn (lớp) để mô hình học phân loại chính xác.' },
        { id: 'g7_4', question: 'Sau khi huấn luyện, cần làm gì để kiểm tra chất lượng mô hình?', options: ['Thử với ảnh mới chưa dùng để huấn luyện', 'Không cần kiểm tra gì thêm', 'Xoá hết ảnh đã huấn luyện', 'Chia sẻ ngay lên mạng xã hội'], answerIndex: 0, explanation: 'Kiểm thử với dữ liệu mới giúp đánh giá đúng độ chính xác thực tế của mô hình.' }
      ]
    }
  },
  9: {
    id: 'game_p9', type: 'speed_game',
    title: 'Đố Vui: Tối Ưu Hệ Thống & Overfitting',
    description: 'Trả lời nhanh về hàm mục tiêu, tối ưu hoá hệ thống và hiện tượng overfitting.',
    hint: 'Overfitting: mô hình học quá kỹ dữ liệu huấn luyện, dự đoán kém với dữ liệu mới.',
    suggestedAnswer: 'Xem giải thích sau mỗi câu trả lời.',
    gameData: {
      instruction: 'Trả lời nhanh trong thời gian giới hạn!', timeLimitSeconds: 20,
      questions: [
        { id: 'g9_1', question: 'Overfitting (quá khớp dữ liệu) là gì?', options: ['Mô hình học quá kỹ dữ liệu huấn luyện, dự đoán kém với dữ liệu mới', 'Mô hình chạy quá nhanh', 'Máy tính bị quá nhiệt', 'Dữ liệu bị mất hoàn toàn'], answerIndex: 0, explanation: 'Đây là định nghĩa đúng của hiện tượng overfitting.' },
        { id: 'g9_2', question: 'Cách nào giúp cải thiện độ chính xác của mô hình đã huấn luyện?', options: ['Bổ sung thêm dữ liệu đa dạng, chất lượng', 'Xoá bớt dữ liệu đang có', 'Không làm gì cả', 'Đổi tên mô hình'], answerIndex: 0, explanation: 'Bổ sung dữ liệu đa dạng, chất lượng là cách hiệu quả để cải thiện mô hình.' },
        { id: 'g9_3', question: 'Khi lấy ảnh từ Internet để huấn luyện AI, cần lưu ý điều gì?', options: ['Vấn đề bản quyền', 'Định dạng ảnh phải là .doc', 'Không cần lưu ý gì', 'Ảnh phải có màu đỏ'], answerIndex: 0, explanation: 'Cần chú ý bản quyền, chỉ dùng ảnh đã được cấp phép hoặc tự chụp.' },
        { id: 'g9_4', question: 'Đánh giá hiệu quả hệ thống AI thường dựa vào yếu tố nào?', options: ['Độ chính xác, tốc độ, mức độ phù hợp với người dùng', 'Màu sắc giao diện', 'Số lượng quảng cáo', 'Giá bán phần cứng'], answerIndex: 0, explanation: 'Đây là 3 yếu tố chính để đánh giá hiệu quả hệ thống AI theo bài học.' }
      ]
    }
  },
  11: {
    id: 'game_p11', type: 'speed_game',
    title: 'Đố Vui: AI Agent - Tác Nhân Trí Tuệ Nhân Tạo',
    description: 'Trả lời nhanh về khái niệm, cấu trúc AI agent và các vai trò phát triển sản phẩm AI.',
    hint: 'AI agent: mục tiêu - đầu vào - các bước xử lí - đầu ra - người giám sát.',
    suggestedAnswer: 'Xem giải thích sau mỗi câu trả lời.',
    gameData: {
      instruction: 'Trả lời nhanh trong thời gian giới hạn!', timeLimitSeconds: 20,
      questions: [
        { id: 'g11_1', question: 'AI agent là gì?', options: ['Hệ thống tự lập kế hoạch, thực hiện hành động để đạt mục tiêu, dưới sự giám sát của con người', 'Một loại virus máy tính', 'Một trang web tĩnh không có chức năng gì', 'Một loại bàn phím cơ'], answerIndex: 0, explanation: 'Đây là định nghĩa đúng về AI agent theo bài học.' },
        { id: 'g11_2', question: 'Vai trò nào KHÔNG thuộc quá trình phát triển sản phẩm AI theo bài học?', options: ['Đề xuất ý tưởng', 'Lập trình, huấn luyện, kiểm thử', 'Trồng trọt chăn nuôi', 'Không có đáp án sai'], answerIndex: 2, explanation: 'Trồng trọt chăn nuôi không thuộc quy trình phát triển sản phẩm AI.' },
        { id: 'g11_3', question: 'Công cụ nào được dùng trong buổi học để dựng thử một AI agent đơn giản?', options: ['Google AI Studio', 'Microsoft Paint', 'Google Maps', 'Adobe Premiere'], answerIndex: 0, explanation: 'Buổi học sử dụng tài khoản Google AI Studio do giáo viên/nhà trường quản lý.' },
        { id: 'g11_4', question: 'Trước khi đưa AI agent vào sử dụng thực tế, bước nào quan trọng nhất?', options: ['Kiểm thử', 'Quảng cáo rầm rộ', 'Đặt tên thật kêu', 'Không cần bước nào'], answerIndex: 0, explanation: 'Kiểm thử giúp phát hiện và khắc phục rủi ro trước khi vận hành thực tế.' }
      ]
    }
  }
};

export function getGameForLesson(period: number): InteractiveExercise | undefined {
  return gameBank[period];
}
