import Image from 'next/image';
import styled from 'styled-components';
export default function ServicePage({ service, title }) {
  return (
    <div>
      <h2 style={{ marginBottom: '3rem' }}>{title}</h2>
      <Grid>
        <ImageContainer>
          <Image src={service.img1} layout="fill" objectFit="cover" />
        </ImageContainer>
        <TextContainer>
          <p>{service.text1}</p>
        </TextContainer>
        <TextContainer>
          <p>{service.text2}</p>
        </TextContainer>
        <ImageContainer>
          <Image src={service.img2} layout="fill" objectFit="cover" />
        </ImageContainer>
        <ImageContainer>
          <Image src={service.img3} layout="fill" objectFit="cover" />
        </ImageContainer>
        <TextContainer>
          <p>{service.text3}</p>
        </TextContainer>
      </Grid>
    </div>
  );
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 6rem;
`;

const ImageContainer = styled.div`
  aspect-ratio: 1;
  position: relative;
`;

const TextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    line-height: 2;
  }
`;
