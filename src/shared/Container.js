import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  max-width: var(--container-width);
  margin: 0 auto;

  @media screen and (max-width: 1147px) {
    width: 90%;
  }
`;

export default Container;
