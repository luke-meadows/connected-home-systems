import { useState } from 'react';
import styled from 'styled-components';
import Gallery, { Controls } from '../gallery/Gallery';
import ManagePhotos from './ManagePhotos';
export default function PhotosAdminDashboard() {
  const [view, setView] = useState('manage');
  function handleCategoryChange(e) {
    const { name } = e.currentTarget.dataset;
    setView(name);
  }
  const Control = ({ name, heading }) => {
    return (
      <p
        data-name={name}
        onClick={handleCategoryChange}
        className={view === name ? 'active' : ''}
      >
        kw
        {heading}
      </p>
    );
  };
  return (
    <Container>
      <h2>Photos</h2>
      <Controls>
        <Control name="manage" heading="Manage" />
        <Control name="view-photos" heading="View photos" />
      </Controls>
      {view === 'manage' && <ManagePhotos />}
      {view === 'view-photos' && <Gallery />}
    </Container>
  );
}

const Container = styled.div`
  padding: 3rem 6rem;
  h2 {
    margin-bottom: 2rem;
  }
`;
