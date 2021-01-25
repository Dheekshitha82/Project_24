const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer1;
var plane1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

	hammer1 = new Hammer(150, 150);
	plane1 = new Plane(200,height,2000,20);
	stone1 = new Stone(700,320,100,100);
	stone2 = new Stone(300,320,75,75);
	rubber1 = new Rubber(200, 200, 50)

}

function draw(){
    background("lightblue");
    Engine.update(engine);
	hammer1.display();
	plane1.display();
	stone1.display();
	stone2.display();
	rubber1.display();
}