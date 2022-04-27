import styled from 'styled-components';
import hero from '../public/video/hero.mp4';
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
    </StyledHero>
  );
}

const StyledHero = styled.section`
  height: 100vh;
  min-height: 500px;
  background-size: cover;
`;

const HeroVideo = styled.video`
  height: 100%;
  width: 100%;
  object-fit: cover;
  pointer-events: none;
`;
