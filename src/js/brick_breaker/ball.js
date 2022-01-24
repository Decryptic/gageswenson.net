class Ball {
    constructor(game) {
        this.game = game;
    
        this.gameWidth = game.width;
        this.gameHeight = game.height;
        
        this.radius = 10;
        this.position = {
            x: 10,
            y: game.height - 2*this.radius
        }
        this.speed = {
            x: 6,
            y: -6
        }
        
        this.color = 'white';
    }
    
    draw(ctx) {
        ctx.fillStyle = 'indigo';
        ctx.beginPath();
        ctx.arc(
            this.position.x
            , this.position.y
            , this.radius
            , 0
            , 2 * Math.PI
        );
        ctx.fill();
        
        let pad = 5;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(
            this.position.x
            , this.position.y
            , this.radius - pad
            , 0
            , 2 * Math.PI
        );
        ctx.fill();
    }
    
    update(dt) {
        let oldPosition = {
            x: this.position.x,
            y: this.position.y
        };
    
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;
        
        if  (  this.position.x >= this.gameWidth - this.radius
            || this.position.x <= 0              + this.radius)
        {
            this.speed.x *= -1;
        }
        
        if  (  this.position.y >= this.gameHeight - this.radius
            || this.position.y <= 0               + this.radius)
        {
            this.speed.y *= -1;
        }
        
        if (this.position.x - this.radius < 0) {
            this.position.x = this.radius;
        }
        
        else if (this.position.x + this.radius > this.gameWidth) {
            this.position.x = this.gameWidth - this.radius;
        }
        
        if (this.position.y - this.radius < 0) {
            this.position.y = this.radius;
        }
        
        else if (this.position.y + this.radius > this.gameHeight) {
            this.position.y = this.gameHeight - this.radius;
        }
        
        detectCollisions(this.game, this, oldPosition);
    }
}
