var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// LEFT_CAVE SCENE
var scenes;
(function (scenes) {
    var Leave = (function (_super) {
        __extends(Leave, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Leave() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Leave.prototype.start = function () {
            // add LeftCave Image
            this._leaveImage = new createjs.Bitmap("../../Assets/images/LeaveScene.png");
            this.addChild(this._leaveImage);
            // add the BACK button to the OVER scene
            this._startOverButton = new objects.Button("StartOverButton", config.Screen.CENTER_X, config.Screen.CENTER_Y + 180);
            this.addChild(this._startOverButton);
            // START_OVER Button event listener
            this._startOverButton.on("click", this._startOverButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        Leave.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // START_OVER Button click event handler
        Leave.prototype._startOverButtonClick = function (event) {
            // Switch to the INTRO Scene
            scene = config.Scene.INTRO;
            changeScene();
        };
        return Leave;
    })(objects.Scene);
    scenes.Leave = Leave;
})(scenes || (scenes = {}));
//# sourceMappingURL=leave.js.map