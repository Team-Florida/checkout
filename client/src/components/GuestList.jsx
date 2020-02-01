import React from 'react'
import ReactDOM from 'react-dom';

import GuestIncrementer from './GuestIncrementer.jsx'

import PopDownWrapper from '../styles/BookItForm/PopDownWrapper.js'


class GuestList extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
        <PopDownWrapper>
            <GuestIncrementer guestsBooked = {this.props.guestsBooked} guestsAllowed = {this.props.guestsAllowed} 
            current = 'adult' changeGuests = {this.props.changeGuests}/>
            <GuestIncrementer guestsBooked = {this.props.guestsBooked} guestsAllowed = {this.props.guestsAllowed} 
            current = 'child' changeGuests = {this.props.changeGuests}/>
            <GuestIncrementer guestsBooked = {this.props.guestsBooked} guestsAllowed = {this.props.guestsAllowed} 
            current = 'infant' changeGuests = {this.props.changeGuests}/>
        </PopDownWrapper>
    )}

}

export default GuestList