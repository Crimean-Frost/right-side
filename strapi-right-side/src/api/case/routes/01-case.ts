export default {
  routes: [
    {
      method: 'GET',
      path: '/cases/:slug',
      handler: 'case.findBySlug',
    },
  ]
}