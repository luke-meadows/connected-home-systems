import Gallery from '../components/gallery/Gallery';

export default function GalleryPage() {
  console.log('test');
  return (
    <div style={{ marginTop: '6rem', padding: '4rem 6rem 0 6rem' }}>
      <h2 style={{ marginBottom: '3rem' }}>Gallery</h2>
      <Gallery />
    </div>
  );
}
