import Image from 'next/image';
import styled from 'styled-components';
import ServicePageImageCarousel from './ServicePageImageCarousel';

export default function ServicePage({ service, title }) {
  return (
    <div>
      <h2 style={{ marginBottom: '3rem' }}>{title}</h2>
      <Grid>
        <TextContainer>
          <p>{service.text1}</p>
          <p>{service.text2}</p>
          <p>{service.text3}</p>
          <Tick>
            <i className="icon-ok-circled" />
            <p>Fully controllable.</p>
          </Tick>
          <Tick>
            <i className="icon-ok-circled" />
            <p>Wide range of options to choose from.</p>
          </Tick>
          <Tick>
            <i className="icon-ok-circled" />
            <p>Fully controllable.</p>
          </Tick>
        </TextContainer>
        <ImageContainer>
          <Image src={service.img1} layout="fill" objectFit="cover" />
        </ImageContainer>
      </Grid>
      <ServicePageImageCarousel service="smart-lighting" />
    </div>
  );
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
`;

const ImageContainer = styled.div`
  height: 25rem;
  position: relative;
  border-radius: 2px;
  overflow: hidden;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  p {
    line-height: 2;
    margin-bottom: 0.5rem;
  }
`;

const Tick = styled.div`
  display: flex;
  align-items: center;
  margin: 0.25rem 0;
  i {
    color: var(--teal);
    font-size: 1.8rem;
    width: fit-content;
    margin: 0 0.5rem 0 -0.5rem;
  }
  p {
    margin-bottom: 0;
  }
`;
