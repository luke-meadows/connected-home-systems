import ImageGallery from 'react-image-gallery';
import styled from 'styled-components';
export default function ImageView({ items }) {
  return (
    <Container>
      <ImageGallery
        originalHeight="200px"
        style={{ border: '3px solid blue' }}
        items={items}
      />
      <i className="icon-cancel" />
    </Container>
  );
}

const Container = styled.div`
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  height: calc(100vh - 6rem);
  width: 100vw;
  left: 0;
  top: 6rem;
  z-index: 1;

  p {
    color: white;
    padding: 0 2rem;
  }
  .image-gallery-slide img {
    width: 100vw;
    height: 60vh;

    margin-bottom: 3rem;
  }
  .image-gallery-right-nav {
    right: 5rem;
    &:focus {
      outline: none;
    }
    &:hover {
      color: var(--teal);
    }
  }
  .image-gallery-left-nav {
    left: 5rem;
    &:focus {
      outline: none;
    }
    &:hover {
      color: var(--teal);
    }
  }
  .image-gallery-fullscreen-button {
    display: none;
    right: 5rem;
  }

  .image-gallery-play-button {
    left: 0;
    display: none;
  }
  i {
    position: absolute;
    right: 5rem;
  }
  .image-gallery {
    height: calc(100vh - 6rem);
    padding: 2rem 0;
  }
`;

const ImageContainer = styled.div``;
