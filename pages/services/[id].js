import { useRouter } from 'next/router';
import ServicePage from '../../components/services/ServicePage';
import { servicesData } from '../../lib/servicesData';

export default function Service() {
  const router = useRouter();
  const service = servicesData.filter(
    (service) => service.category === router.query.id
  );
  return (
    <div style={{ marginTop: '6rem' }}>
      <ServicePage service={service[0]} />
    </div>
  );
}
