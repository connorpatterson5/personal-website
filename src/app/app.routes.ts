import { Routes } from '@angular/router'

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadComponent: () => import('./pages/home/home').then(m => m.HomeComponent) },
  { path: 'about', loadComponent: () => import('./pages/about/about').then(m => m.AboutComponent) },
  { path: 'projects', loadComponent: () => import('./pages/projects/projects').then(m => m.ProjectsComponent) },
  { path: 'resume', loadComponent: () => import('./pages/resume/resume').then(m => m.ResumeComponent) },
  { path: 'contact', loadComponent: () => import('./pages/contact/contact').then(m => m.ContactComponent) },
  { path: 'techstack', loadComponent: () => import('./pages/techstack/techstack').then(m => m.TechstackComponent) },
  { path: '**', redirectTo: 'home' }
]
