import React from 'react';
import { Page, View, Text, StyleSheet } from '@react-pdf/renderer';
import { PRODUCT_DATA } from '../constants';

// 图标映射 - 使用emoji替代Lucide图标
const IconMap: Record<string, string> = {
  Cpu: '💻',
  Monitor: '📺',
  Wifi: '📡',
  Cable: '🔌',
  Box: '📦',
  Keyboard: '⌨️',
};

const PDFSecondPage: React.FC = () => {
  return (
    <Page size="A4" style={styles.page}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>技术规格</Text>
          <Text style={styles.subtitle}>Technical Specifications</Text>
        </View>

        <View style={styles.specsGrid}>
          {PRODUCT_DATA.specs.map((category, idx) => {
            const icon = IconMap[category.icon] || '📦';
            return (
              <View key={idx} style={styles.specCategory}>
                <View style={styles.categoryHeader}>
                  <View style={styles.iconContainer}>
                    <Text style={styles.icon}>{icon}</Text>
                  </View>
                  <Text style={styles.categoryTitle}>{category.title}</Text>
                </View>
                
                <View style={styles.specItems}>
                  {category.items.map((item, itemIdx) => (
                    <View key={itemIdx} style={styles.specItem}>
                      <Text style={styles.itemLabel}>{item.label}</Text>
                      {Array.isArray(item.value) ? (
                        <View style={styles.itemValueList}>
                          {item.value.map((v, vIdx) => (
                            <Text key={vIdx} style={styles.itemValueListItem}>• {v}</Text>
                          ))}
                        </View>
                      ) : (
                        <Text style={styles.itemValue}>{item.value}</Text>
                      )}
                    </View>
                  ))}
                </View>
              </View>
            );
          })}
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.pageNumber}>02</Text>
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
  specsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    flex: 1,
  },
  specCategory: {
    width: '48%',
    marginBottom: 32,
  },
  categoryHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  iconContainer: {
    padding: 8,
    backgroundColor: '#f0f7ff',
    borderRadius: 8,
    marginRight: 12,
  },
  icon: {
    fontSize: 20,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e293b',
    fontFamily: 'Microsoft YaHei',
  },
  specItems: {
    gap: 12,
  },
  specItem: {
    borderLeftWidth: 2,
    borderLeftColor: '#f1f5f9',
    paddingLeft: 12,
    marginBottom: 12,
  },
  itemLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: '#94a3b8',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 4,
    fontFamily: 'Microsoft YaHei',
  },
  itemValue: {
    fontSize: 14,
    fontWeight: '500',
    color: '#475569',
    lineHeight: 1.4,
    fontFamily: 'Microsoft YaHei',
  },
  itemValueList: {
    gap: 4,
  },
  itemValueListItem: {
    fontSize: 14,
    fontWeight: '500',
    color: '#475569',
    lineHeight: 1.4,
    fontFamily: 'Microsoft YaHei',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#f1f5f9',
    marginTop: 'auto',
  },
  pageNumber: {
    fontSize: 14,
    color: '#cbd5e1',
    fontFamily: 'Microsoft YaHei',
  },
});

export default PDFSecondPage;