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
    description: 'Video mở rộng giới thiệu khái niệm hệ thống AI có khả năng tự động ra quyết định - giúp học sinh liên hệ với 7 bước trong vòng đời hệ thống AI và nguyên tắc "con người trong vòng lặp".',
    ...AI_AGENT_VIDEO,
    discussionQuestion: 'Nếu một hệ thống AI như trong video tự đưa ra quyết định sai, theo em ở bước nào trong vòng đời AI con người lẽ ra phải kiểm soát chặt hơn để tránh sai sót đó?'
  },
  2: {
    id: 'vid_lesson_2',
    title: 'AI Agent và ranh giới giữa gợi ý và quyết định',
    description: 'Video mở rộng giúp học sinh hình dung một hệ thống AI hoạt động tự động đến mức nào, từ đó phân biệt phần việc AI có thể gợi ý và phần việc con người bắt buộc phải tự quyết định.',
    ...AI_AGENT_VIDEO,
    discussionQuestion: 'Trong 5 bước ra quyết định có AI hỗ trợ, ở bước nào AI trong video chỉ nên "gợi ý" chứ không được tự ý "quyết định thay" con người?'
  },
  3: {
    id: 'vid_lesson_3',
    title: 'Trí tuệ nhân tạo: Công cụ hay mối đe dọa? Tất cả phụ thuộc vào đạo đức phát triển',
    description: 'Video mở rộng (VTV24) bàn về vai trò của đạo đức trong phát triển AI, dùng làm ví dụ liên hệ tới khái niệm trách nhiệm giải trình và việc không thể "đổ lỗi cho máy" khi AI gây hại.',
    ...AI_ETHICS_VIDEO,
    discussionQuestion: 'Theo nội dung video, khi một hệ thống AI gây hậu quả xấu, ai là người phải đứng ra giải trình và chịu trách nhiệm - máy móc hay con người vận hành nó?'
  },
  4: {
    id: 'vid_lesson_4',
    title: 'Đạo đức phát triển AI và 6 nguyên tắc thiết kế AI có trách nhiệm',
    description: 'Video mở rộng (VTV24) về ranh giới giữa AI là công cụ hữu ích hay mối đe dọa, làm cơ sở liên hệ tới 6 nguyên tắc đạo đức khi thiết kế AI: an toàn, công bằng, minh bạch, riêng tư, trách nhiệm, lợi ích xã hội.',
    ...AI_ETHICS_VIDEO,
    discussionQuestion: 'Theo nội dung video, nguyên tắc đạo đức nào (an toàn, công bằng, minh bạch, riêng tư, trách nhiệm, lợi ích xã hội) đang bị vi phạm rõ nhất, và cần sửa như thế nào?'
  },
  5: {
    id: 'vid_lesson_5',
    title: 'Hạn chế rủi ro và ảnh hưởng tiêu cực của trí tuệ nhân tạo',
    description: 'Video mở rộng (Truyền hình Quốc hội Việt Nam) về các rủi ro của AI trong thực tế, giúp liên hệ tới 3 mức độ rủi ro (thấp - trung bình - cao) và trách nhiệm công dân khi dùng AI.',
    ...AI_RISK_VIDEO,
    discussionQuestion: 'Theo nội dung video, những rủi ro được nêu ra thuộc mức độ nào (thấp, trung bình hay cao) trong thang phân loại rủi ro đã học? Vì sao?'
  },
  6: {
    id: 'vid_lesson_6',
    title: 'Quyền và trách nhiệm của các bên khi hạn chế rủi ro AI',
    description: 'Video mở rộng (Truyền hình Quốc hội Việt Nam) giúp học sinh hình dung quyền và trách nhiệm của người phát triển, người sử dụng AI, cũng như vai trò công dân trong việc góp ý chính sách AI.',
    ...AI_RISK_VIDEO,
    discussionQuestion: 'Trong hệ sinh thái AI, ai là người có quyền và trách nhiệm góp ý xây dựng quy định sử dụng AI tại trường học của em?'
  },
  7: {
    id: 'vid_lesson_7',
    title: 'Hướng dẫn thực hành Teachable Machine',
    description: 'Video hướng dẫn từng bước sử dụng công cụ mã nguồn mở Teachable Machine (teachablemachine.withgoogle.com) để huấn luyện một mô hình phân loại đơn giản - một trong các công cụ tạo AI miễn phí vừa học.',
    ...TEACHABLE_MACHINE_VIDEO,
    discussionQuestion: 'Sau khi xem video, nhóm em dự định dùng Teachable Machine cho ý tưởng dự án nào trong 3 ý tưởng nhóm vừa đề xuất?'
  },
  8: {
    id: 'vid_lesson_8',
    title: 'Thao tác huấn luyện mô hình phân loại với Teachable Machine',
    description: 'Video hướng dẫn thực hành các bước tải ảnh mẫu, gắn nhãn (label) và huấn luyện mô hình bằng Teachable Machine - dùng để thực hành kiểm thử và tính độ chính xác của mô hình.',
    ...TEACHABLE_MACHINE_VIDEO,
    discussionQuestion: 'Khi kiểm tra mô hình vừa huấn luyện bằng 10 mẫu ảnh mới, nếu mô hình dự đoán sai thì nguyên nhân thường do đâu và nên cải thiện thế nào?'
  },
  9: {
    id: 'vid_lesson_9',
    title: 'Cải thiện dữ liệu để tối ưu mô hình Teachable Machine',
    description: 'Video hướng dẫn thao tác Teachable Machine, dùng làm ví dụ minh hoạ cho thành phần "Dữ liệu" và "Phản hồi (cải tiến)" trong 5 thành phần của một hệ thống AI.',
    ...TEACHABLE_MACHINE_VIDEO,
    discussionQuestion: 'Trong 5 thành phần của hệ thống AI (Dữ liệu - Thuật toán - Mô hình - Đầu ra - Phản hồi), video vừa xem minh hoạ rõ nhất cho thành phần nào?'
  },
  10: {
    id: 'vid_lesson_10',
    title: 'Từ dữ liệu đến hiệu quả mô hình AI',
    description: 'Video hướng dẫn Teachable Machine, liên hệ tới các vai trò trong nhóm phát triển AI: ai là người thu thập dữ liệu, ai huấn luyện mô hình, ai kiểm thử kết quả.',
    ...TEACHABLE_MACHINE_VIDEO,
    discussionQuestion: 'Trong quy trình huấn luyện mô hình ở video, công việc nào ứng với vai trò "huấn luyện" và công việc nào ứng với vai trò "kiểm thử" đã học?'
  },
  11: {
    id: 'vid_lesson_11',
    title: 'AI Agent là gì? 15 phút hiểu hết về AI Agent',
    description: 'Video giải thích khái niệm, cấu trúc và cách hoạt động của một hệ thống tác nhân AI (AI agent) - liên hệ với quy trình thực hành dựng bản đầu sản phẩm AI của nhóm.',
    ...AI_AGENT_VIDEO,
    discussionQuestion: 'So với sản phẩm AI đơn giản nhóm em đang dựng, AI agent trong video có gì phức tạp hơn về mục tiêu, đầu vào và các bước xử lí?'
  },
  12: {
    id: 'vid_lesson_12',
    title: 'Ứng dụng AI Agent phục vụ học tập và cộng đồng',
    description: 'Video giải thích AI Agent, làm nền tảng để học sinh thuyết trình sản phẩm/dự án AI của nhóm theo dàn ý 5 phần và tự nhìn lại quá trình học tập cuối chuyên đề.',
    ...AI_AGENT_VIDEO,
    discussionQuestion: 'Sau 12 tiết học chuyên đề "Con người làm chủ AI", em thấy mình có thể ứng dụng AI vào việc học tập hoặc định hướng nghề nghiệp nào trong tương lai?'
  }
};

export const allLessonVideos: SlideVideo[] = Object.values(lessonVideos);

export function getVideoForLesson(period: number): SlideVideo {
  return lessonVideos[period] || lessonVideos[1];
}

export function getVideoForSlide(slideId: string, period: number): SlideVideo {
  return lessonVideos[period] || lessonVideos[1];
}
