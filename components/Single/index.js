import React from 'react';
import Link from '../Link';
import PageTitle from '../Accessibility/PageTitle';

const Single = () => (
  <>
    <PageTitle title="Single" />
    <div>Hello Single! </div>
    <Link href="/">Home</Link>
    <Link href="/single">Single</Link>
  </>
);

export default Single;
