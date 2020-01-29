import React from 'react'
import ReactDOM from 'react-dom';

import FooterWrapper from '../styles/Footer/FooterWrapper.js'

const Footer = (props) => {
    return (
        <FooterWrapper>
            <div><b>This place has been getting a lot of attention</b></div>
            {/* <div>This place has been viewed 100+ times over the last week</div> */}
        </FooterWrapper>
    )

}

export default Footer