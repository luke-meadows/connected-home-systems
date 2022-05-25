import styled from 'styled-components';
import TestimonialsCards from './TestimonialsCards';
export default function Testimonials() {
  return (
    <TestimonialsContainer>
      <h2>Customer Reviews</h2>
      <TestimonialsCards />
    </TestimonialsContainer>
  );
}

const TestimonialsContainer = styled.div`
  padding: 0rem 3rem 6rem 3rem;
  h2 {
    padding: 0 3.5rem;
    margin-bottom: 4rem;
  }
`;
