export class PlayerControl {
    constructor(player)
    {
        // Constructeur
        this.player = player;
        this.playerMovement = this.player.playerMovement;
        this.playerWeapon = this.player.playerWeapon;

        // Initialiser les contrôles
        this.initControl();
    }

    initControl()
    {
        this.moveControl();
        this.jumpControl();
        this.aimControl();
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

    jumpControl()
    {
        document.addEventListener('keydown', (event) => {
            if (event.code == "Space")
            {
                this.playerMovement.jump = true;
            }
        })
    }

    aimControl()
    {
        document.addEventListener('mousedown', (event) =>{
            if (event.button == 2)
            {
                this.playerWeapon.aim = true;
            }
        })

        document.addEventListener('mouseup', (event) =>{
            if (event.button == 2)
            {
                this.playerWeapon.aim = false;
            }
        })
    }
}