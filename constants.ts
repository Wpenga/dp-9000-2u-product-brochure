import { ProductData } from './types';

export const PRODUCT_DATA: ProductData = {
  model: "T-1000S",
  name: "便携式智能终端",
  description: "高性能便携式智能终端，集成专业显示系统、丰富接口配置和强大的通讯能力，专为各类专业场景设计。",
  imagePath: "../img/S288/B面.jpg",
  subtitle: "便携式指挥终端",
  keyFeatures: [
    {
      icon: "Shield",
      title: "i7 高性能处理器",
      description: "采用i7-1355U处理器，16G内存，1TB SSD，性能强劲。"
    },
    {
      icon: "Layers",
      title: "专业显示系统",
      description: "15.6英寸FHD高亮屏，1000 nits亮度，2寸串口屏显示网络状态。"
    },
    {
      icon: "Zap",
      title: "全防护设计",
      description: "IP67防护等级，5G路由器，单北斗定位，适应恶劣环境。"
    }
  ],
  specs: [
    {
      title: "核心处理平台",
      icon: "Cpu",
      items: [
        { label: "CPU", value: "i5低功耗" },
        { label: "内存", value: "16G" },
        { label: "存储", value: "1TB SSD" },
        { label: "显卡", value: "Intel Iris Xe Graphics eligible" },
        { label: "系统", value: "Windows 10 测试版（64位）" }
      ]
    },
    {
      title: "专业显示系统",
      icon: "Monitor",
      items: [
        { label: "主显示屏", value: "15.6英寸 FHD (1920×1080)" },
        { label: "亮度", value: "500 nits" },
        // { label: "串口屏", value: "2寸串口屏，显示网络状态" }
      ]
    },
    {
      title: "输入与交互",
      icon: "Keyboard",
      items: [
        { label: "键盘", value: "外置多功能蓝牙键盘" },
        { label: "摄像头", value: "内置1080P 摄像头" },
        { label: "音频", value: "内置扬声器" },
        { label: "音频输入", value: "1×3.5mm 输入、1×卡侬" },
        { label: "音频输出", value: "1×3.5mm 输出" },
        // { label: "控制键", value: "1×MIC增益控制键、1×喇叭控制键" }
      ]
    },
    {
      title: "通讯与网络",
      icon: "Wifi",
      items: [
        { label: "有线网络", value: "1×LAN、1×WAN（LAN:10/100/1000M）" },
        { label: "无线网络", value: "5G路由器" },
        { label: "定位", value: "单北斗定位" },
        { label: "SIM卡座", value: "1×SIM卡座" }
      ]
    },
    {
      title: "I/O 扩展接口",
      icon: "Cable",
      items: [
        { label: "USB", value: "USB*4" },
        { label: "PC端视频接口", value: "1×HDMI输入、1×HDMI输出" },
        { label: "会议终端视频接口", value: "2×HDMI 输入（内置3进1出切换器）+1×HDMI 输出" },
        { label: "会议终端音频接口", value: "3.5输入+3.5输出" },
        // { label: "控制接口", value: "1×RS232控制接口" },
        { label: "电源接口", value: "1×DCIN" }
      ]
    },
    {
      title: "物理与环境",
      icon: "Box",
      items: [
        { label: "尺寸", value: "465 mm×400 mm×190 mm" },
        { label: "重量", value: "≤15kg" },
        { label: "防护等级", value: "IP65" },
        { label: "工作温度", value: "-10℃ ～ +50℃" },
        { label: "存储温度", value: "-10℃ ～ +70℃" },
        { label: "工作湿度", value: "10% - 90%" },
        // { label: "电源", value: "120W" },
        { label: "续航", value: "4小时" }
      ]
    }
  ],
  options: [
    { category: "音频设备", option: "无线麦克风", spec: "" },
    // { category: "视频设备", option: "无线摄像头", spec: "优先考虑" },
    { category: "视频设备", option: "无线摄像头/3米摄像头", spec: "" },
    { category: "视频切换", option: "HDMI切换器遥控器", spec: "" },
    // { category: "会议系统", option: "融讯会议终端", spec: "" },
    // { category: "音频系统", option: "音频矩阵", spec: "" }
  ]
};