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
  // Tia sáng toả ra sau icon - tạo cảm giác năng lượng, chuyển động.
  const rayCount = 16;
  const rays = Array.from({ length: rayCount }, (_, i) => {
    const angle = (360 / rayCount) * i;
    return `<rect x="396" y="60" width="8" height="60" rx="4" fill="#ffffff" opacity="0.16" transform="rotate(${angle} 400 170)"/>`;
  }).join('');

  // Vài hạt lấp lánh rải rác quanh khung hình - tăng cảm giác sôi động.
  const sparkles = [
    [90, 200, 10], [730, 120, 8], [660, 340, 12], [70, 400, 9],
    [400, 40, 7], [520, 90, 6], [200, 440, 8]
  ]
    .map(([sx, sy, sr]) => `<circle cx="${sx}" cy="${sy}" r="${sr}" fill="#ffffff" opacity="0.35"/>`)
    .join('');

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500">
    <defs>
      <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${colorFrom}"/>
        <stop offset="45%" stop-color="${colorTo}"/>
        <stop offset="100%" stop-color="${colorFrom}"/>
      </linearGradient>
      <radialGradient id="glow" cx="50%" cy="34%" r="45%">
        <stop offset="0%" stop-color="#ffffff" stop-opacity="0.45"/>
        <stop offset="100%" stop-color="#ffffff" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="800" height="500" fill="url(#g)"/>
    <circle cx="120" cy="90" r="70" fill="#ffffff" opacity="0.10"/>
    <circle cx="700" cy="430" r="100" fill="#ffffff" opacity="0.10"/>
    <polygon points="0,500 220,500 0,340" fill="#ffffff" opacity="0.06"/>
    <polygon points="800,0 800,180 600,0" fill="#ffffff" opacity="0.06"/>
    ${sparkles}
    <g>${rays}</g>
    <circle cx="400" cy="170" r="86" fill="url(#glow)"/>
    <circle cx="400" cy="170" r="72" fill="#ffffff" opacity="0.14"/>
    <circle cx="400" cy="170" r="72" fill="none" stroke="#ffffff" stroke-width="3" opacity="0.55"/>
    <text x="400" y="192" font-size="76" text-anchor="middle">${icon}</text>
    <text x="400" y="${subLines.length ? 260 : 280}" font-family="Segoe UI, Arial, sans-serif" font-weight="800" font-size="34" fill="#ffffff" text-anchor="middle">${titleTspans}</text>
    <text x="400" y="${(subLines.length ? 260 : 280) + (titleLines.length > 1 ? 70 : 50)}" font-family="Segoe UI, Arial, sans-serif" font-weight="500" font-size="22" fill="#ffffffcc" text-anchor="middle">${subTspans}</text>
  </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

function escapeXml(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
