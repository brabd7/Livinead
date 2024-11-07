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
                    this.playerMovement.moveForward = true;
                    break;
                case "KeyS":
                    this.playerMovement.moveBackward = true;
                    break;
                case "KeyD":
                    this.playerMovement.moveRight = true;
                    break;
                case "KeyQ":
                    this.playerMovement.moveLeft = true;
                    break;
                default:
                    break;
            }
        })

        document.addEventListener('keyup', (event) => {
            switch (event.code)
            {
                case "KeyW":
                    this.playerMovement.moveForward = false;
                    break;
                case "KeyS":
                    this.playerMovement.moveBackward = false;
                    break;
                case "KeyD":
                    this.playerMovement.moveRight = false;
                    break;
                case "KeyQ":
                    this.playerMovement.moveLeft = false;
                    break;
                default:
                    break;
            }
        })
    }
}