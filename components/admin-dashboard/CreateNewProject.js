import Image from 'next/image';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { AddPhoto } from './ManagePhotos';
import { ImageContainer } from './ManagePhotos';

export default function CreateNewProject({ setCreateNew }) {
  const [preview, setPreview] = useState(undefined);
  const [inputs, setInputs] = useState({
    image: '',
    title: '',
    text: '',
    technology: '',
  });
  function handleChange(e) {
    let { value, name, type } = e.target;
    if (type === 'file') {
      [value] = e.target.files;
    }
    setInputs({ ...inputs, [name]: value });
  }

  useEffect(() => {
    if (!inputs.image) {
      setPreview(undefined);
      return;
    }
    const objectUrl = URL.createObjectURL(inputs.image);
    setPreview(objectUrl);
    // Free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [inputs.image]);

  return (
    <Container>
      <p className="header">Create new project</p>
      <form action="">
        <FormContainer>
          {preview ? (
            <ImageContainer>
              <i className="icon-cancel-1" onClick={handleCancel} />
              <Image src={preview} layout="fill" objectFit="cover" />
            </ImageContainer>
          ) : (
            <label htmlFor="image">
              <AddPhoto>
                <i className="icon-plus" />
                <p>Add Photo</p>
              </AddPhoto>
            </label>
          )}
          <input
            style={{ display: 'none' }}
            type="file"
            id="image"
            name="image"
            onChange={handleChange}
          />
        </FormContainer>
      </form>
      <p>paragraphs</p>
      <p>tech installed</p>
      <p>Gallery component to get urls</p>
      <div className="buttons">
        <p className="cancel" onClick={() => setCreateNew(false)}>
          Cancel <i className="icon-cancel-1" />
        </p>
        <p className="save">
          Save <i className="icon-plus" />
        </p>
      </div>
    </Container>
  );
}

const Container = styled.div`
  .header {
    font-weight: 500;
    margin-bottom: 2rem;
  }
  .buttons {
    display: flex;
    justify-content: flex-end;
  }
  .cancel,
  .save {
    cursor: pointer;
    padding: 0.5rem 0.25rem 0.5rem 0.75rem;
  }
  .cancel {
    margin-right: 0.5rem;
    background-color: var(--black);
    color: white;
    display: flex;
    align-items: center;
    i {
      transition: color 0.2s ease-in-out;
      font-size: 0.8rem;
      margin-left: 0.25rem;
    }
    &:hover {
      i {
        color: var(--red);
      }
    }
  }
  .save {
    background: var(--teal);
    color: white;
  }
`;

const FormContainer = styled.div`
  border: 1px solid blue;
`;
