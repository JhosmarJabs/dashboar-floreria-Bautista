export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  qrImage: string;
  specs: ProductSpec[];
  stock: number;
  category: string;
}

export interface ProductSpec {
  label: string;
  value: string;
  icon?: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum TabView {
  OVERVIEW = 'Overview',
  SPECS = 'Specifications',
  QR_AR = 'AR Visualization',
}