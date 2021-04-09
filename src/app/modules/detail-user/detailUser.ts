export interface IDetailUsers {
    idDetailUser?: number;
    name: string;
    lastName: string;
    address: string;
    phoneNumber: string;
}

export class IDetailUsers implements IDetailUsers{
    idDetailUser?: number;
    name: string;
    lastName: string;
    address: string;
    phoneNumber: string;

}
