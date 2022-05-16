const PlayerController = require("../controllers/player.controller");

module.exports = app => {
    app.get("/api/players/", PlayerController.findAllPlayers);
    app.post("/api/players/new", PlayerController.createNewPlayer);
    app.get("/api/players/:id", PlayerController.findOneSinglePlayer);
    app.put("/api/players/update/:id", PlayerController.updateExistingPlayer);
    app.delete("/api/players/delete/:id", PlayerController.deleteAnExistingPlayer);
};