import React, { useState } from 'react'
import { IProduct } from '../_constants/product.interface'
import { Row, Col } from 'react-bootstrap'
import DetailsModal from './DetailsModal'
import { initialState } from '../_constants/state.interface'
import { useSelector } from 'react-redux'

type Props = {
    product: IProduct
}

const Product = (props: Props) => {
    const settings = useSelector((state:initialState) => state.settingsReducer)
    const [showDetail, setShowDetail] = useState(false);

    const handleClick = () => {
        setShowDetail(true)
    }
    return (
        <>
            <Row className="m-1 rounded border align-items-center text-center p-1 user" onClick={handleClick}>
                <Col xs={12} sm={4}><span>{ props.product.name }</span></Col>
                <Col xs={12} sm={4}><span>{ settings.currentCurrency.symbol + " " + props.product.price }</span></Col>
                <Col xs={12} sm={4}>
                    {props.product.photos.length &&
                        <img src={props.product.photos[0]} className="img-thumbnail small-image" />
                    }
                </Col>
            </Row>
            <DetailsModal
                show={showDetail}
                onHide={() => setShowDetail(false)}
                product={props.product}
            />
        </>
    )
}

export default Product