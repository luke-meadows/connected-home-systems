import Image from 'next/image';
import styled from 'styled-components';
export default function HomeImageGallery() {
  return (
    <GalleryContainer>
      <ImageContainer>
        <Image
          layout="fill"
          src="https://images.pexels.com/photos/6444266/pexels-photo-6444266.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
        />
      </ImageContainer>
    </GalleryContainer>
  );
}

const GalleryContainer = styled.div`
  position: relative;
`;

const ImageContainer = styled.div`
  height: 50vh;
`;
