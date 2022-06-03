import { delBasePath } from 'next/dist/shared/lib/router/router';
import { useEffect } from 'react';
import styled from 'styled-components';
import ProjectsGrid from '../../components/projects/ProjectsGrid';
import { db } from '../../db/firebase';
export default function Projects() {
  useEffect(() => {
    let projects = [];
    const getProjects = async () => {
      db.collection('projects')
        .get()
        .then((snapshot) => {
          snapshot.forEach((shot) => projects.push(shot.data()));
        });
    };

    getProjects();
    return () => getProjects();
  });

  return (
    <div>
      <Container>
        <h2>Projects</h2>
        <p>Here are some of the projects we have completed.</p>
      </Container>
      <ProjectsGrid />
    </div>
  );
}

const Container = styled.div`
  margin-top: 6rem;
  padding: 2rem 6rem 2rem 6rem;
  min-height: 50vh;
  h2 {
    margin-bottom: 0rem;
    line-height: 2;
  }
  p {
    width: 80ch;
    line-height: 2;
    font-weight: 400;
  }
`;
