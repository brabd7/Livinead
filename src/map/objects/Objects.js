import { Floor } from './components/Floor';

export class Objects {
    constructor(game)
    {
        // Constructeur
        this.game = game;

        // Initialiser tous les objets
        this.floor = new Floor(this.game);
    }
}