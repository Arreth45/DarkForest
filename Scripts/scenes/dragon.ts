module scenes{
    export class Dragon extends objects.Scene{
        
        private _dragonImage: createjs.Bitmap;
        private _startOverButton: objects.Button;
        
        
        constructor(){
            super();
        }
        
        public start(): void{
            this._dragonImage = new createjs.Bitmap("../../Assets/images/Dragon.png");
            this.addChild(this._dragonImage);
            
            this._startOverButton = new objects.Button(
                "Start Over",
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