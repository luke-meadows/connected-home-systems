import styled from 'styled-components';
import ContactSection from '../components/main/ContactSection';
import ServicePage from '../components/services/ServicePage';
import { servicesData } from '../lib/servicesData';
export default function designAndConsultancy() {
  const service = servicesData[1];
  return (
    <>
      <div style={{ marginTop: '6rem', padding: '3rem 6rem 6rem 6rem' }}>
        <ServicePage service={service} title="Design and consultancy" />
      </div>
      <ContactSection />
    </>
  );
}
