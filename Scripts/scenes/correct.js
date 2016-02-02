var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Correct = (function (_super) {
        __extends(Correct, _super);
        function Correct() {
            _super.call(this);
        }
        Correct.prototype.start = function () {
            this._correctImage = new createjs.Bitmap("../../Assets/images/CorrectScene.png");
            this.addChild(this._correctImage);
            this._sneakButton = new objects.Button("Sneak", config.Screen.CENTER_X - 100, config.Screen.CENTER_Y + 180);
            this.addChild(this._sneakButton);
            this._sneakButton.on("click", this._sneakButtonClick, this);
            this._sneakButton = new objects.Button("Fight", config.Screen.CENTER_X + 100, config.Screen.CENTER_Y + 180);
            this.addChild(this._fightButton);
            this._fightButton.on("click", this._fightButtonClick, this);
            stage.addChild(this);
        };
        Correct.prototype.update = function () {
        };
        Correct.prototype._sneakButtonClick = function (event) {
            scene = config.Scene.SNEAK;
            changeScene();
        };
        Correct.prototype._fightButtonClick = function (event) {
            scene = config.Scene.FIGHT;
            changeScene();
        };
        return Correct;
    })(objects.Scene);
    scenes.Correct = Correct;
})(scenes || (scenes = {}));
//# sourceMappingURL=correct.js.map