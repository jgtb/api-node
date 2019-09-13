export default {
  path: [
    { url: '/api/v1/auth/login', methods: ['POST'] },

    { url: '/api/v1/users', methods: ['POST'] },
    { url: '/api/v1/users/forgot-password/send-pin', methods: ['PATCH'] },
    { url: '/api/v1/users/forgot-password', methods: ['PATCH'] },

    { url: '/api/v1/plains', methods: ['GET'] },
    { url: /^\/api\/v1\/plains\/.*/, methods: ['GET'] },

    { url: '/api/v1/catalogs', methods: ['GET'] },
    { url: '/api/v1/catalogs/vehicles/paginated', methods: ['GET'] },
    { url: /^\/api\/v1\/catalogs\/vehicles\/details\/.*/, methods: ['GET'] },
    { url: /^\/api\/v1\/catalogs\/brands\/paginated\/.*/, methods: ['GET'] },
    { url: /^\/api\/v1\/catalogs\/brands\/details\/.*/, methods: ['GET'] },
    { url: /^\/api\/v1\/catalogs\/modes\/paginated\/.*/, methods: ['GET'] },
    { url: /^\/api\/v1\/catalogs\/modes\/details\/.*/, methods: ['GET'] },
    { url: /^\/api\/v1\/catalogs\/versions\/paginated\/.*/, methods: ['GET'] },
    { url: /^\/api\/v1\/catalogs\/versions\/details\/.*/, methods: ['GET'] }
  ]
}
