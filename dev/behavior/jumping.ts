class Jump implements Behavior {
    public car : Car;

    constructor(c:Car){
        this.car = c;
    }

    public update(){
        console.log("jump-update");
    }

    // Voer jump code uit
    public performBehavior(){
        console.log("jump-performBehavior");
        this.car.x += this.car.speed;
        this.car.y += this.car.jumpDirection;

        if (this.car.y < 120) {
            this.car.jumpDirection = 3;
            this.car.rtj = false;
        }
        if (this.car.y > 217) {
            this.car.jumpDirection = 0;
            this.car.rtj = true;
            this.car.driving();
        }
    }

    public faster(){

    }

    public slower(){

    }
}