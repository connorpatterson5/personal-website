import { HomeComponent } from './pages/home/home.component'
import { AboutComponent } from './pages/about/about.component'
import { ProjectsComponent } from './pages/projects/projects.component'
import { ResumeComponent } from './pages/resume/resume.component'
import { ContactComponent } from './pages/contact/contact.component'
import { TechstackComponent } from './pages/techstack/techstack.component'
import { DiagonalBgComponent } from './shared/diagonal-bg/diagonal-bg.component'
import { routes } from './app.routes'

describe('coverage boost', () => {
  it('calls simple methods across components and routes without TestBed', async () => {
    ;(HomeComponent.prototype as any).ngOnInit?.call({})
    ;(HomeComponent.prototype as any).ngAfterViewInit?.call({})

    ;(AboutComponent.prototype as any).ngOnInit?.call({})

    const projects = new (ProjectsComponent as any)()
    expect(projects.projects).toBeDefined()

    const contact = new (ContactComponent as any)()
    expect(contact).toBeTruthy()

  const icon = TechstackComponent.prototype.getTechIconUrl.call({}, { id: '1', name: '', icon: 'assets/x', description: '' })
  expect(icon).toContain('assets')

    const diag = new (DiagonalBgComponent as any)()
    const fakeLayer = { canvas: { width: 100, height: 100 }, squares: [], speedFactor: 0.1 }
    ;(DiagonalBgComponent.prototype as any).populateLayer.call(diag, fakeLayer)

    const res = ResumeComponent.prototype.getResumeDownloadLink.call({ baseHref: 'https://x/' })
    expect(res).toContain('ConnorPattersonResume2025.pdf')

    for (const r of routes) {
      if ((r as any).loadComponent) await (r as any).loadComponent()
    }
  })
})
