export class PlayerMovement {
    constructor(player)
    {
        // Constructeur
        this.player = player;
        this.THREE = player.THREE;
        this.cameraController = player.playerCameraController.cameraController;

        // Paramètres
        this.moveForward = false;
        this.moveBackward = false;
        this.moveRight = false;
        this.moveLeft = false;

        this.currentPlayerDirection = new this.THREE.Vector3();
    }

    update()
    {
        this.getCurrentPlayerDirection();
        this.moveForwardMovement();
    }

    getCurrentPlayerDirection()
    {
        this.cameraController.getDirection(this.currentPlayerDirection);
    }

    moveForwardMovement()
    {
        if (this.moveForward)
        {
            console.log('avancer')
        }
    }
}