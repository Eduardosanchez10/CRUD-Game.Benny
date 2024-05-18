import { Request, Response } from "express";
import { GenderService } from "../services/gender.service"
import { CreateGenderDto } from "../../domain/dtos/gender/create-gender.dto";
import { UpdateGenderDto } from "../../domain/dtos/gender/update-gender.dto";
export class GenderController{

    constructor(
        private readonly genderService: GenderService,
    ){}

    create = ( req:Request, res: Response ) => {
        const [ error, createGenderDto ] = CreateGenderDto.create( req.body );
        if( error ) return res.status(400).json({error})
        
        this.genderService.create( createGenderDto! )
        .then( gender => res.json(gender) )
        .catch(error => res.status(500).json({error}));
    }

    update = ( req:Request, res: Response ) => {
        const [error, updateGenderDto] = UpdateGenderDto.update( {...req.body, id: req.params.id} );
        if( error ) return res.status(400).json({error})
        
            this.genderService.update( updateGenderDto! )
            .then( gender => res.json(gender) )
            .catch(error => res.status(500).json({error}));

    }

    delete = ( req:Request, res: Response ) => {
        const [ error ,DeleteGender] = UpdateGenderDto.update( {...req.body, id:req.params.id});
        if( error ) return res.status(400).json({error})

            this.genderService.delete( DeleteGender!)
            .then( gender => res.json(gender))
            .catch(error => res.status(500).json({error}));
    }
    
    findOne = ( req:Request, res: Response ) => {
        const [ error ,FindOne] = UpdateGenderDto.update( {...req.body, id:req.params.id});
        if( error ) return res.status(400).json({error})

            this.genderService.FindOne( FindOne!)
            .then( gender => res.json(gender))
            .catch(error => res.status(500).json({error}));
    }
   // findAll(){}
    findAll = ( req:Request, res: Response ) => {
        const [ error ,FindAll] = UpdateGenderDto.update( { ...req.body });
        if( error ) return res.status(400).json({error})

            this.genderService.findAll
         ;
    }
}