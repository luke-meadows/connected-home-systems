import styled from 'styled-components';
export default function Faq() {
  return (
    <Container>
      <h2>FAQ's</h2>
      <QuestionContainer>
        <div>
          <p>What kind of tech can I have installed?</p>
          <span>
            <i className="icon-plus" />
          </span>
        </div>
        <div>
          <p>What kind of tech can I have installed?</p>
          <span>
            <i className="icon-plus" />
          </span>
        </div>
        <div>
          <p>What kind of tech can I have installed?</p>
          <span>
            <i className="icon-plus" />
          </span>
        </div>
        <div>
          <p>What kind of tech can I have installed?</p>
          <span>
            <i className="icon-plus" />
          </span>
        </div>
      </QuestionContainer>
    </Container>
  );
}

const Container = styled.div`
  padding: 6rem;
  margin: 0 auto;
  h2 {
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 4px;
    margin-bottom: 2rem;
  }
`;

const QuestionContainer = styled.div`
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 1rem;
    margin-top: 1rem;
    border-bottom: 2px solid black;
    color: var(--grey-text);
    cursor: pointer;
    i {
      color: black;
      &:hover {
        color: var(--teal);
      }
    }
  }
`;
