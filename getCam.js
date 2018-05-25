function getCam(scene){
  //make rotational cam param: alpha, beta, radius, target pos, Scene
  camera = new BABYLON.ArcRotateCamera("Camera",1.6,0,200, BABYLON.Vector3.Zero(), scene);
  //camera.lowerBetaLimit = 0.8;
  //camera.upperBetaLimit = (Math.PI / 2) * 0.9;
  //camera.upperBetaLimit = 0.8;
  //camera.lowerRadiusLimit = 70;
  //camera.upperRadiusLimit = 100;

  //var camY = 2*Math.PI*50/4;
  //position cam overwrite alpha, beta, radius
  //camera.setPosition(new BABYLON.Vector3(0,camY,50));
  //attach cam to canvas
  camera.attachControl(canvas,true);

  return camera;
}
