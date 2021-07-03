import React from 'react';
import styled, { css } from 'styled-components';
import Flex from './Flex';

const Label = styled(Flex)`
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.16px;
  color: var(--color-item);
  align-items: center;
  user-select: none;

  & + & {
    margin-top: 18px;
  }

  span.count {
    color: var(--color-itemSecondary);
    margin-left: 4px;
  }
`;

const CheckboxInput = styled.input.attrs((props) => ({
  type: props.radio ? 'radio' : 'checkbox',
}))`
  appearance: none;
  min-width: 22px;
  height: 22px;
  margin-right: 12px;
  position: relative;
  transition: border-color, background-color 0.2s;
  will-change: border-color, background-color;

  box-shadow: 0px 1px 7px rgba(93, 56, 192, 0.4);
  border-radius: var(--radii-sm);

  ${(props) =>
    props.radio &&
    css`
      border-radius: 22px;
      border: 2px solid var(--color-radio-border);
      box-shadow: unset;
    `}

  &:checked {
    background-color: var(--color-primary);

    ${(props) =>
      props.radio &&
      css`
        border-color: var(--color-primary);
        background-color: transparent;
      `}
  }

  &:checked:before {
    content: '';
    position: absolute;
    border-width: 0 0 2px 2px;
    border-color: var(--color-white);
    border-style: solid;
    width: 11px;
    height: 6px;
    top: 7px;
    left: 5px;
    transform: rotate(-45deg);

    ${(props) =>
      props.radio &&
      css`
        width: 8px;
        height: 5px;
        border-color: var(--color-primary);
        top: 6px;
      `}
  }
`;

function Checkbox({ children, ...props }) {
  return (
    <Label as="label">
      <CheckboxInput {...props} />
      {children}
    </Label>
  );
}

export default Checkbox;
