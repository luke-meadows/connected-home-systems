import styled from 'styled-components';
import phoneApp from '../public/imgs/phone-app2.png';
import livingRoom from '../public/imgs/living-room.png';
import control from '../public/imgs/control.png';
import Image from 'next/image';
export default function Control() {
  return (
    <StyledControl>
      <h1>Control the entire house with 1 device.</h1>
      <ImageGallery>
        <div className="">
          <Image src={phoneApp} />
        </div>
        <div className="">
          <Image src={livingRoom} />
        </div>
        <div className="">
          <Image src={control} />
        </div>
      </ImageGallery>
    </StyledControl>
  );
}

const StyledControl = styled.div`
  padding: 6rem;
  h1 {
    color: var(--teal);
    font-weight: 500;
  }
`;

const ImageGallery = styled.div`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10rem;
`;
