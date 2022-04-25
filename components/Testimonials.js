import styled from 'styled-components';
import TestimonialsCards from './TestimonialsCards';
export default function Testimonials() {
  return (
    <TestimonialsContainer>
      <h2>Testimonials</h2>
      <TestimonialsCards />
    </TestimonialsContainer>
  );
}

const TestimonialsContainer = styled.div`
  padding: 6rem;
  h2 {
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
    text-align: center;
  }
`;
