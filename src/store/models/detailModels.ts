export class Detail {
    static fromApi(item: any){
        return new Detail (
            item.id,
            item.color,
            item.title,
            item.description,
            item.imgLogo,
            item.active,
            item.api_token,
            item.idProyectsClients,
            item.created_at,
            item.updated_at
        )
    }
    constructor(
        public id:number,
        public color?: string,
        public title?: string,
        public description?: string,
        public imgLogo?: string,
        public active?: number,
        public apiToken?: string,
        public idProyectsClients?: number,
        public createdAt?:string,
        public updatedAt?:string
    ){}
}