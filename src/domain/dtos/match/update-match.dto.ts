export class UpdateMatchDto{

    constructor(
        public id:  number,
        public init: Date,
        public duration: number,
        public gameId:number,
        public userId:number,
    ){}

    static update( body: { [ key:string ]:any} ):[string?, UpdateMatchDto?]{

        const { id, init, duration, userId, gameId } = body;
        let newDate = init;

        if( !id  ) return ["id is required", undefined];
        if( isNaN( +id ) ) return ["Id must be a number", undefined];
       
        if( init ) {
            newDate = new Date( init )
            if( newDate.toString() === "Invalid Date" ) return["error date" , undefined]
        }
        
        if( isNaN( +duration ) ) return [" must be a number the Price", undefined];
        if( isNaN( +userId ) ) return ["Id must be a number the User", undefined];
        if( isNaN( +gameId ) ) return ["Id must be a number the Gender", undefined];
        
       

        return [undefined, new UpdateMatchDto(+id,init,+duration,+userId,+gameId)];
    }

}