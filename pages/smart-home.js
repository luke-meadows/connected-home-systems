import ContactSection from '../components/main/ContactSection';
import ServicePage from '../components/services/ServicePage';
import { servicesData } from '../lib/servicesData';
export default function SmartHome() {
  const service = servicesData[3];
  return (
    <>
      <div style={{ marginTop: '6rem', padding: '3rem 6rem' }}>
        <h2 style={{ marginBottom: '2rem' }}>Smart Home</h2>
        <ServicePage service={service} />
      </div>
      <ContactSection />
    </>
  );
}
