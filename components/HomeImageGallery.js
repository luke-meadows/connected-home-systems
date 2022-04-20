import Image from 'next/image';
import styled from 'styled-components';
import bath from '../public/imgs/aquavision.jpeg';
import lights from '../public/imgs/lights.png';
import home from '../public/imgs/home.png';
import cinema from '../public/imgs/cinema.png';

export default function HomeImageGallery() {
  return (
    <GalleryContainer>
      <Left>
        <ImageContainer style={{ height: '20rem' }}>
          <Image src={home} objectFit="cover" layout="responsive" />
        </ImageContainer>
        <div style={{ display: 'flex' }}>
          <ImageContainer style={{ height: '15rem', width: '50%' }}>
            <Image src={bath} objectFit="cover" layout="fill" />
          </ImageContainer>
          <ImageContainer style={{ height: '15rem', width: '50%' }}>
            <Image src={cinema} objectFit="cover" layout="fill" />
          </ImageContainer>
        </div>
      </Left>

      <Right>
        <ImageContainer style={{ height: '35.4rem', width: '100%' }}>
          <Image src={lights} objectFit="cover" layout="responsive" />
        </ImageContainer>
      </Right>
    </GalleryContainer>
  );
}

const GalleryContainer = styled.div`
  height: 35rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 0 -0.2rem;
`;

const Left = styled.div``;
const Right = styled.div``;

const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  margin: 0.2rem;
`;
