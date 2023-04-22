export class ColumnSetting {
  field: string = '';
  title: string = '';
  format?: string;
  type?: 'text' | 'numeric' | 'boolean' | 'date';
}

export class Category {
  icon: string = '';
  value: string = '';
  viewValue: string = '';
}

export class Product {
  id: number = 0;
  img: string = '';
  title: string = '';
  poscode: number = 0;
  barcode: number = 0;
  seller: string = '';
  subgroup: string[] = [];
  origin: string = '';
  brand: string = '';
  price: number = 0;
  checkdate: boolean = false;
  category: string = '';
  status: string = 'active';
}

export class ProductApi {
  Code: number;
  Barcode: string;
  ProductName: string;
  Alias: null;
  ImageThumb: string;
  ImageSmall: null;
  ImageLarge: null;
  FreeShippingImage: string;
  TypeData: string;
  StatusID: number;
  IsNew: boolean;
  IsHachi24h: boolean;
  IsBestPrice: boolean;
  IsSpecial: boolean;
  IsGift: boolean;
  IsPromotion: boolean;
  PromotionID: null;
  GroupIDList: [];
  IsCombo: boolean;
  Price: number;
  PriceBase: number;
  PriceVIP: number;
  Discount: number;
  CategoryID: number;
  OrginalID: number;
  OrginalName: string;
  BrandID: number;
  BrandName: string;
}

export class ProductList {
  StatusCode: number;
  ErrorString: any;
  ObjectReturn: {
    Data: ProductApi[];
    Total: number;
    AggregateResults: null;
    Errors: null;
  };
}

export class Item {
  text: string;
  value: number;
}
