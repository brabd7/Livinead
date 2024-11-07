import { Floor } from './objects/Floor';

export class Map {
    constructor(scene, world)
    {
        // Constructeur
        this.scene = scene;
        this.world = world;

        // Initialiser les objets de la map
        this.floor = new Floor(this.scene, this.world);
    }
}