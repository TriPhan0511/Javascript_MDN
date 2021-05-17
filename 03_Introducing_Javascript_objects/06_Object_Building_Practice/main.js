// // Setup canvas
// const canvas = document.querySelector('canvas');
// const ctx = canvas.getContext('2d');

// const width = (canvas.width = window.innerWidth);
// const height = (canvas.height = window.innerHeight);

// // Function to generate random number between min and max
// function random(min, max) {
//   const num = Math.floor(Math.random() * (max - min + 1)) + min;
//   return num;
// }

// // Modelling a ball

// /**
//  * x and y coordinates - the horizontal and vertical coordinates where the ball starts on the screen.
//  * This can range between 0 (top left hand corner) to the width and height of the browser viewport
//  * (bottom right hand corner)
//  *
//  * horizontal and vertical velocity (velX and velY) - each ball is given a horizontal and vertical
//  * velocity; in real terms these values are regularly added to the x/y coordinate values when we
//  * animate the balls, to move them by this much on each frame.
//  *
//  * color - each ball gets a color
//  *
//  * size - each bal gets a size - this is its radius, in pixels
//  */

// // Constructor
// function Ball(x, y, velX, velY, color, size) {
//   this.x = x;
//   this.y = y;
//   this.velX = velX;
//   this.velY = velY;
//   this.color = color;
//   this.size = size;
// }

// // Drawing the ball: Add the following draw() method to the Ball()'s prototype
// Ball.prototype.draw = function () {
//   ctx.beginPath();
//   ctx.fillStyle = this.color;
//   ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
//   ctx.fill();
// };

// /**
//  * Using this function, we can tell the ball to draw itself onto the screen, by calling a series
//  * of members of the 2D canvas context we difined earlier (ctx). The context is like the paper,
//  * and now we want to command our pen to draw something on it:
//  *
//  *  * First, we use beginPath() to state that we want to draw a shape on the paper.
//  *  * Next, we use fillStyle() to define what color we want the shape to be - we set it to
//  *    our ball's color property.
//  *  * Next, we use the arc() method to trace an arc shape on the paper. Its parameter are:
//  *      ** The x and y position of the arc's center - we are specifying the ball's x and y properties.
//  *      ** The radius of arc - in this case, the ball's size property.
//  *      ** The last two parameters specify the start and end number of degrees around the circle that
//  *          the arc is drawn between. Here we specify 0 degrees, and 2*PI, which is equipvalent of
//  *          360 degrees in radians
//  */

// // Testing
// let testBall = new Ball(50, 100, 4, 4, 'blue', 10);

// // console.log(testBall.x);
// // console.log(testBall.size);
// // console.log(testBall.color);
// testBall.draw();

// // Updating the ball's data
// Ball.prototype.update = function () {
//   if (this.x + this.size >= width) {
//     this.velX = -this.velX;
//   }

//   if (this.x - this.size <= 0) {
//     this.velX = -this.velX;
//   }

//   if (this.y + this.size >= height) {
//     this.velY = -this.velY;
//   }

//   if (this.y - this.size <= 0) {
//     this.velY = -this.velY;
//   }

//   this.x += this.velX;
//   this.y += this.velY;
// };

// // Adding collision detection
// Ball.prototype.collisionDetect = function () {
//   for (let j = 0; j < balls.length; j++) {
//     if (!(this === balls[j])) {
//       const dx = this.x - balls[j].x;
//       const dy = this.y - balls[j].y;
//       const distance = Math.sqrt(ddx * dx + dy * dy);

//       if (distance < this.size + balls[j].size) {
//         balls[j].color = this.color =
//           'rgb(' + random(0, 255) + ',' + random(0, 255) + ', ' + random(0, 255) + ')';
//       }
//     }
//   }
// };

// // Animating the ball
// let balls = [];

// while (balls.length < 25) {
//   let size = random(10, 20);
//   let ball = new Ball(
//     // ball position always drawn at least one ball width
//     // away from the edge of the canvas, to avoid drawing errors
//     random(0 + size, width - size),
//     random(0 + size, height - size),
//     random(-7, 7),
//     random(-7, 7),
//     'rgb(' + random(0, 255) + ',' + random(0, 255) + ', ' + random(0, 255) + ')',
//     size
//   );

//   balls.push(ball);
// }

// function loop() {
//   ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
//   ctx.fillRect(0, 0, width, height);

//   for (let i = 0; i < balls.length; i++) {
//     balls[i].draw();
//     balls[i].update();
//     balls[i].collisionDetect();
//   }

//   requestAnimationFrame(loop);
// }

// loop();
