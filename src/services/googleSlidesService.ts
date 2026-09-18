import type { Slide } from '../types';

export interface ExportProgress {
  status: 'idle' | 'creating' | 'populating' | 'done' | 'error';
  currentSlideIndex: number;
  totalSlides: number;
  presentationId?: string;
  presentationUrl?: string;
  errorMessage?: string;
}

export async function createGoogleSlideDeck(
  accessToken: string,
  title: string,
  slides: Slide[],
  onProgress?: (progress: ExportProgress) => void
): Promise<{ presentationId: string; presentationUrl: string }> {
  try {
    onProgress?.({
      status: 'creating',
      currentSlideIndex: 0,
      totalSlides: slides.length,
    });

    // 1. Create a presentation
    const createRes = await fetch('https://slides.googleapis.com/v1/presentations', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: title || 'Chuyên Đề Trí Tuệ Nhân Tạo THPT - 12 Tiết',
      }),
    });

    if (!createRes.ok) {
      const errJson = await createRes.json();
      throw new Error(errJson.error?.message || 'Không thể tạo bản trình chiếu Google Slides.');
    }

    const createdPresentation = await createRes.json();
    const presentationId = createdPresentation.presentationId;
    const presentationUrl = `https://docs.google.com/presentation/d/${presentationId}/edit`;

    onProgress?.({
      status: 'populating',
      currentSlideIndex: 0,
      totalSlides: slides.length,
      presentationId,
      presentationUrl,
    });

    // 2. Batch update requests in chunks of 20 to avoid exceeding payload limits
    const CHUNK_SIZE = 15;
    for (let i = 0; i < slides.length; i += CHUNK_SIZE) {
      const chunk = slides.slice(i, i + CHUNK_SIZE);
      const requests: any[] = [];

      chunk.forEach((slide) => {
        const slideObjectId = `slide_${slide.id}_${Date.now()}`;
        const titleBoxId = `title_${slide.id}_${Date.now()}`;
        const bodyBoxId = `body_${slide.id}_${Date.now()}`;

        // Create slide
        requests.push({
          createSlide: {
            objectId: slideObjectId,
            slideLayoutReference: {
              predefinedLayout: 'BLANK',
            },
          },
        });

        // Insert Title Box
        requests.push({
          createShape: {
            objectId: titleBoxId,
            shapeType: 'TEXT_BOX',
            elementProperties: {
              pageObjectId: slideObjectId,
              size: {
                height: { magnitude: 70, unit: 'PT' },
                width: { magnitude: 680, unit: 'PT' },
              },
              transform: {
                scaleX: 1,
                scaleY: 1,
                translateX: 30,
                translateY: 25,
                unit: 'PT',
              },
            },
          },
        });

        // Add Title text
        const titleText = `${slide.categoryLabel ? `[${slide.categoryLabel}] ` : ''}${slide.title}`;
        requests.push({
          insertText: {
            objectId: titleBoxId,
            text: titleText,
            insertionIndex: 0,
          },
        });

        // Insert Content Box
        requests.push({
          createShape: {
            objectId: bodyBoxId,
            shapeType: 'TEXT_BOX',
            elementProperties: {
              pageObjectId: slideObjectId,
              size: {
                height: { magnitude: 280, unit: 'PT' },
                width: { magnitude: 680, unit: 'PT' },
              },
              transform: {
                scaleX: 1,
                scaleY: 1,
                translateX: 30,
                translateY: 105,
                unit: 'PT',
              },
            },
          },
        });

        // Build body text
        const bodyLines: string[] = [];
        if (slide.subtitle) {
          bodyLines.push(`• ${slide.subtitle}`);
        }
        if (slide.topic) {
          bodyLines.push(`• Chủ đề: ${slide.topic}`);
        }
        if (slide.competencyStandard) {
          bodyLines.push(`• Chuẩn đầu ra: ${slide.competencyStandard}`);
        }

        slide.elements.forEach((el) => {
          if (el.type === 'cards' && Array.isArray(el.data)) {
            el.data.forEach((card: any) => {
              bodyLines.push(`• ${card.title}: ${card.desc || ''}`);
            });
          } else if (el.type === 'steps' && Array.isArray(el.data)) {
            el.data.forEach((step: any) => {
              bodyLines.push(`• Bước ${step.stepNumber}: ${step.name} - ${step.role || step.details}`);
            });
          } else if (el.type === 'table' && el.data?.rows) {
            el.data.rows.forEach((row: string[]) => {
              bodyLines.push(`• ${row.join(' | ')}`);
            });
          } else if (el.type === 'quote' && el.data) {
            bodyLines.push(`• ${el.data.text || el.data}`);
          }
        });

        if (bodyLines.length === 0) {
          bodyLines.push('• Nội dung thảo luận và thực hành chuyên đề trí tuệ nhân tạo');
        }

        requests.push({
          insertText: {
            objectId: bodyBoxId,
            text: bodyLines.join('\n'),
            insertionIndex: 0,
          },
        });
      });

      // Send batchUpdate
      const batchRes = await fetch(
        `https://slides.googleapis.com/v1/presentations/${presentationId}:batchUpdate`,
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ requests }),
        }
      );

      if (!batchRes.ok) {
        console.warn('Batch update issue:', await batchRes.text());
      }

      onProgress?.({
        status: 'populating',
        currentSlideIndex: Math.min(i + CHUNK_SIZE, slides.length),
        totalSlides: slides.length,
        presentationId,
        presentationUrl,
      });
    }

    onProgress?.({
      status: 'done',
      currentSlideIndex: slides.length,
      totalSlides: slides.length,
      presentationId,
      presentationUrl,
    });

    return { presentationId, presentationUrl };
  } catch (error: any) {
    onProgress?.({
      status: 'error',
      currentSlideIndex: 0,
      totalSlides: slides.length,
      errorMessage: error.message || 'Lỗi xuất dữ liệu lên Google Slides',
    });
    throw error;
  }
}
