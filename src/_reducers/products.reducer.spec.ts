import { IProduct } from "../_constants/product.interface"
import productsReducer from './products.reducer'
import * as productsActions from '../_actions/products.actions'

describe('products reducer test', () => {
    let initialState = {
        products: [] as IProduct[],
    }

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

    test('PRODUCTS_LOADED_SUCCESSFULLY: should set loaded products to the products', () => {
        const products = [ testProductInfo ]
        const expectedState = {
            products: products,
        }
        const action = {
            type: productsActions.PRODUCTS_LOADED_SUCCESSFULLY,
            payload: { products }
        }
        const newState = productsReducer(initialState, action)
        expect(newState).toEqual(expectedState)
    })

    test('CLEAR_PRODUCTS: should set products to empty', () => {
        const products = [ testProductInfo ]
        initialState = {
            products: products,
        }
        const expectedState = {
            products: [],
        }
        const action = {
            type: productsActions.CLEAR_PRODUCTS,
            payload: {}
        }
        const newState = productsReducer(initialState, action)
        expect(newState).toEqual(expectedState)
    })
})