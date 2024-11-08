export class PlayerSounds {
    constructor(player)
    {   
        // Constructeur
        this.player = player;

        // Charger les sons du joueur
        this.player.audioManager.loadSound('footstep', '../../../../assets/sounds/footstep.mp3', false, true, 0.05, 0.85);
    }
}