import ContactSection from '../components/ContactSection';
import ServicePage from '../components/ServicePage';
import { servicesData } from '../lib/servicesData';
export default function Networks() {
  const service = servicesData[2];
  return (
    <>
      <div style={{ marginTop: '6rem', padding: '6rem' }}>
        <h2 style={{ marginBottom: '4rem' }}>Networks</h2>
        <ServicePage service={service} />
      </div>
      <ContactSection />
    </>
  );
}
