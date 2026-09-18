import type { QuizQuestion, JudgeScenario, BiasCase, StudentBadge } from '../types';

// Game 1: 7-Step AI Lifecycle Puzzle
export interface LifecycleStep {
  id: string;
  stepNumber: number;
  name: string;
  shortDesc: string;
  humanControlCheckpoint: string;
  dangerIfHumanMissing: string;
  icon: string;
}

export const LIFECYCLE_STEPS: LifecycleStep[] = [
  {
    id: 'step-1',
    stepNumber: 1,
    name: 'Xác định mục tiêu & Yêu cầu',
    shortDesc: 'Làm rõ bài toán cần giải quyết, đối tượng hưởng lợi và ranh giới đạo đức ban đầu.',
    humanControlCheckpoint: 'Con người phê duyệt bài toán có nhân văn, hợp pháp và cần thiết hay không.',
    dangerIfHumanMissing: 'Dự án có thể vi phạm pháp luật hoặc giải quyết mục đích xấu độc.',
    icon: 'Target',
  },
  {
    id: 'step-2',
    stepNumber: 2,
    name: 'Thu thập & Xử lý dữ liệu',
    shortDesc: 'Tìm kiếm, làm sạch, gán nhãn dữ liệu và loại bỏ các yếu tố nhạy cảm riêng tư.',
    humanControlCheckpoint: 'Kiểm tra nguồn gốc dữ liệu, bảo đảm tính công bằng, không xâm phạm đời tư.',
    dangerIfHumanMissing: 'Dữ liệu thiên vị, rò rỉ dữ liệu cá nhân của người dùng.',
    icon: 'Database',
  },
  {
    id: 'step-3',
    stepNumber: 3,
    name: 'Lựa chọn mô hình & Huấn luyện (Train)',
    shortDesc: 'Chọn thuật toán học máy phù hợp, cho máy học từ các mẫu dữ liệu.',
    humanControlCheckpoint: 'Cài đặt các ràng buộc an toàn, quy chuẩn đạo đức vào thuật toán.',
    dangerIfHumanMissing: 'Mô hình học vẹt các định kiến xấu hoặc tiêu tốn tài nguyên quá mức.',
    icon: 'Cpu',
  },
  {
    id: 'step-4',
    stepNumber: 4,
    name: 'Kiểm thử & Đánh giá (Test Set)',
    shortDesc: 'Dùng tập dữ liệu mới hoàn toàn để đo độ chính xác, phân tích lỗi nhận nhầm và bỏ sót.',
    humanControlCheckpoint: 'Thẩm định độc lập trên nhiều nhóm người dùng khác nhau trước khi cấp phép.',
    dangerIfHumanMissing: 'Độ chính xác giả mạo trên tập train, hoạt động tệ hại ngoài thực tế.',
    icon: 'CheckCircle2',
  },
  {
    id: 'step-5',
    stepNumber: 5,
    name: 'Triển khai vào thực tế (Deploy)',
    shortDesc: 'Đóng gói sản phẩm lên web/app để người dùng cuối tương tác.',
    humanControlCheckpoint: 'Xây dựng cơ chế tắt khẩn cấp (Emergency Stop) và cảnh báo người dùng.',
    dangerIfHumanMissing: 'Hệ thống mất kiểm soát gây thiệt hại tài sản hoặc tinh thần người dùng.',
    icon: 'Rocket',
  },
  {
    id: 'step-6',
    stepNumber: 6,
    name: 'Giám sát & Vận hành (Monitor)',
    shortDesc: 'Theo dõi hành vi thực tế, ghi log, lắng nghe phản hồi và thu thập lỗi phát sinh.',
    humanControlCheckpoint: 'Đội ngũ chuyên gia trực tiếp rà soát các khiếu nại và trường hợp dị biệt.',
    dangerIfHumanMissing: 'Hệ thống bị "trôi dạt dữ liệu" (Data Drift) theo thời gian mà không ai biết.',
    icon: 'Activity',
  },
  {
    id: 'step-7',
    stepNumber: 7,
    name: 'Nâng cấp hoặc Dừng hoạt động (Retire)',
    shortDesc: 'Cải tiến thuật toán với phiên bản mới hoặc thu hồi sản phẩm khi không còn an toàn.',
    humanControlCheckpoint: 'Con người ra quyết định cuối cùng về việc dừng vận hành hay nâng cấp.',
    dangerIfHumanMissing: 'Hệ thống lỗi thời tiếp tục gây hại hoặc rò rỉ dữ liệu lưu trữ.',
    icon: 'RefreshCw',
  },
];

