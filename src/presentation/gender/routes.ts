import { Router } from "express";
import { GenderController } from "./controller";
import { GenderService } from "../services/gender.service";

export class GenderRoutes{
    static get routes():Router{
        const routes = Router();
        const genderService = new GenderService();
        const controller = new GenderController( genderService );
        

        // api/gender
        routes.post('/', controller.create );
        routes.put('/:id', controller.update);
        routes.delete('/:id', controller.delete);
        routes.get('/:id', controller.findOne);
        routes.get('/', controller.findAll);

        return routes;
    }
}