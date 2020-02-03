import React from 'react'
import ReactDOM from 'react-dom';

import FooterWrapper from '../styles/Footer/FooterWrapper.js'

import IncrementerButton from '../styles/GuestIncrementer/IncrementerButton.js'
import GuestIncrementerWrapper from '../styles/GuestIncrementer/GuestIncrementerWrapper.js'
import GuestTypeWrapper from '../styles/GuestIncrementer/GuestTypeWrapper.js'
import GuestNumberWrapper from '../styles/GuestIncrementer/GuestNumberWrapper.js'

const GuestIncrementer = (props) => {
    const handleClick = function(isSubtracting, event) {
        
        if (props.guestsBooked[props.current] < props.guestsAllowed[props.current] && isSubtracting === false) {
            props.guestsBooked[props.current] += 1
            props.changeGuests(props.guestsBooked)
        } else if (props.guestsBooked[props.current] > 0 && isSubtracting === true) {
            props.guestsBooked[props.current] -= 1
            props.changeGuests(props.guestsBooked)
        }
        event.preventDefault()
    }

    const GuestTypeConverter = function(current) {
        const converter = {
            adult: 'Adults',
            child: 'Children',
            infant: 'Infants'
        }
        return converter[current]
    }

    const isButtonFadded = function(isSubtracting) {
        if (props.guestsBooked[props.current] === props.guestsAllowed[props.current] && isSubtracting === false) {
            return true
        } else if (props.guestsBooked[props.current] === 0 && isSubtracting === true) {
            return true
        }
        return false
    }
    return (
        <GuestIncrementerWrapper>
            <GuestTypeWrapper>{GuestTypeConverter(props.current)}</GuestTypeWrapper>
            
            <div style = {{display : "inline-block"}}> <IncrementerButton isFaded = {isButtonFadded(true)} onClick = {(event) => {handleClick(true, event)}}></IncrementerButton> </div>
            
            <GuestNumberWrapper>{props.guestsBooked[props.current]}</GuestNumberWrapper>
            <div style = {{display : "inline-block"}}> <IncrementerButton isFaded = {isButtonFadded(false)} onClick = {(event) => {handleClick(false, event)}}></IncrementerButton> </div>
        </GuestIncrementerWrapper>
        // <div onClick = {() => {handleClick(true)}}>{props.current}</div>
    )

}

export default GuestIncrementer