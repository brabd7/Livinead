import { Floor } from './components/Floor';

export class Objects {
    constructor(map)
    {
        // Constructeur
        this.map = map;
        this.game = this.map.game;

        // Initialiser tous les objets
        this.floor = new Floor(this.game);
    }
}