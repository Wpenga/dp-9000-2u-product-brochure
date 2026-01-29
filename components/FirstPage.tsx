import React, { useState, useEffect } from 'react';
import { Layers, Shield, Zap, LucideIcon, MonitorSmartphone, Wifi, Cpu, MemoryStick } from 'lucide-react';
import { ProductData } from '../types';
import A4Page from './A4Page';

interface FirstPageProps {
  productData: ProductData;
}

const IconMap: Record<string, LucideIcon> = {
  Shield,
  Layers,
  Zap,
  MonitorSmartphone,
  Wifi,
  Cpu,
  MemoryStick
};

// 动态加载图片
const FirstPage: React.FC<FirstPageProps> = ({ productData }) => {
  const [productImage, setProductImage] = useState<string>('');

  useEffect(() => {
    // 使用相对路径从项目根目录加载图片
    const imagePath = productData.imagePath;
    setProductImage(imagePath);
  }, [productData.imagePath]);
  return (
    <A4Page pageNumber={1} className="justify-center">
      <div className="flex flex-col h-full justify-between pt-10 pb-20">
        
        {/* Brand Header */}
        <div>
           <div className="inline-block px-3 py-1 bg-brand-50 text-brand-700 font-bold text-xs tracking-widest uppercase rounded mb-4">
             {/* Flagship Product */}
           </div>
           <h1 className="text-6xl font-extrabold text-slate-900 tracking-tight leading-none mb-2">
             {productData.model}
           </h1>
           <h2 className="text-3xl font-light text-slate-500">
             {productData.name}
           </h2>
        </div>

        {/* Hero Image Area */}
        <div className="relative my-8 group">
          <div className="absolute -inset-4 bg-gradient-to-tr from-brand-50 to-slate-50 rounded-full blur-3xl opacity-60"></div>
          <div className="relative rounded-xl overflow-hidden shadow-2xl border border-slate-100 bg-white min-h-[200px] md:min-h-[300px]">
            {/* Using a placeholder that represents the product description, as the user's specific image URL might require auth or context. 
                In a real scenario, we use the user provided URL. 
            */}
            <img 
              // src="https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=2042&auto=format&fit=crop" 
              src= {productImage}
              alt={productData.name} 
              className="w-full h-full object-contain object-center transform transition duration-700 hover:scale-105 p-4"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <p className="text-white/90 text-sm font-medium">{productData.subtitle}</p>
            </div>
          </div>
          {/* Note for developer: Replace the src above with the actual product image URL provided: 
              https://files.oaiusercontent.com/file-4pGx8D... 
              if available in the public context. */}
        </div>

        {/* Description */}
        <div className="mb-12">
            <p className="text-xl text-slate-600 leading-relaxed border-l-4 border-brand-500 pl-6">
              {productData.description}
            </p>
        </div>

        {/* Key Features Grid */}
        <div className="grid grid-cols-3 gap-6">
          {productData.keyFeatures.map((feature, index) => {
            const Icon = IconMap[feature.icon] || Shield;
            return (
              <div key={index} className="bg-slate-50 p-6 rounded-lg border border-slate-100">
                <Icon className="w-8 h-8 text-brand-600 mb-4" />
                <h3 className="font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-500">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </A4Page>
  );
};

export default FirstPage;