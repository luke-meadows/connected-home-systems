import Link from 'next/link';
import styled from 'styled-components';
export default function Nav() {
  return (
    <StyledNav>
      <Link href="/">Services</Link>
      <Link href="/">Portfolio</Link>
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
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 1rem;
    text-transform: uppercase;
    font-size: 0.8rem;
    font-weight: 500;
    font-family: 'Montserrat', sans-serif;
    position: relative;

    &:hover {
      color: var(--teal);
      cursor: pointer;
    }
    &:after {
      content: '';
      position: absolute;
      width: 100%;
      transform: scaleX(0);
      height: 2px;
      bottom: -5px;
      left: 0;
      background-color: var(--teal);
      transform-origin: bottom right;
      transition: transform 0.25s ease-out;
    }
    &:hover:after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
  }
`;

const Dropdown = styled.div`
  border: 1px solid blue;
`;
