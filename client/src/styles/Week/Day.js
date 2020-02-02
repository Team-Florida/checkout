import styled from 'styled-components';

const Day = styled.td`
color: ${props => props.isBooked ? "rgb(216, 216, 216)" : "black"};
width: 38px;
height: 38px;
border: 1px solid rgb(216, 216, 216);
text-align: center;
font-size: 14px;
text-decoration: ${props => props.isBooked ? "line-through" : "none"};
`;

export default Day