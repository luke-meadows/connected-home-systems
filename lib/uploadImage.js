import { v4 as uuidv4 } from 'uuid';
import firebase from 'firebase';

export const uploadImage = (image) => {
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
};
