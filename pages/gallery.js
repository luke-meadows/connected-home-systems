import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { db } from '../db/firebase';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
export default function Gallery() {
  const [itemsOnView, setItemsOnView] = useState(15);
  const [images, setImages] = useState([]);
  const [imageCategory, setImageCategory] = useState('all');
  const { ref, inView } = useInView({
    threshold: 1,
  });

  useEffect(() => {
    let imgs = [];
    async function fetchData() {
      if (imageCategory == 'all') {
        await db
          .collection('images')
          .orderBy('createdAt', 'desc')
          .limit(itemsOnView)
          .get()
          .then((snapshot) => {
            snapshot.forEach((shot) => imgs.push(shot.data()));
          });
        setImages(imgs);
      } else {
        await db
          .collection('images')
          .where('category', '==', imageCategory)
          .orderBy('createdAt', 'desc')
          .limit(itemsOnView)
          .get()
          .then((snapshot) => {
            snapshot.forEach((shot) => imgs.push(shot.data()));
          });
        setImages(imgs);
      }
    }
    fetchData();
    return () => fetchData;
  }, [itemsOnView, imageCategory]);

  useEffect(() => {
    if (!images.length) return;
    if (inView) setItemsOnView(itemsOnView + 15);
  }, [inView]);

  function handleCategoryChange(e) {
    const { name } = e.currentTarget.dataset;
    setImageCategory(name);
    setItemsOnView(15);
  }

  const Control = ({ name, heading }) => {
    return (
      <p
        data-name={name}
        onClick={handleCategoryChange}
        className={imageCategory === name ? 'active' : ''}
      >
        {heading}
      </p>
    );
  };

  return (
    <Container>
      <h2>Gallery</h2>
      <Controls>
        <Control name="all" heading="All" />
        <Control name="smart-lighting" heading="Smart Lighting" />
        <Control name="home-cinema" heading="Home Cinema" />
        <Control name="home-automation" heading="Home Automation" />
      </Controls>
      <Images>
        {images.map((x, i) => (
          <ImageContainer key={i}>
            <Image
              src="https://images.unsplash.com/photo-1532182772104-90f63a50fec5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              layout="fill"
              objectFit="cover"
            />
          </ImageContainer>
        ))}
      </Images>
      <div style={{ height: '6rem' }} ref={ref} />
    </Container>
  );
}

const Container = styled.div`
  margin-top: 6rem;
  padding: 6rem 6rem 0 6rem;
  h2 {
    margin-bottom: 3rem;
  }
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
    cursor: pointer;
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
  min-height: 20rem;
`;

const ImageContainer = styled.div`
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;
