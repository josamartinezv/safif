import { IDetailUsers } from '../detail-user/detailUser';
import { IRol } from '../rol/rol'

export interface IUsers {
    idUsers?: number;
    documentNumber: string;
    name: IDetailUsers;
    lastName: IDetailUsers;
    adrees: IDetailUsers;
    emailSena: string;
    email: string;
    phoneNumber: string;
    rols : IRol[];
    detailUser: IDetailUsers;
}

export class Users implements IUsers{
    idUsers?: number;
    documentNumber: string;
    name: IDetailUsers;
    lastName: IDetailUsers;
    adrees: IDetailUsers;
    emailSena: string;
    email: string;
    phoneNumber: string;
    rols : IRol[];
    detailUser: IDetailUsers;

}