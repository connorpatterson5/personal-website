import { Component, OnInit } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import aboutData from './about.json'

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterModule, CommonModule],
  styleUrls: ['./about.scss'],
  templateUrl: './about.html'
})
export class AboutComponent implements OnInit {
  workExperience = (aboutData as any).workExperience
  aboutMe = (aboutData as any).aboutMe
  aboutCards = (aboutData as any).aboutCards
  ngOnInit() {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }
}
