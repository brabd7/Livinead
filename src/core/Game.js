import * as THREE from 'three';

import { Scene } from './graphics/Scene';
import { Camera } from './graphics/Camera';
import { Renderer } from './graphics/Renderer';
import { animate } from './animate';
import { resize } from './graphics/_resize';

export class Game {
    constructor()
    {
        this.scene = new Scene(THREE);
        this.camera = new Camera(THREE);
        this.renderer = new Renderer(THREE);

        animate(this.scene.scene, 
                this.camera.camera, 
                this.renderer.renderer
        );

        // Si l'utilisateur change la taille de sa fenêtre
        resize(this.camera.camera, this.renderer.renderer);
    }
}