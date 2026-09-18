// Data and templates for interactive learning activities bám sát 12 tiết

export interface PolicyClause {
  id: string;
  pillar: 'academic_integrity' | 'privacy_safety' | 'transparency' | 'responsible_use';
  pillarTitle: string;
  title: string;
  statement: string;
  mandatory: boolean;
  studentRationale: string;
  recommended: boolean;
}

export const SCHOOL_AI_POLICY_CLAUSES: PolicyClause[] = [
  {
    id: 'pol-1',
    pillar: 'academic_integrity',
    pillarTitle: '1. Liêm Chính Học Thuật',
    title: 'Khai báo minh bạch khi dùng AI (AI Citation)',
    statement: 'Học sinh được phép dùng AI để gợi ý dàn ý, tìm tài liệu tham khảo, nhưng BẮT BUỘC phải ghi rõ câu lệnh prompt đã dùng và công cụ AI ở phần mục lục/chú thích.',
    mandatory: true,
    studentRationale: 'Rèn luyện tính trung thực và tư duy phản biện khoa học, không nhận vơ thành quả của máy làm của mình.',
    recommended: true,
  },
  {
    id: 'pol-2',
    pillar: 'academic_integrity',
    pillarTitle: '1. Liêm Chính Học Thuật',
    title: 'Cấm sao chép nguyên văn (Copy-Paste Ban)',
    statement: 'Nghiêm cấm sao chép nguyên văn văn bản do AI tạo ra để nộp làm bài kiểm tra viết, bài luận hoặc đồ án lấy điểm học kỳ.',
    mandatory: true,
    studentRationale: 'Học sinh cần diễn đạt lại bằng ngôn ngữ và tư duy của chính mình.',
    recommended: true,
  },
  {
    id: 'pol-3',
    pillar: 'privacy_safety',
    pillarTitle: '2. Quyền Riêng Tư & An Toàn Số',
    title: 'Bảo vệ dữ liệu sinh trắc học & hình ảnh bạn bè',
    statement: 'Không tải lên các công cụ AI công cộng hình ảnh khuôn mặt, giọng nói, địa chỉ nhà hoặc số điện thoại của bạn bè, thầy cô khi chưa có sự đồng ý.',
    mandatory: true,
    studentRationale: 'Ngăn chặn nguy cơ bị lấy cắp khuôn mặt để chế tạo video deepfake hoặc tống tiền số.',
    recommended: true,
  },
  {
    id: 'pol-4',
    pillar: 'privacy_safety',
    pillarTitle: '2. Quyền Riêng Tư & An Toàn Số',
    title: 'Quy ước Mật mã gia đình phòng ngừa Deepfake',
    statement: 'Học sinh cam kết tuyên truyền và quy ước "mật khẩu bảo vệ" với gia đình khi có cuộc gọi video/âm thanh khẩn cấp yêu cầu chuyển tiền.',
    mandatory: false,
    studentRationale: 'Chủ động bảo vệ người thân trước các chiêu trò lừa đảo mạo danh giọng nói con cái.',
    recommended: true,
  },
  {
    id: 'pol-5',
    pillar: 'transparency',
    pillarTitle: '3. Kiểm Chứng & Chống Ảo Giác AI',
    title: 'Nguyên tắc Kiểm chứng chéo 2 nguồn (Double-Check Rule)',
    statement: 'Mọi số liệu lịch sử, công thức khoa học hoặc danh nhân do AI cung cấp phải được đối chiếu lại với SGK hoặc ít nhất 1 nguồn thư viện đáng tin cậy.',
    mandatory: true,
    studentRationale: 'Tránh rơi vào bẫy ảo giác AI (Hallucination) khi làm bài thi.',
    recommended: true,
  },
  {
    id: 'pol-6',
    pillar: 'transparency',
    pillarTitle: '3. Kiểm Chứng & Chống Ảo Giác AI',
    title: 'Chất vấn và rà soát thiên kiến (Bias Checking)',
    statement: 'Khi AI đưa ra kết quả phân loại hay đánh giá con người, học sinh phải đặt câu hỏi: "Dữ liệu huấn luyện có bỏ quên nhóm đối tượng yếu thế nào không?".',
    mandatory: false,
    studentRationale: 'Hình thành tư duy công dân số có trách nhiệm xã hội.',
    recommended: true,
  },
  {
    id: 'pol-7',
    pillar: 'responsible_use',
    pillarTitle: '4. Con Người Làm Chủ & Vận Hành An Toàn',
    title: 'Nguyên tắc Quyết định Tối hậu thuộc về Con Người',
    statement: 'Trong các dự án phần mềm AI của lớp, quyết định quan trọng luôn do con người phê duyệt; luôn có nút tắt khẩn cấp (Emergency Stop).',
    mandatory: true,
    studentRationale: 'Bảo đảm tuân thủ triết lý cốt lõi Human-in-the-loop của Bộ GD&ĐT.',
    recommended: true,
  },
  {
    id: 'pol-8',
    pillar: 'responsible_use',
    pillarTitle: '4. Con Người Làm Chủ & Vận Hành An Toàn',
    title: 'Ứng xử nhân văn & Văn hóa giao tiếp số',
    statement: 'Không dùng AI để tạo meme bôi nhọ, chế ảnh làm nhục học sinh khác hoặc lan truyền thông tin sai lệch gây hoang mang trường học.',
    mandatory: true,
    studentRationale: 'Xây dựng môi trường học đường văn minh, không bạo lực mạng.',
    recommended: true,
  },
];

