import { promises } from "readline";
import { prisma } from "../../data/postgresql/database";
import { CreateUserDto } from "../../domain/dtos/user/create-user.dto";
import { UserEntity } from "../../domain/entities/user.entity";
import { UpdateUserDto } from "../../domain/dtos/user/update-user.dto";
import { PaginationDto } from "../../domain/dtos/game/pagination_dto";



export class UserService{

    async create( createUserDto: CreateUserDto): Promise<UserEntity>{
        try {
            const newUser = await prisma.user.create( {
                data: {
                    name: createUserDto.name,
                    email: createUserDto.email,
                    password: createUserDto.password,
                }
            } );
            // if( !newPlatform ) throw Error;
    
            return newUser;
        } catch (error) {
            throw error;
        }
    }
    
    async update( UpdateUserDto: UpdateUserDto): Promise<UserEntity>{

        try {
            const platform = await prisma.user.update({
                where: {
                    id: UpdateUserDto.id,
                },
                data: {
                    name: UpdateUserDto.name,
                    email: UpdateUserDto.email,
                    password: UpdateUserDto.password,
                }
            })
            return platform
        } catch (error) {
            throw error;
        }
    }
    
    async delete( updateUserDto: UpdateUserDto ): Promise<UserEntity>{
        
        try {
            
            const DeleteUser= await prisma.user.delete({
              
                where:{
               
                    id: updateUserDto.id
                },
            }) 
           
            return DeleteUser
       
        } catch (error) {
          
            throw error
        }
    }
    async FindOne( updateUserDto: UpdateUserDto ): Promise<UserEntity>{
       
        try {
            
            const findO = await prisma.user.findUniqueOrThrow({
                
                where: {
                
                    id: updateUserDto.id,
                    
                },
                
            });
           
            return findO;
        
        } catch (error) {
           
            throw error
        }
    }
    async findAll(PaginationDto : PaginationDto): Promise<UserEntity[]>{
        try {
            
            const findA = await prisma.user.findMany();
           
            return  findA;
        
        } catch (error) {
           
            throw error
        }
    }}