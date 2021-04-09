export class Account{
    username: string;
    userfistName: string;
    userlastName: string;
    fullName: string;
    IDetailUsers: string;
    
      constructor(
          public activated: boolean,
          public authorities: string[],
          public email: string,
          public name: string,
          public lastName: string,
          public fistName: string,
          public login: string,
          public idUsers: string,
          public documentNumber: string
      ){}
      
  }