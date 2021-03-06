//animate side to side
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

//animate moving down
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
        value: startpos+300+points*3
    });

    anim.setKeys(keys);

    return anim;
};

//animate moving up
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
        value: startpos-300-points*3
    });

    anim.setKeys(keys);

    return anim;
};
