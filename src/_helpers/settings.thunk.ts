import { ThunkDispatch } from 'redux-thunk'
import { Action } from 'redux'
import { alertFailure } from '../_actions/alert.actions';
import { updateCurrency, currenciesLoadedSuccessfully } from '../_actions/settings.actions';
import { clearProducts } from '../_actions/products.actions';
import { loadProducts } from './product.thunk';
import { Currency } from '../_constants/settings.interface';

type MyRootState = {};
type MyExtraArg = undefined;
type MyThunkDispatch = ThunkDispatch<MyRootState, MyExtraArg, Action>;

const defaultCurrency = {
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
} as Currency

export const updateCurrentCurrency = (currency = defaultCurrency) => async (dispatch: MyThunkDispatch) => {
    try {
        dispatch(updateCurrency(currency))
        dispatch(clearProducts())
        dispatch(loadProducts(currency))
    } catch(e) {
        dispatch(alertFailure(e.toString()))
    }
}

export const loadCurrencies = () => async (dispatch: MyThunkDispatch) => {
    try {
        let response = await fetch(`https://dry-forest-53601.herokuapp.com/currencies`)
        const result = await response.json()

        dispatch(currenciesLoadedSuccessfully(result))
    } catch(e) {
        dispatch(alertFailure(e.toString()))
    }
}