export default {
  routes: [
    {
      method: 'GET',
      path: '/categories/:slug',
      handler: 'category.findBySlug',
    },
  ]
}