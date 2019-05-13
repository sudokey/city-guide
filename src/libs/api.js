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
  static async uploadCategoryIcon(file) {
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

  static async getCategories() {
    const db = firebase.firestore();

    try {
      const querySnapshot = await db.collection('categories').get();
      return querySnapshot.docs.map(doc => doc.data());
    } catch (err) {
      throw err;
    }
  }

  static async createCategory(data) {
    const db = firebase.firestore();

    // TODO: Add validation for icon (required) and name (max-length) in firebase
    try {
      const categoryRef = await db.collection('categories').add(data);
      return categoryRef;
    } catch (err) {
      throw err;
    }
  }
}
