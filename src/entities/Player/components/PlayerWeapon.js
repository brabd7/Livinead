import { Glock } from '../../../weapons/glock/Glock';

export class PlayerWeapon {
    constructor(player)
    {
        // Constructeur
        this.player = player; 

        // Paramètres
        this.aim = false;

        // Pour l'instant, vu qu'il n'y a qu'une arme, on l'initialise ici
        this.currentWeapon = new Glock(this);
    }

    update()
    {
        this.currentWeapon.update();
    }
}