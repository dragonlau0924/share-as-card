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
  showStars?: boolean;
  showForks?: boolean;
  showViews?: boolean;
  showDate?: boolean;
  showTags?: boolean;
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
  contentFont,
  showStars = true,
  showForks = true,
  showViews = true,
  showDate = true,
  showTags = true,
}) => {
  return (
    <div
      className="w-[1080px] h-[1439px] relative p-12"
      style={{
        background: `linear-gradient(to bottom right, ${gradientStart}, ${gradientEnd})`
      }}
    >
      <div 
        className="w-full h-full rounded-[32px] bg-white/95 shadow-lg p-12 flex flex-col"
        style={{ borderColor: frameColor, borderWidth: '1px' }}
      >
        {/* Header with avatar and author */}
        <div className="flex items-center space-x-4 mb-10">
          <img
            src={avatar || '/default-avatar.png'}
            alt="Avatar"
            className="w-12 h-12 rounded-full object-cover bg-gray-100"
            onError={(e) => {
              const img = e.target as HTMLImageElement;
              img.src = '/default-avatar.png';
            }}
          />
          <span style={{ color: nameColor }} className="text-2xl font-medium">
            {authorName}
          </span>
        </div>

        {/* Main Content Area */}
        <div className="flex-grow overflow-auto mb-8">
          {/* Title */}
          <h2 
            className="text-5xl font-bold mb-8 text-gray-900"
            style={{ fontFamily: titleFont || 'inherit' }}
          >
            {title}
          </h2>

          {/* Content */}
          <p 
            className="text-2xl leading-relaxed text-gray-600 whitespace-pre-wrap"
            style={{ fontFamily: contentFont || 'inherit' }}
          >
            {content}
          </p>
        </div>

        {/* Footer Area - Fixed at bottom */}
        <div className="mt-auto">
          {/* Divider */}
          <div className="w-full h-[1px] bg-gray-200 mb-8"></div>

          {/* Stats */}
          {(showStars || showForks || showViews || showDate) && (
            <div className="mb-8">
              <CardStats
                stars={stars}
                forks={forks}
                views={views}
                date={date}
                showStars={showStars}
                showForks={showForks}
                showViews={showViews}
                showDate={showDate}
              />
            </div>
          )}

          {/* Tags */}
          {showTags && tags.length > 0 && (
            <>
              <div className="w-full h-[1px] bg-gray-200 mb-8"></div>
              <CardTags tags={tags} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};