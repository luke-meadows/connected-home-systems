import Link from 'next/link';
import styled from 'styled-components';
import LogoutButton from './LogoutButton';
export default function AdminDashboard({ setUser }) {
  return (
    <Container>
      <h2>Dashboard</h2>
      <LogoutButton setUser={setUser} />
      <Tasks>
        <Link href="/admin/photos">
          <Task>
            <h3>Photos</h3>
          </Task>
        </Link>
        <Task>
          <h3>Blog Posts</h3>
        </Task>
        <Task>
          <h3>Projects</h3>
        </Task>
      </Tasks>
    </Container>
  );
}

const Container = styled.div`
  padding: 6rem;
`;

const Tasks = styled.div`
  margin-top: 3rem;
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
