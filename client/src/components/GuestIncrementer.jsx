import React from 'react'
import ReactDOM from 'react-dom';

import FooterWrapper from '../styles/Footer/FooterWrapper.js'

const GuestIncrementer = (props) => {
    const handleClick = function() {
        props.guestsBooked[props.current] += 1
        props.changeGuests(props.guestsBooked)
        
    }
    return (
        <div onClick = {handleClick}>{props.current}</div>
    )

}

export default GuestIncrementer