import styled from 'styled-components';

const Day = styled.td`
width: 38px;
height: 38px;
border: 1px solid black;
text-align: center;
background: ${props => props.isBooked ? "red" : "none"};
`;

export default Day