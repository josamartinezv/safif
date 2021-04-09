import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from 'src/app/auth/login/login.service';
import { Router } from '@angular/router';
import {VerbalService} from 'src/app/modules/verbal/verbal.service';
import { AccountService } from 'src/app/auth/account.service';
import { __values } from 'tslib';
import { from } from 'rxjs';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.styl']
})
export class AsideComponent implements OnInit {
 
  datosRol:string;
  opcionSeleccionado: string= '1'; // Iniciamos
  authorities: string[];
  admin= true;
  instructor= true;
  aprendiz=true;
  i : any;
  @Input()
  isActiveAside: boolean;
  
  

  constructor(
    private loginService: LoginService, private router: Router,
    private accountService: AccountService,
    private verbalService: VerbalService,
  ) {}

  ngOnInit() {
    this.getFullName();
    this.authorities= this.accountService.getAuthorities();
  }

  cerrarSesion(): void{
    this.loginService.logout();
    

    this.router.navigate(['./login']);

}
  getFullName(): string {
  return this.accountService.getFullName();
}

  capturar() {
    this.admin = true;
    this.aprendiz=true;
    this.instructor=true;
    this.datosRol=this.opcionSeleccionado;
  console.log(this.datosRol);
  if (this.datosRol == 'ROLE_INSTRUCTOR'){
    this.aprendiz= false;
    this.admin = false;

  }
  else if(this.datosRol == 'ROLE_APPRENTICE'){
    this.instructor= false;
    this.admin = false;

  }
}

download(): void{
  const fileName = `llamados_de_atencion.xlsx`
  this.verbalService.reportFile()
  .subscribe(res =>{
    this.manageExcelFile(res, fileName);

  });
}

manageExcelFile(response: any, fileName: string): void{
  const dataType = response.Type;
  const binaryData = [];
  binaryData.push(response);

  const filePath = window.URL.createObjectURL(new Blob(binaryData, {type: dataType}));
  const downloadLink = document.createElement('a');
  downloadLink.href = filePath;
  downloadLink.setAttribute('download' , fileName);
  document.body.appendChild(downloadLink);
  downloadLink.click();
}
}

