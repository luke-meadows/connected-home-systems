import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import Loading from '../main/Loading';

import ServicePageImageCarousel from './ServicePageImageCarousel';

export default function ServicePage({ service }) {
  if (!service) return <Loading />;
  return (
    <Container>
      <h2>{service.title}</h2>
      <Grid>
        <ImageContainer className="mobile">
          <Image
            src={service.img}
            layout="responsive"
            objectFit="cover"
            objectPosition={service.position || ''}
          />
        </ImageContainer>
        <TextContainer>
          {service.text.map((text) => (
            <p key={text}>{text}</p>
          ))}
          {service.category === 'service-and-maintenance' && (
            <p>
              Interested in our service and maintenance packages? Contact us{' '}
              <Link href="/contact">
                <span
                  style={{
                    fontStyle: 'italic',
                    fontWeight: '500',
                    color: 'var(--teal)',
                    cursor: 'pointer',
                  }}
                >
                  here….
                </span>
              </Link>
            </p>
          )}
          <div style={{ margin: '0.5rem 0' }} />
          {service.bullets.map((bullet) => (
            <Tick key={bullet}>
              <i className="icon-ok-circled" />
              <p>{bullet}</p>
            </Tick>
          ))}
        </TextContainer>
        <ImageContainer className="web">
          <Image
            src={service.img}
            layout="fill"
            objectFit="cover"
            objectPosition={service.position || ''}
          />
        </ImageContainer>
      </Grid>
      <ServicePageImageCarousel service={service.category} />
    </Container>
  );
}

const Container = styled.div`
  padding: 3rem 6rem 0rem 6rem;
  h2 {
    margin: 0 auto 3rem auto;
    color: var(--black);
    font-weight: 400;
  }
  .mobile {
    display: none;
  }

  @media only screen and (max-width: 1000px) {
    padding: 0rem 2rem;
    h2 {
      font-size: 1.5rem;
      margin: 0;
      margin-bottom: 2rem;
    }
    p {
      font-size: 0.8rem;
    }
    .web {
      display: none;
    }
    .mobile {
      display: initial;
    }
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 6fr 4fr;
  justify-content: space-around;
  gap: 3rem;
  max-width: 100rem;
  margin: 0 auto;
  @media only screen and (max-width: 1000px) {
    display: initial;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  border-radius: 3px;
  overflow: hidden;
  min-width: 30vw;
  height: 20rem;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  p {
    line-height: 2;
    margin-bottom: 0.5rem;
  }
  @media only screen and (max-width: 1000px) {
    margin-top: 1rem;
  }
`;

const Tick = styled.div`
  display: flex;
  margin: 0.25rem 0;
  i {
    color: var(--teal);
    font-size: 1.8rem;
    width: fit-content;
    margin: 0 0.5rem 0 -0.5rem;
  }
  p {
    margin-bottom: 0;
    font-weight: 400;
  }
`;
