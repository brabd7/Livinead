export class PlayerMovement {
    constructor(player)
    {
        // Constructeur
        this.player = player;
        this.THREE = player.THREE;
        this.cameraController = player.playerCameraController.cameraController;
        this.playerBody = this.player.playerPhysics.body;

        // Paramètres
        this.moveSpeed = 15;
        this.jumpForce = 4.5;

        this.moveForward = false;
        this.moveBackward = false;
        this.moveRight = false;
        this.moveLeft = false;
        this.jump = false;

        this.currentPlayerDirection = new this.THREE.Vector3();
        this.rightOfCurrentPlayerDirection = new this.THREE.Vector3();
    }

    update()
    {
        this.getCurrentPlayerDirection();
        this.getRightOfCurrentPlayerDirection();
        this.forwardMovement();
        this.rightMovement();
        this.jumpMovement();
    }

    getCurrentPlayerDirection()
    {
        this.cameraController.getDirection(this.currentPlayerDirection);
    }

    getRightOfCurrentPlayerDirection()
    {
        this.rightOfCurrentPlayerDirection.crossVectors(this.currentPlayerDirection, new this.THREE.Vector3(0, 1, 0)).normalize();
    }

    forwardMovement()
    {
        if (this.moveForward)
        {
            this.playerBody.velocity.x = this.currentPlayerDirection.x * this.moveSpeed;
            this.playerBody.velocity.z = this.currentPlayerDirection.z * this.moveSpeed;
        }
        else if (this.moveBackward)
        {
            this.playerBody.velocity.x = -this.currentPlayerDirection.x * this.moveSpeed;
            this.playerBody.velocity.z = -this.currentPlayerDirection.z * this.moveSpeed;
        }
        else 
        {
            this.playerBody.velocity.x = 0;
            this.playerBody.velocity.z = 0;
        }
    }

    rightMovement()
    {
        if (this.moveRight)
        {
            this.playerBody.velocity.x += this.rightOfCurrentPlayerDirection.x * this.moveSpeed;
            this.playerBody.velocity.z += this.rightOfCurrentPlayerDirection.z * this.moveSpeed;
        }
        else if (this.moveLeft)
        {
            this.playerBody.velocity.x -= this.rightOfCurrentPlayerDirection.x * this.moveSpeed;
            this.playerBody.velocity.z -= this.rightOfCurrentPlayerDirection.z * this.moveSpeed;
        }
    }

    jumpMovement()
    {
        if (this.jump && this.playerBody.position.y <= 1)
        {
            this.playerBody.velocity.y += this.jumpForce;
            this.jump = false;
        }
    }
}