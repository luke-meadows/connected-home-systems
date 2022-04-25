import styled from 'styled-components';
import Logo from './Logo';
import LogoNoText from './LogoNoText';
export default function Footer() {
  return (
    <StyledFooter>
      <LogoNoText width={1} />
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  background: var(--black-bg);
  padding: 6rem 12rem;
  display: flex;
  justify-content: space-between;
  color: white;
`;
