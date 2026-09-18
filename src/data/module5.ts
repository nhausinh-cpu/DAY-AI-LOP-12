import { Lesson } from '../types';
import { svgVisual } from './visual';

// BUỔI 5 - TIẾT 9-10
// Chủ đề: TÙY CHỈNH, TỐI ƯU HỆ THỐNG AI - THU THẬP, CẢI THIỆN DỮ LIỆU
// Yêu cầu cần đạt: 12.C3.2; 12.C3.MR2; 12.C3.MR3; 12.C4.MR1; 12.C4.MR2
export const module5: Lesson[] = [
  {
    period: 9,
    title: 'Tối Ưu Hệ Thống AI Và Cải Thiện Dữ Liệu (Phần 1)',
    description: 'Tìm hiểu cách đánh giá hiệu quả hệ thống AI, khái niệm overfitting và cải thiện dữ liệu.',
    objectives: [
      'Nêu ví dụ về cách thức đánh giá hiệu quả của hệ thống AI.',
      'Trình bày khái niệm cơ bản: hàm mục tiêu, tối ưu hoá hệ thống, quá khớp dữ liệu (overfitting).',
      'Thu thập và tổ chức dữ liệu đáp ứng yêu cầu phát triển hệ thống AI.'
    ],
    slides: [
      {
        id: 'l9_s1', title: 'Tối Ưu Hệ Thống AI Và Cải Thiện Dữ Liệu', visualType: 'title',
        content: [
          '📘 Tiết 9-10: Tùy chỉnh, tối ưu hệ thống AI - Thu thập, cải thiện dữ liệu',
          '🎯 Học xong buổi này, các em sẽ: nêu được cách đánh giá hiệu quả hệ thống AI; hiểu hàm mục tiêu và hiện tượng quá khớp dữ liệu (overfitting); thu thập, tổ chức và cải thiện được dữ liệu để phát triển hệ thống AI.'
        ],
        visualUrl: svgVisual('Tối Ưu Hệ Thống AI', 'Hàm mục tiêu • Overfitting • Cải thiện dữ liệu', '#065f46', '#0d9488', '📈'),
        speakerNotes: 'Giới thiệu buổi 5, tiếp nối trực tiếp từ mô hình Teachable Machine đã huấn luyện ở Buổi 4, đi sâu vào việc cải thiện độ chính xác.'
      },
      {
        id: 'l9_s2', title: 'Khởi Động: Vì Sao Mô Hình Dự Đoán Sai?', visualType: 'intro',
        content: [
          '🔁 1-2 nhóm nhắc lại trường hợp mô hình dự đoán sai ở buổi trước.',
          '❓ Câu hỏi: "Vì sao mô hình lại dự đoán sai và làm sao để cải thiện?"',
          '💭 Học sinh nhớ lại, trao đổi nhanh, 2-3 nhóm chia sẻ.'
        ],
        visualUrl: svgVisual('Vì Sao Mô Hình Sai?', 'Ôn lại kết quả kiểm thử Teachable Machine Buổi 4', '#134e4a', '#0f766e', '🔍'),
        answerHint: 'Gợi ý: thường do dữ liệu huấn luyện còn ít hoặc chưa đa dạng.',
        speakerNotes: 'Dẫn dắt vào nội dung tối ưu hệ thống AI và cải thiện dữ liệu, kết nối trực tiếp với hoạt động thực hành Buổi 4.'
      },
      {
        id: 'l9_s3', title: 'Đánh Giá Hiệu Quả Hệ Thống AI', visualType: 'concepts',
        content: [
          '🎯 Độ chính xác (accuracy): tỉ lệ dự đoán đúng trên tổng số lần dự đoán.',
          '⚡ Tốc độ: thời gian xử lý, phản hồi của hệ thống.',
          '😊 Mức độ phù hợp với người dùng: hệ thống có dễ sử dụng, đáp ứng đúng nhu cầu thực tế hay không.'
        ],
        visualUrl: svgVisual('Đánh Giá Hiệu Quả AI', 'Độ chính xác - Tốc độ - Phù hợp người dùng', '#0f766e', '#059669', '📊'),
        speakerNotes: 'Trình bày 3 tiêu chí đánh giá hiệu quả hệ thống AI.'
      },
      {
        id: 'l9_s4', title: 'Hàm Mục Tiêu, Tối Ưu Hoá Và Overfitting', visualType: 'concepts',
        content: [
          '🎯 Hàm mục tiêu (objective function): thước đo mà mô hình cố gắng tối ưu (ví dụ: giảm tỉ lệ dự đoán sai).',
          '⚙️ Tối ưu hoá hệ thống: quá trình điều chỉnh mô hình để đạt kết quả tốt nhất theo hàm mục tiêu.',
          '⚠️ Quá khớp dữ liệu (Overfitting): mô hình "học thuộc" dữ liệu huấn luyện, dự đoán rất tốt với dữ liệu cũ nhưng kém với dữ liệu mới.',
          '💡 Ví dụ trực quan: học sinh học thuộc lòng đề mẫu nhưng không hiểu bản chất, thi đề khác dạng sẽ làm sai.'
        ],
        visualUrl: svgVisual('Overfitting Là Gì?', 'Mô hình học thuộc lòng - không khái quát hoá được', '#134e4a', '#0891b2', '🧠'),
        speakerNotes: 'Đây là nội dung khó nhất của buổi học - nên dùng ví dụ trực quan gần gũi (học thuộc lòng vs hiểu bản chất) để học sinh dễ hình dung khái niệm overfitting.'
      },
      {
        id: 'l9_s5', title: 'Thực Hành: Bổ Sung Dữ Liệu Cải Thiện Mô Hình', visualType: 'activity',
        content: [
          '📸 Thu thập thêm ảnh mẫu mới cho mô hình Teachable Machine đã huấn luyện ở Buổi 4.',
          '🔁 Huấn luyện lại mô hình với dữ liệu đã bổ sung.',
          '📊 So sánh kết quả trước - sau khi bổ sung dữ liệu.'
        ],
        activity: {
          title: 'Cải thiện mô hình bằng dữ liệu bổ sung',
          duration: 'Thực hành nhóm tại phòng máy',
          instructions: [
            'Mở lại dự án Teachable Machine đã huấn luyện ở Buổi 4.',
            'Chụp/thu thập thêm ảnh mẫu mới cho mỗi nhãn (đa dạng góc chụp, ánh sáng).',
            'Huấn luyện lại mô hình (Train Model) với dữ liệu đã bổ sung.',
            'So sánh kết quả kiểm thử trước và sau khi bổ sung dữ liệu, hoàn thành Phiếu học tập số 5.'
          ],
          tips: 'Ghi lại cụ thể tỉ lệ đúng/sai trước và sau để thấy rõ hiệu quả của việc bổ sung dữ liệu.',
          hint: 'Nếu mô hình đã khá chính xác, hãy thử thêm ảnh ở điều kiện khó hơn (ánh sáng yếu, góc chụp lạ) để kiểm tra độ bền vững.',
          suggestedAnswer: 'Kết quả mong đợi: sau khi bổ sung dữ liệu, tỉ lệ dự đoán đúng của mô hình tăng lên so với trước.'
        },
        speakerNotes: 'Hoạt động Hình thành kiến thức trọng tâm của buổi - thực hành trực tiếp kĩ năng thu thập, tổ chức và cải thiện dữ liệu.'
      },
      {
        id: 'l9_s6', title: 'Luyện Tập: Nguồn Dữ Liệu Bổ Sung', visualType: 'interactive',
        content: [
          '📋 Liệt kê 3 nguồn dữ liệu có thể thu thập thêm để cải thiện mô hình của nhóm.'
        ],
        interactiveQuiz: {
          question: 'Khi tìm ảnh trên Internet để bổ sung dữ liệu huấn luyện, học sinh cần lưu ý điều gì quan trọng nhất?',
          options: [
            'Ảnh phải có độ phân giải thật cao',
            'Vấn đề bản quyền - chỉ nên dùng ảnh đã được cấp phép sử dụng',
            'Ảnh phải có màu sắc bắt mắt',
            'Không cần lưu ý gì, cứ tải về sử dụng thoải mái'
          ],
          answerIndex: 1,
          explanation: 'Cần đặc biệt lưu ý vấn đề bản quyền khi lấy dữ liệu từ Internet - chỉ nên dùng ảnh đã được cấp phép hoặc tự chụp để tránh vi phạm bản quyền.',
          hint: 'GV đã nhấn mạnh nội dung này khi hướng dẫn liệt kê nguồn dữ liệu.',
          suggestedAnswer: 'Ba nguồn dữ liệu gợi ý: (1) tự chụp thêm ảnh thực tế, (2) tìm ảnh trên Internet đã được cấp phép sử dụng, (3) xin dữ liệu từ nhóm khác trong lớp.'
        },
        speakerNotes: 'Củng cố kĩ năng thu thập và tổ chức dữ liệu, đặc biệt nhấn mạnh vấn đề bản quyền khi thu thập dữ liệu từ Internet.'
      }
    ]
  },
  {
    period: 10,
    title: 'Thu Thập, Cải Thiện Dữ Liệu (Phần 2)',
    description: 'Xác định nền tảng, công cụ tiếp tục phát triển ý tưởng công cụ AI của nhóm.',
    objectives: [
      'Phân tích, xác định nền tảng/công cụ phát triển AI phù hợp cho ý tưởng của nhóm.',
      'Đánh giá khả năng tối ưu hệ thống AI thông qua cập nhật công nghệ, kĩ thuật mới.',
      'Chuẩn bị cho buổi báo cáo tổng kết chuyên đề ở Tiết 11-12.'
    ],
    slides: [
      {
        id: 'l10_s1', title: 'Ôn Lại: Overfitting Và Cải Thiện Dữ Liệu', visualType: 'intro',
        content: [
          '🔁 Nhắc lại khái niệm overfitting và cách cải thiện mô hình bằng dữ liệu bổ sung.',
          '📊 1-2 nhóm chia sẻ kết quả so sánh trước - sau khi bổ sung dữ liệu ở Tiết 9.'
        ],
        visualUrl: svgVisual('Ôn Tập Nhanh', 'Overfitting và cải thiện dữ liệu mô hình AI', '#134e4a', '#0d9488', '🔁'),
        speakerNotes: 'Ôn lại nhanh kiến thức Tiết 9 trước khi chuyển sang xác định nền tảng/công cụ phát triển tiếp theo.'
      },
      {
        id: 'l10_s2', title: 'Xác Định Nền Tảng, Công Cụ Phát Triển AI Phù Hợp', visualType: 'concepts',
        content: [
          '🧭 Dựa trên ý tưởng công cụ AI đã đề xuất ở Buổi 4, mỗi nhóm xác định nền tảng/công cụ phù hợp để tiếp tục phát triển.',
          '🔧 Có thể tiếp tục dùng Teachable Machine, hoặc chuyển sang MIT App Inventor/Google AI Studio tuỳ mục tiêu.',
          '📈 Đánh giá khả năng tối ưu hệ thống AI thông qua cập nhật công nghệ, kĩ thuật mới (ví dụ: dùng mô hình có sẵn, dùng thêm cảm biến...).'
        ],
        visualUrl: svgVisual('Chọn Nền Tảng Phù Hợp', 'Teachable Machine • MIT App Inventor • Google AI Studio', '#0c4a6e', '#0d9488', '🧭'),
        speakerNotes: 'Nội dung này giúp học sinh biết lựa chọn công cụ và nền tảng phù hợp với mục tiêu cụ thể của dự án nhóm.'
      },
      {
        id: 'l10_s3', title: 'Thực Hành: Kế Hoạch Hoàn Thiện Sản Phẩm', visualType: 'activity',
        content: [
          '📋 Mỗi nhóm lập kế hoạch hoàn thiện sản phẩm/ý tưởng công cụ AI của mình.',
          '🗓️ Chuẩn bị cho buổi báo cáo tổng kết chuyên đề ở Tiết 11-12 (dùng Google AI Studio).'
        ],
        activity: {
          title: 'Lập kế hoạch hoàn thiện sản phẩm nhóm',
          duration: 'Thảo luận nhóm tại lớp',
          instructions: [
            'Xác định nền tảng/công cụ nhóm sẽ dùng để hoàn thiện ý tưởng công cụ AI.',
            'Phân công nhiệm vụ cụ thể cho từng thành viên (thu thập dữ liệu, thiết kế, thuyết trình...).',
            'Ghi lại kế hoạch để chuẩn bị cho buổi báo cáo tổng kết (Tiết 11-12).'
          ],
          tips: 'Phân công rõ vai trò giống như trong thực tế phát triển sản phẩm AI: người đề xuất ý tưởng, người huấn luyện mô hình, người kiểm thử, người thuyết trình.',
          hint: 'Liên hệ với ý tưởng công cụ AI đã đề xuất ở Buổi 4 (Tiết 7-8).',
          suggestedAnswer: 'Kế hoạch cần nêu rõ: nền tảng sẽ dùng, phân công nhiệm vụ, thời hạn hoàn thành trước Tiết 11-12.'
        },
        speakerNotes: 'Đây là bước chuẩn bị quan trọng để các nhóm sẵn sàng cho hoạt động dựng thử AI agent bằng Google AI Studio ở Buổi 6.'
      },
      {
        id: 'l10_s4', title: 'Luyện Tập: Đánh Giá Khả Năng Tối Ưu', visualType: 'interactive',
        content: [
          '🔧 Xác định giải pháp tối ưu phù hợp cho một hệ thống AI cụ thể.'
        ],
        interactiveQuiz: {
          question: 'Mô hình phân loại rác của một nhóm đã khá chính xác nhưng chạy chậm khi dùng trên điện thoại. Giải pháp tối ưu nào phù hợp nhất?',
          options: [
            'Bỏ hẳn dự án vì không thể tối ưu được',
            'Cập nhật, điều chỉnh kĩ thuật (ví dụ giảm kích thước ảnh đầu vào) để tăng tốc độ xử lý',
            'Thêm thật nhiều nhãn phân loại không liên quan',
            'Không cần làm gì, tốc độ chậm không ảnh hưởng gì'
          ],
          answerIndex: 1,
          explanation: 'Tối ưu hệ thống AI có thể thực hiện bằng cách cập nhật công nghệ, kĩ thuật mới (như giảm kích thước dữ liệu đầu vào) để cải thiện tốc độ mà vẫn giữ độ chính xác chấp nhận được.',
          hint: 'Nhớ lại 3 tiêu chí đánh giá hiệu quả hệ thống AI: độ chính xác, tốc độ, mức độ phù hợp.',
          suggestedAnswer: 'Nên điều chỉnh kỹ thuật để cân bằng giữa tốc độ xử lý và độ chính xác, phù hợp với thiết bị sử dụng thực tế.'
        },
        speakerNotes: 'Củng cố kĩ năng đánh giá và đề xuất giải pháp tối ưu hệ thống AI phù hợp với điều kiện thực tế.'
      },
      {
        id: 'l10_s5', title: 'Vận Dụng: Xác Định Công Cụ Cho Buổi Tổng Kết', visualType: 'activity',
        content: [
          '🛠️ Mỗi nhóm xác định nền tảng/công cụ sẽ tiếp tục sử dụng để phát triển ý tưởng công cụ AI.',
          '📤 Nộp bản xác định công cụ, kế hoạch hoàn thiện sản phẩm.'
        ],
        activity: {
          title: 'Xác định công cụ và kế hoạch cho buổi tổng kết',
          duration: 'Hoàn thiện cuối tiết, chuẩn bị cho Tiết 11-12',
          instructions: [
            'Ghi rõ nền tảng/công cụ nhóm sẽ dùng ở buổi tổng kết (ví dụ: Google AI Studio).',
            'Tóm tắt lại ý tưởng công cụ AI của nhóm để chuẩn bị thuyết trình.',
            'Nộp bản xác định công cụ, kế hoạch hoàn thiện sản phẩm.'
          ],
          tips: 'Chuẩn bị trước một vài câu mô tả ý tưởng bằng ngôn ngữ tự nhiên, vì buổi sau sẽ dùng Google AI Studio để mô tả ý tưởng tạo AI agent.',
          hint: 'Nghĩ theo cấu trúc: mục tiêu - đầu vào - các bước xử lí - đầu ra - người giám sát (sẽ học ở buổi sau).',
          suggestedAnswer: 'Bản xác định công cụ cần nêu: tên nền tảng sẽ dùng (Google AI Studio), tóm tắt ý tưởng, và những việc còn cần hoàn thiện.'
        },
        speakerNotes: 'GV thu bản xác định công cụ và kế hoạch, chuẩn bị dữ liệu đầu vào cho hoạt động dựng thử AI agent ở Buổi 6.'
      },
      {
        id: 'l10_s6', title: 'Tổng Kết Buổi 5', visualType: 'summary',
        content: [
          '✅ Các em đã đạt được: nêu cách đánh giá hiệu quả hệ thống AI; hiểu hàm mục tiêu và hiện tượng overfitting; thu thập, tổ chức, cải thiện dữ liệu để phát triển hệ thống AI.',
          '🧠 Ghi nhớ: đánh giá hiệu quả AI, overfitting, cách cải thiện dữ liệu và tối ưu hệ thống.',
          '➡️ Buổi cuối cùng (Tiết 11-12): Giải pháp hệ thống AI - Phát triển hệ thống tác nhân AI (AI Agent) và tổng kết chuyên đề.'
        ],
        visualUrl: svgVisual('Hoàn Thành Buổi 5', 'Sẵn sàng cho Buổi 6: AI Agent & Tổng kết chuyên đề', '#065f46', '#0d9488', '🏁'),
        speakerNotes: 'Chốt kiến thức trọng tâm buổi 5, tạo tâm thế sẵn sàng cho buổi tổng kết chuyên đề với hoạt động dựng thử AI agent.'
      }
    ]
  }
];
