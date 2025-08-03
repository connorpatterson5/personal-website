import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import resumeData from './resume.json'
import { DOCUMENT } from '@angular/common'
import { Inject } from '@angular/core'

@Component({
  selector: 'app-resume',
  imports: [CommonModule],
  templateUrl: './resume.html',
  styleUrl: './resume.scss'
})
export class ResumeComponent {
  baseHref: string;
  resume = resumeData.resume

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.baseHref = this.document.getElementsByTagName('base')[0].href;
  }

  getResumeDownloadLink(): string {
    return this.baseHref + 'assets/images/ConnorPattersonResume2025.pdf';
  }
}