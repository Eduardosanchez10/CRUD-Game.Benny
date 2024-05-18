export class CreateGenderDto{

    constructor(
        public name: string,
    ){}

    static create( body: {[key:string]:any} ):[string?, CreateGenderDto?]{

        const { name } = body;
        if( !name ) return ["Missing name", undefined];

        return [undefined, new CreateGenderDto(name)];
    }

}