import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { db } from '../../db/firebase';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import ImageView from './ImageView';
export default function Gallery({
  category = 'all',
  selectedPhotos = [],
  setSelectedPhotos = () => {},
  setInputs = () => {},
  preventFullscreen = false,
  inputs = '',
}) {
  const [itemsOnView, setItemsOnView] = useState(8);
  const [images, setImages] = useState([]);
  const [galleryImages, setGalleryImages] = useState([]);
  const [imageViewActive, setImageViewActive] = useState(false);
  const [imageCategory, setImageCategory] = useState(category);
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

        const newImages = imgs.map((imageData) => {
          return { original: imageData.url, thumbnail: imageData.url };
        });
        setImages(imgs);
        setGalleryImages(newImages);
      } else {
        await db
          .collection('images')
          .where('categories', 'array-contains', imageCategory)
          .orderBy('createdAt', 'desc')
          .limit(itemsOnView)
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
    }
    fetchData();
    return () => fetchData;
  }, [itemsOnView, imageCategory]);

  useEffect(() => {
    if (!images.length) return;
    if (inView) setItemsOnView(itemsOnView + 8);
  }, [inView]);

  function handleCategoryChange(e) {
    const { name } = e.currentTarget.dataset;
    setImageCategory(name);
    setItemsOnView(8);
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

  function handleImageClick(x) {
    if (preventFullscreen) {
      if (selectedPhotos.includes(x.url)) {
        const newArr = selectedPhotos.filter((item) => item !== x.url);
        setSelectedPhotos(newArr);
      } else {
        setSelectedPhotos([...selectedPhotos, x.url]);
      }
      setInputs({ ...inputs, photos: [...inputs.photos, x.url] });
      return;
    }
    const idx = galleryImages.findIndex((img) => img.thumbnail === x.url);
    setGalleryImages([
      ...galleryImages.slice(idx, images.length),
      ...galleryImages.slice(0, idx),
    ]);
    setImageViewActive(true);
  }

  return (
    <Container>
      {imageViewActive && (
        <ImageView
          setImageViewActive={setImageViewActive}
          items={galleryImages}
        />
      )}
      <Controls>
        <Control name="all" heading="All" />
        <Control name="smart-lighting" heading="Smart Lighting" />
        <Control name="home-cinema" heading="Home Cinema" />
        <Control name="smart-home" heading="Smart Home" />
        <Control name="multiroom" heading="Multiroom" />
        <Control name="networks" heading="Home Networks" />
        <Control
          name="design-and-consultancy"
          heading="Design and Consultancy"
        />
      </Controls>
      <Images>
        {images.map((x, i) => (
          <ImageContainer
            key={i}
            className={selectedPhotos.includes(x.url) ? 'hl' : ''}
          >
            <Image
              src={x.url}
              layout="fill"
              objectFit="cover"
              onClick={() => handleImageClick(x)}
            />
          </ImageContainer>
        ))}
      </Images>
      <div style={{ height: '6rem' }} ref={ref} />
    </Container>
  );
}
const Container = styled.div`
  h2 {
    margin-bottom: 2rem;
  }
`;
export const Controls = styled.div`
  display: flex;
  margin-bottom: 2rem;
  p {
    margin-right: 2rem;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 1px;
    position: relative;
    font-size: 0.8rem;
    cursor: pointer;
  }
  @media only screen and (max-width: 1000px) {
    flex-wrap: wrap;
    margin-bottom: 0.5rem;
    p {
      font-size: 0.5rem;
      margin-right: 1rem;
      margin-bottom: 0.75rem;
    }
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
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  min-height: 50rem;
  overflow-y: scroll;
  @media only screen and (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ImageContainer = styled.div`
  aspect-ratio: 1;
  min-height: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: 2px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: var(--bs);
  &.hl {
    border: 10px solid var(--teal);
  }
`;
