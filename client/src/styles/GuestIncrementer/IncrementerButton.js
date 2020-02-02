import styled from 'styled-components';

const IncrementerButton = styled.button`
    background-color: "white";
    display: inline-block;
    /* width: 100%; */
    height: 20px;
    border: "1px solid #e4e4e4";
    opacity: ${props => (props.isFaded === true) ? ".3" : "1"};;
    border-radius:10px;
    border-color: rgb(0, 132, 137);
    /* padding: 1px; */
    
    `;

export default IncrementerButton