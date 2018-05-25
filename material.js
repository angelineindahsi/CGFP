function createMat(scene,pic){
  //var mat = new BABYLON.StandardMaterial("material",scene);
  var mat = new BABYLON.StandardMaterial("materialTex",scene);

  //mat.diffuseColor = new BABYLON.Color3(1,0,0); //basic color/texture
  mat.specularColor = new BABYLON.Color3(1,1,0);//highlight

  mat.diffuseTexture = new BABYLON.Texture(pic+".jpg", scene);
  //shiny material
  //mat.specularTexture = new BABYLON.Texture("owo.jpg", scene);

  mat.specularPower = 20;

  //mat.ambientColor = new BABYLON.Color3(0.23,0.98,0.53);
  mat.ambientColor = new BABYLON.Color3(1,0,0);


  //transparency
  mat.alpha = 1;
  return mat;
};
