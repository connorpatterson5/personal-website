import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing'
import { TechstackComponent } from './techstack.component'
import { provideRouter } from '@angular/router'
import { ActivatedRoute, convertToParamMap } from '@angular/router'
import { of } from 'rxjs'

describe('TechstackComponent', () => {
  let component: TechstackComponent
  let fixture: ComponentFixture<TechstackComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechstackComponent],
      providers: [
        provideRouter([]),
        {
          provide: ActivatedRoute,
          useValue: {
            fragment: of('tech1'),
            paramMap: of(convertToParamMap({})),
            snapshot: { paramMap: convertToParamMap({}) },
          },
        },
      ],
    }).compileComponents()

    fixture = TestBed.createComponent(TechstackComponent)
    component = fixture.componentInstance
  })

  it('should create the component', () => {
    expect(component).toBeTruthy()
  })

  it('should scroll to fragment element and toggle active class in ngAfterViewInit', fakeAsync(() => {
    const el = document.createElement('div')
    el.id = 'tech1'

    el.scrollIntoView = jasmine.createSpy('scrollIntoView')
    el.classList.add = jasmine.createSpy('add')
    el.classList.remove = jasmine.createSpy('remove')

    document.body.appendChild(el)

    component.ngAfterViewInit()
    tick(0)
    expect(el.scrollIntoView).toHaveBeenCalledWith({
      behavior: 'smooth',
      block: 'center',
    })
    expect(el.classList.add).toHaveBeenCalledWith('techstack-card--active')

    tick(2000)
    expect(el.classList.remove).toHaveBeenCalledWith('techstack-card--active')

    document.body.removeChild(el)
  }))

  it('should return correct icon URL from getTechIconUrl', () => {
    const techLocal = {
      id: '1',
      name: 'Test',
      icon: 'assets/test.svg',
      description: '',
    }
    const techCDN = {
      id: '2',
      name: 'Other',
      icon: 'angular',
      description: '',
    }

    expect(component.getTechIconUrl(techLocal)).toBe('assets/test.svg')
    expect(component.getTechIconUrl(techCDN)).toBe(
  'https://cdn.simpleicons.org/angular',
    )
  })
  it('handles fragment null gracefully', () => {
    const comp = TestBed.createComponent(TechstackComponent).componentInstance
    const route = TestBed.inject(ActivatedRoute) as any
    route.fragment = of(null)
    comp.ngAfterViewInit()
    // ensure spec has at least one expectation
    expect().nothing()
  })

  it('handles fragment with missing element', fakeAsync(() => {
    const comp = TestBed.createComponent(TechstackComponent).componentInstance
    const route = TestBed.inject(ActivatedRoute) as any
    route.fragment = of('nope')
    comp.ngAfterViewInit()
    tick(0)
    expect().nothing()
  }))
})
