import { Component, OnInit } from '@angular/core';
import { IVerbal } from '../verbal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VerbalService } from '../verbal.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IProgramNumber } from '../../program-number/program-number';
import {ConfirmationService, MessageService} from 'primeng/api';
import { IDetailUsers } from '../../detail-user/detailUser';



@Component({
  selector: 'app-verbal-a-update',
  templateUrl: './verbal-a-update.component.html',
  styleUrls: ['./verbal-a-update.component.styl'],
  providers: [ConfirmationService, MessageService]
})
export class VerbalAUpdateComponent implements OnInit {

  verbalList: IVerbal;
  searchForm: FormGroup;
  verbalCalled: IVerbal;
  programNumber: IProgramNumber;
  detailUser: IDetailUsers;
  spinner :boolean;

  constructor(
    private formBuilder: FormBuilder,
    private verbalService: VerbalService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private confirmationService: ConfirmationService,
    //private confirmationService: ConfirmationService//
    private  messageService:MessageService
    ) {

      this.searchForm = this.formBuilder.group ({
        idVerbalCalled: '',
        aprentice: '',
        instructor: '',
        programNumber:'',
        dateCalled: '',
        situation: '',
        emailSena:'',
        email:'',
        typeVerbalCalled:'',
        phaseVerbalCalled:'',
        state:'',
        procedure:'',
        summary: ['', [Validators.required,
                       Validators.pattern('[0-9a-zñA-ZÑáéíóúÁÉÍÓÚ,;"". °|!@"#$%&()=?¿¡ :]*'),
                       Validators.maxLength(300),
                       Validators.minLength(5)]],

        impact: ['', [Validators.required,
                      Validators.pattern('[0-9a-zñA-ZÑáéíóúÁÉÍÓÚ,;"". °|!@"#$%&()=?¿¡: ]*'),
                      Validators.maxLength(300),
                      Validators.minLength(5)]],

        effect: ['', [Validators.required,
                      Validators.pattern('[0-9a-zñA-ZÑáéíóúÁÉÍÓÚ,;"". °|!@"#$%&()=?¿¡: ]*'),
                      Validators.maxLength(300),
                      Validators.minLength(5)]],

        commitment: ['', [Validators.required,
                          Validators.pattern('[0-9a-zñA-ZÑáéíóúÁÉÍÓÚ,;"". °|!@"#$%&()=?¿¡ :]*'),
                          Validators.maxLength(300),
                          Validators.minLength(5)]],
        recovery: ''
      })
    }

  ngOnInit(): void {

    const idVerbalCalled = this.activatedRoute.snapshot.paramMap.get('idVerbalCalled');
    console.warn('Id', idVerbalCalled);
    this.verbalService.getById(idVerbalCalled)
    .subscribe(res => {
      console.warn('Data ', res);
      this.loadForm(res);
      this.verbalList = res;
    });
  }

  private loadForm(verbalCalled: IVerbal ){
    this.searchForm.patchValue({
      idVerbalCalled: verbalCalled.idVerbalCalled,
      aprentice: verbalCalled.aprentice,
      instructor: verbalCalled.instructor,
      programNumber: verbalCalled.programNumber,
      dateCalled: verbalCalled.dateCalled,
      situation: verbalCalled.situation,
      emailSena: verbalCalled.aprentice.emailSena,
      email:verbalCalled.aprentice.emailSena,
      typeVerbalCalled: verbalCalled.typeVerbalCalled,
      phaseVerbalCalled: verbalCalled.phaseVerbalCalled,
      state: false,
      procedure: false,
      summary: verbalCalled.summary,
      impact: verbalCalled.impact,
      effect: verbalCalled.effect,
      commitment: verbalCalled.commitment,
      recovery: verbalCalled.recovery
    });
  }

   getMyVerbalCalled(): void {
    this.verbalService.getMyVerbalCalled(this.searchForm.value)
    .subscribe(res => {
      console.warn('update ', this.searchForm.value);
      console.warn('update OK', res);
      this.router.navigate(['./dashboard/verbal/verbal-a-list']);
    }, error => {
      console.warn('error ', error);
    });
  }


  confirm() {
    this.confirmationService.confirm({
      message: 'Desea atualizar el llamado de atencion?',
      accept: () => {
        this.spinner = true;
        this.getMyVerbalCalled();
        this.messageService.add({ key: 'myKey1', severity: 'success', summary: 'El llamado de atencion ha sido actualizado con exito', detail: '' }); 
      },
      reject: () => {
        this.spinner = true;
        console.log('rechazado')
      }
    });

  }


}


