import { IProduct } from "../_constants/product.interface"

export const PRODUCTS_LOADED_SUCCESSFULLY = "PRODUCTS_LOADED_SUCCESSFULLY"
export const productLoadedSuccessfully = (products: Array<IProduct>) => ({
    type: PRODUCTS_LOADED_SUCCESSFULLY,
    payload: { products }
})

export const CLEAR_PRODUCTS = "CLEAR_PRODUCTS"
export const clearProducts = () => ({
    type: CLEAR_PRODUCTS,
    payload: { }
})
