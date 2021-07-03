import styled, { css } from 'styled-components';

const Flex = styled.div`
  display: flex;
  ${(props) =>
    props.centered &&
    css`
      align-items: center;
      justify-content: center;
    `}

  &.wrap {
    flex-wrap: wrap;
  }
`;

export default Flex;
