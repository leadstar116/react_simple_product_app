import { CURRENCIES_LOADED_SUCCESSFULLY, CURRENCY_UPDATED } from '../_actions/settings.actions'
import { Currency } from '../_constants/settings.interface';

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

const settingsReducer = (state = settingsState, action: any) => {
    const { type, payload } = action

    switch (type) {
        case CURRENCIES_LOADED_SUCCESSFULLY:
            return {
                ...state,
                currencies: payload.currencies,
            }
        case CURRENCY_UPDATED:
            return {
                ...state,
                currentCurrency: payload,
            }
        default:
            break;
    }
    return state
}

export default settingsReducer