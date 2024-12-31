import React from 'react';
import { Upload } from 'lucide-react';

interface ImageUploadProps {
  onImageChange: (file: File) => void;
}

export const ImageUpload: React.FC<ImageUploadProps> = ({ onImageChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onImageChange(file);
    }
  };

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        头像上传
      </label>
      <label className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 inline-flex items-center">
        <Upload className="w-4 h-4 mr-2" />
        选择图片
        <input
          type="file"
          className="hidden"
          accept="image/*"
          onChange={handleChange}
        />
      </label>
    </div>
  );
};