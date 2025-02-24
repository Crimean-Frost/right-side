export default {
  routes: [
    {
      method: 'GET',
      path: '/services/:slug',
      handler: 'service.findBySlug',
    },
  ]
}