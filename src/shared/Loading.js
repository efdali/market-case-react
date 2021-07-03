import styled, { keyframes, css } from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  padding: 40px;
  display: grid;
  place-items: center;

  ${(props) =>
    props.full &&
    css`
      position: fixed;
      left: 0;
      top: 0;
      bottom: 0;
      right: 0;
      padding: 0;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.2);
      }
    `}
`;

const animation = keyframes`
    from{
        transform:rotate(0turn);
    }
    to{
        transform:rotate(1turn);
    }
`;

const LoadingCircle = styled.div`
  padding: 20px;
  border: 8px solid var(--color-primary);
  border-left-color: transparent;
  border-radius: 100%;
  animation: ${animation} 1s linear infinite;
`;

function Loading({ full }) {
  return (
    <Wrapper full={full}>
      <LoadingCircle />
    </Wrapper>
  );
}

export default Loading;