// AI Project Canvas Model
export interface ProjectCanvasData {
  id: string;
  name: string;
  targetAudience: string;
  problemStatement: string;
  dataStrategy: {
    trainSource: string;
    sampleCount: string;
    privacyProtection: string;
    biasMitigation: string;
  };
  technicalStack: {
    tool: string;
    modelType: string;
    inputs: string;
    outputs: string;
  };
  humanInTheLoop: {
    checkpoint: string;
    emergencyFallback: string;
    accountablePerson: string;
  };
  teamRoles: {
    leaderName: string;
    developerName: string;
    dataTrainerName: string;
    qaTesterName: string;
  };
}

export const SAMPLE_PROJECT_CANVASES: ProjectCanvasData[] = [
  {
    id: 'canvas-1',
    name: 'EcoSort: Thùng Rác Thông Minh Phân Loại Tại Nguồn',
    targetAudience: 'Học sinh và giáo viên trong căng-tin trường THPT',
    problemStatement: 'Học sinh thường vứt lẫn lộn chai nhựa, hộp xốp và thức ăn thừa vào một thùng rác duy nhất, gây khó khăn cho việc tái chế và bốc mùi hôi.',
    dataStrategy: {
      trainSource: 'Tự chụp 400 bức ảnh góc cạnh khác nhau của chai nhựa, vỏ chuối, hộp sữa, túi nilon dưới ánh sáng thực tế căng-tin.',
      sampleCount: '400 ảnh (200 rác hữu cơ, 200 rác tái chế)',
      privacyProtection: 'Không chụp dính mặt học sinh hay thông tin cá nhân trên bao bì đồ ăn.',
      biasMitigation: 'Chụp cả chai bẩn, chai bẹp dúm và túi nilon nhiều màu sắc để tránh AI chỉ nhận diện chai mới tinh.',
    },
    technicalStack: {
      tool: 'Google Teachable Machine + Micro:bit điều khiển servo',
      modelType: 'Image Classification (MobileNet)',
      inputs: 'Ảnh chụp từ camera trên nắp thùng rác',
      outputs: 'Góc quay servo gạt nắp sang ngăn Hữu cơ (0 độ) hoặc Tái chế (90 độ)',
    },
    humanInTheLoop: {
      checkpoint: 'Đèn LED hiển thị nhãn dự đoán trong 2 giây để người vứt rác có thể bấm nút Override (Gạt tay) nếu AI đoán nhầm.',
      emergencyFallback: 'Nếu camera mất tín hiệu hoặc AI tự tin < 70%, nắp thùng rác sẽ tự động mở cơ học để người dùng tự bỏ tay.',
      accountablePerson: 'Bạn Trưởng nhóm và Đội cờ đỏ nhà trường chịu trách nhiệm giám sát thùng rác.',
    },
    teamRoles: {
      leaderName: 'Nguyễn Văn An (Ý tưởng & Thuyết trình)',
      developerName: 'Trần Thị Bình (Nạp model lên Micro:bit & Lập trình servo)',
      dataTrainerName: 'Lê Hoàng Cường (Thu thập & Chụp 400 ảnh rác)',
      qaTesterName: 'Phạm Minh Đức (Kiểm thử 50 ảnh lạ & Ghi chép Confusion Matrix)',
    },
  },
  {
    id: 'canvas-2',
    name: 'PostureCare: Trợ Lý AI Nhắc Nhở Tư Thế Ngồi Học Chống Cong Vẹo Cột Sống',
    targetAudience: 'Học sinh lớp 12 ngồi học ôn thi đại học nhiều giờ liền',
    problemStatement: 'Học sinh THPT thường xuyên cúi gằm mặt xuống bàn hoặc ngồi vẹo sang một bên, dẫn tới cận thị nặng và đau lưng, gù lưng.',
    dataStrategy: {
      trainSource: 'Thu thập tư thế ngồi thẳng, ngồi gù, ngồi nghiêng qua webcam với sự đồng ý của 5 bạn tình nguyện viên.',
      sampleCount: '300 khung hình cử chỉ Pose Model',
      privacyProtection: 'Dữ liệu phân tích trực tiếp trên trình duyệt máy tính cá nhân (On-device), không gửi video lên đám mây.',
      biasMitigation: 'Thu thập nhiều thể trạng người: bạn cao, bạn thấp, mặc áo khoác dày và áo sơ mi mỏng.',
    },
    technicalStack: {
      tool: 'Teachable Machine (Pose Model) + JavaScript Web Notification',
      modelType: 'Pose Detection (Nhận diện khớp xương đầu, vai, cột sống)',
      inputs: 'Khung hình webcam trước mặt',
      outputs: 'Chuông âm thanh nhẹ nhàng + cửa sổ popup "Hãy thẳng lưng lên bạn nhé!"',
    },
    humanInTheLoop: {
      checkpoint: 'Học sinh có thể nhấn nút "Tạm dừng 30 phút" khi cúi xuống nhặt bút hoặc tập thể dục.',
      emergencyFallback: 'Tự động tắt camera sau 1 tiếng để bảo vệ tuổi thọ pin và bảo đảm riêng tư.',
      accountablePerson: 'Bạn phụ trách Kỹ thuật phần mềm.',
    },
    teamRoles: {
      leaderName: 'Hoàng Mai Chi (Ý tưởng & Y khoa học đường)',
      developerName: 'Đặng Tuấn Kiệt (Web app & Thông báo)',
      dataTrainerName: 'Vũ Thu Trang (Gán nhãn góc nghiêng vai)',
      qaTesterName: 'Lý Quốc Bảo (Đo độ trễ & Tránh báo động nhầm)',
    },
  },
];

