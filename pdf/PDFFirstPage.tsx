import React from 'react';
import { Page, View, Text, Image, StyleSheet } from '@react-pdf/renderer';
import { ProductData } from '../types';
import { PRODUCT_DATA } from '../constants';

interface PDFFirstPageProps {
  productData: ProductData | null;
}

const PDFFirstPage: React.FC<PDFFirstPageProps> = ({ productData = PRODUCT_DATA }) => {
  return (
    <Page size="A4" style={styles.page}>
      <View style={styles.container}>
        {/* Brand Header */}
        <View style={styles.header}>
          <View style={styles.brandTag}>
            <Text style={styles.brandTagText}></Text>
          </View>
          <Text style={styles.model}>{productData.model}</Text>
          <Text style={styles.name}>{productData.name}</Text>
        </View>

        {/* Hero Image Area */}
        <View style={styles.imageContainer}>
          <View style={styles.imageWrapper}>
            {/* 注意：React PDF的Image组件需要使用base64编码的图片或绝对URL */}
            {/* 这里使用占位符，后续需要替换为实际的图片处理逻辑 */}
            <View style={styles.imagePlaceholder}>
              <Text style={styles.imagePlaceholderText}>产品图片</Text>
            </View>
            <View style={styles.imageOverlay}>
              <Text style={styles.imageOverlayText}>{productData.subtitle}</Text>
            </View>
          </View>
        </View>

        {/* Description */}
        <View style={styles.description}>
          <Text style={styles.descriptionText}>{productData.description}</Text>
        </View>

        {/* Key Features Grid */}
        <View style={styles.featuresGrid}>
          {productData.keyFeatures.map((feature, index) => (
            <View key={index} style={styles.featureItem}>
              <View style={styles.featureIcon}>
                <Text style={styles.featureIconText}>{index === 0 ? '🛡️' : index === 1 ? '📱' : '⚡'}</Text>
              </View>
              <Text style={styles.featureTitle}>{feature.title}</Text>
              <Text style={styles.featureDescription}>{feature.description}</Text>
            </View>
          ))}
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.pageNumber}>01</Text>
        </View>
      </View>
    </Page>
  );
};

const styles = StyleSheet.create({
  page: {
    padding: 0,
    backgroundColor: '#ffffff',
  },
  container: {
    flex: 1,
    padding: 48,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  header: {
    marginBottom: 32,
  },
  brandTag: {
    backgroundColor: '#f0f7ff',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 4,
    alignSelf: 'flex-start',
    marginBottom: 16,
  },
  brandTagText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#1e40af',
    textTransform: 'uppercase',
    letterSpacing: 1,
    fontFamily: 'Microsoft YaHei',
  },
  model: {
    fontSize: 60,
    fontWeight: 'extrabold',
    color: '#1e293b',
    letterSpacing: -1,
    marginBottom: 8,
    fontFamily: 'Microsoft YaHei',
  },
  name: {
    fontSize: 30,
    fontWeight: 'light',
    color: '#64748b',
    fontFamily: 'Microsoft YaHei',
  },
  imageContainer: {
    marginVertical: 32,
  },
  imageWrapper: {
    position: 'relative',
    borderRadius: 12,
    overflow: 'hidden',
    minHeight: 300,
    borderWidth: 1,
    borderColor: '#f1f5f9',
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  imagePlaceholder: {
    width: '100%',
    height: 300,
    backgroundColor: '#f8fafc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagePlaceholderText: {
    fontSize: 16,
    color: '#94a3b8',
    fontFamily: 'Microsoft YaHei',
  },
  imageOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 24,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  imageOverlayText: {
    fontSize: 14,
    fontWeight: 'medium',
    color: '#ffffff',
    fontFamily: 'Microsoft YaHei',
  },
  description: {
    marginBottom: 48,
    paddingLeft: 24,
    borderLeftWidth: 4,
    borderLeftColor: '#f0f7ff',
  },
  descriptionText: {
    fontSize: 18,
    lineHeight: 1.6,
    color: '#475569',
    fontFamily: 'Microsoft YaHei',
  },
  featuresGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 48,
  },
  featureItem: {
    flex: 1,
    backgroundColor: '#f8fafc',
    padding: 24,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#f1f5f9',
    marginHorizontal: 8,
  },
  featureIcon: {
    marginBottom: 16,
  },
  featureIconText: {
    fontSize: 32,
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 8,
    fontFamily: 'Microsoft YaHei',
  },
  featureDescription: {
    fontSize: 14,
    lineHeight: 1.5,
    color: '#64748b',
    fontFamily: 'Microsoft YaHei',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#f1f5f9',
  },
  pageNumber: {
    fontSize: 14,
    color: '#cbd5e1',
    fontFamily: 'Microsoft YaHei',
  },
});

export default PDFFirstPage;