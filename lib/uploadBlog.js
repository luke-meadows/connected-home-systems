import { uploadDocToDb } from '../components/admin-dashboard/ManagePhotos';
import { uploadImage } from './uploadImage';

export async function uploadBlog(inputs) {
  // first upload image
  await uploadImage(inputs.image, 'blogMainImgs').then(async (URL) => {
    await uploadDocToDb(
      {
        ...inputs,
        text: inputs.text.split('\n'),
        image: URL,
      },
      'blogs'
    );
  });
}
