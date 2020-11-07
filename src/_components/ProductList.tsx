import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadProducts } from '../_helpers/product.thunk'
import Product from './Product'
import { initialState } from '../_constants/state.interface'

type Props = {
    searchString: string,
}

const ProductList = ({ searchString }: Props) => {
    const dispatch = useDispatch()
    const ProductState = useSelector((state:initialState) => state.productsReducer)
    const alertState = useSelector((state:initialState) => state.alertReducer)
    const settings = useSelector((state:initialState) => state.settingsReducer)

    const [isInitialized, setIsInitialized] = useState(false)

    // Load Products
    useEffect(() => {
        if(isInitialized
            || ProductState.products.length)
            return
        dispatch(loadProducts(settings.currentCurrency))
        setIsInitialized(true)
    }, [ProductState, dispatch, isInitialized, settings])

    const filtereUsersWithSearchKey = () => {
        return ProductState.products.filter((product) => {
            return product.name.split(' ').join('').toLowerCase().includes(
                searchString.split(' ').join('').toLowerCase()
            )
        })
    }

    const filteredProducts = filtereUsersWithSearchKey()

    return (
        <div className="p-2">
            {
                filteredProducts.map((product, index) => (
                    <Product product={product} key={index}/>
                ))
            }
            {alertState !== undefined &&
                <div className={alertState.alertClass}>
                    {alertState.alertMessage}
                </div>
            }
            {(!filteredProducts.length && ProductState.products.length)
                ? (<div className="alert alert-danger text-center">
                    Sorry, we couldn't find a product!
                    </div>)
                : ''
            }
        </div>
    )
}

export default ProductList