import React, { useState, useEffect } from 'react';
import ProductService from '../services/ProductService';

interface ProductSelectorProps {
  selectedProductId: string;
  onProductChange: (productId: string) => void;
}

const ProductSelector: React.FC<ProductSelectorProps> = ({ 
  selectedProductId, 
  onProductChange 
}) => {
  const [products, setProducts] = useState<Array<{ id: string; name: string; model: string }>>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // 加载产品列表
  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        const productList = await ProductService.getProductList();
        setProducts(productList);
      } catch (err) {
        setError('加载产品列表失败');
        console.error('Failed to load products:', err);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  // 处理产品选择变化
  const handleProductChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const productId = e.target.value;
    onProductChange(productId);
  };

  if (loading) {
    return (
      <div className="p-4">
        <div className="text-sm text-gray-500">加载产品列表中...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4">
        <div className="text-sm text-red-500">{error}</div>
        <button 
          onClick={() => ProductService.reloadProducts().then(setProducts)}
          className="mt-2 px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600"
        >
          重试
        </button>
      </div>
    );
  }

  return (
    <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">
      <h3 className="text-lg font-medium text-gray-900 mb-3">产品选择</h3>
      <select
        value={selectedProductId}
        onChange={handleProductChange}
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      >
        {products.length === 0 ? (
          <option value="">暂无产品数据</option>
        ) : (
          products.map((product) => (
            <option key={product.id} value={product.id}>
              {product.name} ({product.model})
            </option>
          ))
        )}
      </select>
      {products.length === 0 && (
        <p className="mt-2 text-sm text-gray-500">请在jsons目录中添加产品数据文件</p>
      )}
    </div>
  );
};

export default ProductSelector;
