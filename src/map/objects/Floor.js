export class Floor {
    constructor(scene, world)
    {
        // Constructeur
        this.scene = scene;
        this.world = world;

        // Options
        this.width = 10;
        this.heigth = 10;

        // Création du sol visuel et physique
        this.visualFloor();
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
}