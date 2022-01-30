class InputHandler {
    constructor(paddle) {
        document.addEventListener('keydown', (e) => {
            console.log('Keydown, code: ' + e.keyCode);
            switch (event.keyCode) {
                case 37:
                    paddle.moveLeft();
                    break;
                case 39:
                    paddle.moveRight();
                    break;
            }
        });
        
        document.addEventListener('keyup', (e) => {
            console.log('Keyup, code: ' + e.keyCode);
            switch (event.keyCode) {
                case 37:
                    if (paddle.speed < 0) paddle.stop();
                    break;
                
                case 39:
                    if (paddle.speed > 0) paddle.stop();
                    break;
            }
        });
    }
}
