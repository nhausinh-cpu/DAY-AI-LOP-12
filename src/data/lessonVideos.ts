import { SlideVideo } from '../types';

// Video mở rộng (không bắt buộc trong KHBD) minh hoạ thêm cho từng buổi học.
// Mỗi buổi dùng một video RIÊNG, đúng chủ đề của buổi đó - tránh lặp lại một video
// cho nhiều buổi có nội dung khác nhau. Chỉ Buổi 4-5 (cùng thực hành 1 công cụ) mới
// dùng chung video hướng dẫn Teachable Machine.
const AI_AGENT_VIDEO = {
  youtubeId: 'Uoltd_N5hbw',
  videoUrl: 'https://www.youtube.com/embed/Uoltd_N5hbw?autoplay=1&rel=0',
  thumbnailUrl: 'https://img.youtube.com/vi/Uoltd_N5hbw/hqdefault.jpg',
  duration: '15:00',
  sourceLabel: 'Video tiếng Việt (YouTube) - Tư liệu mở rộng, không bắt buộc'
};

// Buổi 2 - đúng chủ đề nguyên tắc đạo đức khi phát triển AI (VTV24).
const AI_ETHICS_VIDEO = {
  youtubeId: 'E_jFmDMALO4',
  videoUrl: 'https://www.youtube.com/embed/E_jFmDMALO4?autoplay=1&rel=0',
  thumbnailUrl: 'https://img.youtube.com/vi/E_jFmDMALO4/hqdefault.jpg',
  duration: '5:00',
  sourceLabel: 'Video tiếng Việt (YouTube - VTV24) - Tư liệu mở rộng, không bắt buộc'
};

// Buổi 3 - đúng chủ đề rủi ro và ảnh hưởng tiêu cực của AI (Truyền hình Quốc hội Việt Nam).
const AI_RISK_VIDEO = {
  youtubeId: 'I4oskLgFGxg',
  videoUrl: 'https://www.youtube.com/embed/I4oskLgFGxg?autoplay=1&rel=0',
  thumbnailUrl: 'https://img.youtube.com/vi/I4oskLgFGxg/hqdefault.jpg',
  duration: '5:00',
  sourceLabel: 'Video tiếng Việt (YouTube - Truyền hình Quốc hội Việt Nam) - Tư liệu mở rộng, không bắt buộc'
};

const TEACHABLE_MACHINE_VIDEO = {
  youtubeId: 'vt8AsMOdECs',
  videoUrl: 'https://www.youtube.com/embed/vt8AsMOdECs?autoplay=1&rel=0',
  thumbnailUrl: 'https://img.youtube.com/vi/vt8AsMOdECs/hqdefault.jpg',
  duration: '10:00',
  sourceLabel: 'Video tiếng Việt (YouTube) - Hướng dẫn thực hành Teachable Machine'
};

