import Link from 'next/link';
import { useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

export default function Nav() {
  const [serviceDropdownActive, setServiceDropdownActive] = useState(false);

  const router = useRouter();
  function handleClick(e) {
    const { category } = e.currentTarget.dataset;
    router.push(`/services/${category}`, undefined, { shallow: true });
  }
  return (
    <StyledNav>
      <div
        onMouseEnter={() => {
          setServiceDropdownActive(true);
        }}
        className={serviceDropdownActive ? 'active' : ''}
      >
        <Link href="/smart-lighting">Services</Link>
      </div>
      <Link href="/about-us">About</Link>
      {/* <Link href="/projects">Projects</Link> */}
      <Link href="/gallery">Gallery</Link>
      {/* <Link href="/">Technology</Link> */}
      <Link href="/contact">Contact</Link>
      {serviceDropdownActive && (
        <ServicesDropdown
          onMouseLeave={() => {
            setServiceDropdownActive(false);
          }}
          onClick={() => {
            setServiceDropdownActive(false);
          }}
        >
          <div className="top">
            <div className="left" />
            <div
              className="right"
              onMouseEnter={() => {
                setServiceDropdownActive(false);
              }}
            />
          </div>
          <div className="bottom">
            <div
              className="link"
              onClick={handleClick}
              data-category="design-and-consultancy"
            >
              Design and Consultancy
            </div>
            <div
              className="link"
              onClick={handleClick}
              data-category="smart-home"
            >
              Smart Home
            </div>
            <div
              className="link"
              onClick={handleClick}
              data-category="smart-lighting"
            >
              Smart Lighting
            </div>
            <div
              className="link"
              onClick={handleClick}
              data-category="home-cinema"
            >
              Home Cinema / Media Rooms
            </div>
            <div
              className="link"
              onClick={handleClick}
              data-category="multiroom"
            >
              Multiroom
            </div>
            <div
              className="link"
              onClick={handleClick}
              data-category="networks"
            >
              Home Networks
            </div>
            <div
              className="link"
              onClick={handleClick}
              data-category="service-and-maintenance"
            >
              Service and Maintenance
            </div>
          </div>
        </ServicesDropdown>
      )}
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1 1 0px;
  position: relative;
  height: 6rem;
  max-width: fit-content;
  @media only screen and (max-width: 1000px) {
    display: none;
  }
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 1rem;
    font-size: 0.8rem;
    font-weight: 400;
    color: var(--black);
    position: relative;
    letter-spacing: 1px;
    text-transform: uppercase;
    &:hover {
      color: var(--teal);
      cursor: pointer;
    }
    &:after {
      height: 0px;
      content: '';
      position: absolute;
      width: 100%;
      left: 0;
      transform: scaleX(0);
      height: 2px;
      bottom: -5px;
      background-color: var(--teal);
      transform-origin: bottom right;
      transition: transform 0.25s ease-out;
    }
    &:hover:after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
  }

  .active {
    a {
      &:after {
        transform: scaleX(1);
        transform-origin: bottom left;
      }
    }
  }
`;

const ServicesDropdown = styled.div`
  width: fit-content;
  position: absolute;
  top: 0;
  left: 0;
  .top {
    height: 6rem;

    display: flex;
    .left {
      width: 6rem;
      height: 6rem;
    }
    .right {
      width: 4rem;
      height: 6rem;
    }
  }
  .bottom {
    background: white;
    padding: 0.5rem;
    border-left: 1px solid var(--grey);
    border-bottom: 1px solid var(--grey);
    border-right: 1px solid var(--grey);
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
  .link {
    font-size: 0.85em;
    font-weight: 400;
    background-color: white;
    padding: 0.5rem;
    margin: 0;
    width: 100%;
    justify-content: flex-start;
    cursor: pointer;
    &:after {
      height: 0px;
    }
    &:hover {
      color: var(--teal);
      cursor: pointer;
    }
  }
`;
