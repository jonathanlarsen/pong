///<reference path="pong.ts"/>

const canvas = <HTMLCanvasElement>document.getElementById('pong');
const pong = new Pong(canvas);

canvas.addEventListener('mousemove', event => {
  let target = <HTMLCanvasElement>event.target;
  const scale = event.offsetY / target.getBoundingClientRect().height;
  pong.players[0].pos.y = canvas.height * scale;
});

canvas.addEventListener('click', event => {
  pong.start();
});
