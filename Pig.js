class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,20,20);
     this.image1=loadImage("sprites/Suvedh.JPG");
   this.image2=loadImage("sprites/Abhishek.JPG");
   this.image3=loadImage("sprites/Avinash_0111.jpg");
   this.image4=loadImage("sprites/Avinash_0111.jpg");
   // this.image = loadImage("sprites/Abhishek.JPG");
    this.Visiblity = 255;
  }

 display(){
   //console.log(thi
   image(this.image1, 810,350,20,20)
  image(this.image2, 615,300,20,20)
   image(this.image3, 810,220,20,20)
   image(this.image4, 1005,320,20,20)

   if(this.body.speed < 3){
    super.display();
   }
   else{
     World.remove(world, this.body);
     push();
     this.Visiblity = this.Visiblity - 60;
     tint(255,this.Visiblity);
     image(this.image1, 810,350)
     image(this.image2, 615,300,20,20)
    image(this.image3, 810,220,20,20)
    image(this.image4, 1005,320,20,20)
     pop();
   }
   
 }
score(){
  if(this.Visiblity<0&&this.Visiblity>-100){
    score=score+1;
  }
}


};