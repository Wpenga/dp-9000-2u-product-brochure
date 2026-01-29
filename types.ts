export interface SpecItem {
  label: string;
  value: string | string[];
}

export interface SpecCategory {
  title: string;
  icon: string;
  items: SpecItem[];
}

export interface OptionItem {
  category: string;
  option: string;
  spec: string;
}

export interface KeyFeature {
  icon: string;
  title: string;
  description: string;
}

export interface ProductData {
  model: string;
  name: string;
  description: string;
  imagePath: string;
  subtitle: string;
  specs: SpecCategory[];
  options: OptionItem[];
  keyFeatures: KeyFeature[];
}