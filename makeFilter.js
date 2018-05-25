function rainfilter(scene){
  var filter = new BABYLON.RefractionPostProcess("Refraction", "rainfilter.jpg", new BABYLON.Color3(1.0, 1.0, 1.0), 0.5, 0.5, 1.0, camera);
  return filter;
}

function crackfilter(scene){
  var filter = new BABYLON.RefractionPostProcess("Refraction", "awa.jpg", new BABYLON.Color3(1.0, 1.0, 1.0), 0.2, 0.7, 0.5, camera);
  return filter;
}
