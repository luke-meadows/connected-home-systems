import styled from 'styled-components';
import AboutUsSection from '../components/about-page/AboutUsSection';
import Faq from '../components/main/Faq';
import ContactSection from '../components/main/ContactSection';
import ProcessJourney from '../components/about-page/ProcessJourney';

export default function AboutUs() {
  return (
    <AboutUsPage>
      <AboutUsSection />
      <ProcessJourney />
      <Faq />
      <ContactSection />
    </AboutUsPage>
  );
}

const AboutUsPage = styled.div`
  margin-top: 6rem;
  @media only screen and (max-width: 1000px) {
    margin-top: 4rem;
  }
`;
