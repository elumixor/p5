// p5.js
declare var p5: any;
import "./lib/p5";

// Projects imports
import {P5Project, ProjectBase} from "./src/ProjectBase";
import {PathfinderProject} from "./src/pathfinder/project";

// Initializing p5
new p5((p: p5) => {
    ProjectBase.p = p;

    // Change this to actual project
    const project: P5Project = new PathfinderProject;

    p.preload = project.onPreload;
    p.setup = project.onSetup;
    p.draw = project.onDraw;
    p.keyPressed = project.onKeyPressed;
});
