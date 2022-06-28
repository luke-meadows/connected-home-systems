import { useRef, useState } from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';

export default function ContactForm({ setShowForm }) {
  const nameRef = useRef();
  const phoneRef = useRef();
  const emailRef = useRef();
  const confEmailRef = useRef();
  const postcodeRef = useRef();
  const messageRef = useRef();

  const [inputs, setInputs] = useState({
    name: '',
    phone: '',
    email: '',
    confEmail: '',
    postcode: '',
    message: '',
  });

  const refs = {
    name: nameRef,
    phone: phoneRef,
    email: emailRef,
    confEmail: confEmailRef,
    postcode: postcodeRef,
    message: messageRef,
  };

  async function handleSubmit(e) {
    e.preventDefault();
    let shouldFormSubmit = true;
    Object.keys(inputs).forEach((key) => {
      if (inputs[key].length < 1) {
        refs[key].current.classList.add('missing-info');
        shouldFormSubmit = false;
      }
    });
    if (!shouldFormSubmit) return;
    emailjs
      .send('service_wxi2594', 'template_by7dfro', inputs, 'H9CmB3Z21EWw8AfhT')
      .then(
        function (response) {
          clearForm();
          setShowForm(false);
          Object.keys(inputs).forEach((key) => {
            refs[key].current.classList.remove('missing-info');
          });
        },
        function (error) {
          console.log('FAILED...', error);
        }
      );
  }

  function handleChange(e) {
    let { value, name, type } = e.target;
    if (type === 'file') {
      [value] = e.target.files;
    }
    setInputs({ ...inputs, [name]: value });
  }

  function clearForm() {
    setInputs({
      name: '',
      phone: '',
      email: '',
      confEmail: '',
      postcode: '',
      message: '',
    });
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
          ref={nameRef}
        />
        <input
          name="phone"
          value={inputs.phone}
          onChange={handleChange}
          type="text"
          placeholder="Phone Number"
          ref={phoneRef}
        />
        <input
          name="email"
          value={inputs.email}
          onChange={handleChange}
          type="text"
          placeholder="Email"
          ref={emailRef}
        />
        <input
          name="confEmail"
          value={inputs.confEmail}
          onChange={handleChange}
          type="text"
          placeholder="Confirm Email"
          ref={confEmailRef}
        />
      </div>
      <input
        name="postcode"
        value={inputs.postcode}
        onChange={handleChange}
        type="text"
        placeholder="Postcode"
        ref={postcodeRef}
      />
      <textarea
        name="message"
        value={inputs.message}
        onChange={handleChange}
        placeholder="Message"
        ref={messageRef}
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
    width: fit-content;
    font-weight: 500;
    min-width: 10rem;
    &:hover {
      color: var(--teal);
      cursor: pointer;
    }
  }
  .missing-info {
    border-bottom: 1px solid var(--red);

    &::placeholder {
      color: var(--red);
      opacity: 0.8;
    }
  }
`;
