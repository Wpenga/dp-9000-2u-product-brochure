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

export interface ProductData {
  model: string;
  name: string;
  description: string;
  specs: SpecCategory[];
  options: OptionItem[];
}