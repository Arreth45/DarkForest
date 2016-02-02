var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var East = (function (_super) {
        __extends(East, _super);
        function East() {
            _super.call(this);
        }
        East.prototype.start = function () {
            this._eastImage = new createjs.Bitmap("../../Assets/images/EastScene.png");
            this.addChild(this._eastImage);
            this._startOverButton = new objects.Button("StartOverButton", config.Screen.CENTER_X, config.Screen.CENTER_Y + 180);
            this.addChild(this._startOverButton);
            this._startOverButton.on("click", this._startOverButtonClick, this);
            stage.addChild(this);
        };
        East.prototype.update = function () {
        };
        East.prototype._startOverButtonClick = function (event) {
            // Switch to the INTRO Scene
            scene = config.Scene.INTRO;
            changeScene();
        };
        return East;
    })(objects.Scene);
    scenes.East = East;
})(scenes || (scenes = {}));
//# sourceMappingURL=east.js.map