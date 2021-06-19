class Box {

constructor(x,y,w,h){

    this.body =Bodies.rectangle(x,y,w,h)
    this.h = h;
    this.w = w;

World.add(world,this.body)

}

display(){

var pos = this.body.position
var angle =this.body.angle

push()

translate(pos.x,pos.y)
rotate (angle)
fill("yellow")
rectMode(CENTER)
rect(0,0,this.w,this.h)

pop()
}


}