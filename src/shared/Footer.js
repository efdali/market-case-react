import React from 'react';
import styled from 'styled-components';
import Container from './Container';
import { Link } from 'react-router-dom';

const Wrapper = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-primary);
  padding: 40px 0;
  font-size: 13px;

  a {
    color: inherit;
  }
`;

const Dot = styled.span`
  display: block;
  margin: 0 16px;
`;

function Footer() {
  return (
    <Wrapper>
      <span>&copy; 2019 Market</span>
      <Dot>.</Dot>
      <Link to="/">Privacy Policy</Link>
    </Wrapper>
  );
}

export default Footer;
