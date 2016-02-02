var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Dragon = (function (_super) {
        __extends(Dragon, _super);
        function Dragon() {
            _super.call(this);
        }
        Dragon.prototype.start = function () {
            this._dragonImage = new createjs.Bitmap("../../Assets/images/DragonScene.png");
            this.addChild(this._dragonImage);
            this._startOverButton = new objects.Button("StartOverButton", config.Screen.CENTER_X - 100, config.Screen.CENTER_Y + 100);
            this.addChild(this._startOverButton);
            this._startOverButton.on("click", this._startOverButtonClick, this);
            stage.addChild(this);
        };
        Dragon.prototype.update = function () {
        };
        Dragon.prototype._startOverButtonClick = function (event) {
            scene = config.Scene.INTRO;
            orb = true;
        };
        return Dragon;
    })(objects.Scene);
    scenes.Dragon = Dragon;
})(scenes || (scenes = {}));
//# sourceMappingURL=dragon.js.map