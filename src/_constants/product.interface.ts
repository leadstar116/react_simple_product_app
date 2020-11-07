export interface IProduct {
  id: string,
  name: string,
  priceUSD: number,
  price: number,
  photos: string[]
}

export interface ProductsState {
  products: Array<IProduct>
}