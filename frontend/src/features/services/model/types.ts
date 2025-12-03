export interface PriceRange {
  min: number;
  max: number;
}

export interface PriceDump {
  min: number;
  max: number;
  activeUntil: string;
}

export interface Service {
  _id: string;
  slug: string;
  title: string;
  category: string;
  description: string;
  features: string[];
  marketPriceRange: PriceRange;
  priceDump: PriceDump;
  pricePostDump: PriceRange;
  options: any[];
  isActive: boolean;
}


