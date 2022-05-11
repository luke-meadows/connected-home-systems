import styled from 'styled-components';
import { auth } from '../db/firebase';
export default function LogoutButton({ setUser }) {
  function logout() {
    auth.signOut().then(setUser(null));
  }
  return <button onClick={logout}>Logout</button>;
}