// Game 2: AI vs Human Judge (Tiết 2 & 3: Phân vai quyết định)
export const JUDGE_SCENARIOS: JudgeScenario[] = [
  {
    id: 'scen-1',
    period: 2,
    title: 'Xét tuyển sinh & Cấp học bổng đại học',
    situation: 'Trường THPT dùng phần mềm AI để lọc 1.000 hồ sơ xin học bổng của học sinh có hoàn cảnh khó khăn.',
    context: 'Hệ thống quét điểm học bạ, hoàn cảnh gia đình, thành tích hoạt động và đưa ra danh sách trúng tuyển.',
    correctDecision: 'human_approved',
    decisionLabels: {
      human_only: 'Con người tự đọc duyệt 1.000 hồ sơ (Không dùng AI)',
      human_approved: 'AI xếp hạng gợi ý sơ bộ -> Hội đồng giáo viên phỏng vấn & chốt quyết định cuối',
      ai_auto: 'AI tự động gửi email thông báo đỗ/trượt trực tiếp cho học sinh',
    },
    explanation: 'Chuẩn 12.A1.2: Các quyết định ảnh hưởng trực tiếp đến tương lai, quyền lợi cá nhân bắt buộc phải có con người thẩm định và chịu trách nhiệm giải trình. AI chỉ đóng vai trò trợ lý sơ loại.',
    ethicalStandard: 'YCCĐ 12.A1.2 · Human-in-the-loop',
  },
  {
    id: 'scen-2',
    period: 2,
    title: 'Gợi ý danh sách bài hát yêu thích trên Spotify',
    situation: 'Ứng dụng nghe nhạc đề xuất danh sách 20 bài hát nghe buổi sáng dựa trên lịch sử nghe tuần qua.',
    context: 'Nếu bài hát gợi ý không hay, người dùng chỉ cần nhấn nút bỏ qua.',
    correctDecision: 'ai_auto',
    decisionLabels: {
      human_only: 'Nhân viên biên tập Spotify phải chọn từng bài bằng tay cho từng người',
      human_approved: 'Nhân viên kiểm duyệt từng playlist trước khi app phát nhạc',
      ai_auto: 'AI tự động sinh danh sách bài hát theo thời gian thực',
    },
    explanation: 'Rủi ro thấp, tính cá nhân hóa cao và tức thì. Không gây tổn hại đến tính mạng, pháp lý hay cơ hội sống của người dùng nên AI được tự động hóa hoàn toàn.',
    ethicalStandard: 'Mức rủi ro tối thiểu (Low Risk)',
  },
  {
    id: 'scen-3',
    period: 3,
    title: 'Chẩn đoán phẫu thuật cấp cứu bệnh nhân tim mạch',
    situation: 'Hệ thống AI thị giác máy tính quét phim chụp CT và phát hiện một khối nghẽn mạch vành nguy hiểm.',
    context: 'Bác sĩ trực cấp cứu nhận được cảnh báo khối nghẽn kèm mức độ tin cậy 92%.',
    correctDecision: 'human_approved',
    decisionLabels: {
      human_only: 'Bỏ qua kết quả AI, bác sĩ tự đọc phim từ đầu mà không có gợi ý',
      human_approved: 'Bác sĩ chuyên khoa tim mạch kiểm tra lại phim CT, kết hợp bệnh án và ra lệnh mổ',
      ai_auto: 'Hệ thống AI tự động kích hoạt máy tiêm thuốc làm tan huyết khối cho bệnh nhân',
    },
    explanation: 'YCCĐ 12.A1.3: Tính mạng con người là tối thượng. AI chỉ là công cụ hỗ trợ hình ảnh chẩn đoán, Bác sĩ là người chịu trách nhiệm y khoa và pháp lý trước ca mổ.',
    ethicalStandard: 'YCCĐ 12.A1.3 · Trách nhiệm giải trình y tế',
  },
  {
    id: 'scen-4',
    period: 3,
    title: 'Xử phạt nguội vi phạm giao thông vượt đèn đỏ',
    situation: 'Camera AI chụp biển số xe vượt đèn đỏ lúc nửa đêm tại ngã tư và đối soát dữ liệu đăng kiểm.',
    context: 'Dữ liệu ảnh chụp có thể bị mờ, biển số giả hoặc xe ưu tiên (xe cứu thương chở bệnh nhân).',
    correctDecision: 'human_approved',
    decisionLabels: {
      human_only: 'Cảnh sát giao thông phải tự xem toàn bộ video 24/7 bằng mắt',
      human_approved: 'AI tự động trích xuất bằng chứng video/ảnh -> Cán bộ CSGT kiểm tra lại -> Ký ban hành phạt',
      ai_auto: 'AI tự động trích tiền trong tài khoản ngân hàng của chủ xe ngay khi xe vượt vạch',
    },
    explanation: 'Pháp luật hiện hành quy định chỉ cơ quan hành pháp con người mới có quyền ban hành quyết định xử phạt vi phạm hành chính, nhằm tránh phạt oan xe chở người đi cấp cứu.',
    ethicalStandard: 'Luật Xử lý vi phạm hành chính & Chuẩn 12.A1.3',
  },
  {
    id: 'scen-5',
    period: 5,
    title: 'Quyết định kỷ luật học sinh nghi gian lận bài văn',
    situation: 'Phần mềm phát hiện AI chấm bài văn của bạn Nam đạt mức "98% xác suất do AI tạo ra".',
    context: 'Giáo viên bộ môn nghi ngờ bạn Nam dùng ChatGPT làm bài tập về nhà.',
    correctDecision: 'human_approved',
    decisionLabels: {
      human_only: 'Giáo viên không dùng bất kỳ công cụ quét nào, chỉ chấm theo cảm tính',
      human_approved: 'Giáo viên mời học sinh phỏng vấn, hỏi về ý tưởng bài viết và cho viết lại kiểm chứng',
      ai_auto: 'Hệ thống tự động ghi điểm 0 và gửi thông báo kỷ luật về cho phụ huynh',
    },
    explanation: 'Công cụ phát hiện AI có tỷ lệ nhận nhầm (False Positive) rất cao với người viết tốt. Không được dùng AI kết tội học sinh; con người cần đối thoại và tạo cơ hội giải trình.',
    ethicalStandard: 'YCCĐ 12.B1.1 · Liêm chính học thuật & Công bằng',
  },
  {
    id: 'scen-6',
    period: 6,
    title: 'Lọc thư rác (Spam) trong hộp thư điện tử Gmail',
    situation: 'Hệ thống máy học quét hàng triệu email gửi đến mỗi giây để chuyển các thư quảng cáo lừa đảo vào hòm Spam.',
    context: 'Người dùng vẫn có thể vào mục Spam để khôi phục thư nếu AI chuyển nhầm.',
    correctDecision: 'ai_auto',
    decisionLabels: {
      human_only: 'Nhân viên Google đọc từng email để quyết định có phải thư rác không (xâm phạm riêng tư)',
      human_approved: 'Mỗi khi có email đến, nhân viên Google hỏi người dùng có muốn nhận không',
      ai_auto: 'AI tự động phân loại vào Spam, người dùng có quyền tự mở xem và đánh dấu "Không phải spam"',
    },
    explanation: 'Tự động hóa với cơ chế cho phép con người kiểm soát ngược (Human-on-the-loop). Đọc thủ công sẽ vi phạm quyền riêng tư nghiêm trọng.',
    ethicalStandard: 'Bảo mật & Quyền riêng tư',
  },
];

