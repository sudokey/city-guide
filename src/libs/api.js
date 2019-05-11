import config from '../config/tags.json';

export default class {
  static async searchTags(query) {
    if (!query) {
      return [];
    }

    // TODO: Api search mathes, not only first word
    return config.tags.filter(tag => tag.name.toLowerCase().indexOf(query.toLowerCase()) === 0);
  }
}
