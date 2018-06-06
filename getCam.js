//make camera
function getCam(scene){
  //make rotational cam param: alpha, beta, radius, target pos, Scene
  camera = new BABYLON.ArcRotateCamera("Camera",1.6,0,200, BABYLON.Vector3.Zero(), scene);

  //limit camera angle
  //camera.lowerBetaLimit = 0.8;
  //camera.upperBetaLimit = (Math.PI / 2) * 0.9;
  //camera.upperBetaLimit = 0.8;
  //camera.lowerRadiusLimit = 70;
  //camera.upperRadiusLimit = 100;

  //attach cam controls
  //camera.attachControl(canvas,true);

  return camera;
}
