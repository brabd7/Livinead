export class AudioManager {
    constructor(game)
    {
        // Constructeur
        this.THREE = game.scene.THREE;
        this.scene = game.scene.scene;
        this.camera = game.camera.camera;

        // Initialisateur des classes audios
        this.listener = new this.THREE.AudioListener();
        this.audioLoader = new this.THREE.AudioLoader();

        // Ajouter l'oreille à notre caméra pour écouter les sons
        this.camera.add(this.listener);

        // Paramètres
        this.sounds = {};
    }

    loadSound(name, path, isPositional = false, loop = false, volume = 0.5, rate)
    {
        let sound; 

        if (isPositional)
        {
            // Création d'un son spatial
            sound = new this.THREE.PositionalAudio(this.listener);
        }
        else 
        {
            // Création d'un son standard
            sound = new this.THREE.Audio(this.listener);
        }

        // Charger le fichier
        this.audioLoader.load(path, (buffer) => {

            // Options fournies
            sound.setBuffer(buffer);
            sound.setLoop(loop);
            sound.setVolume(volume);
            sound.setPlaybackRate(rate);

            if (isPositional) {
                sound.setRefDistance(1);      // Distance de référence par défaut
                sound.setMaxDistance(1000);   // Distance max d'écoute par défaut
                sound.setRolloffFactor(1);        // Facteur de décroissance par défaut
            }

            this.sounds[name] = sound;
        })
    }

    playSound(name)
    {
        const sound = this.sounds[name];
        
        if (sound && !sound.isPlaying)
        {
            sound.play();
        }
    }

    stopSound(name)
    {
        const sound = this.sounds[name];

        if (sound && sound.isPlaying)
        {
            sound.stop();
        }
    }
}