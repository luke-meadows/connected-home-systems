import styled from 'styled-components';
export default function Stars({ quantity }) {
  return (
    <Container>
      {[...Array(quantity)].map((e, i) => (
        <i key={i} className="icon-star" />
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  margin-left: -0.3rem;
  i {
    color: var(--teal);
  }
`;
