
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particleArray;

function Particle(x, y, dirX, dirY, size, color) {
    this.x = x;
    this.y = y;
    this.dirX = dirX;
    this.dirY = dirY;
    this.size = size;
    this.color = color;
}

Particle.prototype.draw = function () {
    ctx.beginPath();
    ctx.lineWidth = '2';
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.stroke();
}

Particle.prototype.update = function () {
    if (this.x + this.size > canvas.width || this.x - this.size + 20 < 0) { //this.x + this.size >canvas.width || --> for right collision
        this.dirX = -this.dirX;
    }
    if (this.y + this.size > canvas.height - 20 || this.y - this.size + 20 < 0) {
        this.dirY = -this.dirY;
    }

    this.x += this.dirX;
    this.y += this.dirY;

    this.draw();
}

function init() {
    particleArray = [];
    for (let i = 0; i < 100; i++) {
        let size = Math.random() * 15;
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        let dirX = Math.random() * 8;;
        let dirY = 0;
        let color = 'white';

        particleArray.push(new Particle(x, y, dirX, dirY, size, color));
    }
}

/*
class Particles{
    constructor(){
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = 5;

    }
    draw(context){
        for(let i = 0; i<= 25; i++){
            context.beginPath();
            context.fillStyle = 'white';
            context.arc(this.x,this.y,this.radius,0,Math.PI*2);
            context.fill();
            
            
        }

    }
}*/

class Player {
    constructor() {
        this.x = canvas.width / 2 - 550;
        this.y = canvas.height / 2;
        this.radius = 40;


    }
    draw(context) {
        context.beginPath();
        context.fillStyle = 'red';
        context.lineWidth = '3';
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        context.fill();
        context.stroke();


    }
    update() {


    }
}

/*class Enemy {

    constructor() {
        this.x = canvas.width / 2 + 200;
        this.y = canvas.height / 2;
        this.radius = 50;


    }
    draw(context) {
        context.beginPath();
        context.fillStyle = 'green';
        context.lineWidth = '3';
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        context.fill();
        context.stroke();

    }
    update() {

    }

}*/

class mouseButton {

    constructor() {
        this.x = 82;
        this.y = 220;
        this.width = 100;
        this.height = 40;
        this.color = 'green';
        this.pressed = false;

    }
    draw(context) {
        context.beginPath();
        context.fillStyle = this.color;
        context.roundRect(this.x, this.y, this.width, this.height, 15);
        context.fill();
        context.stroke();

    }
    update() {

        window.addEventListener('click',
            function () {
                console.log("working");
            }
        );

    }

}

class playerMissile {

    constructor() {
        this.x = 10;
        this.y = 10;
        this.radius = 5;
        this.velX = 15;
        this.velY = 15;
        this.color = 'yellow';

    }
    draw(context) {
        context.beginPath();
        context.fillStyle = this.color;
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        context.fill();
        context.stroke();

    }
    update() {
        let dx;
        let dy;
        let dist;

        dx = this.x - Player.x;
        dy = this.y - Player.y;
        dist = Math.hypot(dx, dy);

    }

}


function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const player = new Player();
    player.draw(ctx);
    player.update();

    /*const enemy = new Enemy();
    enemy.draw(ctx);*/

    /*const particle = new Particles();
    particle.draw(ctx);*/

    const mb = new mouseButton();
    mb.draw(ctx);
    //mb.update();

    const pmissile = new playerMissile();
    pmissile.draw(ctx);
    pmissile.update();


    requestAnimationFrame(animate);

    for (let i = 0; i < particleArray.length; i++) {
        particleArray[i].update();
    }

}


init();
animate();

window.addEventListener('resize',
    function () {
        canvas.width = innerWidth;
        canvas.height = innerHeight;
        init();
    }
)


