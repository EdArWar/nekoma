export interface IProduct {
  _id?: string;
  productBrand?: string;
  date?: string;
  productDescription?: string;
  productImage?: IProductImage[];
  productName?: string;
  productPrice?: number;
  quantity?: number;
  productTag?: string;
  productTitle?: string;
}

interface IProductImage {
  _id: string;
  public_id: string;
  url: string;
}

export interface IProductDataConfig {
  configs: IProduct;
}
