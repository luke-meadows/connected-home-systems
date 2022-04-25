import Link from 'next/link';
import styled from 'styled-components';
export default function Nav() {
  return (
    <StyledNav>
      <Link href="/">Services</Link>
      <Link href="/">Gallery</Link>
      <Link href="/">Blog</Link>
      <Link href="/">Contact</Link>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1 1 0px;

  a {
    margin: 0 1rem;
    text-transform: uppercase;
    font-size: 0.8rem;
    font-weight: 500;
    font-family: 'Montserrat', sans-serif;
  }
`;
