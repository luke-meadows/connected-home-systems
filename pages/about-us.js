import styled from 'styled-components';
import AboutUsSection from '../components/AboutUsSection';
import Faq from '../components/Faq';
import ContactSection from '../components/ContactSection';
import ProcessJourney from '../components/ProcessJourney';

export default function AboutUs() {
  return (
    <AboutUsPage style={{ marginTop: '6rem' }}>
      <AboutUsSection />
      <ProcessJourney />
      <Faq />
      <ContactSection />
    </AboutUsPage>
  );
}

const AboutUsPage = styled.div``;
