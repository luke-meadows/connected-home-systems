import styled from 'styled-components';
import AboutUsSection from '../components/about-page/AboutUsSection';
import Faq from '../components/main/Faq';
import ContactSection from '../components/main/ContactSection';
import ProcessJourney from '../components/about-page/ProcessJourney';
import { NextSeo } from 'next-seo';

export default function AboutUs() {
  return (
    <AboutUsPage>
      <NextSeo
        title="Connected Home Systems - Why we do what we enjoy"
        description="Working with Connected Home systems will be simple and hassle free, see the who, the what and the general process you can expect from our professional team"
      />
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
