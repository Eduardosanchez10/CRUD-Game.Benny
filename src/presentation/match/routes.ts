import { MatchController } from './controller';
import { Router } from "express";
import { MatchService } from "../services/match.service";


export class MatchRoutes{
    static get routes():Router{
        const routes = Router();
        const matchService = new MatchService();
        const controller = new MatchController( matchService );
        

        // api/gender
        routes.post('/', controller.create );
        routes.put('/:id', controller.update);
        routes.delete('/:id', controller.delete);
        routes.get('/:id', controller.findOne);
        routes.get('/', controller.findAll);

        return routes;
    }
}