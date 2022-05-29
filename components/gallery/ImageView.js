import ImageGallery from 'react-image-gallery';
import styled from 'styled-components';
export default function ImageView({ items, setImageViewActive }) {
  return (
    <Container>
      <ImageGallery
        originalHeight="200px"
        style={{ border: '3px solid blue' }}
        items={items}
        showThumbnails={false}
        showFullscreenButton={false}
        loading="lazy"
      />
      <i className="icon-cancel-1" onClick={() => setImageViewActive(false)} />
    </Container>
  );
}

const Container = styled.div`
  background: rgba(255, 255, 255, 0.8);
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
    height: 80vh;
  }
  .image-gallery-right-nav {
    right: 5rem;
    color: var(--black);

    &:focus {
      outline: none;
    }
    &:hover {
    }
    svg {
      height: 5rem;
    }
  }
  .image-gallery-left-nav {
    left: 5rem;
    color: var(--black);
    box-shadow: transparent;
    svg {
      height: 5rem;
    }
    &:focus {
      outline: none;
    }
    &:hover {
      /* color: var(--teal); */
    }
  }
  .image-gallery-fullscreen-button {
    right: 5rem;
  }

  .image-gallery-play-button {
    left: 0;
    display: none;
  }
  i {
    position: absolute;
    right: 6rem;
    top: 1.5rem;
    color: var(--black);

    font-size: 1.5rem;
    cursor: pointer;
    &:hover {
      color: var(--teal);
    }
  }
  .image-gallery {
    height: calc(100vh - 6rem);
    padding: 2rem 0;
  }
`;

const ImageContainer = styled.div``;
