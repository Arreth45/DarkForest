var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Loss = (function (_super) {
        __extends(Loss, _super);
        function Loss() {
            _super.call(this);
        }
        Loss.prototype.start = function () {
            this._lossImage = new createjs.Bitmap("../../Assets/images/LossScene.png");
            this.addChild(this._lossImage);
            this._startOverButton = new objects.Button("StartOverButton", config.Screen.CENTER_X, config.Screen.CENTER_Y + 180);
            this.addChild(this._startOverButton);
            this._startOverButton.on("click", this._startOverButtonClick, this);
            stage.addChild(this);
        };
        Loss.prototype.update = function () {
        };
        Loss.prototype._startOverButtonClick = function (event) {
            scene = config.Scene.INTRO;
            changeScene();
        };
        return Loss;
    })(objects.Scene);
    scenes.Loss = Loss;
})(scenes || (scenes = {}));
//# sourceMappingURL=loss.js.map