import React from 'react';
import { Star, GitFork, Eye, Calendar } from 'lucide-react';

interface CardStatsProps {
  stars: string;
  forks: string;
  views: string;
  date: string;
  showStars?: boolean;
  showForks?: boolean;
  showViews?: boolean;
  showDate?: boolean;
}

export const CardStats: React.FC<CardStatsProps> = ({
  stars,
  forks,
  views,
  date,
  showStars = true,
  showForks = true,
  showViews = true,
  showDate = true,
}) => {
  const visibleStats = [
    showStars && (
      <div key="stars" className="flex items-center space-x-2">
        <Star className="w-6 h-6 text-yellow-400" />
        <span className="text-xl text-gray-600">{stars}</span>
      </div>
    ),
    showForks && (
      <div key="forks" className="flex items-center space-x-2">
        <GitFork className="w-6 h-6 text-blue-400" />
        <span className="text-xl text-gray-600">{forks}</span>
      </div>
    ),
    showViews && (
      <div key="views" className="flex items-center space-x-2">
        <Eye className="w-6 h-6 text-gray-400" />
        <span className="text-xl text-gray-600">{views}</span>
      </div>
    ),
    showDate && (
      <div key="date" className="flex items-center space-x-2">
        <Calendar className="w-6 h-6 text-red-400" />
        <span className="text-xl text-gray-600">{date}</span>
      </div>
    ),
  ].filter(Boolean);

  return (
    <div className="flex items-center justify-center space-x-12">
      {visibleStats}
    </div>
  );
};