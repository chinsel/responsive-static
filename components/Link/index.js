import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import styled from 'styled-components';

const StyledLink = styled.a`
  margin-right: 10px;
  color: ${({ active }) => (active ? '#f00' : '#026cdf')};

  &:hover {
    text-decoration: underline;
  }
`;

const Link = ({ children, href }) => {
  const router = useRouter();

  const handleClick = e => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <StyledLink
      href={href}
      onClick={handleClick}
      active={router.pathname === href}
    >
      {children}
    </StyledLink>
  );
};

Link.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
};

Link.defaultProps = {
  href: '',
};

export default Link;
