import React, { useState } from 'react';
import {
  Sparkles,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
  Loader2,
  FileSpreadsheet,
  X,
  Share2,
  Download,
  Copy,
  Check,
} from 'lucide-react';
import type { Slide } from '../types';
import { initAuth, googleSignIn, getAccessToken } from '../services/firebaseAuth';
import { createGoogleSlideDeck, type ExportProgress } from '../services/googleSlidesService';

interface GoogleSlidesExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  slides: Slide[];
}

export const GoogleSlidesExportModal: React.FC<GoogleSlidesExportModalProps> = ({
  isOpen,
  onClose,
  slides,
}) => {
  const [status, setStatus] = useState<'idle' | 'authenticating' | 'exporting' | 'success' | 'error'>('idle');
  const [progressMsg, setProgressMsg] = useState<string>('');
  const [currentProgress, setCurrentProgress] = useState<number>(0);
  const [presentationUrl, setPresentationUrl] = useState<string>('');
  const [presentationId, setPresentationId] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleStartExport = async () => {
    try {
      setStatus('authenticating');
      setProgressMsg('Đang kiểm tra xác thực Google Workspace...');
      setCurrentProgress(5);

      // Initialize Auth
      initAuth();
      let token = await getAccessToken();

      if (!token) {
        setProgressMsg('Đang mở hộp thoại cấp quyền Google Slides & Drive...');
        const authRes = await googleSignIn();
        token = authRes?.accessToken || null;
      }

      if (!token) {
        throw new Error('Không thể lấy mã truy cập Google Workspace. Vui lòng thử lại!');
      }

      setStatus('exporting');
      setProgressMsg('Đang tạo tệp trình chiếu mới trên Google Slides...');
      setCurrentProgress(15);

      const title = 'Chuyên Đề Ứng Dụng AI Dành Cho Học Sinh THPT (12 Tiết · 110 Slide)';
      
      const res = await createGoogleSlideDeck(
        token,
        title,
        slides,
        (progress: ExportProgress) => {
          if (progress.status === 'creating') {
            setProgressMsg('Đang khởi tạo tệp bài giảng trên Google Slides...');
            setCurrentProgress(20);
          } else if (progress.status === 'populating') {
            const pct = Math.min(
              95,
              Math.round(20 + (progress.currentSlideIndex / progress.totalSlides) * 75)
            );
            setCurrentProgress(pct);
            setProgressMsg(
              `Đang thêm slide ${progress.currentSlideIndex} / ${progress.totalSlides}...`
            );
          } else if (progress.status === 'done') {
            setCurrentProgress(100);
            setProgressMsg('Đã hoàn tất toàn bộ 110 slide!');
          }
        }
      );

      setCurrentProgress(100);
      setStatus('success');
      setPresentationId(res.presentationId);
      setPresentationUrl(res.presentationUrl);
      setProgressMsg('Đã tạo thành công bài trình chiếu 110 slide trên Google Slides!');
    } catch (err: any) {
      console.error('Export error:', err);
      setStatus('error');
      setErrorMessage(err.message || 'Đã có lỗi xảy ra trong quá trình xuất bài trình chiếu.');
    }
  };

  const handleCopyLink = () => {
    if (presentationUrl) {
      navigator.clipboard.writeText(presentationUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleDownloadJSON = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(slides, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', 'chuyen-de-ai-thpt-110-slides.json');
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
      <div className="relative w-full max-w-lg rounded-2xl bg-slate-900 border border-slate-700 shadow-2xl p-6 text-slate-100 animate-in fade-in zoom-in duration-200">
        {/* Close button */}
        <button
          onClick={onClose}
          disabled={status === 'exporting'}
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 disabled:opacity-50"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Title */}
        <div className="flex items-center gap-2.5 mb-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">
              Kích Hoạt & Xuất Sang Google Slides
            </h3>
            <p className="text-xs text-slate-400">
              Đồng bộ toàn bộ 110 slide bài giảng vào Google Drive cá nhân của bạn
            </p>
          </div>
        </div>

        {/* Content Body based on Status */}
        {status === 'idle' && (
          <div className="space-y-4 my-4">
            <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 text-xs sm:text-sm text-slate-300 space-y-2">
              <div className="flex items-center gap-2 text-indigo-300 font-semibold">
                <FileSpreadsheet className="w-4 h-4" />
                Thông số bài trình chiếu sẽ tạo:
              </div>
              <ul className="space-y-1 pl-4 list-disc text-slate-300 text-xs">
                <li><strong>Số lượng:</strong> 110 Slide chuẩn 16:9 full HD</li>
                <li><strong>Số tiết học:</strong> 12 Tiết (45 phút / tiết)</li>
                <li><strong>Cấu trúc:</strong> Đủ 4 mạch A + B + C + D (QĐ 2422/QĐ-BGDĐT)</li>
                <li><strong>Nội dung:</strong> Đầy đủ lời thoại giáo viên (Speaker notes), bảng kiểm, tiêu chí đánh giá</li>
                <li><strong>Cơ chế:</strong> Tự động phân lô 15 slide/lần để tránh giới hạn API</li>
              </ul>
            </div>

            <div className="flex flex-col gap-2 pt-2">
              <button
                onClick={handleStartExport}
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 transition-all cursor-pointer"
              >
                <Sparkles className="w-4 h-4 fill-current" />
                BẮT ĐẦU KÍCH HOẠT XUẤT 110 SLIDE
              </button>

              <button
                onClick={handleDownloadJSON}
                className="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold flex items-center justify-center gap-2 border border-slate-700 transition-all cursor-pointer"
              >
                <Download className="w-4 h-4" />
                Tải về dữ liệu giáo án (JSON Offline)
              </button>
            </div>
          </div>
        )}

        {(status === 'authenticating' || status === 'exporting') && (
          <div className="my-6 space-y-4 text-center">
            <div className="w-16 h-16 mx-auto rounded-full bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center">
              <Loader2 className="w-8 h-8 text-indigo-400 animate-spin" />
            </div>

            <div>
              <div className="text-sm font-semibold text-white mb-1">
                {status === 'authenticating' ? 'Đang kết nối tài khoản Google...' : 'Đang khởi tạo 110 slide...'}
              </div>
              <p className="text-xs text-slate-400 max-w-sm mx-auto">
                {progressMsg}
              </p>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-slate-800 rounded-full h-2.5 overflow-hidden border border-slate-700">
              <div
                className="bg-gradient-to-r from-indigo-500 to-emerald-400 h-2.5 rounded-full transition-all duration-300"
                style={{ width: `${currentProgress}%` }}
              />
            </div>
            <span className="text-xs font-mono text-indigo-300 font-semibold">
              {currentProgress}% Hoàn tất
            </span>
          </div>
        )}

        {status === 'success' && (
          <div className="my-4 space-y-4">
            <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-center">
              <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto mb-2" />
              <h4 className="text-base font-bold text-white mb-1">
                Kích Hoạt Thành Công!
              </h4>
              <p className="text-xs text-emerald-300">
                Toàn bộ 110 slide chuyên đề AI đã được tạo sẵn sàng trên Google Slides của bạn.
              </p>
            </div>

            <div className="space-y-2">
              <a
                href={presentationUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 transition-all text-center"
              >
                <span>MỞ TRÊN GOOGLE SLIDES</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <div className="flex gap-2">
                <button
                  onClick={handleCopyLink}
                  className="flex-1 py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium flex items-center justify-center gap-1.5 border border-slate-700"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span>Đã sao chép link!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Sao chép đường link</span>
                    </>
                  )}
                </button>

                <button
                  onClick={handleDownloadJSON}
                  className="py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium flex items-center justify-center gap-1.5 border border-slate-700"
                  title="Lưu file JSON dự phòng"
                >
                  <Download className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}

        {status === 'error' && (
          <div className="my-4 space-y-4">
            <div className="p-4 rounded-xl bg-rose-950/40 border border-rose-500/40 text-center">
              <AlertCircle className="w-10 h-10 text-rose-400 mx-auto mb-2" />
              <h4 className="text-base font-bold text-white mb-1">
                Chưa Thể Xuất Slide
              </h4>
              <p className="text-xs text-rose-200 leading-relaxed">
                {errorMessage}
              </p>
            </div>

            <div className="flex gap-2">
              <button
                onClick={handleStartExport}
                className="flex-1 py-2.5 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition-all"
              >
                Thử Lại Ngay
              </button>
              <button
                onClick={handleDownloadJSON}
                className="py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium border border-slate-700"
              >
                Tải JSON Offline
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
