module scenes {
    export class East extends objects.Scene {

        private _eastImage: createjs.Bitmap;
        private _startOverButton: objects.Button;

        constructor() {
            super();
        }

        public start(): void {
            this._eastImage = new createjs.Bitmap("../../Assets/images/East.png");
            this.addChild(this._eastImage);

            this._startOverButton = new objects.Button(
                "StartOverButton",
                config.Screen.CENTER_X,
                config.Screen.CENTER_Y + 180);
            this.addChild(this._startOverButton);

            this._startOverButton.on("click", this._startOverButtonClick, this);

            stage.addChild(this);

        }

        public update(): void {

        }

        private _startOverButtonClick(event: createjs.MouseEvent) {
            // Switch to the INTRO Scene
            scene = config.Scene.INTRO;
            changeScene();
        }
    }
}