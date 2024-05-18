import { Router } from "express";
import { PlatformService } from "../services/platform.service";
import { PlarformController } from "./controller";

export class PlatformRoutes{
    static get routes():Router{
        const routes = Router();
        const platformService = new PlatformService();
        const controller = new PlarformController( platformService );
        

        // api/gender
        routes.post('/', controller.create );
        routes.put('/:id', controller.update);
        routes.delete('/:id', controller.delete);
        routes.get('/:id', controller.findOne);
        routes.get('/', controller.findAll);

        return routes;
    }
}