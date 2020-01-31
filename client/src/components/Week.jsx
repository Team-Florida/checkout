import React from 'react'
import ReactDOM from 'react-dom';

import Day from '../styles/Week/Day.js'

const Week = (props) => {
    debugger
    console.log('week props')
    console.log(props)

    let day = props.days.map((day) => {
        if (day === null) {
            return <td></td>
        } else if (day.isBooked === true) {
            return (<Day isBooked>{day.dayOfMonth}</Day>)
        }
        return (<Day>{day.dayOfMonth}</Day>)}
    );
    return (
        <tr>{day}</tr>
    )

}

export default Week