var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Win = (function (_super) {
        __extends(Win, _super);
        function Win() {
            _super.call(this);
        }
        Win.prototype.start = function () {
            this._winImage = new createjs.Bitmap("../../Assets/images/WinScene.png");
            this.addChild(this._winImage);
            this._startOverButton = new objects.Button("StartOverButton", config.Screen.CENTER_X, config.Screen.CENTER_Y + 180);
            this.addChild(this._startOverButton);
            this._startOverButton.on("click", this._startOverButtonClick, this);
            stage.addChild(this);
        };
        Win.prototype.update = function () {
        };
        Win.prototype._startOverButtonClick = function (event) {
            scene = config.Scene.INTRO;
            orb = true;
        };
        return Win;
    })(objects.Scene);
    scenes.Win = Win;
})(scenes || (scenes = {}));
//# sourceMappingURL=win.js.map