import React, { useRef } from 'react';
import { Printer, FileText } from 'lucide-react';
import html2pdf from 'html2pdf.js';
import PageCover from './components/PageCover';
import PageSpecs from './components/PageSpecs';
import PageOptions from './components/PageOptions';

const App: React.FC = () => {
  const documentRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    window.print();
  };

  const handleSavePDF = () => {
    if (!documentRef.current) return;

    const opt = {
      margin: 0,
      filename: 'product-brochure.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff'
      },
      jsPDF: {
        unit: 'mm',
        format: 'a4',
        orientation: 'portrait'
      }
    };

    html2pdf().set(opt).from(documentRef.current).save();
  };

  return (
    <div className="min-h-screen bg-slate-800 print:bg-white flex flex-col items-center py-8 print:py-0">
      
      {/* Print Control - Hidden when printing */}
      <div className="fixed bottom-8 right-8 z-50 no-print flex gap-4">
        <button
          onClick={handlePrint}
          className="flex items-center gap-2 bg-brand-600 hover:bg-brand-500 text-white px-6 py-4 rounded-full shadow-xl transition-all hover:scale-105 font-bold"
        >
          <Printer size={20} />
          Print
        </button>
        <button
          onClick={handleSavePDF}
          className="flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white px-6 py-4 rounded-full shadow-xl transition-all hover:scale-105 font-bold"
        >
          <FileText size={20} />
          Save PDF
        </button>
      </div>

      <div className="text-slate-300 mb-6 text-sm no-print text-center">
        <p>A4 Preview Mode</p>
        <p className="opacity-50 text-xs mt-1">Use Print button for browser print, or Save PDF for direct download</p>
      </div>

      {/* Document Container - For html2pdf capture */}
      <div ref={documentRef} className="flex flex-col gap-8 print:gap-0 w-full items-center">
        <PageCover />
        <PageSpecs />
        <PageOptions />
      </div>
      
    </div>
  );
};

export default App;