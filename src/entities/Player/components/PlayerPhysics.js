export class PlayerPhysics {
    constructor(player)
    {
        // Constructeur
        this.player = player;
        this.world = this.player.game.world;
        this.CANNON = this.player.game.world.CANNON;

        // Créer le corps physique du joueur
        this.createPhysicalBody();
    }

    createPhysicalBody()
    {
        this.body = new this.CANNON.Body({
            mass: 1,
            position: new this.CANNON.Vec3(0, 5, 0),
            shape: new this.CANNON.Sphere(1)
        });

        // On l'ajoute au monde physique
        this.world.world.addBody(this.body);
    }
}