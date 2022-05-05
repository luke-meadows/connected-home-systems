import styled from 'styled-components';
import CustomerJourney from '../components/CustomerJourney';
import AboutUsSection from '../components/AboutUsSection';
import Faq from '../components/Faq';
import ContactSection from '../components/ContactSection';

export default function AboutUs() {
  return (
    <AboutUsPage style={{ marginTop: '6rem' }}>
      <AboutUsSection />
      <CustomerJourney />
      <Faq />
      <ContactSection />
    </AboutUsPage>
  );
}

const AboutUsPage = styled.div``;
