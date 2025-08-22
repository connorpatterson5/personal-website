import { Component, inject } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import resumeDataJson from './resume.json';

interface ResumeCard {
  category: string;
  items: string[];
}

interface Resume {
  cards: ResumeCard[];
}

interface ResumeData {
  resume: Resume;
}

const resumeData: ResumeData = resumeDataJson;

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resume.html',
  styleUrls: ['./resume.scss'],
})
export class ResumeComponent {
  resume = resumeData.resume;

  private document = inject(DOCUMENT);
  baseHref = this.document.getElementsByTagName('base')[0].href;

  getResumeDownloadLink(): string {
    return this.baseHref + 'assets/images/ConnorPattersonResume2025.pdf';
  }
}
