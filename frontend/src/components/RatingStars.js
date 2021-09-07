import React from 'react'
import PropTypes from 'prop-types'

const RatingStars = ({ rating, ratings, color }) => {
  return (
    <div className='star-rating'>
      <span>
        <i
          style={{ color }}
          className={
            rating >= 1
              ? 'bi bi-star-fill'
              : rating >= 0.5
              ? 'bi bi-star-half'
              : 'bi bi-star'
          }
        ></i>
        <i
          style={{ color }}
          className={
            rating >= 2
              ? 'bi bi-star-fill'
              : rating >= 1.5
              ? 'bi bi-star-half'
              : 'bi bi-star'
          }
        ></i>
        <i
          style={{ color }}
          className={
            rating >= 3
              ? 'bi bi-star-fill'
              : rating >= 2.5
              ? 'bi bi-star-half'
              : 'bi bi-star'
          }
        ></i>
        <i
          style={{ color }}
          className={
            rating >= 4
              ? 'bi bi-star-fill'
              : rating >= 3.5
              ? 'bi bi-star-half'
              : 'bi bi-star'
          }
        ></i>
        <i
          style={{ color }}
          className={
            rating >= 5
              ? 'bi bi-star-fill'
              : rating >= 4.5
              ? 'bi bi-star-half'
              : 'bi bi-star'
          }
        ></i>
      </span>
      &nbsp;<small>({ratings})</small>
    </div>
  )
}

RatingStars.defaultProps = {
  color: '#f8e825',
}

RatingStars.propTypes = {
  rating: PropTypes.number.isRequired,
  ratings: PropTypes.number.isRequired,
  color: PropTypes.string,
}

export default RatingStars
