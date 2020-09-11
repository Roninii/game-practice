const canvas: HTMLCanvasElement = document.getElementById(
  'game-screen'
) as HTMLCanvasElement

const ctx = canvas.getContext('2d')

if (ctx) {
  ctx.fillStyle = '#f00'
  ctx.fillRect(20, 20, 100, 100)
}
