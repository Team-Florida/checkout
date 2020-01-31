import React from 'react'
import ReactDOM from 'react-dom';
import moment from 'moment'

import Calendar from './Calendar.jsx'
import GuestList from './GuestList.jsx'

import BookItFormWrapper from '../styles/BookItForm/BookItFormWrapper.js'
import DateField from '../styles/BookItForm/DateField.js'
import DateArrow from '../styles/BookItForm/DateArrow.js'
import FieldLabel from '../styles/BookItForm/FieldLabel'
import BookItButton from '../styles/BookItForm/BookItButton.js'
import ButtonSubtext from '../styles/BookItForm/ButtonSubtext.js'
import CheckoutButtonWrapper from '../styles/BookItForm/CheckoutButtonWrapper.js'
import { flattenCalendar } from '../../../calendar/helpers.js';



class BookItForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            calendarClicked: false,
            guestListClicked: false,
            currentCalendarClicked: null,
            currentMonth: moment().month()
        }
        this.renderCalendar = this.renderCalendar.bind(this)
        this.renderGuestList = this.renderGuestList.bind(this)
        this.handleGuestListClick = this.handleGuestListClick.bind(this)
        this.handleMonthChangeClick = this.handleMonthChangeClick.bind(this)
    }

    renderCalendar() {
        console.log(this.state.currentCalendarClicked)
        if (this.state.calendarClicked) {
            // return <div style = {{position: 'absolute', top: "200px", height: '308px', width: '332px'}}>the calendar has been clicked</div>
            // return <div style = {{display: "inline-block", position: 'relative', height: 'auto', width: '326px', zIndex: '1', backgroundColor: 'white', border: '1px solid #e4e4e4'}}>the calendar has been clicked<div>test</div></div>
            return <Calendar currentMonth = {this.props.flatCalendar[this.state.currentMonth]} 
            handleMonthChangeClick = {this.handleMonthChangeClick} changeDaysBooked = {this.props.changeDaysBooked} currentCalendarClicked = {this.state.currentCalendarClicked}/>
            // return <Calendar currentMonth = {{calendar: [[null, null,1,2,3,4,5],[6,7,8,9,10,11,12],[13,14,15,16,17,18,19], [20,21,22,23,24,25,26],[27,28,29]], month: 'Janurary', year: '2020'}}/>
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

    handleMonthChangeClick(isAdding, event) {
        event.preventDefault()
        if (isAdding) {
            if (this.props.flatCalendar[this.state.currentMonth + 1]) {
                this.setState((state, props) => {
                    state.currentMonth += 1
                    return state
                })
            } 
        
        } else {
            if (this.props.flatCalendar[this.state.currentMonth - 1]) {
                this.setState((state, props) => {
                    state.currentMonth -= 1
                    return state

                })
            }
        }
    }



    render() {
        return (
        <BookItFormWrapper>
            <FieldLabel>Dates</FieldLabel>
            <DateField name = 'start' value = {this.props.userInfo.daysBooked.start} placeholder = "Check-in" readOnly onClick = {(event) => {
                this.setState({
                calendarClicked: !this.state.calendarClicked,
                currentCalendarClicked: event.target.name
            })}}/>
            <DateArrow />
            <DateField name = 'end' value = {this.props.userInfo.daysBooked.end} placeholder = "Checkout" readOnly onClick = {(event) => {this.setState({
                calendarClicked: !this.state.calendarClicked,
                currentCalendarClicked: event.target.name
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
              <BookItButton primary><div style = {{color: 'white'}}>Checkout</div></BookItButton>
              <ButtonSubtext>You Won't be Charged Yet</ButtonSubtext>
            </CheckoutButtonWrapper>
        </BookItFormWrapper>
        )
    }
}

export default BookItForm