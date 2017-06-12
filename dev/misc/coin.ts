/// <reference path="miscItems.ts" />


class Coin extends MiscItems {

    public x:number;
    public y:number;
    public width: number;
    public height: number;
    public speed: number;
            
    constructor(parent:HTMLElement) {
        super("coin", parent);

        this.x = 700;
        this.y = 140;

        this.width = 32;
        this.height = 31;
    }

    public draw():void {
        super.draw();
    }
}