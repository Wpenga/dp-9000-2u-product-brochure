import React from 'react';
import { Document, Page, View, Text, Image, StyleSheet, Font } from '@react-pdf/renderer';
import { ProductData } from '../types';
import { PRODUCT_DATA } from '../constants';
import PDFFirstPage from './PDFFirstPage';
import PDFSecondPage from './PDFSecondPage';
import PDFThirdPage from './PDFThirdPage';

// 注册中文字体
Font.register({
  family: 'SimSun',
  src: 'https://fonts.gstatic.com/s/notosanssc/v26/k3kQo8UDI-1M0wlSV9XAw6M8bE.woff2'
});

Font.register({
  family: 'Microsoft YaHei',
  src: 'https://fonts.gstatic.com/s/notosanssc/v26/k3kQo8UDI-1M0wlSV9XAw6M8bE.woff2'
});

interface PDFDocumentProps {
  productData?: ProductData | null;
}

const PDFDocument: React.FC<PDFDocumentProps> = ({ productData }) => {
  // 使用默认产品数据作为回退
  const currentProductData = productData || PRODUCT_DATA;
  return (
    <Document>
      <PDFFirstPage productData={currentProductData} />
      <PDFSecondPage productData={currentProductData} />
      <PDFThirdPage productData={currentProductData} />
    </Document>
  );
};

export default PDFDocument;