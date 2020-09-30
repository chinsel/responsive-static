import React from 'react';
import Link from '../Link';
import Header from '../Header';
import PageTitle from '../Accessibility/PageTitle';

const Home = () => (
  <>
    <PageTitle title="Home" />
    <Header>s</Header>
    <div>Hello World! </div>
    <Link href="/">Home</Link>
    <Link href="/single">Single</Link>
  </>
);

export default Home;
