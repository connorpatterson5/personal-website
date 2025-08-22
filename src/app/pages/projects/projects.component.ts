import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import projectsDataJson from './projects.json';

const projectsData: ProjectsData = projectsDataJson;

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./projects.scss'],
  templateUrl: './projects.html',
})
export class ProjectsComponent {
  projects = projectsData.projects;
}

interface ProjectLink {
  label: string;
  url: string;
}

interface Project {
  name: string;
  bullets: string[];
  links: ProjectLink[];
}

interface ProjectsData {
  projects: Project[];
}
