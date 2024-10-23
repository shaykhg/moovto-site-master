

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

  export interface Vehicle {
    icon: Icon[];
    _id: string;
    name: string;
    max_charges: number;
    max_distance: number;
    min_charges: number;
    name_fi: string;
    createdAt: Date;
    updatedAt: Date;
    __v: number;
    id: string;
    tooltip: string;
  }

  export interface Charges {
    day: string;
    _id: string;
    extra: string;
    charge: number;
    from: string;
    till: string;
    enable: boolean;
    createdAt: Date;
    updatedAt: Date;
    __v: number;
    vehicle: Vehicle;
    id: string;
  }


