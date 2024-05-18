export class GameEntity{
    constructor(
        public id: number,
        public name: string,
        public launcher: Date,
        public price: number,
        public genderId:number,
        public userId:number,
    ){}
}