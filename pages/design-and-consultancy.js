import styled from 'styled-components';
import ContactSection from '../components/main/ContactSection';
import ServicePage from '../components/services/ServicePage';
import { servicesData } from '../lib/servicesData';
export default function designAndBuild() {
  const service = servicesData[1];
  return (
    <>
      <div style={{ marginTop: '6rem', padding: '3rem 6rem 6rem 6rem' }}>
        <h2 style={{ marginBottom: '2rem' }}>Design and consultancy</h2>
        <ServicePage service={service} title="Design and Build" />
      </div>
      <ContactSection />
    </>
  );
}
