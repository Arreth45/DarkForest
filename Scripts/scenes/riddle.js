var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Riddle = (function (_super) {
        __extends(Riddle, _super);
        function Riddle() {
            _super.call(this);
        }
        Riddle.prototype.start = function () {
            this._riddleImage = new createjs.Bitmap("../../Assets/images/RiddleScene.png");
            this.addChild(this._riddleImage);
            this._westButton = new objects.Button("West", config.Screen.CENTER_X - 100, config.Screen.CENTER_Y + 180);
            this.addChild(this._westButton);
            this._westButton.on("click", this._westButtonClick, this);
            this._eastButton = new objects.Button("East", config.Screen.CENTER_X + 100, config.Screen.CENTER_Y + 180);
            this.addChild(this._eastButton);
            this._eastButton.on("click", this._eastButtonClick, this);
            stage.addChild(this);
        };
        Riddle.prototype.update = function () {
        };
        Riddle.prototype._westButtonClick = function (event) {
            if (orb) {
                scene = config.Scene.WIN;
            }
            else {
                scene = config.Scene.LOSS;
            }
            changeScene();
        };
        Riddle.prototype._eastButtonClick = function (event) {
            scene = config.Scene.DRAGON;
            changeScene();
        };
        return Riddle;
    })(objects.Scene);
    scenes.Riddle = Riddle;
})(scenes || (scenes = {}));
//# sourceMappingURL=riddle.js.map