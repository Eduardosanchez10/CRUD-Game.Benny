export class UpdateGenderDto{

    constructor(
        public id: number,
        public name: string,
    ){}

    static update( body: {[key:string]:any} ):[string?, UpdateGenderDto?]{

        const { id, name } = body;
        if( isNaN( +id ) ) return ["Id must be a number", undefined];
        if( name ){
            if( name.length  < 2 ) return ["Name toot short"];
        }

        return [undefined, new UpdateGenderDto( +id, name)];
    }

}