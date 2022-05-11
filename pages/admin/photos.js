import { useState } from 'react';
import styled from 'styled-components';
import { auth } from '../../db/firebase';
import AdminLogin from '../../components/AdminLogin';
export default function AdminPhotos() {
  const [user, setUser] = useState(null);
  return (
    <div style={{ marginTop: '6rem', minHeight: 'calc(100vh - 6rem)' }}>
      {!auth.currentUser && <AdminLogin setUser={setUser} />}
      {auth.currentUser && <p>proper logged in and that</p>}
    </div>
  );
}
