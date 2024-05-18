import { PaginationDto } from './../../domain/dtos/game/pagination_dto';
import { Request, Response } from "express";
import { GameService } from "../services/game.service";
import { CreateGameDto } from "../../domain/dtos/game/create-game.dto";
import { UpdateGameDto } from "../../domain/dtos/game/update-game.dto";
import { log } from "console";

export class GameController{

    constructor(
        private readonly gameService: GameService,
    ){}

    create = ( req:Request, res: Response ) => {
        const [ error, createGameDto ] = CreateGameDto.create( req.body );
        if( error ) return res.status(400).json({error})
        
        this.gameService.create( createGameDto! )
        .then( game => res.json(game) )
        .catch(error => res.status(500).json({error}));
    }

    update = ( req:Request, res: Response ) => {
        const [error, updateGameDto] = UpdateGameDto.update( {...req.body, id: req.params.id, } );
        if( error ) return res.status(400).json({error})
        
            this.gameService.update( updateGameDto! )
            .then( game => res.json(game) )
            .catch(error => res.status(500).json({error}));

    }

    delete = ( req:Request, res: Response ) => {
        const [ error ,DeleteGame] = UpdateGameDto.update( {...req.body, id:req.params.id});
        if( error ) return res.status(400).json({error})

            this.gameService.delete( DeleteGame!)
            .then( game => res.json(game))
            .catch(error => res.status(500).json({error}));
    }
    
    findOne = ( req:Request, res: Response ) => {
        const [ error ,FindOne] = UpdateGameDto.update( {...req.body, id:req.params.id});
        if( error ) return res.status(400).json({error})

            this.gameService.FindOne( FindOne!)
            .then( game => res.json(game))
            .catch(error => res.status(500).json({error}));
    }
   // findAll(){}
    findAll = ( req:Request, res: Response ) => {
            const [error , paginationDto] = PaginationDto.create(req.query)
            this.gameService.findAll(paginationDto!)
            .then( game => res.json(game))
            .catch(error => res.status(500).json({error}));
    }
}