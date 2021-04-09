import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VerbalService } from '../verbal.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IVerbal } from '../verbal';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-verbal-update',
  templateUrl: './verbal-update.component.html',
  styleUrls: ['./verbal-update.component.styl'],
  providers: [ConfirmationService, MessageService]
})
export class VerbalUpdateComponent implements OnInit {


  verbalList: IVerbal;
  spinner: boolean;
  

  searchForm: FormGroup;

  constructor(
    private activateRoute: ActivatedRoute,
    private verbalService: VerbalService,
    private fb: FormBuilder,
    private router: Router,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
    ) { 

      this.searchForm = this.fb.group({

        idVerbalCalled: '',
        instructor:'',
        aprentice: '',
        programNumber:'',
        dateCalled: '',
        typeVerbalCalled:'',
        phaseVerbalCalled:'',
        state:'',
        procedure: '',
        situation: '',
        summary: '',
        impact: '',
        effect: '',
        commitment: '',
        recovery:['', [Validators.required,  
                      Validators.pattern('[a-zA-Z.,éáíóúñ 0-9 °|!"#$%&():=?¡¿]*'),
                      Validators.maxLength(250),
                      Validators.minLength(5)]],

      })

    }

  ngOnInit(): void {

    let idVerbalCalled = this.activateRoute.snapshot.paramMap.get('idVerbalCalled');
    console.warn('ID', idVerbalCalled);
    this.verbalService.getById(idVerbalCalled)
    .subscribe(res =>{
      console.warn('GET DATA', res);
      this.loadForm(res);
      this.verbalList = res;
    },error => {
      console.warn('Error' , error);
    })

  }


  private loadForm(verbalCalled: IVerbal){
    this.searchForm.patchValue({
      idVerbalCalled: verbalCalled.idVerbalCalled,
      instructor: verbalCalled.instructor,
      aprentice: verbalCalled.aprentice,
      programNumber:verbalCalled.programNumber,
      dateCalled: verbalCalled.dateCalled,
      typeVerbalCalled:verbalCalled.typeVerbalCalled,
      phaseVerbalCalled: verbalCalled.phaseVerbalCalled,
      state: 'false',
      procedure: 'false',
      situation: verbalCalled.situation,
      summary: verbalCalled.summary,
      impact: verbalCalled.impact,
      effect: verbalCalled.effect,
      commitment: verbalCalled.commitment,
      recovery:verbalCalled.recovery,
    })
  }


  update(){
    this.verbalService.getMyVerbalCalled(this.searchForm.value)
    .subscribe(res => {
      console.warn('Update ok', res);
      this.router.navigate(['./dashboard/verbal/verbal-view']);
    }, err => {
        console.warn('Error' , err);
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
          this.messageService.add({ key: 'myKey1', severity: 'success', summary: 'El llamado de atención ha sido actualizado con exito', detail: '' });       
      },
      reject: () => {
        this.spinner = false;
        console.log('CANCELAR PEDIDO');

      }
    });

  }

}