// Period 12 Rubric Data
export interface RubricCriterion {
  id: string;
  strand: 'A' | 'B' | 'C' | 'D';
  strandName: string;
  criterionTitle: string;
  weight: number; // Tỷ trọng %
  levels: {
    level1: { title: 'Chưa đạt (1-2đ)'; desc: string };
    level2: { title: 'Đạt (3đ)'; desc: string };
    level3: { title: 'Khá (4đ)'; desc: string };
    level4: { title: 'Xuất sắc (5đ)'; desc: string };
  };
}

export const PROJECT_RUBRIC_CRITERIA: RubricCriterion[] = [
  {
    id: 'rub-a',
    strand: 'A',
    strandName: 'Mạch A: Con Người Làm Chủ (Human Control)',
    criterionTitle: 'Kiểm soát & Điểm dừng khẩn cấp (Emergency Stop)',
    weight: 25,
    levels: {
      level1: { title: 'Chưa đạt (1-2đ)', desc: 'Phụ thuộc hoàn toàn vào AI, không có phương án khi AI gặp sự cố hoặc đoán sai.' },
      level2: { title: 'Đạt (3đ)', desc: 'Có nêu được vai trò của con người nhưng phương án can thiệp còn thủ công, chưa rõ ràng.' },
      level3: { title: 'Khá (4đ)', desc: 'Xác định rõ trạm kiểm soát (Human checkpoint) và cơ chế người dùng can thiệp đè kết quả của máy.' },
      level4: { title: 'Xuất sắc (5đ)', desc: 'Thiết kế cơ chế tắt khẩn cấp thông minh, phân quyền rõ người chịu trách nhiệm pháp lý & giải trình khi có lỗi.' },
    },
  },
  {
    id: 'rub-b',
    strand: 'B',
    strandName: 'Mạch B: Đạo Đức & Pháp Lý (Ethics & Safety)',
    criterionTitle: 'Liêm chính, Chống thiên kiến & Quyền riêng tư',
    weight: 25,
    levels: {
      level1: { title: 'Chưa đạt (1-2đ)', desc: 'Không trích dẫn nguồn, dùng dữ liệu cá nhân bừa bãi không xin phép, dữ liệu có thiên kiến nặng.' },
      level2: { title: 'Đạt (3đ)', desc: 'Có khai báo sơ sài việc dùng AI nhưng chưa nêu phương án lọc thiên kiến hay bảo mật.' },
      level3: { title: 'Khá (4đ)', desc: 'Bảo đảm quyền riêng tư của đối tượng khảo sát; có nhật ký prompt và khai báo nguồn minh bạch.' },
      level4: { title: 'Xuất sắc (5đ)', desc: 'Phân tích thấu đáo các bẫy thiên kiến, có cam kết bảo vệ dữ liệu sinh trắc học và tuyên bố liêm chính mẫu mực.' },
    },
  },
  {
    id: 'rub-c',
    strand: 'C',
    strandName: 'Mạch C: Kỹ Thuật & Đo Lường (Technical & Testing)',
    criterionTitle: 'Đánh giá mô hình trên tập kiểm thử mới (Test Set)',
    weight: 25,
    levels: {
      level1: { title: 'Chưa đạt (1-2đ)', desc: 'Chỉ thử lại trên tập ảnh đã huấn luyện, báo cáo 100% không căn cứ khoa học.' },
      level2: { title: 'Đạt (3đ)', desc: 'Có kiểm thử với vài trường hợp mới nhưng số lượng quá ít (<10 mẫu), chưa thống kê lỗi.' },
      level3: { title: 'Khá (4đ)', desc: 'Dùng tập Test set độc lập, tính toán được độ chính xác (Accuracy) và chỉ ra các ca AI đoán sai.' },
      level4: { title: 'Xuất sắc (5đ)', desc: 'Lập bảng phân tích lỗi chi tiết (Nhận nhầm vs Bỏ sót), lý giải nguyên nhân và cải tiến dữ liệu đạt >90%.' },
    },
  },
  {
    id: 'rub-d',
    strand: 'D',
    strandName: 'Mạch D: Hợp Tác & Báo Cáo (Collaboration & Demo)',
    criterionTitle: 'Phân vai nhóm, Bản đầu MVP & Thuyết trình',
    weight: 25,
    levels: {
      level1: { title: 'Chưa đạt (1-2đ)', desc: 'Chỉ 1 bạn gánh đội làm hết, sản phẩm không chạy được, thuyết trình ấp úng.' },
      level2: { title: 'Đạt (3đ)', desc: 'Có phân công nhưng các bạn không nắm rõ phần của nhau; sản phẩm chạy chập chờn.' },
      level3: { title: 'Khá (4đ)', desc: 'Đủ 4 vai trò rõ ràng; demo sản phẩm MVP chạy ổn định; slide thuyết trình gọn gàng, đúng trọng tâm.' },
      level4: { title: 'Xuất sắc (5đ)', desc: 'Cả 4 thành viên phối hợp nhịp nhàng, demo mượt mà trực quan, trả lời xuất sắc các câu hỏi phản biện của hội đồng.' },
    },
  },
];
