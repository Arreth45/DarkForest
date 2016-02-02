var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Sneak = (function (_super) {
        __extends(Sneak, _super);
        function Sneak() {
            _super.call(this);
        }
        Sneak.prototype.start = function () {
            this._sneakImage = new createjs.Bitmap("../../Assets/images/SneakScene.png");
            this.addChild(this._sneakImage);
            this._continueButton = new objects.Button("Continue", config.Screen.CENTER_X, config.Screen.CENTER_Y + 180);
            this.addChild(this._continueButton);
            this._continueButton.on("click", this._continueButtonClick, this);
            stage.addChild(this);
        };
        Sneak.prototype.update = function () {
        };
        Sneak.prototype._continueButtonClick = function (event) {
            scene = config.Scene.RIDDLE;
            changeScene();
        };
        return Sneak;
    })(objects.Scene);
    scenes.Sneak = Sneak;
})(scenes || (scenes = {}));
//# sourceMappingURL=sneak.js.map