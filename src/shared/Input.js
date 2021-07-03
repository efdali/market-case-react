import styled from 'styled-components';

const Input = styled.input.attrs((props) => ({
  type: 'search',
}))`
  border: 2px solid #e0e0e0;
  box-sizing: border-box;
  border-radius: var(--radii-sm);
  width: 100%;
  padding: 12px 16px;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.15px;

  &::placeholder {
    color: var(--color-itemSecondary);
  }
`;

export default Input;
