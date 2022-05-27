import Image from 'next/image';
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
  padding: 3rem 3rem 6rem 3rem;
  position: relative;
  h2 {
    padding: 0 2.8rem;
    margin-bottom: 4rem;
  }
`;

const ImageContainerInner = styled.div`
  position: relative;
  height: 35rem;
  width: 35rem;
`;
const ImageContainerOuter = styled.div`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  z-index: -1;
  opacity: 0.3;
`;
