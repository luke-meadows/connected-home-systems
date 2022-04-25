import styled from 'styled-components';
export default function Hero() {
  return (
    <StyledHero>
      <h1>****Video*****</h1>
    </StyledHero>
  );
}

const StyledHero = styled.section`
  height: 100vh;
  background-image: url('https://images.pexels.com/photos/6444266/pexels-photo-6444266.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260');
  min-height: 500px;
  background-size: cover;

  h1 {
    padding: 10rem;
    z-index: 10;
    color: blue;
  }
`;
