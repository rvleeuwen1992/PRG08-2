/// <reference path="miscItems.ts" />

class Cloud extends MiscItems implements Observer {

    public x:number;
    public y:number;
    public width: number;
    public height: number;
                
    constructor(parent: HTMLElement, subject: Subject) {
        super("cloud", parent);

        subject.subscribe(this);

        this.x = 900;
        this.y = 20;

        this.width = 150;
        this.height = 57;

        this.speed = -1;
    }

    public notify() : void{
        this.changeDirection();
    }

    public changeDirection(){
        this.speed = -3;
        setInterval(() => this.resetDirection(), 2000);
    }

    public resetDirection(){
        this.speed = -1;
    }

    public draw():void {
        super.draw();
    }

}
