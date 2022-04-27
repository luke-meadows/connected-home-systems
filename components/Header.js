import styled from 'styled-components';
import HeaderContactDetails from './HeaderContactDetails';
import Logo from './Logo';
import Nav from './Nav';
export default function Header() {
  return (
    <StyledHeader>
      <MainHeader>
        <Logo width={400} />
        <Nav />
        <HeaderContactDetails />
      </MainHeader>
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
`;
