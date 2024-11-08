export class GlockSounds {
    constructor(glock)
    {
        // Constructeur
        this.glock = glock;
        this.audioManager = this.glock.playerWeapon.player.game.audioManager;
        
        // Charger les sons du glock
        this.audioManager.loadSound('aim', '../../../../assets/sounds/weapons/glock/aim.mp3', 0.5)
    }
}