import styled from 'styled-components';
import { reviews } from '../../lib/reviews';

import Stars from './Stars';
export default function TestimonialsCards() {
  return (
    <Container>
      <i className="icon-left-dir" />

      <CardContainer>
        {reviews.map((item, i) => {
          return (
            <Card key={i}>
              <h4>
                {item.name} <span className="location">West Midlands</span>
              </h4>
              <p>&quot;{item.comment}&quot;</p>
              <Stars quantity={item.stars} />
            </Card>
          );
        })}
      </CardContainer>
      <i className="icon-right-dir" />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  i {
    font-size: 1.2rem;
    cursor: pointer;
  }
  @media only screen and (max-width: 800px) {
    .icon-right-dir {
      display: none;
    }
    .icon-left-dir {
      display: none;
    }
  }
`;
const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  margin: 0rem 1rem;
  @media only screen and (max-width: 800px) {
    display: flex;
    grid-template-columns: 0;
    grid-gap: 1rem;
    margin: 0rem;
    overflow-y: scroll;
    .icon-right-dir {
      display: none;
    }
  }
`;

const Card = styled.div`
  padding: 2rem;
  background: var(--grey3);
  border-radius: 5px;
  box-shadow: var(--bs);
  .location {
    font-size: 0.8rem;
    font-style: italic;
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
