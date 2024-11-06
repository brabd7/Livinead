export function resize(camera, renderer)
{
    window.addEventListener('resize', () => {
        // Adapter la taille du renderer à la nouvelle taille de la fenêtre
        renderer.setSize(window.innerWidth, window.innerHeight);
        
        // Mettre à jour l'aspect ratio de la caméra
        camera.aspect = window.innerWidth / window.innerHeight;

        // Nécessaire pour recalculer la projection
        camera.updateProjectionMatrix(); 
    })
}