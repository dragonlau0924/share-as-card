import React from 'react';

interface CardTagsProps {
  tags: string[];
}

export const CardTags: React.FC<CardTagsProps> = ({ tags }) => {
  return (
    <div className="flex flex-wrap gap-3">
      {tags.map((tag, index) => (
        <span
          key={index}
          className="px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-medium"
        >
          {tag}
        </span>
      ))}
    </div>
  );
};