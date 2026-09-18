import { Lesson } from '../types';
import { svgVisual } from './visual';

// BUỔI 4 - TIẾT 7-8
// Chuyên đề 3: Công cụ & kĩ thuật làm AI - Mạch C: Kĩ thuật và ứng dụng AI
// Yêu cầu cần đạt: 12.C2.1 + 12.C3.1 (Tiết 7); 12.C3.2 (Tiết 8)
export const module4: Lesson[] = [
  {
    period: 7,
    title: 'Chọn Ý Tưởng & Làm Quen Công Cụ Tạo AI',
    description: 'Làm quen một số công cụ mã nguồn mở/miễn phí để thiết kế AI (Teachable Machine, ML5.js, TensorFlow.js, MIT App Inventor, Google Colab) và chọn ý tưởng dự án phù hợp.',
    objectives: [
      '12.C2.1 · 12.C3.1: Lựa chọn được ý tưởng thiết kế công cụ AI; nêu được một số công cụ mã nguồn mở/miễn phí để thiết kế, huấn luyện và phát triển hệ thống AI.',
      'Kể tên và nêu công dụng một số công cụ mã nguồn mở/miễn phí: Teachable Machine, ML5.js, TensorFlow.js, MIT App Inventor, Google Colab; biết chọn công cụ phù hợp với mục đích.',
      'Đề xuất được ý tưởng công cụ AI cho một vấn đề thực tế và chọn công cụ phù hợp.'
    ],
    slides: [
      {
        id: 'l7_s1', title: 'Khởi Động: Làm Sao "Máy" Học Được Cách Nhận Ra Đồ Vật?', visualType: 'intro',
        content: [
          '📘 Tiết 7: Chọn ý tưởng & làm quen công cụ tạo AI.',
          '🎥 GV demo mô hình Teachable Machine nhận ra đồ vật đưa lên camera.',
          '❓ Theo các em, làm sao "máy" học được cách nhận ra chúng?',
          '💡 Dự kiến: HS nhớ lại - máy học từ dữ liệu (ví dụ) đã học ở các buổi trước.'
        ],
        visualUrl: svgVisual('Làm Quen Công Cụ Tạo AI', 'Demo Teachable Machine nhận diện đồ vật qua camera', '#065f46', '#0d9488', '🎥'),
        speakerNotes: 'GV demo trực tiếp mô hình Teachable Machine (hoặc video minh hoạ nếu không có phòng máy) để gây tò mò về việc tự tạo AI, dẫn vào các công cụ mã nguồn mở/miễn phí.'
      },
      {
        id: 'l7_s2', title: 'Các Công Cụ Tạo AI Miễn Phí', visualType: 'concepts',
        content: [
          '🖼️ Teachable Machine: huấn luyện mô hình nhận diện hình ảnh/âm thanh/tư thế bằng kéo-thả, không cần lập trình - phù hợp người mới, làm nhanh mô hình nhận diện.',
          '🌐 ML5.js: thư viện AI chạy trên trình duyệt, dễ dùng cho người mới học lập trình web - phù hợp khi muốn nhúng AI vào trang web đơn giản.',
          '⚙️ TensorFlow.js: thư viện AI mạnh, chạy AI ngay trên trình duyệt - phù hợp khi cần mô hình mạnh hơn, tuỳ biến cao.',
          '📱 MIT App Inventor: làm ứng dụng điện thoại có tích hợp AI bằng kéo-thả - phù hợp khi muốn tạo app di động.',
          '💻 Google Colab (làm quen): nơi chạy mã Python/AI trực tuyến, không cần cài đặt - phù hợp học sinh khá muốn thử viết vài dòng Python.'
        ],
        visualUrl: svgVisual('5 Công Cụ Tạo AI Miễn Phí', 'Teachable Machine - ML5.js - TensorFlow.js - App Inventor - Colab', '#064e3b', '#0f766e', '🧰'),
        speakerNotes: 'Giới thiệu từng công cụ kèm ví dụ, học sinh ghi bảng "công cụ ↔ việc làm được". Chốt ghi nhớ: chọn công cụ theo MỤC ĐÍCH - nhận diện hình/âm thanh dùng Teachable Machine, làm app điện thoại dùng App Inventor, nhúng web dùng ML5.js/TensorFlow.js.'
      },
      {
        id: 'l7_s3', title: 'Luyện Tập Nhóm: Ý Tưởng - Công Cụ - Lý Do', visualType: 'interactive',
        content: [
          '💡 Nhóm nêu 3 ý tưởng AI gần gũi (ví dụ: phân loại rác tái chế, nhắc lịch tưới cây, dịch tiếng dân tộc thiểu số) → chọn công cụ phù hợp cho mỗi ý tưởng + lí do.',
          '🎯 Cuối buổi mỗi nhóm CHỐT 1 ý tưởng để phát triển thành dự án ở Chuyên đề 4.',
          '✅ Sản phẩm: Bảng "Ý tưởng ↔ Công cụ ↔ Lý do" (Phiếu học tập số 7).'
        ],
        interactiveQuiz: {
          question: 'Nhóm muốn làm một mô hình AI nhận diện các loại rác tái chế qua camera điện thoại để phân loại tại chỗ, không cần lập trình phức tạp. Công cụ nào phù hợp nhất?',
          options: [
            'Teachable Machine, vì huấn luyện mô hình nhận diện hình ảnh bằng kéo-thả, không cần lập trình',
            'Google Colab, vì cần viết mã Python phức tạp',
            'MIT App Inventor, vì chỉ dùng để làm ứng dụng điện thoại thuần túy',
            'Không công cụ nào trong danh sách phù hợp'
          ],
          answerIndex: 0,
          explanation: 'Teachable Machine là công cụ phù hợp nhất để huấn luyện mô hình nhận diện hình ảnh (phân loại rác) một cách nhanh chóng, không cần lập trình, đúng với mục đích của nhóm.',
          hint: 'Nhớ ghi nhớ: nhận diện hình/âm thanh → Teachable Machine.',
          suggestedAnswer: 'Chọn Teachable Machine vì phù hợp với việc huấn luyện mô hình nhận diện hình ảnh nhanh chóng mà không cần biết lập trình.'
        },
        speakerNotes: 'Các nhóm thảo luận và điền bảng ý tưởng - công cụ - lý do; GV nhấn mạnh việc chốt 1 ý tưởng cuối buổi để làm nền tảng phát triển dự án ở Chuyên đề 4 (Tiết 9-12).'
      },
      {
        id: 'l7_s4', title: 'Vận Dụng: Chốt Ý Tưởng Dự Án Của Nhóm', visualType: 'activity',
        content: [
          '🗣️ Nhóm hãy chốt 1 ý tưởng mà cả nhóm thích nhất để phát triển thành sản phẩm ở các tiết sau. Vì sao chọn ý tưởng đó?',
          '📌 Bài tập về nhà: tìm hiểu thêm 1 công cụ AI miễn phí khác và cho biết nó dùng để làm gì; mô tả ý tưởng dự án nhóm bằng 4-5 câu (giải quyết vấn đề gì, dùng công cụ nào).'
        ],
        activity: {
          title: 'Bài tập vận dụng: Chốt ý tưởng dự án AI của nhóm',
          duration: 'Chốt ý tưởng tại lớp + mô tả chi tiết ở nhà',
          instructions: [
            '1. Tìm hiểu thêm 1 công cụ AI miễn phí khác (ngoài 5 công cụ đã học) và cho biết nó dùng để làm gì.',
            '2. Mô tả ý tưởng dự án nhóm em bằng 4-5 câu: giải quyết vấn đề gì, dùng công cụ nào.'
          ],
          tips: 'Ý tưởng dự án nên gần gũi, khả thi với điều kiện thực tế của nhóm (dữ liệu dễ thu thập, công cụ dễ tiếp cận).',
          hint: 'Ghi lại đúng vào ô "Ý tưởng dự án nhóm chốt" trong Phiếu học tập số 7 để dùng lại ở Tiết 9.',
          suggestedAnswer: 'Ý tưởng dự án cần nêu rõ: vấn đề cần giải quyết, đối tượng sử dụng, và công cụ AI dự kiến dùng - đây sẽ là nền tảng cho các tiết thiết kế và thực hành tiếp theo.'
        },
        speakerNotes: 'GV chốt bài, lưu lại ý tưởng dự án của từng nhóm để dùng xuyên suốt Chuyên đề 4 (Tiết 9-12). Dặn dò Tiết 8 sẽ học cách đánh giá AI làm tốt hay chưa.'
      }
    ]
  },
  {
    period: 8,
    title: 'Đánh Giá Hiệu Quả Hệ Thống AI',
    description: 'Nêu được các cách đánh giá hiệu quả một hệ thống AI (dữ liệu kiểm thử mới, độ chính xác, loại lỗi, tốc độ, công bằng, an toàn) và thực hành đánh giá một mô hình.',
    objectives: [
      '12.C3.2: Nêu được ví dụ về cách đánh giá hiệu quả của một hệ thống AI.',
      'Nêu được các cách đánh giá hiệu quả một hệ thống AI (độ chính xác, loại lỗi, tốc độ, công bằng, an toàn); hiểu vai trò của dữ liệu kiểm thử mới trong đánh giá.',
      'Thử một mô hình với dữ liệu mới, đếm đúng/sai và tính độ chính xác; đề xuất cải thiện.'
    ],
    slides: [
      {
        id: 'l8_s1', title: 'Khởi Động: Làm Sao Biết Một Mô Hình AI Là Tốt Hay Chưa Tốt?', visualType: 'intro',
        content: [
          '🔁 Ôn nhanh: nhắc lại các công cụ tạo AI miễn phí và ý tưởng dự án nhóm đã chốt ở Tiết 7.',
          '🎥 GV cho mô hình chạy thử vài ảnh - có ảnh nó đoán sai.',
          '❓ Làm sao để biết một mô hình AI là TỐT hay CHƯA TỐT?',
          '💡 Dự đoán của học sinh trước khi vào bài mới.'
        ],
        visualUrl: svgVisual('Đánh Giá Hiệu Quả Hệ Thống AI', 'Mô hình đoán sai - làm sao biết AI tốt hay chưa?', '#78350f', '#b45309', '📊'),
        speakerNotes: 'Cho mô hình chạy thử một vài ảnh có kết quả sai để học sinh nhận ra: không thể tin AI ngay, cần có cách đánh giá khách quan.'
      },
      {
        id: 'l8_s2', title: 'Các Cách Đánh Giá Hiệu Quả AI', visualType: 'concepts',
        content: [
          '🆕 Dùng dữ liệu kiểm thử MỚI: thử với dữ liệu AI CHƯA từng học để biết nó có thực sự giỏi không.',
          '🎯 Độ chính xác: đếm số lần đúng / tổng số lần thử (ví dụ đúng 8/10 = 80%).',
          '⚠️ Loại lỗi: xem AI hay "nhận nhầm" (báo có mà không có) hay "bỏ sót" (có mà không báo).',
          '⏱️ Tốc độ: AI trả kết quả nhanh hay chậm.',
          '⚖️ Công bằng & an toàn: AI có đối xử công bằng với mọi nhóm, có gây hại không.'
        ],
        visualUrl: svgVisual('Cách Đánh Giá Hệ Thống AI', 'Dữ liệu mới → Độ chính xác → Loại lỗi → Tốc độ → Công bằng', '#7c2d12', '#c2410c', '🎯'),
        speakerNotes: 'Hướng dẫn: dùng dữ liệu kiểm thử mới → đếm đúng/sai → tính độ chính xác → xem AI nhận nhầm hay bỏ sót → xét tốc độ, công bằng, an toàn. Nhấn mạnh: nếu chỉ thử bằng đúng dữ liệu AI đã học thì nó luôn "đúng" - phải thử bằng dữ liệu MỚI mới biết thật sự giỏi hay không.'
      },
      {
        id: 'l8_s3', title: 'Luyện Tập Nhóm: Kiểm Thử Một Mô Hình Với 10 Mẫu Mới', visualType: 'interactive',
        content: [
          '🧪 Nhóm thử mô hình có sẵn với 10 mẫu MỚI → ghi đúng/sai từng mẫu, tính độ chính xác (%), chỉ ra mô hình sai ở trường hợp nào.',
          '✅ Sản phẩm: Bảng kết quả kiểm thử + nhận xét của nhóm (Phiếu học tập số 8).'
        ],
        interactiveQuiz: {
          question: 'Một nhóm thử mô hình Teachable Machine với 10 mẫu ảnh mới và có 8 mẫu đoán đúng. Độ chính xác của mô hình là bao nhiêu?',
          options: ['60%', '70%', '80%', '90%'],
          answerIndex: 2,
          explanation: 'Độ chính xác = số đúng / tổng số lần thử = 8/10 = 80%. Đây là cách tính độ chính xác cơ bản khi đánh giá một hệ thống AI.',
          hint: 'Công thức: Độ chính xác = số đúng / tổng số mẫu thử.',
          suggestedAnswer: '8/10 = 80% - nhóm cần tiếp tục xem xét mô hình sai ở trường hợp nào để đề xuất cách cải thiện.'
        },
        speakerNotes: 'Các nhóm thực hành thử mô hình với 10 mẫu mới, đếm đúng/sai, tính phần trăm độ chính xác, chỉ ra mô hình hay sai ở trường hợp nào (nhận nhầm hay bỏ sót).'
      },
      {
        id: 'l8_s4', title: 'Vận Dụng: Đề Xuất Cách Cải Thiện Mô Hình', visualType: 'activity',
        content: [
          '🗣️ Từ kết quả vừa thử, nhóm đề xuất 2 cách để mô hình đúng hơn (ví dụ: thêm dữ liệu đa dạng, chụp ảnh rõ hơn, cân bằng các nhóm dữ liệu).',
          '📌 Bài tập về nhà: giải thích bằng ví dụ vì sao phải thử AI bằng dữ liệu mới; nếu một AI nhận diện khuôn mặt đúng 6/10, theo em có nên dùng để mở khoá điện thoại không? Vì sao?'
        ],
        activity: {
          title: 'Bài tập vận dụng: Cải thiện và đánh giá độ tin cậy của AI',
          duration: 'Đề xuất tại lớp + trả lời câu hỏi ở nhà',
          instructions: [
            '1. Giải thích bằng ví dụ: vì sao phải thử AI bằng dữ liệu mới?',
            '2. Nếu một AI nhận diện khuôn mặt đúng 6/10, theo em có nên dùng để mở khoá điện thoại không? Vì sao?'
          ],
          tips: 'Liên hệ với kết quả kiểm thử 10 mẫu vừa thực hiện ở hoạt động luyện tập.',
          hint: 'Với ứng dụng liên quan đến an toàn (mở khoá điện thoại), độ chính xác 60% là quá thấp và rủi ro cao.',
          suggestedAnswer: 'Không nên dùng AI đúng 6/10 (60%) để mở khoá điện thoại vì độ chính xác quá thấp, rủi ro bảo mật cao; cần cải thiện độ chính xác trước khi đưa vào sử dụng cho mục đích quan trọng.'
        },
        speakerNotes: 'GV chốt bài, dặn dò Tiết 9 sẽ chuyển sang Chuyên đề 4 - Thiết kế & phát triển hệ thống AI, bắt đầu từ 5 thành phần cơ bản của một hệ thống AI.'
      },
      {
        id: 'l8_s5', title: 'Tổng Kết Buổi 4', visualType: 'summary',
        content: [
          '✅ Các em đã đạt được: biết 5 công cụ mã nguồn mở/miễn phí để tạo AI và chọn ý tưởng dự án phù hợp; nêu được các cách đánh giá hiệu quả một hệ thống AI và thực hành kiểm thử một mô hình.',
          '🧠 Ghi nhớ: đánh giá AI = thử với DỮ LIỆU MỚI → tính ĐỘ CHÍNH XÁC → xem AI SAI ở đâu → đề xuất cải thiện (thường là bổ sung dữ liệu tốt hơn).',
          '➡️ Buổi tiếp theo (Tiết 9-10): Phương án thiết kế & vận hành hệ thống AI (5 thành phần) - Các vai trò trong nhóm phát triển AI.'
        ],
        visualUrl: svgVisual('Hoàn Thành Buổi 4', 'Sẵn sàng cho Buổi 5: Thiết kế hệ thống AI', '#78350f', '#b45309', '🏁'),
        speakerNotes: 'Chốt lại kiến thức trọng tâm buổi học (công cụ tạo AI, đánh giá hiệu quả hệ thống AI), kết nối sang Chuyên đề 4 về thiết kế và phát triển hệ thống AI ở buổi tiếp theo.'
      }
    ]
  }
];
