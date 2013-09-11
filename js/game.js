enchant();
var aux = 0;
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

				this.x += valueX;
				this.y += valueY;

				if(pad.intersect(court)) {
					if (aux == 0){
						aux = 1
						court.image = game.assets["img/court2.png"];
					}else{
						aux = 0
						court.image = game.assets["img/court.png"];
					}
					
				}	

			});

			pad.addEventListener("touchstart", function(){
					direction = Math.floor(Math.random() * 35)
					rand = Math.floor(Math.random() * 80)
					move = Math.random() < 0.5 ? -1*rand : 1*rand;
					pad.tl.moveBy(move, direction , 10).loop(); 
			});

			pad.on('touchmove', function(evt){
					console.debug("Me Movi")
					console.debug(Math.floor(Math.random() * 80))
			});

		};
		game.start();
};