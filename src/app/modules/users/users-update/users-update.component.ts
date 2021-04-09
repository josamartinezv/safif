import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { AccountService } from 'src/app/auth/account.service';
import { LoginService } from 'src/app/auth/login/login.service';
import { IUsers } from '../users';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users-update',
  templateUrl: './users-update.component.html',
  styleUrls: ['./users-update.component.styl'],
  providers: [ConfirmationService, MessageService]

})
export class UsersUpdateComponent implements OnInit {

  users: IUsers;
  spinner: Boolean;

  searchForm = this.fb.group({
    idUsers: '',
    name: ['', Validators.required],
    lastName:  ['', Validators.required],
    documentNumber: [''],
    email: [''],
    emailSena: [''],
    rols: [''],
    detailUser: '',
  });

  rols: string[];

  constructor(private fb: FormBuilder,
    private router: Router,
    private usersService: UsersService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private activeRoute: ActivatedRoute,
    private accountService: AccountService
    ) { }

  ngOnInit(): void {
    const idUser = this.activeRoute.snapshot.paramMap.get('idUsers');

    this.usersService.getById(idUser).subscribe( res => {
      this.users = res;

      this.loadForm(res);
    });

    this.usersService.rols().subscribe( data => {
      this.rols = data;

    });


  }


  private loadForm(users: IUsers){
    this.searchForm.patchValue({
      idUsers: this.users.idUsers,
      name: this.users.detailUser.name,
      lastName:  this.users.detailUser.lastName,
      documentNumber: this.users.documentNumber,
      email:  this.users.email,
      emailSena: this.users.emailSena,
      rols: this.users.rols,
    }
    );
  }

  update(): void{
    this.searchForm.value.detailUser = this.users.detailUser;
    this.usersService.update(this.searchForm.value).subscribe(res => {
      this.router.navigate(['./dashboard/users/users-list']);
    });
  }

  confirm() {
    this.confirmationService.confirm({
      message: 'Desea continuar?',
      accept: () => {                
        this.spinner = true;     
        // Actual logic to perform a confirmation
        this.update();
        //this.anuncio=true;
        //this.messageService.add({ key: 'myKey1', severity: 'success', summary: 'Llamado de atencion creado correctamente', detail: '' });       
      },
      reject: () => {        
        this.spinner = false;      
        console.log('CANCELAR PEDIDO');  
        
     }

      
    });

  }

  

}
