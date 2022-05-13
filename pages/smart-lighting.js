import ContactSection from '../components/main/ContactSection';
import ServicePage from '../components/services/ServicePage';
import { servicesData } from '../lib/servicesData';
export default function SmartLighting() {
  const service = servicesData[0];
  return (
    <>
      <div style={{ marginTop: '6rem', padding: '3rem 6rem' }}>
        <ServicePage service={service} title="Smart Lighting" />
      </div>
      <ContactSection />
    </>
  );
}
