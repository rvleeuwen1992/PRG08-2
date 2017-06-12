/// <reference path="miscItems.ts" />

namespace LongBlock{
    export class Block extends MiscItems {

        public x:number;
        public y:number;
        public width: number;
        public height: number;
                
        constructor(parent:HTMLElement) {
            super("long_block", parent);

            this.x = 1200;
            this.y = 240;

            this.width = 64;
            this.height = 32;
        }

        public draw():void {
            super.draw();
        }
    }
}

/*class LongBlock extends MiscItems {

    public x:number;
    public y:number;
    public width: number;
    public height: number;
            
    constructor(parent:HTMLElement) {
        super("long_block", parent);


    // VERBETERING: LongBlock is nu een child van MiscItems. Hierdoor wordt de speed en de draw en het aanmaken daar afgehandeld. 
        this.x = 1200;
        this.y = 240;

        this.width = 64;
        this.height = 32;
    }
}*/