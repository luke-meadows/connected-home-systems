import styled from 'styled-components';
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
      <Text>Your Home Connected</Text>
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

const Text = styled.h1`
  margin-top: 2rem;
  font-size: 2.5rem;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 12px;
  position: relative;
  color: white;
  color: ${(props) => (props.black ? 'black' : 'white')};

  width: fit-content;
  margin: 0 auto;
  &:after {
    content: '';
    position: absolute;
    width: 60%;
    height: 2px;
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
    background-color: ${(props) => (props.black ? 'black' : 'white')};
    transform-origin: bottom right;
  }
`;
