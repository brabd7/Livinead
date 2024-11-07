export class Floor {
    constructor(scene, world)
    {
        // Constructeur
        this.scene = scene;
        this.world = world;

        // Options
        this.width = 10;
        this.heigth = 10;
        this.mass = 0;

        // Création du sol visuel et physique
        this.visualFloor();
        this.physicalFloor();
    }

    // Sol visuel
    visualFloor()
    {
        const geometry = new this.scene.THREE.PlaneGeometry(this.width, this.heigth);
        const material = new this.scene.THREE.MeshBasicMaterial();
        const mesh = new this.scene.THREE.Mesh(geometry, material);

        // Rotation pour que le sol soit horizontal
        mesh.rotation.x = -Math.PI / 2;

        // L'ajouter à la scène
        this.scene.scene.add(mesh);
    }

    // Sol physique
    physicalFloor()
    {
        const body = new this.world.CANNON.Body({mass: this.mass});
        const shape = new this.world.CANNON.Plane();
        body.addShape(shape);

        // Rotation pour que le sol soit horizontal
        body.quaternion.setFromEuler(-Math.PI / 2, 0, 0);

        // L'ajouter au monde physique
        this.world.world.addBody(body);
    }
}