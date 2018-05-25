var alpha = 0;
var radius = 35;

function moveEnemy(){
  enemy.lookAt(player.position);

  if(enemy.position.y < player.position.y || enemy.position.y > player.position.y) enemy.position.y == player.position.y;
}
