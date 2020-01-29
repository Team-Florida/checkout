import styled from 'styled-components';

const BookItButton = styled.button`
    background-color: ${props => props.primary ? "#FF5A5F" : "white"};;
    display: block;
    /* float: left; */
    width: 100%;
    height: 40px;
    border: ${props => props.primary ? "none" : "1px solid #e4e4e4"};
    /* padding: 1px; */
    `;

export default BookItButton