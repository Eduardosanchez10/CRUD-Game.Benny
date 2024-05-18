export class MatchEntity{
    constructor(
        public id: number,
        public init: Date,
        public duration: number,
        public gameId:number,
        public userId:number,
    ){}
}