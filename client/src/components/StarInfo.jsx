import React from 'react'
import ReactDOM from 'react-dom';

import StarInfoWrapper from '../styles/StarInfo/StarInfoWrapper.js'
import Stars from '../styles/StarInfo/Stars.js'
import Reviews from '../styles/StarInfo/Reviews.js'


const StarInfo = (props) => (
        <StarInfoWrapper>
          {/* <Star /> Placeholder for Airbnb Star */}
          <Stars>{Number.parseFloat(props.starReviewTotal).toFixed(2)}</Stars>
          <Reviews>  ({props.numberOfReviews} reviews)</Reviews>
        </StarInfoWrapper>
    )

export default StarInfo