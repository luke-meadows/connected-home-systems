import { useState } from 'react';
import styled from 'styled-components';
const Question = ({ question, answer }) => {
  const [open, setOpen] = useState(false);
  return (
    <QuestionAnswer
      onClick={() => setOpen(!open)}
      className={open ? 'open' : ''}
    >
      <QuestionContainer>
        <p style={open ? { fontWeight: '600' } : {}}>
          What kind of tech can I have installed?
        </p>
        <span>
          <i className={open ? 'icon-minus' : 'icon-plus'} />
        </span>
      </QuestionContainer>
      <p style={{ color: 'var(--teal)' }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio saepe
        culpa voluptates velit quos facere voluptas distinctio officia dolores
        inventore!
      </p>
    </QuestionAnswer>
  );
};
export default function Faq() {
  return (
    <Container>
      <h2>FAQ&apos;s</h2>
      <div>
        <Question />
        <Question />
        <Question />
        <Question />
        <Question />
      </div>
    </Container>
  );
}

const Container = styled.div`
  padding: 6rem;
  margin: 0 auto;
  h2 {
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 4px;
    margin-bottom: 2rem;
  }
`;

const QuestionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;

  p {
    padding-bottom: 1rem;
  }
  i {
    color: black;
    &:hover {
      color: var(--teal);
    }
  }
`;

const QuestionAnswer = styled.div`
  max-height: 3rem;
  overflow: hidden;
  border-bottom: 2px solid black;
  padding-bottom: 1rem;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &.open {
    max-height: 10rem;
  }
`;
