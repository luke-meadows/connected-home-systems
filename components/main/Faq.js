import Link from 'next/link';
import { useState } from 'react';
import styled from 'styled-components';
import { faqs } from '../../lib/faq';
const Question = ({ faq }) => {
  const [open, setOpen] = useState(false);
  return (
    <QuestionAnswer
      onClick={() => setOpen(!open)}
      className={open ? 'open' : ''}
      size={faq.size}
    >
      <QuestionContainer>
        <p style={open ? { fontWeight: '500' } : {}}>{faq.question}</p>
        <span>
          <i className={open ? 'icon-minus' : 'icon-plus'} />
        </span>
      </QuestionContainer>
      <p
        style={{
          color: 'var(--teal)',
          marginRight: '2rem',
          lineHeight: '1.5',
        }}
      >
        {faq.answer} {faq.link && <Link href={faq.link}>here</Link>}
      </p>
    </QuestionAnswer>
  );
};
export default function Faq() {
  return (
    <Container>
      <h2>FAQ&apos;s</h2>
      <div>
        {faqs.map((faq, i) => (
          <Question key={i} faq={faq} />
        ))}
      </div>
    </Container>
  );
}

const Container = styled.div`
  padding: 6rem;
  margin: 0 auto;
  h2 {
    margin-bottom: 2rem;
    font-weight: 400;
    color: var(--black);
  }
  @media only screen and (max-width: 800px) {
    padding: 3rem 1rem;
    h2 {
      margin-bottom: 1rem;
      font-size: 1.5rem;
    }
    p {
      font-size: 0.8rem;
    }
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
  max-height: ${(props) => (props.size === 's' ? '3rem' : '3.8rem')};
  overflow: hidden;
  border-bottom: 2px solid black;
  padding-bottom: 1rem;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  font-weight: 500;
  &.open {
    max-height: 15rem;
  }
  a {
    text-decoration: underline;
    font-style: italic;
  }
`;
