import { PagesModule } from './pages-module'
import { PagesRoutingModule } from './pages-routing-module'

describe('pages modules', () => {
  it('imports modules', () => {
    expect(PagesModule).toBeDefined()
    expect(PagesRoutingModule).toBeDefined()
  })
})
