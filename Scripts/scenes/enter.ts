// Enter SCENE
module scenes {
    export class Enter extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _enterImage: createjs.Bitmap;
        private _westButton: objects.Button;
        private _eastButton: objects.Button;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            // add Enter Image
            this._enterImage = new createjs.Bitmap("../../Assets/images/EnterScene.png");
            this.addChild(this._enterImage);

            // add the BACK button to the OVER scene
            this._westButton = new objects.Button(
                "West",
                config.Screen.CENTER_X,
                config.Screen.CENTER_Y + 180);
            this.addChild(this._westButton);
           
            // START_OVER Button event listener
            this._westButton.on("click", this._westButtonClick, this);
            
             this._eastButton = new objects.Button(
                "East",
                config.Screen.CENTER_X,
                config.Screen.CENTER_Y + 180);
            this.addChild(this._westButton);
           
            // START_OVER Button event listener
            this._eastButton.on("click", this._eastButtonClick, this);


            // add this scene to the global stage container
            stage.addChild(this);
        }

        // PLAY Scene updates here
        public update(): void {

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
        // START_OVER Button click event handler
        private _westButtonClick(event: createjs.MouseEvent) {
            // Switch to the INTRO Scene
            scene = config.Scene.WEST;
            changeScene();
        }
        
         private _eastButtonClick(event: createjs.MouseEvent) {
            // Switch to the INTRO Scene
            scene = config.Scene.EAST;
            changeScene();
        }
    }
}