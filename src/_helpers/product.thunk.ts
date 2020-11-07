import { ThunkDispatch } from 'redux-thunk'
import { Action } from 'redux'
import { productLoadedSuccessfully } from '../_actions/products.actions';
import { alertClear, alertFailure, alertLoading } from '../_actions/alert.actions';
import { Currency } from '../_constants/settings.interface';

type MyRootState = {};
type MyExtraArg = undefined;
type MyThunkDispatch = ThunkDispatch<MyRootState, MyExtraArg, Action>;

export const loadProducts = (currency: Currency) => async (dispatch: MyThunkDispatch) => {
    try {
        dispatch(alertLoading('Loading...'))
        let response = await fetch(`http://localhost:3001/products?currency=${currency.code}`)
        const result = await response.json()

        dispatch(productLoadedSuccessfully(result))
        dispatch(alertClear())
    } catch(e) {
        dispatch(alertFailure(e.toString()))
    }
}
