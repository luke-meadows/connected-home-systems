import styled from 'styled-components';
import Header from './Header';
export default function Page({ children }) {
  return (
    <StyledPage>
      <Header />
      {children}
    </StyledPage>
  );
}

const StyledPage = styled.div`
  position: relative;
`;
