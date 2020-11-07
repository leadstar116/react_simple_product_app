import * as productsActions from './products.actions'
import { IProduct } from "../_constants/product.interface"

const testProductInfo = {
    "id": "78e7d58f-b6ec-4701-b7fd-86968c53df89",
    "name": "Product - NYHET 🔄 PopSockets - Chroma Splash gloss POPGRIP",
    "priceUSD": 14.19,
    "photos": [
        "https://cdn.shopify.com/s/files/1/1097/9190/products/Chroma-Splash-Gloss_01_Top-View_RGB-600x600-1dd2e0d.png?v=1580077484",
        "https://cdn.shopify.com/s/files/1/1097/9190/products/Chroma-Splash-Gloss_02_Grip-Expanded_RGB-565x601-313519e.png?v=1580077490"
    ],
    "price": 11.95
} as IProduct

describe('load products successfully action test', () => {
    it('should return loaded products', () => {
        const products = [
            testProductInfo
        ] as IProduct[]
        const expectedAction = {
            type: productsActions.PRODUCTS_LOADED_SUCCESSFULLY,
            payload: { products }
        }
        expect(productsActions.productLoadedSuccessfully(products)).toEqual(expectedAction)
    })
})

describe('clear products action test', () => {
    it('should return remove all products', () => {
        const products = [
            testProductInfo
        ] as IProduct[]
        const expectedAction = {
            type: productsActions.PRODUCTS_LOADED_SUCCESSFULLY,
            payload: { products }
        }
        expect(productsActions.productLoadedSuccessfully(products)).toEqual(expectedAction)
    })
})