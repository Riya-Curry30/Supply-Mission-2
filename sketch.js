var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var box1,box2,box3
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup()
{
	createCanvas(800, 700);
	rectMode(CENTER);
	
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5, {restitution: 0.0, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	 var box_options = 
	 {
		isStatic: true,
		

	 }
	 
	 //leftmost box
	 box1 = Bodies.rectangle(235,615,20,100,box_options);
	 World.add(world,box1);

	 //bottom box
	 box2 = Bodies.rectangle(345,653,200,20,box_options);
	 World.add(world,box2);

	 //rightmost box
	 box3 = Bodies.rectangle(435,615,20,100,box_options);
	 World.add(world,box3);

	 keyPressed();
	Engine.run(engine);
	
}


function draw() 
{
  
  background(0);
  Engine.update(engine); 
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  
  rectMode(CENTER);
  
 //leftmost box
  fill("red");
  rect(235,615,20,100);

  //bottom box
  fill("red");
  rect(345,653,200,20);

  //rightmost box
  fill("red");
  rect(435,615,20,100);
  
  

  drawSprites();
 
}

function keyPressed()
 {
 if (keyCode === DOWN_ARROW)
  {
    // Look at the hints in the document and understand how to make the package body fall only on
	Matter.Body.setStatic(packageBody,false);
  }
}



