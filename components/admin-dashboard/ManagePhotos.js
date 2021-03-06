import styled from 'styled-components';
import { useRef, useEffect, useState } from 'react';
import firebase from 'firebase';
import Image from 'next/image';
import { v4 as uuidv4 } from 'uuid';
import { db } from '../../db/firebase';
import { uploadImage } from '../../lib/uploadImage';
const categoriesData = [
  'design-and-consultancy',
  'smart-home',
  'smart-lighting',
  'home-cinema',
  'multiroom',
  'networks',
  'service-and-maintenance',
];
export async function uploadDocToDb(imageData, collection = 'images') {
  const imagesRef = db.collection(collection).doc();
  imagesRef.set({
    ...imageData,
  });
}
export default function ManagePhotos() {
  const [preview, setPreview] = useState(undefined);
  const [photoCategories, setPhotoCategories] = useState([]);
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
    if (photoCategories.includes(category)) {
      const newArr = photoCategories.filter((newCat) => newCat !== category);
      setPhotoCategories(newArr);
    } else {
      setPhotoCategories([...photoCategories, category]);
    }
  }

  const ref = useRef();
  async function handleImageUpload() {
    // 1. disable form
    ref.current.classList.add('inactive');
    // 2. get image from state and upload it to firestore
    await uploadImage(inputs.image)
      // 3. get the url from image upload and store it in images collection with timestamp and category
      .then(async (URL) => {
        await uploadDocToDb({
          url: URL,
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
          categories: [...photoCategories],
        });
      })
      .then(() => {
        setPreview(undefined);
        setPhotoCategories([]);
        setInputs({ image: '' });
        ref.current.classList.remove('inactive');
      });
  }

  return (
    <div
      style={{
        height: '25rem',
        display: 'flex',
      }}
    >
      <form>
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
            {categoriesData.map((category) => {
              return (
                <p
                  key={category}
                  onClick={selectPhotoCategory}
                  data-category={category}
                  className={
                    photoCategories?.findIndex((item) => item === category) > -1
                      ? 'active'
                      : ''
                  }
                >
                  {category.replace(/-/g, ' ')}
                </p>
              );
            })}
          </div>
        </div>
        <button
          ref={ref}
          onClick={handleImageUpload}
          className={photoCategories?.length ? '' : 'inactive'}
        >
          Upload
        </button>
      </RadioButtons>
    </div>
  );
}

export const AddPhoto = styled.div`
  border: 1px solid black;
  /* margin: 4rem 0; */
  width: 20rem;
  height: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 2rem;
  cursor: pointer;
  font-family: 'Ubuntu', sans-serif;

  i {
    font-size: 2rem;
  }
  p {
    font-weight: 400;
  }
`;

export const ImageContainer = styled.div`
  /* margin: 4rem 0; */
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
  margin: 0 4rem;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
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
    flex-wrap: wrap;
    p {
      margin-right: 1rem;
      margin-bottom: 1rem;
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
  button {
    margin-top: 2rem;
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
  }
`;

const Upload = styled.button``;
