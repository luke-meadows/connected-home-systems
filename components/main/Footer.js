import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Control4 from '../../public/imgs/control4.png';
import LogoNoText from './LogoNoText';
export default function Footer() {
  const router = useRouter();
  function handleServiceClick(e) {
    const { service } = e.currentTarget.dataset;
    router.push(`/services/${service}`, undefined, { shallow: true });
  }

  return (
    <StyledFooter>
      <ColumnContainer>
        <Column>
          <h4>Connected Home Systems</h4>
          <Link href="/contact">Contact us</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/about-us">About us</Link>
        </Column>
        <div style={{ margin: '2rem 0' }} />
        <Column>
          {/* <h4>Recent Projects</h4>
          <Link href="/">Warwick</Link>
          <Link href="/">Tamworth</Link>
          <Link href="/">Stratford</Link> */}
        </Column>
      </ColumnContainer>
      <Column>
        <h4>Services</h4>
        <p
          className="link"
          onClick={handleServiceClick}
          data-service="design-and-consultancy"
        >
          Design and Consultancy
        </p>
        <p
          className="link"
          onClick={handleServiceClick}
          data-service="smart-home"
        >
          Smart Home
        </p>
        <p
          className="link"
          onClick={handleServiceClick}
          data-service="smart-lighting"
        >
          Smart Lighting
        </p>
        <p
          className="link"
          onClick={handleServiceClick}
          data-service="home-cinema"
        >
          Home Cinema and Media Room
        </p>
        <p
          className="link"
          onClick={handleServiceClick}
          data-service="multiroom"
        >
          Multiroom
        </p>
        <p
          className="link"
          onClick={handleServiceClick}
          data-service="networks"
        >
          Home Networks
        </p>
        <p
          className="link"
          onClick={handleServiceClick}
          data-service="service-and-maintenance"
        >
          Service and Maintenance
        </p>
      </Column>
      <Column>
        <h4>Socials</h4>
        <a target="blank" href="https://www.facebook.com/connectedhomesystems">
          Facebook
        </a>
        <a
          target="blank"
          href="/https://www.instagram.com/connected_home_systems/"
        >
          Instagram
        </a>
        <a target="blank" href="/https://twitter.com/ConnectedJon">
          Twitter
        </a>
      </Column>
      <Logos>
        <LogoNoText width={1} />
        <ImageContainer>
          <Image src={Control4} layout="responsive" />
        </ImageContainer>
      </Logos>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  background: var(--black-bg);
  padding: 6rem;
  display: flex;
  justify-content: space-between;
  color: white;
  @media only screen and (max-width: 800px) {
    padding: 3rem 2rem;
    h4 {
      font-size: 1rem;
    }
  }
  @media only screen and (min-width: 1500px) {
    padding: 6rem 20rem;
  }
`;

const ColumnContainer = styled.div``;
const Column = styled.div`
  display: flex;
  flex-direction: column;
  h4 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    font-weight: 500;
    color: var(--teal);
  }
  a,
  .link {
    color: var(--grey2);
    font-size: 1rem;
    margin: 0.25rem 0;
    font-weight: 300;
    cursor: pointer;
    &:hover {
      color: var(--teal);
    }
  }
  @media only screen and (max-width: 800px) {
    h4 {
      font-size: 0.8rem;
    }
    .link,
    a {
      font-size: 0.6rem;
    }
  }
`;

const ImageContainer = styled.div`
  position: relative;
  cursor: pointer;
  margin-top: 2rem;
`;

const Logos = styled.div`
  @media only screen and (max-width: 800px) {
    display: none;
  }
`;
