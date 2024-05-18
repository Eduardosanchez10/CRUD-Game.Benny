import { envs } from "../confing/envs";
import { AppRoutes } from "./routes";
import express from "express";
export class Server{
    private app = express();
    start(){
        // middlewares
        this.app.use( express.json() ) // json
        this.app.use( express.urlencoded({ extended: true }) ) // json

        this.app.use(AppRoutes.route)
        
        this.app.listen(envs.PORT,()=>{
            console.log(`server runnins on port  ${envs.PORT})`);
            
        });
    }
}