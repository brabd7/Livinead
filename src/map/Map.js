import { Floor } from './objects/Floor';

export class Map {
    constructor(game)
    {
        // Constructeur
        this.game = game;

        // Initialiser les objets de la map
        this.floor = new Floor(this.game);
    }
}