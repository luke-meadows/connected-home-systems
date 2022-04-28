import styled from 'styled-components';
export default function HomepageBlurb() {
  return (
    <StyledBlurb>
      <h3>YOUR HOME IS CAPABLE OF SO MUCH MORE</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui debitis
        officiis alias cumque itaque error magni culpa voluptate dolorum, quo
        aperiam autem soluta distinctio natus, eligendi amet modi, porro eum
        cupiditate quis sapiente.
      </p>
      <button>Speak with our experts</button>
    </StyledBlurb>
  );
}

const StyledBlurb = styled.div`
  padding: 6rem;
  width: 60rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  h3 {
    text-align: center;
    letter-spacing: 2px;
    margin-bottom: 2rem;
  }
  p {
    font-weight: 500;

    /* color: var(--teal); */
    margin: 0 auto;
    line-height: 2;
  }
  .placeholder {
    color: red;
    opacity: 0.6;
    font-size: 0.8rem;
    margin-left: 10rem;
  }

  button {
    outline: none;
    border: none;
    background-color: var(--teal);
    padding: 1rem;
    color: white;
    border-radius: 2px;
    font-size: 0.9rem;
    cursor: pointer;
  }
`;
