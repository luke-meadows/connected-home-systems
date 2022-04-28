import ContactSection from '../components/ContactSection';
import Hero from '../components/Hero';
import HomepageBlurb from '../components/HomepageBlurb';
import HomepageServicesGrid from '../components/HomepageServicesGrid';
import Testimonials from '../components/Testimonials';

export default function Home() {
  return (
    <div>
      <Hero />
      <HomepageBlurb />
      <HomepageServicesGrid />
      <Testimonials />
      <ContactSection />
    </div>
  );
}
