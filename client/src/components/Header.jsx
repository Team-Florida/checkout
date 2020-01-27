import React from 'react'
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import PricePerNightInfo from './PricePerNightInfo.jsx';

const HeaderWrapper = styled.div`
    font-size: 14px;
    line-height: 1.43;
    color: #484848;
    `;

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