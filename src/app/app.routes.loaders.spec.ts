import { routes } from './app.routes'

describe('route loaders', () => {
  it('loads lazy components and children', async () => {
    for (const r of routes) {
      if ((r as any).loadComponent) {
        const mod = await (r as any).loadComponent()
        expect(mod).toBeTruthy()
      }
      if ((r as any).loadChildren) {
        const mod = await (r as any).loadChildren()
        expect(mod).toBeTruthy()
      }
    }
  })
})
