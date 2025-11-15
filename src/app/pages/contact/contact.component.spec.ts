import { TestBed } from '@angular/core/testing'
import { ContactComponent } from './contact.component'

describe('Contact', () => {
  let comp: ContactComponent
  beforeEach(async () => { await TestBed.configureTestingModule({ imports: [ContactComponent] }).compileComponents(); comp = TestBed.createComponent(ContactComponent).componentInstance })
  it('creates', () => expect(comp).toBeTruthy())
})
