/// <reference path = "_reference.ts" />
// global variables
var canvas;
var stage;
var stats;
var currentScene;
var scene;
// Game Scenes
var intro;
var enter;
var leave;
var correct;
var dont;
var dragon;
var east;
var fight;
var grab;
var incorrect;
var loss;
var riddle;
var sneak;
var west;
var win;
//orb boolean
var orb = false;
function init() {
    // create a reference the HTML canvas Element
    canvas = document.getElementById("canvas");
    // create our main display list container
    stage = new createjs.Stage(canvas);
    // Enable mouse events
    stage.enableMouseOver(20);
    // set the framerate to 60 frames per second
    createjs.Ticker.setFPS(config.Game.FPS);
    // create an event listener to count off frames
    createjs.Ticker.on("tick", gameLoop, this);
    // sets up our stats counting workflow
    setupStats();
    // set initial scene
    scene = config.Scene.INTRO;
    changeScene();
}
// Main Game Loop function that handles what happens each "tick" or frame
function gameLoop(event) {
    // start collecting stats for this frame
    stats.begin();
    // calling State's update method
    currentScene.update();
    // redraw/refresh stage every frame
    stage.update();
    // stop collecting stats for this frame
    stats.end();
}
// Setup Game Stats
function setupStats() {
    stats = new Stats();
    stats.setMode(0); // shows fps
    stats.domElement.style.position = "absolute";
    stats.domElement.style.left = "0px";
    stats.domElement.style.top = "0px";
    document.body.appendChild(stats.domElement);
}
// Finite State Machine used to change Scenes
function changeScene() {
    // Launch various scenes
    switch (scene) {
        case config.Scene.INTRO:
            stage.removeAllChildren();
            intro = new scenes.Intro();
            currentScene = intro;
            console.log("Starting INTRO Scene");
            break;
        case config.Scene.ENTER:
            stage.removeAllChildren();
            enter = new scenes.Enter();
            currentScene = enter;
            console.log("Starting ENTER Scene");
            break;
        case config.Scene.LEAVE:
            stage.removeAllChildren();
            leave = new scenes.Leave();
            currentScene = leave;
            console.log("Starting LEAVE Scene");
            break;
        case config.Scene.CORRECT:
            stage.removeAllChildren();
            correct = new scenes.Correct();
            currentScene = correct;
            console.log("Starting Correct Scene");
            break;
        case config.Scene.DONT:
            stage.removeAllChildren();
            dont = new scenes.Dont();
            currentScene = dont;
            console.log("Starting Dont Scene");
            break;
        case config.Scene.DRAGON:
            stage.removeAllChildren();
            dragon = new scenes.Dragon();
            currentScene = dragon;
            console.log("Starting Dragon Scene");
            break;
        case config.Scene.EAST:
            stage.removeAllChildren();
            east = new scenes.East();
            currentScene = east;
            console.log("Starting East Scene");
            break;
        case config.Scene.FIGHT:
            stage.removeAllChildren();
            fight = new scenes.Fight();
            currentScene = fight;
            console.log("Starting Fight Scene");
            break;
        case config.Scene.GRAB:
            stage.removeAllChildren();
            grab = new scenes.Grab();
            currentScene = grab;
            console.log("Starting Grab Scene");
            break;
        case config.Scene.INCORRECT:
            stage.removeAllChildren();
            incorrect = new scenes.Incorrect();
            currentScene = incorrect;
            console.log("Starting Incorrect Scene");
            break;
        case config.Scene.LOSS:
            stage.removeAllChildren();
            loss = new scenes.Loss();
            currentScene = loss;
            console.log("Starting Loss Scene");
            break;
        case config.Scene.RIDDLE:
            stage.removeAllChildren();
            riddle = new scenes.Riddle();
            currentScene = riddle;
            console.log("Starting Riddle Scene");
            break;
        case config.Scene.SNEAK:
            stage.removeAllChildren();
            sneak = new scenes.Sneak();
            currentScene = sneak;
            console.log("Starting sneak Scene");
            break;
        case config.Scene.WEST:
            stage.removeAllChildren();
            west = new scenes.West();
            currentScene = west;
            console.log("Starting west Scene");
            break;
        case config.Scene.WIN:
            stage.removeAllChildren();
            win = new scenes.Win();
            currentScene = win;
            console.log("Starting Win Scene");
            break;
    }
    console.log(currentScene.numChildren);
}
//# sourceMappingURL=game.js.map