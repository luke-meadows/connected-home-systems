import ContactSection from '../components/ContactSection';
import ServicePage from '../components/ServicePage';
import { servicesData } from '../lib/servicesData';
export default function SmartLighting() {
  const service = servicesData[0];
  return (
    <>
      <div style={{ marginTop: '6rem', padding: '6rem' }}>
        <h2 style={{ marginBottom: '4rem' }}>Smart Lighting</h2>
        <ServicePage service={service} title="Smart Lighting" />
      </div>
      <ContactSection />
    </>
  );
}
