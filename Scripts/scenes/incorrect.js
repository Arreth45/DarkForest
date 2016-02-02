var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Incorrect = (function (_super) {
        __extends(Incorrect, _super);
        function Incorrect() {
            _super.call(this);
        }
        Incorrect.prototype.start = function () {
            this._incorrectImage = new createjs.Bitmap("../../Assets/images/IncorrectScene.png");
            this.addChild(this._incorrectImage);
            this._startOverButton = new objects.Button("StartOverButton", config.Screen.CENTER_X, config.Screen.CENTER_Y + 180);
            this.addChild(this._startOverButton);
            this._startOverButton.on("click", this._startOverButtonClick, this);
            stage.addChild(this);
        };
        Incorrect.prototype.update = function () {
        };
        Incorrect.prototype._startOverButtonClick = function (event) {
            // Switch to the INTRO Scene
            scene = config.Scene.INTRO;
            changeScene();
        };
        return Incorrect;
    })(objects.Scene);
    scenes.Incorrect = Incorrect;
})(scenes || (scenes = {}));
//# sourceMappingURL=incorrect.js.map