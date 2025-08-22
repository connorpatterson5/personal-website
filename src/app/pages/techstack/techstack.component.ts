import { Component, AfterViewInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import techStackDataJson from './techstack.json';

interface Tech {
  id: string;
  name: string;
  icon: string;
  description: string;
}

interface TechstackData {
  techStack: Tech[];
}

const techStackData: TechstackData = techStackDataJson;

@Component({
  selector: 'app-techstack',
  standalone: true,
  styleUrls: ['./techstack.scss'],
  templateUrl: './techstack.html',
  imports: [CommonModule],
})
export class TechstackComponent implements AfterViewInit {
  techStack = techStackData.techStack;

  // ✅ inject ActivatedRoute here, inside class
  private route = inject(ActivatedRoute);

  ngAfterViewInit() {
    this.route.fragment.subscribe((fragment) => {
      if (fragment) {
        const el = document.getElementById(fragment);
        if (el) {
          setTimeout(() => {
            el.scrollIntoView({ behavior: 'smooth', block: 'center' });
            el.classList.add('techstack-card--active');
            setTimeout(() => {
              el.classList.remove('techstack-card--active');
            }, 2000);
          }, 0);
        }
      }
    });
  }

  getTechIconUrl(tech: Tech): string {
    if (tech.icon.startsWith('assets/')) {
      return tech.icon;
    }
    return `https://cdn.simpleicons.org/${tech.icon}`;
  }
}
