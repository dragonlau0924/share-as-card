import React from 'react';

interface TagInputProps {
  tags: string[];
  newTag: string;
  onNewTagChange: (value: string) => void;
  onAddTag: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onRemoveTag: (index: number) => void;
}

export const TagInput: React.FC<TagInputProps> = ({
  tags,
  newTag,
  onNewTagChange,
  onAddTag,
  onRemoveTag,
}) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        标签
      </label>
      <input
        type="text"
        value={newTag}
        onChange={(e) => onNewTagChange(e.target.value)}
        onKeyPress={onAddTag}
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
              onClick={() => onRemoveTag(index)}
              className="ml-2 text-blue-400 hover:text-blue-600"
            >
              ×
            </button>
          </span>
        ))}
      </div>
    </div>
  );
};