import configureStore from 'redux-mock-store'
import React from 'react'
import { Provider } from 'react-redux'
import renderer, { ReactTestRenderer } from 'react-test-renderer'
import Settings from './Settings'
import { Currency } from '../_constants/settings.interface'

const mockStore = configureStore()

const initialState = {
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

describe('Settings Component', () => {
    let store
    let component: ReactTestRenderer

    store = mockStore({
        settingsReducer: initialState
    })

    store.dispatch = jest.fn()

    component = renderer.create(
        <Provider store={store}>
            <Settings />
        </Provider>
    )

    it('should render with given state from Redux store', () => {
        expect(component.toJSON()).toMatchSnapshot()
    })
})