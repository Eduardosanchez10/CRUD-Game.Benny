
import { PaginationDto } from './../../domain/dtos/game/pagination_dto';
import { promises } from "readline";
import { prisma } from "../../data/postgresql/database";
import { CreateGameDto } from "../../domain/dtos/game/create-game.dto";
import { GameEntity } from "../../domain/entities/game.entity";
import { UpdateGameDto } from "../../domain/dtos/game/update-game.dto";



export class GameService{

    async create( createGameDto: CreateGameDto): Promise<GameEntity>{
        try {
            const newGame = await prisma.game.create( {
                data: {
                    name: createGameDto.name,
                    launcher: new Date(createGameDto.launcher),
                    price: createGameDto.price,
                    genderId: createGameDto.genderId,
                    userId: createGameDto.userId,
                }
                
            } );
            // if( !newPlatform ) throw Error;
    
            return newGame; 
        } catch ( error ) {
            throw error ;
        }
    }
    
    async update( updateGameDto: UpdateGameDto): Promise<GameEntity>{

        try {
            const UPgame = await prisma.game.update({
                where: {
                    id: updateGameDto.id,
                    
                },
                data: {
                    ...updateGameDto,
                    launcher: new Date(updateGameDto.launcher),
                }
            })
            return UPgame;
        } catch (error) {
            throw error;
        }
    }
    
    async delete( updateGameDto: UpdateGameDto ): Promise<GameEntity>{
        
        try {
            
            const DeleteGame= await prisma.game.delete({
              
                where:{
               
                    id: updateGameDto.id
                },
            }) 
           
            return DeleteGame
       
        } catch (error) {
          
            throw error
        }
    }
    async FindOne( updateGameDto: UpdateGameDto ): Promise<GameEntity>{
       
        try {
            
            const findO = await prisma.game.findUniqueOrThrow({
                
                where: {
                
                    id: updateGameDto.id,
                    
                },
                
            });
           
            return findO;
        
        } catch (error) {
           
            throw error
        }
    }
    async findAll(PaginationDto : PaginationDto): Promise<GameEntity[]>{
        try {
            
            const findA = await prisma.game.findMany();
           
            return findA;
        
        } catch (error) {
           
            throw error
        }
    }
    }