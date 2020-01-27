import React from 'react'
import ReactDOM from 'react-dom';
import axios from 'axios';
import styled from 'styled-components';

const Wrapper = styled.div`
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
//
//   padding-left: 24px !important;
//   padding-right: 24px !important;
//   margin: 0px !important;
//   border: 1px solid #e4e4e4 !important;
//   background-color: #ffffff 326 by 456

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
            guestsAllowed: {}
        }

        this.getHouseInfo = this.getHouseInfo.bind(this)

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
              <div id = "header">this is the header</div>
              <form id = "bookItForm"></form>
              <div id = "footer">this is a footer</div>
            </Wrapper>
        )
    }
    
}

export default Checkout