import styled from 'styled-components';
export default function HomepageBlurb() {
  return (
    <StyledBlurb>
      <h2>Your home has so much potential</h2>
      <p>
        Your home should work for you, it should respond to you, know what you
        like and what you don&apos;t. Now it CAN! When you enter the room the
        lights turn on by themselves and turn off when you leave. Your heating
        knows when and how you like the temperature set by learning your
        routines. These are just a few of the capabilities of a smart home which
        you can achieve with Connected Home Systems.{' '}
        <span style={{ fontWeight: '500' }}>
          With our technology, we can solve your problem and make the smart home
          a simple home.
        </span>
      </p>
      <button>Speak with our experts</button>
    </StyledBlurb>
  );
}

const StyledBlurb = styled.div`
  padding: 8rem 6rem;
  width: 60rem;
  display: flex;

  flex-direction: column;
  h2 {
    margin-bottom: 2rem;
    font-weight: 500;
  }
  p {
    margin: 0 auto;
    line-height: 2;
    word-spacing: 1px;
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
    width: fit-content;
  }
`;
