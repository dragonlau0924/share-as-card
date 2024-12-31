import React from 'react';
import { CardEditor } from './components/CardEditor';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-4 px-4">
          <h1 className="text-2xl font-bold text-gray-900">Leo的卡片生成器</h1>
        </div>
      </header>
      <main>
        <CardEditor />
      </main>
    </div>
  );
}

export default App;