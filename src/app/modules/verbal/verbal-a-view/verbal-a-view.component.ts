import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IProgramNumber } from '../../program-number/program-number';
import { IVerbal } from '../verbal';
import { VerbalService } from '../verbal.service';
import { IDetailUsers } from '../../detail-user/detailUser';

@Component({
  selector: 'app-verbal-a-view',
  templateUrl: './verbal-a-view.component.html',
  styleUrls: ['./verbal-a-view.component.styl']
})
export class VerbalAViewComponent implements OnInit {

  verbalList: IVerbal;
  searchForm: FormGroup;
  verbalCalled: IVerbal;
  programNumber: IProgramNumber;
  detailUsers : IDetailUsers; 

  constructor(
    private formBuilder: FormBuilder,
    private verbalService: VerbalService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  
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
      summary: '',
      impact: '',
      effect: '',
      commitment: '',
      recovery: ''
    })
  }

  ngOnInit(): void {

    const idVerbalCalled = this.activatedRoute.snapshot.paramMap.get('idVerbalCalled');
    console.warn('Id', idVerbalCalled);
    this.verbalService.getById(idVerbalCalled).subscribe(res => {
      console.warn('Data', res);
      this.loadForm(res);
      this.verbalList = res;
    });
  }

  private loadForm(verbalCalled: IVerbal) {
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

}
