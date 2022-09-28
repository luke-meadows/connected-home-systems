import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { db } from '../../db/firebase';
import CreateNewBlog from './CreateNewBlog';
import { auth } from '../../db/firebase';
import AdminLogin from './AdminLogin';

export default function BlogAdminDashboard() {
  const [activeProject, setActiveProject] = useState(null);
  const [createNew, setCreateNew] = useState(false);
  const [projects, setProjects] = useState([]);
  async function fetchProjects() {
    let fetchedProjects = [];
    await db
      .collection('blogs')
      .get()
      .then((snapshot) => {
        snapshot.forEach((shot) => {
          fetchedProjects.push({ ...shot.data(), id: shot.id });
        });
      });
    setProjects(fetchedProjects);
  }
  useEffect(() => {
    fetchProjects();
    return () => fetchProjects();
  }, [createNew]);

  function deleteProject(id) {
    db.collection('blogs').doc(id).delete();
    fetchProjects();
  }
  const [user, setUser] = useState(null);
  console.log(auth.currentUser);
  return (
    <Container>
      {!auth.currentUser && <AdminLogin setUser={setUser} />}
      {auth.currentUser && (
        <>
          <h2>Blogs</h2>
          {!activeProject && !createNew && (
            <>
              <p
                className="create-new-blog-button"
                onClick={() => setCreateNew(true)}
              >
                Create new Blog Post <i className="icon-plus" />
              </p>
              {projects &&
                projects.map((project) => {
                  return (
                    <div
                      key={project.image}
                      className="existing-blog-list-item"
                    >
                      <p style={{ fontWeight: 400 }}>{project.title}</p>
                      {/* <p style={{ textAlign: 'right', cursor: 'pointer' }}>Edit</p> */}
                      <p
                        onClick={() => deleteProject(project.id)}
                        style={{
                          textAlign: 'right',
                          cursor: 'pointer',
                          color: 'red',
                        }}
                      >
                        Delete
                      </p>
                    </div>
                  );
                })}
            </>
          )}
          {activeProject && <p>Blog view component w/ option to delete</p>}
          {createNew && <CreateNewBlog setCreateNew={setCreateNew} />}
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
  .create-new-blog-button {
    background: var(--teal);
    color: white;
    margin-bottom: 2rem;
    padding: 0.5rem 0.25rem 0.5rem 0.75rem;
    cursor: pointer;
  }
  .create-new-blog-button,
  .existing-blog-list-item,
  .cancel,
  .save {
    border-radius: 4px;
    width: fit-content;
    display: flex;
  }
  .existing-blog-list-item {
    padding: 0.5rem 0.75rem;
    display: grid;
    grid-template-columns: 80% 20%;
    width: 20rem;
    max-width: 30rem;
    background: var(--grey);
    margin-bottom: 0.5rem;
  }
`;
