import { ComponentFixture, TestBed } from '@angular/core/testing'
import { AboutComponent } from './about.component'
import { provideRouter } from '@angular/router'
import { ActivatedRoute, convertToParamMap } from '@angular/router'
import { of } from 'rxjs'

describe('AboutComponent', () => {
  let fixture: ComponentFixture<AboutComponent>
  let component: AboutComponent

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutComponent],
      providers: [
        provideRouter([]),
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of(convertToParamMap({ id: '123' })),
            snapshot: { paramMap: convertToParamMap({ id: '123' }) },
          },
        },
      ],
    }).compileComponents()

    fixture = TestBed.createComponent(AboutComponent)
    component = fixture.componentInstance
  })

  it('should create the component', () => {
    expect(component).toBeTruthy()
  })

  describe('ngOnInit', () => {
    it('should call window.scrollTo with correct arguments', () => {
      const scrollSpy = jasmine.createSpy();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).scrollTo = scrollSpy
      const fixture = TestBed.createComponent(AboutComponent)
      const component = fixture.componentInstance
      component.ngOnInit()
      expect(scrollSpy).toHaveBeenCalledWith({ top: 0, behavior: 'auto' })
    })
  })
})
