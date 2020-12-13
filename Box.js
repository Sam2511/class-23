 class Box{
    //PROPERTIES
    constructor(x, y, w, h){
            var options = {restitution: 0.5, density: 1, friction:4};
        this.body = Bodies.rectangle(x, y, w, h, options);
        this.width = w;
        this.height = h;
        World.add(world, this.body);
    }

    //FUNCTIONS
    display(){
        //Add a new setting
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        rectMode(CENTER);
        rect(0,0, this.width, this.height);
        //Remove the previous setting
        pop();
    }
}

/*
this --> keyword which refers to the object that calls the property/function (placeholder for object)

box1, box2
box1.display();
display()

body
box1.body

sprite.width
width

*/