module scenes {
    export class Grab extends objects.Scene {

        private _grabImage: createjs.Bitmap;
        private _booksButton: objects.Button;
        private _chickenButton: objects.Button;


        constructor() {
            super();
        }

        public start(): void {
            this._grabImage = new createjs.Bitmap("../../Assets/images/GrabScene.png");
            this.addChild(this._grabImage);

            this._booksButton = new objects.Button(
                "Books",
                config.Screen.CENTER_X - 100,
                config.Screen.CENTER_Y + 180);
            this.addChild(this._booksButton);

            this._booksButton.on("click", this._booksButtonClick, this);

            this._booksButton = new objects.Button(
                "Chicken",
                config.Screen.CENTER_X + 100,
                config.Screen.CENTER_Y + 180);
            this.addChild(this._chickenButton);

            this._chickenButton.on("click", this._chickenButtonClick, this);

            stage.addChild(this);
        }

        public update(): void {

        }

        private _booksButtonClick(event: createjs.MouseEvent) {
            scene = config.Scene.CORRECT;
            orb = true;
        }

        private _chickenButtonClick(event: createjs.MouseEvent) {
            scene = config.Scene.INCORRECT 
            changeScene();
        }
    }
}