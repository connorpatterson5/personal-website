import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { RouterLink, RouterLinkActive } from '@angular/router'
import { DiagonalBgComponent } from './shared/diagonal-bg/diagonal-bg.component'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, DiagonalBgComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit, OnDestroy, AfterViewInit {
  
  menuOpen = false
  private originalOverflow: string | null = null
  private resizeListener: (() => void) | null = null

  toggleMenu() {
    this.menuOpen = !this.menuOpen
    if (this.menuOpen) {
      this.originalOverflow = document.body.style.overflow
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = this.originalOverflow ?? ''
      this.originalOverflow = null
    }
  }

  closeMenuAndRestoreScroll() {
    this.menuOpen = false
    document.body.style.overflow = this.originalOverflow ?? ''
    this.originalOverflow = null
  }

  ngOnInit() {
    this.resizeListener = () => {
      if (!this.menuOpen) {
        document.body.style.overflow = this.originalOverflow ?? ''
      }
    }
    window.addEventListener('resize', this.resizeListener)
  }

  ngAfterViewInit() {
  }

  ngOnDestroy() {
    if (this.resizeListener) {
      window.removeEventListener('resize', this.resizeListener)
    }
  }

  // open the resume PDF in a new tab when tooltip is clicked
  openResumePdf(event: Event) {
    // prevent anchor/router navigation
    event.preventDefault()
    event.stopPropagation()
    const url = 'assets/images/ConnorPattersonResume2025.pdf'
    try {
      window.open(url, '_blank')
    } catch (e) {
      // fallback: navigate in same tab
      window.location.href = url
    }
  }
}
