import Image from 'next/image';
import styled from 'styled-components';
import Rako from '../../public/imgs/partner-images/rako.svg';
export default function Partners() {
  return (
    <div>
      <Image src={Rako} />
    </div>
  );
}
