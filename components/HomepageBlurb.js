import styled from 'styled-components';
export default function HomepageBlurb() {
  return (
    <StyledBlurb>
      <h3>YOUR HOME has so much potential</h3>
      <p>
        The lights in your home can turn on by themselves when you enter the
        room and then off again when you leave, your heating knows when and how
        you like the temperature set by learning your routines. These and more,
        are the capabilities of a smart home which are achievable through
        independent products and multiple interfaces but our aim is to make the
        smart home a simple home.
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
    text-transform: uppercase;
    text-align: center;
    letter-spacing: 3px;
    margin-bottom: 2rem;
  }
  p {
    font-weight: 500;
    margin: 0 auto;
    line-height: 2;
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
    margin-top: 2rem;
  }
`;
