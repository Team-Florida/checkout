import React from 'react'
import ReactDOM from 'react-dom';

import BookingSummaryItemWrapper from '../styles/BookingSummaryItem/BookingSummaryItemWrapper.js'
import BookingItem from '../styles/BookingSummaryItem/BookingItem.js'

const BookingSummaryItem = (props) => {
    return (
        <BookingSummaryItemWrapper>
    <BookingItem>{props.summaryItem.text}</BookingItem>
    <BookingItem price>${Number.parseFloat(props.summaryItem.cost).toFixed(2)}</BookingItem>
    {/* <div style = {{display: 'inline-block', float: 'right'}}>{Number.parseFloat(props.summaryItem.cost).toFixed(2)}</div> */}
        </BookingSummaryItemWrapper>
    )

}

export default BookingSummaryItem