import { useState } from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const [inputs, setInputs] = useState({
    name: '',
    phone: '',
    email: '',
    confEmail: '',
    address: '',
    message: '',
  });
  function handleSubmit(e) {
    e.preventDefault();
    emailjs.send(
      'service_wxi2594',
      'template_by7dfro',
      { ...inputs },
      'H9CmB3Z21EWw8AfhT'
    );
    setInputs({
      name: '',
      phone: '',
      email: '',
      confEmail: '',
      address: '',
      message: '',
    });
  }
  function handleChange(e) {
    let { value, name, type } = e.target;
    if (type === 'file') {
      [value] = e.target.files;
    }
    setInputs({ ...inputs, [name]: value });
  }
  return (
    <Form onSubmit={handleSubmit}>
      <div className="top">
        <input
          name="name"
          value={inputs.name}
          onChange={handleChange}
          type="text"
          placeholder="Name"
        />
        <input
          name="phone"
          value={inputs.phone}
          onChange={handleChange}
          type="text"
          placeholder="Phone Number"
        />
        <input
          name="email"
          value={inputs.email}
          onChange={handleChange}
          type="text"
          placeholder="Email"
        />
        <input
          name="confEmail"
          value={inputs.confEmail}
          onChange={handleChange}
          type="text"
          placeholder="Confirm Email"
        />
      </div>
      <input
        name="address"
        value={inputs.address}
        onChange={handleChange}
        type="address"
        placeholder="Project Address"
      />
      <textarea
        name="message"
        value={inputs.message}
        onChange={handleChange}
        placeholder="Message"
      />
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
    @media only screen and (max-width: 1000px) {
      grid-template-columns: repeat(1, 1fr);
    }
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
