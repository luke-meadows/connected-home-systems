import styled from 'styled-components';
export default function HeroText({ children }) {
  return <Text>{children}</Text>;
}

const Text = styled.h1`
  margin-top: 2rem;
  font-size: 2.5rem;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 12px;
  position: relative;
  color: white;
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
`;
