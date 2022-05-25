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
    <div
      style={{
        padding: '6rem',
        background: 'var(--grey)',
      }}
    >
      <h2>Our trusted partners</h2>
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

                // justifyContent: 'center',
              }}
            >
              <ImageContainer>
                <Image src={partner.logo} layout="fill" objectFit="contain" />
              </ImageContainer>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

const ImageContainer = styled.div`
  height: 10rem;
  width: 10rem;
  position: relative;
`;
