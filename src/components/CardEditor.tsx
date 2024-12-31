import React, { useState, useCallback } from 'react';
import { Download } from 'lucide-react';
import { CardPreview } from './CardPreview';
import { ColorPicker } from './ColorPicker';
import { ImageUpload } from './ImageUpload';
import { downloadAsImage } from '../utils/downloadUtils';
import { FontSelect } from './FontSelect';

export const CardEditor = () => {
  const [title, setTitle] = useState('标题');
  const [titleFont, setTitleFont] = useState('Nunito Black');
  const [contentFont, setContentFont] = useState('LXGWWenKai');
  const [content, setContent] = useState('正文');
  const [avatar, setAvatar] = useState('');
  const [authorName, setAuthorName] = useState('Leo');
  const [nameColor, setNameColor] = useState('#4B5563');
  const [frameColor, setFrameColor] = useState('#E5E7EB');
  const [gradientStart, setGradientStart] = useState('#e0f2fe');
  const [gradientEnd, setGradientEnd] = useState('#bfdbfe');
  const [stars, setStars] = useState('6.4k');
  const [forks, setForks] = useState('398');
  const [views, setViews] = useState('6.4k');
  const [date, setDate] = useState('2025/01/01');
  const [tags, setTags] = useState(['学习', '思考', '创新', '构建', '营销']);
  const [newTag, setNewTag] = useState('');
  const [showStars, setShowStars] = useState(false);
  const [showForks, setShowForks] = useState(false);
  const [showViews, setShowViews] = useState(false);
  const [showDate, setShowDate] = useState(true);
  const [showTags, setShowTags] = useState(true);

  const handleAvatarChange = useCallback((file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setAvatar(reader.result as string);
    };
    reader.readAsDataURL(file);
  }, []);

  const handleAddTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && newTag.trim()) {
      setTags([...tags, newTag.trim()]);
      setNewTag('');
    }
  };

  const handleDownload = async () => {
    try {
      await downloadAsImage('card-preview', 'card.png');
    } catch (error) {
      alert(error instanceof Error ? error.message : '下载失败，请重试');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Editor Panel */}
        <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
          <h2 className="text-2xl font-bold mb-6">卡片编辑器</h2>
          
          {/* Image Upload */}
          <ImageUpload onImageChange={handleAvatarChange} />

          {/* Font Selection */}
          <div className="grid grid-cols-1 gap-4">
            <FontSelect
              label="标题字体"
              value={titleFont}
              onChange={setTitleFont}
            />
            <FontSelect
              label="正文字体"
              value={contentFont}
              onChange={setContentFont}
            />
          </div>

          {/* Author Info */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              作者名称
            </label>
            <input
              type="text"
              value={authorName}
              onChange={(e) => setAuthorName(e.target.value)}
              className="w-full p-2 border rounded-md"
            />
          </div>

          {/* Title and Content */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              标题
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 border rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              内容
            </label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={4}
              className="w-full p-2 border rounded-md"
            />
          </div>

          {/* Color Pickers */}
          <ColorPicker
            label="作者名称颜色"
            color={nameColor}
            onChange={setNameColor}
          />
          <ColorPicker
            label="边框颜色"
            color={frameColor}
            onChange={setFrameColor}
          />
          <ColorPicker
            label="渐变起始色"
            color={gradientStart}
            onChange={setGradientStart}
          />
          <ColorPicker
            label="渐变结束色"
            color={gradientEnd}
            onChange={setGradientEnd}
          />

          {/* Stats */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-gray-700">统计信息显示控制</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={showStars}
                  onChange={(e) => setShowStars(e.target.checked)}
                  className="rounded text-blue-600"
                />
                <span className="text-sm text-gray-700">显示星标数</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={showForks}
                  onChange={(e) => setShowForks(e.target.checked)}
                  className="rounded text-blue-600"
                />
                <span className="text-sm text-gray-700">显示分叉数</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={showViews}
                  onChange={(e) => setShowViews(e.target.checked)}
                  className="rounded text-blue-600"
                />
                <span className="text-sm text-gray-700">显示查看数</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={showDate}
                  onChange={(e) => setShowDate(e.target.checked)}
                  className="rounded text-blue-600"
                />
                <span className="text-sm text-gray-700">显示日期</span>
              </label>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {showStars && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  星标数
                </label>
                <input
                  type="text"
                  value={stars}
                  onChange={(e) => setStars(e.target.value)}
                  className="w-full p-2 border rounded-md"
                />
              </div>
            )}

            {showForks && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  分叉数
                </label>
                <input
                  type="text"
                  value={forks}
                  onChange={(e) => setForks(e.target.value)}
                  className="w-full p-2 border rounded-md"
                />
              </div>
            )}

            {showViews && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  查看数
                </label>
                <input
                  type="text"
                  value={views}
                  onChange={(e) => setViews(e.target.value)}
                  className="w-full p-2 border rounded-md"
                />
              </div>
            )}

            {showDate && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  日期
                </label>
                <input
                  type="text"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full p-2 border rounded-md"
                />
              </div>
            )}
          </div>

          {/* Tags Control */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-gray-700">标签显示控制</h3>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={showTags}
                  onChange={(e) => setShowTags(e.target.checked)}
                  className="rounded text-blue-600"
                />
                <span className="text-sm text-gray-700">显示标签</span>
              </label>
            </div>
            {showTags && (
              <div>
                <input
                  type="text"
                  value={newTag}
                  onChange={(e) => setNewTag(e.target.value)}
                  onKeyPress={handleAddTag}
                  placeholder="输入标签后按回车添加"
                  className="w-full p-2 border rounded-md mb-2"
                />
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-sm flex items-center"
                    >
                      {tag}
                      <button
                        onClick={() => setTags(tags.filter((_, i) => i !== index))}
                        className="ml-2 text-blue-400 hover:text-blue-600"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Download Button */}
          <button
            onClick={handleDownload}
            className="w-full bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 flex items-center justify-center"
          >
            <Download className="w-4 h-4 mr-2" />
            下载卡片
          </button>
        </div>

        {/* Preview Panel */}
        <div className="bg-white p-6 rounded-lg shadow-md sticky top-8">
          <h2 className="text-2xl font-bold mb-6">预览</h2>
          <div className="overflow-hidden">
            <div id="card-preview" className="transform scale-[0.4] origin-top-left">
              <CardPreview
                avatar={avatar}
                title={title}
                content={content}
                authorName={authorName}
                nameColor={nameColor}
                frameColor={frameColor}
                gradientStart={gradientStart}
                gradientEnd={gradientEnd}
                stars={stars}
                forks={forks}
                views={views}
                date={date}
                tags={tags}
                titleFont={titleFont}
                contentFont={contentFont}
                showStars={showStars}
                showForks={showForks}
                showViews={showViews}
                showDate={showDate}
                showTags={showTags}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};