import { MatchRoutes } from './match/routes';
import { GameRoutes } from './game/routes';
import { UserRoutes } from './user/routes';
import { PlatformRoutes } from './platform/routes';
import { Router } from "express";
import { GenderRoutes } from "./gender/routes";

export class AppRoutes{
static get route():Router{
 const routes = Router();
    routes.use('/api/gender', GenderRoutes.routes);
    routes.use('/api/platform', PlatformRoutes.routes);
    routes.use('/api/user', UserRoutes.routes);
    routes.use('/api/game', GameRoutes.routes);
    routes.use('/api/match', MatchRoutes.routes);

    return routes;
}
}