function makeParticles(scene){
  // Create a particle system
  var particleSystem = new BABYLON.ParticleSystem("particles", 600000, scene);

  //Texture of each particle
  particleSystem.particleTexture = new BABYLON.Texture("raindrop.png", scene);

  //particle properties
  particleSystem.gravity = new BABYLON.Vector3(0, -200.81, 0);
  particleSystem.minLifeTime = 10.3;

  // Where the particles come from
  particleSystem.emitter = new BABYLON.Vector3(0, 0, 0); // the starting object, the emitter
  particleSystem.minEmitBox = new BABYLON.Vector3(-50, 1000, -50); // Starting all from
  particleSystem.maxEmitBox = new BABYLON.Vector3(50, 500, 50); // To...

  return particleSystem;
}
