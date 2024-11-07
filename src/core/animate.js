export function animate(scene, camera, renderer, world)
{
    // Boucle d'animation
    requestAnimationFrame(() => animate(scene, camera, renderer, world));

    // Mettre à jour le monde physique
    world.step(1 / 60); 

    // Rendu
    renderer.render(scene, camera);
}
