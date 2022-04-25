import Control from '../components/Control';
import Hero from '../components/Hero';
import HomeImageGallery from '../components/HomeImageGallery';
import HomepageBlurb from '../components/HomepageBlurb';
import HomepageServicesGrid from '../components/HomepageServicesGrid';
import ServicesGrid from '../components/ServicesGrid';

export default function Home() {
  return (
    <div>
      <Hero />
      <HomepageBlurb />
      <HomepageServicesGrid />
      {/* <HomeImageGallery /> */}
      {/* <ServicesGrid /> */}
    </div>
  );
}
