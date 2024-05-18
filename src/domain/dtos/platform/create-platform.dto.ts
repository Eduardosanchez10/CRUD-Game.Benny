export class CreatePlatformDto{

    constructor(
        public name: string,
    ){}

    static create( body: {[key:string]:any} ):[string?, CreatePlatformDto?]{

        const { name } = body;
        if( !name ) return ["Missing name", undefined];

        return [undefined, new CreatePlatformDto(name)];
    }

}