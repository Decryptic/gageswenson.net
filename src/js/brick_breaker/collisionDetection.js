function detectCollisions(game, ball, lastPosition) {
    let bottomOfBall  = ball.position.y + ball.radius;
    let topOfBall = ball.position.y - ball.radius;
    let leftOfBall = ball.position.x - ball.radius;
    let rightOfBall = ball.position.x + ball.radius;
    
    let topOfPaddle   = game.paddle.position.y;
    let leftOfPaddle  = game.paddle.position.x;
    let rightOfPaddle =
        game.paddle.position.x
        + game.paddle.width;
    if (bottomOfBall >= topOfPaddle
        && ball.position.x >= leftOfPaddle
        && ball.position.x <= rightOfPaddle
        && lastPosition.y < game.paddle.position.y
        && ball.speed.y > 0)
    {
        ball.speed.y *= -1;
        ball.position.y =
            game.paddle.position.y - ball.radius;
    }
    
    var i = 2;
    while (i < game.objects.length) {
        let block = game.objects[i];
        
        let topOfObject   = block.position.y;
        let leftOfObject  = block.position.x;
        let rightOfObject =
            block.position.x
            + block.width;
        let bottomOfObject =
            block.position.y + block.height;
        if (topOfBall <= bottomOfObject
            && bottomOfBall >= topOfObject
            && rightOfBall >= leftOfObject
            && leftOfBall <= rightOfObject)
        {
            if (lastPosition.y < bottomOfObject
                && lastPosition.y > topOfObject)
            {
                ball.speed.x *= -1;
            } else {
                ball.speed.y *= -1;
            }
            ball.position.x = lastPosition.x;
            ball.position.y = lastPosition.y;
            game.objects.splice(i,1);
        }
        else i++;
    }
}
