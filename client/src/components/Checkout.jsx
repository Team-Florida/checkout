import React from 'react'
import ReactDOM from 'react-dom';
import axios from 'axios';
import styled from 'styled-components';

import Header from './Header.jsx'

const Wrapper = styled.div`
    display: block;
    color: '#484848';
    border: 1px solid #e4e4e4;
    border-width: 1px;
    width: 326px;
    height: 426px;
    padding-left: 24px;
    padding-right: 24px;
    padding-top: 16px;
    padding-bottom: 24px;
    `;

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
            <Wrapper>
              <Header  pricePerNight = {this.nightlyPrice()} numberOfReviews = {this.state.numberOfReviews} starReviewTotal = {this.state.starReviewTotal}/>
              <form id = "bookItForm"></form>
              <div id = "footer">this is a footer</div>
            </Wrapper>
        )
    }
}

export default Checkout