import config from '../config/tags.json';

export default class {
  static async searchTags(query) {
    if (!query) {
      return [];
    }

    return config.tags.filter(tag => tag.name.toLowerCase().indexOf(query.toLowerCase()) === 0);
  }
}
