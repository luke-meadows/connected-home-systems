import styled from 'styled-components';
export default function ContactForm() {
  return (
    <Form>
      <div className="top">
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Phone Number" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Confirm Email" />
      </div>
      <input type="address" placeholder="Project Address" />
      <button type="submit">Send</button>
    </Form>
  );
}

const Form = styled.form`
  margin: 0 auto;
  .top {
    grid-gap: 2rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-bottom: 2rem;
  }
  input {
    background: none;
    border: none;
    display: inline-block;
    border-bottom: 1px solid black;
    padding: 0.5rem 0;
    width: 100%;
    font-size: 0.9rem;
    text-transform: uppercase;
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    letter-spacing: 4px;
    &::placeholder {
      color: black;
      opacity: 1;
    }
    &:focus {
      outline: none;
    }
  }
  button {
    margin-top: 2rem;
    border: 2px solid black;
    padding: 0.5rem 3rem;
    font-size: 0.9rem;
    text-transform: uppercase;
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    letter-spacing: 4px;
    &:hover {
      color: var(--teal);
      cursor: pointer;
    }
  }
`;
