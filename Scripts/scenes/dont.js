var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Dont = (function (_super) {
        __extends(Dont, _super);
        function Dont() {
            _super.call(this);
        }
        Dont.prototype.start = function () {
            this._dontImage = new createjs.Bitmap("../../Assets/images/DontScene.png");
            this.addChild(this._dontImage);
            this._booksButton = new objects.Button("Books", config.Screen.CENTER_X - 100, config.Screen.CENTER_Y + 180);
            this.addChild(this._booksButton);
            this._booksButton.on("click", this._booksButtonClick, this);
            this._chickenButton = new objects.Button("Chicken", config.Screen.CENTER_X + 100, config.Screen.CENTER_Y + 180);
            this.addChild(this._chickenButton);
            this._chickenButton.on("click", this._chickenButtonClick, this);
            stage.addChild(this);
        };
        Dont.prototype.update = function () {
        };
        Dont.prototype._booksButtonClick = function (event) {
            scene = config.Scene.CORRECT;
            changeScene();
        };
        Dont.prototype._chickenButtonClick = function (event) {
            scene = config.Scene.INCORRECT;
            changeScene();
        };
        return Dont;
    })(objects.Scene);
    scenes.Dont = Dont;
})(scenes || (scenes = {}));
//# sourceMappingURL=dont.js.map