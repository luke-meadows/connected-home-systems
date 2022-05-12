import styled from 'styled-components';
import { auth } from '../db/firebase';
export default function LogoutButton({ setUser }) {
  function logout() {
    auth.signOut().then(setUser(null)).then(window.location.reload());
  }
  return <Button onClick={logout}>Log out</Button>;
}
const Button = styled.button`
  border: 2px solid black;
  padding: 0.5rem 2rem;
  font-size: 0.9rem;
  text-transform: uppercase;
  font-family: 'Raleway', sans-serif;
  font-weight: 700;
  letter-spacing: 4px;
  background: none;
  &:hover {
    color: var(--teal);
    cursor: pointer;
  }
`;
