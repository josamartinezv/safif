import { IUsers } from '../users/users';
import { IProgramNumber } from '../program-number/program-number';

export interface IUsersProgram {
    idUser: IUsers;
    documentNumber: IUsers;
    number?: IProgramNumber;
    fullName: IUsers;
    emailSena: IUsers;
    phoneNumber: IUsers;
    users : IUsers;
    programNumber :IProgramNumber;
}

export class UsersProgram implements IUsersProgram{
    idUser: IUsers;
    documentNumber: IUsers;
    number?: IProgramNumber;
    fullName: IUsers;
    emailSena: IUsers;
    phoneNumber: IUsers;
    users : IUsers;
    programNumber :IProgramNumber;
}
