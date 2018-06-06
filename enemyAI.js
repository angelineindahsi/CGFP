//hold enemy positions within view
function holdEnemy(enemy){

  enemy.lookAt(player.position);

  if(enemy.position.y < player.position.y || enemy.position.y > player.position.y) enemy.position.y == player.position.y;
  if(enemy.position.z < -155) enemy.position.z+=1;
  if(enemy.position.z > 155) enemy.position.z-=1;
}

function side2side(startpos){
  var anim = new BABYLON.Animation("tutoAnimation", "position.x", 60, BABYLON.Animation.ANIMATIONTYPE_FLOAT,
                                                                    BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
    // Animation keys
    var keys = [];
    keys.push({
        frame: 0,
        value: startpos
    });

    keys.push({
        frame: 100,
        value: startpos+100
    });

    keys.push({
        frame: 200,
        value: startpos
    });
    anim.setKeys(keys);

    return anim;
};

function slideup(startpos){
  var anim = new BABYLON.Animation("tutoAnimation", "position.z", 60, BABYLON.Animation.ANIMATIONTYPE_FLOAT,
                                                                    BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
    // Animation keys
    var keys = [];
    keys.push({
        frame: 0,
        value: startpos
    });

    keys.push({
        frame: 250,
        value: startpos+1000
    });

    anim.setKeys(keys);

    return anim;
};

function slidedown(startpos){
  var anim = new BABYLON.Animation("tutoAnimation", "position.z", 60, BABYLON.Animation.ANIMATIONTYPE_FLOAT,
                                                                    BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
    // Animation keys
    var keys = [];
    keys.push({
        frame: 0,
        value: startpos
    });

    keys.push({
        frame: 250,
        value: startpos-1000
    });

    anim.setKeys(keys);

    return anim;
};
