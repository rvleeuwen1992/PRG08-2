/// <reference path="wheel.ts"/>

class Car implements Subject {
    public observers: Array<Observer> = new Array();
    public div: HTMLElement;

    public speed: number;
    public x: number;
    public y: number;
    public width : number;
    public height: number;

    public wheel1: Wheel;
    public wheel2: Wheel;

    public state: number;
    public jumpDirection: number;
    //test code (ready to jump)
    public rtj : boolean;

    public score : number;

    private _behavior : Behavior;

    public get behavior(){
        return this._behavior;
    }

    public set behavior(b: Behavior){
        this._behavior = b;
    }

    constructor(parent: HTMLElement) {
        this.div = document.createElement("car");
        parent.appendChild(this.div);

        this.score = 1;
        this.rtj = true;

        this.speed = 0;
        this.jumpDirection = -3;
        this.x = 100;
        this.y = 220;
        this.width = 145;
        this.height = 45;

        this.wheel1 = new Wheel(this.div, 20);
        this.wheel2 = new Wheel(this.div, 100);

        window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e));

        this._behavior = new Drive(this);
    }

    private onKeyDown(e: KeyboardEvent): void {
        console.log(e.key);
        
        // Een switch voor de toetsen. Spatie = springen, A = langzamer, D = sneller
        // Maakt gebruik van enumerations (enum/keys.ts)
        switch(e.keyCode){

            case Keys.SPACE:
                if(this.y == 220){
                    this.jumpDirection = -3;
                    this.jumping();
                    this.notify();
                }
            break;
            case Keys.LEFT:
                this.slower();
            break;
            case Keys.RIGHT:
                this.faster();
            break;
        }
    }

    // het rennen (wordt standaard uitgevoerd)
    public driving(): void{
        this._behavior = new Drive(this);
    }

    // wanneer het karakter harder gaat (D)
    public faster(): void{
        this._behavior.faster();
    }

    // wanneer het karakter langzamer gaat (A)
    public slower(): void{
        this._behavior.slower();
    }

    // wanneer het karakter springt (spatie)
    public jumping(): void{
        this._behavior = new Jump(this);
    }

    // wanneer het karakter in aanraking komt met de rots
    public crashing(): void{
        this._behavior = new Crash(this);
    }

    public subscribe(o:Observer){
        this.observers.push(o);
    }

    public unsubscribe(o:Observer){
        
    }

    public notify(){
       for(let o of this.observers){
           o.notify();
       } 
    }

    public draw(): void {

        this._behavior.performBehavior();

        // Check collision functie
        // Als er geen collision is, blijf dan de score optellen
        if(!Game.getInstance().checkCollision()){
            this.score += 0.0314;
        }else{
            // Als er een collision is, doe dan een nieuwe behavior (crash)
            this._behavior = new Crash(this);
            this._behavior.performBehavior();

            // Tweenlite Library animatie bij crash
            // Vlieg de lucht in
            TweenLite.to(this.div, 2.5, {x:800, y: 200, rotation: 600,}); // moet eigenlijk naar x = 500 en y = 80
            
            // Als de hoogte van de car kleiner of gelijk is aan 100 (vanaf hier werkt het nog niet lekker)
            /*if(this.y <= 200){
                console.log("y = <100");
                // Knal vervolgens op de grond
                TweenLite.to(this.div, 2, {x:800, y: 200, rotation: 600});
            }*/
            
        if(!Game.getInstance().checkCollision()){
            this.score += 0.0314;
        }else{
            this._behavior = new Crash(this);
            this._behavior.performBehavior();
        }

        // Wanneer de speler uit het scherm gaat, laat het scherm Game Over zien met 0 punten
        // Rechts te ver uit het scherm
        if(this.x >= 740){
            Game.getInstance().gameOver(0);
        }
        // Links te ver uit het scherm
        if(this.x <= -80){
            console.log(this.x);
            Game.getInstance().gameOver(0);
        }

        // Score teller op het scherm
        document.getElementById("score").innerHTML = "Score: " + Math.floor(this.score);

        this.div.style.transform = "translate(" + this.x + "px," + this.y + "px)";
        this.wheel1.draw();
        this.wheel2.draw();
    } 
}
}