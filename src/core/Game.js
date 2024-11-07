import * as THREE from 'three';
import * as CANNON from 'cannon-es';

// Core.Graphics Imports
import { Scene } from './graphics/Scene';
import { Camera } from './graphics/Camera';
import { Renderer } from './graphics/Renderer';
import { resize } from './graphics/_resize';

import { animate } from './animate';
import { Map } from '../map/Map';
import { World } from '../physics/world';

export class Game {
    constructor()
    {
        this.scene = new Scene(THREE);
        this.world = new World(CANNON);
        this.camera = new Camera(THREE);
        this.renderer = new Renderer(THREE);

        // Initialiser la map
        this.map = new Map(this.scene, this.world);

        animate(this.scene.scene, 
                this.camera.camera, 
                this.renderer.renderer,
                this.world.world
        );

        // Si l'utilisateur change la taille de sa fenêtre
        resize(this.camera.camera, this.renderer.renderer);
    }
}