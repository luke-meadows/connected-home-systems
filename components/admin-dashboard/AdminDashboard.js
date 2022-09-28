import Link from 'next/link';
import styled from 'styled-components';
import LogoutButton from './LogoutButton';
export default function AdminDashboard({ setUser }) {
  return (
    <Container>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <h2>Dashboard</h2>
      </div>
      <Tasks>
        <Link href="/admin/photos">
          <Task>
            <h3>Photos</h3>
          </Task>
        </Link>
        {/* <Task>
          <h3>Blog Posts</h3>
        </Task> */}
        <Link href="/admin/projects">
          <Task>
            <h3>Projects</h3>
          </Task>
        </Link>
        <Link href="/admin/blogPosts">
          <Task>
            <h3>Blog Posts</h3>
          </Task>
        </Link>
      </Tasks>
    </Container>
  );
}

const Container = styled.div`
  padding: 3rem 6rem;
`;

const Tasks = styled.div`
  margin-top: 6rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
`;

const Task = styled.div`
  border: 2px solid black;
  text-align: center;
  padding: 3rem;
  cursor: pointer;
`;
