import { TestBed } from '@angular/core/testing'
import { DiagonalBgComponent } from './diagonal-bg.component'
import { ElementRef } from '@angular/core'

describe('DiagonalBgComponent', () => {
  let comp: DiagonalBgComponent

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [DiagonalBgComponent] })
    const fixture = TestBed.createComponent(DiagonalBgComponent)
    comp = fixture.componentInstance
    spyOn(window, 'requestAnimationFrame').and.callFake(() => 0 as any)
    spyOn(window, 'cancelAnimationFrame').and.callFake(() => 0 as any)
    spyOn(window, 'addEventListener').and.callFake(() => undefined)
    spyOn(window, 'removeEventListener').and.callFake(() => undefined)
    const makeCanvas = () => {
      const c = document.createElement('canvas')
      spyOn(c, 'getContext').and.returnValue({
        clearRect: () => undefined,
        fillRect: () => undefined,
        globalAlpha: 1,
        fillStyle: ''
      } as any)
      return new ElementRef(c)
    }
    ;(comp as any).layer0 = makeCanvas()
    ;(comp as any).layer1 = makeCanvas()
    ;(comp as any).layer2 = makeCanvas()
  })

  it('initializes layers and cleans up', () => {
    comp.ngAfterViewInit()
    expect((comp as any).layers.length).toBe(3)
    comp.ngOnDestroy()
  })
  it('handles missing ctx gracefully', () => {
    const fakeCanvas = { getContext: () => null, width: 100, height: 100 } as any
    const layer = { canvas: fakeCanvas, ctx: null, squares: [], speedFactor: 0.1 }
    ;(comp as any).layers = [layer]
    comp['loop']()
    // explicit: test ensures no throw and no further expectations
    expect().nothing()
  })
  it('wraps squares when moving past edges', () => {
    const canvas = { width: 200, height: 200 } as any
    const ctx = { clearRect: () => undefined, fillRect: () => undefined } as any
    const layer = { canvas, ctx, squares: [{ x: 250, y: 250, size: 10, color: '#fff' }], speedFactor: 1 }
    ;(comp as any).layers = [layer]
    comp['loop']()
    const s = layer.squares[0]
    expect(s.x).toBeLessThanOrEqual(200 + 120)
  })
  it('wraps y when passing bottom', () => {
    const canvas = { width: 200, height: 200 } as any
    const ctx = { clearRect: () => undefined, fillRect: () => undefined } as any
    const layer = { canvas, ctx, squares: [{ x: 0, y: 500, size: 10, color: '#fff' }], speedFactor: 1 }
    ;(comp as any).layers = [layer]
    comp['loop']()
    const s = layer.squares[0]
    expect(s.y).toBeLessThanOrEqual(200 + 120)
  })

  it('assigns raf token when loop runs', () => {
    ;(window.requestAnimationFrame as any).and.returnValue(123 as any)
    comp['loop']()
    expect((comp as any).raf).toBe(123)
  })
})
