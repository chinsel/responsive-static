import React from 'react';
import styled from 'styled-components';

const StyledSection = styled.div`
  margin: 0 0 1em;
  background-color: #fff;
  background-image: url(${({ background }) => background.image});
  background-size: cover;
  background-position: center center;
  min-height: 30vh;
  box-sizing: border-box;
  transition: filter 0.5s;
  overflow: hidden;
`;
const Card = image => <StyledSection background={image} />;

export default Card;
