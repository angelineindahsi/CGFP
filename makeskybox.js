function makeSkybox(scene, folder){
  var skybox = BABYLON.MeshBuilder.CreateBox("skyBox", {size:10000.0}, scene);

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
