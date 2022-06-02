import Image from 'next/image';
import styled from 'styled-components';
import Expectations from '../../public/imgs/expectations.jpg';
import Installation from '../../public/imgs/installation.jpg';
import Design from '../../public/imgs/service-imgs/design1.jpg';
import Maintenance from '../../public/imgs/maintenace-journey.jpg';

export default function ProcessJourney() {
  return (
    <Journey>
      <h2>The Process Journey</h2>
      <Grid>
        <ProcessImage
          style={{ aspectRatio: 1, borderRadius: '2px', overflow: 'hidden' }}
        >
          <Image src={Expectations} layout="fill" objectFit="cover" />
        </ProcessImage>
        <ProcessLine>
          <div className="line" />
          <div className="square" />
        </ProcessLine>
        <ProcessText
          style={{ aspectRatio: 1, borderRadius: '2px', overflow: 'hidden' }}
        >
          <h3>Expectations</h3>
          <p>
            From the outset we are open about the specification of the equipment
            and the costs giving you full control of your smart home
            improvement.
          </p>
        </ProcessText>
        <ProcessText
          style={{ aspectRatio: 1, borderRadius: '2px', overflow: 'hidden' }}
        >
          <h3>Design</h3>
          <p>
            This is Critical for success. If it&apos;s not designed correctly it
            will fail.
          </p>
          <p style={{ fontWeight: 500, marginTop: '1rem' }}>This includes:</p>

          <ul>
            <li>Correct cabling infrastructure.</li>
            <li>
              Network design - smart home products rely on a solid and robust
              network.
            </li>
            <li>Correct hardware choice.</li>
            <li>Future expandability.</li>
          </ul>
        </ProcessText>
        <ProcessLine>
          <div className="line" />
          <div className="square" />
        </ProcessLine>
        <ProcessImage
          style={{ aspectRatio: 1, borderRadius: '2px', overflow: 'hidden' }}
        >
          <div>
            <Image src={Design} layout="fill" objectFit="cover" />
          </div>
        </ProcessImage>
        <ProcessImage
          style={{ aspectRatio: 1, borderRadius: '2px', overflow: 'hidden' }}
        >
          <Image src={Installation} layout="fill" objectFit="cover" />
        </ProcessImage>
        <ProcessLine>
          <div className="line" />
          <div className="square" />
        </ProcessLine>
        <ProcessText
          style={{ aspectRatio: 1, borderRadius: '2px', overflow: 'hidden' }}
        >
          <h3>Installation</h3>
          <p>
            If there is interior work to be completed we will discuss this with
            you beforehand. Once we begin our qualified engineers follow the
            technical installation procedures for every cable to the various
            hardware pieces we have specified.The system is programmed to the
            specification ready for use and implementation.
          </p>
        </ProcessText>
        <ProcessText
          style={{ aspectRatio: 1, borderRadius: '2px', overflow: 'hidden' }}
        >
          <h3>Maintenance</h3>
          <p>
            Ensuring the hardware is kept up to date and continues to function
            as it was designed to.
          </p>
        </ProcessText>
        <ProcessLine>
          <div className="line" />
          <div className="square" />
        </ProcessLine>
        <ProcessImage
          style={{ aspectRatio: 1, borderRadius: '2px', overflow: 'hidden' }}
        >
          <Image src={Maintenance} layout="fill" objectFit="cover" />
        </ProcessImage>
      </Grid>
    </Journey>
  );
}

const Journey = styled.div`
  padding: 0 6rem 0rem 6rem;
  h2 {
    margin: 4rem 0 6rem 0;
    text-align: center;
  }
  @media only screen and (max-width: 1000px) {
    display: none;
    padding: 0 1rem;

    h2 {
      margin: 0;
      margin-bottom: 2rem;
      text-align: left;
      font-weight: 400;
      font-size: 1.5rem;
    }
  }
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: auto 8rem auto;
  max-width: 70rem;
  margin: 0 auto;
  @media only screen and (max-width: 1000px) {
    grid-template-columns: auto 3rem auto;
  }
`;

const ProcessText = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  h3 {
    margin-bottom: 1rem;
    color: var(--black);
  }
  ul {
    padding-left: 0.5rem;
  }
  p,
  li {
    line-height: 2;
  }
  li {
    list-style-position: inside;
  }

  @media only screen and (max-width: 1000px) {
    h3 {
      margin-bottom: 0.25rem;
      font-size: 1rem;
    }
    ul {
      padding-left: 0.5rem;
    }
    p,
    li {
      line-height: 2;
      font-size: 0.8rem;
    }
    li {
      list-style-position: inside;
    }
  }
`;
const ProcessImage = styled.div`
  padding: 3rem 0;
  position: relative;
`;
const ProcessLine = styled.div`
  position: relative;
  .line {
    width: 4px;
    margin: 0 auto;
    height: 100%;
    background: var(--grey2);
  }
  .square {
    width: 20px;
    height: 20px;
    background: var(--teal);
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 1px;
  }
`;
