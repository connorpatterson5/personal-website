import { Component, OnInit } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import aboutDataJson from './about.json'

const aboutData: AboutData = aboutDataJson

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterModule, CommonModule],
  styleUrls: ['./about.scss'],
  templateUrl: './about.html',
})
export class AboutComponent implements OnInit {
  workExperience = aboutData.workExperience
  aboutMe = aboutData.aboutMe
  aboutCards = aboutData.aboutCards
  ngOnInit() {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }
}

interface AboutData {
  workExperience: {
    company: string;
    companyUrl?: string;
    title: string;
    dates: string;
    bullets: string[];
  }[];
  aboutMe: {
    paragraph: string;
  };
  aboutCards: {
    title: string;
    items: string[];
  }[];
}
