import Rectangle from './Rectangle.js'

export function setup(element) {
  const width = 800
  const height = 600
  const canvas = element.querySelector('#test')
  const context = canvas.getContext('2d')
  canvas.width = width
  canvas.height = height
  const rectangles = []


  rectangles.push(new Rectangle(1, 30, 200, 200, 'lightgreen'))
  rectangles.push(new Rectangle(1, 30, 300, 100,'red'))
  rectangles.push(new Rectangle(1, 30, 50, 150,'blue')) 

 //Har gjort flera rektanglar som studsar mot x och y koordinater samt ändrat div färg 

  function step() {
    context.clearRect(0, 0, width, height)
    rectangles.forEach(rectangle => {
      rectangle.update(canvas)
      rectangle.draw(context)
    })
    requestAnimationFrame(step)
  }
  requestAnimationFrame(step)
}