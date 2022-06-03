import { useState } from 'react';
import { auth } from '../../db/firebase';
import AdminLogin from '../../components/admin-dashboard/AdminLogin';
import ProjectsAdminDashboard from '../../components/admin-dashboard/ProjectsAdminDashboard';
import styled from 'styled-components';
export default function AdminPhotos() {
  const [user, setUser] = useState(null);
  return (
    <Container>
      {!auth.currentUser && <AdminLogin setUser={setUser} />}
      {auth.currentUser && <ProjectsAdminDashboard />}
    </Container>
  );
}

const Container = styled.div`
  margin-top: 6rem;
  min-height: 100vh;
`;
