import styled from 'styled-components';
import ContactSection from '../components/ContactSection';
import ServicePage from '../components/ServicePage';
import { servicesData } from '../lib/servicesData';
export default function designAndBuild() {
  const service = servicesData[1];
  return (
    <>
      <div style={{ marginTop: '6rem', padding: '6rem' }}>
        <h2 style={{ marginBottom: '4rem' }}>Design and Build</h2>
        <ServicePage service={service} title="Design and Build" />
      </div>
      <ContactSection />
    </>
  );
}
