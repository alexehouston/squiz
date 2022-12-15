const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 900;
const CANVAS_HEIGHT = canvas.height = 580;

const One = document.getElementById('1');
const Two = document.getElementById('2');
const Three = document.getElementById('3');
const Four = document.getElementById('4');
const Five = document.getElementById('5');
const Six = document.getElementById('6');
const Seven = document.getElementById('7');
const Eight = document.getElementById('8');
const Nine = document.getElementById('9');
const Ten = document.getElementById('10');
const Eleven = document.getElementById('11');
const Twelve = document.getElementById('12');


class Layer {
    constructor(image, movSpeed, y_Position) {
        this.x = 0;
        this.y = y_Position;
        this.width = 900;
        this.height = 580;
        this.x2 = this.width;
        this.image = image;
        this.speedModifier = movSpeed;
    }

    draw() {
        ctx.drawImage(this.image, this.x, this.y);
        ctx.drawImage(this.image, this.x2, this.y);
    }

    update() {
        if (this.x < -900) {
            this.x = 900 - this.speedModifier + this.x2;
        } else {
            this.x -= this.speedModifier;
        }
    
        if (this.x2 < -900) {
            this.x2 = 900 - this.speedModifier + this.x;
        } else {
            this.x2 -= this.speedModifier;
        }
    }
}

const FirstLayer = new Layer(One, 1.1, 0);
const SecondLayer = new Layer(Two, 1, 0);
const ThirdLayer = new Layer(Three, .9, 0);
const FourthLayer = new Layer(Four, .8, 0);
const FifthLayer = new Layer(Five, .7, 0);
const SixthLayer = new Layer(Six, .6, 0);
const SeventhLayer = new Layer(Seven, .5, 0);
const EighthLayer = new Layer(Eight, .4, 0);
const NinthLayer = new Layer(Nine, .3, 0);
const TenthLayer = new Layer(Ten, .2, 0);
const EleventhLayer = new Layer(Eleven, .1, 0);
const TwelfthLayer = new Layer(Twelve, 0, 0);

const gameObjects = [TwelfthLayer, EleventhLayer, TenthLayer, NinthLayer, EighthLayer, SeventhLayer, SixthLayer, FifthLayer, FourthLayer, ThirdLayer, SecondLayer, FirstLayer];

function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    gameObjects.forEach(object => {
        object.update();
        object.draw();
    });

    TwelfthLayer.update();
    TwelfthLayer.draw();
    EleventhLayer.update();
    EleventhLayer.draw();
    TenthLayer.update();
    TenthLayer.draw();
    NinthLayer.update();
    NinthLayer.draw();
    EighthLayer.update();
    EighthLayer.draw();
    SeventhLayer.update();
    SeventhLayer.draw();
    SixthLayer.update();
    SixthLayer.draw();
    FifthLayer.update();
    FifthLayer.draw();
    FourthLayer.update();
    FourthLayer.draw();
    ThirdLayer.update();
    ThirdLayer.draw();
    SecondLayer.update();
    SecondLayer.draw();
    FirstLayer.update();
    FirstLayer.draw();

    requestAnimationFrame(animate);
};

animate();