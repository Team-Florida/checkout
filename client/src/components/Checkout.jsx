import React from 'react'
import ReactDOM from 'react-dom';
import axios from 'axios';
import styled from 'styled-components';

import Header from './Header.jsx'
import BookItForm from './BookItForm.jsx'
import Footer from './Footer.jsx'
import CheckoutWrapper from '../styles/Checkout/CheckoutWrapper.js'



class Checkout extends React.Component {
    constructor(props) {
        super(props)
        console.log(this.refs)
        this.state = {
            name : '',
            bookedDates: {},
            priceRelatedToSumOfAdultAndChild: {},
            numberOfReviews: 0,
            starReviewTotal: 0, 
            views : {}, 
            guestsAllowed: {},

            userInfo: {
                guestsBooked: {
                    adult: 1, 
                    child: 0, 
                    infant: 0
                },
                daysBooked: {
                    start: "02/01/20",
                    end: "02/02/20"
                }

            }

            
        }

        this.getHouseInfo = this.getHouseInfo.bind(this)
        this.nightlyPrice = this.nightlyPrice.bind(this)
        this.changeGuests = this.changeGuests.bind(this)

    }

    changeGuests(newGuestBooked) {
        this.setState((state, props) => {
            state.userInfo.guestsBooked = newGuestBooked
            return state
        })


    }

    nightlyPrice() {
        return this.state.priceRelatedToSumOfAdultAndChild[this.state.userInfo.guestsBooked.adult + this.state.userInfo.guestsBooked.child]
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
              <BookItForm userInfo = {this.state.userInfo} guestsAllowed = {this.state.guestsAllowed} changeGuests = {this.changeGuests}/>
              <Footer />
            </CheckoutWrapper>
        )
    }
}

export default Checkout