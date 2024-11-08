import { PlayerCameraController } from "./components/PlayerCameraController";
import { PlayerPhysics } from "./components/PlayerPhysics";
import { PlayerMovement } from "./components/PlayerMovement";
import { PlayerControl } from "./components/PlayerControl";
import { PlayerSounds } from "./components/PlayerSounds";
import { PlayerWeapon } from "./components/PlayerWeapon";

export class Player {
    constructor(game)
    {
        // Constructeur
        this.game = game;
        this.THREE = this.game.scene.THREE;
        this.audioManager = this.game.audioManager;

        // Initialiser les modules du joueur
        this.playerSounds = new PlayerSounds(this);
        this.playerCameraController = new PlayerCameraController(this);
        this.playerPhysics = new PlayerPhysics(this);
        this.playerMovement = new PlayerMovement(this);
        this.playerWeapon = new PlayerWeapon(this);
        this.playerControl = new PlayerControl(this);
    }

    update()
    {
        this.playerMovement.update();
    }
}