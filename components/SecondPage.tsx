import React from 'react';
import { Cpu, Monitor, Wifi, Cable, Box, Keyboard, LucideIcon } from 'lucide-react';
import { PRODUCT_DATA } from '../constants';
import A4Page from './A4Page';

const IconMap: Record<string, LucideIcon> = {
  Cpu, Monitor, Wifi, Cable, Box, Keyboard
};

const SecondPage: React.FC = () => {
  return (
    <A4Page pageNumber={2}>
      <div className="flex flex-col h-full">
        <div className="mb-8 border-b border-slate-200 pb-4">
          <h2 className="text-3xl font-bold text-slate-800">技术规格</h2>
          <p className="text-slate-500 mt-1">Technical Specifications</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {PRODUCT_DATA.specs.map((category, idx) => {
            const Icon = IconMap[category.icon] || Box;
            return (
              <div key={idx} className="break-inside-avoid">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-brand-50 rounded-lg text-brand-700">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-bold text-slate-800 text-lg">{category.title}</h3>
                </div>
                
                <div className="space-y-3">
                  {category.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex flex-col border-l-2 border-slate-100 pl-3">
                      <span className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-0.5">
                        {item.label}
                      </span>
                      {Array.isArray(item.value) ? (
                        <div className="flex flex-col gap-1">
                          {item.value.map((v, vIdx) => (
                            <span key={vIdx} className="text-sm text-slate-700 font-medium">
                              • {v}
                            </span>
                          ))}
                        </div>
                      ) : (
                        <span className="text-sm text-slate-700 font-medium leading-tight">
                          {item.value}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Small Highlight Section at bottom */}
        {/* <div className="mt-auto pt-8">
           <div className="bg-slate-900 text-white rounded-lg p-6 flex justify-between items-center">
              <div>
                <h4 className="font-bold text-lg">环境适应性认证</h4>
                <p className="text-slate-400 text-sm mt-1">
                   专为严苛环境设计，通过多项工业级测试。
                </p>
              </div>
              <div className="flex gap-4 text-center">
                 <div>
                    <div className="text-2xl font-bold text-brand-400">50°C</div>
                    <div className="text-[10px] uppercase text-slate-500">Max Temp</div>
                 </div>
                 <div className="w-px bg-slate-700"></div>
                 <div>
                    <div className="text-2xl font-bold text-brand-400">90%</div>
                    <div className="text-[10px] uppercase text-slate-500">Humidity</div>
                 </div>
              </div>
           </div>
        </div> */}


      </div>
    </A4Page>
  );
};

export default SecondPage;