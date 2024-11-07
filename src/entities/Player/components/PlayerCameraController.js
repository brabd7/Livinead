import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls.js';

export class PlayerCameraController {
    constructor(player)
    {
        // Constructeur
        this.player = player;
        this.camera = this.player.game.camera.camera;
        this.renderer = this.player.game.renderer.renderer;
        
        this.cameraController = new PointerLockControls(this.camera, this.renderer.domElement);
        
        // Verrouiller le pointeur afin que la souris contrôle la caméra
        document.addEventListener('click', () => {
            this.cameraController.lock();
        });
    }
}