export class Camera {
    constructor(THREE)
    {
        // Constructeur
        this.THREE = THREE;

        this.camera = new this.THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 150);
        this.camera.position.set(0, 1, 0);
    }
}