import React, { useEffect, useState } from 'react';

interface FontSelectProps {
  label: string;
  value: string;
  onChange: (font: string) => void;
}

export const FontSelect: React.FC<FontSelectProps> = ({ label, value, onChange }) => {
  const [fonts, setFonts] = useState<string[]>([]);

  useEffect(() => {
    // 获取系统可用字体
    if ('queryLocalFonts' in window) {
      (window as any).queryLocalFonts().then((fontData: any[]) => {
        const uniqueFonts = Array.from(new Set(fontData.map(font => font.family)));
        setFonts(uniqueFonts);
      }).catch(() => {
        // 如果API不可用或出错，提供一些默认字体
        setFonts([
          'Arial',
          'Times New Roman',
          'Helvetica',
          'Georgia',
          'Verdana',
          'Microsoft YaHei',
          'SimSun',
          'SimHei',
          'KaiTi',
        ]);
      });
    } else {
      // 浏览器不支持queryLocalFonts API时使用默认字体列表
      setFonts([
        'Arial',
        'Times New Roman',
        'Helvetica',
        'Georgia',
        'Verdana',
        'Microsoft YaHei',
        'SimSun',
        'SimHei',
        'KaiTi',
      ]);
    }
  }, []);

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full p-2 border rounded-md"
      >
        <option value="">默认字体</option>
        {fonts.map((font) => (
          <option key={font} value={font} style={{ fontFamily: font }}>
            {font}
          </option>
        ))}
      </select>
    </div>
  );
}; 