function getPlayer(scene){
//import model
  char = new BABYLON.MeshBuilder.CreateBox("char", {height:4, width:5.5, depth:15}, scene);
  //char.position = new BABYLON.Vector3(0,4,0);
  //char.isVisible = false;

  var charphy = new BABYLON.PhysicsImpostor(char, BABYLON.PhysicsImpostor.BoxImpostor, {mass: 1, restitution:0.0, friction:0.0},scene);
  char.physicsImpostor = charphy;

  BABYLON.SceneLoader.ImportMesh("","player/","arwing.babylon",scene,
    function(newMeshes){
      //avatar= new BABYLON.StandardMaterial("assets/", scene);
      //avatar.diffuseTexture = new BABYLON.Texture("assets/monsterlayer1.bmp", scene);
      //avatar.diffuseTexture.uScale = 1;
      //avatar.diffuseTexture.vScale = 1;

      for(var i=0;i<newMeshes.length;i++){
        newMeshes[i].isVisible = true;
        //newMeshes[i].checkCollisions = true;
        newMeshes[i].scaling = new BABYLON.Vector3(1, 1, 1);
        newMeshes[i].position = new BABYLON.Vector3(4.5,-7,0);
        newMeshes[i].parent = char;
      }
    }
  );

  return char;
}

function getEnemy(scene){
//import model
  enemy = new BABYLON.MeshBuilder.CreateBox("enemy", {height:8, width:5.5, depth:23}, scene);
  //enemy.isVisible = false;

  //enemyphy = new BABYLON.PhysicsImpostor(enemy, BABYLON.PhysicsImpostor.BoxImpostor, {mass: 1, restitution:0.5, friction:0.0},scene);
  //enemy.physicsImpostor = enemyphy;

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
