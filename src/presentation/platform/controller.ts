import { PaginationDto } from './../../domain/dtos/game/pagination_dto';
import { Request, Response } from "express";
import { PlatformService } from "../services/platform.service";
import { CreatePlatformDto } from "../../domain/dtos/platform/create-platform.dto";
import { UpdatePlatformDto } from "../../domain/dtos/platform/update-platform.dto";
import { platform } from "os";

export class PlarformController{

    constructor(
        private readonly platformService: PlatformService,
    ){}

    create = ( req:Request, res: Response ) => {
        const [ error, createPlatformDto ] = CreatePlatformDto.create( req.body );
        if( error ) return res.status(400).json({error})
        
        this.platformService.create( createPlatformDto! )
        .then( platform => res.json(platform) )
        .catch(error => res.status(500).json({error}));
    }

    update = ( req:Request, res: Response ) => {
        const [error, updatePlatformDto] = UpdatePlatformDto.update( {...req.body, id: req.params.id} );
        if( error ) return res.status(400).json({error})
        
            this.platformService.update( updatePlatformDto! )
            .then( platform => res.json(platform) )
            .catch(error => res.status(500).json({error}));

    }

    delete = ( req:Request, res: Response ) => {
        const [ error ,DeletePlatform] = UpdatePlatformDto.update( {...req.body, id:req.params.id});
        if( error ) return res.status(400).json({error})

            this.platformService.delete( DeletePlatform!)
            .then( platform => res.json(platform))
            .catch(error => res.status(500).json({error}));
    }
    
    findOne = ( req:Request, res: Response ) => {
        const [ error ,FindOneP] = UpdatePlatformDto.update( {...req.body, id:req.params.id});
        if( error ) return res.status(400).json({error})

            this.platformService.update( FindOneP! )
            .then( platform => res.json(platform) )
            .catch(error => res.status(500).json({error}));
    }
   // findAll(){}
   findAll = ( req:Request, res: Response ) => {
    const [error , paginationDto] = PaginationDto.create(req.query)
    this.platformService.findAll(paginationDto!)
    .then( platform => res.json(platform))
    .catch(error => res.status(500).json({error}));
}
}