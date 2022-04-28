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
    <div style={{ marginTop: '8rem' }}>
      <HeroText black={true}>Smart Lighting</HeroText>
      <ServicePage service={service} />
      <ContactSection />
    </div>
  );
}
