module scenes{
    export class Dont extends objects.Scene{
        
        private _dontImage: createjs.Bitmap;
        private _booksButton: objects.Button;
        private _chickenButton: objects.Button;
        
        
        constructor(){
            super();
        }
        
        public start(): void{
            this._dontImage = new createjs.Bitmap("../../Assets/images/DontScene.png");
            this.addChild(this._dontImage);
            
            this._booksButton = new objects.Button(
                "Books",
                config.Screen.CENTER_X - 100,
                config.Screen.CENTER_Y + 180);
                this.addChild(this._booksButton);
                
                this._booksButton.on("click",this._booksButtonClick,this);
                
                this._chickenButton = new objects.Button(
                "Chicken",
                config.Screen.CENTER_X + 100,
                config.Screen.CENTER_Y + 180);
                this.addChild(this._chickenButton);
                
                this._chickenButton.on("click",this._chickenButtonClick,this);
                
                stage.addChild(this);
        }
        
        public update():void{
            
        }
        
        private _booksButtonClick(event: createjs.MouseEvent){
            scene = config.Scene.CORRECT;
            changeScene();
        }
        
         private _chickenButtonClick(event: createjs.MouseEvent){
            scene = config.Scene.INCORRECT;
            changeScene();
        }
    }
}