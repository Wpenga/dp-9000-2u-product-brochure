import React, { useRef } from 'react';
import { Printer, FileText, Loader, Download } from 'lucide-react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import PDFDocument from './pdf/PDFDocument';
import FirstPage from './components/FirstPage';
import SecondPage from './components/SecondPage';
import ThirdPage from './components/ThirdPage';
import html2pdf from 'html2pdf.js';

const CustomPDFButton = () => (
  <button
    className="flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white px-6 py-4 rounded-full shadow-xl transition-all hover:scale-105 font-bold"
  >
    <FileText size={20} />
    Save PDF (React PDF)
  </button>
);

const LoadingPDFButton = () => (
  <button
    disabled
    className="flex items-center gap-2 bg-green-600/70 text-white px-6 py-4 rounded-full shadow-xl font-bold"
  >
    <Loader size={20} className="animate-spin" />
    Generating PDF...
  </button>
);

const generatePDFWithHtml2Pdf = () => {
  // 获取要导出的内容
  const element = document.getElementById('pdf-content');
  if (!element) return;

  // 配置选项
  const opt = {
    margin: 10,
    filename: 'product-brochure.pdf',
    image: { type: 'jpeg' as const, quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' as const }
  };

  // 生成PDF
  html2pdf().set(opt).from(element).save();
};

const App: React.FC = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-800 print:bg-white flex flex-col items-center py-8 print:py-0">
      
      {/* Print Control - Hidden when printing */}
      <div className="fixed bottom-8 right-8 z-50 no-print flex flex-col gap-4">
        <button
          onClick={handlePrint}
          className="flex items-center gap-2 bg-brand-600 hover:bg-brand-500 text-white px-6 py-4 rounded-full shadow-xl transition-all hover:scale-105 font-bold"
        >
          <Printer size={20} />
          Print
        </button>
        <PDFDownloadLink 
          document={<PDFDocument />} 
          fileName="product-brochure.pdf"
          className=""
        >
          {({ loading }) => loading ? <LoadingPDFButton /> : <CustomPDFButton />}
        </PDFDownloadLink>
        <button
          onClick={generatePDFWithHtml2Pdf}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-4 rounded-full shadow-xl transition-all hover:scale-105 font-bold"
        >
          <Download size={20} />
          Save PDF (HTML2PDF)
        </button>
      </div>

      <div className="text-slate-300 mb-6 text-sm no-print text-center">
        <p>A4尺寸 预览</p>
        <p className="opacity-50 text-xs mt-1">Use Print button for browser print, or Save PDF for direct download</p>
      </div>

      {/* Document Container */}
      <div id="pdf-content" className="flex flex-col gap-8 print:gap-0 w-full items-center">
        <FirstPage />
        <SecondPage />
        <ThirdPage />
      </div>
      
    </div>
  );
};

export default App;