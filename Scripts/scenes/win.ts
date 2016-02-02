module scenes{
    export class Win extends objects.Scene{
        
        private _winImage: createjs.Bitmap;
        private _startOverButton: objects.Button;
        
        
        constructor(){
            super();
        }
        
        public start(): void{
            this._winImage = new createjs.Bitmap("../../Assets/images/Win.png");
            this.addChild(this._winImage);
            
            this._startOverButton = new objects.Button(
                "StartOverButton",
                config.Screen.CENTER_X - 100,
                config.Screen.CENTER_Y +100);
                this.addChild(this._startOverButton);
                
                this._startOverButton.on("click",this._startOverButtonClick,this);
                
                
                stage.addChild(this);
        }
        
        public update():void{
            
        }
        
        private _startOverButtonClick(event: createjs.MouseEvent){
            scene = config.Scene.INTRO;
            orb = true;
        }
        
    }
}