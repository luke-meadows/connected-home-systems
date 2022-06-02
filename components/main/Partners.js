import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import Image from 'next/image';
import styled from 'styled-components';
import { partners } from '../../lib/partners';
export default function Partners() {
  return (
    <Container>
      <h2>Our trusted partners</h2>
      <div className="swiper-mobile">
        <Swiper
          slidesPerView={4}
          spaceBetween={5}
          freeMode={true}
          loop={true}
          autoplay={true}
          modules={[FreeMode, Pagination, Autoplay]}
          className="mySwiper"
        >
          {partners.map((partner) => {
            return (
              <SwiperSlide
                key={partner.name}
                style={{
                  display: 'flex',
                }}
              >
                <a href={partner.url} target="blank">
                  <ImageContainer>
                    <Image
                      src={partner.logo}
                      layout="fill"
                      objectFit="contain"
                    />
                  </ImageContainer>
                </a>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="swiper-web">
        <Swiper
          slidesPerView={6}
          spaceBetween={10}
          freeMode={true}
          loop={true}
          autoplay={true}
          modules={[FreeMode, Pagination, Autoplay]}
          className="mySwiper"
        >
          {partners.map((partner) => {
            return (
              <SwiperSlide
                key={partner.name}
                style={{
                  display: 'flex',
                }}
              >
                <a href={partner.url} target="blank">
                  <ImageContainer>
                    <Image
                      src={partner.logo}
                      layout="fill"
                      objectFit="contain"
                    />
                  </ImageContainer>
                </a>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </Container>
  );
}

const Container = styled.div`
  padding: 6rem;
  background: var(--grey);
  h2 {
    color: var(--black);
    font-weight: 400;
    margin-bottom: 2rem;
  }
  .swiper-mobile {
    display: none;
  }
  @media only screen and (max-width: 1000px) {
    padding: 3rem 1rem;
    .swiper-mobile {
      display: initial;
    }
    .swiper-web {
      display: none;
    }
    h2 {
      font-size: 1.5rem;
    }
  }
`;

const ImageContainer = styled.div`
  height: 10rem;
  width: 10rem;
  position: relative;
  @media only screen and (max-width: 1000px) {
    height: 5rem;
    width: 5rem;
  }
`;
