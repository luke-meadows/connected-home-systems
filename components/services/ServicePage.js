import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import Loading from '../main/Loading';
import ServicePageImageCarousel from './ServicePageImageCarousel';

export default function ServicePage({ service }) {
  if (!service) return <Loading />;
  return (
    <div style={{ padding: '3rem 6rem 6rem 6rem' }}>
      <h2 style={{ marginBottom: '3rem' }}>{service.title}</h2>
      <Grid>
        <TextContainer>
          {service.text.map((text) => (
            <p key={text}>{text}</p>
          ))}
          {service.category === 'service-and-maintenance' && (
            <p>
              * conditions apply….. Interested in our service and maintenance
              packages? Contact us{' '}
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
        <ImageContainer>
          <Image src={service.img} layout="fill" objectFit="cover" />
        </ImageContainer>
      </Grid>
      <ServicePageImageCarousel service={service.category} />
    </div>
  );
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: 6fr 4fr;
  justify-content: space-around;
  gap: 3rem;
`;

const ImageContainer = styled.div`
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
    font-weight: 400;
  }
`;
