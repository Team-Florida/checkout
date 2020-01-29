import React from 'react'
import ReactDOM from 'react-dom';

import Calendar from './Calendar.jsx'
import GuestList from './GuestList.jsx'

import BookItFormWrapper from '../styles/BookItForm/BookItFormWrapper.js'
import DateField from '../styles/BookItForm/DateField.js'
import DateArrow from '../styles/BookItForm/DateArrow.js'
import FieldLabel from '../styles/BookItForm/FieldLabel'
import BookItButton from '../styles/BookItForm/BookItButton.js'
import ButtonSubtext from '../styles/BookItForm/ButtonSubtext.js'
import CheckoutButtonWrapper from '../styles/BookItForm/CheckoutButtonWrapper.js'



class BookItForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            calendarClicked: false,
            guestListClicked: false,
            currentCalendarClicked: null
        }
        this.renderCalendar = this.renderCalendar.bind(this)
        this.renderGuestList = this.renderGuestList.bind(this)
        this.handleGuestListClick = this.handleGuestListClick.bind(this)
    }

    renderCalendar() {
        if (this.state.calendarClicked) {
            // return <div style = {{position: 'absolute', top: "200px", height: '308px', width: '332px'}}>the calendar has been clicked</div>
            // return <div style = {{display: "inline-block", position: 'relative', height: 'auto', width: '326px', zIndex: '1', backgroundColor: 'white', border: '1px solid #e4e4e4'}}>the calendar has been clicked<div>test</div></div>
            return <Calendar />
        }
        return <div></div>
    }
    
    renderGuestList() {
        if (this.state.guestListClicked) {
            return <GuestList guestsBooked = {Object.create(this.props.userInfo.guestsBooked)} guestsAllowed = {this.props.guestsAllowed} changeGuests = {this.props.changeGuests}/>
        }
        return <div></div>
    }

    handleGuestListClick(event) {
        event.preventDefault()
        this.setState({
            guestListClicked: !this.state.guestListClicked
        });
    }



    render() {
        return (
        <BookItFormWrapper>
            <FieldLabel>Dates</FieldLabel>
            <DateField readOnly onClick = {(event) => {
                console.log(event.target)
                this.setState({
                calendarClicked: !this.state.calendarClicked
            })}}/>
            <DateArrow />
            <DateField readOnly onClick = {(event) => {this.setState({
                calendarClicked: !this.state.calendarClicked
            })}}/>
            {/* <div>test</div> */}
            {/* <div>test</div> */}
            {this.renderCalendar()}
            <FieldLabel>Guests</FieldLabel>
            <BookItButton onClick = {this.handleGuestListClick}>
                <div style = {{float: 'left'}}>{this.props.userInfo.guestsBooked.adult + this.props.userInfo.guestsBooked.child} Guests,</div>
                <div style = {{float: 'left'}}>{this.props.userInfo.guestsBooked.infant} Infant</div>
                <div style = {{float: 'right'}}>^</div>
            </BookItButton>
            {this.renderGuestList()}
            <CheckoutButtonWrapper>
              <BookItButton primary><div>Checkout</div></BookItButton>
              <ButtonSubtext>You Won't be Charged Yet</ButtonSubtext>
            </CheckoutButtonWrapper>
        </BookItFormWrapper>
        )
    }
}

export default BookItForm