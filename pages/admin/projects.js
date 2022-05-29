import { useState } from 'react';
import { auth } from '../../db/firebase';
import AdminLogin from '../../components/admin-dashboard/AdminLogin';
import ProjectsAdminDashboard from '../../components/admin-dashboard/ProjectsAdminDashboard';

export default function AdminPhotos() {
  const [user, setUser] = useState(null);
  console.log(auth.currentUser);
  return (
    <div style={{ marginTop: '6rem', minHeight: 'calc(100vh - 6rem)' }}>
      {/* {!auth.currentUser && <AdminLogin setUser={setUser} />}
      {auth.currentUser && <ProjectsAdminDashboard />} */}

      <ProjectsAdminDashboard />
    </div>
  );
}