// Game 3: Bias & Risk Detective (Tiết 4, 5, 6: Săn lùng thiên kiến & rủi ro)
export const BIAS_CASES: BiasCase[] = [
  {
    id: 'bias-1',
    title: 'Vụ án: Phần mềm tuyển dụng kỹ sư công nghệ của tập đoàn Alpha',
    scenario: 'Tập đoàn công nghệ dùng AI sàng lọc CV. Sau 1 năm, 92% ứng viên nữ bị loại từ vòng hồ sơ dù cùng điểm tốt nghiệp đại học.',
    flawType: 'bias',
    riskLevel: 'high',
    clues: [
      'Dữ liệu huấn luyện lấy từ 10 năm trước, khi 85% nhân viên công ty là nam giới',
      'AI học được quy luật ngầm: từ khóa gắn liền với trường nữ sinh hoặc câu lạc bộ nữ bị hạ điểm',
      'Không có chuyên gia độc lập kiểm tra độ công bằng giới tính trước khi áp dụng',
    ],
    remediation: 'Cân bằng lại tập dữ liệu huấn luyện, xóa bỏ các trường dữ liệu định danh giới tính và thẩm định độ công bằng (Fairness Audit).',
    standard: 'YCCĐ 12.B1.1 — Nguyên tắc Công bằng & Không phân biệt đối xử',
  },
  {
    id: 'bias-2',
    title: 'Vụ án: Bài thuyết trình lịch sử và "Nhà khoa học tưởng tượng"',
    scenario: 'Một học sinh dùng chatbot AI tạo dàn ý lịch sử Việt Nam thế kỷ 18. Chatbot bịa ra một danh nhân tên "Nguyễn Văn Trí" cùng ngày mất và chiến công rất chi tiết nhưng hoàn toàn không có thật.',
    flawType: 'hallucination',
    riskLevel: 'medium',
    clues: [
      'Chatbot trả lời với giọng điệu cực kỳ tự tin, mạch lạc',
      'Trích dẫn số trang và năm xuất bản của cuốn sách không tồn tại',
      'Mô hình ngôn ngữ lớn bản chất chỉ là công cụ dự đoán từ tiếp theo theo xác suất thống kê',
    ],
    remediation: 'Luôn tra cứu chéo (Cross-check) với sách giáo khoa, nguồn thư viện chính thống và không sao chép nguyên văn.',
    standard: 'YCCĐ 12.A3.1 — Phòng chống Ảo giác AI (Hallucination)',
  },
  {
    id: 'bias-3',
    title: 'Vụ án: Cuộc gọi video "Cứu mẹ với" của học sinh lớp 12',
    scenario: 'Phụ huynh nhận được cuộc gọi video ngắn 5 giây từ tài khoản Zalo của con, tiếng nói hốt hoảng báo đang bị tai nạn cần chuyển tiền gấp. Giọng nói và khẩu hình y hệt người con.',
    flawType: 'deepfake',
    riskLevel: 'high',
    clues: [
      'Kẻ gian thu thập video thuyết trình và giọng nói của học sinh trên TikTok',
      'Dùng công nghệ Voice Cloning và Deepfake để ghép mặt, nhái giọng thời gian thực',
      'Tạo áp lực tâm lý gấp gáp, giục chuyển tiền vào tài khoản người lạ',
    ],
    remediation: 'Quy ước "Mật khẩu gia đình" (Safe Word), bình tĩnh gọi lại số điện thoại chính thức của con hoặc thầy cô chủ nhiệm để xác minh.',
    standard: 'YCCĐ 12.B2.1 — Nhận diện Deepfake & Trách nhiệm pháp lý',
  },
  {
    id: 'bias-4',
    title: 'Vụ án: Ứng dụng "Chấm điểm làm đẹp" thu thập 50.000 khuôn mặt học sinh',
    scenario: 'Một app miễn phí yêu cầu học sinh chụp ảnh selfie để AI chấm điểm gương mặt và dự đoán tương lai. Sau đó, công ty bán dữ liệu này cho các sàn quảng cáo thẩm mỹ.',
    flawType: 'privacy_breach',
    riskLevel: 'high',
    clues: [
      'Điều khoản sử dụng viết dài dòng bằng tiếng Anh, lén gài quyền sử dụng dữ liệu sinh trắc học',
      'Dữ liệu khuôn mặt là dữ liệu sinh trắc học nhạy cảm, không thể thay đổi như mật khẩu',
      'Vi phạm nghiêm trọng Nghị định 13/2023/NĐ-CP về Bảo vệ dữ liệu cá nhân',
    ],
    remediation: 'Không đăng tải dữ liệu sinh trắc học cá nhân lên các app không rõ nguồn gốc; kích hoạt quyền yêu cầu xóa dữ liệu.',
    standard: 'YCCĐ 12.B3.1 — Quyền riêng tư & Bảo vệ dữ liệu cá nhân',
  },
];