export const lessonVideos: Record<number, SlideVideo> = {
  1: {
    id: 'vid_lesson_1',
    title: 'AI Agent là gì? Hệ thống AI tự ra quyết định',
    description: 'Video mở rộng giới thiệu khái niệm hệ thống AI có khả năng tự động ra quyết định - giúp học sinh liên hệ với câu hỏi "ai giữ quyền kiểm soát, ai chịu trách nhiệm" trong vòng đời một hệ thống AI.',
    ...AI_AGENT_VIDEO,
    discussionQuestion: 'Nếu một hệ thống AI như trong video tự đưa ra quyết định sai, theo em ai là người phải chịu trách nhiệm giải trình: người lập trình, người triển khai hay người giám sát sử dụng?'
  },
  2: {
    id: 'vid_lesson_2',
    title: 'AI Agent và ranh giới kiểm soát của con người',
    description: 'Video mở rộng giúp học sinh hình dung một hệ thống AI hoạt động tự động đến mức nào, từ đó phân tích những bước trong vòng đời AI mà con người bắt buộc phải trực tiếp quyết định.',
    ...AI_AGENT_VIDEO,
    discussionQuestion: 'Ở bước "triển khai" và "giám sát - xử lí sự cố" trong vòng đời AI, con người cần giữ quyền kiểm soát như thế nào để hệ thống AI không vượt tầm kiểm soát?'
  },
  3: {
    id: 'vid_lesson_3',
    title: 'Trí tuệ nhân tạo: Công cụ hay mối đe dọa? Tất cả phụ thuộc vào đạo đức phát triển',
    description: 'Video mở rộng (VTV24) bàn về vai trò của đạo đức trong phát triển AI, dùng làm ví dụ liên hệ tới 6 nguyên tắc đạo đức khi thiết kế và phát triển sản phẩm AI.',
    ...AI_ETHICS_VIDEO,
    discussionQuestion: 'Theo nội dung video, nguyên tắc đạo đức nào (an toàn, công bằng, minh bạch, riêng tư, trách nhiệm, lợi ích xã hội) cần được ưu tiên hàng đầu khi phát triển một sản phẩm AI? Vì sao?'
  },
  4: {
    id: 'vid_lesson_4',
    title: 'Đạo đức phát triển AI và trách nhiệm công dân số',
    description: 'Video mở rộng (VTV24) về ranh giới giữa AI là công cụ hữu ích hay mối đe dọa, làm cơ sở để học sinh viết bản cam kết cá nhân về sử dụng AI có trách nhiệm.',
    ...AI_ETHICS_VIDEO,
    discussionQuestion: 'Là một công dân số, em cần làm gì để sử dụng AI một cách an toàn, trung thực và có đạo đức như nội dung video đã nêu?'
  },
  5: {
    id: 'vid_lesson_5',
    title: 'Hạn chế rủi ro và ảnh hưởng tiêu cực của trí tuệ nhân tạo',
    description: 'Video mở rộng (Truyền hình Quốc hội Việt Nam) về các rủi ro của AI trong thực tế, giúp liên hệ tới nguyên nhân sai lệch dữ liệu, thuật toán và bối cảnh sử dụng.',
    ...AI_RISK_VIDEO,
    discussionQuestion: 'Theo nội dung video, một hệ thống AI có thể gây ra những rủi ro gì nếu dữ liệu huấn luyện không đầy đủ hoặc bị lạm dụng?'
  },
  6: {
    id: 'vid_lesson_6',
    title: 'Quyền và trách nhiệm của các bên khi hạn chế rủi ro AI',
    description: 'Video mở rộng (Truyền hình Quốc hội Việt Nam) giúp học sinh hình dung vai trò của người phát triển, người sử dụng và cơ quan quản lí trong việc hạn chế rủi ro AI.',
    ...AI_RISK_VIDEO,
    discussionQuestion: 'Trong hệ sinh thái AI, ai là người có quyền và trách nhiệm góp ý xây dựng quy định sử dụng AI tại trường học của em?'
  },
  7: {
    id: 'vid_lesson_7',
    title: 'Hướng dẫn thực hành Teachable Machine',
    description: 'Video hướng dẫn từng bước sử dụng công cụ mã nguồn mở Teachable Machine (teachablemachine.withgoogle.com) để huấn luyện một mô hình phân loại đơn giản - đúng công cụ thực hành của buổi học.',
    ...TEACHABLE_MACHINE_VIDEO,
    discussionQuestion: 'Sau khi xem video, nhóm em dự định huấn luyện mô hình Teachable Machine để phân loại đối tượng gì phục vụ học tập hoặc hoạt động xã hội ở trường?'
  },
  8: {
    id: 'vid_lesson_8',
    title: 'Thao tác huấn luyện mô hình phân loại với Teachable Machine',
    description: 'Video hướng dẫn thực hành các bước tải ảnh mẫu, gắn nhãn (label) và huấn luyện mô hình bằng Teachable Machine.',
    ...TEACHABLE_MACHINE_VIDEO,
    discussionQuestion: 'Khi kiểm tra mô hình vừa huấn luyện bằng ảnh mới, nếu mô hình dự đoán sai thì nguyên nhân có thể do đâu?'
  },
  9: {
    id: 'vid_lesson_9',
    title: 'Cải thiện dữ liệu để tối ưu mô hình Teachable Machine',
    description: 'Video hướng dẫn thao tác Teachable Machine, dùng làm cơ sở thực hành bổ sung dữ liệu, huấn luyện lại và so sánh kết quả trước - sau.',
    ...TEACHABLE_MACHINE_VIDEO,
    discussionQuestion: 'Em dự định bổ sung thêm những dữ liệu (ảnh) nào để mô hình Teachable Machine của nhóm dự đoán chính xác hơn?'
  },
  10: {
    id: 'vid_lesson_10',
    title: 'Từ dữ liệu đến hiệu quả mô hình AI',
    description: 'Video hướng dẫn Teachable Machine, liên hệ tới khái niệm hàm mục tiêu, tối ưu hoá hệ thống và hiện tượng quá khớp dữ liệu (overfitting).',
    ...TEACHABLE_MACHINE_VIDEO,
    discussionQuestion: 'Nếu mô hình học "quá kỹ" dữ liệu huấn luyện nhưng dự đoán sai với dữ liệu mới (overfitting), nhóm em nên xử lí như thế nào?'
  },
  11: {
    id: 'vid_lesson_11',
    title: 'AI Agent là gì? 15 phút hiểu hết về AI Agent',
    description: 'Video giải thích khái niệm, cấu trúc và cách hoạt động của một hệ thống tác nhân AI (AI agent) - đúng nội dung trọng tâm của buổi tổng kết chuyên đề.',
    ...AI_AGENT_VIDEO,
    discussionQuestion: 'Theo cấu trúc AI agent trong video (mục tiêu - đầu vào - các bước xử lí - đầu ra - người giám sát), hãy mô tả AI agent nhóm em dự định dựng thử trên Google AI Studio.'
  },
  12: {
    id: 'vid_lesson_12',
    title: 'Ứng dụng AI Agent phục vụ học tập và cộng đồng',
    description: 'Video giải thích AI Agent, làm nền tảng để học sinh thuyết trình sản phẩm/ý tưởng AI agent của nhóm và tự đánh giá cuối chuyên đề.',
    ...AI_AGENT_VIDEO,
    discussionQuestion: 'Sau 12 tiết học chuyên đề, em tự đánh giá bản thân đã đạt được năng lực AI nào rõ nhất trong 4 thành phần NLa, NLb, NLc, NLd?'
  }
};

export const allLessonVideos: SlideVideo[] = Object.values(lessonVideos);

export function getVideoForLesson(period: number): SlideVideo {
  return lessonVideos[period] || lessonVideos[1];
}

export function getVideoForSlide(slideId: string, period: number): SlideVideo {
  return lessonVideos[period] || lessonVideos[1];
}
