class Game {
    constructor(gameWidth, gameHeight) {
        this.width = gameWidth;
        this.height = gameHeight;
    }
    
    start() {
        this.ball = new Ball(this);
        this.paddle = new Paddle(this);
        
        let blocks = buildLevel(this, level1);
        
        this.objects = [this.ball, this.paddle, ...blocks]; // ...spread operator
        new InputHandler(this.paddle);
    }
    
    update(dt) {
        var i;
        for (i=0; i < this.objects.length; i++) {
            this.objects[i].update(dt);
        }
    }
    
    draw(ctx) {
        this.objects.forEach((o) => o.draw(ctx));
    }
}
