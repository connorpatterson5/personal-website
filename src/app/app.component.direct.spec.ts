import { App } from './app.component'

describe('App direct instance', () => {
  let app: App
  beforeEach(() => { app = new App() })

  it('toggleMenu and closeMenu behavior', () => {
    app.menuOpen = false
    app.toggleMenu()
    expect(app.menuOpen).toBeTrue()
    app.toggleMenu()
    expect(app.menuOpen).toBeFalse()
    ;(app as any).originalOverflow = 'orig'
    app.closeMenuAndRestoreScroll()
    expect((app as any).originalOverflow).toBeNull()
  })

  it('resizeListener sets overflow when menu closed', () => {
    ;(app as any).originalOverflow = 'xyz'
    app.menuOpen = false
    ;(app as any).resizeListener = () => {
      if (!app.menuOpen) {
        document.body.style.overflow = (app as any).originalOverflow ?? ''
      }
    }
    ;(app as any).resizeListener()
    expect((app as any).originalOverflow).toBe('xyz')
  })

  it('ngOnDestroy removes listener if set', () => {
    spyOn(window, 'removeEventListener')
    ;(app as any).resizeListener = () => undefined
    app.ngOnDestroy()
    expect(window.removeEventListener).toHaveBeenCalled()
  })
})
