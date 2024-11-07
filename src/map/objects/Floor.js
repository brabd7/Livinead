export class Floor {
    constructor(THREE, scene)
    {
        // Constructeur
        this.THREE = THREE;
        this.scene = scene;

        // Options
        this.width = 10;
        this.heigth = 10;

        // Création du sol visuel et physique
        this.visualFloor();
    }

    // Sol visuel
    visualFloor()
    {
        const geometry = new this.THREE.PlaneGeometry(this.width, this.heigth);
        const material = new this.THREE.MeshBasicMaterial();
        const mesh = new this.THREE.Mesh(geometry, material);

        // Rotation pour que le sol soit horizontal
        mesh.rotation.x = -Math.PI / 2;

        // L'ajouter à la scène
        this.scene.add(mesh);
    }
}