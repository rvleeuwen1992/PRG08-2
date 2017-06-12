var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Game = (function () {
    function Game() {
        var _this = this;
        var container = document.getElementById("container");
        this.car = new Car(container);
        this.block = new Block.Block(container);
        this.longblock = new LongBlock.Block(container);
        this.coin = new Coin(container);
        this.cloud = new Cloud(container, this.car);
        requestAnimationFrame(function () { return _this.gameLoop(); });
    }
    Game.prototype.gameLoop = function () {
        var _this = this;
        this.car.draw();
        this.block.draw();
        this.longblock.draw();
        this.coin.draw();
        this.cloud.draw();
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    Game.prototype.checkCollision = function () {
        if (this.car.x < this.block.x + this.block.width &&
            this.car.x + this.car.width > this.block.x &&
            this.car.y < this.block.y + this.block.height &&
            this.car.height + this.car.y > this.block.y) {
            this.gameOver(Math.floor(this.car.score));
            this.car.score += 0;
            return true;
        }
        if (this.car.x < this.longblock.x + this.longblock.width &&
            this.car.x + this.car.width > this.longblock.x &&
            this.car.y < this.longblock.y + this.longblock.height &&
            this.car.height + this.car.y > this.longblock.y) {
            this.gameOver(Math.floor(this.car.score));
            this.car.score += 0;
            return true;
        }
        if (this.car.x < this.coin.x + this.coin.width &&
            this.car.x + this.car.width > this.coin.x &&
            this.car.y < this.coin.y + this.coin.height &&
            this.car.height + this.car.y > this.coin.y) {
            this.car.score += 5;
            this.coin.x = 1916;
            return false;
        }
    };
    Game.prototype.gameOver = function (score) {
        console.log(score);
        document.getElementById("score").remove();
        document.getElementById("gameOver").innerHTML = "Game over! Score: " + score;
        document.getElementById("plateau").classList.add("animationpaused");
        document.getElementById("sky").classList.add("animationpaused");
        this.block.speed = 0;
        this.longblock.speed = 0;
        this.coin.speed = 0;
    };
    Game.getInstance = function () {
        if (!Game.instance) {
            Game.instance = new Game();
        }
        return Game.instance;
    };
    return Game;
}());
window.addEventListener("load", function () {
    var g = Game.getInstance();
});
var Crash = (function () {
    function Crash(c) {
        this.car = c;
    }
    Crash.prototype.update = function () {
        console.log("crash-update");
    };
    Crash.prototype.performBehavior = function () {
        console.log("crash-onHit");
        this.car.wheel1.speed = -3;
        this.car.wheel2.speed = 3;
        this.car.div.classList.add("crashed");
    };
    Crash.prototype.faster = function () {
    };
    Crash.prototype.slower = function () {
    };
    return Crash;
}());
var Drive = (function () {
    function Drive(c) {
        this.car = c;
    }
    Drive.prototype.update = function () {
        console.log("drive-update");
    };
    Drive.prototype.performBehavior = function () {
        console.log("drive-performBehavior");
        this.car.x += this.car.speed;
    };
    Drive.prototype.faster = function () {
        if (this.car.speed >= 1) {
            this.car.speed = 1;
        }
        else {
            this.car.speed += 1;
        }
    };
    Drive.prototype.slower = function () {
        if (this.car.speed <= -1) {
            this.car.speed = -1;
        }
        else {
            this.car.speed += -1;
        }
    };
    return Drive;
}());
var Jump = (function () {
    function Jump(c) {
        this.car = c;
    }
    Jump.prototype.update = function () {
        console.log("jump-update");
    };
    Jump.prototype.performBehavior = function () {
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
    };
    Jump.prototype.faster = function () {
    };
    Jump.prototype.slower = function () {
    };
    return Jump;
}());
var Keys;
(function (Keys) {
    Keys[Keys["SPACE"] = 32] = "SPACE";
    Keys[Keys["LEFT"] = 37] = "LEFT";
    Keys[Keys["RIGHT"] = 39] = "RIGHT";
})(Keys || (Keys = {}));
var MiscItems = (function () {
    function MiscItems(item, parent) {
        this.div = document.createElement(item);
        parent.appendChild(this.div);
        this.speed = -4;
    }
    MiscItems.prototype.draw = function () {
        this.x += this.speed;
        this.div.style.transform = "translate(" + this.x + "px," + this.y + "px)";
        if (this.x <= -93) {
            this.x = 1283;
        }
    };
    return MiscItems;
}());
var Block;
(function (Block_1) {
    var Block = (function (_super) {
        __extends(Block, _super);
        function Block(parent) {
            var _this = _super.call(this, "block", parent) || this;
            _this.x = 800;
            _this.y = 240;
            _this.width = 32;
            _this.height = 31;
            return _this;
        }
        Block.prototype.draw = function () {
            _super.prototype.draw.call(this);
        };
        return Block;
    }(MiscItems));
    Block_1.Block = Block;
})(Block || (Block = {}));
var Cloud = (function (_super) {
    __extends(Cloud, _super);
    function Cloud(parent, subject) {
        var _this = _super.call(this, "cloud", parent) || this;
        subject.subscribe(_this);
        _this.x = 900;
        _this.y = 20;
        _this.width = 150;
        _this.height = 57;
        _this.speed = -1;
        return _this;
    }
    Cloud.prototype.notify = function () {
        this.changeDirection();
    };
    Cloud.prototype.changeDirection = function () {
        var _this = this;
        this.speed = -3;
        setInterval(function () { return _this.resetDirection(); }, 2000);
    };
    Cloud.prototype.resetDirection = function () {
        this.speed = -1;
    };
    Cloud.prototype.draw = function () {
        _super.prototype.draw.call(this);
    };
    return Cloud;
}(MiscItems));
var Coin = (function (_super) {
    __extends(Coin, _super);
    function Coin(parent) {
        var _this = _super.call(this, "coin", parent) || this;
        _this.x = 700;
        _this.y = 140;
        _this.width = 32;
        _this.height = 31;
        return _this;
    }
    Coin.prototype.draw = function () {
        _super.prototype.draw.call(this);
    };
    return Coin;
}(MiscItems));
var LongBlock;
(function (LongBlock) {
    var Block = (function (_super) {
        __extends(Block, _super);
        function Block(parent) {
            var _this = _super.call(this, "long_block", parent) || this;
            _this.x = 1200;
            _this.y = 240;
            _this.width = 64;
            _this.height = 32;
            return _this;
        }
        Block.prototype.draw = function () {
            _super.prototype.draw.call(this);
        };
        return Block;
    }(MiscItems));
    LongBlock.Block = Block;
})(LongBlock || (LongBlock = {}));
var Wheel = (function () {
    function Wheel(parent, offset) {
        this.div = document.createElement("wheel");
        parent.appendChild(this.div);
        this.x = offset;
        this.y = 30;
        this.speed = 0;
    }
    Wheel.prototype.draw = function () {
        this.x += this.speed;
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    return Wheel;
}());
var Car = (function () {
    function Car(parent) {
        var _this = this;
        this.observers = new Array();
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
        window.addEventListener("keydown", function (e) { return _this.onKeyDown(e); });
        this._behavior = new Drive(this);
    }
    Object.defineProperty(Car.prototype, "behavior", {
        get: function () {
            return this._behavior;
        },
        set: function (b) {
            this._behavior = b;
        },
        enumerable: true,
        configurable: true
    });
    Car.prototype.onKeyDown = function (e) {
        console.log(e.key);
        switch (e.keyCode) {
            case Keys.SPACE:
                if (this.y == 220) {
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
    };
    Car.prototype.driving = function () {
        this._behavior = new Drive(this);
    };
    Car.prototype.faster = function () {
        this._behavior.faster();
    };
    Car.prototype.slower = function () {
        this._behavior.slower();
    };
    Car.prototype.jumping = function () {
        this._behavior = new Jump(this);
    };
    Car.prototype.crashing = function () {
        this._behavior = new Crash(this);
    };
    Car.prototype.subscribe = function (o) {
        this.observers.push(o);
    };
    Car.prototype.unsubscribe = function (o) {
    };
    Car.prototype.notify = function () {
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var o = _a[_i];
            o.notify();
        }
    };
    Car.prototype.draw = function () {
        this._behavior.performBehavior();
        if (!Game.getInstance().checkCollision()) {
            this.score += 0.0314;
        }
        else {
            this._behavior = new Crash(this);
            this._behavior.performBehavior();
            TweenLite.to(this.div, 2.5, { x: 800, y: 200, rotation: 600, });
        }
        if (this.x >= 740) {
            Game.getInstance().gameOver(0);
        }
        if (this.x <= -80) {
            console.log(this.x);
            Game.getInstance().gameOver(0);
        }
        document.getElementById("score").innerHTML = "Score: " + Math.floor(this.score);
        this.div.style.transform = "translate(" + this.x + "px," + this.y + "px)";
        this.wheel1.draw();
        this.wheel2.draw();
    };
    return Car;
}());
//# sourceMappingURL=main.js.map