// Game 4: AI Simulator (Tiết 7 & 8: Đánh giá hiệu quả mô hình - Test Set)
export interface TestingSample {
  id: number;
  imageName: string;
  category: 'Rác Hữu Cơ' | 'Rác Tái Chế';
  actualLabel: 'organic' | 'recyclable';
  predictedLabel: 'organic' | 'recyclable';
  confidence: number; // 0 - 100%
  description: string;
}

export const INITIAL_TEST_SAMPLES: TestingSample[] = [
  { id: 1, imageName: 'Vỏ chuối chín', category: 'Rác Hữu Cơ', actualLabel: 'organic', predictedLabel: 'organic', confidence: 96, description: 'Phân loại đúng: Chuối có màu vàng đặc trưng.' },
  { id: 2, imageName: 'Chai nhựa Lavie trong suốt', category: 'Rác Tái Chế', actualLabel: 'recyclable', predictedLabel: 'recyclable', confidence: 94, description: 'Phân loại đúng: Chai nhựa rõ nét.' },
  { id: 3, imageName: 'Hộp sữa giấy ép dẹp', category: 'Rác Tái Chế', actualLabel: 'recyclable', predictedLabel: 'recyclable', confidence: 88, description: 'Phân loại đúng.' },
  { id: 4, imageName: 'Lá cây khô úa nâu', category: 'Rác Hữu Cơ', actualLabel: 'organic', predictedLabel: 'organic', confidence: 92, description: 'Phân loại đúng.' },
  { id: 5, imageName: 'Túi nilon màu xanh lục', category: 'Rác Tái Chế', actualLabel: 'recyclable', predictedLabel: 'organic', confidence: 78, description: 'LỖI NHẬN NHẦM: AI thấy màu xanh lục nên nhầm là rau xanh lá cây!' },
  { id: 6, imageName: 'Cọng táo ăn dở dính bùn', category: 'Rác Hữu Cơ', actualLabel: 'organic', predictedLabel: 'organic', confidence: 85, description: 'Phân loại đúng.' },
  { id: 7, imageName: 'Lon nước ngọt nhôm móp méo', category: 'Rác Tái Chế', actualLabel: 'recyclable', predictedLabel: 'recyclable', confidence: 91, description: 'Phân loại đúng.' },
  { id: 8, imageName: 'Bát xốp dính dầu mỡ đồ ăn', category: 'Rác Tái Chế', actualLabel: 'recyclable', predictedLabel: 'organic', confidence: 68, description: 'LỖI: Bát xốp dính thức ăn làm AI bối rối phân loại.' },
  { id: 9, imageName: 'Vỏ trứng gà vụn nát', category: 'Rác Hữu Cơ', actualLabel: 'organic', predictedLabel: 'organic', confidence: 89, description: 'Phân loại đúng.' },
  { id: 10, imageName: 'Thìa nhựa màu trắng đục', category: 'Rác Tái Chế', actualLabel: 'recyclable', predictedLabel: 'organic', confidence: 62, description: 'LỖI: Thìa nhựa trắng bị nhầm với xương gà.' },
];

