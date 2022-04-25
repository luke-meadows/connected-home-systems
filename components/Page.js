import styled from 'styled-components';
import Footer from './Footer';
import Header from './Header';
export default function Page({ children }) {
  return (
    <StyledPage>
      <Header />
      {children}
      <Footer />
    </StyledPage>
  );
}

const StyledPage = styled.div`
  position: relative;
`;
