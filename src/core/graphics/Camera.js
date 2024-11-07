export class Camera {
    constructor(THREE, game)
    {
        // Constructeur
        this.THREE = THREE;
        this.game = game;

        this.camera = new this.THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 150);
        this.camera.position.set(0, 1, 0);
    }

    // MAJ de la caméra suivant le corps physique du joueur
    update()
    {
        if (this.game.player)
        {
            this.camera.position.copy(this.game.player.body.position);
        }
    }
}