// Game 5: Rung chuông vàng AI (15 câu hỏi chuẩn 12 tiết)
export const MASTER_QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'q-1',
    period: 1,
    question: 'Trong 7 bước của vòng đời hệ thống AI, bước nào con người cần kiểm tra để tránh thiên kiến giới tính hoặc chủng tộc ngay từ đầu?',
    options: [
      'A. Bước 1: Mua máy chủ cấu hình mạnh nhất',
      'B. Bước 2: Thu thập và kiểm tra tính đại diện của dữ liệu',
      'C. Bước 5: Bán sản phẩm ra thị trường',
      'D. Bước 7: Dừng hoạt động hệ thống',
    ],
    correctIndex: 1,
    explanation: 'Dữ liệu là "thức ăn" của AI (Garbage in, Garbage out). Nếu dữ liệu thu thập bị lệch hoặc thiên vị, AI sẽ học theo định kiến đó.',
    standardCode: '12.A1.1',
    difficulty: 'easy',
  },
  {
    id: 'q-2',
    period: 2,
    question: 'Theo nguyên tắc "Con người làm chủ AI", trong quyết định cho học sinh thôi học, vai trò của AI là gì?',
    options: [
      'A. AI tự động ra quyết định và in giấy buộc thôi học',
      'B. AI là công cụ hỗ trợ thống kê dữ liệu chuyên cần, Hội đồng kỷ luật nhà trường là người phán quyết tối hậu',
      'C. Giao toàn quyền cho AI để đảm bảo khách quan tuyệt đối',
      'D. Cấm hoàn toàn không cho AI tham gia bất kỳ bước nào',
    ],
    correctIndex: 1,
    explanation: 'Chuẩn 12.A1.2: Các quyết định trọng yếu về quyền con người bắt buộc phải có con người xem xét, đối thoại và chịu trách nhiệm pháp lý.',
    standardCode: '12.A1.2',
    difficulty: 'medium',
  },
  {
    id: 'q-3',
    period: 3,
    question: 'Khi một hệ thống AI hỗ trợ lái xe tự động gây tai nạn trên đường, ai là người phải chịu trách nhiệm giải trình và bồi thường pháp lý?',
    options: [
      'A. Con chip AI bên trong xe',
      'B. Thuật toán máy học tự động',
      'C. Nhà sản xuất xe, lập trình viên và người điều khiển phương tiện theo quy định pháp luật',
      'D. Không ai cả vì lỗi do công nghệ',
    ],
    correctIndex: 2,
    explanation: 'Chuẩn 12.A1.3: Máy móc không có tư cách pháp nhân. Con người (nhà phát triển và người vận hành) luôn là chủ thể chịu trách nhiệm giải trình.',
    standardCode: '12.A1.3',
    difficulty: 'medium',
  },
  {
    id: 'q-4',
    period: 4,
    question: 'Đâu là một trong 6 nguyên tắc đạo đức cơ bản khi thiết kế hệ thống AI?',
    options: [
      'A. Tối đa hóa lợi nhuận tài chính bất chấp rủi ro',
      'B. Tính minh bạch (Transparent) và có thể giải thích được',
      'C. Giữ bí mật tuyệt đối cách thức hoạt động với người dùng',
      'D. Tự động thu thập dữ liệu người dùng mà không cần hỏi',
    ],
    correctIndex: 1,
    explanation: 'Chuẩn 12.A2.1: 6 nguyên tắc gồm: An toàn, Công bằng, Minh bạch, Quyền riêng tư, Trách nhiệm và Lợi ích xã hội.',
    standardCode: '12.A2.1',
    difficulty: 'easy',
  },
  {
    id: 'q-5',
    period: 5,
    question: 'Hiện tượng "Ảo giác AI" (Hallucination) ở các mô hình ngôn ngữ lớn (như ChatGPT, Gemini) nghĩa là gì?',
    options: [
      'A. Màn hình máy tính bị nhấp nháy ánh sáng tím',
      'B. AI tự chế ra thông tin sai lệch, trích dẫn nguồn không có thật nhưng trả lời rất tự tin',
      'C. AI bị nhiễm virus độc hại từ mạng Internet',
      'D. AI có khả năng đọc được suy nghĩ trong đầu con người',
    ],
    correctIndex: 1,
    explanation: 'Hallucination là khi mô hình dự đoán từ theo xác suất nên ghép nối những thông tin nghe có vẻ thuyết phục nhưng sai sự thật.',
    standardCode: '12.A3.1',
    difficulty: 'easy',
  },
  {
    id: 'q-6',
    period: 6,
    question: 'Học sinh THPT có quyền gì khi trường học sử dụng hệ thống AI điểm danh bằng nhận diện khuôn mặt?',
    options: [
      'A. Quyền được biết dữ liệu khuôn mặt của mình được lưu ở đâu và dùng vào mục đích gì',
      'B. Quyền yêu cầu bảo mật thông tin sinh trắc học',
      'C. Quyền đề xuất phương án điểm danh thay thế nếu có lo ngại về quyền riêng tư',
      'D. Cả 3 phương án A, B, C đều đúng',
    ],
    correctIndex: 3,
    explanation: 'Chuẩn 12.B3.1: Công dân số có quyền được thông tin, quyền riêng tư dữ liệu và quyền tham gia góp ý chính sách sử dụng công nghệ.',
    standardCode: '12.B3.1',
    difficulty: 'medium',
  },
  {
    id: 'q-7',
    period: 7,
    question: 'Công cụ nào sau đây cho phép học sinh THPT huấn luyện mô hình thị giác máy tính nhận diện cử chỉ tay ngay trên trình duyệt mà KHÔNG cần viết code phức tạp?',
    options: [
      'A. Google Teachable Machine',
      'B. Trình soạn thảo Notepad',
      'C. Microsoft Excel bảng tính',
      'D. Ứng dụng Calculator',
    ],
    correctIndex: 0,
    explanation: 'Teachable Machine là công cụ web trực quan miễn phí của Google, giúp học sinh trải nghiệm thu thập mẫu webcam, train và test mô hình chỉ bằng vài cú nhấp chuột.',
    standardCode: '12.C2.1',
    difficulty: 'easy',
  },
  {
    id: 'q-8',
    period: 8,
    question: 'Để đánh giá độ chính xác thực tế của một mô hình AI, ta BẮT BUỘC phải dùng tập dữ liệu nào?',
    options: [
      'A. Dùng lại chính những bức ảnh đã dùng để huấn luyện mô hình (Training set)',
      'B. Tập dữ liệu kiểm thử MỚI HOÀN TOÀN mà mô hình chưa từng nhìn thấy trước đó (Test set)',
      'C. Chỉ cần cho mô hình đoán 1 tấm ảnh duy nhất',
      'D. Không cần kiểm thử, chỉ cần mô hình chạy không báo lỗi cú pháp',
    ],
    correctIndex: 1,
    explanation: 'Nếu dùng lại tập train, máy sẽ "học vẹt" (Overfitting) đạt 100% nhưng khi gặp tình huống thực tế ngoài đời sẽ đoán sai hoàn toàn.',
    standardCode: '12.C3.2',
    difficulty: 'medium',
  },
  {
    id: 'q-9',
    period: 8,
    question: 'Trong hệ thống camera an ninh phát hiện trộm ở trường học, lỗi nào sau đây nguy hiểm hơn (False Negative)?',
    options: [
      'A. Nhận nhầm một con mèo chạy qua là trộm (Báo động giả)',
      'B. Có kẻ trộm thật trèo tường vào nhưng hệ thống không phát hiện ra (Bỏ sót)',
      'C. Cả hai lỗi đều nhẹ như nhau',
      'D. Camera chụp ảnh quá nét',
    ],
    correctIndex: 1,
    explanation: 'Lỗi bỏ sót (False Negative) trong bảo mật và y tế cực kỳ nguy hiểm, có thể dẫn tới mất mát tài sản hoặc đe dọa tính mạng.',
    standardCode: '12.C3.2',
    difficulty: 'hard',
  },
  {
    id: 'q-10',
    period: 9,
    question: 'Một hệ thống AI hoàn chỉnh gồm 5 thành phần nào?',
    options: [
      'A. Bàn phím, chuột, màn hình, loa và tai nghe',
      'B. Thu thập dữ liệu (Input) -> Tiền xử lý -> Mô hình AI -> Xử lý kết quả (Output) -> Cơ chế con người giám sát',
      'C. Facebook, TikTok, Instagram, Zalo và YouTube',
      'D. CPU, RAM, Ổ cứng SSD, Quạt tản nhiệt và Nguồn điện',
    ],
    correctIndex: 1,
    explanation: 'Chuẩn 12.D1.1: Kiến trúc khép kín của hệ thống AI luôn cần đủ 5 thành phần từ đầu vào dữ liệu đến cơ chế con người giám sát và can thiệp.',
    standardCode: '12.D1.1',
    difficulty: 'medium',
  },
  {
    id: 'q-11',
    period: 10,
    question: 'Khi làm dự án AI nhóm 4 bạn ở lớp 12, bạn phụ trách vai trò "Huấn luyện dữ liệu" (Data Trainer) có trách nhiệm chính là gì?',
    options: [
      'A. Chỉ ngồi đợi các bạn khác làm xong rồi nộp bài',
      'B. Tìm kiếm nguồn dữ liệu sạch, chụp ảnh/ghi âm các góc độ đa dạng, gán nhãn chính xác và kiểm tra tính công bằng',
      'C. Viết toàn bộ code lập trình phần mềm',
      'D. Thiết kế slide thuyết trình ngày báo cáo',
    ],
    correctIndex: 1,
    explanation: 'Chuẩn 12.D2.1 (P1): Chất lượng mô hình phụ thuộc 80% vào dữ liệu. Data Trainer là linh hồn bảo đảm AI không bị thiên lệch.',
    standardCode: '12.D2.1',
    difficulty: 'medium',
  },
  {
    id: 'q-12',
    period: 11,
    question: 'Khái niệm sản phẩm khả dụng tối thiểu (MVP - Minimum Viable Product) trong tiết 11 có nghĩa là gì?',
    options: [
      'A. Một bản vẽ trên giấy chưa hoạt động được',
      'B. Phiên bản chạy được đơn giản nhất, kiểm chứng tính năng cốt lõi trước khi tốn nhiều thời gian mở rộng',
      'C. Sản phẩm hoàn hảo không tì vết có đầy đủ 100 tính năng',
      'D. Bản sao chép nguyên mẫu từ trên mạng về nộp',
    ],
    correctIndex: 1,
    explanation: 'Chuẩn 12.D2.1 (P2): MVP giúp nhóm học sinh nhanh chóng đưa mô hình vào thử nghiệm thực tế để phát hiện lỗi sớm và cải tiến.',
    standardCode: '12.D2.1',
    difficulty: 'medium',
  },
  {
    id: 'q-13',
    period: 11,
    question: 'Trong quá trình làm sản phẩm AI học đường, "Kỷ luật số" (Digital Discipline) yêu cầu học sinh phải làm gì?',
    options: [
      'A. Xóa hết lịch sử chat với AI để không ai biết mình dùng AI',
      'B. Ghi nhật ký prompt rõ ràng, ghi rõ nguồn dữ liệu và khai báo trung thực phần nào AI hỗ trợ',
      'C. Nhờ người khác làm hộ toàn bộ',
      'D. Tuyên bố mình tự viết 100% dù có sự hỗ trợ của AI',
    ],
    correctIndex: 1,
    explanation: 'Chuẩn 12.B1.1 & 12.D2.1: Liêm chính học thuật hiện đại không cấm dùng AI, mà yêu cầu minh bạch về sự đóng góp của AI và tư duy độc lập của học sinh.',
    standardCode: '12.D2.1',
    difficulty: 'hard',
  },
  {
    id: 'q-14',
    period: 12,
    question: 'Khi báo cáo sản phẩm AI ở tiết 12, điều nào sau đây sẽ khiến dự án bị TRỪ ĐIỂM nặng theo rubric đánh giá chuẩn GDPT 2018?',
    options: [
      'A. Dũng cảm chỉ ra nhược điểm và tỷ lệ nhận diện sai của mô hình',
      'B. Khai báo trung thực các câu lệnh prompt đã hỏi AI',
      'C. Giấu nhẹm các lỗi sai, khẳng định mô hình của mình chính xác 100% tuyệt đối không có rủi ro nào',
      'D. Đề xuất phương án có con người túc trực giám sát khi hệ thống vận hành',
    ],
    correctIndex: 2,
    explanation: 'Không có hệ thống AI nào chính xác 100%. Thái độ trung thực khoa học, nhận thức được rủi ro và giới hạn của công nghệ là phẩm chất cốt lõi của môn học.',
    standardCode: '12.Rubric.12',
    difficulty: 'hard',
  },
  {
    id: 'q-15',
    period: 12,
    question: 'Thông điệp cốt lõi xuyên suốt cả 12 tiết của Chuyên đề Ứng dụng AI cho học sinh THPT là gì?',
    options: [
      'A. AI sẽ thay thế hoàn toàn con người trong mọi lĩnh vực',
      'B. Con người phải luôn giữ vai trò trung tâm, làm chủ, có đạo đức và chịu trách nhiệm cao nhất trước mọi ứng dụng AI',
      'C. Nên cấm triệt để học sinh sử dụng công nghệ AI',
      'D. Học sinh chỉ cần học thuộc lòng lý thuyết mà không cần thực hành',
    ],
    correctIndex: 1,
    explanation: 'Mạch năng lực A & Quyết định 2422/QĐ-BGDĐT: "Con người trong vòng lặp" (Human-in-the-loop) - Con người là chủ thể sáng tạo, định hướng đạo đức và quyết định tương lai.',
    standardCode: 'Tổng hợp A-B-C-D',
    difficulty: 'easy',
  },
];

