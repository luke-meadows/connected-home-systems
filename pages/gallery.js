import Gallery from '../components/gallery/Gallery';

export default function GalleryPage() {
  console.log('test');
  return (
    <div style={{ marginTop: '6rem', padding: '3rem 6rem 0 6rem' }}>
      <h2 style={{ marginBottom: '2rem' }}>Gallery</h2>

      <Gallery />
    </div>
  );
}
