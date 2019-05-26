export default class Routes {
  static getHomePageUrl() {
    return '/';
  }

  static getCreatePostPageUrl() {
    return '/posts/create';
  }

  static getAdminUrl() {
    return '/admin';
  }

  static getAdminCategoriesUrl() {
    return `${Routes.getAdminUrl()}/categories`;
  }

  static getAdminCategoriesCreateUrl() {
    return `${Routes.getAdminCategoriesUrl()}/create`;
  }

  static getAdminCategoriesUpdateUrl(id) {
    return `${Routes.getAdminCategoriesUrl()}/${id}`;
  }

  static getAdminCategoriesGroupCreateUrl() {
    return `${Routes.getAdminCategoriesUrl()}/group/create`;
  }

  static getAdminCategoriesGroupUpdateUrl(id) {
    return `${Routes.getAdminCategoriesUrl()}/group/${id}`;
  }
}
