import styled from 'styled-components';
import { testimonialsData } from '../lib/testimonialsData';
import Stars from './Stars';
export default function TestimonialsCards() {
  return (
    <CardContainer>
      {testimonialsData.map((item, i) => {
        return (
          <Card>
            <h4>{item.name}</h4>
            <p>{item.comment}</p>
            <p className="location">{item.location}</p>
            <Stars quantity={item.stars} />
          </Card>
        );
      })}
    </CardContainer>
  );
}

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 1rem;
  margin-top: 4rem;
`;

const Card = styled.div`
  aspect-ratio: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  h4 {
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
  }
  .location {
    color: gray;
    font-size: 0.8rem;
    font-style: italic;
  }
`;
