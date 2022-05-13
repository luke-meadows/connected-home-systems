import styled from 'styled-components';
import AboutUsSection from '../components/about-page/AboutUsSection';
import Faq from '../components/main/Faq';
import ContactSection from '../components/main/ContactSection';
import ProcessJourney from '../components/about-page/ProcessJourney';

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
