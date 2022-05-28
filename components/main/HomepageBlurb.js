import Image from 'next/image';
import styled from 'styled-components';
import LogoImage from '../../public/logoNoText.svg';
import cinema from '../../public/imgs/service-icons/Cinema icon.png';
import lighting from '../../public/imgs/service-icons/Lighting Icon.png';
import control from '../../public/imgs/service-icons/Control Icon.png';
import multiroom from '../../public/imgs/service-icons/Multiroom icon.png';
import network from '../../public/imgs/service-icons/Network icon.png';

const icons = [
  { title: 'Smart Lighting', img: lighting },
  { title: 'Home Cinema', img: cinema },
  { title: 'Multiroom', img: multiroom },
  { title: 'Control', img: control },
  { title: 'Network', img: network },
];

export default function HomepageBlurb() {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <StyledBlurb>
        <h2 style={{ color: 'var(--teal' }}>Your home has so much potential</h2>
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
          width: 'calc(100% - 60rem)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <div
          style={{
            display: 'flex',
            width: ' 30rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          {icons.map((icon) => {
            return (
              <Icon>
                <div style={{ position: 'relative', width: '6rem' }}>
                  <Image src={icon.img} layout="responsive" />
                </div>
                <p>{icon.title}</p>
              </Icon>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const StyledBlurb = styled.div`
  padding: 10rem 0rem 10rem 6rem;
  width: 50rem;
  display: flex;
  flex-direction: column;
  h2 {
    margin-bottom: 1rem;
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

const Icon = styled.div`
  margin: 0 1.5rem 3rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  p {
    text-transform: uppercase;
    font-size: 0.8rem;
    font-weight: 400;
  }
`;
