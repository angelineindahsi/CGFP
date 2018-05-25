function getCam(scene){
  //make rotational cam param: alpha, beta, radius, target pos, Scene
  camera = new BABYLON.ArcRotateCamera("Camera",1.6,0,100, BABYLON.Vector3.Zero(), scene);

  // The goal rotation of camera around local origin (centre) of target in x y plane
	camera.rotationOffset = 0;

	//Acceleration of camera in moving from current to goal position
	camera.cameraAcceleration = 0.005;

	//The speed at which acceleration is halted
	camera.maxCameraSpeed = 5;

  //var camY = 2*Math.PI*50/4;
  //position cam overwrite alpha, beta, radius
  //camera.setPosition(new BABYLON.Vector3(0,camY,50));
  //attach cam to canvas
  camera.attachControl(canvas,true);

  return camera;
}
