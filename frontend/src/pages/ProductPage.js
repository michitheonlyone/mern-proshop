import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Card, Image, Button } from 'react-bootstrap'
import Message from '../components/Message'
import Loader from '../components/Loader'
import RatingStars from '../components/RatingStars'
import { listProductDetails } from '../actions/productActions'

const ProductPage = ({ match }) => {
  const dispatch = useDispatch()

  const productDetails = useSelector((state) => state.productDetails)
  const { loading, error, product } = productDetails

  useEffect(() => {
    dispatch(listProductDetails(match.params.id))
  }, [dispatch, match])

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
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
                <Card.Text>{product.description}</Card.Text>
                <hr />
                <div className='d-flex justify-content-between my-2 lead'>
                  <RatingStars
                    rating={product.rating}
                    ratings={product.numReviews}
                  />
                  <Card.Text>
                    <strong>CHF {product.price}</strong>
                  </Card.Text>
                </div>
                <Button className='form-control'>In den Korb</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}
    </>
  )
}

export default ProductPage
