import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { db } from '../../db/firebase';
export default function BlogList() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    async function fetchProjects() {
      let fetchedBlogs = [];
      await db
        .collection('blogs')
        .get()
        .then((snapshot) => {
          snapshot.forEach((shot) => {
            fetchedBlogs.push({ ...shot.data(), id: shot.id });
          });
        });
      setBlogs(fetchedBlogs);
    }
    fetchProjects();
    return () => fetchProjects();
  }, []);

  const BlogItem = ({ blog }) => {
    const [hovered, setHovered] = useState(false);
    return (
      <StyledBlogItem>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: '2rem' }}>
          <h2>{blog.title}</h2>
          {/* <p>{blog.date}</p> */}
        </div>
        <div className="body">
          <div className="img-container">
            <Image src={blog.image} layout="fill" objectFit="cover" />
          </div>
          <p>{blog.text}</p>
        </div>
      </StyledBlogItem>
    );
  };

  return (
    <List>
      {blogs.length > 0 && blogs.map((blog, i) => <BlogItem blog={blog} />)}
    </List>
  );
}

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);

  margin: 0 6rem 6rem 6rem;
`;

const StyledBlogItem = styled.div`
  width: 100%;
  padding: 5rem 0;
  border-bottom: 1px solid black;
  h2 {
    font-weight: 400;
    margin: 0;
    padding: 0;
  }
  .body {
    margin-top: 2rem;
  }
  .img-container {
    position: relative;
    margin-right: 1rem;
    height: 20rem;
    width: 20rem;
    float: left;
    margin-right: 2rem;
    margin-bottom: 1rem;
  }
`;
