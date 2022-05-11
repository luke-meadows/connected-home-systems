import { useEffect, useState } from 'react';
import styled from 'styled-components';
import AdminDashboard from '../../components/AdminDashboard';
import AdminLogin from '../../components/AdminLogin';
import { auth } from '../../db/firebase';

export default function Admin() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    console.log(auth.currentUser);
  }, []);

  return (
    <div style={{ marginTop: '6rem', minHeight: 'calc(100vh - 6rem)' }}>
      {!auth.currentUser && <AdminLogin setUser={setUser} />}
      {auth.currentUser && <AdminDashboard setUser={setUser} />}
    </div>
  );
}
