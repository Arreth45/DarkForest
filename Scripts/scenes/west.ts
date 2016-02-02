module scenes{
    export class West extends objects.Scene{
        
        private _westImage: createjs.Bitmap;
        private _grabButton: objects.Button;
        private _dontButton: objects.Button;
        
        
        constructor(){
            super();
        }
        
        public start(): void{
            this._westImage = new createjs.Bitmap("../../Assets/images/West.png");
            this.addChild(this._westImage);
            
            this._grabButton = new objects.Button(
                "Grab the Orb",
                config.Screen.CENTER_X - 100,
                config.Screen.CENTER_Y +100);
                this.addChild(this._grabButton);
                
                this._grabButton.on("click",this._grabButtonClick,this);
                
                this._dontButton = new objects.Button(
                "Don't grab the Orb",
                config.Screen.CENTER_X - 100,
                config.Screen.CENTER_Y +100);
                this.addChild(this._dontButton);
                
                this._dontButton.on("click",this._dontButtonClick,this);
                
                stage.addChild(this);
        }
        
        public update():void{
            
        }
        
        private _grabButtonClick(event: createjs.MouseEvent){
            scene = config.Scene.GRAB;
            orb = true;
        }
        
         private _dontButtonClick(event: createjs.MouseEvent){
            scene = config.Scene.DONT;
        }
    }
}