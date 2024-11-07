import * as THREE from 'three';

// Core.Graphics Imports
import { Scene } from './graphics/Scene';
import { Camera } from './graphics/Camera';
import { Renderer } from './graphics/Renderer';
import { resize } from './graphics/_resize';

import { animate } from './animate';
import { Map } from '../map/Map';

export class Game {
    constructor()
    {
        this.scene = new Scene(THREE);
        this.camera = new Camera(THREE);
        this.renderer = new Renderer(THREE);

        // Initialiser la map
        this.map = new Map(THREE, this.scene.scene);

        animate(this.scene.scene, 
                this.camera.camera, 
                this.renderer.renderer
        );

        // Si l'utilisateur change la taille de sa fenêtre
        resize(this.camera.camera, this.renderer.renderer);
    }
}