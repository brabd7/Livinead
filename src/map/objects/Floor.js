export class Floor {
    constructor(game)
    {
        // Constructeur
        this.game = game;
        this.scene = this.game.scene;
        this.world = this.game.world;
        this.THREE = this.scene.THREE;
        this.CANNON = this.world.CANNON;

        // Options
        this.width = 10;
        this.heigth = 10;
        this.mass = 0;

        // Création du sol visuel et physique
        this.createVisualFloor();
        this.createPhysicalBody();
    }

    // Sol visuel
    createVisualFloor()
    {
        const geometry = new this.THREE.PlaneGeometry(this.width, this.heigth);
        const material = new this.THREE.MeshBasicMaterial();
        const mesh = new this.THREE.Mesh(geometry, material);

        // Rotation pour que le sol soit horizontal
        mesh.rotation.x = -Math.PI / 2;

        // L'ajouter à la scène
        this.scene.scene.add(mesh);
    }

    // Sol physique
    createPhysicalBody()
    {
        const body = new this.CANNON.Body({
            mass: this.mass,
            shape: new this.CANNON.Plane()
        });

        // Rotation pour que le sol soit horizontal
        body.quaternion.setFromEuler(-Math.PI / 2, 0, 0);

        // L'ajouter au monde physique
        this.world.world.addBody(body);
    }
}