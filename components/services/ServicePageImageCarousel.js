import Image from 'next/image';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { db } from '../../db/firebase';
export default function ServicePageImageCarousel({ service }) {
  const [images, setImages] = useState([]);
  useEffect(() => {
    let imgs = [];
    async function fetchData() {
      await db
        .collection('images')
        .where('category', '==', service)
        .orderBy('createdAt', 'desc')
        .limit(5)
        .get()
        .then((snapshot) => {
          snapshot.forEach((shot) => imgs.push(shot.data()));
        });
      setImages(imgs);
    }
    fetchData();
    return () => fetchData;
  }, [service]);
  if (!images.length) return <div />;
  return (
    <div>
      <h3 style={{ margin: '6rem 0 2rem 0' }}>Past Projects</h3>
      <Grid>
        {images.map((image, i) => {
          console.log(image.url);
          return (
            <ImageContainer key={i}>
              <Image src={image.url} layout="fill" objectFit="cover" />
            </ImageContainer>
          );
        })}
      </Grid>
    </div>
  );
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1.5rem;
`;

const ImageContainer = styled.div`
  position: relative;
  cursor: pointer;
  aspect-ratio: 1;
`;
