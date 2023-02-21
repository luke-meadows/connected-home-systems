import { NextSeo } from 'next-seo';
import ContactSection from '../components/main/ContactSection';
export default function contact() {
  return (
    <div>
      <NextSeo
        title="Connected Home Systems - enquiry page"
        description="If you have a small query or a large project, contact us and we will assist you to achieve your smart home goals.  Alarms to Yard Lighting, Cinemas to Automation. We cover it all."
      />
      <ContactSection />
    </div>
  );
}
