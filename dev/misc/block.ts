/// <reference path="miscItems.ts" />

<<<<<<< HEAD
namespace Block{
    export class Block extends MiscItems {

        public x:number;
        public y:number;
        public width: number;
        public height: number;
                
        constructor(parent: HTMLElement) {
            super("block", parent);

            this.x = 800;
            this.y = 240;

            this.width = 32;
            this.height = 31;
        }

        public draw():void {
            super.draw();
        }
    }
}
=======

class Block extends MiscItems {

    public x:number;
    public y:number;
    public width: number;
    public height: number;
            
    constructor(parent: HTMLElement) {
        super("block", parent);

    // VERBETERING: Block is nu een child van MiscItems. Hierdoor wordt de speed en de draw en het aanmaken daar afgehandeld. 
        this.x = 800;
        this.y = 240;

        this.width = 32;
        this.height = 31;
    }
}
>>>>>>> origin/master
