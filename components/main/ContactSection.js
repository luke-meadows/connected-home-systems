import styled from 'styled-components';
import ContactForm from './ContactForm';
export default function ContactSection() {
  return (
    <ContactContainer>
      <div className="text">
        <h2>Book a consultation</h2>
        <p>
          We&apos;d love to discuss your project, book a free consultation by
          sending us your details below.
        </p>
      </div>
      <ContactForm />
    </ContactContainer>
  );
}

const ContactContainer = styled.div`
  padding: 4rem 6rem 6rem 6rem;
  background: var(--grey);
  .text {
    /* display: flex; */
    align-items: flex-end;
    margin-bottom: 4rem;
  }
  h2 {
    font-weight: 400;
    line-height: 2;
    margin-bottom: 0.5rem;
    margin-right: 1rem;
    text-align: center;
    font-size: 2rem;
  }
  p {
    text-align: center;
    margin-bottom: 0.3rem;
    font-weight: 300;
  }
`;
