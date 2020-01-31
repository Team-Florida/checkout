import React from 'react'
import ReactDOM from 'react-dom';

import Day from '../styles/Week/Day.js'

const Week = (props) => {
    let day = props.days.map((day) => {
        if (day === null) {
            return <td></td>
        } else if (day.isBooked === true) {
            return (<Day isBooked>{day.dayOfMonth}</Day>)
        }
        return (<Day onClick = {() => {
            const bookingInfo = {}
            bookingInfo[props.currentCalendarClicked] = day.date
            props.changeDaysBooked(bookingInfo)}}>{day.dayOfMonth}</Day>)}
    );
    return (
        <tr>{day}</tr>
    )

}

export default Week