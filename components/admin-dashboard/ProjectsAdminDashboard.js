import { useState } from 'react';
import styled from 'styled-components';

export default function ProjectsAdminDashboard() {
  const [activeProject, setActiveProject] = useState(null);
  const [createNew, setCreateNew] = useState(false);
  return (
    <Container>
      <h2>Projects</h2>
      {!activeProject && !createNew && (
        <>
          <p className="create-new-project" onClick={() => setCreateNew(true)}>
            Create new project <i className="icon-plus" />
          </p>
          <div className="existing-project">
            <p style={{ fontWeight: 400 }}>Coventry</p>
            <p style={{ textAlign: 'right', cursor: 'pointer' }}>Edit</p>
            <p style={{ textAlign: 'right', cursor: 'pointer', color: 'red' }}>
              Delete
            </p>
          </div>
          <div className="existing-project">
            <p style={{ fontWeight: 400 }}>Coventry</p>
            <p style={{ textAlign: 'right', cursor: 'pointer' }}>Edit</p>
            <p style={{ textAlign: 'right', cursor: 'pointer', color: 'red' }}>
              Delete
            </p>
          </div>
        </>
      )}
      {activeProject && <p>Blog view component w/ option to delete</p>}
      {createNew && (
        <CreateNewProject>
          <p>create new project</p>
          <p>main photo</p>
          <p>paragraphs</p>
          <p>tech installed</p>
          <p>Gallery component to get urls</p>
          <div className="buttons">
            <p className="cancel" onClick={() => setCreateNew(false)}>
              Cancel <i className="icon-cancel-1" />
            </p>
            <p className="save">
              Save <i className="icon-plus" />
            </p>
          </div>
        </CreateNewProject>
      )}
    </Container>
  );
}

const Container = styled.div`
  padding: 3rem 6rem;
  h2 {
    margin-bottom: 2rem;
  }
  .create-new-project {
    background: var(--teal);
    color: white;
    margin-bottom: 2rem;
    padding: 0.5rem 0.25rem 0.5rem 0.75rem;
    cursor: pointer;
  }
  .create-new-project,
  .existing-project,
  .cancel,
  .save {
    border-radius: 4px;
    width: fit-content;
    display: flex;
  }
  .existing-project {
    padding: 0.5rem 0.75rem;
    display: grid;
    grid-template-columns: 60% 20% 20%;
    width: 30rem;
    max-width: 30rem;
    background: var(--grey);
    margin-bottom: 0.5rem;
  }
`;

const CreateNewProject = styled.div`
  .buttons {
    display: flex;
    justify-content: flex-end;
  }
  .cancel,
  .save {
    cursor: pointer;
    padding: 0.5rem 0.25rem 0.5rem 0.75rem;
  }
  .cancel {
    margin-right: 0.5rem;
    background-color: var(--black);
    color: white;
    display: flex;
    align-items: center;
    i {
      transition: color 0.2s ease-in-out;
      font-size: 0.8rem;
      margin-left: 0.25rem;
    }
    &:hover {
      i {
        color: var(--red);
      }
    }
  }
  .save {
    background: var(--teal);
    color: white;
  }
`;
