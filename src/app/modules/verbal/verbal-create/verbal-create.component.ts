import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { VerbalService } from '../verbal.service';
import { IVerbal } from '../verbal';
import { IUsers } from '../../users/users';
import { UsersService } from '../../users/users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UsershasprogramService } from '../../usershasprogram/usershasprogram.service';
import { IUsersProgram } from '../../usershasprogram/usershasprogram';
import { ConfirmationService } from 'primeng/api';
import { AccountService } from 'src/app/auth/account.service';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-verbal-create',
  templateUrl: './verbal-create.component.html',
  styleUrls: ['./verbal-create.component.styl'],
  providers: [ConfirmationService, MessageService]
})
export class VerbalCreateComponent implements OnInit {

  verbal: IVerbal;
  instructor: IUsers;
  aprendiz: IUsersProgram;
  spinner: boolean;
  //anuncio: boolean;

  searchForm = this.fb.group({
    instructor: this.accountService.getIdUsers(),
    situation: ['', [Validators.required,
                     Validators.pattern('[0-9a-zñA-ZÑáéíóúÁÉÍÓÚ,;"". °|!@"#$%&()=?¿¡: ]*'),
                      Validators.maxLength(300),
                      Validators.minLength(5)]],
    typeVerbalCalled: ['', Validators.required],
    phaseVerbalCalled: ['', Validators.required]
  });

  constructor(

    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private usersService: UsersService,
    private verbalService: VerbalService,
    private usershasprogramService: UsershasprogramService,
    private confirmationService: ConfirmationService,
    private accountService: AccountService,
    private messageService: MessageService

  ) { }

  ngOnInit(): void {

    let idUser = this.activatedRoute.snapshot.paramMap.get('idUser');
    this.searchInstructor();
    console.warn('Id', idUser);
    this.usershasprogramService.getById(idUser)
      .subscribe(res => {
        console.warn('datos traidos', res);
        this.aprendiz = res;
      });
  }



  /**
   * Controlador para busqueda de instructor
   */
  searchInstructor(): void {
    console.warn('Documento...', this.searchForm.value.documentInstructor);
    this.usersService.getById(this.accountService.getIdUsers())
      .subscribe(res => {
        console.warn("res", res);
        this.instructor = res;
      })
  };

  /**
   * Visualizar el tipo de llamado de atencion en consola
   */

  searchTypeCalled(): void {
    console.warn('Trimestre', this.searchForm.value.typeVerbalCalled);
  }

  phaseVerbalCalled(): void {
    console.warn('Fases', this.searchForm.value.phaseVerbalCalled);
  }
  /**
   * Controlador para crear llamado de atencion
   */

  SaveVerbal(): void {
    console.warn('Datos', this.searchForm.value.typeVerbalCalled,
      this.searchForm.value.situation);
      this.verbal = {
      typeVerbalCalled: this.searchForm.value.typeVerbalCalled,
      situation: this.searchForm.value.situation,
      instructor: this.instructor,
      aprentice: this.aprendiz.users,
      programNumber: this.aprendiz.programNumber,
      state: true,
      procedure: true,
      phaseVerbalCalled: this.searchForm.value.phaseVerbalCalled
    };
    console.warn('Llamado de atencion', this.verbal)

    this.verbalService.saveVerbal(this.verbal)
      .subscribe(res => {
        console.warn('res', res);
        this.router.navigate(['./dashboard/verbal/verbal-list']);
      });
  }

  confirm() {
    this.confirmationService.confirm({
      message: 'Desea continuar?',
      accept: () => {                
        this.spinner = true;     
        // Actual logic to perform a confirmation
        this.SaveVerbal();
        //this.anuncio=true;
        this.messageService.add({ key: 'myKey1', severity: 'success', summary: 'Llamado de atención creado correctamente', detail: '' });       
      },
      reject: () => {        
        this.spinner = false;      
        console.log('CANCELAR PEDIDO');  
        
     }

      
    });

  }
}
