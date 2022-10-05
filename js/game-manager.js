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
        getInterface.innerHTML = "<img src='images/player/'" + classType.toLowerCase + extension + " alt=''/><div><h2>" + classType + "</h2><p> Health: " + player.health + "<br> Shield: " + player.shield + " <br> Strength: " + player.strength + "</p></div>"; // J en suis a la video 24 21:35 minutes.
    },
    setPreFight : function () {
        console.log("Prefight set");
    }
}