 class Game{

    
    private car : Car;
    private block : Block.Block;
    private longblock : LongBlock.Block;
    private coin : Coin;
    private cloud : Cloud;
    private static instance: Game;

    private constructor() {
        let container = document.getElementById("container");
        this.car = new Car(container);
        this.block = new Block.Block(container);
        this.longblock = new LongBlock.Block(container);
        this.coin = new Coin(container);
        this.cloud = new Cloud(container, this.car);
        this.block = new Block.Block(container);
        this.longblock = new LongBlock.Block(container);
        this.coin = new Coin(container);

        requestAnimationFrame(() => this.gameLoop());
    }

    private gameLoop(){
        this.car.draw();
        this.block.draw();
        this.longblock.draw();
        this.coin.draw();
        this.cloud.draw();

        requestAnimationFrame(() => this.gameLoop());

    }

    

    // Check collisions tussen speler en objecten
    // Verbetering functie geeft een boolean mee, wordt gebruikt in car.ts
    public checkCollision() : boolean{

        // Check voor collision met kleine rots
        if(this.car.x < this.block.x + this.block.width &&
        this.car.x + this.car.width > this.block.x &&
        this.car.y < this.block.y + this.block.height &&
        this.car.height + this.car.y > this.block.y){

            this.gameOver(Math.floor(this.car.score));
            this.car.score += 0;
            return true;
        }

        // Check voor collision met de lange rots
        if(this.car.x < this.longblock.x + this.longblock.width &&
        this.car.x + this.car.width > this.longblock.x &&
        this.car.y < this.longblock.y + this.longblock.height &&
        this.car.height + this.car.y > this.longblock.y){

            this.gameOver(Math.floor(this.car.score));
            this.car.score += 0;
            return true;
        }

        // Check voor collision met coin
        if(this.car.x < this.coin.x + this.coin.width &&
        this.car.x + this.car.width > this.coin.x &&
        this.car.y < this.coin.y + this.coin.height &&
        this.car.height + this.car.y > this.coin.y){
            this.car.score += 5;
            this.coin.x = 1916;
            return false;
        }
    }

    // Laat eindscore zien in het scherm
    public gameOver(score : number){
        console.log(score);
        document.getElementById("score").remove();
        document.getElementById("gameOver").innerHTML = "Game over! Score: " + score;

        document.getElementById("plateau").classList.add("animationpaused");
        document.getElementById("sky").classList.add("animationpaused");

        // >>>> VERBETERING: Car liet de crashed car niet zien omdat je een animation paused wilt zetten op objecten die geen animatie in de CSS hebben. (Ze bewegen door hun speed)

            // document.getElementById("block").classList.add("animationpaused");
            // document.getElementById("long_block").classList.add("animationpaused");
            this.block.speed = 0;
            this.longblock.speed = 0;
            this.coin.speed = 0;

    }

    public static getInstance(){
    if(!Game.instance){
        Game.instance = new Game();
    }
    return Game.instance;
    }

} 

// load
window.addEventListener("load", function() {
    let g : Game = Game.getInstance();
});