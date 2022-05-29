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
      <textarea placeholder="Message" />
      <button type="submit">Send</button>
    </Form>
  );
}

const Form = styled.form`
  margin: 0 auto;
  .top {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 4rem;
  }
  button {
    outline: none;
    border: none;
    background-color: var(--grey);
    color: var(--black);
    padding: 0.7rem;
    border: 1px solid var(--black);
    border-radius: 5px;
    font-size: 0.9rem;
    cursor: pointer;
    margin-top: 1rem;
    width: fit-content;
    font-weight: 500;
    min-width: 10rem;
    &:hover {
      color: var(--teal);
      cursor: pointer;
    }
  }
`;
