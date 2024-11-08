import { LightBase } from "./components/LightBase";

export class Lights {
    constructor(map)
    {
        // Constructeur
        this.map = map;
        this.game = this.map.game;

        // Initialiser toutes les lumières
        this.lightBase = new LightBase(this.game);
    }
}