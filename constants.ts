import { ProductData } from './types';

export const PRODUCT_DATA: ProductData = {
  model: "DP-9000-2U",
  name: "便携式移动指挥箱",
  description: "全天候、多功能、高性能的移动指挥终端，专为应急通信与现场指挥设计。",
  specs: [
    {
      title: "核心处理平台",
      icon: "Cpu",
      items: [
        { label: "CPU", value: "Intel Core i7-8700T (6核 12线程, 2.40-4.00 GHz)" },
        { label: "内存", value: "32 GB DDR4" },
        { label: "存储", value: "1 TB 高速 SSD" },
        { label: "显卡", value: "Intel® UHD Graphics 630" },
        { label: "系统", value: "支持 Windows 10 / Windows 11" }
      ]
    },
    {
      title: "专业显示系统",
      icon: "Monitor",
      items: [
        { label: "主屏幕", value: "3 × 15.6\" FHD (1920×1080) 高亮阳光屏" },
        { label: "亮度", value: "1000 nits (户外强光可视)" },
        { label: "触控", value: "中间屏幕支持多点电容触控" },
        { label: "控制副屏", value: "8.8\" 带触控提示音串口屏，支持音视频矩阵控制" }
      ]
    },
    {
      title: "输入与交互",
      icon: "Keyboard",
      items: [
        { label: "键盘", value: "工业级背光键盘" },
        { label: "触控板", value: "高精度多点触控板" },
        { label: "功能键", value: "2×自定义, 2×音频切换, 2×视频切换, PTT按键" },
        { label: "音频输入", value: "2×卡侬接口(鹅颈麦), 2×3.5mm 线性输入" },
        { label: "音频输出", value: "2×内置扬声器(独立音量), 1×3.5mm 线性输出" }
      ]
    },
    {
      title: "通讯与网络",
      icon: "Wifi",
      items: [
        { label: "有线网络", value: ["4× RJ45 LAN (路由器)", "1× RJ45 LAN (PC)", "1× RJ45 WAN (卫星接入)"] },
        { label: "无线网络", value: "5G 路由器 (支持 AP), WiFi, 蓝牙" },
        { label: "SIM卡槽", value: "1 × SIM 卡槽" }
      ]
    },
    {
      title: "I/O 扩展接口",
      icon: "Cable",
      items: [
        { label: "USB", value: "2 × USB 3.0 Type-A" },
        { label: "视频输入", value: "3 × HDMI (最大 1080P, 视频矩阵来源)" },
        { label: "视频输出", value: "5 × HDMI (服务器/会议/矩阵直出)" },
        { label: "电源接口", value: "1 × AC IN (220V)" }
      ]
    },
    {
      title: "物理与环境",
      icon: "Box",
      items: [
        { label: "尺寸", value: "550 × 350 × 230 mm (W×D×H)" },
        { label: "重量", value: "≈ 17 kg" },
        { label: "电池", value: "锂离子 14.8V / 25,000 mAh (续航 ~4h)" },
        { label: "工作温度", value: "-10°C ~ +50°C" },
        { label: "存储温度", value: "-20°C ~ +65°C" },
        { label: "材质", value: "高强度防护箱体，黑色" }
      ]
    }
  ],
  options: [
    { category: "系统升级", option: "服务器平台 1", spec: "i5-8265U + 32G + 512G SSD + Linux" },
    { category: "系统升级", option: "服务器平台 2", spec: "至强 E-2176M + 32G + 1T SSD" },
    { category: "操作系统", option: "正版系统", spec: "Windows 10 / 11 正版授权" },
    { category: "键盘", option: "无线外设", spec: "外置多功能蓝牙键盘" },
    { category: "拓展模块", option: "视频会议", spec: "华为/中兴终端，H.323 & SIP，双流回传" },
    { category: "拓展模块", option: "融合通讯", spec: "对讲融合模块 (模拟 / PDT / DMR)" },
    { category: "拓展模块", option: "编码器", spec: "多格式采集 (HDMI/SDI/CVBS)，H.264 双码流" },
    { category: "存储扩展", option: "大容量存储", spec: "2TB / 4TB 固态硬盘" },
    { category: "网络", option: "聚合路由", spec: "多卡聚合 (SIM×3: 4G×2 + 5G×1)" },
    { category: "定制服务", option: "品牌定制", spec: "开机 LOGO, 机身丝印, 金属铭牌, 包装定制" },
  ]
};