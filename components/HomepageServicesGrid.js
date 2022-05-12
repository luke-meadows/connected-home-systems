import { homepageServicesData } from '../lib/homepageServicesData';

import ServicesItem from './ServicesItem';
export default function HomepageServicesGrid() {
  return (
    <div>
      {homepageServicesData.map((item, i) => (
        <ServicesItem item={item} key={item.title} idx={i} />
      ))}
    </div>
  );
}
