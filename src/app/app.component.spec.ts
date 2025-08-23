import { ComponentFixture, TestBed } from '@angular/core/testing'
import { App } from './app.component'
import { provideRouter } from '@angular/router'
import { ActivatedRoute, convertToParamMap } from '@angular/router'
import { of } from 'rxjs'

describe('AppComponent', () => {
  let fixture: ComponentFixture<App>
  let component: App

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [
        provideRouter([]),
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of(convertToParamMap({})),
            snapshot: { paramMap: convertToParamMap({}) },
          },
        },
      ],
    }).compileComponents()

    fixture = TestBed.createComponent(App)
    component = fixture.componentInstance
  })

  it('should create the app', () => {
    expect(component).toBeTruthy()
  })

  describe('toggleMenu', () => {
    afterEach(() => {
      document.body.style.overflow = ''
    })

    it('should open the menu and set body overflow to hidden', () => {
      component.menuOpen = false

      component.toggleMenu()

      expect(component.menuOpen).toBe(true)
      expect(document.body.style.overflow).toBe('hidden')
    })

    it('should close the menu and reset body overflow', () => {
      component.menuOpen = true
      document.body.style.overflow = 'hidden'

      component.toggleMenu()

      expect(component.menuOpen).toBe(false)
      expect(document.body.style.overflow).toBe('')
    })

    it('should toggle the menu twice correctly', () => {
      component.menuOpen = false

      component.toggleMenu()
      expect(component.menuOpen).toBe(true)
      expect(document.body.style.overflow).toBe('hidden')

      component.toggleMenu()
      expect(component.menuOpen).toBe(false)
      expect(document.body.style.overflow).toBe('')
    })
  })
})
