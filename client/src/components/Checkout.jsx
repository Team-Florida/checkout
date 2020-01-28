import React from 'react'
import ReactDOM from 'react-dom';
import axios from 'axios';
import styled from 'styled-components';

import Header from './Header.jsx'
import CheckoutWrapper from '../styles/Checkout/CheckoutWrapper.js'


class Checkout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name : '',
            bookedDates: {},
            priceRelatedToSumOfAdultAndChild: {},
            numberOfReviews: 0,
            starReviewTotal: 0, 
            views : {}, 
            guestsAllowed: {},

            guestsBooked: {
                adult: 0, 
                child: 0, 
                infant: 0
            }
        }

        this.getHouseInfo = this.getHouseInfo.bind(this)
        this.nightlyPrice = this.nightlyPrice.bind(this)

    }

    nightlyPrice() {
        return this.state.priceRelatedToSumOfAdultAndChild[this.state.guestsBooked.adult + this.state.guestsBooked.child]
    }

    componentDidMount() {
        this.getHouseInfo()
    }

    getHouseInfo() {
        axios.get('/house')
            .then((response) => {
                this.setState(response.data)
            });

    }

    render() {
        return (
            <CheckoutWrapper>
              <Header  pricePerNight = {this.nightlyPrice()} numberOfReviews = {this.state.numberOfReviews} starReviewTotal = {this.state.starReviewTotal}/>
              <form id = "bookItForm"></form>
              <div id = "footer">this is a footer</div>
            </CheckoutWrapper>
        )
    }
}

export default Checkout