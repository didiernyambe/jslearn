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
            break;
        }
        console.log(player);

        let getInterface = document.querySelector(".interface");
        let extension = (classType === 'Linux') ? '.jfif' : '.png';
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
        //Create Enemy
        let enemy00 = new Enemy("sonic", 220, 170, 100, 480, 480);
        let enemy01 = new Enemy("snoopy", 375, 250, 250, 200, 200);
    }
}