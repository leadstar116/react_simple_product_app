import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { IProduct } from '../_constants/product.interface'
import { initialState } from '../_constants/state.interface'

type Props = {
    show: boolean,
    onHide: () => void,
    product: IProduct
}

const DetailsModal = (props: Props) => {
    const settings = useSelector((state:initialState) => state.settingsReducer)

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Details for { props.product.name }
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>
                    <b>ID: </b>
                    { props.product.id }
                </p>
                <p>
                    <b>Name: </b>
                    { props.product.name }
                </p>
                <p>
                    <b>Price({ settings.currentCurrency.name }): </b>
                    { settings.currentCurrency.symbol + " " + props.product.price }
                </p>
                <p>
                    <b>Price(USD): </b>
                    { props.product.priceUSD }
                </p>
                <b>Images: </b>
                <div id="imageShow" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        {
                            props.product.photos.map((photo, index) => (
                                <li
                                    data-target="#imageShow"
                                    data-slide-to={index}
                                    className={index == 0? "active":''}
                                    key={index}
                                >
                                </li>
                            ))
                        }
                    </ol>
                    <div className="carousel-inner">
                        {
                            props.product.photos.map((photo, index) => (
                                <div className={index == 0? "carousel-item active" : "carousel-item"} key={index}>
                                    <img className="d-block w-100" src={photo} key={index} />
                                </div>
                            ))
                        }

                        <a className="carousel-control-prev" href="#imageShow" role="button" data-slide="prev">
                            <div className="bg-dark carousel-button">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </div>
                        </a>
                        <a className="carousel-control-next" href="#imageShow" role="button" data-slide="next">
                            <div className="bg-dark carousel-button">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </div>
                        </a>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default DetailsModal