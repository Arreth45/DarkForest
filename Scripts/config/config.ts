module config {

    // Scene Constants
    export class Scene {
        public static INTRO: number = 0;
        public static ENTER: number = 1;
        public static LEAVE: number = 2;
        public static WEST: number = 3;
        public static EAST: number = 4;
        public static GRAB: number = 5;
        public static DONT: number = 6;
        public static CORRECT: number = 7;
        public static INCORRECT: number =8;
        public static SNEAK: number = 9;
        public static FIGHT: number = 10;
        public static RIDDLE: number = 11;
        public static DRAGON: number = 12;
        public static LOSS: number = 13;
        public static WIN: number = 14;
    }
    
    
    // Screen Constants
    export class Screen {
        public static WIDTH: number = 640;
        public static HEIGHT: number = 480;
        public static CENTER_X: number = 320;
        public static CENTER_Y: number = 240;
    }
    
    // Game Constants
    export class Game {
        public static FPS: number = 60;
    }
}