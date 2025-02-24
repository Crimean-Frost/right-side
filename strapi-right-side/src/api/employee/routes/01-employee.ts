export default {
  routes: [
    {
      method: 'GET',
      path: '/employees/:slug',
      handler: 'employee.findBySlug',
    },
  ]
}