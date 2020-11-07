import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { initialState } from '../_constants/state.interface'
import { loadCurrencies, updateCurrentCurrency } from '../_helpers/settings.thunk'

const Settings = () => {
    const dispatch = useDispatch()
    const settings = useSelector((state: initialState) => state.settingsReducer)
    const [isInitialized, setIsInitialized] = useState(false)

    // Load Currencies
    useEffect(() => {
        if(isInitialized
            || settings.currencies.length)
            return
        dispatch(loadCurrencies())
        setIsInitialized(true)
    }, [dispatch, isInitialized, settings])

    const findCurrency = (code: string) => {
        return settings.currencies.find((currency) => currency.code === code)
    }
    return (
        <div className="p-2">
            <h2 className="text-center">Settings</h2>
            <div className="settings-container">
                <Row className="text-center">
                    <Col xs="12" sm="3">Currencies: </Col>
                    <Col xs="12" sm="9">
                        <select
                            name="currency"
                            id="currency"
                            className="currency-select"
                            value={settings.currentCurrency.code}
                            onChange={(e) => dispatch(updateCurrentCurrency(findCurrency(e.target.value)))}
                        >
                            {
                                settings.currencies.map((currency, index) => (
                                    <option
                                        value={currency.code}
                                        key={index}
                                    >
                                        {currency.name + "(" + currency.code + ")"}
                                    </option>
                                ))
                            }
                        </select>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Settings