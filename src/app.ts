import { Server } from "./presentation/server";

(() =>{
    main();
})();

function main(){
    // Levantar base de datos

    // Levantar el servidor
    new Server().start();
}