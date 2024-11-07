export function animate(game)
{
    // Boucle d'animation
    requestAnimationFrame(() => animate(game));

    // Le monde physique
    game.world.world.step(1 / 60); 

    // Mettre à jour le joueur
    game.player.update();

    // Le rendu
    game.renderer.renderer.render(game.scene.scene, game.camera.camera);
}
