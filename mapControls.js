var hold={};
var z=0;
var x=0;
var up = 87;
var down = 83;
var left = 65;
var right = 68;
var spd = 50;

window.onkeydown = function(event){
  //alert(event.keyCode);
  hold[event.keyCode] = event.type == 'keydown';
  if (hold[left]) {
    player.physicsImpostor.setLinearVelocity(new BABYLON.Vector3(spd, 0, z));
    x = spd;
  }
  if (hold[up]) {
    player.physicsImpostor.setLinearVelocity(new BABYLON.Vector3(x, 0, -spd));
    z = -spd;
  }
  if (hold[right]) {
    player.physicsImpostor.setLinearVelocity(new BABYLON.Vector3(-spd, 0, z));
    x = -spd;
  }
  if (hold[down]) {
    player.physicsImpostor.setLinearVelocity(new BABYLON.Vector3(x, 0, spd));
    z = spd;
  }
}

window.onkeyup = function(event){
  hold[event.keyCode] = event.type == 'keyup';

  if (event.keyCode==left || event.keyCode==right) {
    hold[left] = false;
    hold[right] = false;
    x = 0;
    player.physicsImpostor.setLinearVelocity(new BABYLON.Vector3(0, 0, z));
  }
  if (event.keyCode==up || event.keyCode==down) {
    hold[up] = false;
    hold[down] = false;
    z = 0;
    player.physicsImpostor.setLinearVelocity(new BABYLON.Vector3(x, 0, 0));
  }
}
/*
window.addEventListener("mousemove", function () {
  var pickResult = scene.pick(scene.pointerX, scene.pointerY);
    if (pickResult.hit) {
      //player.lookAt(new BABYLON.Vector3(pickResult.pickedPoint.x,0,pickResult.pickedPoint.y))
      player.lookAt(pickResult.pickedPoint);

    }
});*/

function shoot(){
  var bullet = BABYLON.Mesh.CreateSphere('bullet', 10, 1, scene);
  var startPos = player.position;

  //make bullets
  bullet.position = new BABYLON.Vector3(startPos.x, startPos.y, startPos.z);
  bullet.material =  new BABYLON.StandardMaterial('texture1', scene);
  bullet.material.diffuseColor = new BABYLON.Color3(0, 1, 1);

  var invView = new BABYLON.Matrix();
  freecam.getViewMatrix().invertToRef(invView);
  //console.log(invView);
  var direction = BABYLON.Vector3.TransformNormal(new BABYLON.Vector3(0, 0, 50), invView);

  // var xdir = pickResult.pickedPoint.x - startPos.x;
  // var ydir = pickResult.pickedPoint.y - startPos.y;
  // var zdir = pickResult.pickedPoint.z - startPos.z;
  //var direction = BABYLON.Vector3.TransformNormal(new BABYLON.Vector3(-xdir, -ydir, startPos.z), invView);

  //var direction = player.LookAtPosition();

  direction.normalize();

  scene.registerBeforeRender(function () {
      bullet.position.addInPlace(direction);
  });

  //bullet timeout
  setTimeout(function(){
    bullet.dispose();
  },5000);
}

window.addEventListener("click", function (e) {
  shoot();

  var pickInfo = scene.pick(scene.pointerX, scene.pointerY);
  target = pickInfo.pickedMesh;

  if (pickInfo.hit && target.id == "enemy") {
    target.dispose();
  }
});


function holdPlayer(){
  var pickResult = scene.pick(scene.pointerX, scene.pointerY);
    if (pickResult.hit) {
      //player.lookAt(new BABYLON.Vector3(pickResult.pickedPoint.x,0,pickResult.pickedPoint.y))
      player.lookAt(pickResult.pickedPoint);
    }

  if(player.position.y > 3 || player.position.y > 3) player.position.y = 3;
  if(player.position.x >= 161) player.position.x = 161;
  if(player.position.z >= 71) player.position.z = 71;
  if(player.position.x <= -161) player.position.x = -161;
  if(player.position.z <= -71) player.position.z = -71;
}
