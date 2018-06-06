function makeSkybox(scene, folder){
  var skybox = BABYLON.MeshBuilder.CreateBox("skyBox", {size:1000.0}, scene);

  var skyboxMaterial = new BABYLON.StandardMaterial("skyBox", scene);
  skyboxMaterial.backFaceCulling = false;//set texture in box interior

  //texturing skybox
  var sky = "Skyset/"+folder+"/skybox";
  skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture(sky, scene);
  skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
  skyboxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
  skyboxMaterial.specularColor = new BABYLON.Color3(0, 0, 0);

  skybox.material = skyboxMaterial;

  return skybox;
}

//give skybox sense of movement
skydir = 1;
function waterFlow(skybox){
  skybox.position.x += (skydir*Math.random()*0.5);
}

setInterval(function(){
  skydir *= -1;
},5000);
