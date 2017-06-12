/// <reference path="miscItems.ts" />


class Coin extends MiscItems {

    public x:number;
    public y:number;
    public width: number;
    public height: number;
<<<<<<< HEAD
    public speed: number;
=======
>>>>>>> origin/master
            
    constructor(parent:HTMLElement) {
        super("coin", parent);

<<<<<<< HEAD
=======
    // VERBETERING: LongBlock is nu een child van MiscItems. Hierdoor wordt de speed en de draw en het aanmaken daar afgehandeld. 
>>>>>>> origin/master
        this.x = 700;
        this.y = 140;

        this.width = 32;
        this.height = 31;
    }
<<<<<<< HEAD

    public draw():void {
        super.draw();
    }
=======
>>>>>>> origin/master
}