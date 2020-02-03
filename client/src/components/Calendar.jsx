import React from 'react'
import ReactDOM from 'react-dom';

import Week from './Week.jsx'

import PopDownWrapper from '../styles/BookItForm/PopDownWrapper.js'
import CalendarTable from  '../styles/Calendar/CalendarTable.js'

import IncrementerButton from '../styles/GuestIncrementer/IncrementerButton.js'
import CalendarButton from '../styles/Calendar/CalendarButtton.js'
import WeekHeader from '../styles/Calendar/WeekHeader.js'
import ButtonWrapper from '../styles/Calendar/ButtonWrapper.js'
import CalendarTitleWrapper from '../styles/Calendar/CalendarTitleWrapper.js'

const Calendar = (props) => {

    let weeks = props.currentMonth.calendar.map((days) => {
return (<Week days = {days} changeDaysBooked = {props.changeDaysBooked} currentCalendarClicked = {props.currentCalendarClicked}/>)}
    );





    return (
        <PopDownWrapper>
          <CalendarTitleWrapper>
          <ButtonWrapper left> <CalendarButton onClick = {(event) => {props.handleMonthChangeClick(false, event)}}></CalendarButton> </ButtonWrapper>
          <div style = {{display : "inline-block", position: 'relative', width: '50%' }}>{props.currentMonth.month} {props.currentMonth.year}</div>
          <ButtonWrapper> <CalendarButton onClick = {(event) => {props.handleMonthChangeClick(true, event)}}></CalendarButton> </ButtonWrapper>
          </CalendarTitleWrapper>
          <CalendarTable>
            <tr>
              <WeekHeader>Su</WeekHeader>
              <WeekHeader>Mo</WeekHeader>
              <WeekHeader>Tu</WeekHeader>
              <WeekHeader>We</WeekHeader>
              <WeekHeader>Th</WeekHeader>
              <WeekHeader>Fr</WeekHeader>
              <WeekHeader>Sa</WeekHeader>
            </tr>
              {weeks}
          </CalendarTable>
        </PopDownWrapper>
    )

}

export default Calendar