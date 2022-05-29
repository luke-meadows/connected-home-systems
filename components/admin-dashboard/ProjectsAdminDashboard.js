import { useState } from 'react';
import styled from 'styled-components';
import Gallery, { Controls } from '../gallery/Gallery';
import ManagePhotos from './ManagePhotos';
export default function ProjectsAdminDashboard() {
  const [activeBlog, setActiveBlog] = useState(null);
  const [createNew, setCreateNew] = useState(null);
  return (
    <Container>
      <h2>Projects</h2>
      {!activeBlog && (
        <>
          <p>create new project</p>
          <p>list of project</p>
        </>
      )}
      {activeBlog && <p>Blog view component w/ option to delete</p>}
      {createNew && (
        <>
          <p>create new project</p>
          <p>main photo</p>
          <p>paragraphs</p>
          <p>tech installed</p>
          <h1>Gallery component to get urls</h1>
        </>
      )}
    </Container>
  );
}

const Container = styled.div`
  padding: 3rem 6rem;
  h2 {
    margin-bottom: 2rem;
  }
`;
