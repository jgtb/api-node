export default {
  path: [
    { url: '/api/v1/auth/login', methods: ['POST'] },
    { url: '/api/v1/users', methods: ['POST'] },
    { url: '/api/v1/users/forgot-password', methods: ['PATCH'] },
    { url: '/api/v1/partners', methods: ['GET'] },
    { url: '/api/v1/partners/paginated', methods: ['GET'] },
    { url: /^\/api\/v1\/partners\/.*/, methods: ['GET'] },
    { url: /^\/api\/v1\/partners\/cards\/.*/, methods: ['GET'] }
  ]
}
