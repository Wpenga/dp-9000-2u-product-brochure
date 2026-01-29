import { ProductData } from '../types';

// 动态导入所有产品JSON文件
const productFiles = import.meta.glob('../jsons/*.json');

class ProductService {
  private cachedProducts: Map<string, ProductData> = new Map();
  private productList: Array<{ id: string; name: string; model: string }> = [];

  /**
   * 获取产品列表
   */
  async getProductList(): Promise<Array<{ id: string; name: string; model: string }>> {
    if (this.productList.length > 0) {
      return this.productList;
    }

    const products: Array<{ id: string; name: string; model: string }> = [];

    for (const [path, loader] of Object.entries(productFiles)) {
      // 跳过template.json
      if (path.includes('template.json')) {
        continue;
      }

      try {
        const module = await loader();
        const productData = module.default as ProductData;
        
        // 提取文件名作为产品ID
        const fileName = path.split('/').pop()?.replace('.json', '') || '';
        
        products.push({
          id: fileName,
          name: productData.name,
          model: productData.model
        });
      } catch (error) {
        console.error(`Failed to load product file ${path}:`, error);
      }
    }

    this.productList = products;
    return products;
  }

  /**
   * 根据ID获取产品数据
   */
  async getProductById(id: string): Promise<ProductData | null> {
    // 检查缓存
    if (this.cachedProducts.has(id)) {
      return this.cachedProducts.get(id)!;
    }

    const productPath = `../jsons/${id}.json`;
    
    try {
      // 动态导入指定的产品文件
      const loader = productFiles[productPath];
      if (!loader) {
        console.error(`Product file not found: ${productPath}`);
        return null;
      }

      const module = await loader();
      const productData = module.default as ProductData;
      
      // 缓存产品数据
      this.cachedProducts.set(id, productData);
      
      return productData;
    } catch (error) {
      console.error(`Failed to load product ${id}:`, error);
      return null;
    }
  }

  /**
   * 清除缓存
   */
  clearCache(): void {
    this.cachedProducts.clear();
    this.productList = [];
  }

  /**
   * 重新加载产品列表
   */
  async reloadProducts(): Promise<Array<{ id: string; name: string; model: string }>> {
    this.clearCache();
    return this.getProductList();
  }
}

// 导出单例实例
export default new ProductService();
