import styled from 'styled-components';
import CustomerJourney from '../components/CustomerJourney';
import AboutUsSection from '../components/AboutUsSection';

export default function AboutUs() {
  return (
    <AboutUsPage style={{ marginTop: '6rem' }}>
      <AboutUsSection />
      <CustomerJourney />
    </AboutUsPage>
  );
}

const AboutUsPage = styled.div``;
