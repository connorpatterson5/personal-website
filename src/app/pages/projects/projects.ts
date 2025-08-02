import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import projectsData from './projects.json'

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./projects.scss'],
  template: `
<section class="projects">
  <h2 class="page-header">Featured Projects</h2>
  <div class="project-cards">
    <div class="project-card" *ngFor="let project of projects">
      <h3>{{ project.name }}</h3>
      <ul>
        <li *ngFor="let bullet of project.bullets" [innerHTML]="bullet"></li>
      </ul>
      <div class="project-links">
        <a *ngFor="let link of project.links" [href]="link.url" target="_blank">{{ link.label }}</a>
      </div>
    </div>
  </div>
</section>
  `
})
export class ProjectsComponent {
  projects = (projectsData as any).projects
}
