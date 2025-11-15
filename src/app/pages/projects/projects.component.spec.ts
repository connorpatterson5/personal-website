import { TestBed } from '@angular/core/testing'
import { ProjectsComponent } from './projects.component'

describe('Projects', () => {
  let comp: ProjectsComponent
  beforeEach(async () => { await TestBed.configureTestingModule({ imports: [ProjectsComponent] }).compileComponents(); comp = TestBed.createComponent(ProjectsComponent).componentInstance })
  it('creates', () => expect(comp).toBeTruthy())
})
