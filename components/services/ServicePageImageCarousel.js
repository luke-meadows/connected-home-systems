import Image from 'next/image';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { db } from '../../db/firebase';
export default function ServicePageImageCarousel({ service }) {
  const [images, setImages] = useState([]);
  const arrowStyles = {
    borderRadius: '50%',
    height: '1.5rem',
    width: '1.5rem',
    border: '1px solid var(--black)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  };
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
      setImages(imgs);
    }
    fetchData();
    return () => fetchData;
  }, [service]);
  if (!images.length) return <div />;
  return (
    <div style={{ marginRight: '6rem' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          margin: '6rem 0 2rem 0',
        }}
      >
        <h3 style={{ color: 'var(--black)' }}>Past Projects</h3>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <div style={{ ...arrowStyles, marginRight: ' 0.25rem' }}>
            <i
              className="icon-left-dir"
              style={{ marginRight: '0.1rem', color: 'rgba(0,0,0,0.8)' }}
            />
          </div>
          <div
            style={{
              ...arrowStyles,
              marginLeft: ' 0.25rem',
            }}
          >
            <i
              className="icon-right-dir"
              style={{ marginLeft: '0.1rem', color: 'rgba(0,0,0,0.8)' }}
            />
          </div>
        </div>
      </div>
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
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
`;

const ImageContainer = styled.div`
  position: relative;
  cursor: pointer;
  height: 10rem;
  border-radius: 2px;
  overflow: hidden;
`;
