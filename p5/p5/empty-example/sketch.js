
var img1;
var img2;
var text;
var Textsize;
var display = true;
var show = true;
var selfpity;
var armpitfarts;
var familyguy;
function preload() {
  img1 = loadImage ('Flowers/img1.jpg');
img2 = loadImage('Flowers/img2.jpg');
selfpity = loadImage('Flowers/selfpity.JPG');
armpitfarts = loadImage('Flowers/armpitfarts.JPG');
familyguy = loadImage('Flowers/familyguy.JPG');
}

function setup() {
  // put setup code here
  createCanvas(1200,600);

}

function draw() {
  // put drawing code here
  background(0)
  var button1 = createButton("Sex and the City");
  button1.position(250,550);
  var button2 = createButton("Family Guy");
  button2.position(800,550);
  button1.mousePressed(selfPity);
  button2.mousePressed(armpitFart);
//Front page
if ((show) && (display)) {
  image(img1,150,150,300,400);
  image(img2,700,150,300,400);
  textSize(40);
  text('Pick a tv-show', 450, 50, 1200,600);
  fill(252, 250, 250);
  } else {
    image(selfpity,200,100);
    textSize(20);
    text('If you like Sex and the City, you might also;', 200, 50, 1200,600);
    fill(252, 250, 250);
    }
if (show) {

  } else {
image(armpitfarts,200,100, 600,250);
image(familyguy,200,20);
textSize(20);
('If you like Family Guy, you might also;', 200, 50, 1200,600);
fill(252, 250, 250);
}
}
//}

function selfPity() {
  display = false;
}

function armpitFart() {
  show = false;
}
