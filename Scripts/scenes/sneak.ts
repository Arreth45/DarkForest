module scenes{
    export class Sneak extends objects.Scene{
        
        private _sneakImage: createjs.Bitmap;
        private _continueButton: objects.Button;
        
        
        constructor(){
            super();
        }
        
        public start(): void{
            this._sneakImage = new createjs.Bitmap("../../Assets/images/SneakScene.png");
            this.addChild(this._sneakImage);
            
            this._continueButton = new objects.Button(
                "Continue",
                config.Screen.CENTER_X,
                config.Screen.CENTER_Y + 180);
                this.addChild(this._continueButton);
                
                this._continueButton.on("click",this._continueButtonClick,this);
                
                
                stage.addChild(this);
        }
        
        public update():void{
            
        }
        
        private _continueButtonClick(event: createjs.MouseEvent){
            scene = config.Scene.RIDDLE;
            changeScene();
        }
       
    }
}