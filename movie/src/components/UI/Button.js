

import styled from "styled-components";
const Button = styled.button`
font: inherit;
padding: 0.5rem 1.5rem;
border: 1px solid #8b005d;
color: white;
background:  ${props => props.bgcolor};
box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
cursor: pointer;
&:focus {
  outline: none;
}

&:hover,
&:active {
  background: ${props=>props.bgcolorhover};
  border-color: #ac0e77;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
}`;



export default Button;
