import styled from 'styled-components';
import ProjectsGrid from '../components/projects/ProjectsGrid';
export default function Projects() {
  return (
    <div>
      <Container>
        <h2>Projects</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
          necessitatibus. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Deleniti, necessitatibus.
        </p>
      </Container>
      <ProjectsGrid />
    </div>
  );
}

const Container = styled.div`
  margin-top: 6rem;
  padding: 3rem 6rem 3rem 6rem;
  h2 {
    margin-bottom: 2rem;
  }
  p {
    margin-top: 2rem;
    width: 80ch;
    line-height: 2;
  }
`;
