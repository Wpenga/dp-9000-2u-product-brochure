import React from 'react';
import { Document, Page, View, Text, Image, StyleSheet, Font } from '@react-pdf/renderer';
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

const PDFDocument: React.FC = () => {
  return (
    <Document>
      <PDFFirstPage />
      <PDFSecondPage />
      <PDFThirdPage />
    </Document>
  );
};

export default PDFDocument;