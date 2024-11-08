import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export class Glock {
    constructor(player)
    {
        // Constructeur
        this.player = player;
        this.camera = this.player.game.camera.camera;
        
        // Initialiser la classe qui charge les modèles 3D
        this.loader = new GLTFLoader();

        // Initialiser le glock
        this.loadGlockModel();
    }

    loadGlockModel()
    {
        this.loader.load('../../../assets/models/weapons/glock.glb', (gltf) => {
            this.glock = gltf.scene;

            // Echelle, position et rotation de l'arme
            this.glock.scale.set(0.1, 0.1, 0.1);
            this.glock.rotation.y = Math.PI / 2;
            this.glock.position.set(-0.2, -0.3, -0.35);

            // Ajouter en tant qu'enfant à la caméra
            this.camera.add(this.glock);
        })
    }
}