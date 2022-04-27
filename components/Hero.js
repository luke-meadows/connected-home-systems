import styled from 'styled-components';
import hero from '../public/video/hero.mp4';
import HeroText from './HeroText';
export default function Hero() {
  return (
    <StyledHero>
      <HeroVideo
        autoPlay
        muted
        loop
        webkit-playsinline="true"
        playsInline={true}
        src={require('../public/video/hero.mp4')}
        type="video/mp4"
      />
      <HeroText>Your Home Connected</HeroText>
    </StyledHero>
  );
}

const StyledHero = styled.section`
  height: 100vh;
  min-height: 500px;
  height: calc(100vh - 6rem);
  background-size: cover;
  position: relative;
  margin-top: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeroVideo = styled.video`
  height: 100%;
  width: 100%;
  object-fit: cover;
  pointer-events: none;
  position: absolute;
`;
