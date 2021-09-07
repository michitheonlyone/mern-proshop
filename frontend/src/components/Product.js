import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'
import RatingStars from './RatingStars'

const Product = ({ product }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant='top' />
      </Link>
      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as='div'>
          <RatingStars rating={product.rating} ratings={product.numReviews} />
        </Card.Text>

        <Card.Text as='h3'>CHF {product.price}</Card.Text>

        <Button variant='success'>In den Warenkorb</Button>
      </Card.Body>
    </Card>
  )
}

export default Product
