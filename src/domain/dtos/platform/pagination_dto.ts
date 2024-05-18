export class PaginationDto{
    constructor(
         public offset: number,
         public limit :number
    ){}

    static create( body: { [ key:string ]:any } ) : [ string? , PaginationDto? ] {
        const { offset = 0 ,limit = 10 } = body;
        if( isNaN( +offset ) )  return['userId must be a number',undefined];
        if( isNaN( +limit ) ) return['limit must be a number',undefined]
       
        return [undefined , new PaginationDto( +offset,+limit)];
    }

}