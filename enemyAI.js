var alpha = 0;
var radius = 50;
var dir = 0.05;
/*
function moveEnemy(enemy){
  //mov = (Math.floor(Math.random()*6)+1)*dir;
  //enemy.position.x+=dir;

  alpha += dir;

  enemy.lookAt(player.position);

  enemy.position.x += 5*dir;
  //enemy.position.x = (player.position.x + Math.cos(alpha) * radius);
  //enemy.position.z = (player.position.z + Math.sin(alpha) * radius);

  if(enemy.position.y < player.position.y || enemy.position.y > player.position.y) enemy.position.y == player.position.y;
}

setInterval(function(){
  dir *= -1;
},(Math.floor(Math.random()*6)+1)*1000);*/

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
        value: startpos+50
    });

    keys.push({
        frame: 200,
        value: startpos
    });
    anim.setKeys(keys);

    return anim;
};

function upNdown(startpos){
  var anim = new BABYLON.Animation("tutoAnimation", "position.z", 60, BABYLON.Animation.ANIMATIONTYPE_FLOAT,
                                                                    BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
    // Animation keys
    var keys = [];
    keys.push({
        frame: 0,
        value: startpos
    });

    keys.push({
        frame: 50,
        value: startpos+40
    });

    keys.push({
        frame: 100,
        value: startpos
    });
    anim.setKeys(keys);

    return anim;
};

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
        frame: 30,
        value: startpos+30
    });

    keys.push({
        frame: 60,
        value: startpos
    });
    anim.setKeys(keys);

    return anim;
};
