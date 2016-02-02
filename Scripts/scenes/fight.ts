module scenes{
    export class Fight extends objects.Scene{
        
        private _fightImage: createjs.Bitmap;
        private _startOverButton: objects.Button;
        
        
        constructor(){
            super();
        }
        
        public start(): void{
            this._fightImage = new createjs.Bitmap("../../Assets/images/FightScene.png");
            this.addChild(this._fightImage);
            
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