import { Objects } from "./objects/Objects";
import { Lights } from "./lights/Lights";

export class Map {
    constructor(game)
    {
        // Constructeur
        this.game = game;

        // Initialiser les objets de la map
        this.objects = new Objects(this);

        // Initialiser les lumières de la map
        this.lights = new Lights(this);
    }
}