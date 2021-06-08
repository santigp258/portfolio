// Generated by https://quicktype.io
export interface APIReponseI<T extends object> {
  ok: boolean;
  events: T;
}

export interface CardI {
  _id: string;
  title: string;
  desc: string;
  icon: string;
  category: CategoryI[];
  createdAt?: string;
  updatedAt?: string;
}

export interface WorkI {
  _id: string;
  title: string;
  desc: string;
  repo: string;
  web: string;
  categories: CategoryI[];
  images: ImageI[];
  createdAt?: string;
  updatedAt?: string;
}
export interface CategoryI {
  _id: string;
  title: string;
  link?: boolean;
  src?: string;
}

export interface ImageI {
  _id: string;
  url: string;
  alt: string;
}
