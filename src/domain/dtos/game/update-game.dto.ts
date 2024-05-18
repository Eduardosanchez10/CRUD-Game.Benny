export class UpdateGameDto{

    constructor(
        public id: number,
        public name: string,
        public launcher: Date,
        public price: number,
        public genderId: number,
        public userId:number,
    ){}

    static update( body: { [ key:string ]:any} ):[string?, UpdateGameDto?]{

        const { id, name, launcher, price, userId, genderId } = body;
        let newDate = launcher;

        if( !id  ) return ["id is required", undefined];
        if( isNaN( +id ) ) return ["Id must be a number", undefined];
        if( name ){
            if( name.length  < 2 ) return ["Name toot short"];
        }
        if( launcher ) {
            newDate = new Date( launcher )
            if( newDate.toString() === "Invalid Date" ) return["error date" , undefined]
        }
        
        if( isNaN( +price ) ) return [" must be a number the Price", undefined];
        if( isNaN( +userId ) ) return ["Id must be a number the User", undefined];
        if( isNaN( +genderId ) ) return ["Id must be a number the Gender", undefined];
        
       
        return [undefined , new UpdateGameDto( +id, name, newDate , +price, +genderId , +userId)];
    }

}