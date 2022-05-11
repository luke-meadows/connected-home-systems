import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { auth } from '../db/firebase';

export default function Admin() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    console.log(auth.currentUser);
  }, []);
  const loginDetails = {
    email: 'test@connectedhomesystems.co.uk',
    password: 'password123',
  };
  function login() {
    auth
      .signInWithEmailAndPassword(loginDetails.email, loginDetails.password)
      .then(async (userCredential) => {
        setUser(userCredential.user);
      });
  }
  function logout() {
    auth.signOut().then(setUser(null));
  }
  return (
    <div style={{ padding: '12rem 6rem', minHeight: 'calc(100vh)' }}>
      {!auth.currentUser && <h1 onClick={login}>login</h1>}
      {auth.currentUser && <h1 onClick={logout}>logout</h1>}
    </div>
  );
}
