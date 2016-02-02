module scenes{
    export class Correct extends objects.Scene{
        
        private _correctImage: createjs.Bitmap;
        private _sneakButton: objects.Button;
        private _fightButton: objects.Button;
        
        
        constructor(){
            super();
        }
        
        public start(): void{
            this._correctImage = new createjs.Bitmap("../../Assets/images/CorrectScene.png");
            this.addChild(this._correctImage);
            
            this._sneakButton = new objects.Button(
                "Sneak",
                config.Screen.CENTER_X - 100,
                config.Screen.CENTER_Y +100);
                this.addChild(this._sneakButton);
                
                this._sneakButton.on("click",this._sneakButtonClick,this);
                
                this._sneakButton = new objects.Button(
                "Fight"
                config.Screen.CENTER_X - 100,
                config.Screen.CENTER_Y +100);
                this.addChild(this._fightButton);
                
                this._fightButton.on("click",this._fightButtonClick,this);
                
                stage.addChild(this);
        }
        
        public update():void{
            
        }
        
        private _sneakButtonClick(event: createjs.MouseEvent){
            scene = config.Scene.SNEAK;
        }
        
         private _fightButtonClick(event: createjs.MouseEvent){
            scene = config.Scene.FIGHT;
        }
    }
}