import React from 'react'
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import PricePerNightInfoWrapper from '../styles/PricePerNightInfo/PricePerNightInfoWrapper.jsx'

// const PricePerNightInfoWrapper = styled.div`
//     width: 326px;
//     height: 28px;
//     font-size: 14px;
//     line-height: 1.43;
//     color: #484848;
//     `;

// PricePerNightInfoWrapper.displayName = 'test';

const PriceWrapper = styled.span`

`

const PricePerNightInfo = (props) => {
    //console.log(props.pricePerNight)
    return (
        <div>
        <PricePerNightInfoWrapper>
            ${props.pricePerNight}
        </PricePerNightInfoWrapper>
        <div></div>
        </div>
    )

}

export default PricePerNightInfo