import { LightBase } from "./components/LightBase";

export class Lights {
    constructor(game)
    {
        // Constructeur
        this.game = game;

        // Initialiser toutes les lumières
        this.lightBase = new LightBase(this.game);
    }
}