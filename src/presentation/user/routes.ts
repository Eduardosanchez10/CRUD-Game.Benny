import { Router } from "express";
import { UserService } from "../services/user.service";
import { UserController } from "./controller";
;

export class UserRoutes{
    static get routes():Router{
        const routes = Router();
        const userService = new UserService();
        const controller = new UserController( userService );
        

        // api/gender
        routes.post('/', controller.create );
        routes.put('/:id', controller.update);
        routes.delete('/:id', controller.delete);
        routes.get('/:id', controller.findOne);
        routes.get('/', controller.findAll);

        return routes;
    }
}