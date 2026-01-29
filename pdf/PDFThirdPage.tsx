import React from 'react';
import { Page, View, Text, StyleSheet } from '@react-pdf/renderer';
import { ProductData } from '../types';
import { PRODUCT_DATA } from '../constants';

interface PDFThirdPageProps {
  productData: ProductData | null;
}

const PDFThirdPage: React.FC<PDFThirdPageProps> = ({ productData = PRODUCT_DATA }) => {
  return (
    <Page size="A4" style={styles.page}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View>
            <Text style={styles.title}>配件</Text>
            <Text style={styles.subtitle}>Configuration Options & Accessories</Text>
          </View>
          <Text style={styles.icon}>⚙️</Text>
        </View>

        <View style={styles.content}>
          <Text style={styles.intro}>
            根据您的具体业务需求，{productData.model} 提供以下模块化升级选项。请联系销售代表获取详细定制方案。
          </Text>

          <View style={styles.tableContainer}>
            <View style={styles.tableHeader}>
              <View style={[styles.tableCell, styles.categoryCell, styles.headerCell]}>
                <Text style={styles.headerText}>功能类别</Text>
              </View>
              <View style={[styles.tableCell, styles.optionCell, styles.headerCell]}>
                <Text style={styles.headerText}>配件</Text>
              </View>
              <View style={[styles.tableCell, styles.specCell, styles.headerCell]}>
                <Text style={styles.headerText}>规格说明</Text>
              </View>
            </View>
            <View style={styles.tableBody}>
              {productData.options.map((opt, idx) => (
                <View key={idx} style={[styles.tableRow, idx % 2 === 0 ? styles.evenRow : styles.oddRow]}>
                  <View style={[styles.tableCell, styles.categoryCell]}>
                    <Text style={styles.categoryText}>{opt.category}</Text>
                  </View>
                  <View style={[styles.tableCell, styles.optionCell]}>
                    <View style={styles.optionContent}>
                      <Text style={styles.optionIcon}>➕</Text>
                      <Text style={styles.optionText}>{opt.option}</Text>
                    </View>
                  </View>
                  <View style={[styles.tableCell, styles.specCell]}>
                    <Text style={styles.specText}>{opt.spec}</Text>
                  </View>
                </View>
              ))}
            </View>
          </View>
        </View>

        {/* Contact / CTA Area */}
        <View style={styles.footerSection}>
            <View style={styles.disclaimer}>
                <Text style={styles.disclaimerText}>
                    <Text style={styles.disclaimerBold}>免责声明：</Text>
                    产品规格及外观可能因改进而发生变更，恕不另行通知。本文档仅供参考，不构成任何形式的合同承诺。请以实际出货产品为准。
                </Text>
            </View>
        </View>

        {/* Page Number */}
        <View style={styles.pageNumberContainer}>
          <Text style={styles.pageNumber}>03</Text>
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
  },
  header: {
    marginBottom: 32,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 4,
    fontFamily: 'Microsoft YaHei',
  },
  subtitle: {
    fontSize: 14,
    color: '#64748b',
    fontFamily: 'Microsoft YaHei',
  },
  icon: {
    fontSize: 40,
    color: '#cbd5e1',
  },
  content: {
    flex: 1,
    marginBottom: 32,
  },
  intro: {
    fontSize: 14,
    color: '#475569',
    marginBottom: 24,
    lineHeight: 1.5,
    fontFamily: 'Microsoft YaHei',
  },
  tableContainer: {
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 8,
    overflow: 'hidden',
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#f8fafc',
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
  },
  headerCell: {
    backgroundColor: '#f8fafc',
  },
  headerText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#475569',
    fontFamily: 'Microsoft YaHei',
  },
  tableBody: {
    flexDirection: 'column',
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#f1f5f9',
  },
  evenRow: {
    backgroundColor: '#ffffff',
  },
  oddRow: {
    backgroundColor: '#f8fafc',
  },
  tableCell: {
    padding: 16,
  },
  categoryCell: {
    width: '25%',
  },
  optionCell: {
    width: '25%',
  },
  specCell: {
    width: '50%',
  },
  categoryText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1e293b',
    fontFamily: 'Microsoft YaHei',
  },
  optionContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  optionIcon: {
    fontSize: 14,
    color: '#94a3b8',
  },
  optionText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1e40af',
    fontFamily: 'Microsoft YaHei',
  },
  specText: {
    fontSize: 14,
    color: '#475569',
    lineHeight: 1.5,
    fontFamily: 'Microsoft YaHei',
  },
  footerSection: {
    marginTop: 32,
    paddingTop: 24,
    borderTopWidth: 2,
    borderTopColor: '#e2e8f0',
    borderStyle: 'dashed',
  },
  disclaimer: {
    backgroundColor: '#f0f7ff',
    padding: 16,
    borderRadius: 8,
  },
  disclaimerText: {
    fontSize: 12,
    color: '#1e40af',
    lineHeight: 1.4,
    fontFamily: 'Microsoft YaHei',
  },
  disclaimerBold: {
    fontWeight: 'bold',
  },
  pageNumberContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 24,
  },
  pageNumber: {
    fontSize: 14,
    color: '#cbd5e1',
    fontFamily: 'Microsoft YaHei',
  },
});

export default PDFThirdPage;