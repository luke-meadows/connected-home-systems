import { useEffect, useState } from 'react';
import AdminDashboard from '../../components/admin-dashboard/AdminDashboard';
import AdminLogin from '../../components/admin-dashboard/AdminDashboard';
import { auth } from '../../db/firebase';

export default function Admin() {
  const [user, setUser] = useState(null);
  console.log(auth.currentUser);
  return (
    <div style={{ marginTop: '6rem', minHeight: 'calc(100vh - 6rem)' }}>
      {!auth.currentUser && <AdminLogin setUser={setUser} />}
      {auth.currentUser && <AdminDashboard />}
    </div>
  );
}
