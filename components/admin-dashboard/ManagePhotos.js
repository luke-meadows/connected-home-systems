import styled from 'styled-components';
import { useRef, useEffect, useState } from 'react';
import firebase from 'firebase';
import Image from 'next/image';
import { v4 as uuidv4 } from 'uuid';
import { db } from '../../db/firebase';
const categoriesData = [
  'design-and-consultancy',
  'smart-home',
  'smart-lighting',
  'home-cinema',
  'multiroom',
  'networks',
  'service-and-maintenance',
];
export default function ManagePhotos() {
  const [preview, setPreview] = useState(undefined);
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

  function uploadImage(image) {
    return new Promise((resolve, reject) => {
      const uuid = uuidv4();
      const task = firebase
        .storage()
        .ref()
        .child(`images/` + uuid + '.jpg')
        .put(image);
      const taskInProgress = (snapshot) => {
        console.log(`transferred: ${snapshot.bytesTransferred}`);
      };

      const taskError = (snapshot) => {
        console.log(snapshot);
        reject('rejected');
      };
      const taskComplete = async () => {
        const URL = task.snapshot.ref.getDownloadURL();
        resolve(URL);
      };
      task.on('state_changed', taskInProgress, taskError, taskComplete);
    });
  }

  async function uploadDocToDb(imageData) {
    const imagesRef = db.collection('images').doc();
    imagesRef.set({
      ...imageData,
    });
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
          category: photoCategory,
        });
      })
      .then(() => {
        setPreview(undefined);
        setPhotoCategory(null);
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
                  className={photoCategory === category ? 'active' : ''}
                >
                  {category.replaceAll('-', ' ')}
                </p>
              );
            })}
          </div>
        </div>
        <button
          ref={ref}
          onClick={handleImageUpload}
          className={!photoCategory ? 'inactive' : ''}
        >
          Upload
        </button>
      </RadioButtons>
    </div>
  );
}

const AddPhoto = styled.div`
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
  i {
    font-size: 2rem;
  }
  p {
    font-family: 'Raleway';
    font-weight: 500;
  }
`;

const ImageContainer = styled.div`
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
