import React from 'react'
import ReactDOM from 'react-dom';

import Week from './Week.jsx'

import PopDownWrapper from '../styles/BookItForm/PopDownWrapper.js'
// import CalendarTable from  '../styles/Calendar/CalendarTable.js'

import IncrementerButton from '../styles/GuestIncrementer/IncrementerButton.js'

const Calendar = (props) => {

    let weeks = props.currentMonth.calendar.map((days) => {
return (<Week days = {days} changeDaysBooked = {props.changeDaysBooked} currentCalendarClicked = {props.currentCalendarClicked}/>)}
    );





    return (
        <PopDownWrapper>
          <div style = {{display : "inline-block"}}> <IncrementerButton onClick = {(event) => {props.handleMonthChangeClick(false, event)}}></IncrementerButton> </div>
          <div style = {{display : "inline-block"}}>{props.currentMonth.month} {props.currentMonth.year}</div>


          <div style = {{display : "inline-block"}}> <IncrementerButton onClick = {(event) => {props.handleMonthChangeClick(true, event)}}></IncrementerButton> </div>
          <table style = {{borderCollapse: 'collapse'}}>
            <tr>
              <th onClick = {() => {console.log('hello world')}}>Mo</th>
              <th>Tu</th>
              <th>We</th>
              <th>Th</th>
              <th>Fr</th>
              <th>Sa</th>
              <th>Su</th>
            </tr>
              {weeks}
              </table>
        </PopDownWrapper>
    )

}

export default Calendar


// const Calendar = (props) => {
//     console.log(props)

//     let weeks = props.currentMonth.calendar.map((days) => {
//         return (<Week days = {days} />)}
//     );
//     return (
//         <PopDownWrapper>
//             <div style = {{display : "inline-block"}}> this is a test </div>
//             <div style = {{display : "inline-block"}}> this is a test </div>
//             <table style = {{border: '1px solid black', borderCollapse: 'collapse'}}>
//   <tr>
//     <th onClick = {() => {console.log('hello world')}}>Mo</th>
//     <th>Tu</th>
//     <th>We</th>
//     <th>Th</th>
//     <th>Fr</th>
//     <th>Sa</th>
//     <th>Su</th>
//   </tr>
//   <tr>
//     <td style = {{border: '1px solid black', width: '40px', textAlign: 'center'}}>1</td>
//     <td style = {{border: '1px solid black', width: '40px'}}>2</td>
//     {/* <td style = {{border: '1px solid black', width: '40px'}}> <div>3</div></td> */}
//   </tr>
//   <tr>
//     <td>4</td>
//     <td>5</td>
//     <td>6</td>
//   </tr>
//   {weeks}
// </table>
//         </PopDownWrapper>
//     )

// }