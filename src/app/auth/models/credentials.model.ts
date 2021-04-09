export interface ICredentials{
    documentnumber?: string;
    password?: string;
    rememberMe?: boolean;
}

export class Credentials implements ICredentials{
    constructor(
        public documentnumber?: string,
        public password?: string,
        public rememberMe?: boolean
    ){}
}