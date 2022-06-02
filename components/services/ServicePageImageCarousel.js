import Image from 'next/image';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { db } from '../../db/firebase';
import ImageView from '../gallery/ImageView';
export default function ServicePageImageCarousel({ service }) {
  const [images, setImages] = useState(null);
  const [galleryImages, setGalleryImages] = useState(null);
  const [imageViewActive, setImageViewActive] = useState(false);

  useEffect(() => {
    let imgs = [];
    async function fetchData() {
      await db
        .collection('images')
        .where('categories', 'array-contains', service)
        .orderBy('createdAt', 'desc')
        .limit(4)
        .get()
        .then((snapshot) => {
          snapshot.forEach((shot) => imgs.push(shot.data()));
        });
      const newImages = imgs.map((imageData) => {
        return { original: imageData.url, thumbnail: imageData.url };
      });
      setImages(imgs);
      setGalleryImages(newImages);
    }
    fetchData();
    return () => fetchData;
  }, [service]);

  if (!images) return <div />;

  return (
    <div>
      {imageViewActive && (
        <ImageView
          setImageViewActive={setImageViewActive}
          items={galleryImages}
        />
      )}
      {images.length > 0 && (
        <Container>
          <h3 style={{ color: 'var(--black)', fontWeight: '400' }}>
            Past Projects
          </h3>
        </Container>
      )}
      <Grid>
        {images.map((image, i) => {
          return (
            <ImageContainer key={i} onClick={() => setImageViewActive(true)}>
              <Image src={image.url} layout="fill" objectFit="cover" />
            </ImageContainer>
          );
        })}
      </Grid>
    </div>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 6rem 0 2rem 0;
  @media only screen and (max-width: 1000px) {
    margin: 3rem 0 2rem 0;
    h3 {
      margin-bottom: 0rem;
    }
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.5rem;
  @media only screen and (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
    margin-bottom: 2rem;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  cursor: pointer;
  max-height: 15rem;
  height: 14rem;
  border-radius: 2px;
  overflow: hidden;
  box-shadow: var(--bs);
  @media only screen and (max-width: 1000px) {
    aspect-ratio: 1;
    height: 10rem;
  }
`;
