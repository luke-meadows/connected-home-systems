import { useState } from 'react';
import { auth } from '../../db/firebase';
import AdminLogin from '../../components/admin-dashboard/AdminLogin';
import ProjectsAdminDashboard from '../../components/admin-dashboard/ProjectsAdminDashboard';

export default function AdminPhotos() {
  const [user, setUser] = useState(null);
  console.log(auth.currentUser);
  return (
    <Container>
      {/* {!auth.currentUser && <AdminLogin setUser={setUser} />}
      {auth.currentUser && <ProjectsAdminDashboard />} */}

      <ProjectsAdminDashboard />
    </Container>
  );
}

const Container = styled.div`
  margin-top: 6rem;
  min-height: 100vh;
`;
