export class Renderer {
    constructor(THREE)
    {
        // Constructeur
        this.THREE = THREE;

        this.renderer = new this.THREE.WebGLRenderer();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setClearColor(new this.THREE.Color('skyblue'));

        // L'ajouter à notre HTML
        document.body.appendChild(this.renderer.domElement);
    }
}