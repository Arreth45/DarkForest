var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Fight = (function (_super) {
        __extends(Fight, _super);
        function Fight() {
            _super.call(this);
        }
        Fight.prototype.start = function () {
            this._fightImage = new createjs.Bitmap("../../Assets/images/FightScene.png");
            this.addChild(this._fightImage);
            this._startOverButton = new objects.Button("StartOverButton", config.Screen.CENTER_X, config.Screen.CENTER_Y + 180);
            this.addChild(this._startOverButton);
            this._startOverButton.on("click", this._startOverButtonClick, this);
            stage.addChild(this);
        };
        Fight.prototype.update = function () {
        };
        Fight.prototype._startOverButtonClick = function (event) {
            scene = config.Scene.INTRO;
            orb = true;
            changeScene();
        };
        return Fight;
    })(objects.Scene);
    scenes.Fight = Fight;
})(scenes || (scenes = {}));
//# sourceMappingURL=fight.js.map