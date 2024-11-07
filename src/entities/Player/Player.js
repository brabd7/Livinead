import { PlayerPhysics } from "./components/PlayerPhysics";
import { PlayerCameraController } from "./components/PlayerCameraController";

export class Player {
    constructor(game)
    {
        // Constructeur
        this.game = game;

        // Initialiser les modules du joueur
        this.playerPhysics = new PlayerPhysics(this);
        this.playerCameraController = new PlayerCameraController(this);
    }
}