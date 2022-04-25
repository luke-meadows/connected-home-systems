import styled from 'styled-components';
export default function Stars({ quantity }) {
  return (
    <Container>
      {[...Array(quantity)].map((e, i) => (
        <i key={i} className="icon-twitter" />
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  i {
    color: var(--teal);
  }
`;
