function getPlayer(scene){
//make hitbox
  char = new BABYLON.MeshBuilder.CreateBox("char", {height:4, width:5.5, depth:15}, scene);
  //char.position = new BABYLON.Vector3(0,4,0);
  char.isVisible = false;

  //give physics
  var charphy = new BABYLON.PhysicsImpostor(char, BABYLON.PhysicsImpostor.BoxImpostor, {mass: 1, restitution:0.0, friction:0.0},scene);
  char.physicsImpostor = charphy;

  //import model
  BABYLON.SceneLoader.ImportMesh("","player/","arwing.babylon",scene,
    function(newMeshes){
      for(var i=0;i<newMeshes.length;i++){
        newMeshes[i].isVisible = true;
        newMeshes[i].checkCollisions = true;
        newMeshes[i].scaling = new BABYLON.Vector3(1, 1, 1);
        newMeshes[i].position = new BABYLON.Vector3(4.5,-7,0);
        newMeshes[i].parent = char;
      }
    }
  );

  return char;
}

function getEnemy(scene){
//make hitbox
  enemy = new BABYLON.MeshBuilder.CreateBox("enemy", {height:8, width:5.5, depth:23}, scene);
  enemy.isVisible = false;

  //import model
  BABYLON.SceneLoader.ImportMesh("","enemy/","iblis.babylon",scene,
    function(newMeshes){
      for(var i=0;i<newMeshes.length;i++){
        newMeshes[i].isVisible = true;
        newMeshes[i].checkCollisions = true;
        newMeshes[i].id = "enemy";
        //newMeshes[i].scaling = new BABYLON.Vector3(1, 1, 1);
        newMeshes[i].parent = newMeshes[i-1];
        newMeshes[i].position = new BABYLON.Vector3(0,0,-8);
        newMeshes[i].parent = enemy;
      }
    }
  );

  //enemy.position = new BABYLON.Vector3(20,3,20)
  return enemy;
}
