import styled from 'styled-components';

const Day = styled.td`
width: 38px;
height: 38px;
border: 1px solid rgb(216, 216, 216);
text-align: center;
font-size: 14px;
/* background: ${props => props.isBooked ? "red" : "none"}; */
text-decoration: ${props => props.isBooked ? "line-through" : "none"};
`;

export default Day