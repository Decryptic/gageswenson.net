class Block {
    constructor(game, position, color) {
        this.game = game;
    
        if (color === undefined) this.color = 'black';
        else this.color = color;
        
        if (position === undefined) {
               this.position = {x: 10, y: 10}; // then
        } else this.position = position;
        
        this.width = 80;
        this.height = 24;
    }
    
    update(dt) {
    }
    
    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(
            this.position.x
            , this.position.y
            , this.width
            , this.height
        );
    }
}
