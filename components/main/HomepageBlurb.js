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
      <div>
        <ImageContainerInner>
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/chs-db.appspot.com/o/test%2Fresize_A%26B%2C%20Smart%20Home%20Systems%20-%20by%20Visually%20Rich%2003029.jpg?alt=media&token=a412cfd5-9f3a-480d-a8d3-372fcaeb01a0"
            layout="fill"
            objectFit="contain"
          />
        </ImageContainerInner>
      </div>
    </Container>
  );
}

const Container = styled.div`
  padding: 3rem 6rem 6rem 6rem;
  display: flex;
  align-items: center;
  @media only screen and (max-width: 800px) {
    padding: 2rem 2rem 2rem 2rem;
  }
`;
const StyledBlurb = styled.div`
  width: 55rem;
  display: flex;
  flex-direction: column;
  margin-right: 6rem;
  @media only screen and (max-width: 800px) {
    min-width: 50vw;
    margin-right: 1rem;
  }
  h2 {
    margin-bottom: 1rem;
    font-weight: 400;
    font-size: 2rem;
    @media only screen and (max-width: 800px) {
      font-size: 1.5rem;
    }
  }
  p {
    margin: 0 auto;
    line-height: 2;
    word-spacing: 1px;
    @media only screen and (max-width: 800px) {
      font-size: 0.8rem;
    }
  }

  button {
    outline: none;
    border: none;
    background-color: var(--white);
    color: var(--teal);
    padding: 0.7rem;
    border: 1px solid var(--teal);
    border-radius: 5px;
    font-size: 0.9rem;
    cursor: pointer;
    margin-top: 1.8rem;
    width: fit-content;
    font-weight: 500;
    @media only screen and (max-width: 800px) {
      font-size: 0.6rem;
      margin-top: 1rem;
      padding: 0.5rem;
    }
  }
`;

const ImageContainerInner = styled.div`
  position: relative;
  width: 25rem;
  height: 25rem;
  @media only screen and (max-width: 800px) {
    width: 40vw;
  }
`;
