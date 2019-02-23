export interface P5Project {
    onPreload(): void
    onSetup(): void
    onDraw(): void
    onKeyPressed(): void
}

export class ProjectBase implements P5Project {
    public static p: p5;
    protected readonly _p: p5;
    public readonly name: string;

    protected constructor(name: string) { this.name = name; this._p = ProjectBase.p; }

    onPreload(): void {
        console.log("onPreload()", ProjectBase.p);
    }

    onSetup(): void {
        ProjectBase.p.createCanvas(ProjectBase.p.windowWidth, ProjectBase.p.windowHeight);
        ProjectBase.p.background("grey");
    }

    onDraw(): void {
        if (ProjectBase.p.mouseIsPressed) {
            ProjectBase.p.fill(0, 0, 0);
        } else {
            ProjectBase.p.fill(255, 0, 0);
        }
        ProjectBase.p.ellipse(ProjectBase.p.mouseX, ProjectBase.p.mouseY, 80, 80);
    }

    onKeyPressed(): void {
        console.log("Key pressed: " + ProjectBase.p.key);
    }

    static EmptyProject = new ProjectBase("Empty project");
}
