import { IProgramNumber } from '../program-number/program-number';
import { IUsers } from '../users/users';

export interface IVerbal {
    idVerbalCalled?: number;
    dateCalled?: Date;
    typeVerbalCalled: string;
    state?: Boolean;
    procedure?: Boolean;
    situation: string;
    summary?: string;
    impact?: string;
    effect?: string;
    commitment?: string;
    recovery?: string;
    programNumber:IProgramNumber;
    instructor: IUsers;
    aprentice: IUsers;
    phaseVerbalCalled: string;
}

export class Verbal implements IVerbal{

    idVerbalCalled?: number;
    datecalled?: Date;
    typeVerbalCalled: string;
    state?: Boolean;
    procedure?: Boolean;
    situation: string;
    summary?: string;
    impact?: string;
    effect?: string;
    commitment?: string;
    recovery?: string;
    programNumber:IProgramNumber;
    instructor: IUsers;
    aprentice: IUsers;
    phaseVerbalCalled: string;
}