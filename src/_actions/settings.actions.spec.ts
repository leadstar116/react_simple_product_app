import { Currency } from '../_constants/settings.interface'
import * as settingsAction from './settings.actions'

const currency = {
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

describe('update currency action', () => {
    it('should return new currency', () => {
        const expectedAction = {
            type: settingsAction.CURRENCY_UPDATED,
            payload: currency
        }
        expect(settingsAction.updateCurrency(currency)).toEqual(expectedAction)
    })
})

describe('loaded currencies successfully action test', () => {
    it('should return loaded currencies', () => {
        const currencies = [
            currency
        ] as Currency[]
        const expectedAction = {
            type: settingsAction.CURRENCIES_LOADED_SUCCESSFULLY,
            payload: { currencies }
        }
        expect(settingsAction.currenciesLoadedSuccessfully(currencies)).toEqual(expectedAction)
    })
})