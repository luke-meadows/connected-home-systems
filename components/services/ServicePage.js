import Image from 'next/image';
import styled from 'styled-components';
export default function ServicePage({ service }) {
  return (
    <Grid>
      <ImageContainer>
        <Image src={service.img1} layout="fill" objectFit="cover" />
      </ImageContainer>
      <TextContainer>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum
          debitis magni quae natus eius adipisci sequi, nulla id amet. Rem ipsa
          ut similique nulla omnis, perspiciatis, ullam molestias repellendus
          aut ducimus quam eveniet et iusto amet earum non sint officia corrupti
          nemo! Aspernatur natus facilis illo, quisquam odio impedit quis beatae
          asperiores ipsam neque ab inventore alias adipisci. Ratione.
        </p>
      </TextContainer>
      <TextContainer>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum
          debitis magni quae natus eius adipisci sequi, nulla id amet. Rem ipsa
          ut similique nulla omnis, perspiciatis, ullam molestias repellendus
          aut ducimus quam eveniet et iusto amet earum non sint officia corrupti
          nemo! Aspernatur natus facilis illo, quisquam odio impedit quis beatae
          asperiores ipsam neque ab inventore alias adipisci. Ratione doloremque
          dolore odio suscipit, obcaecati maxime voluptatum impedit porro,
          praesentium iure, nemo animi cupiditate? Culpa assumenda impedit quos
          veritatis vitae officia, dolores praesentium, repellendus distinctio
          atque, fuga illum consequuntur recusandae in ratione voluptas illo
          possimus voluptate aliquid quisquam quibusdam quasi enim?
        </p>
      </TextContainer>
      <ImageContainer>
        <Image src={service.img2} layout="fill" objectFit="cover" />
      </ImageContainer>
      <ImageContainer>
        <Image src={service.img3} layout="fill" objectFit="cover" />
      </ImageContainer>
      <TextContainer>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum
          debitis magni quae natus eius adipisci sequi, nulla id amet. Rem ipsa
          ut similique nulla omnis, perspiciatis, ullam molestias repellendus
          aut ducimus quam eveniet et iusto amet earum non sint officia corrupti
          nemo! Aspernatur natus facilis illo, quisquam odio impedit quis beatae
          asperiores ipsam neque ab inventore alias adipisci. Ratione.
        </p>
      </TextContainer>
    </Grid>
  );
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 6rem;
`;

const ImageContainer = styled.div`
  aspect-ratio: 1;
  position: relative;
`;

const TextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    line-height: 2;
  }
`;
