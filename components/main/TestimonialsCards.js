import styled from 'styled-components';
import { testimonialsData } from '../../lib/testimonialsData';
import Stars from './Stars';
export default function TestimonialsCards() {
  return (
    <Container>
      <i className="icon-left-dir" />

      <CardContainer>
        {testimonialsData.map((item, i) => {
          return (
            <Card key={i}>
              <h4>{item.name}</h4>
              <p>{item.comment}</p>
              <p className="location">{item.location}</p>
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
`;
const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 2rem;
  margin: 0rem 1rem;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 1rem;

  .location {
    color: gray;
    font-size: 0.8rem;
    font-style: italic;
    margin-bottom: 0.5rem;
  }
  p {
    margin-top: 1rem;
  }
`;
