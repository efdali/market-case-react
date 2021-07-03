import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTotalAmount } from 'store/slices/basketSlices';
import styled from 'styled-components';
import Container from './Container';
import { BasketSvg, LogoSvg } from './Icons';

const Wrapper = styled.header`
  height: 76px;
  width: 100%;
  background-color: var(--color-primary);
  margin-bottom: 32px;
  position: sticky;
  top: 0;
  z-index: 9;
`;

const HeaderContainer = styled(Container)`
  position: relative;
  height: 100%;
  @media screen and (max-width: 767px) {
    display: flex;
    align-items: center;
  }
`;

const LogoWrapper = styled.a`
  display: block;
  position: absolute;
  width: 141px;
  height: 40px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media screen and (max-width: 767px) {
    position: static;
    transform: unset;
  }
`;

const Basket = styled.a`
  height: 100%;
  width: 129px;
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-white);
  background-color: var(--color-primaryDark);

  & svg {
    margin-right: 8px;
    color: inherit;
  }
`;

const Label = styled.span`
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  display: flex;
  align-items: center;
  letter-spacing: 0.16px;
  color: var(--white);
  & b {
    margin-right: 2px;
  }
`;

export default function Header() {
  const totalAmount = useSelector(getTotalAmount);
  return (
    <Wrapper>
      <HeaderContainer>
        <LogoWrapper as={Link} to="/">
          <LogoSvg />
        </LogoWrapper>

        <Basket as={Link} to="/">
          <BasketSvg />
          <Label>
            <b>₺</b> {totalAmount.toFixed(2)}
          </Label>
        </Basket>
      </HeaderContainer>
    </Wrapper>
  );
}
