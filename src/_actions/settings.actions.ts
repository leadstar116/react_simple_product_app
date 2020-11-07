import { Currency } from "../_constants/settings.interface"

export const CURRENCY_UPDATED = "CURRENCY_UPDATED"
export const updateCurrency = (newCurrency: Currency) => ({
    type: CURRENCY_UPDATED,
    payload: newCurrency
})

export const CURRENCIES_LOADED_SUCCESSFULLY = "CURRENCIES_LOADED_SUCCESSFULLY"
export const currenciesLoadedSuccessfully = (currencies: Array<Currency>) => ({
    type: CURRENCIES_LOADED_SUCCESSFULLY,
    payload: { currencies }
})