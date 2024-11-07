export class Player {
    constructor(game)
    {
        // Constructeur
        this.game = game;
        this.world = this.game.world;
        this.CANNON = this.world.CANNON;

        // Création du corps physique du joueur
        this.createBody();
    }

    createBody()
    {
        this.body = new this.CANNON.Body({
            mass: 1,
            position: new this.CANNON.Vec3(0, 10, 0),
            shape: new this.CANNON.Sphere(1)
        });

        // On l'ajoute au monde physique
        this.world.world.addBody(this.body);
    }
}