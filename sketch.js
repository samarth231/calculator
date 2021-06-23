//var box = createSprite(200, 200, 100, 70);
//box.shapeColor = "red";
var num1;
var num2;
var b1, b2, b3, b4;
var n1, n2

function setup() {
  createCanvas(800, 500);
  num1 = createInput();
  num1.position(300, 250);
  num2 = createInput();
  num2.position(450,250);
  b1 = createButton("add");
  b1.position(300, 350);
  b2 = createButton("multiply");
  b2.position(300, 400);
  b3 = createButton("subtract");
  b3.position(550,350);
  b4 = createButton("divide");
  b4.position(550, 400);
}


function draw() {
  background("white");
  textSize(20);
  text("Number 1", 315, 210)
  textSize(20);
  text("Number 2", 500, 210)
  console.log(num1.value());
  n1 = parseInt(num1.value());
  n2 = parseInt(num2.value());
  b1.mousePressed(add);
  b2.mousePressed(multiply);
  b3.mousePressed(subtract);
  b4.mousePressed(divide);
}

function add(){
  console.log(n1 + n2);

}


function multiply(){
  console.log(n1 * n2);

}


function subtract(){
  console.log(n1 - n2);

}


function divide(){
  console.log(n1 / n2);

}