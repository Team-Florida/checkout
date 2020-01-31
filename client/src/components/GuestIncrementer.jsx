import React from 'react'
import ReactDOM from 'react-dom';

import FooterWrapper from '../styles/Footer/FooterWrapper.js'

import IncrementerButton from '../styles/GuestIncrementer/IncrementerButton.js'
import GuestIncrementerWrapper from '../styles/GuestIncrementer/GuestIncrementerWrapper.js'

const GuestIncrementer = (props) => {
    const handleClick = function(isAdding, event) {
        
        if (props.guestsBooked[props.current] < props.guestsAllowed[props.current] && isAdding === false) {
            props.guestsBooked[props.current] += 1
            props.changeGuests(props.guestsBooked)
        } else if (props.guestsBooked[props.current] > 0 && isAdding === true) {
            props.guestsBooked[props.current] -= 1
            props.changeGuests(props.guestsBooked)
        }
        event.preventDefault()
    }
    return (
        <GuestIncrementerWrapper>
            {props.current}
            <div style = {{display : "inline-block"}}> <IncrementerButton onClick = {(event) => {handleClick(true, event)}}></IncrementerButton> </div>
            
            {props.guestsBooked[props.current]}
            <div style = {{display : "inline-block"}}> <IncrementerButton onClick = {(event) => {handleClick(false, event)}}></IncrementerButton> </div>
        </GuestIncrementerWrapper>
        // <div onClick = {() => {handleClick(true)}}>{props.current}</div>
    )

}

export default GuestIncrementer