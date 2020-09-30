import React from 'react';
import styled from 'styled-components';
import Card from '../Card';
import { IMAGE1, IMAGE2, IMAGE3, IMAGE4 } from '../../constants';
import PageTitle from '../Accessibility/PageTitle';

const StyledHome = styled.section`
  padding: 0.5em 1em;
`;

const Home = () => (
  <StyledHome>
    <PageTitle title="Home" />
    <Card image={IMAGE1} />
    <Card image={IMAGE2} />
    <Card image={IMAGE3} />
    <Card image={IMAGE4} />
  </StyledHome>
);

export default Home;
