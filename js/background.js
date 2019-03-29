//esta función mantiene el fondo del juego
class Background {
  constructor(game){

    this.game = game;
  
    this.img = new Image();
    this.img.src = 'img/bg.png';
  
    this.x = 0;
    this.y = 0;
  
    this.dx = 10;
  }
  draw() {
    this.game.ctx.drawImage(this.img, this.x, this.y, this.game.canvas.width, this.game.canvas.height);
    this.game.ctx.drawImage(this.img, this.x + this.game.canvas.width, this.y, this.game.canvas.width, this.game.canvas.height);
  };
  
  move() {
    this.x -= this.dx;
  
    if (this.x < -this.game.canvas.width) this.x = 0;
  };
}
