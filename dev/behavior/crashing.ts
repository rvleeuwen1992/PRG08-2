class Crash implements Behavior {
    public car : Car;

    constructor(c:Car){
        this.car = c;
    }

    public update(){
        console.log("crash-update");
    }

    // Voer crash code uit
    public performBehavior(){
        console.log("crash-onHit");
        this.car.wheel1.speed = -3;
        this.car.wheel2.speed = 3;
        this.car.div.classList.add("crashed");
    }

    public faster(){

    }

    public slower(){

    }
}