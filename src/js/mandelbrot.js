/* 
Gage Swenson
Mandelbrot Visualizer
18 June 2019
The goal of this file is to visualize the Mandelbrot set.
The Mandelbrot set is a set of complex numbers that obey the following condition...
f(z) = z^2 + c
All numbers c that cause the function to be bounded when recursively
applying f to its result beginning with z=0 are in the Mandelbrot set.
Points that fall within the set are colored black. Points outside the set are
colored white.
*/

const ZOOM_FACTOR  = 0.75,
      ITERATIONS = 100,
      CONVERGENCE_LIMIT = 100,
      SCREEN_WIDTH = 1200,
      SCREEN_HEIGHT = 600;

class Complex {
    constructor(real, imaginary) {
        this.real = 0.0;
        this.imaginary = 0.0;
        
        if (real !== undefined) {
            this.real = real;
        }
        
        if (imaginary !== undefined) {
            this.imaginary = imaginary;
        }
    }
    
    addComplex(b) {
        this.real      = this.real      + b.real;
        this.imaginary = this.imaginary + b.imaginary;
    }
    
    // (a+bi)(c+di)
    // = ac + adi + bci - bd
    // = (ac - bd) + i(ad + bc)
    multiplyComplex(b) {
        let ac = this.real      * b.real;
        let bd = this.imaginary * b.imaginary;
        let ad = this.real      * b.imaginary;
        let bc = this.imaginary * b.real;
        
        this.real      = ac - bd;
        this.imaginary = ad + bc;
    }
}

class Point {
    constructor(x, y, color) {
        this.color = 'black';
        this.position = {
            x: 0,
            y: 0
        };
        
        if (x !== undefined) {
            this.position.x = x;
        }
        
        if (y !== undefined) {
            this.position.y = y;
        }
        
        if (color !== undefined) {
            this.color = color;
        }
    }
    
    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.position.x, this.position.y, 1, 1);
    }
}

// Initialize our visualizer.

var focus = new Complex();
var scale = 0.005;

let canvas  = document.getElementById('screen');
let context = canvas.getContext('2d');

// f(z) = z^2 + c
function mandelbrot(z, c) {
    z.multiplyComplex(z);
    z.addComplex(c);
    return z;
}

function drawMandelbrot() {
    context.clearRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);
    
    let i, j;
    for (i=0; i < SCREEN_WIDTH; i++) {
        for (j=0; j < SCREEN_HEIGHT; j++) {
            let real      = (i - (SCREEN_WIDTH/2)) * scale + focus.real;
            let imaginary = (j - (SCREEN_HEIGHT/2)) * scale + focus.imaginary;
            
            let c = new Complex(real, imaginary);
            let z = mandelbrot(new Complex(0, 0), c);
            
            let k;
            for (k=1; k < ITERATIONS; k++) {
                mandelbrot(z, c);
            }
            
            let color = 'white';
            if (z.real < CONVERGENCE_LIMIT
                && z.real > CONVERGENCE_LIMIT * -1
                && z.imaginary < CONVERGENCE_LIMIT
                && z.imaginary > CONVERGENCE_LIMIT * -1)
            {
                color = 'black';
            }
            
            new Point(i, j, color).draw(context);
        }
    }
}

drawMandelbrot();

document.addEventListener('mousedown', (e) => {
    let rect = canvas.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;
    
    let dr = (x - (SCREEN_WIDTH/2)) * scale;
    let di = (y - (SCREEN_HEIGHT/2)) * scale;
    
    focus.real      = focus.real      + dr;
    focus.imaginary = focus.imaginary + di;
    
    scale *= ZOOM_FACTOR;
    
    drawMandelbrot();
});
