import Image from 'next/image';
import styled from 'styled-components';
import TestimonialsCards from './TestimonialsCards';
export default function Testimonials() {
  return (
    <TestimonialsContainer>
      <p className="customers">What our customers say about us...</p>
      <TestimonialsCards />
    </TestimonialsContainer>
  );
}

const TestimonialsContainer = styled.div`
  padding: 6rem 3rem 9rem 3rem;
  position: relative;

  .customers {
    padding: 0 2.8rem;
    margin-bottom: 4rem;
    font-size: 2rem;
  }
  @media only screen and (max-width: 800px) {
    padding: 3rem 1rem;
    .customers {
      padding: 0;
      font-size: 1.5rem;
      margin-bottom: 2rem;
    }
  }
`;
