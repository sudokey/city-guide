import shortid from 'shortid';
import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
import config from '../config/tags.json';

export default class {
  static async searchTags(query) {
    if (!query) {
      return [];
    }

    // TODO: Api search mathes, not only first word
    return config.tags.filter(tag => tag.name.toLowerCase().indexOf(query.toLowerCase()) === 0);
  }

  // TODO: Add validation for icon size (44, 44) and ext (png)
  static async uploadCategoryIcon(
    file,
  ) {
    const storageRef = firebase.storage().ref();
    const imageName = shortid.generate();
    const imageExt = file.name.split('.').pop();
    const iconRef = storageRef.child(`images/category/icons/${imageName}.${imageExt}`);

    try {
      await iconRef.put(file);
      return await iconRef.getDownloadURL();
    } catch (err) {
      throw err;
    }
  }

  static async addCategoriesListner(
    onSuccess,
    onError,
  ) {
    return firebase.firestore().collection('categories')
      .onSnapshot((snapshot) => {
        const data = [];
        snapshot.docChanges().forEach((change) => {
          data.push({
            ...change,
            data: {
              ...change.doc.data(),
              id: change.doc.id,
            },
          });
        });
        onSuccess(data);
      }, (err) => {
        onError(err);
      });
  }

  static async createCategory({
    name,
    iconUrl,
  }) {
    const db = firebase.firestore();

    try {
      const categoryRef = await db.collection('categories').add({
        name,
        iconUrl,
      });
      return categoryRef.id;
    } catch (err) {
      throw err;
    }
  }

  static async updateCategory({
    id,
    name,
    iconUrl,
  }) {
    const db = firebase.firestore();

    try {
      const categoryRef = db.collection('categories').doc(id);
      await categoryRef.update({
        name,
        iconUrl,
      });
      return id;
    } catch (err) {
      throw err;
    }
  }

  static async removeCategory({
    id,
  }) {
    const db = firebase.firestore();

    try {
      await db.collection('categories').doc(id).delete();
    } catch (err) {
      throw err;
    }
  }
}
