import { PaginationDto } from './../../domain/dtos/game/pagination_dto';
import { promises } from "readline";
import { prisma } from "../../data/postgresql/database";
import { MatchEntity } from "../../domain/entities/match.entity";
import { CreateMatchDto } from "../../domain/dtos/match/create-match.dto";
import { UpdateMatchDto } from "../../domain/dtos/match/update-match.dto";



export class MatchService{

    async create( createMacthDto: CreateMatchDto): Promise<MatchEntity>{
        try {
            const newMatch = await prisma.match.create( {
                data: {
                    duration: createMacthDto.duration,
                    init: new Date(createMacthDto.init),
                    gameId: createMacthDto.gameId,
                    userId: createMacthDto.userId,
                }
            } );
            // if( !newPlatform ) throw Error;
    
            return newMatch;
        } catch (error) {
            throw error;
        }
    }
    
    async update( UpdateMatchDto: UpdateMatchDto): Promise<MatchEntity>{

        try {
            const UPmatch = await prisma.match.update({
                where: {
                    id: UpdateMatchDto.id,
                },
                data: {
                    init: new Date(UpdateMatchDto.init),
                    duration: UpdateMatchDto.duration,
                    gameId: UpdateMatchDto.gameId,
                    userId: UpdateMatchDto.userId,
                }
            })
            return UPmatch;
        } catch (error) {
            throw error;
        }
    }
    
    async delete( updateMatchDto: UpdateMatchDto ): Promise<MatchEntity>{
        
        try {
            
            const DeleteMatch= await prisma.match.delete({
              
                where:{
                    id: updateMatchDto.id
                },
            }) 
           
            return DeleteMatch;
       
        } catch (error) {
          
            throw error
        }
    }
    async FindOne( updateMatchDto: UpdateMatchDto ): Promise<MatchEntity>{
       
        try {
            
            const findO = await prisma.match.findUniqueOrThrow({
                
                where: {
                
                    id: updateMatchDto.id,
                    
                },
                
            });
           
            return findO;
        
        } catch (error) {
           
            throw error
        }
    }
    async findAll(PaginationDto : PaginationDto): Promise<MatchEntity[]>{
        try {
            
            const findA = await prisma.match.findMany();
           
            return findA;
        
        } catch (error) {
           
            throw error
        }
    }
    }