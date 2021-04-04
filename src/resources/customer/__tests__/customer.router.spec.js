import router from '../customer.router'

describe('Customer router', () => {
  test('has crud routes', () => {
    const routes = [
      { path: '/:id', method: 'get' },
      { path: '/:id', method: 'delete' },
      { path: '/:id', method: 'put' },
      { path: '/', method: 'post' },
      { path: '/find-all', method: 'get' },
      { path: '/add-list', method: 'post' },
    ]

    routes.forEach((route) => {
      const match = router.stack.find(
        (s) => s.route.path === route.path && s.route.methods[route.method]
      )
      expect(match).toBeTruthy()
    })
  })
})
