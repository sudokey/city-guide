export default class Routes {
  static getHomePageUrl() {
    return '/';
  }

  static getCreatePostPageUrl() {
    return '/posts/create';
  }

  static getAdminRoute() {
    return '/admin';
  }

  static getAdminTagsRoute() {
    return `${Routes.getAdminRoute()}/tags`;
  }
}
