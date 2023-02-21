import { NextSeo } from 'next-seo';
import ContactSection from '../components/main/ContactSection';
import Faq from '../components/main/Faq';
import Hero from '../components/main/Hero';
import HomepageBlurb from '../components/main/HomepageBlurb';
import HomepageServicesGrid from '../components/main/HomepageServicesGrid';
import Partners from '../components/main/Partners';
import Testimonials from '../components/main/Testimonials';

export default function Home() {
  return (
    <div>
      <NextSeo
        title="Connected Home Systems - Smart Home Technology Designers and Installers"
        description="Smart Home Technology Designers and Installers.  
        The size of the house doesn’t matter - we can automate and make it smart in various ways."
      />
      <Hero />
      <HomepageBlurb />
      <HomepageServicesGrid />
      <Testimonials />
      <ContactSection />
      <Faq />
      <Partners />
    </div>
  );
}
