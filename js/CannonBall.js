class CannonBall {

    constructor(x, y) {
        var options = {
            isStatic: true
        }
        this.radius = 30;
        this.body = Bodies.circle(x, y, this.radius, options);

        this.image = loadImage("assets/cannonball.png");
        World.add(world, this.body);
    }

    shoot(){
        var Newangle = cannon.angle - 28;
        Newangle = Newangle * (3.14/180);
        var velcoity = p5.Vector.fromAngle(Newangle);
        velcoity.mult(0.5);
        Matter.Body.setStatic(this.body , false);
        Matter.Body.setVelocity(this.body ,{x: velcoity.x * (180/3.14), y: velcoity.y * (180/3.14)} )
    }

    display() {
        var pos = this.body.position;
        push();
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.radius, this.radius);
        pop();

    }

}
