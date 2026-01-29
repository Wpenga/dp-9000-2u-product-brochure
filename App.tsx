import React, { useState, useEffect } from 'react';
import { Printer, FileText, Loader, Download } from 'lucide-react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import PDFDocument from './pdf/PDFDocument';
import FirstPage from './components/FirstPage';
import SecondPage from './components/SecondPage';
import ThirdPage from './components/ThirdPage';
import ProductSelector from './components/ProductSelector';
import ProductService from './services/ProductService';
import { ProductData } from './types';
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
  const [selectedProductId, setSelectedProductId] = useState<string>('');
  const [productData, setProductData] = useState<ProductData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // 处理产品选择变化
  const handleProductChange = async (productId: string) => {
    setSelectedProductId(productId);
    if (productId) {
      try {
        setLoading(true);
        setError(null);
        const data = await ProductService.getProductById(productId);
        setProductData(data);
      } catch (err) {
        setError('加载产品数据失败');
        console.error('Failed to load product data:', err);
      } finally {
        setLoading(false);
      }
    } else {
      setProductData(null);
    }
  };

  // 初始化时加载第一个产品
  useEffect(() => {
    const loadFirstProduct = async () => {
      try {
        const products = await ProductService.getProductList();
        if (products.length > 0) {
          handleProductChange(products[0].id);
        }
      } catch (err) {
        console.error('Failed to load initial product:', err);
      }
    };

    loadFirstProduct();
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-800 print:bg-white flex print:flex-col">
      {/* 左侧产品选择器 - 仅在非打印模式显示 */}
      <div className="w-64 md:w-72 p-4 bg-slate-900 border-r border-slate-700 no-print">
        <ProductSelector 
          selectedProductId={selectedProductId}
          onProductChange={handleProductChange}
        />
      </div>

      {/* 右侧内容区域 */}
      <div className="flex-1 flex flex-col items-center py-8 print:py-0">
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
            document={<PDFDocument productData={productData} />} 
            fileName={`${productData?.model || 'product'}-brochure.pdf`}
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

        {/* 加载状态 */}
        {loading && (
          <div className="text-slate-300 text-center py-20">
            <p>加载产品数据中...</p>
          </div>
        )}

        {/* 错误状态 */}
        {error && (
          <div className="text-red-500 text-center py-20">
            <p>{error}</p>
            <button 
              onClick={() => selectedProductId && handleProductChange(selectedProductId)}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              重试
            </button>
          </div>
        )}

        {/* 无产品数据状态 */}
        {!loading && !error && !productData && (
          <div className="text-slate-300 text-center py-20">
            <p>请选择一个产品</p>
          </div>
        )}

        {/* Document Container */}
        {!loading && !error && productData && (
          <div id="pdf-content" className="flex flex-col gap-8 print:gap-0 w-full items-center">
            <FirstPage productData={productData} />
            <SecondPage productData={productData} />
            <ThirdPage productData={productData} />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;