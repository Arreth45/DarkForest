var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// INTRO SCENE
var scenes;
(function (scenes) {
    var Intro = (function (_super) {
        __extends(Intro, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Intro() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Intro.prototype.start = function () {
            // add Intro Image
            this._introImage = new createjs.Bitmap("../../Assets/images/Intro.png");
            this.addChild(this._introImage);
            // add the LEFT_CAVE button to the MENU scene
            this._enterButton = new objects.Button("Enter", config.Screen.CENTER_X - 100, config.Screen.CENTER_Y + 180);
            this.addChild(this._enterButton);
            // LEFT_CAVE Button event listener
            this._enterButton.on("click", this._enterButtonClick, this);
            // add the LEFT_CAVE button to the MENU scene
            this._leaveButton = new objects.Button("Leave", config.Screen.CENTER_X + 100, config.Screen.CENTER_Y + 180);
            this.addChild(this._leaveButton);
            // LEFT_CAVE Button event listener
            this._leaveButton.on("click", this._leaveButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // INTRO Scene updates here
        Intro.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // LEFT_CAVE Button click event handler
        Intro.prototype._enterButtonClick = function (event) {
            // Switch to the LEFT_CAVE Scene
            scene = config.Scene.ENTER;
            changeScene();
        };
        // LEFT_CAVE Button click event handler
        Intro.prototype._leaveButtonClick = function (event) {
            // Switch to the LEFT_CAVE Scene
            scene = config.Scene.LEAVE;
            changeScene();
        };
        return Intro;
    })(objects.Scene);
    scenes.Intro = Intro;
})(scenes || (scenes = {}));
//# sourceMappingURL=intro.js.map