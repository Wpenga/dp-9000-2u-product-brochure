import React from 'react';

interface A4PageProps {
  children: React.ReactNode;
  className?: string;
  pageNumber?: number;
}

const A4Page: React.FC<A4PageProps> = ({ children, className = "", pageNumber }) => {
  return (
    <div className={`a4-page relative flex flex-col print-break-after overflow-hidden ${className}`}>
      {/* Header/Watermark lines for style */}
      <div className="absolute top-0 left-0 w-full h-2 bg-brand-900 print:bg-brand-900"></div>
      
      <div className="flex-1 p-12 flex flex-col relative z-10">
        {children}
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 w-full p-8 flex justify-between items-end text-xs text-slate-400 border-t border-slate-100">
        <div className="flex flex-col gap-1">
          {/* <span className="font-bold text-slate-600 uppercase tracking-wider">EVAK Technology</span>
          <span>Professional Command Solutions</span>
          <span>www.evak.cn</span> */}
        </div>
        {pageNumber && (
          <div className="font-mono text-slate-300 text-lg">
             {String(pageNumber).padStart(2, '0')}
          </div>
        )}
      </div>
    </div>
  );
};

export default A4Page;