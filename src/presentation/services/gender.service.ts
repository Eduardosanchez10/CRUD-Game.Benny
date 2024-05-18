import { promises } from "readline";
import { prisma } from "../../data/postgresql/database";
import { CreateGenderDto } from "../../domain/dtos/gender/create-gender.dto";
import { UpdateGenderDto } from "../../domain/dtos/gender/update-gender.dto";
import { GenderEntity } from "../../domain/entities/gender.entity";
import { PaginationDto } from "../../domain/dtos/game/pagination_dto";

export class GenderService{

    async create( createGenderDto: CreateGenderDto ): Promise<GenderEntity>{
        try {
            const newGender = await prisma.gender.create( {
                data: {
                    ...createGenderDto,
                }
            } );
            // if( !newGender ) throw Error;
    
            return newGender;
        } catch (error) {
            throw error;
        }
    }
    
    async update( updateGenderDto: UpdateGenderDto ): Promise<GenderEntity>{

        try {
            const gender = await prisma.gender.update({
                where: {
                    id: updateGenderDto.id,
                },
                data: {
                    ...updateGenderDto
                }
            })
            return gender
        } catch (error) {
            throw error;
        }
    }
    
    async delete( updateGenderDto: UpdateGenderDto ): Promise<GenderEntity>{
        
        try {
            
            const DeleteGender = await prisma.gender.delete({
              
                where:{
               
                    id:updateGenderDto.id
                },
            }) 
           
            return DeleteGender
       
        } catch (error) {
          
            throw error
        }
    }
    async FindOne(updateGenderDto :UpdateGenderDto): Promise<GenderEntity>{
       
        try {
            
            const findO = await prisma.gender.findUniqueOrThrow({
                
                where: {
                
                    id: updateGenderDto.id,
                    
                },
                
            });
           
            return findO;
        
        } catch (error) {
           
            throw error
        }
    }
    async findAll(PaginationDto : PaginationDto): Promise<GenderEntity[]>{
        try {
            
            const findA = await prisma.game.findMany();
           
            return findA;
        
        } catch (error) {
           
            throw error
        }
    }
}