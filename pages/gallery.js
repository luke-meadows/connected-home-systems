import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { db } from '../firebase/firebase';
import { galleryImgs } from '../lib/galleryImgs';
export default function Gallery() {
  const [itemsOnView, setItemsOnView] = useState(15);

  const filters = {
    all: (item) => item,
    ones: (item) => item === 1,
  };

  useEffect(() => {
    db.collection('test').get((snapshot) => {
      snapshot.forEach((shot) => console.log(shot.data()));
    });
  }, []);

  return (
    <Container>
      <h2>Gallery</h2>
      <Controls>
        <p className="active">All</p>
        <p>Smart Lighting</p>
        <p>Home Cinema</p>
        <p>Home Automation</p>
      </Controls>
      <Images>
        {galleryImgs.filter(filters.all).map((x, i) => (
          <ImageContainer key={i}>{x}</ImageContainer>
        ))}
      </Images>
      <div id="intersection-observer" />
    </Container>
  );
}

const Container = styled.div`
  margin-top: 6rem;
  padding: 6rem;
`;
const Controls = styled.div`
  display: flex;
  margin-bottom: 1rem;
  p {
    margin-right: 2rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 1rem;
    font-family: 'Raleway', sans-serif;
    position: relative;
    font-size: 0.8rem;
  }
  .active {
    &:after {
      height: 0px;
      content: '';
      position: absolute;
      width: 100%;
      left: 0;
      height: 1px;
      bottom: -5px;
      background-color: black;
    }
  }
`;

const Images = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
`;

const ImageContainer = styled.div`
  aspect-ratio: 1;
  border: 1px solid blue;
`;
