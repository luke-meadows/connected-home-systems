import Image from 'next/image';
import styled from 'styled-components';
import hero from '../public/imgs/portfolio-hero.jpg';
export default function PageHero() {
  return (
    <Container>
      <Absolute>
        <BackgroundImage>
          <Image src={hero} layout="fill" objectFit="cover" ob />
        </BackgroundImage>
      </Absolute>
      <h1>Portfolio</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
        necessitatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Deleniti, necessitatibus.
      </p>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 6rem;
  height: 30rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;

  h1 {
    margin-top: 2rem;
    font-size: 2.5rem;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 12px;
    position: relative;
    &:after {
      content: '';
      position: absolute;
      width: 60%;
      height: 2px;
      bottom: -20px;
      left: 50%;
      transform: translateX(-50%);
      background-color: white;
      transform-origin: bottom right;
    }
  }
  p {
    margin-top: 3rem;
    width: 80ch;
    text-align: center;
    line-height: 2;
  }
`;

const Absolute = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  max-height: 30rem;
  width: 100%;
  z-index: -1;
`;
const BackgroundImage = styled.div`
  position: relative;
  height: 30rem;
  filter: brightness(0.3);
`;
