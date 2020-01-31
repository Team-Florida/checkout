import React from 'react'
import ReactDOM from 'react-dom';

import BookingSummaryItem from './BookingSummaryItem.jsx'

import BookingSummaryListWrapper from '../styles/BookingSummaryList/BookingSummaryListWrapper.js'


const BookingSummaryList = (props) => {
    const SummaryListItems = function() {
        const SummaryList = []
        const nightsSummaryText = '$' + props.pricePerNight + ' x ' + props.daysRenting + ' nights'
        const SummaryText = [nightsSummaryText, 'Cleaning Fee', 'Service Fee', 'Total']
        const nightsSummaryCost = props.pricePerNight * props.daysRenting
        const SummaryCost = [nightsSummaryCost, 13.37, 133.7, 13.37 + 133.7 + nightsSummaryCost]
        for (let i = 0; i < SummaryCost.length; i++) {
            let bookingDetails = {}
            bookingDetails.text = SummaryText[i]
            bookingDetails.cost = SummaryCost[i]
            SummaryList.push(bookingDetails)
        }
        return SummaryList
    }

    const summaryItem = SummaryListItems().map((summaryItem) => {
        return (<BookingSummaryItem summaryItem = {summaryItem}/>)

    })
    console.log(props)
    return (
    <BookingSummaryListWrapper>
        {summaryItem}
    </BookingSummaryListWrapper>
    )

}

export default BookingSummaryList