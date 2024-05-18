import { UpdatePlatformDto } from './../../domain/dtos/platform/update-platform.dto';
import { PlatformEntity } from './../../domain/entities/Platform.entitty';
import { promises } from "readline";
import { prisma } from "../../data/postgresql/database";
import { CreatePlatformDto } from "../../domain/dtos/platform/create-platform.dto";
import { PaginationDto } from '../../domain/dtos/game/pagination_dto';


export class PlatformService{

    async create( createplatformDto: CreatePlatformDto): Promise<PlatformEntity>{
        try {
            const newPlatform = await prisma.platform.create( {
                data: {
                    ...createplatformDto,
                }
            } );
            // if( !newPlatform ) throw Error;
    
            return newPlatform;
        } catch (error) {
            throw error;
        }
    }
    
    async update( UpdatePlatformDto: UpdatePlatformDto ): Promise<PlatformEntity>{

        try {
            const platform = await prisma.gender.update({
                where: {
                    id: UpdatePlatformDto.id,
                },
                data: {
                    ...UpdatePlatformDto
                }
            })
            return platform
        } catch (error) {
            throw error;
        }
    }
    
    async delete( updatePlatformDto: UpdatePlatformDto ): Promise<PlatformEntity>{
        
        try {
            
            const DeletePlatform = await prisma.gender.delete({
              
                where:{
               
                    id: updatePlatformDto.id
                },
            }) 
           
            return DeletePlatform
       
        } catch (error) {
          
            throw error
        }
    }
    async FindOne( updatePlatformDto: UpdatePlatformDto ): Promise<PlatformEntity>{
       
        try {
            
            const findO = await prisma.gender.findUniqueOrThrow({
                
                where: {
                
                    id: updatePlatformDto.id,
                    
                },
                
            });
           
            return findO;
        
        } catch (error) {
           
            throw error
        }
    }
    async findAll(PaginationDto : PaginationDto): Promise<PlatformEntity[]>{
        try {
            
            const findA = await prisma.game.findMany();
           
            return findA;
        
        } catch (error) {
           
            throw error
        }
    }
  
}