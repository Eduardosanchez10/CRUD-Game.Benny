import { Request, Response } from "express";
import { MatchService } from "../services/match.service";
import { CreateMatchDto } from "../../domain/dtos/match/create-match.dto";
import { PaginationDto } from "../../domain/dtos/game/pagination_dto";
import { UpdateMatchDto } from "../../domain/dtos/match/update-match.dto";

export class MatchController{

    constructor(
        private readonly MatchService: MatchService,
    ){}

    create = ( req:Request, res: Response ) => {
        const [ error,createMatchDto ] =CreateMatchDto.create( req.body );
        if( error ) return res.status(400).json({error})
        
        this.MatchService.create(createMatchDto! )
        .then( gender => res.json(gender) )
        .catch(error => res.status(500).json({error}));
    }

    update = ( req:Request, res: Response ) => {
        const [error, updateMatchDto] = UpdateMatchDto.update( {...req.body, id: req.params.id, name:req.params.name,launcher:req.params.launcher,price:req.params.price,gender:req.params.gender,userid:req.params.userId} );
        if( error ) return res.status(400).json({error})
        
            this.MatchService.update( updateMatchDto! )
            .then( gender => res.json(gender) )
            .catch(error => res.status(500).json({error}));

    }

    delete = ( req:Request, res: Response ) => {
        const [ error ,DeleteMatch] = UpdateMatchDto.update( {...req.body, id:req.params.id});
        if( error ) return res.status(400).json({error})

            this.MatchService.delete( DeleteMatch!)
            .then( gender => res.json(gender))
            .catch(error => res.status(500).json({error}));
    }
    
    findOne = ( req:Request, res: Response ) => {
        const [ error ,FindOne] = UpdateMatchDto.update( {...req.body, id:req.params.id});
        if( error ) return res.status(400).json({error})

            this.MatchService.FindOne( FindOne!)
            .then( gender => res.json(gender))
            .catch(error => res.status(500).json({error}));
    }
   // findAll(){}
   findAll = ( req:Request, res: Response ) => {
    const [error , paginationDto] = PaginationDto.create(req.query)
    this.MatchService.findAll(paginationDto!)
    .then( platform => res.json(platform))
    .catch(error => res.status(500).json({error}));
}}