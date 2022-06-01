import styled from 'styled-components';
import { reviews } from '../../lib/reviews';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import Stars from './Stars';
export default function TestimonialsCards() {
  return (
    <CardContainer>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        freeMode={true}
        loop={true}
        autoplay={true}
        modules={[FreeMode, Pagination, Autoplay]}
        className="mySwiper swiper-mobile"
      >
        {reviews.map((item, i) => {
          return (
            <SwiperSlide
              key={item.name}
              style={{
                display: 'flex',
              }}
            >
              <Card key={i}>
                <h4>
                  {item.name} <span className="location">{item.location}</span>
                </h4>
                <p>&quot;{item.comment}&quot;</p>
                <Stars quantity={item.stars} />
              </Card>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        freeMode={true}
        loop={true}
        autoplay={true}
        modules={[FreeMode, Pagination, Autoplay]}
        className="mySwiper swiper-web"
      >
        {reviews.map((item, i) => {
          return (
            <SwiperSlide
              key={item.name}
              style={{
                display: 'flex',
              }}
            >
              <Card key={i}>
                <h4>
                  {item.name} <span className="location">{item.location}</span>
                </h4>
                <p>&quot;{item.comment}&quot;</p>
                <Stars quantity={item.stars} />
              </Card>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </CardContainer>
  );
}

const CardContainer = styled.div`
  .swiper-mobile {
    display: none;
  }
  @media only screen and (max-width: 800px) {
    padding: 3rem 1rem;
    .swiper-mobile {
      display: initial;
    }
    .swiper-web {
      display: none;
    }
  }
`;

const Card = styled.div`
  padding: 2rem;
  margin: 1rem;
  background: var(--grey3);
  border-radius: 5px;
  box-shadow: var(--bs);
  width: 100%;
  min-height: 18rem;
  @media only screen and (max-width: 800px) {
    margin: 0rem;
    margin-right: 1rem;
  }
  .location {
    font-size: 0.8rem;
    margin-left: 0.5rem;
    font-weight: 300;
    color: var(--teal);
  }
  p {
    margin: 1rem 0 0.5rem 0;
    line-height: 1.2;
    font-size: 0.85rem;
  }
  h4 {
    color: var(--black);
    font-weight: 500;
  }
  @media only screen and (max-width: 800px) {
    min-width: 80vw;
  }
`;
