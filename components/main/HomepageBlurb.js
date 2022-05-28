import Image from 'next/image';
import styled from 'styled-components';
import BlurbImage from '../../public/blurb-image.png';

export default function HomepageBlurb() {
  return (
    <Container>
      <StyledBlurb>
        <h2>Your home has so much potential!</h2>
        <p>
          Your home should work for you, it should respond to you, know what you
          like and what you don&apos;t. Now it CAN! When you enter the room the
          lights turn on by themselves and turn off when you leave. Your heating
          knows when and how you like the temperature set by learning your
          routines. These are just a few of the capabilities of a smart home
          which you can achieve with Connected Home Systems.{' '}
          <span style={{ fontWeight: '500' }}>
            With our technology, we can solve your problem and make the smart
            home a simple home.
          </span>
        </p>
        <button>Speak with our experts</button>
      </StyledBlurb>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div>
          <ImageContainerInner>
            <Image src={BlurbImage} layout="responsive" objectFit="contain" />
          </ImageContainerInner>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  padding: 6rem 6rem 6rem 6rem;
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
`;
const StyledBlurb = styled.div`
  width: 55rem;
  display: flex;
  flex-direction: column;
  margin-right: 6rem;
  h2 {
    margin-bottom: 1rem;
    font-weight: 500;
    font-weight: 400;
    /* color: var(--black); */
    font-size: 2rem;
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

const ImageContainerInner = styled.div`
  position: relative;
  width: 25rem;
`;
