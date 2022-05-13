import Image from 'next/image';
import { useState } from 'react';
import styled from 'styled-components';
import { portfolioData } from '../../lib/portfolioData';
export default function ProjectsGrid() {
  const ProjectGridItem = ({ item }) => {
    const [hovered, setHovered] = useState(false);
    return (
      <GridItem
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Image src={item.img} layout="fill" objectFit="cover" />
        {hovered && (
          <div className="overlay">
            <h3>{item.location}</h3>
          </div>
        )}
      </GridItem>
    );
  };

  return (
    <Grid>
      {portfolioData.map((item, i) => (
        <ProjectGridItem key={i} item={item} />
      ))}
    </Grid>
  );
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  margin: 0 6rem 6rem 6rem;
`;
const GridItem = styled.div`
  aspect-ratio: 1;
  position: relative;
  cursor: pointer;
  .overlay {
    position: absolute;
    height: 80%;
    width: 80%;
    background: rgba(0, 0, 0, 0.7);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    h3 {
      text-transform: uppercase;
      font-weight: 500;
      letter-spacing: 12px;
      color: white;
    }
  }
`;
