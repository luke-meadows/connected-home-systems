import { useState } from 'react';
import styled from 'styled-components';
import { auth } from '../../db/firebase';
export default function AdminLogin({ setUser }) {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  function handleInputChange(e) {
    const { name, value } = e.currentTarget;
    setCredentials({ ...credentials, [name]: value });
  }
  function login(e) {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(async (userCredential) => {
        setUser(userCredential.user);
        2;
      });
  }
  return (
    <Container>
      <h2>Sign in</h2>
      <form action="submit" onSubmit={login}>
        <input
          name="email"
          onChange={handleInputChange}
          value={credentials.email}
          type="text"
          placeholder="Email"
        />
        <input
          name="password"
          onChange={handleInputChange}
          value={credentials.password}
          type="password"
          placeholder="Password"
        />
        <button type="submit">Submit</button>
      </form>
    </Container>
  );
}

const Container = styled.div`
  padding: 6rem;
  form {
    width: 30rem;
    margin-top: 2rem;
  }
  button {
    border: 2px solid black;
    padding: 0.5rem 3rem;
    font-size: 0.9rem;

    background: none;
    &:hover {
      color: var(--teal);
      cursor: pointer;
    }
  }
`;
