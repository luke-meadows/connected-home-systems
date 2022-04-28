import styled from 'styled-components';
import ContactForm from './ContactForm';
import TestimonialsCards from './TestimonialsCards';
export default function ContactSection() {
  return (
    <ContactContainer>
      <h2>Contact us</h2>
      <ContactForm />
    </ContactContainer>
  );
}

const ContactContainer = styled.div`
  padding: 6rem;
  background: var(--grey);
  h2 {
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 4px;
    text-align: center;
    margin-bottom: 4rem;
  }
`;
