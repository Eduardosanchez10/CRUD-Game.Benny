export class UpdateUserDto{

    constructor(
        public id: number,
        public name: string,
        public email: string,
        public password: string,
    ){}

    static update( body: { [ key:string ]:any} ):[string?, UpdateUserDto?]{

        const { id, name } = body;
        if( isNaN( +id ) ) return ["Id must be a number", undefined];
        if( name ){
            if( name.length  < 2 ) return ["Name toot short"];
        }
        const { email } = body;
        if(!email) return["error email"]
        const { password } = body;
        if(!password) return["error password"]
       
        return [undefined , new UpdateUserDto( +id, name,email,password)];
    }

}