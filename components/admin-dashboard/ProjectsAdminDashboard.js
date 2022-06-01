import { useState } from 'react';
import styled from 'styled-components';
import CreateNewProject from './CreateNewProject';

export default function ProjectsAdminDashboard() {
  const [activeProject, setActiveProject] = useState(null);
  const [createNew, setCreateNew] = useState(false);
  return (
    <Container>
      <h2>Projects</h2>
      {!activeProject && !createNew && (
        <>
          <p
            className="create-new-project-button"
            onClick={() => setCreateNew(true)}
          >
            Create new project <i className="icon-plus" />
          </p>
          <div className="existing-project-list-item">
            <p style={{ fontWeight: 400 }}>Coventry</p>
            <p style={{ textAlign: 'right', cursor: 'pointer' }}>Edit</p>
            <p style={{ textAlign: 'right', cursor: 'pointer', color: 'red' }}>
              Delete
            </p>
          </div>
          <div className="existing-project-list-item">
            <p style={{ fontWeight: 400 }}>Coventry</p>
            <p style={{ textAlign: 'right', cursor: 'pointer' }}>Edit</p>
            <p style={{ textAlign: 'right', cursor: 'pointer', color: 'red' }}>
              Delete
            </p>
          </div>
        </>
      )}
      {activeProject && <p>Blog view component w/ option to delete</p>}
      {createNew && <CreateNewProject setCreateNew={setCreateNew} />}
    </Container>
  );
}

const Container = styled.div`
  padding: 3rem 6rem;
  h2 {
    margin-bottom: 2rem;
  }
  .create-new-project-button {
    background: var(--teal);
    color: white;
    margin-bottom: 2rem;
    padding: 0.5rem 0.25rem 0.5rem 0.75rem;
    cursor: pointer;
  }
  .create-new-project-button,
  .existing-project-list-item,
  .cancel,
  .save {
    border-radius: 4px;
    width: fit-content;
    display: flex;
  }
  .existing-project-list-item {
    padding: 0.5rem 0.75rem;
    display: grid;
    grid-template-columns: 60% 20% 20%;
    width: 30rem;
    max-width: 30rem;
    background: var(--grey);
    margin-bottom: 0.5rem;
  }
`;
