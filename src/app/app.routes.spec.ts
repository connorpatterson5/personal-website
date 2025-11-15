import { routes } from './app.routes'

describe('app routes', () => {
  it('exports routes array', () => expect(Array.isArray(routes)).toBeTrue())
})
