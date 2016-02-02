var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// Enter SCENE
var scenes;
(function (scenes) {
    var Enter = (function (_super) {
        __extends(Enter, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Enter() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Enter.prototype.start = function () {
            // add Enter Image
            this._enterImage = new createjs.Bitmap("../../Assets/images/EnterScene.png");
            this.addChild(this._enterImage);
            // add the BACK button to the OVER scene
            this._westButton = new objects.Button("West", config.Screen.CENTER_X - 100, config.Screen.CENTER_Y + 180);
            this.addChild(this._westButton);
            // START_OVER Button event listener
            this._westButton.on("click", this._westButtonClick, this);
            this._eastButton = new objects.Button("East", config.Screen.CENTER_X + 100, config.Screen.CENTER_Y + 180);
            this.addChild(this._eastButton);
            // START_OVER Button event listener
            this._eastButton.on("click", this._eastButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        Enter.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // START_OVER Button click event handler
        Enter.prototype._westButtonClick = function (event) {
            // Switch to the INTRO Scene
            scene = config.Scene.WEST;
            changeScene();
        };
        Enter.prototype._eastButtonClick = function (event) {
            // Switch to the INTRO Scene
            scene = config.Scene.EAST;
            changeScene();
        };
        return Enter;
    })(objects.Scene);
    scenes.Enter = Enter;
})(scenes || (scenes = {}));
//# sourceMappingURL=enter.js.map