export function animate(scene, camera, renderer)
{
    // Boucle d'animation
    requestAnimationFrame(() => animate(scene, camera, renderer));
    
    // Rendu
    renderer.render(scene, camera);
}
