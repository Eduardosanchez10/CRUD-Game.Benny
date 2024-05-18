
import { Request, Response } from "express";
import { UserService } from "../services/user.service";
import { CreateUserDto } from "../../domain/dtos/user/create-user.dto";
import { UpdateUserDto } from "../../domain/dtos/user/update-user.dto";
import { PaginationDto } from '../../domain/dtos/game/pagination_dto';


export class UserController{

    constructor(
        private readonly userService: UserService,
    ){}

    create = ( req:Request, res: Response ) => {
        const [ error, createUserDto ] = CreateUserDto.create( req.body );
        if( error ) return res.status(400).json({error})
        
        this.userService.create( createUserDto! )
        .then( User => res.json(User) )
        .catch(error => res.status(500).json({error}));
    }

    update = ( req:Request, res: Response ) => {
        const [error, updateUserDto] = UpdateUserDto.update( {...req.body, id: req.params.id , name: req.params.name, email: req.params.email , password : req.params.password} );
        if( error ) return res.status(400).json({error})
        
            this.userService.update( updateUserDto! )
            .then( User => res.json(User) )
            .catch(error => res.status(500).json({error}));

    }

    delete = ( req:Request, res: Response ) => {
        const [ error ,DeleteUser] = UpdateUserDto.update( {...req.body, id:req.params.id});
        if( error ) return res.status(400).json({error})

            this.userService.delete( DeleteUser!)
            .then( User => res.json(User))
            .catch(error => res.status(500).json({error}));
    }
    
    findOne = ( req:Request, res: Response ) => {
        const [ error ,FindOneU] = UpdateUserDto.update( {...req.body, id:req.params.id});
        if( error ) return res.status(400).json({error})

            this.userService.FindOne( FindOneU! )
            .then( User => res.json(User) )
            .catch(error => res.status(500).json({error}));
    }
    
    findAll = ( req:Request, res: Response ) => {
        const [error , paginationDto] = PaginationDto.create(req.query)
        this.userService.findAll(paginationDto!)
        .then( User => res.json(User))
        .catch(error => res.status(500).json({error}));
    }
}