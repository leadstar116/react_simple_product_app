import { PRODUCTS_LOADED_SUCCESSFULLY, CLEAR_PRODUCTS } from "../_actions/products.actions";
import { IProduct } from "../_constants/product.interface"

const productsState = {
    products: [] as IProduct[],
}

const productsReducer = (state = productsState, action: any) => {
    const {type, payload} = action

    switch (type) {
        case PRODUCTS_LOADED_SUCCESSFULLY:
            return {
                ...state,
                products: payload.products
            }
        case CLEAR_PRODUCTS:
            return {
                ...state,
                products: []
            }
        default:
            break;
    }
    return state
}

export default productsReducer