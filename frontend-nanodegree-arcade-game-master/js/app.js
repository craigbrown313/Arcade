// Enemies our player must avoid
var score = 0;
document.getElementById('playerScore').innerHTML = score;
var Enemy = function(x,y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x;
    this.y = y;
    this.speed = speed;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';

};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.speed * dt;
    if (this.x < 450) {
        this.x += (250 * dt);

    }
    else {this.x = -90;}

  // If the enemy and the player collide.
    if(this.x < player.x + 30 && this.x + 60 > player.x && this.y < player.y + 60 && this.y + 40 > player.y) {
    score = 0;
    document.getElementById('playerScore').innerHTML = score;
    player.reset();
    }
};
// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function (x, y, speed) {
    this.sprite = 'images/char-boy.png';
    this.x = 200;
    this.y = 320;
    this.speed = speed;
};





Player.prototype.update = function() {
    // Prevent player from moving beyond canvas wall boundaries
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


// Now instantiate your objects.
var enemy1 = new Enemy(-120, 90);
var enemy2 = new Enemy(-190, 140);
var enemy3 = new Enemy(-290, 230);
var enemy4 = new Enemy(-400, 140);

// Place all enemy objects in an array called allEnemies
var allEnemies = [enemy1, enemy2, enemy3, enemy4];
// Place the player object in a variable called player
var player = new Player();


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
