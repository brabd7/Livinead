export class PlayerControl {
    constructor(player)
    {
        // Constructeur
        this.player = player;
        this.playerMovement = this.player.playerMovement;

        // Initialiser les contrôles
        this.initControl();
    }

    initControl()
    {
        this.moveControl();
    }

    moveControl()
    {
        document.addEventListener('keydown', (event) => {
            switch (event.code)
            {
                case "KeyW":
                    this.playerMovements.moveForward = true;
                    break;
                case "KeyS":
                    this.playerMovements.moveBackward = true;
                    break;
                case "KeyD":
                    this.playerMovements.moveRight = true;
                    break;
                case "KeyQ":
                    this.playerMovements.moveLeft = true;
                    break;
                default:
                    break;
            }
        })

        document.addEventListener('keyup', (event) => {
            switch (event.code)
            {
                case "KeyW":
                    this.playerMovements.moveForward = false;
                    break;
                case "KeyS":
                    this.playerMovements.moveBackward = false;
                    break;
                case "KeyD":
                    this.playerMovements.moveRight = false;
                    break;
                case "KeyQ":
                    this.playerMovements.moveLeft = false;
                    break;
                default:
                    break;
            }
        })
    }
}