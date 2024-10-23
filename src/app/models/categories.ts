// export class Categories {
//   id?: number;
//   name?: string;
//   enable?: boolean;
//   check?: boolean;
// }



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

  export interface Subcategory {
    _id: string;
    name: string;
    enable: boolean;
    charges: number;
    description: string;
    name_fi: string;
    color: string;
    createdAt: Date;
    updatedAt: Date;
    __v: number;
    category: string;
    icon: Icon;
    id: string;
  }

  export interface Categories {
    _id: string;
    name: string;
    name_fi: string;
    enable: boolean;
    createdAt: Date;
    updatedAt: Date;
    __v: number;
    subcategory: Subcategory[];
    id: string;
    active?: boolean;
  }


