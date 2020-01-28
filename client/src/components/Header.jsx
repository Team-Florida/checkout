import React from 'react'
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import PricePerNightInfo from './PricePerNightInfo.jsx';
import StarInfo from './StarInfo.jsx'
import HeaderWrapper from '../styles/Header/HeaderWrapper.js'




const Header = (props) => {
    console.log(props)
    return (
        <HeaderWrapper>
            <PricePerNightInfo pricePerNight = {props.pricePerNight}/>
            <StarInfo starReviewTotal = {props.starReviewTotal} numberOfReviews = {props.numberOfReviews} />
        </HeaderWrapper>
    )

}

export default Header