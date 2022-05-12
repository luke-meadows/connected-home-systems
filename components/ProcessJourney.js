import Image from 'next/image';
import styled from 'styled-components';
import img from '../public/imgs/living-room.png';
export default function ProcessJourney() {
  return (
    <Journey>
      <h2>The Process Journey</h2>
      <Grid>
        <ProcessImage style={{ aspectRatio: 1 }}>
          <Image src={img} layout="fill" objectFit="cover" />
        </ProcessImage>
        <ProcessLine>
          <div className="line" />
          <div className="square" />
        </ProcessLine>
        <ProcessText style={{ aspectRatio: 1 }}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error saepe
            mollitia placeat harum! Quibusdam, enim! Vitae maiores nesciunt modi
            perferendis voluptates commodi. Nihil sint consequuntur recusandae
            totam ipsa saepe, in ab magnam! Ducimus nisi labore illo, vel unde,
            mollitia, dolore consectetur aspernatur voluptates sunt esse
            architecto commodi vitae eligendi! Cum similique sunt, maxime minima
            repudiandae distinctio obcaecati impedit officia maiores vitae iusto
            totam error voluptates, ut, ipsa saepe tempore. Doloremque
            asperiores sequi, possimus quo praesentium hic eius alias sint. Odit
            adipisci aliquam unde sit beatae obcaecati corrupti error veritatis
            quia. Debitis sed ex asperiores optio quisquam distinctio magnam.
            Quaerat, in.
          </p>
        </ProcessText>
        <ProcessText style={{ aspectRatio: 1 }}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error saepe
            mollitia placeat harum! Quibusdam, enim! Vitae maiores nesciunt modi
            perferendis voluptates commodi. Nihil sint consequuntur recusandae
            totam ipsa saepe, in ab magnam! Ducimus nisi labore illo, vel unde,
            mollitia, dolore consectetur aspernatur voluptates sunt esse
            architecto commodi vitae eligendi! Cum similique sunt, maxime minima
            repudiandae distinctio obcaecati impedit officia maiores vitae iusto
            totam error voluptates, ut, ipsa saepe tempore. Doloremque
            asperiores sequi, possimus quo praesentium hic eius alias sint. Odit
            adipisci aliquam unde sit beatae obcaecati corrupti error veritatis
            quia. Debitis sed ex asperiores optio quisquam distinctio magnam.
            Quaerat, in.
          </p>
        </ProcessText>
        <ProcessLine>
          <div className="line" />
          <div className="square" />
        </ProcessLine>
        <ProcessImage style={{ aspectRatio: 1 }}>
          <div>
            <Image src={img} layout="fill" objectFit="cover" />
          </div>
        </ProcessImage>
        <ProcessImage style={{ aspectRatio: 1 }}>
          <Image src={img} layout="fill" objectFit="cover" />
        </ProcessImage>
        <ProcessLine>
          <div className="line" />
          <div className="square" />
        </ProcessLine>
        <ProcessText style={{ aspectRatio: 1 }}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error saepe
            mollitia placeat harum! Quibusdam, enim! Vitae maiores nesciunt modi
            perferendis voluptates commodi. Nihil sint consequuntur recusandae
            totam ipsa saepe, in ab magnam! Ducimus nisi labore illo, vel unde,
            mollitia, dolore consectetur aspernatur voluptates sunt esse
            architecto commodi vitae eligendi! Cum similique sunt, maxime minima
            repudiandae distinctio obcaecati impedit officia maiores vitae iusto
            totam error voluptates, ut, ipsa saepe tempore. Doloremque
            asperiores sequi, possimus quo praesentium hic eius alias sint. Odit
            adipisci aliquam unde sit beatae obcaecati corrupti error veritatis
            quia. Debitis sed ex asperiores optio quisquam distinctio magnam.
            Quaerat, in.
          </p>
        </ProcessText>
      </Grid>
    </Journey>
  );
}

const Journey = styled.div`
  padding: 0 6rem 0rem 6rem;
  h2 {
    margin-bottom: 2rem;
  }
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: 45% 10% 45%;
  grid-template-columns: auto 8rem auto;
`;

const ProcessText = styled.div`
  display: flex;
  align-items: center;
  p {
    line-height: 2;
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
