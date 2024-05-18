import e from "express";

export class CreateGameDto{

    constructor(
        public name: string,
        public launcher: Date,
        public price: number,
        public genderId:number,
        public userId:number,
    ){}

    static create( body: { [ key:string ]:any } ) : [ string? , CreateGameDto ? ] {

        const {  name } = body;
        if( !name ) return ["missing name",undefined]
        const { launcher } = body;
        if(!launcher) return["missing launcher" , undefined];
        const { price }= body;
        if( isNaN( +price ) ) return['price must be a number',undefined];
        const { userId } = body;
        if( isNaN( +userId ) )  return['userId must be a number',undefined];
        const { genderId } = body;
        if( isNaN( +genderId ) ) return['genderId must be a number',undefined]
       
        return [undefined , new CreateGameDto( name,launcher , +price,+genderId ,+ userId)];
    }

}