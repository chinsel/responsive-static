import React from 'react';
import styled from 'styled-components';
import { TITLE } from '../../constants';

const StyledLogo = styled.a`
  font-family: 'Oleo Script Swash Caps', cursive;
  color: #000000;
  font-size: 24pt;
  text-decoration: none;
`;

const StyledHeader = styled.header`
  padding: 0.5em 1em;
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 10;
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.9) 10%
  );
`;

const StyledTrigram = styled.a`
  font-family: 'OpenSans', Helvetica, Arial, sans-serif;
  color: #000;
  align-self: center;
  display: block;
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border: 1px solid #000;
  border-radius: 3px;

  &:hover {
    color: #000;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <StyledLogo>{TITLE}</StyledLogo>
      <StyledTrigram href="#">&#9776;</StyledTrigram>
    </StyledHeader>
  );
};

export default Header;
