import React from 'react'
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import PricePerNightInfo from './PricePerNightInfo.jsx';
import HeaderWrapper from '../styles/Header/HeaderWrapper.jsx'


const Header = (props) => {
    console.log(props)
    return (
        <HeaderWrapper>
            <PricePerNightInfo pricePerNight = {props.pricePerNight}/>
            <div>This is star info </div>
        </HeaderWrapper>
    )

}

export default Header