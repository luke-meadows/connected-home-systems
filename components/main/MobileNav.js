import styled from 'styled-components';

import { useRouter } from 'next/router';
import { useState } from 'react';
export default function MobileNav({ setMobileNavActive }) {
  const [subNavActive, setSubNavActive] = useState(false);

  const router = useRouter();
  function handleServiceClick(e) {
    const { category } = e.currentTarget.dataset;
    router.push(`/services/${category}`, undefined, { shallow: true });
    setSubNavActive(false);
    setMobileNavActive(false);
  }
  function handleClick(e) {
    const { path } = e.currentTarget.dataset;
    router.push(`/${path}`, undefined, { shallow: true });
    setSubNavActive(false);
    setMobileNavActive(false);
  }
  const NavLink = ({ children, href }) => {
    return (
      <div className="main-link" onClick={handleClick} data-path={href}>
        {children}
      </div>
    );
  };
  const SubNavLink = ({ children, category }) => {
    return (
      <div
        className="link"
        onClick={handleServiceClick}
        data-category={category}
      >
        {children}
      </div>
    );
  };
  return (
    <Container>
      <div className="top">
        <div className="services">
          <div
            style={{ cursor: 'pointer' }}
            onClick={() => setSubNavActive(!subNavActive)}
          >
            Services <i className={subNavActive ? 'icon-minus' : 'icon-plus'} />
          </div>

          <SubNav className={subNavActive ? 'active' : ''}>
            <SubNavLink category="design-and-consultancy">
              Design and Consultancy
            </SubNavLink>
            <SubNavLink category="smart-home">Smart Home</SubNavLink>
            <SubNavLink category="smart-lighting">Smart Lighting</SubNavLink>
            <SubNavLink category="home-cinema">
              Home Cinema / Media Rooms
            </SubNavLink>
            <SubNavLink category="multiroom">Multiroom</SubNavLink>
            <SubNavLink category="networks">Home Networks</SubNavLink>
            <SubNavLink category="service-and-maintenance">
              Service and Maintenance
            </SubNavLink>
          </SubNav>
        </div>
        <NavLink href={'/about-us'}>About us</NavLink>
        {/* <NavLink href={'/projects'}>Projects</NavLink> */}
        <NavLink href={'/blog'}>Blog</NavLink>
        <NavLink href={'/gallery'}>Gallery</NavLink>
        <NavLink href={'/contact'}>Contact us</NavLink>
      </div>
      <div className="bottom">
        <a target="blank" href="https://www.facebook.com/connectedhomesystems">
          <i className="icon-facebook" />
        </a>
        <a
          target="blank"
          href="https://www.instagram.com/connected_home_systems/"
        >
          <i className="icon-instagram" />
        </a>
        <a target="blank" href="https://twitter.com/ConnectedJon">
          <i className="icon-twitter" />
        </a>
      </div>
    </Container>
  );
}

const Container = styled.div`
  padding: 2rem;
  position: absolute;
  left: 0;
  top: 4rem;
  height: calc(100vh - 4rem);
  width: 100vw;
  max-height: 100vh;
  max-width: 100vw;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .top {
    display: flex;
    flex-direction: column;
    .main-link {
      cursor: pointer;
      margin-bottom: 1rem;
    }
    .services {
      margin-bottom: 0.9rem;
    }
    .main-link,
    .services {
      font-weight: 400;
      font-size: 1.5rem;
      align-items: center;
      i {
        font-size: 1.2rem;
        margin-left: 0rem;
      }
    }
    .link {
      font-size: 1rem;
      margin: 0.5rem 0;
      border-bottom: 1px solid var(--teal);
      width: fit-content;
      padding-bottom: 3px;
      cursor: pointer;
    }
  }
  .bottom {
    text-align: center;
  }
`;

const SubNav = styled.div`
  max-height: 1px;
  overflow: hidden;
  transition: all 0.4s ease-in-out;
  &.active {
    max-height: 20rem;
  }
`;
