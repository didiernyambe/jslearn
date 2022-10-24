let enemy;

function Enemy(enemyType, health, shield, strength, agility, speed) {
    this.enemyType = enemyType;
    this.health = health;
    this.shield = shield;
    this.strength = strength;
    this.agility = agility;
    this.speed = speed;
}

let playerMoves = {
    calcAttack : function (params) {
        //who attacks first
        let getPlayerSpeed = player.speed;
        let getEnemySpeed = enemy.speed;
    },
    //player attacks
    playerAttack : function(){

    }
}