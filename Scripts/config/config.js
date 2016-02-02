var config;
(function (config) {
    // Scene Constants
    var Scene = (function () {
        function Scene() {
        }
        Scene.INTRO = 0;
        Scene.ENTER = 1;
        Scene.LEAVE = 2;
        Scene.WEST = 3;
        Scene.EAST = 4;
        Scene.GRAB = 5;
        Scene.DONT = 6;
        Scene.CORRECT = 7;
        Scene.INCORRECT = 8;
        Scene.SNEAK = 9;
        Scene.FIGHT = 10;
        Scene.RIDDLE = 11;
        Scene.DRAGON = 12;
        Scene.LOSS = 13;
        Scene.WIN = 14;
        return Scene;
    })();
    config.Scene = Scene;
    // Screen Constants
    var Screen = (function () {
        function Screen() {
        }
        Screen.WIDTH = 640;
        Screen.HEIGHT = 480;
        Screen.CENTER_X = 320;
        Screen.CENTER_Y = 240;
        return Screen;
    })();
    config.Screen = Screen;
    // Game Constants
    var Game = (function () {
        function Game() {
        }
        Game.FPS = 60;
        return Game;
    })();
    config.Game = Game;
})(config || (config = {}));
//# sourceMappingURL=config.js.map