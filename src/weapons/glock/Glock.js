import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { GlockSounds } from './components/GlockSounds';

export class Glock {
    constructor(playerWeapon)
    {
        // Constructeur
        this.playerWeapon = playerWeapon;
        this.camera = this.playerWeapon.player.game.camera.camera;
        
        // Initialiser la classe
        this.loader = new GLTFLoader();
        this.glockSounds = new GlockSounds(this);

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

    update()
    {
        this.aim();
        this.playSounds();
    }

    aim()
    {
        if (this.glock)
        {
            if (this.playerWeapon.aim)
            {
                this.glock.position.set(-0.366, -0.23, -0.35);
            }
            else 
            {
                this.glock.position.set(-0.2, -0.3, -0.35);
            }
        }
    }

    playSounds()
    {
        // Viser
        if (this.playerWeapon.aim)
        {

        }
    }
}