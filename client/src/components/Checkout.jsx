import React from 'react'
import ReactDOM from 'react-dom';
import axios from 'axios';
import styled from 'styled-components';

const Wrapper = styled.div({
    color: 'blue'
  });

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