import Image from 'next/image';
import styled from 'styled-components';
import { homepageServicesData } from '../lib/homepageServicesData';
import home from '../public/imgs/home.png';
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
