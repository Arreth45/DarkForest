module scenes {
    export class Riddle extends objects.Scene {

        private _riddleImage: createjs.Bitmap;
        private _westButton: objects.Button;
        private _eastButton: objects.Button;


        constructor() {
            super();
        }

        public start(): void {
            this._riddleImage = new createjs.Bitmap("../../Assets/images/RiddleScene.png");
            this.addChild(this._riddleImage);

            this._westButton = new objects.Button(
                "West",
                config.Screen.CENTER_X - 100,
                config.Screen.CENTER_Y + 180);
            this.addChild(this._westButton);

            this._westButton.on("click", this._westButtonClick, this);

            this._eastButton = new objects.Button(
                "East",
                config.Screen.CENTER_X + 100,
                config.Screen.CENTER_Y + 180);
            this.addChild(this._eastButton);

            this._eastButton.on("click", this._eastButtonClick, this);

            stage.addChild(this);
        }

        public update(): void {

        }

        private _westButtonClick(event: createjs.MouseEvent) {
            if (orb = true) {
                scene = config.Scene.WIN;
                changeScene();
            }
            else {
                scene = config.Scene.LOSS;
                changeScene();
            }
            
        }

        private _eastButtonClick(event: createjs.MouseEvent) {
            scene = config.Scene.DRAGON;
            changeScene();
        }
    }
}