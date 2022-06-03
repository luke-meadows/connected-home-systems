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
      <div className="swiper-mobile no-select">
        {reviews.map((item, i) => {
          return (
            <Card key={i}>
              <h4>
                {item.name} <span className="location">{item.location}</span>
              </h4>
              <p>&quot;{item.comment}&quot;</p>
              <Stars quantity={item.stars} />
            </Card>
          );
        })}
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        freeMode={true}
        loop={true}
        autoplay={true}
        // Pagination={true}
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
  margin: 0 5rem;
  .swiper-mobile {
    display: none;
  }
  @media only screen and (max-width: 1000px) {
    margin: 0;
    overflow-y: scroll;
    padding: 1rem;
    display: flex;
    width: 100vw;
    .swiper-web {
      display: none;
    }
    .swiper-mobile {
      display: flex;
      padding-left: 1rem;
    }
  }
  .no-select {
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
  }
`;

const Card = styled.div`
  padding: 2rem;
  margin: 1rem;
  background: var(--grey3);
  border-radius: 5px;
  box-shadow: var(--bs);
  min-height: 19rem;
  width: 100%;
  @media only screen and (max-width: 1000px) {
    margin: 0rem;
    margin-right: 1rem;
    box-shadow: var(--bs3);
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
  @media only screen and (max-width: 1000px) {
    min-width: 80vw;
  }
`;
