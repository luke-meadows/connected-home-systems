import Gallery from '../components/gallery/Gallery';
import styled from 'styled-components';
export default function GalleryPage() {
  return (
    <Container>
      <h2>Gallery</h2>
      <Gallery />
    </Container>
  );
}

const Container = styled.div`
  margin-top: 6rem;
  padding: 3rem 6rem 0rem 6rem;
  h2 {
    margin-bottom: 3rem;
  }
  @media only screen and (max-width: 1000px) {
    margin-top: 4rem;
    padding: 1rem 2rem 0rem 2rem;
    h2 {
      font-size: 1.5rem;
      margin-bottom: 2rem;
    }
  }
`;
