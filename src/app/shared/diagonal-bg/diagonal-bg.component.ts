import { Component, AfterViewInit, OnDestroy, ViewChild, ElementRef } from '@angular/core'

@Component({
  selector: 'app-diagonal-bg',
  templateUrl: './diagonal-bg.component.html',
  styleUrls: ['./diagonal-bg.component.scss'],
  standalone: true,
})
export class DiagonalBgComponent implements AfterViewInit, OnDestroy {
  @ViewChild('layer0', { static: true }) layer0!: ElementRef<HTMLCanvasElement>
  @ViewChild('layer1', { static: true }) layer1!: ElementRef<HTMLCanvasElement>
  @ViewChild('layer2', { static: true }) layer2!: ElementRef<HTMLCanvasElement>
  private raf = 0
  private layers: {canvas: HTMLCanvasElement; ctx: CanvasRenderingContext2D | null; squares: any[]; speedFactor: number}[] = []
  private palette = ['#5ffbf1', '#7f53ac', '#232526', '#ffffff']

  ngAfterViewInit(): void {
    this.setupLayer(this.layer0.nativeElement, 0.2)
    this.setupLayer(this.layer1.nativeElement, 0.45)
    this.setupLayer(this.layer2.nativeElement, 0.75)
    window.addEventListener('resize', this.onResize)
    this.onResize()
    this.raf = requestAnimationFrame(this.loop)
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.onResize)
    cancelAnimationFrame(this.raf)
  }

  private setupLayer(canvas: HTMLCanvasElement, speedFactor: number) {
    const ctx = canvas.getContext('2d')
    this.layers.push({ canvas, ctx, squares: [], speedFactor })
    this.populateLayer(this.layers[this.layers.length - 1])
  }

  private populateLayer(layer: any) {
    const { canvas, squares } = layer
    squares.length = 0
    const spacing = 140
    const cols = Math.ceil(canvas.width / spacing) + 2
    const rows = Math.ceil(canvas.height / spacing) + 2
    for (let r = -1; r < rows; r++) {
      for (let c = -1; c < cols; c++) {
        const size = 16 + Math.random() * 20
        const x = c * spacing + (r % 2 ? spacing / 2 : 0) + Math.random() * 18
        const y = r * spacing + Math.random() * 18
        const color = this.palette[Math.floor(Math.random() * this.palette.length)]
        squares.push({ x, y, size, color })
      }
    }
  }

  private onResize = () => {
    for (const layer of this.layers) {
      layer.canvas.width = window.innerWidth
      layer.canvas.height = window.innerHeight
      this.populateLayer(layer)
    }
  }

  private loop = () => {
    for (const layer of this.layers) {
      const { canvas, ctx, squares, speedFactor } = layer
      if (!ctx) continue
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      for (const s of squares) {
        ctx.globalAlpha = 0.9
        ctx.fillStyle = s.color
        ctx.fillRect(s.x, s.y, s.size, s.size)
        ctx.globalAlpha = 1
        s.x += 0.3 * speedFactor
        s.y += 0.3 * speedFactor
        if (s.x > canvas.width + 120) s.x = -120 - s.size
        if (s.y > canvas.height + 120) s.y = -120 - s.size
      }
    }
    this.raf = requestAnimationFrame(this.loop)
  }
}
