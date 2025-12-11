import React from 'react';
import { Printer } from 'lucide-react';
import PageCover from './components/PageCover';
import PageSpecs from './components/PageSpecs';
import PageOptions from './components/PageOptions';

const App: React.FC = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-800 print:bg-white flex flex-col items-center py-8 print:py-0">
      
      {/* Print Control - Hidden when printing */}
      <div className="fixed bottom-8 right-8 z-50 no-print">
        <button
          onClick={handlePrint}
          className="flex items-center gap-2 bg-brand-600 hover:bg-brand-500 text-white px-6 py-4 rounded-full shadow-xl transition-all hover:scale-105 font-bold"
        >
          <Printer size={20} />
          Print / Save PDF
        </button>
      </div>

      <div className="text-slate-300 mb-6 text-sm no-print text-center">
        <p>A4 Preview Mode</p>
        <p className="opacity-50 text-xs mt-1">Use Browser Print &gt; Save to PDF (Margins: None)</p>
      </div>

      {/* Document Container */}
      <div className="flex flex-col gap-8 print:gap-0 w-full items-center">
        <PageCover />
        <PageSpecs />
        <PageOptions />
      </div>
      
    </div>
  );
};

export default App;