import configureStore from 'redux-mock-store'
import React from 'react'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'
import ProductList from './ProductList'
import { IProduct } from '../_constants/product.interface'
import { Currency } from '../_constants/settings.interface'


describe('ProductList Component', () => {
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

    const settingsState = {
        currentCurrency: {
            name: 'US Dollar',
            symbol: '$',
            symbolNative: '$',
            decimalDigits: 2,
            rounding: 0,
            code: 'USD',
            namePlural: 'US dollars',
            countries: [
                'AS',
                'BQ',
                'EC',
                'FM',
                'GU',
                'IO',
                'MH',
                'MP',
                'PR',
                'PW',
                'SV',
                'TC',
                'TL',
                'UM',
                'US',
                'VG',
                'VI',
            ],
        } as Currency,
        currencies: [] as Currency[]
    }
    const productsState = {
        products: [testProductInfo],
    }

    const mockStore = configureStore()
    let store = mockStore({
        settingsReducer: settingsState,
        productsReducer: productsState,
    })

    store.dispatch = jest.fn()

    let component = renderer.create(
        <Provider store={store}>
            <ProductList searchString=""/>
        </Provider>
    )

    it('should render with given props', () => {
        expect(component.toJSON()).toMatchSnapshot()
    })
})