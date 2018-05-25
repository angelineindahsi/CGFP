function makeSkybox(scene, folder){
  var skybox = BABYLON.MeshBuilder.CreateBox("skyBox", {size:1000.0}, scene);

  var skyboxMaterial = new BABYLON.StandardMaterial("skyBox", scene);
  skyboxMaterial.backFaceCulling = false;

  var sky = "Skyset/"+folder+"/skybox";
  skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture(sky, scene);
  skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
  skyboxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
  skyboxMaterial.specularColor = new BABYLON.Color3(0, 0, 0);

  skybox.material = skyboxMaterial;

  return skybox;
}

dir = 1;
function waterFlow(skybox){
  skybox.position.x += (dir*(Math.floor(Math.random()*7)+1));
}

setInterval(function(){
  dir *= -1;
},20000);
