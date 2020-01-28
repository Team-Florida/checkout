import React from 'react'
import ReactDOM from 'react-dom';
import PricePerNightInfoWrapper from '../styles/PricePerNightInfo/PricePerNightInfoWrapper.js'
import Price from '../styles/PricePerNightInfo/Price.js'
import PriceText from '../styles/PricePerNightInfo/PriceText.js'

const PricePerNightInfo = (props) => (
        <PricePerNightInfoWrapper>
          <Price>${props.pricePerNight}</Price>
          <PriceText> per night</PriceText>
        </PricePerNightInfoWrapper>
    )

export default PricePerNightInfo