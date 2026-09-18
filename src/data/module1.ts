import { Lesson } from '../types';
import { svgVisual } from './visual';

// BUỔI 1 - TIẾT 1-2
// Chuyên đề 1: CON NGƯỜI LÀM CHỦ AI - Mạch A: Tư duy lấy con người làm trung tâm
// Yêu cầu cần đạt: 12.A1.1 (Tiết 1); 12.A1.2 (Tiết 2)
export const module1: Lesson[] = [
  {
    period: 1,
    title: 'Con Người Trong Vòng Đời Hệ Thống AI',
    description: 'Phân tích 7 bước trong vòng đời một hệ thống AI và nguyên tắc "con người trong vòng lặp" - con người luôn giữ quyền kiểm soát và chịu trách nhiệm cuối cùng.',
    objectives: [
      '12.A1.1: Phân tích được một hệ thống AI để bảo đảm con người có quyền kiểm soát và chịu trách nhiệm ở tất cả các bước quan trọng trong vòng đời AI.',
      'Nêu được 7 bước trong vòng đời của một hệ thống AI, từ lúc hình thành ý tưởng đến khi ngừng sử dụng.',
      'Giải thích được ở mỗi bước, con người giữ vai trò quyết định và kiểm soát như thế nào; hiểu nguyên tắc "con người trong vòng lặp".'
    ],
    slides: [
      {
        id: 'l1_s1', title: 'Chuyên Đề Giáo Dục AI - Lớp 12', visualType: 'title',
        content: [
          '📘 Tiết 1: Con người trong vòng đời hệ thống AI',
          '🎯 Học xong tiết này, các em sẽ: nêu được 7 bước trong vòng đời một hệ thống AI; giải thích được vai trò kiểm soát của con người ở từng bước; hiểu nguyên tắc "con người trong vòng lặp".',
          '🏫 Trường THPT Tân Lược - Chuyên đề 1: Con người làm chủ AI'
        ],
        visualUrl: svgVisual('Con Người Trong Vòng Đời AI', 'Chuyên đề 1: Con người làm chủ AI - Tiết 1', '#4338ca', '#0ea5e9', '🕹️'),
        speakerNotes: 'Giới thiệu Chuyên đề 1 "Con người làm chủ AI", nêu rõ mạch A - tư duy lấy con người làm trung tâm, mở đầu bằng khái niệm vòng đời một hệ thống AI.'
      },
      {
        id: 'l1_s2', title: 'Khởi Động: Cái Máy Hay Con Người Chịu Trách Nhiệm?', visualType: 'intro',
        content: [
          '💭 Tình huống: Trường dùng phần mềm AI chấm toàn bộ bài thi. Một bạn làm bài rất hay nhưng AI chấm nhầm chỉ 4 điểm.',
          '❓ Câu hỏi: "Ai phải chịu trách nhiệm - cái máy AI, hay con người?"',
          '⏱️ Thảo luận cặp 2 phút, 2-3 học sinh phát biểu.',
          '💡 Dự kiến: HS có thể nói "tại máy". GV dẫn: AI chỉ là công cụ do con người tạo và cho phép dùng, nên con người (nhà trường, người vận hành) phải chịu trách nhiệm.'
        ],
        visualUrl: svgVisual('Ai Chịu Trách Nhiệm Khi AI Sai?', 'Tình huống: AI chấm thi nhầm điểm cho học sinh', '#0f766e', '#0891b2', '❓'),
        answerHint: 'AI chỉ là công cụ do con người tạo và cho phép dùng - trách nhiệm luôn thuộc về con người vận hành. Vậy con người kiểm soát AI ở khâu nào?',
        speakerNotes: 'GV nêu tình huống, mời học sinh phát biểu rồi chốt: AI không tự chịu trách nhiệm, con người mới là chủ thể kiểm soát. Từ đó dẫn vào 7 bước vòng đời hệ thống AI.'
      },
      {
        id: 'l1_s3', title: '7 Bước Trong Vòng Đời Hệ Thống AI', visualType: 'diagram',
        content: [
          '🔄 Một hệ thống AI không tự nhiên sinh ra và không hoạt động một mình - nó trải qua 7 bước nối tiếp, bước nào cũng có bàn tay con người.',
          '1️⃣ Xác định vấn đề: quyết định có nên dùng AI không, dùng để làm gì, đặt mục tiêu và giới hạn.',
          '2️⃣ Chuẩn bị dữ liệu: thu thập, chọn lọc, gán nhãn, làm sạch dữ liệu - dữ liệu tốt thì AI mới đúng.',
          '3️⃣ Thiết kế & huấn luyện → 4️⃣ Thử nghiệm & đánh giá → 5️⃣ Triển khai → 6️⃣ Giám sát → 7️⃣ Dừng hoặc cập nhật.'
        ],
        diagramData: {
          nodes: [
            { id: 'n1', label: '1. Xác định vấn đề', x: 10, y: 20, color: '#4338ca' },
            { id: 'n2', label: '2. Chuẩn bị dữ liệu', x: 30, y: 10, color: '#4f46e5' },
            { id: 'n3', label: '3. Thiết kế & huấn luyện', x: 50, y: 20, color: '#6366f1' },
            { id: 'n4', label: '4. Thử nghiệm & đánh giá', x: 65, y: 40, color: '#7c3aed' },
            { id: 'n5', label: '5. Triển khai', x: 80, y: 60, color: '#0891b2' },
            { id: 'n6', label: '6. Giám sát', x: 55, y: 75, color: '#0d9488' },
            { id: 'n7', label: '7. Dừng / cập nhật', x: 25, y: 65, color: '#059669' }
          ],
          links: [
            { source: 'n1', target: 'n2' },
            { source: 'n2', target: 'n3' },
            { source: 'n3', target: 'n4' },
            { source: 'n4', target: 'n5' },
            { source: 'n5', target: 'n6', label: 'Con người giám sát' },
            { source: 'n6', target: 'n7' }
          ]
        },
        speakerNotes: 'Chiếu sơ đồ 7 bước, với mỗi bước hỏi "ở bước này con người kiểm soát bằng cách nào?". Ví dụ minh hoạ xuyên suốt: hệ thống AI chấm điểm bài thi tự động. Cho HS hoàn thành Phiếu học tập số 1 song song.'
      },
      {
        id: 'l1_s4', title: 'Ghi Nhớ: Con Người Trong Vòng Lặp', visualType: 'concepts',
        content: [
          '🔑 KIẾN THỨC CHỐT: Nguyên tắc "con người trong vòng lặp" - ở MỌI bước của vòng đời AI, con người là người ra quyết định cuối cùng và chịu trách nhiệm. AI chỉ hỗ trợ và thực thi, AI không tự chịu trách nhiệm.',
          '❓ Vì sao nói "AI không tự chịu trách nhiệm"? Vì AI là công cụ do con người tạo và vận hành; trách nhiệm pháp lí và đạo đức thuộc về người tạo và người sử dụng.',
          '❓ Ở bước nào con người có thể phát hiện và ngăn việc AI chấm sai? Bước 4 (thử nghiệm - chấm tay đối chiếu) và bước 6 (giám sát - cho phúc khảo, chấm lại).',
          '❓ Nếu dữ liệu đưa cho AI bị sai lệch thì hậu quả gì? AI học sai → kết quả sai/thiên lệch - lỗi ở bước 2 do con người kiểm soát chưa tốt.'
        ],
        visualUrl: svgVisual('Con Người Trong Vòng Lặp', 'AI chỉ hỗ trợ - Con người luôn chịu trách nhiệm cuối cùng', '#1e3a8a', '#4338ca', '🧭'),
        speakerNotes: 'Chốt hộp ghi nhớ và ba câu hỏi kiểm tra nhanh trong KHBD, cho học sinh nhắc lại nguyên tắc "con người trong vòng lặp" trước khi chuyển sang luyện tập nhóm.'
      },
      {
        id: 'l1_s5', title: 'Luyện Tập Nhóm: Phiếu Tình Huống "AI Chấm Điểm Thi"', visualType: 'interactive',
        content: [
          '📝 Phiếu tình huống: Trường em dùng phần mềm AI để chấm bài thi. Nhóm 4 học sinh, với mỗi bước trong 7 bước, ghi con người cần làm gì để AI chấm đúng và công bằng.',
          '⏱️ Làm việc nhóm 8 phút, 2 nhóm trình bày, nhóm khác bổ sung.',
          '✅ Sản phẩm: Phiếu học tập số 1 đã điền đủ 7 bước, đối chiếu với đáp án mẫu của giáo viên.'
        ],
        interactiveQuiz: {
          question: 'Ở bước "Chuẩn bị dữ liệu" trong vòng đời AI chấm điểm thi, con người cần làm gì để tránh AI chấm sai?',
          options: [
            'Không cần làm gì, cứ đưa dữ liệu nào có sẵn cho AI học',
            'Chọn bài mẫu đã chấm chuẩn, đa dạng; loại bỏ bài gán nhãn sai để AI không học lệch',
            'Chỉ cần huấn luyện AI thật nhanh, dữ liệu tính sau',
            'Giao hết việc chọn dữ liệu cho chính AI tự quyết định'
          ],
          answerIndex: 1,
          explanation: 'Ở bước chuẩn bị dữ liệu, con người phải chọn bài mẫu đã chấm chuẩn, đa dạng và loại bỏ dữ liệu gán nhãn sai - nếu dữ liệu sai lệch thì AI sẽ học sai và chấm sai.',
          hint: 'Nhớ lại: dữ liệu tốt thì AI mới đúng - đây là điểm kiểm soát rất quan trọng của con người.',
          suggestedAnswer: 'Con người phải chọn lọc, làm sạch và gán nhãn đúng dữ liệu trước khi đưa cho AI học, để tránh AI học lệch và chấm sai.'
        },
        speakerNotes: 'Phát Phiếu tình huống "AI chấm điểm thi" và Phiếu học tập số 1 (bảng 7 bước). Sau khi các nhóm trình bày, GV đối chiếu với đáp án mẫu trong KHBD.'
      },
      {
        id: 'l1_s6', title: 'Vận Dụng: Con Người Phải Luôn Làm Chủ AI', visualType: 'activity',
        content: [
          '🗣️ Mỗi em chọn một hệ thống AI em biết (xe tự lái, AI gợi ý video, trợ lí ảo...) và chỉ ra MỘT bước trong vòng đời mà nếu con người buông lỏng kiểm soát thì sẽ gây hậu quả gì.',
          '✍️ Viết 3-4 câu vào vở, 2-3 em chia sẻ trước lớp.',
          '📌 Bài tập về nhà: kể 1 ví dụ hệ thống AI, chỉ ra 1 bước con người kiểm soát và vì sao quan trọng.'
        ],
        activity: {
          title: 'Bài tập vận dụng: Con người và một hệ thống AI trong đời sống',
          duration: 'Thực hiện tại lớp (3-4 câu) + hoàn thiện ở nhà',
          instructions: [
            '1. Kể 1 ví dụ hệ thống AI trong đời sống (xe tự lái, AI gợi ý video, trợ lí ảo, phần mềm chấm thi...). Chỉ ra 1 bước con người kiểm soát và nêu vì sao quan trọng.',
            '2. Nếu con người "giao hết" cho AI mà không kiểm soát thì điều gì có thể xảy ra? Cho 1 ví dụ.',
            '3. Viết 3 câu nêu ý kiến: "Vì sao con người phải luôn làm chủ AI?"'
          ],
          tips: 'Liên hệ lại sơ đồ 7 bước vòng đời AI vừa học để xác định đúng bước cần phân tích.',
          hint: 'Hãy nghĩ đến hậu quả cụ thể nếu bỏ qua bước giám sát hoặc thử nghiệm - đánh giá.',
          suggestedAnswer: 'Câu trả lời tùy hệ thống AI học sinh chọn, cần nêu rõ: tên hệ thống, một bước cụ thể trong vòng đời, vai trò kiểm soát của con người ở bước đó và hậu quả nếu buông lỏng.'
        },
        speakerNotes: 'GV nhận xét nhanh một vài câu trả lời tại lớp, giao bài tập về nhà đầy đủ 3 câu, dặn dò chuẩn bị Tiết 2: "AI gợi ý, con người quyết định".'
      }
    ]
  },
  {
    period: 2,
    title: 'AI Gợi Ý, Con Người Quyết Định',
    description: 'Phân tích 5 bước của một quá trình ra quyết định có AI hỗ trợ, phân biệt phần việc của AI và phần việc bắt buộc con người phải tự quyết định.',
    objectives: [
      '12.A1.2: Phân tích được vai trò của con người và AI trong các bước chính của một quá trình ra quyết định.',
      'Mô tả được các bước chính của một quá trình ra quyết định có sự hỗ trợ của AI; phân biệt được việc AI đảm nhận và việc con người đảm nhận.',
      'Giải thích được vì sao với quyết định quan trọng, con người bắt buộc giữ quyền quyết định cuối cùng.'
    ],
    slides: [
      {
        id: 'l2_s1', title: 'Khởi Động: Khi Nào Không Thể Để AI Tự Quyết?', visualType: 'intro',
        content: [
          '🔁 Ôn nhanh: nhắc lại 7 bước vòng đời AI và nguyên tắc "con người trong vòng lặp" đã học ở Tiết 1.',
          '💭 Tình huống mới: (a) AI gợi ý bác sĩ chẩn đoán bệnh; (b) AI tự động quyết mức án tù cho một người.',
          '❓ Tình huống nào để AI quyết một mình là nguy hiểm? Vì sao?',
          '💡 Dự kiến: HS nhận ra càng ảnh hưởng lớn đến con người thì càng cần con người quyết.'
        ],
        visualUrl: svgVisual('AI Gợi Ý, Con Người Quyết Định', 'Khi nào để AI tự quyết một mình là nguy hiểm?', '#1e3a8a', '#4338ca', '⚖️'),
        speakerNotes: 'Dành vài phút ôn lại kiến thức Tiết 1, sau đó nêu 2 tình huống đối lập (y tế và tư pháp) để dẫn vào bài mới về vai trò AI - con người trong ra quyết định.'
      },
      {
        id: 'l2_s2', title: '5 Bước Của Một Quá Trình Ra Quyết Định Có AI', visualType: 'diagram',
        content: [
          '🔢 Khi con người dùng AI để ra quyết định, quá trình thường đi qua 5 bước.',
          '🧑‍💼 Bước 1: Con người nêu vấn đề cần quyết, thu thập thông tin đầu vào.',
          '🤖 Bước 2: AI xử lí dữ liệu, phân tích, đưa ra gợi ý/dự đoán.',
          '🧑‍💼 Bước 3-4-5: Con người cân nhắc bối cảnh - đạo đức, ra quyết định cuối cùng, và chịu trách nhiệm về kết quả.'
        ],
        diagramData: {
          nodes: [
            { id: 'd1', label: '1. Nêu vấn đề (Con người)', x: 10, y: 25, color: '#0f766e' },
            { id: 'd2', label: '2. Phân tích - gợi ý (AI)', x: 32, y: 10, color: '#0891b2' },
            { id: 'd3', label: '3. Cân nhắc bối cảnh, đạo đức (Con người)', x: 55, y: 25, color: '#4338ca' },
            { id: 'd4', label: '4. Ra quyết định cuối (Con người)', x: 75, y: 45, color: '#6d28d9' },
            { id: 'd5', label: '5. Chịu trách nhiệm (Con người)', x: 50, y: 65, color: '#9333ea' }
          ],
          links: [
            { source: 'd1', target: 'd2' },
            { source: 'd2', target: 'd3', label: 'AI chỉ gợi ý' },
            { source: 'd3', target: 'd4' },
            { source: 'd4', target: 'd5' }
          ]
        },
        speakerNotes: 'Trình bày sơ đồ 5 bước, phân tích 1 tình huống mẫu (AI gợi ý chẩn đoán) chỉ rõ "AI làm gì / con người làm gì" ở từng bước. Nhấn mạnh bước 3-4: con người phải cân nhắc điều AI không hiểu (hoàn cảnh, cảm xúc, đạo đức).'
      },
      {
        id: 'l2_s3', title: 'AI Gợi Ý Gì - Con Người Quyết Gì? (Theo Lĩnh Vực)', visualType: 'comparison',
        content: [
          '🏥 Y tế: AI gợi ý chẩn đoán từ triệu chứng, ảnh chụp - bác sĩ xem xét, quyết phương án điều trị. Rủi ro nếu để AI quyết một mình: chẩn đoán sai → chữa sai, nguy hiểm tính mạng.',
          '🚗 Giao thông: AI đề xuất lộ trình nhanh - người lái cân nhắc an toàn, chọn đường. Rủi ro: đi vào đường nguy hiểm/cấm.',
          '💼 Tuyển dụng: AI lọc, xếp hạng hồ sơ - nhà tuyển dụng phỏng vấn, quyết định. Rủi ro: loại nhầm người giỏi, thiên vị.',
          '⚖️ Tư pháp: AI gợi ý mức án tham khảo - thẩm phán xét xử theo luật và hoàn cảnh. Rủi ro: kết án bất công, vi phạm quyền con người.'
        ],
        comparisonData: {
          leftTitle: '🤖 AI gợi ý điều gì',
          leftItems: [
            'Y tế: gợi ý chẩn đoán từ triệu chứng, ảnh chụp',
            'Giao thông: đề xuất lộ trình nhanh nhất',
            'Tuyển dụng: lọc, xếp hạng hồ sơ ứng viên',
            'Tư pháp: gợi ý mức án tham khảo'
          ],
          rightTitle: '🧑‍💼 Con người quyết định gì',
          rightItems: [
            'Y tế: bác sĩ xem xét, quyết phương án điều trị',
            'Giao thông: người lái cân nhắc an toàn, chọn đường',
            'Tuyển dụng: nhà tuyển dụng phỏng vấn, quyết định',
            'Tư pháp: thẩm phán xét xử theo luật và hoàn cảnh'
          ]
        },
        speakerNotes: 'Dùng bảng ví dụ 4 lĩnh vực trong KHBD để học sinh thấy rõ: quyết định càng ảnh hưởng lớn đến con người (sức khoẻ, pháp lí, tương lai) thì con người càng bắt buộc giữ quyền quyết định cuối cùng.'
      },
      {
        id: 'l2_s4', title: 'Luyện Tập Nhóm: Vẽ Sơ Đồ Ra Quyết Định', visualType: 'interactive',
        content: [
          '🎴 Mỗi nhóm bốc 1 thẻ tình huống (y tế, giao thông, tuyển dụng, tư pháp, giáo dục) → vẽ sơ đồ 5 bước, tô màu phần AI làm và phần con người làm.',
          '🎤 Mỗi nhóm thuyết trình 1 phút.',
          '✅ Sản phẩm: Sơ đồ ra quyết định của nhóm, phân rõ AI / con người (Phiếu học tập số 2).'
        ],
        interactiveQuiz: {
          question: 'Ở bước 3 và 4 của quá trình ra quyết định có AI hỗ trợ, ai bắt buộc phải đảm nhận và vì sao?',
          options: [
            'AI, vì AI xử lí dữ liệu nhanh và chính xác hơn con người',
            'Con người, vì phải cân nhắc bối cảnh, cảm xúc, đạo đức mà AI không hiểu, rồi mới ra quyết định cuối',
            'Cả AI và con người đều không cần tham gia hai bước này',
            'Chỉ cần AI quyết định, con người chỉ thực hiện theo'
          ],
          answerIndex: 1,
          explanation: 'Ở bước 3 (cân nhắc bối cảnh, đạo đức) và bước 4 (ra quyết định cuối), con người phải đảm nhận vì đây là những điều AI không hiểu được - AI không thay được phần này.',
          hint: 'Nhớ câu ghi nhớ: "AI đưa gợi ý dựa trên dữ liệu; con người cân nhắc giá trị và chịu trách nhiệm về quyết định."',
          suggestedAnswer: 'Con người phải đảm nhận bước 3 và 4 vì cần cân nhắc hoàn cảnh riêng, cảm xúc, đạo đức - những điều AI không thể xử lí thay con người.'
        },
        speakerNotes: 'Phát bộ thẻ tình huống theo 5 lĩnh vực, các nhóm vẽ sơ đồ trên giấy, tô màu rõ phần AI/con người rồi thuyết trình 1 phút mỗi nhóm.'
      },
      {
        id: 'l2_s5', title: 'Vận Dụng: Quyết Định Nào Em Không Giao Cho AI?', visualType: 'activity',
        content: [
          '🗣️ Mỗi em nêu 1 quyết định trong đời sống của mình có thể nhờ AI gợi ý (chọn trường, mua đồ, học gì...). Chỉ rõ phần nào em vẫn phải tự quyết.',
          '✍️ Viết 2-3 câu, vài em chia sẻ.',
          '📌 Bài tập về nhà: chọn 1 tình huống thực tế, vẽ sơ đồ ra quyết định có AI (5 bước); nêu 1 quyết định TUYỆT ĐỐI không nên để AI quyết thay và giải thích.'
        ],
        activity: {
          title: 'Bài tập vận dụng: Sơ đồ ra quyết định của riêng em',
          duration: 'Vài câu tại lớp + hoàn thiện sơ đồ ở nhà',
          instructions: [
            '1. Chọn 1 tình huống thực tế trong học tập hoặc đời sống của em, vẽ sơ đồ ra quyết định có AI hỗ trợ (5 bước), chỉ rõ phần AI và phần con người.',
            '2. Nêu 1 quyết định mà em cho rằng TUYỆT ĐỐI không nên để AI quyết thay. Giải thích vì sao.'
          ],
          tips: 'Có thể chọn quyết định gần gũi: chọn ngành học, chọn nghề nghiệp, hoặc một quyết định ảnh hưởng đến sức khoẻ, tình cảm.',
          hint: 'Nhớ lại bảng ví dụ theo lĩnh vực (y tế, giao thông, tuyển dụng, tư pháp) đã học.',
          suggestedAnswer: 'Sơ đồ cần thể hiện đủ 5 bước, tô rõ phần AI (bước 2) và phần con người (bước 1, 3, 4, 5); quyết định không nên giao cho AI thường là quyết định ảnh hưởng lớn đến sức khoẻ, pháp lí hoặc tương lai.'
        },
        speakerNotes: 'Kết thúc phần luyện tập cá nhân, chuyển sang tổng kết buổi học và kết nối chủ đề buổi tiếp theo.'
      },
      {
        id: 'l2_s6', title: 'Tổng Kết Buổi 1', visualType: 'summary',
        content: [
          '✅ Các em đã đạt được: nêu được 7 bước vòng đời hệ thống AI và vai trò kiểm soát của con người ở từng bước; phân biệt được việc AI đảm nhận và việc con người đảm nhận trong quá trình ra quyết định.',
          '🧠 Ghi nhớ: "Con người trong vòng lặp" - AI chỉ hỗ trợ, con người luôn quyết định cuối cùng và chịu trách nhiệm.',
          '➡️ Buổi tiếp theo (Tiết 3-4): Trách nhiệm giải trình & pháp luật khi dùng AI - 6 nguyên tắc đạo đức khi thiết kế AI.'
        ],
        visualUrl: svgVisual('Hoàn Thành Buổi 1', 'Sẵn sàng cho Buổi 2: Trách nhiệm giải trình và đạo đức AI', '#065f46', '#0d9488', '🏁'),
        speakerNotes: 'Chốt lại kiến thức trọng tâm của buổi học (vòng đời AI, quá trình ra quyết định có AI hỗ trợ), kết nối với chủ đề buổi tiếp theo để tạo mạch logic cho học sinh.'
      }
    ]
  }
];
