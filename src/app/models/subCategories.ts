
  export interface Thumbnail {
    name: string;
    hash: string;
    ext: string;
    mime: string;
    width: number;
    height: number;
    size: number;
    path?: any;
    url: string;
  }

  export interface Large {
    name: string;
    hash: string;
    ext: string;
    mime: string;
    width: number;
    height: number;
    size: number;
    path?: any;
    url: string;
  }

  export interface Medium {
    name: string;
    hash: string;
    ext: string;
    mime: string;
    width: number;
    height: number;
    size: number;
    path?: any;
    url: string;
  }

  export interface Small {
    name: string;
    hash: string;
    ext: string;
    mime: string;
    width: number;
    height: number;
    size: number;
    path?: any;
    url: string;
  }

  export interface Formats {
    thumbnail: Thumbnail;
    large: Large;
    medium: Medium;
    small: Small;
  }

  export interface Icon {
    _id: string;
    name: string;
    alternativeText: string;
    caption: string;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    width: number;
    height: number;
    url: string;
    formats: Formats;
    provider: string;
    related: string[];
    createdAt: Date;
    updatedAt: Date;
    __v: number;
    id: string;
  }

  export interface Category {
    _id: string;
    name: string;
    name_fi: string;
    enable: boolean;
    createdAt: Date;
    updatedAt: Date;
    __v: number;
    id: string;
  }

  export interface Subcategories {
    _id: string;
    name: string;
    charges: number;
    description: string;
    name_fi: string;
    type: string;
    color: string;
    enable: boolean;
    createdAt: Date;
    updatedAt: Date;
    __v: number;
    icon: Icon;
    id: string;
    category: Category;
  }

