import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { AddPhoto } from './ManagePhotos';
import { ImageContainer } from './ManagePhotos';
import Gallery from '../gallery/Gallery';
import { uploadProject } from '../../lib/uploadProject';

export default function CreateNewProject({ setCreateNew }) {
  const [preview, setPreview] = useState(undefined);
  const [galleryActive, setGalleryActive] = useState(false);
  const [selectedPhotos, setSelectedPhotos] = useState([]);
  const [inputs, setInputs] = useState({
    image: null,
    title: '',
    text: '',
    tech: [],
    photos: [],
    date: '',
  });

  const serviceIcons = [
    'smart-lighting',
    'control',
    'home-cinema',
    'media-room',
    'multiroom',
    'network',
  ];

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

  function handleTechIconClick(e) {
    const { name } = e.currentTarget.dataset;
    if (inputs.tech.includes(name)) {
      const newArr = inputs.tech.filter((newCat) => newCat !== name);
      setInputs({ ...inputs, tech: newArr });
    } else {
      setInputs({ ...inputs, tech: [...inputs.tech, name] });
    }
  }

  const containerRef = useRef();

  async function handleSave(e) {
    containerRef.current.classList.add('inactive');
    await uploadProject(inputs).then(() => {
      setInputs({
        image: null,
        title: '',
        text: '',
        tech: [],
        photos: [],
        date: '',
      });
      setCreateNew(false);
      containerRef.current.classList.remove('inactive');
      window.scrollTo(0, 0);
    });
  }

  return (
    <Container ref={containerRef}>
      <p className="header">Create new project</p>
      <form action="">
        <FormContainer>
          <label htmlFor="date">Location</label>
          <textarea
            type="text"
            name="title"
            value={inputs.title}
            onChange={handleChange}
          />
          {preview ? (
            <ImageContainer>
              <i
                className="icon-cancel-1"
                onClick={() => setInputs({ ...inputs, image: null })}
              />
              <Image src={preview} layout="fill" objectFit="cover" />
            </ImageContainer>
          ) : (
            <label htmlFor="image">
              <AddPhoto>
                <i className="icon-plus" />
                <p>Add Main Photo</p>
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
          <label htmlFor="date">
            Date <span className="warning"> Format &quot;March 2022&quot;</span>
          </label>
          <textarea
            type="text"
            name="date"
            value={inputs.date}
            onChange={handleChange}
          />
          <label htmlFor="text">
            Text Content{' '}
            <span className="warning">
              One press of the enter key will create new paragraph
            </span>
          </label>
          <textarea
            type="text"
            name="text"
            value={inputs.text}
            onChange={handleChange}
          />
          <label htmlFor="tech">Tech installed</label>
          <div style={{ display: 'flex', marginBottom: '2rem' }}>
            {serviceIcons.map((iconCat) => (
              <p
                key={iconCat}
                data-name={iconCat}
                onClick={handleTechIconClick}
                className={
                  inputs.tech.includes(iconCat)
                    ? 'checked tech-cat'
                    : 'tech-cat'
                }
              >
                {iconCat}
              </p>
            ))}
          </div>
        </FormContainer>
      </form>
      {!galleryActive && (
        <button
          onClick={() => {
            setGalleryActive(true);
            setSelectedPhotos([]);
          }}
        >
          Choose Photos
        </button>
      )}
      {galleryActive && (
        <>
          <GalleryContainer>
            <Gallery
              selectedPhotos={selectedPhotos}
              setSelectedPhotos={setSelectedPhotos}
              preventFullscreen={true}
              setInputs={setInputs}
              inputs={inputs}
            />
            <div></div>
          </GalleryContainer>
          <button
            style={{ marginTop: '1rem' }}
            onClick={() => setGalleryActive(false)}
          >
            Done Choosing
          </button>
        </>
      )}
      <div className="buttons">
        <p className="cancel" onClick={() => setCreateNew(false)}>
          Cancel <i className="icon-cancel-1" />
        </p>
        <p className="save" onClick={handleSave}>
          Save <i className="icon-plus" />
        </p>
      </div>
    </Container>
  );
}

const Container = styled.div`
  margin-bottom: 6rem;
  .warning {
    color: var(--red);
    margin-left: 1rem;
    font-size: 0.8rem;
  }
  &.inactive {
    opacity: 0.2;
    pointer-events: none;
  }
  .header {
    font-weight: 500;
    margin-bottom: 2rem;
    font-size: 1.5rem;
  }
  .buttons {
    display: flex;
    justify-content: flex-end;
  }
  .cancel,
  .save,
  button {
    cursor: pointer;
    padding: 0.5rem 0.25rem 0.5rem 0.75rem;
  }
  button {
    cursor: pointer;
    padding: 0.5rem 0.75rem;
    border-radius: 4px;
    font-size: 1rem;
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
  .save,
  button {
    background: var(--teal);
    color: white;
    border: none;
  }
`;

const FormContainer = styled.div`
  label[for='date'] {
    width: fit-content;
  }
  label[for='text'],
  label[for='tech'],
  label[for='date'] {
    font-weight: 500;
    margin: 2rem 0 1rem 0;
    display: inline-block;
  }
  textarea[name='text'] {
    resize: vertical;
    height: 30rem;
    border: 1px solid black;
    line-height: 1.5;
  }

  .tech-cat {
    border: 1px solid black;
    padding: 0.5rem 1rem;
    margin-right: 1rem;
    cursor: pointer;
  }
  .checked {
    background: var(--teal-trans);
    color: white;
    border: 1px solid transparent;
  }
`;

const GalleryContainer = styled.div`
  max-height: 25rem;
  overflow: scroll;
`;
