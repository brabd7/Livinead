import { Floor } from './objects/Floor';

export class Map {
    constructor(scene)
    {
        // Constructeur
        this.scene = scene;

        // Initialiser les objets de la map
        this.floor = new Floor(this.scene, this.world);
    }
}