import { Component, AfterViewInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import techStackData from './techstack.json'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-techstack',
  standalone: true,
  styleUrls: ['./techstack.scss'],
  templateUrl: './techstack.html',
  imports: [CommonModule]
})
export class TechstackComponent implements AfterViewInit {
  techStack = techStackData.techStack

  // eslint-disable-next-line no-unused-vars
  constructor(private route: ActivatedRoute) {}

  ngAfterViewInit() {
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        const el = document.getElementById(fragment)
        if (el) {
          setTimeout(() => {
            el.scrollIntoView({ behavior: 'smooth', block: 'center' })
            el.classList.add('techstack-card--active')
            setTimeout(() => {
              el.classList.remove('techstack-card--active')
            }, 2000)
          }, 0)
        }
      }
    })
  }

  getTechIconUrl(tech: any): string {
    if (tech.icon.startsWith('assets/')) {
      return tech.icon
    }
    return `https://cdn.simpleicons.org/${tech.icon}`
  }

}

