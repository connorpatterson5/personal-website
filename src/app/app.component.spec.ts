import { TestBed } from '@angular/core/testing'
import { App } from './app.component'
import { provideRouter } from '@angular/router'
import { ActivatedRoute, convertToParamMap } from '@angular/router'
import { of } from 'rxjs'

describe('AppComponent', () => {
  let comp: App
  beforeEach(async () => { await TestBed.configureTestingModule({ imports: [App], providers: [ provideRouter([]), { provide: ActivatedRoute, useValue: { paramMap: of(convertToParamMap({})), snapshot: { paramMap: convertToParamMap({}) } } } ] }).compileComponents(); comp = TestBed.createComponent(App).componentInstance })
  afterEach(() => document.body.style.overflow = '')
  it('toggles menu and body overflow', () => {
    comp.menuOpen = false
    comp.toggleMenu()
    expect(comp.menuOpen).toBe(true)
    expect(document.body.style.overflow).toBe('hidden')
    comp.toggleMenu()
    expect(comp.menuOpen).toBe(false)
    expect(document.body.style.overflow).toBe('')
  })
  it('ngOnDestroy does nothing when no listener', () => {
    const c = TestBed.createComponent(App).componentInstance
    ;(c as any).resizeListener = null
    spyOn(window, 'removeEventListener')
    c.ngOnDestroy()
    expect(window.removeEventListener).not.toHaveBeenCalled()
  })
  it('registers and removes resize listener', () => {
    spyOn(window, 'addEventListener')
    spyOn(window, 'removeEventListener')
    comp.ngOnInit()
    expect(window.addEventListener).toHaveBeenCalled()
    comp.ngOnDestroy()
    expect(window.removeEventListener).toHaveBeenCalled()
  })
})
