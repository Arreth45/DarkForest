module scenes{
    export class Dragon extends objects.Scene{
        
        private _dragonImage: createjs.Bitmap;
        private _startOverButton: objects.Button;
        
        
        constructor(){
            super();
        }
        
        public start(): void{
            this._dragonImage = new createjs.Bitmap("../../Assets/images/DragonScene.png");
            this.addChild(this._dragonImage);
            
            this._startOverButton = new objects.Button(
                "StartOverButton",
                config.Screen.CENTER_X,
                config.Screen.CENTER_Y + 180);
                this.addChild(this._startOverButton);
                
                this._startOverButton.on("click",this._startOverButtonClick,this);
                
                
                stage.addChild(this);
        }
        
        public update():void{
            
        }
        
        private _startOverButtonClick(event: createjs.MouseEvent){
            scene = config.Scene.INTRO;
            changeScene();
        }
    }
}