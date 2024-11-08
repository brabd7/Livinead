export class PlayerSounds {
    constructor(player)
    {   
        // Constructeur
        this.player = player;

        // Charger les sons du joueur
        this.player.game.audioManager.loadSound('footstep', '../../../../assets/sounds/player/footstep.mp3', false, true, 0.05, 0.85);
    }
}