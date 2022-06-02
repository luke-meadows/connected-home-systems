import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { db } from '../../db/firebase';
export default function ProjectsGrid() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function fetchProjects() {
      let fetchedProjects = [];
      await db
        .collection('projects')
        .get()
        .then((snapshot) => {
          snapshot.forEach((shot) => {
            fetchedProjects.push({ ...shot.data(), id: shot.id });
          });
        });
      setProjects(fetchedProjects);
    }
    fetchProjects();
    return () => fetchProjects();
  }, []);

  const ProjectGridItem = ({ project }) => {
    const [hovered, setHovered] = useState(false);
    return (
      <GridItem
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Image src={project.image} layout="fill" objectFit="cover" />
        {hovered && (
          <Link href={`/projects/${project.id}`}>
            <div className="overlay">
              <h3>{project.title}</h3>
            </div>
          </Link>
        )}
      </GridItem>
    );
  };

  return (
    <Grid>
      {projects.length > 0 &&
        projects.map((project, i) => (
          <ProjectGridItem key={i} project={project} />
        ))}
    </Grid>
  );
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1.5rem;
  margin: 0 6rem 6rem 6rem;
`;
const GridItem = styled.div`
  aspect-ratio: 1;
  position: relative;
  cursor: pointer;
  border-radius: 2px;
  overflow: hidden;
  .overlay {
    position: absolute;
    height: 80%;
    width: 80%;
    background: rgba(0, 0, 0, 0.8);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 2px;

    h3 {
      font-weight: 300;
      color: white;
      font-size: 1.5rem;
      letter-spacing: 1px;
    }
  }
`;
