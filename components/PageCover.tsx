import React from 'react';
import { Layers, Shield, Zap } from 'lucide-react';
import { PRODUCT_DATA } from '../constants';
import A4Page from './A4Page';

const PageCover: React.FC = () => {
  return (
    <A4Page pageNumber={1} className="justify-center">
      <div className="flex flex-col h-full justify-between pt-10 pb-20">
        
        {/* Brand Header */}
        <div>
           <div className="inline-block px-3 py-1 bg-brand-50 text-brand-700 font-bold text-xs tracking-widest uppercase rounded mb-4">
             Flagship Product
           </div>
           <h1 className="text-6xl font-extrabold text-slate-900 tracking-tight leading-none mb-2">
             {PRODUCT_DATA.model}
           </h1>
           <h2 className="text-3xl font-light text-slate-500">
             {PRODUCT_DATA.name}
           </h2>
        </div>

        {/* Hero Image Area */}
        <div className="relative my-8 group">
          <div className="absolute -inset-4 bg-gradient-to-tr from-brand-50 to-slate-50 rounded-full blur-3xl opacity-60"></div>
          <div className="relative rounded-xl overflow-hidden shadow-2xl border border-slate-100 bg-white">
            {/* Using a placeholder that represents the product description, as the user's specific image URL might require auth or context. 
                In a real scenario, we use the user provided URL. 
            */}
            <img 
              src="https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=2042&auto=format&fit=crop" 
              alt="DP-9000-2U Command Box" 
              className="w-full h-80 object-cover object-center transform transition duration-700 hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <p className="text-white/90 text-sm font-medium">三屏高亮显控一体化终端</p>
            </div>
          </div>
          {/* Note for developer: Replace the src above with the actual product image URL provided: 
              https://files.oaiusercontent.com/file-4pGx8D... 
              if available in the public context. */}
        </div>

        {/* Description */}
        <div className="mb-12">
            <p className="text-xl text-slate-600 leading-relaxed border-l-4 border-brand-500 pl-6">
              {PRODUCT_DATA.description}
            </p>
        </div>

        {/* Key Features Grid */}
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-slate-50 p-6 rounded-lg border border-slate-100">
            <Shield className="w-8 h-8 text-brand-600 mb-4" />
            <h3 className="font-bold text-slate-900 mb-2">坚固耐用</h3>
            <p className="text-sm text-slate-500">
              全防护箱体设计，适应-10°C至50°C极端环境，无惧风雨。
            </p>
          </div>
          <div className="bg-slate-50 p-6 rounded-lg border border-slate-100">
            <Layers className="w-8 h-8 text-brand-600 mb-4" />
            <h3 className="font-bold text-slate-900 mb-2">三屏联动</h3>
            <p className="text-sm text-slate-500">
              3×15.6寸高亮阳光屏，搭配8.8寸触控副屏，信息尽在掌握。
            </p>
          </div>
          <div className="bg-slate-50 p-6 rounded-lg border border-slate-100">
            <Zap className="w-8 h-8 text-brand-600 mb-4" />
            <h3 className="font-bold text-slate-900 mb-2">超强性能</h3>
            <p className="text-sm text-slate-500">
              i7-8700T 六核处理器，32G内存，5G全网通，极速响应。
            </p>
          </div>
        </div>

      </div>
    </A4Page>
  );
};

export default PageCover;