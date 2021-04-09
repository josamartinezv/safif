import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { LoginService } from './login.service';
import { MessageService } from 'primeng/api';
import { IUsers } from 'src/app/modules/users/users';
import { UsersService } from 'src/app/modules/users/users.service';
import { IDetailUsers } from 'src/app/modules/detail-user/detailUser';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.styl'],
  providers: [MessageService]
})

export class LoginComponent implements OnInit {

  hide = true; //Se usa para visualizar las contraseñas
  noUser = false; //Permite arrojar un mensaje al que se digite mal el usuario o la contraseña
  users: IUsers;
  detailUsers: IDetailUsers
  spinner: boolean;
  loginForm = this.fb.group({
    documentnumber: ['', [Validators.required]],
    password: ['', Validators.required],
    rememberMe: false

  });

  searchForm = this.fb.group({
    documentNumber: ['', Validators.required],
    password: ['', Validators.required],
    name: ['', Validators.required],
    lastName: ['', Validators.required],
    //email: ['/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/', Validators.required]
    //emailSena: ['/^[a-zA-Z0-9._-]+@misena.edu.co', Validators.required],
    email: ['',  Validators.required],
    emailSena: ['',  Validators.required],
    phoneNumber: ['', Validators.required],
    address: ['', Validators.required],
  });
  constructor(private fb: FormBuilder,
    private router: Router,
    private loginService: LoginService,
    private usersService: UsersService,
    private messageService: MessageService) { }
    

  ngOnInit(): void {
  }

  login(): void {
    console.warn('DATOS LOGIN', this.loginForm.value);
    this.loginService.login(this.loginForm.value)
      .subscribe((res: any) => {
        this.spinner = true;
        console.warn('ok', res);
        //this.noUser = false;
      }, error => {
        this.spinner = false;
        //this.noUser = true;
        console.warn('Error', error);
        this.messageService.add({ key: 'myKey1', severity: 'warn', summary: 'Incorrecto', detail: 'Usuario o contraseña incorrecta'});
      });
  }

  create(): void {
    console.warn('DATOS formulario', this.searchForm.value);
   
    this.usersService.saveUser(this.searchForm.value)
    .subscribe(res => {
      console.warn('res', res);
      //this.spinner = true;
      this.messageService.add({ key: 'myKey2', severity: 'success', summary: 'El usuario ha sido creado exitosamente', detail: 'Revisa tu correo institucional para mayor información.'});

      //this.messageService.add({ key: 'myKey1', severity: 'success', summary: 'Usuario creado con éxito', detail: 'Revisa tus correos para mas información.'});
      //this.router.navigate(['./dashboard/home-dashboard']);
      
    }, error => {
      //this.spinner = false;
      console.warn("Error", error)
    });
  }

}
