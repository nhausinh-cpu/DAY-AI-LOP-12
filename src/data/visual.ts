// Tạo ảnh minh hoạ dạng SVG nhúng trực tiếp (data URI) - không phụ thuộc mạng Internet,
// đảm bảo slide luôn hiển thị ổn định khi trình chiếu trên lớp.
export function svgVisual(title: string, subtitle: string, colorFrom: string, colorTo: string, icon = '🤖'): string {
  const wrap = (text: string, max: number): string[] => {
    const words = text.split(' ');
    const lines: string[] = [];
    let cur = '';
    for (const w of words) {
      if ((cur + ' ' + w).trim().length > max) {
        lines.push(cur.trim());
        cur = w;
      } else {
        cur = (cur + ' ' + w).trim();
      }
    }
    if (cur) lines.push(cur.trim());
    return lines.slice(0, 3);
  };
  const titleLines = wrap(title, 26);
  const subLines = wrap(subtitle, 34);
  const titleTspans = titleLines
    .map((l, i) => `<tspan x="400" dy="${i === 0 ? 0 : 46}">${escapeXml(l)}</tspan>`)
    .join('');
  const subTspans = subLines
    .map((l, i) => `<tspan x="400" dy="${i === 0 ? 0 : 30}">${escapeXml(l)}</tspan>`)
    .join('');
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500">
    <defs>
      <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${colorFrom}"/>
        <stop offset="100%" stop-color="${colorTo}"/>
      </linearGradient>
    </defs>
    <rect width="800" height="500" fill="url(#g)"/>
    <circle cx="120" cy="90" r="70" fill="#ffffff" opacity="0.08"/>
    <circle cx="700" cy="430" r="100" fill="#ffffff" opacity="0.08"/>
    <text x="400" y="190" font-size="72" text-anchor="middle">${icon}</text>
    <text x="400" y="${subLines.length ? 250 : 270}" font-family="Segoe UI, Arial, sans-serif" font-weight="800" font-size="34" fill="#ffffff" text-anchor="middle">${titleTspans}</text>
    <text x="400" y="${(subLines.length ? 250 : 270) + (titleLines.length > 1 ? 70 : 50)}" font-family="Segoe UI, Arial, sans-serif" font-weight="500" font-size="22" fill="#ffffffcc" text-anchor="middle">${subTspans}</text>
  </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

function escapeXml(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
