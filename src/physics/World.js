export class World {
    constructor(CANNON)
    {
        // Constructeur
        this.CANNON = CANNON;

        // Créer un monde physique
        this.world = new this.CANNON.World();
        this.world.gravity.set(0, -10, 0);
    }
}