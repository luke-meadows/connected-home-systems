import Head from 'next/head';
import styled from 'styled-components';
import Footer from './Footer';
import Header from './Header';
export default function Page({ children }) {
  return (
    <StyledPage>
      <Head>
        <title>Connected Home Systems</title>
      </Head>
      <Header />
      {children}
      <Footer />
      {/* <Chat>
        <i className="icon-comment" />
      </Chat> */}
    </StyledPage>
  );
}

const StyledPage = styled.div`
  position: relative;
  min-height: 80vh;
`;

const Chat = styled.div`
  position: fixed;
  right: 1rem;
  bottom: 1.5rem;
  color: white;
  transform: scaleX(-1);
  i {
    font-size: 1.8rem;
    background-color: var(--teal);
    padding: 0.75rem;
    border-radius: 50%;
    aspect-ratio: 1;
    cursor: pointer;
  }
`;
