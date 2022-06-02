import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import BlurbImage from '../../public/blurb-image.png';

export default function HomepageBlurb() {
  return (
    <Main>
      <div className="mobile-blurb">
        <h2>Your home has so much potential!</h2>
        <div className="text">
          <p>
            Your home should work for you, it should respond to you, know what
            you like and what you don&apos;t. Now it CAN! When you enter the
            room the lights turn on by themselves and turn off when you leave.
            Your heating knows when and how you like the temperature set by
            learning your routines.
          </p>
          <ImageContainerMobile>
            <Image src={BlurbImage} layout="responsive" objectFit="contain" />
          </ImageContainerMobile>
          <p>
            These are just a few of the capabilities of a smart home which you
            can achieve with Connected Home Systems. With our technology, we can
            solve your problem and make the smart home a simple home.
          </p>
          <Link href="/contact">
            <button className="button mob-button">
              Speak with our experts
            </button>
          </Link>
        </div>
      </div>
      <div className="web-blurb">
        <Container>
          <StyledBlurb>
            <h2>Your home has so much potential!</h2>
            <p>
              Your home should work for you, it should respond to you, know what
              you like and what you don&apos;t. Now it CAN! When you enter the
              room the lights turn on by themselves and turn off when you leave.
              Your heating knows when and how you like the temperature set by
              learning your routines. These are just a few of the capabilities
              of a smart home which you can achieve with Connected Home Systems.
              With our technology, we can solve your problem and make the smart
              home a simple home.
            </p>
            <Link href="/contact">
              <button className="button">Speak with our experts</button>
            </Link>
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
                <Image
                  src={BlurbImage}
                  layout="responsive"
                  objectFit="contain"
                />
              </ImageContainerInner>
            </div>
          </div>
        </Container>
      </div>
    </Main>
  );
}

const Main = styled.div`
  margin: 0;
  .text {
    display: flex;

    flex-direction: column;
  }
  .mobile-blurb {
    display: none;
    position: relative;
    h2 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
      font-weight: 400;
    }
    p {
      font-size: 0.8rem;
      float: left;
      line-height: 2;
    }
  }

  @media only screen and (max-width: 1000px) {
    margin: 4rem 2rem 6rem 2rem;
    .mobile-blurb {
      display: initial;
    }
    .web-blurb {
      display: none;
    }
  }
  .button {
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
    @media only screen and (max-width: 1000px) {
      font-size: 0.8rem;
      margin-top: 1rem;
      padding: 0.5rem;
      padding: 0.5rem 0.7rem 0.6rem 0.7rem;
      background: var(--teal);
      color: white;
    }
  }
`;

const Container = styled.div`
  padding: 3rem 6rem 6rem 6rem;
  display: flex;
  align-items: center;
  margin: 0 auto;
  max-width: 1800px;
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
  }
  p {
    margin: 0 auto;
    line-height: 2;
    word-spacing: 1px;
  }
`;

const ImageContainerInner = styled.div`
  position: relative;
  width: 25rem;
`;

const ImageContainerMobile = styled.div`
  position: relative;
  width: 8rem;
  margin: 1rem auto 2rem auto;
`;
