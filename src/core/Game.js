import * as THREE from 'three';
import * as CANNON from 'cannon-es';

// Core Imports
import { Scene } from './graphics/Scene';
import { Camera } from './graphics/Camera';
import { Renderer } from './graphics/Renderer';
import { resize } from './graphics/_resize';
import { animate } from './animate';
import { AudioManager } from './audio/AudioManager';

// Map & Physics Imports
import { Map } from '../map/Map';
import { World } from '../physics/world';

// Entities Import
import { Player } from '../entities/Player/Player';

export class Game {
    constructor()
    {
        this.scene = new Scene(THREE);
        this.world = new World(CANNON);
        this.camera = new Camera(THREE, this);
        this.renderer = new Renderer(THREE);

        // Ajouter la caméra à la scène
        this.scene.scene.add(this.camera.camera);

        // Initialiser le gestionnaire d'audio
        this.audioManager = new AudioManager(this);

        // Initialiser la map
        this.map = new Map(this);

        // Initialiser le joueur
        this.player = new Player(this);

        animate(this);

        // Si l'utilisateur change la taille de sa fenêtre
        resize(this);
    }
}