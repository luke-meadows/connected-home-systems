import Image from 'next/image';
import styled from 'styled-components';
import IMG from '../../public/imgs/service-imgs/smart-home.jpg';
import ContactSection from '../../components/main/ContactSection';
import Cinema from '../../public/imgs/ico/Cinema icon.jpg';
import Control from '../../public/imgs/ico/Control icon.jpg';
import SmartLighting from '../../public/imgs/ico/Lighting Icon.jpg';
import Multiroom from '../../public/imgs/ico/Multiroom icon.jpg';
import Network from '../../public/imgs/ico/Network icon.jpg';
import { useEffect, useState } from 'react';
import { db } from '../../db/firebase';
import ImageView from '../../components/gallery/ImageView';
export default function ProjectPage() {
  const [images, setImages] = useState(null);
  const [galleryImages, setGalleryImages] = useState(null);
  const [imageViewActive, setImageViewActive] = useState(false);

  useEffect(() => {
    let imgs = [];
    async function getImages() {
      await db
        .collection('images')
        .orderBy('createdAt', 'desc')
        .limit(12)
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

    return () => getImages();
  }, []);

  function handleImageClick(x) {
    setImageViewActive(true);
  }

  const serviceIcons = {
    'smart-lighting': SmartLighting,
    control: Control,
    'home-cinema': Cinema,
    'media-room': Cinema,
    multiroom: Multiroom,
    network: Network,
  };
  const data = {
    title: 'Coventry',
    completionDate: 'March 2022',
    img: '',
    paragraphs: [
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi tenetur cum omnis sequi eligendi eos adipisci, illum consequuntur numquam debitis quisquam,',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi tenetur cum omnis sequi eligendi eos adipisci, illum consequuntur numquam debitis quisquam, totam ex quia fugit eius ab! Eaque, amet corrupti. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi tenetur cum omnis sequi eligendi eos adipisci, illum consequuntur numquam debitis quisquam, totam ex quia fugit eius ab! Eaque, amet corrupti.',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi tenetur cum omnis sequi eligendi eos adipisci, illum consequuntur numquam debitis quisquam, totam ex quia fugit eius ab! Eaque, amet corrupti. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi tenetur cum omnis sequi eligendi eos adipisci, illum consequuntur numquam debitis quisquam, totam ex quia fugit eius ab! Eaque, amet corrupti.',
    ],

    services: [
      'smart-lighting',
      'control',
      'media-room',
      'multiroom',
      'network',
      'home-cinema',
    ],
  };
  return (
    <div style={{ position: 'relative' }}>
      {imageViewActive && (
        <ImageView
          setImageViewActive={setImageViewActive}
          items={galleryImages}
        />
      )}
      <PageContainer>
        <HeaderStyles style={{}}>
          <p>{data.completionDate}</p>
          <h2>{data.title}</h2>
        </HeaderStyles>
        <Top>
          <div>
            <p className="header">Job specification</p>
            {data.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <Spacer />
            <p className="header">Technology we installed</p>
            <IconsContainer>
              {data.services.map((service) => {
                const img = serviceIcons[service];
                return (
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      marginRight: '2.5rem',
                    }}
                    key={service}
                  >
                    <IconContainer key={service}>
                      <Image src={img} layout="responsive" alt="" />
                    </IconContainer>
                    <p>
                      {service[0].toLocaleUpperCase() +
                        service.slice(1, service.length).replace(/-/g, ' ')}
                    </p>
                  </div>
                );
              })}
            </IconsContainer>
            <Spacer />
            <Spacer />
          </div>
          <ImageContainer>
            <Image src={IMG} layout="responsive" objectFit="cover" />
          </ImageContainer>
        </Top>
        <p className="header">Images</p>
        <Grid>
          {images &&
            images.map((icon, i) => {
              return (
                <GalleryImageContainer
                  key={i}
                  onClick={() => handleImageClick(i)}
                >
                  <Image src={icon.url} layout="fill" objectFit="cover" />
                </GalleryImageContainer>
              );
            })}
        </Grid>
      </PageContainer>
      <ContactSection />
    </div>
  );
}

const PageContainer = styled.div`
  min-height: calc(100vh - 6rem);
  margin-top: 6rem;
  padding: 3rem 6rem;
  .header {
    font-size: 1rem;
    font-weight: 500;
  }
`;

const HeaderStyles = styled.div`
  align-items: flex-end;
  margin-bottom: 3rem;
  h2 {
    color: var(--black);
    margin-bottom: 3rem;
  }
  p {
    margin-bottom: 1rem;
    color: var(--black);
    font-size: 0.8rem;
    font-weight: 500;
  }
`;

const Top = styled.div`
  display: flex;
  p {
    line-height: 1.5;
    margin-bottom: 1rem;
    max-width: 100ch;
  }
`;

const IconsContainer = styled.div`
  display: flex;
  align-items: flex-end;
  margin-top: 1.8rem;
  p {
    font-size: 0.8rem;
  }
`;

const IconContainer = styled.div`
  position: relative;
  width: 4rem;
  margin-bottom: 0.5rem;
`;
const ImageContainer = styled.div`
  position: relative;
  min-width: 30vw;
  border-radius: 2px;
  overflow: hidden;
  margin-left: 3rem;
  aspect-ratio: 1;
`;
const GalleryImageContainer = styled.div`
  position: relative;
  aspect-ratio: 1;
  border-radius: 3px;
  overflow: hidden;
  box-shadow: var(--bs2);
  cursor: pointer;
`;
export const Spacer = styled.div`
  height: 2rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 2rem;
  gap: 1rem;
`;
