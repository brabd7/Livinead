import { PlayerCameraController } from "./components/PlayerCameraController";
import { PlayerPhysics } from "./components/PlayerPhysics";
import { PlayerMovement } from "./components/PlayerMovement";
import { PlayerControl } from "./components/PlayerControl";

export class Player {
    constructor(game)
    {
        // Constructeur
        this.game = game;
        this.THREE = this.game.scene.THREE;

        // Initialiser les modules du joueur
        this.playerCameraController = new PlayerCameraController(this);
        this.playerPhysics = new PlayerPhysics(this);
        this.playerMovement = new PlayerMovement(this);
        this.playerControl = new PlayerControl(this);
    }

    update()
    {
        this.playerMovement.update();
    }
}