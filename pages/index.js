import Hero from '../components/Hero';
import HomeImageGallery from '../components/HomeImageGallery';
import HomepageBlurb from '../components/HomepageBlurb';

export default function Home() {
  return (
    <div>
      <Hero />
      <HomepageBlurb />
      <HomeImageGallery />
    </div>
  );
}
