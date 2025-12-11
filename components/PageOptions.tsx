import React from 'react';
import { Settings, PlusCircle } from 'lucide-react';
import { PRODUCT_DATA } from '../constants';
import A4Page from './A4Page';

const PageOptions: React.FC = () => {
  return (
    <A4Page pageNumber={3}>
      <div className="flex flex-col h-full">
        <div className="mb-8 border-b border-slate-200 pb-4 flex justify-between items-end">
          <div>
            <h2 className="text-3xl font-bold text-slate-800">选配与定制</h2>
            <p className="text-slate-500 mt-1">Configuration Options & Accessories</p>
          </div>
          <Settings className="text-slate-300 w-10 h-10" />
        </div>

        <div className="flex-1">
          <p className="text-slate-600 mb-6 text-sm">
            根据您的具体业务需求，{PRODUCT_DATA.model} 提供以下模块化升级选项。请联系销售代表获取详细定制方案。
          </p>

          <div className="w-full border border-slate-200 rounded-lg overflow-hidden">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                <tr>
                  <th className="p-4 w-1/4">功能类别</th>
                  <th className="p-4 w-1/4">选配项</th>
                  <th className="p-4 w-1/2">规格说明</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {PRODUCT_DATA.options.map((opt, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}>
                    <td className="p-4 font-semibold text-slate-800 align-top">
                      {opt.category}
                    </td>
                    <td className="p-4 text-brand-700 font-medium align-top flex items-center gap-2">
                       <PlusCircle size={14} className="opacity-50" />
                       {opt.option}
                    </td>
                    <td className="p-4 text-slate-600 align-top leading-relaxed">
                      {opt.spec}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Contact / CTA Area for Print */}
        <div className="mt-8 border-t-2 border-dashed border-slate-200 pt-8">
            <div className="grid grid-cols-2 gap-8">
                {/* <div>
                    <h4 className="font-bold text-slate-900 mb-2">联系我们</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                        <li>电话: 400-888-9999</li>
                        <li>邮箱: sales@evak.cn</li>
                        <li>地址: 北京市海淀区高科技园区</li>
                    </ul>
                </div> */}
                <div className="bg-brand-50 p-4 rounded text-xs text-brand-800 leading-relaxed">
                    <strong>免责声明：</strong><br/>
                    产品规格及外观可能因改进而发生变更，恕不另行通知。本文档仅供参考，不构成任何形式的合同承诺。请以实际出货产品为准。
                </div>
            </div>
        </div>

      </div>
    </A4Page>
  );
};

export default PageOptions;