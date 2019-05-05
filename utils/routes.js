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

  static getAdminTagsUrl() {
    return `${Routes.getAdminUrl()}/tags`;
  }

  static getAdminTagsCreateUrl() {
    return `${Routes.getAdminTagsUrl()}/create`;
  }
}
