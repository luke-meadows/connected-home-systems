import Image from 'next/image';
import styled from 'styled-components';
import hero from '../public/imgs/portfolio-hero.jpg';
import HeroText from './HeroText';
export default function PageHero() {
  return (
    <Container>
      <h2>Projects</h2>
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
  padding: 6rem 6rem 3rem 6rem;
  h2 {
    margin-bottom: 2rem;
  }
  p {
    margin-top: 2rem;
    width: 80ch;
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
