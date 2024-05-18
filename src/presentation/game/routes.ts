import { Router } from "express";
import { GameService } from "../services/game.service";
import { GameController } from "./controller";

export class GameRoutes{
    static get routes():Router{
        const routes = Router();
        const gameService = new GameService();
        const controller = new GameController( gameService );
        

        // api/gender
        routes.post('/', controller.create );
        routes.put('/:id', controller.update);
        routes.delete('/:id', controller.delete);
        routes.get('/:id', controller.findOne);
        routes.get('/', controller.findAll);

        return routes;
    }
}