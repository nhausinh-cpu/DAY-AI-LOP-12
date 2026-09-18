import { Lesson } from '../types';
import { svgVisual } from './visual';

// BUỔI 4 - TIẾT 7-8
// Chủ đề: YÊU CẦU CÔNG CỤ AI HỖ TRỢ HỌC TẬP, XÃ HỘI - CÔNG CỤ THIẾT KẾ VÀ PHÁT TRIỂN HỆ THỐNG AI
// Yêu cầu cần đạt: 12.C2.1; 12.C2.MR1; 12.C3.1; 12.C3.MR1
export const module4: Lesson[] = [
  {
    period: 7,
    title: 'Công Cụ Thiết Kế Và Phát Triển Hệ Thống AI (Phần 1)',
    description: 'Làm quen với các công cụ mã nguồn mở, miễn phí để thiết kế, huấn luyện AI.',
    objectives: [
      'Lựa chọn ý tưởng thiết kế một số công cụ AI để thực hiện các công việc khác nhau.',
      'Nêu được một số công cụ mã nguồn mở/miễn phí: Teachable Machine, ML5.js, TensorFlow.js, MIT App Inventor.',
      'Thực hành huấn luyện một mô hình phân loại đơn giản bằng Teachable Machine.'
    ],
    slides: [
      {
        id: 'l7_s1', title: 'Công Cụ Thiết Kế Và Phát Triển Hệ Thống AI', visualType: 'title',
        content: [
          '📘 Tiết 7-8: Yêu cầu công cụ AI hỗ trợ học tập, xã hội - Công cụ thiết kế và phát triển hệ thống AI',
          '🎯 Học xong buổi này, các em sẽ: chọn được ý tưởng thiết kế một công cụ AI để thực hiện công việc cụ thể; tùy chỉnh được hệ thống AI phục vụ học tập; biết và sử dụng được công cụ mã nguồn mở như Teachable Machine.',
          '💻 Thực hành tại phòng máy với công cụ Teachable Machine'
        ],
        visualUrl: svgVisual('Công Cụ Thiết Kế AI Mã Nguồn Mở', 'Teachable Machine • ML5.js • TensorFlow.js • MIT App Inventor', '#0e7490', '#0891b2', '🛠️'),
        speakerNotes: 'Giới thiệu buổi 4, chuyển từ lý thuyết đạo đức/rủi ro sang thực hành công cụ AI mã nguồn mở tại phòng máy.'
      },
      {
        id: 'l7_s2', title: 'Khởi Động: Không Cần Biết Lập Trình?', visualType: 'intro',
        content: [
          '❓ Câu hỏi: "Nếu muốn tạo ra một ứng dụng AI mà không cần biết lập trình, em nghĩ có thể làm bằng cách nào?"',
          '💬 Học sinh trao đổi nhanh với bạn cùng bàn, 2-3 học sinh chia sẻ.'
        ],
        visualUrl: svgVisual('Tạo AI Không Cần Lập Trình?', 'Gợi mở về công cụ AI mã nguồn mở, miễn phí', '#155e75', '#0284c7', '💡'),
        answerHint: 'Gợi ý: hiện có nhiều công cụ trực quan (kéo-thả, huấn luyện bằng ví dụ) không yêu cầu viết code.',
        speakerNotes: 'GV giới thiệu nhóm công cụ AI mã nguồn mở, miễn phí, không cần lập trình phức tạp - đây là trọng tâm bài học.'
      },
      {
        id: 'l7_s3', title: 'Công Cụ Mã Nguồn Mở Thiết Kế, Huấn Luyện AI', visualType: 'concepts',
        content: [
          '🧠 Teachable Machine (teachablemachine.withgoogle.com): huấn luyện mô hình phân loại ảnh/âm thanh/tư thế trực quan, không cần code.',
          '🌐 ML5.js: thư viện JavaScript học máy thân thiện cho người mới bắt đầu.',
          '🔬 TensorFlow.js: thư viện học máy mã nguồn mở chạy trực tiếp trên trình duyệt.',
          '📱 MIT App Inventor: công cụ kéo-thả xây dựng ứng dụng di động có tích hợp AI đơn giản.'
        ],
        visualUrl: svgVisual('4 Công Cụ AI Mã Nguồn Mở', 'Teachable Machine - ML5.js - TensorFlow.js - MIT App Inventor', '#0c4a6e', '#0e7490', '🧰'),
        speakerNotes: 'Giới thiệu 4 công cụ theo đúng nội dung KHBD, nhấn mạnh đây đều là công cụ mã nguồn mở/miễn phí, phù hợp với học sinh phổ thông.'
      },
      {
        id: 'l7_s4', title: 'Thực Hành: Huấn Luyện Mô Hình Với Teachable Machine', visualType: 'activity',
        content: [
          '📸 Chuẩn bị ảnh mẫu: ví dụ lá cây khoẻ - lá cây bị sâu bệnh, hoặc rác hữu cơ - rác tái chế.',
          '🖥️ Truy cập teachablemachine.withgoogle.com, tạo dự án phân loại ảnh mới.',
          '🏷️ Tải ảnh mẫu, gắn nhãn cho từng nhóm phân loại, bấm huấn luyện (Train Model).',
          '📷 Sản phẩm: ảnh chụp màn hình kết quả mô hình đã huấn luyện.'
        ],
        activity: {
          title: 'Huấn luyện mô hình phân loại đơn giản',
          duration: 'Thực hành nhóm tại phòng máy',
          instructions: [
            'Truy cập teachablemachine.withgoogle.com theo hướng dẫn của GV.',
            'Tạo dự án phân loại ảnh (Image Project).',
            'Tải lên ảnh mẫu cho từng nhãn (ví dụ: lá khoẻ / lá bị sâu bệnh).',
            'Bấm "Train Model" để huấn luyện, sau đó thử nghiệm với webcam hoặc ảnh mới.',
            'Chụp ảnh màn hình kết quả, hoàn thành Phiếu học tập số 4.'
          ],
          tips: 'Mỗi nhãn nên có ít nhất 8-10 ảnh mẫu khác góc chụp để mô hình học tốt hơn.',
          hint: 'Nếu chưa có ảnh mẫu, có thể dùng webcam chụp trực tiếp ngay trong Teachable Machine.',
          suggestedAnswer: 'Sản phẩm là ảnh chụp màn hình mô hình đã huấn luyện thành công với ít nhất 2 nhãn phân loại.'
        },
        speakerNotes: 'Hoạt động Hình thành kiến thức trọng tâm - học sinh thực hành trực tiếp trên Teachable Machine, GV hỗ trợ từng nhóm trong phòng máy.'
      },
      {
        id: 'l7_s5', title: 'Luyện Tập: Kiểm Tra Mô Hình Với Ảnh Mới', visualType: 'interactive',
        content: [
          '🔍 Thử nghiệm mô hình vừa huấn luyện với 2-3 ảnh mới (chưa dùng để huấn luyện).',
          '📝 Ghi nhận trường hợp mô hình dự đoán sai.'
        ],
        interactiveQuiz: {
          question: 'Sau khi huấn luyện, tại sao cần thử nghiệm mô hình với ảnh CHƯA từng dùng để huấn luyện?',
          options: [
            'Để mô hình chạy nhanh hơn',
            'Để đánh giá đúng khả năng khái quát hoá, độ chính xác thực tế của mô hình',
            'Không cần thiết, chỉ cần dùng lại ảnh đã huấn luyện để kiểm tra',
            'Để làm cho tệp ảnh lớn hơn'
          ],
          answerIndex: 1,
          explanation: 'Kiểm thử với dữ liệu mới giúp đánh giá đúng khả năng mô hình hoạt động tốt với dữ liệu thực tế, tránh đánh giá sai do mô hình chỉ "ghi nhớ" dữ liệu huấn luyện.',
          hint: 'Đây là nguyên tắc kiểm thử cơ bản trong học máy.',
          suggestedAnswer: 'Cần thử ảnh mới để đánh giá đúng độ chính xác thực tế, chuẩn bị cho buổi học sau về cải thiện mô hình.'
        },
        speakerNotes: 'Củng cố kĩ năng sử dụng công cụ mã nguồn mở, đặt vấn đề cho buổi học sau: làm thế nào để cải thiện độ chính xác của mô hình.'
      },
      {
        id: 'l7_s6', title: 'Vận Dụng: Ý Tưởng Công Cụ AI Cho Trường Em', visualType: 'activity',
        content: [
          '💡 Đề xuất ý tưởng công cụ AI hỗ trợ học tập/hoạt động xã hội tại trường.',
          '📝 Mô tả: mục tiêu, đối tượng sử dụng, dữ liệu cần có.'
        ],
        activity: {
          title: 'Bản mô tả ý tưởng công cụ AI của nhóm',
          duration: 'Hoàn thiện ở nhà, nộp đầu buổi sau',
          instructions: [
            'Mỗi nhóm đề xuất 1 ý tưởng công cụ AI hỗ trợ học tập hoặc hoạt động xã hội tại trường.',
            'Mô tả: mục tiêu của công cụ, đối tượng sử dụng, loại dữ liệu cần thu thập để huấn luyện.',
            'Chuẩn bị ý tưởng này để phát triển tiếp trong các buổi học sau.'
          ],
          tips: 'Ý tưởng nên gắn với hoạt động thực tế của trường: phân loại rác, nhận diện đồng phục, hỗ trợ ôn tập...',
          hint: 'Liên hệ với ví dụ đã thực hành: phân loại lá cây khoẻ/bị bệnh, rác hữu cơ/tái chế.',
          suggestedAnswer: 'Ví dụ ý tưởng: công cụ AI phân loại rác thải tại trường bằng camera, giúp học sinh phân loại đúng loại rác, dữ liệu cần có là ảnh các loại rác thải phổ biến tại trường.'
        },
        speakerNotes: 'GV thu bản mô tả ý tưởng vào đầu buổi học sau, làm cơ sở để các nhóm tiếp tục phát triển trong Buổi 5 và Buổi 6.'
      }
    ]
  },
  {
    period: 8,
    title: 'Thực Hành Công Cụ Thiết Kế AI (Phần 2)',
    description: 'Củng cố kỹ năng huấn luyện, kiểm thử mô hình AI bằng Teachable Machine.',
    objectives: [
      'Tùy chỉnh yêu cầu hệ thống AI để hỗ trợ hoạt động học tập và hoạt động xã hội.',
      'Sử dụng thành thạo hơn công cụ Teachable Machine để huấn luyện, kiểm thử mô hình.',
      'Rèn tính kiên trì khi thực hành thao tác công cụ mới.'
    ],
    slides: [
      {
        id: 'l8_s1', title: 'Tiếp Tục Thực Hành Teachable Machine', visualType: 'intro',
        content: [
          '🔁 Nhắc lại quy trình huấn luyện mô hình: chuẩn bị ảnh mẫu → gắn nhãn → huấn luyện → kiểm thử.',
          '💻 Các nhóm tiếp tục hoàn thiện mô hình phân loại đã bắt đầu ở Tiết 7.'
        ],
        visualUrl: svgVisual('Tiếp Tục Thực Hành', 'Hoàn thiện mô hình Teachable Machine', '#0e7490', '#06b6d4', '💻'),
        speakerNotes: 'Dành đầu giờ để các nhóm ổn định lại tiến độ thực hành, GV kiểm tra nhanh tiến độ từng nhóm.'
      },
      {
        id: 'l8_s2', title: 'Tùy Chỉnh Yêu Cầu Hệ Thống AI', visualType: 'concepts',
        content: [
          '🎯 Tùy chỉnh số lượng nhãn phân loại, số lượng ảnh mẫu cho mỗi nhãn theo mục tiêu cụ thể.',
          '📚 Ví dụ: hỗ trợ học tập (nhận diện dụng cụ thí nghiệm), hỗ trợ hoạt động xã hội (phân loại rác thải).',
          '⚙️ Điều chỉnh độ nhạy (confidence threshold), thời gian huấn luyện để phù hợp với bài toán thực tế.'
        ],
        visualUrl: svgVisual('Tùy Chỉnh Hệ Thống AI', 'Điều chỉnh nhãn, dữ liệu, độ nhạy theo mục tiêu', '#155e75', '#0891b2', '⚙️'),
        speakerNotes: 'Nội dung này giúp học sinh học cách tùy chỉnh hệ thống AI để phù hợp với mục tiêu cụ thể của nhóm.'
      },
      {
        id: 'l8_s3', title: 'Thực Hành: Hoàn Thiện Và Kiểm Thử Mô Hình', visualType: 'activity',
        content: [
          '🖥️ Hoàn thiện mô hình phân loại của nhóm (bổ sung nhãn/ảnh nếu cần).',
          '🧪 Kiểm thử lại với ảnh mới, ghi nhận tỉ lệ đúng/sai.'
        ],
        activity: {
          title: 'Hoàn thiện và kiểm thử mô hình phân loại',
          duration: 'Thực hành nhóm tại phòng máy',
          instructions: [
            'Xem lại mô hình đã huấn luyện ở Tiết 7.',
            'Bổ sung thêm ảnh mẫu nếu mô hình còn dự đoán sai nhiều.',
            'Huấn luyện lại và kiểm thử với ít nhất 3 ảnh mới.',
            'Ghi lại tỉ lệ dự đoán đúng/sai của nhóm.'
          ],
          tips: 'Chụp ảnh mẫu trong nhiều điều kiện ánh sáng, góc chụp khác nhau để mô hình học tốt hơn.',
          hint: 'Nếu tỉ lệ sai còn cao, nguyên nhân thường do số lượng ảnh mẫu còn ít hoặc thiếu đa dạng.',
          suggestedAnswer: 'Kết quả kiểm thử cụ thể tuỳ mô hình từng nhóm; quan trọng là học sinh ghi nhận trung thực tỉ lệ đúng/sai để chuẩn bị cho buổi cải thiện dữ liệu.'
        },
        speakerNotes: 'GV quan sát, hỗ trợ các nhóm gặp khó khăn khi thao tác; nhắc học sinh báo cáo trung thực kết quả kể cả khi mô hình còn nhiều lỗi.'
      },
      {
        id: 'l8_s4', title: 'Luyện Tập: Chia Sẻ Tỉ Lệ Đúng/Sai', visualType: 'interactive',
        content: [
          '📢 Các nhóm chia sẻ tỉ lệ đúng/sai của mô hình vừa kiểm thử.'
        ],
        interactiveQuiz: {
          question: 'Nhóm A huấn luyện mô hình chỉ với 3 ảnh mẫu cho mỗi nhãn, kết quả dự đoán sai rất nhiều với ảnh mới. Nguyên nhân nhiều khả năng nhất là gì?',
          options: [
            'Do máy tính của nhóm bị hỏng',
            'Do số lượng ảnh mẫu quá ít, chưa đủ đa dạng để mô hình học tốt',
            'Do Teachable Machine là công cụ không đáng tin cậy',
            'Không có nguyên nhân nào, đây là điều bình thường và không cần cải thiện'
          ],
          answerIndex: 1,
          explanation: 'Số lượng ảnh mẫu quá ít khiến mô hình không học được đầy đủ đặc điểm của từng nhãn, dẫn đến dự đoán sai nhiều với dữ liệu mới.',
          hint: 'Nghĩ về mối liên hệ giữa lượng dữ liệu huấn luyện và độ chính xác của mô hình.',
          suggestedAnswer: 'Nguyên nhân chính là thiếu dữ liệu huấn luyện đa dạng - đây cũng là vấn đề trọng tâm của buổi học tiếp theo.'
        },
        speakerNotes: 'GV nhận xét, đặt vấn đề cho buổi học sau: làm thế nào để cải thiện độ chính xác của mô hình bằng cách bổ sung, tối ưu dữ liệu.'
      },
      {
        id: 'l8_s5', title: 'Vận Dụng: Hoàn Thiện Bản Mô Tả Ý Tưởng', visualType: 'activity',
        content: [
          '📝 Hoàn thiện bản mô tả ý tưởng công cụ AI hỗ trợ học tập/xã hội của nhóm.',
          '📤 Nộp vào đầu buổi học sau để chuẩn bị cho các buổi thực hành tiếp theo.'
        ],
        activity: {
          title: 'Hoàn thiện bản mô tả ý tưởng công cụ AI',
          duration: 'Hoàn thiện ở nhà',
          instructions: [
            'Xem lại bản mô tả ý tưởng đã bắt đầu ở Tiết 7.',
            'Bổ sung chi tiết: mục tiêu, đối tượng sử dụng, dữ liệu cần có.',
            'Chuẩn bị nộp vào đầu buổi học sau (Tiết 9-10).'
          ],
          tips: 'Bản mô tả càng cụ thể, nhóm càng dễ triển khai thực hành ở các buổi sau.',
          hint: 'Tham khảo lại kết quả kiểm thử mô hình vừa thực hiện để điều chỉnh ý tưởng cho khả thi.',
          suggestedAnswer: 'Bản mô tả hoàn chỉnh cần nêu rõ: tên công cụ, mục tiêu, đối tượng sử dụng, loại và nguồn dữ liệu cần thu thập.'
        },
        speakerNotes: 'GV thu bản mô tả ý tưởng hoàn chỉnh vào đầu buổi học sau, làm cơ sở triển khai hoạt động tối ưu hệ thống AI ở Buổi 5.'
      },
      {
        id: 'l8_s6', title: 'Tổng Kết Buổi 4', visualType: 'summary',
        content: [
          '✅ Các em đã đạt được: chọn ý tưởng thiết kế công cụ AI; tùy chỉnh hệ thống AI phục vụ học tập; biết và sử dụng được công cụ mã nguồn mở Teachable Machine.',
          '🧠 Ghi nhớ: các công cụ mã nguồn mở thiết kế AI, quy trình huấn luyện và kiểm thử mô hình.',
          '➡️ Buổi tiếp theo (Tiết 9-10): Tùy chỉnh, tối ưu hệ thống AI - Thu thập, cải thiện dữ liệu.'
        ],
        visualUrl: svgVisual('Hoàn Thành Buổi 4', 'Sẵn sàng cho Buổi 5: Tối ưu hệ thống & dữ liệu', '#065f46', '#0d9488', '🏁'),
        speakerNotes: 'Chốt kiến thức trọng tâm buổi 4, chuyển tiếp sang buổi 5 - tập trung vào cải thiện dữ liệu và tối ưu mô hình đã huấn luyện.'
      }
    ]
  }
];
