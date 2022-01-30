class Paddle {
    constructor(game) {
        this.gameWidth = game.width;
    
        this.width = 150;
        this.height = 25;
        
        this.maxSpeed = 4;
        this.speed = 0;

        this.position = {
            x: game.width / 2 - this.width / 2,
            y: game.height - this.height - 10,
        }
    }
    
    moveLeft() {
        this.speed = -1 * this.maxSpeed;
    }
    
    moveRight() {
        this.speed = this.maxSpeed;
    }
    
    stop() {
        this.speed = 0;
    }

    draw(ctx) {
        ctx.fillStyle = 'black';
        ctx.fillRect(
            this.position.x
            , this.position.y
            , this.width
            , this.height
        );
        
        let pad = 3;
        ctx.fillStyle = 'red';
        ctx.fillRect(
            this.position.x   + pad
            , this.position.y + pad
            , this.width      - 2*pad
            , this.height     - 2*pad
        );
    }

    update(dt) {
        this.position.x += this.speed;
        
        if (this.position.x < 0) this.position.x = 0;
        var farRightX = this.gameWidth - this.width;
        if (this.position.x > farRightX) {
            this.position.x = farRightX;
        }
    }
}
