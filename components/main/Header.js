import styled from 'styled-components';
import HeaderContactDetails from './HeaderContactDetails';
import Logo from './Logo';
import Nav from './Nav';
import MobileNav from './MobileNav';
import { useState } from 'react';
export default function Header() {
  const [mobileNavActive, setMobileNavActive] = useState(false);
  return (
    <StyledHeader>
      <MainHeader>
        <Logo setMobileNavActive={setMobileNavActive} />
        <Nav />
        <HeaderContactDetails
          mobileNavActive={mobileNavActive}
          setMobileNavActive={setMobileNavActive}
        />
      </MainHeader>
      {mobileNavActive && <MobileNav setMobileNavActive={setMobileNavActive} />}
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: none;
  height: 6rem;
  background: var(--white);
  z-index: 2;
  border-bottom: 1px solid var(--grey);

  @media only screen and (max-width: 1000px) {
    height: 4rem;
  }
`;

const SocialsBanner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  i {
    cursor: pointer;
  }
`;

const MainHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 0 6rem;
  @media only screen and (max-width: 1000px) {
    padding: 0 1rem;
  }
`;
