import React from 'react';
import { Star, GitFork, Eye, Calendar } from 'lucide-react';

interface CardStatsProps {
  stars: string;
  forks: string;
  views: string;
  date: string;
}

export const CardStats: React.FC<CardStatsProps> = ({
  stars,
  forks,
  views,
  date
}) => {
  return (
    <div className="flex items-center space-x-8">
      <div className="flex items-center space-x-2">
        <Star className="w-5 h-5 text-yellow-400" />
        <span className="text-gray-600">{stars}</span>
      </div>
      <div className="flex items-center space-x-2">
        <GitFork className="w-5 h-5 text-blue-400" />
        <span className="text-gray-600">{forks}</span>
      </div>
      <div className="flex items-center space-x-2">
        <Eye className="w-5 h-5 text-gray-400" />
        <span className="text-gray-600">{views}</span>
      </div>
      <div className="flex items-center space-x-2">
        <Calendar className="w-5 h-5 text-red-400" />
        <span className="text-gray-600">{date}</span>
      </div>
    </div>
  );
};