import styled, { css } from 'styled-components/macro';
import Container from 'shared/Container';
import Flex from 'shared/Flex';

const Wrapper = styled(Container)`
  display: grid;
  grid-template-columns: 296px 608px 296px;
  grid-column-gap: 16px;
  align-items: flex-start;

  @media screen and (max-width: 1147px) {
    grid-template-columns: minmax(220px, 296px) 1fr;
  }

  @media screen and (max-width: 767px) {
    grid-template-columns: 1fr;
    grid-template-rows: max-content 1fr;
    grid-row-gap: 16px;
  }
`;

const FilterArea = styled.aside`
  position: sticky;
  top: 80px;

  & > *:not(:last-child) {
    margin-bottom: 24px;
  }

  @media screen and (max-width: 767px) {
    position: static;
  }
`;

const MobileAccordionTitle = styled.div`
  margin-bottom: 24px;
  background-color: var(--color-white);
  box-shadow: 0px 4px 24px rgb(93 62 188 / 4%);
  padding: 12px 6px;
  color: var(--color-black);
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 22px;
  display: none;
  user-select: none;
  @media screen and (max-width: 767px) {
    display: block;
    position: relative;

    &.active:before {
      transform: rotate(225deg);
    }

    &:before {
      content: '';
      width: 12px;
      height: 12px;
      border: solid black;
      border-top: 0;
      border-left: 0;
      position: absolute;
      right: 20px;
      top: 19px;
      transform: rotate(45deg);
      transition: transform 0.2s;
      will-change: transform;
    }
  }
`;
const MobileAccordionContent = styled.div`
  display: block;
  @media screen and (max-width: 767px) {
    display: none;
    &.active {
      display: block;
    }
  }
`;

const Frame = styled.div`
  background-color: var(--color-primary);
  border-radius: var(--radii-sm);
  padding: 8px;
  position: sticky;
  top: 80px;

  @media screen and (max-width: 1147px) {
    display: none;
  }
`;

const FrameInner = styled.div`
  background-color: var(--color-white);
  border-radius: var(--radii-sm);
  padding: 10px 16px 16px;
  height: 100%;
`;

const PriceFrame = styled(Frame)`
  width: max-content;
  margin-left: auto;
  margin-top: 16px;
  padding: 2px;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  color: var(--color-primary);
  position: unset;

  & > div {
    padding-top: 16px;
  }
`;

const ProductTitle = styled.h5`
  font-weight: normal;
  color: var(--color-black);
  margin-bottom: 5px;
`;

const QuantityButton = styled.button`
  background-color: transparent;
  width: 32px;
  height: 32px;
  color: var(--color-primary);
  font-size: 16px;
`;

const ProductItemContainer = styled(Flex)`
  justify-content: space-between;
  font-size: 14px;
  padding: 16px 2px 16px;
  border-bottom: 1px solid #f4f4f4;

  & > .price {
    color: var(--color-primary);
  }
`;

const QuantityContainer = styled.span`
  display: inline-block;
  width: 32px;
  height: 32px;
  background: #1ea4ce;
  font-weight: 700;
  font-size: 15px;
  line-height: 32px;
  text-align: center;
  color: var(--color-white);
`;

const PaginationWrapper = styled(Flex)`
  padding: 20px 35px;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  justify-content: center;
`;

const PaginationButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  padding: 12px;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  color: #697488;

  ${(props) =>
    props.active &&
    css`
      background-color: var(--color-primary);
      color: var(--color-white);
    `}
`;

const PaginationIconButton = styled(PaginationButton)`
  color: var(--color-primary);
  ${(props) =>
    props.right &&
    css`
      svg {
        margin-right: 7px;
      }
    `}

  ${(props) =>
    !props.right &&
    css`
      svg {
        margin-left: 7px;
      }
    `}

  ${(props) =>
    props.disabled &&
    css`
      background-color: transparent;
      color: #697488;
    `}

  svg {
    fill: currentColor;
  }
`;

const PaginationDots = styled.span`
  color: #697488;
  display: block;
  margin: 0 24px;
`;

const TabButton = styled.button`
  background: #f2f0fd;
  border-radius: var(--radii-sm);
  padding: 6px 16px;
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 18px;
  text-align: center;
  color: var(--color-primary);
  ${(props) =>
    props.active &&
    css`
      background: #1ea4ce;
      color: #f2f0fd;
    `}

  & + & {
    margin-left: 8px;
  }
`;

const PageTitle = styled.h4`
  font-weight: normal;
  font-size: 20px;
  line-height: 26px;
  letter-spacing: 0.25px;
  color: var(--color-grayLight);
  margin-bottom: 16px;
`;

const ProductListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(110px, 1fr));
  grid-column-gap: 24px;
  grid-row-gap: 20px;
  background: var(--color-white);
  box-shadow: 0px 4px 24px rgba(93, 62, 188, 0.04);
  border-radius: var(--radii-sm);
  padding: 20px;

  @media screen and (max-width: 1146px) {
    grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
  }
`;

const ProductImageWrapper = styled.div`
  background: #fefefe;
  border: 1.17666px solid #f3f0fe;
  border-radius: 12px;
  width: 100%;
  position: relative;
  padding-top: 100%;
  height: 0;
  margin: 0 auto 8px;
  overflow: hidden;
`;

const ProductImage = styled.img`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const ProductName = styled.h3`
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 8px;
  color: var(--color-black);
`;

const ProductPrice = styled.span`
  font-family: 'Helvetica', 'Arial', sans-serif;
  font-size: 14px;
  line-height: 20px;
  color: var(--color-primary);
`;

export {
  Wrapper,
  FilterArea,
  MobileAccordionTitle,
  MobileAccordionContent,
  Frame,
  FrameInner,
  ProductItemContainer,
  QuantityContainer,
  ProductTitle,
  QuantityButton,
  PriceFrame,
  PaginationWrapper,
  PaginationIconButton,
  PaginationButton,
  PaginationDots,
  TabButton,
  PageTitle,
  ProductListContainer,
  ProductImageWrapper,
  ProductImage,
  ProductName,
  ProductPrice,
};
