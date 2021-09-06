import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Card, Image, Button } from 'react-bootstrap'
import RatingStars from '../components/RatingStars'
import products from '../products'

const ProductPage = ({ match }) => {

    const product = products.find(p => p._id === match.params.id)

    return (
        <div>
            <Row>
                <Col md={6}>
                    <Image src={product.image} fluid />
                </Col>
                <Col md={6}>
                    <Card>
                        <Card.Header>
                            <h3>{product.name}</h3>
                        </Card.Header>
                        <Card.Body>
                            <Card.Text>
                                {product.description}
                            </Card.Text>
                            <hr />
                            <div className="d-flex justify-content-between my-2 lead">
                                <RatingStars rating={product.rating} ratings={product.numReviews} />
                                <Card.Text>
                                    <strong>CHF {product.price}</strong>
                                </Card.Text>
                            </div>
                            <Button className="form-control">In den Korb</Button>
                        </Card.Body>
                    </Card>
                
                </Col>
            </Row>
        </div>
    )
}

export default ProductPage
