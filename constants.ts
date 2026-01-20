import { ProductData } from './types';

export const PRODUCT_DATA: ProductData = {
  model: "EPG-3000M",
  name: "国产飞腾半加固笔记本",
  description: "专为工业环境、户外作业及恶劣场景设计的高性能加固笔记本，集成国产飞腾处理器、多系统支持以及丰富的接口配置。",
  specs: [
    {
      title: "核心处理平台",
      icon: "Cpu",
      items: [
        { label: "CPU", value: "飞腾D3000M/8核 主频2.3 GHz" },
        { label: "内存", value: "DDR5 默认板贴内存颗粒8GB（兼容16GB，可选配）" },
        { label: "存储", value: "1TB SSD" },
        { label: "显卡", value: "集显" },
        { label: "系统", value: "支持国产银河麒麟、UOS系统" }
      ]
    },
    {
      title: "专业显示系统",
      icon: "Monitor",
      items: [
        { label: "显示屏", value: "1×15.6英寸 FHD (1920×1080)" },
        { label: "亮度", value: "300 nits（兼容高亮屏）" },
        { label: "触摸屏", value: "可选" }
      ]
    },
    {
      title: "输入与交互",
      icon: "Keyboard",
      items: [
        { label: "键盘", value: "工业级键盘" },
        { label: "触控板", value: "多点触控/防水设计触控板" },
        { label: "摄像头", value: "可选200W像素摄像头" },
        { label: "音频", value: "内置2×扬声器" },
        { label: "音频接口", value: "1×Mic&Line-out（3.5mm二合一接口）" }
      ]
    },
    {
      title: "通讯与网络",
      icon: "Wifi",
      items: [
        { label: "有线网络", value: "2×RJ45 LAN 10M/100M/1000M 自适应以太网口" },
        { label: "无线网络", value: "板载GPS/北斗/GLONASS模块，支持WIFI&蓝牙" },
        { label: "网络扩展", value: "1×SIM卡槽/1×4G 5G模块插槽" }
      ]
    },
    {
      title: "I/O 扩展接口",
      icon: "Cable",
      items: [
        { label: "USB", value: "2×USB 3.0 Type-A，2×USB 2.0 Type A" },
        { label: "显示接口", value: "1×HDMI 输出" },
        { label: "串口", value: "1×RS232" },
        { label: "内部接口", value: "1×M.2插槽/3×RS232接口/1×GPS天线接口" }
      ]
    },
    {
      title: "物理与环境",
      icon: "Box",
      items: [
        { label: "尺寸", value: "375×287×37 mm (W×D×H)（不含包角）" },
        { label: "重量", value: "5.5kg" },
        { label: "防护等级", value: "IP65（争取设计到IP67）" },
        { label: "工作环境", value: "工作温度：-20℃ ~ +45℃；工作湿度：5% - 90%，无凝露" },
        { label: "存储环境", value: "存储温度：-40℃ ~ +70℃；存储湿度：5% - 95%，无凝露" },
        { label: "供电", value: "120W适配器：AC输入100-240V，DC输出19V" },
        { label: "电池", value: "锂离子电池，14.8V/10400mAh，典型续航6小时" },
        { label: "颜色", value: "黑色（可选银色）" }
      ]
    }
  ],
  options: [
    { category: "系统升级", option: "操作系统", spec: "正版 银河麒麟桌面版V10" },
    { category: "摄像头", option: "200W像素摄像头", spec: "可选配" },
    { category: "存储扩展", option: "SSD扩展", spec: "容量：2T；类型：2.5寸固态硬盘（支持7mm厚度硬盘）" },
    { category: "显示选项", option: "高亮显示", spec: "支持" },
    { category: "显示选项", option: "触控屏幕", spec: "支持" },
    { category: "网络", option: "无线网络", spec: "WIFI&蓝牙" },
    { category: "定制服务", option: "开机LOGO定制", spec: "支持格式：BMP/PNG；分辨率：1920×1080" },
    { category: "定制服务", option: "机身LOGO定制", spec: "丝印/金属标贴；尺寸：30×10mm（标准）" },
    { category: "定制服务", option: "产品铭牌定制", spec: "材质：金属/PVC/亚克力；尺寸：50×30mm" },
    { category: "定制服务", option: "包装定制", spec: "定制说明书；MOQ：10pcs" },
    { category: "定制服务", option: "定制附件包", spec: "" },
    { category: "定制服务", option: "颜色定制", spec: "黑色/银色" }
  ]
};