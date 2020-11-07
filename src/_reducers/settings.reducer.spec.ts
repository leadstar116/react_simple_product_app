import settingsReducer from './settings.reducer'
import { CURRENCIES_LOADED_SUCCESSFULLY, CURRENCY_UPDATED } from '../_actions/settings.actions';
import { Currency } from '../_constants/settings.interface';

const testCurrency = {
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

const newCurrency = {
    name: 'Canadian Dollar',
    symbol: 'CA$',
    symbolNative: '$',
    decimalDigits: 2,
    rounding: 0,
    code: 'CAD',
    namePlural: 'Canadian dollars',
    countries: ['CA'],
} as Currency

const initialState = {
    currentCurrency: testCurrency,
    currencies: [] as Currency[]
}

describe('settings reducer test', () => {
    test('CURRENCY_UPDATED: should update with new currency', () => {
        const action = {
            type: CURRENCY_UPDATED,
            payload: newCurrency
        }
        const expectedState = {
            currentCurrency: newCurrency,
            currencies: []
        }
        const newState = settingsReducer(initialState, action)

        expect(newState).toEqual(expectedState)
    })

    test('CURRENCIES_LOADED_SUCCESSFULLY: should set loaded currencies', () => {
        const currencies = [ newCurrency ]
        const expectedState = {
            currentCurrency: testCurrency,
            currencies: currencies,
        }
        const action = {
            type: CURRENCIES_LOADED_SUCCESSFULLY,
            payload: { currencies }
        }
        const newState = settingsReducer(initialState, action)
        expect(newState).toEqual(expectedState)
    })
})