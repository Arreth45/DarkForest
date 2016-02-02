var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Grab = (function (_super) {
        __extends(Grab, _super);
        function Grab() {
            _super.call(this);
        }
        Grab.prototype.start = function () {
            this._grabImage = new createjs.Bitmap("../../Assets/images/GrabScene.png");
            this.addChild(this._grabImage);
            this._booksButton = new objects.Button("Books", config.Screen.CENTER_X - 100, config.Screen.CENTER_Y + 180);
            this.addChild(this._booksButton);
            this._booksButton.on("click", this._booksButtonClick, this);
            this._chickenButton = new objects.Button("Chicken", config.Screen.CENTER_X + 100, config.Screen.CENTER_Y + 180);
            this.addChild(this._chickenButton);
            this._chickenButton.on("click", this._chickenButtonClick, this);
            stage.addChild(this);
        };
        Grab.prototype.update = function () {
        };
        Grab.prototype._booksButtonClick = function (event) {
            scene = config.Scene.CORRECT;
            changeScene();
        };
        Grab.prototype._chickenButtonClick = function (event) {
            scene = config.Scene.INCORRECT;
            changeScene();
        };
        return Grab;
    })(objects.Scene);
    scenes.Grab = Grab;
})(scenes || (scenes = {}));
//# sourceMappingURL=grab.js.map