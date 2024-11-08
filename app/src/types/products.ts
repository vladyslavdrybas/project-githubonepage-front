export default interface IProduct {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
}

export type ProductWithQty = {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
  qty: number;
  discountedPrice: number;
  shippingPrice?: number;
  tax?: number;
};

export type ProductContextState = {
  products: ProductWithQty[];
  addProduct: (prod: IProduct) => void;
  delProduct: (id: number) => void;
  increaseQty: (id: number) => number | undefined;
  decreaseQty: (id: number) => number | undefined;
  totalItem: number;
  discount: number;
  totalPrice: number;
  totalDiscountedPrice: number;
};
