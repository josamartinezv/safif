import { IProgram } from '../program/program';

export interface IProgramNumber {
    idProgramNumber?: number;
    number: string;
    program : IProgram;
}

export class ProgramNumber implements IProgramNumber{
    idProgramNumber?: number;
    number: string;
    program : IProgram;
}
