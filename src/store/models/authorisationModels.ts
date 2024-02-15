export class Authorisation {
   static fromApi(item: any){
        return new Authorisation(
            item.access_token,
            item.token_type,
            item.expires_in,
        )
   }
    constructor(
        public accessToken?: string,
        public tokenType?: string,
        public expiresIn?: number,
    ){

    }
}
