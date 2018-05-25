function moveEnemy(enemy){
  enemy.lookAt(player.position);
  //mov = Math.floor(Math.random()*6)-3;
  //enemy.position.x+=1;

  if(enemy.position.y < player.position.y || enemy.position.y > player.position.y) enemy.position.y == player.position.y;
}
