import React from 'react';

interface TextInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  multiline?: boolean;
  rows?: number;
}

export const TextInput: React.FC<TextInputProps> = ({
  label,
  value,
  onChange,
  multiline = false,
  rows = 4,
}) => {
  const InputComponent = multiline ? 'textarea' : 'input';

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <InputComponent
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => 
          onChange(e.target.value)
        }
        className="w-full p-2 border rounded-md"
        {...(multiline ? { rows } : { type: 'text' })}
      />
    </div>
  );
};