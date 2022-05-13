import ContactSection from '../components/main/ContactSection';
import Faq from '../components/main/Faq';
import Hero from '../components/main/Hero';
import HomepageBlurb from '../components/main/HomepageBlurb';
import HomepageServicesGrid from '../components/main/HomepageServicesGrid';
import Testimonials from '../components/main/Testimonials';

export default function Home() {
  return (
    <div>
      <Hero />
      <HomepageBlurb />
      <HomepageServicesGrid />
      <Testimonials />
      <ContactSection />
      <Faq />
    </div>
  );
}
