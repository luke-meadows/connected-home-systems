import styled from 'styled-components';
import { useEffect, useState } from 'react';
import Image from 'next/image';
export default function ManagePhotos() {
  const [preview, setPreview] = useState();
  const [photoCategory, setPhotoCategory] = useState(null);
  const [inputs, setInputs] = useState({
    image: '',
  });

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

  function handleChange(e) {
    let { value, name, type } = e.target;
    if (type === 'file') {
      [value] = e.target.files;
    }
    setInputs({ ...inputs, [name]: value });
  }

  function handleCancel() {
    inputs.image = '';
    setPreview(undefined);
  }

  function selectPhotoCategory(e) {
    const { category } = e.currentTarget.dataset;
    setPhotoCategory(category);
  }

  return (
    <div
      style={{
        height: '25rem',
        display: 'flex',
      }}
    >
      <form action="">
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
      </form>
      <RadioButtons className={preview ? '' : 'inactive'}>
        <div>
          <h3>Choose Category</h3>
          <div className="buttons">
            <p
              onClick={selectPhotoCategory}
              data-category="smart-lighting"
              className={photoCategory === 'smart-lighting' ? 'active' : ''}
            >
              Smart Lighting
            </p>
            <p
              onClick={selectPhotoCategory}
              data-category="home-cinema"
              className={photoCategory === 'home-cinema' ? 'active' : ''}
            >
              Home Cinema
            </p>
            <p
              onClick={selectPhotoCategory}
              data-category="home-automation"
              className={photoCategory === 'home-automation' ? 'active' : ''}
            >
              Home Automation
            </p>
          </div>
        </div>
        <Upload className={!photoCategory ? 'inactive' : ''}>Upload</Upload>
      </RadioButtons>
    </div>
  );
}

const AddPhoto = styled.div`
  border: 1px solid black;
  margin: 4rem 0;
  width: 20rem;
  height: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 2rem;
  cursor: pointer;
  i {
    font-size: 2rem;
  }
  p {
    font-family: 'Raleway';
    font-weight: 500;
  }
`;

const ImageContainer = styled.div`
  margin: 4rem 0;
  width: 20rem;
  height: 20rem;
  position: relative;
  i {
    position: absolute;
    color: white;
    top: 0;
    right: 0;
    z-index: 1;
    background: black;
    cursor: pointer;
  }
`;

const RadioButtons = styled.div`
  margin: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: space-between;
  width: fit-content;
  height: 20rem;

  h3 {
    margin-bottom: 2rem;
    font-size: 1.2rem;
  }
  .buttons {
    display: flex;
    align-items: center;
    p {
      margin-right: 1rem;
      padding: 1rem;
      border: 1px solid var(--black);
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 1px;
      font-family: 'Raleway', sans-serif;
      position: relative;
      font-size: 0.8rem;
      cursor: pointer;
      border-radius: 2px;
      &:hover {
        background-color: var(--teal);
        color: white;
        border: 1px solid var(--teal);
      }
      &.active {
        background-color: var(--teal);
        color: white;
        border: 1px solid var(--teal);
      }
    }
  }
  &.inactive {
    opacity: 0.5;
    pointer-events: none;
  }
`;

const Upload = styled.button`
  margin-top: 4rem;
  background: var(--teal);
  border: 2px solid var(--teal);
  padding: 0.5rem 3rem;
  font-size: 1rem;
  font-family: 'Raleway', sans-serif;
  width: fit-content;
  border-radius: 2px;
  color: var(--white);
  cursor: pointer;
  &.inactive {
    opacity: 0.5;
    pointer-events: none;
  }
`;