// Student Badges
export const STUDENT_BADGES: StudentBadge[] = [
  {
    id: 'badge-human-in-loop',
    title: 'Người Gác Đền Vòng Đời AI',
    description: 'Hoàn thành thử thách ghép nối chuẩn xác 7 bước vòng đời AI và các trạm kiểm soát của con người.',
    icon: 'ShieldCheck',
    unlocked: false,
    category: 'mastery',
  },
  {
    id: 'badge-judge-master',
    title: 'Trọng Tài Quyết Định Sáng Suốt',
    description: 'Đạt điểm tuyệt đối trong trò chơi phân vai AI vs Con người ở các tình huống then chốt.',
    icon: 'Scale',
    unlocked: false,
    category: 'ethics',
  },
  {
    id: 'badge-bias-detective',
    title: 'Thám Tử Săn Lùng Thiên Kiến',
    description: 'Phát hiện chính xác các bẫy ảo giác, thiên kiến dữ liệu và deepfake nguy hiểm.',
    icon: 'SearchCheck',
    unlocked: false,
    category: 'ethics',
  },
  {
    id: 'badge-test-engineer',
    title: 'Kỹ Sư Kiểm Thử Dữ Liệu Mới',
    description: 'Làm chủ ma trận lỗi (Confusion Matrix), phát hiện lỗi nhận nhầm và bỏ sót trên tập Test set.',
    icon: 'CheckSquare',
    unlocked: false,
    category: 'developer',
  },
  {
    id: 'badge-ai-champion',
    title: 'Quán Quân Rung Chuông Vàng AI',
    description: 'Vượt qua 15 câu đố hóc búa đạt trên 80% điểm số bám sát chuẩn GDPT 2018.',
    icon: 'Trophy',
    unlocked: false,
    category: 'mastery',
  },
  {
    id: 'badge-ethical-creator',
    title: 'Nhà Kiến Tạo AI Liêm Chính',
    description: 'Hoàn thành Bộ quy tắc đạo đức AI học đường và ký cam kết số.',
    icon: 'Award',
    unlocked: false,
    category: 'collaborator',
  },
];
