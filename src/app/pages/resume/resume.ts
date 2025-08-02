import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import resumeData from './resume.json'

@Component({
  selector: 'app-resume',
  imports: [CommonModule],
  templateUrl: './resume.html',
  styleUrl: './resume.scss'
})
export class ResumeComponent {
  resume = resumeData.resume
}
