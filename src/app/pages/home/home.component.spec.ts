import { TestBed } from '@angular/core/testing'
import { HomeComponent } from './home.component'

describe('Home', () => {
  let comp: HomeComponent
  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [HomeComponent] }).compileComponents()
    comp = TestBed.createComponent(HomeComponent).componentInstance
  })
  it('creates', () => expect(comp).toBeTruthy())
})
