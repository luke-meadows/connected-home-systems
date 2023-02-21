import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import ContactSection from '../../components/main/ContactSection';
import ServicePage from '../../components/services/ServicePage';
import { servicesData } from '../../lib/servicesData';

export default function Service() {
  const router = useRouter();
  const service = servicesData.filter(
    (service) => service.category === router.query.id
  );
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [service]);
  return (
    <div style={{ marginTop: '6rem' }}>
      <NextSeo
        title={service[0]?.seo.title}
        description={service[0]?.seo.desc}
      />
      <ServicePage service={service[0]} />
      <ContactSection />
    </div>
  );
}
