
var score = 0;
document.getElementById('playerScore').innerHTML = score;
var Enemy = function(x,y, speed) {

    this.x = x;
    this.y = y;
    this.speed = speed;

    this.sprite = 'images/enemy-bug.png';

};

Enemy.prototype.update = function(dt) {

    this.speed * dt;
    if (this.x < 450) {
        this.x += (250 * dt);

    }
    else {this.x = -90;}

    if(this.x < player.x + 30 && this.x + 60 > player.x && this.y < player.y + 60 && this.y + 40 > player.y) {
    score = 0;
    document.getElementById('playerScore').innerHTML = score;
    player.reset();
    }
};

Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

var Player = function (x, y, speed) {
    this.sprite = 'images/char-boy.png';
    this.x = 200;
    this.y = 320;
    this.speed = speed;
};


Player.prototype.update = function() {

    if (player.y < 20) {
  	score++;
  	document.getElementById('playerScore').innerHTML = score;
  	this.reset();
  }
  };

  Player.prototype.render = function() {
      ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  };

  Player.prototype.handleInput = function(direction) {
      if(direction == 'left' && this.x > 0) {
          this.x -= 50;
      }
      if(direction == 'right' && this.x < 400) {
          this.x += 50;
      }
      if(direction == 'up' && this.y > 3) {
          this.y -= 50;
      }
      if(direction == 'down' && this.y < 400) {
          this.y += 50;
      }
  };

  Player.prototype.reset = function() {
      this.x = 200;
      this.y = 320;
  };

var enemy1 = new Enemy(-120, 90);
var enemy2 = new Enemy(-190, 140);
var enemy3 = new Enemy(-290, 230);
var enemy4 = new Enemy(-400, 140);

var allEnemies = [enemy1, enemy2, enemy3, enemy4];

var player = new Player();

document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
