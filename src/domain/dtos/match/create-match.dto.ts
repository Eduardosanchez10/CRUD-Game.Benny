import e from "express";

export class CreateMatchDto{

    constructor(
        public init: Date,
        public duration: number,
        public gameId:number,
        public userId:number,
    ){}

    static create( body: {[key:string]:any} ):[string?, CreateMatchDto?]{

        const { init,duration ,userId, gameId } = body;
        let newDate = init;
       
        if( init ) {
            newDate = new Date( init )
            if( newDate.toString() === "Invalid Date" ) return["error date" , undefined]
        }
        if( isNaN( +duration ) ) return [" must be a number the Price", undefined];
        if( isNaN( +userId ) ) return ["Id must be a number the User", undefined];
        if( isNaN( +gameId ) ) return ["Id must be a number the Gender", undefined];
        
        return [undefined, new CreateMatchDto(init,+duration,+userId,+gameId)];
    }

}