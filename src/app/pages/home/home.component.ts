
import { Component, AfterViewInit, OnDestroy } from '@angular/core'

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  density = 50
  speed = 0.01
  readonly maxSquares = 200
  squares: any[] = []
  draggingSquare: any = null
  dragOffsetX = 0
  dragOffsetY = 0
  lastMouseX = 0
  lastMouseY = 0
  lastTimestamp = 0
  dragVx = 0
  dragVy = 0
  colors = ['#5ffbf1', '#7f53ac', '#232526', '#fff']
  private animationInterval: any = null

  public updateDensity(val: number) {
    this.density = Number(val)
    this.squares = []
    if (this.animationInterval) {
      clearInterval(this.animationInterval)
      this.animationInterval = null
    }
    this.runAnimatedBg()
    // Spawn a square immediately for feedback
    const canvas = document.getElementById('animated-bg') as HTMLCanvasElement
    if (canvas) {
      const ctx = canvas.getContext('2d')
      if (ctx) {
        const size = Math.random() * 32 + 16
        const edge = Math.floor(Math.random() * 4)
        let x = 0, y = 0, dx = 0, dy = 0
            const baseSpeed = this.speed // Keep baseSpeed assignment
        if (edge === 0) {
          x = Math.random() * canvas.width
          y = -size
              dx = (Math.random() - 0.5) * baseSpeed // Removed speedScale
              dy = baseSpeed // Removed speedScale
        } else if (edge === 1) {
          x = -size
          y = Math.random() * canvas.height
              dx = baseSpeed // Removed speedScale
              dy = (Math.random() - 0.5) * baseSpeed // Removed speedScale
        } else if (edge === 2) {
          x = canvas.width + size
          y = Math.random() * canvas.height
              dx = -baseSpeed // Removed speedScale
              dy = (Math.random() - 0.5) * baseSpeed // Removed speedScale
        } else {
          x = Math.random() * canvas.width
          y = canvas.height + size
              dx = (Math.random() - 0.5) * baseSpeed // Removed speedScale
              dy = -baseSpeed // Removed speedScale
        }
        this.squares.push({ x, y, size, dx, dy, color: this.colors[Math.floor(Math.random() * this.colors.length)], isDragging: false, vx: dx, vy: dy })
      }
    }
  }

  public resetAnimatedBg() {
  this.density = 50
  this.speed = 0.01 // Set speed to 0.01
    this.squares = []
    if (this.animationInterval) {
      clearInterval(this.animationInterval)
      this.animationInterval = null
    }
    this.runAnimatedBg()
  }

  ngAfterViewInit() {
    this.resetAnimatedBg()
  }

  ngOnDestroy() {
    if (this.animationInterval) {
      clearInterval(this.animationInterval)
      this.animationInterval = null
    }
    this.squares = []
  }

  runAnimatedBg() {
    const canvas = document.getElementById('animated-bg') as HTMLCanvasElement
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    const createSquare = () => {
      const size = Math.random() * 32 + 16
      const edge = Math.floor(Math.random() * 4)
      let x = 0, y = 0, dx = 0, dy = 0
      const baseSpeed = this.speed
      if (edge === 0) {
        x = Math.random() * canvas.width
        y = -size
        dx = (Math.random() - 0.5) * baseSpeed
        dy = baseSpeed
      } else if (edge === 1) {
        x = -size
        y = Math.random() * canvas.height
        dx = baseSpeed
        dy = (Math.random() - 0.5) * baseSpeed
      } else if (edge === 2) {
        x = canvas.width + size
        y = Math.random() * canvas.height
        dx = -baseSpeed
        dy = (Math.random() - 0.5) * baseSpeed
      } else {
        x = Math.random() * canvas.width
        y = canvas.height + size
        dx = (Math.random() - 0.5) * baseSpeed
        dy = -baseSpeed
      }
      return { x, y, size, dx, dy, color: this.colors[Math.floor(Math.random() * this.colors.length)], isDragging: false, vx: dx, vy: dy }
    }

    const spawnSquare = () => {
      if (this.squares.length < this.maxSquares) this.squares.push(createSquare())
    }

    const animate = () => {
      ctx!.clearRect(0, 0, canvas.width, canvas.height)
      this.squares = this.squares.filter(sq => !(sq.x < -sq.size || sq.x > canvas.width + sq.size || sq.y < -sq.size || sq.y > canvas.height + sq.size))
      for (const sq of this.squares) {
        ctx!.fillStyle = sq.color
        ctx!.globalAlpha = 0.7
        ctx!.fillRect(sq.x, sq.y, sq.size, sq.size)
        ctx!.globalAlpha = 1
        if (!sq.isDragging) {
          sq.x += sq.vx
          sq.y += sq.vy
        } else {
          sq.x = Math.max(0, Math.min(canvas.width - sq.size, sq.x))
          sq.y = Math.max(0, Math.min(canvas.height - sq.size, sq.y))
        }
      }
      for (let i = 0; i < this.squares.length; i++) for (let j = i + 1; j < this.squares.length; j++) this.resolveCollision(this.squares[i], this.squares[j])
      requestAnimationFrame(animate)
    }

    canvas.onmousedown = e => {
      const rect = canvas.getBoundingClientRect()
      const mouseX = e.clientX - rect.left
      const mouseY = e.clientY - rect.top
      for (const sq of this.squares) {
        if (mouseX >= sq.x && mouseX <= sq.x + sq.size && mouseY >= sq.y && mouseY <= sq.y + sq.size) {
          this.draggingSquare = sq
          sq.isDragging = true
          this.dragOffsetX = mouseX - sq.x
          this.dragOffsetY = mouseY - sq.y
          this.lastMouseX = mouseX
          this.lastMouseY = mouseY
          this.lastTimestamp = performance.now()
          this.dragVx = 0
          this.dragVy = 0
          break
        }
      }
    }

    canvas.onmousemove = e => {
      if (this.draggingSquare) {
        const rect = canvas.getBoundingClientRect()
        const mouseX = e.clientX - rect.left
        const mouseY = e.clientY - rect.top
        const now = performance.now()
        const dt = Math.max(1, now - this.lastTimestamp)
        this.dragVx = (mouseX - this.lastMouseX) / dt * 16
        this.dragVy = (mouseY - this.lastMouseY) / dt * 16
        this.draggingSquare.x = mouseX - this.dragOffsetX
        this.draggingSquare.y = mouseY - this.dragOffsetY
        this.draggingSquare.vx = this.dragVx
        this.draggingSquare.vy = this.dragVy
        this.lastMouseX = mouseX
        this.lastMouseY = mouseY
        this.lastTimestamp = now
      }
    }

    canvas.onmouseup = () => {
      if (this.draggingSquare) {
        this.draggingSquare.isDragging = false
        this.draggingSquare.vx = this.dragVx
        this.draggingSquare.vy = this.dragVy
      }
      this.draggingSquare = null
    }

    canvas.onmouseleave = () => {
      if (this.draggingSquare) {
        this.draggingSquare.isDragging = false
        this.draggingSquare.vx = this.dragVx
        this.draggingSquare.vy = this.dragVy
      }
      this.draggingSquare = null
    }

    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      this.squares = []
    })

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    this.squares = []
    animate()
    if (this.animationInterval) clearInterval(this.animationInterval)
    this.animationInterval = setInterval(spawnSquare, this.density)
  }

  public resolveCollision(a: any, b: any) {
    const dx = (a.x + a.size / 2) - (b.x + b.size / 2)
    const dy = (a.y + a.size / 2) - (b.y + b.size / 2)
    const dist = Math.sqrt(dx * dx + dy * dy) || 1
    const minDist = (a.size + b.size) / 2
    if (dist < minDist) {
      const overlap = minDist - dist
      const nx = dx / dist
      const ny = dy / dist
      a.x += nx * overlap / 2
      a.y += ny * overlap / 2
      b.x -= nx * overlap / 2
      b.y -= ny * overlap / 2
      const tempVx = a.vx
      const tempVy = a.vy
      a.vx = b.vx
      a.vy = b.vy
      b.vx = tempVx
      b.vy = tempVy
    }
  }
}
