import styled from 'styled-components';
export default function Hero() {
  return <StyledHero></StyledHero>;
}

const StyledHero = styled.section`
  height: 100vh;
  background-image: url('https://images.pexels.com/photos/6444266/pexels-photo-6444266.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260');
  /* background-image: url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1700&q=80'); */
  min-height: 500px;
  /* Create the parallax scrolling effect */
  /* background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;*/
  background-size: cover;
`;
