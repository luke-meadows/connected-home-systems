import ContactSection from '../components/ContactSection';
import ServicePage from '../components/ServicePage';
import HeroText from '../components/HeroText';
import img1 from '../public/imgs/lights.png';
import img2 from '../public/imgs/smart-lights-2.jpg';
export default function smartLighting() {
  const service = {
    img1,
    img2,
  };
  return (
    <>
      <div style={{ marginTop: '6rem', padding: '6rem' }}>
        <h2 style={{ marginBottom: '4rem' }}>Smart Lighting</h2>
        <ServicePage service={service} />
      </div>
      <ContactSection />
    </>
  );
}
