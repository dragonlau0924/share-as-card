import React from 'react';

interface CardTagsProps {
  tags: string[];
}

export const CardTags: React.FC<CardTagsProps> = ({ tags }) => {
  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {tags.map((tag, index) => (
        <span
          key={index}
          className="px-6 py-2 rounded-full bg-blue-50 text-blue-600 text-lg font-medium"
        >
          {tag}
        </span>
      ))}
    </div>
  );
};