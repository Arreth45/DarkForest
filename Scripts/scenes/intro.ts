// INTRO SCENE
module scenes {
    export class Intro extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _introImage: createjs.Bitmap;
        private _enterButton: objects.Button;
        private _leaveButton: objects.Button;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            // add Intro Image
            this._introImage = new createjs.Bitmap("../../Assets/images/IntroCave.png");
            this.addChild(this._introImage);
            
            // add the LEFT_CAVE button to the MENU scene
            this._enterButton = new objects.Button(
                "Enter",
                config.Screen.CENTER_X - 100,
                config.Screen.CENTER_Y + 180);
            this.addChild(this._enterButton);
            
            // LEFT_CAVE Button event listener
            this._enterButton.on("click", this._enterButtonClick, this);
            
            // add the LEFT_CAVE button to the MENU scene
            this._leaveButton = new objects.Button(
                "Leave",
                config.Screen.CENTER_X + 100,
                config.Screen.CENTER_Y + 180);
            this.addChild(this._leaveButton);
            
            // LEFT_CAVE Button event listener
            this._leaveButton.on("click", this._leaveButtonClick, this);
            
            // add this scene to the global stage container
            stage.addChild(this);
        }

        // INTRO Scene updates here
        public update(): void {

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
        // LEFT_CAVE Button click event handler
        private _enterButtonClick(event: createjs.MouseEvent) {
            // Switch to the LEFT_CAVE Scene
            scene = config.Scene.ENTER;
            changeScene();
        }
        
        // LEFT_CAVE Button click event handler
        private _leaveButtonClick(event: createjs.MouseEvent) {
            // Switch to the LEFT_CAVE Scene
            scene = config.Scene.LEAVE;
            changeScene();
        }
    }
}