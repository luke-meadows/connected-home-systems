import styled from 'styled-components';
export default function FormSubmissionSuccess() {
  return (
    <Container>
      <div className="success">
        <p>Thank you</p>
        <i className="icon-ok-circled" />
      </div>
      <p>One of our team will get back to you soon!</p>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
  .success {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    p,
    i {
      font-size: 2rem;
    }
    i {
      color: var(--teal);
      margin-left: 0.5rem;
    }
  }
`;
