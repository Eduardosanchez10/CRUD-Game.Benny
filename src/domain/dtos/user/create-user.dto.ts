import e from "express";

export class CreateUserDto{

    constructor(
        public name: string,
        public email: string,
        public password: string,
    ){}

    static create( body: {[key:string]:any} ):[string?, CreateUserDto?]{

        const { name } = body;
        if( !name ) return ["Missing name", undefined];
        const {email} = body
        if (!email) return ["Missing email",undefined];
        const {password} = body
        if (!password) return ["Missing password",undefined];

        return [undefined, new CreateUserDto(name,email,password)];
    }

}