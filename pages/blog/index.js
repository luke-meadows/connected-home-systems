import { useEffect } from 'react';
import styled from 'styled-components';
import BlogList from '../../components/projects/BlogList';
import ProjectsGrid from '../../components/projects/ProjectsGrid';
import { db } from '../../db/firebase';
export default function Projects() {
  useEffect(() => {
    let projects = [];
    const getBlogs = async () => {
      db.collection('blogs')
        .get()
        .then((snapshot) => {
          snapshot.forEach((shot) => projects.push(shot.data()));
        });
    };

    getBlogs();
    return () => getBlogs();
  });

  return (
    <div>
      <Container>
        <h2>Blog Posts</h2>
      </Container>
      <BlogList />
    </div>
  );
}

const Container = styled.div`
  margin-top: 6rem;
  padding: 2rem 6rem 2rem 6rem;
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
