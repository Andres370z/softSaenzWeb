export class Users {
    static fromApi(item: any){
        return new Users (
            item.id,
            item.name,
            item.surname,
            item.telephone,
            item.identificationCard,
            item.email,
            item.longitud,
            item.latitud,
            item.active,
            item.idrol,
            item.idProyectsClients,
            item.created_at,
            item.updated_at
        )
    }
    constructor(
        public id: number,
        public name?: string,
        public surname?: string,
        public telephone?: number,
        public identificationCard?: number,
        public email?: string,
        public longitud?: string,
        public latitud?: string,
        public active?: number,
        public idrol?: number,
        public idProyectsClients?: number,
        public createdAt?:string,
        public updatedAt?:string
    ){}
}