enchant();
var aux = 0;
var currentPadX = 0;
var currentPadY = 0;
window.onload = function(){
		var game = new Core(300, 400);
		game.fps = 40;
		game.preload("img/pad.png","img/court.png","img/court2.png");
		game.onload = function(){

			var pad = new Sprite(48, 48);
			pad.image = game.assets["img/pad.png"];
			pad.x = 0;
			pad.y = 0;
			pad.frame = 5;

			var court = new Sprite(120,45);
			court.image = game.assets["img/court.png"];
			court.x = 90;
			court.y = 0;
			court.frame = 5;

			game.rootScene.addChild(pad);
			game.rootScene.addChild(court);

			pad.addEventListener("enterframe", function(){
				
				if (this.x <= 0){
					valueX = 1;
				}
				if ((this.x+48) > game.width){
					valueX = -1
				}

				if (this.y <= 0){
					valueY = 1;
				}
				if ((this.y+48) > game.height){
					valueY = -1
				}

				// this.x += valueX;
				// this.y += valueY;

				if(pad.intersect(court)) {
					court.image = game.assets["img/court2.png"];
				}else{
					court.image = game.assets["img/court.png"];
				}

			});

			// pad.addEventListener("touchstart", function(){
			// 		// direction = Math.floor(Math.random() * 35)
			// 		// rand = Math.floor(Math.random() * 80)
			// 		// move = Math.random() < 0.5 ? -1*rand : 1*rand;
			// 		pad.tl.moveBy(90,90,10); 
			// });

			pad.addEventListener("touchstart", function(){
				currentPadX = this.x
				currentPadY = this.y
			});

			pad.on('touchmove', function(evt){
				this.x = evt.x;
				this.y = evt.y;
			});

			pad.on('touchend', function(evt){
				deltaY = this.y - currentPadY
				deltaX = this.x - currentPadX
				pad.tl.moveBy(deltaX,deltaY,50).loop();

				console.debug(deltaX)
				console.debug(deltaY)
				console.debug(distance(deltaX,deltaY))
				angle = toDegrees(Math.atan2(deltaY,deltaX))
			});

		};
		game.start();
};

function toDegrees (angle) {
  return angle * (180 / Math.PI);
}

function distance(x,y){
	a = x*x
	b = y*y;
	c = Math.sqrt(a+b)
	return c
}

function speed(){

}