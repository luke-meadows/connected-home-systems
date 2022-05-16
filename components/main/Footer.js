import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import Control4 from '../../public/imgs/control4.png';
import LogoNoText from './LogoNoText';
export default function Footer() {
  return (
    <StyledFooter>
      <ColumnContainer>
        <Column>
          <h4>Connected Home Systems</h4>
          <Link href="/">Contact us</Link>
          <Link href="/">Portfolio</Link>
          <Link href="/">About us</Link>
        </Column>
        <div style={{ margin: '2rem 0' }} />
        <Column>
          <h4>Recent Projects</h4>
          <Link href="/">Warwick</Link>
          <Link href="/">Tamworth</Link>
          <Link href="/">Stratford</Link>
        </Column>
      </ColumnContainer>
      <Column>
        <h4>Services</h4>
        <Link href="/">Smart Home</Link>
        <Link href="/">Design and Build</Link>
        <Link href="/">Multiroom</Link>
        <Link href="/">Cinema and Media Room</Link>
        <Link href="/">Control</Link>
        <Link href="/">Network</Link>
        <Link href="/">CCTV</Link>
      </Column>
      <Column>
        <h4>Socials</h4>
        <Link href="/">Facebook</Link>
        <Link href="/">Instagram</Link>
        <Link href="/">Twitter</Link>
      </Column>
      <div>
        <LogoNoText width={1} />
        <ImageContainer>
          <Image src={Control4} layout="responsive" />
        </ImageContainer>
      </div>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  background: var(--black-bg);
  padding: 6rem;
  display: flex;
  justify-content: space-between;
  color: white;
`;

const ColumnContainer = styled.div``;
const Column = styled.div`
  display: flex;
  flex-direction: column;
  h4 {
    font-size: 1.1rem;
    text-transform: uppercase;
    font-weight: 500;
    letter-spacing: 5px;
    margin-bottom: 1rem;
  }
  a {
    color: var(--grey2);
    font-size: 1.1rem;
    margin: 0.25rem 0;
    font-weight: 300;
    &:hover {
      color: var(--teal);
    }
  }
`;

const ImageContainer = styled.div`
  position: relative;
  cursor: pointer;
  margin-top: 2rem;
`;
