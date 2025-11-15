import { TestBed } from '@angular/core/testing'
import { provideRouter } from '@angular/router'
import { AboutComponent } from './about.component'

describe('AboutComponent', () => {
  let comp: AboutComponent
  beforeEach(async () => { await TestBed.configureTestingModule({ imports: [AboutComponent], providers: [provideRouter([])] }).compileComponents(); comp = TestBed.createComponent(AboutComponent).componentInstance })
  it('creates', () => expect(comp).toBeTruthy())
  it('calls scrollTo in ngOnInit', () => {
    const spy = jasmine.createSpy()
    ;(window as any).scrollTo = spy
    comp.ngOnInit()
    expect(spy).toHaveBeenCalledWith({ top: 0, behavior: 'auto' })
  })
})
