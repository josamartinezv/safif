import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IUsers } from '../users';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users-view',
  templateUrl: './users-view.component.html',
  styleUrls: ['./users-view.component.styl']
})
export class UsersViewComponent implements OnInit {

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
    private usersService: UsersService,
    private activeRoute: ActivatedRoute,
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

}