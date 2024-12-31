import React from 'react';

interface StatsInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

export const StatsInput: React.FC<StatsInputProps> = ({ label, value, onChange }) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full p-2 border rounded-md"
      />
    </div>
  );
};