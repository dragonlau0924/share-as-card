import React from 'react';
import { CardStats } from './CardStats';
import { CardTags } from './CardTags';

interface CardPreviewProps {
  avatar: string;
  title: string;
  content: string;
  authorName: string;
  nameColor: string;
  frameColor: string;
  gradientStart: string;
  gradientEnd: string;
  stars: string;
  forks: string;
  views: string;
  date: string;
  tags: string[];
  titleFont: string;
  contentFont: string;
}

export const CardPreview: React.FC<CardPreviewProps> = ({
  avatar,
  title,
  content,
  authorName,
  nameColor,
  frameColor,
  gradientStart,
  gradientEnd,
  stars,
  forks,
  views,
  date,
  tags,
  titleFont,
  contentFont
}) => {
  return (
    <div
      className="w-[1080px] h-[1439px] relative p-12"
      style={{
        background: `linear-gradient(to bottom right, ${gradientStart}, ${gradientEnd})`
      }}
    >
      {/* Content container with white background */}
      <div 
        className="w-full h-full rounded-[32px] bg-white/95 shadow-lg p-12"
        style={{ borderColor: frameColor, borderWidth: '1px' }}
      >
        {/* Header with avatar and author */}
        <div className="flex items-center space-x-3 mb-8">
          <img
            src={avatar || '/default-avatar.png'}
            alt="Avatar"
            className="w-8 h-8 rounded-full object-cover bg-gray-100"
            onError={(e) => {
              const img = e.target as HTMLImageElement;
              img.src = '/default-avatar.png';
            }}
          />
          <span style={{ color: nameColor }} className="text-lg font-medium">
            {authorName}
          </span>
        </div>

        {/* Title */}
        <h2 
          className="text-4xl font-bold mb-6 text-gray-900"
          style={{ fontFamily: titleFont || 'inherit' }}
        >
          {title}
        </h2>

        {/* Content */}
        <p 
          className="text-xl leading-relaxed mb-auto text-gray-600 whitespace-pre-wrap"
          style={{ fontFamily: contentFont || 'inherit' }}
        >
          {content}
        </p>

        {/* Divider */}
        <div className="w-full h-[1px] bg-gray-200 my-8"></div>

        {/* Stats */}
        <CardStats
          stars={stars}
          forks={forks}
          views={views}
          date={date}
        />

        {/* Divider */}
        <div className="w-full h-[1px] bg-gray-200 my-8"></div>

        {/* Tags */}
        <CardTags tags={tags} />
      </div>
    </div>
  );
};