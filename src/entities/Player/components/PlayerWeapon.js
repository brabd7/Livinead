import { Glock } from '../../../weapons/glock/Glock';

export class PlayerWeapon {
    constructor(player)
    {
        // Constructeur
        this.player = player; 

        // Pour l'instant, vu qu'il n'y a qu'une arme, on l'initialise ici
        this.glock = new Glock(this.player);
    }
}