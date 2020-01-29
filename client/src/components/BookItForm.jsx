import React from 'react'
import ReactDOM from 'react-dom';

import Calendar from './Calendar.jsx'

import BookItFormWrapper from '../styles/BookItForm/BookItFormWrapper.js'
import DateField from '../styles/BookItForm/DateField.js'
import DateArrow from '../styles/BookItForm/DateArrow.js'
import FieldLabel from '../styles/BookItForm/FieldLabel'
import BookItButton from '../styles/BookItForm/BookItButton.js'



class BookItForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            calendarClicked: false,
            currentCalendarClicked: null
        }
        this.renderCalendar = this.renderCalendar.bind(this)
    }

    renderCalendar() {
        if (this.state.calendarClicked) {
            // return <div style = {{position: 'absolute', top: "200px", height: '308px', width: '332px'}}>the calendar has been clicked</div>
            // return <div style = {{display: "inline-block", position: 'relative', height: 'auto', width: '326px', zIndex: '1', backgroundColor: 'white', border: '1px solid #e4e4e4'}}>the calendar has been clicked<div>test</div></div>
            return <Calendar />
        }
        return <div></div>
    }
    



    render() {
        return (
        <BookItFormWrapper>
            <FieldLabel>Dates</FieldLabel>
            <DateField readOnly onClick = {(event) => {
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
            <BookItButton onClick = {() => (console.log('test'))}>
                <div style = {{float: 'left'}}>1 Guest</div>
                <div style = {{float: 'right'}}>^</div>
            </BookItButton>
            {this.renderCalendar()}
            <BookItButton primary><div>Checkout</div></BookItButton>
        </BookItFormWrapper>
        )
    }
}

export default BookItForm