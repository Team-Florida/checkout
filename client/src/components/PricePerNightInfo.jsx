import React from 'react'
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const PricePerNightInfoWrapper = styled.div`
    width: 326px;
    height: 28px;
    font-size: 14px;
    line-height: 1.43;
    color: #484848;
    `;

const PriceWrapper = styled.span`

`

const PricePerNightInfo = (props) => {
    //console.log(props.pricePerNight)
    return (
        <PricePerNightInfoWrapper>
            {props.pricePerNight}

        </PricePerNightInfoWrapper>
    )

}

export default PricePerNightInfo