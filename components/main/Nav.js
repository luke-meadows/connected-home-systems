import Link from 'next/link';
import { useState } from 'react';
import styled from 'styled-components';
export default function Nav() {
  const [serviceDropdownActive, setServiceDropdownActive] = useState(false);
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
      <Link href="/projects">Projects</Link>
      <Link href="/gallery">Gallery</Link>
      <Link href="/">Technology</Link>
      <Link href="/admin">Contact</Link>
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
            <Link href="/home-automation">Home automation</Link>
            <Link href="/design-and-consultancy">Design and consultancy</Link>
            <Link href="/smart-lighting">Smart Lighting</Link>
            <Link href="/home-cinema">Home Cinema</Link>
            <Link href="/multiroom">Multiroom</Link>
            <Link href="/control">Control</Link>
            <Link href="/networks">Networks</Link>
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
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 1rem;
    text-transform: uppercase;
    font-size: 0.8rem;
    font-weight: 500;
    font-family: 'Raleway', sans-serif;
    position: relative;
    letter-spacing: 1px;
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
    cursor: pointer;
    display: flex;
    .left {
      width: 6rem;
      height: 6rem;
    }
    .right {
      width: 5rem;
      height: 6rem;
    }
  }
  .bottom {
    background: white;
    padding: 0.5rem;
    border-left: 1px solid var(--grey);
    border-bottom: 1px solid var(--grey);
    border-right: 1px solid var(--grey);
  }
  a {
    background-color: white;
    padding: 0.5rem;
    margin: 0;
    width: 100%;
    justify-content: flex-start;
    &:after {
      height: 0px;
    }
  }
`;
