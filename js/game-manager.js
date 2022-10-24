let gameManager = {
    setGameStart : function (classType) {
        this.resetPlayer(classType);
        this.setPreFight();
    },
    resetPlayer : function  (classType) {
        switch (classType) {
            case 'Linux':
                player = new Player(classType, 250, 350, 300, 120, 110);
                break;
            case 'Bart':
                player = new Player(classType, 200, 175, 150, 420, 400);
                break;
            case 'Bob':
                player = new Player(classType, 275, 450, 200, 220, 210);
                break;
            case 'Mickey':
                player = new Player(classType, 300, 120, 300, 250, 200);
            case 'cj':
                player = new Player(classType, 240, 240, 220, 250, 210);
            case 'Mario':
                player = new Player(classType, 400, 200, 380, 150, 150);
            case 'Trevor':
                player = new Player(classType, 250, 120, 430, 200, 175);
            break;
        }
        console.log(player);

        let getInterface = document.querySelector(".interface");

        let extension = (classType === 'Linux' | classType === 'cj' | classType === 'Mario' | classType === 'Trevor') ? '.jfif' : '.png';
        getInterface.innerHTML = "<img src='images/player/" + classType.toLowerCase() + extension + "' alt=''/><div><h2>" + classType + "</h2><p> Health: " + player.health + "<br> Shield: " + player.shield + " <br> Strength: " + player.strength + "<br> Agility: " + player.agility + "<br> Speed: " + player.speed + "</p></div>"; 
    },
    setPreFight : function () {
        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".actions");
        let getArena = document.querySelector(".arena");


        getHeader.innerHTML= '<p>Tache : Trouver un adversaire</p>';
        getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="gameManager.setFight()">Rechercher un ennemi!</a>';

        getArena.style.visibility = "visible";

    },
    setFight(){
        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".actions");
        let getEnemy = document.querySelector(".enemy");

        //Choose Enemy
        let enemies = [
            new Enemy("sonic", 220, 170, 100, 480, 480),
            new Enemy("snoopy", 375, 250, 250, 200, 200)
        ]
        let randomEnemyNumber = (Math.random() >= 0.5) ? 01 : 00; 
        enemy = enemies[randomEnemyNumber];

        // Personal addition relating to the notions of hoisting and scopes
        i+=1;
        console.log('i = ' + i);
        if (i == 7) {
            document.body.innerHTML = "<h1>You're a loser... Nobody wants to fight you <br> ----------REFRESH THE PAGE</h1>";
        }

        // Continuation of the exercise
        getHeader.innerHTML= '<h1>Tache : Battez-vous</h1>';
        getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="playerMoves.calcAttack()">Attaquer</a>'; //

        console.log(enemy);

        getEnemy.innerHTML = "<img src='images/enemy/" + enemy.enemyType + ".jfif' alt='enemy'/><div><h2>" + enemy.enemyType + "</h2><p> Health: " + enemy.health + "<br> Shield: " + enemy.shield + " <br> Strength: " + enemy.strength + "<br> Agility: " + enemy.agility + "<br> Speed: " + enemy.speed + "</p></div>";

    }
}