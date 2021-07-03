import styled from 'styled-components';

const Title = styled.div`
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 18px;
  color: var(--color-gray);
  margin-bottom: 12px;
`;

const Body = styled.div`
  background: var(--color-white);
  box-shadow: 0px 6px 24px var(--color-shadow);
  border-radius: var(--radii-sm);
  padding: 24px;

  & > input {
    margin-bottom: 15px;
  }
`;

const ScrollableContent = styled.div`
  max-height: 135px;
  overflow-y: auto;
  margin-left: -4px;
  padding-left: 5px;
  padding-top: 2px;
`;

function Card({ title, children }) {
  return (
    <div>
      <Title>{title}</Title>
      <Body>{children}</Body>
    </div>
  );
}

Card.ScrollableContent = ScrollableContent;

export default Card;
