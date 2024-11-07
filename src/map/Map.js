import { Floor } from './objects/Floor';

export class Map {
    constructor(THREE, scene)
    {
        // Constructeur
        this.THREE = THREE;
        this.scene = scene;

        // Initialiser les objets de la map
        this.floor = new Floor(this.THREE, this.scene);
    }
}