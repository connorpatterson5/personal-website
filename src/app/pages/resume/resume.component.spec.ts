import { TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { ResumeComponent } from './resume.component'

describe('Resume', () => {
  let comp: ResumeComponent
  beforeEach(async () => { await TestBed.configureTestingModule({ imports: [ResumeComponent, RouterTestingModule] }).compileComponents(); comp = TestBed.createComponent(ResumeComponent).componentInstance })
  it('creates', () => expect(comp).toBeTruthy())
})
