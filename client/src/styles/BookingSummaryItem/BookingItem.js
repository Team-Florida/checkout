import styled from 'styled-components';

const BookingItem = styled.span`
    /* position: relative;
    z-index: 0; */
    float: ${props => props.price ? "right" : "none"};
    display: inline-block;
    font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
    font-size: 14px;
    font-weight: 400;
    color: #484848;
    line-height: 1.2857142857142858em;
    height: 31px;
    border-bottom: 1px solid rgb(216, 216, 216);
    `;

export default BookingItem


