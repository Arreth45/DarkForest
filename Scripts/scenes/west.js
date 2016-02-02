var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var West = (function (_super) {
        __extends(West, _super);
        function West() {
            _super.call(this);
        }
        West.prototype.start = function () {
            this._westImage = new createjs.Bitmap("../../Assets/images/WestScene.png");
            this.addChild(this._westImage);
            this._grabButton = new objects.Button("Grab", config.Screen.CENTER_X - 100, config.Screen.CENTER_Y + 100);
            this.addChild(this._grabButton);
            this._grabButton.on("click", this._grabButtonClick, this);
            this._dontButton = new objects.Button("Dont", config.Screen.CENTER_X - 100, config.Screen.CENTER_Y + 100);
            this.addChild(this._dontButton);
            this._dontButton.on("click", this._dontButtonClick, this);
            stage.addChild(this);
        };
        West.prototype.update = function () {
        };
        West.prototype._grabButtonClick = function (event) {
            scene = config.Scene.GRAB;
            orb = true;
        };
        West.prototype._dontButtonClick = function (event) {
            scene = config.Scene.DONT;
        };
        return West;
    })(objects.Scene);
    scenes.West = West;
})(scenes || (scenes = {}));
//# sourceMappingURL=west.js.map