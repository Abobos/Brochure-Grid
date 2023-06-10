export interface BrochureData {
  city: City;
  product: Product;
  brochures: Brochure[];
}

export interface City {
  id: number;
  attributes: Attributes;
}

export interface Attributes {
  name: string;
  description: string;
  enabled: boolean;
  url_representation: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface Product {
  id: number;
  attributes: Attributes2;
}

export interface Attributes2 {
  name: string;
  description: string;
  url_representation: string;
  enabled: boolean;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface Brochure {
  id: number;
  title: string;
  contentId: string;
  validFrom: string;
  validUntil: string;
  rank: number;
  brochureImages: BrochureImages;
  publisher: Publisher;
  page: number;
  type: string;
  publishedFrom: string;
  publishedUntil: string;
  _links: Links;
}

export interface BrochureImages {
  thumbnails: string;
  normal: string;
  large: string;
}

export interface Publisher {
  id: string;
  name: string;
  publisherType: string;
  logo: Logo;
}

export interface Logo {
  thumbnails: string;
  normal: string;
}

export interface Links {
  self: Self;
}

export interface Self {
  href: string;
}
