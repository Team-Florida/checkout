import styled from 'styled-components';

const ButtonWrapper = styled.div`
    float: ${props => props.left ? "left" : "right"};
    `;

export default ButtonWrapper